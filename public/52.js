(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/settings/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/settings/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      settings: {
        company_name: "Twin-Circa Marketing",
        currency: "Philippine Peso",
        expiry_period: 1,
        expense_encoding_period: 1,
        submission_date: "Weekly",
        approval_period: 1
      },
      panel: [0, 1, 2, 3]
    };
  },
  methods: {
    onLoad: function onLoad() {
      var _this = this;

      axios.get("/api/settings").then(function (response) {
        // console.log(response);
        _this.settings = response.data;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

        _this.mixin_errorDialog(error.response.status, error.response.statusText);
      });
    },
    onSave: function onSave() {
      var _this = this; // let settings = Object.assign(
      //     this.general_settings,
      //     this.expense_settings,
      //     this.expense_report_settings
      // );


      axios.post("/api/settings", {
        settings: _this.settings
      }).then(function (response) {
        console.log(response);

        _this.mixin_successDialog("Success", "Saved settings successfully");

        _this.$store.dispatch("AUTH_USER");
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

        _this.mixin_errorDialog(error.response.status, error.response.statusText);
      });
    }
  },
  created: function created() {
    this.$store.dispatch("AUTH_USER");
    this.onLoad();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/settings/Index.vue?vue&type=template&id=2bdf5f8d&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/settings/Index.vue?vue&type=template&id=2bdf5f8d& ***!
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
              _c("h4", { staticClass: "title green--text" }, [
                _vm._v("Settings")
              ]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "green", dark: "" },
                  on: { click: _vm.onSave }
                },
                [_vm._v("Save Changes")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-expansion-panels",
            {
              attrs: { multiple: "" },
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
                    _c("div", { staticClass: "green--text" }, [
                      _vm._v(
                        "\n                        Expenses\n                    "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-expansion-panel-content",
                    [
                      _c(
                        "v-container",
                        [
                          _c(
                            "v-form",
                            { ref: "formExpenses" },
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", md: "4" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Expense Encoding Period",
                                          suffix: "days",
                                          hint:
                                            "Allowed period for expenses to be encoded based on date",
                                          "persistent-hint": ""
                                        },
                                        model: {
                                          value:
                                            _vm.settings
                                              .expense_encoding_period,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.settings,
                                              "expense_encoding_period",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "settings.expense_encoding_period"
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
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-expansion-panel",
                [
                  _c("v-expansion-panel-header", [
                    _c("div", { staticClass: "green--text" }, [
                      _vm._v(
                        "\n                        Expense Reports\n                    "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-expansion-panel-content",
                    [
                      _c(
                        "v-container",
                        [
                          _c(
                            "v-form",
                            { ref: "formExpenseReports" },
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", md: "4" } },
                                    [
                                      _c("v-select", {
                                        attrs: {
                                          label: "Submission Date",
                                          items: ["Daily", "Weekly", "Monthly"],
                                          hint:
                                            "Due date for submission of expense reports",
                                          "persistent-hint": ""
                                        },
                                        model: {
                                          value: _vm.settings.submission_date,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.settings,
                                              "submission_date",
                                              $$v
                                            )
                                          },
                                          expression: "settings.submission_date"
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
                                          label: "Approval Period",
                                          suffix: "days",
                                          hint:
                                            "Allowed period for expense reports to be approved based on submission date",
                                          "persistent-hint": "",
                                          type: "number"
                                        },
                                        model: {
                                          value: _vm.settings.approval_period,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.settings,
                                              "approval_period",
                                              $$v
                                            )
                                          },
                                          expression: "settings.approval_period"
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

/***/ "./resources/js/views/modules/admin/settings/Index.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/modules/admin/settings/Index.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_2bdf5f8d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=2bdf5f8d& */ "./resources/js/views/modules/admin/settings/Index.vue?vue&type=template&id=2bdf5f8d&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/settings/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_2bdf5f8d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_2bdf5f8d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/settings/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/settings/Index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/settings/Index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/settings/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/settings/Index.vue?vue&type=template&id=2bdf5f8d&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/settings/Index.vue?vue&type=template&id=2bdf5f8d& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_2bdf5f8d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=2bdf5f8d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/settings/Index.vue?vue&type=template&id=2bdf5f8d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_2bdf5f8d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_2bdf5f8d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);