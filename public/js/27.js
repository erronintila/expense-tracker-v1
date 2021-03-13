(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/users/EditPermission.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/users/EditPermission.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_UserDataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/UserDataService */ "./resources/js/services/UserDataService.js");
/* harmony import */ var _services_PermissionDataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/PermissionDataService */ "./resources/js/services/PermissionDataService.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

      this.loadPermissions().then(function (data) {
        _this.permissions = data;
        _this.form.permissions = [];
        _services_UserDataService__WEBPACK_IMPORTED_MODULE_0__["default"].show(_this.$route.params.id).then(function (response) {
          var data = response.data.data;
          _this.form.is_admin = data.is_admin;
          _this.form.can_login = data.can_login;
          _this.form.permissions = data.permissions;
          _this.form.old_permissions = data.permissions;
          _this.form.role = data.role[0];
          _this.form.old_role = data.role[0];
          _this.loader = false;
        })["catch"](function (error) {
          _this.mixin_showErrors(error);

          _this.loader = false;
        });
      });
    },
    loadPermissions: function loadPermissions() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _services_PermissionDataService__WEBPACK_IMPORTED_MODULE_1__["default"].get({
          params: {
            role: _this2.form.role
          }
        }).then(function (response) {
          resolve(response.data);
        })["catch"](function (error) {
          _this2.mixin_showErrors(error);

          reject();
        });
      });
    },
    onSave: function onSave() {
      var _this3 = this;

      var is_administrator = this.form.role == "Administrator" ? true : false;
      this.$refs.form.validate();

      if (this.$refs.form.validate()) {
        this.loader = true;
        _services_UserDataService__WEBPACK_IMPORTED_MODULE_0__["default"].updatePermissions(this.$route.params.id, {
          is_admin: is_administrator,
          can_login: this.form.can_login,
          permissions: this.form.permissions
        }).then(function (response) {
          _this3.mixin_successDialog(response.data.status, response.data.message);

          _this3.loader = false;
          window.location.replace("/admin/users");
        })["catch"](function (error) {
          _this3.mixin_showErrors(error);

          if (error.response) {
            if (error.response.data) {
              _this3.errors = error.response.data.errors;
            }
          }

          _this3.loader = false;
        });
        return;
      }
    }
  },
  watch: {
    "form.role": function formRole() {
      var _this4 = this;

      this.loadPermissions().then(function (data) {
        _this4.permissions = data;
        _this4.form.permissions = [];

        if (_this4.form.old_role == _this4.form.role) {
          _this4.form.permissions = _this4.form.old_permissions;
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

/***/ "./resources/js/services/PermissionDataService.js":
/*!********************************************************!*\
  !*** ./resources/js/services/PermissionDataService.js ***!
  \********************************************************/
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


var PermissionDataService = /*#__PURE__*/function () {
  function PermissionDataService() {
    _classCallCheck(this, PermissionDataService);
  }

  _createClass(PermissionDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/permissions", data);
    }
  }, {
    key: "get",
    value: function get(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/data/permissions", data);
    }
  }]);

  return PermissionDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new PermissionDataService());

/***/ }),

/***/ "./resources/js/services/UserDataService.js":
/*!**************************************************!*\
  !*** ./resources/js/services/UserDataService.js ***!
  \**************************************************/
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


var UserDataService = /*#__PURE__*/function () {
  function UserDataService() {
    _classCallCheck(this, UserDataService);
  }

  _createClass(UserDataService, [{
    key: "get",
    value: function get(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/data/users", data);
    }
  }, {
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/users", data);
    }
  }, {
    key: "show",
    value: function show(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/users/".concat(id), data);
    }
  }, {
    key: "store",
    value: function store(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/users", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/users/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/users/".concat(id), data);
    }
  }, {
    key: "restore",
    value: function restore(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/users/restore/".concat(id), data);
    }
  }, {
    key: "updatePassword",
    value: function updatePassword(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/users/update_password/".concat(id), data);
    }
  }, {
    key: "resetPassword",
    value: function resetPassword(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/users/reset_password/".concat(id), data);
    }
  }, {
    key: "verifyEmail",
    value: function verifyEmail(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/users/verify_email/".concat(id), data);
    }
  }, {
    key: "updateFund",
    value: function updateFund(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/users/update_fund/".concat(id), data);
    }
  }, {
    key: "updateSettings",
    value: function updateSettings(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/users/update_settings/".concat(id), data);
    }
  }, {
    key: "updatePermissions",
    value: function updatePermissions(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/users/update_permissions/".concat(id), data);
    }
  }, {
    key: "updateProfile",
    value: function updateProfile(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/users/update_profile/".concat(id), data);
    }
  }, {
    key: "export",
    value: function _export() {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/users/export");
    }
  }]);

  return UserDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new UserDataService());

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