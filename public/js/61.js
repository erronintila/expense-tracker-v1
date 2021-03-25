(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expenses/Edit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expenses/Edit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Form */ "./resources/js/views/modules/admin/expenses/Form.vue");
/* harmony import */ var _components_dialogs_AddVendor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/dialogs/AddVendor */ "./resources/js/components/dialogs/AddVendor.vue");
/* harmony import */ var _components_selector_dialog_UserDialogSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/selector/dialog/UserDialogSelector */ "./resources/js/components/selector/dialog/UserDialogSelector.vue");
/* harmony import */ var _services_ExpenseDataService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/ExpenseDataService */ "./resources/js/services/ExpenseDataService.js");
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
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AddVendor: _components_dialogs_AddVendor__WEBPACK_IMPORTED_MODULE_3__["default"],
    UserDialogSelector: _components_selector_dialog_UserDialogSelector__WEBPACK_IMPORTED_MODULE_4__["default"],
    Form: _Form__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      formDataLoaded: false,
      usersParameters: {
        params: {
          with_expense_types: true
        }
      },
      items: [],
      itemize: false,
      form: {
        code: null,
        description: null,
        amount: 0,
        details_quantity: 0,
        details_amount: 0,
        // reimbursable_amount: 0,
        receipt_number: null,
        date: null,
        remarks: "",
        is_active: true,
        // expense_type: {
        //     id: null,
        //     name: "",
        //     limit: null,
        //     sub_types: null
        // },
        // sub_type: { id: null, name: "", limit: null },
        expense_type: null,
        sub_type: null,
        // user: {
        //     id: null,
        //     remaining_fund: 0,
        //     fund: 0,
        //     expense_types: null
        // },
        // vendor: {
        //     id: null,
        //     name: "",
        //     tin: "",
        //     is_vat_inclusive: false
        // },
        user: null,
        vendor: null,
        // particular: "",
        // particular_amount: 0,
        // particular_reimbursable_amount: 0,
        is_reimbursable: false,
        revolving_fund: 0,
        reimbursable_amount: 0,
        details: [],
        // details: {
        //     description: "",
        //     amount: 0
        // },
        is_tax_inclusive: true,
        tax_name: "",
        tax_rate: 0,
        tax_amount: 0
      },
      rules: {
        reimbursable_amount: [],
        revolving_fund: []
      },
      errors: {
        sub_type: [],
        description: [],
        amount: [],
        reimbursable_amount: [],
        receipt_number: [],
        date: [],
        remarks: [],
        is_active: [],
        expense_type_id: [],
        user_id: [],
        vendor_id: []
      }
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _services_ExpenseDataService__WEBPACK_IMPORTED_MODULE_5__["default"].show(_this.$route.params.id).then(function (response) {
          var _data$details;

          var data = response.data.data;
          _this.form.code = data.code;
          _this.form.description = data.description;
          _this.form.receipt_number = data.receipt_number;
          _this.form.date = data.date;
          _this.form.remarks = data.remarks;
          _this.form.is_active = data.is_active;
          _this.form.user = data.user;
          _this.form.vendor = data.vendor;
          _this.form.expense_type = data.expense_type;
          _this.expense_types = data.user.expense_types;
          _this.sub_types = data.expense_type.sub_types;
          _this.form.is_tax_inclusive = data.is_tax_inclusive;
          _this.form.tax_name = data.tax_name;
          _this.form.tax_rate = data.tax_rate;
          _this.form.tax_amount = data.tax_amount;
          _this.form.details = (_data$details = data.details) !== null && _data$details !== void 0 ? _data$details : [];

          if (data.details && data.details.length) {
            _this.itemize = true;
            _this.items = data.details;
          } else {
            _this.form.amount = data.amount;
          }

          _this.sub_types.unshift({
            id: null,
            name: "None",
            limit: null
          });

          _this.form.sub_type = data.sub_type == null ? {
            id: null,
            name: "None",
            limit: null
          } : data.sub_type;

          if (data.revolving_fund > 0) {
            // this.paid_through_fund = true;
            _this.form.revolving_fund = data.revolving_fund;
          } else {
            // this.paid_through_fund = false;
            _this.form.revolving_fund = 0;
          }

          _this.form.reimbursable_amount = data.reimbursable_amount;
          _this.form.user.remaining_fund += data.amount - data.reimbursable_amount;
          _this.loading = false;
          _this.formDataLoaded = true;
          resolve();
        })["catch"](function (error) {
          _this.mixin_showErrors(error);

          _this.loading = false;
          _this.formDataLoaded = true;

          _this.$router.push({
            name: "admin.expenses.index"
          }, function () {});

          reject();
        });
      });
    },
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
      var _this2 = this;

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
      _services_ExpenseDataService__WEBPACK_IMPORTED_MODULE_5__["default"].update(this.$route.params.id, value).then(function (response) {
        _this2.mixin_successDialog(response.data.status, response.data.message);

        _this2.$router.go(-1);

        _this2.loading = false;
      })["catch"](function (error) {
        _this2.mixin_showErrors(error);

        if (error.response.data.data !== null) {
          _this2.errors = error.response.data.errors;
        }

        _this2.loading = false;
      });
    }
  },
  created: function created() {
    this.getData();
  },
  activated: function activated() {
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expenses/Edit.vue?vue&type=template&id=d09223b2&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expenses/Edit.vue?vue&type=template&id=d09223b2& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
                    _vm._v("Edit Expense")
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
                          itemizeExpenses: _vm.itemize,
                          expenseForm: _vm.form,
                          errors: _vm.errors,
                          rules: _vm.rules
                        },
                        on: { "on-save": _vm.onSave },
                        scopedSlots: _vm._u(
                          [
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
                                              "error-messages":
                                                _vm.errors.user_id,
                                              label: "Employee",
                                              readonly: ""
                                            },
                                            on: {
                                              input: function($event) {
                                                _vm.errors.user_id = []
                                              }
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "append",
                                                  fn: function() {
                                                    return [
                                                      _c("UserDialogSelector", {
                                                        ref:
                                                          "userDialogSelector",
                                                        attrs: {
                                                          selectedUser:
                                                            _vm.form.user,
                                                          usersParameters:
                                                            _vm.usersParameters
                                                        },
                                                        on: {
                                                          selectUser:
                                                            _vm.selectUser,
                                                          onReset: _vm.resetUser
                                                        },
                                                        scopedSlots: _vm._u(
                                                          [
                                                            {
                                                              key: "openDialog",
                                                              fn: function(
                                                                ref
                                                              ) {
                                                                var bind =
                                                                  ref.bind
                                                                var on = ref.on
                                                                return [
                                                                  _c(
                                                                    "v-btn",
                                                                    _vm._g(
                                                                      _vm._b(
                                                                        {
                                                                          attrs: {
                                                                            fab:
                                                                              "",
                                                                            color:
                                                                              "primary",
                                                                            text:
                                                                              "",
                                                                            "x-small":
                                                                              ""
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
                                                                            dark:
                                                                              ""
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
                                                          ],
                                                          null,
                                                          false,
                                                          2729772431
                                                        )
                                                      })
                                                    ]
                                                  },
                                                  proxy: true
                                                }
                                              ],
                                              null,
                                              false,
                                              4251958511
                                            )
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
                          ],
                          null,
                          false,
                          2473804440
                        )
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

/***/ "./resources/js/views/modules/admin/expenses/Edit.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/modules/admin/expenses/Edit.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_d09223b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=d09223b2& */ "./resources/js/views/modules/admin/expenses/Edit.vue?vue&type=template&id=d09223b2&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/expenses/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_d09223b2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_d09223b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/expenses/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/expenses/Edit.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expenses/Edit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expenses/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/expenses/Edit.vue?vue&type=template&id=d09223b2&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expenses/Edit.vue?vue&type=template&id=d09223b2& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_d09223b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=d09223b2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expenses/Edit.vue?vue&type=template&id=d09223b2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_d09223b2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_d09223b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);