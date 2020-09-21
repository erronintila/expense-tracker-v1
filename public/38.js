(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/reports/Show.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/reports/Show.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      code: "",
      description: "",
      remarks: "",
      notes: "",
      employee: "",
      status: "",
      expenses: [],
      submitted_at: "",
      reviewed_at: "",
      approved_at: "",
      cancelled_at: "",
      created_at: "",
      updated_at: "",
      deleted_at: "",
      total: 0,
      headers: [{
        text: "Expense",
        value: "description"
      }, {
        text: "Date",
        value: "date"
      }, {
        text: "Amount",
        value: "amount"
      }],
      summary: 0,
      report_views: [{
        text: "Detailed Report",
        value: 0
      }, {
        text: "Summary Report",
        value: 1
      }]
    };
  },
  methods: {
    loadItem: function loadItem() {
      var _this = this;

      axios.get("/api/expense_reports/".concat(_this.$route.params.id)).then(function (response) {
        console.log(response.data);
        var data = response.data.data;
        console.log(data.expenses);
        _this.code = data.code;
        _this.description = data.description;
        _this.remarks = data.remarks;
        _this.notes = data.notes;
        _this.employee = "".concat(data.employee.last_name, ", ").concat(data.employee.first_name, " ").concat(data.employee.suffix);
        _this.status = data.status;
        _this.expenses = data.expenses;
        _this.submitted_at = data.submitted_at;
        _this.reviewed_at = data.reviewed_at;
        _this.approved_at = data.approved_at;
        _this.cancelled_at = data.cancelled_at;
        _this.created_at = data.created_at;
        _this.updated_at = data.updated_at;
        _this.deleted_at = data.deleted_at;
        _this.total = data.total;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    viewReport: function viewReport() {
      var _this = this;

      var url = "";

      if (_this.summary) {
        url = "";
      }

      axios.get("/api/data/expense_reports", {
        id: _this.$route.params.id
      }).then(function (response) {
        _this.expenses = response.data.data;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  created: function created() {
    axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("access_token");
    this.loadItem();
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/reports/Show.vue?vue&type=template&id=1df9a518&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/reports/Show.vue?vue&type=template&id=1df9a518& ***!
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
                  attrs: { to: { name: "admin.reports.index" }, icon: "" }
                },
                [_c("v-icon", [_vm._v("mdi-arrow-left")])],
                1
              ),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("h4", { staticClass: "title green--text" }, [
                _vm._v("Expense Report Details")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-container",
            [
              _c(
                "v-row",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "4" } },
                    [
                      _c("v-select", {
                        attrs: {
                          items: _vm.report_views,
                          label: "Report View"
                        },
                        model: {
                          value: _vm.summary,
                          callback: function($$v) {
                            _vm.summary = $$v
                          },
                          expression: "summary"
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
            "v-container",
            [
              _c(
                "v-row",
                [
                  _c("v-col", [
                    _vm._v("\n                    Expense Report "),
                    _c("br"),
                    _vm._v(
                      "\n                    " + _vm._s(_vm.employee) + " "
                    ),
                    _c("br"),
                    _vm._v(
                      "\n                    " + _vm._s(_vm.description) + " "
                    ),
                    _c("br")
                  ]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c("v-col", [
                    _vm._v("\n                    " + _vm._s(_vm.code) + " "),
                    _c("br"),
                    _vm._v(
                      "\n                    Date : 2020-01-01 ~ 2020-01-31\n                "
                    )
                  ])
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
                      _c("v-simple-table", {
                        attrs: { dense: "" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function() {
                              return [
                                _c("thead", [
                                  _c(
                                    "tr",
                                    _vm._l(_vm.headers, function(item) {
                                      return _c("th", { key: item.value }, [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(item.text) +
                                            "\n                                    "
                                        )
                                      ])
                                    }),
                                    0
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  _vm._l(_vm.expenses, function(item) {
                                    return _c("tr", { key: item.id }, [
                                      _c("td", [
                                        _vm._v(_vm._s(item.description))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(item.date))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(item.amount))])
                                    ])
                                  }),
                                  0
                                ),
                                _vm._v(" "),
                                _c("tfoot", [
                                  _c("tr", [
                                    _c("td", { attrs: { colspan: "3" } }, [
                                      _c("hr")
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("tr", [
                                    _c("td", [_vm._v("Total")]),
                                    _vm._v(" "),
                                    _c("td"),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(_vm.total))])
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
                "v-row",
                [_c("v-col", [_c("v-btn", [_vm._v("Print Report")])], 1)],
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

/***/ "./resources/js/views/modules/admin/reports/Show.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/modules/admin/reports/Show.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_1df9a518___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=1df9a518& */ "./resources/js/views/modules/admin/reports/Show.vue?vue&type=template&id=1df9a518&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/reports/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_1df9a518___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_1df9a518___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/reports/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/reports/Show.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/reports/Show.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/reports/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/reports/Show.vue?vue&type=template&id=1df9a518&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/reports/Show.vue?vue&type=template&id=1df9a518& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_1df9a518___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=1df9a518& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/reports/Show.vue?vue&type=template&id=1df9a518&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_1df9a518___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_1df9a518___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);