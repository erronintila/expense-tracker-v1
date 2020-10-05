(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/select/MultiSelect.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/select/MultiSelect.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    label: {
      type: String,
      "default": ""
    },
    items: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    defaultSelected: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      selected: this.defaultSelected
    };
  },
  methods: {
    toggle: function toggle() {
      var _this = this;

      this.$nextTick(function () {
        if (_this.selectedAll) {
          _this.selected = [];
        } else {
          _this.selected = _this.items.slice();
        }
      });
    } // changeSelected() {
    //     this.$emit("changeSelected", this.selected);
    // }

  },
  watch: {
    selected: function selected() {
      this.$emit("changeSelected", this.selected);
    }
  },
  computed: {
    selectedAll: function selectedAll() {
      return this.selected.length === this.items.length;
    },
    selectedSome: function selectedSome() {
      return this.selected.length > 0 && !this.selectedAll;
    },
    icon: function icon() {
      if (this.selectedAll) return "mdi-close-box";
      if (this.selectedSome) return "mdi-minus-box";
      return "mdi-checkbox-blank-outline";
    }
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/roles/Create.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/roles/Create.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_select_MultiSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/select/MultiSelect */ "./resources/js/components/select/MultiSelect.vue");
var _methods;

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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    MultiSelect: _components_select_MultiSelect__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      valid: false,
      name: "",
      headers: [{
        text: "Name",
        value: "name"
      }, {
        text: "Name",
        value: "name"
      }, {
        text: "Name",
        value: "name"
      }, {
        text: "Name",
        value: "name"
      }, {
        text: "Name",
        value: "name"
      }],
      items: [],
      rules: {},
      errors: {},
      permissions_employees: ["view all employees", "view employee", "add employee", "edit employee", "delete employee"],
      permissions_expenses: ["view all expenses", "view expenses", "add expenses", "edit expenses", "delete expenses"],
      permissions_expense_reports: ["view all expense reports", "view expense report", "add expense report", "edit expense report", "approve expense report", "delete expense report"],
      permissions_payments: ["view all payments", "view payment", "add payment", "edit payment", "delete payment"],
      permissions_vendors: ["view all vendors", "view vendor", "add vendor", "edit vendor", "delete vendor"],
      permissions_departments: ["view all departments", "view department", "add department", "edit department", "delete department"],
      permissions_jobs: ["view all jobs", "view job", "add job", "edit job", "delete job"],
      permissions_expense_types: ["view all expense types", "view expense type", "add expense type", "edit expense type", "delete expense type"],
      permissions_users: ["view all users", "view user", "add user", "edit user", "delete user"],
      permissions_adjustments: ["view all adjustments", "view adjustment", "add adjustment", "edit adjustment", "delete adjustment"],
      selected_employees: [],
      selected_expenses: [],
      selected_expense_reports: [],
      selected_payments: [],
      selected_vendors: [],
      selected_departments: [],
      selected_jobs: [],
      selected_expense_types: [],
      selected_users: [],
      selected_adjustments: []
    };
  },
  methods: (_methods = {
    onSave: function onSave() {},
    selectedEmployees: function selectedEmployees(e) {
      this.selected_employees = e;
      console.log(this.selected_employees);
    },
    selectedExpenses: function selectedExpenses(e) {
      this.selected_expenses = e;
      console.log(this.selected_expenses);
    },
    selectedExpenseReports: function selectedExpenseReports(e) {
      this.selected_expense_reports = e;
      console.log(this.selected_expense_reports);
    },
    selectedPayments: function selectedPayments(e) {
      this.selected_payments = e;
      console.log(this.selected_payments);
    }
  }, _defineProperty(_methods, "selectedEmployees", function selectedEmployees(e) {
    this.selected_employees = e;
    console.log(this.selected_employees);
  }), _defineProperty(_methods, "selectedVendors", function selectedVendors(e) {
    this.selected_vendors = e;
    console.log(this.selected_vendors);
  }), _defineProperty(_methods, "selectedDepartments", function selectedDepartments(e) {
    this.selected_departments = e;
    console.log(this.selected_departments);
  }), _defineProperty(_methods, "selectedJobs", function selectedJobs(e) {
    this.selected_jobs = e;
    console.log(this.selected_jobs);
  }), _defineProperty(_methods, "selectedExpenseTypes", function selectedExpenseTypes(e) {
    this.selected_expense_types = e;
    console.log(this.selected_expense_types);
  }), _defineProperty(_methods, "selectedUsers", function selectedUsers(e) {
    this.selected_users = e;
    console.log(this.selected_users);
  }), _defineProperty(_methods, "selectedAdjustments", function selectedAdjustments(e) {
    this.selected_adjustments = e;
    console.log(this.selected_adjustments);
  }), _methods),
  created: function created() {
    axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("access_token");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/select/MultiSelect.vue?vue&type=template&id=20f6036d&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/select/MultiSelect.vue?vue&type=template&id=20f6036d& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c("v-select", {
    attrs: {
      items: _vm.items,
      label: _vm.label,
      multiple: "",
      chips: "",
      "small-chips": ""
    },
    scopedSlots: _vm._u([
      {
        key: "prepend-item",
        fn: function() {
          return [
            _c(
              "v-list-item",
              { attrs: { ripple: "" }, on: { click: _vm.toggle } },
              [
                _c(
                  "v-list-item-action",
                  [
                    _c(
                      "v-icon",
                      {
                        attrs: {
                          color: _vm.selected.length > 0 ? "green darken-4" : ""
                        }
                      },
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.icon) +
                            "\n                "
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-list-item-content",
                  [
                    _c("v-list-item-title", [
                      _vm._v(
                        "\n                    Select All\n                "
                      )
                    ])
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("v-divider", { staticClass: "mt-2" })
          ]
        },
        proxy: true
      },
      {
        key: "selection",
        fn: function(ref) {
          var item = ref.item
          var index = ref.index
          return [
            index === 0
              ? _c("v-chip", [_c("span", [_vm._v(_vm._s(item))])])
              : _vm._e(),
            _vm._v(" "),
            index === 1
              ? _c("span", { staticClass: "grey--text caption" }, [
                  _vm._v(
                    "\n            (+" +
                      _vm._s(_vm.selected.length - 1) +
                      " others)\n        "
                  )
                ])
              : _vm._e()
          ]
        }
      }
    ]),
    model: {
      value: _vm.selected,
      callback: function($$v) {
        _vm.selected = $$v
      },
      expression: "selected"
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/roles/Create.vue?vue&type=template&id=64455835&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/roles/Create.vue?vue&type=template&id=64455835& ***!
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
          _c("h4", { staticClass: "title green--text" }, [_vm._v("New Role")])
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
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "6" } },
                    [
                      _c("v-text-field", {
                        attrs: { label: "Role *", required: "" }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("div", [
                _vm._v("\n                Permissions\n            ")
              ]),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "4" } },
                    [
                      _c("MultiSelect", {
                        attrs: {
                          label: "Employees",
                          items: _vm.permissions_employees,
                          defaultSelected: _vm.selected_employees
                        },
                        on: { changeSelected: _vm.selectedEmployees }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "4" } },
                    [
                      _c("MultiSelect", {
                        attrs: {
                          label: "Expenses",
                          items: _vm.permissions_expenses,
                          defaultSelected: _vm.selected_expenses
                        },
                        on: { changeSelected: _vm.selectedExpenses }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "4" } },
                    [
                      _c("MultiSelect", {
                        attrs: {
                          label: "Expense Reports",
                          items: _vm.permissions_expense_reports,
                          defaultSelected: _vm.selected_expense_reports
                        },
                        on: { changeSelected: _vm.selectedExpenseReports }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "4" } },
                    [
                      _c("MultiSelect", {
                        attrs: {
                          label: "Payments",
                          items: _vm.permissions_payments,
                          defaultSelected: _vm.selected_payments
                        },
                        on: { changeSelected: _vm.selectedPayments }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "4" } },
                    [
                      _c("MultiSelect", {
                        attrs: {
                          label: "Vendors",
                          items: _vm.permissions_vendors,
                          defaultSelected: _vm.selected_vendors
                        },
                        on: { changeSelected: _vm.selectedVendors }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "4" } },
                    [
                      _c("MultiSelect", {
                        attrs: {
                          label: "Departments",
                          items: _vm.permissions_departments,
                          defaultSelected: _vm.selected_departments
                        },
                        on: { changeSelected: _vm.selectedDepartments }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "4" } },
                    [
                      _c("MultiSelect", {
                        attrs: {
                          label: "Job Designations",
                          items: _vm.permissions_jobs,
                          defaultSelected: _vm.selected_jobs
                        },
                        on: { changeSelected: _vm.selectedJobs }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "4" } },
                    [
                      _c("MultiSelect", {
                        attrs: {
                          label: "Expense Types",
                          items: _vm.permissions_expense_types,
                          defaultSelected: _vm.selected_expense_types
                        },
                        on: { changeSelected: _vm.selectedExpenseTypes }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "4" } },
                    [
                      _c("MultiSelect", {
                        attrs: {
                          label: "Users",
                          items: _vm.permissions_users,
                          defaultSelected: _vm.selected_users
                        },
                        on: { changeSelected: _vm.selectedUsers }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "4" } },
                    [
                      _c("MultiSelect", {
                        attrs: {
                          label: "Adjustments",
                          items: _vm.permissions_adjustments,
                          defaultSelected: _vm.selected_adjustments
                        },
                        on: { changeSelected: _vm.selectedAdjustments }
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
                  "\n                * indicates required field\n            "
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/select/MultiSelect.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/select/MultiSelect.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MultiSelect_vue_vue_type_template_id_20f6036d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultiSelect.vue?vue&type=template&id=20f6036d& */ "./resources/js/components/select/MultiSelect.vue?vue&type=template&id=20f6036d&");
/* harmony import */ var _MultiSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultiSelect.vue?vue&type=script&lang=js& */ "./resources/js/components/select/MultiSelect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MultiSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MultiSelect_vue_vue_type_template_id_20f6036d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MultiSelect_vue_vue_type_template_id_20f6036d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/select/MultiSelect.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/select/MultiSelect.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/select/MultiSelect.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MultiSelect.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/select/MultiSelect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/select/MultiSelect.vue?vue&type=template&id=20f6036d&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/select/MultiSelect.vue?vue&type=template&id=20f6036d& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiSelect_vue_vue_type_template_id_20f6036d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MultiSelect.vue?vue&type=template&id=20f6036d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/select/MultiSelect.vue?vue&type=template&id=20f6036d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiSelect_vue_vue_type_template_id_20f6036d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiSelect_vue_vue_type_template_id_20f6036d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/modules/admin/roles/Create.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/modules/admin/roles/Create.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_64455835___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=64455835& */ "./resources/js/views/modules/admin/roles/Create.vue?vue&type=template&id=64455835&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/roles/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_64455835___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_64455835___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/roles/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/roles/Create.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/roles/Create.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/roles/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/roles/Create.vue?vue&type=template&id=64455835&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/roles/Create.vue?vue&type=template&id=64455835& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_64455835___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=64455835& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/roles/Create.vue?vue&type=template&id=64455835&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_64455835___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_64455835___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);