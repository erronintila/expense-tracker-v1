(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chart/HorizontalBarChart.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chart/HorizontalBarChart.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartjs-plugin-datalabels */ "./node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.js");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "horizontal-bar-chart",
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["HorizontalBar"],
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
    this.addPlugin(chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1___default.a);
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/dashboard/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/dashboard/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! randomcolor */ "./node_modules/randomcolor/randomColor.js");
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(randomcolor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_page_PageHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/page/PageHeader */ "./resources/js/components/page/PageHeader.vue");
/* harmony import */ var _components_datepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/datepicker/DateRangePicker */ "./resources/js/components/datepicker/DateRangePicker.vue");
/* harmony import */ var _components_chart_DoughnutChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/chart/DoughnutChart */ "./resources/js/components/chart/DoughnutChart.vue");
/* harmony import */ var _components_chart_HorizontalBarChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/chart/HorizontalBarChart */ "./resources/js/components/chart/HorizontalBarChart.vue");
/* harmony import */ var _components_chart_LineChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/chart/LineChart */ "./resources/js/components/chart/LineChart.vue");
/* harmony import */ var _components_selector_dialog_UserDialogSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/selector/dialog/UserDialogSelector */ "./resources/js/components/selector/dialog/UserDialogSelector.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    DoughnutChart: _components_chart_DoughnutChart__WEBPACK_IMPORTED_MODULE_5__["default"],
    // PieChart,
    // BarChart,
    HorizontalBarChart: _components_chart_HorizontalBarChart__WEBPACK_IMPORTED_MODULE_6__["default"],
    LineChart: _components_chart_LineChart__WEBPACK_IMPORTED_MODULE_7__["default"],
    DateRangePicker: _components_datepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_4__["default"],
    UserDialogSelector: _components_selector_dialog_UserDialogSelector__WEBPACK_IMPORTED_MODULE_8__["default"],
    PageHeader: _components_page_PageHeader__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      loader: true,
      total: {
        awaiting_for_reimbursement_reports: 0,
        expenses_by_date: 0,
        pending_for_approval_reports: 0,
        remaining_fund: 0,
        total_fund: 0,
        unreported_expenses: 0,
        unsubmitted_reports: 0,
        payment_to_receive: 0
      },
      count: {
        awaiting_for_reimbursement_reports: 0,
        expenses_by_date: 0,
        pending_for_approval_reports: 0,
        unreported_expenses: 0,
        unsubmitted_reports: 0,
        payment_to_receive: 0
      },
      backgroundColors: ["#36a2eb", "#ff6384", "#ff9f40", "#4bc0c0", "#ffcd56"],
      horizontalBarChartOptions: {},
      horizontalBarChartData: {},
      doughnutChartOptions: {},
      doughnutChartData: {},
      lineChartOptions: {},
      lineChartData: {},
      filter: {
        text: "Expenses by type",
        value: "expense_type"
      },
      filterItems: [{
        text: "Expenses by type",
        value: "expense_type"
      }, {
        text: "Expenses per user",
        value: "user"
      }, {
        text: "Expenses per department",
        value: "department"
      }],
      groupBy: "month",
      groupByItems: [{
        text: "Day",
        value: "day"
      }, {
        text: "Week",
        value: "week"
      }, {
        text: "Month",
        value: "month"
      }, {
        text: "Quarter",
        value: "quarter"
      }, {
        text: "Year",
        value: "year"
      }],
      date_range: [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("year").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("year").format("YYYY-MM-DD")],
      preset: "",
      presets: ["Today", "Yesterday", "Last 7 Days", "Last 30 Days", "This Week", "This Month", "This Quarter", "This Year", "Last Week", "Last Month", "Last Quarter", "Last Year", "Last 5 Years"],
      headers: [{
        text: "Dessert (100g serving)",
        align: "start",
        sortable: false,
        value: "name"
      }, {
        text: "Calories",
        value: "calories"
      }, {
        text: "Fat (g)",
        value: "fat"
      }, {
        text: "Carbs (g)",
        value: "carbs"
      }, {
        text: "Protein (g)",
        value: "protein"
      }, {
        text: "Iron (%)",
        value: "iron"
      }],
      items: [],
      user: this.$store.getters.user.is_admin && this.mixin_can("view all users expenses") ? null : this.$store.getters.user
    };
  },
  methods: {
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
    load_department_expenses: function load_department_expenses(start, end, user) {
      var _this = this;

      axios.get("/api/data/departments_expenses_summary", {
        params: {
          start_date: start,
          end_date: end,
          user_id: user,
          admin_page: true
        }
      }).then(function (response) {
        _this.expenses_by_category = response.data;
        var labels = response.data.map(function (item) {
          return item.text;
        });
        var data = response.data.map(function (item) {
          return item.value;
        });

        var backgroundColors = _this.getBackgroundColors(data.length);

        var sum = response.data.reduce(function (a, b) {
          return a + b.value;
        }, 0);
        var percentages = response.data.map(function (item) {
          return item.value / sum * 100;
        });

        _this.updatePieChartValues(labels, percentages, backgroundColors);

        _this.updateBarChartValues(labels, data, backgroundColors);
      })["catch"](function (error) {
        _this.mixin_showErrors(error);
      });
    },
    load_expense_types_expenses: function load_expense_types_expenses(start, end, user) {
      var _this2 = this;

      axios.get("/api/data/expense_types_expenses_summary", {
        params: {
          start_date: start,
          end_date: end,
          user_id: user,
          admin_page: true
        }
      }).then(function (response) {
        _this2.expenses_by_category = response.data;
        var labels = response.data.map(function (item) {
          return item.text;
        });
        var data = response.data.map(function (item) {
          return item.value;
        });

        var backgroundColors = _this2.getBackgroundColors(data.length);

        var sum = response.data.reduce(function (a, b) {
          return a + b.value;
        }, 0);
        var percentages = response.data.map(function (item) {
          return item.value / sum * 100;
        });

        _this2.updatePieChartValues(labels, percentages, backgroundColors);

        _this2.updateBarChartValues(labels, data, backgroundColors);
      })["catch"](function (error) {
        _this2.mixin_showErrors(error);
      });
    },
    load_users_expenses: function load_users_expenses(start, end, user) {
      var _this3 = this;

      axios.get("/api/data/users_expenses_summary", {
        params: {
          start_date: start,
          end_date: end,
          user_id: user,
          admin_page: true
        }
      }).then(function (response) {
        _this3.expenses_by_category = response.data;
        var labels = response.data.map(function (item) {
          return item.text;
        });
        var data = response.data.map(function (item) {
          return item.value;
        });

        var backgroundColors = _this3.getBackgroundColors(data.length);

        var sum = response.data.reduce(function (a, b) {
          return a + b.value;
        }, 0);
        var percentages = response.data.map(function (item) {
          return item.value / sum * 100;
        });

        _this3.updatePieChartValues(labels, percentages, backgroundColors);

        _this3.updateBarChartValues(labels, data, backgroundColors);
      })["catch"](function (error) {
        _this3.mixin_showErrors(error);
      });
    },
    load_expenses_summary: function load_expenses_summary(start, end, time_unit, user) {
      var _this4 = this;

      axios.get("/api/data/expenses_summary", {
        params: {
          start_date: start,
          end_date: end,
          time_unit: time_unit,
          user_id: user,
          admin_page: true
        }
      }).then(function (response) {
        switch (_this4.groupBy) {
          case "day":
            _this4.lineChart_labels = response.data.map(function (item) {
              return item.text;
            });
            break;

          case "week":
            _this4.lineChart_labels = response.data.map(function (item) {
              return "".concat(moment__WEBPACK_IMPORTED_MODULE_0___default()(item.text).format("YYYY-MM"), " W:").concat(_this4.getWeekInMonth(new Date(item.text)));
            });
            break;

          case "month":
            _this4.lineChart_labels = response.data.map(function (item) {
              return moment__WEBPACK_IMPORTED_MODULE_0___default()(item.text).format("MMM YYYY");
            });
            break;

          case "quarter":
            _this4.lineChart_labels = response.data.map(function (item) {
              return "".concat(moment__WEBPACK_IMPORTED_MODULE_0___default()(item.text).format("YYYY"), " Q:").concat(moment__WEBPACK_IMPORTED_MODULE_0___default()(item.text).format("Q"));
            });
            break;

          case "year":
            _this4.lineChart_labels = response.data.map(function (item) {
              return moment__WEBPACK_IMPORTED_MODULE_0___default()(item.text).format("YYYY");
            });
            break;

          default:
            break;
        }

        _this4.lineChart_data = response.data.map(function (item) {
          return item.value;
        });

        _this4.updateLineChartValues(_this4.lineChart_labels, _this4.lineChart_data);
      })["catch"](function (error) {
        _this4.mixin_showErrors(error);
      });
    },
    load_bar_chart: function load_bar_chart() {
      this.horizontalBarChartOptions = {
        maintainAspectRatio: false,
        legend: false,
        // scales: {
        //     yAxes: [
        //         {
        //             maxBarThickness: 10
        //         }
        //     ]
        // },
        plugins: {
          datalabels: {
            display: function display(context) {
              return context.dataset.data[context.dataIndex] !== 0; // or >= 1 or ...
            },
            borderWidth: 2,
            borderColor: "white",
            borderRadius: 20,
            font: {
              weight: "bold"
            },
            backgroundColor: "lightgray"
          }
        }
      };
      this.horizontalBarChartData = {
        labels: [],
        datasets: [{
          label: "",
          backgroundColor: [],
          data: []
        }]
      };
    },
    load_pie_chart: function load_pie_chart() {
      var _this5 = this;

      this.doughnutChartOptions = {
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
              return _this5.mixin_formatNumber(value) + " %";
            }
          }
        }
      };
      this.doughnutChartData = {
        labels: [],
        datasets: [{
          label: "",
          backgroundColor: [],
          data: []
        }]
      };
    },
    load_line_chart: function load_line_chart() {
      var ticksStyle = {
        fontColor: "#495057",
        fontStyle: "bold",
        maxRotation: 0,
        minRotation: 0
      };
      this.lineChartOptions = {
        // hoverBorderWidth: 20,
        // legend: false,
        maintainAspectRatio: false,
        tooltips: {
          mode: "index",
          intersect: false,
          position: "nearest"
        },
        hover: {
          mode: "index",
          intersect: true
        },
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            // display: false,
            // gridLines: {
            //     display: true,
            //     lineWidth: "4px",
            //     color: "rgba(0, 0, 0, .2)",
            //     zeroLineColor: "transparent"
            // },
            ticks: $.extend({
              beginAtZero: true,
              suggestedMax: 200
            }, ticksStyle)
          }],
          xAxes: [{
            display: true,
            gridLines: {
              display: false
            },
            ticks: ticksStyle
          }]
        }
      };
      this.lineChartData = {
        labels: [],
        datasets: [{
          label: "",
          type: "line",
          data: [],
          backgroundColor: "#dbffe5",
          borderColor: "#4caf50",
          pointBorderColor: "#4caf50",
          pointBackgroundColor: "#4caf50",
          fill: false,
          lineTension: 0
        }]
      };
    },
    getWeekInMonth: function getWeekInMonth(date) {
      var adjustedDate = date.getDate() + date.getDay();
      var prefixes = ["0", "1", "2", "3", "4", "5"];
      return parseInt(prefixes[0 | adjustedDate / 7]) + 1;
    },
    getBackgroundColors: function getBackgroundColors(length) {
      var backgroundColors = [];

      for (var i = 0; i < length; i++) {
        backgroundColors.push(randomcolor__WEBPACK_IMPORTED_MODULE_1___default()({
          luminosity: "light",
          hue: "random"
        }));
      }

      return backgroundColors;
    },
    updateBarChartValues: function updateBarChartValues(labels, data, backgroundColors) {
      this.horizontalBarChartData.labels = labels;
      this.horizontalBarChartData.datasets = [{
        label: "",
        backgroundColor: backgroundColors,
        data: data
      }];
    },
    updatePieChartValues: function updatePieChartValues(labels, data, backgroundColors) {
      this.doughnutChartData.labels = labels;
      this.doughnutChartData.datasets = [{
        label: "",
        backgroundColor: backgroundColors,
        data: data
      }];
    },
    updateLineChartValues: function updateLineChartValues(labels, data) {
      this.lineChartData.labels = labels;
      this.lineChartData.datasets = [{
        backgroundColor: "#dbffe5",
        borderColor: "#4caf50",
        pointBorderColor: "#4caf50",
        pointBackgroundColor: "#4caf50",
        fill: false,
        lineTension: 0,
        data: data
      }];
    },
    onDateChange: function onDateChange(start, end) {
      this.expenses_by_category = [];
      this.start_date = start;
      this.end_date = end;
      this.onCategoryChange();
      this.load_expense_reports(this.start_date.format("YYYY-MM-DD"), this.end_date.format("YYYY-MM-DD"));
      this.onTimeUnitChange();
    },
    onCategoryChange: function onCategoryChange() {
      var start = this.date_range[0];
      var end = this.date_range[1];

      switch (this.filter) {
        case "expense_type":
          this.load_expense_types_expenses(start, end, this.user ? this.user.id : null);
          break;

        case "department":
          this.load_department_expenses(start, end, this.user ? this.user.id : null);
          break;

        case "user":
          this.load_users_expenses(start, end, this.user ? this.user.id : null);
          break;

        default:
          this.load_expense_types_expenses(start, end, this.user ? this.user.id : null);
          break;
      }
    },
    onTimeUnitChange: function onTimeUnitChange() {
      this.load_expenses_summary(this.date_range[0], this.date_range[1], this.groupBy, this.user ? this.user.id : null);
    },
    updateDates: function updateDates(e) {
      this.date_range = e;
      this.expenses_by_category = []; // this.onCategoryChange();

      this.onTimeUnitChange();
      this.getExpenseStats(this.date_range[0], this.date_range[1], this.user ? this.user.id : null);
    },
    getExpenseStats: function getExpenseStats(start, end, emp) {
      var _this6 = this;

      axios.get("/api/data/expense_stats?start_date=".concat(start, "&end_date=").concat(end, "&user_id=").concat(emp)).then(function (response) {
        _this6.total = response.data.total;
        _this6.count = response.data.count;

        _this6.load_expense_types_expenses(_this6.date_range[0], _this6.date_range[1], _this6.user ? _this6.user.id : null);

        _this6.load_expenses_summary(_this6.date_range[0], _this6.date_range[1], _this6.groupBy, _this6.user ? _this6.user.id : null);

        _this6.loader = false;
      })["catch"](function (error) {
        _this6.mixin_showErrors(error);

        _this6.loader = false;
      });
    } // loadStatistics(start, end, user_id) {
    //     axios.get(`/api/data/statistics?start_date=${start}&end_date=${end}&user_id=${user_id}`)
    //     .then(response => {
    //     }).catch(error => {
    //         this.mixin_showErrors(error);
    //     });
    // }

  },
  computed: {
    formattedDateRange: function formattedDateRange() {
      var start_date = moment__WEBPACK_IMPORTED_MODULE_0___default()(this.date_range[0]).format("MMM DD, YYYY");
      var end_date = moment__WEBPACK_IMPORTED_MODULE_0___default()(this.date_range[1]).format("MMM DD, YYYY");

      if (JSON.stringify(start_date) == JSON.stringify(end_date)) {
        return start_date;
      }

      if (JSON.stringify(end_date) == null) {
        return start_date;
      }

      return "".concat(start_date, " ~ ").concat(end_date);
    }
  },
  watch: {
    user: function user() {
      this.onTimeUnitChange();
      this.getExpenseStats(this.date_range[0], this.date_range[1], this.user ? this.user.id : null);
    }
  },
  created: function created() {
    this.$store.dispatch("AUTH_USER").then(function (response) {});
    this.load_pie_chart();
    this.load_bar_chart();
    this.load_line_chart();
    this.getExpenseStats(this.date_range[0], this.date_range[1], this.user ? this.user.id : null); // this.loadStatistics();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/dashboard/Index.vue?vue&type=template&id=397ecbbd&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/dashboard/Index.vue?vue&type=template&id=397ecbbd& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
      _vm.loader
        ? _c("loader-component")
        : _c(
            "v-card",
            { staticClass: "elevation-0 pt-0" },
            [
              _c("page-header", {
                attrs: { title: "Dashboard" },
                scopedSlots: _vm._u([
                  {
                    key: "actions",
                    fn: function() {
                      return [
                        _vm.$store.getters.user.is_admin &&
                        _vm.mixin_can("view all users expenses")
                          ? _c(
                              "v-menu",
                              {
                                attrs: {
                                  "close-on-content-click": false,
                                  "nudge-width": 200,
                                  "offset-y": "",
                                  left: "",
                                  bottom: ""
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "activator",
                                      fn: function(ref) {
                                        var on = ref.on
                                        var attrs = ref.attrs
                                        return [
                                          _c(
                                            "v-btn",
                                            _vm._g(
                                              _vm._b(
                                                { attrs: { icon: "" } },
                                                "v-btn",
                                                attrs,
                                                false
                                              ),
                                              on
                                            ),
                                            [
                                              _c("v-icon", [
                                                _vm._v("mdi-dots-vertical")
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
                                  3221905750
                                )
                              },
                              [
                                _vm._v(" "),
                                _c(
                                  "v-card",
                                  [
                                    _c(
                                      "v-list",
                                      [
                                        _c(
                                          "v-list-item",
                                          [
                                            _c("v-text-field", {
                                              attrs: {
                                                value: _vm.user
                                                  ? _vm.user.full_name
                                                  : "All Employees",
                                                label: "Employee",
                                                readonly: ""
                                              },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "append",
                                                    fn: function() {
                                                      return [
                                                        _c(
                                                          "UserDialogSelector",
                                                          {
                                                            ref:
                                                              "userDialogSelector",
                                                            attrs: {
                                                              selectedUser:
                                                                _vm.user,
                                                              usersParameters: {
                                                                params: {
                                                                  is_superadmin: false
                                                                }
                                                              }
                                                            },
                                                            on: {
                                                              selectUser:
                                                                _vm.selectUser,
                                                              onReset:
                                                                _vm.resetUser
                                                            },
                                                            scopedSlots: _vm._u(
                                                              [
                                                                {
                                                                  key:
                                                                    "openDialog",
                                                                  fn: function(
                                                                    ref
                                                                  ) {
                                                                    var bind =
                                                                      ref.bind
                                                                    var on =
                                                                      ref.on
                                                                    return [
                                                                      _c(
                                                                        "v-btn",
                                                                        _vm._g(
                                                                          _vm._b(
                                                                            {
                                                                              attrs: {
                                                                                fab:
                                                                                  "",
                                                                                color:
                                                                                  "primary",
                                                                                text:
                                                                                  "",
                                                                                "x-small":
                                                                                  ""
                                                                              }
                                                                            },
                                                                            "v-btn",
                                                                            bind,
                                                                            false
                                                                          ),
                                                                          on
                                                                        ),
                                                                        [
                                                                          _c(
                                                                            "v-icon",
                                                                            {
                                                                              attrs: {
                                                                                dark:
                                                                                  ""
                                                                              }
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "mdi-magnify"
                                                                              )
                                                                            ]
                                                                          )
                                                                        ],
                                                                        1
                                                                      )
                                                                    ]
                                                                  }
                                                                }
                                                              ],
                                                              null,
                                                              false,
                                                              3991605135
                                                            )
                                                          }
                                                        )
                                                      ]
                                                    },
                                                    proxy: true
                                                  }
                                                ],
                                                null,
                                                false,
                                                861015849
                                              )
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
                          : _vm._e()
                      ]
                    },
                    proxy: true
                  },
                  {
                    key: "sub-actions",
                    fn: function() {
                      return [
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
                                var dateRangeText = ref.dateRangeText
                                return [
                                  _c(
                                    "v-btn",
                                    _vm._g(
                                      _vm._b(
                                        {
                                          staticClass: "ml-0 pl-0",
                                          attrs: { text: "" }
                                        },
                                        "v-btn",
                                        attrs,
                                        false
                                      ),
                                      on
                                    ),
                                    [
                                      _vm._v(
                                        "\n                            " +
                                          _vm._s(dateRangeText) +
                                          "\n                        "
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _vm.$store.getters.user.is_admin &&
                        _vm.user != null &&
                        _vm.user.id > 0 &&
                        _vm.mixin_can("view all users expenses")
                          ? _c("v-chip", { attrs: { small: "" } }, [
                              _vm._v(_vm._s(_vm.user.full_name))
                            ])
                          : _vm._e()
                      ]
                    },
                    proxy: true
                  }
                ])
              }),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "4" } },
                    [
                      _c("v-hover", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var hover = ref.hover
                              return [
                                _c(
                                  "v-card",
                                  {
                                    staticClass: "mx-auto",
                                    attrs: {
                                      elevation: hover ? 5 : 2,
                                      to: { name: "user.expenses.index" }
                                    }
                                  },
                                  [
                                    _c("v-card-text", [
                                      _c(
                                        "div",
                                        { staticClass: "green--text" },
                                        [
                                          _vm._v(
                                            "\n                                Total Expenses\n                            "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "display-1 text--primary"
                                        },
                                        [
                                          _vm._v(
                                            "\n                                " +
                                              _vm._s(
                                                _vm.mixin_formatNumber(
                                                  _vm.total.expenses_by_date
                                                )
                                              ) +
                                              "\n                            "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", [
                                        _vm._v(
                                          "\n                                " +
                                            _vm._s(_vm.count.expenses_by_date) +
                                            "\n                                Expenses\n                            "
                                        )
                                      ])
                                    ])
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ])
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "4" } },
                    [
                      _c("v-hover", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var hover = ref.hover
                              return [
                                _c(
                                  "v-card",
                                  {
                                    staticClass: "mx-auto",
                                    attrs: { elevation: hover ? 5 : 2 }
                                  },
                                  [
                                    _c(
                                      "v-card-text",
                                      [
                                        _c("div", [
                                          _vm._v(
                                            "\n                                Remaining Fund\n                            "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          {
                                            staticClass: "ml-0 pl-0",
                                            attrs: {
                                              text: "",
                                              to: _vm.$store.getters.user
                                                .is_admin
                                                ? {
                                                    name: "admin.users.index"
                                                  }
                                                : ""
                                            }
                                          },
                                          [
                                            _c("span", [
                                              _c(
                                                "div",
                                                {
                                                  class:
                                                    parseFloat(
                                                      _vm.total.remaining_fund
                                                    ) <=
                                                    parseFloat(
                                                      _vm.total.total_fund
                                                    ) *
                                                      0.1
                                                      ? "display-1 red--text"
                                                      : "display-1 text--primary"
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                        " +
                                                      _vm._s(
                                                        _vm.mixin_formatNumber(
                                                          _vm.total
                                                            .remaining_fund
                                                        )
                                                      ) +
                                                      "\n                                    "
                                                  )
                                                ]
                                              )
                                            ])
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("div", [
                                          _vm._v(
                                            "\n                                " +
                                              _vm._s(
                                                "Total Revolving Fund: " +
                                                  _vm.total.total_fund
                                              ) +
                                              "\n                            "
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ])
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "4" } },
                    [
                      _c("v-hover", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var hover = ref.hover
                              return [
                                _c(
                                  "v-card",
                                  {
                                    staticClass: "mx-auto",
                                    attrs: { elevation: hover ? 5 : 2 }
                                  },
                                  [
                                    _c(
                                      "v-card-text",
                                      [
                                        _c("div", [
                                          _vm._v(
                                            "\n                                Unreported Expenses\n                            "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          {
                                            staticClass: "ml-0 pl-0",
                                            attrs: {
                                              text: "",
                                              to: {
                                                name: "user.expenses.index",
                                                params: {
                                                  status: "Unreported Expenses",
                                                  date_range: [
                                                    "0000-01-01",
                                                    _vm
                                                      .moment()
                                                      .format("YYYY-MM-DD")
                                                  ]
                                                }
                                              }
                                            }
                                          },
                                          [
                                            _c("span", [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "display-1 text--primary"
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                        " +
                                                      _vm._s(
                                                        _vm.mixin_formatNumber(
                                                          _vm.total
                                                            .unreported_expenses
                                                        )
                                                      ) +
                                                      "\n                                    "
                                                  )
                                                ]
                                              )
                                            ])
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("div", [
                                          _vm._v(
                                            "\n                                " +
                                              _vm._s(
                                                "Total Unreported: " +
                                                  _vm.count.unreported_expenses
                                              ) +
                                              "\n                            "
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
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
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c("v-hover", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var hover = ref.hover
                              return [
                                _c(
                                  "v-card",
                                  {
                                    staticClass: "mx-auto",
                                    staticStyle: { position: "relative" },
                                    attrs: {
                                      elevation: hover ? 5 : 2,
                                      height: "100%"
                                    }
                                  },
                                  [
                                    _c(
                                      "v-card-text",
                                      [
                                        _c(
                                          "div",
                                          [
                                            _vm._v(
                                              "\n                                Expense Reports Summary\n                                "
                                            ),
                                            _c(
                                              "v-menu",
                                              {
                                                attrs: {
                                                  "offset-y": "",
                                                  "open-on-hover": ""
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "activator",
                                                      fn: function(ref) {
                                                        var on = ref.on
                                                        var attrs = ref.attrs
                                                        return [
                                                          _c(
                                                            "v-btn",
                                                            _vm._g(
                                                              _vm._b(
                                                                {
                                                                  attrs: {
                                                                    "x-small":
                                                                      "",
                                                                    icon: "",
                                                                    color:
                                                                      "green"
                                                                  }
                                                                },
                                                                "v-btn",
                                                                attrs,
                                                                false
                                                              ),
                                                              on
                                                            ),
                                                            [
                                                              _c("v-icon", [
                                                                _vm._v(
                                                                  "mdi-information-outline"
                                                                )
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
                                                _c(
                                                  "v-card",
                                                  [
                                                    _c("v-card-text", [
                                                      _c("div", [
                                                        _vm._v(
                                                          "\n                                                Unsubmitted: Created reports\n                                                that are not yet submitted\n                                            "
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("div", [
                                                        _vm._v(
                                                          "\n                                                Pending for Approval:\n                                                Submitted reports waiting\n                                                for approval\n                                            "
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("div", [
                                                        _vm._v(
                                                          "\n                                                Awaiting Reimbursement:\n                                                Approved reports waiting for\n                                                payment\n                                            "
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("div", [
                                                        _vm._v(
                                                          "\n                                                Payment to Receive:\n                                                Reimbursed expenses waiting\n                                                to be received by the user\n                                            "
                                                        )
                                                      ])
                                                    ])
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
                                          "v-row",
                                          [
                                            _c(
                                              "v-col",
                                              {
                                                attrs: {
                                                  cols: "12",
                                                  md: "3",
                                                  align: "center",
                                                  justify: "center"
                                                }
                                              },
                                              [
                                                _c(
                                                  "v-btn",
                                                  {
                                                    staticClass: "mt-4 mb-4",
                                                    attrs: {
                                                      text: "",
                                                      to: {
                                                        name:
                                                          "user.expense_reports.index",
                                                        params: {
                                                          status:
                                                            "Unsubmitted Expense Reports",
                                                          date_range: [
                                                            "0000-01-01",
                                                            _vm
                                                              .moment()
                                                              .format(
                                                                "YYYY-MM-DD"
                                                              )
                                                          ]
                                                        }
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("span", [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "orange--text text-capitalize"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                Unsubmitted\n                                            "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "display-1 text--primary"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                " +
                                                              _vm._s(
                                                                _vm.mixin_formatNumber(
                                                                  _vm.total
                                                                    .unsubmitted_reports
                                                                )
                                                              ) +
                                                              "\n                                            "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            " text-capitalize"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                " +
                                                              _vm._s(
                                                                _vm.count
                                                                  .unsubmitted_reports
                                                              ) +
                                                              "\n                                                Reports\n                                            "
                                                          )
                                                        ]
                                                      )
                                                    ])
                                                  ]
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              {
                                                attrs: {
                                                  cols: "12",
                                                  md: "3",
                                                  align: "center",
                                                  justify: "center"
                                                }
                                              },
                                              [
                                                _c(
                                                  "v-btn",
                                                  {
                                                    staticClass: "mt-4 mb-4",
                                                    attrs: {
                                                      text: "",
                                                      to: {
                                                        name:
                                                          "user.expense_reports.index",
                                                        params: {
                                                          status:
                                                            "Submitted Expense Reports",
                                                          date_range: [
                                                            "0000-01-01",
                                                            _vm
                                                              .moment()
                                                              .format(
                                                                "YYYY-MM-DD"
                                                              )
                                                          ]
                                                        }
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("div", [
                                                      _c(
                                                        "div",
                                                        {
                                                          class:
                                                            parseFloat(
                                                              _vm.total
                                                                .pending_for_approval_reports
                                                            ) > 0
                                                              ? "red--text text-capitalize"
                                                              : "text-capitalize"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                Pending for Approval\n                                            "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          class:
                                                            parseFloat(
                                                              _vm.total
                                                                .pending_for_approval_reports
                                                            ) > 0
                                                              ? "display-1 red--text"
                                                              : "display-1 text--primary"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                " +
                                                              _vm._s(
                                                                _vm.mixin_formatNumber(
                                                                  _vm.total
                                                                    .pending_for_approval_reports
                                                                )
                                                              ) +
                                                              "\n                                            "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            " text-capitalize"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                " +
                                                              _vm._s(
                                                                _vm.count
                                                                  .pending_for_approval_reports
                                                              ) +
                                                              "\n                                                Reports\n                                            "
                                                          )
                                                        ]
                                                      )
                                                    ])
                                                  ]
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              {
                                                attrs: {
                                                  cols: "12",
                                                  md: "3",
                                                  align: "center",
                                                  justify: "center"
                                                }
                                              },
                                              [
                                                _c(
                                                  "v-btn",
                                                  {
                                                    staticClass: "mt-4 mb-4",
                                                    attrs: {
                                                      text: "",
                                                      to: {
                                                        name:
                                                          "user.expense_reports.index",
                                                        params: {
                                                          status:
                                                            "Approved Expense Reports",
                                                          date_range: [
                                                            "0000-01-01",
                                                            _vm
                                                              .moment()
                                                              .format(
                                                                "YYYY-MM-DD"
                                                              )
                                                          ]
                                                        }
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("div", [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "green--text text-capitalize"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                Awaiting Reimbursement\n                                            "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "display-1 text--primary"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                " +
                                                              _vm._s(
                                                                _vm.mixin_formatNumber(
                                                                  _vm.total
                                                                    .awaiting_for_reimbursement_reports
                                                                )
                                                              ) +
                                                              "\n                                            "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            " text-capitalize"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                " +
                                                              _vm._s(
                                                                _vm.count
                                                                  .awaiting_for_reimbursement_reports
                                                              ) +
                                                              "\n                                                Reports\n                                            "
                                                          )
                                                        ]
                                                      )
                                                    ])
                                                  ]
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              {
                                                attrs: {
                                                  cols: "12",
                                                  md: "3",
                                                  align: "center",
                                                  justify: "center"
                                                }
                                              },
                                              [
                                                _c(
                                                  "v-btn",
                                                  {
                                                    staticClass: "mt-4 mb-4",
                                                    attrs: {
                                                      text: "",
                                                      to: {
                                                        name:
                                                          "user.payments.index",
                                                        params: {
                                                          status:
                                                            "Released Payments",
                                                          date_range: [
                                                            "0000-01-01",
                                                            _vm
                                                              .moment()
                                                              .format(
                                                                "YYYY-MM-DD"
                                                              )
                                                          ]
                                                        }
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("div", [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "orange--text text-capitalize"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                Payment to Receive\n                                            "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "display-1 text--primary"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                " +
                                                              _vm._s(
                                                                _vm.mixin_formatNumber(
                                                                  _vm.total
                                                                    .payment_to_receive
                                                                )
                                                              ) +
                                                              "\n                                            "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            " text-capitalize"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                " +
                                                              _vm._s(
                                                                _vm.count
                                                                  .payment_to_receive
                                                              ) +
                                                              "\n                                                Reports\n                                            "
                                                          )
                                                        ]
                                                      )
                                                    ])
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
                "div",
                { staticClass: "mt-4" },
                [
                  _c("v-hover", {
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(ref) {
                          var hover = ref.hover
                          return [
                            _c(
                              "v-card",
                              {
                                staticClass: "mx-auto",
                                attrs: { elevation: hover ? 5 : 2 }
                              },
                              [
                                _c(
                                  "v-toolbar",
                                  { attrs: { flat: "", dense: "" } },
                                  [
                                    _c(
                                      "v-toolbar-title",
                                      { staticClass: "green--text" },
                                      [
                                        _vm._v(
                                          "\n                            Expenses by category\n                        "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("v-spacer"),
                                    _vm._v(" "),
                                    _vm.$store.getters.user.is_admin &&
                                    _vm.mixin_can("view all users expenses")
                                      ? _c(
                                          "v-menu",
                                          {
                                            attrs: {
                                              "close-on-content-click": false,
                                              "nudge-width": 200,
                                              "offset-y": "",
                                              left: "",
                                              bottom: ""
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "activator",
                                                  fn: function(ref) {
                                                    var on = ref.on
                                                    var attrs = ref.attrs
                                                    return [
                                                      _c(
                                                        "v-btn",
                                                        _vm._g(
                                                          _vm._b(
                                                            {
                                                              attrs: {
                                                                icon: ""
                                                              }
                                                            },
                                                            "v-btn",
                                                            attrs,
                                                            false
                                                          ),
                                                          on
                                                        ),
                                                        [
                                                          _c("v-icon", [
                                                            _vm._v(
                                                              "mdi-dots-vertical"
                                                            )
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
                                            _c(
                                              "v-card",
                                              [
                                                _c(
                                                  "v-list",
                                                  [
                                                    _c(
                                                      "v-list-item",
                                                      [
                                                        _c("v-select", {
                                                          attrs: {
                                                            label: "Filter",
                                                            items:
                                                              _vm.filterItems,
                                                            "item-text": "text",
                                                            "item-value":
                                                              "value"
                                                          },
                                                          on: {
                                                            change:
                                                              _vm.onCategoryChange
                                                          },
                                                          model: {
                                                            value: _vm.filter,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.filter = $$v
                                                            },
                                                            expression: "filter"
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
                                      : _vm._e()
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-row",
                                  { staticClass: "ml-4 mb-4" },
                                  [
                                    _c(
                                      "v-col",
                                      {
                                        staticClass: "mt-5",
                                        attrs: { md: "4" }
                                      },
                                      [
                                        _c("DoughnutChart", {
                                          attrs: {
                                            data: _vm.doughnutChartData,
                                            options: _vm.doughnutChartOptions
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
                                        _c(
                                          "v-card",
                                          {
                                            staticClass: "overflow-y-auto",
                                            attrs: {
                                              flat: "",
                                              "max-height": "500"
                                            }
                                          },
                                          [
                                            _c(
                                              "v-card-text",
                                              [
                                                _c("HorizontalBarChart", {
                                                  attrs: {
                                                    data:
                                                      _vm.horizontalBarChartData,
                                                    options:
                                                      _vm.horizontalBarChartOptions
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
                          ]
                        }
                      }
                    ])
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                [
                  _c("v-hover", {
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(ref) {
                          var hover = ref.hover
                          return [
                            _c(
                              "v-card",
                              {
                                staticClass: "mx-auto",
                                attrs: { elevation: hover ? 5 : 2 }
                              },
                              [
                                _c(
                                  "v-toolbar",
                                  { attrs: { flat: "", dense: "" } },
                                  [
                                    _c(
                                      "v-toolbar-title",
                                      { staticClass: "green--text" },
                                      [
                                        _vm._v(
                                          "\n                            Expenses by date\n                        "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("v-spacer"),
                                    _vm._v(" "),
                                    _c(
                                      "v-menu",
                                      {
                                        attrs: {
                                          "close-on-content-click": false,
                                          "nudge-width": 200,
                                          "offset-y": "",
                                          left: "",
                                          bottom: ""
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "activator",
                                              fn: function(ref) {
                                                var on = ref.on
                                                var attrs = ref.attrs
                                                return [
                                                  _c(
                                                    "v-btn",
                                                    _vm._g(
                                                      _vm._b(
                                                        { attrs: { icon: "" } },
                                                        "v-btn",
                                                        attrs,
                                                        false
                                                      ),
                                                      on
                                                    ),
                                                    [
                                                      _c("v-icon", [
                                                        _vm._v(
                                                          "mdi-dots-vertical"
                                                        )
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
                                        _c(
                                          "v-card",
                                          [
                                            _c(
                                              "v-list",
                                              [
                                                _c(
                                                  "v-list-item",
                                                  [
                                                    _c("v-select", {
                                                      attrs: {
                                                        label: "Group by",
                                                        items: _vm.groupByItems,
                                                        "item-text": "text",
                                                        "item-value": "value"
                                                      },
                                                      on: {
                                                        change:
                                                          _vm.onTimeUnitChange
                                                      },
                                                      model: {
                                                        value: _vm.groupBy,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.groupBy = $$v
                                                        },
                                                        expression: "groupBy"
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
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-row",
                                  [
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12" } },
                                      [
                                        _c("LineChart", {
                                          attrs: {
                                            data: _vm.lineChartData,
                                            options: _vm.lineChartOptions
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
          )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chart/HorizontalBarChart.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/chart/HorizontalBarChart.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HorizontalBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HorizontalBarChart.vue?vue&type=script&lang=js& */ "./resources/js/components/chart/HorizontalBarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _HorizontalBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chart/HorizontalBarChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chart/HorizontalBarChart.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/chart/HorizontalBarChart.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalBarChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chart/HorizontalBarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/dashboard/Index.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/pages/dashboard/Index.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_397ecbbd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=397ecbbd& */ "./resources/js/views/pages/dashboard/Index.vue?vue&type=template&id=397ecbbd&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/dashboard/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_397ecbbd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_397ecbbd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/dashboard/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/dashboard/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/pages/dashboard/Index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/dashboard/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/dashboard/Index.vue?vue&type=template&id=397ecbbd&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/pages/dashboard/Index.vue?vue&type=template&id=397ecbbd& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_397ecbbd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=397ecbbd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/dashboard/Index.vue?vue&type=template&id=397ecbbd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_397ecbbd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_397ecbbd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);