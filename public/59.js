(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expenses/Create.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/expenses/Create.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AddVendor: _components_dialogs_AddVendor__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    var _this2 = this;

    return {
      dialog: false,
      valid: false,
      menu: false,
      headers: [{
        text: "Particulars",
        value: "particular",
        sortable: false
      }, {
        text: "Reimbursable Amount",
        value: "particular_reimbursable_amount",
        sortable: false
      }, {
        text: "Amount",
        value: "particular_amount",
        sortable: false
      }, {
        text: "",
        value: "actions",
        sortable: false
      }],
      items: [],
      expense_types: [],
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
        expense_type: null,
        employee: {
          id: null,
          remaining_fund: 0,
          fund: 0
        },
        vendor: null,
        particular: "",
        particular_amount: 0,
        particular_reimbursable_amount: 0,
        is_reimbursable: false
      },
      rules: {
        reimbursable_amount: [function (v) {
          return parseFloat(v) <= _this2.form.amount || "Reimbursable Amount should not be greater than the actual amount";
        }],
        particular_reimbursable_amount: [function (v) {
          return parseFloat(v) <= _this2.form.particular_amount || "Reimbursable Amount should not be greater than the actual amount";
        }]
      },
      errors: {
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
    getCurrentUser: function getCurrentUser() {
      var _this = this;

      axios.get("/api/user").then(function (response) {
        var emp = response.data.data.employee;
        _this.form.employee = emp == null ? null : emp;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

        _this.errorDialog("Error ".concat(error.response.status), error.response.statusText);
      });
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
      Object.assign(this.$data, this.$options.data.apply(this));
    },
    onSave: function onSave() {
      var _this = this;

      if (_this.form.employee == null || _this.form.employee <= 0) {
        _this.$dialog.message.error("User Account Unauthorized", {
          position: "top-right",
          timeout: 2000
        });

        return;
      }

      if (parseFloat(this.form.amount) - parseFloat(this.form.reimbursable_amount) > parseFloat(this.form.employee.remaining_fund)) {
        _this.$dialog.message.error("Expense actual amount is greater than remaining funds", {
          position: "top-right",
          timeout: 2000
        });

        return;
      }

      _this.$refs.form.validate();

      if (this.items.length == 0) {
        _this.$dialog.message.error("No Expense detail added", {
          position: "top-right",
          timeout: 2000
        });

        return;
      }

      if (_this.$refs.form.validate()) {
        axios.post("/api/expenses", {
          code: _this.form.code,
          description: _this.form.description,
          amount: _this.form.amount,
          reimbursable_amount: _this.form.reimbursable_amount,
          receipt_number: _this.form.receipt_number,
          date: _this.form.date,
          remarks: _this.form.remarks,
          is_active: _this.form.is_active,
          expense_type_id: _this.form.expense_type,
          employee_id: _this.form.employee.id,
          vendor_id: _this.form.vendor,
          expense_details: _this.items
        }).then(function (response) {
          _this.onRefresh();

          _this.$dialog.message.success("Expense created successfully.", {
            position: "top-right",
            timeout: 2000
          });

          _this.$router.go(-1);
        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);
          _this.errors = error.response.data.errors;

          _this.errorDialog("Error ".concat(error.response.status), error.response.statusText);
        });
        return;
      }
    },
    addItem: function addItem() {
      if (parseFloat(this.form.particular_amount) >= parseFloat(this.form.particular_reimbursable_amount)) {
        this.items.push({
          particular: this.form.particular,
          particular_amount: this.form.particular_amount,
          particular_reimbursable_amount: this.form.particular_reimbursable_amount
        });
      }

      this.dialog = false;
      this.form.particular = "";
      this.form.particular_amount = 0;
      this.form.particular_reimbursable_amount = 0;
    },
    onRemove: function onRemove(item) {
      var index = this.items.indexOf(item);
      confirm("Are you sure you want to remove this item?") && this.items.splice(index, 1);
    },
    isEmpty: function isEmpty(item) {
      if (item) {
        return parseFloat(item);
      }

      return 0;
    }
  },
  watch: {
    items: function items() {
      this.form.amount = this.items.reduce(function (total, item) {
        return parseFloat(total) + parseFloat(item.particular_amount);
      }, 0);
      this.form.reimbursable_amount = this.items.reduce(function (total, item) {
        return parseFloat(total) + parseFloat(item.particular_reimbursable_amount);
      }, 0);
    }
  },
  created: function created() {
    this.getCurrentUser();
    this.loadExpenseTypes();
    this.loadVendors();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expenses/Create.vue?vue&type=template&id=941e4b5a&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/expenses/Create.vue?vue&type=template&id=941e4b5a& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
                    "v-row",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c("h3", { staticClass: "title green--text mr-2" }, [
                        _vm._v(
                          "\n                        Remaining Funds:\n                        " +
                            _vm._s(
                              _vm.formatNumber(
                                _vm.form.employee == null
                                  ? 0
                                  : _vm.form.employee.remaining_fund || 0
                              )
                            ) +
                            "\n                    "
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
                        { attrs: { cols: "12", md: "4" } },
                        [
                          _c("v-autocomplete", {
                            attrs: {
                              rules: [],
                              items: _vm.vendors,
                              "error-messages": _vm.errors.vendor_id,
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
                                      on: { createdVendor: _vm.loadVendors }
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
                                        { attrs: { "max-width": "300" } },
                                        [
                                          _c(
                                            "v-list-item-content",
                                            [
                                              _c("v-list-item-title", {
                                                domProps: {
                                                  innerHTML: _vm._s(
                                                    data.item.name
                                                  )
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("v-list-item-subtitle", {
                                                domProps: {
                                                  innerHTML: _vm._s(
                                                    "TIN: " +
                                                      (data.item.tin == null
                                                        ? "N/A"
                                                        : data.item.tin)
                                                  )
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("v-list-item-subtitle", {
                                                domProps: {
                                                  innerHTML: _vm._s(
                                                    data.item.address
                                                  )
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("v-list-item-subtitle", {
                                                domProps: {
                                                  innerHTML: _vm._s(
                                                    data.item.is_vat_inclusive
                                                      ? "VAT"
                                                      : "Non-VAT"
                                                  )
                                                }
                                              })
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
                          _c("v-autocomplete", {
                            attrs: {
                              rules: _vm.validation.required,
                              items: _vm.expense_types,
                              "error-messages": _vm.errors.expense_type_id,
                              "item-value": "id",
                              "item-text": "name",
                              label: "Expense Type *",
                              required: ""
                            },
                            on: {
                              input: function($event) {
                                _vm.errors.expense_type_id = []
                              }
                            },
                            model: {
                              value: _vm.form.expense_type,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "expense_type", $$v)
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
                                                rules: _vm.validation.required,
                                                "error-messages":
                                                  _vm.errors.date,
                                                label: "Date *",
                                                readonly: ""
                                              },
                                              on: {
                                                input: function($event) {
                                                  _vm.errors.date = []
                                                }
                                              },
                                              model: {
                                                value: _vm.form.date,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.form,
                                                    "date",
                                                    $$v
                                                  )
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
                          _c("v-text-field", {
                            attrs: {
                              rules: [],
                              "error-messages": _vm.errors.receipt_number,
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
                                _vm.$set(_vm.form, "receipt_number", $$v)
                              },
                              expression: "form.receipt_number"
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
                                            attrs: { flat: "", color: "white" }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                    Expense Details\n                                    "
                                            ),
                                            _c("v-spacer"),
                                            _vm._v(" "),
                                            _c(
                                              "v-dialog",
                                              {
                                                attrs: { "max-width": "500px" },
                                                scopedSlots: _vm._u([
                                                  {
                                                    key: "activator",
                                                    fn: function(ref) {
                                                      var on = ref.on
                                                      var attrs = ref.attrs
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
                                                                  dark: ""
                                                                }
                                                              },
                                                              "v-btn",
                                                              attrs,
                                                              false
                                                            ),
                                                            on
                                                          ),
                                                          [_vm._v("New Item")]
                                                        )
                                                      ]
                                                    }
                                                  }
                                                ]),
                                                model: {
                                                  value: _vm.dialog,
                                                  callback: function($$v) {
                                                    _vm.dialog = $$v
                                                  },
                                                  expression: "dialog"
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
                                                                      cols: "12"
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
                                                                              .particular,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.form,
                                                                              "particular",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "\n                                                                    form.particular\n                                                                "
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-col",
                                                                  {
                                                                    attrs: {
                                                                      cols: "12"
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
                                                                              .particular_amount,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.form,
                                                                              "particular_amount",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "\n                                                                    form.particular_amount\n                                                                "
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-col",
                                                                  {
                                                                    attrs: {
                                                                      cols: "12"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-checkbox",
                                                                      {
                                                                        attrs: {
                                                                          label:
                                                                            "Reimbursable"
                                                                        },
                                                                        on: {
                                                                          click: function(
                                                                            $event
                                                                          ) {
                                                                            _vm
                                                                              .form
                                                                              .is_reimbursable
                                                                              ? (_vm.form.particular_reimbursable_amount =
                                                                                  _vm.form.particular_amount)
                                                                              : (_vm.form.particular_reimbursable_amount = 0)
                                                                          }
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .form
                                                                              .is_reimbursable,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.form,
                                                                              "is_reimbursable",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "\n                                                                    form.is_reimbursable\n                                                                "
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-col",
                                                                  {
                                                                    attrs: {
                                                                      cols: "12"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        directives: [
                                                                          {
                                                                            name:
                                                                              "show",
                                                                            rawName:
                                                                              "v-show",
                                                                            value:
                                                                              _vm
                                                                                .form
                                                                                .is_reimbursable,
                                                                            expression:
                                                                              "\n                                                                    form.is_reimbursable\n                                                                "
                                                                          }
                                                                        ],
                                                                        attrs: {
                                                                          label:
                                                                            "Reimbursable Amount",
                                                                          rules:
                                                                            _vm
                                                                              .rules
                                                                              .particular_reimbursable_amount
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .form
                                                                              .particular_reimbursable_amount,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.form,
                                                                              "particular_reimbursable_amount",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "\n                                                                    form.particular_reimbursable_amount\n                                                                "
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
                                                        _c("v-spacer"),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-btn",
                                                          {
                                                            attrs: {
                                                              color: "primary",
                                                              text: ""
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                _vm.dialog = false
                                                              }
                                                            }
                                                          },
                                                          [_vm._v("Cancel")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-btn",
                                                          {
                                                            attrs: {
                                                              color: "primary",
                                                              text: ""
                                                            },
                                                            on: {
                                                              click: _vm.addItem
                                                            }
                                                          },
                                                          [_vm._v("Add")]
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
                                            attrs: { small: "" },
                                            on: {
                                              click: function() {
                                                _vm.onRemove(item)
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                    mdi-delete\n                                "
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
                                            "\n                                        Reimbursable:\n                                        "
                                          ),
                                          _c("strong", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.form.reimbursable_amount
                                              )
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("br"),
                                          _vm._v(
                                            "\n                                        Total:\n                                        "
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
                                                _vm.form.reimbursable_amount
                                              )
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
                          _c("v-textarea", {
                            attrs: {
                              rows: "1",
                              label: "Remarks",
                              "error-messages": _vm.errors.remarks
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
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("small", { staticClass: "text--secondary" }, [
                    _vm._v(
                      "\n                    * indicates required field\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
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

/***/ "./resources/js/views/modules/user/expenses/Create.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/modules/user/expenses/Create.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_941e4b5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=941e4b5a& */ "./resources/js/views/modules/user/expenses/Create.vue?vue&type=template&id=941e4b5a&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/user/expenses/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_941e4b5a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_941e4b5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/user/expenses/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/user/expenses/Create.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/modules/user/expenses/Create.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expenses/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/user/expenses/Create.vue?vue&type=template&id=941e4b5a&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/modules/user/expenses/Create.vue?vue&type=template&id=941e4b5a& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_941e4b5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=941e4b5a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expenses/Create.vue?vue&type=template&id=941e4b5a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_941e4b5a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_941e4b5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);