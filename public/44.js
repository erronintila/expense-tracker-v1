(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expenses/Show.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expenses/Show.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      loader: true,
      panel: [0, 1],
      itemize: false,
      // paid_through_fund: false,
      reimbursable_amount: false,
      // reimbursable: false,
      // openAddVendor: false,
      dialog: false,
      valid: false,
      menu: false,
      headers: [{
        text: "Particulars",
        value: "description",
        sortable: false
      }, {
        text: "Quantity",
        value: "quantity",
        sortable: false
      }, {
        text: "Amount",
        value: "amount",
        sortable: false
      }, {
        text: "Total",
        value: "total",
        sortable: false
      }, {
        text: "",
        value: "actions",
        sortable: false
      }],
      items: [],
      // expense_types: [],
      // sub_types: [],
      // employees: [],
      // vendors: [],
      form: {
        code: null,
        description: null,
        amount: 0,
        detials_quantity: 0,
        details_amount: 0,
        receipt_number: null,
        date: null,
        remarks: "",
        notes: "",
        is_active: true,
        expense_type: {
          id: null,
          name: "",
          limit: null,
          sub_types: null
        },
        sub_type: {
          id: null,
          name: "",
          limit: null
        },
        employee: {
          id: null,
          remaining_fund: 0,
          fund: 0,
          expense_types: null
        },
        vendor: {
          id: null,
          name: "",
          is_vat_inclusive: true
        },
        is_reimbursable: false,
        revolving_fund: 0,
        reimbursable_amount: 0,
        details: {
          description: "",
          amount: 0
        },
        is_tax_inclusive: true,
        tax_name: "",
        tax_rate: 0,
        tax_amount: 0,
        status: {
          color: "",
          remarks: "",
          status: ""
        },
        // created: { created_at: null, created_by: { name: "" } },
        // updated: { updated_at: null, updated_by: { name: "" } },
        // deleted: { deleted_at: null, deleted_by: { name: "" } },
        // submitted: { submitted_at: null, submitted_by: { name: "" } },
        // reviewed: { reviewed_at: null, reviewed_by: { name: "" } },
        // approved: { approved_at: null, approved_by: { name: "" } },
        // rejected: { rejected_at: null, rejected_by: { name: "" } },
        // cancelled: { cancelled_at: null, cancelled_by: { name: "" } },
        created_at: null,
        updated_at: null,
        deleted_at: null,
        submitted_at: null,
        reviewed_at: null,
        approved_at: null,
        rejected_at: null,
        cancelled_at: null,
        logs: []
      }
    };
  },
  methods: {
    getData: function getData() {
      var _this = this; // this.loadEmployees().then(


      axios.get("/api/expenses/" + _this.$route.params.id).then(function (response) {
        var data = response.data.data;
        console.log(data);
        _this.form.code = data.code;
        _this.form.description = data.description;
        _this.form.receipt_number = data.receipt_number;
        _this.form.date = data.date;
        _this.form.remarks = data.remarks;
        _this.form.notes = data.notes;
        _this.form.is_active = data.is_active;
        _this.form.employee = data.employee;
        _this.form.vendor = data.vendor == null ? {
          id: null,
          name: "",
          is_vat_inclusive: true
        } : data.vendor;
        _this.form.expense_type = data.expense_type; // _this.form.sub_type = data.sub_type_id;
        // _this.expense_types = data.employee.expense_types;
        // _this.sub_types = data.expense_type.sub_types;

        _this.form.is_tax_inclusive = data.is_tax_inclusive;
        _this.form.tax_name = data.tax_name;
        _this.form.tax_rate = data.tax_rate;
        _this.form.tax_amount = data.tax_amount;
        _this.form.status = data.status;

        if (data.details !== null) {
          _this.itemize = true;
          _this.items = data.details;
        } else {
          // _this.itemize = false;
          // _this.items = [];
          _this.form.amount = data.amount;
        } // _this.sub_types.unshift({
        //     id: null,
        //     name: "None",
        //     limit: null
        // });


        _this.form.sub_type = data.sub_type == null ? {
          id: null,
          name: "None",
          limit: null
        } : data.sub_type;

        if (data.revolving_fund > 0) {
          _this.paid_through_fund = true;
          _this.form.revolving_fund = data.revolving_fund;
        } else {
          _this.paid_through_fund = false;
          _this.form.revolving_fund = 0;
        }

        _this.form.reimbursable_amount = data.reimbursable_amount;
        _this.form.employee.remaining_fund += data.amount - data.reimbursable_amount;
        _this.form.created_at = data.created_at;
        _this.form.updated_at = data.updated_at;
        _this.form.deleted_at = data.deleted_at;
        _this.form.submitted_at = data.expense_report ? data.expense_report.submitted_at : null;
        _this.form.approved_at = data.expense_report ? data.expense_report.approved_at : null;
        _this.form.rejected_at = data.expense_report ? data.expense_report.rejected_at : null;
        _this.form.cancelled_at = data.expense_report ? data.expense_report.cancelled_at : null;
        _this.form.logs = data.logs;
        _this.loader = false;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

        _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);

        _this.loader = false;
      }); // );
    } // loadEmployees() {
    //     let _this = this;
    //     return new Promise((resolve, reject) => {
    //         axios
    //             .get("/api/data/employees")
    //             .then(response => {
    //                 _this.employees = response.data.data;
    //                 resolve();
    //             })
    //             .catch(error => {
    //                 console.log(error);
    //                 console.log(error.response);
    //                 _this.mixin_errorDialog(
    //                     `Error ${error.response.status}`,
    //                     error.response.statusText
    //                 );
    //                 reject();
    //             });
    //     });
    // }

  },
  computed: {
    amount_to_replenish: function amount_to_replenish() {
      var remaining_fund = this.mixin_convertToNumber(this.form.employee.remaining_fund);
      var amount = this.mixin_convertToNumber(this.form.amount);

      if (remaining_fund >= amount) {
        return amount;
      }

      return amount - Math.abs(remaining_fund - amount);
    },
    amount_to_reimburse: function amount_to_reimburse() {
      var remaining_fund = this.mixin_convertToNumber(this.form.employee.remaining_fund);
      var amount = this.mixin_convertToNumber(this.form.amount);

      if (remaining_fund < amount) {
        var to_replenish = Math.abs(remaining_fund - amount);
        this.form.reimbursable_amount = to_replenish;
        return to_replenish;
      }

      return 0;
    },
    expense_amount: function expense_amount() {
      return this.mixin_convertToNumber(this.form.amount);
    },
    display_reimbursable_amount: function display_reimbursable_amount() {
      return parseFloat(this.form.amount) > parseFloat(this.form.employee.remaining_fund);
    }
  },
  watch: {
    items: function items() {
      this.form.amount = this.items.reduce(function (total, item) {
        return parseFloat(total) + parseFloat(item.total);
      }, 0);
      this.form.details_amount = this.items.reduce(function (total, item) {
        return parseFloat(total) + parseFloat(item.amount);
      }, 0);
      this.form.details_quantity = this.items.reduce(function (total, item) {
        return parseFloat(total) + parseFloat(item.quantity);
      }, 0);
    },
    itemize: function itemize() {
      this.form.amount = this.items.reduce(function (total, item) {
        return parseFloat(total) + parseFloat(item.total);
      }, 0);
    }
  },
  created: function created() {
    // this.$store.dispatch("AUTH_USER");
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expenses/Show.vue?vue&type=template&id=2407a99a&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expenses/Show.vue?vue&type=template&id=2407a99a& ***!
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
      _c(
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
                _vm._v("Expense Details")
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
                        _c(
                          "div",
                          [
                            _vm._v(
                              "\n                            " +
                                _vm._s(_vm.form.employee.full_name) +
                                "\n                            "
                            ),
                            _c(
                              "v-btn",
                              {
                                attrs: {
                                  text: "",
                                  color: "green",
                                  to:
                                    "/admin/expenses/" +
                                    _vm.$route.params.id +
                                    "/edit"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                Edit\n                            "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "display-1 green--text" }, [
                          _vm._v(
                            "\n                            PHP " +
                              _vm._s(_vm.mixin_formatNumber(_vm.form.amount)) +
                              "\n                        "
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.form.expense_type.name) +
                              "\n                            " +
                              _vm._s(
                                _vm.form.sub_type == null ||
                                  _vm.form.sub_type.id == null
                                  ? ""
                                  : "(" + _vm.form.sub_type.name + ")"
                              ) +
                              "\n                        "
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", [_vm._v("Date: " + _vm._s(_vm.form.date))])
                      ]),
                      _vm._v(" "),
                      _c("v-col", { attrs: { cols: "12", md: "4" } }, [
                        _c("div", [
                          _vm._v("Receipt: #" + _vm._s(_vm.form.receipt_number))
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _vm._v("Vendor: " + _vm._s(_vm.form.vendor.name))
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
                        _c("div", [
                          _vm._v("Description: " + _vm._s(_vm.form.description))
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _vm._v(
                            "\n                            Tax (" +
                              _vm._s(_vm.form.tax_rate) +
                              "%):\n                            " +
                              _vm._s(_vm.form.tax_amount) +
                              "\n                            " +
                              _vm._s(
                                _vm.form.is_tax_inclusive
                                  ? "- Inclusive"
                                  : "- Exclusive"
                              ) +
                              "\n                        "
                          )
                        ])
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
                      _c("v-col", { attrs: { cols: "12" } }, [
                        _c(
                          "div",
                          [
                            _c(
                              "v-data-table",
                              {
                                attrs: {
                                  headers: _vm.headers,
                                  items: _vm.items,
                                  "items-per-page": 5,
                                  "footer-props": {
                                    itemsPerPageOptions: [5, 10, 20]
                                  }
                                }
                              },
                              [
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
                                              "\n                                            Total:\n                                            "
                                            ),
                                            _c("strong", [
                                              _vm._v(_vm._s(_vm.form.amount))
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
                                          _c("td", [
                                            _c("strong", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.form.details_quantity
                                                )
                                              )
                                            ])
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _c("strong", [
                                              _vm._v(
                                                _vm._s(_vm.form.details_amount)
                                              )
                                            ])
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _c("strong", [
                                              _vm._v(_vm._s(_vm.form.amount))
                                            ])
                                          ]),
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
                                  "\n                                        Amount to reimburse\n                                    "
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
                                          _vm.amount_to_reimburse
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
                                  "\n                                        Amount to replenish\n                                    "
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
                                          _vm.amount_to_replenish
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
                              _c("td", [
                                _vm._v(
                                  "\n                                        Total\n                                    "
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
                                          _vm.expense_amount
                                        )
                                      ) +
                                      "\n                                    "
                                  )
                                ]
                              )
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-divider", { staticClass: "mb-4" }),
                          _vm._v(" "),
                          _c("div", [
                            _vm._v("Notes : " + _vm._s(_vm.form.notes))
                          ])
                        ],
                        1
                      )
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
                      _c("v-col", { attrs: { cols: "12" } }, [
                        _c("div", [_vm._v("Other Details :")]),
                        _vm._v(" "),
                        _c(
                          "table",
                          { staticClass: "table", attrs: { width: "100%" } },
                          [
                            _c("tbody", [
                              _vm.form.created_at
                                ? _c("tr", [
                                    _c("td", [_vm._v("Created")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(":")]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(
                                            _vm.mixin_formatDate(
                                              _vm.form.created_at,
                                              "YYYY-MM-DD HH:mm:ss"
                                            )
                                          ) +
                                          "\n                                    "
                                      )
                                    ])
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.form.submitted_at
                                ? _c("tr", [
                                    _c("td", [_vm._v("Submitted")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(":")]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(
                                            _vm.mixin_formatDate(
                                              _vm.form.submitted_at,
                                              "YYYY-MM-DD HH:mm:ss"
                                            )
                                          ) +
                                          "\n                                    "
                                      )
                                    ])
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.form.approved_at
                                ? _c("tr", [
                                    _c("td", [_vm._v("Approved")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(":")]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(
                                            _vm.mixin_formatDate(
                                              _vm.form.approved_at,
                                              "YYYY-MM-DD HH:mm:ss"
                                            )
                                          ) +
                                          "\n                                    "
                                      )
                                    ])
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.form.rejected_at
                                ? _c("tr", [
                                    _c("td", [_vm._v("Rejected")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(":")]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(
                                            _vm.mixin_formatDate(
                                              _vm.form.rejected_at,
                                              "YYYY-MM-DD HH:mm:ss"
                                            )
                                          ) +
                                          "\n                                    "
                                      )
                                    ])
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.form.deleted_at
                                ? _c("tr", [
                                    _c("td", [_vm._v("Cancelled")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(":")]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(
                                            _vm.mixin_formatDate(
                                              _vm.form.deleted_at,
                                              "YYYY-MM-DD HH:mm:ss"
                                            )
                                          ) +
                                          "\n                                    "
                                      )
                                    ])
                                  ])
                                : _vm._e()
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
                    { staticClass: "text--secondary text-caption" },
                    [
                      _c("v-col", { attrs: { cols: "12", md: "12" } }, [
                        _c("div", [_vm._v("History :")]),
                        _vm._v(" "),
                        _c("div", [
                          _c(
                            "table",
                            { staticClass: "table", attrs: { width: "100%" } },
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
                                    _c("td", [_vm._v(" - ")]),
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
                                    _c("td", [_vm._v(" - ")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(item.description))])
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

/***/ "./resources/js/views/modules/admin/expenses/Show.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/modules/admin/expenses/Show.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_2407a99a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=2407a99a& */ "./resources/js/views/modules/admin/expenses/Show.vue?vue&type=template&id=2407a99a&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/expenses/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_2407a99a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_2407a99a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/expenses/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/expenses/Show.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expenses/Show.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expenses/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/expenses/Show.vue?vue&type=template&id=2407a99a&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expenses/Show.vue?vue&type=template&id=2407a99a& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_2407a99a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=2407a99a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expenses/Show.vue?vue&type=template&id=2407a99a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_2407a99a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_2407a99a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);