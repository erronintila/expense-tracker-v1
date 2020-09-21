(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/reports/components/CreateExpense.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/reports/components/CreateExpense.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    employeeid: {
      type: Number,
      "default": 0
    }
  },
  data: function data() {
    return {
      dialog: false,
      valid: false,
      menu: false,
      code: null,
      description: null,
      amount: 0,
      receipt_number: null,
      date: null,
      remarks: "",
      is_active: true,
      expense_type: null,
      expense_types: [],
      employee: null,
      employees: [],
      vendor: null,
      vendors: [],
      rules: {
        description: [function (v) {
          return !!v || "Description is required";
        }],
        amount: [function (v) {
          return !!v || "Amount is required";
        }],
        receipt_number: [function (v) {
          return !!v || "Receipt Number is required";
        }],
        date: [function (v) {
          return !!v || "Date is required";
        }],
        remarks: [],
        is_active: [],
        expense_type: [function (v) {
          return !!v || "Expense Type is required";
        }],
        vendor: [function (v) {
          return !!v || "Vendor is required";
        }]
      },
      errors: {
        description: [],
        amount: [],
        receipt_number: [],
        date: [],
        remarks: [],
        is_active: [],
        expense_type_id: [],
        vendor_id: []
      }
    };
  },
  methods: {
    openDialog: function openDialog() {
      this.dialog = true;
    },
    loadExpenseTypes: function loadExpenseTypes() {
      var _this = this;

      axios.get("/api/data/expense_types").then(function (response) {
        _this.expense_types = response.data.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    loadVendors: function loadVendors() {
      var _this = this;

      axios.get("/api/data/vendors").then(function (response) {
        _this.vendors = response.data.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    onRefresh: function onRefresh() {
      Object.assign(this.$data, this.$options.data.apply(this));
      this.$refs.form.resetValidation();
      this.loadExpenseTypes();
      this.loadVendors();
    },
    onSave: function onSave() {
      var _this = this;

      _this.$refs.form.validate();

      if (_this.$refs.form.validate()) {
        axios.post("/api/expenses", {
          code: _this.code,
          description: _this.description,
          amount: _this.amount,
          receipt_number: _this.receipt_number,
          date: _this.date,
          remarks: _this.remarks,
          is_active: _this.is_active,
          expense_type_id: _this.expense_type,
          employee_id: _this.employeeid,
          vendor_id: _this.vendor
        }).then(function (response) {
          _this.onRefresh();

          _this.$dialog.message.success("Expense created successfully.", {
            position: "top-right",
            timeout: 2000
          });

          _this.$emit("onSaveExpense");

          _this.dialog = false;
        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);
          _this.errors = error.response.data.errors;
        });
        return;
      }
    }
  },
  created: function created() {
    axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("access_token");
    this.loadExpenseTypes();
    this.loadVendors();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/reports/components/EditExpense.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/reports/components/EditExpense.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    employeeid: {
      type: Number,
      "default": 0
    }
  },
  data: function data() {
    return {
      dialog: false,
      valid: false,
      menu: false,
      id: null,
      code: null,
      description: null,
      amount: 0,
      receipt_number: null,
      date: null,
      remarks: "",
      is_active: true,
      expense_type: null,
      expense_types: [],
      employee: null,
      employees: [],
      vendor: null,
      vendors: [],
      rules: {
        description: [function (v) {
          return !!v || "Description is required";
        }],
        amount: [function (v) {
          return !!v || "Amount is required";
        }],
        receipt_number: [function (v) {
          return !!v || "Receipt Number is required";
        }],
        date: [function (v) {
          return !!v || "Date is required";
        }],
        remarks: [],
        is_active: [],
        expense_type: [function (v) {
          return !!v || "Expense Type is required";
        }],
        vendor: [function (v) {
          return !!v || "Vendor is required";
        }]
      },
      errors: {
        description: [],
        amount: [],
        receipt_number: [],
        date: [],
        remarks: [],
        is_active: [],
        expense_type_id: [],
        vendor_id: []
      }
    };
  },
  methods: {
    openDialog: function openDialog(item) {
      var _this = this;

      _this.dialog = true;
      axios.get("/api/expenses/" + item.id).then(function (response) {
        var data = response.data.data;
        _this.id = data.id;
        _this.code = data.code;
        _this.description = data.description;
        _this.amount = data.amount;
        _this.receipt_number = data.receipt_number;
        _this.date = data.date;
        _this.remarks = data.remarks;
        _this.is_active = data.is_active;
        _this.expense_type = data.expense_type.id;
        _this.employee = data.employee.id;
        _this.vendor = data.vendor.id;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    loadExpenseTypes: function loadExpenseTypes() {
      var _this = this;

      axios.get("/api/data/expense_types").then(function (response) {
        _this.expense_types = response.data.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    loadVendors: function loadVendors() {
      var _this = this;

      axios.get("/api/data/vendors").then(function (response) {
        _this.vendors = response.data.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    onRefresh: function onRefresh() {
      Object.assign(this.$data, this.$options.data.apply(this));
      this.$refs.form.resetValidation();
      this.loadExpenseTypes();
      this.loadVendors();
    },
    onSave: function onSave() {
      var _this = this;

      _this.$refs.form.validate();

      if (_this.$refs.form.validate()) {
        axios.put("/api/expenses/" + _this.id, {
          code: _this.code,
          description: _this.description,
          amount: _this.amount,
          receipt_number: _this.receipt_number,
          date: _this.date,
          remarks: _this.remarks,
          is_active: _this.is_active,
          expense_type_id: _this.expense_type,
          employee_id: _this.employeeid,
          vendor_id: _this.vendor
        }).then(function (response) {
          _this.onRefresh();

          _this.$dialog.message.success("Expense updated successfully.", {
            position: "top-right",
            timeout: 2000
          });

          _this.$emit("onSaveExpense");

          _this.dialog = false;
        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);
          _this.errors = error.response.data.errors;
        });
        return;
      }
    }
  },
  created: function created() {
    axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("access_token");
    this.loadExpenseTypes();
    this.loadVendors();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/reports/components/CreateExpense.vue?vue&type=template&id=7c368b8c&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/reports/components/CreateExpense.vue?vue&type=template&id=7c368b8c& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
    "v-app",
    [
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "600px" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            [
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
                  _c("v-card-title", [
                    _c("span", { staticClass: "headline" }, [
                      _vm._v("New Expense")
                    ])
                  ]),
                  _vm._v(" "),
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
                                { attrs: { cols: "12", md: "4" } },
                                [
                                  _c("v-autocomplete", {
                                    attrs: {
                                      rules: _vm.rules.expense_type,
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
                                      }
                                    },
                                    model: {
                                      value: _vm.expense_type,
                                      callback: function($$v) {
                                        _vm.expense_type = $$v
                                      },
                                      expression: "expense_type"
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
                                      rules: _vm.rules.vendor,
                                      items: _vm.vendors,
                                      "error-messages": _vm.errors.vendor_id,
                                      "item-value": "id",
                                      "item-text": "name",
                                      label: "Vendor *",
                                      required: ""
                                    },
                                    on: {
                                      input: function($event) {
                                        _vm.errors.vendor_id = []
                                      }
                                    },
                                    model: {
                                      value: _vm.vendor,
                                      callback: function($$v) {
                                        _vm.vendor = $$v
                                      },
                                      expression: "vendor"
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
                                { attrs: { cols: "12", md: "8" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      rules: _vm.rules.description,
                                      counter: 100,
                                      "error-messages": _vm.errors.description,
                                      label: "Description *",
                                      required: ""
                                    },
                                    on: {
                                      input: function($event) {
                                        _vm.errors.description = []
                                      }
                                    },
                                    model: {
                                      value: _vm.description,
                                      callback: function($$v) {
                                        _vm.description = $$v
                                      },
                                      expression: "description"
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
                                                        rules: _vm.rules.date,
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
                                                        value: _vm.date,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.date = $$v
                                                        },
                                                        expression: "date"
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
                                          value: _vm.date,
                                          callback: function($$v) {
                                            _vm.date = $$v
                                          },
                                          expression: "date"
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
                                      rules: _vm.rules.receipt_number,
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
                                      value: _vm.receipt_number,
                                      callback: function($$v) {
                                        _vm.receipt_number = $$v
                                      },
                                      expression: "receipt_number"
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
                                      rules: _vm.rules.amount,
                                      "error-messages": _vm.errors.amount,
                                      label: "Amount *",
                                      required: ""
                                    },
                                    on: {
                                      input: function($event) {
                                        _vm.errors.amount = []
                                      }
                                    },
                                    model: {
                                      value: _vm.amount,
                                      callback: function($$v) {
                                        _vm.amount = $$v
                                      },
                                      expression: "amount"
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
                                      value: _vm.remarks,
                                      callback: function($$v) {
                                        _vm.remarks = $$v
                                      },
                                      expression: "remarks"
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
                              "\n                            * indicates required field\n                        "
                            )
                          ])
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
                          attrs: { color: "primary", text: "" },
                          on: {
                            click: function($event) {
                              _vm.dialog = false
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Close\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "primary", text: "" },
                          on: { click: _vm.onSave }
                        },
                        [
                          _vm._v(
                            "\n                        Save\n                    "
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/reports/components/EditExpense.vue?vue&type=template&id=8fcdcc28&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/reports/components/EditExpense.vue?vue&type=template&id=8fcdcc28& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
    "v-app",
    [
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "600px" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            [
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
                  _c("v-card-title", [
                    _c("span", { staticClass: "headline" }, [
                      _vm._v("Edit Expense")
                    ])
                  ]),
                  _vm._v(" "),
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
                                { attrs: { cols: "12", md: "4" } },
                                [
                                  _c("v-autocomplete", {
                                    attrs: {
                                      rules: _vm.rules.expense_type,
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
                                      }
                                    },
                                    model: {
                                      value: _vm.expense_type,
                                      callback: function($$v) {
                                        _vm.expense_type = $$v
                                      },
                                      expression: "expense_type"
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
                                      rules: _vm.rules.vendor,
                                      items: _vm.vendors,
                                      "error-messages": _vm.errors.vendor_id,
                                      "item-value": "id",
                                      "item-text": "name",
                                      label: "Vendor *",
                                      required: ""
                                    },
                                    on: {
                                      input: function($event) {
                                        _vm.errors.vendor_id = []
                                      }
                                    },
                                    model: {
                                      value: _vm.vendor,
                                      callback: function($$v) {
                                        _vm.vendor = $$v
                                      },
                                      expression: "vendor"
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
                                { attrs: { cols: "12", md: "8" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      rules: _vm.rules.description,
                                      counter: 100,
                                      "error-messages": _vm.errors.description,
                                      label: "Description *",
                                      required: ""
                                    },
                                    on: {
                                      input: function($event) {
                                        _vm.errors.description = []
                                      }
                                    },
                                    model: {
                                      value: _vm.description,
                                      callback: function($$v) {
                                        _vm.description = $$v
                                      },
                                      expression: "description"
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
                                                        rules: _vm.rules.date,
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
                                                        value: _vm.date,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.date = $$v
                                                        },
                                                        expression: "date"
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
                                          value: _vm.date,
                                          callback: function($$v) {
                                            _vm.date = $$v
                                          },
                                          expression: "date"
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
                                      rules: _vm.rules.receipt_number,
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
                                      value: _vm.receipt_number,
                                      callback: function($$v) {
                                        _vm.receipt_number = $$v
                                      },
                                      expression: "receipt_number"
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
                                      rules: _vm.rules.amount,
                                      "error-messages": _vm.errors.amount,
                                      label: "Amount *",
                                      required: ""
                                    },
                                    on: {
                                      input: function($event) {
                                        _vm.errors.amount = []
                                      }
                                    },
                                    model: {
                                      value: _vm.amount,
                                      callback: function($$v) {
                                        _vm.amount = $$v
                                      },
                                      expression: "amount"
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
                                      value: _vm.remarks,
                                      callback: function($$v) {
                                        _vm.remarks = $$v
                                      },
                                      expression: "remarks"
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
                              "\n                            * indicates required field\n                        "
                            )
                          ])
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
                          attrs: { color: "primary", text: "" },
                          on: {
                            click: function($event) {
                              _vm.dialog = false
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Close\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "primary", text: "" },
                          on: { click: _vm.onSave }
                        },
                        [
                          _vm._v(
                            "\n                        Save\n                    "
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/modules/admin/reports/components/CreateExpense.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/modules/admin/reports/components/CreateExpense.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateExpense_vue_vue_type_template_id_7c368b8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateExpense.vue?vue&type=template&id=7c368b8c& */ "./resources/js/views/modules/admin/reports/components/CreateExpense.vue?vue&type=template&id=7c368b8c&");
/* harmony import */ var _CreateExpense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateExpense.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/reports/components/CreateExpense.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateExpense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateExpense_vue_vue_type_template_id_7c368b8c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CreateExpense_vue_vue_type_template_id_7c368b8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/reports/components/CreateExpense.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/reports/components/CreateExpense.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/reports/components/CreateExpense.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateExpense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateExpense.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/reports/components/CreateExpense.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateExpense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/reports/components/CreateExpense.vue?vue&type=template&id=7c368b8c&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/reports/components/CreateExpense.vue?vue&type=template&id=7c368b8c& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateExpense_vue_vue_type_template_id_7c368b8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateExpense.vue?vue&type=template&id=7c368b8c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/reports/components/CreateExpense.vue?vue&type=template&id=7c368b8c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateExpense_vue_vue_type_template_id_7c368b8c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateExpense_vue_vue_type_template_id_7c368b8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/modules/admin/reports/components/EditExpense.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/modules/admin/reports/components/EditExpense.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditExpense_vue_vue_type_template_id_8fcdcc28___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditExpense.vue?vue&type=template&id=8fcdcc28& */ "./resources/js/views/modules/admin/reports/components/EditExpense.vue?vue&type=template&id=8fcdcc28&");
/* harmony import */ var _EditExpense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditExpense.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/reports/components/EditExpense.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditExpense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditExpense_vue_vue_type_template_id_8fcdcc28___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditExpense_vue_vue_type_template_id_8fcdcc28___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/reports/components/EditExpense.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/reports/components/EditExpense.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/reports/components/EditExpense.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditExpense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditExpense.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/reports/components/EditExpense.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditExpense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/reports/components/EditExpense.vue?vue&type=template&id=8fcdcc28&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/reports/components/EditExpense.vue?vue&type=template&id=8fcdcc28& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditExpense_vue_vue_type_template_id_8fcdcc28___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditExpense.vue?vue&type=template&id=8fcdcc28& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/reports/components/EditExpense.vue?vue&type=template&id=8fcdcc28&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditExpense_vue_vue_type_template_id_8fcdcc28___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditExpense_vue_vue_type_template_id_8fcdcc28___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);