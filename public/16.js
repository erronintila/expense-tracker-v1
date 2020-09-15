(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/employees/Show.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/employees/Show.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      selection: 1,
      panel: [0, 1],
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
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.get("/api/employees/".concat(_this.$route.params.id)).then(function (response) {
        var data = response.data.data;
        _this.fullname = data.fullname;
        _this.first_name = data.first_name;
        _this.middle_name = data.middle_name;
        _this.last_name = data.last_name;
        _this.suffix = data.suffix;
        _this.gender = data.gender;
        _this.birthdate = data.birthdate;
        _this.mobile_number = data.mobile_number;
        _this.telephone_number = data.telephone_number;
        _this.email = data.email;
        _this.address = data.address;
        _this.job = data.job.name;
        _this.department = data.department.name;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  created: function created() {
    axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("access_token");
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/employees/Show.vue?vue&type=template&id=912b22a4&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/employees/Show.vue?vue&type=template&id=912b22a4& ***!
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
              _c(
                "v-btn",
                {
                  staticClass: "mr-3",
                  attrs: { to: { name: "admin.employees.index" }, icon: "" }
                },
                [_c("v-icon", [_vm._v("mdi-arrow-left")])],
                1
              ),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("h4", { staticClass: "title green--text" }, [
                _vm._v("Employee Details")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "6" } },
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
                                    attrs: { elevation: hover ? 5 : 2 }
                                  },
                                  [
                                    _c(
                                      "v-card-text",
                                      [
                                        _c(
                                          "v-row",
                                          [
                                            _c(
                                              "v-col",
                                              {
                                                attrs: { cols: "12", sm: "5" }
                                              },
                                              [
                                                _c(
                                                  "v-avatar",
                                                  {
                                                    staticClass: "profile",
                                                    attrs: {
                                                      color: "grey",
                                                      size: "200",
                                                      tile: ""
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
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              {
                                                attrs: { cols: "12", sm: "7" }
                                              },
                                              [
                                                _c("div", [
                                                  _vm._v(
                                                    "\n                                            " +
                                                      _vm._s(_vm.department) +
                                                      "\n                                        "
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
                                                      "\n                                            " +
                                                        _vm._s(
                                                          _vm.last_name +
                                                            ", " +
                                                            _vm.first_name +
                                                            " " +
                                                            _vm.suffix
                                                        ) +
                                                        "\n                                        "
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("p", [
                                                  _vm._v(_vm._s(_vm.job))
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "text--primary"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                            " +
                                                        _vm._s(
                                                          _vm.mobile_number
                                                        )
                                                    ),
                                                    _c("br"),
                                                    _vm._v(
                                                      "\n                                            " +
                                                        _vm._s(_vm.email) +
                                                        "\n                                        "
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
                                      "v-card-actions",
                                      [
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: { text: "", color: "green" }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                    Edit Info\n                                "
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
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
                    { attrs: { cols: "12", md: "6" } },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "6", md: "6" } },
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
                                            staticClass: "mx-auto",
                                            attrs: { elevation: hover ? 5 : 2 }
                                          },
                                          [
                                            _c("v-card-title", [
                                              _vm._v("Revolving Fund")
                                            ]),
                                            _vm._v(" "),
                                            _c("v-card-subtitle", [
                                              _vm._v(
                                                "\n                                        Secondary text\n                                    "
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("v-card-text", [
                                              _vm._v(
                                                "\n                                        Go to user profile and configure.\n                                    "
                                              )
                                            ])
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
                            { attrs: { cols: "6", md: "6" } },
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
                                            staticClass: "mx-auto",
                                            attrs: {
                                              elevation: hover ? 5 : 2,
                                              to: "/admin/expenses"
                                            }
                                          },
                                          [
                                            _c("v-card-title", [
                                              _vm._v("Expenses")
                                            ]),
                                            _vm._v(" "),
                                            _c("v-card-subtitle", [
                                              _vm._v(
                                                "\n                                        Secondary text\n                                    "
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("v-card-text", [
                                              _vm._v(
                                                "\n                                        Go to user profile and configure.\n                                    "
                                              )
                                            ])
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
                            { attrs: { cols: "6", md: "6" } },
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
                                            staticClass: "mx-auto",
                                            attrs: { elevation: hover ? 5 : 2 }
                                          },
                                          [
                                            _c("v-card-title", [
                                              _vm._v(
                                                "\n                                        Reimbursements\n                                    "
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("v-card-subtitle", [
                                              _vm._v(
                                                "\n                                        Secondary text\n                                    "
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("v-card-text", [
                                              _vm._v(
                                                "\n                                        Go to user profile and configure.\n                                    "
                                              )
                                            ])
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
                            { attrs: { cols: "6", md: "6" } },
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
                                            staticClass: "mx-auto",
                                            attrs: {
                                              elevation: hover ? 5 : 2,
                                              to: "/admin/reports"
                                            }
                                          },
                                          [
                                            _c("v-card-title", [
                                              _vm._v("Reports")
                                            ]),
                                            _vm._v(" "),
                                            _c("v-card-subtitle", [
                                              _vm._v(
                                                "\n                                        Secondary text\n                                    "
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("v-card-text", [
                                              _vm._v(
                                                "\n                                        Go to user profile and configure.\n                                    "
                                              )
                                            ])
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
                "v-row",
                [
                  _c("v-col", { attrs: { cols: "12" } }, [
                    _c(
                      "div",
                      [
                        _c(
                          "v-expansion-panels",
                          {
                            attrs: { hover: "" },
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
                                  _vm._v(
                                    "\n                                    Other Details\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "v-expansion-panel-content",
                                  [
                                    _c("v-simple-table", {
                                      scopedSlots: _vm._u([
                                        {
                                          key: "default",
                                          fn: function() {
                                            return [
                                              _c("tbody", [
                                                _c("tr", [
                                                  _c("td", [_vm._v("Name")]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(_vm._s(_vm.fullname))
                                                  ])
                                                ]),
                                                _vm._v(" "),
                                                _c("tr", [
                                                  _c("td", [_vm._v("Gender")]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(_vm._s(_vm.gender))
                                                  ])
                                                ]),
                                                _vm._v(" "),
                                                _c("tr", [
                                                  _c("td", [
                                                    _vm._v("Birthdate")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      _vm._s(_vm.birthdate)
                                                    )
                                                  ])
                                                ]),
                                                _vm._v(" "),
                                                _c("tr", [
                                                  _c("td", [
                                                    _vm._v(
                                                      "\n                                                        Telephone Number\n                                                    "
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      "\n                                                        " +
                                                        _vm._s(
                                                          _vm.telephone_number
                                                        ) +
                                                        "\n                                                    "
                                                    )
                                                  ])
                                                ]),
                                                _vm._v(" "),
                                                _c("tr", [
                                                  _c("td", [_vm._v("Address")]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(_vm._s(_vm.address))
                                                  ])
                                                ])
                                              ])
                                            ]
                                          },
                                          proxy: true
                                        }
                                      ])
                                    })
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
                                  _vm._v(
                                    "\n                                    Itinerary\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("v-expansion-panel-content", [
                                  _vm._v(
                                    "\n                                    Lorem ipsum dolor sit amet, consectetur\n                                    adipiscing elit, sed do eiusmod tempor\n                                    incididunt ut labore et dolore magna\n                                    aliqua. Ut enim ad minim veniam, quis\n                                    nostrud exercitation ullamco laboris\n                                    nisi ut aliquip ex ea commodo consequat.\n                                "
                                  )
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-expansion-panel",
                              [
                                _c("v-expansion-panel-header", [
                                  _vm._v(
                                    "\n                                    Activities\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("v-expansion-panel-content", [
                                  _vm._v(
                                    "\n                                    Lorem ipsum dolor sit amet, consectetur\n                                    adipiscing elit, sed do eiusmod tempor\n                                    incididunt ut labore et dolore magna\n                                    aliqua. Ut enim ad minim veniam, quis\n                                    nostrud exercitation ullamco laboris\n                                    nisi ut aliquip ex ea commodo consequat.\n                                "
                                  )
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ])
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

/***/ "./resources/js/views/modules/admin/employees/Show.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/modules/admin/employees/Show.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_912b22a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=912b22a4& */ "./resources/js/views/modules/admin/employees/Show.vue?vue&type=template&id=912b22a4&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/employees/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_912b22a4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_912b22a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/employees/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/employees/Show.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/employees/Show.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/employees/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/employees/Show.vue?vue&type=template&id=912b22a4&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/employees/Show.vue?vue&type=template&id=912b22a4& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_912b22a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=912b22a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/employees/Show.vue?vue&type=template&id=912b22a4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_912b22a4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_912b22a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);