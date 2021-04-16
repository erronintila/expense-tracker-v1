(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/expense_reports/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/expense_reports/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony import */ var _components_datepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/datepicker/DateRangePicker */ "./resources/js/components/datepicker/DateRangePicker.vue");
/* harmony import */ var _components_selector_dialog_UserDialogSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/selector/dialog/UserDialogSelector */ "./resources/js/components/selector/dialog/UserDialogSelector.vue");
/* harmony import */ var _services_ExpenseReportDataService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/ExpenseReportDataService */ "./resources/js/services/ExpenseReportDataService.js");
/* harmony import */ var _services_ExpenseTypeDataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/ExpenseTypeDataService */ "./resources/js/services/ExpenseTypeDataService.js");


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






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DateRangePicker: _components_datepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_3__["default"],
    UserDialogSelector: _components_selector_dialog_UserDialogSelector__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      formDataLoaded: false,
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
      user: this.$store.getters.user.is_admin && this.mixin_can("view all users expense reports") ? null : this.$store.getters.user,
      users: [],
      date_range: [moment__WEBPACK_IMPORTED_MODULE_1___default()().startOf("month").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_1___default()().endOf("month").format("YYYY-MM-DD")],
      preset: "",
      presets: ["Today", "Yesterday", "Last 7 Days", "Last 30 Days", "This Week", "This Month", "This Quarter", "This Year", "Last Week", "Last Month", "Last Quarter", "Last Year", "Last 5 Years"],
      totalAmount: 0,
      totalUnsubmitted: 0,
      totalUnapproved: 0,
      status: "All Expense Reports",
      statuses: ["All Expense Reports", "Unsubmitted Expense Reports", "Submitted Expense Reports", "Approved Expense Reports", "Rejected Expense Reports", "Released Payment", "Reimbursed Expense Reports", // "Overdue Expense Reports",
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
      reports_by_date: []
    };
  },
  methods: {
    onSearch: function onSearch() {
      var _this = this;

      this.getDataFromApi().then(function (data) {
        _this.getDataFromApi().then(function (data) {
          _this.items = data.items;
          _this.totalItems = data.total;
          _this.formDataLoaded = true;
        });
      });
    },
    selectUser: function selectUser(e) {
      this.selected = [];

      if (e == null || e == undefined) {
        this.user = null;
        return;
      }

      this.user = e;
    },
    resetUser: function resetUser() {
      this.selected = [];
      this.user = null;
    },
    showAllUnsubmitted: function showAllUnsubmitted() {
      this.user = null;
      this.status = "Unsubmitted Expense Reports";
      this.updateDates([moment__WEBPACK_IMPORTED_MODULE_1___default()("0000-01-01").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_1___default()().format("YYYY-MM-DD")]);
    },
    showAllUnapproved: function showAllUnapproved() {
      this.user = null;
      this.status = "Submitted Expense Reports";
      this.updateDates([moment__WEBPACK_IMPORTED_MODULE_1___default()("0000-01-01").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_1___default()().format("YYYY-MM-DD")]);
    },
    loadTotalCountReportStatus: function loadTotalCountReportStatus() {
      var _this2 = this;

      _services_ExpenseReportDataService__WEBPACK_IMPORTED_MODULE_5__["default"].get({
        params: {
          total_count: true
        }
      }).then(function (response) {
        var _response$data, _total$data$total_uns, _total$data$total_una;

        var total = (_response$data = response.data) !== null && _response$data !== void 0 ? _response$data : 0;
        _this2.totalUnsubmitted = (_total$data$total_uns = total.data.total_unsubmitted) !== null && _total$data$total_uns !== void 0 ? _total$data$total_uns : 0;
        _this2.totalUnapproved = (_total$data$total_una = total.data.total_unapproved) !== null && _total$data$total_una !== void 0 ? _total$data$total_una : 0;
      })["catch"](function (error) {
        _this2.mixin_showErrors(error);
      });
    },
    loadExpenseTypes: function loadExpenseTypes() {
      var _this3 = this;

      _services_ExpenseTypeDataService__WEBPACK_IMPORTED_MODULE_6__["default"].get({
        params: {
          only: true
        }
      }).then(function (response) {
        _this3.expense_types = response.data.data;
      })["catch"](function (error) {
        _this3.mixin_showErrors(error);
      });
    },
    loadReportData: function loadReportData(report_type) {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        var ids = _this4.selected == null ? [] : _this4.selected.map(function (item) {
          return item.id;
        });
        var url = "";

        switch (report_type) {
          case "all_expenses":
            url = "/api/data/print_report?by_expense_id=true&ids=".concat(ids);
            break;

          case "expenses_by_user":
            url = "/api/data/print_report?by_user_id=true&ids=".concat(ids);
            break;

          case "expenses_by_date":
            url = "/api/data/print_report?by_date=true&ids=".concat(ids);
            break;

          default:
            break;
        }

        axios.get(url).then(function (response) {
          var item = response.data.data;
          resolve(item);
        })["catch"](function (error) {
          _this4.mixin_showErrors(error);

          reject();
        });
      });
    },
    printReport: function printReport(action, report_type, export_as_pdf) {
      var _this5 = this;

      var table_columns = [];
      var table_rows = [];
      var table_footer = [];
      var temp_table_body = {};
      var temp_expense_types = {};
      var user_id = null;
      var expense_id = null;
      var expense_date = null;
      var expense_type = null;
      var subheader = "";

      if (this.selected.length == 0) {
        this.mixin_errorDialog("Error", "No items selected");
        return;
      } // LOAD EXPENSE REPORT DATA BASED ON REPORT TYPE AND THEN PRINT REPORT


      this.loadReportData(report_type).then(function (item) {
        var item_dates = item.map(function (item) {
          return new Date(item.expense_date);
        });
        var maxDate = new Date(Math.max.apply(null, item_dates));
        var minDate = new Date(Math.min.apply(null, item_dates));

        switch (report_type) {
          case "all_expenses":
            table_columns.push({
              text: "Date",
              style: "tableOfExpensesHeader"
            });
            table_columns.push({
              text: "Particulars",
              style: "tableOfExpensesHeader"
            });
            temp_table_body = {};
            subheader = "Report No. : " + _this5.selected.map(function (item) {
              return item.code;
            });
            break;

          case "expenses_by_user":
            table_columns.push({
              text: "Employee",
              style: "tableOfExpensesHeader"
            });
            temp_table_body = {};
            subheader = ""; // subheader = `Period: ${moment(minDate).format(
            //     "YYYY-MM-DD"
            // )} ~ ${moment(maxDate).format("YYYY-MM-DD")}`;

            break;

          case "expenses_by_date":
            table_columns.push({
              text: "Date",
              style: "tableOfExpensesHeader"
            });
            temp_table_body = {};
            subheader = "Period: ".concat(moment__WEBPACK_IMPORTED_MODULE_1___default()(minDate).format("YYYY-MM-DD"), " ~ ").concat(moment__WEBPACK_IMPORTED_MODULE_1___default()(maxDate).format("YYYY-MM-DD"));
            break;

          default:
            break;
        } // ADD ALL EXPENSE TYPES AS PART OF TABLE COLUMNS


        _this5.expense_types.forEach(function (element) {
          table_columns.push({
            text: element.name,
            style: "tableOfExpensesHeader"
          });
        }); // ADD TOTAL AS THE LAST TABLE COLUMN


        table_columns.push({
          text: "Total",
          style: "tableOfExpensesHeader"
        }); // ITERATE THROUGH RETRIEVED DATA

        item.forEach(function (element) {
          var condition = false;

          if (report_type == "all_expenses") {
            condition = expense_id !== element.expense_id;
          } else if (report_type == "expenses_by_user") {
            condition = user_id !== element.user_id;
          } else {
            condition = expense_date !== element.expense_date;
          } // CREATE NEW OBJECT IF CURRENT USER DOES NOT MATCH WITH PREVIOUS DATA


          if (condition) {
            temp_table_body = {};
            user_id = element.user_id;
            expense_date = element.expense_date;
            expense_id = element.expense_id; // SET ALL EXPENSE TYPES WITH A VALUE OF ZERO

            _this5.expense_types.forEach(function (expense_type) {
              temp_expense_types[expense_type.name] = 0;
            }); // SET DEFAULT VALUES FOR CURRENT ROW


            switch (report_type) {
              case "all_expenses":
                var details = !element.expense_details || element.expense_details == "null" ? [] : JSON.parse(element.expense_details).map(function (item) {
                  return "".concat(item.sub_type_name == null ? "" : item.sub_type_name + "/ ").concat(item.description, ": ").concat(item.total) + "\n";
                }).join("");
                temp_table_body = _objectSpread(_objectSpread({
                  Date: element.expense_date,
                  Particulars: element.expense_description + "\n" + details
                }, temp_expense_types), {}, {
                  Total: 0
                });
                break;

              case "expenses_by_user":
                // SET DEFAULT VALUES FOR CURRENT ROW
                temp_table_body = _objectSpread(_objectSpread({
                  User: "".concat(element.last_name, ", ").concat(element.first_name, " ").concat(element.middle_name == null ? "" : element.middle_name, " ").concat(element.suffix == null ? "" : element.suffix)
                }, temp_expense_types), {}, {
                  Total: 0
                });
                break;

              case "expenses_by_date":
                temp_table_body = _objectSpread(_objectSpread({
                  Date: element.expense_date
                }, temp_expense_types), {}, {
                  Total: 0
                });
                break;

              default:
                break;
            }

            table_rows.push(temp_table_body);
          } // SET EXPENSE TYPE AMOUNT


          temp_table_body[element.expense_type_name] = element.expense_amount; // SUM OF ALL ROW DATA

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
        });

        if (report_type == "all_expenses") {
          // add row for total amounts
          table_rows.push(_objectSpread(_objectSpread({
            Total: "Total",
            Particulars: ""
          }, temp_expense_types), {}, {
            TotalAmount: _this5.mixin_formatNumber(table_rows.reduce(function (total, item) {
              return total + item["Total"];
            }, 0))
          }));
        } else {
          // add row for total amounts
          table_rows.push(_objectSpread(_objectSpread({
            Total: "Total"
          }, temp_expense_types), {}, {
            TotalAmount: _this5.mixin_formatNumber(table_rows.reduce(function (total, item) {
              return total + item["Total"];
            }, 0))
          }));
        } // GET ALL ROW VALUES


        var temp = table_rows.map(function (item) {
          return Object.values(item);
        }); // FORMAT ROW VALUES FOR PDFMAKE TABLE BODY

        var itemss = temp.map(function (item) {
          var val = [];

          for (var i = 0; i < item.length; i++) {
            val.push({
              text: item[i],
              style: "tableOfExpensesBody"
            });
          }

          return val;
        }); // SET PDFMAKE BODY DATA

        var body = [];
        body.push(table_columns);
        itemss.forEach(function (element) {
          body.push(element);
        }); // LOAD PDFMAKE INSTANCE

        var pdfMake = __webpack_require__(/*! pdfmake/build/pdfmake.js */ "./node_modules/pdfmake/build/pdfmake.js");

        if (pdfMake.vfs == undefined) {
          var pdfFonts = __webpack_require__(/*! pdfmake/build/vfs_fonts.js */ "./node_modules/pdfmake/build/vfs_fonts.js");

          pdfMake.vfs = pdfFonts.pdfMake.vfs;
        } // SET PDFMAKE FONTS


        pdfMake.fonts = {
          Roboto: {
            normal: "Roboto-Regular.ttf",
            bold: "Roboto-Medium.ttf",
            italics: "Roboto-Italic.ttf",
            bolditalics: "Roboto-MediumItalic.ttf"
          }
        };
        var signatureLabels = ["Prepared by:", "Recommended by:", "Checked by:", "Approved by:"];

        if (report_type != "all_expenses") {
          signatureLabels = ["Prepared by:", "Checked by:", "Approved by:", "Voucher No."];
        }

        var signatures = signatureLabels.map(function (item) {
          return {
            text: "".concat(item, "\n\n                        ___________________________________"),
            style: "tableSignaturesBody"
          };
        }); // SET PRINT FORMAT

        var docDefinition = _this5.printFormat(subheader, table_columns, body, signatures); // PRINT OR EXPORT REPORT


        if (export_as_pdf) {
          pdfMake.createPdf(docDefinition).download("expense_report.pdf");
          return;
        } // pdfMake.createPdf(docDefinition).print(); // DISPLAY PRINT DIALOG


        pdfMake.createPdf(docDefinition).open(); // DISPLAY PRINT PREVIEW
      });
    },
    printFormat: function printFormat(subheader, table_columns, body, signatures) {
      return {
        // pageSize: 'legal',
        pageSize: this.print_format.pageSize,
        pageOrientation: this.print_format.pageOrientation,
        pageMargins: this.print_format.pageMargins,
        defaultStyle: this.print_format.defaultStyle,
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
          columns: [{
            text: "",
            style: "subheader1"
          }, {
            text: ["Expense Summary Report"],
            style: "header1"
          }, {
            image: this.base64Image,
            fit: [this.$store.getters.settings.expense_report.print_format.background.width * 72, this.$store.getters.settings.expense_report.print_format.background.height * 72],
            style: "header2"
          }]
        }, {
          text: subheader,
          style: "subheader1"
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
          unbreakable: true,
          columns: signatures
        }],
        styles: {
          header1: {
            fontSize: 13,
            bold: false,
            alignment: "center"
          },
          header2: {
            alignment: "right"
          },
          subheader1: {
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
            // margin: [0, 5, 0, 15],
            fontSize: 10
          },
          pageFooter: {
            fontSize: 8
          }
        }
      };
    },
    updateDates: function updateDates(e) {
      this.date_range = e;
    },
    getDataFromApi: function getDataFromApi() {
      var _this6 = this;

      this.loading = true;
      return new Promise(function (resolve, reject) {
        var _this6$options = _this6.options,
            sortBy = _this6$options.sortBy,
            sortDesc = _this6$options.sortDesc,
            page = _this6$options.page,
            itemsPerPage = _this6$options.itemsPerPage;

        var search = _this6.search.trim().toLowerCase();

        var status = _this6.status;
        var user_id = _this6.user ? _this6.user.id : null;
        var range = _this6.date_range;
        _services_ExpenseReportDataService__WEBPACK_IMPORTED_MODULE_5__["default"].getAll({
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
          _this6.loading = false;
          resolve({
            items: items,
            total: total
          });
        })["catch"](function (error) {
          _this6.mixin_showErrors(error);

          _this6.loading = false;
          reject();
        });
      });
    },
    onRefresh: function onRefresh() {
      Object.assign(this.$data, this.$options.data.apply(this));
      this.loadTotalCountReportStatus();
      this.loadExpenseTypes();
      this.selected = [];
      this.$store.dispatch("AUTH_NOTIFICATIONS");
      this.$store.dispatch("AUTH_SETTINGS");
    },
    onShow: function onShow(item) {
      var params = {
        id: item.id
      };

      if (item.deleted_at) {
        params = {
          id: item.id,
          isDeleted: true
        };
      }

      this.$router.push({
        name: "user.expense_reports.show",
        params: params
      });
    },
    onEdit: function onEdit(item) {
      if (item.status.status == "Approved") {
        this.mixin_errorDialog("Error", "Report has been approved");
        return;
      }

      if (item.status.status == "Cancelled") {
        this.mixin_errorDialog("Error", "Report has been cancelled");
        return;
      }

      if (item.status.status == "Paid/Reimbursed") {
        this.mixin_errorDialog("Error", "Paid/reimbursed expense report can't be edited");
        return;
      }

      this.$router.push({
        name: "user.expense_reports.edit",
        params: {
          id: item.id
        }
      });
    },
    onDelete: function onDelete() {
      var _this7 = this;

      if (this.selected.map(function (item) {
        return item.status.status;
      }).includes("Cancelled")) {
        this.mixin_errorDialog("Error", "Report has already been cancelled");
        return;
      }

      if (!this.$store.getters.user.is_admin && this.selected.map(function (item) {
        return item.status.status;
      }).includes("Approved")) {
        this.mixin_errorDialog("Error", "Approved expense reports can't be cancelled");
        return;
      }

      if (this.selected.map(function (item) {
        return item.status.status;
      }).includes("Paid/Reimbursed")) {
        this.mixin_errorDialog("Error", "Paid/reimbursed expense reports can't be cancelled");
        return;
      }

      if (this.selected.length == 0) {
        this.mixin_errorDialog("Error", "No item(s) selected");
        return;
      }

      this.$confirm("Do you want to cancel expense report(s)?").then(function (res) {
        if (res) {
          var ids = _this7.selected.map(function (item) {
            return item.id;
          });

          _services_ExpenseReportDataService__WEBPACK_IMPORTED_MODULE_5__["default"]["delete"](ids).then(function (response) {
            _this7.mixin_successDialog(response.data.status, response.data.message);

            _this7.getDataFromApi().then(function (data) {
              _this7.items = data.items;
              _this7.totalItems = data.total;
              _this7.formDataLoaded = true;
            });

            _this7.loadTotalCountReportStatus();

            _this7.selected = [];
          })["catch"](function (error) {
            _this7.mixin_showErrors(error);
          });
        }
      });
    },
    // onUpdate(action, method) {
    //     if (this.selected.length == 0) {
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
    //                 let ids = this.selected.map(item => {
    //                     return item.id;
    //                 });
    //                 axios({
    //                     method: method,
    //                     url: `/api/expense_reports/${this.selected[0].id}`,
    //                     data: {
    //                         ids: ids,
    //                         action: action
    //                     }
    //                 })
    //                     .then(function(response) {
    //                         this.$dialog.message.success(
    //                             response.data.message,
    //                             {
    //                                 position: "top-right",
    //                                 timeout: 2000
    //                             }
    //                         );
    //                         this.getDataFromApi().then(data => {
    //                             this.items = data.items;
    //                             this.totalItems = data.total;
    //                         });
    //                         this.selected = [];
    //                     })
    //                     .catch(function(error) {
    //                         this.mixin_showErrors(error);
    //                     });
    //             }
    //         }
    //     );
    // },
    // ------------------------------------------------------------------------------------------------------------------
    //
    // ------------------------------------------------------------------------------------------------------------------
    onUpdate: function onUpdate(action, method) {
      var _this8 = this;

      var url = "";
      var ids = this.selected.map(function (item) {
        return item.id;
      });

      switch (action) {
        case "submit":
          url = "/api/expense_reports/submit/".concat(ids);
          break;

        case "approve":
          url = "/api/expense_reports/approve/".concat(ids);
          break;

        case "reject":
          url = "/api/expense_reports/reject/".concat(ids);
          break;

        case "duplicate":
          url = "/api/expense_reports/duplicate/".concat(ids);
          break;

        default:
          url = "/api/expense_reports/".concat(ids);
          break;
      }

      this.$confirm("Do you want to ".concat(action, " expense report(s)?")).then(function (res) {
        if (res) {
          axios({
            method: method,
            url: url
          }).then(function (response) {
            _this8.mixin_successDialog(response.data.status, response.data.message);

            _this8.getDataFromApi().then(function (data) {
              _this8.items = data.items;
              _this8.totalItems = data.total;
              _this8.formDataLoaded = true;
            });

            _this8.selected = [];

            _this8.loadTotalCountReportStatus();

            _this8.$store.dispatch("AUTH_NOTIFICATIONS");
          })["catch"](function (error) {
            _this8.mixin_showErrors(error);
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
        var notes, ids;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this9.$dialog.prompt({
                  text: "Please specify an appropriate reason for rejection",
                  title: "Do you want to reject expense report(s)?"
                });

              case 2:
                notes = _context.sent;

                if (notes) {
                  ids = _this9.selected.map(function (item) {
                    return item.id;
                  });
                  _services_ExpenseReportDataService__WEBPACK_IMPORTED_MODULE_5__["default"].reject(ids, {
                    notes: notes
                  }).then(function (response) {
                    _this9.mixin_successDialog("Success", response.data.message);

                    _this9.getDataFromApi().then(function (data) {
                      _this9.items = data.items;
                      _this9.totalItems = data.total;
                      _this9.formDataLoaded = true;
                    });

                    _this9.$store.dispatch("AUTH_NOTIFICATIONS");

                    _this9.selected = [];
                  })["catch"](function (error) {
                    _this9.mixin_showErrors(error);
                  });
                }

              case 4:
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
    search: function search() {
      var _this10 = this;

      if (this.search == "") {
        this.getDataFromApi().then(function (data) {
          _this10.getDataFromApi().then(function (data) {
            _this10.items = data.items;
            _this10.totalItems = data.total;
            _this10.formDataLoaded = true;
          });
        });
      }
    },
    params: {
      immediate: true,
      deep: true,
      handler: function handler() {
        var _this11 = this;

        this.getDataFromApi().then(function (data) {
          _this11.items = data.items;
          _this11.totalItems = data.total;
          _this11.formDataLoaded = true;
        });
      }
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
        // query: this.search,
        query: this.status
      }, _defineProperty(_objectSpread2, "query", this.user), _defineProperty(_objectSpread2, "query", this.date_range), _objectSpread2));
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
    },
    print_format: function print_format() {
      return {
        pageSize: {
          width: this.$store.getters.settings.expense_report.print_format.pageSize.width * 72,
          height: this.$store.getters.settings.expense_report.print_format.pageSize.height * 72
        },
        pageOrientation: this.$store.getters.settings.expense_report.print_format.pageOrientation,
        pageMargins: [this.$store.getters.settings.expense_report.print_format.pageMargins.left * 72, this.$store.getters.settings.expense_report.print_format.pageMargins.top * 72, this.$store.getters.settings.expense_report.print_format.pageMargins.right * 72, this.$store.getters.settings.expense_report.print_format.pageMargins.bottom * 72],
        defaultStyle: {
          font: this.$store.getters.settings.expense_report.print_format.defaultStyle.font
        }
      };
    },
    base64Image: function base64Image() {
      var base64Image = this.$store.getters.settings.expense_report.print_format.background.image;

      if (!base64Image) {
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
      }

      return base64Image;
    },
    isValidSubmit: function isValidSubmit() {
      var selectedCount = this.selected.length;

      if (selectedCount == 0) {
        return false;
      }

      if (this.selectedCount.submitted > 0 || this.selectedCount.approved > 0 || this.selectedCount.rejected > 0 || this.selectedCount.deleted > 0) {
        return false;
      }

      return true;
    },
    isValidApprove: function isValidApprove() {
      var selectedCount = this.selected.length;
      var unapprovedCount = this.selected.filter(function (item) {
        return item.approved_at == null;
      }).length;

      if (selectedCount == 0) {
        return false;
      }

      if (this.selectedCount.approved > 0 || this.selectedCount.rejected > 0 || this.selectedCount.deleted > 0) {
        return false;
      }

      if (!this.$store.getters.user.is_admin) {
        return false;
      }

      return true;
    },
    isValidReject: function isValidReject() {
      var selectedCount = this.selected.length;
      var unsubmittedCount = this.selected.filter(function (item) {
        return item.submitted_at == null;
      }).length;

      if (selectedCount == 0) {
        return false;
      }

      if (this.selectedCount.rejected > 0 || this.selectedCount.deleted > 0) {
        return false;
      }

      if (!this.$store.getters.user.is_admin) {
        return false;
      }

      return true;
    },
    isValidDelete: function isValidDelete() {
      var selectedCount = this.selected.length;
      var deletedCount = this.selected.filter(function (item) {
        return item.deleted_at == null;
      }).length;

      if (selectedCount == 0) {
        return false;
      }

      if (this.selectedCount.deleted > 0) {
        return false;
      }

      return true;
    },
    isValidDuplicate: function isValidDuplicate() {
      var selectedCount = this.selected.length;

      if (selectedCount !== 1) {
        return false;
      }

      return true;
    },
    isValidPrint: function isValidPrint() {
      var selectedItems = this.selected.filter(function (item) {
        return item.submitted_at == null || item.deleted_at != null;
      }).length;

      if (this.selected.length == 0) {
        return false;
      }

      if (selectedItems > 0) {
        return false;
      }

      return true;
    },
    selectedCount: function selectedCount() {
      var submitted = this.selected.filter(function (item) {
        return item.submitted_at != null && item.approved_at == null && item.rejected_at == null && item.deleted_at == null;
      }).length;
      var approved = this.selected.filter(function (item) {
        return item.submitted_at != null && item.approved_at != null && item.rejected_at == null && item.deleted_at == null;
      }).length;
      var rejected = this.selected.filter(function (item) {
        return item.rejected_at != null && item.deleted_at == null;
      }).length;
      var deleted = this.selected.filter(function (item) {
        return item.deleted_at != null;
      }).length;
      return {
        submitted: submitted,
        approved: approved,
        rejected: rejected,
        deleted: deleted
      };
    }
  },
  activated: function activated() {
    var _this12 = this;

    this.$store.dispatch("AUTH_USER");
    this.loadTotalCountReportStatus();
    this.loadExpenseTypes();
    this.getDataFromApi().then(function (data) {
      _this12.items = data.items;
      _this12.totalItems = data.total;
      _this12.formDataLoaded = true;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/expense_reports/Index.vue?vue&type=template&id=7f5f2a81&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/expense_reports/Index.vue?vue&type=template&id=7f5f2a81& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
                                                name:
                                                  "user.expense_reports.create"
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
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-subtitle",
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
                                  "\n                        " +
                                    _vm._s(dateRangeText) +
                                    "\n                    "
                                )
                              ]
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
                "v-row",
                { staticClass: "ml-4 mb-2" },
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
                            "\n                " +
                              _vm._s(_vm.selected.length) +
                              " Selected\n            "
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "v-menu",
                    {
                      attrs: {
                        transition: "scale-transition",
                        "close-on-content-click": false,
                        "nudge-width": 200,
                        "offset-y": "",
                        right: "",
                        bottom: ""
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "activator",
                          fn: function(ref) {
                            var menu = ref.on
                            var attrs = ref.attrs
                            return [
                              _vm.status != null
                                ? _c(
                                    "v-chip",
                                    _vm._g(
                                      _vm._b(
                                        {
                                          staticClass: "mr-2",
                                          attrs: { small: "" }
                                        },
                                        "v-chip",
                                        attrs,
                                        false
                                      ),
                                      menu
                                    ),
                                    [
                                      _vm._v(
                                        "\n                        " +
                                          _vm._s(_vm.status) +
                                          "\n                    "
                                      )
                                    ]
                                  )
                                : _vm._e()
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
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.$store.getters.user.is_admin &&
                  _vm.mixin_can("view all users expense reports")
                    ? _c("UserDialogSelector", {
                        ref: "userDialogSelector",
                        attrs: {
                          selectedUser: _vm.user,
                          usersParameters: { params: { is_superadmin: false } }
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
                                var computedSelectedUser =
                                  ref.computedSelectedUser
                                return [
                                  _c(
                                    "v-chip",
                                    _vm._g(
                                      _vm._b(
                                        {
                                          staticClass: "mr-2 mb-2",
                                          attrs: { small: "" }
                                        },
                                        "v-chip",
                                        bind,
                                        false
                                      ),
                                      on
                                    ),
                                    [
                                      _vm._v(
                                        "\n                        " +
                                          _vm._s(
                                            computedSelectedUser
                                              ? computedSelectedUser.name
                                              : "All Employees"
                                          ) +
                                          "\n                    "
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ],
                          null,
                          false,
                          2347878303
                        )
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "v-chip",
                    {
                      staticClass: "mr-2",
                      attrs: {
                        close: "",
                        small: "",
                        "close-icon": "mdi-refresh"
                      },
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
              _vm.selected.length > 0
                ? _c(
                    "v-row",
                    { staticClass: "ml-4" },
                    [
                      _vm.isValidSubmit
                        ? _c(
                            "v-chip",
                            {
                              staticClass: "mr-2",
                              attrs: {
                                close: "",
                                small: "",
                                "close-icon": "mdi-send",
                                color: "blue",
                                dark: ""
                              },
                              on: { "click:close": _vm.onSubmit }
                            },
                            [_vm._v("\n                Submit\n            ")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.isValidApprove
                        ? _c(
                            "v-chip",
                            {
                              staticClass: "mr-2",
                              attrs: {
                                close: "",
                                small: "",
                                "close-icon": "mdi-check",
                                color: "green",
                                dark: ""
                              },
                              on: { "click:close": _vm.onApprove }
                            },
                            [_vm._v("\n                Approve\n            ")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.isValidReject
                        ? _c(
                            "v-chip",
                            {
                              staticClass: "mr-2",
                              attrs: {
                                close: "",
                                small: "",
                                "close-icon": "mdi-cancel",
                                color: "red",
                                dark: ""
                              },
                              on: { "click:close": _vm.onReject }
                            },
                            [_vm._v("\n                Reject\n            ")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.isValidDelete
                        ? _c(
                            "v-chip",
                            {
                              staticClass: "mr-2",
                              attrs: {
                                close: "",
                                small: "",
                                "close-icon": "mdi-close",
                                color: "red",
                                dark: ""
                              },
                              on: { "click:close": _vm.onDelete }
                            },
                            [_vm._v("\n                Cancel\n            ")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.isValidDuplicate
                        ? _c(
                            "v-chip",
                            {
                              staticClass: "mr-2",
                              attrs: {
                                close: "",
                                small: "",
                                "close-icon": "mdi-content-copy"
                              },
                              on: { "click:close": _vm.onDuplicate }
                            },
                            [
                              _vm._v(
                                "\n                Duplicate\n            "
                              )
                            ]
                          )
                        : _vm._e()
                    ],
                    1
                  )
                : _vm._e(),
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
                    on: {
                      keydown: function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        return _vm.onSearch($event)
                      }
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
                                                  _vm.mixin_formatNumber(
                                                    item.paid
                                                  )
                                                ) +
                                                "\n                                    "
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        item.balance > 0
                                          ? _c("tr", [
                                              _c("td", [
                                                _c("strong", [
                                                  _vm._v("Balance")
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
                                                _c("strong", [
                                                  _vm._v("Remarks")
                                                ])
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
                                            _c("strong", [
                                              _vm._v("Late Submitted")
                                            ])
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [_vm._v(":")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(item.is_late_submitted)
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("td", [
                                            _c("strong", [
                                              _vm._v("Late Approved")
                                            ])
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [_vm._v(":")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(item.is_late_approved)
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
                                  _vm._v(
                                    "\n                            Total: "
                                  ),
                                  _c("strong", [
                                    _vm._v(_vm._s(_vm.totalAmount))
                                  ])
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
                                  _c("strong", [
                                    _vm._v(_vm._s(_vm.totalAmount))
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
                      _vm.isValidPrint
                        ? _c("v-col", { attrs: { cols: "12", md: "4" } }, [
                            _c(
                              "div",
                              { staticClass: "text-right" },
                              [
                                _c(
                                  "v-menu",
                                  {
                                    attrs: { "offset-y": "" },
                                    scopedSlots: _vm._u(
                                      [
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
                                                      attrs: {
                                                        color: "green",
                                                        dark: ""
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
                                                    "\n                                    Print\n                                "
                                                  )
                                                ]
                                              )
                                            ]
                                          }
                                        }
                                      ],
                                      null,
                                      false,
                                      3416937892
                                    )
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
                                                return _vm.printReport(
                                                  "",
                                                  "all_expenses",
                                                  false
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("v-list-item-title", [
                                              _vm._v(
                                                "\n                                        Group by expense\n                                    "
                                              )
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
                                                return _vm.printReport(
                                                  "",
                                                  "expenses_by_user",
                                                  false
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("v-list-item-title", [
                                              _vm._v(
                                                "\n                                        Group by user\n                                    "
                                              )
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
                                                return _vm.printReport(
                                                  "",
                                                  "expenses_by_date",
                                                  false
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("v-list-item-title", [
                                              _vm._v(
                                                "\n                                        Group by date\n                                    "
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
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-menu",
                                  {
                                    attrs: { "offset-y": "" },
                                    scopedSlots: _vm._u(
                                      [
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
                                                      attrs: {
                                                        color: "green",
                                                        dark: ""
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
                                                    "\n                                    Export to PDF\n                                "
                                                  )
                                                ]
                                              )
                                            ]
                                          }
                                        }
                                      ],
                                      null,
                                      false,
                                      406309944
                                    )
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
                                                return _vm.printReport(
                                                  "",
                                                  "all_expenses",
                                                  true
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("v-list-item-title", [
                                              _vm._v(
                                                "\n                                        Group by expense\n                                    "
                                              )
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
                                                return _vm.printReport(
                                                  "",
                                                  "expenses_by_user",
                                                  true
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("v-list-item-title", [
                                              _vm._v(
                                                "\n                                        Group by user\n                                    "
                                              )
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
                                                return _vm.printReport(
                                                  "",
                                                  "expenses_by_date",
                                                  true
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("v-list-item-title", [
                                              _vm._v(
                                                "\n                                        Group by date\n                                    "
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
                          ])
                        : _vm._e()
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

/***/ "./resources/js/services/ExpenseReportDataService.js":
/*!***********************************************************!*\
  !*** ./resources/js/services/ExpenseReportDataService.js ***!
  \***********************************************************/
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


var ExpenseReportDataService = /*#__PURE__*/function () {
  function ExpenseReportDataService() {
    _classCallCheck(this, ExpenseReportDataService);
  }

  _createClass(ExpenseReportDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/expense_reports", data);
    }
  }, {
    key: "get",
    value: function get(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/data/expense_reports", data);
    }
  }, {
    key: "show",
    value: function show(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/expense_reports/".concat(id), data);
    }
  }, {
    key: "store",
    value: function store(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/expense_reports", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/expense_reports/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/expense_reports/".concat(id), data);
    }
  }, {
    key: "restore",
    value: function restore(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/expense_reports/restore/".concat(id), data);
    }
  }, {
    key: "submit",
    value: function submit(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/expense_reports/submit/".concat(id), data);
    }
  }, {
    key: "approve",
    value: function approve(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/expense_reports/approve/".concat(id), data);
    }
  }, {
    key: "reject",
    value: function reject(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/expense_reports/reject/".concat(id), data);
    }
  }, {
    key: "duplicate",
    value: function duplicate(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/expense_reports/duplicate/".concat(id), data);
    }
  }]);

  return ExpenseReportDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new ExpenseReportDataService());

/***/ }),

/***/ "./resources/js/services/ExpenseTypeDataService.js":
/*!*********************************************************!*\
  !*** ./resources/js/services/ExpenseTypeDataService.js ***!
  \*********************************************************/
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


var ExpenseTypeDataService = /*#__PURE__*/function () {
  function ExpenseTypeDataService() {
    _classCallCheck(this, ExpenseTypeDataService);
  }

  _createClass(ExpenseTypeDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/expense_types", data);
    }
  }, {
    key: "get",
    value: function get(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/data/expense_types", data);
    }
  }, {
    key: "show",
    value: function show(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/expense_types/".concat(id), data);
    }
  }, {
    key: "store",
    value: function store(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/expense_types", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/expense_types/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/expense_types/".concat(id), data);
    }
  }, {
    key: "restore",
    value: function restore(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/expense_types/restore/".concat(id), data);
    }
  }]);

  return ExpenseTypeDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new ExpenseTypeDataService());

/***/ }),

/***/ "./resources/js/views/pages/expense_reports/Index.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/pages/expense_reports/Index.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_7f5f2a81___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=7f5f2a81& */ "./resources/js/views/pages/expense_reports/Index.vue?vue&type=template&id=7f5f2a81&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/expense_reports/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_7f5f2a81___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_7f5f2a81___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/expense_reports/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/expense_reports/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/pages/expense_reports/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/expense_reports/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/expense_reports/Index.vue?vue&type=template&id=7f5f2a81&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/pages/expense_reports/Index.vue?vue&type=template&id=7f5f2a81& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7f5f2a81___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=7f5f2a81& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/expense_reports/Index.vue?vue&type=template&id=7f5f2a81&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7f5f2a81___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7f5f2a81___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);