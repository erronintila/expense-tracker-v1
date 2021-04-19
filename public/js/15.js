(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/Edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/expense_reports/Edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _admin_expense_reports_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../admin/expense_reports/Form */ "./resources/js/views/modules/admin/expense_reports/Form.vue");
/* harmony import */ var _services_ExpenseReportDataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/ExpenseReportDataService */ "./resources/js/services/ExpenseReportDataService.js");
/* harmony import */ var _services_ExpenseDataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/ExpenseDataService */ "./resources/js/services/ExpenseDataService.js");
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
      expense_report_id: parseInt(this.$route.params.id),
      form: {
        code: "",
        description: "",
        remarks: "",
        notes: "",
        user: null,
        expenses: [],
        status: null,
        from: "",
        to: ""
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
    getData: function getData() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _services_ExpenseReportDataService__WEBPACK_IMPORTED_MODULE_2__["default"].show(_this.$route.params.id).then(function (response) {
          _this.formDataLoaded = true;
          resolve(response.data.data);
        })["catch"](function (error) {
          _this.mixin_showErrors(error);

          _this.formDataLoaded = true;

          _this.$router.push({
            name: "user.expense_reports.index"
          }, function () {});

          reject();
        });
      });
    },
    loadExpenses: function loadExpenses(reportData) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _services_ExpenseDataService__WEBPACK_IMPORTED_MODULE_3__["default"].get({
          params: {
            update_report: true,
            user_id: reportData.user ? reportData.user.id : null,
            start_date: reportData.from,
            end_date: moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf().format("YYYY-MM-DD"),
            expense_report_id: _this2.$route.params.id
          }
        }).then(function (response) {
          _this2.formDataLoaded = true;
          resolve(response.data.data);
        })["catch"](function (error) {
          _this2.mixin_showErrors(error);

          _this2.formDataLoaded = true;
          reject();
        });
      });
    },
    onSave: function onSave(value) {
      var _this3 = this;

      this.formDataLoaded = false;
      value.user_id = value.user ? value.user.id : null;
      _services_ExpenseReportDataService__WEBPACK_IMPORTED_MODULE_2__["default"].update(this.$route.params.id, value).then(function (response) {
        _this3.mixin_successDialog(response.data.status, response.data.message);

        _this3.$router.push({
          name: "user.expense_reports.index"
        });

        _this3.formDataLoaded = true;
      })["catch"](function (error) {
        _this3.mixin_showErrors(error);

        _this3.errors = error.response.data.errors;
        _this3.formDataLoaded = true;
      });
    }
  },
  created: function created() {
    var _this4 = this;

    this.getData().then(function (data) {
      _this4.loadExpenses(data).then(function (expenses) {
        _this4.form = data;
        _this4.form.expenses = expenses;
        _this4.formDataLoaded = true;
      });
    });
  } // activated() {
  //     this.getData().then(data => {
  //         this.loadExpenses(data).then(expenses => {
  //             this.form = data;
  //             this.form.expenses = expenses;
  //             this.formDataLoaded = true;
  //         });
  //     });
  // }

});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/Edit.vue?vue&type=template&id=6195f4ce&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/expense_reports/Edit.vue?vue&type=template&id=6195f4ce& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
                    _vm._v("Edit Expense Report")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-container",
                [
                  _vm.formDataLoaded
                    ? _c("Form", {
                        attrs: {
                          expenseReportForm: _vm.form,
                          expenseReportErrors: _vm.errors,
                          expenseReportRules: _vm.rules,
                          expense_report_id: _vm.expense_report_id
                        },
                        on: { "on-save": _vm.onSave }
                      })
                    : _vm._e()
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

/***/ "./resources/js/views/modules/user/expense_reports/Edit.vue":
/*!******************************************************************!*\
  !*** ./resources/js/views/modules/user/expense_reports/Edit.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_6195f4ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=6195f4ce& */ "./resources/js/views/modules/user/expense_reports/Edit.vue?vue&type=template&id=6195f4ce&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/user/expense_reports/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_6195f4ce___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_6195f4ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/user/expense_reports/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/user/expense_reports/Edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/modules/user/expense_reports/Edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/user/expense_reports/Edit.vue?vue&type=template&id=6195f4ce&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/modules/user/expense_reports/Edit.vue?vue&type=template&id=6195f4ce& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_6195f4ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=6195f4ce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/Edit.vue?vue&type=template&id=6195f4ce&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_6195f4ce___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_6195f4ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);