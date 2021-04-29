(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[62],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/payments/Form.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/payments/Form.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    isEdit: {
      type: Boolean,
      "default": false
    },
    paymentForm: {
      type: Object,
      "default": function _default() {}
    },
    paymentErrors: {
      type: Object,
      "default": function _default() {
        return {
          user_id: [],
          code: [],
          reference_no: [],
          voucher_no: [],
          description: [],
          date: [],
          cheque_no: [],
          cheque_date: [],
          amount: [],
          payee: [],
          payee_address: [],
          payee_phone: [],
          remarks: [],
          notes: [],
          expense_reports: []
        };
      }
    },
    paymentRules: {}
  },
  data: function data() {
    return {
      valid: false,
      menu: false,
      form: {
        id: 0,
        code: "",
        reference_no: "",
        voucher_no: "",
        description: "",
        date: moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD"),
        cheque_no: "",
        cheque_date: "",
        amount: 0,
        payee: "",
        payee_address: "",
        payee_phone: "",
        remarks: "",
        notes: "",
        user: null,
        expense_reports: []
      }
    };
  },
  methods: {
    onSave: function onSave() {
      console.log(this.form);
    }
  },
  computed: {
    maxDate: function maxDate() {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/payments/Form.vue?vue&type=template&id=d713a668&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/payments/Form.vue?vue&type=template&id=d713a668& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
        "v-card",
        { staticClass: "mx-auto mb-4", attrs: { flat: "" } },
        [
          _c("div", { staticClass: "overline green--text" }, [
            _vm._v("\n            BASIC DETAILS\n        ")
          ]),
          _vm._v(" "),
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
                                "error-messages": _vm.paymentErrors.date,
                                label: "Date",
                                readonly: ""
                              },
                              on: {
                                input: function($event) {
                                  _vm.paymentErrors.date = []
                                }
                              },
                              model: {
                                value: _vm.form.date,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "date", $$v)
                                },
                                expression: "form.date"
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
                  color: "success",
                  max: _vm.maxDate
                },
                model: {
                  value: _vm.form.date,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "date", $$v)
                  },
                  expression: "form.date"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _vm._t("userSelector"),
          _vm._v(" "),
          _c("v-text-field", {
            attrs: {
              rules: _vm.mixin_validation.required.concat(
                _vm.mixin_validation.minLength(100)
              ),
              counter: 100,
              "error-messages": _vm.paymentErrors.description,
              label: "Description",
              required: ""
            },
            model: {
              value: _vm.form.description,
              callback: function($$v) {
                _vm.$set(_vm.form, "description", $$v)
              },
              expression: "form.description"
            }
          }),
          _vm._v(" "),
          _c("v-text-field", {
            attrs: {
              rules: [].concat(_vm.mixin_validation.required),
              "error-messages": _vm.paymentErrors.voucher_no,
              counter: 100,
              label: "Voucher No.",
              required: "",
              type: "number"
            },
            model: {
              value: _vm.form.voucher_no,
              callback: function($$v) {
                _vm.$set(_vm.form, "voucher_no", $$v)
              },
              expression: "form.voucher_no"
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "overline green--text mb-4" }, [
            _vm._v("\n            Expense Reports\n        ")
          ]),
          _vm._v(" "),
          _vm.paymentErrors.expense_reports &&
          _vm.paymentErrors.expense_reports.length > 0
            ? _c("small", { staticClass: "red--text" }, [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.paymentErrors.expense_reports[0]) +
                    "\n        "
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "12", md: "6" } },
                [
                  _c("v-textarea", {
                    attrs: { label: "Remarks", rows: 3 },
                    model: {
                      value: _vm.form.remarks,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "remarks", $$v)
                      },
                      expression: "form.remarks"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("v-col", { attrs: { cols: "12", md: "6" } }, [
                _c("table", { staticClass: "mt-4", attrs: { width: "100%" } }, [
                  _c("tbody", [
                    _c("tr", [
                      _c("td", [
                        _vm._v(
                          "\n                                Total Expense Amount\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(":")]),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass: "green--text text--darken-4 text-right"
                        },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(_vm.mixin_formatNumber(0)) +
                              "\n                            "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [
                        _vm._v(
                          "\n                                Paid Amount\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(":")]),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass: "green--text text--darken-4 text-right"
                        },
                        [
                          _vm._v(
                            "\n                                (-)\n                                " +
                              _vm._s(_vm.mixin_formatNumber(0)) +
                              "\n                            "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c(
                        "td",
                        { attrs: { colspan: "3" } },
                        [_c("v-divider")],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { staticClass: "text-left" }, [
                        _vm._v(
                          "\n                                Amount to be reimbursed\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(":")]),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass: "green--text text--darken-4 text-right"
                        },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(_vm.mixin_formatNumber(0)) +
                              "\n                            "
                          )
                        ]
                      )
                    ])
                  ])
                ])
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
                { staticClass: "text-right" },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "green", dark: "" },
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
                    [_vm._v("\n                    Cancel\n                ")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/PaymentDataService.js":
/*!*****************************************************!*\
  !*** ./resources/js/services/PaymentDataService.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import http from "../http-common";


var PaymentDataService = /*#__PURE__*/function () {
  function PaymentDataService() {
    _classCallCheck(this, PaymentDataService);
  }

  _createClass(PaymentDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/payments", data);
    }
  }, {
    key: "get",
    value: function get(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/data/payments", data);
    }
  }, {
    key: "show",
    value: function show(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/payments/".concat(id), data);
    }
  }, {
    key: "store",
    value: function store(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/payments", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/payments/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/payments/".concat(id), data);
    }
  }, {
    key: "restore",
    value: function restore(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/payments/restore/".concat(id), data);
    }
  }, {
    key: "export",
    value: function _export() {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/payments/export/data");
    }
  }]);

  return PaymentDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new PaymentDataService());

/***/ }),

/***/ "./resources/js/views/pages/payments/Form.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/pages/payments/Form.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_d713a668___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=d713a668& */ "./resources/js/views/pages/payments/Form.vue?vue&type=template&id=d713a668&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/payments/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_d713a668___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_d713a668___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/payments/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/payments/Form.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/pages/payments/Form.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/payments/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/payments/Form.vue?vue&type=template&id=d713a668&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/pages/payments/Form.vue?vue&type=template&id=d713a668& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_d713a668___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=d713a668& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/payments/Form.vue?vue&type=template&id=d713a668&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_d713a668___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_d713a668___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);