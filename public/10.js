(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expense_reports/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_daterangepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/daterangepicker/DateRangePicker */ "./resources/js/components/daterangepicker/DateRangePicker.vue");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    DateRangePicker: _components_daterangepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      loading: true,
      warning: null,
      headers: [{
        text: "Report No.",
        value: "code"
      }, {
        text: "Period",
        value: "date"
      }, {
        text: "Employee",
        value: "employee",
        sortable: false
      }, {
        text: "Amount",
        value: "total",
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
      employee: 0,
      employees: [],
      date_range: [moment__WEBPACK_IMPORTED_MODULE_1___default()().startOf("month").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_1___default()().endOf("month").format("YYYY-MM-DD")],
      preset: "",
      presets: ["Today", "Yesterday", "Last 7 Days", "Last 30 Days", "This Week", "This Month", "This Quarter", "This Year", "Last Week", "Last Month", "Last Quarter", "Last Year", "Last 5 Years"],
      totalAmount: 0,
      status: "All Expense Reports",
      statuses: ["All Expense Reports", "Unsubmitted Expense Reports", "Submitted Expense Reports", "Approved Expense Reports", "Rejected Expense Reports", "Reimbursed Expense Reports", // "Overdue Expense Reports",
      "Cancelled Expense Reports" // "Archived Expense Reports"
      ],
      selected: [],
      search: "",
      totalItems: 0,
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
        var employee_id = _this.employee;
        var range = _this.date_range;
        axios.get("/api/expense_reports", {
          params: {
            search: search,
            sortBy: sortBy[0],
            sortType: sortDesc[0] ? "desc" : "asc",
            page: page,
            itemsPerPage: itemsPerPage,
            status: status,
            employee_id: employee_id,
            start_date: range[0],
            end_date: range[1],
            admin_page: true
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
    loadEmployees: function loadEmployees() {
      var _this = this;

      axios.get("/api/data/employees").then(function (response) {
        _this.employees = response.data.data;

        _this.employees.unshift({
          id: 0,
          fullname: "All Employees"
        });
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

        _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
      });
    },
    onRefresh: function onRefresh() {
      Object.assign(this.$data, this.$options.data.apply(this));
      this.loadEmployees();
      this.selected = [];
    },
    onShow: function onShow(item) {
      this.$router.push({
        name: "admin.expense_reports.show",
        params: {
          id: item.id
        }
      });
    },
    onEdit: function onEdit(item) {
      if (item.status.status == "Approved") {
        this.$dialog.message.error("Report has been approved", {
          position: "top-right",
          timeout: 2000
        });
        return;
      }

      if (item.status.status == "Cancelled") {
        this.$dialog.message.error("Report has been cancelled", {
          position: "top-right",
          timeout: 2000
        });
        return;
      }

      if (item.status.status == "Paid/Reimbursed") {
        this.$dialog.message.error("Paid/reimbursed expense report can't be edited", {
          position: "top-right",
          timeout: 2000
        });
        return;
      }

      this.$router.push({
        name: "admin.expense_reports.edit",
        params: {
          id: item.id
        }
      });
    },
    onDelete: function onDelete() {
      var _this = this;

      if (this.selected.map(function (item) {
        return item.status.status;
      }).includes("Cancelled")) {
        this.$dialog.message.error("Report has already been cancelled", {
          position: "top-right",
          timeout: 2000
        });
        return;
      }

      if (this.selected.map(function (item) {
        return item.status.status;
      }).includes("Paid/Reimbursed")) {
        this.$dialog.message.error("Paid/reimbursed expense reports can't be cancelled", {
          position: "top-right",
          timeout: 2000
        });
        return;
      }

      if (_this.selected.length == 0) {
        this.$dialog.message.error("No item(s) selected", {
          position: "top-right",
          timeout: 2000
        });
        return;
      } // let notes = await this.$dialog.prompt({
      //     text: "Please add note",
      //     title: "Do you want to cancel expense report(s)?"
      // });
      // if (notes) {
      //     axios
      //         .delete(`/api/expense_reports/${_this.selected[0].id}`, {
      //             params: {
      //                 ids: _this.selected.map(item => {
      //                     return item.id;
      //                 }),
      //                 notes: notes
      //             }
      //         })
      //         .then(function(response) {
      //             _this.$dialog.message.success(
      //                 "Expense report(s) cancelled successfully",
      //                 {
      //                     position: "top-right",
      //                     timeout: 2000
      //                 }
      //             );
      //             _this.getDataFromApi().then(data => {
      //                 _this.items = data.items;
      //                 _this.totalItems = data.total;
      //             });
      //             _this.selected = [];
      //         })
      //         .catch(function(error) {
      //             console.log(error);
      //             console.log(error.response);
      //             _this.mixin_errorDialog(
      //                 `Error ${error.response.status}`,
      //                 error.response.statusText
      //             );
      //         });
      // }
      // // return;


      this.$confirm("Do you want to cancel expense report(s)?").then(function (res) {
        if (res) {
          axios["delete"]("/api/expense_reports/".concat(_this.selected[0].id), {
            params: {
              ids: _this.selected.map(function (item) {
                return item.id;
              })
            }
          }).then(function (response) {
            _this.$dialog.message.success("Expense report(s) cancelled successfully", {
              position: "top-right",
              timeout: 2000
            });

            _this.getDataFromApi().then(function (data) {
              _this.items = data.items;
              _this.totalItems = data.total;
            });

            _this.$store.dispatch("AUTH_USER");

            _this.selected = [];
          })["catch"](function (error) {
            console.log(error);
            console.log(error.response);

            _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
          });
        }
      });
    },
    // onUpdate(action, method) {
    //     let _this = this;
    //     if (_this.selected.length == 0) {
    //         this.$dialog.message.error("No item(s) selected", {
    //             position: "top-right",
    //             timeout: 2000
    //         });
    //         return;
    //     }
    //     if (
    //         action == "submit" &&
    //         !this.selected
    //             .map(item => item.status.status)
    //             .includes("Unsubmitted")
    //     ) {
    //         this.$dialog.message.error("Action can't be completed", {
    //             position: "top-right",
    //             timeout: 2000
    //         });
    //         return;
    //     }
    //     if (
    //         action == "submit" &&
    //         this.selected
    //             .map(item => item.status.status)
    //             .includes("Approved")
    //     ) {
    //         this.$dialog.message.error("Report has been approved", {
    //             position: "top-right",
    //             timeout: 2000
    //         });
    //         return;
    //     }
    //     if (
    //         action == "submit" &&
    //         this.selected
    //             .map(item => item.status.status)
    //             .includes("Reimbursed")
    //     ) {
    //         this.$dialog.message.error("Report has been paid/reimbursed", {
    //             position: "top-right",
    //             timeout: 2000
    //         });
    //         return;
    //     }
    //     if (
    //         action == "submit" &&
    //         this.selected
    //             .map(item => item.status.status)
    //             .includes("Cancelled")
    //     ) {
    //         this.$dialog.message.error("Report has been cancelled", {
    //             position: "top-right",
    //             timeout: 2000
    //         });
    //         return;
    //     }
    //     if (action == "submit") {
    //         let settings = this.$store.getters.settings;
    //         let start = moment().startOf("day");
    //         let end = moment().endOf("day");
    //         let expense_min_date = moment.min(
    //             this.selected.map(item => moment(item.from))
    //         );
    //         let expense_max_date = moment.max(
    //             this.selected.map(item => moment(item.to))
    //         );
    //         if (settings) {
    //             switch (settings.submission_period) {
    //                 case "Weekly":
    //                     start = moment()
    //                         .startOf("week")
    //                         .format("YYYY-MM-DD");
    //                     end = moment()
    //                         .endOf("week")
    //                         .format("YYYY-MM-DD");
    //                     break;
    //                 case "Monthly":
    //                     start = moment()
    //                         .startOf("month")
    //                         .format("YYYY-MM-DD");
    //                     end = moment()
    //                         .endOf("month")
    //                         .format("YYYY-MM-DD");
    //                     break;
    //                 default:
    //                     start = moment()
    //                         .startOf("day")
    //                         .format("YYYY-MM-DD");
    //                     end = moment()
    //                         .endOf("day")
    //                         .format("YYYY-MM-DD");
    //                     break;
    //             }
    //         }
    //         if (
    //             !moment(
    //                 moment(expense_min_date).format("YYYY-MM-DD")
    //             ).isBetween(start, end, undefined, "[]") ||
    //             !moment(
    //                 moment(expense_max_date).format("YYYY-MM-DD")
    //             ).isBetween(start, end, undefined, "[]")
    //         ) {
    //             this.mixin_errorDialog(
    //                 "Error",
    //                 "Submission of expenses beyond due date is not allowed"
    //             );
    //             return;
    //         }
    //     }
    //     if (
    //         action == "approve" &&
    //         this.selected
    //             .map(item => item.status.status)
    //             .includes("Approved")
    //     ) {
    //         this.$dialog.message.error("Report has been approved", {
    //             position: "top-right",
    //             timeout: 2000
    //         });
    //         return;
    //     }
    //     if (
    //         action == "approve" &&
    //         this.selected
    //             .map(item => item.status.status)
    //             .includes("Cancelled")
    //     ) {
    //         this.$dialog.message.error("Report has been cancelled", {
    //             position: "top-right",
    //             timeout: 2000
    //         });
    //         return;
    //     }
    //     if (
    //         action == "approve" &&
    //         this.selected
    //             .map(item => item.status.status)
    //             .includes("Reimbursed")
    //     ) {
    //         this.$dialog.message.error("Report has been paid/reimbursed", {
    //             position: "top-right",
    //             timeout: 2000
    //         });
    //         return;
    //     }
    //     if (action == "approve") {
    //         let today = moment().format("YYYY-MM-DD");
    //         // console.log(today);
    //         // return;
    //         let period = this.$store.getters.settings.approval_period;
    //         let submission_period = moment
    //             .min(this.selected.map(item => moment(item.submitted_at)))
    //             .format("YYYY-MM-DD");
    //         let last_approval_date = moment(submission_period)
    //             .add(period, "days")
    //             .format("YYYY-MM-DD");
    //         if (
    //             !moment(today).isBetween(
    //                 submission_period,
    //                 last_approval_date,
    //                 undefined,
    //                 "[]"
    //             )
    //         ) {
    //             this.mixin_errorDialog(
    //                 "Error",
    //                 "Approval of reports beyond due date is not allowed"
    //             );
    //             return;
    //         }
    //     }
    //     if (
    //         action == "cancel" &&
    //         this.selected
    //             .map(item => item.status.status)
    //             .includes("Cancelled")
    //     ) {
    //         this.$dialog.message.error("Report has been cancelled", {
    //             position: "top-right",
    //             timeout: 2000
    //         });
    //         return;
    //     }
    //     if (
    //         action == "reject" &&
    //         this.selected
    //             .map(item => item.status.status)
    //             .includes("Rejected")
    //     ) {
    //         this.$dialog.message.error("Report has been rejected", {
    //             position: "top-right",
    //             timeout: 2000
    //         });
    //         return;
    //     }
    //     this.$confirm(`Do you want to ${action} expense report(s)?`).then(
    //         res => {
    //             if (res) {
    //                 let ids = _this.selected.map(item => {
    //                     return item.id;
    //                 });
    //                 axios({
    //                     method: method,
    //                     url: `/api/expense_reports/${_this.selected[0].id}`,
    //                     data: {
    //                         ids: ids,
    //                         action: action
    //                     }
    //                 })
    //                     .then(function(response) {
    //                         _this.$dialog.message.success(
    //                             response.data.message,
    //                             {
    //                                 position: "top-right",
    //                                 timeout: 2000
    //                             }
    //                         );
    //                         _this.getDataFromApi().then(data => {
    //                             _this.items = data.items;
    //                             _this.totalItems = data.total;
    //                         });
    //                         _this.selected = [];
    //                     })
    //                     .catch(function(error) {
    //                         console.log(error);
    //                         console.log(error.response);
    //                         _this.mixin_errorDialog(
    //                             `Error ${error.response.status}`,
    //                             error.response.statusText
    //                         );
    //                     });
    //             }
    //         }
    //     );
    // },
    // ------------------------------------------------------------------------------------------------------------------
    //
    // ------------------------------------------------------------------------------------------------------------------
    onUpdate: function onUpdate(action, method) {
      var _this = this;

      this.$confirm("Do you want to ".concat(action, " expense report(s)?")).then(function (res) {
        if (res) {
          var ids = _this.selected.map(function (item) {
            return item.id;
          });

          axios({
            method: method,
            url: "/api/expense_reports/".concat(_this.selected[0].id),
            data: {
              ids: ids,
              action: action
            }
          }).then(function (response) {
            _this.mixin_successDialog("Success", response.data.message);

            _this.getDataFromApi().then(function (data) {
              _this.items = data.items;
              _this.totalItems = data.total;
            });

            _this.$store.dispatch("AUTH_USER");

            _this.selected = [];
          })["catch"](function (error) {
            console.log(error);
            console.log(error.response);

            _this.mixin_errorDialog(error.response.data.status, error.response.data.message);
          });
        }
      });
    },
    onSubmit: function onSubmit() {
      if (this.selected.length == 0) {
        this.mixin_errorDialog("Error", "No item(s) selected");
        return;
      }

      this.onUpdate("submit", "put");
    },
    onReview: function onReview() {
      this.onUpdate("review", "put");
    },
    onApprove: function onApprove() {
      this.onUpdate("approve", "put");
    },
    onReject: function onReject() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this, notes, ids;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // this.onUpdate("reject", "put");
                _this = _this3;
                _context.next = 3;
                return _this3.$dialog.prompt({
                  text: "Please specify an appropriate reason for rejection",
                  title: "Do you want to reject expense report(s)?"
                });

              case 3:
                notes = _context.sent;

                if (notes) {
                  ids = _this.selected.map(function (item) {
                    return item.id;
                  });
                  axios({
                    method: "put",
                    url: "/api/expense_reports/".concat(_this.selected[0].id),
                    data: {
                      ids: ids,
                      action: "reject",
                      notes: notes
                    }
                  }).then(function (response) {
                    _this.mixin_successDialog("Success", response.data.message);

                    _this.getDataFromApi().then(function (data) {
                      _this.items = data.items;
                      _this.totalItems = data.total;
                    });

                    _this.$store.dispatch("AUTH_USER");

                    _this.selected = [];
                  })["catch"](function (error) {
                    console.log(error);
                    console.log(error.response);

                    _this.mixin_errorDialog(error.response.data.status, error.response.data.message);
                  });
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    onDuplicate: function onDuplicate() {
      this.onUpdate("duplicate", "put");
    }
  },
  watch: {
    params: {
      handler: function handler() {
        var _this4 = this;

        this.getDataFromApi().then(function (data) {
          _this4.items = data.items;
          _this4.totalItems = data.total;
        });
      },
      deep: true
    },
    items: function items() {
      this.totalAmount = this.mixin_formatNumber(this.items.reduce(function (total, item) {
        return total + item.total;
      }, 0));
    },
    selected: function selected() {
      if (this.selected.map(function (item) {
        return item.status.status;
      }).includes("Submitted")) {
        var period = this.$store.getters.settings.approval_period;
        var submission_period = moment__WEBPACK_IMPORTED_MODULE_1___default.a.min(this.selected.map(function (item) {
          return moment__WEBPACK_IMPORTED_MODULE_1___default()(item.submitted_at);
        })).format("YYYY-MM-DD");
        var last_approval_date = moment__WEBPACK_IMPORTED_MODULE_1___default()(submission_period).add(period, "days").format("YYYY-MM-DD");
        this.warning = "Last Approval Date: ".concat(last_approval_date, "; First Submitted Report: ").concat(submission_period);
      } else if (this.selected.length == 0) {
        this.warning = null;
      }
    }
  },
  computed: {
    params: function params(nv) {
      var _objectSpread2;

      return _objectSpread(_objectSpread({}, this.options), {}, (_objectSpread2 = {
        query: this.search
      }, _defineProperty(_objectSpread2, "query", this.status), _defineProperty(_objectSpread2, "query", this.employee), _defineProperty(_objectSpread2, "query", this.date_range), _objectSpread2));
    },
    minDate: function minDate() {
      var settings = this.$store.getters.settings;

      if (settings) {
        switch (settings.submission_period) {
          case "Weekly":
            return moment__WEBPACK_IMPORTED_MODULE_1___default()().startOf("week").format("YYYY-MM-DD");
            break;

          case "Monthly":
            return moment__WEBPACK_IMPORTED_MODULE_1___default()().startOf("month").format("YYYY-MM-DD");
            break;

          default:
            return moment__WEBPACK_IMPORTED_MODULE_1___default()().startOf("day").format("YYYY-MM-DD");
            break;
        }
      }

      return moment__WEBPACK_IMPORTED_MODULE_1___default()().startOf("day").format("YYYY-MM-DD");
    },
    maxDate: function maxDate() {
      var settings = this.$store.getters.settings;
      var today = moment__WEBPACK_IMPORTED_MODULE_1___default()().format("YYYY-MM-DD");
      var maxDate = moment__WEBPACK_IMPORTED_MODULE_1___default()().endOf("day").format("YYYY-MM-DD");

      if (settings) {
        switch (settings.submission_period) {
          case "Weekly":
            maxDate = moment__WEBPACK_IMPORTED_MODULE_1___default()().endOf("week").format("YYYY-MM-DD");
            break;

          case "Monthly":
            maxDate = moment__WEBPACK_IMPORTED_MODULE_1___default()().endOf("month").format("YYYY-MM-DD");
            break;

          default:
            maxDate = moment__WEBPACK_IMPORTED_MODULE_1___default()().endOf("day").format("YYYY-MM-DD");
            break;
        }

        return moment__WEBPACK_IMPORTED_MODULE_1___default()(today).isSameOrBefore(maxDate) ? today : maxDate;
      }

      return today;
    }
  },
  mounted: function mounted() {
    var _this5 = this;

    this.getDataFromApi().then(function (data) {
      _this5.items = data.items;
      _this5.totalItems = data.total;
    });
  },
  created: function created() {
    this.$store.dispatch("AUTH_USER");
    this.loadEmployees();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/Index.vue?vue&type=template&id=b1b35a78&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expense_reports/Index.vue?vue&type=template&id=b1b35a78& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
                                  items: _vm.employees,
                                  "item-text": "fullname",
                                  "item-value": "id",
                                  label: "Employee"
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
                                        _c("strong", [_vm._v("Reimbursable")])
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
                                        _c("strong", [_vm._v("Period")])
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(":")]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(item.from) +
                                            " ~ " +
                                            _vm._s(item.to)
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [
                                        _c("strong", [_vm._v("Status")])
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(":")]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(item.status.remarks))
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [
                                        _c("strong", [_vm._v("Remarks")])
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(":")]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(item.remarks))])
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
                                                item.created.created_at,
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
                                        _c("strong", [_vm._v("Created By")])
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(":")]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(
                                              item.created.created_by == null
                                                ? ""
                                                : item.created.created_by.name
                                            ) +
                                            "\n                                    "
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [
                                        _c("strong", [_vm._v("Updated")])
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(":")]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(
                                              _vm.mixin_formatDate(
                                                item.updated.updated_at,
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
                                        _c("strong", [_vm._v("Updated By")])
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(":")]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(
                                              item.updated.updated_by == null
                                                ? ""
                                                : item.updated.updated_by.name
                                            ) +
                                            "\n                                    "
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    item.submitted
                                      ? _c("tr", [
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
                                                    item.submitted.submitted_at,
                                                    "YYYY-MM-DD HH:mm:ss"
                                                  )
                                                ) +
                                                "\n                                    "
                                            )
                                          ])
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    item.submitted
                                      ? _c("tr", [
                                          _c("td", [
                                            _c("strong", [
                                              _vm._v("Submitted By")
                                            ])
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [_vm._v(":")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(
                                                  item.submitted.submitted_by ==
                                                    null
                                                    ? ""
                                                    : item.submitted
                                                        .submitted_by.name
                                                ) +
                                                "\n                                    "
                                            )
                                          ])
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    item.approved
                                      ? _c("tr", [
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
                                                    item.approved.approved_at,
                                                    "YYYY-MM-DD HH:mm:ss"
                                                  )
                                                ) +
                                                "\n                                    "
                                            )
                                          ])
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    item.approved
                                      ? _c("tr", [
                                          _c("td", [
                                            _c("strong", [
                                              _vm._v("Approved By")
                                            ])
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [_vm._v(":")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(
                                                  item.approved.approved_by ==
                                                    null
                                                    ? ""
                                                    : item.approved.approved_by
                                                        .name
                                                ) +
                                                "\n                                    "
                                            )
                                          ])
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    item.deleted
                                      ? _c("tr", [
                                          _c("td", [
                                            _c("strong", [_vm._v("Cancelled")])
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [_vm._v(":")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(
                                                  _vm.mixin_formatDate(
                                                    item.deleted.deleted_at,
                                                    "YYYY-MM-DD HH:mm:ss"
                                                  )
                                                ) +
                                                "\n                                    "
                                            )
                                          ])
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    item.deleted
                                      ? _c("tr", [
                                          _c("td", [
                                            _c("strong", [
                                              _vm._v("Cancelled By")
                                            ])
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [_vm._v(":")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(
                                                  item.deleted.deleted_by ==
                                                    null
                                                    ? ""
                                                    : item.deleted.deleted_by
                                                        .name
                                                ) +
                                                "\n                                    "
                                            )
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
                        key: "item.employee",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _vm._v(
                              "\n                    " +
                                _vm._s(
                                  item.employee.last_name +
                                    ", " +
                                    item.employee.first_name
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
                                  _vm.mixin_getHumanDate(
                                    item.updated.updated_at
                                  )
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
                            _vm.mixin_can("edit expense reports")
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

/***/ "./resources/js/views/modules/admin/expense_reports/Index.vue":
/*!********************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/Index.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_b1b35a78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=b1b35a78& */ "./resources/js/views/modules/admin/expense_reports/Index.vue?vue&type=template&id=b1b35a78&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/expense_reports/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_b1b35a78___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_b1b35a78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/expense_reports/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/expense_reports/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/expense_reports/Index.vue?vue&type=template&id=b1b35a78&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/Index.vue?vue&type=template&id=b1b35a78& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_b1b35a78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=b1b35a78& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/Index.vue?vue&type=template&id=b1b35a78&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_b1b35a78___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_b1b35a78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);