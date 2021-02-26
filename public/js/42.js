(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/profile/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/profile/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var _this2 = this;

    return {
      showOldPassword: false,
      showNewPassword: false,
      showRetypePassword: false,
      dialogPassword: false,
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
      // id: "",
      // email: "",
      // username: "",
      // is_admin: "",
      // updated_at: "",
      // can_login: 1,
      // full_name: "",
      // first_name: "",
      // middle_name: "",
      // last_name: "",
      // suffix: "",
      // gender: "",
      // birthdate: "",
      // mobile_number: "",
      // telephone_number: "",
      // email: "",
      // address: "",
      // job: { department: {} },
      old_password: "",
      password: "",
      password_confirmation: "",
      password_rules: {
        password_confirmation: [function (v) {
          return !!v || "Retype password is required";
        }, function (v) {
          return _this2.password === _this2.password_confirmation || "Passwords do not match";
        }]
      },
      password_errors: {
        old_password: [],
        password: [],
        password_confirmation: []
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
      var _this = this; // _this.$refs.form.validate();


      if (_this.$refs.form.validate()) {
        axios.put("/api/users/update_profile/" + _this.form.id, {
          code: _this.form.code,
          first_name: _this.form.first_name,
          middle_name: _this.form.middle_name,
          last_name: _this.form.last_name,
          suffix: _this.form.suffix,
          gender: _this.form.gender,
          birthdate: _this.form.birthdate,
          mobile_number: _this.form.mobile_number,
          telephone_number: _this.form.telephone_number,
          address: _this.form.address,
          fund: _this.form.fund,
          remaining_fund: _this.form.remaining_fund,
          username: _this.form.username,
          email: _this.form.email,
          password: "password",
          password_confirmation: "password",
          is_admin: _this.form.is_admin,
          is_superadmin: _this.form.is_superadmin,
          can_login: _this.form.can_login,
          type: _this.form.type,
          job_id: _this.form.job == null ? null : _this.form.job.id
        }).then(function (response) {
          _this.$dialog.message.success("User account updated successfully.", {
            position: "top-right",
            timeout: 2000
          });

          _this.$store.dispatch("AUTH_USER");
        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);

          _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);

          _this.errors = error.response.data.errors;
        });
      }
    },
    onUpdatePassword: function onUpdatePassword() {
      var _this = this;

      if (_this.$refs.form_password.validate()) {
        axios.put("/api/users/update_password/" + _this.form.id, {
          old_password: _this.old_password,
          password: _this.password,
          password_confirmation: _this.password_confirmation
        }).then(function (response) {
          _this.$dialog.message.success("User account password has been updated.", {
            position: "top-right",
            timeout: 2000
          }); // _this.$store.dispatch("AUTH_USER");


          _this.dialogPassword = false;
          _this.old_password = "";
          _this.password = "";
          _this.password_confirmation = "";
        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);

          _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);

          if (error.response) {
            if (error.response.data) {
              _this.password_errors = error.response.data.errors;
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
  },
  computed: {
    maxDate: function maxDate() {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD");
    }
  },
  created: function created() {
    var _this = this;

    this.$store.dispatch("AUTH_USER").then(function (response) {
      _this.form = response;

      _this.$store.dispatch("AUTH_NOTIFICATIONS");
    });
  },
  activated: function activated() {
    var _this = this;

    this.$store.dispatch("AUTH_USER").then(function (response) {
      _this.form = response;

      _this.$store.dispatch("AUTH_NOTIFICATIONS");
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/profile/Index.vue?vue&type=template&id=931ded62&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/profile/Index.vue?vue&type=template&id=931ded62& ***!
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
      _vm.form.id == ""
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
                  _c("h4", { staticClass: "title green--text" }, [
                    _vm._v("Profile")
                  ]),
                  _vm._v(" "),
                  _c("v-spacer")
                ],
                1
              ),
              _vm._v(" "),
              _c("v-card-subtitle", [
                _vm._v(
                  "\n            Last updated: " +
                    _vm._s(_vm.form.updated_at) +
                    "\n        "
                )
              ]),
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
                                        _c(
                                          "v-card",
                                          {
                                            staticClass: "mx-auto mt-3",
                                            attrs: {
                                              outlined: "",
                                              elevation: hover ? 5 : 2
                                            }
                                          },
                                          [
                                            _c(
                                              "v-card-text",
                                              [
                                                _c(
                                                  "v-row",
                                                  {
                                                    attrs: {
                                                      align: "center",
                                                      justify: "center"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "v-col",
                                                      {
                                                        attrs: {
                                                          cols: "12",
                                                          align: "center",
                                                          justify: "center"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "v-avatar",
                                                          {
                                                            staticClass:
                                                              "profile",
                                                            attrs: {
                                                              color: "grey",
                                                              size: "200"
                                                            }
                                                          },
                                                          [
                                                            _c("v-img", {
                                                              attrs: {
                                                                src: __webpack_require__(/*! ../../../../assets/img/user.png */ "./resources/js/assets/img/user.png")
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
                                                      {
                                                        attrs: {
                                                          cols: "12",
                                                          align: "center",
                                                          justify: "center"
                                                        }
                                                      },
                                                      [
                                                        _c("div", [
                                                          _vm._v(
                                                            "\n                                                " +
                                                              _vm._s(
                                                                _vm.form.job ==
                                                                  null
                                                                  ? ""
                                                                  : _vm.form.job
                                                                      .department ==
                                                                    null
                                                                  ? ""
                                                                  : _vm.form.job
                                                                      .department
                                                                      .name
                                                              ) +
                                                              "\n                                            "
                                                          )
                                                        ]),
                                                        _vm._v(" "),
                                                        _c(
                                                          "h3",
                                                          {
                                                            staticClass:
                                                              "display-1 green--text"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                " +
                                                                _vm._s(
                                                                  _vm.form
                                                                    .last_name +
                                                                    ", " +
                                                                    (_vm.form
                                                                      .first_name ||
                                                                      "") +
                                                                    " " +
                                                                    (_vm.form
                                                                      .suffix ||
                                                                      "")
                                                                ) +
                                                                "\n                                            "
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c("p", [
                                                          _vm._v(
                                                            "\n                                                " +
                                                              _vm._s(
                                                                _vm.form.job ==
                                                                  null
                                                                  ? ""
                                                                  : _vm.form.job
                                                                      .name
                                                              ) +
                                                              "\n                                            "
                                                          )
                                                        ]),
                                                        _vm._v(" "),
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "text--primary"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                " +
                                                                _vm._s(
                                                                  _vm.form
                                                                    .mobile_number
                                                                )
                                                            ),
                                                            _c("br"),
                                                            _vm._v(
                                                              "\n                                                " +
                                                                _vm._s(
                                                                  _vm.form.email
                                                                ) +
                                                                "\n                                            "
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-dialog",
                                              {
                                                attrs: {
                                                  persistent: "",
                                                  width: "500"
                                                },
                                                scopedSlots: _vm._u(
                                                  [
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
                                                                    text: "",
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
                                                                "\n                                            Change Password\n                                        "
                                                              )
                                                            ]
                                                          )
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
                                                    _c(
                                                      "v-card-title",
                                                      {
                                                        staticClass: "headline"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                            Change Password\n                                        "
                                                        )
                                                      ]
                                                    ),
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
                                                                      {
                                                                        attrs: {
                                                                          cols:
                                                                            "12"
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "v-text-field",
                                                                          {
                                                                            attrs: {
                                                                              rules:
                                                                                _vm
                                                                                  .mixin_validation
                                                                                  .required,
                                                                              "error-messages":
                                                                                _vm
                                                                                  .password_errors
                                                                                  .old_password,
                                                                              color:
                                                                                "success",
                                                                              label:
                                                                                "Old Password",
                                                                              name:
                                                                                "password",
                                                                              type: _vm.showOldPassword
                                                                                ? "text"
                                                                                : "password",
                                                                              "append-icon": _vm.showOldPassword
                                                                                ? "mdi-eye"
                                                                                : "mdi-eye-off"
                                                                            },
                                                                            on: {
                                                                              input: function() {
                                                                                _vm.password_errors.old_password = []
                                                                              },
                                                                              "click:append": function(
                                                                                $event
                                                                              ) {
                                                                                _vm.showOldPassword = !_vm.showOldPassword
                                                                              }
                                                                            },
                                                                            model: {
                                                                              value:
                                                                                _vm.old_password,
                                                                              callback: function(
                                                                                $$v
                                                                              ) {
                                                                                _vm.old_password = $$v
                                                                              },
                                                                              expression:
                                                                                "\n                                                                    old_password\n                                                                "
                                                                            }
                                                                          }
                                                                        )
                                                                      ],
                                                                      1
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "v-col",
                                                                      {
                                                                        attrs: {
                                                                          cols:
                                                                            "12"
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "v-text-field",
                                                                          {
                                                                            attrs: {
                                                                              rules: _vm.mixin_validation.required.concat(
                                                                                _vm.mixin_validation.minimumLength(
                                                                                  8
                                                                                )
                                                                              ),
                                                                              "error-messages":
                                                                                _vm
                                                                                  .password_errors
                                                                                  .password,
                                                                              color:
                                                                                "success",
                                                                              label:
                                                                                "New Password",
                                                                              name:
                                                                                "password",
                                                                              type: _vm.showNewPassword
                                                                                ? "text"
                                                                                : "password",
                                                                              "append-icon": _vm.showNewPassword
                                                                                ? "mdi-eye"
                                                                                : "mdi-eye-off"
                                                                            },
                                                                            on: {
                                                                              input: function() {
                                                                                _vm.password_errors.password = []
                                                                              },
                                                                              "click:append": function(
                                                                                $event
                                                                              ) {
                                                                                _vm.showNewPassword = !_vm.showNewPassword
                                                                              }
                                                                            },
                                                                            model: {
                                                                              value:
                                                                                _vm.password,
                                                                              callback: function(
                                                                                $$v
                                                                              ) {
                                                                                _vm.password = $$v
                                                                              },
                                                                              expression:
                                                                                "\n                                                                    password\n                                                                "
                                                                            }
                                                                          }
                                                                        )
                                                                      ],
                                                                      1
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "v-col",
                                                                      {
                                                                        attrs: {
                                                                          cols:
                                                                            "12"
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "v-text-field",
                                                                          {
                                                                            attrs: {
                                                                              rules:
                                                                                _vm
                                                                                  .password_rules
                                                                                  .password_confirmation,
                                                                              "error-messages":
                                                                                _vm
                                                                                  .password_errors
                                                                                  .password_confirmation,
                                                                              color:
                                                                                "success",
                                                                              label:
                                                                                "Re-type Password",
                                                                              name:
                                                                                "confirm_password",
                                                                              type: _vm.showRetypePassword
                                                                                ? "text"
                                                                                : "password",
                                                                              "append-icon": _vm.showRetypePassword
                                                                                ? "mdi-eye"
                                                                                : "mdi-eye-off"
                                                                            },
                                                                            on: {
                                                                              input: function() {
                                                                                _vm.password_errors.password_confirmation = []
                                                                              },
                                                                              "click:append": function(
                                                                                $event
                                                                              ) {
                                                                                _vm.showRetypePassword = !_vm.showRetypePassword
                                                                              }
                                                                            },
                                                                            model: {
                                                                              value:
                                                                                _vm.password_confirmation,
                                                                              callback: function(
                                                                                $$v
                                                                              ) {
                                                                                _vm.password_confirmation = $$v
                                                                              },
                                                                              expression:
                                                                                "\n                                                                    password_confirmation\n                                                                "
                                                                            }
                                                                          }
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
                                                        _c(
                                                          "v-card-actions",
                                                          [
                                                            _c("v-spacer"),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-btn",
                                                              {
                                                                attrs: {
                                                                  color:
                                                                    "primary",
                                                                  text: ""
                                                                },
                                                                on: {
                                                                  click:
                                                                    _vm.closePasswordDialog
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "\n                                                    Cancel\n                                                "
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-btn",
                                                              {
                                                                attrs: {
                                                                  color:
                                                                    "primary",
                                                                  text: ""
                                                                },
                                                                on: {
                                                                  click:
                                                                    _vm.onUpdatePassword
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "\n                                                    Save\n                                                "
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
                                            ),
                                            _vm._v(" "),
                                            _c("v-row", { staticClass: "mt-4" })
                                          ],
                                          1
                                        )
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
                                              rules: _vm.rules.username,
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
                                              rules: _vm.rules.first_name,
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
                                              rules: _vm.rules.last_name,
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
                                              rules: _vm.rules.mobile_number,
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
                                              rules: _vm.rules.email,
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
                                              rules: _vm.rules.address,
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

/***/ "./resources/js/assets/img/user.png":
/*!******************************************!*\
  !*** ./resources/js/assets/img/user.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/user.png?5405d77c51fb46a0cbf26cb96fe4da4d";

/***/ }),

/***/ "./resources/js/views/modules/user/profile/Index.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/modules/user/profile/Index.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_931ded62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=931ded62& */ "./resources/js/views/modules/user/profile/Index.vue?vue&type=template&id=931ded62&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/user/profile/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_931ded62___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_931ded62___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/user/profile/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/user/profile/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/modules/user/profile/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/profile/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/user/profile/Index.vue?vue&type=template&id=931ded62&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/modules/user/profile/Index.vue?vue&type=template&id=931ded62& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_931ded62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=931ded62& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/profile/Index.vue?vue&type=template&id=931ded62&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_931ded62___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_931ded62___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);