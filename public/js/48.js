(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

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
/* harmony import */ var _services_SettingDataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/SettingDataService */ "./resources/js/services/SettingDataService.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      formDataLoaded: false,
      validExpenses: false,
      validExpenseReports: false,
      validTaxes: false,
      file_input: null,
      rules: {
        file_input: [function (value) {
          return !value || value.size < 30000 || "Report logo size should be less than 30 KB";
        }]
      },
      settings: {
        company_name: "Twin-Circa Marketing",
        currency: "Philippine Peso",
        expiry_period: 1,
        expense_encoding_period: 1,
        submission_period: "Weekly",
        approval_period: 1,
        tax_rate: 0,
        expense_report: {
          report_no: {
            prefix: "",
            length: 1
          },
          print_format: {
            pageSize: {
              width: 0,
              height: 0
            },
            pageOrientation: "landscape",
            pageMargins: {
              left: 0,
              top: 0,
              right: 0,
              bottom: 0
            },
            defaultStyle: {
              font: "Roboto"
            },
            background: {
              alignment: "left",
              width: 0,
              height: 0,
              image: "",
              margin: {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
              }
            }
          }
        }
      },
      panel: [0, 1, 2, 3]
    };
  },
  methods: {
    onLoad: function onLoad() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _services_SettingDataService__WEBPACK_IMPORTED_MODULE_1__["default"].getAll().then(function (response) {
          _this.file_input = null;
          _this.settings = response.data;
          _this.formDataLoaded = true;
          resolve();
        })["catch"](function (error) {
          _this.mixin_showErrors(error);

          _this.formDataLoaded = true;
          reject();
        });
      });
    },
    onSave: function onSave() {
      var _this2 = this;

      this.$refs.formExpenses.validate();
      this.$refs.formExpenseReports.validate();
      this.$refs.formTaxes.validate();

      if (this.$refs.formExpenses.validate() && this.$refs.formExpenseReports.validate() && this.$refs.formTaxes.validate()) {
        var data = {
          settings: this.settings
        };
        _services_SettingDataService__WEBPACK_IMPORTED_MODULE_1__["default"].store(data).then(function (response) {
          _this2.mixin_successDialog("Success", "Saved settings successfully");

          _this2.$store.dispatch("AUTH_USER");

          _this2.$store.dispatch("AUTH_SETTINGS");

          window.location.replace("/admin/settings");
        })["catch"](function (error) {
          _this2.mixin_showErrors(error);
        });
      }
    }
  },
  computed: {
    page_sizes: function page_sizes() {
      return [{
        name: "A4",
        width: this.expense_report.print_format.pageOrientation == "portrait" ? 10 : 9,
        height: this.expense_report.print_format.pageOrientation == "portrait" ? 10 : 9
      }, {
        name: "Letter",
        width: this.expense_report.print_format.pageOrientation == "portrait" ? 10 : 9,
        height: this.expense_report.print_format.pageOrientation == "portrait" ? 10 : 9
      }, {
        name: "Folio",
        width: this.expense_report.print_format.pageOrientation == "portrait" ? 10 : 9,
        height: this.expense_report.print_format.pageOrientation == "portrait" ? 10 : 9
      }, {
        name: "Legal",
        width: this.expense_report.print_format.pageOrientation == "portrait" ? 10 : 9,
        height: this.expense_report.print_format.pageOrientation == "portrait" ? 10 : 9
      }, {
        name: "Custom",
        width: 0,
        height: 0
      }];
    },
    url: function url() {
      if (this.file_input) {
        return URL.createObjectURL(this.file_input);
      }

      return this.$store.getters.settings.expense_report.print_format.background.image;
    },
    report_no: {
      get: function get() {
        var prefix = this.settings.expense_report.report_no.prefix;
        var num_length = this.settings.expense_report.report_no.num_length;
        var report_no = "";
        report_no = prefix + moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYYMM") + String(1).padStart(num_length, "0");
        return report_no;
      }
    }
  },
  watch: {
    file_input: function file_input() {
      var _this3 = this;

      if (this.file_input) {
        var reader = new FileReader();
        reader.readAsDataURL(this.file_input);

        reader.onload = function () {
          _this3.settings.expense_report.print_format.background.image = reader.result;
        };

        reader.onerror = function (error) {
          _this3.mixin_showErrors(error);
        };
      } else {
        this.settings.expense_report.print_format.background.image = this.$store.getters.settings.expense_report.print_format.background.image;
      }
    }
  },
  // created() {
  //     // this.$store.dispatch("AUTH_USER");
  //     this.$store.dispatch("AUTH_SETTINGS");
  //     this.$store.dispatch("AUTH_NOTIFICATIONS");
  //     this.onLoad();
  // },
  activated: function activated() {
    this.$store.dispatch("AUTH_SETTINGS");
    this.$store.dispatch("AUTH_NOTIFICATIONS");
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
      !_vm.formDataLoaded
        ? _c("loader-component")
        : _c(
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
                      staticClass: "mr-2",
                      attrs: {
                        color: "green",
                        to: { name: "admin.settings.user" },
                        outlined: "",
                        dark: ""
                      }
                    },
                    [
                      _vm._v(
                        "\n                Employee Settings\n            "
                      )
                    ]
                  ),
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
                                {
                                  ref: "formExpenses",
                                  model: {
                                    value: _vm.validExpenses,
                                    callback: function($$v) {
                                      _vm.validExpenses = $$v
                                    },
                                    expression: "validExpenses"
                                  }
                                },
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
                                              rules: _vm.mixin_validation.required.concat(
                                                _vm.mixin_validation.minNumberValue(
                                                  1
                                                )
                                              ),
                                              hint:
                                                "Allowed period for expenses to be encoded based on date",
                                              "persistent-hint": "",
                                              type: "number"
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
                                                "\n                                            settings.expense_encoding_period\n                                        "
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
                                {
                                  ref: "formExpenseReports",
                                  model: {
                                    value: _vm.validExpenseReports,
                                    callback: function($$v) {
                                      _vm.validExpenseReports = $$v
                                    },
                                    expression: "validExpenseReports"
                                  }
                                },
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c("v-col", [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "overline green--text"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                        General\n                                    "
                                            )
                                          ]
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
                                        { attrs: { cols: "12", md: "4" } },
                                        [
                                          _c("v-select", {
                                            attrs: {
                                              label: "Submission Date",
                                              items: [
                                                "Daily",
                                                "Weekly",
                                                "Monthly"
                                              ],
                                              hint:
                                                "Due date for submission of expense reports",
                                              "persistent-hint": ""
                                            },
                                            model: {
                                              value:
                                                _vm.settings.submission_period,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.settings,
                                                  "submission_period",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "settings.submission_period"
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
                                              rules: _vm.mixin_validation.required.concat(
                                                _vm.mixin_validation.minNumberValue(
                                                  1
                                                )
                                              ),
                                              hint:
                                                "Allowed period for expense reports to be approved based on submission date",
                                              "persistent-hint": "",
                                              type: "number"
                                            },
                                            model: {
                                              value:
                                                _vm.settings.approval_period,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.settings,
                                                  "approval_period",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "settings.approval_period"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("v-divider"),
                                  _vm._v(" "),
                                  _c(
                                    "v-row",
                                    [
                                      _c("v-col", [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "overline  green--text"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                        Report No. Format:\n                                    "
                                            )
                                          ]
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
                                        { attrs: { cols: "12", md: "2" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: { label: "Prefix" },
                                            model: {
                                              value:
                                                _vm.settings.expense_report
                                                  .report_no.prefix,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.settings.expense_report
                                                    .report_no,
                                                  "prefix",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "\n                                            settings.expense_report\n                                                .report_no.prefix\n                                        "
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "2" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              rules: [].concat(
                                                _vm.mixin_validation.minNumberValue(
                                                  0
                                                )
                                              ),
                                              label: "Length",
                                              type: "number"
                                            },
                                            model: {
                                              value:
                                                _vm.settings.expense_report
                                                  .report_no.num_length,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.settings.expense_report
                                                    .report_no,
                                                  "num_length",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "\n                                            settings.expense_report\n                                                .report_no.num_length\n                                        "
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
                                          _c(
                                            "div",
                                            { staticClass: "green--text" },
                                            [
                                              _vm._v(
                                                "\n                                        e.g. " +
                                                  _vm._s(_vm.report_no) +
                                                  "\n                                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("small", [
                                            _vm._v(
                                              "(Prefix + YYYYMM + (length + report\n                                        count))"
                                            )
                                          ])
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("v-divider"),
                                  _vm._v(" "),
                                  _c(
                                    "v-row",
                                    [
                                      _c("v-col", [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "overline green--text"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                        Print Format\n                                    "
                                            )
                                          ]
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
                                        { attrs: { cols: "12", md: "3" } },
                                        [
                                          _c("v-select", {
                                            attrs: {
                                              label: "Page Orientation",
                                              items: ["portrait", "landscape"]
                                            },
                                            model: {
                                              value:
                                                _vm.settings.expense_report
                                                  .print_format.pageOrientation,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.settings.expense_report
                                                    .print_format,
                                                  "pageOrientation",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "\n                                            settings.expense_report\n                                                .print_format\n                                                .pageOrientation\n                                        "
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "3" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              rules: [].concat(
                                                _vm.mixin_validation.minNumberValue(
                                                  1
                                                )
                                              ),
                                              label: "Page Size (width)",
                                              type: "number"
                                            },
                                            model: {
                                              value:
                                                _vm.settings.expense_report
                                                  .print_format.pageSize.width,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.settings.expense_report
                                                    .print_format.pageSize,
                                                  "width",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "\n                                            settings.expense_report\n                                                .print_format.pageSize.width\n                                        "
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "3" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              rules: [].concat(
                                                _vm.mixin_validation.minNumberValue(
                                                  1
                                                )
                                              ),
                                              label: "Page Size (height)",
                                              type: "number"
                                            },
                                            model: {
                                              value:
                                                _vm.settings.expense_report
                                                  .print_format.pageSize.height,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.settings.expense_report
                                                    .print_format.pageSize,
                                                  "height",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "\n                                            settings.expense_report\n                                                .print_format.pageSize\n                                                .height\n                                        "
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
                                        { attrs: { cols: "12", md: "3" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              rules: [].concat(
                                                _vm.mixin_validation.minNumberValue(
                                                  0
                                                )
                                              ),
                                              type: "number",
                                              label: "Page Margin (Left)"
                                            },
                                            model: {
                                              value:
                                                _vm.settings.expense_report
                                                  .print_format.pageMargins
                                                  .left,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.settings.expense_report
                                                    .print_format.pageMargins,
                                                  "left",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "\n                                            settings.expense_report\n                                                .print_format.pageMargins\n                                                .left\n                                        "
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "3" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              rules: [].concat(
                                                _vm.mixin_validation.minNumberValue(
                                                  0
                                                )
                                              ),
                                              type: "number",
                                              label: "Page Margin (Top)"
                                            },
                                            model: {
                                              value:
                                                _vm.settings.expense_report
                                                  .print_format.pageMargins.top,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.settings.expense_report
                                                    .print_format.pageMargins,
                                                  "top",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "\n                                            settings.expense_report\n                                                .print_format.pageMargins\n                                                .top\n                                        "
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "3" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              rules: [].concat(
                                                _vm.mixin_validation.minNumberValue(
                                                  0
                                                )
                                              ),
                                              type: "number",
                                              label: "Page Margin (Right)"
                                            },
                                            model: {
                                              value:
                                                _vm.settings.expense_report
                                                  .print_format.pageMargins
                                                  .right,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.settings.expense_report
                                                    .print_format.pageMargins,
                                                  "right",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "\n                                            settings.expense_report\n                                                .print_format.pageMargins\n                                                .right\n                                        "
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "3" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              rules: [].concat(
                                                _vm.mixin_validation.minNumberValue(
                                                  0
                                                )
                                              ),
                                              type: "number",
                                              label: "Page Margin (Bottom)"
                                            },
                                            model: {
                                              value:
                                                _vm.settings.expense_report
                                                  .print_format.pageMargins
                                                  .bottom,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.settings.expense_report
                                                    .print_format.pageMargins,
                                                  "bottom",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "\n                                            settings.expense_report\n                                                .print_format.pageMargins\n                                                .bottom\n                                        "
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
                                        { attrs: { cols: "12", md: "3" } },
                                        [
                                          _c("v-select", {
                                            attrs: {
                                              label: "Font",
                                              items: ["Roboto"]
                                            },
                                            model: {
                                              value:
                                                _vm.settings.expense_report
                                                  .print_format.defaultStyle
                                                  .font,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.settings.expense_report
                                                    .print_format.defaultStyle,
                                                  "font",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "\n                                            settings.expense_report\n                                                .print_format.defaultStyle\n                                                .font\n                                        "
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("v-divider"),
                                  _vm._v(" "),
                                  _c(
                                    "v-row",
                                    [
                                      _c("v-col", [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "overline green--text"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                        Report Logo\n                                    "
                                            )
                                          ]
                                        )
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-row",
                                    [
                                      _vm.url
                                        ? _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "3" } },
                                            [
                                              _c("v-img", {
                                                attrs: {
                                                  label: "Report Image Logo",
                                                  src: _vm.url
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "3" } },
                                        [
                                          _c("v-file-input", {
                                            attrs: {
                                              rules: _vm.rules.file_input,
                                              "prepend-icon": "mdi-upload",
                                              "show-size": "",
                                              label: "Upload",
                                              accept:
                                                "image/png, image/jpeg, image/bmp"
                                            },
                                            model: {
                                              value: _vm.file_input,
                                              callback: function($$v) {
                                                _vm.file_input = $$v
                                              },
                                              expression: "file_input"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "3" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              rules: [].concat(
                                                _vm.mixin_validation.minNumberValue(
                                                  1
                                                )
                                              ),
                                              label: "Logo Width"
                                            },
                                            model: {
                                              value:
                                                _vm.settings.expense_report
                                                  .print_format.background
                                                  .width,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.settings.expense_report
                                                    .print_format.background,
                                                  "width",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "\n                                            settings.expense_report\n                                                .print_format.background\n                                                .width\n                                        "
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "3" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              rules: [].concat(
                                                _vm.mixin_validation.minNumberValue(
                                                  1
                                                )
                                              ),
                                              label: "Logo Height"
                                            },
                                            model: {
                                              value:
                                                _vm.settings.expense_report
                                                  .print_format.background
                                                  .height,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.settings.expense_report
                                                    .print_format.background,
                                                  "height",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "\n                                            settings.expense_report\n                                                .print_format.background\n                                                .height\n                                        "
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
                            "\n                        Taxes\n                    "
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
                                {
                                  ref: "formTaxes",
                                  model: {
                                    value: _vm.validTaxes,
                                    callback: function($$v) {
                                      _vm.validTaxes = $$v
                                    },
                                    expression: "validTaxes"
                                  }
                                },
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
                                              label: "Tax Rate",
                                              suffix: "%",
                                              rules: _vm.mixin_validation.required.concat(
                                                _vm.mixin_validation.minNumberValue(
                                                  0
                                                )
                                              ),
                                              hint:
                                                "Tax rate to be imposed on expenses.",
                                              "persistent-hint": ""
                                            },
                                            model: {
                                              value: _vm.settings.tax_rate,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.settings,
                                                  "tax_rate",
                                                  $$v
                                                )
                                              },
                                              expression: "settings.tax_rate"
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

/***/ "./resources/js/services/SettingDataService.js":
/*!*****************************************************!*\
  !*** ./resources/js/services/SettingDataService.js ***!
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


var SettingDataService = /*#__PURE__*/function () {
  function SettingDataService() {
    _classCallCheck(this, SettingDataService);
  }

  _createClass(SettingDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/settings", data);
    }
  }, {
    key: "store",
    value: function store(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/settings", data);
    }
  }]);

  return SettingDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new SettingDataService());

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