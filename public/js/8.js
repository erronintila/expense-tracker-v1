(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{116:function(e,t,n){"use strict";var a=n(65),s={props:{selectedDepartment:{type:Object,default:function(){}},parameters:{type:Object,default:function(){}},rules:{type:Array,default:function(){return[]}},errors:{type:Array,default:function(){return[]}},showAll:{type:Boolean,default:!1}},data:function(){return{departments:[],department:null}},methods:{getDataFromApi:function(){var e=this;return new Promise((function(t,n){a.a.getAll({params:{itemsPerPage:200,isSelection:!0}}).then((function(e){t(e.data)})).catch((function(t){e.mixin_showErrors(t),n()}))}))},onReset:function(){this.department=null,this.$emit("onReset")},onChange:function(e){this.department=e,this.$emit("onChange",e)}},watch:{selectedDepartment:{deep:!0,immediate:!0,handler:function(e,t){this.department=e}}},created:function(){var e=this;this.getDataFromApi().then((function(t){e.departments=t.data,e.showAll&&e.departments.unshift({id:null,name:"All Departments"})}))},activated:function(){var e=this;this.getDataFromApi().then((function(t){e.departments=t.data,e.showAll&&e.departments.unshift({id:null,name:"All Departments"})}))}},i=n(4),r=Object(i.a)(s,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-autocomplete",{attrs:{label:"Department","item-value":"id","item-text":"name","return-object":"",items:e.departments,rules:e.rules,"error-messages":e.errors},on:{change:e.onChange},model:{value:e.department,callback:function(t){e.department=t},expression:"department"}})}),[],!1,null,null,null);t.a=r.exports},150:function(e,t,n){"use strict";var a=n(59),s={props:{selectedDepartment:{type:Object,default:null},selectedJob:{type:Object,default:null},parameters:{type:Object,default:function(){}},rules:{type:Array,default:function(){return[]}},errors:{type:Array,default:function(){return[]}},showAll:{type:Boolean,default:!1}},data:function(){return{department:null,jobs:[],job:null}},methods:{getDataFromApi:function(){var e=this;this.department&&this.department.id;return new Promise((function(t,n){a.a.getAll({params:{department_id:e.department?e.department.id:null,itemsPerPage:200,isSelection:!0}}).then((function(e){t(e.data)})).catch((function(t){e.mixin_showErrors(t),n()}))}))},onReset:function(){var e=this;this.job=null,this.getDataFromApi().then((function(t){e.jobs=t.data,e.showAll&&e.jobs.unshift({id:null,name:"All Job Designations"})})),this.$emit("onReset")},onChange:function(e){var t=this;this.job=e,this.getDataFromApi().then((function(e){t.jobs=e.data,t.showAll&&t.jobs.unshift({id:null,name:"All Job Designations"})})),this.$emit("onChange",e)}},created:function(){var e=this;this.getDataFromApi().then((function(t){e.jobs=t.data,e.showAll&&e.jobs.unshift({id:null,name:"All Job Designations"})}))},activated:function(){var e=this;this.getDataFromApi().then((function(t){e.jobs=t.data,e.showAll&&e.jobs.unshift({id:null,name:"All Job Designations"})}))},watch:{selectedJob:{deep:!0,immediate:!0,handler:function(e,t){this.job=e}},selectedDepartment:{deep:!0,immediate:!0,handler:function(e,t){this.department=e,this.job=null}},department:function(){var e=this;this.getDataFromApi().then((function(t){e.jobs=t.data,e.showAll&&e.jobs.unshift({id:null,name:"All Job Designations"})}))}}},i=n(4),r=Object(i.a)(s,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-autocomplete",{attrs:{label:"Job Designation","item-value":"id","item-text":"name","return-object":"",items:e.jobs,rules:e.rules,"error-messages":e.errors},on:{change:e.onChange},model:{value:e.job,callback:function(t){e.job=t},expression:"job"}})}),[],!1,null,null,null);t.a=r.exports},24:function(e,t,n){"use strict";var a=n(10),s=n.n(a);function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,a;return t=e,(n=[{key:"get",value:function(e){return s.a.get("/api/data/users",e)}},{key:"getAll",value:function(e){return s.a.get("/api/users",e)}},{key:"show",value:function(e,t){return s.a.get("/api/users/".concat(e),t)}},{key:"store",value:function(e){return s.a.post("/api/users",e)}},{key:"update",value:function(e,t){return s.a.put("/api/users/".concat(e),t)}},{key:"delete",value:function(e,t){return s.a.delete("/api/users/".concat(e),t)}},{key:"restore",value:function(e,t){return s.a.put("/api/users/restore/".concat(e),t)}},{key:"updatePassword",value:function(e,t){return s.a.put("/api/users/update_password/".concat(e),t)}},{key:"resetPassword",value:function(e,t){return s.a.put("/api/users/reset_password/".concat(e),t)}},{key:"verifyEmail",value:function(e,t){return s.a.put("/api/users/verify_email/".concat(e),t)}},{key:"updateFund",value:function(e,t){return s.a.put("/api/users/update_fund/".concat(e),t)}},{key:"updateSettings",value:function(e,t){return s.a.put("/api/users/update_settings/".concat(e),t)}},{key:"updatePermissions",value:function(e,t){return s.a.put("/api/users/update_permissions/".concat(e),t)}},{key:"updateProfile",value:function(e,t){return s.a.put("/api/users/update_profile/".concat(e),t)}},{key:"updateActivation",value:function(e,t){return s.a.put("/api/users/update_activation/".concat(e),t)}},{key:"export",value:function(){return s.a.get("/api/users/export/data")}}])&&i(t.prototype,n),a&&i(t,a),e}();t.a=new r},27:function(e,t,n){"use strict";var a={name:"page-header",props:{title:""}},s=n(4),i=Object(s.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-card-title",{staticClass:"pt-0"},[n("h4",{staticClass:"title green--text"},[e._v(e._s(e.title))]),e._v(" "),n("v-spacer"),e._v(" "),e._t("actions")],2),e._v(" "),n("v-card-subtitle",[e._t("sub-actions")],2)],1)}),[],!1,null,null,null);t.a=i.exports},454:function(e,t){},59:function(e,t,n){"use strict";var a=n(10),s=n.n(a);function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,a;return t=e,(n=[{key:"getAll",value:function(e){return s.a.get("/api/jobs",e)}},{key:"get",value:function(e){return s.a.get("/api/data/jobs",e)}},{key:"show",value:function(e,t){return s.a.get("/api/jobs/".concat(e),t)}},{key:"store",value:function(e){return s.a.post("/api/jobs",e)}},{key:"update",value:function(e,t){return s.a.put("/api/jobs/".concat(e),t)}},{key:"delete",value:function(e,t){return s.a.delete("/api/jobs/".concat(e),t)}},{key:"restore",value:function(e,t){return s.a.put("/api/jobs/restore/".concat(e),t)}}])&&i(t.prototype,n),a&&i(t,a),e}();t.a=new r},65:function(e,t,n){"use strict";var a=n(10),s=n.n(a);function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,a;return t=e,(n=[{key:"getAll",value:function(e){return s.a.get("/api/departments",e)}},{key:"get",value:function(e){return s.a.get("/api/data/departments",e)}},{key:"show",value:function(e,t){return s.a.get("/api/departments/".concat(e),t)}},{key:"store",value:function(e){return s.a.post("/api/departments",e)}},{key:"update",value:function(e,t){return s.a.put("/api/departments/".concat(e),t)}},{key:"delete",value:function(e,t){return s.a.delete("/api/departments/".concat(e),t)}},{key:"restore",value:function(e,t){return s.a.put("/api/departments/restore/".concat(e),t)}}])&&i(t.prototype,n),a&&i(t,a),e}();t.a=new r},896:function(e,t,n){"use strict";n.r(t);var a=n(283),s=n.n(a),i=n(27),r=n(24),o=n(116),l=n(150);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m={props:{},components:{PageHeader:i.a,DepartmentDropdownSelector:o.a,JobDropdownSelector:l.a},data:function(){return{formDataLoaded:!1,expanded:[],loading:!0,headers:[{text:"Name",value:"full_name"},{text:"Job Designation",value:"job"},{text:"Department",value:"department"},{text:"Revolving Fund",value:"revolving_fund"},{text:"Actions",value:"actions",sortable:!1},{text:"",value:"data-table-expand",sortable:!1}],items:[],department:null,job:null,total_fund:0,total_remaining_fund:0,status:"Active",statuses:["Active","Inactive","Archived"],selected:[],search:"",collections:{headers:[{text:"Name",value:"full_name"},{text:"Job Designation",value:"job",sortable:!1},{text:"Department",value:"department",sortable:!1},{text:"Revolving Fund",value:"revolving_fund"},{text:"Actions",value:"actions",sortable:!1},{text:"",value:"data-table-expand"}],selected:[],selectedUsers:[],statuses:["Active","Inactive","Archived"],items:[],users:[]},filters:{department:{id:null,name:"All Departments"},job:{id:null,name:"All Job Designations"},search:"",status:"Active"},options:{sortBy:["first_name"],sortDesc:[!1],page:1,itemsPerPage:10},meta:{current_page:0,from:0,last_page:0,path:"",per_page:10,to:0,total:0},filterByField:["code","first_name"]}},methods:{onShow:function(e){var t={id:e.id};e.deleted_at&&(t={id:e.id,isDeleted:!0}),this.$router.push({name:"admin.users.show",params:t})},onSearch:function(){var e=this;this.getDataFromApi().then((function(t){e.items=t.data,e.meta=t.meta}))},changeStatus:function(){},onChangeDepartment:function(e){this.department=e,this.job=null},onResetDepartment:function(){this.department=null,this.job=null},onChangeJob:function(e){this.job=e},onResetJob:function(){this.job=null},changeJob:function(e){this.job=e},getDataFromApi:function(){var e=this;return this.loading=!0,new Promise((function(t,n){var a=e.options,i=a.sortBy,o=a.sortDesc,l=a.page,c=a.itemsPerPage,u=e.search.trim().toLowerCase(),d=null==e.department?null:e.department.id,m=null==e.job?null:e.job.id,p=e.status,v={params:{filterOptions:{matchCase:!1,matchWholeWord:!1},filterByField:{code:e.onFilterByField("code"),first_name:e.onFilterByField("first_name"),middle_name:e.onFilterByField("middle_name"),last_name:e.onFilterByField("last_name"),gender:e.onFilterByField("gender"),birthdate:e.onFilterByField("birthdate"),mobile_number:e.onFilterByField("mobile_number"),telephone_number:e.onFilterByField("telephone_number"),email:e.onFilterByField("email"),is_superadmin:!1,job_id:m,job_name:e.onFilterByField("job_name"),department_id:d,department_name:e.onFilterByField("department_name")},filterByDate:{key:"created_at",start_date:"",end_date:""},filterByStatus:[p],sort:{key:i[0],desc:o[0]},pagination:{current_page:l,from:1,last_page:1,path:"",per_page:c,to:1,total:1},search:u,sortBy:i[0],sortType:o[0]?"desc":"asc",page:l,itemsPerPage:c,status:p,department_id:d,job_id:m,is_superadmin:!1},paramsSerializer:function(e){return s.a.stringify(e,{encode:!1})}};r.a.getAll(v).then((function(n){e.loading=!1,e.formDataLoaded=!0,t(n.data)})).catch((function(t){e.mixin_showErrors(t),e.loading=!1,e.formDataLoaded=!0,n()}))}))},onFilterByField:function(e){var t=this.search.trim().toLowerCase();return this.filterByField.includes(e)?t:""},onRefresh:function(){Object.assign(this.$data,this.$options.data.apply(this)),this.onResetDepartment(),this.onResetJob()},onEditFund:function(){0!=this.selected.length?(this.$router.push("/users/".concat(this.selected[0].id,"/edit/fund")),this.selected=[]):this.mixin_errorDialog("Error","No item(s) selected")},onEditPermissions:function(){0!=this.selected.length?(this.$router.push("/users/".concat(this.selected[0].id,"/edit/permissions")),this.selected=[]):this.mixin_errorDialog("Error","No item(s) selected")},onPasswordReset:function(){var e=this;0!=this.selected.length?this.$confirm("Do you want to reset password?").then((function(t){if(t){var n=e.selected.map((function(e){return e.id}));r.a.resetPassword(n).then((function(t){e.mixin_successDialog(t.data.status,t.data.message),e.getDataFromApi().then((function(t){e.items=t.data,e.meta=t.meta})),e.selected=[]})).catch((function(t){e.mixin_showErrors(t)}))}})):this.mixin_errorDialog("Error","No item(s) selected")},onDelete:function(){var e=this;0!=this.selected.length?this.$confirm("Move item(s) to archive?").then((function(t){if(t){var n=e.selected.map((function(e){return e.id}));r.a.delete(n).then((function(t){e.mixin_successDialog(t.data.status,t.data.message),e.getDataFromApi().then((function(t){e.items=t.data,e.meta=t.meta})),e.selected=[]})).catch((function(t){e.mixin_showErrors(t)}))}})):this.mixin_errorDialog("Error","No item(s) selected")},onRestore:function(){var e=this;0!=this.selected.length?this.$confirm("Do you want to restore account(s)?").then((function(t){if(t){var n=e.selected.map((function(e){return e.id}));r.a.restore(n).then((function(t){e.mixin_successDialog(t.data.status,t.data.message),e.getDataFromApi().then((function(t){e.items=t.data,e.meta=t.meta})),e.selected=[]})).catch((function(t){e.mixin_showErrors(t)}))}})):this.mixin_errorDialog("Error","No item(s) selected")},onSetActivation:function(e){var t=this;0!=this.selected.length?this.$confirm("Do you want to ".concat(e?"activate":"deactivate"," account(s)?")).then((function(n){if(n){var a=t.selected.map((function(e){return e.id})),s={is_active:e};r.a.updateActivation(a,s).then((function(e){t.mixin_successDialog(e.data.status,e.data.message),t.getDataFromApi().then((function(e){t.items=e.data,t.meta=e.meta})),t.selected=[]})).catch((function(e){t.mixin_showErrors(e)}))}})):this.mixin_errorDialog("Error","No item(s) selected")},onExport:function(){var e=this;r.a.export().then((function(t){window.location.href="/api/users/export/data",e.mixin_successDialog("Success","The file was saved to 'Downloads' folder)")})).catch((function(t){return e.mixin_showErrors(t)}))}},watch:{params:{immediate:!0,deep:!0,handler:function(){var e=this;this.getDataFromApi().then((function(t){e.items=t.data,e.meta=t.meta,e.total_fund=e.mixin_formatNumber(t.data.reduce((function(e,t){return e+t.fund}),0)),e.total_remaining_fund=e.mixin_formatNumber(t.data.reduce((function(e,t){return e+t.remaining_fund}),0))}))}},search:function(){var e=this;""==this.search&&this.getDataFromApi().then((function(t){e.items=t.data,e.meta=t.meta}))}},computed:{params:function(e){var t;return u(u({},this.options),{},(d(t={query:this.status},"query",this.department),d(t,"query",this.job),t))}},activated:function(){var e=this;this.$store.dispatch("AUTH_USER"),this.getDataFromApi().then((function(t){e.items=t.data,e.meta=t.meta}))}},p=n(4),v=Object(p.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.formDataLoaded?n("v-card",{staticClass:"elevation-0 p-0 m-0"},[n("page-header",{attrs:{title:"Employees"},scopedSlots:e._u([{key:"actions",fn:function(){return[n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([e.mixin_can("add users")?{key:"activator",fn:function(t){var a=t.on,s=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"elevation-3 mr-2",attrs:{color:"green",to:{name:"admin.users.create"},dark:"",fab:"","x-small":""}},"v-btn",s,!1),a),[n("v-icon",{attrs:{dark:""}},[e._v("mdi-plus")])],1)]}}:null],null,!0)},[e._v(" "),n("span",[e._v("Add New")])])]},proxy:!0}])}),e._v(" "),n("v-row",{staticClass:"ml-4"},[e.selected.length>0?n("v-chip",{staticClass:"mr-2 mb-2",attrs:{color:"green",dark:"",close:"",small:"","close-icon":"mdi-close"},on:{"click:close":function(t){e.selected=[]}}},[e._v("\n                "+e._s(e.selected.length)+" Selected\n            ")]):e._e(),e._v(" "),n("v-menu",{attrs:{transition:"scale-transition","close-on-content-click":!1,"nudge-width":200,"offset-y":"",right:"",bottom:"",eager:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,s=t.attrs;return[n("v-chip",e._g(e._b({staticClass:"mr-2 mb-2",attrs:{small:""}},"v-chip",s,!1),a),[e._v("\n                        "+e._s(e.status)+"\n                    ")])]}}])},[e._v(" "),n("v-card",[n("v-list",[n("v-list-item",[n("v-select",{attrs:{items:e.statuses,label:"Status"},model:{value:e.status,callback:function(t){e.status=t},expression:"status"}})],1)],1)],1)],1),e._v(" "),n("v-menu",{attrs:{transition:"scale-transition","close-on-content-click":!1,"nudge-width":200,"offset-y":"",right:"",bottom:"",eager:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,s=t.attrs;return[n("v-chip",e._g(e._b({staticClass:"mr-2 mb-2",attrs:{small:""}},"v-chip",s,!1),a),[e._v("\n                        "+e._s(e.department?e.department.name:"All Departments")+"\n                    ")])]}}])},[e._v(" "),n("v-card",[n("v-list",[n("v-list-item",[n("DepartmentDropdownSelector",{ref:"departmentDropdownSelector",attrs:{showAll:!0,selectedDepartment:e.department},on:{onReset:e.onResetDepartment,onChange:e.onChangeDepartment},model:{value:e.department,callback:function(t){e.department=t},expression:"department"}})],1)],1)],1)],1),e._v(" "),n("v-menu",{attrs:{transition:"scale-transition","close-on-content-click":!1,"nudge-width":200,"offset-y":"",right:"",bottom:"",eager:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,s=t.attrs;return[n("v-chip",e._g(e._b({staticClass:"mr-2 mb-2",attrs:{small:""}},"v-chip",s,!1),a),[e._v("\n                        "+e._s(e.job?e.job.name:"All Job Designations")+"\n                    ")])]}}])},[e._v(" "),n("v-card",[n("v-list",[n("v-list-item",[n("JobDropdownSelector",{ref:"jobDropdownSelector",attrs:{showAll:!0,selectedJob:e.job,selectedDepartment:e.department},on:{onReset:e.onResetJob,onChange:e.onChangeJob},model:{value:e.job,callback:function(t){e.job=t},expression:"job"}})],1)],1)],1)],1),e._v(" "),n("v-chip",{staticClass:"mr-2 mb-2",attrs:{close:"",small:"","close-icon":"mdi-refresh"},on:{"click:close":e.onRefresh}},[e._v("\n                Refresh\n            ")]),e._v(" "),n("v-chip",{directives:[{name:"show",rawName:"v-show",value:e.mixin_can("export users"),expression:"mixin_can('export users')"}],staticClass:"mr-2 mb-2",attrs:{close:"",small:"","close-icon":"mdi-download"},on:{"click:close":e.onExport}},[e._v("\n                Export Data\n            ")])],1),e._v(" "),e.selected.length>0?n("v-row",{staticClass:"ml-4"},[n("v-chip",{directives:[{name:"show",rawName:"v-show",value:e.selected.length>0&&"Active"==e.status,expression:"selected.length > 0 && status == 'Active'"}],staticClass:"mr-2 mb-2",attrs:{close:"",small:"","close-icon":"mdi-lock"},on:{"click:close":e.onPasswordReset}},[e._v("\n                Reset Password\n            ")]),e._v(" "),n("v-chip",{directives:[{name:"show",rawName:"v-show",value:1==e.selected.length&&"Active"==e.status,expression:"selected.length == 1 && status == 'Active'"}],staticClass:"mr-2 mb-2",attrs:{close:"",small:"","close-icon":"mdi-credit-card-refund"},on:{"click:close":e.onEditFund}},[e._v("\n                Edit Revolving Fund\n            ")]),e._v(" "),n("v-chip",{directives:[{name:"show",rawName:"v-show",value:1==e.selected.length&&"Active"==e.status,expression:"selected.length == 1 && status == 'Active'"}],staticClass:"mr-2 mb-2",attrs:{close:"",small:"","close-icon":"mdi-account-cog-outline",color:"orange",dark:""},on:{"click:close":e.onEditPermissions}},[e._v("\n                Edit Permissions\n            ")]),e._v(" "),n("v-chip",{directives:[{name:"show",rawName:"v-show",value:e.selected.length>0&&"Inactive"==e.status,expression:"selected.length > 0 && status == 'Inactive'"}],staticClass:"mr-2 mb-2",attrs:{close:"",small:"","close-icon":"mdi-check",color:"green",dark:""},on:{"click:close":function(t){return e.onSetActivation(!0)}}},[e._v("\n                Activate\n            ")]),e._v(" "),n("v-chip",{directives:[{name:"show",rawName:"v-show",value:e.selected.length>0&&"Active"==e.status,expression:"selected.length > 0 && status == 'Active'"}],staticClass:"mr-2 mb-2",attrs:{close:"",small:"","close-icon":"mdi-lock",color:"red",dark:""},on:{"click:close":function(t){return e.onSetActivation(!1)}}},[e._v("\n                Deactivate\n            ")]),e._v(" "),n("v-chip",{directives:[{name:"show",rawName:"v-show",value:e.selected.length>0&&"Archived"==e.status,expression:"selected.length > 0 && status == 'Archived'"}],staticClass:"mr-2 mb-2",attrs:{close:"",small:"","close-icon":"mdi-history",color:"green",dark:""},on:{"click:close":e.onRestore}},[e._v("\n                Restore\n            ")]),e._v(" "),n("v-chip",{directives:[{name:"show",rawName:"v-show",value:e.selected.length>0&&"Inactive"==e.status,expression:"selected.length > 0 && status == 'Inactive'"}],staticClass:"mr-2 mb-2",attrs:{close:"",small:"","close-icon":"mdi-trash-can-outline",color:"red",dark:""},on:{"click:close":e.onDelete}},[e._v("\n                Archive\n            ")])],1):e._e(),e._v(" "),n("v-card-subtitle",[n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var a=t.hover;return[n("v-text-field",{attrs:{elevation:a?5:2,"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSearch(t)}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})]}}])})],1),e._v(" "),n("v-card-text",[n("v-data-table",{staticClass:"elevation-0",attrs:{headers:e.headers,items:e.items,loading:e.loading,options:e.options,"server-items-length":e.meta.total,"footer-props":{itemsPerPageOptions:[10,20,50,100],showFirstLastPage:!0,firstIcon:"mdi-page-first",lastIcon:"mdi-page-last",prevIcon:"mdi-chevron-left",nextIcon:"mdi-chevron-right"},"show-expand":"","single-expand":"","show-select":"","item-key":"id"},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"expanded-item",fn:function(t){var a=t.headers,s=t.item;return[n("td",{attrs:{colspan:a.length}},[n("v-container",[n("table",[n("tr",[n("td",[n("strong",[e._v("Code")])]),e._v(" "),n("td",[e._v(":")]),e._v(" "),n("td",[e._v(e._s(s.code))])]),e._v(" "),n("tr",[n("td",[n("strong",[e._v("Gender")])]),e._v(" "),n("td",[e._v(":")]),e._v(" "),n("td",[e._v(e._s(s.gender))])]),e._v(" "),n("tr",[n("td",[n("strong",[e._v("Birthdate")])]),e._v(" "),n("td",[e._v(":")]),e._v(" "),n("td",[e._v(e._s(s.birthdate))])]),e._v(" "),n("tr",[n("td",[n("strong",[e._v("Email Address")])]),e._v(" "),n("td",[e._v(":")]),e._v(" "),n("td",[e._v(e._s(s.email))])]),e._v(" "),n("tr",[n("td",[n("strong",[e._v("Telephone #")])]),e._v(" "),n("td",[e._v(":")]),e._v(" "),n("td",[e._v(e._s(s.telephone_number))])]),e._v(" "),n("tr",[n("td",[n("strong",[e._v("Address")])]),e._v(" "),n("td",[e._v(":")]),e._v(" "),n("td",[e._v(e._s(s.address))])])])])],1)]}},{key:"item.revolving_fund",fn:function(t){var n=t.item;return[e._v("\n                    "+e._s(n.remaining_fund+" / "+n.fund)+"\n                ")]}},{key:"item.job",fn:function(t){var n=t.item;return[e._v("\n                    "+e._s(""+(n.job?n.job.name:""))+"\n                ")]}},{key:"item.department",fn:function(t){var n=t.item;return[e._v("\n                    "+e._s(""+(n.job&&n.job.department?n.job.department.name:""))+"\n                ")]}},{key:"item.actions",fn:function(t){var a=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.onShow(a)}}},[e._v("\n                        mdi-eye\n                    ")]),e._v(" "),e.mixin_can("edit users")&&1==a.is_active&&null==a.deleted_at?n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.$router.push({name:"admin.users.edit",params:{id:a.id}})}}},[e._v("\n                        mdi-pencil\n                    ")]):e._e()]}}],null,!0),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[e._v(" "),e._v(" "),e._v(" "),e._v(" "),e._v(" "),e.items.length>0?n("template",{slot:"body.append"},[n("tr",{staticClass:"green--text hidden-md-and-up"},[n("td",{staticClass:"title"},[e._v("\n                            Total:\n                            "),n("strong",[e._v("\n                                "+e._s(e.total_remaining_fund)+" /\n                                "+e._s(e.total_fund)+"\n                            ")])])]),e._v(" "),n("tr",{staticClass:"green--text hidden-sm-and-down"},[n("td",{staticClass:"title"},[e._v("Total")]),e._v(" "),n("td"),e._v(" "),n("td"),e._v(" "),n("td"),e._v(" "),n("td",[n("strong",[e._v(e._s(e.total_remaining_fund)+" /\n                                "+e._s(e.total_fund))])]),e._v(" "),n("td"),e._v(" "),n("td")])]):e._e()],2)],1)],1):n("loader-component")],1)}),[],!1,null,null,null);t.default=v.exports}}]);