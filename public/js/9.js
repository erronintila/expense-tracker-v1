(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/admin/vendors/Form.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/admin/vendors/Form.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _this = undefined;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    vendorForm: {
      type: Object,
      "default": function _default() {
        return {
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
          address: "",
          is_active: true
        };
      }
    },
    errors: {
      type: Object,
      "default": function _default() {
        return {
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
          address: [],
          is_active: []
        };
      }
    },
    rules: {
      type: Object,
      "default": function _default() {
        return {
          tin: [function (v) {
            return _this.is_vat_inclusive == true || "This field is required.";
          }]
        };
      }
    }
  },
  data: function data() {
    return {
      no_tin: false,
      valid: false,
      row: null,
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
      }
    };
  },
  methods: {
    onSave: function onSave() {
      if (!this.$refs.form.validate()) {
        return;
      }

      this.$emit("on-save", this.form);
    }
  },
  watch: {
    vendorForm: {
      immediate: true,
      deep: true,
      handler: function handler(newValue, oldValue) {
        this.form = newValue;
      }
    },
    "form.is_vat_inclusive": function formIs_vat_inclusive() {
      if (this.form.is_vat_inclusive) {
        this.no_tin = false;
        return;
      }
    },
    no_tin: function no_tin() {
      this.form.tin = this.no_tin ? "N/A" : "";
    },
    "form.tin": function formTin() {
      if (this.form.tin == "N/A" || this.form.tin == null) {
        this.no_tin = true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/admin/vendors/Form.vue?vue&type=template&id=e73a289c&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/admin/vendors/Form.vue?vue&type=template&id=e73a289c& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "overline green--text" }, [
        _vm._v("\n        BASIC DETAILS\n    ")
      ]),
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
                  counter: 150,
                  "error-messages": _vm.errors.name,
                  rules: _vm.mixin_validation.required.concat(
                    _vm.mixin_validation.minLength(150)
                  ),
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
                      _vm.$set(_vm.form, "is_vat_inclusive", $$v)
                    },
                    expression: "form.is_vat_inclusive"
                  }
                },
                [
                  _c("v-radio", { attrs: { label: "VAT", value: true } }),
                  _vm._v(" "),
                  _c("v-radio", { attrs: { label: "Non-VAT", value: false } })
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
                attrs: { label: "N/A", readonly: _vm.form.is_vat_inclusive },
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
          "error-messages": _vm.errors.address,
          rules: _vm.mixin_validation.required,
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
      }),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { staticClass: "text-right" },
            [
              _c(
                "v-btn",
                {
                  attrs: { color: "success", dark: "" },
                  on: { click: _vm.onSave }
                },
                [_vm._v("\n                Save\n            ")]
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/VendorDataService.js":
/*!****************************************************!*\
  !*** ./resources/js/services/VendorDataService.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import http from "../http-common";


var VendorDataService = /*#__PURE__*/function () {
  function VendorDataService() {
    _classCallCheck(this, VendorDataService);
  }

  _createClass(VendorDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/vendors", data);
    }
  }, {
    key: "get",
    value: function get(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/data/vendors", data);
    }
  }, {
    key: "show",
    value: function show(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/vendors/".concat(id), data);
    }
  }, {
    key: "store",
    value: function store(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/vendors", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/vendors/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/vendors/".concat(id), data);
    }
  }, {
    key: "restore",
    value: function restore(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/vendors/restore/".concat(id), data);
    }
  }, {
    key: "updateActivation",
    value: function updateActivation(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/vendors/update_activation/".concat(id), data);
    }
  }]);

  return VendorDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new VendorDataService());

/***/ }),

/***/ "./resources/js/views/pages/admin/vendors/Form.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/pages/admin/vendors/Form.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_e73a289c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=e73a289c& */ "./resources/js/views/pages/admin/vendors/Form.vue?vue&type=template&id=e73a289c&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/admin/vendors/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_e73a289c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_e73a289c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/admin/vendors/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/admin/vendors/Form.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/pages/admin/vendors/Form.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/admin/vendors/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/admin/vendors/Form.vue?vue&type=template&id=e73a289c&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/pages/admin/vendors/Form.vue?vue&type=template&id=e73a289c& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_e73a289c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=e73a289c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/admin/vendors/Form.vue?vue&type=template&id=e73a289c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_e73a289c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_e73a289c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);