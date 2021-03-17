(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/users/EditPermission.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/users/EditPermission.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loader: true,
      panel: [0, 1],
      valid: false,
      menu: false,
      permissions: [],
      headers: [{
        text: "Permission",
        value: "name",
        sortable: false
      }],
      form: {
        can_login: true,
        is_admin: false,
        old_permissions: [],
        permissions: [],
        old_role: "",
        role: "Standard User"
      },
      errors: {
        role: [],
        can_login: []
      }
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      this.loadPermissions().then(axios.get("/api/users/" + _this.$route.params.id).then(function (response) {
        var data = response.data.data;
        console.log(data);
        _this.form.is_admin = data.is_admin;
        _this.form.can_login = data.can_login;
        _this.form.permissions = data.permissions;
        _this.form.old_permissions = data.permissions;
        _this.form.role = data.role[0];
        _this.form.old_role = data.role[0];
        _this.loader = false;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

        _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);

        _this.loader = false;
      }));
    },
    loadPermissions: function loadPermissions() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        axios.get("/api/data/permissions?role=".concat(_this.form.role)).then(function (response) {
          console.log(response);
          _this.permissions = response.data;
          _this.form.permissions = [];
          resolve();
        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);

          _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);

          reject();
        });
      });
    },
    onSave: function onSave() {
      var _this = this;

      var is_administrator = this.form.role == "Administrator" ? true : false;

      _this.$refs.form.validate();

      if (_this.$refs.form.validate()) {
        _this.loader = true;
        axios.put("/api/users/update_permissions/" + _this.$route.params.id, {
          is_admin: is_administrator,
          can_login: _this.form.can_login,
          permissions: _this.form.permissions
        }).then(function (response) {
          _this.mixin_successDialog(response.data.status, response.data.message);

          window.location.replace("/admin/users");
        })["catch"](function (error) {
          _this.loader = false;
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
    "form.role": function formRole() {
      var _this2 = this;

      this.loadPermissions().then(function () {
        if (_this2.form.old_role == _this2.form.role) {
          _this2.form.permissions = _this2.form.old_permissions;
        }
      });
    }
  },
  created: function created() {
    this.getData();
  },
  activated: function activated() {
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/users/EditPermission.vue?vue&type=template&id=7f600bf2&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/users/EditPermission.vue?vue&type=template&id=7f600bf2& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
                  _c("h4", { staticClass: "title success--text" }, [
                    _vm._v("Edit Permissions")
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
                    "v-expansion-panels",
                    {
                      attrs: { flat: "", multiple: "" },
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
                            _c("div", { staticClass: "overline green--text" }, [
                              _vm._v(
                                "\n                            Account Details\n                        "
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
                                      _c("v-checkbox", {
                                        attrs: {
                                          label: "Allow Login",
                                          "error-messages": _vm.errors.can_login
                                        },
                                        model: {
                                          value: _vm.form.can_login,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "can_login", $$v)
                                          },
                                          expression: "form.can_login"
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
                                      _c(
                                        "v-radio-group",
                                        {
                                          attrs: { row: "", label: "Role" },
                                          model: {
                                            value: _vm.form.role,
                                            callback: function($$v) {
                                              _vm.$set(_vm.form, "role", $$v)
                                            },
                                            expression: "form.role"
                                          }
                                        },
                                        [
                                          _c("v-radio", {
                                            attrs: {
                                              label: "Standard User",
                                              value: "Standard User"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-radio", {
                                            attrs: {
                                              label: "Administrator",
                                              value: "Administrator"
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
                                    [
                                      _c("v-data-table", {
                                        attrs: {
                                          "show-select": "",
                                          "items-per-page": -1,
                                          headers: _vm.headers,
                                          items: _vm.permissions,
                                          "group-by": "category"
                                        },
                                        model: {
                                          value: _vm.form.permissions,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "permissions",
                                              $$v
                                            )
                                          },
                                          expression: "form.permissions"
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
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("small", { staticClass: "ml-4 text--secondary" }, [
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/modules/admin/users/EditPermission.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/views/modules/admin/users/EditPermission.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditPermission_vue_vue_type_template_id_7f600bf2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditPermission.vue?vue&type=template&id=7f600bf2& */ "./resources/js/views/modules/admin/users/EditPermission.vue?vue&type=template&id=7f600bf2&");
/* harmony import */ var _EditPermission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditPermission.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/users/EditPermission.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditPermission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditPermission_vue_vue_type_template_id_7f600bf2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditPermission_vue_vue_type_template_id_7f600bf2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/users/EditPermission.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/users/EditPermission.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/users/EditPermission.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPermission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditPermission.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/users/EditPermission.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPermission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/users/EditPermission.vue?vue&type=template&id=7f600bf2&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/users/EditPermission.vue?vue&type=template&id=7f600bf2& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPermission_vue_vue_type_template_id_7f600bf2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditPermission.vue?vue&type=template&id=7f600bf2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/users/EditPermission.vue?vue&type=template&id=7f600bf2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPermission_vue_vue_type_template_id_7f600bf2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPermission_vue_vue_type_template_id_7f600bf2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);