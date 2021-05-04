(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/payments/Form.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/payments/Form.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_datepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/datepicker/DateRangePicker */ "./resources/js/components/datepicker/DateRangePicker.vue");
/* harmony import */ var _services_ExpenseReportDataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/ExpenseReportDataService */ "./resources/js/services/ExpenseReportDataService.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    payment_id: {
      type: Number,
      "default": null
    },
    isEdit: {
      type: Boolean,
      "default": false
    },
    paymentForm: {
      type: Object,
      "default": function _default() {}
    },
    paymentErrors: {
      type: Object,
      "default": function _default() {
        return {
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
        };
      }
    },
    paymentRules: {}
  },
  components: {
    DateRangePicker: _components_datepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      valid: false,
      menu: false,
      date_range: [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("week").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("week").format("YYYY-MM-DD")],
      headers: [{
        text: "Period",
        value: "period",
        sortable: false
      }, {
        text: "Code",
        value: "code",
        sortable: false
      }, {
        text: "Description",
        value: "description",
        sortable: false
      }, {
        text: "Amount",
        value: "total",
        sortable: false
      }, // { text: "Balance", value: "balance", sortable: false },
      // { text: "Payment", value: "balance", sortable: false },
      {
        text: "",
        value: "actions",
        sortable: false
      }, {
        text: "",
        value: "data-table-expand",
        sortable: false
      }],
      items: [],
      selected: [],
      totalItems: 0,
      loading: false,
      options: {
        sortBy: ["created_at"],
        sortDesc: [true],
        page: 1,
        itemsPerPage: 10
      },
      totalAmount: 0,
      totalPaidAmount: 0,
      totalReimbursedAmount: 0,
      form: {
        id: null,
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
        user: null,
        expense_reports: []
      }
    };
  },
  methods: {
    updateDates: function updateDates(e) {
      this.date_range = e;
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
        var user_id = _this.form.user ? _this.form.user.id : null;
        var range = _this.date_range;
        var data = {
          params: {
            sortBy: sortBy[0],
            sortType: sortDesc[0] ? "desc" : "asc",
            page: page,
            itemsPerPage: itemsPerPage,
            user_id: user_id,
            start_date: range[0],
            end_date: range[1] ? range[1] : range[0],
            admin_page: true,
            update_payment: true
          }
        };

        if (_this.isEdit) {
          data.params.payment_id = _this.payment_id;
        }

        _services_ExpenseReportDataService__WEBPACK_IMPORTED_MODULE_2__["default"].getAll(data).then(function (response) {
          var items = response.data.data;
          var total = response.data.meta.total;
          _this.loading = false;
          _this.formDataLoaded = true;
          resolve({
            items: items,
            total: total
          });
        })["catch"](function (error) {
          _this.mixin_showErrors(error);

          _this.loading = false;
          _this.formDataLoaded = true;
          reject();
        });
      });
    },
    onSave: function onSave() {
      this.$refs.form.validate();

      if (!this.form.user) {
        this.mixin_errorDialog("Error", "No Employee selected.");
        return;
      }

      if (this.selected.length == 0) {
        this.mixin_errorDialog("Error", "No Expense Report selected.");
        return;
      }

      if (this.$refs.form.validate()) {
        this.form.expense_reports = this.selected;
        this.form.user_id = this.form.user ? this.form.user.id : null;
        this.form.amount = parseFloat(this.totalAmount);
        this.$emit("on-save", this.form);
      }
    }
  },
  computed: {
    params: function params(nv) {
      return _objectSpread(_objectSpread({}, this.options), {}, _defineProperty({
        query: this.form.user
      }, "query", this.date_range));
    },
    maxDate: function maxDate() {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD");
    }
  },
  watch: {
    params: {
      // immediate: true,
      deep: true,
      handler: function handler() {
        var _this2 = this;

        this.getDataFromApi().then(function (data) {
          _this2.items = data.items;
          _this2.totalItems = data.total;
        });
      }
    },
    paymentForm: {
      deep: true,
      immediate: true,
      handler: function handler(newValue) {
        this.form = newValue;

        if (this.isEdit) {
          this.selected = newValue.expense_reports;

          if (newValue && newValue.expense_reports) {
            this.totalAmount = this.mixin_formatNumber(newValue.expense_reports.reduce(function (total, item) {
              return total + item.total;
            }, 0));
            this.totalPaidAmount = this.mixin_formatNumber(newValue.expense_reports.reduce(function (total, item) {
              return total + item.total;
            }, 0));
            this.totalReimbursedAmount = this.totalAmount - this.totalPaidAmount;

            if (newValue.expense_reports.length > 0) {
              this.paymentErrors.expense_reports = [];
            }
          }
        }
      }
    },
    selected: function selected() {
      this.totalAmount = this.mixin_formatNumber(this.selected.reduce(function (total, item) {
        return total + item.total;
      }, 0));
      this.totalPaidAmount = this.mixin_formatNumber(this.selected.reduce(function (total, item) {
        return total + item.total;
      }, 0));
      this.totalReimbursedAmount = this.totalAmount - this.totalPaidAmount;
    }
  }
});

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
          _c("div", { staticClass: "overline green--text" }, [
            _vm._v("\n            BASIC DETAILS\n        ")
          ]),
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
                                "error-messages": _vm.paymentErrors.date,
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
            _vm._v("\n            Expense Reports\n        ")
          ]),
          _vm._v(" "),
          _vm.paymentErrors.expense_reports &&
          _vm.paymentErrors.expense_reports.length > 0
            ? _c("small", { staticClass: "red--text" }, [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.paymentErrors.expense_reports[0]) +
                    "\n        "
                )
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
                          attrs: { dateRange: _vm.date_range },
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
                                            label: "Date Created",
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
                    key: "item.period",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _vm._v(
                          "\n                " +
                            _vm._s(item.from) +
                            " ~ " +
                            _vm._s(item.to) +
                            "\n            "
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
                              "\n                    mdi-eye\n                "
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
                            _c("v-container", [
                              _c("table", [
                                _c("tr", [
                                  _c("td", [_c("strong", [_vm._v("Created")])]),
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
                                  _c("td", [_c("strong", [_vm._v("Paid")])]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(":")]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(
                                          _vm.mixin_formatNumber(item.paid)
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
                                  _c("td", [_c("strong", [_vm._v("Status")])]),
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
                                      _c("td", [_vm._v(_vm._s(item.remarks))])
                                    ])
                                  : _vm._e()
                              ])
                            ])
                          ],
                          1
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
                          "\n                " +
                            _vm._s(_vm.mixin_formatNumber(item.total)) +
                            "\n            "
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
                          "\n                " +
                            _vm._s(item.last_name + ", " + item.first_name) +
                            "\n            "
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
                          "\n                " +
                            _vm._s(_vm.mixin_getHumanDate(item.updated_at)) +
                            "\n            "
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
                    _c("tr", { staticClass: "green--text hidden-md-and-up" }, [
                      _c("td", { staticClass: "title" }, [
                        _vm._v(
                          "\n                        Total:\n                        "
                        ),
                        _c("strong", [_vm._v(_vm._s(_vm.totalAmount))])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tr",
                      { staticClass: "green--text hidden-sm-and-down" },
                      [
                        _c("td", { staticClass: "title" }, [_vm._v("Total")]),
                        _vm._v(" "),
                        _c("td"),
                        _vm._v(" "),
                        _c("td"),
                        _vm._v(" "),
                        _c("td"),
                        _vm._v(" "),
                        _c("td", [
                          _c("strong", [_vm._v(_vm._s(_vm.totalAmount))])
                        ]),
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
                _c("table", { staticClass: "mt-4", attrs: { width: "100%" } }, [
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
                          staticClass: "green--text text--darken-4 text-right"
                        },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(_vm.mixin_formatNumber(_vm.totalAmount)) +
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
                          staticClass: "green--text text--darken-4 text-right"
                        },
                        [
                          _vm._v(
                            "\n                                (-)\n                                " +
                              _vm._s(
                                _vm.mixin_formatNumber(_vm.totalPaidAmount)
                              ) +
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
                          staticClass: "green--text text--darken-4 text-right"
                        },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(
                                _vm.mixin_formatNumber(
                                  _vm.totalReimbursedAmount
                                )
                              ) +
                              "\n                            "
                          )
                        ]
                      )
                    ])
                  ])
                ])
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
                    [_vm._v("\n                    Cancel\n                ")]
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