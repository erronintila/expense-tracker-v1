(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/Show.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/expense_reports/Show.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_daterangepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/daterangepicker/DateRangePicker */ "./resources/js/components/daterangepicker/DateRangePicker.vue");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    DateRangePicker: _components_daterangepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      dialogCreate: false,
      dialogEdit: false,
      valid: false,
      date_range: [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("month").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("month").format("YYYY-MM-DD")],
      preset: "",
      presets: ["Today", "Yesterday", "Last 7 Days", "Last 30 Days", "This Week", "This Month", "This Quarter", "This Year", "Last Week", "Last Month", "Last Quarter", "Last Year", "Last 5 Years"],
      selected: [],
      headers: [{
        text: "Date",
        value: "date",
        sortable: false
      }, {
        text: "Description",
        value: "expense_type.name",
        sortable: false
      }, {
        text: "Receipt",
        value: "receipt_number",
        sortable: false
      }, {
        text: "Vendor",
        value: "vendor.name",
        sortable: false
      }, {
        text: "Amount",
        value: "amount",
        sortable: false
      }, {
        text: "",
        value: "data-table-expand"
      }],
      items: [],
      total: 0,
      code: "",
      description: "",
      remarks: "",
      notes: "",
      employee: this.$store.getters.user.employee.id,
      expenses: []
    };
  },
  methods: {
    updateDates: function updateDates(e) {
      this.date_range = e;
      this.loadExpenses(this.employee);
    },
    getData: function getData() {
      var _this = this;

      axios.get("/api/expense_reports/".concat(_this.$route.params.id)).then(function (response) {
        var _this$selected;

        var data = response.data.data;
        _this.code = data.code;
        _this.description = data.description;
        _this.remarks = data.remarks;
        _this.notes = data.notes;
        _this.employee = "".concat(data.employee.last_name || "", ", ").concat(data.employee.first_name || "", " ").concat(data.employee.suffix || "");
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

        (_this$selected = _this.selected).splice.apply(_this$selected, [0, 0].concat(_toConsumableArray(data.expenses)));

        _this.loadExpenses(data.employee.id);
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

        _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
      });
    },
    loadExpenses: function loadExpenses(emp_id) {
      var start_date = this.date_range[0];
      var end_date = this.date_range[1];

      var _this = this;

      axios.get("/api/data/expenses", {
        params: {
          update_report: true,
          employee_id: emp_id,
          start_date: start_date,
          end_date: end_date,
          expense_report_id: _this.$route.params.id
        }
      }).then(function (response) {
        _this.items = response.data.data;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

        _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
      });
    },
    onEdit: function onEdit() {
      this.$router.push({
        name: "user.expense_reports.edit",
        params: {
          id: this.$route.params.id
        }
      });
    }
  },
  watch: {
    selected: function selected() {
      this.total = this.selected.reduce(function (total, item) {
        return total + item.amount;
      }, 0);
    }
  },
  created: function created() {
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/Show.vue?vue&type=template&id=24329f7e&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/expense_reports/Show.vue?vue&type=template&id=24329f7e& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
                _vm._v("Expense Report Details")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
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
                "v-container",
                [
                  _c("v-row", [_c("v-spacer")], 1),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "4" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Employee",
                              readonly: "",
                              required: ""
                            },
                            model: {
                              value: _vm.employee,
                              callback: function($$v) {
                                _vm.employee = $$v
                              },
                              expression: "employee"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "8" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Description",
                              readonly: "",
                              required: ""
                            },
                            model: {
                              value: _vm.description,
                              callback: function($$v) {
                                _vm.description = $$v
                              },
                              expression: "description"
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
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c(
                            "v-data-table",
                            {
                              staticClass: "elevation-0",
                              attrs: {
                                elevation: "0",
                                headers: _vm.headers,
                                items: _vm.items,
                                "hide-default-footer": true,
                                "disable-pagination": "",
                                "item-key": "id",
                                "single-expand": "",
                                "show-expand": ""
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "item.amount",
                                    fn: function(ref) {
                                      var item = ref.item
                                      return [
                                        _vm._v(
                                          "\n                                " +
                                            _vm._s(
                                              _vm.mixin_formatNumber(
                                                item.amount
                                              )
                                            ) +
                                            "\n                            "
                                        )
                                      ]
                                    }
                                  },
                                  {
                                    key: "top",
                                    fn: function() {
                                      return [
                                        _c(
                                          "v-row",
                                          [
                                            _vm._v(
                                              "\n                                    Expenses\n                                    "
                                            ),
                                            _c("v-spacer")
                                          ],
                                          1
                                        )
                                      ]
                                    },
                                    proxy: true
                                  },
                                  {
                                    key: "expanded-item",
                                    fn: function(ref) {
                                      var headers = ref.headers
                                      var item = ref.item
                                      return [
                                        _c(
                                          "td",
                                          {
                                            attrs: { colspan: headers.length }
                                          },
                                          [
                                            _c("v-container", [
                                              _c("table", [
                                                _c("tr", [
                                                  _c("td", [
                                                    _c("strong", [
                                                      _vm._v("Reimbursable")
                                                    ])
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [_vm._v(":")]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      "\n                                                    " +
                                                        _vm._s(
                                                          _vm.mixin_formatNumber(
                                                            item.reimbursable_amount
                                                          )
                                                        ) +
                                                        "\n                                                "
                                                    )
                                                  ])
                                                ]),
                                                _vm._v(" "),
                                                _c("tr", [
                                                  _c("td", [
                                                    _c("strong", [
                                                      _vm._v("Code")
                                                    ])
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [_vm._v(":")]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(_vm._s(item.code))
                                                  ])
                                                ]),
                                                _vm._v(" "),
                                                _c("tr", [
                                                  _c("td", [
                                                    _c("strong", [
                                                      _vm._v("Description")
                                                    ])
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [_vm._v(":")]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      "\n                                                    " +
                                                        _vm._s(
                                                          item.description
                                                        ) +
                                                        "\n                                                "
                                                    )
                                                  ])
                                                ]),
                                                _vm._v(" "),
                                                _c("tr", [
                                                  _c("td", [
                                                    _c("strong", [
                                                      _vm._v("Remarks")
                                                    ])
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [_vm._v(":")]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(_vm._s(item.remarks))
                                                  ])
                                                ]),
                                                _vm._v(" "),
                                                _c("tr", [
                                                  _c("td", [
                                                    _c("strong", [
                                                      _vm._v("Created")
                                                    ])
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [_vm._v(":")]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      "\n                                                    " +
                                                        _vm._s(
                                                          _vm.mixin_formatDate(
                                                            item.created_at,
                                                            "YYYY-MM-DD HH:mm:ss"
                                                          )
                                                        ) +
                                                        "\n                                                "
                                                    )
                                                  ])
                                                ]),
                                                _vm._v(" "),
                                                _c("tr", [
                                                  _c("td", [
                                                    _c("strong", [
                                                      _vm._v("Cancelled")
                                                    ])
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [_vm._v(":")]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      "\n                                                    " +
                                                        _vm._s(
                                                          _vm.mixin_formatDate(
                                                            item.deleted_at,
                                                            "YYYY-MM-DD HH:mm:ss"
                                                          )
                                                        ) +
                                                        "\n                                                "
                                                    )
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ],
                                          1
                                        )
                                      ]
                                    }
                                  }
                                ],
                                null,
                                true
                              )
                            },
                            [
                              _vm._v(" "),
                              _vm.items.length > 0
                                ? _c("template", { slot: "body.append" }, [
                                    _c(
                                      "tr",
                                      {
                                        staticClass:
                                          "green--text hidden-md-and-up"
                                      },
                                      [
                                        _c("td", { staticClass: "title" }, [
                                          _vm._v(
                                            "\n                                        Total:\n                                        "
                                          ),
                                          _c("strong", [
                                            _vm._v(_vm._s(_vm.total))
                                          ])
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "tr",
                                      {
                                        staticClass:
                                          "green--text hidden-sm-and-down"
                                      },
                                      [
                                        _c("td", { staticClass: "title" }, [
                                          _vm._v("Total")
                                        ]),
                                        _vm._v(" "),
                                        _c("td"),
                                        _vm._v(" "),
                                        _c("td"),
                                        _vm._v(" "),
                                        _c("td"),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c("strong", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.mixin_formatNumber(
                                                  _vm.total
                                                )
                                              )
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("td")
                                      ]
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
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "6" } },
                        [
                          _c("v-textarea", {
                            attrs: {
                              rows: _vm.remarks == "" ? 1 : 2,
                              label: "Remarks",
                              readonly: ""
                            },
                            model: {
                              value: _vm.remarks,
                              callback: function($$v) {
                                _vm.remarks = $$v
                              },
                              expression: "remarks"
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
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            color: "green",
                            dark: "",
                            to: { name: "user.expense_reports.print" }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        View Summary\n                    "
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

/***/ "./resources/js/views/modules/user/expense_reports/Show.vue":
/*!******************************************************************!*\
  !*** ./resources/js/views/modules/user/expense_reports/Show.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_24329f7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=24329f7e& */ "./resources/js/views/modules/user/expense_reports/Show.vue?vue&type=template&id=24329f7e&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/user/expense_reports/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_24329f7e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_24329f7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/user/expense_reports/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/user/expense_reports/Show.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/modules/user/expense_reports/Show.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/user/expense_reports/Show.vue?vue&type=template&id=24329f7e&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/modules/user/expense_reports/Show.vue?vue&type=template&id=24329f7e& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_24329f7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=24329f7e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/Show.vue?vue&type=template&id=24329f7e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_24329f7e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_24329f7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);