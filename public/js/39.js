(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/errors/404.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/errors/404.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      src: __webpack_require__(/*! ../../assets/img/404.svg */ "./resources/js/assets/img/404.svg")
    };
  },
  computed: {
    isAdmin: function isAdmin() {
      return this.$store.getters.admin;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/errors/404.vue?vue&type=template&id=3a5c70d3&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/errors/404.vue?vue&type=template&id=3a5c70d3& ***!
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
    "v-container",
    { attrs: { "fill-height": "", fluid: "" } },
    [
      _c(
        "v-row",
        { attrs: { align: "center", justify: "center" } },
        [
          _c(
            "v-col",
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "6" } },
                    [
                      _c(
                        "v-container",
                        [
                          _c("v-img", {
                            staticClass: "ml-15",
                            attrs: { src: _vm.src }
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
                    { attrs: { cols: "12", md: "6" } },
                    [
                      _c(
                        "v-container",
                        [
                          _c(
                            "v-layout",
                            { attrs: { row: "", wrap: "" } },
                            [
                              _c(
                                "v-flex",
                                { attrs: { xs12: "" } },
                                [
                                  _c(
                                    "v-card",
                                    {
                                      staticClass: "mt-md-10",
                                      attrs: { color: "transparent", flat: "" }
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "display-3 mt-5 mb-3" },
                                        [
                                          _vm._v(
                                            "\n                                        Page not found.\n                                    "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "grey--text lighten-5" },
                                        [
                                          _vm._v(
                                            "\n                                        We could not find the page you were\n                                        looking for.\n                                    "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "paragraph-text mt-2" },
                                        [
                                          _c("br"),
                                          _vm._v(" "),
                                          _c("br"),
                                          _vm._v(
                                            "Try going back to previous\n                                        page and repeating your action. Or,\n                                        contact helpdesk for support.\n                                    "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "mt-4" },
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              on: {
                                                click: function($event) {
                                                  return _vm.$router.go(-1)
                                                }
                                              }
                                            },
                                            [_vm._v("Go back")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                to:
                                                  (_vm.isAdmin
                                                    ? "/admin/"
                                                    : "/") + "dashboard"
                                              }
                                            },
                                            [_vm._v("Go to dashboard")]
                                          )
                                        ],
                                        1
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

/***/ "./resources/js/assets/img/404.svg":
/*!*****************************************!*\
  !*** ./resources/js/assets/img/404.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/404.svg?31660f0e326ad5b6eff7642027ecdd92";

/***/ }),

/***/ "./resources/js/views/errors/404.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/errors/404.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _404_vue_vue_type_template_id_3a5c70d3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./404.vue?vue&type=template&id=3a5c70d3& */ "./resources/js/views/errors/404.vue?vue&type=template&id=3a5c70d3&");
/* harmony import */ var _404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./404.vue?vue&type=script&lang=js& */ "./resources/js/views/errors/404.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _404_vue_vue_type_template_id_3a5c70d3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _404_vue_vue_type_template_id_3a5c70d3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/errors/404.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/errors/404.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/errors/404.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./404.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/errors/404.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/errors/404.vue?vue&type=template&id=3a5c70d3&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/errors/404.vue?vue&type=template&id=3a5c70d3& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_template_id_3a5c70d3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./404.vue?vue&type=template&id=3a5c70d3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/errors/404.vue?vue&type=template&id=3a5c70d3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_template_id_3a5c70d3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_template_id_3a5c70d3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);