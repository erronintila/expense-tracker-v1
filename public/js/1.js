(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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
        amount: "",
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
    loadExpenseReports: function loadExpenseReports(paymentData) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _services_ExpenseReportDataService__WEBPACK_IMPORTED_MODULE_3__["default"].get({
          params: {
            update_payment: true,
            user_id: paymentData.user ? paymentData.user.id : null,
            start_date: paymentData.from,
            end_date: moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf().format("YYYY-MM-DD"),
            payment_id: _this2.$route.params.id
          }
        }).then(function (response) {
          console.log("loadExpenseReports", response.data);
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
      value.user_id = value.user ? value.user.id : null;
      _services_ExpenseReportDataService__WEBPACK_IMPORTED_MODULE_3__["default"].update(this.$route.params.id, value).then(function (response) {
        _this3.mixin_successDialog(response.data.status, response.data.message);

        _this3.$router.push({
          name: "user.expense_reports.index"
        });

        _this3.loader = false;
      })["catch"](function (error) {
        _this3.mixin_showErrors(error);

        _this3.errors = error.response.data.errors;
        _this3.loader = false;
      });
    }
  },
  computed: {// params(nv) {
    //     return {
    //         ...this.options,
    //         query: this.search,
    //         query: this.user,
    //         query: this.date_range
    //     };
    // },
  },
  watch: {// params: {
    //     immediate: true,
    //     deep: true,
    //     handler() {
    //         this.getDataFromApi().then(data => {
    //             this.items = data.items;
    //             this.totalItems = data.total;
    //         });
    //     }
    // },
    // selected() {
    //     this.totalAmount = this.mixin_formatNumber(
    //         this.selected.reduce((total, item) => total + item.total, 0)
    //     );
    // },
    // "form.user": function() {
    //     this.getDataFromApi().then(data => {
    //         this.items = data.items;
    //         this.totalItems = data.total;
    //     });
    // }
  },
  created: function created() {
    var _this4 = this;

    this.formDataLoaded = true; // this.getData();

    this.getData().then(function (data) {
      // this.loadExpenseReports(data).then(expense_reports => {
      _this4.form = data; // this.form.expense_reports = expense_reports;

      _this4.formDataLoaded = true; // });
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/payments/Form.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/payments/Form.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\resources\\js\\views\\pages\\payments\\Form.vue: Unexpected token, expected \",\" (559:49)\n\n\u001b[0m \u001b[90m 557 | \u001b[39m            deep\u001b[33m:\u001b[39m \u001b[36mtrue\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 558 | \u001b[39m            handler(newValue\u001b[33m,\u001b[39m oldValue) {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 559 | \u001b[39m                console\u001b[33m.\u001b[39mlog(newValue\u001b[33m,\u001b[39m newValue\u001b[33m.\u001b[39mto])\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m                                                 \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 560 | \u001b[39m                \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mform \u001b[33m=\u001b[39m newValue\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 561 | \u001b[39m                \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mrange \u001b[33m=\u001b[39m [newValue\u001b[33m.\u001b[39mfrom\u001b[33m,\u001b[39m newValue\u001b[33m.\u001b[39mto]\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 562 | \u001b[39m                \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mselected \u001b[33m=\u001b[39m newValue\u001b[33m.\u001b[39mexpense_reports \u001b[33m||\u001b[39m []\u001b[33m;\u001b[39m\u001b[0m\n    at Parser._raise (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:766:17)\n    at Parser.raiseWithData (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:759:17)\n    at Parser.raise (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:753:17)\n    at Parser.unexpected (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:8966:16)\n    at Parser.expect (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:8952:28)\n    at Parser.parseCallExpressionArguments (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:10033:14)\n    at Parser.parseCoverCallAndAsyncArrowHead (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9960:29)\n    at Parser.parseSubscript (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9896:19)\n    at Parser.parseSubscripts (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9867:19)\n    at Parser.parseExprSubscripts (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9850:17)\n    at Parser.parseUpdate (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9824:21)\n    at Parser.parseMaybeUnary (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9813:17)\n    at Parser.parseExprOps (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9683:23)\n    at Parser.parseMaybeConditional (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9657:23)\n    at Parser.parseMaybeAssign (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9620:21)\n    at Parser.parseExpressionBase (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9564:23)\n    at C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9558:39\n    at Parser.allowInAnd (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:11297:16)\n    at Parser.parseExpression (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9558:17)\n    at Parser.parseStatementContent (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:11562:23)\n    at Parser.parseStatement (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:11431:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:12013:25)\n    at Parser.parseBlockBody (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:11999:10)\n    at Parser.parseBlock (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:11983:10)\n    at Parser.parseFunctionBody (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:10963:24)\n    at Parser.parseFunctionBodyAndFinish (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:10946:10)\n    at Parser.parseMethod (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:10883:10)\n    at Parser.parseObjectMethod (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:10808:19)\n    at Parser.parseObjPropValue (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:10841:23)\n    at Parser.parsePropertyDefinition (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:10772:10)\n    at Parser.parseObjectLike (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:10664:25)\n    at Parser.parseExprAtom (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:10198:23)\n    at Parser.parseExprSubscripts (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9844:23)\n    at Parser.parseUpdate (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9824:21)\n    at Parser.parseMaybeUnary (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9813:17)\n    at Parser.parseExprOps (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9683:23)");

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
                          payment_id: _vm.payment_id
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/payments/Form.vue?vue&type=template&id=d713a668&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/payments/Form.vue?vue&type=template&id=d713a668& ***!
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
            "v-form",
            {
              ref: "form",
              model: {
                value: _vm.valid,
                callback: function($$v) {
                  _vm.valid = $$v
                },
                expression: "valid"
              }
            },
            [
              _c(
                "v-card",
                { staticClass: "mx-auto mb-4", attrs: { flat: "" } },
                [
                  _c(
                    "div",
                    { staticClass: "overline green--text" },
                    [
                      _vm._v(
                        "\n                BASIC DETAILS\n                "
                      ),
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            color: _vm.form.status.color,
                            "x-small": "",
                            dark: ""
                          }
                        },
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(_vm.form.status.status) +
                              "\n                "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-menu",
                    {
                      ref: "menu",
                      attrs: {
                        transition: "scale-transition",
                        "offset-y": "",
                        "min-width": "290px"
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "activator",
                          fn: function(ref) {
                            var on = ref.on
                            var attrs = ref.attrs
                            return [
                              _c(
                                "v-text-field",
                                _vm._g(
                                  _vm._b(
                                    {
                                      attrs: {
                                        "error-messages":
                                          _vm.paymentErrors.date,
                                        label: "Date",
                                        readonly: ""
                                      },
                                      on: {
                                        input: function($event) {
                                          _vm.paymentErrors.date = []
                                        }
                                      },
                                      model: {
                                        value: _vm.form.date,
                                        callback: function($$v) {
                                          _vm.$set(_vm.form, "date", $$v)
                                        },
                                        expression: "form.date"
                                      }
                                    },
                                    "v-text-field",
                                    attrs,
                                    false
                                  ),
                                  on
                                )
                              )
                            ]
                          }
                        }
                      ]),
                      model: {
                        value: _vm.menu,
                        callback: function($$v) {
                          _vm.menu = $$v
                        },
                        expression: "menu"
                      }
                    },
                    [
                      _vm._v(" "),
                      _c("v-date-picker", {
                        attrs: {
                          "no-title": "",
                          scrollable: "",
                          color: "success",
                          max: _vm.maxDate
                        },
                        model: {
                          value: _vm.form.date,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "date", $$v)
                          },
                          expression: "form.date"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._t("userSelector"),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      rules: _vm.mixin_validation.required.concat(
                        _vm.mixin_validation.minLength(100)
                      ),
                      counter: 100,
                      "error-messages": _vm.paymentErrors.description,
                      label: "Description",
                      required: ""
                    },
                    model: {
                      value: _vm.form.description,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "description", $$v)
                      },
                      expression: "form.description"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      rules: [].concat(_vm.mixin_validation.required),
                      "error-messages": _vm.paymentErrors.voucher_no,
                      counter: 100,
                      label: "Voucher No.",
                      required: "",
                      type: "number"
                    },
                    model: {
                      value: _vm.form.voucher_no,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "voucher_no", $$v)
                      },
                      expression: "form.voucher_no"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "overline green--text mb-4" }, [
                    _vm._v("\n                Expense Reports\n            ")
                  ]),
                  _vm._v(" "),
                  _vm.paymentErrors.expense_reports &&
                  _vm.paymentErrors.expense_reports.length > 0
                    ? _c("small", { staticClass: "red--text" }, [
                        _vm._v(_vm._s(_vm.paymentErrors.expense_reports[0]))
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "v-data-table",
                    {
                      staticClass: "elevation-0",
                      attrs: {
                        headers: _vm.headers,
                        items: _vm.items,
                        loading: _vm.loading,
                        options: _vm.options,
                        "server-items-length": _vm.totalItems,
                        "footer-props": {
                          itemsPerPageOptions: [10, 20, 50, 100],
                          showFirstLastPage: true,
                          firstIcon: "mdi-page-first",
                          lastIcon: "mdi-page-last",
                          prevIcon: "mdi-chevron-left",
                          nextIcon: "mdi-chevron-right"
                        },
                        "show-expand": "",
                        "single-expand": "",
                        "show-select": "",
                        "item-key": "id"
                      },
                      on: {
                        "update:options": function($event) {
                          _vm.options = $event
                        }
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "top",
                            fn: function() {
                              return [
                                _c("DateRangePicker", {
                                  ref: "dateRangePicker",
                                  attrs: { dateRange: _vm.range },
                                  on: { "on-change": _vm.updateDates },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "openDialog",
                                      fn: function(ref) {
                                        var on = ref.on
                                        var attrs = ref.attrs
                                        var dateRangeText = ref.dateRangeText
                                        return [
                                          _c(
                                            "v-text-field",
                                            _vm._g(
                                              _vm._b(
                                                {
                                                  attrs: {
                                                    label: "Date",
                                                    readonly: "",
                                                    value: dateRangeText
                                                  }
                                                },
                                                "v-text-field",
                                                attrs,
                                                false
                                              ),
                                              on
                                            )
                                          )
                                        ]
                                      }
                                    }
                                  ])
                                }),
                                _vm._v(" "),
                                _vm.selected.length > 0
                                  ? _c(
                                      "div",
                                      [
                                        _c("div", { staticClass: "d-inline" }, [
                                          _vm._v(
                                            "\n                            " +
                                              _vm._s(_vm.selected.length) +
                                              " Item(s) Selected\n                        "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          {
                                            on: {
                                              click: function($event) {
                                                _vm.selected = []
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                            Clear All Selected\n                        "
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  : _vm._e()
                              ]
                            },
                            proxy: true
                          },
                          {
                            key: "item.period",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(item.from) +
                                    " ~ " +
                                    _vm._s(item.to) +
                                    "\n                "
                                )
                              ]
                            }
                          },
                          {
                            key: "item.actions",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "v-icon",
                                  {
                                    staticClass: "mr-2",
                                    attrs: { small: "" },
                                    on: {
                                      click: function($event) {
                                        return _vm.$router.push(
                                          "/expense_reports/" + item.id
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                        mdi-eye\n                    "
                                    )
                                  ]
                                )
                              ]
                            }
                          },
                          {
                            key: "expanded-item",
                            fn: function(ref) {
                              var headers = ref.headers
                              var item = ref.item
                              return [
                                _c(
                                  "td",
                                  { attrs: { colspan: headers.length } },
                                  [
                                    _c("table", [
                                      _c("tr", [
                                        _c("td", [
                                          _c("strong", [_vm._v("Created")])
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [_vm._v(":")]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(
                                                _vm.mixin_formatDate(
                                                  item.created_at,
                                                  "YYYY-MM-DD HH:mm:ss"
                                                )
                                              ) +
                                              "\n                                "
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("td", [
                                          _c("strong", [
                                            _vm._v("Reimbursable Amount")
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [_vm._v(":")]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(
                                                _vm.mixin_formatNumber(
                                                  item.total_reimbursable
                                                )
                                              ) +
                                              "\n                                "
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("td", [
                                          _c("strong", [_vm._v("Paid")])
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [_vm._v(":")]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(
                                                _vm.mixin_formatNumber(
                                                  item.paid
                                                )
                                              ) +
                                              "\n                                "
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      item.balance > 0
                                        ? _c("tr", [
                                            _c("td", [
                                              _c("strong", [_vm._v("Balance")])
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [_vm._v(":")]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                "\n                                    " +
                                                  _vm._s(
                                                    _vm.mixin_formatNumber(
                                                      item.balance
                                                    )
                                                  ) +
                                                  "\n                                "
                                              )
                                            ])
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("td", [
                                          _c("strong", [_vm._v("Status")])
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [_vm._v(":")]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(item.status.status) +
                                              "\n                                    (" +
                                              _vm._s(item.status.remarks) +
                                              ")\n                                "
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      item.remarks
                                        ? _c("tr", [
                                            _c("td", [
                                              _c("strong", [_vm._v("Remarks")])
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [_vm._v(":")]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(_vm._s(item.remarks))
                                            ])
                                          ])
                                        : _vm._e()
                                    ])
                                  ]
                                )
                              ]
                            }
                          },
                          {
                            key: "item.total",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(_vm.mixin_formatNumber(item.total)) +
                                    "\n                "
                                )
                              ]
                            }
                          },
                          {
                            key: "item.user",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(
                                      item.last_name + ", " + item.first_name
                                    ) +
                                    "\n                "
                                )
                              ]
                            }
                          },
                          {
                            key: "item.updated_at",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(
                                      _vm.mixin_getHumanDate(item.updated_at)
                                    ) +
                                    "\n                "
                                )
                              ]
                            }
                          }
                        ],
                        null,
                        true
                      ),
                      model: {
                        value: _vm.selected,
                        callback: function($$v) {
                          _vm.selected = $$v
                        },
                        expression: "selected"
                      }
                    },
                    [
                      _vm._v(" "),
                      _vm._v(" "),
                      _vm._v(" "),
                      _vm._v(" "),
                      _vm._v(" "),
                      _vm._v(" "),
                      _vm._v(" "),
                      _vm.items.length > 0
                        ? _c("template", { slot: "body.append" }, [
                            _c(
                              "tr",
                              { staticClass: "green--text hidden-md-and-up" },
                              [
                                _c("td", { staticClass: "title" }, [
                                  _vm._v(
                                    "\n                            Total:\n                            "
                                  ),
                                  _c("strong", [_vm._v(_vm._s(_vm.total))])
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "tr",
                              { staticClass: "green--text hidden-sm-and-down" },
                              [
                                _c("td", { staticClass: "title" }, [
                                  _vm._v("Total")
                                ]),
                                _vm._v(" "),
                                _c("td"),
                                _vm._v(" "),
                                _c("td"),
                                _vm._v(" "),
                                _c("td"),
                                _vm._v(" "),
                                _c("td", [
                                  _c("strong", [_vm._v(_vm._s(_vm.total))])
                                ]),
                                _vm._v(" "),
                                _c("td"),
                                _vm._v(" "),
                                _c("td"),
                                _vm._v(" "),
                                _c("td"),
                                _vm._v(" "),
                                _c("td")
                              ]
                            )
                          ])
                        : _vm._e()
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "6" } },
                        [
                          _c("v-textarea", {
                            attrs: { label: "Remarks", rows: 3 },
                            model: {
                              value: _vm.form.remarks,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "remarks", $$v)
                              },
                              expression: "form.remarks"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-col", { attrs: { cols: "12", md: "6" } }, [
                        _c(
                          "table",
                          { staticClass: "mt-4", attrs: { width: "100%" } },
                          [
                            _c("tbody", [
                              _c("tr", [
                                _c("td", [
                                  _vm._v(
                                    "\n                                    Total Expense Amount\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(":")]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  {
                                    staticClass:
                                      "green--text text--darken-4 text-right"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(
                                          _vm.mixin_formatNumber(_vm.total)
                                        ) +
                                        "\n                                "
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [
                                  _vm._v(
                                    "\n                                    Paid Amount\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(":")]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  {
                                    staticClass:
                                      "green--text text--darken-4 text-right"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    (-)\n                                    " +
                                        _vm._s(
                                          _vm.mixin_formatNumber(
                                            _vm.form.amount
                                          )
                                        ) +
                                        "\n                                "
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c(
                                  "td",
                                  { attrs: { colspan: "3" } },
                                  [_c("v-divider")],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v(
                                    "\n                                    Amount to be reimbursed\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(":")]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  {
                                    staticClass:
                                      "green--text text--darken-4 text-right"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(
                                          _vm.mixin_formatNumber(_vm.balance)
                                        ) +
                                        "\n                                "
                                    )
                                  ]
                                )
                              ])
                            ])
                          ]
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { staticClass: "text-right" },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "green", dark: "" },
                              on: { click: _vm.onSave }
                            },
                            [_vm._v("Save")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.$router.go(-1)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                        Cancel\n                    "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                2
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

/***/ "./resources/js/services/ExpenseReportDataService.js":
/*!***********************************************************!*\
  !*** ./resources/js/services/ExpenseReportDataService.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import http from "../http-common";


var ExpenseReportDataService = /*#__PURE__*/function () {
  function ExpenseReportDataService() {
    _classCallCheck(this, ExpenseReportDataService);
  }

  _createClass(ExpenseReportDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/expense_reports", data);
    }
  }, {
    key: "get",
    value: function get(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/data/expense_reports", data);
    }
  }, {
    key: "show",
    value: function show(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/expense_reports/".concat(id), data);
    }
  }, {
    key: "store",
    value: function store(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/expense_reports", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/expense_reports/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/expense_reports/".concat(id), data);
    }
  }, {
    key: "restore",
    value: function restore(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/expense_reports/restore/".concat(id), data);
    }
  }, {
    key: "submit",
    value: function submit(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/expense_reports/submit/".concat(id), data);
    }
  }, {
    key: "approve",
    value: function approve(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/expense_reports/approve/".concat(id), data);
    }
  }, {
    key: "reject",
    value: function reject(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/expense_reports/reject/".concat(id), data);
    }
  }, {
    key: "duplicate",
    value: function duplicate(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/expense_reports/duplicate/".concat(id), data);
    }
  }, {
    key: "export",
    value: function _export() {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/expense_reports/export/data");
    }
  }]);

  return ExpenseReportDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new ExpenseReportDataService());

/***/ }),

/***/ "./resources/js/services/PaymentDataService.js":
/*!*****************************************************!*\
  !*** ./resources/js/services/PaymentDataService.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import http from "../http-common";


var PaymentDataService = /*#__PURE__*/function () {
  function PaymentDataService() {
    _classCallCheck(this, PaymentDataService);
  }

  _createClass(PaymentDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/payments", data);
    }
  }, {
    key: "get",
    value: function get(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/data/payments", data);
    }
  }, {
    key: "show",
    value: function show(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/payments/".concat(id), data);
    }
  }, {
    key: "store",
    value: function store(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/payments", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/payments/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/payments/".concat(id), data);
    }
  }, {
    key: "restore",
    value: function restore(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/payments/restore/".concat(id), data);
    }
  }, {
    key: "export",
    value: function _export() {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/payments/export/data");
    }
  }]);

  return PaymentDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new PaymentDataService());

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



/***/ }),

/***/ "./resources/js/views/pages/payments/Form.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/pages/payments/Form.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_d713a668___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=d713a668& */ "./resources/js/views/pages/payments/Form.vue?vue&type=template&id=d713a668&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/payments/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_d713a668___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_d713a668___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/payments/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/payments/Form.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/pages/payments/Form.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/payments/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/payments/Form.vue?vue&type=template&id=d713a668&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/pages/payments/Form.vue?vue&type=template&id=d713a668& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_d713a668___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=d713a668& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/payments/Form.vue?vue&type=template&id=d713a668&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_d713a668___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_d713a668___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);