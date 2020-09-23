(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/Register.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/Register.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "register",
  data: function data() {
    var _this2 = this;

    return {
      name: "",
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
      rules: {
        name: [function (v) {
          return !!v || "Name is required";
        }, function (v) {
          return v.length <= 150 || "Name must be less than 150 characters";
        }],
        username: [function (v) {
          return !!v || "Username is required";
        }, function (v) {
          return v.length <= 50 || "Username must be less than 100 characters";
        }],
        email: [function (v) {
          return !!v || "E-mail is required";
        }, function (v) {
          return /.+@.+/.test(v) || "E-mail must be valid";
        }],
        password: [function (v) {
          return !!v || "Password is required";
        }, function (v) {
          return v.length >= 8 || "Password must be at least 8 characters";
        }],
        password_confirmation: [function (v) {
          return !!v || "Retype password is required";
        }, function (v) {
          return _this2.password === _this2.password_confirmation || "Passwords do not match";
        }]
      },
      errors: {
        name: [],
        username: [],
        email: [],
        password: [],
        password_confirmation: []
      },
      valid: false
    };
  },
  methods: {
    onRegister: function onRegister() {
      var _this = this;

      _this.$refs.form.validate();

      if (_this.$refs.form.validate()) {
        axios.post("/api/register", {
          name: _this.name,
          username: _this.username,
          email: _this.email,
          password: _this.password,
          password_confirmation: _this.password_confirmation
        }).then(function (response) {
          _this.$dialog.message.success("Registered successfully.", {
            position: "top-right",
            timeout: 2000
          });

          _this.$router.push({
            name: "login"
          });
        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);
          _this.errors = error.response.data.errors;
        });
        return;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/Register.vue?vue&type=template&id=0a273bdb&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/Register.vue?vue&type=template&id=0a273bdb& ***!
  \***********************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "inspire" } },
    [
      _c(
        "v-main",
        [
          _c(
            "v-container",
            { staticClass: "fill-height", attrs: { fluid: "" } },
            [
              _c(
                "v-row",
                { attrs: { align: "center", justify: "center" } },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "8", md: "4" } },
                    [
                      _c(
                        "v-card",
                        { staticClass: "elevation-12" },
                        [
                          _c(
                            "v-toolbar",
                            { attrs: { color: "green", dark: "", flat: "" } },
                            [
                              _c("v-toolbar-title", [_vm._v("Registration")]),
                              _vm._v(" "),
                              _c("v-spacer")
                            ],
                            1
                          ),
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
                                  _c("v-text-field", {
                                    attrs: {
                                      rules: _vm.rules.name,
                                      "error-messages": _vm.errors.name,
                                      counter: 150,
                                      color: "success",
                                      label: "Name",
                                      name: "name",
                                      "prepend-icon": "mdi-account",
                                      type: "text"
                                    },
                                    on: {
                                      input: function() {
                                        _vm.errors.name = []
                                      }
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      rules: _vm.rules.username,
                                      "error-messages": _vm.errors.username,
                                      counter: 50,
                                      color: "success",
                                      label: "Username",
                                      name: "username",
                                      "prepend-icon": "mdi-account",
                                      type: "text"
                                    },
                                    on: {
                                      input: function() {
                                        _vm.errors.username = []
                                      }
                                    },
                                    model: {
                                      value: _vm.username,
                                      callback: function($$v) {
                                        _vm.username = $$v
                                      },
                                      expression: "username"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      rules: _vm.rules.email,
                                      "error-messages": _vm.errors.email,
                                      color: "success",
                                      label: "Email Address",
                                      name: "email",
                                      "prepend-icon": "mdi-account",
                                      type: "text"
                                    },
                                    on: {
                                      input: function() {
                                        _vm.errors.email = []
                                      }
                                    },
                                    model: {
                                      value: _vm.email,
                                      callback: function($$v) {
                                        _vm.email = $$v
                                      },
                                      expression: "email"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      rules: _vm.rules.password,
                                      "error-messages": _vm.errors.password,
                                      color: "success",
                                      label: "Password",
                                      name: "password",
                                      "prepend-icon": "mdi-lock",
                                      type: "password"
                                    },
                                    on: {
                                      input: function() {
                                        _vm.errors.password = []
                                      }
                                    },
                                    model: {
                                      value: _vm.password,
                                      callback: function($$v) {
                                        _vm.password = $$v
                                      },
                                      expression: "password"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      rules: _vm.rules.password_confirmation,
                                      "error-messages":
                                        _vm.errors.password_confirmation,
                                      color: "success",
                                      label: "Re-type Password",
                                      name: "confirm_password",
                                      "prepend-icon": "mdi-lock",
                                      type: "password"
                                    },
                                    on: {
                                      input: function() {
                                        _vm.errors.password_confirmation = []
                                      }
                                    },
                                    model: {
                                      value: _vm.password_confirmation,
                                      callback: function($$v) {
                                        _vm.password_confirmation = $$v
                                      },
                                      expression: "password_confirmation"
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
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "green",
                                    text: "",
                                    to: "/login"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                Login\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "green" },
                                  on: { click: _vm.onRegister }
                                },
                                [
                                  _vm._v(
                                    "\n                                Register\n                            "
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

/***/ "./resources/js/views/auth/Register.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/auth/Register.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_0a273bdb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=0a273bdb& */ "./resources/js/views/auth/Register.vue?vue&type=template&id=0a273bdb&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/views/auth/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_0a273bdb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_0a273bdb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/auth/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/auth/Register.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/auth/Register.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/auth/Register.vue?vue&type=template&id=0a273bdb&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/auth/Register.vue?vue&type=template&id=0a273bdb& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_0a273bdb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=0a273bdb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/Register.vue?vue&type=template&id=0a273bdb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_0a273bdb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_0a273bdb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);