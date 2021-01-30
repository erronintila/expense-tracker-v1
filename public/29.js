(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/employees/Create.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/employees/Create.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loader: false,
      panel: [0, 1, 2],
      valid: false,
      menu: false,
      jobs: [],
      permissions: [],
      headers: [{
        text: "Permission",
        value: "name",
        sortable: false
      }],
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
        type: "employee",
        job: null,
        permissions: [],
        role: "Standard User"
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
    loadJobs: function loadJobs() {
      var _this = this;

      axios.get("/api/data/jobs?only=true").then(function (response) {
        _this.jobs = response.data.data;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

        _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
      });
    },
    loadPermissions: function loadPermissions() {
      var _this = this;

      axios.get("/api/data/permissions?role=".concat(_this.form.role)).then(function (response) {
        console.log(response);
        _this.permissions = response.data;
        _this.form.permissions = response.data;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

        _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
      });
    },
    onRefresh: function onRefresh() {
      Object.assign(this.$data, this.$options.data.apply(this));
    },
    changeRole: function changeRole() {
      if (this.form.role == "Administrator") {
        this.form.permissions = this.permissions;
      } else {
        this.form.permissions = [];
      }
    },
    onSave: function onSave() {
      var _this = this;

      var fund = 0;
      var is_administrator = this.form.role == "Administrator" ? true : false;

      if (this.form.has_fund) {
        fund = this.form.fund == "" ? 0 : this.form.fund;
      }

      _this.$refs.form.validate();

      if (_this.$refs.form.validate()) {
        _this.loader = true;
        axios.post("/api/users", {
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
          fund: fund,
          remaining_fund: fund,
          username: _this.form.username,
          email: _this.form.email,
          password: "password",
          password_confirmation: "password",
          is_admin: is_administrator,
          is_superadmin: false,
          can_login: _this.form.can_login,
          type: "",
          permissions: _this.form.permissions,
          job_id: _this.form.job
        }).then(function (response) {
          _this.$dialog.message.success("Employee created successfully.", {
            position: "top-right",
            timeout: 2000
          });

          _this.$router.push({
            name: "admin.users.index"
          });

          _this.loader = false;
        })["catch"](function (error) {
          _this.loader = false;
          console.log(error);
          console.log(error.response);

          if (error.response) {
            if (error.response.data) {
              _this.errors = error.response.data.errors;
            }
          }

          _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
        });
        return;
      }
    }
  },
  computed: {
    maxDate: function maxDate() {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD");
    }
  },
  watch: {
    "form.role": function formRole() {
      this.loadPermissions();
    }
  },
  created: function created() {
    // this.$store.dispatch("AUTH_USER");
    this.loadJobs();
    this.loadPermissions();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/employees/Create.vue?vue&type=template&id=2f24ca26&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/employees/Create.vue?vue&type=template&id=2f24ca26& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
            { staticClass: "elevation-0" },
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
                    _vm._v("New Employee")
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
                                "\n                            Basic Details\n                        "
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
                                      _c("v-autocomplete", {
                                        attrs: {
                                          items: _vm.jobs,
                                          "error-messages": _vm.errors.job_id,
                                          "item-text": "name",
                                          "item-value": "id",
                                          label: "Job Designation *",
                                          required: ""
                                        },
                                        on: {
                                          input: function($event) {
                                            _vm.errors.job_id = []
                                          }
                                        },
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
                                          counter: 100,
                                          "error-messages": _vm.errors.code,
                                          label: "Code *",
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
                                          counter: 100,
                                          "error-messages":
                                            _vm.errors.first_name,
                                          label: "First Name *",
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
                                          counter: 100,
                                          "error-messages":
                                            _vm.errors.last_name,
                                          label: "Last Name *",
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
                                          items: ["Male", "Female"],
                                          "error-messages": _vm.errors.gender,
                                          label: "Gender *",
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
                                                            "error-messages":
                                                              _vm.errors
                                                                .birthdate,
                                                            label:
                                                              "Birthdate *",
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
                                          counter: 30,
                                          "error-messages":
                                            _vm.errors.mobile_number,
                                          label: "Mobile Number *",
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
                                          "error-messages": _vm.errors.email,
                                          label: "Email Address *"
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
                                          "error-messages": _vm.errors.address,
                                          label: "Address *",
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
                              _c(
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
                              ),
                              _vm._v(" "),
                              _vm.form.has_fund
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
                                "\n                            Account Details\n                        "
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-expansion-panel-content",
                            [
                              _c("small", { staticClass: "text--secondary" }, [
                                _vm._v(
                                  '\n                            Default Password: "password"\n                        '
                                )
                              ]),
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
                                          counter: 50,
                                          "error-messages": _vm.errors.username,
                                          label: "Username *",
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

/***/ "./resources/js/views/modules/admin/employees/Create.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/modules/admin/employees/Create.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_2f24ca26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=2f24ca26& */ "./resources/js/views/modules/admin/employees/Create.vue?vue&type=template&id=2f24ca26&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/employees/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_2f24ca26___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_2f24ca26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/employees/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/employees/Create.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/employees/Create.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/employees/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/employees/Create.vue?vue&type=template&id=2f24ca26&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/employees/Create.vue?vue&type=template&id=2f24ca26& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_2f24ca26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=2f24ca26& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/employees/Create.vue?vue&type=template&id=2f24ca26&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_2f24ca26___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_2f24ca26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);