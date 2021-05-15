(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/PageHeader.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/PageHeader.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "page-header",
  props: {
    title: ""
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/admin/analytics/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/admin/analytics/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_page_PageHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/page/PageHeader */ "./resources/js/components/page/PageHeader.vue");
/* harmony import */ var _components_datepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/datepicker/DateRangePicker */ "./resources/js/components/datepicker/DateRangePicker.vue");
/* harmony import */ var _components_selector_dialog_UserDialogSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/selector/dialog/UserDialogSelector */ "./resources/js/components/selector/dialog/UserDialogSelector.vue");
/* harmony import */ var _components_selector_dialog_VendorDialogSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/selector/dialog/VendorDialogSelector */ "./resources/js/components/selector/dialog/VendorDialogSelector.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "analytics",
  components: {
    PageHeader: _components_page_PageHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
    DateRangePicker: _components_datepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_3__["default"],
    UserDialogSelector: _components_selector_dialog_UserDialogSelector__WEBPACK_IMPORTED_MODULE_4__["default"],
    VendorDialogSelector: _components_selector_dialog_VendorDialogSelector__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      formDataLoaded: true,
      date_range: [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("month").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("month").format("YYYY-MM-DD")],
      user: null,
      vendor: null,
      sections: [{
        title: "Expenses",
        links: [{
          path: "admin.analytics.show",
          params: {
            label: "Expense Details",
            slug: "expense-details"
          }
        }, {
          path: "admin.analytics.show",
          params: {
            label: "Expenses by Department",
            slug: "expense-department"
          }
        }, {
          path: "admin.analytics.show",
          params: {
            label: "Expenses by Employee",
            slug: "expense-employee",
            isUserSelector: true
          }
        }, {
          path: "admin.analytics.show",
          params: {
            label: "Expenses by Vendor",
            slug: "expense-vendor",
            isVendorSelector: true
          }
        }, {
          path: "admin.analytics.show",
          params: {
            label: "Expenses by Expense Types",
            slug: "expense-expense-types",
            isExpenseTypeSelector: true
          }
        }, {
          path: "admin.analytics.show",
          params: {
            label: "Tax Summary",
            slug: "tax-summary"
          }
        }]
      }, {
        title: "Expense Reports",
        links: [{
          path: "admin.analytics.show",
          params: {
            label: "Expense Reports Details",
            slug: "expense-report-details"
          }
        }, {
          path: "admin.analytics.show",
          params: {
            label: "Expense Reports by Employee",
            slug: "expense-report-employee"
          }
        }, {
          path: "admin.analytics.show",
          params: {
            label: "Time Taken for Submission",
            slug: "expense-report-time-submission"
          }
        }, {
          path: "admin.analytics.show",
          params: {
            label: "Time Taken for Approval",
            slug: "expense-report-time-approval"
          }
        }]
      }, {
        title: "Payments",
        links: [{
          path: "admin.analytics.show",
          params: {
            label: "Payment Details",
            slug: "payment-details"
          }
        }, {
          path: "admin.analytics.show",
          params: {
            label: "Time Taken for Expense Report Payment",
            slug: "payment-time-payment"
          }
        }, {
          path: "admin.analytics.show",
          params: {
            label: "Time Taken for Payment Confirmation",
            slug: "payment-time-confirmation"
          }
        }]
      }, {
        title: "Employees",
        links: [{
          path: "admin.analytics.show",
          params: {
            label: "Employee Details",
            slug: "employee-details"
          }
        }, {
          path: "admin.analytics.show",
          params: {
            label: "Revolving Fund",
            slug: "payment-revolving-fund"
          }
        }]
      }, {
        title: "Vendors",
        links: [{
          path: "admin.analytics.show",
          params: {
            label: "Vendor Details",
            slug: "vendor-details"
          }
        }]
      }]
    };
  },
  methods: {
    updateDates: function updateDates(e) {
      this.date_range = e;
    },
    selectUser: function selectUser(e) {
      if (e == null || e == undefined) {
        this.user = null;
        return;
      }

      this.user = e;
    },
    resetUser: function resetUser() {
      this.user = null;
    },
    selectVendor: function selectVendor(e) {
      if (e == null || e == undefined) {
        this.vendor = null;
        return;
      }

      this.vendor = e;
    },
    resetVendor: function resetVendor() {
      this.vendor = null;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/PageHeader.vue?vue&type=template&id=f5cf67be&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/PageHeader.vue?vue&type=template&id=f5cf67be& ***!
  \******************************************************************************************************************************************************************************************************************/
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
        "v-card-title",
        { staticClass: "pt-0" },
        [
          _c("h4", { staticClass: "title green--text" }, [
            _vm._v(_vm._s(_vm.title))
          ]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _vm._t("actions")
        ],
        2
      ),
      _vm._v(" "),
      _c("v-card-subtitle", [_vm._t("sub-actions")], 2)
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/admin/analytics/Index.vue?vue&type=template&id=3d407cef&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/admin/analytics/Index.vue?vue&type=template&id=3d407cef& ***!
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
  return _c(
    "div",
    [
      !_vm.formDataLoaded
        ? _c("loader-component")
        : _c(
            "v-card",
            { staticClass: "elevation-0 pt-0" },
            [
              _c("page-header", { attrs: { title: "Analytics" } }),
              _vm._v(" "),
              _c(
                "v-row",
                _vm._l(_vm.sections, function(item, index) {
                  return _c(
                    "v-col",
                    { key: index, attrs: { cols: "12", md: "6" } },
                    [
                      _c("v-card-title", [_vm._v(_vm._s(item.title))]),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        _vm._l(item.links, function(link, index) {
                          return _c(
                            "div",
                            { key: index, staticClass: "my-2" },
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: { name: link.path, params: link.params }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(link.params.label) +
                                      "\n                        "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        }),
                        0
                      )
                    ],
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/page/PageHeader.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/page/PageHeader.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageHeader_vue_vue_type_template_id_f5cf67be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageHeader.vue?vue&type=template&id=f5cf67be& */ "./resources/js/components/page/PageHeader.vue?vue&type=template&id=f5cf67be&");
/* harmony import */ var _PageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageHeader.vue?vue&type=script&lang=js& */ "./resources/js/components/page/PageHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageHeader_vue_vue_type_template_id_f5cf67be___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageHeader_vue_vue_type_template_id_f5cf67be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/page/PageHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/page/PageHeader.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/page/PageHeader.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/PageHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/page/PageHeader.vue?vue&type=template&id=f5cf67be&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/page/PageHeader.vue?vue&type=template&id=f5cf67be& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_template_id_f5cf67be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageHeader.vue?vue&type=template&id=f5cf67be& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/PageHeader.vue?vue&type=template&id=f5cf67be&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_template_id_f5cf67be___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_template_id_f5cf67be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/pages/admin/analytics/Index.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/pages/admin/analytics/Index.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_3d407cef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=3d407cef& */ "./resources/js/views/pages/admin/analytics/Index.vue?vue&type=template&id=3d407cef&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/admin/analytics/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_3d407cef___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_3d407cef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/admin/analytics/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/admin/analytics/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/pages/admin/analytics/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/admin/analytics/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/admin/analytics/Index.vue?vue&type=template&id=3d407cef&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/pages/admin/analytics/Index.vue?vue&type=template&id=3d407cef& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3d407cef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=3d407cef& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/admin/analytics/Index.vue?vue&type=template&id=3d407cef&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3d407cef___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3d407cef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);