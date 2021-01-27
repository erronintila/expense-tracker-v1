(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/payments/CreateAdvance.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/payments/CreateAdvance.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      valid: false,
      menu: false,
      menu_payee: false,
      employees: [],
      total: 0,
      totalAmount: 0,
      form: {
        code: "",
        reference_no: "",
        voucher_no: "",
        description: "",
        date: moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD"),
        cheque_no: "",
        cheque_date: "",
        amount: 0,
        payee: "",
        payee_address: "",
        payee_phone: "",
        remarks: "",
        notes: "",
        employee: {
          id: null
        }
      },
      errors: {
        employee: [],
        code: [],
        reference_no: [],
        voucher_no: [],
        description: [],
        date: [],
        cheque_no: [],
        cheque_date: [],
        amount: [],
        payee: [],
        payee_address: [],
        payee_phone: [],
        remarks: [],
        notes: []
      }
    };
  },
  methods: {
    loadEmployees: function loadEmployees() {
      var _this = this;

      _this.loader = true;
      axios.get("/api/data/employees").then(function (response) {
        _this.employees = response.data.data;
        _this.loader = false;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

        _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);

        _this.loader = false;
      });
    },
    updateEmployee: function updateEmployee() {},
    onSave: function onSave() {
      var _this = this;

      _this.$refs.form.validate();

      if (this.selected == 0) {
        this.mixin_errorDialog("Error", "No Expense Report selected.");
        return;
      }

      if (_this.$refs.form.validate()) {
        _this.loader = true;
        axios.post("/api/payments", {
          code: _this.form.code,
          reference_no: _this.form.reference_no,
          voucher_no: _this.form.voucher_no,
          description: _this.form.description,
          date: _this.form.date,
          cheque_no: _this.form.cheque_no,
          cheque_date: _this.form.cheque_date,
          amount: _this.form.amount,
          payee: _this.form.payee,
          payee_address: _this.form.payee_address,
          payee_phone: _this.form.payee_phone,
          remarks: _this.form.remarks,
          notes: _this.form.notes,
          expense_reports: _this.selected,
          employee: _this.form.employee.id
        }).then(function (response) {
          _this.$dialog.message.success("Advance Payment created successfully.", {
            position: "top-right",
            timeout: 2000
          });

          _this.$router.push({
            name: "admin.payments.index"
          });

          _this.loader = false;
        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);

          _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);

          _this.errors = error.response.data.errors;
          _this.loader = false;
        });
        return;
      }
    }
  },
  computed: {
    maxDate: function maxDate() {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD");
    }
  },
  watch: {},
  mounted: function mounted() {},
  created: function created() {
    this.loadEmployees();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/payments/CreateAdvance.vue?vue&type=template&id=5737ea2b&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/payments/CreateAdvance.vue?vue&type=template&id=5737ea2b& ***!
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
                    _vm._v("New Advance Payment")
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
                        "v-card",
                        { staticClass: "mx-auto mb-4", attrs: { flat: "" } },
                        [
                          _c(
                            "v-container",
                            [
                              _c(
                                "div",
                                { staticClass: "overline green--text" },
                                [
                                  _vm._v(
                                    "\n                            BASIC DETAILS\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
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
                                                    rules:
                                                      _vm.mixin_validation
                                                        .required,
                                                    "error-messages":
                                                      _vm.errors.date,
                                                    label: "Date",
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
                                      color: "success",
                                      max: _vm.maxDate
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
                              ),
                              _vm._v(" "),
                              _c("v-autocomplete", {
                                attrs: {
                                  rules: _vm.mixin_validation.required,
                                  items: _vm.employees,
                                  "error-messages": _vm.errors.employee,
                                  "item-value": "id",
                                  "item-text": "full_name",
                                  label: "Employee",
                                  "return-object": "",
                                  required: ""
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.employee = []
                                  },
                                  change: _vm.updateEmployee
                                },
                                model: {
                                  value: _vm.form.employee,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "employee", $$v)
                                  },
                                  expression: "form.employee"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  rules: _vm.mixin_validation.required,
                                  "error-messages": _vm.errors.description,
                                  label: "Description",
                                  required: ""
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.description = []
                                  }
                                },
                                model: {
                                  value: _vm.form.description,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "description", $$v)
                                  },
                                  expression: "form.description"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  rules: _vm.mixin_validation.required,
                                  "error-messages": _vm.errors.amount,
                                  label: "Amount",
                                  type: "number",
                                  required: ""
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.amount = []
                                  }
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
                    [_vm._v("\n                Cancel\n            ")]
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

/***/ "./resources/js/views/modules/admin/payments/CreateAdvance.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/views/modules/admin/payments/CreateAdvance.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateAdvance_vue_vue_type_template_id_5737ea2b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateAdvance.vue?vue&type=template&id=5737ea2b& */ "./resources/js/views/modules/admin/payments/CreateAdvance.vue?vue&type=template&id=5737ea2b&");
/* harmony import */ var _CreateAdvance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateAdvance.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/payments/CreateAdvance.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateAdvance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateAdvance_vue_vue_type_template_id_5737ea2b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CreateAdvance_vue_vue_type_template_id_5737ea2b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/payments/CreateAdvance.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/payments/CreateAdvance.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/payments/CreateAdvance.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateAdvance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateAdvance.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/payments/CreateAdvance.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateAdvance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/payments/CreateAdvance.vue?vue&type=template&id=5737ea2b&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/payments/CreateAdvance.vue?vue&type=template&id=5737ea2b& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateAdvance_vue_vue_type_template_id_5737ea2b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateAdvance.vue?vue&type=template&id=5737ea2b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/payments/CreateAdvance.vue?vue&type=template&id=5737ea2b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateAdvance_vue_vue_type_template_id_5737ea2b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateAdvance_vue_vue_type_template_id_5737ea2b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);