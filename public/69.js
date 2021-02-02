(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[69],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/notifications/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/notifications/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
=======
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
>>>>>>> feature/employee-user-fix
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_daterangepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/daterangepicker/DateRangePicker */ "./resources/js/components/daterangepicker/DateRangePicker.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      loading: true,
      headers: [{
        text: "Date",
        value: "created_at"
      }, {
        text: "Employee",
        value: "data.data.employee.full_name"
      }, {
        text: "Description",
        value: "description"
      }, {
        text: "Status",
        value: "status"
      }, {
        text: "Actions",
        value: "actions",
        sortable: false
      }, {
        text: "",
        value: "data-table-expand"
      }],
      totalAmount: 0,
      items: [],
      // employee: 0,
      // employees: [],
      status: "All Unread",
      statuses: ["All Unread", "All Read", "All Notifications"],
      selected: [],
      search: "",
      totalItems: 0,
      options: {
        sortBy: ["updated_at"],
        sortDesc: [true],
        page: 1,
        itemsPerPage: 10
      },
      date_range: [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("month").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("month").format("YYYY-MM-DD")],
      preset: "",
      presets: ["Today", "Yesterday", "Last 7 Days", "Last 30 Days", "This Week", "This Month", "This Quarter", "This Year", "Last Week", "Last Month", "Last Quarter", "Last Year", "Last 5 Years"]
    };
  },
  methods: {
    updateDates: function updateDates(e) {
      this.date_range = e;
    },
    // loadEmployees() {
    //     let _this = this;
    //     axios
    //         .get("/api/data/employees?only=true")
    //         .then(response => {
    //             _this.employees = response.data.data;
    //             _this.employees.unshift({
    //                 id: 0,
    //                 full_name: "All Employees"
    //             });
    //         })
    //         .catch(error => {
    //             console.log(error);
    //             console.log(error.response);
    //             _this.mixin_errorDialog(
    //                 `Error ${error.response.status}`,
    //                 error.response.statusText
    //             );
    //         });
    // },
    getDataFromApi: function getDataFromApi() {
      var _this2 = this;

      var _this = this;

      _this.loading = true;
      return new Promise(function (resolve, reject) {
        var _this2$options = _this2.options,
            sortBy = _this2$options.sortBy,
            sortDesc = _this2$options.sortDesc,
            page = _this2$options.page,
            itemsPerPage = _this2$options.itemsPerPage;

        var search = _this.search.trim().toLowerCase();

        var status = _this.status;
        var range = _this.date_range; // let employee_id = _this.employee;

        axios.get("/api/notifications", {
          params: {
            search: search,
            sortBy: sortBy[0],
            sortType: sortDesc[0] ? "desc" : "asc",
            page: page,
            itemsPerPage: itemsPerPage,
            status: status,
            start_date: range[0],
            end_date: range[1] ? range[1] : range[0] // employee_id: employee_id

          }
        }).then(function (response) {
          var items = response.data.data;
          var total = response.data.meta.total;
          _this.loading = false;
          resolve({
            items: items,
            total: total
          });
        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);

          _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);

          _this.loading = false;
        });
      });
    },
    onRefresh: function onRefresh() {
      Object.assign(this.$data, this.$options.data.apply(this));
      this.selected = []; // this.loadEmployees();
    },
    onShow: function onShow(item) {
      this.$router.push({
        name: "admin.payments.show",
        params: {
          id: item.id
        }
      });
    },
    onReadUpdate: function onReadUpdate(item, action, type) {
      var _this = this;

      var parameters = {};
      var item_id = item ? item : this.selected.map(function (item) {
        return item.id;
      })[0];

      switch (type) {
        case "all":
          if (this.items.length <= 0) {
            this.mixin_errorDialog("Error", "No data to be updated.");
            return;
          }

          parameters = {
            action: action,
            type: type
          };
          break;

        case "multiple":
          if (this.selected.length <= 0) {
            this.mixin_errorDialog("Error", "No data selected.");
            return;
          }

          parameters = {
            action: action,
            type: type,
            ids: this.selected.map(function (item) {
              return item.id;
            })
          };
          break;

        default:
          parameters = {
            action: action,
            type: type
          };
          break;
      }

      axios.patch("/api/notifications/".concat(item_id), parameters).then(function (response) {
        _this.getDataFromApi().then(function (data) {
          _this.items = data.items;
          _this.totalItems = data.total;
        });

        _this.$store.dispatch("AUTH_NOTIFICATIONS");

        _this.selected = [];
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);
        _this.selected = [];
      });
    }
  },
  computed: {
    params: function params(nv) {
      var _objectSpread2;

      return _objectSpread(_objectSpread({}, this.options), {}, (_objectSpread2 = {
        query: this.search
      }, _defineProperty(_objectSpread2, "query", this.status), _defineProperty(_objectSpread2, "query", this.date_range), _objectSpread2));
    }
  },
  watch: {
    params: {
      handler: function handler() {
        var _this3 = this;

        this.getDataFromApi().then(function (data) {
          _this3.items = data.items;
          _this3.totalItems = data.total;
        });
      },
      deep: true
    },
    items: function items() {
      this.totalAmount = this.mixin_formatNumber(this.items.reduce(function (total, item) {
        return total + item.amount;
      }, 0));
    }
  },
  mounted: function mounted() {},
  created: function created() {
    // this.loadEmployees();
    this.$store.dispatch("AUTH_NOTIFICATIONS");
=======
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
      user: this.$store.getters.user.user
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
>>>>>>> feature/employee-user-fix
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/notifications/Index.vue?vue&type=template&id=0281b314&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/notifications/Index.vue?vue&type=template&id=0281b314& ***!
  \*******************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/dashboard/Index.vue?vue&type=template&id=fbd19c8c&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/dashboard/Index.vue?vue&type=template&id=fbd19c8c& ***!
  \**************************************************************************************************************************************************************************************************************************/
>>>>>>> feature/employee-user-fix
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
      _c(
        "v-card",
        { staticClass: "elevation-0 pt-0" },
        [
          _c(
            "v-card-title",
            { staticClass: "pt-0" },
            [
              _c("h4", { staticClass: "title green--text" }, [
                _vm._v("Notifications")
              ]),
              _vm._v(" "),
              _c("v-spacer"),
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
=======
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
>>>>>>> feature/employee-user-fix
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
              _c(
                "v-menu",
                {
                  attrs: {
                    "offset-y": "",
                    transition: "scale-transition",
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
                    [
                      _c(
                        "v-list-item",
                        {
                          on: {
                            click: function($event) {
                              return _vm.onReadUpdate(null, "read", "all")
                            }
                          }
                        },
                        [
                          _c(
                            "v-list-item-icon",
                            [
                              _c("v-icon", [
                                _vm._v("mdi-credit-card-check-outline")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-list-item-subtitle", [
                            _vm._v(
                              "\n                            Mark all as read\n                        "
                            )
                          ])
                        ],
                        1
                      )
=======
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
>>>>>>> feature/employee-user-fix
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
<<<<<<< HEAD
                    "v-list",
                    [
                      _c(
                        "v-list-item",
                        {
                          on: {
                            click: function($event) {
                              return _vm.onReadUpdate(null, "read", "multiple")
                            }
                          }
                        },
                        [
                          _c(
                            "v-list-item-icon",
                            [
                              _c("v-icon", [
                                _vm._v("mdi-credit-card-check-outline")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-list-item-subtitle", [
                            _vm._v(
                              "\n                            Mark as read\n                        "
                            )
                          ])
                        ],
                        1
                      )
=======
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
>>>>>>> feature/employee-user-fix
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
<<<<<<< HEAD
                    "v-list",
                    [
                      _c(
                        "v-list-item",
                        {
                          on: {
                            click: function($event) {
                              return _vm.onReadUpdate(
                                null,
                                "unread",
                                "multiple"
                              )
                            }
                          }
                        },
                        [
                          _c(
                            "v-list-item-icon",
                            [
                              _c("v-icon", [
                                _vm._v("mdi-credit-card-check-outline")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-list-item-subtitle", [
                            _vm._v(
                              "\n                            Mark as unread\n                        "
                            )
                          ])
                        ],
                        1
                      )
=======
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
>>>>>>> feature/employee-user-fix
                    ],
                    1
                  )
                ],
                1
<<<<<<< HEAD
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c("v-data-table", {
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
                  "show-select": "",
                  "show-expand": "",
                  "single-expand": "",
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
                                      _c("strong", [_vm._v("Last Updated")])
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(":")]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(
                                            _vm.mixin_formatDate(
                                              item.updated_at,
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
                                      _c("strong", [_vm._v("Read at")])
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(":")]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(
                                            _vm.mixin_formatDate(
                                              item.read_at,
                                              "YYYY-MM-DD HH:mm:ss"
                                            )
                                          ) +
                                          "\n                                    "
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
                    },
                    {
                      key: "item.actions",
                      fn: function(ref) {
                        var item = ref.item
                        return [
                          !item.read_at
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
                                                    staticClass: "mr-2",
                                                    attrs: { small: "" },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.onReadUpdate(
                                                          item.id,
                                                          "read",
                                                          "single"
                                                        )
                                                      }
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
                                                  "\n                                mdi-check\n                            "
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
                                  _c("span", [_vm._v("Mark as read")])
                                ]
                              )
                            : _c(
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
                                                    staticClass: "mr-2",
                                                    attrs: { small: "" },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.onReadUpdate(
                                                          item.id,
                                                          "unread",
                                                          "single"
                                                        )
                                                      }
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
                                                  "\n                                mdi-close\n                            "
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
                                  _c("span", [_vm._v("Mark as unread")])
                                ]
                              ),
                          _vm._v(" "),
                          _c(
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
                                                staticClass: "mr-2",
                                                attrs: { small: "" },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.$router.push(
                                                      "/admin/" +
                                                        item.data.data.model +
                                                        "/" +
                                                        item.data.data.id
                                                    )
                                                  }
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
                                              "\n                                mdi-share\n                            "
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
                            [_vm._v(" "), _c("span", [_vm._v("Go to link")])]
                          )
                        ]
                      }
                    },
                    {
                      key: "item.created_at",
                      fn: function(ref) {
                        var item = ref.item
                        return [
                          _vm._v(
                            "\n                    " +
                              _vm._s(
                                _vm.mixin_formatDate(
                                  item.created_at,
                                  "MMM DD, YYYY HH:mm:ss"
                                )
                              ) +
                              "\n                "
                          )
                        ]
                      }
                    },
                    {
                      key: "item.description",
                      fn: function(ref) {
                        var item = ref.item
                        return [
                          _vm._v(
                            "\n                    " +
                              _vm._s(item.data.data.description) +
                              " -\n                    " +
                              _vm._s(item.data.data.expense_report.code) +
                              "\n                "
                          )
                        ]
                      }
                    },
                    {
                      key: "item.status",
                      fn: function(ref) {
                        var item = ref.item
                        return [
                          item.read_at
                            ? _c(
                                "v-chip",
                                {
                                  attrs: { color: "green", dark: "", small: "" }
                                },
                                [
                                  _vm._v(
                                    "\n                        Read\n                    "
                                  )
                                ]
                              )
                            : _c(
                                "v-chip",
                                {
                                  attrs: { color: "red", dark: "", small: "" }
                                },
                                [
                                  _vm._v(
                                    "\n                        Unread\n                    "
                                  )
                                ]
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
              }),
              _vm._v(" "),
              _vm.selected.length > 0
                ? _c(
                    "v-btn",
                    {
                      on: {
                        click: function($event) {
                          _vm.selected = []
                        }
                      }
                    },
                    [_vm._v("Clear All Selected")]
                  )
                : _vm._e()
            ],
            1
          )
        ],
        1
      )
=======
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
                                          ref: "line_chart",
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
>>>>>>> feature/employee-user-fix
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


<<<<<<< HEAD

/***/ }),

/***/ "./resources/js/views/modules/admin/notifications/Index.vue":
/*!******************************************************************!*\
  !*** ./resources/js/views/modules/admin/notifications/Index.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_0281b314___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=0281b314& */ "./resources/js/views/modules/admin/notifications/Index.vue?vue&type=template&id=0281b314&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/notifications/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

=======

/***/ }),

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
>>>>>>> feature/employee-user-fix




/* normalize component */

<<<<<<< HEAD
var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_0281b314___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_0281b314___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _HorizontalBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
>>>>>>> feature/employee-user-fix
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/views/modules/admin/notifications/Index.vue"
=======
component.options.__file = "resources/js/components/chart/HorizontalBarChart.vue"
>>>>>>> feature/employee-user-fix
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/views/modules/admin/notifications/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/notifications/Index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
=======
/***/ "./resources/js/components/chart/HorizontalBarChart.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/chart/HorizontalBarChart.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
>>>>>>> feature/employee-user-fix
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/notifications/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/notifications/Index.vue?vue&type=template&id=0281b314&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/notifications/Index.vue?vue&type=template&id=0281b314& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_0281b314___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=0281b314& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/notifications/Index.vue?vue&type=template&id=0281b314&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_0281b314___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_0281b314___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_fbd19c8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=fbd19c8c& */ "./resources/js/views/modules/user/dashboard/Index.vue?vue&type=template&id=fbd19c8c&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/user/dashboard/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_fbd19c8c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_fbd19c8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/user/dashboard/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/user/dashboard/Index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/modules/user/dashboard/Index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/dashboard/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/user/dashboard/Index.vue?vue&type=template&id=fbd19c8c&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/modules/user/dashboard/Index.vue?vue&type=template&id=fbd19c8c& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_fbd19c8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=fbd19c8c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/dashboard/Index.vue?vue&type=template&id=fbd19c8c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_fbd19c8c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_fbd19c8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> feature/employee-user-fix



/***/ })

}]);