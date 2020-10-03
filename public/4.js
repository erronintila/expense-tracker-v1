(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/components/PrintDetailed.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/expense_reports/components/PrintDetailed.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      total: 0,
      total_amounts: [],
      headers: [],
      items: [],
      expense_report: {
        id: "",
        code: "",
        description: "",
        remarks: "",
        notes: "",
        employee: {
          last_name: "",
          first_name: "",
          middle_name: "",
          suffix: ""
        },
        payment: {},
        expenses: {},
        status: "",
        submitted_at: "",
        reviewed_at: "",
        approved_at: "",
        cancelled_at: "",
        created_at: "",
        updated_at: "",
        deleted_at: "",
        total: 0,
        total_reimbursable: 0
      },
      min_date: "",
      max_date: "",
      column_headers: {}
    };
  },
  methods: {
    loadExpenseTypes: function loadExpenseTypes() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        axios.get("/api/data/expense_types").then(function (response) {
          response.data.data.forEach(function (element) {
            var header = element.name;
            var identifier = element.name.replace(/\s+/g, "_").toLowerCase();
            _this.column_headers[identifier] = 0;

            _this.headers.push({
              text: element.name,
              value: element.name.replace(/\s+/g, "_").toLowerCase(),
              sortable: false,
              divider: true
            });

            _this.total_amounts.push({
              name: header,
              value: 0
            });
          });

          _this.headers.unshift({
            text: "Date",
            value: "date",
            sortable: false,
            divider: true
          });

          _this.headers.push({
            text: "Total",
            value: "total",
            sortable: false
          });

          _this.column_headers["total"] = 0;
          resolve();
        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);
          reject();
        });
      });
    },
    loadExpenses: function loadExpenses() {
      var _this = this;

      _this.loadExpenseTypes().then(function () {
        axios.get("/api/data/print?expense_report_detailed=true&expense_report_id=".concat(_this.$route.params.id)).then(function (response) {
          console.log(response);
          var rows = response.data.data;
          _this.items = rows;
          _this.expense_report = response.data.expense_report;
          _this.min_date = response.data.min_date;
          _this.max_date = response.data.max_date;
        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);
        });
      });
    },
    formatNumber: function formatNumber(data) {
      return numeral__WEBPACK_IMPORTED_MODULE_1___default()(data).format("0,0.00");
    }
  },
  computed: {
    total_amount: function total_amount() {
      return this.formatNumber(this.expense_report.total);
    }
  },
  watch: {
    items: function items() {
      var _this2 = this;

      var _loop = function _loop(key) {
        _this2.column_headers[key] = _this2.items.reduce(function (total, item) {
          return total + item[key];
        }, 0);
      };

      for (var key in this.column_headers) {
        _loop(key);
      }
    }
  },
  created: function created() {
    var _this = this;

    _this.loadExpenses();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/components/PrintSummary.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/expense_reports/components/PrintSummary.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/components/PrintDetailed.vue?vue&type=style&index=0&id=660f0ec8&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/expense_reports/components/PrintDetailed.vue?vue&type=style&index=0&id=660f0ec8&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@media print {\nbody[data-v-660f0ec8] {\r\n        overflow: auto;\r\n        height: auto;\n}\n}\n@page { size: Legal landscape;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/components/PrintDetailed.vue?vue&type=style&index=0&id=660f0ec8&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/expense_reports/components/PrintDetailed.vue?vue&type=style&index=0&id=660f0ec8&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader??ref--6-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PrintDetailed.vue?vue&type=style&index=0&id=660f0ec8&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/components/PrintDetailed.vue?vue&type=style&index=0&id=660f0ec8&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/components/PrintDetailed.vue?vue&type=template&id=660f0ec8&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/expense_reports/components/PrintDetailed.vue?vue&type=template&id=660f0ec8&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "div",
      [
        _c(
          "v-row",
          [
            _c("v-col", [
              _c("div", { staticClass: "title green--text" }, [
                _vm._v("Expense Summary Report")
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "\n                    Employee:\n                    " +
                    _vm._s(
                      _vm.expense_report.employee.last_name +
                        ", " +
                        (_vm.expense_report.employee.first_name || "") +
                        " " +
                        (_vm.expense_report.employee.suffix || "")
                    ) +
                    "\n                "
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "\n                    Description: " +
                    _vm._s(_vm.expense_report.description || "") +
                    "\n                "
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v("Period: " + _vm._s(_vm.min_date + " ~ " + _vm.max_date))
              ])
            ]),
            _vm._v(" "),
            _c("v-col", { staticClass: "text-right" }, [
              _c("div", { staticClass: "title green--text" }, [
                _vm._v(
                  "\n                    # " +
                    _vm._s(_vm.expense_report.code) +
                    "\n                "
                )
              ])
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "v-row",
          { staticClass: "mt-5" },
          [
            _c(
              "v-col",
              [
                _c(
                  "v-data-table",
                  {
                    attrs: {
                      dense: "",
                      "hide-default-footer": true,
                      "disable-pagination": "",
                      headers: _vm.headers,
                      items: _vm.items
                    }
                  },
                  [
                    _vm.items.length > 0
                      ? _c("template", { slot: "body.append" }, [
                          _c(
                            "tr",
                            { staticClass: "green--text hidden-md-and-up" },
                            [
                              _c("td", { staticClass: "title" }, [
                                _vm._v(
                                  "\n                                Total: "
                                ),
                                _c("strong", [_vm._v(_vm._s(0))])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "tr",
                            { staticClass: "green--text hidden-sm-and-down" },
                            [
                              _c("td", [_vm._v("Total")]),
                              _vm._v(" "),
                              _vm._l(_vm.column_headers, function(value, name) {
                                return _c("td", { key: name }, [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(value) +
                                      "\n                            "
                                  )
                                ])
                              })
                            ],
                            2
                          )
                        ])
                      : _vm._e()
                  ],
                  2
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
            _c("v-col", [_c("div", [_vm._v("Grand Total :")])]),
            _vm._v(" "),
            _c("v-col", { staticClass: "text-right" }, [
              _c("div", { staticClass: "headline green--text" }, [
                _vm._v("₱ " + _vm._s(_vm.total_amount))
              ])
            ])
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/components/PrintSummary.vue?vue&type=template&id=49a37084&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/expense_reports/components/PrintSummary.vue?vue&type=template&id=49a37084& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/modules/user/expense_reports/components/PrintDetailed.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/modules/user/expense_reports/components/PrintDetailed.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PrintDetailed_vue_vue_type_template_id_660f0ec8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrintDetailed.vue?vue&type=template&id=660f0ec8&scoped=true& */ "./resources/js/views/modules/user/expense_reports/components/PrintDetailed.vue?vue&type=template&id=660f0ec8&scoped=true&");
/* harmony import */ var _PrintDetailed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrintDetailed.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/user/expense_reports/components/PrintDetailed.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PrintDetailed_vue_vue_type_style_index_0_id_660f0ec8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrintDetailed.vue?vue&type=style&index=0&id=660f0ec8&scoped=true&lang=css& */ "./resources/js/views/modules/user/expense_reports/components/PrintDetailed.vue?vue&type=style&index=0&id=660f0ec8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PrintDetailed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PrintDetailed_vue_vue_type_template_id_660f0ec8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PrintDetailed_vue_vue_type_template_id_660f0ec8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "660f0ec8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/user/expense_reports/components/PrintDetailed.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/user/expense_reports/components/PrintDetailed.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/views/modules/user/expense_reports/components/PrintDetailed.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintDetailed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PrintDetailed.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/components/PrintDetailed.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintDetailed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/user/expense_reports/components/PrintDetailed.vue?vue&type=style&index=0&id=660f0ec8&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************!*\
  !*** ./resources/js/views/modules/user/expense_reports/components/PrintDetailed.vue?vue&type=style&index=0&id=660f0ec8&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintDetailed_vue_vue_type_style_index_0_id_660f0ec8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader??ref--6-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PrintDetailed.vue?vue&type=style&index=0&id=660f0ec8&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/components/PrintDetailed.vue?vue&type=style&index=0&id=660f0ec8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintDetailed_vue_vue_type_style_index_0_id_660f0ec8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintDetailed_vue_vue_type_style_index_0_id_660f0ec8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintDetailed_vue_vue_type_style_index_0_id_660f0ec8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintDetailed_vue_vue_type_style_index_0_id_660f0ec8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintDetailed_vue_vue_type_style_index_0_id_660f0ec8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/modules/user/expense_reports/components/PrintDetailed.vue?vue&type=template&id=660f0ec8&scoped=true&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/views/modules/user/expense_reports/components/PrintDetailed.vue?vue&type=template&id=660f0ec8&scoped=true& ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintDetailed_vue_vue_type_template_id_660f0ec8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PrintDetailed.vue?vue&type=template&id=660f0ec8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/components/PrintDetailed.vue?vue&type=template&id=660f0ec8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintDetailed_vue_vue_type_template_id_660f0ec8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintDetailed_vue_vue_type_template_id_660f0ec8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/modules/user/expense_reports/components/PrintSummary.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/modules/user/expense_reports/components/PrintSummary.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PrintSummary_vue_vue_type_template_id_49a37084___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrintSummary.vue?vue&type=template&id=49a37084& */ "./resources/js/views/modules/user/expense_reports/components/PrintSummary.vue?vue&type=template&id=49a37084&");
/* harmony import */ var _PrintSummary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrintSummary.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/user/expense_reports/components/PrintSummary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PrintSummary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PrintSummary_vue_vue_type_template_id_49a37084___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PrintSummary_vue_vue_type_template_id_49a37084___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/user/expense_reports/components/PrintSummary.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/user/expense_reports/components/PrintSummary.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/views/modules/user/expense_reports/components/PrintSummary.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintSummary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PrintSummary.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/components/PrintSummary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintSummary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/user/expense_reports/components/PrintSummary.vue?vue&type=template&id=49a37084&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/views/modules/user/expense_reports/components/PrintSummary.vue?vue&type=template&id=49a37084& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintSummary_vue_vue_type_template_id_49a37084___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PrintSummary.vue?vue&type=template&id=49a37084& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/components/PrintSummary.vue?vue&type=template&id=49a37084&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintSummary_vue_vue_type_template_id_49a37084___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintSummary_vue_vue_type_template_id_49a37084___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);