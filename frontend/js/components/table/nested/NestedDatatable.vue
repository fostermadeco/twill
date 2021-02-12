<template>
  <div class="nested-datatable">
    <!-- Actual table content -->
    <!--Todo: refactor to remove table-->
    <div class="container">
      <div class="datatable__table">
        <a17-table>
          <thead>
          <a17-tablehead :columns="visibleColumns" ref="thead"/>
          </thead>
        </a17-table>
      </div>
    </div>

    <div class="container">
      <a17-button variant="validate" @click="saveNestedList" @v-if="draggable"><span>Save List</span></a17-button>
    </div>

    <div class="container">
      <div class="nested-datatable__table">
        <a17-nested-list
                :nested="true"
                :maxDepth="maxDepth"
                :draggable="draggable"
                :saveOnChange="false"/>
      </div>
    </div>
  </div>
</template>

<script>
  import { DatatableMixin, DraggableMixin, NestedDraggableMixin } from '@/mixins/index'
  import a17Table from './../Table.vue'
  import a17Tablehead from './../TableHead.vue'
  import { DATATABLE } from '@/store/mutations/index'
  import NestedList from './NestedList'

  export default {
    name: 'A17NestedDatatable',
    mixins: [DatatableMixin, DraggableMixin, NestedDraggableMixin],
    data: function () {
      return {
        items: this.$store.state.datatable.data
      }
    },
    components: {
      'a17-table': a17Table,
      'a17-tablehead': a17Tablehead,
      'a17-nested-list': NestedList
    },
    beforeMount: function () {
      function findBulkColumn (column) {
        return column.name === 'bulk'
      }

      function findDraggableColumn (column) {
        return column.name === 'draggable'
      }

      // bulk edit column
      if (this.bulkeditable) {
        if (!this.columns.find(findBulkColumn)) {
          this.$store.commit(DATATABLE.ADD_DATATABLE_COLUMN, {
            index: 0,
            data: {
              name: 'bulk',
              label: '',
              visible: true,
              optional: false,
              sortable: false
            }
          })
        }
      }

      if (this.draggable) {
        if (!this.columns.find(findDraggableColumn)) {
          this.$store.commit(DATATABLE.ADD_DATATABLE_COLUMN, {
            index: 0,
            data: {
              name: 'draggable',
              label: '',
              visible: true,
              optional: false,
              sortable: false
            }
          })
        }
      }
    },
    methods: {
      saveNestedList: function () {
        // We increment the tracker because we're not worried about saving while a item is being moved,
        // but we need the saving method to think something has been moved
        this.$store.commit(DATATABLE.UPDATE_DATATABLE_TRACKER, 1)
        // Passing true to saveNestedList basically makes it post the whole nested list to the server.
        // Technically we may want to pass in the value of this.hasChangedParents, but that may be
        // false and would just trigger an error. The this.isChangingParents value is just to ensure
        // that a child has moved to/from a parent to/from somewhere else before the list is saved.
        // We could also set this.nested = true to get this to work, but we need to set that when
        // the component is initialized because it is a property.
        this.saveNewTree(true)
      }
    }
  }
</script>

<style lang="scss" scoped>

  .nested-datatable__table {
    position: relative;
    width: 100%;
  }
</style>
