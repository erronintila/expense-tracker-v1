(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expenses/Edit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expenses/Edit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_dialogs_AddVendor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/dialogs/AddVendor */ "./resources/js/components/dialogs/AddVendor.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    AddVendor: _components_dialogs_AddVendor__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    var _this2 = this;

    return {
      panel: [0, 1],
      itemize: false,
      paid_through_fund: false,
      reimbursable: false,
      openAddVendor: false,
      dialog: false,
      valid: false,
      menu: false,
      headers: [{
        text: "Particulars",
        value: "description",
        sortable: false
      }, {
        text: "Amount",
        value: "amount",
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
        reimbursable_amount: 0,
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
        vendor: null,
        // particular: "",
        // particular_amount: 0,
        // particular_reimbursable_amount: 0,
        is_reimbursable: false,
        revolving_fund: 0,
        details: {
          description: "",
          amount: 0
        }
      },
      rules: {
        reimbursable_amount: [function (v) {
          return parseFloat(v) <= _this2.form.amount || "Reimbursable Amount should not be greater than the actual amount";
        }],
        revolving_fund: [// v =>
          //     (parseFloat(v) <=
          //         (this.form.sub_type.limit == null
          //             ? this.form.expense_type.limit || v
          //             : this.form.sub_type.limit) &&
          //         parseFloat(v) == 0) ||
          //     "Revolving Fund is greater than expense amount limit"
        ] // particular_reimbursable_amount: [
        //     v =>
        //         parseFloat(v) <= this.form.particular_amount ||
        //         "Reimbursable Amount should not be greater than the actual amount"
        // ]

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
        employee_id: [],
        vendor_id: []
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
        _this.form.vendor = data.vendor == null ? null : data.vendor.id;
        _this.form.expense_type = data.expense_type; // _this.form.sub_type = data.sub_type_id;

        _this.expense_types = data.employee.expense_types;
        _this.sub_types = data.expense_type.sub_types;

        if (data.details !== null) {
          _this.itemize = true;
          _this.items = data.details;
        } else {
          // _this.itemize = false;
          // _this.items = [];
          _this.form.amount = data.amount; // console.log(_this.form.amount, data.amount);
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
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

        _this.errorDialog("Error ".concat(error.response.status), error.response.statusText);
      }));
    },
    loadExpenseTypes: function loadExpenseTypes() {
      var _this = this;

      axios.get("/api/data/expense_types").then(function (response) {
        _this.expense_types = response.data.data;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

        _this.errorDialog("Error ".concat(error.response.status), error.response.statusText);
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

          _this.errorDialog("Error ".concat(error.response.status), error.response.statusText);

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

        _this.errorDialog("Error ".concat(error.response.status), error.response.statusText);
      });
    },
    onRefresh: function onRefresh() {
      Object.assign(this.$data, this.$options.data.apply(this)); // this.$refs.form.reset();
      // this.$refs.form.resetValidation();
    },
    onSave: function onSave() {
      var _this = this; // console.log(this.form.sub_type.id);
      // return;


      _this.$refs.form.validate();

      if (_this.form.revolving_fund > _this.form.employee.remaining_fund) {
        _this.$dialog.message.error("Revolving fund amount is greater than remaining fund", {
          position: "top-right",
          timeout: 2000
        });

        return;
      } // if (this.items.length == 0) {
      //     _this.$dialog.message.error("No Expense detail added", {
      //         position: "top-right",
      //         timeout: 2000
      //     });
      //     return;
      // }


      if (_this.$refs.form.validate()) {
        axios.put("/api/expenses/" + _this.$route.params.id, {
          code: _this.form.code,
          description: _this.form.description,
          amount: _this.form.amount,
          revolving_fund: _this.form.revolving_fund,
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

          _this.errorDialog("Error ".concat(error.response.status), error.response.statusText);

          _this.errors = error.response.data.errors;
        });
        return;
      }
    },
    addItem: function addItem() {
      this.items.push({
        description: this.form.details.description,
        amount: this.form.details.amount
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
    amount_to_reimburse: function amount_to_reimburse() {
      return parseFloat(this.form.amount) - parseFloat(this.form.revolving_fund);
    }
  },
  watch: {
    items: function items() {
      this.form.amount = this.items.reduce(function (total, item) {
        return parseFloat(total) + parseFloat(item.amount);
      }, 0); // this.form.reimbursable_amount = this.items.reduce(
      //     (total, item) =>
      //         parseFloat(total) + parseFloat(item.reimbursable_amount),
      //     0
      // );
    },
    itemize: function itemize() {
      this.form.amount = this.items.reduce(function (total, item) {
        return parseFloat(total) + parseFloat(item.amount);
      }, 0);
    }
  },
  created: function created() {
    // this.loadExpenseTypes();
    this.loadVendors();
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
                _vm._v("New Expense")
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
                                      _c(
                                        "v-menu",
                                        {
                                          ref: "menu",
                                          attrs: {
                                            "close-on-content-click": false,
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
                                                            rules:
                                                              _vm.validation
                                                                .required,
                                                            "error-messages":
                                                              _vm.errors.date,
                                                            label: "Date *",
                                                            readonly: ""
                                                          },
                                                          on: {
                                                            input: function(
                                                              $event
                                                            ) {
                                                              _vm.errors.date = []
                                                            }
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.form.date,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.form,
                                                                "date",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "form.date"
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
                                              color: "success"
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
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", md: "4" } },
                                    [
                                      _c("v-autocomplete", {
                                        attrs: {
                                          rules: _vm.validation.required,
                                          items: _vm.employees,
                                          "error-messages":
                                            _vm.errors.employee_id,
                                          "item-value": "id",
                                          "item-text": "fullname",
                                          label: "Employee *",
                                          "return-object": "",
                                          required: ""
                                        },
                                        on: {
                                          input: function($event) {
                                            _vm.errors.employee_id = []
                                          },
                                          change: _vm.loadExpenseTypes
                                        },
                                        model: {
                                          value: _vm.form.employee,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "employee", $$v)
                                          },
                                          expression: "form.employee"
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
                                      _c("v-autocomplete", {
                                        attrs: {
                                          rules: [],
                                          items: _vm.vendors,
                                          "error-messages":
                                            _vm.errors.vendor_id,
                                          "item-value": "id",
                                          "item-text": "name",
                                          label: "Vendor *"
                                        },
                                        on: {
                                          input: function($event) {
                                            _vm.errors.vendor_id = []
                                          }
                                        },
                                        scopedSlots: _vm._u([
                                          {
                                            key: "append",
                                            fn: function() {
                                              return [
                                                _c("AddVendor", {
                                                  attrs: { openDialog: false },
                                                  on: {
                                                    createdVendor:
                                                      _vm.loadVendors
                                                  }
                                                })
                                              ]
                                            },
                                            proxy: true
                                          },
                                          {
                                            key: "item",
                                            fn: function(data) {
                                              return [
                                                [
                                                  _c(
                                                    "v-list",
                                                    {
                                                      attrs: {
                                                        "max-width": "300"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "v-list-item-content",
                                                        [
                                                          _c(
                                                            "v-list-item-title",
                                                            {
                                                              domProps: {
                                                                innerHTML: _vm._s(
                                                                  data.item.name
                                                                )
                                                              }
                                                            }
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-list-item-subtitle",
                                                            {
                                                              domProps: {
                                                                innerHTML: _vm._s(
                                                                  "TIN: " +
                                                                    (data.item
                                                                      .tin ==
                                                                    null
                                                                      ? "N/A"
                                                                      : data
                                                                          .item
                                                                          .tin)
                                                                )
                                                              }
                                                            }
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-list-item-subtitle",
                                                            {
                                                              domProps: {
                                                                innerHTML: _vm._s(
                                                                  data.item
                                                                    .address
                                                                )
                                                              }
                                                            }
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-list-item-subtitle",
                                                            {
                                                              domProps: {
                                                                innerHTML: _vm._s(
                                                                  data.item
                                                                    .is_vat_inclusive
                                                                    ? "VAT"
                                                                    : "Non-VAT"
                                                                )
                                                              }
                                                            }
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ]
                                              ]
                                            }
                                          }
                                        ]),
                                        model: {
                                          value: _vm.form.vendor,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "vendor", $$v)
                                          },
                                          expression: "form.vendor"
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
                                          rules: [],
                                          "error-messages":
                                            _vm.errors.receipt_number,
                                          label: "Receipt No. *",
                                          required: ""
                                        },
                                        on: {
                                          input: function($event) {
                                            _vm.errors.receipt_number = []
                                          }
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
                                "\n                                Expense Details (" +
                                  _vm._s(
                                    "Remaining Fund: " +
                                      _vm.formatNumber(
                                        _vm.form.employee.remaining_fund
                                      )
                                  ) +
                                  ")\n                            "
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
                                      _c("v-autocomplete", {
                                        attrs: {
                                          "return-object": "",
                                          rules: _vm.validation.required,
                                          items: _vm.expense_types,
                                          "error-messages":
                                            _vm.errors.expense_type_id,
                                          "item-value": "id",
                                          "item-text": "name",
                                          label: "Expense Type *",
                                          required: ""
                                        },
                                        on: {
                                          input: function($event) {
                                            _vm.errors.expense_type_id = []
                                          },
                                          change: _vm.loadSubTypes
                                        },
                                        model: {
                                          value: _vm.form.expense_type,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "expense_type",
                                              $$v
                                            )
                                          },
                                          expression: "form.expense_type"
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
                                      _c("v-autocomplete", {
                                        attrs: {
                                          rules: _vm.validation.required,
                                          items: _vm.sub_types,
                                          "error-messages": _vm.errors.sub_type,
                                          "item-value": "id",
                                          "item-text": "name",
                                          label: "Sub Type *",
                                          required: "",
                                          "return-object": ""
                                        },
                                        on: {
                                          input: function($event) {
                                            _vm.errors.sub_type = []
                                          }
                                        },
                                        model: {
                                          value: _vm.form.sub_type,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "sub_type", $$v)
                                          },
                                          expression: "form.sub_type"
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
                                        attrs: { label: "Description" },
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
                                          readonly: _vm.itemize,
                                          type: "number"
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
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", md: "4" } },
                                    [
                                      _c("v-checkbox", {
                                        attrs: { label: "Itemize" },
                                        on: {
                                          change: function($event) {
                                            _vm.form.amount = 0
                                            _vm.form.revolving_fund = 0
                                          }
                                        },
                                        model: {
                                          value: _vm.itemize,
                                          callback: function($$v) {
                                            _vm.itemize = $$v
                                          },
                                          expression: "itemize"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.itemize
                                ? _c(
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
                                                  itemsPerPageOptions: [
                                                    5,
                                                    10,
                                                    20
                                                  ]
                                                }
                                              },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "top",
                                                    fn: function() {
                                                      return [
                                                        _c(
                                                          "v-toolbar",
                                                          {
                                                            attrs: {
                                                              flat: "",
                                                              color: "white"
                                                            }
                                                          },
                                                          [
                                                            _c("v-spacer"),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-dialog",
                                                              {
                                                                attrs: {
                                                                  "max-width":
                                                                    "500px"
                                                                },
                                                                scopedSlots: _vm._u(
                                                                  [
                                                                    {
                                                                      key:
                                                                        "activator",
                                                                      fn: function(
                                                                        ref
                                                                      ) {
                                                                        var on =
                                                                          ref.on
                                                                        var attrs =
                                                                          ref.attrs
                                                                        return [
                                                                          _c(
                                                                            "v-btn",
                                                                            _vm._g(
                                                                              _vm._b(
                                                                                {
                                                                                  staticClass:
                                                                                    "mb-2",
                                                                                  attrs: {
                                                                                    color:
                                                                                      "primary",
                                                                                    dark:
                                                                                      ""
                                                                                  }
                                                                                },
                                                                                "v-btn",
                                                                                attrs,
                                                                                false
                                                                              ),
                                                                              on
                                                                            ),
                                                                            [
                                                                              _vm._v(
                                                                                "New Item"
                                                                              )
                                                                            ]
                                                                          )
                                                                        ]
                                                                      }
                                                                    }
                                                                  ],
                                                                  null,
                                                                  false,
                                                                  3246272433
                                                                ),
                                                                model: {
                                                                  value:
                                                                    _vm.dialog,
                                                                  callback: function(
                                                                    $$v
                                                                  ) {
                                                                    _vm.dialog = $$v
                                                                  },
                                                                  expression:
                                                                    "dialog"
                                                                }
                                                              },
                                                              [
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-card",
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
                                                                                  {
                                                                                    attrs: {
                                                                                      cols:
                                                                                        "12"
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "v-text-field",
                                                                                      {
                                                                                        attrs: {
                                                                                          label:
                                                                                            "Particular"
                                                                                        },
                                                                                        model: {
                                                                                          value:
                                                                                            _vm
                                                                                              .form
                                                                                              .details
                                                                                              .description,
                                                                                          callback: function(
                                                                                            $$v
                                                                                          ) {
                                                                                            _vm.$set(
                                                                                              _vm
                                                                                                .form
                                                                                                .details,
                                                                                              "description",
                                                                                              $$v
                                                                                            )
                                                                                          },
                                                                                          expression:
                                                                                            "\n                                                                                form\n                                                                                    .details\n                                                                                    .description\n                                                                            "
                                                                                        }
                                                                                      }
                                                                                    )
                                                                                  ],
                                                                                  1
                                                                                ),
                                                                                _vm._v(
                                                                                  " "
                                                                                ),
                                                                                _c(
                                                                                  "v-col",
                                                                                  {
                                                                                    attrs: {
                                                                                      cols:
                                                                                        "12"
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "v-text-field",
                                                                                      {
                                                                                        attrs: {
                                                                                          label:
                                                                                            "Amount",
                                                                                          type:
                                                                                            "number"
                                                                                        },
                                                                                        model: {
                                                                                          value:
                                                                                            _vm
                                                                                              .form
                                                                                              .details
                                                                                              .amount,
                                                                                          callback: function(
                                                                                            $$v
                                                                                          ) {
                                                                                            _vm.$set(
                                                                                              _vm
                                                                                                .form
                                                                                                .details,
                                                                                              "amount",
                                                                                              $$v
                                                                                            )
                                                                                          },
                                                                                          expression:
                                                                                            "\n                                                                                form\n                                                                                    .details\n                                                                                    .amount\n                                                                            "
                                                                                        }
                                                                                      }
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
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "v-card-actions",
                                                                      [
                                                                        _c(
                                                                          "v-spacer"
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "v-btn",
                                                                          {
                                                                            attrs: {
                                                                              color:
                                                                                "primary",
                                                                              text:
                                                                                ""
                                                                            },
                                                                            on: {
                                                                              click: function(
                                                                                $event
                                                                              ) {
                                                                                _vm.dialog = false
                                                                              }
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "\n                                                                Cancel\n                                                            "
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "v-btn",
                                                                          {
                                                                            attrs: {
                                                                              color:
                                                                                "primary",
                                                                              text:
                                                                                ""
                                                                            },
                                                                            on: {
                                                                              click:
                                                                                _vm.addItem
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "Add"
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
                                                              1
                                                            )
                                                          ],
                                                          1
                                                        )
                                                      ]
                                                    },
                                                    proxy: true
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
                                                            attrs: {
                                                              small: ""
                                                            },
                                                            on: {
                                                              click: function() {
                                                                _vm.onRemove(
                                                                  item
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                mdi-delete\n                                            "
                                                            )
                                                          ]
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
                                                              staticClass:
                                                                "title"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                    Total:\n                                                    "
                                                              ),
                                                              _c("strong", [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm.form
                                                                      .amount
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
                                                              staticClass:
                                                                "title"
                                                            },
                                                            [_vm._v("Total")]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("td", [
                                                            _c("strong", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm.form
                                                                    .amount
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
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c("v-row"),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", md: "4" } },
                                    [
                                      _c("v-checkbox", {
                                        attrs: {
                                          label: "Paid through revolving fund"
                                        },
                                        on: {
                                          change: function($event) {
                                            _vm.paid_through_fund
                                              ? (_vm.form.revolving_fund =
                                                  _vm.form.amount)
                                              : (_vm.form.revolving_fund = 0)
                                          }
                                        },
                                        model: {
                                          value: _vm.paid_through_fund,
                                          callback: function($$v) {
                                            _vm.paid_through_fund = $$v
                                          },
                                          expression: "paid_through_fund"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.paid_through_fund
                                    ? _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "4" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              rules: _vm.rules.revolving_fund,
                                              label: "Amount",
                                              type: "number"
                                            },
                                            model: {
                                              value: _vm.form.revolving_fund,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "revolving_fund",
                                                  $$v
                                                )
                                              },
                                              expression: "form.revolving_fund"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c("v-col", [
                                    _c("table", [
                                      _c("tbody", [
                                        _c("tr", [
                                          _c(
                                            "td",
                                            { staticClass: "green--text" },
                                            [
                                              _vm._v(
                                                "\n                                                    Amount to reimburse\n                                                "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("td", [_vm._v(":")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              "\n                                                    " +
                                                _vm._s(
                                                  _vm.amount_to_reimburse
                                                ) +
                                                "\n                                                "
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c(
                                            "td",
                                            { staticClass: "green--text" },
                                            [
                                              _vm._v(
                                                "\n                                                    Amount to replenish\n                                                "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("td", [_vm._v(":")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              "\n                                                    " +
                                                _vm._s(
                                                  _vm.form.revolving_fund
                                                ) +
                                                "\n                                                "
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c(
                                            "td",
                                            { staticClass: "green--text" },
                                            [
                                              _vm._v(
                                                "\n                                                    Total Amount\n                                                "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("td", [_vm._v(":")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(_vm.form.amount))
                                          ])
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
                                          rows: "1",
                                          "error-messages": _vm.errors.remarks,
                                          label: "Remarks"
                                        },
                                        on: {
                                          input: function($event) {
                                            _vm.errors.remarks = []
                                          }
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
                              ),
                              _vm._v(" "),
                              _c("small", { staticClass: "text--secondary" }, [
                                _vm._v(
                                  "\n                                * indicates required field\n                            "
                                )
                              ])
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
                    "v-card-actions",
                    { staticClass: "mt-3" },
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
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
                        [_vm._v("Cancel")]
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