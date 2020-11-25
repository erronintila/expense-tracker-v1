(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/vendors/Edit.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/vendors/Edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      no_tin: false,
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
        is_vat_inclusive: false,
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
    getData: function getData() {
      var _this = this;

      axios.get("/api/vendors/" + _this.$route.params.id).then(function (response) {
        var data = response.data.data;
        _this.form.code = data.code;
        _this.form.name = data.name;
        _this.form.email = data.email;
        _this.no_tin = data.tin == null ? true : false;
        _this.form.tin = data.tin == null ? "N/A" : data.tin;
        _this.form.contact_person = data.contact_person;
        _this.form.mobile_number = data.mobile_number;
        _this.form.telephone_number = data.telephone_number;
        _this.form.remarks = data.remarks;
        _this.form.website = data.website;
        _this.form.is_vat_inclusive = data.is_vat_inclusive == 1;
        _this.form.address = data.address;
        _this.selected_expense_types = data.expense_types.map(function (item) {
          return item.id;
        });
      })["catch"](function (error) {});
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
    onSave: function onSave() {
      var _this = this;

      _this.$refs.form.validate();

      if (_this.$refs.form.validate()) {
        axios.put("/api/vendors/" + _this.$route.params.id, {
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
          _this.mixin_successDialog("Success", "Vendor created successfully.");

          _this.$router.push({
            name: "admin.vendors.index"
          });
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
  created: function created() {
    this.loadExpenseTypes();
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/vendors/Edit.vue?vue&type=template&id=b2828dd6&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/vendors/Edit.vue?vue&type=template&id=b2828dd6& ***!
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
                _vm._v("Edit Vendor")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-form",
            { ref: "form" },
            [
              _c(
                "v-container",
                [
                  _c(
                    "v-card",
                    { staticClass: "mx-auto mb-4", attrs: { flat: "" } },
                    [
                      _c(
                        "v-list-item",
                        { attrs: { "three-line": "" } },
                        [
                          _c(
                            "v-list-item-content",
                            [
                              _c(
                                "div",
                                { staticClass: "overline green--text mb-4" },
                                [
                                  _vm._v(
                                    "\n                                BASIC DETAILS\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("v-list-item-subtitle", [
                                _vm._v(
                                  "\n                                Note: Lorem ipsum dolor sit, amet\n                                consectetur adipisicing elit. Explicabo enim\n                                eum similique nihil a, repellat, fugiat\n                                debitis placeat, illo ipsa molestias quaerat\n                                excepturi. Labore inventore molestiae a\n                                rerum, omnis expedita!\n                            "
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
                        "v-container",
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "9" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      rules: _vm.mixin_validation.required.concat(
                                        _vm.mixin_validation.minLength(150)
                                      ),
                                      counter: 150,
                                      "error-messages": _vm.errors.name,
                                      label: "Name",
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
                                { attrs: { cols: "12", md: "3" } },
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
                                        attrs: {
                                          label: "Non-VAT",
                                          value: false
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
                                { attrs: { cols: "9", md: "9" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      rules: _vm.mixin_validation.required,
                                      "error-messages": _vm.errors.tin,
                                      counter: 100,
                                      label: "Tax Identification Number (TIN)",
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
                                { attrs: { cols: "3", md: "3" } },
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
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
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
                          }),
                          _vm._v(" "),
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
                          }),
                          _vm._v(" "),
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
                          }),
                          _vm._v(" "),
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
                          }),
                          _vm._v(" "),
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
                          }),
                          _vm._v(" "),
                          _c("v-textarea", {
                            attrs: {
                              rules: _vm.mixin_validation.required,
                              "error-messages": _vm.errors.address,
                              label: "Address",
                              rows: "3"
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
                              attrs: { color: "success", dark: "" },
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/modules/admin/vendors/Edit.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/modules/admin/vendors/Edit.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_b2828dd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=b2828dd6& */ "./resources/js/views/modules/admin/vendors/Edit.vue?vue&type=template&id=b2828dd6&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/vendors/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_b2828dd6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_b2828dd6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/vendors/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/vendors/Edit.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/vendors/Edit.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/vendors/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/vendors/Edit.vue?vue&type=template&id=b2828dd6&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/vendors/Edit.vue?vue&type=template&id=b2828dd6& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_b2828dd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=b2828dd6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/vendors/Edit.vue?vue&type=template&id=b2828dd6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_b2828dd6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_b2828dd6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);