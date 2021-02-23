(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[78],{

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
      presetValue: this.preset,
      presetsList: this.presets
    };
  },
  methods: {
    // customChange() {
    //     this.$emit("updateDates", this.value);
    // },
    resetDates: function resetDates() {
      this.menu = false;
      var value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("month").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("month").format("YYYY-MM-DD")];
      this.presetValue = "";
      this.$emit("updateDates", value);
    },
    updatePreset: function updatePreset() {
      this.menu = false;
      var value = [];

      switch (this.presetValue) {
        case "Today":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD")];
          this.$emit("updateDates", value);
          break;

        case "Yesterday":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "days").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "days").format("YYYY-MM-DD")];
          this.$emit("updateDates", value);
          break;

        case "Last 7 Days":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(7, "days").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "days").format("YYYY-MM-DD")];
          this.$emit("updateDates", value);
          break;

        case "Last 30 Days":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(30, "days").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "days").format("YYYY-MM-DD")];
          this.$emit("updateDates", value);
          break;

        case "This Week":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("week").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("week").format("YYYY-MM-DD")];
          this.$emit("updateDates", value);
          break;

        case "Last Week":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "weeks").startOf("week").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "weeks").endOf("week").format("YYYY-MM-DD")];
          this.$emit("updateDates", value);
          break;

        case "This Month":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("month").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("month").format("YYYY-MM-DD")];
          this.$emit("updateDates", value);
          break;

        case "Last Month":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "months").startOf("month").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "months").endOf("month").format("YYYY-MM-DD")];
          this.$emit("updateDates", value);
          break;

        case "This Quarter":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("quarter").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("quarter").format("YYYY-MM-DD")];
          this.$emit("updateDates", value);
          break;

        case "Last Quarter":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "quarters").startOf("quarter").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "quarters").endOf("quarter").format("YYYY-MM-DD")];
          this.$emit("updateDates", value);
          break;

        case "This Year":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("year").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("year").format("YYYY-MM-DD")];
          this.$emit("updateDates", value);
          break;

        case "Last Year":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "years").startOf("year").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "years").endOf("year").format("YYYY-MM-DD")];
          this.$emit("updateDates", value);
          break;

        case "Last 5 Years":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(5, "years").startOf("year").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "years").endOf("year").format("YYYY-MM-DD")];
          this.$emit("updateDates", value);
          break;

        default:
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD")];
          this.$emit("updateDates", value);
          break;
      }
    }
  },
  computed: {
    selected: {
      get: function get() {
        return this.value;
      },
      set: function set(value) {
        this.$emit("updateDates", value);
      }
    },
    dateRangeText: function dateRangeText() {
      this.value.sort();
      return this.value.join(" ~ ");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expenses/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expenses/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      date_range: [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("month").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("month").format("YYYY-MM-DD")],
      preset: "",
      presets: ["Today", "Yesterday", "Last 7 Days", "Last 30 Days", "This Week", "This Month", "This Quarter", "This Year", "Last Week", "Last Month", "Last Quarter", "Last Year", "Last 5 Years"],
      headers: [{
        text: "Date",
        value: "date"
      }, {
        text: "Expense",
        value: "expense_type.name",
        sortable: false
      }, {
        text: "Employee",
        value: "user.full_name",
        sortable: false
      }, {
        text: "Amount",
        value: "amount"
      }, {
        text: "To replenish",
        value: "replenishment",
        sortable: false
      }, {
        text: "Last Updated",
        value: "updated_at"
      }, {
        text: "Status",
        value: "status.status",
        sortable: false
      }, {
        text: "Actions",
        value: "actions",
        sortable: false
      }, {
        text: "",
        value: "data-table-expand"
      }],
      items: [],
      user: {
        id: 0,
        full_name: "All Employees"
      },
      users: [],
      expense_type: {
        id: 0,
        name: "All Expense Types"
      },
      expense_types: [],
      status: "All Expenses",
      statuses: ["All Expenses", "Unreported Expenses", "Unsubmitted Expenses", "Submitted Expenses", "Approved Expenses", "Rejected Expenses", "Cancelled Expenses", "Reimbursed Expenses" // "Archived Expenses"
      ],
      selected: [],
      search: "",
      totalItems: 0,
      totalAmount: 0,
      totalReplenishment: 0,
      options: {
        sortBy: ["created_at"],
        sortDesc: [true],
        page: 1,
        itemsPerPage: 10
      }
    };
  },
  methods: {
    updateDates: function updateDates(e) {
      this.date_range = e;
    },
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
        var user_id = _this.user.id;
        var expense_type_id = _this.expense_type.id;
        var range = _this.date_range;
        axios.get("/api/expenses", {
          params: {
            search: search,
            sortBy: sortBy[0],
            sortType: sortDesc[0] ? "desc" : "asc",
            page: page,
            itemsPerPage: itemsPerPage,
            status: status,
            user_id: user_id,
            expense_type_id: expense_type_id,
            start_date: range[0],
            end_date: range[1] ? range[1] : range[0]
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
          _this.mixin_showErrors(error);

          _this.loading = false;
        });
      });
    },
    loadUsers: function loadUsers() {
      var _this = this;

      axios.get("/api/data/users?only=true").then(function (response) {
        _this.users = response.data.data;

        _this.users.unshift({
          id: 0,
          full_name: "All Employees"
        });
      })["catch"](function (error) {
        _this.mixin_showErrors(error);
      });
    },
    loadExpenseTypes: function loadExpenseTypes() {
      var _this = this;

      axios.get("/api/data/expense_types?only=true").then(function (response) {
        _this.expense_types = response.data.data;

        _this.expense_types.unshift({
          id: 0,
          name: "All Expense Types"
        });
      })["catch"](function (error) {
        _this.mixin_showErrors(error);
      });
    },
    onRefresh: function onRefresh() {
      Object.assign(this.$data, this.$options.data.apply(this));
      this.status = "All Expenses";
      this.loadUsers();
      this.loadExpenseTypes();
      this.selected = [];
    },
    onShow: function onShow(item) {
      this.$router.push({
        name: "admin.expenses.show",
        params: {
          id: item.id
        }
      });
    },
    onEdit: function onEdit(item) {
      if (item.expense_report) {
        if (item.expense_report.approved_at) {
          this.$dialog.message.error("Expense with an approved report can't be edited", {
            position: "top-right",
            timeout: 2000
          });
          return;
        }

        if (item.expense_report.deleted_at) {
          this.$dialog.message.error("Expense with a deleted report can't be edited", {
            position: "top-right",
            timeout: 2000
          });
          return;
        }
      }

      if (this.status == "Cancelled") {
        this.$dialog.message.error("Expense has been deleted.", {
          position: "top-right",
          timeout: 2000
        });
        return;
      }

      this.$router.push({
        name: "admin.expenses.edit",
        params: {
          id: item.id
        }
      });
    },
    onDelete: function onDelete() {
      var _this = this;

      var arr = this.selected.map(function (item) {
        return item.expense_report === null;
      }); // this.mixin_is_empty(
      //     _this.selected.length,
      //     "No item(s) selected bitch"
      // );

      if (_this.selected.length == 0) {
        this.$dialog.message.error("No item(s) selected", {
          position: "top-right",
          timeout: 2000
        });
        return;
      } // this.mixin_check_if_error(
      //     arr.includes(false),
      //     "Expense(s) can't be cancelled bitch"
      // );


      if (arr.includes(false)) {
        this.$dialog.message.error("Expense(s) can't be cancelled", {
          position: "top-right",
          timeout: 2000
        });
        return;
      }

      this.$confirm("Do you want to cancel expense(s)?").then(function (res) {
        if (res) {
          axios["delete"]("/api/expenses/".concat(_this.selected[0].id), {
            params: {
              ids: _this.selected.map(function (item) {
                return item.id;
              })
            }
          }).then(function (response) {
            _this.$dialog.message.success("Cancelled successfully.", {
              position: "top-right",
              timeout: 2000
            });

            _this.getDataFromApi().then(function (data) {
              _this.items = data.items;
              _this.totalItems = data.total;
            }); // _this.$store.dispatch("AUTH_USER");


            _this.selected = [];
          })["catch"](function (error) {
            _this.mixin_showErrors(error);
          });
        }
      });
    },
    onRestore: function onRestore() {
      var _this = this;

      var arr = this.selected.map(function (item) {
        return item.expense_report === null;
      });

      if (_this.selected.length == 0) {
        this.$dialog.message.error("No item(s) selected", {
          position: "top-right",
          timeout: 2000
        });
        return;
      }

      if (!this.mixin_can("restore expenses")) {
        this.$dialog.message.error("Not allowed", {
          position: "top-right",
          timeout: 2000
        });
        return;
      }

      if (arr.includes(false)) {
        this.$dialog.message.error("Expense(s) with report(s) can't be restored", {
          position: "top-right",
          timeout: 2000
        });
        return;
      }

      this.$confirm("Do you want to restore expenses(s)?").then(function (res) {
        if (res) {
          axios.put("/api/expenses/restore/".concat(_this.selected[0].id), {
            ids: _this.selected.map(function (item) {
              return item.id;
            })
          }).then(function (response) {
            _this.$dialog.message.success("Item(s) restored.", {
              position: "top-right",
              timeout: 2000
            });

            _this.getDataFromApi().then(function (data) {
              _this.items = data.items;
              _this.totalItems = data.total;
            }); // _this.$store.dispatch("AUTH_USER");


            _this.selected = [];
          })["catch"](function (error) {
            _this.mixin_showErrors(error);
          });
        }
      });
    },
    show_edit: function show_edit(item) {
      if (!this.mixin_can("edit expenses")) {
        return false;
      }

      if (item) {
        if (item.expense_report_id) {
          if (!item.expense_report.approved_at) {
            return false;
          } else if (!item.expense_report.rejected_at) {
            return false;
          } else if (!item.expense_report.cancelled_at) {
            return false;
          } else if (!item.expense_report.deleted_at) {
            return false;
          }
        }
      }

      return true;
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
      this.totalReplenishment = this.mixin_formatNumber(this.items.reduce(function (total, item) {
        return total + (item.amount - item.reimbursable_amount);
      }, 0));
    }
  },
  computed: {
    params: function params(nv) {
      var _objectSpread2;

      return _objectSpread(_objectSpread({}, this.options), {}, (_objectSpread2 = {
        query: this.search
      }, _defineProperty(_objectSpread2, "query", this.status), _defineProperty(_objectSpread2, "query", this.user), _defineProperty(_objectSpread2, "query", this.expense_type), _defineProperty(_objectSpread2, "query", this.date_range), _objectSpread2));
    },
    maxDate: function maxDate() {
      var settings = this.$store.getters.settings;
      var today = moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD");
      var maxDate = moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("day").format("YYYY-MM-DD");

      if (settings) {
        switch (settings.submission_period) {
          case "Weekly":
            maxDate = moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("week").format("YYYY-MM-DD");
            break;

          case "Monthly":
            maxDate = moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("month").format("YYYY-MM-DD");
            break;

          default:
            maxDate = moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("day").format("YYYY-MM-DD");
            break;
        }

        return moment__WEBPACK_IMPORTED_MODULE_0___default()(today).isSameOrBefore(maxDate) ? today : maxDate;
      }

      return today;
    },
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
  created: function created() {
    this.loadUsers();
    this.loadExpenseTypes();
  },
  activated: function activated() {
    var _this4 = this;

    this.$store.dispatch("AUTH_NOTIFICATIONS");
    this.loadUsers();
    this.loadExpenseTypes();
    this.getDataFromApi().then(function (data) {
      _this4.items = data.items;
      _this4.totalItems = data.total;
    });
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
              _vm._v(
                '"\n            label="Date"\n            readonly\n            v-bind="attrs"\n            v-on="on"\n            :solo="solo"\n        >'
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
                range: "",
                "no-title": "",
                scrollable: "",
                color: "success"
              },
              model: {
                value: _vm.selected,
                callback: function($$v) {
                  _vm.selected = $$v
                },
                expression: "selected"
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
                      return _vm.$refs.menu.save(_vm.selected)
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expenses/Index.vue?vue&type=template&id=be42def6&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expenses/Index.vue?vue&type=template&id=be42def6& ***!
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
      _c(
        "v-card",
        { staticClass: "elevation-0 pt-0" },
        [
          _c(
            "v-card-title",
            { staticClass: "pt-0" },
            [
              _c("h4", { staticClass: "title green--text" }, [
                _vm._v("Expenses")
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
                      _vm.mixin_can("add expenses")
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
                                          to: { name: "admin.expenses.create" },
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
                              _c(
                                "keep-alive",
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.statuses,
                                      label: "Status"
                                    },
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
                              )
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
                                  label: "Employee",
                                  "return-object": ""
                                },
                                model: {
                                  value: _vm.user,
                                  callback: function($$v) {
                                    _vm.user = $$v
                                  },
                                  expression: "user"
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
                                  items: _vm.expense_types,
                                  "item-text": "name",
                                  "item-value": "id",
                                  label: "Expense Types",
                                  "return-object": ""
                                },
                                model: {
                                  value: _vm.expense_type,
                                  callback: function($$v) {
                                    _vm.expense_type = $$v
                                  },
                                  expression: "expense_type"
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
              ),
              _vm._v(" "),
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
                        { on: { click: _vm.onRestore } },
                        [
                          _c(
                            "v-list-item-icon",
                            [_c("v-icon", [_vm._v("mdi-restore")])],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-list-item-subtitle", [
                            _vm._v(
                              "\n                            Restore\n                        "
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
                              "\n                            Cancel Expense(s)\n                        "
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
          _c("v-card-subtitle", [
            _vm._v(
              "\n            " + _vm._s(_vm.formattedDateRange) + "\n        "
            )
          ]),
          _vm._v(" "),
          _c(
            "v-row",
            { staticClass: "ml-4" },
            [
              _vm.selected.length > 0
                ? _c(
                    "v-chip",
                    {
                      staticClass: "mr-2",
                      attrs: {
                        color: "green",
                        dark: "",
                        close: "",
                        small: "",
                        "close-icon": "mdi-close"
                      },
                      on: {
                        "click:close": function($event) {
                          _vm.selected = []
                        }
                      }
                    },
                    [
                      _vm._v(
                        " \n                " +
                          _vm._s(_vm.selected.length) +
                          " Selected\n            "
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.status != null
                ? _c("v-chip", { staticClass: "mr-2", attrs: { small: "" } }, [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.status) +
                        "\n            "
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.user != null
                ? _c("v-chip", { staticClass: "mr-2", attrs: { small: "" } }, [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.user.full_name) +
                        "\n            "
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.expense_type != null
                ? _c("v-chip", { staticClass: "mr-2", attrs: { small: "" } }, [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.expense_type.name) +
                        "\n            "
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "v-chip",
                {
                  staticClass: "mr-2",
                  attrs: { close: "", small: "", "close-icon": "mdi-refresh" },
                  on: { "click:close": _vm.onRefresh }
                },
                [_vm._v(" \n                Refresh\n            ")]
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
                                        _c("strong", [_vm._v("Expense Report")])
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(":")]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(
                                              item.expense_report == null
                                                ? ""
                                                : item.expense_report
                                                    .description +
                                                    " (Code:" +
                                                    item.expense_report.code +
                                                    ")"
                                            ) +
                                            "\n                                    "
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [
                                        _c("strong", [_vm._v("To Replenish")])
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(":")]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(
                                              _vm.mixin_formatNumber(
                                                item.amount -
                                                  item.reimbursable_amount
                                              )
                                            ) +
                                            "\n                                    "
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [
                                        _c("strong", [_vm._v("To Reimburse")])
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(":")]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(
                                              _vm.mixin_formatNumber(
                                                item.reimbursable_amount
                                              )
                                            ) +
                                            "\n                                    "
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [_c("strong", [_vm._v("Tax")])]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(":")]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(
                                              _vm.mixin_formatNumber(
                                                item.tax_amount
                                              )
                                            ) +
                                            "\n                                    "
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [
                                        _c("strong", [_vm._v("Tax rate")])
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(":")]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(
                                              _vm.mixin_formatNumber(
                                                item.tax_rate
                                              )
                                            ) +
                                            "\n                                        %\n                                    "
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [
                                        _c("strong", [_vm._v("Code")])
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(":")]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(item.code))])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [
                                        _c("strong", [_vm._v("Description")])
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(":")]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(item.description))
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [
                                        _c("strong", [_vm._v("Receipt")])
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(":")]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(item.receipt_number))
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [
                                        _c("strong", [_vm._v("Vendor")])
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(":")]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(
                                              item.vendor == null
                                                ? ""
                                                : item.vendor.name
                                            ) +
                                            "\n                                    "
                                        )
                                      ])
                                    ]),
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
                                        _c("strong", [_vm._v("Late Encoded")])
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(":")]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(item.is_late_encoded))
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
                                      : _vm._e()
                                  ])
                                ])
                              ],
                              1
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
                        key: "item.amount",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _vm._v(
                              "\n                    " +
                                _vm._s(_vm.mixin_formatNumber(item.amount)) +
                                "\n                "
                            )
                          ]
                        }
                      },
                      {
                        key: "item.replenishment",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _vm._v(
                              "\n                    " +
                                _vm._s(
                                  _vm.mixin_formatNumber(
                                    item.amount - item.reimbursable_amount
                                  )
                                ) +
                                "\n                "
                            )
                          ]
                        }
                      },
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
                            item.is_late_encoded
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
                                    _c("span", [_vm._v("Late Encoded")])
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
                            _c("td", [
                              _c("strong", [
                                _vm._v(_vm._s(_vm.totalReplenishment))
                              ])
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
                  _c("v-col", [
                    _c("div", [
                      _c("h4", { staticClass: "green--text" }, [
                        _vm._v(
                          "\n                            Note:\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("h4", { staticClass: "grey--text" }, [
                        _vm._v(
                          "\n                            Due of encoding expenses :\n                            "
                        ),
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm.maxDate) +
                            "\n                        "
                        )
                      ])
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

/***/ "./resources/js/views/modules/admin/expenses/Index.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/modules/admin/expenses/Index.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_be42def6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=be42def6& */ "./resources/js/views/modules/admin/expenses/Index.vue?vue&type=template&id=be42def6&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/expenses/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_be42def6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_be42def6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/expenses/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/expenses/Index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expenses/Index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expenses/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/expenses/Index.vue?vue&type=template&id=be42def6&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expenses/Index.vue?vue&type=template&id=be42def6& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_be42def6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=be42def6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expenses/Index.vue?vue&type=template&id=be42def6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_be42def6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_be42def6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);