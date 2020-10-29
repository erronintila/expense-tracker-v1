(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/adjustments/AdjustFund.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/adjustments/AdjustFund.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      valid: false,
      adjustment_type: "Add Amount",
      employee: {
        id: null,
        fullname: "",
        fund: 0,
        remaining_fund: 0
      },
      employees: [],
      reference: "",
      code: "",
      description: "",
      amount: 0,
      type: "Manage Revolving Fund",
      remarks: "",
      errors: {
        employee: [],
        reference: [],
        code: [],
        description: [],
        amount: [],
        remarks: []
      }
    };
  },
  methods: {
    loadEmployees: function loadEmployees() {
      var _this = this;

      axios.get("/api/data/employees").then(function (response) {
        _this.employees = response.data.data;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

        _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
      });
    },
    onSave: function onSave() {
      var _this = this;

      if (this.new_fund < 0 || this.new_remaining_fund < 0) {
        this.mixin_errorDialog("Error", "Revolving fund/Remaining fund should not be lesser than current amount");
        return;
      }

      if (_this.$refs.form.validate()) {
        var add_amount = this.adjustment_type == "Add Amount" ? this.amount : 0;
        var subtract_amount = this.adjustment_type == "Subtract Amount" ? this.amount : 0;
        axios.post("/api/adjustments", {
          employee: _this.employee.id,
          reference: _this.reference,
          code: _this.code,
          description: _this.description,
          remarks: _this.remarks,
          // amount: _this.amount,
          add_amount: add_amount,
          subtract_amount: subtract_amount,
          type: _this.type
        }).then(function (response) {
          _this.mixin_successDialog("Success", "Adjustment created successfully.");

          _this.$router.push({
            name: "admin.adjustments.index"
          });
        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);
          _this.errors = error.response.data.errors;

          _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
        });
      }
    }
  },
  computed: {
    new_fund: function new_fund() {
      if (this.adjustment_type == "Add Amount") {
        return this.mixin_convertToNumber(this.employee.fund) + this.mixin_convertToNumber(this.amount);
      }

      return this.mixin_convertToNumber(this.employee.fund) - this.mixin_convertToNumber(this.amount);
    },
    new_remaining_fund: function new_remaining_fund() {
      if (this.adjustment_type == "Add Amount") {
        return this.mixin_convertToNumber(this.employee.remaining_fund) + this.mixin_convertToNumber(this.amount);
      }

      return this.mixin_convertToNumber(this.employee.remaining_fund) - this.mixin_convertToNumber(this.amount);
    }
  },
  created: function created() {
    this.loadEmployees();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/adjustments/AdjustFund.vue?vue&type=template&id=1e688164&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/adjustments/AdjustFund.vue?vue&type=template&id=1e688164& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
                _vm._v("Fund Adjustment")
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
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "6" } },
                        [
                          _c("v-autocomplete", {
                            attrs: {
                              label: "Employee *",
                              items: _vm.employees,
                              "item-text": "fullname",
                              "item-value": "id",
                              "return-object": "",
                              rules: _vm.mixin_validation.required,
                              "error-messages": _vm.errors.employee
                            },
                            on: {
                              input: function($event) {
                                _vm.errors.employee = []
                              }
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
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "4" } },
                        [
                          _c("v-select", {
                            attrs: {
                              label: "Adjustment Type",
                              items: ["Add Amount", "Subtract Amount"]
                            },
                            model: {
                              value: _vm.adjustment_type,
                              callback: function($$v) {
                                _vm.adjustment_type = $$v
                              },
                              expression: "adjustment_type"
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
                              rules: _vm.mixin_validation.minNumberValue(1),
                              label: "Amount",
                              type: "number"
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
                      _c("v-col", { attrs: { cols: "12", md: "6" } }, [
                        _vm._v(
                          "\n                        Current Balance\n                        "
                        ),
                        _c("table", { staticClass: "ml-4" }, [
                          _c("tbody", [
                            _c("tr", [
                              _c("td", { staticClass: "headline" }, [
                                _vm._v(
                                  "\n                                        Revolving Fund\n                                    "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(":")]),
                              _vm._v(" "),
                              _c(
                                "td",
                                {
                                  staticClass:
                                    "headline green--text text--darken-4 text-right"
                                },
                                [
                                  _vm._v(
                                    "\n                                        " +
                                      _vm._s(
                                        _vm.mixin_formatNumber(
                                          _vm.employee.fund
                                        )
                                      ) +
                                      "\n                                    "
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", { staticClass: "headline" }, [
                                _vm._v(
                                  "\n                                        Remaining Fund\n                                    "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(":")]),
                              _vm._v(" "),
                              _c(
                                "td",
                                {
                                  staticClass:
                                    "headline green--text text--darken-4 text-right"
                                },
                                [
                                  _vm._v(
                                    "\n                                        " +
                                      _vm._s(
                                        _vm.mixin_formatNumber(
                                          _vm.employee.remaining_fund
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
                      _c("v-col", { attrs: { cols: "12", md: "6" } }, [
                        _vm._v(
                          "\n                        New Balance\n                        "
                        ),
                        _c("table", { staticClass: "ml-4" }, [
                          _c("tbody", [
                            _c("tr", [
                              _c("td", { staticClass: "headline" }, [
                                _vm._v(
                                  "\n                                        Revolving Fund\n                                    "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(":")]),
                              _vm._v(" "),
                              _c(
                                "td",
                                {
                                  class:
                                    "headline " +
                                    (_vm.new_fund < 0
                                      ? "red--text"
                                      : "green--text") +
                                    " text--darken-4 text-right"
                                },
                                [
                                  _vm._v(
                                    "\n                                        " +
                                      _vm._s(
                                        _vm.mixin_formatNumber(_vm.new_fund)
                                      ) +
                                      "\n                                    "
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", { staticClass: "headline" }, [
                                _vm._v(
                                  "\n                                        Remaining Fund\n                                    "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(":")]),
                              _vm._v(" "),
                              _c(
                                "td",
                                {
                                  class:
                                    "headline " +
                                    (_vm.new_remaining_fund < 0
                                      ? "red--text"
                                      : "green--text") +
                                    " text--darken-4 text-right"
                                },
                                [
                                  _vm._v(
                                    "\n                                        " +
                                      _vm._s(
                                        _vm.mixin_formatNumber(
                                          _vm.new_remaining_fund
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
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "4" } },
                        [
                          _c("v-textarea", {
                            attrs: { label: "Remarks", rows: "2" },
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
                        { attrs: { to: { name: "admin.adjustments.index" } } },
                        [
                          _vm._v(
                            "\n                        Cancel\n                    "
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

/***/ "./resources/js/views/modules/admin/adjustments/AdjustFund.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/views/modules/admin/adjustments/AdjustFund.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdjustFund_vue_vue_type_template_id_1e688164___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdjustFund.vue?vue&type=template&id=1e688164& */ "./resources/js/views/modules/admin/adjustments/AdjustFund.vue?vue&type=template&id=1e688164&");
/* harmony import */ var _AdjustFund_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdjustFund.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/adjustments/AdjustFund.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdjustFund_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdjustFund_vue_vue_type_template_id_1e688164___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdjustFund_vue_vue_type_template_id_1e688164___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/adjustments/AdjustFund.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/adjustments/AdjustFund.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/adjustments/AdjustFund.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdjustFund_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdjustFund.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/adjustments/AdjustFund.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdjustFund_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/adjustments/AdjustFund.vue?vue&type=template&id=1e688164&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/adjustments/AdjustFund.vue?vue&type=template&id=1e688164& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdjustFund_vue_vue_type_template_id_1e688164___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdjustFund.vue?vue&type=template&id=1e688164& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/adjustments/AdjustFund.vue?vue&type=template&id=1e688164&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdjustFund_vue_vue_type_template_id_1e688164___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdjustFund_vue_vue_type_template_id_1e688164___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);