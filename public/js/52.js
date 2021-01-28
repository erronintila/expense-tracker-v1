(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/settings/Employee.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/settings/Employee.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/settings/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/settings/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
>>>>>>> feature/notifications
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
=======
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
>>>>>>> feature/notifications
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
<<<<<<< HEAD
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      panel: [0],
      valid: false,
      employees: [],
      employee: {
        id: null,
        expense_types: null,
        sub_types: null
      },
      headerExpenseTypes: [{
        text: "Name",
        value: "name"
      }, {
        text: "Limit",
        value: "pivot.limit"
      }],
      sub_types: [],
      all_expense_types: [],
      allowed_expense_types: null,
      expense_types: [],
      expense_type: {
        id: null,
        sub_types: null,
        pivot: {
          limit: null
        }
      },
      // expense_type_limit: null
      pivot_expense_types: [],
      pivot_sub_types: null
    };
  },
  methods: {
    loadEmployees: function loadEmployees() {
      var _this = this;

      axios.get("/api/data/employees?update_settings=true").then(function (response) {
        var data = response.data.data;
        _this.employees = data;
=======
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      settings: {
        company_name: "Twin-Circa Marketing",
        currency: "Philippine Peso",
        expiry_period: 1,
        expense_encoding_period: 1,
        submission_period: "Weekly",
        approval_period: 1,
        tax_rate: 0
      },
      panel: [0, 1, 2, 3]
    };
  },
  methods: {
    onLoad: function onLoad() {
      var _this = this;

      axios.get("/api/settings").then(function (response) {
        _this.settings = response.data;
>>>>>>> feature/notifications
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

<<<<<<< HEAD
        _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
      });
    },
    loadExpenseTypes: function loadExpenseTypes() {
      var _this = this;

      axios.get("/api/data/expense_types?only=true").then(function (response) {
        _this.all_expense_types = response.data.data;
=======
        _this.mixin_errorDialog(error.response.status, error.response.statusText);
      });
    },
    onSave: function onSave() {
      var _this = this; // let settings = Object.assign(
      //     this.general_settings,
      //     this.expense_settings,
      //     this.expense_report_settings
      // );


      axios.post("/api/settings", {
        settings: _this.settings
      }).then(function (response) {
        _this.mixin_successDialog("Success", "Saved settings successfully");

        _this.$store.dispatch("AUTH_USER");
>>>>>>> feature/notifications
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

<<<<<<< HEAD
        _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
      });
    },
    onSave: function onSave() {
      var _this = this;

      if (_this.employee.id == null) {
        _this.mixin_errorDialog("Error", "No employee selected");

        return;
      }

      _this.$refs.form.validate();

      if (_this.$refs.form.validate()) {
        _this.loader = true;
        axios.put("/api/employees/" + _this.employee.id, {
          action: "settings",
          expense_types: _this.allowed_expense_types.map(function (item) {
            return item.id;
          })
        }).then(function (response) {
          _this.$dialog.message.success("Employee settings updated successfully.", {
            position: "top-right",
            timeout: 2000
          });

          _this.$store.dispatch("AUTH_USER"); // _this.$router.push({ name: "admin.employees.index" });

        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);

          _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);

          if (error.response) {
            if (error.response.data) {
              _this.errors = error.response.data.errors;
            }
          }
        });
        return;
      }
    }
  },
  watch: {
    employee: function employee(item) {
      // this.expense_types = item.expense_types;
      this.allowed_expense_types = item.expense_types;
      this.pivot_expense_types = item.pivot_expense_types;
    },
    allowed_expense_types: function allowed_expense_types(items) {
      this.expense_types = items;
      this.sub_types = []; // this.expense_type_limit = null;
    },
    expense_type: function expense_type(item) {
      var expense_type_id = item.id; // let subtypes = this.pivot_sub_types.filter(item =>
      //     item.id.includes(expense_type_id)
      // );

      this.sub_types = this.pivot_sub_types;
    }
  },
  computed: {
    expense_type_limit: {
      get: function get() {
        var limit = this.expense_type.pivot == null ? null : this.expense_type.pivot.limit;
        return limit;
      },
      set: function set(newValue) {
        return newValue;
      }
=======
        _this.mixin_errorDialog(error.response.status, error.response.statusText);
      });
>>>>>>> feature/notifications
    }
  },
  created: function created() {
    // this.$store.dispatch("AUTH_USER");
<<<<<<< HEAD
    this.loadExpenseTypes();
    this.loadEmployees();
=======
    this.$store.dispatch("AUTH_NOTIFICATIONS");
    this.onLoad();
>>>>>>> feature/notifications
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/settings/Employee.vue?vue&type=template&id=07631e43&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/settings/Employee.vue?vue&type=template&id=07631e43& ***!
  \*****************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/settings/Index.vue?vue&type=template&id=2bdf5f8d&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/settings/Index.vue?vue&type=template&id=2bdf5f8d& ***!
  \**************************************************************************************************************************************************************************************************************************/
>>>>>>> feature/notifications
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
<<<<<<< HEAD
        { staticClass: "elevation-0" },
=======
        { staticClass: "elevation-0 pt-0" },
>>>>>>> feature/notifications
        [
          _c(
            "v-card-title",
            { staticClass: "pt-0" },
            [
<<<<<<< HEAD
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
              _c("h4", { staticClass: "title success--text" }, [
                _vm._v("Employee Settings")
              ])
=======
              _c("h4", { staticClass: "title green--text" }, [
                _vm._v("Settings")
              ]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "mr-2",
                  attrs: {
                    color: "green",
                    to: { name: "admin.settings.employee" },
                    outlined: "",
                    dark: ""
                  }
                },
                [_vm._v("\n                Employee Settings\n            ")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "green", dark: "" },
                  on: { click: _vm.onSave }
                },
                [_vm._v("Save Changes")]
              )
>>>>>>> feature/notifications
            ],
            1
          ),
          _vm._v(" "),
          _c(
<<<<<<< HEAD
            "v-card",
            { staticClass: "mb-4" },
            [
              _c(
                "v-card-text",
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "6" } },
                        [
                          _c("v-autocomplete", {
                            attrs: {
                              label: "Employee",
                              "return-object": "",
                              items: _vm.employees,
                              "item-text": "full_name",
                              "item-value": "id"
                            },
                            model: {
                              value: _vm.employee,
                              callback: function($$v) {
                                _vm.employee = $$v
                              },
                              expression: "employee"
                            }
                          })
=======
            "v-expansion-panels",
            {
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
                      _vm._v(
                        "\n                        Expenses\n                    "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-expansion-panel-content",
                    [
                      _c(
                        "v-container",
                        [
                          _c(
                            "v-form",
                            { ref: "formExpenses" },
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
                                          label: "Expense Encoding Period",
                                          suffix: "days",
                                          rules: _vm.mixin_validation.required.concat(
                                            _vm.mixin_validation.minNumberValue(
                                              1
                                            )
                                          ),
                                          hint:
                                            "Allowed period for expenses to be encoded based on date",
                                          "persistent-hint": ""
                                        },
                                        model: {
                                          value:
                                            _vm.settings
                                              .expense_encoding_period,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.settings,
                                              "expense_encoding_period",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "settings.expense_encoding_period"
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
>>>>>>> feature/notifications
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
<<<<<<< HEAD
              )
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
                "v-expansion-panels",
                {
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
                          _vm._v(
                            "\n                            Expense Types\n                        "
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
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.all_expense_types,
                                      "item-text": "name",
                                      "item-value": "id",
                                      "return-object": "",
                                      label: "Allowed Expense Types",
                                      multiple: ""
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "selection",
                                        fn: function(ref) {
                                          var item = ref.item
                                          var index = ref.index
                                          return [
                                            index === 0
                                              ? _c(
                                                  "v-chip",
                                                  { attrs: { small: "" } },
                                                  [
                                                    _c("span", [
                                                      _vm._v(_vm._s(item.name))
                                                    ])
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            index === 1
                                              ? _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "grey--text caption"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "(+" +
                                                        _vm._s(
                                                          _vm
                                                            .allowed_expense_types
                                                            .length - 1
                                                        ) +
                                                        "\n                                            others)"
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ]
                                        }
                                      }
                                    ]),
                                    model: {
                                      value: _vm.allowed_expense_types,
                                      callback: function($$v) {
                                        _vm.allowed_expense_types = $$v
                                      },
                                      expression: "allowed_expense_types"
                                    }
                                  })
=======
              ),
              _vm._v(" "),
              _c(
                "v-expansion-panel",
                [
                  _c("v-expansion-panel-header", [
                    _c("div", { staticClass: "green--text" }, [
                      _vm._v(
                        "\n                        Expense Reports\n                    "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-expansion-panel-content",
                    [
                      _c(
                        "v-container",
                        [
                          _c(
                            "v-form",
                            { ref: "formExpenseReports" },
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", md: "4" } },
                                    [
                                      _c("v-select", {
                                        attrs: {
                                          label: "Submission Date",
                                          items: ["Daily", "Weekly", "Monthly"],
                                          hint:
                                            "Due date for submission of expense reports",
                                          "persistent-hint": ""
                                        },
                                        model: {
                                          value: _vm.settings.submission_period,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.settings,
                                              "submission_period",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "settings.submission_period"
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
                                          label: "Approval Period",
                                          suffix: "days",
                                          rules: _vm.mixin_validation.required.concat(
                                            _vm.mixin_validation.minNumberValue(
                                              1
                                            )
                                          ),
                                          hint:
                                            "Allowed period for expense reports to be approved based on submission date",
                                          "persistent-hint": "",
                                          type: "number"
                                        },
                                        model: {
                                          value: _vm.settings.approval_period,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.settings,
                                              "approval_period",
                                              $$v
                                            )
                                          },
                                          expression: "settings.approval_period"
                                        }
                                      })
                                    ],
                                    1
                                  )
>>>>>>> feature/notifications
                                ],
                                1
                              )
                            ],
                            1
<<<<<<< HEAD
                          ),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "4" } },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { color: "green" },
                                      on: { click: _vm.onSave }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    Save Changes\n                                "
                                      )
                                    ]
=======
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
                        "\n                        Taxes\n                    "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-expansion-panel-content",
                    [
                      _c(
                        "v-container",
                        [
                          _c(
                            "v-form",
                            { ref: "formTaxes" },
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
                                          label: "Tax Rate",
                                          suffix: "%",
                                          rules: _vm.mixin_validation.required.concat(
                                            _vm.mixin_validation.minNumberValue(
                                              0
                                            )
                                          ),
                                          hint:
                                            "Tax rate to be imposed on expenses.",
                                          "persistent-hint": ""
                                        },
                                        model: {
                                          value: _vm.settings.tax_rate,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.settings,
                                              "tax_rate",
                                              $$v
                                            )
                                          },
                                          expression: "settings.tax_rate"
                                        }
                                      })
                                    ],
                                    1
>>>>>>> feature/notifications
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

<<<<<<< HEAD
/***/ "./resources/js/views/modules/admin/settings/Employee.vue":
/*!****************************************************************!*\
  !*** ./resources/js/views/modules/admin/settings/Employee.vue ***!
  \****************************************************************/
=======
/***/ "./resources/js/views/modules/admin/settings/Index.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/modules/admin/settings/Index.vue ***!
  \*************************************************************/
>>>>>>> feature/notifications
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _Employee_vue_vue_type_template_id_07631e43___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Employee.vue?vue&type=template&id=07631e43& */ "./resources/js/views/modules/admin/settings/Employee.vue?vue&type=template&id=07631e43&");
/* harmony import */ var _Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Employee.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/settings/Employee.vue?vue&type=script&lang=js&");
=======
/* harmony import */ var _Index_vue_vue_type_template_id_2bdf5f8d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=2bdf5f8d& */ "./resources/js/views/modules/admin/settings/Index.vue?vue&type=template&id=2bdf5f8d&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/settings/Index.vue?vue&type=script&lang=js&");
>>>>>>> feature/notifications
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
<<<<<<< HEAD
  _Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Employee_vue_vue_type_template_id_07631e43___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Employee_vue_vue_type_template_id_07631e43___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_2bdf5f8d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_2bdf5f8d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> feature/notifications
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/views/modules/admin/settings/Employee.vue"
=======
component.options.__file = "resources/js/views/modules/admin/settings/Index.vue"
>>>>>>> feature/notifications
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/views/modules/admin/settings/Employee.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/settings/Employee.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
=======
/***/ "./resources/js/views/modules/admin/settings/Index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/settings/Index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
>>>>>>> feature/notifications
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Employee.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/settings/Employee.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/settings/Employee.vue?vue&type=template&id=07631e43&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/settings/Employee.vue?vue&type=template&id=07631e43& ***!
  \***********************************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/settings/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/settings/Index.vue?vue&type=template&id=2bdf5f8d&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/settings/Index.vue?vue&type=template&id=2bdf5f8d& ***!
  \********************************************************************************************/
>>>>>>> feature/notifications
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_template_id_07631e43___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Employee.vue?vue&type=template&id=07631e43& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/settings/Employee.vue?vue&type=template&id=07631e43&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_template_id_07631e43___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_template_id_07631e43___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_2bdf5f8d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=2bdf5f8d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/settings/Index.vue?vue&type=template&id=2bdf5f8d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_2bdf5f8d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_2bdf5f8d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> feature/notifications



/***/ })

}]);