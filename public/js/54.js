(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{890:function(e,r,t){"use strict";t.r(r);var n=t(1),a=t.n(n),o=t(164),s=t(68),i=t(41),u={components:{UserDialogSelector:t(28).a,Form:o.a},data:function(){return{loader:!0,formDataLoaded:!1,usersParameters:{params:{is_superadmin:!1}},payment_id:parseInt(this.$route.params.id),form:{id:0,code:"",reference_no:"",voucher_no:"",description:"",date:a()().format("YYYY-MM-DD"),cheque_no:"",cheque_date:"",amount:0,payee:"",payee_address:"",payee_phone:"",remarks:"",notes:"",status:"",user:null},errors:{user_id:[],code:[],reference_no:[],voucher_no:[],description:[],date:[],cheque_no:[],cheque_date:[],amount:[],payee:[],payee_address:[],payee_phone:[],remarks:[],notes:[],expense_reports:[]},rules:{}}},methods:{selectUser:function(e){this.form.user=null!=e&&null!=e?e:null},resetUser:function(){this.form.user=null},getData:function(){var e=this;return new Promise((function(r,t){s.a.show(e.$route.params.id).then((function(t){e.loader=!1,r(t.data.data)})).catch((function(r){e.mixin_showErrors(r),e.loader=!1,e.$router.push({name:"user.payments.index"},(function(){})),t()}))}))},loadExpenseReports:function(){var e=this;return new Promise((function(r,t){i.a.get({params:{update_payment:!0,payment_id:e.$route.params.id}}).then((function(t){e.loader=!1,r(t.data.data)})).catch((function(r){e.mixin_showErrors(r),e.loader=!1,t()}))}))},onSave:function(e){var r=this;this.loader=!0,s.a.update(this.$route.params.id,e).then((function(e){r.mixin_successDialog(e.data.status,e.data.message),r.$router.push({name:"user.payments.index"}),r.loader=!1})).catch((function(e){r.mixin_showErrors(e),r.errors=e.response.data.errors,r.loader=!1}))}},created:function(){var e=this;this.getData().then((function(r){e.form=r,e.loadExpenseReports().then((function(r){e.form.expense_reports=r,e.formDataLoaded=!0}))}))}},c=t(4),l=Object(c.a)(u,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[e.formDataLoaded?t("v-card",{staticClass:"elevation-0 pt-0"},[t("v-card-title",{staticClass:"pt-0"},[t("v-btn",{staticClass:"mr-3",attrs:{icon:""},on:{click:function(r){return e.$router.go(-1)}}},[t("v-icon",[e._v("mdi-arrow-left")])],1),e._v(" "),t("v-spacer"),e._v(" "),t("h4",{staticClass:"title green--text"},[e._v("Edit Payment Record")])],1),e._v(" "),t("v-container",[e.formDataLoaded?t("Form",{attrs:{paymentForm:e.form,paymentErrors:e.errors,paymentRules:e.rules,payment_id:e.payment_id,isEdit:!0},on:{"on-save":e.onSave},scopedSlots:e._u([{key:"userSelector",fn:function(){return[t("v-row",[t("v-col",[t("v-text-field",{attrs:{value:e.form.user?e.form.user.full_name:"No Employee","error-messages":e.errors.user_id,label:"Employee",readonly:""},on:{input:function(r){e.errors.user_id=[]}},scopedSlots:e._u([e.mixin_can("select specific users on expense reports")?{key:"append",fn:function(){return[t("UserDialogSelector",{ref:"userDialogSelector",attrs:{selectedUser:e.form.user,usersParameters:e.usersParameters},on:{selectUser:e.selectUser,onReset:e.resetUser},scopedSlots:e._u([{key:"openDialog",fn:function(r){var n=r.bind,a=r.on;return[t("v-btn",e._g(e._b({attrs:{fab:"",color:"primary",text:"","x-small":""}},"v-btn",n,!1),a),[t("v-icon",{attrs:{dark:""}},[e._v("mdi-magnify")])],1)]}}],null,!1,2729772431)})]},proxy:!0}:null],null,!0)})],1)],1)]},proxy:!0}],null,!1,4145711340)}):e._e()],1)],1):t("loader-component")],1)}),[],!1,null,null,null);r.default=l.exports}}]);