(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chart/DoughnutChart.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chart/DoughnutChart.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartjs-plugin-datalabels */ "./node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.js");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Doughnut"],
  props: ["data", "options"],
  methods: {
    update: function update() {
      this.$data._chart.update();
    }
  },
  mounted: function mounted() {
    this.addPlugin(chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1___default.a);
    this.renderChart(this.data, this.options);
    this.$emit("updateChart");
  }
});

/***/ }),

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
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["HorizontalBar"],
  props: ["data", "options"],
  methods: {
    update: function update() {
      this.$data._chart.update();
    }
  },
  mounted: function mounted() {
    this.addPlugin(chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1___default.a);
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chart/LineChart.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chart/LineChart.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Line"],
  props: ["data", "options"],
  methods: {
    update: function update() {
      this.$data._chart.update();
    }
  },
  mounted: function mounted() {
    this.renderChart(this.data, {
      maintainAspectRatio: false
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/dashboard/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/dashboard/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
/* harmony import */ var _components_daterangepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/daterangepicker/DateRangePicker */ "./resources/js/components/daterangepicker/DateRangePicker.vue");
/* harmony import */ var _components_chart_DoughnutChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/chart/DoughnutChart */ "./resources/js/components/chart/DoughnutChart.vue");
/* harmony import */ var _components_chart_HorizontalBarChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/chart/HorizontalBarChart */ "./resources/js/components/chart/HorizontalBarChart.vue");
/* harmony import */ var _components_chart_LineChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/chart/LineChart */ "./resources/js/components/chart/LineChart.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    DoughnutChart: _components_chart_DoughnutChart__WEBPACK_IMPORTED_MODULE_4__["default"],
    // PieChart,
    // BarChart,
    HorizontalBarChart: _components_chart_HorizontalBarChart__WEBPACK_IMPORTED_MODULE_5__["default"],
    LineChart: _components_chart_LineChart__WEBPACK_IMPORTED_MODULE_6__["default"],
    DateRangePicker: _components_daterangepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_3__["default"]
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
      user: this.$store.getters.user
    };
  },
  methods: {
    load_department_expenses: function load_department_expenses(start, end, user) {
      var _this2 = this;

      var _this = this;

      axios.get("/api/data/departments_expenses_summary", {
        params: {
          start_date: start,
          end_date: end,
          user_id: user,
          admin_page: false
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

        _this2.updatePieChartValues(labels, percentages, backgroundColors);

        _this2.updateBarChartValues(labels, data, backgroundColors);
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

        _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
      });
    },
    load_expense_types_expenses: function load_expense_types_expenses(start, end, user) {
      var _this3 = this;

      var _this = this;

      axios.get("/api/data/expense_types_expenses_summary", {
        params: {
          start_date: start,
          end_date: end,
          user_id: user,
          admin_page: false
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

        _this3.updatePieChartValues(labels, percentages, backgroundColors);

        _this3.updateBarChartValues(labels, data, backgroundColors);
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response); // _this.mixin_errorDialog(
        //     `Error ${error.response.status}`,
        //     error.response.statusText
        // );
      });
    },
    load_users_expenses: function load_users_expenses(start, end, user) {
      var _this4 = this;

      var _this = this;

      axios.get("/api/data/users_expenses_summary", {
        params: {
          start_date: start,
          end_date: end,
          user_id: user,
          admin_page: false
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

        _this4.updatePieChartValues(labels, percentages, backgroundColors);

        _this4.updateBarChartValues(labels, data, backgroundColors);
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

        _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
      });
    },
    load_expenses_summary: function load_expenses_summary(start, end, time_unit, user) {
      var _this5 = this;

      var _this = this;

      axios.get("/api/data/expenses_summary", {
        params: {
          start_date: start,
          end_date: end,
          time_unit: time_unit,
          user_id: user,
          admin_page: false
        }
      }).then(function (response) {
        switch (_this.groupBy) {
          case "day":
            _this.lineChart_labels = response.data.map(function (item) {
              return item.text;
            });
            break;

          case "week":
            _this.lineChart_labels = response.data.map(function (item) {
              return "".concat(moment__WEBPACK_IMPORTED_MODULE_0___default()(item.text).format("YYYY-MM"), " W:").concat(_this5.getWeekInMonth(new Date(item.text)));
            });
            break;

          case "month":
            _this.lineChart_labels = response.data.map(function (item) {
              return moment__WEBPACK_IMPORTED_MODULE_0___default()(item.text).format("MMM YYYY");
            });
            break;

          case "quarter":
            _this.lineChart_labels = response.data.map(function (item) {
              return "".concat(moment__WEBPACK_IMPORTED_MODULE_0___default()(item.text).format("YYYY"), " Q:").concat(moment__WEBPACK_IMPORTED_MODULE_0___default()(item.text).format("Q"));
            });
            break;

          case "year":
            _this.lineChart_labels = response.data.map(function (item) {
              return moment__WEBPACK_IMPORTED_MODULE_0___default()(item.text).format("YYYY");
            });
            break;

          default:
            break;
        }

        _this.lineChart_data = response.data.map(function (item) {
          return item.value;
        });

        _this.updateLineChartValues(_this.lineChart_labels, _this.lineChart_data);
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response); // _this.mixin_errorDialog(
        //     `Error ${error.response.status}`,
        //     error.response.statusText
        // );
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
      var _this6 = this;

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
              return _this6.mixin_formatNumber(value) + " %";
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
            gridLines: {
              display: true,
              lineWidth: "4px",
              color: "rgba(0, 0, 0, .2)",
              zeroLineColor: "transparent"
            },
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
          type: "line",
          data: [],
          backgroundColor: "#dbffe5",
          borderColor: "#4caf50",
          pointBorderColor: "#4caf50",
          pointBackgroundColor: "#4caf50",
          fill: true,
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
      this.$refs.horizontalBar_chart.update();
    },
    updatePieChartValues: function updatePieChartValues(labels, data, backgroundColors) {
      this.doughnutChartData.labels = labels;
      this.doughnutChartData.datasets = [{
        label: "",
        backgroundColor: backgroundColors,
        data: data
      }];
      this.$refs.donut_chart.update();
    },
    updateLineChartValues: function updateLineChartValues(labels, data) {
      this.lineChartData.labels = labels;
      this.lineChartData.datasets[0].data = data;
      this.$refs.line_chart.update();
    },
    onDateChange: function onDateChange(start, end) {
      this.expenses_by_category = [];
      this.start_date = start;
      this.end_date = end; // this.onCategoryChange();

      this.load_expense_reports(this.start_date.format("YYYY-MM-DD"), this.end_date.format("YYYY-MM-DD"));
      this.onTimeUnitChange();
    },
    onCategoryChange: function onCategoryChange() {
      var start = this.date_range[0];
      var end = this.date_range[1];

      switch (this.filter) {
        case "expense_type":
          this.load_expense_types_expenses(start, end, this.user.id);
          break;

        case "department":
          this.load_department_expenses(start, end, this.user.id);
          break;

        case "user":
          this.load_users_expenses(start, end, this.user.id);
          break;

        default:
          this.load_expense_types_expenses(start, end, this.user.id);
          break;
      }
    },
    onTimeUnitChange: function onTimeUnitChange() {
      this.load_expenses_summary(this.date_range[0], this.date_range[1], this.groupBy, this.user.id);
    },
    updateDates: function updateDates(e) {
      this.date_range = e;
      this.expenses_by_category = []; // this.onCategoryChange();

      this.onTimeUnitChange();
      this.getExpenseStats(this.date_range[0], this.date_range[1], this.user.id);
    },
    updateUser: function updateUser() {
      // this.onCategoryChange();
      this.onTimeUnitChange();
      this.getExpenseStats(this.date_range[0], this.date_range[1], this.user.id);
    },
    getExpenseStats: function getExpenseStats(start, end, emp) {
      var _this7 = this;

      var _this = this;

      axios.get("/api/data/expense_stats?start_date=".concat(start, "&end_date=").concat(end, "&user_id=").concat(emp)).then(function (response) {
        _this.total = response.data.total;
        _this.count = response.data.count;
        _this.loader = false;

        _this7.load_expense_types_expenses(_this7.date_range[0], _this7.date_range[1], _this7.user.id);

        _this7.load_expenses_summary(_this7.date_range[0], _this7.date_range[1], _this7.groupBy, _this7.user.id);
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

        _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);

        _this.loader = true;
      });
    }
  },
  mounted: function mounted() {
    this.$store.dispatch("AUTH_USER"); // this.load_expense_types_expenses(
    //     this.date_range[0],
    //     this.date_range[1],
    //     this.user.id
    // );

    this.load_pie_chart();
    this.load_bar_chart();
    this.load_line_chart(); // this.load_expenses_summary(
    //     this.date_range[0],
    //     this.date_range[1],
    //     this.groupBy,
    //     this.user.id
    // );

    this.getExpenseStats(this.date_range[0], this.date_range[1], this.user.id);
  },
  created: function created() {
    this.$store.dispatch("AUTH_NOTIFICATIONS");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/dashboard/Index.vue?vue&type=template&id=fbd19c8c&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/dashboard/Index.vue?vue&type=template&id=fbd19c8c& ***!
  \**************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expense_reports/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\resources\\js\\views\\modules\\admin\\expense_reports\\Index.vue: Unexpected token, expected \")\" (1632:75)\n\n\u001b[0m \u001b[90m 1630 | \u001b[39m                                headerRows\u001b[33m:\u001b[39m \u001b[35m1\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 1631 | \u001b[39m                                widths\u001b[33m:\u001b[39m table_columns\u001b[33m.\u001b[39mmap((item\u001b[33m,\u001b[39m index) \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 1632 | \u001b[39m                                    \u001b[36mif\u001b[39m((table_columns\u001b[33m.\u001b[39mlength \u001b[33m-\u001b[39m \u001b[35m1\u001b[39m \u001b[33m==\u001b[39m index) {\u001b[0m\n\u001b[0m \u001b[90m      | \u001b[39m                                                                           \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 1633 | \u001b[39m                                        \u001b[36mreturn\u001b[39m \u001b[32m\"*\"\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 1634 | \u001b[39m                                    }\u001b[0m\n\u001b[0m \u001b[90m 1635 | \u001b[39m\u001b[0m\n    at Parser._raise (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:766:17)\n    at Parser.raiseWithData (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:759:17)\n    at Parser.raise (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:753:17)\n    at Parser.unexpected (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:8966:16)\n    at Parser.expect (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:8952:28)\n    at Parser.parseHeaderExpression (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:11703:10)\n    at Parser.parseIfStatement (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:11784:22)\n    at Parser.parseStatementContent (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:11476:21)\n    at Parser.parseStatement (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:11431:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:12013:25)\n    at Parser.parseBlockBody (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:11999:10)\n    at Parser.parseBlock (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:11983:10)\n    at Parser.parseFunctionBody (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:10963:24)\n    at Parser.parseArrowExpression (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:10932:10)\n    at Parser.parseParenAndDistinguishExpression (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:10501:12)\n    at Parser.parseExprAtom (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:10177:21)\n    at Parser.parseExprSubscripts (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9844:23)\n    at Parser.parseUpdate (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9824:21)\n    at Parser.parseMaybeUnary (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9813:17)\n    at Parser.parseExprOps (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9683:23)\n    at Parser.parseMaybeConditional (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9657:23)\n    at Parser.parseMaybeAssign (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9620:21)\n    at C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9586:39\n    at Parser.allowInAnd (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:11303:12)\n    at Parser.parseMaybeAssignAllowIn (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9586:17)\n    at Parser.parseExprListItem (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:11051:18)\n    at Parser.parseCallExpressionArguments (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:10053:22)\n    at Parser.parseCoverCallAndAsyncArrowHead (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9960:29)\n    at Parser.parseSubscript (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9896:19)\n    at Parser.parseSubscripts (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9867:19)\n    at Parser.parseExprSubscripts (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9850:17)\n    at Parser.parseUpdate (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9824:21)\n    at Parser.parseMaybeUnary (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9813:17)\n    at Parser.parseExprOps (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9683:23)\n    at Parser.parseMaybeConditional (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9657:23)\n    at Parser.parseMaybeAssign (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9620:21)");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/Index.vue?vue&type=template&id=b1b35a78&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expense_reports/Index.vue?vue&type=template&id=b1b35a78& ***!
  \*********************************************************************************************************************************************************************************************************************************/
>>>>>>> develop
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
<<<<<<< HEAD
      _vm.loader
        ? _c(
            "v-container",
            { staticStyle: { height: "400px" } },
            [
              _c(
                "v-row",
                {
                  staticClass: "fill-height",
                  attrs: { "align-content": "center", justify: "center" }
                },
                [
                  _c(
                    "v-col",
                    {
                      staticClass: "subtitle-1 text-center",
                      attrs: { cols: "12" }
                    },
                    [
                      _vm._v(
                        "\n                Loading, Please wait...\n            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "6" } },
                    [
                      _c("v-progress-linear", {
                        attrs: {
                          color: "green accent-4",
                          indeterminate: "",
                          rounded: "",
                          height: "6"
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
        : _c(
            "v-card",
            { staticClass: "elevation-0 pt-0" },
            [
              _c(
                "v-card-title",
                { staticClass: "pt-0" },
                [
                  _c("h4", { staticClass: "title green--text" }, [
                    _vm._v("Dashboard")
                  ]),
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
                      scopedSlots: _vm._u([
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
                                [_c("v-icon", [_vm._v("mdi-dots-vertical")])],
                                1
                              )
                            ]
                          }
                        }
                      ])
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
                                  _c("DateRangePicker", {
                                    attrs: {
                                      preset: _vm.preset,
                                      presets: _vm.presets,
                                      value: _vm.date_range
                                    },
                                    on: { updateDates: _vm.updateDates }
                                  })
                                ],
                                1
                              )
=======
      _c(
        "v-card",
        { staticClass: "elevation-0 pt-0" },
        [
          _c(
            "v-card-title",
            { staticClass: "pt-0" },
            [
              _c("h4", { staticClass: "title green--text" }, [
                _vm._v("Expense Reports")
              ]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-tooltip",
                {
                  attrs: { bottom: "" },
                  scopedSlots: _vm._u(
                    [
                      _vm.mixin_can("add expense reports")
                        ? {
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
                                        staticClass: "elevation-3 mr-2",
                                        attrs: {
                                          color: "green",
                                          to: {
                                            name: "admin.expense_reports.create"
                                          },
                                          dark: "",
                                          fab: "",
                                          "x-small": ""
                                        }
                                      },
                                      "v-btn",
                                      attrs,
                                      false
                                    ),
                                    on
                                  ),
                                  [
                                    _c("v-icon", { attrs: { dark: "" } }, [
                                      _vm._v("mdi-plus")
                                    ])
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        : null
                    ],
                    null,
                    true
                  )
                },
                [_vm._v(" "), _c("span", [_vm._v("Add New")])]
              ),
              _vm._v(" "),
              _c(
                "v-tooltip",
                {
                  attrs: { bottom: "" },
                  scopedSlots: _vm._u([
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
                                  staticClass: "elevation-3 mr-2",
                                  attrs: {
                                    color: "green",
                                    dark: "",
                                    fab: "",
                                    "x-small": ""
                                  },
                                  on: { click: _vm.onRefresh }
                                },
                                "v-btn",
                                attrs,
                                false
                              ),
                              on
                            ),
                            [
                              _c("v-icon", { attrs: { dark: "" } }, [
                                _vm._v("mdi-reload")
                              ])
                            ],
                            1
                          )
                        ]
                      }
                    }
                  ])
                },
                [_vm._v(" "), _c("span", [_vm._v("Refresh")])]
              ),
              _vm._v(" "),
              _c(
                "v-menu",
                {
                  attrs: {
                    transition: "scale-transition",
                    "close-on-content-click": false,
                    "nudge-width": 200,
                    "offset-y": "",
                    left: "",
                    bottom: ""
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "activator",
                      fn: function(ref) {
                        var menu = ref.on
                        var attrs = ref.attrs
                        return [
                          _c(
                            "v-tooltip",
                            {
                              attrs: { bottom: "" },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "activator",
                                    fn: function(ref) {
                                      var tooltip = ref.on
                                      return [
                                        _c(
                                          "v-btn",
                                          _vm._g(
                                            _vm._b(
                                              {
                                                staticClass: "elevation-3 mr-2",
                                                attrs: {
                                                  color: "green",
                                                  dark: "",
                                                  fab: "",
                                                  "x-small": ""
                                                }
                                              },
                                              "v-btn",
                                              attrs,
                                              false
                                            ),
                                            Object.assign({}, tooltip, menu)
                                          ),
                                          [
                                            _c(
                                              "v-icon",
                                              { attrs: { dark: "" } },
                                              [_vm._v("mdi-filter")]
                                            )
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
                            [_vm._v(" "), _c("span", [_vm._v("Filter Data")])]
                          )
                        ]
                      }
                    }
                  ])
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
                              _c("DateRangePicker", {
                                attrs: {
                                  preset: _vm.preset,
                                  presets: _vm.presets,
                                  value: _vm.date_range
                                },
                                on: { updateDates: _vm.updateDates }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item",
                            [
                              _c("v-select", {
                                attrs: { items: _vm.statuses, label: "Status" },
                                model: {
                                  value: _vm.status,
                                  callback: function($$v) {
                                    _vm.status = $$v
                                  },
                                  expression: "status"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item",
                            [
                              _c("v-select", {
                                attrs: {
                                  items: _vm.users,
                                  "item-text": "full_name",
                                  "item-value": "id",
                                  label: "Employee"
                                },
                                model: {
                                  value: _vm.user,
                                  callback: function($$v) {
                                    _vm.user = $$v
                                  },
                                  expression: "user"
                                }
                              })
>>>>>>> develop
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
<<<<<<< HEAD
              _c("v-card-subtitle"),
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
                                            attrs: { text: "" }
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
                                                name: "user.expenses.index"
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
                                                          "\n                                                Payment to Receive:\n                                                Reimbursed expenses waiting\n                                                to be received by the\n                                                user\n                                            "
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
                                                          "user.expense_reports.index"
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
                                                          "user.expense_reports.index"
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
                                                          "user.expense_reports.index"
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
                                                          "user.payments.index"
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
                                    _c("v-toolbar-title", [
                                      _vm._v(
                                        "\n                            Expenses by category\n                        "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("v-spacer")
=======
              _c(
                "v-menu",
                {
                  attrs: {
                    "offset-y": "",
                    transition: "scale-transition",
                    "close-on-content-click": false,
                    left: ""
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "activator",
                      fn: function(ref) {
                        var menu = ref.on
                        var attrs = ref.attrs
                        return [
                          _c(
                            "v-tooltip",
                            {
                              attrs: { bottom: "" },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "activator",
                                    fn: function(ref) {
                                      var tooltip = ref.on
                                      return [
                                        _c(
                                          "v-btn",
                                          _vm._g(
                                            _vm._b(
                                              {
                                                staticClass: "elevation-3",
                                                attrs: {
                                                  color: "green",
                                                  dark: "",
                                                  fab: "",
                                                  "x-small": ""
                                                }
                                              },
                                              "v-btn",
                                              attrs,
                                              false
                                            ),
                                            Object.assign({}, tooltip, menu)
                                          ),
                                          [
                                            _c(
                                              "v-icon",
                                              { attrs: { dark: "" } },
                                              [
                                                _vm._v(
                                                  "mdi-view-grid-plus-outline"
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
                                true
                              )
                            },
                            [_vm._v(" "), _c("span", [_vm._v("More Options")])]
                          )
                        ]
                      }
                    }
                  ])
                },
                [
                  _vm._v(" "),
                  _c(
                    "v-list",
                    { attrs: { "max-width": "250" } },
                    [
                      _c(
                        "v-list-item",
                        { on: { click: _vm.onSubmit } },
                        [
                          _c(
                            "v-list-item-icon",
                            [_c("v-icon", [_vm._v("mdi-file-send-outline")])],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-list-item-subtitle", [
                            _vm._v(
                              "\n                            Submit Report(s)\n                        "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item",
                        { on: { click: _vm.onApprove } },
                        [
                          _c(
                            "v-list-item-icon",
                            [_c("v-icon", [_vm._v("mdi-file-check-outline")])],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-list-item-subtitle", [
                            _vm._v(
                              "\n                            Approve Report(s)\n                        "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item",
                        { on: { click: _vm.onReject } },
                        [
                          _c(
                            "v-list-item-icon",
                            [_c("v-icon", [_vm._v("mdi-close")])],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-list-item-subtitle", [
                            _vm._v(
                              "\n                            Reject Report(s)\n                        "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item",
                        { on: { click: _vm.onDelete } },
                        [
                          _c(
                            "v-list-item-icon",
                            [_c("v-icon", [_vm._v("mdi-close")])],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-list-item-subtitle", [
                            _vm._v(
                              "\n                            Cancel Report(s)\n                        "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item",
                        { on: { click: _vm.onDuplicate } },
                        [
                          _c(
                            "v-list-item-icon",
                            [_c("v-icon", [_vm._v("mdi-content-copy")])],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-list-item-subtitle", [
                            _vm._v(
                              "\n                            Duplicate Report(s)\n                        "
                            )
                          ])
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
            "v-card-subtitle",
            [
              _c("v-text-field", {
                attrs: {
                  "append-icon": "mdi-magnify",
                  label: "Search",
                  "single-line": "",
                  "hide-details": ""
                },
                model: {
                  value: _vm.search,
                  callback: function($$v) {
                    _vm.search = $$v
                  },
                  expression: "search"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-data-table",
                {
                  staticClass: "elevation-0",
                  attrs: {
                    headers: _vm.headers,
                    items: _vm.items,
                    loading: _vm.loading,
                    options: _vm.options,
                    "server-items-length": _vm.totalItems,
                    "footer-props": {
                      itemsPerPageOptions: [10, 20, 50, 100],
                      showFirstLastPage: true,
                      firstIcon: "mdi-page-first",
                      lastIcon: "mdi-page-last",
                      prevIcon: "mdi-chevron-left",
                      nextIcon: "mdi-chevron-right"
                    },
                    "show-expand": "",
                    "single-expand": "",
                    "show-select": "",
                    "item-key": "id"
                  },
                  on: {
                    "update:options": function($event) {
                      _vm.options = $event
                    }
                  },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "item.status.status",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c(
                              "v-chip",
                              {
                                attrs: {
                                  color: item.status.color,
                                  dark: "",
                                  small: ""
                                }
                              },
                              [_vm._v(_vm._s(item.status.status))]
                            )
                          ]
                        }
                      },
                      {
                        key: "item.date",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _vm._v(
                              "\n                    " +
                                _vm._s(item.from) +
                                " ~ " +
                                _vm._s(item.to) +
                                "\n                "
                            )
                          ]
                        }
                      },
                      {
                        key: "expanded-item",
                        fn: function(ref) {
                          var headers = ref.headers
                          var item = ref.item
                          return [
                            _c(
                              "td",
                              { attrs: { colspan: headers.length } },
                              [
                                _c("v-container", [
                                  _c("table", [
                                    _c("tr", [
                                      _c("td", [
                                        _c("strong", [
                                          _vm._v("Reimbursable Amount")
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(":")]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(
                                              _vm.mixin_formatNumber(
                                                item.total_reimbursable
                                              )
                                            ) +
                                            "\n                                    "
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [
                                        _c("strong", [_vm._v("Paid")])
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(":")]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(
                                              _vm.mixin_formatNumber(item.paid)
                                            ) +
                                            "\n                                    "
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    item.balance > 0
                                      ? _c("tr", [
                                          _c("td", [
                                            _c("strong", [_vm._v("Balance")])
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [_vm._v(":")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(
                                                  _vm.mixin_formatNumber(
                                                    item.balance
                                                  )
                                                ) +
                                                "\n                                    "
                                            )
                                          ])
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [
                                        _c("strong", [_vm._v("Status")])
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(":")]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(item.status.status) +
                                            "\n                                        (" +
                                            _vm._s(item.status.remarks) +
                                            ")\n                                    "
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    item.remarks
                                      ? _c("tr", [
                                          _c("td", [
                                            _c("strong", [_vm._v("Remarks")])
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [_vm._v(":")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(item.remarks))
                                          ])
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [
                                        _c("strong", [_vm._v("Created")])
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(":")]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(
                                              _vm.mixin_formatDate(
                                                item.created_at,
                                                "YYYY-MM-DD HH:mm:ss"
                                              )
                                            ) +
                                            "\n                                    "
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [
                                        _c("strong", [_vm._v("Submitted")])
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(":")]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(
                                              _vm.mixin_formatDate(
                                                item.submitted_at,
                                                "YYYY-MM-DD HH:mm:ss"
                                              )
                                            ) +
                                            "\n                                    "
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [
                                        _c("strong", [_vm._v("Approved")])
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(":")]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(
                                              _vm.mixin_formatDate(
                                                item.approved_at,
                                                "YYYY-MM-DD HH:mm:ss"
                                              )
                                            ) +
                                            "\n                                    "
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [
                                        _c("strong", [_vm._v("Late Submitted")])
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(":")]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(item.is_late_submitted))
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [
                                        _c("strong", [_vm._v("Late Approved")])
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(":")]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(item.is_late_approved))
                                      ])
                                    ])
                                  ])
                                ])
                              ],
                              1
                            )
                          ]
                        }
                      },
                      {
                        key: "item.total",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _vm._v(
                              "\n                    " +
                                _vm._s(_vm.mixin_formatNumber(item.total)) +
                                "\n                "
                            )
                          ]
                        }
                      },
                      {
                        key: "item.user",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _vm._v(
                              "\n                    " +
                                _vm._s(
                                  item.user.last_name +
                                    ", " +
                                    item.user.first_name
                                ) +
                                "\n                "
                            )
                          ]
                        }
                      },
                      {
                        key: "item.updated_at",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _vm._v(
                              "\n                    " +
                                _vm._s(
                                  _vm.mixin_getHumanDate(item.updated_at)
                                ) +
                                "\n                "
                            )
                          ]
                        }
                      },
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
                                    return _vm.onShow(item)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                        mdi-eye\n                    "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _vm.show_edit(item)
                              ? _c(
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
                                      "\n                        mdi-pencil\n                    "
                                    )
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            item.is_late_submitted || item.is_late_approved
                              ? _c(
                                  "v-tooltip",
                                  {
                                    attrs: { bottom: "" },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "activator",
                                          fn: function(ref) {
                                            var on = ref.on
                                            var attrs = ref.attrs
                                            return [
                                              _c(
                                                "v-icon",
                                                _vm._g(
                                                  _vm._b(
                                                    {
                                                      attrs: {
                                                        color: "red",
                                                        dark: ""
                                                      }
                                                    },
                                                    "v-icon",
                                                    attrs,
                                                    false
                                                  ),
                                                  on
                                                ),
                                                [
                                                  _vm._v(
                                                    "\n                                mdi-alert-circle-outline\n                            "
                                                  )
                                                ]
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
                                    item.is_late_submitted
                                      ? _c("div", [
                                          _vm._v(
                                            "\n                            Late Submitted\n                        "
                                          )
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    item.is_late_approved
                                      ? _c("div", [
                                          _vm._v(
                                            "\n                            Late Approved\n                        "
                                          )
                                        ])
                                      : _vm._e()
                                  ]
                                )
                              : _vm._e()
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
                  _vm._v(" "),
                  _vm._v(" "),
                  _vm._v(" "),
                  _vm._v(" "),
                  _vm._v(" "),
                  _vm._v(" "),
                  _vm._v(" "),
                  _vm.items.length > 0
                    ? _c("template", { slot: "body.append" }, [
                        _c(
                          "tr",
                          { staticClass: "green--text hidden-md-and-up" },
                          [
                            _c("td", { staticClass: "title" }, [
                              _vm._v("\n                            Total: "),
                              _c("strong", [_vm._v(_vm._s(_vm.totalAmount))])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "tr",
                          { staticClass: "green--text hidden-sm-and-down" },
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
                              _c("strong", [_vm._v(_vm._s(_vm.totalAmount))])
                            ]),
                            _vm._v(" "),
                            _c("td"),
                            _vm._v(" "),
                            _c("td"),
                            _vm._v(" "),
                            _c("td"),
                            _vm._v(" "),
                            _c("td")
                          ]
                        )
                      ])
                    : _vm._e()
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c("v-col", { attrs: { cols: "12", md: "8" } }, [
                    _c(
                      "div",
                      { staticClass: "mb-4" },
                      [
                        _vm.totalUnsubmitted > 0
                          ? _c(
                              "v-btn",
                              {
                                attrs: { color: "red", dark: "", small: "" },
                                on: { click: _vm.showAllUnsubmitted }
                              },
                              [
                                _vm._v(
                                  "\n                            Unsubmitted (" +
                                    _vm._s(_vm.totalUnsubmitted) +
                                    ")\n                        "
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.totalUnapproved > 0
                          ? _c(
                              "v-btn",
                              {
                                attrs: { color: "red", dark: "", small: "" },
                                on: { click: _vm.showAllUnapproved }
                              },
                              [
                                _vm._v(
                                  "\n                            For Approval (" +
                                    _vm._s(_vm.totalUnapproved) +
                                    ")\n                        "
                                )
                              ]
                            )
                          : _vm._e()
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", [
                      _c("h4", { staticClass: "green--text" }, [
                        _vm._v(
                          "\n                            Note:\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("h4", { staticClass: "grey--text" }, [
                        _vm._v(
                          "\n                            Due of submission of expense reports :\n                            " +
                            _vm._s(
                              _vm.$store.getters.settings.submission_period
                            ) +
                            "\n                            (" +
                            _vm._s(_vm.maxDate) +
                            ")\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("h4", { staticClass: "grey--text" }, [
                        _vm._v(
                          "\n                            Approval period of expense reports :\n                            " +
                            _vm._s(
                              _vm.$store.getters.settings.approval_period
                            ) +
                            "\n                            days upon submission\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _vm.warning
                        ? _c("h4", { staticClass: "red--text" }, [
                            _vm._v(
                              "\n                            " +
                                _vm._s(_vm.warning) +
                                "\n                        "
                            )
                          ])
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "12", md: "4" } }, [
                    _c(
                      "div",
                      { staticClass: "text-right" },
                      [
                        _c(
                          "v-menu",
                          {
                            attrs: { "offset-y": "" },
                            scopedSlots: _vm._u([
                              {
                                key: "activator",
                                fn: function(ref) {
                                  var attrs = ref.attrs
                                  var on = ref.on
                                  return [
                                    _c(
                                      "v-btn",
                                      _vm._g(
                                        _vm._b(
                                          {
                                            attrs: { color: "green", dark: "" }
                                          },
                                          "v-btn",
                                          attrs,
                                          false
                                        ),
                                        on
                                      ),
                                      [
                                        _vm._v(
                                          "\n                                    Print\n                                "
                                        )
                                      ]
                                    )
                                  ]
                                }
                              }
                            ])
                          },
                          [
                            _vm._v(" "),
                            _c(
                              "v-list",
                              [
                                _c(
                                  "v-list-item",
                                  {
                                    on: {
                                      click: function($event) {
                                        return _vm.onPrint("print", "expense")
                                      }
                                    }
                                  },
                                  [
                                    _c("v-list-item-title", [
                                      _vm._v("Group by expense")
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  {
                                    on: {
                                      click: function($event) {
                                        return _vm.onPrint("print", "user")
                                      }
                                    }
                                  },
                                  [
                                    _c("v-list-item-title", [
                                      _vm._v(
                                        "Group by\n                                        user"
                                      )
                                    ])
>>>>>>> develop
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
<<<<<<< HEAD
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
                                          ref: "donut_chart",
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
                                                  ref: "horizontalBar_chart",
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
=======
                                  "v-list-item",
                                  {
                                    on: {
                                      click: function($event) {
                                        return _vm.onPrint("print", "date")
                                      }
                                    }
                                  },
                                  [
                                    _c("v-list-item-title", [
                                      _vm._v("Group by date")
                                    ])
>>>>>>> develop
                                  ],
                                  1
                                )
                              ],
                              1
                            )
<<<<<<< HEAD
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
                                    _c("v-toolbar-title", [
                                      _vm._v(
                                        "\n                            Expenses by date\n                        "
                                      )
                                    ]),
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
=======
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-menu",
                          {
                            attrs: { "offset-y": "" },
                            scopedSlots: _vm._u([
                              {
                                key: "activator",
                                fn: function(ref) {
                                  var attrs = ref.attrs
                                  var on = ref.on
                                  return [
                                    _c(
                                      "v-btn",
                                      _vm._g(
                                        _vm._b(
                                          {
                                            attrs: { color: "green", dark: "" }
                                          },
                                          "v-btn",
                                          attrs,
                                          false
                                        ),
                                        on
                                      ),
                                      [
                                        _vm._v(
                                          "\n                                    Export to PDF\n                                "
                                        )
                                      ]
                                    )
                                  ]
                                }
                              }
                            ])
                          },
                          [
                            _vm._v(" "),
                            _c(
                              "v-list",
                              [
                                _c(
                                  "v-list-item",
                                  {
                                    on: {
                                      click: function($event) {
                                        return _vm.onPrint("pdf", "expense")
                                      }
                                    }
                                  },
                                  [
                                    _c("v-list-item-title", [
                                      _vm._v("Group by expense")
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  {
                                    on: {
                                      click: function($event) {
                                        return _vm.onPrint("pdf", "user")
                                      }
                                    }
                                  },
                                  [
                                    _c("v-list-item-title", [
                                      _vm._v(
                                        "Group by\n                                        user"
                                      )
                                    ])
>>>>>>> develop
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
<<<<<<< HEAD
                                  "v-row",
                                  [
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12" } },
                                      [
                                        _c("LineChart", {
                                          ref: "line_chart",
                                          attrs: {
                                            data: _vm.lineChartData,
                                            options: _vm.lineChartOptions
                                          }
                                        })
                                      ],
                                      1
                                    )
=======
                                  "v-list-item",
                                  {
                                    on: {
                                      click: function($event) {
                                        return _vm.onPrint("pdf", "date")
                                      }
                                    }
                                  },
                                  [
                                    _c("v-list-item-title", [
                                      _vm._v("Group by date")
                                    ])
>>>>>>> develop
                                  ],
                                  1
                                )
                              ],
                              1
                            )
<<<<<<< HEAD
                          ]
                        }
                      }
                    ])
                  })
=======
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ])
>>>>>>> develop
                ],
                1
              )
            ],
            1
          )
<<<<<<< HEAD
=======
        ],
        1
      )
>>>>>>> develop
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/components/chart/DoughnutChart.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/chart/DoughnutChart.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DoughnutChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DoughnutChart.vue?vue&type=script&lang=js& */ "./resources/js/components/chart/DoughnutChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _DoughnutChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chart/DoughnutChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chart/DoughnutChart.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/chart/DoughnutChart.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DoughnutChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DoughnutChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chart/DoughnutChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DoughnutChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/chart/LineChart.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/chart/LineChart.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LineChart.vue?vue&type=script&lang=js& */ "./resources/js/components/chart/LineChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chart/LineChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chart/LineChart.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/chart/LineChart.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LineChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chart/LineChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/user/dashboard/Index.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/modules/user/dashboard/Index.vue ***!
  \*************************************************************/
=======
/***/ "./resources/js/views/modules/admin/expense_reports/Index.vue":
/*!********************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/Index.vue ***!
  \********************************************************************/
>>>>>>> develop
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _Index_vue_vue_type_template_id_fbd19c8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=fbd19c8c& */ "./resources/js/views/modules/user/dashboard/Index.vue?vue&type=template&id=fbd19c8c&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/user/dashboard/Index.vue?vue&type=script&lang=js&");
=======
/* harmony import */ var _Index_vue_vue_type_template_id_b1b35a78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=b1b35a78& */ "./resources/js/views/modules/admin/expense_reports/Index.vue?vue&type=template&id=b1b35a78&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/expense_reports/Index.vue?vue&type=script&lang=js&");
>>>>>>> develop
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
<<<<<<< HEAD
  _Index_vue_vue_type_template_id_fbd19c8c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_fbd19c8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _Index_vue_vue_type_template_id_b1b35a78___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_b1b35a78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> develop
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/views/modules/user/dashboard/Index.vue"
=======
component.options.__file = "resources/js/views/modules/admin/expense_reports/Index.vue"
>>>>>>> develop
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/views/modules/user/dashboard/Index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/modules/user/dashboard/Index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
=======
/***/ "./resources/js/views/modules/admin/expense_reports/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
>>>>>>> develop
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/dashboard/Index.vue?vue&type=script&lang=js&");
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/Index.vue?vue&type=script&lang=js&");
>>>>>>> develop
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/views/modules/user/dashboard/Index.vue?vue&type=template&id=fbd19c8c&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/modules/user/dashboard/Index.vue?vue&type=template&id=fbd19c8c& ***!
  \********************************************************************************************/
=======
/***/ "./resources/js/views/modules/admin/expense_reports/Index.vue?vue&type=template&id=b1b35a78&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/Index.vue?vue&type=template&id=b1b35a78& ***!
  \***************************************************************************************************/
>>>>>>> develop
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_fbd19c8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=fbd19c8c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/dashboard/Index.vue?vue&type=template&id=fbd19c8c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_fbd19c8c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_fbd19c8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_b1b35a78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=b1b35a78& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/Index.vue?vue&type=template&id=b1b35a78&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_b1b35a78___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_b1b35a78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> develop



/***/ })

}]);