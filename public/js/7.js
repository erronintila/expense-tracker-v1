(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selector/dropdown/Jobs.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/selector/dropdown/Jobs.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    department_id: {
      type: Number,
      "default": null
    },
    selectedJob: {
      type: Object,
      "default": null
    },
    showAll: {
      type: Boolean,
      "default": false
    },
    errors: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    rules: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      defaultValue: {
        id: null,
        name: "All Job Designations"
      },
      items: []
    };
  },
  methods: {
    getData: function getData(department_id) {
      var _this = this;

      axios.get("/api/data/jobs?only=true", {
        params: {
          department_id: department_id
        }
      }).then(function (response) {
        _this.items = response.data.data;

        if (_this.showAll) {
          _this.items.unshift(_this.defaultValue);
        }
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);
      });
    },
    changeData: function changeData(e) {
      this.computedSelectedJob = e;
      this.getData(this.department_id);
      this.$emit("changeData", e);
    },
    resetData: function resetData(department_id) {
      this.computedSelectedJob = this.showAll ? this.defaultValue : null;
      this.getData(department_id);
    }
  },
  computed: {
    computedSelectedJob: {
      get: function get() {
        return this.selectedJob;
      },
      set: function set(value) {
        return value;
      }
    }
  },
  created: function created() {
    this.resetData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/users/Form.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/users/Form.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_selector_dropdown_Jobs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/selector/dropdown/Jobs */ "./resources/js/components/selector/dropdown/Jobs.vue");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    JobSelector: _components_selector_dropdown_Jobs__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    form: {
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
      }
    };
  },
  methods: {
    onChangeJob: function onChangeJob(e) {
      this.errors.job_id = [];
      this.userForm.job = e;
    },
    onSave: function onSave() {
      if (!this.$refs.form.validate()) {
        return;
      }

      this.$emit("onSave", this.userForm);
    },
    loadPermissions: function loadPermissions() {
      var _this = this;

      axios.get("/api/data/permissions?role=".concat(this.userForm.role)).then(function (response) {
        _this.collections.permissions = response.data;
        _this.userForm.permissions = response.data;
      })["catch"](function (error) {
        _this.mixin_showErrors(error);
      });
    }
  },
  computed: {
    userForm: {
      get: function get() {
        return this.form;
      },
      set: function set(value) {
        return value;
      }
    },
    maxDate: function maxDate() {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD");
    }
  },
  watch: {
    "userForm.role": function userFormRole() {
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selector/dropdown/Jobs.vue?vue&type=template&id=2561af8f&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/selector/dropdown/Jobs.vue?vue&type=template&id=2561af8f& ***!
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
  return _c("v-autocomplete", {
    attrs: {
      label: "Job Designation",
      items: _vm.items,
      "item-value": "id",
      "item-text": "name",
      "return-object": "",
      "error-messages": _vm.errors,
      rules: _vm.rules
    },
    on: { change: _vm.changeData },
    model: {
      value: _vm.computedSelectedJob,
      callback: function($$v) {
        _vm.computedSelectedJob = $$v
      },
      expression: "computedSelectedJob"
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/users/Form.vue?vue&type=template&id=30f5d952&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/users/Form.vue?vue&type=template&id=30f5d952& ***!
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
                          _c("JobSelector", {
                            ref: "jobSelector",
                            attrs: {
                              showAll: false,
                              rules: _vm.mixin_validation.required,
                              errors: _vm.errors.job_id,
                              selectedJob: _vm.userForm.job
                            },
                            on: { changeData: _vm.onChangeJob },
                            model: {
                              value: _vm.userForm.job,
                              callback: function($$v) {
                                _vm.$set(_vm.userForm, "job", $$v)
                              },
                              expression: "userForm.job"
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
                              value: _vm.userForm.code,
                              callback: function($$v) {
                                _vm.$set(_vm.userForm, "code", $$v)
                              },
                              expression: "userForm.code"
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
                              value: _vm.userForm.first_name,
                              callback: function($$v) {
                                _vm.$set(_vm.userForm, "first_name", $$v)
                              },
                              expression: "userForm.first_name"
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
                              value: _vm.userForm.middle_name,
                              callback: function($$v) {
                                _vm.$set(_vm.userForm, "middle_name", $$v)
                              },
                              expression: "userForm.middle_name"
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
                              value: _vm.userForm.last_name,
                              callback: function($$v) {
                                _vm.$set(_vm.userForm, "last_name", $$v)
                              },
                              expression: "userForm.last_name"
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
                              value: _vm.userForm.suffix,
                              callback: function($$v) {
                                _vm.$set(_vm.userForm, "suffix", $$v)
                              },
                              expression: "userForm.suffix"
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
                              value: _vm.userForm.gender,
                              callback: function($$v) {
                                _vm.$set(_vm.userForm, "gender", $$v)
                              },
                              expression: "userForm.gender"
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
                                                value: _vm.userForm.birthdate,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.userForm,
                                                    "birthdate",
                                                    $$v
                                                  )
                                                },
                                                expression: "userForm.birthdate"
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
                                  value: _vm.userForm.birthdate,
                                  callback: function($$v) {
                                    _vm.$set(_vm.userForm, "birthdate", $$v)
                                  },
                                  expression: "userForm.birthdate"
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
                              value: _vm.userForm.mobile_number,
                              callback: function($$v) {
                                _vm.$set(_vm.userForm, "mobile_number", $$v)
                              },
                              expression: "userForm.mobile_number"
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
                              value: _vm.userForm.telephone_number,
                              callback: function($$v) {
                                _vm.$set(_vm.userForm, "telephone_number", $$v)
                              },
                              expression: "userForm.telephone_number"
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
                              value: _vm.userForm.email,
                              callback: function($$v) {
                                _vm.$set(_vm.userForm, "email", $$v)
                              },
                              expression: "userForm.email"
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
                              value: _vm.userForm.address,
                              callback: function($$v) {
                                _vm.$set(_vm.userForm, "address", $$v)
                              },
                              expression: "userForm.address"
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
                                  value: _vm.userForm.has_fund,
                                  callback: function($$v) {
                                    _vm.$set(_vm.userForm, "has_fund", $$v)
                                  },
                                  expression: "userForm.has_fund"
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
                  _vm.userForm.has_fund && !_vm.isEdit
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
                                  value: _vm.userForm.fund,
                                  callback: function($$v) {
                                    _vm.$set(_vm.userForm, "fund", $$v)
                                  },
                                  expression: "userForm.fund"
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
                  _c("small", { staticClass: "text--secondary" }, [
                    _vm._v(
                      '\n                    Default Password: "password"\n                '
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
                              value: _vm.userForm.username,
                              callback: function($$v) {
                                _vm.$set(_vm.userForm, "username", $$v)
                              },
                              expression: "userForm.username"
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
                                  label: "Allow Login",
                                  "error-messages": _vm.errors.can_login
                                },
                                model: {
                                  value: _vm.userForm.can_login,
                                  callback: function($$v) {
                                    _vm.$set(_vm.userForm, "can_login", $$v)
                                  },
                                  expression: "userForm.can_login"
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
                                    value: _vm.userForm.role,
                                    callback: function($$v) {
                                      _vm.$set(_vm.userForm, "role", $$v)
                                    },
                                    expression: "userForm.role"
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
                                  value: _vm.userForm.permissions,
                                  callback: function($$v) {
                                    _vm.$set(_vm.userForm, "permissions", $$v)
                                  },
                                  expression: "userForm.permissions"
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

/***/ "./resources/js/components/selector/dropdown/Jobs.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/selector/dropdown/Jobs.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Jobs_vue_vue_type_template_id_2561af8f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Jobs.vue?vue&type=template&id=2561af8f& */ "./resources/js/components/selector/dropdown/Jobs.vue?vue&type=template&id=2561af8f&");
/* harmony import */ var _Jobs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Jobs.vue?vue&type=script&lang=js& */ "./resources/js/components/selector/dropdown/Jobs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Jobs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Jobs_vue_vue_type_template_id_2561af8f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Jobs_vue_vue_type_template_id_2561af8f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/selector/dropdown/Jobs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/selector/dropdown/Jobs.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/selector/dropdown/Jobs.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Jobs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Jobs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selector/dropdown/Jobs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Jobs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/selector/dropdown/Jobs.vue?vue&type=template&id=2561af8f&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/selector/dropdown/Jobs.vue?vue&type=template&id=2561af8f& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Jobs_vue_vue_type_template_id_2561af8f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Jobs.vue?vue&type=template&id=2561af8f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selector/dropdown/Jobs.vue?vue&type=template&id=2561af8f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Jobs_vue_vue_type_template_id_2561af8f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Jobs_vue_vue_type_template_id_2561af8f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
    key: "export",
    value: function _export() {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/users/export");
    }
  }]);

  return UserDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new UserDataService());

/***/ }),

/***/ "./resources/js/views/modules/admin/users/Form.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/modules/admin/users/Form.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_30f5d952___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=30f5d952& */ "./resources/js/views/modules/admin/users/Form.vue?vue&type=template&id=30f5d952&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/users/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_30f5d952___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_30f5d952___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/users/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/users/Form.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/modules/admin/users/Form.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/users/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/users/Form.vue?vue&type=template&id=30f5d952&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/users/Form.vue?vue&type=template&id=30f5d952& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_30f5d952___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=30f5d952& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/users/Form.vue?vue&type=template&id=30f5d952&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_30f5d952___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_30f5d952___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);