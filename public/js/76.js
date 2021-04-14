(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[76],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/expenses/Create.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/expenses/Create.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form */ "./resources/js/views/pages/expenses/Form.vue");
/* harmony import */ var _components_selector_dialog_UserDialogSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/selector/dialog/UserDialogSelector */ "./resources/js/components/selector/dialog/UserDialogSelector.vue");
/* harmony import */ var _services_ExpenseDataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/ExpenseDataService */ "./resources/js/services/ExpenseDataService.js");
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
    Form: _Form__WEBPACK_IMPORTED_MODULE_1__["default"],
    UserDialogSelector: _components_selector_dialog_UserDialogSelector__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      formDataLoaded: true,
      usersParameters: {
        params: {
          with_expense_types: true,
          is_superadmin: false
        }
      },
      itemize: false,
      form: {
        code: null,
        reference_no: null,
        description: null,
        amount: 0,
        reimbursable_amount: 0,
        tax_name: "",
        tax_rate: 0,
        is_compound_tax: false,
        is_tax_inclusive: true,
        tax_amount: 0,
        receipt_number: null,
        date: moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD"),
        details: [],
        // details: {
        //     description: "",
        //     quantity: 1,
        //     amount: 0,
        //     total: 0
        // },
        remarks: "",
        notes: "",
        encoding_period: this.$store.getters.settings.expense_encoding_period,
        // expense_type: {
        //     id: null,
        //     name: "",
        //     limit: null,
        //     sub_types: { id: null, name: "None", limit: null }
        // },
        expense_type: null,
        sub_type: null,
        // sub_type: { id: null, name: "", limit: null },
        user: null,
        vendor: null,
        expense_report_id: null,
        tax_id: null,
        expense_header_id: null,
        details_quantity: 0,
        details_amount: 0,
        is_active: true,
        // particular: "",
        // particular_amount: 0,
        // particular_reimbursable_amount: 0,
        is_reimbursable: false,
        revolving_fund: 0
      },
      rules: {
        reimbursable_amount: [],
        revolving_fund: []
      },
      errors: {
        sub_type: [],
        code: [],
        reference_no: [],
        description: [],
        amount: [],
        reimbursable_amount: [],
        tax_name: [],
        tax_rate: [],
        is_compound_tax: [],
        is_tax_inclusive: [],
        tax_amount: [],
        receipt_number: [],
        date: [],
        details: [],
        remarks: [],
        notes: [],
        encoding_period: [],
        expense_type_id: [],
        sub_type_id: [],
        user_id: [],
        vendor_id: [],
        expense_report_id: [],
        tax_id: [],
        expense_header_id: [],
        is_active: []
      }
    };
  },
  methods: {
    selectUser: function selectUser(e) {
      this.errors.user_id = [];

      if (e == null || e == undefined) {
        this.form.user = null;
        return;
      }

      this.form.user = e;
    },
    resetUser: function resetUser() {
      this.form.user = null;
    },
    onSave: function onSave(value) {
      var _this = this;

      if (value.vendor) {
        if (!value.vendor.is_vat_inclusive) {
          value.tax_rate = 0;
          value.tax_amount = 0;
        }
      }

      value.details = value.itemize ? value.items : null;
      value.expense_type_id = value.expense_type ? value.expense_type.id : null;
      value.sub_type_id = value.sub_type ? value.sub_type.id : null;
      value.user_id = value.user ? value.user.id : null;
      value.vendor_id = value.vendor ? value.vendor.id : null;
      value.reimbursable_amount = value.amount_to_reimburse;
      _services_ExpenseDataService__WEBPACK_IMPORTED_MODULE_3__["default"].store(value).then(function (response) {
        _this.mixin_successDialog(response.data.status, response.data.message);

        _this.$router.go(-1);

        _this.loading = false;
        _this.formDataLoaded = true;
      })["catch"](function (error) {
        _this.mixin_showErrors(error);

        _this.errors = error.response.data.errors;
        _this.formDataLoaded = true;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/expenses/Create.vue?vue&type=template&id=6d587456&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/expenses/Create.vue?vue&type=template&id=6d587456& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
                    _vm._v("New Expense")
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
                      errors: _vm.errors,
                      expenseForm: _vm.form,
                      rules: _vm.rules
                    },
                    on: { "on-save": _vm.onSave },
                    scopedSlots: _vm._u([
                      {
                        key: "userSelector",
                        fn: function() {
                          return [
                            _c(
                              "v-row",
                              [
                                _c(
                                  "v-col",
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        value: _vm.form.user
                                          ? _vm.form.user.full_name
                                          : "No Employee",
                                        "error-messages": _vm.errors.user_id,
                                        label: "Employee",
                                        readonly: ""
                                      },
                                      on: {
                                        input: function($event) {
                                          _vm.errors.user_id = []
                                        }
                                      },
                                      scopedSlots: _vm._u([
                                        {
                                          key: "append",
                                          fn: function() {
                                            return [
                                              _c("UserDialogSelector", {
                                                ref: "userDialogSelector",
                                                attrs: {
                                                  selectedUser: _vm.form.user,
                                                  usersParameters:
                                                    _vm.usersParameters,
                                                  itemize: _vm.itemize
                                                },
                                                on: {
                                                  selectUser: _vm.selectUser,
                                                  onReset: _vm.resetUser
                                                },
                                                scopedSlots: _vm._u([
                                                  {
                                                    key: "openDialog",
                                                    fn: function(ref) {
                                                      var bind = ref.bind
                                                      var on = ref.on
                                                      return [
                                                        _c(
                                                          "v-btn",
                                                          _vm._g(
                                                            _vm._b(
                                                              {
                                                                attrs: {
                                                                  fab: "",
                                                                  color:
                                                                    "primary",
                                                                  text: "",
                                                                  "x-small": ""
                                                                }
                                                              },
                                                              "v-btn",
                                                              bind,
                                                              false
                                                            ),
                                                            on
                                                          ),
                                                          [
                                                            _c(
                                                              "v-icon",
                                                              {
                                                                attrs: {
                                                                  dark: ""
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "mdi-magnify"
                                                                )
                                                              ]
                                                            )
                                                          ],
                                                          1
                                                        )
                                                      ]
                                                    }
                                                  }
                                                ])
                                              })
                                            ]
                                          },
                                          proxy: true
                                        }
                                      ])
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ]
                        },
                        proxy: true
                      }
                    ])
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

/***/ "./resources/js/views/pages/expenses/Create.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/pages/expenses/Create.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_6d587456___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=6d587456& */ "./resources/js/views/pages/expenses/Create.vue?vue&type=template&id=6d587456&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/expenses/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_6d587456___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_6d587456___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/expenses/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/expenses/Create.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/pages/expenses/Create.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/expenses/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/expenses/Create.vue?vue&type=template&id=6d587456&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/pages/expenses/Create.vue?vue&type=template&id=6d587456& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_6d587456___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=6d587456& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/expenses/Create.vue?vue&type=template&id=6d587456&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_6d587456___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_6d587456___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);