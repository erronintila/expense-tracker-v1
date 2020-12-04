(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Playground.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Playground.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      fab: false,
      links: ["Dashboard", "Expenses", "Reports"],
      itemize: false,
      headers: [{
        text: "Dessert (100g serving)",
        align: "start",
        sortable: false,
        value: "name"
      }, {
        text: "Calories",
        value: "calories"
      }, {
        text: "Fat (g)",
        value: "fat"
      }, {
        text: "Carbs (g)",
        value: "carbs"
      }, {
        text: "Protein (g)",
        value: "protein"
      }, {
        text: "Iron (%)",
        value: "iron"
      }],
      desserts: [{
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: "1%"
      }, {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: "1%"
      }, {
        name: "Eclair",
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: "7%"
      }, {
        name: "Cupcake",
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: "8%"
      }]
    };
  },
  methods: {
    loadStatistics: function loadStatistics(start, end, employee_id) {
      var _this = this;

      axios.get("/api/data/statistics?start_date=".concat(moment__WEBPACK_IMPORTED_MODULE_0___default()("2020-01-01").format("YYYY-MM-DD"), "&end_date=").concat(moment__WEBPACK_IMPORTED_MODULE_0___default()("2020-12-31").format("YYYY-MM-DD"), "&employee_id=").concat(employee_id)).then(function (response) {
        console.log(response);
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);
      });
    }
  },
  mounted: function mounted() {
    this.loadStatistics();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Playground.vue?vue&type=template&id=2a00969a&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Playground.vue?vue&type=template&id=2a00969a& ***!
  \********************************************************************************************************************************************************************************************************/
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
        "v-main",
        [
          _c(
            "v-form",
            { ref: "form" },
            [
              _c(
                "v-container",
                [
                  _c(
                    "v-card",
                    { staticClass: "mx-auto mb-4", attrs: { flat: "" } },
                    [
                      _c(
                        "v-list-item",
                        { attrs: { "three-line": "" } },
                        [
                          _c(
                            "v-list-item-content",
                            [
                              _c(
                                "div",
                                { staticClass: "overline green--text mb-4" },
                                [
                                  _vm._v(
                                    "\n                                BASIC DETAILS\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("v-list-item-subtitle", [
                                _vm._v(
                                  "\n                                Note: Lorem ipsum dolor sit, amet\n                                consectetur adipisicing elit. Explicabo enim\n                                eum similique nihil a, repellat, fugiat\n                                debitis placeat, illo ipsa molestias quaerat\n                                excepturi. Labore inventore molestiae a\n                                rerum, omnis expedita!\n                            "
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-container",
                        [
                          _c("v-text-field", { attrs: { label: "Date" } }),
                          _vm._v(" "),
                          _c("v-text-field", { attrs: { label: "Employee" } }),
                          _vm._v(" "),
                          _c("v-text-field", { attrs: { label: "Vendor" } }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: { label: "Receipt No." }
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
            "v-container",
            [
              _c(
                "v-card",
                { staticClass: "mx-auto mb-4", attrs: { outlined: "" } },
                [
                  _c(
                    "v-list-item",
                    { attrs: { "three-line": "" } },
                    [
                      _c(
                        "v-list-item-content",
                        [
                          _c(
                            "v-list-item-title",
                            { staticClass: "headline mb-1" },
                            [
                              _vm._v(
                                "\n                            Basic Information\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("v-list-item-subtitle", [
                            _vm._v(
                              "\n                            Note: Lorem ipsum dolor sit, amet consectetur\n                            adipisicing elit. Explicabo enim eum similique\n                            nihil a, repellat, fugiat debitis placeat, illo\n                            ipsa molestias quaerat excepturi. Labore\n                            inventore molestiae a rerum, omnis expedita!\n                        "
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-container",
                    [
                      _c("v-text-field", { attrs: { label: "Date" } }),
                      _vm._v(" "),
                      _c("v-text-field", { attrs: { label: "Employee" } }),
                      _vm._v(" "),
                      _c("v-text-field", { attrs: { label: "Vendor" } }),
                      _vm._v(" "),
                      _c("v-text-field", { attrs: { label: "Receipt No." } })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card",
                { staticClass: "mx-auto mb-4", attrs: { outlined: "" } },
                [
                  _c(
                    "v-list-item",
                    { attrs: { "three-line": "" } },
                    [
                      _c(
                        "v-list-item-content",
                        [
                          _c(
                            "v-list-item-title",
                            { staticClass: "headline mb-1" },
                            [
                              _vm._v(
                                "\n                            Expense Details\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("v-list-item-subtitle", [
                            _vm._v(
                              "\n                            Note: Lorem ipsum dolor sit, amet consectetur\n                            adipisicing elit. Explicabo enim eum similique\n                            nihil a, repellat, fugiat debitis placeat, illo\n                            ipsa molestias quaerat excepturi. Labore\n                            inventore molestiae a rerum, omnis expedita!\n                        "
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-container",
                    [
                      _c("v-text-field", { attrs: { label: "Expense Type" } }),
                      _vm._v(" "),
                      _c("v-text-field", { attrs: { label: "Sub Type" } }),
                      _vm._v(" "),
                      _c("v-text-field", { attrs: { label: "Description" } }),
                      _vm._v(" "),
                      _c("v-checkbox", {
                        attrs: { label: "Itemize Expenses" },
                        model: {
                          value: _vm.itemize,
                          callback: function($$v) {
                            _vm.itemize = $$v
                          },
                          expression: "itemize"
                        }
                      }),
                      _vm._v(" "),
                      _vm.itemize
                        ? _c(
                            "v-row",
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { staticClass: "text-right" },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        color: "green",
                                        outlined: "",
                                        rounded: "",
                                        text: ""
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                New Item\n                            "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.itemize
                        ? _c("v-data-table", {
                            attrs: {
                              headers: _vm.headers,
                              items: _vm.desserts,
                              "items-per-page": 5
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c("v-text-field", { attrs: { label: "Amount" } }),
                      _vm._v(" "),
                      _c("v-text-field", { attrs: { label: "Tax Rate" } }),
                      _vm._v(" "),
                      _c("v-text-field", { attrs: { label: "Tax Amount" } }),
                      _vm._v(" "),
                      _c("v-textarea", { attrs: { label: "Remarks" } })
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
                            color: "green",
                            outlined: "",
                            rounded: "",
                            text: ""
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Save\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        { attrs: { outlined: "", rounded: "", text: "" } },
                        [
                          _vm._v(
                            "\n                        Cancel\n                    "
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
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Playground.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/Playground.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Playground_vue_vue_type_template_id_2a00969a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Playground.vue?vue&type=template&id=2a00969a& */ "./resources/js/views/Playground.vue?vue&type=template&id=2a00969a&");
/* harmony import */ var _Playground_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Playground.vue?vue&type=script&lang=js& */ "./resources/js/views/Playground.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Playground_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Playground_vue_vue_type_template_id_2a00969a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Playground_vue_vue_type_template_id_2a00969a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Playground.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Playground.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Playground.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Playground_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Playground.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Playground.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Playground_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Playground.vue?vue&type=template&id=2a00969a&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Playground.vue?vue&type=template&id=2a00969a& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Playground_vue_vue_type_template_id_2a00969a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Playground.vue?vue&type=template&id=2a00969a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Playground.vue?vue&type=template&id=2a00969a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Playground_vue_vue_type_template_id_2a00969a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Playground_vue_vue_type_template_id_2a00969a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);