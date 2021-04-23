(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/admin/users/Form.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/admin/users/Form.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_selector_dropdown_JobDropdownSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/selector/dropdown/JobDropdownSelector */ "./resources/js/components/selector/dropdown/JobDropdownSelector.vue");
/* harmony import */ var _services_PermissionDataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/PermissionDataService */ "./resources/js/services/PermissionDataService.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    JobDropdownSelector: _components_selector_dropdown_JobDropdownSelector__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    userForm: {
      type: Object,
      "default": function _default() {
        return {
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
          is_active: true,
          type: "employee",
          job: null,
          permissions: [],
          role: "Standard User"
        };
      }
    },
    errors: {
      type: Object,
      "default": function _default() {
        return {
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
          is_active: [],
          has_fund: [],
          fund: []
        };
      }
    },
    rules: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    isEdit: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      panel: [0, 1, 2],
      valid: false,
      menu: false,
      collections: {
        permissions: [],
        headers: [{
          text: "Permission",
          value: "name",
          sortable: false
        }]
      },
      form: {
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
        is_active: true,
        type: "employee",
        job: null,
        permissions: [],
        role: "Standard User"
      }
    };
  },
  methods: {
    onChangeJob: function onChangeJob(e) {
      this.errors.job_id = [];
      this.form.job = e;
    },
    onSave: function onSave() {
      if (!this.$refs.form.validate()) {
        return;
      }

      this.$emit("on-save", this.form);
    },
    loadPermissions: function loadPermissions() {
      var _this = this;

      _services_PermissionDataService__WEBPACK_IMPORTED_MODULE_2__["default"].get({
        params: {
          role: this.form.role
        }
      }).then(function (response) {
        _this.collections.permissions = response.data;
        _this.form.permissions = response.data;
      })["catch"](function (error) {
        _this.mixin_showErrors(error);
      });
    }
  },
  computed: {
    maxDate: function maxDate() {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD");
    }
  },
  watch: {
    userForm: {
      deep: true,
      immediate: true,
      handler: function handler(newValue, oldValue) {
        this.form = newValue;
      }
    },
    "form.role": function formRole() {
      this.loadPermissions();
    }
  },
  created: function created() {
    this.loadPermissions();
  },
  activated: function activated() {
    this.loadPermissions();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/admin/users/Form.vue?vue&type=template&id=fc079216&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/admin/users/Form.vue?vue&type=template&id=fc079216& ***!
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
                    "\n                    Basic Details\n                "
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
                          _c("JobDropdownSelector", {
                            ref: "jobSelector",
                            attrs: {
                              selectedJob: _vm.form.job,
                              rules: _vm.mixin_validation.required,
                              errors: _vm.errors.job_id
                            },
                            on: { onChange: _vm.onChangeJob },
                            model: {
                              value: _vm.form.job,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "job", $$v)
                              },
                              expression: "form.job"
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
                              rules: _vm.mixin_validation.required.concat(
                                _vm.mixin_validation.minLength(100)
                              ),
                              counter: 100,
                              "error-messages": _vm.errors.code,
                              label: "Code",
                              required: ""
                            },
                            on: {
                              input: function($event) {
                                _vm.errors.code = []
                              }
                            },
                            model: {
                              value: _vm.form.code,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "code", $$v)
                              },
                              expression: "form.code"
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
                          _c("v-text-field", {
                            attrs: {
                              rules: _vm.mixin_validation.required.concat(
                                _vm.mixin_validation.minLength(100)
                              ),
                              counter: 100,
                              "error-messages": _vm.errors.first_name,
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
                                _vm.$set(_vm.form, "first_name", $$v)
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
                              counter: 100,
                              "error-messages": _vm.errors.middle_name,
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
                                _vm.$set(_vm.form, "middle_name", $$v)
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
                              rules: _vm.mixin_validation.required.concat(
                                _vm.mixin_validation.minLength(100)
                              ),
                              counter: 100,
                              "error-messages": _vm.errors.last_name,
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
                                _vm.$set(_vm.form, "last_name", $$v)
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
                              counter: 30,
                              items: ["Jr", "Sr", "II", "III"],
                              "error-messages": _vm.errors.suffix,
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
                                _vm.$set(_vm.form, "suffix", $$v)
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
                              rules: _vm.mixin_validation.required,
                              items: ["Male", "Female"],
                              "error-messages": _vm.errors.gender,
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
                                _vm.$set(_vm.form, "gender", $$v)
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
                                "close-on-content-click": false,
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
                                                  _vm.mixin_validation.required,
                                                "error-messages":
                                                  _vm.errors.birthdate,
                                                label: "Birthdate",
                                                readonly: ""
                                              },
                                              on: {
                                                input: function($event) {
                                                  _vm.errors.birthdate = []
                                                }
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
                                    _vm.$set(_vm.form, "birthdate", $$v)
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
                              rules: _vm.mixin_validation.required,
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
                        { attrs: { cols: "12", md: "4" } },
                        [
                          _c("v-text-field", {
                            attrs: {
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
                        { attrs: { cols: "12", md: "4" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              rules: _vm.mixin_validation.required.concat(
                                _vm.mixin_validation.email
                              ),
                              "error-messages": _vm.errors.email,
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
                  !_vm.isEdit
                    ? _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "4" } },
                            [
                              _c("v-checkbox", {
                                attrs: {
                                  label: "has Revolving Fund",
                                  "error-messages": _vm.errors.has_fund
                                },
                                model: {
                                  value: _vm.form.has_fund,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "has_fund", $$v)
                                  },
                                  expression: "form.has_fund"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.form.has_fund && !_vm.isEdit
                    ? _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "4" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Revolving Fund",
                                  "error-messages": _vm.errors.fund,
                                  type: "number"
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.fund = []
                                  }
                                },
                                model: {
                                  value: _vm.form.fund,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "fund", $$v)
                                  },
                                  expression: "form.fund"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-expansion-panel",
            [
              _c("v-expansion-panel-header", [
                _c("div", { staticClass: "overline green--text" }, [
                  _vm._v(
                    "\n                    Account Details\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "v-expansion-panel-content",
                [
                  !_vm.isEdit
                    ? _c("small", { staticClass: "text--secondary" }, [
                        _vm._v(
                          '\n                    Default Password: "password"\n                '
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "4" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              rules: _vm.mixin_validation.required.concat(
                                _vm.mixin_validation.minLength(50)
                              ),
                              counter: 50,
                              "error-messages": _vm.errors.username,
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
                                _vm.$set(_vm.form, "username", $$v)
                              },
                              expression: "form.username"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      !_vm.isEdit
                        ? _c(
                            "v-col",
                            { attrs: { cols: "12", md: "4" } },
                            [
                              _c("v-checkbox", {
                                attrs: {
                                  label: "Active Account",
                                  "error-messages": _vm.errors.is_active
                                },
                                model: {
                                  value: _vm.form.is_active,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "is_active", $$v)
                                  },
                                  expression: "form.is_active"
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.isEdit
                        ? _c(
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
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.isEdit
                        ? _c(
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
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  !_vm.isEdit
                    ? _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            [
                              _c("v-data-table", {
                                attrs: {
                                  "show-select": "",
                                  "items-per-page": -1,
                                  headers: _vm.collections.headers,
                                  items: _vm.collections.permissions,
                                  "group-by": "category"
                                },
                                model: {
                                  value: _vm.form.permissions,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "permissions", $$v)
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
                    : _vm._e()
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
            { staticClass: "text-right" },
            [
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

/***/ "./resources/js/views/pages/admin/users/Form.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/pages/admin/users/Form.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_fc079216___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=fc079216& */ "./resources/js/views/pages/admin/users/Form.vue?vue&type=template&id=fc079216&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/admin/users/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_fc079216___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_fc079216___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/admin/users/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/admin/users/Form.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/pages/admin/users/Form.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/admin/users/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/admin/users/Form.vue?vue&type=template&id=fc079216&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/pages/admin/users/Form.vue?vue&type=template&id=fc079216& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_fc079216___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=fc079216& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/admin/users/Form.vue?vue&type=template&id=fc079216&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_fc079216___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_fc079216___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);