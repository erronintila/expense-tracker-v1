(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[62],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/expense_reports/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_daterangepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/daterangepicker/DateRangePicker */ "./resources/js/components/daterangepicker/DateRangePicker.vue");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DateRangePicker: _components_daterangepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_2__["default"]
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
      user: this.$store.getters.user.id,
      date_range: [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("month").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("month").format("YYYY-MM-DD")],
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
      reports_by_date: []
    };
  },
  methods: {
    showAllUnsubmitted: function showAllUnsubmitted() {
      this.status = "Unsubmitted Expense Reports";
      this.updateDates([moment__WEBPACK_IMPORTED_MODULE_0___default()("0000-01-01").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD")]);
    },
    showAllUnapproved: function showAllUnapproved() {
      this.status = "Submitted Expense Reports";
      this.updateDates([moment__WEBPACK_IMPORTED_MODULE_0___default()("0000-01-01").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD")]);
    },
    loadTotalCountReportStatus: function loadTotalCountReportStatus() {
      var _this = this;

      axios.get("/api/data/expense_reports?total_count=true&user_id=".concat(this.$store.getters.user.id)).then(function (response) {
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
    loadReportData: function loadReportData(report_type) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        var ids = _this2.selected == null ? [] : _this2.selected.map(function (item) {
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
          reject();
          console.log(error);
          console.log(error.response);
        });
      });
    },
    printReport: function printReport(action, report_type, export_as_pdf) {
      var _this3 = this;

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
        var minDate = new Date(Math.min.apply(null, item_dates)); // ADD PRIMARY TABLE COLUMNS BASED ON REPORT TYPE

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
            subheader = "Report No. : " + _this3.selected.map(function (item) {
              return item.code;
            });
            break;

          case "expenses_by_user":
            table_columns.push({
              text: "Employee",
              style: "tableOfExpensesHeader"
            });
            temp_table_body = {};
            subheader = "Period: ".concat(moment__WEBPACK_IMPORTED_MODULE_0___default()(minDate).format("YYYY-MM-DD"), " ~ ").concat(moment__WEBPACK_IMPORTED_MODULE_0___default()(maxDate).format("YYYY-MM-DD"));
            break;

          case "expenses_by_date":
            table_columns.push({
              text: "Date",
              style: "tableOfExpensesHeader"
            });
            temp_table_body = {};
            subheader = "Period: ".concat(moment__WEBPACK_IMPORTED_MODULE_0___default()(minDate).format("YYYY-MM-DD"), " ~ ").concat(moment__WEBPACK_IMPORTED_MODULE_0___default()(maxDate).format("YYYY-MM-DD"));
            break;

          default:
            break;
        } // ADD ALL EXPENSE TYPES AS PART OF TABLE COLUMNS


        _this3.expense_types.forEach(function (element) {
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

            _this3.expense_types.forEach(function (expense_type) {
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

            _this3.expense_types.forEach(function (item) {
              total += temp_table_body[item.name];
            });

            temp_table_body["Total"] = total;
          }
        }); // sum total amount per expense type

        _this3.expense_types.forEach(function (expense_type) {
          temp_expense_types[expense_type.name] = _this3.mixin_formatNumber(table_rows.reduce(function (total, item) {
            return total + item[expense_type.name];
          }, 0));
        });

        if (report_type == "all_expenses") {
          // add row for total amounts
          table_rows.push(_objectSpread(_objectSpread({
            Total: "Total",
            Particulars: ""
          }, temp_expense_types), {}, {
            TotalAmount: _this3.mixin_formatNumber(table_rows.reduce(function (total, item) {
              return total + item["Total"];
            }, 0))
          }));
        } else {
          // add row for total amounts
          table_rows.push(_objectSpread(_objectSpread({
            Total: "Total"
          }, temp_expense_types), {}, {
            TotalAmount: _this3.mixin_formatNumber(table_rows.reduce(function (total, item) {
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

        var formattedSignatureLabels = signatureLabels.map(function (item) {
          return {
            text: item,
            style: "tableSignaturesBody"
          };
        });
        var signatureUnderlines = signatureLabels.map(function (item) {
          return {
            text: "___________________________________",
            style: "tableSignaturesBody"
          };
        });
        var signatures = [_toConsumableArray(formattedSignatureLabels), _toConsumableArray(signatureUnderlines)]; // SET PRINT FORMAT

        var docDefinition = _this3.printFormat(subheader, table_columns, body, signatures); // PRINT OR EXPORT REPORT


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
        background: {
          alignment: this.print_format.background.alignment,
          margin: this.print_format.background.margin,
          height: this.print_format.background.height,
          width: this.print_format.background.width,
          image: this.print_format.background.image
        },
        footer: function footer(currentPage, pageCount) {
          return {
            columns: [{
              text: "Generated from Twin-Circa Marketing Expense Tracker ".concat(moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD HH:mm:ss")),
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
          text: subheader,
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
            body: signatures
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
    },
    updateDates: function updateDates(e) {
      this.date_range = e;
    },
    getDataFromApi: function getDataFromApi() {
      var _this4 = this;

      var _this = this;

      _this.loading = true;
      return new Promise(function (resolve, reject) {
        var _this4$options = _this4.options,
            sortBy = _this4$options.sortBy,
            sortDesc = _this4$options.sortDesc,
            page = _this4$options.page,
            itemsPerPage = _this4$options.itemsPerPage;

        var search = _this.search.trim().toLowerCase();

        var status = _this.status;
        var user_id = _this.user;
        var range = _this.date_range;
        axios.get("/api/expense_reports", {
          params: {
            sortBy: sortBy[0],
            sortType: sortDesc[0] ? "desc" : "asc",
            page: page,
            itemsPerPage: itemsPerPage,
            user_id: user_id,
            status: status,
            start_date: range[0],
            end_date: range[1] ? range[1] : range[0],
            admin_page: false
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
      this.loadTotalCountReportStatus();
      this.loadExpenseTypes();
      this.selected = [];
      this.$store.dispatch("AUTH_USER");
      this.$store.dispatch("AUTH_NOTIFICATIONS");
    },
    onShow: function onShow(item) {
      this.$router.push({
        name: "user.expense_reports.show",
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
        name: "user.expense_reports.edit",
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
      var submission_date = moment__WEBPACK_IMPORTED_MODULE_0___default.a.min(this.selected.filter(function (item) {
        return item.status.status === "Unsubmitted";
      }).map(function (item2) {
        return moment__WEBPACK_IMPORTED_MODULE_0___default()(item2.from);
      })).format("YYYY-MM-DD");

      switch (period) {
        case "Weekly":
          last_submission_date = moment__WEBPACK_IMPORTED_MODULE_0___default()(submission_date).endOf("week").format("YYYY-MM-DD");
          break;

        case "Monthly":
          last_submission_date = moment__WEBPACK_IMPORTED_MODULE_0___default()(submission_date).endOf("month").format("YYYY-MM-DD");
          break;

        default:
          last_submission_date = moment__WEBPACK_IMPORTED_MODULE_0___default()(submission_date).format("YYYY-MM-DD");
          break;
      }

      if (!this.mixin_can("submit expense reports beyond due date")) {
        if (!moment__WEBPACK_IMPORTED_MODULE_0___default()(moment__WEBPACK_IMPORTED_MODULE_0___default()()).isSameOrBefore(last_submission_date, "day")) {
          this.mixin_errorDialog("Error (Not Allowed)", "Last submission was ".concat(last_submission_date));
          return;
        }
      }

      this.onUpdate("submit", "put");
    },
    onReview: function onReview() {
      this.onUpdate("review", "put");
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
        var _this5 = this;

        this.getDataFromApi().then(function (data) {
          _this5.items = data.items;
          _this5.totalItems = data.total;
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
        var submission_date = moment__WEBPACK_IMPORTED_MODULE_0___default.a.min(this.selected.map(function (item) {
          return moment__WEBPACK_IMPORTED_MODULE_0___default()(item.from);
        })).format("YYYY-MM-DD");

        switch (period) {
          case "Weekly":
            last_submission_date = moment__WEBPACK_IMPORTED_MODULE_0___default()(submission_date).endOf("week").format("YYYY-MM-DD");
            break;

          case "Monthly":
            last_submission_date = moment__WEBPACK_IMPORTED_MODULE_0___default()(submission_date).endOf("month").format("YYYY-MM-DD");
            break;

          default:
            last_submission_date = moment__WEBPACK_IMPORTED_MODULE_0___default()(submission_date).format("YYYY-MM-DD");
            break;
        }

        this.warning = "Last Submission Date: ".concat(last_submission_date);
      } else if (this.selected.map(function (item) {
        return item.status.status;
      }).includes("Submitted")) {
        var _period = this.$store.getters.settings.approval_period;
        var submission_period = moment__WEBPACK_IMPORTED_MODULE_0___default.a.min(this.selected.map(function (item) {
          return moment__WEBPACK_IMPORTED_MODULE_0___default()(item.submitted_at);
        })).format("YYYY-MM-DD");
        var last_approval_date = moment__WEBPACK_IMPORTED_MODULE_0___default()(submission_period).add(_period, "days").format("YYYY-MM-DD");
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
            return moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("week").format("YYYY-MM-DD");
            break;

          case "Monthly":
            return moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("month").format("YYYY-MM-DD");
            break;

          default:
            return moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("day").format("YYYY-MM-DD");
            break;
        }
      }

      return moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("day").format("YYYY-MM-DD");
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

        return maxDate; // return moment(today).isSameOrBefore(maxDate) ? today : maxDate;
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
        },
        background: {
          alignment: this.$store.getters.settings.expense_report.print_format.background.alignment,
          margin: [this.$store.getters.settings.expense_report.print_format.background.margin.left * 72, this.$store.getters.settings.expense_report.print_format.background.margin.top * 72, this.$store.getters.settings.expense_report.print_format.background.margin.right * 72, this.$store.getters.settings.expense_report.print_format.background.margin.bottom * 72],
          // absolutePosition: {x: -300, y: 40},
          width: this.$store.getters.settings.expense_report.print_format.background.width * 72,
          height: this.$store.getters.settings.expense_report.print_format.background.height * 72,
          image: this.base64Image
        }
      };
    },
    base64Image: function base64Image() {
      var base64Image = this.$store.getters.settings.expense_report.print_format.background.image;

      if (!base64Image) {
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
      }

      return base64Image;
    }
  },
  created: function created() {
    this.$store.dispatch("AUTH_USER");
    this.$store.dispatch("AUTH_NOTIFICATIONS");
    this.loadTotalCountReportStatus(); // this.loadUsers();
    // this.loadUsers();

    this.loadExpenseTypes();
  },
  activated: function activated() {
    var _this6 = this;

    this.$store.dispatch("AUTH_USER");
    this.$store.dispatch("AUTH_NOTIFICATIONS");
    this.loadTotalCountReportStatus();
    this.loadExpenseTypes();
    this.getDataFromApi().then(function (data) {
      _this6.items = data.items;
      _this6.totalItems = data.total;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/Index.vue?vue&type=template&id=12e05ebe&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/expense_reports/Index.vue?vue&type=template&id=12e05ebe& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
                                            name: "user.expense_reports.create"
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
                                                  "\n                                    mdi-view-grid-plus-outline\n                                "
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

/***/ "./resources/js/views/modules/user/expense_reports/Index.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/views/modules/user/expense_reports/Index.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_12e05ebe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=12e05ebe& */ "./resources/js/views/modules/user/expense_reports/Index.vue?vue&type=template&id=12e05ebe&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/user/expense_reports/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_12e05ebe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_12e05ebe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/user/expense_reports/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/user/expense_reports/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/modules/user/expense_reports/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/user/expense_reports/Index.vue?vue&type=template&id=12e05ebe&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/modules/user/expense_reports/Index.vue?vue&type=template&id=12e05ebe& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_12e05ebe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=12e05ebe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/Index.vue?vue&type=template&id=12e05ebe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_12e05ebe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_12e05ebe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);