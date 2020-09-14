(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      valid: false,
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
      address: "",
      rules: {
        code: [],
        name: [function (v) {
          return !!v || "Name is required";
        }, function (v) {
          return v.length <= 150 || "Name must be less than 100 characters";
        }],
        email: [],
        tin: [function (v) {
          return !!v || "TIN is required";
        }, function (v) {
          return v.length <= 150 || "Name must be less than 100 characters";
        }],
        contact_person: [],
        mobile_number: [],
        telephone_number: [],
        remarks: [],
        website: [],
        is_vat_inclusive: [],
        address: []
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
        console.log(data);
        _this.code = data.code;
        _this.name = data.name;
        _this.email = data.email;
        _this.tin = data.tin;
        _this.contact_person = data.contact_person;
        _this.mobile_number = data.mobile_number;
        _this.telephone_number = data.telephone_number;
        _this.remarks = data.remarks;
        _this.website = data.website;
        _this.is_vat_inclusive = data.is_vat_inclusive;
        _this.address = data.address;
      })["catch"](function (error) {});
    },
    onRefresh: function onRefresh() {
      Object.assign(this.$data, this.$options.data.apply(this));
    },
    onSave: function onSave() {
      var _this = this;

      _this.$refs.form.validate();

      if (_this.$refs.form.validate()) {
        axios.put("/api/vendors/" + _this.$route.params.id, {
          code: _this.code,
          name: _this.name,
          email: _this.email,
          tin: _this.tin,
          contact_person: _this.contact_person,
          mobile_number: _this.mobile_number,
          telephone_number: _this.telephone_number,
          remarks: _this.remarks,
          website: _this.website,
          is_vat_inclusive: _this.is_vat_inclusive,
          address: _this.address
        }).then(function (response) {
          // _this.onRefresh();
          _this.$dialog.message.success("Vendor updated successfully.", {
            position: "top-right",
            timeout: 2000
          });

          _this.$router.push({
            name: "admin.vendors.index"
          });
        })["catch"](function (error) {
          console.log(error.response);
          _this.errors = error.response.data.errors;
        });
        return;
      }
    }
  },
  created: function created() {
    axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("access_token");
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
    "v-app",
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
                  attrs: { to: "/admin/vendors", icon: "" }
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
                        { attrs: { cols: "12", md: "4" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              rules: _vm.rules.name,
                              counter: 150,
                              "error-messages": _vm.errors.name,
                              color: "success",
                              label: "Name",
                              required: ""
                            },
                            model: {
                              value: _vm.name,
                              callback: function($$v) {
                                _vm.name = $$v
                              },
                              expression: "name"
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
                              rules: _vm.rules.email,
                              "error-messages": _vm.errors.email,
                              color: "success",
                              label: "Email Address"
                            },
                            model: {
                              value: _vm.email,
                              callback: function($$v) {
                                _vm.email = $$v
                              },
                              expression: "email"
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
                              rules: _vm.rules.tin,
                              "error-messages": _vm.errors.tin,
                              counter: 100,
                              color: "success",
                              label: "Tax Identification Number (TIN)",
                              required: ""
                            },
                            model: {
                              value: _vm.tin,
                              callback: function($$v) {
                                _vm.tin = $$v
                              },
                              expression: "tin"
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
                              rules: _vm.rules.contact_person,
                              "error-messages": _vm.errors.contact_person,
                              counter: 100,
                              color: "success",
                              label: "Contact Person"
                            },
                            model: {
                              value: _vm.contact_person,
                              callback: function($$v) {
                                _vm.contact_person = $$v
                              },
                              expression: "contact_person"
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
                              rules: _vm.rules.mobile_number,
                              counter: 30,
                              "error-messages": _vm.errors.mobile_number,
                              color: "success",
                              label: "Mobile Number"
                            },
                            on: {
                              input: function($event) {
                                _vm.errors.mobile_number = []
                              }
                            },
                            model: {
                              value: _vm.mobile_number,
                              callback: function($$v) {
                                _vm.mobile_number = $$v
                              },
                              expression: "mobile_number"
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
                              rules: _vm.rules.telephone_number,
                              counter: 30,
                              "error-messages": _vm.errors.telephone_number,
                              label: "Telephone Number",
                              color: "success"
                            },
                            on: {
                              input: function($event) {
                                _vm.errors.telephone_number = []
                              }
                            },
                            model: {
                              value: _vm.telephone_number,
                              callback: function($$v) {
                                _vm.telephone_number = $$v
                              },
                              expression: "telephone_number"
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
                              counter: 100,
                              rules: _vm.rules.website,
                              "error-messages": _vm.errors.website,
                              label: "Website",
                              color: "success"
                            },
                            on: {
                              input: function($event) {
                                _vm.errors.website = []
                              }
                            },
                            model: {
                              value: _vm.website,
                              callback: function($$v) {
                                _vm.website = $$v
                              },
                              expression: "website"
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
                              rules: _vm.rules.address,
                              "error-messages": _vm.errors.address,
                              color: "success",
                              label: "Address",
                              rows: "1"
                            },
                            on: {
                              input: function($event) {
                                _vm.errors.address = []
                              }
                            },
                            model: {
                              value: _vm.address,
                              callback: function($$v) {
                                _vm.address = $$v
                              },
                              expression: "address"
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
                          _c("v-checkbox", {
                            attrs: {
                              color: "green",
                              label: "Vat Inclusive",
                              "error-messages": _vm.errors.is_vat_inclusive
                            },
                            model: {
                              value: _vm.is_vat_inclusive,
                              callback: function($$v) {
                                _vm.is_vat_inclusive = $$v
                              },
                              expression: "is_vat_inclusive"
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
                      _c("v-btn", { attrs: { to: "/admin/vendors" } }, [
                        _vm._v("Cancel")
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