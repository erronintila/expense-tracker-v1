(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/daterangepicker/DateRangePicker.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/daterangepicker/DateRangePicker.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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
// Please visit :
// https://stackoverflow.com/questions/59404459/custom-date-picker-in-vuetify

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    buttonType: {
      type: Boolean,
      "default": false
    },
    buttonColor: {
      type: String,
      "default": "primary"
    },
    buttonDark: {
      type: Boolean,
      "default": true
    },
    solo: {
      type: Boolean,
      "default": false
    },
    value: {
      type: Array,
      "default": function _default() {
        return [moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD")];
      }
    },
    preset: {
      type: String,
      "default": ""
    },
    presets: {
      type: Array,
      "default": function _default() {
        return ["Today", "This Week", "This Month", "This Year"];
      }
    }
  },
  data: function data() {
    return {
      menu: false,
      dates: this.value,
      presetValue: this.preset,
      presetsList: this.presets
    };
  },
  methods: {
    customChange: function customChange() {
      this.$emit("updateDates", this.dates);
    },
    resetDates: function resetDates() {
      this.menu = false;
      this.dates = [moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD")];
      this.presetValue = "";
      this.$emit("updateDates", this.dates);
    },
    updatePreset: function updatePreset() {
      this.menu = false;

      switch (this.presetValue) {
        case "Today":
          this.dates = [moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD")];
          this.$emit("updateDates", this.dates);
          break;

        case "Yesterday":
          this.dates = [moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "days").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "days").format("YYYY-MM-DD")];
          this.$emit("updateDates", this.dates);
          break;

        case "Last 7 Days":
          this.dates = [moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(7, "days").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "days").format("YYYY-MM-DD")];
          this.$emit("updateDates", this.dates);
          break;

        case "Last 30 Days":
          this.dates = [moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(30, "days").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "days").format("YYYY-MM-DD")];
          this.$emit("updateDates", this.dates);
          break;

        case "This Week":
          this.dates = [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("week").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("week").format("YYYY-MM-DD")];
          this.$emit("updateDates", this.dates);
          break;

        case "Last Week":
          this.dates = [moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "weeks").startOf("week").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "weeks").endOf("week").format("YYYY-MM-DD")];
          this.$emit("updateDates", this.dates);
          break;

        case "This Month":
          this.dates = [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("month").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("month").format("YYYY-MM-DD")];
          this.$emit("updateDates", this.dates);
          break;

        case "Last Month":
          this.dates = [moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "months").startOf("month").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "months").endOf("month").format("YYYY-MM-DD")];
          this.$emit("updateDates", this.dates);
          break;

        case "This Quarter":
          this.dates = [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("quarter").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("quarter").format("YYYY-MM-DD")];
          this.$emit("updateDates", this.dates);
          break;

        case "Last Quarter":
          this.dates = [moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "quarters").startOf("quarter").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "quarters").endOf("quarter").format("YYYY-MM-DD")];
          this.$emit("updateDates", this.dates);
          break;

        case "This Year":
          this.dates = [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("year").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("year").format("YYYY-MM-DD")];
          this.$emit("updateDates", this.dates);
          break;

        case "Last Year":
          this.dates = [moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "years").startOf("year").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "years").endOf("year").format("YYYY-MM-DD")];
          this.$emit("updateDates", this.dates);
          break;

        case "Last 5 Years":
          this.dates = [moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(5, "years").startOf("year").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "years").endOf("year").format("YYYY-MM-DD")];
          this.$emit("updateDates", this.dates);
          break;

        default:
          this.dates = [moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD")];
          this.$emit("updateDates", this.dates);
          break;
      }
    }
  },
  computed: {
    dateRangeText: function dateRangeText() {
      this.dates.sort();
      return this.dates.join(" ~ ");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/reports/Create.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/reports/Create.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_daterangepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/daterangepicker/DateRangePicker */ "./resources/js/components/daterangepicker/DateRangePicker.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    DateRangePicker: _components_daterangepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      valid: false,
      date_range: [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("week").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("week").format("YYYY-MM-DD")],
      preset: "",
      presets: ["Today", "Yesterday", "Last 7 Days", "Last 30 Days", "This Week", "This Month", "This Quarter", "This Year", "Last Week", "Last Month", "Last Quarter", "Last Year", "Last 5 Years"],
      selected: [],
      headers: [{
        text: "Expense",
        value: "description"
      }, {
        text: "Type",
        value: "expense_type.name"
      }, {
        text: "Amount",
        value: "amount"
      }, {
        text: "Actions",
        value: "actions",
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
    updateDates: function updateDates(e) {
      this.date_range = e;
      this.loadExpenses();
    },
    loadExpenses: function loadExpenses() {
      var start_date = this.date_range[0];
      var end_date = this.date_range[1];

      var _this = this;

      axios.get("/api/data/expenses", {
        params: {
          create_report: true,
          employee_id: _this.employee,
          start_date: start_date,
          end_date: end_date
        }
      }).then(function (response) {
        console.log(response);
        _this.items = response.data.data; // _this.total = response.data.total;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    loadEmployees: function loadEmployees() {
      var _this = this;

      axios.get("/api/data/employees").then(function (response) {
        _this.employees = response.data.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    onRefresh: function onRefresh() {
      Object.assign(this.$data, this.$options.data.apply(this));
    },
    onSave: function onSave() {
      var _this = this;

      if (_this.$refs.form.validate()) {
        axios.post("/api/expense_reports", {
          code: _this.code,
          description: _this.description,
          remarks: _this.remarks,
          notes: _this.notes,
          employee_id: _this.employee,
          expenses: _this.selected
        }).then(function (response) {
          // _this.onRefresh();
          _this.$dialog.message.success("Expense Report created successfully.", {
            position: "top-right",
            timeout: 2000
          });

          _this.$router.push({
            name: "admin.reports.index"
          });
        })["catch"](function (error) {
          console.log(error);
        });
        return;
      }
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
    this.loadEmployees();
    this.loadExpenses();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/daterangepicker/DateRangePicker.vue?vue&type=template&id=c3ea2be0&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/daterangepicker/DateRangePicker.vue?vue&type=template&id=c3ea2be0& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    "v-menu",
    {
      ref: "menu",
      staticClass: "pa-0",
      attrs: {
        "close-on-content-click": false,
        transition: "scale-transition",
        "offset-y": "",
        "min-width": "290px",
        "max-width": "290px"
      },
      scopedSlots: _vm._u([
        {
          key: "activator",
          fn: function(ref) {
            var on = ref.on
            var attrs = ref.attrs
            return [
              _vm.buttonType
                ? _c(
                    "v-btn",
                    _vm._g(
                      _vm._b(
                        {
                          attrs: {
                            color: _vm.buttonColor,
                            dark: _vm.buttonDark,
                            "offset-y": ""
                          }
                        },
                        "v-btn",
                        attrs,
                        false
                      ),
                      on
                    ),
                    [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.dateRangeText) +
                          "\n        "
                      )
                    ]
                  )
                : _c(
                    "v-text-field",
                    _vm._g(
                      _vm._b(
                        {
                          attrs: {
                            label: "Date",
                            readonly: "",
                            solo: _vm.solo
                          },
                          model: {
                            value: _vm.dateRangeText,
                            callback: function($$v) {
                              _vm.dateRangeText = $$v
                            },
                            expression: "dateRangeText"
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
      _c(
        "v-card",
        [
          _c("v-select", {
            attrs: {
              items: _vm.presetsList,
              label: "Presets",
              solo: "",
              flat: ""
            },
            on: { change: _vm.updatePreset },
            model: {
              value: _vm.presetValue,
              callback: function($$v) {
                _vm.presetValue = $$v
              },
              expression: "presetValue"
            }
          }),
          _vm._v(" "),
          _c(
            "v-date-picker",
            {
              attrs: {
                value: _vm.dates,
                range: "",
                "no-title": "",
                scrollable: "",
                color: "success"
              },
              on: { change: _vm.customChange },
              model: {
                value: _vm.dates,
                callback: function($$v) {
                  _vm.dates = $$v
                },
                expression: "dates"
              }
            },
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { text: "", color: "success" },
                  on: { click: _vm.resetDates }
                },
                [_vm._v("Reset")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { text: "", color: "success" },
                  on: {
                    click: function($event) {
                      return _vm.$refs.menu.save(_vm.dates)
                    }
                  }
                },
                [_vm._v("\n                OK\n            ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/reports/Create.vue?vue&type=template&id=1ed1c033&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/reports/Create.vue?vue&type=template&id=1ed1c033& ***!
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
                _vm._v("New Expense Report")
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
                          _c("v-autocomplete", {
                            attrs: {
                              rules: _vm.rules.employee,
                              items: _vm.employees,
                              "error-messages": _vm.errors.employee,
                              "item-value": "id",
                              "item-text": "fullname",
                              label: "Employee *",
                              required: ""
                            },
                            on: {
                              input: function($event) {
                                _vm.errors.employee = []
                              },
                              change: _vm.loadExpenses
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
                              rules: _vm.rules.description,
                              counter: 100,
                              label: "Description",
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
                                "items-per-page": 5,
                                "item-key": "id",
                                "show-select": "",
                                "single-expand": "",
                                "show-expand": ""
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "item.actions",
                                    fn: function(ref) {
                                      var item = ref.item
                                      return [
                                        _c(
                                          "v-icon",
                                          {
                                            staticClass: "mr-2",
                                            attrs: { small: "" },
                                            on: {
                                              click: function($event) {
                                                return _vm.onEdit(item)
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                    mdi-pencil\n                                "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-icon",
                                          {
                                            staticClass: "mr-2",
                                            attrs: { small: "" },
                                            on: {
                                              click: function($event) {
                                                return _vm.onDelete(item)
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                    mdi-delete\n                                "
                                            )
                                          ]
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
                                            _c(
                                              "v-col",
                                              {
                                                attrs: { cols: "12", md: "4" }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                        Expenses\n                                    "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("v-spacer"),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              {
                                                attrs: { cols: "12", md: "4" }
                                              },
                                              [
                                                _c(
                                                  "v-btn",
                                                  {
                                                    staticClass: "mr-2",
                                                    attrs: { color: "white" }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                            New Item\n                                        "
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("DateRangePicker", {
                                                  attrs: {
                                                    preset: _vm.preset,
                                                    presets: _vm.presets,
                                                    value: _vm.date_range,
                                                    solo: true,
                                                    buttonType: true,
                                                    buttonColor: "white",
                                                    buttonDark: false
                                                  },
                                                  on: {
                                                    updateDates: _vm.updateDates
                                                  }
                                                })
                                              ],
                                              1
                                            )
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
                              ),
                              model: {
                                value: _vm.selected,
                                callback: function($$v) {
                                  _vm.selected = $$v
                                },
                                expression: "selected"
                              }
                            },
                            [
                              _vm.items.length > 0
                                ? _c("template", { slot: "body.append" }, [
                                    _c("tr", { staticClass: "green--text" }, [
                                      _c("td", { staticClass: "title" }, [
                                        _vm._v("Total")
                                      ]),
                                      _vm._v(" "),
                                      _c("td"),
                                      _vm._v(" "),
                                      _c("td"),
                                      _vm._v(" "),
                                      _c("td", [
                                        _c("strong", [
                                          _vm._v(_vm._s(_vm.total))
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("td"),
                                      _vm._v(" "),
                                      _c("td")
                                    ])
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
                              rules: _vm.rules.remarks
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
                          on: { click: _vm.onSave }
                        },
                        [_vm._v("Save")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        { attrs: { to: { name: "admin.reports.index" } } },
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

/***/ "./resources/js/components/daterangepicker/DateRangePicker.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/daterangepicker/DateRangePicker.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DateRangePicker_vue_vue_type_template_id_c3ea2be0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateRangePicker.vue?vue&type=template&id=c3ea2be0& */ "./resources/js/components/daterangepicker/DateRangePicker.vue?vue&type=template&id=c3ea2be0&");
/* harmony import */ var _DateRangePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DateRangePicker.vue?vue&type=script&lang=js& */ "./resources/js/components/daterangepicker/DateRangePicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DateRangePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DateRangePicker_vue_vue_type_template_id_c3ea2be0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DateRangePicker_vue_vue_type_template_id_c3ea2be0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/daterangepicker/DateRangePicker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/daterangepicker/DateRangePicker.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/daterangepicker/DateRangePicker.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRangePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DateRangePicker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/daterangepicker/DateRangePicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRangePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/daterangepicker/DateRangePicker.vue?vue&type=template&id=c3ea2be0&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/daterangepicker/DateRangePicker.vue?vue&type=template&id=c3ea2be0& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRangePicker_vue_vue_type_template_id_c3ea2be0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DateRangePicker.vue?vue&type=template&id=c3ea2be0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/daterangepicker/DateRangePicker.vue?vue&type=template&id=c3ea2be0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRangePicker_vue_vue_type_template_id_c3ea2be0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRangePicker_vue_vue_type_template_id_c3ea2be0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/modules/admin/reports/Create.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/modules/admin/reports/Create.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_1ed1c033___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=1ed1c033& */ "./resources/js/views/modules/admin/reports/Create.vue?vue&type=template&id=1ed1c033&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/reports/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_1ed1c033___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_1ed1c033___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/reports/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/reports/Create.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/reports/Create.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/reports/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/reports/Create.vue?vue&type=template&id=1ed1c033&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/reports/Create.vue?vue&type=template&id=1ed1c033& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_1ed1c033___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=1ed1c033& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/reports/Create.vue?vue&type=template&id=1ed1c033&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_1ed1c033___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_1ed1c033___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);