(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chart/BarChart.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chart/BarChart.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "bar-chart",
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Bar"],
  props: {
    data: {
      type: Object,
      "default": function _default() {}
    },
    options: {
      type: Object,
      "default": function _default() {}
    }
  },
  watch: {
    data: {
      deep: true,
      handler: function handler() {
        this.$data._chart.update();
      }
    }
  },
  mounted: function mounted() {
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/admin/analytics/Show.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/admin/analytics/Show.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! randomcolor */ "./node_modules/randomcolor/randomColor.js");
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(randomcolor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_chart_LineChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/chart/LineChart */ "./resources/js/components/chart/LineChart.vue");
/* harmony import */ var _components_chart_BarChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/chart/BarChart */ "./resources/js/components/chart/BarChart.vue");
/* harmony import */ var _components_chart_DoughnutChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/chart/DoughnutChart */ "./resources/js/components/chart/DoughnutChart.vue");
/* harmony import */ var _components_page_PageHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/page/PageHeader */ "./resources/js/components/page/PageHeader.vue");
/* harmony import */ var _components_datepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/datepicker/DateRangePicker */ "./resources/js/components/datepicker/DateRangePicker.vue");
/* harmony import */ var _components_selector_dialog_UserDialogSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/selector/dialog/UserDialogSelector */ "./resources/js/components/selector/dialog/UserDialogSelector.vue");
/* harmony import */ var _components_selector_dialog_VendorDialogSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/selector/dialog/VendorDialogSelector */ "./resources/js/components/selector/dialog/VendorDialogSelector.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "show-analytics",
  components: {
    PageHeader: _components_page_PageHeader__WEBPACK_IMPORTED_MODULE_6__["default"],
    DateRangePicker: _components_datepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_7__["default"],
    UserDialogSelector: _components_selector_dialog_UserDialogSelector__WEBPACK_IMPORTED_MODULE_8__["default"],
    VendorDialogSelector: _components_selector_dialog_VendorDialogSelector__WEBPACK_IMPORTED_MODULE_9__["default"],
    LineChart: _components_chart_LineChart__WEBPACK_IMPORTED_MODULE_3__["default"],
    BarChart: _components_chart_BarChart__WEBPACK_IMPORTED_MODULE_4__["default"],
    DoughnutChart: _components_chart_DoughnutChart__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    var _this = this;

    return {
      formDataLoaded: true,
      date_range: [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("month").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("month").format("YYYY-MM-DD")],
      messages: [{
        from: "You",
        message: "Sure, I'll see you later.",
        time: "10:42am",
        color: "deep-purple lighten-1"
      }, {
        from: "John Doe",
        message: "Yeah, sure. Does 1:00pm work?",
        time: "10:37am",
        color: "green"
      }, {
        from: "You",
        message: "Did you still want to grab lunch today?",
        time: "9:47am",
        color: "deep-purple lighten-1"
      }],
      user: null,
      vendor: null,
      statuses: ["Active", "Inactive", "Inactive"],
      total: [{
        label: "Expenses",
        amount: 100.0,
        count: 0.0
      }, {
        label: "Expenses",
        amount: 100.0,
        count: 0.0
      }, {
        label: "Expenses",
        amount: 100.0,
        count: 0.0
      }, {
        label: "Expenses",
        amount: 100.0,
        count: 0.0
      }, {
        label: "Expenses",
        amount: 100.0,
        count: 0.0
      }],
      params: {},
      //
      //
      //
      //
      labels: ["pending", "approved"],
      data: [{
        id: 1,
        status: "pending",
        label: "expense 1",
        amount: 100
      }, {
        id: 2,
        status: "approved",
        label: "expense 2",
        amount: 50
      }, {
        id: 3,
        status: "approved",
        label: "expense 3",
        amount: 10000
      }, {
        id: 4,
        status: "pending",
        label: "expense 4",
        amount: 10
      }],
      //
      //
      //
      //
      chartData: {
        labels: ["January", "February", "March"],
        datasets: [{
          label: "Data One",
          backgroundColor: "#dbffe5",
          borderColor: "#4caf50",
          data: [40, 20, 90],
          fill: false,
          lineTension: 0
        }, {
          label: "Data Two",
          backgroundColor: "#dbffe5",
          borderColor: "#4caf50",
          data: [80, 50, 30],
          fill: false,
          lineTension: 0
        }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          mode: "index",
          intersect: false,
          position: "nearest"
        },
        // legend: {
        //     display: false
        // },
        scales: {
          yAxes: [{
            // gridLines: {
            //     display: false
            // },
            ticks: $.extend({
              beginAtZero: true
            }, {})
          }],
          xAxes: [{
            gridLines: {
              display: false
            }
          }]
        }
      },
      doughnutChartData: {
        labels: ["January", "February", "March"],
        datasets: [{
          backgroundColor: randomcolor__WEBPACK_IMPORTED_MODULE_2___default()({
            luminosity: "light",
            count: 3
          }),
          data: [40, 20, 90]
        }]
      },
      doughnutChartOptions: {
        hoverBorderWidth: 20,
        legend: false,
        plugins: {
          datalabels: {
            display: function display(context) {
              return context.dataset.data[context.dataIndex] !== 0;
            },
            borderWidth: 2,
            borderColor: "white",
            borderRadius: 20,
            // color: 0,
            font: {
              weight: "bold"
            },
            backgroundColor: "lightgray",
            formatter: function formatter(value, ctx) {
              return _this.mixin_formatNumber(value) + " %";
            }
          }
        }
      }
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
    },
    changeData: function changeData() {
      this.doughnutChartData.labels = ["January", "February", "March"];
      this.doughnutChartData.datasets = [{
        backgroundColor: randomcolor__WEBPACK_IMPORTED_MODULE_2___default()({
          hue: 'green',
          count: 3
        }),
        data: [10, 121, 45]
      }];
    },
    getLabels: function getLabels(arr, unique_field) {
      var unique = [];
      var distinct = [];

      for (var i = 0; i < arr.length; i++) {
        if (!unique[arr[i][unique_field]]) {
          distinct.push(arr[i][unique_field]);
          unique[arr[i][unique_field]] = 1;
        }
      }

      return distinct;
    }
  },
  // beforeCreate() {
  //     if (
  //         this.$route.params.constructor !== Object ||
  //         Object.keys(this.$route.params).length === 0
  //     ) {
  //         this.$router.push("/analytics");
  //     }
  // },
  created: function created() {
    console.log(this.getLabels(this.data, "status"));
    console.log("randomcolor", randomcolor__WEBPACK_IMPORTED_MODULE_2___default()({
      hue: "red",
      count: 3
    }));
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/admin/analytics/Show.vue?vue&type=template&id=62e187f0&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/admin/analytics/Show.vue?vue&type=template&id=62e187f0& ***!
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
                  _c(
                    "div",
                    { staticClass: "d-flex" },
                    [
                      _c("DateRangePicker", {
                        ref: "dateRangePicker",
                        attrs: { dateRange: _vm.date_range },
                        on: { "on-change": _vm.updateDates },
                        scopedSlots: _vm._u([
                          {
                            key: "openDialog",
                            fn: function(ref) {
                              var on = ref.on
                              var attrs = ref.attrs
                              return [
                                _c(
                                  "v-btn",
                                  _vm._g(
                                    _vm._b(
                                      {
                                        staticClass: "mr-2",
                                        attrs: {
                                          color: "green",
                                          dark: "",
                                          fab: "",
                                          small: "",
                                          title: "Date Range"
                                        }
                                      },
                                      "v-btn",
                                      attrs,
                                      false
                                    ),
                                    on
                                  ),
                                  [_c("v-icon", [_vm._v("mdi-calendar")])],
                                  1
                                )
                              ]
                            }
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _vm.$store.getters.user.is_admin
                        ? _c("UserDialogSelector", {
                            ref: "userDialogSelector",
                            attrs: {
                              selectedUser: _vm.user,
                              usersParameters: {
                                params: { is_superadmin: false }
                              }
                            },
                            on: {
                              selectUser: _vm.selectUser,
                              onReset: _vm.resetUser
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "openDialog",
                                  fn: function(ref) {
                                    var bind = ref.bind
                                    var on = ref.on
                                    return [
                                      _c(
                                        "v-btn",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              staticClass: "mr-2",
                                              attrs: {
                                                color: "green",
                                                dark: "",
                                                fab: "",
                                                small: "",
                                                title: "Employees"
                                              }
                                            },
                                            "v-btn",
                                            bind,
                                            false
                                          ),
                                          on
                                        ),
                                        [
                                          _c("v-icon", [
                                            _vm._v("mdi-clipboard-account")
                                          ])
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ],
                              null,
                              false,
                              1822367560
                            )
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c("VendorDialogSelector", {
                        ref: "vendorDialogSelector",
                        attrs: { selectedVendor: _vm.vendor },
                        on: {
                          selectVendor: _vm.selectVendor,
                          onReset: _vm.resetVendor
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "openDialog",
                            fn: function(ref) {
                              var bind = ref.bind
                              var on = ref.on
                              return [
                                _c(
                                  "v-btn",
                                  _vm._g(
                                    _vm._b(
                                      {
                                        attrs: {
                                          color: "green",
                                          dark: "",
                                          fab: "",
                                          small: "",
                                          title: "Vendors"
                                        }
                                      },
                                      "v-btn",
                                      bind,
                                      false
                                    ),
                                    on
                                  ),
                                  [_c("v-icon", [_vm._v("mdi-account-group")])],
                                  1
                                )
                              ]
                            }
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
                "v-card-text",
                [
                  _c("div", { staticClass: "title green--text" }, [
                    _vm._v(_vm._s(_vm.$route.params.label))
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "8" } },
                        [
                          _c(
                            "v-sheet",
                            [
                              _c(
                                "v-timeline",
                                { attrs: { "align-top": "", dense: "" } },
                                _vm._l(_vm.messages, function(message) {
                                  return _c(
                                    "v-timeline-item",
                                    {
                                      key: message.time,
                                      attrs: { color: message.color, small: "" }
                                    },
                                    [
                                      _c("div", [
                                        _c(
                                          "div",
                                          { staticClass: "font-weight-normal" },
                                          [
                                            _c("strong", [
                                              _vm._v(_vm._s(message.from))
                                            ]),
                                            _vm._v(
                                              "\n                                        @" +
                                                _vm._s(message.time) +
                                                "\n                                    "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("div", [
                                          _vm._v(_vm._s(message.message))
                                        ])
                                      ])
                                    ]
                                  )
                                }),
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-col", { attrs: { cols: "12", md: "4" } })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    _vm._l(_vm.total, function(item, index) {
                      return _c(
                        "v-col",
                        { key: index, attrs: { cols: "12", md: "3" } },
                        [
                          _c(
                            "v-card",
                            {
                              staticClass: "mx-auto",
                              attrs: { elevation: "2" }
                            },
                            [
                              _c("v-card-text", [
                                _c("div", { staticClass: "green--text" }, [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(item.label) +
                                      "\n                            "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "font-weight-bold text--primary"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                ₱\n                                " +
                                        _vm._s(
                                          item.amount == null ? 0 : item.amount
                                        ) +
                                        "\n                            "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(
                                        item.count == null ? 0 : item.count
                                      ) +
                                      "\n                                record(s)\n                            "
                                  )
                                ])
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                [
                  _c("line-chart", {
                    attrs: { data: _vm.chartData, options: _vm.chartOptions }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                [
                  _c("doughnut-chart", {
                    ref: "doughnutChart",
                    attrs: {
                      data: _vm.doughnutChartData,
                      options: _vm.doughnutChartOptions
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("v-btn", { on: { click: _vm.changeData } }, [
                _vm._v("\n            Random Data\n        ")
              ])
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

/***/ "./resources/js/components/chart/BarChart.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/chart/BarChart.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BarChart.vue?vue&type=script&lang=js& */ "./resources/js/components/chart/BarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _BarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chart/BarChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chart/BarChart.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/chart/BarChart.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BarChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chart/BarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/admin/analytics/Show.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/pages/admin/analytics/Show.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_62e187f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=62e187f0& */ "./resources/js/views/pages/admin/analytics/Show.vue?vue&type=template&id=62e187f0&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/admin/analytics/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_62e187f0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_62e187f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/admin/analytics/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/admin/analytics/Show.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/pages/admin/analytics/Show.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/admin/analytics/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/admin/analytics/Show.vue?vue&type=template&id=62e187f0&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/pages/admin/analytics/Show.vue?vue&type=template&id=62e187f0& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_62e187f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=62e187f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/admin/analytics/Show.vue?vue&type=template&id=62e187f0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_62e187f0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_62e187f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);