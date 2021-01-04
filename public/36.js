(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/Show.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expense_reports/Show.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__);
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




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      loader: true,
      headers: [{
        text: "Date",
        value: "date",
        sortable: false
      }, {
        text: "Type",
        value: "expense_type.name",
        sortable: false
      }, {
        text: "Receipt",
        value: "receipt_number",
        sortable: false
      }, {
        text: "Vendor",
        value: "vendor.name",
        sortable: false
      }, {
        text: "Amount",
        value: "amount",
        sortable: false
      }, {
        text: "Actions",
        value: "actions",
        sortable: false
      }, {
        text: "",
        value: "data-table-expand"
      }],
      total: 0,
      totalItems: 0,
      date_range: [],
      expense_report_id: this.$route.params.id,
      search: "",
      options: {
        sortBy: ["created_at"],
        sortDesc: [true],
        page: 1,
        itemsPerPage: 10
      },
      form: {
        code: "",
        reference_no: "",
        description: "",
        remarks: "",
        notes: "",
        submission_period: "",
        approval_period: "",
        from: "",
        to: "",
        status: {
          color: "",
          status: "",
          remarks: ""
        },
        is_late_submitted: false,
        is_late_approved: false,
        total: 0,
        total_reimbursable: 0,
        paid: 0,
        payments: [],
        payment_id: null,
        balance: 0,
        employee: {
          id: null,
          name: ""
        },
        payment: {
          id: null
        },
        expenses: [],
        // created: { created_at: null, created_by: { name: "" } },
        // updated: { updated_at: null, updated_by: { name: "" } },
        // deleted: { deleted_at: null, deleted_by: { name: "" } },
        // submitted: { submitted_at: null, submitted_by: { name: "" } },
        // reviewed: { reviewed_at: null, reviewed_by: { name: "" } },
        // approved: { approved_at: null, approved_by: { name: "" } },
        // rejected: { rejected_at: null, rejected_by: { name: "" } },
        // cancelled: { cancelled_at: null, cancelled_by: { name: "" } },
        created_at: null,
        updated_at: null,
        deleted_at: null,
        submitted_at: null,
        reviewed_at: null,
        approved_at: null,
        rejected_at: null,
        cancelled_at: null,
        logs: []
      }
    };
  },
  methods: {
    generatePDF: function generatePDF(action) {
      var _this2 = this;

      this.loadExpenses().then(function (data) {
        // var source = this.$refs["myTable"];
        var pdfName = "Expense Report";
        var table_columns = ["Date", "Type", "Receipt", "Vendor", "Amount"];
        var table_rows = [];
        var table_footer = [];
        data.items.forEach(function (element) {
          var temp = [];
          temp.push(element.date);
          temp.push(element.expense_type.name);
          temp.push(element.receipt_number);
          temp.push(element.vendor.name);
          temp.push(_this2.mixin_formatNumber(element.amount));
          table_rows.push(temp);
        }); // table_footer = [
        //     "Total",
        //     "",
        //     "",
        //     "",
        //     this.mixin_formatNumber(this.form.total)
        // ];
        // table_rows.push(table_footer);
        // basic config

        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__["jsPDF"]({
          orientation: "portrait",
          unit: "in",
          format: action == "print" ? "letter" : [13, 8.5]
        }); // header details
        // 1st row

        doc.setFontSize(11).setTextColor(0, 0, 0).text("".concat(_this2.form.employee.full_name), 0.5, 0.7);
        doc.setFontSize(11).setTextColor(0, 0, 0).text("".concat(_this2.form.code), 6.0, 0.7); // end of 1st row
        // 2nd row

        doc.setFontSize(20).setTextColor(76, 175, 10).text("PHP ".concat(_this2.mixin_formatNumber(_this2.form.total)), 0.5, 1.0);
        doc.setFontSize(11).setTextColor(76, 175, 10).text(_this2.form.status.status, 6.0, 1.0); // end of 2nd row
        // 3rd row

        doc.setFontSize(11).setTextColor(0, 0, 0).text("Period: ".concat(_this2.form.from, " ~ ").concat(_this2.form.to), 0.5, 1.2); // end of 3rd row
        // 4th row

        doc.setLineWidth(0.01);
        doc.line(0.5, 1.35, 8.0, 1.35); //end of 4th row
        // 5th row

        doc.setFontSize(11).setTextColor(0, 0, 0).text("Description: ".concat(_this2.form.description), 0.5, 1.6); // end of 5th row
        // 6th row

        doc.autoTable({
          columns: table_columns,
          body: table_rows,
          margin: {
            left: 0.5
          },
          startY: 1.8,
          showHead: "everyPage",
          headStyles: {
            halign: "center",
            fillColor: [76, 175, 10]
          },
          columnStyles: {
            4: {
              halign: "right"
            }
          } // didParseCell: function(data) {
          //     var rows = data.table.body;
          //     if (data.row.index === rows.length - 1) {
          //         data.cell.styles.fillColor = [76, 175, 10];
          //     }
          // },

        });
        doc.autoTable({
          body: [["No. of Expenses", data.items.length], ["Total Expenses Amount", _this2.mixin_formatNumber(_this2.form.total)], ["Paid Amount", _this2.mixin_formatNumber(_this2.form.paid)], ["Amount to be reimbursed", _this2.mixin_formatNumber(_this2.form.balance)]],
          margin: {
            left: 0.5
          },
          columnStyles: {
            1: {
              halign: "right"
            }
          },
          theme: "plain"
        }); // end of 6th row
        // page footer

        doc.setFontSize(8).setTextColor(0, 0, 0).text("Generated from Twin-Circa Marketing Expense Tracker ".concat(moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD HH:mm:ss")), 0.5, doc.internal.pageSize.height - 0.5); // end of page footer
        // page number

        var pages = doc.internal.getNumberOfPages();
        var pageWidth = doc.internal.pageSize.width; //Optional

        var pageHeight = doc.internal.pageSize.height; //Optional

        doc.setFontSize(8); //Optional

        for (var j = 1; j < pages + 1; j++) {
          var horizontalPos = pageWidth - 0.5; //Can be fixed number

          var verticalPos = pageHeight - 0.5; //Can be fixed number

          doc.setPage(j);
          doc.text("Page ".concat(j, " of ").concat(pages), horizontalPos, verticalPos, {
            align: "right"
          }); //Optional text styling});
        } // end of page number
        // print or export record


        if (action == "print") {
          doc.autoPrint();
          doc.output("dataurlnewwindow"); // doc.autoPrint({ variant: "non-conform" });
        } else {
          doc.save("".concat(pdfName, ".pdf"));
        } //end of print or export record

      });
    },
    generateReport: function generateReport(action) {
      this.loadExpenses().then(function (data) {
        // var source = this.$refs["myTable"];
        var pdfName = "Expense Summary Report";
        var table_columns = ["Date", "Particulars", "Delivery Expense", "Gas & Oil", "Meal & Lodging", "Postage, Telephone, & Fax", "Repairs & Maintenance", "Representation", "Supplies", "Transportation", "Miscellaneous", "Total"];
        var table_rows = [];
        var table_footer = []; // data.items.forEach(element => {
        //     let temp = [];
        //     temp.push(element.date);
        //     temp.push(element.expense_type.name);
        //     temp.push(element.receipt_number);
        //     temp.push(element.vendor.name);
        //     temp.push(this.mixin_formatNumber(element.amount));
        //     table_rows.push(temp);
        // });
        // table_footer = [
        //     "Total",
        //     "",
        //     "",
        //     "",
        //     this.mixin_formatNumber(this.form.total)
        // ];
        // table_rows.push(table_footer);
        // basic config

        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__["jsPDF"]({
          orientation: "landscape",
          unit: "in",
          format: [13, 8.5]
        }); // header details
        // 1st row

        doc.setFontSize(14).setTextColor(0, 0, 0).text("Expense Summary Report", 6.75, 0.7, "center"); // end of 1st row

        doc.autoTable({
          styles: {
            fontSize: 10
          },
          columns: table_columns,
          body: [["Total", "Polomolok to Davao", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
          showHead: "everyPage",
          headStyles: {
            halign: "center",
            fillColor: [76, 175, 10]
          },
          startY: 0.9,
          margin: {
            left: 0.5
          },
          columnStyles: {
            1: {
              halign: "right"
            }
          }
        }); // end of 6th row
        //

        doc.setFontSize(10).setTextColor(0, 0, 0).text("Submitted by", 0.5, doc.lastAutoTable.finalY + 0.4);
        doc.setLineWidth(0.01);
        doc.line(0.5, doc.lastAutoTable.finalY + 0.8, 3.0, doc.lastAutoTable.finalY + 0.8);
        doc.setFontSize(10).setTextColor(0, 0, 0).text("Recommended by", 3.5, doc.lastAutoTable.finalY + 0.4);
        doc.setLineWidth(0.01);
        doc.line(3.5, doc.lastAutoTable.finalY + 0.8, 6.0, doc.lastAutoTable.finalY + 0.8);
        doc.setFontSize(10).setTextColor(0, 0, 0).text("Checked by", 6.5, doc.lastAutoTable.finalY + 0.4);
        doc.setLineWidth(0.01);
        doc.line(6.5, doc.lastAutoTable.finalY + 0.8, 9.0, doc.lastAutoTable.finalY + 0.8);
        doc.setFontSize(10).setTextColor(0, 0, 0).text("Approved by", 9.5, doc.lastAutoTable.finalY + 0.4);
        doc.setLineWidth(0.01);
        doc.line(9.5, doc.lastAutoTable.finalY + 0.8, 12.0, doc.lastAutoTable.finalY + 0.8); //
        // page footer

        doc.setFontSize(8).setTextColor(0, 0, 0).text("Generated from Twin-Circa Marketing Expense Tracker ".concat(moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD HH:mm:ss")), 0.5, doc.internal.pageSize.height - 0.5); // end of page footer
        // page number

        var pages = doc.internal.getNumberOfPages();
        var pageWidth = doc.internal.pageSize.width; //Optional

        var pageHeight = doc.internal.pageSize.height; //Optional

        doc.setFontSize(8); //Optional

        for (var j = 1; j < pages + 1; j++) {
          var horizontalPos = pageWidth - 0.5; //Can be fixed number

          var verticalPos = pageHeight - 0.5; //Can be fixed number

          doc.setPage(j);
          doc.text("Page ".concat(j, " of ").concat(pages), horizontalPos, verticalPos, {
            align: "right"
          }); //Optional text styling});
        } // end of page number
        // print or export record


        if (action == "print") {
          // doc.autoPrint();
          doc.output("dataurlnewwindow"); // doc.autoPrint({ variant: "non-conform" });
        } else {
          doc.save("".concat(pdfName, ".pdf"));
        } //end of print or export record

      });
    },
    generateExpenseReport: function generateExpenseReport(action) {
      var _this3 = this;

      this.loadExpenses().then(function (data) {
        var table_columns = [];
        var table_footer = [];
        var table_rows = [];
        table_rows.push([{
          text: "Date",
          style: "tableOfExpensesHeader"
        }, {
          text: "Type",
          style: "tableOfExpensesHeader"
        }, {
          text: "Receipt",
          style: "tableOfExpensesHeader"
        }, {
          text: "Vendor",
          style: "tableOfExpensesHeader"
        }, {
          text: "Amount",
          style: "tableOfExpensesHeader"
        }]);
        data.items.forEach(function (element) {
          var temp = [];
          temp.push({
            text: element.date,
            style: "tableOfExpensesBody"
          });
          temp.push({
            text: element.expense_type.name,
            style: "tableOfExpensesBody"
          });
          temp.push({
            text: element.receipt_number,
            style: "tableOfExpensesBody"
          });
          temp.push({
            text: element.vendor == null ? "" : element.vendor.name,
            style: "tableOfExpensesBody"
          });
          temp.push({
            text: _this3.mixin_formatNumber(element.amount),
            style: {
              fontSize: 9,
              alignment: "right"
            }
          });
          table_rows.push(temp);
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
          pageSize: {
            width: 8.5 * 72,
            height: 13 * 72
          },
          pageOrientation: "portrait",
          pageMargins: [0.5 * 72, 0.5 * 72, 0.5 * 72, 0.5 * 72],
          defaultStyle: {
            font: "Roboto"
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
            columns: [{
              text: _this3.form.employee.full_name,
              style: "pageStyle"
            }, {
              text: _this3.form.code,
              alignment: "right",
              style: "pageStyle"
            }]
          }, {
            columns: [{
              text: "PHP ".concat(_this3.mixin_formatNumber(_this3.form.total)),
              style: {
                fontSize: 18,
                color: "#4caf50"
              }
            }, {
              text: _this3.form.status.status,
              alignment: "right",
              style: {
                fontSize: 11,
                color: "#4caf50"
              }
            }]
          }, {
            text: "Period: ".concat(_this3.form.from, " ~ ").concat(_this3.form.to),
            style: "pageStyle"
          }, {
            canvas: [{
              type: "line",
              x1: 0,
              y1: 0,
              x2: 7.5 * 72,
              y2: 0,
              lineWidth: 0.5
            }],
            margin: [0, 0.1 * 72, 0, 0.1 * 72]
          }, {
            text: _this3.form.description,
            style: "pageStyle"
          }, {
            canvas: [{
              type: "line",
              x1: 0,
              y1: 0,
              x2: 7.5 * 72,
              y2: 0,
              lineWidth: 0.5
            }],
            margin: [0, 0.1 * 72, 0, 0.1 * 72]
          }, {
            style: "tableOfExpenses",
            table: {
              headerRows: 1,
              widths: ["*", "*", "*", "*", "*"],
              body: table_rows
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
            columns: [{
              text: "No. of Expenses",
              style: "pageStyle"
            }, {
              text: data.items.length,
              alignment: "right",
              style: "pageStyle"
            }],
            margin: [0, 0, 0, 0.1 * 72]
          }, {
            columns: [{
              text: "Total Expenses Amount",
              style: "pageStyle"
            }, {
              text: _this3.mixin_formatNumber(_this3.form.total),
              alignment: "right",
              style: "pageStyle"
            }],
            margin: [0, 0, 0, 0.1 * 72]
          }, {
            columns: [{
              text: "Paid Amount",
              style: "pageStyle"
            }, {
              text: _this3.mixin_formatNumber(_this3.form.paid),
              alignment: "right",
              style: "pageStyle"
            }],
            margin: [0, 0, 0, 0.1 * 72]
          }, {
            columns: [{
              text: "Amount to be reimbursed",
              style: "pageStyle"
            }, {
              text: _this3.mixin_formatNumber(_this3.form.balance),
              alignment: "right",
              style: "pageStyle"
            }],
            margin: [0, 0, 0, 0.1 * 72]
          }],
          styles: {
            pageStyle: {
              fontSize: 11
            },
            header: {
              fontSize: 13,
              bold: false,
              alignment: "center"
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
    loadExpenses: function loadExpenses() {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        axios.get("/api/data/expenses?expense_report_id=".concat(_this4.$route.params.id, "&only=true")).then(function (response) {
          var items = response.data.data;
          resolve({
            items: items
          });
        })["catch"](function (error) {
          reject();
          console.log(error);
          console.log(error.response);

          _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
        });
      });
    },
    getData: function getData() {
      var _this = this;

      axios.get("/api/expense_reports/".concat(_this.$route.params.id)).then(function (response) {
        var data = response.data.data;
        _this.form.code = data.code;
        _this.form.reference_no = data.reference_no;
        _this.form.description = data.description;
        _this.form.remarks = data.remarks;
        _this.form.notes = data.notes;
        _this.form.submission_period = data.submission_period;
        _this.form.approval_period = data.approval_period;
        _this.form.from = data.from;
        _this.form.to = data.to;
        _this.form.status = data.status;
        _this.form.is_late_submitted = data.is_late_submitted;
        _this.form.is_late_approved = data.is_late_approved;
        _this.form.total = data.total;
        _this.form.total_reimbursable = data.total_reimbursable;
        _this.form.paid = data.paid;
        _this.form.payments = data.payments;
        _this.form.payment_id = data.payment_id;
        _this.form.balance = data.balance;
        _this.form.employee = data.employee;
        _this.form.payment = data.payment; // _this.form.expenses = data.expenses;
        // _this.form.created = data.created;
        // _this.form.updated = data.updated;
        // _this.form.deleted = data.deleted;
        // _this.form.submitted = data.submitted;
        // _this.form.approved = data.approved;
        // _this.form.rejected = data.rejected;
        // _this.form.cancelled = data.cancelled;

        _this.form.created_at = data.created_at;
        _this.form.updated_at = data.updated_at;
        _this.form.deleted_at = data.deleted_at;
        _this.form.submitted_at = data.submitted_at;
        _this.form.approved_at = data.approved_at;
        _this.form.rejected_at = data.rejected_at;
        _this.form.cancelled_at = data.cancelled_at;
        _this.form.logs = data.logs; // _this.loadExpenses();

        _this.getDataFromApi().then(function (data) {
          _this.form.expenses = data.items;
          _this.totalItems = data.total;
        });

        _this.loader = false;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

        _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);

        _this.loader = false;
      });
    },
    getDataFromApi: function getDataFromApi() {
      var _this5 = this;

      var _this = this;

      _this.loading = true;
      return new Promise(function (resolve, reject) {
        var _this5$options = _this5.options,
            sortBy = _this5$options.sortBy,
            sortDesc = _this5$options.sortDesc,
            page = _this5$options.page,
            itemsPerPage = _this5$options.itemsPerPage;
        var range = [_this.form.from, _this.form.to];
        var expense_report_id = _this.$route.params.id;
        axios.get("/api/expenses", {
          params: {
            page: page,
            itemsPerPage: itemsPerPage,
            start_date: range[0],
            end_date: range[1],
            expense_report_id: expense_report_id
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
    }
  },
  watch: {
    params: {
      handler: function handler() {
        var _this6 = this;

        this.getDataFromApi().then(function (data) {
          _this6.form.expenses = data.items;
          _this6.totalItems = data.total;
        });
      },
      deep: true
    }
  },
  computed: {
    params: function params(nv) {
      return _objectSpread(_objectSpread({}, this.options), {}, _defineProperty({
        query: this.date_range
      }, "query", this.expense_report_id));
    },
    canEdit: function canEdit() {
      if (this.form.approved_at !== null || this.form.cancelled_at !== null || this.form.deleted_at !== null || this.form.rejected_at !== null) {
        return false;
      }

      return true;
    }
  },
  created: function created() {
    // this.$store.dispatch("AUTH_USER");
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/Show.vue?vue&type=template&id=1aa1b90a&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expense_reports/Show.vue?vue&type=template&id=1aa1b90a& ***!
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
                  _c("h4", { staticClass: "title green--text" }, [
                    _vm._v("Expense Report Details")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-form",
                { ref: "form" },
                [
                  _c(
                    "v-container",
                    [
                      _c(
                        "v-row",
                        [
                          _c("v-col", { attrs: { cols: "12", md: "8" } }, [
                            _c(
                              "div",
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(_vm.form.employee.full_name) +
                                    "\n                            "
                                ),
                                _vm.canEdit
                                  ? _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          text: "",
                                          color: "green",
                                          to:
                                            "/admin/expense_reports/" +
                                            _vm.$route.params.id +
                                            "/edit"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                Edit\n                            "
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "display-1 green--text" },
                              [
                                _vm._v(
                                  "\n                            PHP " +
                                    _vm._s(
                                      _vm.mixin_formatNumber(_vm.form.total)
                                    ) +
                                    "\n                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", [
                              _vm._v(
                                "\n                            Period:\n                            " +
                                  _vm._s(
                                    _vm.form.from == _vm.form.to
                                      ? _vm.form.from
                                      : _vm.form.from + " ~ " + _vm.form.to
                                  ) +
                                  "\n                        "
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("v-col", { attrs: { cols: "12", md: "4" } }, [
                            _c("div", { staticClass: "headline green--text" }, [
                              _vm._v(
                                "\n                            #" +
                                  _vm._s(_vm.form.code) +
                                  "\n                        "
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              [
                                _vm._v(
                                  "\n                            Status:\n                            "
                                ),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: {
                                      color: _vm.form.status.color,
                                      "x-small": "",
                                      dark: ""
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(_vm.form.status.status) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              [
                                _vm.form.is_late_submitted
                                  ? _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          color: "red",
                                          "x-small": "",
                                          dark: ""
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                Late Submitted\n                            "
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.form.is_late_approved
                                  ? _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          color: "red",
                                          "x-small": "",
                                          dark: ""
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                Late Approved\n                            "
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ],
                              1
                            )
                          ])
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
                            _vm._v(
                              "Description: " +
                                _vm._s(_vm.form.description) +
                                " "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-data-table", {
                                staticClass: "elevation-0",
                                attrs: {
                                  headers: _vm.headers,
                                  items: _vm.form.expenses,
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
                                            {
                                              attrs: { colspan: headers.length }
                                            },
                                            [
                                              _c("v-container", [
                                                _c("table", [
                                                  _c("tr", [
                                                    _c("td", [
                                                      _c("strong", [
                                                        _vm._v("Code")
                                                      ])
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", [_vm._v(":")]),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(_vm._s(item.code))
                                                    ])
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("tr", [
                                                    _c("td", [
                                                      _c("strong", [
                                                        _vm._v("Description")
                                                      ])
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", [_vm._v(":")]),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(
                                                        "\n                                                    " +
                                                          _vm._s(
                                                            item.description
                                                          ) +
                                                          "\n                                                "
                                                      )
                                                    ])
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("tr", [
                                                    _c("td", [
                                                      _c("strong", [
                                                        _vm._v("Receipt")
                                                      ])
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", [_vm._v(":")]),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(
                                                        "\n                                                    " +
                                                          _vm._s(
                                                            item.receipt_number
                                                          ) +
                                                          "\n                                                "
                                                      )
                                                    ])
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("tr", [
                                                    _c("td", [
                                                      _c("strong", [
                                                        _vm._v("Vendor")
                                                      ])
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("td", [_vm._v(":")]),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(
                                                        "\n                                                    " +
                                                          _vm._s(
                                                            item.vendor == null
                                                              ? ""
                                                              : item.vendor.name
                                                          ) +
                                                          "\n                                                "
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
                                                          _vm._v(
                                                            _vm._s(item.remarks)
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
                                      key: "item.updated_at",
                                      fn: function(ref) {
                                        var item = ref.item
                                        return [
                                          _vm._v(
                                            "\n                                " +
                                              _vm._s(
                                                _vm.mixin_getHumanDate(
                                                  item.updated_at
                                                )
                                              ) +
                                              "\n                            "
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
                                            "\n                                " +
                                              _vm._s(
                                                _vm.mixin_formatNumber(
                                                  item.amount
                                                )
                                              ) +
                                              "\n                            "
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
                                            "\n                                " +
                                              _vm._s(
                                                _vm.mixin_formatNumber(
                                                  item.amount -
                                                    item.reimbursable_amount
                                                )
                                              ) +
                                              "\n                            "
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
                                                  return _vm.$router.push(
                                                    "/admin/expenses/" + item.id
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                    mdi-eye\n                                "
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
                          _c("v-col", { attrs: { cols: "12", md: "8" } }, [
                            _c("div", [
                              _vm._v("Remarks : " + _vm._s(_vm.form.remarks))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("v-col", { attrs: { cols: "12", md: "4" } }, [
                            _c("table", { attrs: { width: "100%" } }, [
                              _c("tbody", [
                                _c("tr", [
                                  _c("td", [
                                    _vm._v(
                                      "\n                                        Total Expense Amount\n                                    "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(":")]),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "green--text text--darken-4 text-right"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(
                                            _vm.mixin_formatNumber(
                                              _vm.form.total
                                            )
                                          ) +
                                          "\n                                    "
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", [
                                    _vm._v(
                                      "\n                                        Paid Amount\n                                    "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(":")]),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "green--text text--darken-4 text-right"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                        (-)\n                                        " +
                                          _vm._s(
                                            _vm.mixin_formatNumber(
                                              _vm.form.paid
                                            )
                                          ) +
                                          "\n                                    "
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c(
                                    "td",
                                    { attrs: { colspan: "3" } },
                                    [_c("v-divider")],
                                    1
                                  )
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("th", { staticClass: "text-left" }, [
                                    _vm._v(
                                      "\n                                        Amount to be reimbursed\n                                    "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(":")]),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "green--text text--darken-4 text-right"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(
                                            _vm.mixin_formatNumber(
                                              _vm.form.balance
                                            )
                                          ) +
                                          "\n                                    "
                                      )
                                    ]
                                  )
                                ])
                              ])
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider", { staticClass: "mb-4" }),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c("v-col", { attrs: { cols: "12", md: "8" } }, [
                            _vm._v(
                              "\n                        Notes : " +
                                _vm._s(_vm.form.notes) +
                                "\n                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("v-col", { attrs: { cols: "12", md: "4" } }, [
                            _c(
                              "div",
                              { staticClass: "text-right" },
                              [
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { color: "green", dark: "" },
                                    on: {
                                      click: function($event) {
                                        return _vm.generateExpenseReport(
                                          "print"
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                Print\n                            "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { color: "green", dark: "" },
                                    on: {
                                      click: function($event) {
                                        return _vm.generateExpenseReport("pdf")
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                Export to PDF\n                            "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider", { staticClass: "mb-4" }),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        { staticClass: "text--secondary text-caption" },
                        [
                          _c("v-col", { attrs: { cols: "12", md: "12" } }, [
                            _c("div", [_vm._v("History :")]),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "table",
                                {
                                  staticClass: "table",
                                  attrs: { width: "100%" }
                                },
                                [
                                  _c(
                                    "tbody",
                                    _vm._l(_vm.form.logs, function(item) {
                                      return _c("tr", { key: item.id }, [
                                        _c("td", [
                                          _vm._v(
                                            "\n                                            " +
                                              _vm._s(
                                                _vm.mixin_formatDate(
                                                  item.created_at,
                                                  "YYYY-MM-DD HH:mm:ss"
                                                )
                                              ) +
                                              "\n                                        "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [_vm._v("-")]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            "\n                                            " +
                                              _vm._s(
                                                item.causer == null
                                                  ? "System"
                                                  : item.causer.name
                                              ) +
                                              "\n                                        "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [_vm._v("-")]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(item.description))
                                        ])
                                      ])
                                    }),
                                    0
                                  )
                                ]
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

/***/ "./resources/js/views/modules/admin/expense_reports/Show.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/Show.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_1aa1b90a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=1aa1b90a& */ "./resources/js/views/modules/admin/expense_reports/Show.vue?vue&type=template&id=1aa1b90a&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/expense_reports/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_1aa1b90a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_1aa1b90a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/expense_reports/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/expense_reports/Show.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/Show.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/expense_reports/Show.vue?vue&type=template&id=1aa1b90a&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/Show.vue?vue&type=template&id=1aa1b90a& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_1aa1b90a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=1aa1b90a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/Show.vue?vue&type=template&id=1aa1b90a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_1aa1b90a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_1aa1b90a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);