(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Playground.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Playground.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {},
  data: function data() {
    return {
      fab: false
    };
  },
  methods: {},
  computed: {},
  watch: {},
  created: function created() {}
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
        "v-app-bar",
        { attrs: { color: "deep-purple accent-4", dense: "", dark: "" } },
        [
          _c("v-app-bar-nav-icon"),
          _vm._v(" "),
          _c("v-toolbar-title", [_vm._v("Page title")]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            { attrs: { icon: "" } },
            [_c("v-icon", [_vm._v("mdi-heart")])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            { attrs: { icon: "" } },
            [_c("v-icon", [_vm._v("mdi-magnify")])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-menu",
            {
              attrs: { left: "", bottom: "" },
              scopedSlots: _vm._u([
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
                            { attrs: { icon: "" } },
                            "v-btn",
                            attrs,
                            false
                          ),
                          on
                        ),
                        [_c("v-icon", [_vm._v("mdi-dots-vertical")])],
                        1
                      )
                    ]
                  }
                }
              ])
            },
            [
              _vm._v(" "),
              _c(
                "v-list",
                _vm._l(5, function(n) {
                  return _c(
                    "v-list-item",
                    { key: n, on: { click: function() {} } },
                    [_c("v-list-item-title", [_vm._v("Option " + _vm._s(n))])],
                    1
                  )
                }),
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
        "v-card",
        [
          _c(
            "v-container",
            { attrs: { fluid: "", "grid-list-md": "" } },
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "mx-auto",
                          attrs: { "max-width": "344", outlined: "" }
                        },
                        [
                          _c(
                            "v-list-item",
                            { attrs: { "three-line": "" } },
                            [
                              _c(
                                "v-list-item-content",
                                [
                                  _c("div", { staticClass: "overline mb-4" }, [
                                    _vm._v(
                                      "\n                                    OVERLINE\n                                "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-item-title",
                                    { staticClass: "headline mb-1" },
                                    [
                                      _vm._v(
                                        "\n                                    Headline 5\n                                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("v-list-item-subtitle", [
                                    _vm._v(
                                      "Greyhound divisely hello coldly\n                                    fonwderfully"
                                    )
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-list-item-avatar", {
                                attrs: { tile: "", size: "80", color: "grey" }
                              })
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
                                  attrs: { outlined: "", rounded: "", text: "" }
                                },
                                [
                                  _vm._v(
                                    "\n                                Button\n                            "
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
              _c(
                "v-row",
                [_c("v-col", [_c("v-btn", [_vm._v("Hello World")])], 1)],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                [_c("v-col", [_c("v-btn", [_vm._v("Hello World")])], 1)],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                [_c("v-col", [_c("v-btn", [_vm._v("Hello World")])], 1)],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-speed-dial",
                {
                  staticStyle: { position: "absolute" },
                  attrs: {
                    bottom: "",
                    right: "",
                    direction: "top",
                    transition: "slide-y-reverse-transition"
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "activator",
                      fn: function() {
                        return [
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                color: "green darken-2",
                                dark: "",
                                fab: ""
                              },
                              model: {
                                value: _vm.fab,
                                callback: function($$v) {
                                  _vm.fab = $$v
                                },
                                expression: "fab"
                              }
                            },
                            [
                              _vm.fab
                                ? _c("v-icon", [
                                    _vm._v(
                                      "\n                            mdi-close\n                        "
                                    )
                                  ])
                                : _c("v-icon", [
                                    _vm._v(
                                      "\n                            mdi-account-circle\n                        "
                                    )
                                  ])
                            ],
                            1
                          )
                        ]
                      },
                      proxy: true
                    }
                  ]),
                  model: {
                    value: _vm.fab,
                    callback: function($$v) {
                      _vm.fab = $$v
                    },
                    expression: "fab"
                  }
                },
                [
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    { attrs: { fab: "", dark: "", small: "", color: "green" } },
                    [_c("v-icon", [_vm._v("mdi-pencil")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { fab: "", dark: "", small: "", color: "indigo" }
                    },
                    [_c("v-icon", [_vm._v("mdi-plus")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    { attrs: { fab: "", dark: "", small: "", color: "red" } },
                    [_c("v-icon", [_vm._v("mdi-delete")])],
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