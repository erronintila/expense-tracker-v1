(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[119],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/Create.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/expense_reports/Create.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _admin_expense_reports_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../admin/expense_reports/Form */ "./resources/js/views/modules/admin/expense_reports/Form.vue");
/* harmony import */ var _services_ExpenseReportDataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/ExpenseReportDataService */ "./resources/js/services/ExpenseReportDataService.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Form: _admin_expense_reports_Form__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      formDataLoaded: false,
      usersParameters: {
        params: {
          is_superadmin: false
        }
      },
      form: {
        code: "",
        description: "",
        remarks: "",
        notes: "",
        user: this.$store.getters.user,
        expenses: [],
        status: null,
        from: moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("week").format("YYYY-MM-DD"),
        to: moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("week").format("YYYY-MM-DD")
      },
      errors: {
        date_range: [],
        code: [],
        description: [],
        remarks: [],
        notes: [],
        user_id: [],
        expenses: []
      },
      rules: {}
    };
  },
  methods: {
    onUpdate: function onUpdate(e) {
      this.form = e || this.form;
    },
    onSave: function onSave(value) {
      var _this = this;

      value.user_id = value.user == null ? null : value.user.id;
      _services_ExpenseReportDataService__WEBPACK_IMPORTED_MODULE_2__["default"].store(value).then(function (response) {
        _this.mixin_successDialog(response.data.status, response.data.message);

        _this.$router.push({
          name: "user.expense_reports.index"
        });

        _this.formDataLoaded = true;
      })["catch"](function (error) {
        _this.errors = error.response.data.errors;

        _this.mixin_showErrors(error);

        _this.formDataLoaded = true;
      });
    }
  },
  watch: {
    "form.user": function formUser() {
      this.errors.user_id = [];
    }
  },
  created: function created() {
    this.formDataLoaded = true;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/Create.vue?vue&type=template&id=70dfc3c0&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/expense_reports/Create.vue?vue&type=template&id=70dfc3c0& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      !_vm.formDataLoaded
        ? _c("loader-component")
        : _c(
            "v-card",
            { staticClass: "elevation-0 pt-0" },
            [
              _c(
                "v-card-title",
                { staticClass: "pt-0" },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "mr-3",
                      attrs: { icon: "" },
                      on: {
                        click: function($event) {
                          return _vm.$router.go(-1)
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-arrow-left")])],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c("h4", { staticClass: "title green--text" }, [
                    _vm._v("New Expense Report")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-container",
                [
                  _c("Form", {
                    attrs: {
                      expenseReportForm: _vm.form,
                      expenseReportErrors: _vm.errors,
                      expenseReportRules: _vm.rules
                    },
                    on: { "on-save": _vm.onSave, "on-update": _vm.onUpdate }
                  })
                ],
                1
              )
            ],
            1
          )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/modules/user/expense_reports/Create.vue":
/*!********************************************************************!*\
  !*** ./resources/js/views/modules/user/expense_reports/Create.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_70dfc3c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=70dfc3c0& */ "./resources/js/views/modules/user/expense_reports/Create.vue?vue&type=template&id=70dfc3c0&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/user/expense_reports/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_70dfc3c0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_70dfc3c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/user/expense_reports/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/user/expense_reports/Create.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/modules/user/expense_reports/Create.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/user/expense_reports/Create.vue?vue&type=template&id=70dfc3c0&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/modules/user/expense_reports/Create.vue?vue&type=template&id=70dfc3c0& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_70dfc3c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=70dfc3c0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/Create.vue?vue&type=template&id=70dfc3c0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_70dfc3c0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_70dfc3c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);