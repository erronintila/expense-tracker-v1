(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/payments/Edit.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/payments/Edit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form */ "./resources/js/views/pages/payments/Form.vue");
/* harmony import */ var _services_PaymentDataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/PaymentDataService */ "./resources/js/services/PaymentDataService.js");
/* harmony import */ var _services_ExpenseReportDataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/ExpenseReportDataService */ "./resources/js/services/ExpenseReportDataService.js");
/* harmony import */ var _components_selector_dialog_UserDialogSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/selector/dialog/UserDialogSelector */ "./resources/js/components/selector/dialog/UserDialogSelector.vue");
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
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    UserDialogSelector: _components_selector_dialog_UserDialogSelector__WEBPACK_IMPORTED_MODULE_4__["default"],
    Form: _Form__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      loader: true,
      formDataLoaded: false,
      usersParameters: {
        params: {
          is_superadmin: false
        }
      },
      payment_id: parseInt(this.$route.params.id),
      form: {
        id: 0,
        code: "",
        reference_no: "",
        voucher_no: "",
        description: "",
        date: moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD"),
        cheque_no: "",
        cheque_date: "",
        amount: 0,
        payee: "",
        payee_address: "",
        payee_phone: "",
        remarks: "",
        notes: "",
        status: "",
        user: null
      },
      errors: {
        user_id: [],
        code: [],
        reference_no: [],
        voucher_no: [],
        description: [],
        date: [],
        cheque_no: [],
        cheque_date: [],
        amount: [],
        payee: [],
        payee_address: [],
        payee_phone: [],
        remarks: [],
        notes: [],
        expense_reports: []
      },
      rules: {}
    };
  },
  methods: {
    selectUser: function selectUser(e) {
      if (e == null || e == undefined) {
        this.form.user = null;
        return;
      }

      this.form.user = e;
    },
    resetUser: function resetUser() {
      this.form.user = null;
    },
    getData: function getData() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _services_PaymentDataService__WEBPACK_IMPORTED_MODULE_2__["default"].show(_this.$route.params.id).then(function (response) {
          _this.loader = false;
          resolve(response.data.data);
        })["catch"](function (error) {
          _this.mixin_showErrors(error);

          _this.loader = false;

          _this.$router.push({
            name: "user.payments.index"
          }, function () {});

          reject();
        });
      });
    },
    loadExpenseReports: function loadExpenseReports() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _services_ExpenseReportDataService__WEBPACK_IMPORTED_MODULE_3__["default"].get({
          params: {
            update_payment: true,
            // user_id: paymentData.user ? paymentData.user.id : null,
            payment_id: _this2.$route.params.id
          }
        }).then(function (response) {
          _this2.loader = false;
          resolve(response.data.data);
        })["catch"](function (error) {
          _this2.mixin_showErrors(error);

          _this2.loader = false;
          reject();
        });
      });
    },
    onSave: function onSave(value) {
      var _this3 = this;

      this.loader = true;
      _services_PaymentDataService__WEBPACK_IMPORTED_MODULE_2__["default"].update(this.$route.params.id, value).then(function (response) {
        _this3.mixin_successDialog(response.data.status, response.data.message);

        _this3.$router.push({
          name: "user.payments.index"
        });

        _this3.loader = false;
      })["catch"](function (error) {
        _this3.mixin_showErrors(error);

        _this3.errors = error.response.data.errors;
        _this3.loader = false;
      });
    }
  },
  created: function created() {
    var _this4 = this;

    this.getData().then(function (data) {
      _this4.form = data;

      _this4.loadExpenseReports().then(function (data) {
        _this4.form.expense_reports = data;
        _this4.formDataLoaded = true;
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/payments/Edit.vue?vue&type=template&id=509109dc&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/payments/Edit.vue?vue&type=template&id=509109dc& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
                    _vm._v("Edit Payment Record")
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
                          paymentForm: _vm.form,
                          paymentErrors: _vm.errors,
                          paymentRules: _vm.rules,
                          payment_id: _vm.payment_id,
                          isEdit: true
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
                                                _vm.mixin_can(
                                                  "select specific users on expense reports"
                                                )
                                                  ? {
                                                      key: "append",
                                                      fn: function() {
                                                        return [
                                                          _c(
                                                            "UserDialogSelector",
                                                            {
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
                                                                onReset:
                                                                  _vm.resetUser
                                                              },
                                                              scopedSlots: _vm._u(
                                                                [
                                                                  {
                                                                    key:
                                                                      "openDialog",
                                                                    fn: function(
                                                                      ref
                                                                    ) {
                                                                      var bind =
                                                                        ref.bind
                                                                      var on =
                                                                        ref.on
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
                                                            }
                                                          )
                                                        ]
                                                      },
                                                      proxy: true
                                                    }
                                                  : null
                                              ],
                                              null,
                                              true
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
                          4145711340
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

/***/ "./resources/js/views/pages/payments/Edit.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/pages/payments/Edit.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_509109dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=509109dc& */ "./resources/js/views/pages/payments/Edit.vue?vue&type=template&id=509109dc&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/payments/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_509109dc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_509109dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/payments/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/payments/Edit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/pages/payments/Edit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/payments/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/payments/Edit.vue?vue&type=template&id=509109dc&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/pages/payments/Edit.vue?vue&type=template&id=509109dc& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_509109dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=509109dc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/payments/Edit.vue?vue&type=template&id=509109dc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_509109dc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_509109dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);