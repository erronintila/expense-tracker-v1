(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/vendors/Show.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/vendors/Show.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      panel: [],
      code: "",
      name: "",
      email: "",
      tin: "",
      contact_person: "",
      mobile_number: "",
      telephone_number: "",
      remarks: "",
      website: "",
      is_vat_inclusive: false,
      address: ""
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.get("/api/vendors/".concat(_this.$route.params.id)).then(function (response) {
        var data = response.data.data;
        _this.code = data.code;
        _this.name = data.name;
        _this.email = data.email;
        _this.tin = data.tin == null ? "N/A" : data.tin;
        _this.contact_person = data.contact_person;
        _this.mobile_number = data.mobile_number;
        _this.telephone_number = data.telephone_number;
        _this.remarks = data.remarks;
        _this.website = data.website;
        _this.is_vat_inclusive = data.is_vat_inclusive;
        _this.address = data.address;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);
      });
    },
    editData: function editData() {
      this.$router.push({
        name: "admin.vendors.edit",
        params: {
          id: this.$route.params.id
        }
      });
    }
  },
  created: function created() {
    axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("access_token");
    this.getData();
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/vendors/Show.vue?vue&type=template&id=330f7488&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/vendors/Show.vue?vue&type=template&id=330f7488& ***!
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
              _c("h4", { staticClass: "title green--text" }, [
                _vm._v("Vendor Details")
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
                                                    "TIN : " + _vm._s(_vm.tin)
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
                                                      "\n                                            " +
                                                        _vm._s(_vm.name) +
                                                        "\n                                        "
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("p", [
                                                  _vm._v(_vm._s(_vm.email))
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "text--primary"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                            Contact Person:\n                                            " +
                                                        _vm._s(
                                                          _vm.contact_person
                                                        )
                                                    ),
                                                    _c("br"),
                                                    _vm._v(
                                                      "\n                                            " +
                                                        _vm._s(
                                                          _vm.mobile_number
                                                        ) +
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
                                            attrs: { text: "", color: "green" },
                                            on: { click: _vm.editData }
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
                    [_c("v-row")],
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
                                    attrs: {
                                      outlined: "",
                                      elevation: hover ? 5 : 2
                                    }
                                  },
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
                                                "\n                                        Other Details\n                                    "
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "v-expansion-panel-content",
                                              [
                                                _c("v-simple-table", {
                                                  scopedSlots: _vm._u(
                                                    [
                                                      {
                                                        key: "default",
                                                        fn: function() {
                                                          return [
                                                            _c("tbody", [
                                                              _c("tr", [
                                                                _c("td", [
                                                                  _vm._v("Code")
                                                                ]),
                                                                _vm._v(" "),
                                                                _c("td", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      _vm.code
                                                                    )
                                                                  )
                                                                ])
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c("td", [
                                                                  _vm._v(
                                                                    "\n                                                            Telephone Number\n                                                        "
                                                                  )
                                                                ]),
                                                                _vm._v(" "),
                                                                _c("td", [
                                                                  _vm._v(
                                                                    "\n                                                            " +
                                                                      _vm._s(
                                                                        _vm.telephone_number
                                                                      ) +
                                                                      "\n                                                        "
                                                                  )
                                                                ])
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c("td", [
                                                                  _vm._v(
                                                                    "Website"
                                                                  )
                                                                ]),
                                                                _vm._v(" "),
                                                                _c("td", [
                                                                  _vm._v(
                                                                    "\n                                                            " +
                                                                      _vm._s(
                                                                        _vm.website
                                                                      ) +
                                                                      "\n                                                        "
                                                                  )
                                                                ])
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c("td", [
                                                                  _vm._v(
                                                                    "\n                                                            VAT Inclusive\n                                                        "
                                                                  )
                                                                ]),
                                                                _vm._v(" "),
                                                                _c("td", [
                                                                  _vm._v(
                                                                    "\n                                                            " +
                                                                      _vm._s(
                                                                        _vm.is_vat_inclusive
                                                                          ? "Yes"
                                                                          : "No"
                                                                      ) +
                                                                      "\n                                                        "
                                                                  )
                                                                ])
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("tr", [
                                                                _c("td", [
                                                                  _vm._v(
                                                                    "Address"
                                                                  )
                                                                ]),
                                                                _vm._v(" "),
                                                                _c("td", [
                                                                  _vm._v(
                                                                    "\n                                                            " +
                                                                      _vm._s(
                                                                        _vm.address
                                                                      ) +
                                                                      "\n                                                        "
                                                                  )
                                                                ])
                                                              ])
                                                            ])
                                                          ]
                                                        },
                                                        proxy: true
                                                      }
                                                    ],
                                                    null,
                                                    true
                                                  )
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

/***/ "./resources/js/views/modules/admin/vendors/Show.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/modules/admin/vendors/Show.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_330f7488___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=330f7488& */ "./resources/js/views/modules/admin/vendors/Show.vue?vue&type=template&id=330f7488&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/vendors/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_330f7488___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_330f7488___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/vendors/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/vendors/Show.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/vendors/Show.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/vendors/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/vendors/Show.vue?vue&type=template&id=330f7488&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/vendors/Show.vue?vue&type=template&id=330f7488& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_330f7488___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=330f7488& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/vendors/Show.vue?vue&type=template&id=330f7488&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_330f7488___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_330f7488___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);