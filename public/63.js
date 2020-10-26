(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/settings/Employee.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/settings/Employee.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      panel: [0],
      headerExpenseTypes: [{
        text: "Name",
        value: "name"
      }, {
        text: "Limit",
        value: "limit"
      }],
      sub_types: [],
      employees: [],
      employee: {
        id: null,
        expense_types: null,
        sub_types: null
      },
      all_expense_types: [],
      allowed_expense_types: null,
      expense_types: [],
      expense_type: {
        id: null,
        sub_types: null,
        limit: null
      },
      expense_type_limit: null
    };
  },
  methods: {
    loadEmployees: function loadEmployees() {
      var _this = this;

      axios.get("/api/data/employees").then(function (response) {
        console.log(response);
        _this.employees = response.data.data;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);
      });
    },
    loadExpenseTypes: function loadExpenseTypes() {
      var _this = this;

      axios.get("/api/data/expense_types").then(function (response) {
        _this.all_expense_types = response.data.data;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

        _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
      });
    },
    save_expense_types: function save_expense_types() {
      console.log("allowed", this.allowed_expense_types);
      console.log("expense_type", this.expense_type);
      console.log("sub_types", this.sub_types);
    }
  },
  watch: {
    employee: function employee(item) {
      // this.expense_types = item.expense_types;
      this.allowed_expense_types = item.expense_types;
    },
    allowed_expense_types: function allowed_expense_types(items) {
      this.expense_types = items;
      this.sub_types = [];
      this.expense_type_limit = null;
    },
    expense_type: function expense_type(item) {
      this.sub_types = item.sub_types;
    }
  },
  created: function created() {
    this.loadExpenseTypes();
    this.loadEmployees();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/settings/Employee.vue?vue&type=template&id=07631e43&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/settings/Employee.vue?vue&type=template&id=07631e43& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "elevation-0" },
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
              _c("h4", { staticClass: "title success--text" }, [
                _vm._v("Employee Settings")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
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
                              "item-text": "fullname",
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
                        "\n                        Expense Types\n                    "
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
                                                      _vm.allowed_expense_types
                                                        .length - 1
                                                    ) +
                                                    "\n                                        others)"
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
                              _c("v-autocomplete", {
                                attrs: {
                                  items: _vm.expense_types,
                                  "item-text": "name",
                                  "item-value": "id",
                                  "return-object": "",
                                  label: "Expense Type"
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
                              _c("v-text-field", {
                                attrs: { label: "Expense Amount Limit" },
                                model: {
                                  value: _vm.expense_type.limit,
                                  callback: function($$v) {
                                    _vm.$set(_vm.expense_type, "limit", $$v)
                                  },
                                  expression: "expense_type.limit"
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
                            [
                              _vm._v(
                                "\n                            Sub Types\n                            "
                              ),
                              _c("v-data-table", {
                                attrs: {
                                  headers: _vm.headerExpenseTypes,
                                  items: _vm.sub_types
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "item.limit",
                                      fn: function(props) {
                                        return [
                                          _c(
                                            "v-edit-dialog",
                                            {
                                              attrs: {
                                                "return-value": props.item.limit
                                              },
                                              on: {
                                                "update:returnValue": function(
                                                  $event
                                                ) {
                                                  return _vm.$set(
                                                    props.item,
                                                    "limit",
                                                    $event
                                                  )
                                                },
                                                "update:return-value": function(
                                                  $event
                                                ) {
                                                  return _vm.$set(
                                                    props.item,
                                                    "limit",
                                                    $event
                                                  )
                                                }
                                              },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "input",
                                                    fn: function() {
                                                      return [
                                                        _c("v-text-field", {
                                                          attrs: {
                                                            rules: [],
                                                            label:
                                                              "Expense Amount Limit",
                                                            "single-line": "",
                                                            counter: ""
                                                          },
                                                          model: {
                                                            value:
                                                              props.item.limit,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                props.item,
                                                                "limit",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "props.item.limit"
                                                          }
                                                        })
                                                      ]
                                                    },
                                                    proxy: true
                                                  }
                                                ],
                                                null,
                                                true
                                              )
                                            },
                                            [
                                              _vm._v(
                                                "\n                                        " +
                                                  _vm._s(props.item.limit) +
                                                  "\n                                        "
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
                              _c(
                                "v-btn",
                                { on: { click: _vm.save_expense_types } },
                                [_vm._v("Save Changes")]
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

/***/ "./resources/js/views/modules/admin/settings/Employee.vue":
/*!****************************************************************!*\
  !*** ./resources/js/views/modules/admin/settings/Employee.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Employee_vue_vue_type_template_id_07631e43___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Employee.vue?vue&type=template&id=07631e43& */ "./resources/js/views/modules/admin/settings/Employee.vue?vue&type=template&id=07631e43&");
/* harmony import */ var _Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Employee.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/settings/Employee.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Employee_vue_vue_type_template_id_07631e43___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Employee_vue_vue_type_template_id_07631e43___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/settings/Employee.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/settings/Employee.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/settings/Employee.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Employee.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/settings/Employee.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/settings/Employee.vue?vue&type=template&id=07631e43&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/settings/Employee.vue?vue&type=template&id=07631e43& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_template_id_07631e43___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Employee.vue?vue&type=template&id=07631e43& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/settings/Employee.vue?vue&type=template&id=07631e43&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_template_id_07631e43___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_template_id_07631e43___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);