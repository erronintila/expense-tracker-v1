(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/expense_reports/Form.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/expense_reports/Form.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_ExpenseDataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/ExpenseDataService */ "./resources/js/services/ExpenseDataService.js");
/* harmony import */ var _components_datepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/datepicker/DateRangePicker */ "./resources/js/components/datepicker/DateRangePicker.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    expenseReportForm: {
      type: Object,
      "default": function _default() {
        return {
          id: null,
          code: "",
          reference_no: "",
          description: "",
          remarks: "",
          notes: "",
          submission_period: null,
          approval_period: null,
          from: null,
          to: null,
          status: {},
          is_late_submitted: false,
          is_late_approved: false,
          total: 0,
          total_reimbursable: 0,
          paid: 0,
          balance: 0,
          total_received_payment: 0,
          expenses: [],
          payments: [],
          user: {}
        };
      }
    },
    expenseReportRules: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    expenseReportErrors: {
      type: Object,
      "default": function _default() {
        return {
          date_range: [],
          code: [],
          description: [],
          remarks: [],
          notes: [],
          user_id: [],
          expenses: []
        };
      }
    },
    expense_report_id: {
      type: Number,
      "default": null
    }
  },
  components: {
    DateRangePicker: _components_datepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      formDataLoaded: false,
      range: [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("week").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("week").format("YYYY-MM-DD")],
      selected: [],
      loading: true,
      valid: false,
      preset: {},
      presets: [],
      form: {
        id: null,
        code: "",
        reference_no: "",
        description: "",
        remarks: "",
        notes: "",
        submission_period: null,
        approval_period: null,
        from: null,
        to: null,
        status: {},
        is_late_submitted: false,
        is_late_approved: false,
        total: 0,
        total_reimbursable: 0,
        paid: 0,
        balance: 0,
        total_received_payment: 0,
        expenses: [],
        payments: [],
        user: null
      },
      headers: [{
        text: "Date",
        value: "date"
      }, {
        text: "Type",
        value: "expense_type.name"
      }, {
        text: "Receipt",
        value: "receipt_number"
      }, {
        text: "Vendor",
        value: "vendor.name"
      }, {
        text: "Amount",
        value: "amount"
      }, {
        text: "Actions",
        value: "actions",
        sortable: false
      }, {
        text: "",
        value: "data-table-expand"
      }],
      items: [],
      total: 0,
      paid: 0,
      totalItems: 0,
      options: {
        sortBy: ["created_at"],
        sortDesc: [true],
        page: 1,
        itemsPerPage: 10
      }
    };
  },
  methods: {
    updateDates: function updateDates(e) {
      this.range = e;

      if (e && e.length == 2) {
        this.form.from = e[0];
        this.form.to = e[1];
        this.$emit("on-update", this.form);
      }
    },
    getDataFromApi: function getDataFromApi() {
      var _this = this;

      this.loading = true;
      return new Promise(function (resolve, reject) {
        var _this$options = _this.options,
            sortBy = _this$options.sortBy,
            sortDesc = _this$options.sortDesc,
            page = _this$options.page,
            itemsPerPage = _this$options.itemsPerPage;
        var range = _this.range;
        var user_id = _this.form.user ? _this.form.user.id : null;
        var data = {
          params: {
            page: page,
            itemsPerPage: itemsPerPage,
            start_date: range[0],
            end_date: range[1] ? range[1] : range[0],
            user_id: user_id,
            expense_report_id: _this.form ? _this.form.id : null,
            update_report: true
          }
        };
        _services_ExpenseDataService__WEBPACK_IMPORTED_MODULE_2__["default"].getAll(data).then(function (response) {
          var items = response.data.data;
          var total = response.data.meta.total;
          _this.loading = false;
          resolve({
            items: items,
            total: total
          });
        })["catch"](function (error) {
          _this.mixin_showErrors(error);

          _this.loading = false;
          reject();
        });
      });
    },
    onSave: function onSave() {
      this.$refs.form.validate();

      if (this.form.user == null) {
        this.mixin_errorDialog("Error", "No employee selected");
        return;
      }

      if (this.selected.length == 0) {
        this.mixin_errorDialog("Error", "No expense(s) selected");
        return;
      }

      if (this.$refs.form.validate()) {
        this.$emit("on-save", this.form);
      }
    }
  },
  computed: {
    params: function params(nv) {
      return _objectSpread(_objectSpread({}, this.options), {}, _defineProperty({
        query: this.range
      }, "query", this.form.user));
    },
    default_description: function default_description() {
      return "Expense Report Summary (".concat(this.range[0], " - ").concat(this.range[1], ")");
    },
    balance: function balance() {
      return this.total - this.paid;
    }
  },
  watch: {
    params: {
      handler: function handler() {
        var _this2 = this;

        this.getDataFromApi().then(function (data) {
          _this2.items = data.items;
          _this2.totalItems = data.total;
          _this2.formDataLoaded = true;
        });
      },
      deep: true
    },
    expenseReportForm: {
      immediate: true,
      deep: true,
      handler: function handler(newValue, oldValue) {
        this.form = newValue;
        this.range = [newValue.from, newValue.to];
        this.selected = newValue.expenses || [];

        if (newValue && newValue.expenses) {
          this.total = newValue.expenses.reduce(function (total, item) {
            return total + item.amount;
          }, 0);

          if (newValue.expenses.length > 0) {
            this.expenseReportErrors.expenses = [];
          }
        }
      }
    },
    selected: function selected() {
      this.form.expenses = this.selected;
      this.$emit("on-update", this.form);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/expense_reports/Form.vue?vue&type=template&id=82885336&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/expense_reports/Form.vue?vue&type=template&id=82885336& ***!
  \************************************************************************************************************************************************************************************************************************/
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
                "div",
                { staticClass: "overline green--text" },
                [
                  _vm._v("\n            BASIC DETAILS\n            "),
                  _vm.form.status
                    ? _c(
                        "v-chip",
                        {
                          attrs: { "x-small": "", color: "form.status.color" }
                        },
                        [
                          _vm._v(
                            "\n                " +
                              _vm._s(_vm.form.status.status) +
                              "\n            "
                          )
                        ]
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
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
              _vm._t("userSelector"),
              _vm._v(" "),
              _c("v-combobox", {
                attrs: {
                  rules: _vm.mixin_validation.required.concat(
                    _vm.mixin_validation.minLength(100)
                  ),
                  counter: 100,
                  items: [_vm.default_description],
                  "error-messages": _vm.expenseReportErrors.description,
                  label: "Description"
                },
                on: {
                  input: function($event) {
                    _vm.expenseReportErrors.description = []
                  }
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
              _c("div", { staticClass: "overline green--text" }, [
                _vm._v("\n            Expenses\n        ")
              ]),
              _vm._v(" "),
              _c("v-data-table", {
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
                  "show-select": "",
                  "show-expand": "",
                  "single-expand": "",
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
                          _vm.selected.length
                            ? _c(
                                "div",
                                [
                                  _c("div", { staticClass: "d-inline" }, [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(_vm.selected.length) +
                                        " Item(s) Selected\n                    "
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
                                        "\n                        Clear All Selected\n                    "
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
                      key: "expanded-item",
                      fn: function(ref) {
                        var headers = ref.headers
                        var item = ref.item
                        return [
                          _c("td", { attrs: { colspan: headers.length } }, [
                            _c("table", [
                              _c("tr", [
                                _c("td", [_c("strong", [_vm._v("Code")])]),
                                _vm._v(" "),
                                _c("td", [_vm._v(":")]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(item.code))])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [
                                  _c("strong", [_vm._v("Description")])
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(":")]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(item.description) +
                                      "\n                            "
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_c("strong", [_vm._v("Receipt")])]),
                                _vm._v(" "),
                                _c("td", [_vm._v(":")]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(item.receipt_number) +
                                      "\n                            "
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_c("strong", [_vm._v("Vendor")])]),
                                _vm._v(" "),
                                _c("td", [_vm._v(":")]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(
                                        item.vendor ? item.vendor.name : ""
                                      ) +
                                      "\n                            "
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
                                    _c("td", [_vm._v(_vm._s(item.remarks))])
                                  ])
                                : _vm._e()
                            ])
                          ])
                        ]
                      }
                    },
                    {
                      key: "item.updated_at",
                      fn: function(ref) {
                        var item = ref.item
                        return [
                          _vm._v(
                            "\n                " +
                              _vm._s(_vm.mixin_getHumanDate(item.updated_at)) +
                              "\n            "
                          )
                        ]
                      }
                    },
                    {
                      key: "item.amount",
                      fn: function(ref) {
                        var item = ref.item
                        return [
                          _vm._v(
                            "\n                " +
                              _vm._s(_vm.mixin_formatNumber(item.amount)) +
                              "\n            "
                          )
                        ]
                      }
                    },
                    {
                      key: "item.replenishment",
                      fn: function(ref) {
                        var item = ref.item
                        return [
                          _vm._v(
                            "\n                " +
                              _vm._s(
                                _vm.mixin_formatNumber(
                                  item.amount - item.reimbursable_amount
                                )
                              ) +
                              "\n            "
                          )
                        ]
                      }
                    },
                    {
                      key: "item.status.status",
                      fn: function(ref) {
                        var item = ref.item
                        return [
                          _c(
                            "v-chip",
                            {
                              attrs: {
                                color: item.status.color,
                                dark: "",
                                small: ""
                              }
                            },
                            [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(item.status.status) +
                                  "\n                "
                              )
                            ]
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
                                    "/user/expenses/" + item.id
                                  )
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                    mdi-eye\n                "
                              )
                            ]
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
              }),
              _vm._v(" "),
              _vm.expenseReportErrors.expenses.length > 0
                ? _c("div", { staticClass: "red--text" }, [
                    _c("small", [
                      _vm._v(_vm._s(_vm.expenseReportErrors.expenses[0]))
                    ])
                  ])
                : _vm._e(),
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
                                "\n                                Total Expense Amount\n                            "
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
                                  "\n                                " +
                                    _vm._s(_vm.mixin_formatNumber(_vm.total)) +
                                    "\n                            "
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", [
                              _vm._v(
                                "\n                                Paid Amount\n                            "
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
                                  "\n                                (-)\n                                " +
                                    _vm._s(_vm.mixin_formatNumber(_vm.paid)) +
                                    "\n                            "
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
                                "\n                                Amount to be reimbursed\n                            "
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
                                  "\n                                " +
                                    _vm._s(
                                      _vm.mixin_formatNumber(_vm.balance)
                                    ) +
                                    "\n                            "
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
                            "\n                    Cancel\n                "
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/ExpenseDataService.js":
/*!*****************************************************!*\
  !*** ./resources/js/services/ExpenseDataService.js ***!
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


var ExpenseDataService = /*#__PURE__*/function () {
  function ExpenseDataService() {
    _classCallCheck(this, ExpenseDataService);
  }

  _createClass(ExpenseDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/expenses", data);
    }
  }, {
    key: "get",
    value: function get(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/data/expenses", data);
    }
  }, {
    key: "show",
    value: function show(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/expenses/".concat(id), data);
    }
  }, {
    key: "store",
    value: function store(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/expenses", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/expenses/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/expenses/".concat(id), data);
    }
  }, {
    key: "restore",
    value: function restore(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/expenses/restore/".concat(id), data);
    }
  }]);

  return ExpenseDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new ExpenseDataService());

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
  }]);

  return ExpenseReportDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new ExpenseReportDataService());

/***/ }),

/***/ "./resources/js/views/pages/expense_reports/Form.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/pages/expense_reports/Form.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_82885336___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=82885336& */ "./resources/js/views/pages/expense_reports/Form.vue?vue&type=template&id=82885336&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/expense_reports/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_82885336___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_82885336___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/expense_reports/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/expense_reports/Form.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/pages/expense_reports/Form.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/expense_reports/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/expense_reports/Form.vue?vue&type=template&id=82885336&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/pages/expense_reports/Form.vue?vue&type=template&id=82885336& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_82885336___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=82885336& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/expense_reports/Form.vue?vue&type=template&id=82885336&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_82885336___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_82885336___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);