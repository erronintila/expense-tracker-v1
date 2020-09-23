(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/profile/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/profile/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      dialogPassword: false,
      dialog: false,
      menu: false,
      user: {
        id: "",
        name: "",
        email: "",
        username: "",
        is_admin: "",
        updated_at: "",
        employee: {
          id: null,
          fullname: "",
          first_name: "",
          middle_name: "",
          last_name: "",
          suffix: "",
          gender: "",
          birthdate: "",
          mobile_number: "",
          telephone_number: "",
          email: "",
          address: "",
          job: "",
          department: ""
        }
      },
      old_password: "",
      password: "",
      password_confirmation: "",
      password_rules: {
        old_password: [function (v) {
          return !!v || "Old Password is required";
        }],
        password: [function (v) {
          return !!v || "New Password is required";
        }, function (v) {
          return v.length >= 8 || "New Password must be at least 8 characters";
        }],
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
        first_name: [function (v) {
          return !!v || "First name is required";
        }, function (v) {
          return v.length <= 100 || "First name must be less than 100 characters";
        }],
        middle_name: [function (v) {
          return v !== null && v.length <= 100 || "Middle name must be less than 100 characters";
        }],
        last_name: [function (v) {
          return !!v || "Last name is required";
        }, function (v) {
          return v.length <= 100 || "Last name must be less than 100 characters";
        }],
        suffix: [],
        gender: [function (v) {
          return !!v || "Gender is required";
        }],
        birthdate: [function (v) {
          return !!v || "Birthdate is required";
        }],
        job: [function (v) {
          return !!v || "Job designation is required";
        }],
        mobile_number: [function (v) {
          return !!v || "Mobile number is required";
        }],
        telephone_number: [function (v) {
          return v !== null && v.length <= 30 || "Telephone number must be less than 30 characters";
        }],
        email: [function (v) {
          return !!v || "E-mail is required";
        }, function (v) {
          return /.+@.+/.test(v) || "E-mail is not valid";
        }],
        address: [function (v) {
          return !!v || "Address is required";
        }]
      },
      errors: {
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
      }
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.get("/api/user").then(function (response) {
        console.log(response);
        _this.user = response.data.data;
        console.log(_this.user.is_admin);
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);
      });
    },
    onUpdateData: function onUpdateData() {
      var _this = this;

      _this.$refs.form.validate();

      if (_this.$refs.form.validate() && this.user.employee == null) {
        axios.put("/api/users/" + _this.user.id, {
          action: "update",
          name: _this.user.name,
          username: _this.user.username,
          email: _this.user.email,
          is_admin: _this.user.is_admin
        }).then(function (response) {
          // _this.onRefresh();
          _this.$dialog.message.success("User account updated successfully.", {
            position: "top-right",
            timeout: 2000
          });
        })["catch"](function (error) {
          console.log(error);
          _this.errors = error.response.data.errors;
        });
        return;
      }

      if (_this.$refs.form.validate()) {
        axios.put("/api/users/" + _this.user.id, {
          action: "update",
          name: "".concat(_this.user.employee.last_name, ", ").concat(_this.user.employee.first_name, " ").concat(_this.user.employee.middle_name),
          email: _this.user.employee.email,
          username: _this.user.username,
          employee: {
            first_name: _this.user.employee.first_name,
            middle_name: _this.user.employee.middle_name,
            last_name: _this.user.employee.last_name,
            suffix: _this.user.employee.suffix,
            gender: _this.user.employee.gender,
            birthdate: _this.user.employee.birthdate,
            mobile_number: _this.user.employee.mobile_number,
            telephone_number: _this.user.employee.telephone_number,
            email: _this.user.employee.email,
            address: _this.user.employee.address
          }
        }).then(function (response) {
          _this.$dialog.message.success("User account updated successfully.", {
            position: "top-right",
            timeout: 2000
          });
        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);
        });
      }
    },
    onUpdatePassword: function onUpdatePassword() {
      var _this = this;

      console.log([this.old_password, this.password, this.password_confirmation]);

      if (_this.$refs.form_password.validate()) {
        axios.put("/api/users/" + _this.user.id, {
          action: "change_password",
          old_password: _this.old_password,
          password: _this.password,
          password_confirmation: _this.password_confirmation
        }).then(function (response) {
          _this.$dialog.message.success("User account password has been updated.", {
            position: "top-right",
            timeout: 2000
          });

          _this.dialogPassword = false;
          _this.old_password = "";
          _this.password = "";
          _this.password_confirmation = "";
        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);
          _this.password_errors = error.response.data.errors;
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
  created: function created() {
    axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("access_token");
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/profile/Index.vue?vue&type=template&id=37166355&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/profile/Index.vue?vue&type=template&id=37166355& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
                _vm._s(_vm.user.updated_at) +
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
                                                        staticClass: "profile",
                                                        attrs: {
                                                          color: "grey",
                                                          size: "200"
                                                        }
                                                      },
                                                      [
                                                        _c("v-img", {
                                                          attrs: {
                                                            src:
                                                              "https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
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
                                            _vm.user.employee !== null
                                              ? _c(
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
                                                                _vm.user
                                                                  .employee
                                                                  .department
                                                                  .name
                                                              ) +
                                                              "\n                                            "
                                                          )
                                                        ]),
                                                        _vm._v(" "),
                                                        _c(
                                                          "p",
                                                          {
                                                            staticClass:
                                                              "display-1 text--primary"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                " +
                                                                _vm._s(
                                                                  _vm.user
                                                                    .employee
                                                                    .last_name +
                                                                    ", " +
                                                                    _vm.user
                                                                      .employee
                                                                      .first_name +
                                                                    " " +
                                                                    _vm.user
                                                                      .employee
                                                                      .suffix
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
                                                                _vm.user
                                                                  .employee.job
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
                                                                  _vm.user
                                                                    .employee
                                                                    .mobile_number
                                                                )
                                                            ),
                                                            _c("br"),
                                                            _vm._v(
                                                              "\n                                                " +
                                                                _vm._s(
                                                                  _vm.user
                                                                    .employee
                                                                    .email
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
                                              : _c(
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
                                                                _vm.user
                                                                  .username
                                                              ) +
                                                              "\n                                            "
                                                          )
                                                        ]),
                                                        _vm._v(" "),
                                                        _c(
                                                          "p",
                                                          {
                                                            staticClass:
                                                              "display-1 text--primary"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                " +
                                                                _vm._s(
                                                                  _vm.user.name
                                                                ) +
                                                                "\n                                            "
                                                            )
                                                          ]
                                                        ),
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
                                                                  _vm.user.email
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
                                                                color: "primary"
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
                                                  { staticClass: "headline" },
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
                                                                      cols: "12"
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
                                                                              .old_password,
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
                                                                          type:
                                                                            "password"
                                                                        },
                                                                        on: {
                                                                          input: function() {
                                                                            _vm.password_errors.old_password = []
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
                                                                      cols: "12"
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
                                                                              .password,
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
                                                                          type:
                                                                            "password"
                                                                        },
                                                                        on: {
                                                                          input: function() {
                                                                            _vm.password_errors.password = []
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
                                                                      cols: "12"
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
                                                                          type:
                                                                            "password"
                                                                        },
                                                                        on: {
                                                                          input: function() {
                                                                            _vm.password_errors.password_confirmation = []
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
                                                              color: "primary",
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
                                                              color: "primary",
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
                              _vm.user.employee === null
                                ? _c(
                                    "v-row",
                                    [
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
                                              label: "Name ",
                                              required: ""
                                            },
                                            on: {
                                              input: function($event) {
                                                _vm.errors.first_name = []
                                              }
                                            },
                                            model: {
                                              value: _vm.user.name,
                                              callback: function($$v) {
                                                _vm.$set(_vm.user, "name", $$v)
                                              },
                                              expression: "user.name"
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
                                              label: "Username",
                                              required: ""
                                            },
                                            on: {
                                              input: function($event) {
                                                _vm.errors.first_name = []
                                              }
                                            },
                                            model: {
                                              value: _vm.user.username,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.user,
                                                  "username",
                                                  $$v
                                                )
                                              },
                                              expression: "user.username"
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
                                              counter: 100,
                                              "error-messages":
                                                _vm.errors.email,
                                              label: "Email Address",
                                              required: ""
                                            },
                                            on: {
                                              input: function($event) {
                                                _vm.errors.email = []
                                              }
                                            },
                                            model: {
                                              value: _vm.user.email,
                                              callback: function($$v) {
                                                _vm.$set(_vm.user, "email", $$v)
                                              },
                                              expression: "user.email"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                : _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "12" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              rules: _vm.rules.first_name,
                                              counter: 100,
                                              "error-messages":
                                                _vm.errors.first_name,
                                              label: "Username",
                                              required: ""
                                            },
                                            on: {
                                              input: function($event) {
                                                _vm.errors.first_name = []
                                              }
                                            },
                                            model: {
                                              value: _vm.user.username,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.user,
                                                  "username",
                                                  $$v
                                                )
                                              },
                                              expression: "user.username"
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
                                              value:
                                                _vm.user.employee.first_name,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.user.employee,
                                                  "first_name",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "user.employee.first_name"
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
                                              value:
                                                _vm.user.employee.middle_name,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.user.employee,
                                                  "middle_name",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "user.employee.middle_name"
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
                                              value:
                                                _vm.user.employee.last_name,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.user.employee,
                                                  "last_name",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "user.employee.last_name"
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
                                              value: _vm.user.employee.suffix,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.user.employee,
                                                  "suffix",
                                                  $$v
                                                )
                                              },
                                              expression: "user.employee.suffix"
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
                                              value: _vm.user.employee.gender,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.user.employee,
                                                  "gender",
                                                  $$v
                                                )
                                              },
                                              expression: "user.employee.gender"
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
                                                                  _vm.user
                                                                    .employee
                                                                    .birthdate,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.user
                                                                      .employee,
                                                                    "birthdate",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "\n                                                    user.employee.birthdate\n                                                "
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
                                                  color: "success"
                                                },
                                                model: {
                                                  value:
                                                    _vm.user.employee.birthdate,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.user.employee,
                                                      "birthdate",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "\n                                                user.employee.birthdate\n                                            "
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
                                              label: "Mobile Number"
                                            },
                                            on: {
                                              input: function($event) {
                                                _vm.errors.mobile_number = []
                                              }
                                            },
                                            model: {
                                              value:
                                                _vm.user.employee.mobile_number,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.user.employee,
                                                  "mobile_number",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "\n                                            user.employee.mobile_number\n                                        "
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
                                              label: "Telephone Number"
                                            },
                                            on: {
                                              input: function($event) {
                                                _vm.errors.telephone_number = []
                                              }
                                            },
                                            model: {
                                              value:
                                                _vm.user.employee
                                                  .telephone_number,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.user.employee,
                                                  "telephone_number",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "\n                                            user.employee.telephone_number\n                                        "
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
                                              value: _vm.user.employee.email,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.user.employee,
                                                  "email",
                                                  $$v
                                                )
                                              },
                                              expression: "user.employee.email"
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
                                              value: _vm.user.employee.address,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.user.employee,
                                                  "address",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "user.employee.address"
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
                                      on: { click: _vm.onUpdateData }
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

/***/ "./resources/js/views/modules/admin/profile/Index.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/modules/admin/profile/Index.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_37166355___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=37166355& */ "./resources/js/views/modules/admin/profile/Index.vue?vue&type=template&id=37166355&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/profile/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_37166355___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_37166355___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/profile/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/profile/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/profile/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/profile/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/profile/Index.vue?vue&type=template&id=37166355&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/profile/Index.vue?vue&type=template&id=37166355& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_37166355___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=37166355& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/profile/Index.vue?vue&type=template&id=37166355&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_37166355___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_37166355___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);