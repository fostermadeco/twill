(function(t){function e(e){for(var a,o,i=e[0],l=e[1],c=e[2],d=0,b=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&b.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(b.length)b.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={"main-listing":0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;s.push([3,"chunk-vendors","chunk-common"]),n()})({"1e2e":function(t,e,n){"use strict";var a=n("dfb7"),r=n.n(a);r.a},"2d8e":function(t,e,n){},"2e82":function(t,e,n){},3:function(t,e,n){t.exports=n("6500")},"436c":function(t,e,n){},"43fc":function(t,e,n){"use strict";var a=n("2d8e"),r=n.n(a);r.a},"5f13":function(t,e,n){"use strict";var a=n("436c"),r=n.n(a);r.a},6500:function(t,e,n){"use strict";n.r(e);var a=n("a026"),r=n("1539"),s=n("0429"),o=n("f1af"),i=n("b171"),l=(n("878a"),n("16f9")),c=n("2e01"),u=n("54d3"),d=n("2f62"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"sticky",rawName:"v-sticky"}],staticClass:"datatable",attrs:{"data-sticky-id":"thead","data-sticky-offset":"0"}},[n("div",{staticClass:"datatable__sticky",attrs:{"data-sticky-top":"thead"}},[n("div",{staticClass:"datatable__stickyHead",attrs:{"data-sticky-target":"thead"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"datatable__stickyInner"},[n("div",{staticClass:"datatable__setup"},[t.hideableColumns.length?n("a17-dropdown",{ref:"setupDropdown",staticClass:"datatable__setupDropdown",attrs:{position:"bottom-right",title:t.$trans("listing.columns.show"),clickable:!0,offset:-10}},[n("button",{staticClass:"datatable__setupButton",on:{click:function(e){return t.$refs.setupDropdown.toggle()}}},[n("span",{directives:[{name:"svg",rawName:"v-svg"}],attrs:{symbol:"preferences"}})]),n("div",{attrs:{slot:"dropdown__content"},slot:"dropdown__content"},[n("a17-checkboxgroup",{attrs:{name:"visibleColumns",options:t.checkboxesColumns,selected:t.visibleColumnsNames,min:2},on:{change:t.updateActiveColumns}})],1)]):t._e()],1),n("div",{staticClass:"datatable__stickyTable"},[n("a17-table",{attrs:{columnsWidth:t.columnsWidth,xScroll:t.xScroll},on:{scroll:t.updateScroll}},[n("thead",[n("a17-tablehead",{attrs:{columns:t.visibleColumns},on:{sortColumn:t.updateSort}})],1)])],1)])])])]),n("div",{staticClass:"container"},[n("div",{staticClass:"datatable__table",class:t.isEmptyDatable},[n("a17-table",{attrs:{xScroll:t.xScroll},on:{scroll:t.updateScroll}},[n("thead",[n("a17-tablehead",{ref:"thead",attrs:{columns:t.visibleColumns}})],1),t.draggable?[n("draggable",{staticClass:"datatable__drag",attrs:{tag:"tbody",options:t.dragOptions},model:{value:t.rows,callback:function(e){t.rows=e},expression:"rows"}},[t._l(t.rows,(function(e,a){return[n("a17-tablerow",{key:e.id,attrs:{row:e,index:a,columns:t.visibleColumns}})]}))],2)]:n("tbody",[t._l(t.rows,(function(e,a){return[n("a17-tablerow",{key:e.id,attrs:{row:e,index:a,columns:t.visibleColumns}})]}))],2)],2),t.rows.length<=0?[n("div",{staticClass:"datatable__empty"},[n("h4",[t._v(t._s(t.emptyMessage))])])]:t._e(),t.maxPage>1||t.initialMaxPage>t.maxPage&&!t.isEmpty?n("a17-paginate",{attrs:{max:t.maxPage,value:t.page,offset:t.offset,availableOffsets:[t.initialOffset,3*t.initialOffset,6*t.initialOffset]},on:{changePage:t.updatePage,changeOffset:t.updateOffset}}):t._e()],2)]),t.loading?n("a17-spinner",[t._v("Loading…")]):t._e()],1)},f=[],p=n("1980"),h=n.n(p),m=n("b047"),_=n.n(m),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table__scroller",on:{scroll:t.updateScroll}},[n("table",{staticClass:"table",class:{"table--sized":t.columnsWidth.length}},[t.columnsWidth.length?n("colgroup",t._l(t.columnsWidth,(function(e,a){return n("col",{key:a,style:t.colWidths[a]})})),0):t._e(),t._t("default")],2)])},v=[],O={name:"A17Table",props:{xScroll:{type:Number,default:1},columnsWidth:{type:Array,default:function(){return[]}}},data:function(){return{currentScroll:this.xScroll}},computed:{colWidths:function(){return this.columnsWidth.map((function(t){return{width:t?t+"px":""}}))}},watch:{xScroll:function(t){this.currentScroll!==t&&(this.currentScroll=t,this.$el.scrollLeft=t)}},methods:{updateScroll:function(){var t=this.$el.scrollLeft;this.currentScroll!==t&&(this.currentScroll=t,this.$emit("scroll",t))}}},y=O,w=(n("9db0"),n("2877")),D=Object(w["a"])(y,g,v,!1,null,"87d7c0f6",null),A=D.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",{staticClass:"tablehead"},[t._l(t.columns,(function(e){return n("td",{key:e.name,staticClass:"tablehead__cell f--small",class:t.cellClasses(e),on:{click:function(n){return t.sortColumn(e)}}},[t.isDisplayedColumn(e)?n("span",[t._v(t._s(e.label)+" "),n("span",{staticClass:"tablehead__arrow"},[t._v("↓")])]):t._e(),"bulk"===e.name?n("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.toggleBulkSelect()}}},[n("span",[n("a17-checkbox",{class:{"checkbox--minus":t.checkboxMinus},attrs:{name:"bulkAll",value:1,initialValue:t.bulkValue}})],1)]):t._e()])})),n("td",{staticClass:"tablehead__spacer"})],2)},k=[];function E(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function T(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?E(Object(n),!0).forEach((function(e){j(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function j(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var C={name:"A17Tablehead",props:{sortable:{type:Boolean,default:!0},columns:{type:Array,default:function(){return[]}}},data:function(){return{currentSort:"name",currentDirection:"asc"}},computed:T(T({bulkValue:function(){return this.bulkIds.length?1:0},checkboxMinus:function(){return this.bulkIds.length>0&&this.bulkIds.length!==this.dataIds.length}},Object(d["c"])({bulkIds:function(t){return t.datatable.bulk},sortKey:function(t){return t.datatable.sortKey},sortDir:function(t){return t.datatable.sortDir}})),Object(d["b"])(["dataIds"])),methods:{cellClasses:function(t){return["featured"===t.name||"published"===t.name?"tablehead__cell--icon":"","thumbnail"===t.name?"tablehead__cell--thumb":"","draggable"===t.name?"tablehead__cell--draggable":"","nested"===t.name?"tablehead__cell--nested":"","bulk"===t.name?"tablehead__cell--bulk":"",t.sortable&&this.sortable?"tablehead__cell--sortable":"",t.name===this.sortKey?"tablehead__cell--sorted":"",t.name===this.sortKey&&this.sortDir?"tablehead__cell--sorted".concat(this.sortDir):""]},isDisplayedColumn:function(t){return"draggable"!==t.name&&"featured"!==t.name&&"nested"!==t.name&&"bulk"!==t.name&&"published"!==t.name&&"thumbnail"!==t.name},sortColumn:function(t){t.sortable&&this.sortable&&this.$emit("sortColumn",t)},toggleBulkSelect:function(){var t=this.bulkIds.length?[]:this.dataIds;this.$store.commit(s["e"].REPLACE_DATATABLE_BULK,t)}}},S=C,$=(n("f06f"),Object(w["a"])(S,P,k,!1,null,"812b9408",null)),L=$.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",{staticClass:"tablerow"},[t._l(t.columns,(function(e){return n("td",{key:e.name,staticClass:"tablecell",class:t.cellClasses(e,"tablecell"),style:t.nestedStyle(e)},[t.isSpecificColumn(e)?[n(t.currentComponent(e.name),t._b({tag:"component",on:{update:t.tableCellUpdate,editInPlace:t.editInPlace}},"component",t.currentComponentProps(e),!1))]:n("a17-table-cell-generic",t._b({on:{editInPlace:t.editInPlace,update:t.tableCellUpdate}},"a17-table-cell-generic",t.currentComponentProps(e),!1))],2)})),n("td",{staticClass:"tablecell tablecell--spacer"}),n("td",{staticClass:"tablecell tablecell--sticky"},[n("a17-table-cell-actions",t._b({on:{editInPlace:t.editInPlace,update:t.tableCellUpdate,restoreRow:t.restoreRow,destroyRow:t.destroyRow,deleteRow:t.deleteRow,duplicateRow:t.duplicateRow}},"a17-table-cell-actions",t.currentComponentProps(),!1))],1)],2)},U=[],I=n("98d2"),B=n("3417");function R(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?R(Object(n),!0).forEach((function(e){F(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function F(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var N={name:"A17Tablerow",mixins:[B["b"]],components:M({},I["d"]),props:{draggable:{type:Boolean,default:!1},nestedDepth:{type:Number,default:0},rowType:{type:String,default:""}},computed:{nestedOffset:function(){return this.columns.find((function(t){return"draggable"===t.name}))?10:0}},methods:{nestedStyle:function(t){return this.columns.find((function(t){return"nested"===t.name}))&&"draggable"===t.name?{"webkit-transform":"translateX(-"+80*this.nestedDepth+"px)",transform:"translateX(-"+80*this.nestedDepth+"px)"}:""}}},W=N,K=(n("b46c"),Object(w["a"])(W,x,U,!1,null,"6521449c",null)),G=K.exports,z=n("55d2"),V=n("64e5");function Y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function H(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Y(Object(n),!0).forEach((function(e){J(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function J(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var X={name:"A17Datatable",components:{"a17-table":A,"a17-tablehead":L,"a17-tablerow":G,"a17-paginate":z["a"],"a17-spinner":V["a"],draggable:h.a},mixins:[B["a"],B["c"]],data:function(){return{handle:".tablecell__handle",reorderable:!this.draggable,xScroll:0,columnsWidth:[]}},computed:H({checkboxesColumns:function(){var t=[];return this.hideableColumns.length&&this.hideableColumns.forEach((function(e){t.push({value:e.name,label:e.label})})),t}},Object(d["c"])({page:function(t){return t.datatable.page},offset:function(t){return t.datatable.offset},maxPage:function(t){return t.datatable.maxPage},initialOffset:function(t){return t.datatable.defaultOffset},initialMaxPage:function(t){return t.datatable.defaultMaxPage},loading:function(t){return t.datatable.loading}})),methods:{getColumnWidth:function(){for(var t=this,e=[],n=t.$refs.thead.$el.children,a=0;a<n.length;a++)e.push(n[a].offsetWidth);t.columnsWidth=e},updateScroll:function(t){this.xScroll=t},resize:_()((function(){this.getColumnWidth()}),100),initEvents:function(){var t=this;window.addEventListener("resize",(function(){return t.resize()})),t.resize()},disposeEvents:function(){var t=this;window.removeEventListener("resize",t.resize())},updateSort:function(t){t.sortable&&(this.reorderable&&(this.reorderable=!1,this.$store.commit(s["e"].REMOVE_DATATABLE_COLUMN,"draggable")),this.$store.commit(s["e"].UPDATE_DATATABLE_PAGE,1),this.$store.commit(s["e"].UPDATE_DATATABLE_SORT,t),this.$store.dispatch(o["a"].GET_DATATABLE))},updateOffset:function(t){this.$store.commit(s["e"].UPDATE_DATATABLE_PAGE,1),this.$store.commit(s["e"].UPDATE_DATATABLE_OFFSET,t),this.$store.dispatch(o["a"].GET_DATATABLE)},updatePage:function(t){t!==this.page&&(this.$store.commit(s["e"].UPDATE_DATATABLE_PAGE,t),this.$store.dispatch(o["a"].GET_DATATABLE))},updateActiveColumns:function(t){this.$store.commit(s["e"].UPDATE_DATATABLE_VISIBLITY,t),this.$nextTick((function(){this.getColumnWidth()})),this.$store.dispatch(o["a"].GET_DATATABLE)}},watch:{loading:function(){this.$nextTick((function(){this.getColumnWidth()}))}},beforeMount:function(){function t(t){return"bulk"===t.name}function e(t){return"draggable"===t.name}this.bulkeditable&&(this.columns.find(t)||this.$store.commit(s["e"].ADD_DATATABLE_COLUMN,{index:0,data:{name:"bulk",label:"",visible:!0,optional:!1,sortable:!1}})),this.draggable&&(this.columns.find(e)||this.$store.commit(s["e"].ADD_DATATABLE_COLUMN,{index:0,data:{name:"draggable",label:"",visible:!0,optional:!1,sortable:!1}}))},mounted:function(){this.initEvents()},beforeDestroy:function(){this.disposeEvents()}},q=X,Q=(n("5f13"),n("793f"),Object(w["a"])(q,b,f,!1,null,"32135d69",null)),Z=Q.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nested-datatable"},[n("div",{staticClass:"container"},[n("div",{staticClass:"datatable__table"},[n("a17-table",[n("thead",[n("a17-tablehead",{ref:"thead",attrs:{columns:t.visibleColumns}})],1)])],1)]),n("div",{staticClass:"container"},[n("a17-button",{attrs:{variant:"validate"},on:{click:t.saveNestedList,"v-if":t.draggable}},[n("span",[t._v("Save List")])])],1),n("div",{staticClass:"container"},[n("div",{staticClass:"nested-datatable__table"},[n("a17-nested-list",{attrs:{nested:!0,maxDepth:t.maxDepth,draggable:t.draggable,saveOnChange:!1}})],1)])])},et=[],nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("draggable",{staticClass:"nested__dropArea",class:t.nestedDropAreaClasses,attrs:{options:t.draggableOptions,tag:"ul","component-data":t.draggableGetComponentData},model:{value:t.rows,callback:function(e){t.rows=e},expression:"rows"}},t._l(t.rows,(function(e,a){return n("li",{key:t.depth+"-"+e.id,staticClass:"nested-datatable__item",class:t.haveChildren(e.children)},[n("a17-nested-item",{attrs:{index:a,row:e,columns:t.columns}}),e.children?n("a17-nested-list",{attrs:{maxDepth:t.maxDepth,depth:t.depth+1,parentId:e.id,items:e.children,nested:!0,draggable:!0,saveOnChange:!1}}):t._e()],1)})),0)},at=[],rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nested-item"},[t._l(t.columns,(function(e){return n("span",{key:e.name,staticClass:"nested-item__cell",class:t.cellClasses(e,"nested-item__cell")},[t.isSpecificColumn(e)?[n(t.currentComponent(e.name),t._b({tag:"component",on:{update:t.tableCellUpdate,editInPlace:t.editInPlace}},"component",t.currentComponentProps(e),!1))]:n("a17-table-cell-generic",t._b({on:{editInPlace:t.editInPlace,update:t.tableCellUpdate}},"a17-table-cell-generic",t.currentComponentProps(e),!1))],2)})),n("span",{staticClass:"nested-item__cell nested-item__cell--actions"},[n("a17-table-cell-actions",t._b({on:{editInPlace:t.editInPlace,update:t.tableCellUpdate,restoreRow:t.restoreRow,deleteRow:t.deleteRow,duplicateRow:t.duplicateRow}},"a17-table-cell-actions",t.currentComponentProps(),!1))],1)],2)},st=[];function ot(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function it(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ot(Object(n),!0).forEach((function(e){lt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ot(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function lt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var ct={name:"A17-nested-item",mixins:[B["b"]],components:it({},I["d"])},ut=ct,dt=(n("1e2e"),n("812e"),Object(w["a"])(ut,rt,st,!1,null,"06f86664",null)),bt=dt.exports;function ft(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function pt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ft(Object(n),!0).forEach((function(e){ht(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ft(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function ht(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var mt={name:"a17-nested-list",components:{"a17-nested-item":bt,draggable:h.a},mixins:[B["a"],B["c"],B["e"]],props:{index:{type:Number,default:0},items:{type:Array,default:function(){return[]}},saveOnChange:{type:Boolean,default:!0}},data:function(){return{handle:".tablecell__handle"}},computed:{styleDepth:function(){return{marginLeft:0===this.depth?"0px":"60px"}},rows:{get:function(){return this.parentId>-1?this.items:this.$store.state.datatable.data},set:function(t){var e={parentId:this.parentId,val:t},n=this.rows.length!==e.val.length;this.parentId>-1?this.$store.commit(s["e"].UPDATE_DATATABLE_NESTED,e):this.$store.commit(s["e"].UPDATE_DATATABLE_DATA,t),this.saveOnChange&&this.saveNewTree(n)}},nestedDropAreaClasses:function(){return[0===this.rows.length?"nested__dropArea--empty":"",this.depth?"nested__dropArea--depth nested__dropArea--depth".concat(Math.min(10,this.depth)):""]},draggableOptions:function(){return pt(pt({},this.dragOptions),{},{fallbackTolerance:5,group:{name:this.name}})}},methods:{haveChildren:function(t){return{"nested-datatable__item--empty":0===t.length&&this.depth<this.maxDepth}}}},_t=mt,gt=(n("9356"),n("b621"),Object(w["a"])(_t,nt,at,!1,null,"6fdcbbf8",null)),vt=gt.exports,Ot={name:"A17NestedDatatable",mixins:[B["a"],B["c"],B["e"]],data:function(){return{items:this.$store.state.datatable.data}},components:{"a17-table":A,"a17-tablehead":L,"a17-nested-list":vt},beforeMount:function(){function t(t){return"bulk"===t.name}function e(t){return"draggable"===t.name}this.bulkeditable&&(this.columns.find(t)||this.$store.commit(s["e"].ADD_DATATABLE_COLUMN,{index:0,data:{name:"bulk",label:"",visible:!0,optional:!1,sortable:!1}})),this.draggable&&(this.columns.find(e)||this.$store.commit(s["e"].ADD_DATATABLE_COLUMN,{index:0,data:{name:"draggable",label:"",visible:!0,optional:!1,sortable:!1}}))},methods:{saveNestedList:function(){this.$store.commit(s["e"].UPDATE_DATATABLE_TRACKER,1),this.saveNewTree(!0)}}},yt=Ot,wt=(n("43fc"),Object(w["a"])(yt,tt,et,!1,null,"088114de",null)),Dt=wt.exports,At=n("5d16"),Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"secondarynav secondarynav--desktop",attrs:{slot:"navigation"},slot:"navigation"},t._l(t.navFilters,(function(e,a){return n("li",{key:a,staticClass:"secondarynav__item",class:{"s--on":t.navActive===e.slug}},[n("a",{attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.filterStatus(e.slug)}}},[n("span",{staticClass:"secondarynav__link"},[t._v(t._s(e.name))]),n("span",{staticClass:"secondarynav__number"},[t._v("("+t._s(e.number)+")")])])])})),0),t.navFilters.length?n("div",{staticClass:"secondarynav secondarynav--mobile secondarynav--dropdown",attrs:{slot:"navigation"},slot:"navigation"},[n("a17-dropdown",{ref:"secondaryNavDropdown",attrs:{position:"bottom-left",width:"full",offset:0}},[n("a17-button",{staticClass:"secondarynav__button",attrs:{variant:"dropdown-transparent",size:"small"},on:{click:function(e){return t.$refs.secondaryNavDropdown.toggle()}}},[n("span",{staticClass:"secondarynav__link"},[t._v(t._s(t.selectedNav.name))]),n("span",{staticClass:"secondarynav__number"},[t._v("("+t._s(t.selectedNav.number)+")")])]),n("div",{attrs:{slot:"dropdown__content"},slot:"dropdown__content"},[n("ul",t._l(t.navFilters,(function(e,a){return n("li",{key:a,staticClass:"secondarynav__item"},[n("a",{attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.filterStatus(e.slug)}}},[n("span",{staticClass:"secondarynav__link"},[t._v(t._s(e.name))]),n("span",{staticClass:"secondarynav__number"},[t._v("("+t._s(e.number)+")")])])])})),0)])],1)],1):t._e()])},kt=[];function Et(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function Tt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Et(Object(n),!0).forEach((function(e){jt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Et(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function jt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Ct={name:"A17TableFilters",data:function(){return{navFilters:this.$store.state.datatable.filtersNav}},computed:Tt({selectedNav:function(){var t=this,e=t.navFilters.filter((function(e){return e.slug===t.navActive}));return e[0]}},Object(d["c"])({navActive:function(t){return t.datatable.filter.status}})),methods:{filterStatus:function(t){this.navActive!==t&&(this.$store.commit(s["e"].UPDATE_DATATABLE_PAGE,1),this.$store.commit(s["e"].UPDATE_DATATABLE_FILTER_STATUS,t),this.$store.dispatch(o["a"].GET_DATATABLE))}}},St=Ct,$t=Object(w["a"])(St,Pt,kt,!1,null,null,null),Lt=$t.exports,xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bulkEditor"},[t.bulkIds.length?n("div",{staticClass:"bulkEditor__inner"},[n("div",{staticClass:"container"},[n("p",{staticClass:"bulkEditor__infos"},[t._v(t._s(t.bulkIds.length)+" item"+t._s(t.bulkIds.length>1?"s":"")+" selected")]),n("div",{staticClass:"bulkEditor__dropdown"},[n("a17-dropdown",{ref:"bulkActionsDown",attrs:{position:"bottom-left",width:"full",offset:0}},[n("a17-button",{attrs:{variant:"dropdown",size:"small"},on:{click:function(e){return t.$refs.bulkActionsDown.toggle()}}},[t._v(t._s(t.$trans("listing.bulk-actions")))]),n("div",{attrs:{slot:"dropdown__content"},slot:"dropdown__content"},[n("ul",[n("li",[t.bulkPublishable()?n("button",{on:{click:t.bulkPublish}},[t._v(t._s(t.$trans("listing.dropdown.publish")))]):t._e(),t.bulkPublishable(!0)?n("button",{on:{click:t.bulkUnpublish}},[t._v(t._s(t.$trans("listing.dropdown.unpublish")))]):t._e(),t.bulkFeaturable()?n("button",{on:{click:t.bulkFeature}},[t._v(t._s(t.$trans("listing.dropdown.feature")))]):t._e(),t.bulkFeaturable(!0)?n("button",{on:{click:t.bulkUnFeature}},[t._v(t._s(t.$trans("listing.dropdown.unfeature")))]):t._e(),t.bulkDeletable()?n("button",{on:{click:t.bulkDelete}},[t._v(t._s(t.$trans("listing.dropdown.delete")))]):t._e(),t.bulkRestorable()?n("button",{on:{click:t.bulkRestore}},[t._v(t._s(t.$trans("listing.dropdown.restore")))]):t._e(),t.bulkDestroyable()?n("button",{on:{click:t.bulkDestroy}},[t._v(t._s(t.$trans("listing.dropdown.destroy")))]):t._e()])])])],1)],1),n("a17-button",{attrs:{variant:"ghost"},on:{click:t.clearBulkSelect}},[t._v(t._s(t.$trans("listing.bulk-clear")))])],1)]):t._e()])},Ut=[];function It(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function Bt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?It(Object(n),!0).forEach((function(e){Rt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):It(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Rt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Mt={name:"A17BulkEditor",computed:Bt({},Object(d["c"])({bulkIds:function(t){return t.datatable.bulk},bulkStatus:function(t){return t.datatable.data.filter((function(e){return t.datatable.bulk.includes(e.id)})).reduce((function(t,e){return{featured:t.featured&&(e.featured||!1),canFeature:t.canFeature&&e.hasOwnProperty("featured"),published:t.published&&(e.published||!1),canPublish:t.canPublish&&e.hasOwnProperty("published"),deleted:t.deleted&&(e.deleted||!1),canDelete:t.canDelete&&null!==e.delete,canDestroy:t.canDestroy&&e.hasOwnProperty("destroyable")}}),{featured:!0,canFeature:!0,published:!0,canPublish:!0,deleted:!0,canDelete:!0,canDestroy:!0})}})),methods:{bulkPublishable:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return""!==window["TWILL"].CMS_URLS.bulkPublish&&this.bulkStatus.canPublish&&(t?this.bulkStatus.published:!this.bulkStatus.published)&&!this.bulkStatus.deleted},bulkFeaturable:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return""!==window["TWILL"].CMS_URLS.bulkFeature&&this.bulkStatus.canFeature&&(t?this.bulkStatus.featured:!this.bulkStatus.featured)&&!this.bulkStatus.deleted},bulkDeletable:function(){return""!==window["TWILL"].CMS_URLS.bulkDelete&&!this.bulkStatus.deleted&&this.bulkStatus.canDelete},bulkRestorable:function(){return""!==window["TWILL"].CMS_URLS.bulkRestore&&this.bulkStatus.deleted},bulkDestroyable:function(){return""!==window["TWILL"].CMS_URLS.bulkDestroy&&this.bulkStatus.deleted&&this.bulkStatus.canDestroy},clearBulkSelect:function(){this.$store.commit(s["e"].REPLACE_DATATABLE_BULK,[])},bulkPublish:function(){this.$store.dispatch(o["a"].BULK_PUBLISH,{toPublish:!0})},bulkUnpublish:function(){this.$store.dispatch(o["a"].BULK_PUBLISH,{toPublish:!1})},bulkFeature:function(){this.$store.dispatch(o["a"].BULK_FEATURE,{toFeature:!0})},bulkUnFeature:function(){this.$store.dispatch(o["a"].BULK_FEATURE,{toFeature:!1})},bulkExport:function(){this.$store.dispatch(o["a"].BULK_EXPORT)},bulkDelete:function(){var t=this;this.$root.$refs.warningDeleteRow?this.$root.$refs.warningDeleteRow.open((function(){t.$store.dispatch(o["a"].BULK_DELETE)})):this.$store.dispatch(o["a"].BULK_DELETE)},bulkRestore:function(){this.$store.dispatch(o["a"].BULK_RESTORE)},bulkDestroy:function(){var t=this;this.$root.$refs.warningDestroyRow?this.$root.$refs.warningDestroyRow.open((function(){t.$store.dispatch(o["a"].BULK_DESTROY)})):this.$store.dispatch(o["a"].BULK_DESTROY)}}},Ft=Mt,Nt=(n("9073"),Object(w["a"])(Ft,xt,Ut,!1,null,"7f01d2ce",null)),Wt=Nt.exports,Kt=n("3b37"),Gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a17-modal",{ref:"modal",staticClass:"modal--form",attrs:{title:t.modalTitle,forceClose:!0}},[n("form",{attrs:{action:t.actionForm},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[t._t("default"),n("a17-modal-validation",{attrs:{mode:t.mode,"is-disable":t.createMode,"active-publish-state":t.withPublicationToggle,"is-publish":t.published,"published-name":"published",textEnabled:t.publishedLabel,textDisabled:t.draftLabel}})],2)])},zt=[],Vt=n("6d94");function Yt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function Ht(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Yt(Object(n),!0).forEach((function(e){Jt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Yt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Jt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Xt,qt={name:"A17ModalCreate",props:{formCreate:{type:String,default:"#"},publishedLabel:{type:String,default:function(){return this.$trans("main.published","Live")}},draftLabel:{type:String,default:function(){return this.$trans("main.draft","Draft")}}},components:{"a17-modal-validation":Vt["a"]},computed:Ht(Ht({createMode:function(){return"create"===this.mode},actionForm:function(){return this.createMode?this.formCreate:this.action},modalTitle:function(){return this.createMode?this.$trans("modal.create.title","Add new"):this.$trans("modal.update.title","Update")},published:function(){return!this.createMode&&!!this.fieldValueByName("published")},withPublicationToggle:function(){return void 0!==this.columns.find((function(t){return"published"===t.name}))}},Object(d["c"])({action:function(t){return t.modalEdition.action},mode:function(t){return t.modalEdition.mode},columns:function(t){return t.datatable.columns}})),Object(d["b"])(["fieldValueByName"])),methods:{open:function(){this.createMode&&this.$store.commit(s["g"].RESET_LANGUAGES),this.$refs.modal.open()},submit:function(t){var e=this;this.$store.commit(s["f"].UPDATE_FORM_LOADING,!0);var n=document.activeElement.name;this.$nextTick((function(){this.$store.dispatch(o["a"].UPDATE_FORM_IN_LISTING,{endpoint:this.actionForm,method:"create"===this.mode?"post":"put",redirect:"create-another"!==n}).then((function(){e.$refs.modal&&e.$refs.modal.close(),e.$nextTick((function(){"create-another"===n&&e.$refs.modal&&e.$refs.modal.open(),"create"===this.mode&&this.$store.commit(s["e"].UPDATE_DATATABLE_PAGE,1),this.$emit("reload")}))}),(function(t){e.$store.commit(s["j"].SET_NOTIF,{message:"Your submission could not be validated, please fix and retry",variant:"error"})}))}))}}},Qt=qt,Zt=Object(w["a"])(Qt,Gt,zt,!1,null,null,null),te=Zt.exports,ee=n("b0ae"),ne=n("c5ec"),ae=n("ce72");function re(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var se={action:"#",mode:"create"},oe={},ie=(Xt={},re(Xt,s["i"].UPDATE_MODAL_ACTION,(function(t,e){t.action=e})),re(Xt,s["i"].UPDATE_MODAL_MODE,(function(t,e){t.mode=e})),Xt),le={state:se,getters:oe,mutations:ie},ce=n("f451"),ue=n("f930");function de(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function be(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?de(Object(n),!0).forEach((function(e){fe(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):de(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function fe(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}a["a"].use(c["a"]),a["a"].use(u["a"]),r["a"].registerModule("datatable",ee["a"]),r["a"].registerModule("language",ne["a"]),r["a"].registerModule("form",ae["a"]),r["a"].registerModule("modalEdition",le),r["a"].registerModule("attributes",ce["a"]),window["TWILL"].vm=window.vm=new a["a"]({store:r["a"],el:"#app",components:{"a17-filter":At["a"],"a17-table-filters":Lt,"a17-datatable":Z,"a17-nested-datatable":Dt,"a17-bulk":Wt,"a17-langmanager":Kt["a"],"a17-modal-create":te},mixins:[B["d"]],computed:be({hasBulkIds:function(){return this.bulkIds.length>0}},Object(d["c"])({localStorageKey:function(t){return t.datatable.localStorageKey},baseUrl:function(t){return t.datatable.baseUrl},bulkIds:function(t){return t.datatable.bulk}})),methods:{create:function(){this.$refs.editionModal&&(this.$store.commit(s["i"].UPDATE_MODAL_ACTION,""),this.$store.commit(s["i"].UPDATE_MODAL_MODE,"create"),this.$store.commit(s["f"].EMPTY_FORM_FIELDS),this.$refs.editionModal.open())},reloadDatas:function(){this.$store.dispatch(o["a"].GET_DATATABLE)},clearFiltersAndReloadDatas:function(){var t=this;this.$store.commit(s["e"].UPDATE_DATATABLE_PAGE,1),this.$store.commit(s["e"].CLEAR_DATATABLE_FILTER),Object.keys(this.$refs).filter((function(t){return 0===t.indexOf("filterDropdown[")})).map((function(e){t.$refs[e].updateValue()})),this.reloadDatas()},filterListing:function(t){var e=this;this.$store.commit(s["e"].UPDATE_DATATABLE_PAGE,1),this.$store.commit(s["e"].UPDATE_DATATABLE_FILTER,t||{search:""}),this.$nextTick((function(){e.reloadDatas()}))}},mounted:function(){window["TWILL"].openCreate&&this.create()},created:function(){Object(l["a"])();var t=!1,e=Object(ue["a"])(this.localStorageKey+"_page-offset");e&&(this.$store.commit(s["e"].UPDATE_DATATABLE_OFFSET,parseInt(e)),t=!0);var n=Object(ue["a"])(this.localStorageKey+"_columns-visible");n&&(this.$store.commit(s["e"].UPDATE_DATATABLE_VISIBLITY,JSON.parse(n)),t=!0),t&&this.reloadDatas()}}),document.addEventListener("DOMContentLoaded",i["a"])},6819:function(t,e,n){},"793f":function(t,e,n){"use strict";var a=n("9629"),r=n.n(a);r.a},"79d9":function(t,e,n){},"812e":function(t,e,n){"use strict";var a=n("99ae"),r=n.n(a);r.a},9073:function(t,e,n){"use strict";var a=n("cf1a"),r=n.n(a);r.a},9356:function(t,e,n){"use strict";var a=n("bba3"),r=n.n(a);r.a},9629:function(t,e,n){},"99ae":function(t,e,n){},"9db0":function(t,e,n){"use strict";var a=n("79d9"),r=n.n(a);r.a},b46c:function(t,e,n){"use strict";var a=n("2e82"),r=n.n(a);r.a},b621:function(t,e,n){"use strict";var a=n("b745"),r=n.n(a);r.a},b745:function(t,e,n){},bba3:function(t,e,n){},cf1a:function(t,e,n){},dfb7:function(t,e,n){},f06f:function(t,e,n){"use strict";var a=n("6819"),r=n.n(a);r.a}});