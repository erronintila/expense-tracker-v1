(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[68],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/payments/Show.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/payments/Show.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_daterangepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/daterangepicker/DateRangePicker */ "./resources/js/components/daterangepicker/DateRangePicker.vue");
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
//
//
//
//
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
    DateRangePicker: _components_daterangepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      loading: true,
      loader: true,
      valid: false,
      menu: false,
      date_range: [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("week").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("week").format("YYYY-MM-DD")],
      user: this.$store.getters.user,
      code: "",
      reference_no: "",
      voucher_no: "",
      description: "",
      date: "",
      cheque_no: "",
      cheque_date: "",
      amount: "",
      payee: "",
      payee_address: "",
      payee_phone: "",
      remarks: "",
      notes: "",
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
      }, {
        text: "Balance",
        value: "balance",
        sortable: false
      }, {
        text: "Actions",
        value: "actions",
        sortable: false
      }, {
        text: "",
        value: "data-table-expand",
        sortable: false
      }],
      items: [],
      total: 0,
      totalAmount: 0,
      totalItems: 0,
      options: {
        sortBy: ["created_at"],
        sortDesc: [true],
        page: 1,
        itemsPerPage: 10
      },
      totalExpenseBalanceAmount: 0,
      amountToBeReimbursed: 0,
      form: {
        amount: 0,
        cheque_date: "",
        cheque_no: "",
        code: "",
        date: "",
        description: "",
        user: this.$store.getters.user,
        expense_reports: [],
        notes: "",
        reference_no: "",
        remarks: "",
        status: "",
        voucher_no: "",
        created: {
          created_at: null,
          created_by: {
            name: ""
          }
        },
        updated: {
          updated_at: null,
          updated_by: {
            name: ""
          }
        },
        deleted: {
          deleted_at: null,
          deleted_by: {
            name: ""
          }
        },
        submitted: {
          submitted_at: null,
          submitted_by: {
            name: ""
          }
        },
        reviewed: {
          reviewed_at: null,
          reviewed_by: {
            name: ""
          }
        },
        approved: {
          approved_at: null,
          approved_by: {
            name: ""
          }
        },
        rejected: {
          rejected_at: null,
          rejected_by: {
            name: ""
          }
        },
        cancelled: {
          cancelled_at: null,
          cancelled_by: {
            name: ""
          }
        },
        logs: []
      }
    };
  },
  methods: {
    getData: function getData() {
      var _this2 = this;

      var _this = this;

      axios.get("/api/payments/".concat(_this.$route.params.id)).then(function (response) {
        var data = response.data.data;
        _this.code = data.code;
        _this.reference_no = data.reference_no;
        _this.voucher_no = data.voucher_no;
        _this.description = data.description;
        _this.date = data.date;
        _this.cheque_no = data.cheque_no;
        _this.cheque_date = data.cheque_date;
        _this.amount = data.amount;
        _this.payee = data.payee;
        _this.payee_address = data.payee_address;
        _this.payee_phone = data.payee_phone;
        _this.remarks = data.remarks;
        _this.notes = data.notes;
        _this.items = data.expense_reports;
        _this.user = "".concat(data.last_name, ", ").concat(data.first_name, " ").concat(data.middle_name); // _this.selected.splice(0, 0, ...data.expenses);
        // _this.loadExpenses(data.user.id);

        _this.form.amount = data.amount;
        _this.form.cheque_date = data.cheque_date;
        _this.form.cheque_no = data.cheque_no;
        _this.form.code = data.code;
        _this.form.date = data.date;
        _this.form.description = data.description;
        _this.form.user = data.user; // _this.form.expense_reports = data.expense_reports;

        _this.form.notes = data.notes;
        _this.form.reference_no = data.reference_no;
        _this.form.remarks = data.remarks;
        _this.form.status = data.status;
        _this.form.voucher_no = data.voucher_no;
        _this.form.created = data.created;
        _this.form.updated = data.updated;
        _this.form.deleted = data.deleted;
        _this.form.submitted = data.submitted;
        _this.form.reviewed = data.reviewed;
        _this.form.approved = data.approved;
        _this.form.rejected = data.rejected;
        _this.form.cancelled = data.cancelled;
        _this.form.logs = data.logs;

        _this2.getDataFromApi().then(function (data) {
          _this2.items = data.items;
          _this2.totalItems = data.total;
        });

        _this.loader = false;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

        _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);

        _this.loader = false;
      });
    },
    getDataFromApi: function getDataFromApi() {
      var _this3 = this;

      var _this = this;

      _this.loading = true;
      return new Promise(function (resolve, reject) {
        var _this3$options = _this3.options,
            sortBy = _this3$options.sortBy,
            sortDesc = _this3$options.sortDesc,
            page = _this3$options.page,
            itemsPerPage = _this3$options.itemsPerPage;
        var user_id = _this.form.user.id;
        var range = _this.date_range;
        var payment_id = _this3.$route.params.id;
        axios.get("/api/expense_reports", {
          params: {
            sortBy: sortBy[0],
            sortType: sortDesc[0] ? "desc" : "asc",
            page: page,
            itemsPerPage: itemsPerPage,
            user_id: user_id,
            payment_id: payment_id,
            start_date: range[0],
            end_date: range[1] ? range[1] : range[0],
            admin_page: false
          }
        }).then(function (response) {
          var items = response.data.data;
          var total = response.data.meta.total;
          _this.loading = false;
          resolve({
            items: items,
            total: total
          });
        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);

          _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);

          _this.loading = false;
        });
      });
    },
    cancelPayment: function cancelPayment() {
      var _this = this;

      this.$confirm("Do you want to cancel this payment?").then(function (res) {
        if (res) {
          _this.loader = true;
          axios({
            method: "delete",
            url: "/api/payments/".concat(_this.$route.params.id),
            data: {
              ids: [_this.$route.params.id]
            }
          }).then(function (response) {
            _this.$dialog.message.success(response.data.message, {
              position: "top-right",
              timeout: 2000
            });

            _this.$router.push({
              name: "user.payments.index"
            });
          })["catch"](function (error) {
            console.log(error);
            console.log(error.response);

            _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
          });
        }
      });
    }
  },
  computed: {
    params: function params(nv) {
      return _objectSpread(_objectSpread({}, this.options), {}, _defineProperty({
        query: this.user
      }, "query", this.date_range));
    }
  },
  watch: {
    params: {
      handler: function handler() {
        var _this4 = this;

        this.getDataFromApi().then(function (data) {
          _this4.items = data.items;
          _this4.totalItems = data.total;
        });
      },
      deep: true
    },
    items: function items() {
      this.total = this.items.reduce(function (total, item) {
        return total + item.total;
      }, 0);
      this.totalExpenseBalanceAmount = this.items.reduce(function (total, item) {
        return total + item.total;
      }, 0);
      this.amountToBeReimbursed = this.items.reduce(function (total, item) {
        return total + item.balance;
      }, 0);
    }
  },
  created: function created() {
    // this.$store.dispatch("AUTH_USER");
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/payments/Show.vue?vue&type=template&id=3e8bf7c2&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/payments/Show.vue?vue&type=template&id=3e8bf7c2& ***!
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
      _vm.loader
        ? _c(
            "v-container",
            { staticStyle: { height: "400px" } },
            [
              _c(
                "v-row",
                {
                  staticClass: "fill-height",
                  attrs: { "align-content": "center", justify: "center" }
                },
                [
                  _c(
                    "v-col",
                    {
                      staticClass: "subtitle-1 text-center",
                      attrs: { cols: "12" }
                    },
                    [
                      _vm._v(
                        "\n                Loading, Please wait...\n            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "6" } },
                    [
                      _c("v-progress-linear", {
                        attrs: {
                          color: "green accent-4",
                          indeterminate: "",
                          rounded: "",
                          height: "6"
                        }
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
                    _vm._v("Payment Details")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
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
                    "v-container",
                    [
                      _c(
                        "v-row",
                        [
                          _c("v-col", { attrs: { cols: "12", md: "8" } }, [
                            _c("div", [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm.form.user.full_name) +
                                  "\n                        "
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "display-1 green--text" },
                              [
                                _vm._v(
                                  "\n                            PHP " +
                                    _vm._s(
                                      _vm.mixin_formatNumber(_vm.form.amount)
                                    ) +
                                    "\n                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", [
                              _vm._v("Date: " + _vm._s(_vm.form.date))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("v-col", { attrs: { cols: "12", md: "4" } }, [
                            _c("div", { staticClass: "headline green--text" }, [
                              _vm._v(
                                "\n                            #" +
                                  _vm._s(_vm.form.code) +
                                  "\n                        "
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _vm._v("Voucher: " + _vm._s(_vm.form.voucher_no))
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              [
                                _vm._v(
                                  "\n                            Status:\n                            "
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
                                      "\n                                " +
                                        _vm._s(_vm.form.status.status) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c("v-col", [
                            _vm._v(
                              "Description: " +
                                _vm._s(_vm.form.description) +
                                " "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
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
                                        key: "item.period",
                                        fn: function(ref) {
                                          var item = ref.item
                                          return [
                                            _vm._v(
                                              "\n                                " +
                                                _vm._s(item.from) +
                                                " ~ " +
                                                _vm._s(item.to) +
                                                "\n                            "
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
                                                      "/expense_reports/" +
                                                        item.id
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                    mdi-eye\n                                "
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
                                              {
                                                attrs: {
                                                  colspan: headers.length
                                                }
                                              },
                                              [
                                                _c("v-container", [
                                                  _c("table", [
                                                    _c("tr", [
                                                      _c("td", [
                                                        _c("strong", [
                                                          _vm._v("Created")
                                                        ])
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [_vm._v(":")]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          "\n                                                    " +
                                                            _vm._s(
                                                              _vm.mixin_formatDate(
                                                                item.created_at,
                                                                "YYYY-MM-DD HH:mm:ss"
                                                              )
                                                            ) +
                                                            "\n                                                "
                                                        )
                                                      ])
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("tr", [
                                                      _c("td", [
                                                        _c("strong", [
                                                          _vm._v(
                                                            "Reimbursable\n                                                        Amount"
                                                          )
                                                        ])
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [_vm._v(":")]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          "\n                                                    " +
                                                            _vm._s(
                                                              _vm.mixin_formatNumber(
                                                                item.total_reimbursable
                                                              )
                                                            ) +
                                                            "\n                                                "
                                                        )
                                                      ])
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("tr", [
                                                      _c("td", [
                                                        _c("strong", [
                                                          _vm._v("Paid")
                                                        ])
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [_vm._v(":")]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          "\n                                                    " +
                                                            _vm._s(
                                                              _vm.mixin_formatNumber(
                                                                item.paid
                                                              )
                                                            ) +
                                                            "\n                                                "
                                                        )
                                                      ])
                                                    ]),
                                                    _vm._v(" "),
                                                    item.balance > 0
                                                      ? _c("tr", [
                                                          _c("td", [
                                                            _c("strong", [
                                                              _vm._v("Balance")
                                                            ])
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("td", [
                                                            _vm._v(":")
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("td", [
                                                            _vm._v(
                                                              "\n                                                    " +
                                                                _vm._s(
                                                                  _vm.mixin_formatNumber(
                                                                    item.balance
                                                                  )
                                                                ) +
                                                                "\n                                                "
                                                            )
                                                          ])
                                                        ])
                                                      : _vm._e(),
                                                    _vm._v(" "),
                                                    _c("tr", [
                                                      _c("td", [
                                                        _c("strong", [
                                                          _vm._v("Status")
                                                        ])
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [_vm._v(":")]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          "\n                                                    " +
                                                            _vm._s(
                                                              item.status.status
                                                            ) +
                                                            "\n                                                    (" +
                                                            _vm._s(
                                                              item.status
                                                                .remarks
                                                            ) +
                                                            ")\n                                                "
                                                        )
                                                      ])
                                                    ]),
                                                    _vm._v(" "),
                                                    item.remarks
                                                      ? _c("tr", [
                                                          _c("td", [
                                                            _c("strong", [
                                                              _vm._v("Remarks")
                                                            ])
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("td", [
                                                            _vm._v(":")
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("td", [
                                                            _vm._v(
                                                              _vm._s(
                                                                item.remarks
                                                              )
                                                            )
                                                          ])
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
                                              "\n                                " +
                                                _vm._s(
                                                  _vm.mixin_formatNumber(
                                                    item.total
                                                  )
                                                ) +
                                                "\n                            "
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
                                              "\n                                " +
                                                _vm._s(
                                                  item.last_name +
                                                    ", " +
                                                    item.first_name
                                                ) +
                                                "\n                            "
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
                                              "\n                                " +
                                                _vm._s(
                                                  _vm.mixin_getHumanDate(
                                                    item.updated_at
                                                  )
                                                ) +
                                                "\n                            "
                                            )
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    true
                                  )
                                },
                                [
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
                                          {
                                            staticClass:
                                              "green--text hidden-md-and-up"
                                          },
                                          [
                                            _c("td", { staticClass: "title" }, [
                                              _vm._v(
                                                "\n                                        Total:\n                                        "
                                              ),
                                              _c("strong", [
                                                _vm._v(_vm._s(_vm.totalAmount))
                                              ])
                                            ])
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "tr",
                                          {
                                            staticClass:
                                              "green--text hidden-sm-and-down"
                                          },
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
                                              _c("strong", [
                                                _vm._v(_vm._s(_vm.totalAmount))
                                              ])
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
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c("v-col", { attrs: { cols: "12", md: "8" } }, [
                            _c("div", [
                              _vm._v("Remarks : " + _vm._s(_vm.form.remarks))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("v-col", { attrs: { cols: "12", md: "4" } }, [
                            _c("table", { attrs: { width: "100%" } }, [
                              _c("tbody", [
                                _c("tr", [
                                  _c("td", [
                                    _vm._v(
                                      "\n                                        Total Expense Amount Balance\n                                    "
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
                                        "\n                                        " +
                                          _vm._s(
                                            _vm.mixin_formatNumber(
                                              _vm.totalExpenseBalanceAmount
                                            )
                                          ) +
                                          "\n                                    "
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", [
                                    _vm._v(
                                      "\n                                        Paid Amount\n                                    "
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
                                        "\n                                        (-)\n                                        " +
                                          _vm._s(
                                            _vm.mixin_formatNumber(
                                              _vm.form.amount
                                            )
                                          ) +
                                          "\n                                    "
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
                                      "\n                                        Amount to be reimbursed\n                                    "
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
                                        "\n                                        " +
                                          _vm._s(
                                            _vm.mixin_formatNumber(
                                              _vm.amountToBeReimbursed
                                            )
                                          ) +
                                          "\n                                    "
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
                      _c("v-divider", { staticClass: "mb-4" }),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c("v-col", { attrs: { cols: "12", md: "8" } }, [
                            _vm._v(
                              "\n                        Notes : " +
                                _vm._s(_vm.form.notes) +
                                "\n                    "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider", { staticClass: "mb-4" }),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        { staticClass: "text--secondary text-caption" },
                        [
                          _c("v-col", { attrs: { cols: "12", md: "12" } }, [
                            _c("div", [_vm._v("History :")]),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "table",
                                {
                                  staticClass: "table",
                                  attrs: { width: "100%" }
                                },
                                [
                                  _c(
                                    "tbody",
                                    _vm._l(_vm.form.logs, function(item) {
                                      return _c("tr", { key: item.id }, [
                                        _c("td", [
                                          _vm._v(
                                            "\n                                            " +
                                              _vm._s(
                                                _vm.mixin_formatDate(
                                                  item.created_at,
                                                  "YYYY-MM-DD HH:mm:ss"
                                                )
                                              ) +
                                              "\n                                        "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [_vm._v("-")]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            "\n                                            " +
                                              _vm._s(
                                                item.causer == null
                                                  ? "System"
                                                  : item.causer.name
                                              ) +
                                              "\n                                        "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [_vm._v("-")]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(item.description))
                                        ])
                                      ])
                                    }),
                                    0
                                  )
                                ]
                              )
                            ])
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
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

/***/ "./resources/js/views/modules/user/payments/Show.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/modules/user/payments/Show.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_3e8bf7c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=3e8bf7c2& */ "./resources/js/views/modules/user/payments/Show.vue?vue&type=template&id=3e8bf7c2&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/user/payments/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_3e8bf7c2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_3e8bf7c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/user/payments/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/user/payments/Show.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/modules/user/payments/Show.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/payments/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/user/payments/Show.vue?vue&type=template&id=3e8bf7c2&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/modules/user/payments/Show.vue?vue&type=template&id=3e8bf7c2& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_3e8bf7c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=3e8bf7c2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/payments/Show.vue?vue&type=template&id=3e8bf7c2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_3e8bf7c2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_3e8bf7c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);