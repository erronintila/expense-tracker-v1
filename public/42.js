(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      panel: [0, 1],
      itemize: false,
      // paid_through_fund: false,
      reimbursable_amount: false,
      // reimbursable: false,
      openAddVendor: false,
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
      expense_types: [],
      sub_types: [],
      employees: [],
      vendors: [],
      form: {
        code: null,
        description: null,
        amount: 0,
        detials_quantity: 0,
        details_amount: 0,
        receipt_number: null,
        date: null,
        remarks: "",
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
        tax_amount: 0
      }
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      this.loadEmployees().then(axios.get("/api/expenses/" + _this.$route.params.id).then(function (response) {
        var data = response.data.data;
        _this.form.code = data.code;
        _this.form.description = data.description;
        _this.form.receipt_number = data.receipt_number;
        _this.form.date = data.date;
        _this.form.remarks = data.remarks;
        _this.form.is_active = data.is_active;
        _this.form.employee = data.employee;
        _this.form.vendor = data.vendor == null ? null : data.vendor;
        _this.form.expense_type = data.expense_type; // _this.form.sub_type = data.sub_type_id;

        _this.expense_types = data.employee.expense_types;
        _this.sub_types = data.expense_type.sub_types;
        _this.form.is_tax_inclusive = data.is_tax_inclusive;
        _this.form.tax_name = data.tax_name;
        _this.form.tax_rate = data.tax_rate;
        _this.form.tax_amount = data.tax_amount;

        if (data.details !== null) {
          _this.itemize = true;
          _this.items = data.details;
        } else {
          // _this.itemize = false;
          // _this.items = [];
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
          _this.paid_through_fund = true;
          _this.form.revolving_fund = data.revolving_fund;
        } else {
          _this.paid_through_fund = false;
          _this.form.revolving_fund = 0;
        }

        _this.form.reimbursable_amount = data.reimbursable_amount;
        _this.form.employee.remaining_fund += data.amount - data.reimbursable_amount;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

        _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
      }));
    },
    loadExpenseTypes: function loadExpenseTypes() {
      var _this = this;

      axios.get("/api/data/expense_types").then(function (response) {
        _this.expense_types = response.data.data;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

        _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
      });
    },
    loadEmployees: function loadEmployees() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        axios.get("/api/data/employees").then(function (response) {
          _this.employees = response.data.data;
          resolve();
        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);

          _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);

          reject();
        });
      });
    },
    loadVendors: function loadVendors() {
      var _this = this;

      axios.get("/api/data/vendors").then(function (response) {
        _this.vendors = response.data.data;

        _this.vendors.unshift({
          id: null,
          name: "No Vendor",
          tin: ""
        });
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

        _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
      });
    },
    onRefresh: function onRefresh() {
      Object.assign(this.$data, this.$options.data.apply(this));
    },
    onSave: function onSave() {
      var _this = this;

      _this.$refs.form.validate();

      if (_this.amount_to_replenish > _this.form.employee.remaining_fund) {
        _this.$dialog.message.error("Revolving fund amount is greater than remaining fund", {
          position: "top-right",
          timeout: 2000
        });

        return;
      }

      if (_this.$refs.form.validate()) {
        axios.put("/api/expenses/" + _this.$route.params.id, {
          code: _this.form.code,
          description: _this.form.description,
          amount: _this.form.amount,
          reimbursable_amount: _this.form.reimbursable_amount,
          receipt_number: _this.form.receipt_number,
          date: _this.form.date,
          remarks: _this.form.remarks,
          is_active: _this.form.is_active,
          expense_type_id: _this.form.expense_type.id,
          sub_type_id: _this.form.sub_type.id,
          employee_id: _this.form.employee.id,
          vendor_id: _this.form.vendor,
          details: _this.itemize ? _this.items : null
        }).then(function (response) {
          _this.onRefresh();

          _this.$dialog.message.success("Expense updated successfully.", {
            position: "top-right",
            timeout: 2000
          });

          _this.$router.push({
            name: "admin.expenses.index"
          });
        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);

          _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
        });
        return;
      }
    },
    addItem: function addItem() {
      var description = this.form.details.description;
      var amount = this.mixin_convertToNumber(this.form.details.amount);

      if (description == "" || amount <= 0) {
        return;
      }

      this.items.push({
        description: description,
        amount: amount
      });
      this.dialog = false;
      this.form.details.description = "";
      this.form.details.amount = 0;
    },
    onRemove: function onRemove(item) {
      var index = this.items.indexOf(item);
      confirm("Are you sure you want to remove this item?") && this.items.splice(index, 1);
    },
    loadSubTypes: function loadSubTypes(e) {
      this.form.sub_type = {
        id: null,
        name: "",
        limit: null
      };
      this.sub_types = e.sub_types;
      this.sub_types.push({
        id: null,
        name: "None",
        limit: null
      });
    }
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
    this.loadVendors();
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
                    "v-expansion-panels",
                    {
                      staticClass: "mt-4",
                      attrs: { multiple: "" },
                      model: {
                        value: _vm.panel,
                        callback: function($$v) {
                          _vm.panel = $$v
                        },
                        expression: "panel"
                      }
                    },
                    [
                      _c(
                        "v-expansion-panel",
                        [
                          _c("v-expansion-panel-header", [
                            _c("div", { staticClass: "green--text" }, [
                              _vm._v("Basic Information")
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-expansion-panel-content",
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", md: "4" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: { label: "Date", readonly: "" },
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
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", md: "4" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Employee",
                                          readonly: ""
                                        },
                                        model: {
                                          value: _vm.form.employee.fullname,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form.employee,
                                              "fullname",
                                              $$v
                                            )
                                          },
                                          expression: "form.employee.fullname"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", md: "4" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Vendor",
                                          readonly: ""
                                        },
                                        model: {
                                          value: _vm.form.vendor.name,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form.vendor,
                                              "name",
                                              $$v
                                            )
                                          },
                                          expression: "form.vendor.name"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", md: "4" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Receipt No.",
                                          readonly: ""
                                        },
                                        model: {
                                          value: _vm.form.receipt_number,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "receipt_number",
                                              $$v
                                            )
                                          },
                                          expression: "form.receipt_number"
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
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-expansion-panel",
                        [
                          _c("v-expansion-panel-header", [
                            _c("div", { staticClass: "green--text" }, [
                              _vm._v(
                                "\n                                Expense Details\n                            "
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-expansion-panel-content",
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", md: "4" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Expense Type",
                                          readonly: ""
                                        },
                                        model: {
                                          value: _vm.form.expense_type.name,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form.expense_type,
                                              "name",
                                              $$v
                                            )
                                          },
                                          expression: "form.expense_type.name"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", md: "4" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Sub Type",
                                          readonly: ""
                                        },
                                        model: {
                                          value: _vm.form.sub_type.name,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form.sub_type,
                                              "name",
                                              $$v
                                            )
                                          },
                                          expression: "form.sub_type.name"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", md: "4" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Description",
                                          readonly: ""
                                        },
                                        model: {
                                          value: _vm.form.description,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "description",
                                              $$v
                                            )
                                          },
                                          expression: "form.description"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", md: "4" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Amount",
                                          readonly: ""
                                        },
                                        model: {
                                          value: _vm.form.amount,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "amount", $$v)
                                          },
                                          expression: "form.amount"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
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
                                            ? _c(
                                                "template",
                                                { slot: "body.append" },
                                                [
                                                  _c(
                                                    "tr",
                                                    {
                                                      staticClass:
                                                        "green--text hidden-md-and-up"
                                                    },
                                                    [
                                                      _c(
                                                        "td",
                                                        {
                                                          staticClass: "title"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                    Total:\n                                                    "
                                                          ),
                                                          _c("strong", [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm.form.amount
                                                              )
                                                            )
                                                          ])
                                                        ]
                                                      )
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
                                                      _c(
                                                        "td",
                                                        {
                                                          staticClass: "title"
                                                        },
                                                        [_vm._v("Total")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _c("strong", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.form
                                                                .details_quantity
                                                            )
                                                          )
                                                        ])
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _c("strong", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.form
                                                                .details_amount
                                                            )
                                                          )
                                                        ])
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _c("strong", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.form.amount
                                                            )
                                                          )
                                                        ])
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td")
                                                    ]
                                                  )
                                                ]
                                              )
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
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", md: "4" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Reimbursable Amount",
                                          readonly: "",
                                          hint:
                                            "The amount involves spending from your own pocket",
                                          "persistent-hint": ""
                                        },
                                        model: {
                                          value: _vm.amount_to_reimburse,
                                          callback: function($$v) {
                                            _vm.amount_to_reimburse = $$v
                                          },
                                          expression: "amount_to_reimburse"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", md: "2" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Tax Rate",
                                          suffix: "%",
                                          readonly: ""
                                        },
                                        model: {
                                          value: _vm.form.tax_rate,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "tax_rate", $$v)
                                          },
                                          expression: "form.tax_rate"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", md: "4" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Tax Amount",
                                          readonly: ""
                                        },
                                        model: {
                                          value: _vm.form.tax_amount,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "tax_amount",
                                              $$v
                                            )
                                          },
                                          expression: "form.tax_amount"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c("v-col", [
                                    _c("div", { staticClass: "green--text" }, [
                                      _vm._v(
                                        "\n                                        Expense Summary\n                                    "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("table", { staticClass: "ml-4" }, [
                                      _c("tbody", [
                                        _c("tr", [
                                          _c("td", [
                                            _vm._v(
                                              "\n                                                    Remaining Fund\n                                                "
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
                                                "\n                                                    " +
                                                  _vm._s(
                                                    _vm.mixin_formatNumber(
                                                      _vm.form.employee
                                                        .remaining_fund
                                                    )
                                                  ) +
                                                  "\n                                                "
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("td", [
                                            _vm._v(
                                              "\n                                                    Amount to reimburse\n                                                "
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
                                                "\n                                                    " +
                                                  _vm._s(
                                                    _vm.mixin_formatNumber(
                                                      _vm.amount_to_reimburse
                                                    )
                                                  ) +
                                                  "\n                                                "
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("td", [
                                            _vm._v(
                                              "\n                                                    Amount to replenish\n                                                "
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
                                                "\n                                                    " +
                                                  _vm._s(
                                                    _vm.mixin_formatNumber(
                                                      _vm.amount_to_replenish
                                                    )
                                                  ) +
                                                  "\n                                                "
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c(
                                            "td",
                                            { attrs: { colspan: "3" } },
                                            [_c("hr")]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("td", [
                                            _vm._v(
                                              "\n                                                    Total\n                                                "
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
                                                "\n                                                    " +
                                                  _vm._s(
                                                    _vm.mixin_formatNumber(
                                                      _vm.expense_amount
                                                    )
                                                  ) +
                                                  "\n                                                "
                                              )
                                            ]
                                          )
                                        ])
                                      ])
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
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    { staticClass: "mt-4" },
                    [
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-container",
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", md: "6" } },
                                    [
                                      _c("v-textarea", {
                                        attrs: {
                                          rows: 1,
                                          label: "Remarks",
                                          readonly: ""
                                        },
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
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", md: "6" } },
                                    [
                                      _c("v-textarea", {
                                        attrs: {
                                          rows: "1",
                                          label: "Notes",
                                          readonly: ""
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