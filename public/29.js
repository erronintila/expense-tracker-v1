(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/employees/Edit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/employees/Edit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      valid: false,
      first_name: "",
      middle_name: "",
      last_name: "",
      suffix: "",
      gender: "",
      birthdate: null,
      job: null,
      jobs: [],
      mobile_number: null,
      telephone_number: "",
      email: null,
      address: null,
      menu: false,
      // fund: 0,
      // remaining_fund: 0,
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
        }] // fund: [v => parseFloat(v) >= 0 || "This field is required"]

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
        address: [] // fund: []

      }
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.get("/api/employees/" + _this.$route.params.id).then(function (response) {
        var data = response.data.data;
        _this.first_name = data.first_name;
        _this.middle_name = data.middle_name;
        _this.last_name = data.last_name;
        _this.suffix = data.suffix;
        _this.gender = data.gender;
        _this.birthdate = data.birthdate;
        _this.job = data.job.id;
        _this.mobile_number = data.mobile_number;
        _this.telephone_number = data.telephone_number;
        _this.email = data.email;
        _this.address = data.address; // _this.fund = data.fund;
        // _this.remaining_fund = data.remaining_fund;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);
      });
    },
    loadJobs: function loadJobs() {
      var _this = this;

      axios.get("/api/data/jobs").then(function (response) {
        _this.jobs = response.data.data;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);
      });
    },
    onRefresh: function onRefresh() {
      Object.assign(this.$data, this.$options.data.apply(this));
    },
    onSave: function onSave() {
      var _this = this;

      _this.$refs.form.validate();

      if (_this.$refs.form.validate()) {
        axios.put("/api/employees/" + _this.$route.params.id, {
          action: "update",
          first_name: _this.first_name,
          middle_name: _this.middle_name,
          last_name: _this.last_name,
          suffix: _this.suffix,
          gender: _this.gender,
          birthdate: _this.birthdate,
          job_id: _this.job,
          mobile_number: _this.mobile_number,
          telephone_number: _this.telephone_number,
          email: _this.email,
          address: _this.address // fund: _this.fund,

        }).then(function (response) {
          // _this.onRefresh();
          _this.$dialog.message.success("Employee updated successfully.", {
            position: "top-right",
            timeout: 2000
          });

          _this.$router.push({
            name: "admin.employees.index"
          });
        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);
          _this.errors = error.response.data.errors;
        });
        return;
      }
    }
  },
  created: function created() {
    axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("access_token");
    this.loadJobs();
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/employees/Edit.vue?vue&type=template&id=2b19b33b&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/employees/Edit.vue?vue&type=template&id=2b19b33b& ***!
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
    "div",
    [
      _c(
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
                _vm._v("Edit Employee")
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
                "v-container",
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
                              rules: _vm.rules.job,
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
                              value: _vm.job,
                              callback: function($$v) {
                                _vm.job = $$v
                              },
                              expression: "job"
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
                              rules: _vm.rules.first_name,
                              counter: 100,
                              "error-messages": _vm.errors.first_name,
                              label: "First Name *",
                              required: ""
                            },
                            on: {
                              input: function($event) {
                                _vm.errors.first_name = []
                              }
                            },
                            model: {
                              value: _vm.first_name,
                              callback: function($$v) {
                                _vm.first_name = $$v
                              },
                              expression: "first_name"
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
                              "error-messages": _vm.errors.middle_name,
                              label: "Middle Name"
                            },
                            on: {
                              input: function($event) {
                                _vm.errors.middle_name = []
                              }
                            },
                            model: {
                              value: _vm.middle_name,
                              callback: function($$v) {
                                _vm.middle_name = $$v
                              },
                              expression: "middle_name"
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
                              "error-messages": _vm.errors.last_name,
                              label: "Last Name *",
                              required: ""
                            },
                            on: {
                              input: function($event) {
                                _vm.errors.last_name = []
                              }
                            },
                            model: {
                              value: _vm.last_name,
                              callback: function($$v) {
                                _vm.last_name = $$v
                              },
                              expression: "last_name"
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
                              "error-messages": _vm.errors.suffix,
                              label: "Suffix"
                            },
                            on: {
                              input: function($event) {
                                _vm.errors.suffix = []
                              }
                            },
                            model: {
                              value: _vm.suffix,
                              callback: function($$v) {
                                _vm.suffix = $$v
                              },
                              expression: "suffix"
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
                              value: _vm.gender,
                              callback: function($$v) {
                                _vm.gender = $$v
                              },
                              expression: "gender"
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
                                                rules: _vm.rules.birthdate,
                                                "error-messages":
                                                  _vm.errors.birthdate,
                                                label: "Birthdate *",
                                                readonly: ""
                                              },
                                              on: {
                                                input: function($event) {
                                                  _vm.errors.birthdate = []
                                                }
                                              },
                                              model: {
                                                value: _vm.birthdate,
                                                callback: function($$v) {
                                                  _vm.birthdate = $$v
                                                },
                                                expression: "birthdate"
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
                                  value: _vm.birthdate,
                                  callback: function($$v) {
                                    _vm.birthdate = $$v
                                  },
                                  expression: "birthdate"
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
                              "error-messages": _vm.errors.mobile_number,
                              label: "Mobile Number *"
                            },
                            on: {
                              input: function($event) {
                                _vm.errors.mobile_number = []
                              }
                            },
                            model: {
                              value: _vm.mobile_number,
                              callback: function($$v) {
                                _vm.mobile_number = $$v
                              },
                              expression: "mobile_number"
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
                              "error-messages": _vm.errors.telephone_number,
                              label: "Telephone Number"
                            },
                            on: {
                              input: function($event) {
                                _vm.errors.telephone_number = []
                              }
                            },
                            model: {
                              value: _vm.telephone_number,
                              callback: function($$v) {
                                _vm.telephone_number = $$v
                              },
                              expression: "telephone_number"
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
                              "error-messages": _vm.errors.email,
                              label: "Email Address *"
                            },
                            on: {
                              input: function($event) {
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
                              rules: _vm.rules.address,
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
                              value: _vm.address,
                              callback: function($$v) {
                                _vm.address = $$v
                              },
                              expression: "address"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("small", { staticClass: "text--secondary" }, [
                    _vm._v(
                      "\n                    * indicates required field\n                "
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/modules/admin/employees/Edit.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/modules/admin/employees/Edit.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_2b19b33b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=2b19b33b& */ "./resources/js/views/modules/admin/employees/Edit.vue?vue&type=template&id=2b19b33b&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/employees/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_2b19b33b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_2b19b33b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/employees/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/employees/Edit.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/employees/Edit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/employees/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/employees/Edit.vue?vue&type=template&id=2b19b33b&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/employees/Edit.vue?vue&type=template&id=2b19b33b& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_2b19b33b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=2b19b33b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/employees/Edit.vue?vue&type=template&id=2b19b33b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_2b19b33b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_2b19b33b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);