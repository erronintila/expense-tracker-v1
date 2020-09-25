(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/reports/Show.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/reports/Show.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_daterangepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/daterangepicker/DateRangePicker */ "./resources/js/components/daterangepicker/DateRangePicker.vue");
/* harmony import */ var _components_CreateExpense__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/CreateExpense */ "./resources/js/views/modules/user/reports/components/CreateExpense.vue");
/* harmony import */ var _components_EditExpense__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/EditExpense */ "./resources/js/views/modules/user/reports/components/EditExpense.vue");
/* harmony import */ var _components_PrintDetailed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/PrintDetailed */ "./resources/js/views/modules/user/reports/components/PrintDetailed.vue");
/* harmony import */ var _components_PrintSummary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/PrintSummary */ "./resources/js/views/modules/user/reports/components/PrintSummary.vue");
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







/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DateRangePicker: _components_daterangepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_2__["default"],
    CreateExpense: _components_CreateExpense__WEBPACK_IMPORTED_MODULE_3__["default"],
    EditExpense: _components_EditExpense__WEBPACK_IMPORTED_MODULE_4__["default"],
    PrintDetailed: _components_PrintDetailed__WEBPACK_IMPORTED_MODULE_5__["default"],
    PrintSummary: _components_PrintSummary__WEBPACK_IMPORTED_MODULE_6__["default"]
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
      employee: 0,
      employees: [],
      expenses: [],
      rules: {
        date_range: [],
        code: [],
        description: [function (v) {
          return !!v || "Description is required";
        }, function (v) {
          return !!v && v.length <= 100 || "Description must be less than 100 characters";
        }],
        remarks: [],
        notes: [],
        employee: [function (v) {
          return !!v || "Employee is required";
        }],
        expenses: []
      },
      errors: {
        date_range: [],
        code: [],
        description: [],
        remarks: [],
        notes: [],
        employee: [],
        expenses: []
      }
    };
  },
  methods: {
    getCurrentUser: function getCurrentUser() {
      var _this = this;

      axios.get("/api/user").then(function (response) {// _this.user = response.data.data;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);
      });
    },
    updateDates: function updateDates(e) {
      this.date_range = e; // this.loadExpenses(this.employee);
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
        _this.employee = "".concat(data.employee.last_name, ", ").concat(data.employee.first_name, " ").concat(data.employee.suffix);
        _this.status = data.status;
        _this.items = data.expenses;
        _this.expenses = data.expenses;
        _this.submitted_at = data.submitted_at;
        _this.reviewed_at = data.reviewed_at;
        _this.approved_at = data.approved_at;
        _this.cancelled_at = data.cancelled_at;
        _this.created_at = data.created_at;
        _this.updated_at = data.updated_at;
        _this.deleted_at = data.deleted_at;
        _this.total = data.total;

        (_this$selected = _this.selected).splice.apply(_this$selected, [0, 0].concat(_toConsumableArray(data.expenses))); // _this.loadExpenses(data.employee.id);

      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);
      });
    },
    // loadExpenses(emp_id) {
    //     let start_date = this.date_range[0];
    //     let end_date = this.date_range[1];
    //     let _this = this;
    //     axios
    //         .get("/api/data/expenses", {
    //             params: {
    //                 update_report: true,
    //                 employee_id: emp_id,
    //                 start_date: start_date,
    //                 end_date: end_date,
    //                 expense_report_id: _this.$route.params.id
    //             }
    //         })
    //         .then(response => {
    //             _this.items = response.data.data;
    //         })
    //         .catch(error => {
    //             console.log(error);
    //             console.log(error.response);
    //         });
    // },
    onEdit: function onEdit() {
      this.$router.push({
        name: "user.reports.edit",
        params: {
          id: this.$route.params.id
        }
      });
    },
    formatNumber: function formatNumber(data) {
      return numeral__WEBPACK_IMPORTED_MODULE_1___default()(data).format("0,0.00");
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
    axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("access_token");
    this.getCurrentUser();
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/reports/components/PrintDetailed.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/reports/components/PrintDetailed.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      total: 0,
      headers: [],
      items: []
    };
  },
  methods: {
    loadExpenseTypes: function loadExpenseTypes() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        axios.get("/api/data/expense_types").then(function (response) {
          response.data.data.forEach(function (element) {
            _this.headers.push({
              text: element.name,
              value: element.name.replace(/\s+/g, "_").toLowerCase(),
              sortable: false
            });
          });

          _this.headers.unshift({
            text: "Date",
            value: "date",
            sortable: false
          });

          _this.headers.push({
            text: "Total",
            value: "total",
            sortable: false
          });

          resolve();
        })["catch"](function (error) {
          console.log(error.response);
          reject();
        });
      });
    },
    loadExpenses: function loadExpenses() {
      var _this = this;

      _this.loadExpenseTypes().then(function () {
        axios.get("/api/data/test").then(function (response) {
          var rows = response.data;
          _this.items = rows;
          console.log(_this.items);
        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);
        });
      });
    }
  },
  created: function created() {
    var _this = this; // _this.loadExpenseTypes();


    _this.loadExpenses();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/reports/components/PrintSummary.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/reports/components/PrintSummary.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/reports/Show.vue?vue&type=template&id=15c23f8c&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/reports/Show.vue?vue&type=template&id=15c23f8c& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
                  attrs: { to: { name: "user.reports.index" }, icon: "" }
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
                            attrs: { label: "Employee", required: "" },
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
                            attrs: { label: "Description", required: "" },
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
                                              _vm.formatNumber(item.amount)
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
                                                      _vm._v("Date")
                                                    ])
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [_vm._v(":")]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      "\n                                                    " +
                                                        _vm._s(item.date) +
                                                        "\n                                                "
                                                    )
                                                  ])
                                                ]),
                                                _vm._v(" "),
                                                _c("tr", [
                                                  _c("td", [
                                                    _c("strong", [
                                                      _vm._v("Receipt")
                                                    ])
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [_vm._v(":")]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      "\n                                                    " +
                                                        _vm._s(
                                                          item.receipt_number
                                                        ) +
                                                        "\n                                                "
                                                    )
                                                  ])
                                                ]),
                                                _vm._v(" "),
                                                _c("tr", [
                                                  _c("td", [
                                                    _c("strong", [
                                                      _vm._v("Vendor")
                                                    ])
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [_vm._v(":")]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      "\n                                                    " +
                                                        _vm._s(
                                                          item.vendor.name
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
                                                _vm.formatNumber(_vm.total)
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
                          attrs: { color: "green", dark: "" },
                          on: { click: _vm.onEdit }
                        },
                        [_vm._v("Print Report")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "green", dark: "" },
                          on: { click: _vm.onEdit }
                        },
                        [_vm._v("Print Summary")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/reports/components/PrintDetailed.vue?vue&type=template&id=11beef7e&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/reports/components/PrintDetailed.vue?vue&type=template&id=11beef7e& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
  return _c("v-app", [
    _c("div", [
      _c("div", [
        _vm._v("\n            Expense Report Summary "),
        _c("br"),
        _vm._v("\n            Employee: "),
        _c("br"),
        _vm._v("\n            Period: "),
        _c("br")
      ]),
      _vm._v(" "),
      _c(
        "div",
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
                    _c("tr", { staticClass: "green--text hidden-md-and-up" }, [
                      _c("td", { staticClass: "title" }, [
                        _vm._v("\n                            Total: "),
                        _c("strong", [_vm._v(_vm._s(_vm.total))])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tr",
                      { staticClass: "green--text hidden-sm-and-down" },
                      [
                        _c("td", [_vm._v("Total")]),
                        _vm._v(" "),
                        _vm._l(_vm.items.length - 1, function(item) {
                          return _c("td", { key: item.name })
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
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/reports/components/PrintSummary.vue?vue&type=template&id=5bbb3b25&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/reports/components/PrintSummary.vue?vue&type=template&id=5bbb3b25& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
  return _c("v-app")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/modules/user/reports/Show.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/modules/user/reports/Show.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_15c23f8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=15c23f8c& */ "./resources/js/views/modules/user/reports/Show.vue?vue&type=template&id=15c23f8c&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/user/reports/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_15c23f8c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_15c23f8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/user/reports/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/user/reports/Show.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/modules/user/reports/Show.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/reports/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/user/reports/Show.vue?vue&type=template&id=15c23f8c&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/modules/user/reports/Show.vue?vue&type=template&id=15c23f8c& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_15c23f8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=15c23f8c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/reports/Show.vue?vue&type=template&id=15c23f8c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_15c23f8c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_15c23f8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/modules/user/reports/components/PrintDetailed.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/views/modules/user/reports/components/PrintDetailed.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PrintDetailed_vue_vue_type_template_id_11beef7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrintDetailed.vue?vue&type=template&id=11beef7e& */ "./resources/js/views/modules/user/reports/components/PrintDetailed.vue?vue&type=template&id=11beef7e&");
/* harmony import */ var _PrintDetailed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrintDetailed.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/user/reports/components/PrintDetailed.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PrintDetailed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PrintDetailed_vue_vue_type_template_id_11beef7e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PrintDetailed_vue_vue_type_template_id_11beef7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/user/reports/components/PrintDetailed.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/user/reports/components/PrintDetailed.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/views/modules/user/reports/components/PrintDetailed.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintDetailed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PrintDetailed.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/reports/components/PrintDetailed.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintDetailed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/user/reports/components/PrintDetailed.vue?vue&type=template&id=11beef7e&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/views/modules/user/reports/components/PrintDetailed.vue?vue&type=template&id=11beef7e& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintDetailed_vue_vue_type_template_id_11beef7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PrintDetailed.vue?vue&type=template&id=11beef7e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/reports/components/PrintDetailed.vue?vue&type=template&id=11beef7e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintDetailed_vue_vue_type_template_id_11beef7e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintDetailed_vue_vue_type_template_id_11beef7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/modules/user/reports/components/PrintSummary.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/modules/user/reports/components/PrintSummary.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PrintSummary_vue_vue_type_template_id_5bbb3b25___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrintSummary.vue?vue&type=template&id=5bbb3b25& */ "./resources/js/views/modules/user/reports/components/PrintSummary.vue?vue&type=template&id=5bbb3b25&");
/* harmony import */ var _PrintSummary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrintSummary.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/user/reports/components/PrintSummary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PrintSummary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PrintSummary_vue_vue_type_template_id_5bbb3b25___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PrintSummary_vue_vue_type_template_id_5bbb3b25___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/user/reports/components/PrintSummary.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/user/reports/components/PrintSummary.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/views/modules/user/reports/components/PrintSummary.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintSummary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PrintSummary.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/reports/components/PrintSummary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintSummary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/user/reports/components/PrintSummary.vue?vue&type=template&id=5bbb3b25&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/views/modules/user/reports/components/PrintSummary.vue?vue&type=template&id=5bbb3b25& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintSummary_vue_vue_type_template_id_5bbb3b25___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PrintSummary.vue?vue&type=template&id=5bbb3b25& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/reports/components/PrintSummary.vue?vue&type=template&id=5bbb3b25&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintSummary_vue_vue_type_template_id_5bbb3b25___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintSummary_vue_vue_type_template_id_5bbb3b25___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);