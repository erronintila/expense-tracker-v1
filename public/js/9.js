(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

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


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        value: "user",
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
      user: {
        id: 0,
        full_name: "All Employees"
      },
      users: [],
      date_range: [moment__WEBPACK_IMPORTED_MODULE_1___default()().startOf("month").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_1___default()().endOf("month").format("YYYY-MM-DD")],
      preset: "",
      presets: ["Today", "Yesterday", "Last 7 Days", "Last 30 Days", "This Week", "This Month", "This Quarter", "This Year", "Last Week", "Last Month", "Last Quarter", "Last Year", "Last 5 Years"],
      totalAmount: 0,
      totalUnsubmitted: 0,
      totalUnapproved: 0,
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
      },
      expense_types: [],
      reports_by_user: [],
      reports_by_expense: [],
      reports_by_date: [],
      printout: {
        pageSize: {
          width: 13 * 72,
          height: 8.5 * 72
        },
        pageOrientation: "landscape",
        pageMargins: [0.5 * 72, 0.5 * 72, 0.5 * 72, 0.5 * 72],
        defaultStyle: {
          font: "Roboto"
        },
        background: {
          alignment: "right",
          margin: [0, 0.4 * 72, 0.3 * 72, 0],
          // absolutePosition: {x: -300, y: 40},
          width: 140,
          // height: 25,
          image: "data:image/png;base64,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"
        }
      }
    };
  },
  methods: {
    showAllUnsubmitted: function showAllUnsubmitted() {
      this.status = "Unsubmitted Expense Reports";
      this.updateDates([moment__WEBPACK_IMPORTED_MODULE_1___default()("0000-01-01").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_1___default()().format("YYYY-MM-DD")]);
    },
    showAllUnapproved: function showAllUnapproved() {
      this.status = "Submitted Expense Reports";
      this.updateDates([moment__WEBPACK_IMPORTED_MODULE_1___default()("0000-01-01").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_1___default()().format("YYYY-MM-DD")]);
    },
    loadTotalCountReportStatus: function loadTotalCountReportStatus() {
      var _this = this;

      axios.get("/api/data/expense_reports?total_count=true").then(function (response) {
        var _response$data, _total$data$total_uns, _total$data$total_una;

        var total = (_response$data = response.data) !== null && _response$data !== void 0 ? _response$data : 0;
        _this.totalUnsubmitted = (_total$data$total_uns = total.data.total_unsubmitted) !== null && _total$data$total_uns !== void 0 ? _total$data$total_uns : 0;
        _this.totalUnapproved = (_total$data$total_una = total.data.total_unapproved) !== null && _total$data$total_una !== void 0 ? _total$data$total_una : 0;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);
      });
    },
    loadExpenseTypes: function loadExpenseTypes() {
      var _this = this;

      axios.get("/api/data/expense_types?only=true").then(function (response) {
        _this.expense_types = response.data.data;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);
      });
    },
    loadReportByExpense: function loadReportByExpense() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        var _this = _this2;
        var ids = _this.selected == null ? [] : _this.selected.map(function (item) {
          return item.id;
        });
        axios.get("/api/data/print_report?by_expense_id=true&ids=".concat(ids)).then(function (response) {
          _this.reports_by_expense = response.data.data;
          resolve();
        })["catch"](function (error) {
          reject();
          console.log(error);
          console.log(error.response);
        });
      });
    },
    loadReportByUser: function loadReportByUser() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        var _this = _this3;
        var ids = _this.selected == null ? [] : _this.selected.map(function (item) {
          return item.id;
        });
        axios.get("/api/data/print_report?by_user_id=true&ids=".concat(ids)).then(function (response) {
          _this.reports_by_user = response.data.data;
          resolve();
        })["catch"](function (error) {
          reject();
          console.log(error);
          console.log(error.response);
        });
      });
    },
    loadReportByDate: function loadReportByDate() {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        var _this = _this4;
        var ids = _this.selected == null ? [] : _this.selected.map(function (item) {
          return item.id;
        });
        axios.get("/api/data/print_report?by_date=true&ids=".concat(ids)).then(function (response) {
          _this.reports_by_date = response.data.data;
          resolve();
        })["catch"](function (error) {
          reject();
          console.log(error);
          console.log(error.response);
        });
      });
    },
    printReportByUser: function printReportByUser(action) {
      var _this5 = this;

      this.loadReportByUser().then(function () {
        var table_columns = [];
        var table_rows = [];
        var table_footer = [];
        table_columns.push({
          text: "Employee",
          style: "tableOfExpensesHeader"
        });

        _this5.expense_types.forEach(function (element) {
          table_columns.push({
            text: element.name,
            style: "tableOfExpensesHeader"
          });
        });

        table_columns.push({
          text: "Total",
          style: "tableOfExpensesHeader"
        });
        var temp_table_body = {};
        var temp_expense_types = {};
        var user_id = null;
        var expense_type = null; // loop through retrieved records

        _this5.reports_by_user.forEach(function (element) {
          // create new object if current user does not match with previous record
          if (user_id !== element.user_id) {
            temp_table_body = {};
            user_id = element.user_id; // set default values for current row

            _this5.expense_types.forEach(function (expense_type) {
              temp_expense_types[expense_type.name] = 0;
            });

            temp_table_body = _objectSpread(_objectSpread({
              User: "".concat(element.last_name, ", ").concat(element.first_name, " ").concat(element.middle_name == null ? "" : element.middle_name, " ").concat(element.suffix == null ? "" : element.suffix)
            }, temp_expense_types), {}, {
              Total: 0
            });
            table_rows.push(temp_table_body);
          } // set expense type amount


          temp_table_body[element.expense_type_name] = element.expense_amount; // sum of all expense types

          if ("Total" in temp_table_body) {
            var total = 0;

            _this5.expense_types.forEach(function (item) {
              total += temp_table_body[item.name];
            });

            temp_table_body["Total"] = total;
          }
        }); // sum total amount per expense type


        _this5.expense_types.forEach(function (expense_type) {
          temp_expense_types[expense_type.name] = _this5.mixin_formatNumber(table_rows.reduce(function (total, item) {
            return total + item[expense_type.name];
          }, 0));
        }); // add row for total amounts


        table_rows.push(_objectSpread(_objectSpread({
          Total: "Total"
        }, temp_expense_types), {}, {
          TotalAmount: _this5.mixin_formatNumber(table_rows.reduce(function (total, item) {
            return total + item["Total"];
          }, 0))
        }));
        var temp = table_rows.map(function (item) {
          return Object.values(item);
        });
        var itemss = temp.map(function (item) {
          var val = [];

          for (var i = 0; i < item.length; i++) {
            val.push({
              text: item[i],
              style: "tableOfExpensesBody"
            });
          }

          return val;
        });
        var body = [];
        body.push(table_columns);
        itemss.forEach(function (element) {
          body.push(element);
        });

        var pdfMake = __webpack_require__(/*! pdfmake/build/pdfmake.js */ "./node_modules/pdfmake/build/pdfmake.js");

        if (pdfMake.vfs == undefined) {
          var pdfFonts = __webpack_require__(/*! pdfmake/build/vfs_fonts.js */ "./node_modules/pdfmake/build/vfs_fonts.js");

          pdfMake.vfs = pdfFonts.pdfMake.vfs;
        }

        pdfMake.fonts = {
          Roboto: {
            normal: "Roboto-Regular.ttf",
            bold: "Roboto-Medium.ttf",
            italics: "Roboto-Italic.ttf",
            bolditalics: "Roboto-MediumItalic.ttf"
          }
        };
        var docDefinition = {
          // pageSize: 'legal',
          pageSize: _this5.printout.pageSize,
          pageOrientation: _this5.printout.pageOrientation,
          pageMargins: _this5.printout.pageMargins,
          defaultStyle: _this5.printout.defaultStyle,
          background: {
            alignment: "right",
            margin: [0, 0.4 * 72, 0.3 * 72, 0],
            width: 140,
            image: _this5.printout.background.image
          },
          footer: function footer(currentPage, pageCount) {
            return {
              columns: [{
                text: "Generated from Twin-Circa Marketing Expense Tracker ".concat(moment__WEBPACK_IMPORTED_MODULE_1___default()().format("YYYY-MM-DD HH:mm:ss")),
                width: 500,
                margin: [0.5 * 72, 0, 0.5 * 72, 0],
                style: "pageFooter"
              }, {
                text: "Page " + currentPage.toString() + " of " + pageCount,
                alignment: "right",
                style: "pageFooter",
                margin: [0, 0, 0.5 * 72, 0]
              }]
            };
          },
          content: [{
            text: ["Expense Summary Report"],
            style: "header"
          }, {
            text: "User",
            style: "subheader"
          }, {
            style: "tableOfExpenses",
            table: {
              headerRows: 1,
              widths: table_columns.map(function (item, index) {
                if (table_columns.length - 1 == index) {
                  return "*";
                }

                return "auto";
              }),
              body: body
            },
            layout: {
              hLineWidth: function hLineWidth(i, node) {
                return i === 0 || i === node.table.body.length ? 0.5 : 0.5;
              },
              vLineWidth: function vLineWidth(i, node) {
                return i === 0 || i === node.table.widths.length ? 0.5 : 0.5;
              },
              hLineColor: function hLineColor(i, node) {
                return i === 0 || i === node.table.body.length ? "gray" : "gray";
              },
              vLineColor: function vLineColor(i, node) {
                return i === 0 || i === node.table.widths.length ? "gray" : "gray";
              },
              fillColor: function fillColor(rowIndex, node, columnIndex) {
                return rowIndex % 2 === 0 ? "#dbdbdb" : null;
              }
            }
          }, {
            style: "tableSignatures",
            table: {
              widths: ["*", "*", "*", "*"],
              body: [[{
                text: "Prepared by:",
                style: "tableSignaturesBody"
              }, {
                text: "Checked by:",
                style: "tableSignaturesBody"
              }, {
                text: "Approved by:",
                style: "tableSignaturesBody"
              }, {
                text: "Voucher No.",
                style: "tableSignaturesBody"
              }], [{
                text: "___________________________________",
                style: "tableSignaturesBody"
              }, {
                text: "___________________________________",
                style: "tableSignaturesBody"
              }, {
                text: "___________________________________",
                style: "tableSignaturesBody"
              }, {
                text: "___________________________________",
                style: "tableSignaturesBody"
              }]]
            },
            layout: "noBorders"
          }],
          styles: {
            header: {
              fontSize: 13,
              bold: false,
              alignment: "center"
            },
            subheader: {
              fontSize: 10
            },
            tableSignatures: {
              margin: [0, 5, 0, 15]
            },
            tableSignaturesBody: {
              fontSize: 10
            },
            tableOfExpenses: {
              margin: [0, 5, 0, 15]
            },
            tableOfExpensesHeader: {
              bold: true,
              fontSize: 9,
              color: "white",
              fillColor: "#4caf50",
              alignment: "center"
            },
            tableOfExpensesBody: {
              fontSize: 9
            },
            signatures: {
              margin: [0, 5, 0, 15],
              fontSize: 10
            },
            pageFooter: {
              fontSize: 8
            }
          }
        };

        if (action == "print") {
          // pdfMake.createPdf(docDefinition).print();
          pdfMake.createPdf(docDefinition).open();
        } else {
          pdfMake.createPdf(docDefinition).download("expense_report.pdf");
        }
      });
    },
    printReportByDate: function printReportByDate(action) {
      var _this6 = this;

      this.loadReportByDate().then(function () {
        var table_columns = [];
        var table_rows = [];
        var table_footer = [];
        table_columns.push({
          text: "Date",
          style: "tableOfExpensesHeader"
        });

        _this6.expense_types.forEach(function (element) {
          table_columns.push({
            text: element.name,
            style: "tableOfExpensesHeader"
          });
        });

        table_columns.push({
          text: "Total",
          style: "tableOfExpensesHeader"
        });
        var temp_table_body = {};
        var temp_expense_types = {};
        var expense_date = null;
        var expense_type = null; // loop through retrieved records

        _this6.reports_by_date.forEach(function (element) {
          // create new object if current user does not match with previous record
          if (expense_date !== element.expense_date) {
            temp_table_body = {};
            expense_date = element.expense_date; // set default values for current row

            _this6.expense_types.forEach(function (expense_type) {
              temp_expense_types[expense_type.name] = 0;
            });

            temp_table_body = _objectSpread(_objectSpread({
              Date: element.expense_date
            }, temp_expense_types), {}, {
              Total: 0
            });
            table_rows.push(temp_table_body);
          } // set expense type amount


          temp_table_body[element.expense_type_name] = element.expense_amount; // sum of all expense types

          if ("Total" in temp_table_body) {
            var total = 0;

            _this6.expense_types.forEach(function (item) {
              total += temp_table_body[item.name];
            });

            temp_table_body["Total"] = total;
          }
        }); // sum total amount per expense type


        _this6.expense_types.forEach(function (expense_type) {
          temp_expense_types[expense_type.name] = _this6.mixin_formatNumber(table_rows.reduce(function (total, item) {
            return total + item[expense_type.name];
          }, 0));
        }); // add row for total amounts


        table_rows.push(_objectSpread(_objectSpread({
          Total: "Total"
        }, temp_expense_types), {}, {
          TotalAmount: _this6.mixin_formatNumber(table_rows.reduce(function (total, item) {
            return total + item["Total"];
          }, 0))
        }));
        var temp = table_rows.map(function (item) {
          return Object.values(item);
        });
        var itemss = temp.map(function (item) {
          var val = [];

          for (var i = 0; i < item.length; i++) {
            val.push({
              text: item[i],
              style: "tableOfExpensesBody"
            });
          }

          return val;
        });
        var body = [];
        body.push(table_columns);
        itemss.forEach(function (element) {
          body.push(element);
        });

        var pdfMake = __webpack_require__(/*! pdfmake/build/pdfmake.js */ "./node_modules/pdfmake/build/pdfmake.js");

        if (pdfMake.vfs == undefined) {
          var pdfFonts = __webpack_require__(/*! pdfmake/build/vfs_fonts.js */ "./node_modules/pdfmake/build/vfs_fonts.js");

          pdfMake.vfs = pdfFonts.pdfMake.vfs;
        }

        pdfMake.fonts = {
          Roboto: {
            normal: "Roboto-Regular.ttf",
            bold: "Roboto-Medium.ttf",
            italics: "Roboto-Italic.ttf",
            bolditalics: "Roboto-MediumItalic.ttf"
          }
        };
        var docDefinition = {
          // pageSize: 'legal',
          pageSize: _this6.printout.pageSize,
          pageOrientation: _this6.printout.pageOrientation,
          pageMargins: _this6.printout.pageMargins,
          defaultStyle: _this6.printout.defaultStyle,
          background: {
            alignment: "right",
            margin: [0, 0.4 * 72, 0.3 * 72, 0],
            width: 140,
            image: _this6.printout.background.image
          },
          footer: function footer(currentPage, pageCount) {
            return {
              columns: [{
                text: "Generated from Twin-Circa Marketing Expense Tracker ".concat(moment__WEBPACK_IMPORTED_MODULE_1___default()().format("YYYY-MM-DD HH:mm:ss")),
                width: 500,
                margin: [0.5 * 72, 0, 0.5 * 72, 0],
                style: "pageFooter"
              }, {
                text: "Page " + currentPage.toString() + " of " + pageCount,
                alignment: "right",
                style: "pageFooter",
                margin: [0, 0, 0.5 * 72, 0]
              }]
            };
          },
          content: [{
            text: ["Expense Summary Report"],
            style: "header"
          }, {
            text: "Date",
            style: "subheader"
          }, {
            style: "tableOfExpenses",
            table: {
              headerRows: 1,
              widths: table_columns.map(function (item, index) {
                if (table_columns.length - 1 == index) {
                  return "*";
                }

                return "auto";
              }),
              body: body
            },
            layout: {
              hLineWidth: function hLineWidth(i, node) {
                return i === 0 || i === node.table.body.length ? 0.5 : 0.5;
              },
              vLineWidth: function vLineWidth(i, node) {
                return i === 0 || i === node.table.widths.length ? 0.5 : 0.5;
              },
              hLineColor: function hLineColor(i, node) {
                return i === 0 || i === node.table.body.length ? "gray" : "gray";
              },
              vLineColor: function vLineColor(i, node) {
                return i === 0 || i === node.table.widths.length ? "gray" : "gray";
              },
              fillColor: function fillColor(rowIndex, node, columnIndex) {
                return rowIndex % 2 === 0 ? "#dbdbdb" : null;
              }
            }
          }, {
            style: "tableSignatures",
            table: {
              widths: ["*", "*", "*", "*"],
              body: [[{
                text: "Prepared by:",
                style: "tableSignaturesBody"
              }, {
                text: "Checked by:",
                style: "tableSignaturesBody"
              }, {
                text: "Approved by:",
                style: "tableSignaturesBody"
              }, {
                text: "Voucher No.",
                style: "tableSignaturesBody"
              }], [{
                text: "___________________________________",
                style: "tableSignaturesBody"
              }, {
                text: "___________________________________",
                style: "tableSignaturesBody"
              }, {
                text: "___________________________________",
                style: "tableSignaturesBody"
              }, {
                text: "___________________________________",
                style: "tableSignaturesBody"
              }]]
            },
            layout: "noBorders"
          }],
          styles: {
            header: {
              fontSize: 13,
              bold: false,
              alignment: "center"
            },
            subheader: {
              fontSize: 10
            },
            tableSignatures: {
              margin: [0, 5, 0, 15]
            },
            tableSignaturesBody: {
              fontSize: 10
            },
            tableOfExpenses: {
              margin: [0, 5, 0, 15]
            },
            tableOfExpensesHeader: {
              bold: true,
              fontSize: 9,
              color: "white",
              fillColor: "#4caf50",
              alignment: "center"
            },
            tableOfExpensesBody: {
              fontSize: 9
            },
            signatures: {
              margin: [0, 5, 0, 15],
              fontSize: 10
            },
            pageFooter: {
              fontSize: 8
            }
          }
        };

        if (action == "print") {
          // pdfMake.createPdf(docDefinition).print();
          pdfMake.createPdf(docDefinition).open();
        } else {
          pdfMake.createPdf(docDefinition).download("expense_report.pdf");
        }
      });
    },
    printReportByExpense: function printReportByExpense(action) {
      var _this7 = this;

      console.log(this.selected.map(function (item) {
        return new Date(item.from);
      }));
      this.loadReportByExpense().then(function () {
        var table_columns = [];
        var table_rows = [];
        var table_footer = [];
        table_columns.push({
          text: "Date",
          style: "tableOfExpensesHeader"
        });
        table_columns.push({
          text: "Particulars",
          style: "tableOfExpensesHeader"
        });

        _this7.expense_types.forEach(function (element) {
          table_columns.push({
            text: element.name,
            style: "tableOfExpensesHeader"
          });
        });

        table_columns.push({
          text: "Total",
          style: "tableOfExpensesHeader"
        });
        var temp_table_body = {};
        var temp_expense_types = {};
        var expense_id = null;
        var expense_type = null; // loop through retrieved records

        _this7.reports_by_expense.forEach(function (element) {
          // create new object if current user does not match with previous record
          if (expense_id !== element.expense_id) {
            temp_table_body = {};
            expense_id = element.expense_id; // set default values for current row

            _this7.expense_types.forEach(function (expense_type) {
              temp_expense_types[expense_type.name] = 0;
            });

            var details = !element.expense_details || element.expense_details == "null" ? [] : JSON.parse(element.expense_details).map(function (item) {
              return "".concat(item.sub_type_name == null ? "" : item.sub_type_name + "/ ").concat(item.description, ": ").concat(item.total) + "\n";
            }).join("");
            temp_table_body = _objectSpread(_objectSpread({
              Date: element.expense_date,
              Particulars: element.expense_description + "\n" + details
            }, temp_expense_types), {}, {
              Total: 0
            });
            table_rows.push(temp_table_body);
          } // set expense type amount


          temp_table_body[element.expense_type_name] = element.expense_amount; // sum of all expense types

          if ("Total" in temp_table_body) {
            var total = 0;

            _this7.expense_types.forEach(function (item) {
              total += temp_table_body[item.name];
            });

            temp_table_body["Total"] = total;
          }
        }); // sum total amount per expense type


        _this7.expense_types.forEach(function (expense_type) {
          temp_expense_types[expense_type.name] = _this7.mixin_formatNumber(table_rows.reduce(function (total, item) {
            return total + item[expense_type.name];
          }, 0));
        }); // add row for total amounts


        table_rows.push(_objectSpread(_objectSpread({
          Total: "Total",
          Particulars: ""
        }, temp_expense_types), {}, {
          TotalAmount: _this7.mixin_formatNumber(table_rows.reduce(function (total, item) {
            return total + item["Total"];
          }, 0))
        }));
        var temp = table_rows.map(function (item) {
          return Object.values(item);
        });
        var itemss = temp.map(function (item) {
          var val = [];

          for (var i = 0; i < item.length; i++) {
            val.push({
              text: item[i],
              style: "tableOfExpensesBody"
            });
          }

          return val;
        });
        var body = [];
        body.push(table_columns);
        itemss.forEach(function (element) {
          body.push(element);
        });

        var pdfMake = __webpack_require__(/*! pdfmake/build/pdfmake.js */ "./node_modules/pdfmake/build/pdfmake.js");

        if (pdfMake.vfs == undefined) {
          var pdfFonts = __webpack_require__(/*! pdfmake/build/vfs_fonts.js */ "./node_modules/pdfmake/build/vfs_fonts.js");

          pdfMake.vfs = pdfFonts.pdfMake.vfs;
        }

        pdfMake.fonts = {
          Roboto: {
            normal: "Roboto-Regular.ttf",
            bold: "Roboto-Medium.ttf",
            italics: "Roboto-Italic.ttf",
            bolditalics: "Roboto-MediumItalic.ttf"
          }
        };
        var docDefinition = {
          // pageSize: 'legal',
          pageSize: _this7.printout.pageSize,
          pageOrientation: _this7.printout.pageOrientation,
          pageMargins: _this7.printout.pageMargins,
          defaultStyle: _this7.printout.defaultStyle,
          background: {
            alignment: "right",
            margin: [0, 0.4 * 72, 0.3 * 72, 0],
            width: 140,
            image: _this7.printout.background.image
          },
          footer: function footer(currentPage, pageCount) {
            return {
              columns: [{
                text: "Generated from Twin-Circa Marketing Expense Tracker ".concat(moment__WEBPACK_IMPORTED_MODULE_1___default()().format("YYYY-MM-DD HH:mm:ss")),
                width: 500,
                margin: [0.5 * 72, 0, 0.5 * 72, 0],
                style: "pageFooter"
              }, {
                text: "Page " + currentPage.toString() + " of " + pageCount,
                alignment: "right",
                style: "pageFooter",
                margin: [0, 0, 0.5 * 72, 0]
              }]
            };
          },
          content: [{
            text: ["Expense Summary Report"],
            style: "header"
          }, {
            text: "Report No. : " + _this7.selected.map(function (item) {
              return item.code;
            }),
            style: "subheader"
          }, {
            style: "tableOfExpenses",
            table: {
              headerRows: 1,
              widths: table_columns.map(function (item, index) {
                if (table_columns.length - 1 == index) {
                  return "*";
                }

                return "auto";
              }),
              body: body
            },
            layout: {
              hLineWidth: function hLineWidth(i, node) {
                return i === 0 || i === node.table.body.length ? 0.5 : 0.5;
              },
              vLineWidth: function vLineWidth(i, node) {
                return i === 0 || i === node.table.widths.length ? 0.5 : 0.5;
              },
              hLineColor: function hLineColor(i, node) {
                return i === 0 || i === node.table.body.length ? "gray" : "gray";
              },
              vLineColor: function vLineColor(i, node) {
                return i === 0 || i === node.table.widths.length ? "gray" : "gray";
              },
              fillColor: function fillColor(rowIndex, node, columnIndex) {
                return rowIndex % 2 === 0 ? "#dbdbdb" : null;
              }
            }
          }, {
            style: "tableSignatures",
            table: {
              widths: ["*", "*", "*", "*"],
              body: [[{
                text: "Prepared by:",
                style: "tableSignaturesBody"
              }, {
                text: "Recommended by:",
                style: "tableSignaturesBody"
              }, {
                text: "Checked by:",
                style: "tableSignaturesBody"
              }, {
                text: "Approved by:",
                style: "tableSignaturesBody"
              }], [{
                text: "___________________________________",
                style: "tableSignaturesBody"
              }, {
                text: "___________________________________",
                style: "tableSignaturesBody"
              }, {
                text: "___________________________________",
                style: "tableSignaturesBody"
              }, {
                text: "___________________________________",
                style: "tableSignaturesBody"
              }]]
            },
            layout: "noBorders"
          }],
          styles: {
            header: {
              fontSize: 13,
              bold: false,
              alignment: "center"
            },
            subheader: {
              fontSize: 10
            },
            tableSignatures: {
              margin: [0, 5, 0, 15]
            },
            tableSignaturesBody: {
              fontSize: 10
            },
            tableOfExpenses: {
              margin: [0, 5, 0, 15]
            },
            tableOfExpensesHeader: {
              bold: true,
              fontSize: 9,
              color: "white",
              fillColor: "#4caf50",
              alignment: "center"
            },
            tableOfExpensesBody: {
              fontSize: 9
            },
            signatures: {
              margin: [0, 5, 0, 15],
              fontSize: 10
            },
            pageFooter: {
              fontSize: 8
            }
          }
        };

        if (action == "print") {
          // pdfMake.createPdf(docDefinition).print();
          pdfMake.createPdf(docDefinition).open();
        } else {
          pdfMake.createPdf(docDefinition).download("expense_report.pdf");
        }
      });
    },
    onPrint: function onPrint(action, group_by) {
      if (this.selected.length == 0) {
        this.mixin_errorDialog("Error", "No items selected");
        return;
      }

      switch (group_by) {
        case "user":
          this.printReportByUser(action);
          break;

        case "date":
          this.printReportByDate(action);
          break;

        default:
          this.printReportByExpense(action);
          break;
      }
    },
    updateDates: function updateDates(e) {
      this.date_range = e;
    },
    getDataFromApi: function getDataFromApi() {
      var _this8 = this;

      var _this = this;

      _this.loading = true;
      return new Promise(function (resolve, reject) {
        var _this8$options = _this8.options,
            sortBy = _this8$options.sortBy,
            sortDesc = _this8$options.sortDesc,
            page = _this8$options.page,
            itemsPerPage = _this8$options.itemsPerPage;

        var search = _this.search.trim().toLowerCase();

        var status = _this.status;
        var user_id = _this.user.id;
        var range = _this.date_range;
        axios.get("/api/expense_reports", {
          params: {
            search: search,
            sortBy: sortBy[0],
            sortType: sortDesc[0] ? "desc" : "asc",
            page: page,
            itemsPerPage: itemsPerPage,
            user_id: user_id,
            status: status,
            start_date: range[0],
            end_date: range[1] ? range[1] : range[0],
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
    loadUsers: function loadUsers() {
      var _this = this;

      axios.get("/api/data/users").then(function (response) {
        _this.users = response.data.data;

        _this.users.unshift({
          id: 0,
          full_name: "All Employees"
        });
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

        _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
      });
    },
    onRefresh: function onRefresh() {
      Object.assign(this.$data, this.$options.data.apply(this));
      this.loadTotalCountReportStatus();
      this.loadUsers();
      this.loadExpenseTypes();
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
            }); // _this.$store.dispatch("AUTH_USER");


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
            }); // _this.$store.dispatch("AUTH_USER");


            _this.selected = [];

            _this.loadTotalCountReportStatus();

            _this.$store.dispatch("AUTH_NOTIFICATIONS");
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

      if (this.selected.filter(function (item) {
        return item.status.status === "Unsubmitted";
      }).length <= 0) {
        this.mixin_errorDialog("Error", "No selected unsubmitted report(s)");
        return;
      }

      var period = this.$store.getters.settings.submission_period;
      var last_submission_date = "";
      var submission_date = moment__WEBPACK_IMPORTED_MODULE_1___default.a.min(this.selected.filter(function (item) {
        return item.status.status === "Unsubmitted";
      }).map(function (item2) {
        return moment__WEBPACK_IMPORTED_MODULE_1___default()(item2.from);
      })).format("YYYY-MM-DD");

      switch (period) {
        case "Weekly":
          last_submission_date = moment__WEBPACK_IMPORTED_MODULE_1___default()(submission_date).endOf("week").format("YYYY-MM-DD");
          break;

        case "Monthly":
          last_submission_date = moment__WEBPACK_IMPORTED_MODULE_1___default()(submission_date).endOf("month").format("YYYY-MM-DD");
          break;

        default:
          last_submission_date = moment__WEBPACK_IMPORTED_MODULE_1___default()(submission_date).format("YYYY-MM-DD");
          break;
      }

      if (!this.mixin_can("submit expense reports beyond due date")) {
        if (!moment__WEBPACK_IMPORTED_MODULE_1___default()(moment__WEBPACK_IMPORTED_MODULE_1___default()()).isSameOrBefore(last_submission_date, "day")) {
          this.mixin_errorDialog("Error (Not Allowed)", "Last submission was ".concat(last_submission_date));
          return;
        }
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
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this, notes, ids;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // this.onUpdate("reject", "put");
                _this = _this9;
                _context.next = 3;
                return _this9.$dialog.prompt({
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
                    }); // _this.$store.dispatch("AUTH_USER");


                    _this.$store.dispatch("AUTH_NOTIFICATIONS");

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
    },
    show_edit: function show_edit(item) {
      // let item = null;
      if (!this.mixin_can("edit expense reports")) {
        return false;
      }

      if (item) {
        if (!item.approved_at) {
          return false;
        } else if (!item.cancelled_at) {
          return false;
        } else if (!item.deleted_at) {
          return false;
        }
      }

      return true;
    }
  },
  watch: {
    params: {
      handler: function handler() {
        var _this10 = this;

        this.getDataFromApi().then(function (data) {
          _this10.items = data.items;
          _this10.totalItems = data.total;
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
      }).includes("Unsubmitted")) {
        var period = this.$store.getters.settings.submission_period;
        var last_submission_date = "";
        var submission_date = moment__WEBPACK_IMPORTED_MODULE_1___default.a.min(this.selected.map(function (item) {
          return moment__WEBPACK_IMPORTED_MODULE_1___default()(item.from);
        })).format("YYYY-MM-DD");

        switch (period) {
          case "Weekly":
            last_submission_date = moment__WEBPACK_IMPORTED_MODULE_1___default()(submission_date).endOf("week").format("YYYY-MM-DD");
            break;

          case "Monthly":
            last_submission_date = moment__WEBPACK_IMPORTED_MODULE_1___default()(submission_date).endOf("month").format("YYYY-MM-DD");
            break;

          default:
            last_submission_date = moment__WEBPACK_IMPORTED_MODULE_1___default()(submission_date).format("YYYY-MM-DD");
            break;
        }

        this.warning = "Last Submission Date: ".concat(last_submission_date);
      } else if (this.selected.map(function (item) {
        return item.status.status;
      }).includes("Submitted")) {
        var _period = this.$store.getters.settings.approval_period;
        var submission_period = moment__WEBPACK_IMPORTED_MODULE_1___default.a.min(this.selected.map(function (item) {
          return moment__WEBPACK_IMPORTED_MODULE_1___default()(item.submitted_at);
        })).format("YYYY-MM-DD");
        var last_approval_date = moment__WEBPACK_IMPORTED_MODULE_1___default()(submission_period).add(_period, "days").format("YYYY-MM-DD");
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
      }, _defineProperty(_objectSpread2, "query", this.status), _defineProperty(_objectSpread2, "query", this.user), _defineProperty(_objectSpread2, "query", this.date_range), _objectSpread2));
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

        return maxDate; // return moment(today).isSameOrBefore(maxDate) ? today : maxDate;
      }

      return today;
    },
    formattedDateRange: function formattedDateRange() {
      var start_date = moment__WEBPACK_IMPORTED_MODULE_1___default()(this.date_range[0]).format("MMM DD, YYYY");
      var end_date = moment__WEBPACK_IMPORTED_MODULE_1___default()(this.date_range[1]).format("MMM DD, YYYY");

      if (JSON.stringify(start_date) == JSON.stringify(end_date)) {
        return start_date;
      }

      if (JSON.stringify(end_date) == null) {
        return start_date;
      }

      return "".concat(start_date, " ~ ").concat(end_date);
    }
  },
  // mounted() {
  //     this.getDataFromApi().then(data => {
  //         this.items = data.items;
  //         this.totalItems = data.total;
  //     });
  // },
  created: function created() {
    // this.$store.dispatch("AUTH_USER");
    this.$store.dispatch("AUTH_NOTIFICATIONS");
    this.loadTotalCountReportStatus();
    this.loadUsers();
    this.loadExpenseTypes();
  },
  activated: function activated() {
    var _this11 = this;

    this.$store.dispatch("AUTH_NOTIFICATIONS");
    this.loadTotalCountReportStatus();
    this.loadUsers();
    this.loadExpenseTypes();
    this.getDataFromApi().then(function (data) {
      _this11.items = data.items;
      _this11.totalItems = data.total;
    });
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
              _c(
                "v-chip",
                {
                  staticClass: "mr-2",
                  attrs: { close: "", small: "", "close-icon": "mdi-refresh" },
                  on: { "click:close": _vm.onRefresh }
                },
                [_vm._v("\n                Refresh\n            ")]
              ),
              _vm._v(" "),
              _vm.totalUnsubmitted > 0
                ? _c(
                    "v-chip",
                    {
                      staticClass: "mr-2",
                      attrs: {
                        color: "red",
                        dark: "",
                        small: "",
                        close: "",
                        "close-icon": "mdi-alert"
                      },
                      on: { "click:close": _vm.showAllUnsubmitted }
                    },
                    [
                      _vm._v(
                        "\n                Unsubmitted (" +
                          _vm._s(_vm.totalUnsubmitted) +
                          ")\n            "
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.totalUnapproved > 0
                ? _c(
                    "v-chip",
                    {
                      staticClass: "mr-2",
                      attrs: {
                        color: "red",
                        dark: "",
                        close: "",
                        small: "",
                        "close-icon": "mdi-alert"
                      },
                      on: { "click:close": _vm.showAllUnapproved }
                    },
                    [
                      _vm._v(
                        "\n                For Approval (" +
                          _vm._s(_vm.totalUnapproved) +
                          ")\n            "
                      )
                    ]
                  )
                : _vm._e()
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
                                      _vm._v("Group by user")
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
                                        return _vm.onPrint("print", "date")
                                      }
                                    }
                                  },
                                  [
                                    _c("v-list-item-title", [
                                      _vm._v("Group by date")
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
                                      _vm._v("Group by user")
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
                                        return _vm.onPrint("pdf", "date")
                                      }
                                    }
                                  },
                                  [
                                    _c("v-list-item-title", [
                                      _vm._v("Group by date")
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