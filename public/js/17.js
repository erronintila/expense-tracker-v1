(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/PageHeader.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/PageHeader.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "page-header",
  props: {
    title: ""
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/profile/ChangePassword.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/profile/ChangePassword.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_UserDataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/UserDataService */ "./resources/js/services/UserDataService.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "change-password",
  data: function data() {
    var _this = this;

    return {
      showOldPassword: false,
      showNewPassword: false,
      showRetypePassword: false,
      dialogPassword: false,
      old_password: "",
      password: "",
      password_confirmation: "",
      rules: {
        password_confirmation: [function (v) {
          return !!v || "Retype password is required";
        }, function (v) {
          return _this.password === _this.password_confirmation || "Passwords do not match";
        }]
      },
      errors: {
        old_password: [],
        password: [],
        password_confirmation: []
      }
    };
  },
  methods: {
    onSave: function onSave() {
      var _this2 = this;

      if (this.$refs.form_password.validate()) {
        _services_UserDataService__WEBPACK_IMPORTED_MODULE_0__["default"].updatePassword(this.$store.getters.user.id, {
          old_password: this.old_password,
          password: this.password,
          password_confirmation: this.password_confirmation
        }).then(function (response) {
          _this2.mixin_successDialog(response.data.status, response.data.message);

          _this2.dialogPassword = false;
          _this2.old_password = "";
          _this2.password = "";
          _this2.password_confirmation = "";

          _this2.$refs.form_password.resetValidation();
        })["catch"](function (error) {
          _this2.mixin_showErrors(error);

          if (error.response) {
            if (error.response.data) {
              _this2.errors = error.response.data.errors;
            }
          }
        });
      }
    },
    closePasswordDialog: function closePasswordDialog() {
      this.dialogPassword = false;
      this.old_password = "";
      this.password = "";
      this.password_confirmation = "";
      this.$refs.form_password.resetValidation();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/profile/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/profile/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_page_PageHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/page/PageHeader */ "./resources/js/components/page/PageHeader.vue");
/* harmony import */ var _ProfileCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfileCard */ "./resources/js/views/pages/profile/ProfileCard.vue");
/* harmony import */ var _ChangePassword__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChangePassword */ "./resources/js/views/pages/profile/ChangePassword.vue");
/* harmony import */ var _services_UserDataService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/UserDataService */ "./resources/js/services/UserDataService.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    PageHeader: _components_page_PageHeader__WEBPACK_IMPORTED_MODULE_1__["default"],
    ProfileCard: _ProfileCard__WEBPACK_IMPORTED_MODULE_2__["default"],
    ChangePassword: _ChangePassword__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      image_url: __webpack_require__(/*! ../../../assets/img/user.png */ "./resources/js/assets/img/user.png"),
      formDataLoaded: false,
      dialog: false,
      menu: false,
      form: {
        id: null,
        code: null,
        first_name: null,
        middle_name: "",
        last_name: null,
        suffix: "",
        gender: null,
        birthdate: null,
        mobile_number: null,
        telephone_number: "",
        address: null,
        fund: 0,
        remaining_fund: 0,
        username: "",
        email: null,
        password: "password",
        password_confirmation: "password",
        is_admin: false,
        is_superadmin: false,
        can_login: true,
        type: "",
        job: null,
        old_permissions: [],
        permissions: [],
        old_role: "",
        role: "Standard User"
      },
      rules: {
        username: [],
        first_name: [],
        middle_name: [],
        last_name: [],
        suffix: [],
        gender: [],
        birthdate: [],
        job: [],
        mobile_number: [],
        telephone_number: [],
        email: [],
        address: []
      },
      errors: {
        code: [],
        first_name: [],
        middle_name: [],
        last_name: [],
        suffix: [],
        gender: [],
        birthdate: [],
        job: [],
        mobile_number: [],
        telephone_number: [],
        email: [],
        address: [],
        username: [],
        role: [],
        can_login: [],
        has_fund: [],
        fund: []
      }
    };
  },
  methods: {
    onSave: function onSave() {
      var _this = this;

      this.$refs.form.validate();

      if (this.$refs.form.validate()) {
        _services_UserDataService__WEBPACK_IMPORTED_MODULE_4__["default"].updateProfile(this.form.id, {
          code: this.form.code,
          first_name: this.form.first_name,
          middle_name: this.form.middle_name,
          last_name: this.form.last_name,
          suffix: this.form.suffix,
          gender: this.form.gender,
          birthdate: this.form.birthdate,
          mobile_number: this.form.mobile_number,
          telephone_number: this.form.telephone_number,
          address: this.form.address,
          fund: this.form.fund,
          remaining_fund: this.form.remaining_fund,
          username: this.form.username,
          email: this.form.email,
          password: "password",
          password_confirmation: "password",
          is_admin: this.form.is_admin,
          is_superadmin: this.form.is_superadmin,
          can_login: this.form.can_login,
          type: this.form.type,
          job_id: this.form.job == null ? null : this.form.job.id
        }).then(function (response) {
          _this.mixin_successDialog(response.data.status, response.data.message);

          _this.$store.dispatch("AUTH_USER");
        })["catch"](function (error) {
          _this.mixin_showErrors(error);

          _this.errors = error.response.data.errors;
        });
      }
    }
  },
  computed: {
    maxDate: function maxDate() {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD");
    },
    lastUpdated: function lastUpdated() {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(this.form.updated_at).format("MMM DD, YYYY HH:mm:ss");
    }
  },
  activated: function activated() {
    var _this2 = this;

    this.$store.dispatch("AUTH_USER").then(function (response) {
      _this2.form = response;
      _this2.formDataLoaded = true;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/profile/ProfileCard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/profile/ProfileCard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "profile-card",
  props: {
    hover: {
      type: Boolean,
      "default": false
    },
    image_url: {
      "default": __webpack_require__(/*! ../../../assets/img/user.png */ "./resources/js/assets/img/user.png")
    },
    form: {
      type: Object,
      "default": function _default() {
        return {
          id: null,
          code: null,
          first_name: null,
          middle_name: "",
          last_name: null,
          suffix: "",
          gender: null,
          birthdate: null,
          mobile_number: null,
          telephone_number: "",
          address: null,
          fund: 0,
          remaining_fund: 0,
          username: "",
          email: null,
          password: "password",
          password_confirmation: "password",
          is_admin: false,
          is_superadmin: false,
          can_login: true,
          type: "",
          job: null,
          old_permissions: [],
          permissions: [],
          old_role: "",
          role: "Standard User"
        };
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/PageHeader.vue?vue&type=template&id=f5cf67be&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/PageHeader.vue?vue&type=template&id=f5cf67be& ***!
  \******************************************************************************************************************************************************************************************************************/
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
        "v-card-title",
        { staticClass: "pt-0" },
        [
          _c("h4", { staticClass: "title green--text" }, [
            _vm._v(_vm._s(_vm.title))
          ]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _vm._t("actions")
        ],
        2
      ),
      _vm._v(" "),
      _c("v-card-subtitle", [_vm._t("sub-actions")], 2)
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/profile/ChangePassword.vue?vue&type=template&id=ee4c824a&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/profile/ChangePassword.vue?vue&type=template&id=ee4c824a& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
      attrs: { persistent: "", width: "500" },
      scopedSlots: _vm._u(
        [
          {
            key: "activator",
            fn: function(ref) {
              var on = ref.on
              var attrs = ref.attrs
              return [
                _vm._t("openDialog", null, null, { attrs: attrs, on: on })
              ]
            }
          }
        ],
        null,
        true
      ),
      model: {
        value: _vm.dialogPassword,
        callback: function($$v) {
          _vm.dialogPassword = $$v
        },
        expression: "dialogPassword"
      }
    },
    [
      _vm._v(" "),
      _c(
        "v-card",
        [
          _c("v-card-title", { staticClass: "headline" }, [
            _vm._v("\n            Change Password\n        ")
          ]),
          _vm._v(" "),
          _c(
            "v-form",
            { ref: "form_password" },
            [
              _c(
                "v-card-text",
                [
                  _c(
                    "v-container",
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  rules: _vm.mixin_validation.required,
                                  "error-messages": _vm.errors.old_password,
                                  color: "success",
                                  label: "Old Password",
                                  name: "password",
                                  type: _vm.showOldPassword
                                    ? "text"
                                    : "password",
                                  "append-icon": _vm.showOldPassword
                                    ? "mdi-eye"
                                    : "mdi-eye-off"
                                },
                                on: {
                                  input: function() {
                                    _vm.errors.old_password = []
                                  },
                                  "click:append": function($event) {
                                    _vm.showOldPassword = !_vm.showOldPassword
                                  }
                                },
                                model: {
                                  value: _vm.old_password,
                                  callback: function($$v) {
                                    _vm.old_password = $$v
                                  },
                                  expression: "old_password"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  rules: _vm.mixin_validation.required.concat(
                                    _vm.mixin_validation.minimumLength(8)
                                  ),
                                  "error-messages": _vm.errors.password,
                                  color: "success",
                                  label: "New Password",
                                  name: "password",
                                  type: _vm.showNewPassword
                                    ? "text"
                                    : "password",
                                  "append-icon": _vm.showNewPassword
                                    ? "mdi-eye"
                                    : "mdi-eye-off"
                                },
                                on: {
                                  input: function() {
                                    _vm.errors.password = []
                                  },
                                  "click:append": function($event) {
                                    _vm.showNewPassword = !_vm.showNewPassword
                                  }
                                },
                                model: {
                                  value: _vm.password,
                                  callback: function($$v) {
                                    _vm.password = $$v
                                  },
                                  expression: "password"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  rules: _vm.rules.password_confirmation,
                                  "error-messages":
                                    _vm.errors.password_confirmation,
                                  color: "success",
                                  label: "Re-type Password",
                                  name: "confirm_password",
                                  type: _vm.showRetypePassword
                                    ? "text"
                                    : "password",
                                  "append-icon": _vm.showRetypePassword
                                    ? "mdi-eye"
                                    : "mdi-eye-off"
                                },
                                on: {
                                  input: function() {
                                    _vm.errors.password_confirmation = []
                                  },
                                  "click:append": function($event) {
                                    _vm.showRetypePassword = !_vm.showRetypePassword
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
                      on: { click: _vm.closePasswordDialog }
                    },
                    [_vm._v("\n                    Cancel\n                ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary", text: "" },
                      on: { click: _vm.onSave }
                    },
                    [_vm._v("\n                    Save\n                ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/profile/Index.vue?vue&type=template&id=48256fdc&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/profile/Index.vue?vue&type=template&id=48256fdc& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
      !_vm.formDataLoaded
        ? _c("loader-component")
        : _c(
            "v-card",
            { staticClass: "elevation-0 pt-0" },
            [
              _c("page-header", {
                attrs: { title: "Profile" },
                scopedSlots: _vm._u([
                  {
                    key: "sub-actions",
                    fn: function() {
                      return [
                        _vm._v(
                          "\n                Last updated: " +
                            _vm._s(_vm.lastUpdated) +
                            "\n            "
                        )
                      ]
                    },
                    proxy: true
                  }
                ])
              }),
              _vm._v(" "),
              _c(
                "v-card-text",
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
                              _c("v-hover", {
                                scopedSlots: _vm._u([
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var hover = ref.hover
                                      return [
                                        _c("profile-card", {
                                          attrs: {
                                            form: _vm.form,
                                            image_url: _vm.image_url,
                                            hover: hover
                                          },
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "actions",
                                                fn: function() {
                                                  return [
                                                    _c("change-password", {
                                                      scopedSlots: _vm._u(
                                                        [
                                                          {
                                                            key: "openDialog",
                                                            fn: function(ref) {
                                                              var attrs =
                                                                ref.attrs
                                                              var on = ref.on
                                                              return [
                                                                _c(
                                                                  "v-btn",
                                                                  _vm._g(
                                                                    _vm._b(
                                                                      {
                                                                        attrs: {
                                                                          text:
                                                                            "",
                                                                          color:
                                                                            "primary"
                                                                        }
                                                                      },
                                                                      "v-btn",
                                                                      attrs,
                                                                      false
                                                                    ),
                                                                    on
                                                                  ),
                                                                  [
                                                                    _vm._v(
                                                                      "\n                                                Change Password\n                                            "
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
                                                  ]
                                                },
                                                proxy: true
                                              }
                                            ],
                                            null,
                                            true
                                          )
                                        })
                                      ]
                                    }
                                  }
                                ])
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "8" } },
                            [
                              _c(
                                "v-form",
                                { ref: "form" },
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "12" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              rules:
                                                _vm.mixin_validation.required,
                                              counter: 100,
                                              "error-messages":
                                                _vm.errors.username,
                                              label: "Username",
                                              required: ""
                                            },
                                            on: {
                                              input: function($event) {
                                                _vm.errors.username = []
                                              }
                                            },
                                            model: {
                                              value: _vm.form.username,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "username",
                                                  $$v
                                                )
                                              },
                                              expression: "form.username"
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
                                              rules:
                                                _vm.mixin_validation.required,
                                              counter: 100,
                                              "error-messages":
                                                _vm.errors.first_name,
                                              label: "First Name",
                                              required: ""
                                            },
                                            on: {
                                              input: function($event) {
                                                _vm.errors.first_name = []
                                              }
                                            },
                                            model: {
                                              value: _vm.form.first_name,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "first_name",
                                                  $$v
                                                )
                                              },
                                              expression: "form.first_name"
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
                                              rules: _vm.rules.middle_name,
                                              counter: 100,
                                              "error-messages":
                                                _vm.errors.middle_name,
                                              label: "Middle Name"
                                            },
                                            on: {
                                              input: function($event) {
                                                _vm.errors.middle_name = []
                                              }
                                            },
                                            model: {
                                              value: _vm.form.middle_name,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "middle_name",
                                                  $$v
                                                )
                                              },
                                              expression: "form.middle_name"
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
                                              rules:
                                                _vm.mixin_validation.required,
                                              counter: 100,
                                              "error-messages":
                                                _vm.errors.last_name,
                                              label: "Last Name",
                                              required: ""
                                            },
                                            on: {
                                              input: function($event) {
                                                _vm.errors.last_name = []
                                              }
                                            },
                                            model: {
                                              value: _vm.form.last_name,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "last_name",
                                                  $$v
                                                )
                                              },
                                              expression: "form.last_name"
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
                                          _c("v-combobox", {
                                            attrs: {
                                              rules: _vm.rules.suffix,
                                              counter: 30,
                                              items: ["Jr", "Sr", "II", "III"],
                                              "error-messages":
                                                _vm.errors.suffix,
                                              label: "Suffix"
                                            },
                                            on: {
                                              input: function($event) {
                                                _vm.errors.suffix = []
                                              }
                                            },
                                            model: {
                                              value: _vm.form.suffix,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "suffix",
                                                  $$v
                                                )
                                              },
                                              expression: "form.suffix"
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
                                          _c("v-select", {
                                            attrs: {
                                              rules: _vm.rules.gender,
                                              items: ["Male", "Female"],
                                              "error-messages":
                                                _vm.errors.gender,
                                              label: "Gender",
                                              required: ""
                                            },
                                            on: {
                                              input: function($event) {
                                                _vm.errors.gender = []
                                              }
                                            },
                                            model: {
                                              value: _vm.form.gender,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "gender",
                                                  $$v
                                                )
                                              },
                                              expression: "form.gender"
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
                                            "v-menu",
                                            {
                                              ref: "menu",
                                              attrs: {
                                                transition: "scale-transition",
                                                "offset-y": "",
                                                "min-width": "290px",
                                                "close-on-content-click": false
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
                                                                  _vm.rules
                                                                    .birthdate,
                                                                "error-messages":
                                                                  _vm.errors
                                                                    .birthdate,
                                                                label:
                                                                  "Birthdate ",
                                                                readonly: ""
                                                              },
                                                              on: {
                                                                input: function(
                                                                  $event
                                                                ) {
                                                                  _vm.errors.birthdate = []
                                                                }
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.form
                                                                    .birthdate,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.form,
                                                                    "birthdate",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "form.birthdate"
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
                                                  value: _vm.form.birthdate,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.form,
                                                      "birthdate",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "form.birthdate"
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
                                        "v-col",
                                        { attrs: { cols: "12", md: "4" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              rules:
                                                _vm.mixin_validation.required,
                                              counter: 30,
                                              "error-messages":
                                                _vm.errors.mobile_number,
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
                                                _vm.$set(
                                                  _vm.form,
                                                  "mobile_number",
                                                  $$v
                                                )
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
                                        { attrs: { cols: "12", md: "4" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              rules: _vm.rules.telephone_number,
                                              counter: 30,
                                              "error-messages":
                                                _vm.errors.telephone_number,
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
                                                _vm.$set(
                                                  _vm.form,
                                                  "telephone_number",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "form.telephone_number"
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
                                              rules:
                                                _vm.mixin_validation.required,
                                              "error-messages":
                                                _vm.errors.email,
                                              label: "Email Address"
                                            },
                                            on: {
                                              input: function($event) {
                                                _vm.errors.email = []
                                              }
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
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("v-textarea", {
                                            attrs: {
                                              rules:
                                                _vm.mixin_validation.required,
                                              "error-messages":
                                                _vm.errors.address,
                                              label: "Address",
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
                                                _vm.$set(
                                                  _vm.form,
                                                  "address",
                                                  $$v
                                                )
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
                                  _c(
                                    "v-row",
                                    [
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: { color: "primary" },
                                          on: { click: _vm.onSave }
                                        },
                                        [_vm._v("Update Profile")]
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/profile/ProfileCard.vue?vue&type=template&id=7535a219&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/profile/ProfileCard.vue?vue&type=template&id=7535a219& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    "v-card",
    {
      staticClass: "mx-auto mt-3",
      attrs: { outlined: "", elevation: _vm.hover ? 5 : 2 }
    },
    [
      _c(
        "v-card-text",
        [
          _c(
            "v-row",
            { attrs: { align: "center", justify: "center" } },
            [
              _c(
                "v-col",
                { attrs: { cols: "12", align: "center", justify: "center" } },
                [
                  _c(
                    "v-avatar",
                    {
                      staticClass: "profile",
                      attrs: { color: "grey", size: "200" }
                    },
                    [_c("v-img", { attrs: { src: _vm.image_url } })],
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
                { attrs: { cols: "12", align: "center", justify: "center" } },
                [
                  _c("div", [
                    _vm._v(
                      "\n                    " +
                        _vm._s(
                          _vm.form.job == null
                            ? ""
                            : _vm.form.job.department == null
                            ? ""
                            : _vm.form.job.department.name
                        ) +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("h3", { staticClass: "display-1 green--text" }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(
                          _vm.form.last_name +
                            ", " +
                            (_vm.form.first_name || "") +
                            " " +
                            (_vm.form.suffix || "")
                        ) +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.form.job == null ? "" : _vm.form.job.name) +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "text--primary" }, [
                    _vm._v(
                      "\n                    " + _vm._s(_vm.form.mobile_number)
                    ),
                    _c("br"),
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.form.email) +
                        "\n                "
                    )
                  ])
                ]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm._t("actions"),
      _vm._v(" "),
      _c("v-row", { staticClass: "mt-4" })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/assets/img/user.png":
/*!******************************************!*\
  !*** ./resources/js/assets/img/user.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/user.png?5405d77c51fb46a0cbf26cb96fe4da4d";

/***/ }),

/***/ "./resources/js/components/page/PageHeader.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/page/PageHeader.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageHeader_vue_vue_type_template_id_f5cf67be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageHeader.vue?vue&type=template&id=f5cf67be& */ "./resources/js/components/page/PageHeader.vue?vue&type=template&id=f5cf67be&");
/* harmony import */ var _PageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageHeader.vue?vue&type=script&lang=js& */ "./resources/js/components/page/PageHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageHeader_vue_vue_type_template_id_f5cf67be___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageHeader_vue_vue_type_template_id_f5cf67be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/page/PageHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/page/PageHeader.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/page/PageHeader.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/PageHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/page/PageHeader.vue?vue&type=template&id=f5cf67be&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/page/PageHeader.vue?vue&type=template&id=f5cf67be& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_template_id_f5cf67be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageHeader.vue?vue&type=template&id=f5cf67be& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/PageHeader.vue?vue&type=template&id=f5cf67be&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_template_id_f5cf67be___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_template_id_f5cf67be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
    key: "updateActivation",
    value: function updateActivation(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/users/update_activation/".concat(id), data);
    }
  }, {
    key: "export",
    value: function _export() {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/users/export/data");
    }
  }]);

  return UserDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new UserDataService());

/***/ }),

/***/ "./resources/js/views/pages/profile/ChangePassword.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/pages/profile/ChangePassword.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChangePassword_vue_vue_type_template_id_ee4c824a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChangePassword.vue?vue&type=template&id=ee4c824a& */ "./resources/js/views/pages/profile/ChangePassword.vue?vue&type=template&id=ee4c824a&");
/* harmony import */ var _ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChangePassword.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/profile/ChangePassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChangePassword_vue_vue_type_template_id_ee4c824a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChangePassword_vue_vue_type_template_id_ee4c824a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/profile/ChangePassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/profile/ChangePassword.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/pages/profile/ChangePassword.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChangePassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/profile/ChangePassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/profile/ChangePassword.vue?vue&type=template&id=ee4c824a&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/pages/profile/ChangePassword.vue?vue&type=template&id=ee4c824a& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_template_id_ee4c824a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChangePassword.vue?vue&type=template&id=ee4c824a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/profile/ChangePassword.vue?vue&type=template&id=ee4c824a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_template_id_ee4c824a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_template_id_ee4c824a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/pages/profile/Index.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/pages/profile/Index.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_48256fdc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=48256fdc& */ "./resources/js/views/pages/profile/Index.vue?vue&type=template&id=48256fdc&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/profile/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_48256fdc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_48256fdc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/profile/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/profile/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/pages/profile/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/profile/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/profile/Index.vue?vue&type=template&id=48256fdc&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/pages/profile/Index.vue?vue&type=template&id=48256fdc& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_48256fdc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=48256fdc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/profile/Index.vue?vue&type=template&id=48256fdc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_48256fdc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_48256fdc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/pages/profile/ProfileCard.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/pages/profile/ProfileCard.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfileCard_vue_vue_type_template_id_7535a219___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileCard.vue?vue&type=template&id=7535a219& */ "./resources/js/views/pages/profile/ProfileCard.vue?vue&type=template&id=7535a219&");
/* harmony import */ var _ProfileCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileCard.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/profile/ProfileCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProfileCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileCard_vue_vue_type_template_id_7535a219___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfileCard_vue_vue_type_template_id_7535a219___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/profile/ProfileCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/profile/ProfileCard.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/pages/profile/ProfileCard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/profile/ProfileCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/profile/ProfileCard.vue?vue&type=template&id=7535a219&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/pages/profile/ProfileCard.vue?vue&type=template&id=7535a219& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_template_id_7535a219___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileCard.vue?vue&type=template&id=7535a219& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/profile/ProfileCard.vue?vue&type=template&id=7535a219&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_template_id_7535a219___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_template_id_7535a219___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);