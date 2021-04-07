(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[81],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dialogs/AddVendor.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dialogs/AddVendor.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  // props: {
  //     openDialog: {
  //         type: Boolean,
  //         default: false
  //     }
  // },
  data: function data() {
    return {
      no_tin: false,
      openDialog: false,
      valid: false,
      selected_expense_types: [],
      expense_types: [],
      form: {
        code: "",
        name: "",
        email: "",
        tin: "",
        contact_person: "",
        mobile_number: "",
        telephone_number: "",
        remarks: "",
        website: "",
        is_vat_inclusive: true,
        address: ""
      },
      errors: {
        code: [],
        name: [],
        email: [],
        tin: [],
        contact_person: [],
        mobile_number: [],
        telephone_number: [],
        remarks: [],
        website: [],
        is_vat_inclusive: [],
        address: []
      }
    };
  },
  methods: {
    closeDialog: function closeDialog() {
      this.openDialog = false;
      Object.assign(this.$data, this.$options.data.apply(this));
    },
    onCreateVendor: function onCreateVendor() {
      var _this = this;

      _this.$refs.form.validate();

      if (_this.$refs.form.validate()) {
        axios.post("/api/vendors", {
          code: _this.form.code,
          name: _this.form.name,
          email: _this.form.email,
          tin: _this.form.tin == "N/A" ? null : _this.form.tin,
          contact_person: _this.form.contact_person,
          mobile_number: _this.form.mobile_number,
          telephone_number: _this.form.telephone_number,
          remarks: _this.form.remarks,
          website: _this.form.website,
          is_vat_inclusive: _this.form.is_vat_inclusive,
          address: _this.form.address,
          expense_types: _this.selected_expense_types
        }).then(function (response) {
          _this.$dialog.message.success("Vendor created successfully.", {
            position: "top-right",
            timeout: 2000
          });

          _this.$emit("createdVendor");

          _this.openDialog = false;
        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);

          _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);

          _this.errors = error.response.data.errors;
        });
        return;
      }
    }
  },
  watch: {
    openDialog: function openDialog() {
      this.form = {
        code: "",
        name: "",
        email: "",
        tin: "",
        contact_person: "",
        mobile_number: "",
        telephone_number: "",
        remarks: "",
        website: "",
        is_vat_inclusive: true,
        address: ""
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dialogs/AddVendor.vue?vue&type=template&id=29b2b70a&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dialogs/AddVendor.vue?vue&type=template&id=29b2b70a& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    "v-dialog",
    {
      attrs: { persistent: "", "max-width": "600px" },
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
                      attrs: {
                        fab: "",
                        color: "primary",
                        text: "",
                        "x-small": ""
                      }
                    },
                    "v-btn",
                    attrs,
                    false
                  ),
                  on
                ),
                [_c("v-icon", { attrs: { dark: "" } }, [_vm._v("mdi-plus")])],
                1
              )
            ]
          }
        }
      ]),
      model: {
        value: _vm.openDialog,
        callback: function($$v) {
          _vm.openDialog = $$v
        },
        expression: "openDialog"
      }
    },
    [
      _vm._v(" "),
      _c(
        "v-card",
        [
          _c("v-card-title", [
            _c("span", { staticClass: "headline" }, [
              _vm._v("\n                New Vendor\n            ")
            ])
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
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
                                attrs: {
                                  rules: _vm.mixin_validation.required.concat(
                                    _vm.mixin_validation.minLength(150)
                                  ),
                                  counter: 150,
                                  "error-messages": _vm.errors.name,
                                  label: "Name *",
                                  required: ""
                                },
                                model: {
                                  value: _vm.form.name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "name", $$v)
                                  },
                                  expression: "form.name"
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
                              _c(
                                "v-radio-group",
                                {
                                  attrs: { row: "" },
                                  on: {
                                    change: function($event) {
                                      _vm.no_tin = false
                                      _vm.form.tin = ""
                                    }
                                  },
                                  model: {
                                    value: _vm.form.is_vat_inclusive,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.form,
                                        "is_vat_inclusive",
                                        $$v
                                      )
                                    },
                                    expression: "form.is_vat_inclusive"
                                  }
                                },
                                [
                                  _c("v-radio", {
                                    attrs: { label: "VAT", value: true }
                                  }),
                                  _vm._v(" "),
                                  _c("v-radio", {
                                    attrs: { label: "Non-VAT", value: false }
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
                            { attrs: { cols: "12", md: "9" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  rules: _vm.mixin_validation.required,
                                  "error-messages": _vm.errors.tin,
                                  counter: 100,
                                  label: "Tax Identification Number (TIN) *",
                                  required: "",
                                  readonly: _vm.no_tin
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "append",
                                    fn: function() {
                                      return undefined
                                    },
                                    proxy: true
                                  }
                                ]),
                                model: {
                                  value: _vm.form.tin,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "tin", $$v)
                                  },
                                  expression: "form.tin"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "3" } },
                            [
                              _c("v-checkbox", {
                                attrs: {
                                  label: "N/A",
                                  readonly: _vm.form.is_vat_inclusive
                                },
                                on: {
                                  click: function() {
                                    _vm.form.tin = _vm.no_tin ? "N/A" : ""
                                  }
                                },
                                model: {
                                  value: _vm.no_tin,
                                  callback: function($$v) {
                                    _vm.no_tin = $$v
                                  },
                                  expression: "no_tin"
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
                              _c("v-text-field", {
                                attrs: {
                                  rules: [],
                                  "error-messages": _vm.errors.email,
                                  label: "Email Address"
                                },
                                model: {
                                  value: _vm.form.email,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "email", $$v)
                                  },
                                  expression: "form.email"
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
                              _c("v-text-field", {
                                attrs: {
                                  rules: [],
                                  "error-messages": _vm.errors.contact_person,
                                  counter: 100,
                                  label: "Contact Person"
                                },
                                model: {
                                  value: _vm.form.contact_person,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "contact_person", $$v)
                                  },
                                  expression: "form.contact_person"
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
                              _c("v-text-field", {
                                attrs: {
                                  rules: [],
                                  counter: 30,
                                  "error-messages": _vm.errors.mobile_number,
                                  label: "Mobile Number",
                                  type: "number"
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.mobile_number = []
                                  }
                                },
                                model: {
                                  value: _vm.form.mobile_number,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "mobile_number", $$v)
                                  },
                                  expression: "form.mobile_number"
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
                              _c("v-text-field", {
                                attrs: {
                                  rules: [],
                                  counter: 30,
                                  "error-messages": _vm.errors.telephone_number,
                                  label: "Telephone Number",
                                  type: "number"
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.telephone_number = []
                                  }
                                },
                                model: {
                                  value: _vm.form.telephone_number,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "telephone_number", $$v)
                                  },
                                  expression: "form.telephone_number"
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
                              _c("v-text-field", {
                                attrs: {
                                  counter: 100,
                                  rules: [],
                                  "error-messages": _vm.errors.website,
                                  label: "Website"
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.website = []
                                  }
                                },
                                model: {
                                  value: _vm.form.website,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "website", $$v)
                                  },
                                  expression: "form.website"
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
                                  rules: _vm.mixin_validation.required,
                                  "error-messages": _vm.errors.address,
                                  label: "Address *",
                                  rows: "1"
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.address = []
                                  }
                                },
                                model: {
                                  value: _vm.form.address,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "address", $$v)
                                  },
                                  expression: "form.address"
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
                          "\n                        * indicates required field\n                    "
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
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "primary", text: "" },
                  on: { click: _vm.closeDialog }
                },
                [_vm._v("\n                Close\n            ")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "primary", text: "" },
                  on: { click: _vm.onCreateVendor }
                },
                [_vm._v("\n                Save\n            ")]
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

/***/ "./resources/js/components/dialogs/AddVendor.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/dialogs/AddVendor.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddVendor_vue_vue_type_template_id_29b2b70a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddVendor.vue?vue&type=template&id=29b2b70a& */ "./resources/js/components/dialogs/AddVendor.vue?vue&type=template&id=29b2b70a&");
/* harmony import */ var _AddVendor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddVendor.vue?vue&type=script&lang=js& */ "./resources/js/components/dialogs/AddVendor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddVendor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddVendor_vue_vue_type_template_id_29b2b70a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddVendor_vue_vue_type_template_id_29b2b70a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dialogs/AddVendor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dialogs/AddVendor.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/dialogs/AddVendor.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddVendor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddVendor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dialogs/AddVendor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddVendor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dialogs/AddVendor.vue?vue&type=template&id=29b2b70a&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/dialogs/AddVendor.vue?vue&type=template&id=29b2b70a& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddVendor_vue_vue_type_template_id_29b2b70a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddVendor.vue?vue&type=template&id=29b2b70a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dialogs/AddVendor.vue?vue&type=template&id=29b2b70a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddVendor_vue_vue_type_template_id_29b2b70a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddVendor_vue_vue_type_template_id_29b2b70a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);