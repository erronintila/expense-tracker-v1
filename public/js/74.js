(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Playground.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Playground.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
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




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      fab: false,
      links: ["Dashboard", "Expenses", "Reports"],
      itemize: false,
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
      desserts: [{
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: "1%"
      }, {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: "1%"
      }, {
        name: "Eclair",
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: "7%"
      }, {
        name: "Cupcake",
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: "8%"
      }],
      expense_types: [],
      reports_by_employee: [],
      reports_by_expense: [],
      reports_by_date: []
    };
  },
  methods: {
    printReportByEmployee: function printReportByEmployee(action) {
      var _this2 = this;

      var table_columns = [];
      var table_rows = [];
      var table_footer = [];
      table_columns.push({
        text: "Employee",
        style: "tableOfExpensesHeader"
      });
      this.expense_types.forEach(function (element) {
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
      var employee_id = null;
      var expense_type = null; // loop through retrieved records

      this.reports_by_employee.forEach(function (element) {
        // create new object if current employee does not match with previous record
        if (employee_id !== element.employee_id) {
          temp_table_body = {};
          employee_id = element.employee_id; // set default values for current row

          _this2.expense_types.forEach(function (expense_type) {
            temp_expense_types[expense_type.name] = 0;
          });

          temp_table_body = _objectSpread(_objectSpread({
            Employee: "".concat(element.last_name, ", ").concat(element.first_name, " ").concat(element.middle_name == null ? '' : element.middle_name, " ").concat(element.suffix == null ? '' : element.suffix)
          }, temp_expense_types), {}, {
            Total: 0
          });
          table_rows.push(temp_table_body);
        } // set expense type amount


        temp_table_body[element.expense_type_name] = element.expense_amount; // sum of all expense types

        if ("Total" in temp_table_body) {
          var total = 0;

          _this2.expense_types.forEach(function (item) {
            total += temp_table_body[item.name];
          });

          temp_table_body["Total"] = total;
        }
      }); // sum total amount per expense type

      this.expense_types.forEach(function (expense_type) {
        temp_expense_types[expense_type.name] = _this2.mixin_formatNumber(table_rows.reduce(function (total, item) {
          return total + item[expense_type.name];
        }, 0));
      }); // add row for total amounts

      table_rows.push(_objectSpread(_objectSpread({
        Total: "Total"
      }, temp_expense_types), {}, {
        TotalAmount: this.mixin_formatNumber(table_rows.reduce(function (total, item) {
          return total + item["Total"];
        }, 0))
      })); // console.log(table_rows.map(item => Object.values(item)));

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
      }); // console.log("items", itemss);
      // return;

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
      }; // console.log(table_columns);
      // console.log(table_columns.map(item => "*"));
      // return;

      var docDefinition = {
        // pageSize: 'legal',
        pageSize: {
          width: 13 * 72,
          height: 8.5 * 72
        },
        pageOrientation: "landscape",
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
          text: ["Expense Summary Report"],
          style: "header"
        }, {
          style: "tableOfExpenses",
          table: {
            headerRows: 1,
            widths: table_columns.map(function (item) {
              return "*";
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
              text: "Prepared By",
              style: "tableSignaturesBody"
            }, {
              text: "Checked By",
              style: "tableSignaturesBody"
            }, {
              text: "Approved By",
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
      }; // pdfMake.createPdf(docDefinition).download('optionalName.pdf');
      // pdfMake.createPdf(docDefinition).print();

      pdfMake.createPdf(docDefinition).open();
    },
    printReportByDate: function printReportByDate() {
      var _this3 = this;

      var table_columns = [];
      var table_rows = [];
      var table_footer = [];
      table_columns.push({
        text: "Date",
        style: "tableOfExpensesHeader"
      });
      this.expense_types.forEach(function (element) {
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

      this.reports_by_date.forEach(function (element) {
        // create new object if current employee does not match with previous record
        if (expense_date !== element.expense_date) {
          temp_table_body = {};
          expense_date = element.expense_date; // set default values for current row

          _this3.expense_types.forEach(function (expense_type) {
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

          _this3.expense_types.forEach(function (item) {
            total += temp_table_body[item.name];
          });

          temp_table_body["Total"] = total;
        }
      }); // sum total amount per expense type

      this.expense_types.forEach(function (expense_type) {
        temp_expense_types[expense_type.name] = _this3.mixin_formatNumber(table_rows.reduce(function (total, item) {
          return total + item[expense_type.name];
        }, 0));
      }); // add row for total amounts

      table_rows.push(_objectSpread(_objectSpread({
        Total: "Total"
      }, temp_expense_types), {}, {
        TotalAmount: this.mixin_formatNumber(table_rows.reduce(function (total, item) {
          return total + item["Total"];
        }, 0))
      })); // console.log(table_rows.map(item => Object.values(item)));

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
      }); // console.log("items", itemss);
      // return;

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
      }; // console.log(table_columns);
      // console.log(table_columns.map(item => "*"));
      // return;

      var docDefinition = {
        // pageSize: 'legal',
        pageSize: {
          width: 13 * 72,
          height: 8.5 * 72
        },
        pageOrientation: "landscape",
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
          text: ["Expense Summary Report"],
          style: "header"
        }, {
          style: "tableOfExpenses",
          table: {
            headerRows: 1,
            widths: table_columns.map(function (item) {
              return "*";
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
              text: "Prepared By",
              style: "tableSignaturesBody"
            }, {
              text: "Checked By",
              style: "tableSignaturesBody"
            }, {
              text: "Approved By",
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
      }; // pdfMake.createPdf(docDefinition).download('optionalName.pdf');
      // pdfMake.createPdf(docDefinition).print();

      pdfMake.createPdf(docDefinition).open();
    },
    printReportByExpense: function printReportByExpense() {
      var _this4 = this;

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
      this.expense_types.forEach(function (element) {
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

      this.reports_by_expense.forEach(function (element) {
        // create new object if current employee does not match with previous record
        if (expense_id !== element.expense_id) {
          temp_table_body = {};
          expense_id = element.expense_id; // set default values for current row

          _this4.expense_types.forEach(function (expense_type) {
            temp_expense_types[expense_type.name] = 0;
          });

          var details = element.expense_details == null ? [] : JSON.parse(element.expense_details).map(function (item) {
            return "".concat(item.sub_type_name == null ? "" : item.sub_type_name + '/ ').concat(item.description, ": ").concat(item.total) + '\n';
          }).join('');
          temp_table_body = _objectSpread(_objectSpread({
            Date: element.expense_date,
            Particulars: element.expense_description + '\n' + details
          }, temp_expense_types), {}, {
            Total: 0
          });
          table_rows.push(temp_table_body);
        } // set expense type amount


        temp_table_body[element.expense_type_name] = element.expense_amount; // sum of all expense types

        if ("Total" in temp_table_body) {
          var total = 0;

          _this4.expense_types.forEach(function (item) {
            total += temp_table_body[item.name];
          });

          temp_table_body["Total"] = total;
        }
      }); // sum total amount per expense type

      this.expense_types.forEach(function (expense_type) {
        temp_expense_types[expense_type.name] = _this4.mixin_formatNumber(table_rows.reduce(function (total, item) {
          return total + item[expense_type.name];
        }, 0));
      }); // add row for total amounts

      table_rows.push(_objectSpread(_objectSpread({
        Total: "Total",
        Particulars: ""
      }, temp_expense_types), {}, {
        TotalAmount: this.mixin_formatNumber(table_rows.reduce(function (total, item) {
          return total + item["Total"];
        }, 0))
      })); // console.log(table_rows.map(item => Object.values(item)));

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
      }); // console.log("items", itemss);
      // return;

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
      }; // console.log(table_columns);
      // console.log(table_columns.map(item => "*"));
      // return;

      var docDefinition = {
        // pageSize: 'legal',
        pageSize: {
          width: 13 * 72,
          height: 8.5 * 72
        },
        pageOrientation: "landscape",
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
          text: ["Expense Summary Report"],
          style: "header"
        }, {
          style: "tableOfExpenses",
          table: {
            headerRows: 1,
            widths: table_columns.map(function (item) {
              return "*";
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
              text: "Prepared By",
              style: "tableSignaturesBody"
            }, {
              text: "Recommended By",
              style: "tableSignaturesBody"
            }, {
              text: "Checked By",
              style: "tableSignaturesBody"
            }, {
              text: "Approved By",
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
      }; // pdfMake.createPdf(docDefinition).download('optionalName.pdf');
      // pdfMake.createPdf(docDefinition).print();

      pdfMake.createPdf(docDefinition).open();
    },
    printPDFMAKE: function printPDFMAKE(action) {
      var headers = [];
      var items = [];

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
          width: 13 * 72,
          height: 8.5 * 72
        },
        pageOrientation: "landscape",
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
          text: ["Expense Summary Report"],
          style: "header"
        }, {
          style: "tableOfExpenses",
          table: {
            headerRows: 1,
            widths: ["*", "*", "*"],
            body: [[{
              text: "Header 1",
              style: "tableOfExpensesHeader"
            }, {
              text: "Header 2",
              style: "tableOfExpensesHeader"
            }, {
              text: "Header 3",
              style: "tableOfExpensesHeader"
            }], [{
              text: "One value goes here",
              style: "tableOfExpensesBody"
            }, {
              text: "One value goes here",
              style: "tableOfExpensesBody"
            }, {
              text: "One value goes here",
              style: "tableOfExpensesBody"
            }], [{
              text: "One value goes here",
              style: "tableOfExpensesBody"
            }, {
              text: "One value goes here",
              style: "tableOfExpensesBody"
            }, {
              text: "One value goes here",
              style: "tableOfExpensesBody"
            }], [{
              text: "One value goes here",
              style: "tableOfExpensesBody"
            }, {
              text: "One value goes here",
              style: "tableOfExpensesBody"
            }, {
              text: "One value goes here",
              style: "tableOfExpensesBody"
            }], [{
              text: "One value goes here",
              style: "tableOfExpensesBody"
            }, {
              text: "One value goes here",
              style: "tableOfExpensesBody"
            }, {
              text: "One value goes here",
              style: "tableOfExpensesBody"
            }]]
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
              text: "Prepared By",
              style: "tableSignaturesBody"
            }, {
              text: "Prepared By",
              style: "tableSignaturesBody"
            }, {
              text: "Prepared By",
              style: "tableSignaturesBody"
            }, {
              text: "Prepared By",
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
            fontSize: 11,
            color: "white",
            fillColor: "#4caf50",
            alignment: "center"
          },
          tableOfExpensesBody: {
            fontSize: 10
          },
          signatures: {
            margin: [0, 5, 0, 15],
            fontSize: 10
          },
          pageFooter: {
            fontSize: 8
          }
        }
      }; // pdfMake.createPdf(docDefinition).download('optionalName.pdf');
      // pdfMake.createPdf(docDefinition).print();

      pdfMake.createPdf(docDefinition).open();
    },
    loadStatistics: function loadStatistics(start, end, employee_id) {
      var _this = this;

      axios.get("/api/data/statistics?start_date=".concat(moment__WEBPACK_IMPORTED_MODULE_0___default()("2020-01-01").format("YYYY-MM-DD"), "&end_date=").concat(moment__WEBPACK_IMPORTED_MODULE_0___default()("2020-12-31").format("YYYY-MM-DD"), "&employee_id=").concat(employee_id)).then(function (response) {// console.log(response);
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);
      });
    },
    loadExpenseTypes: function loadExpenseTypes() {
      var _this = this;

      axios.get("/api/data/expense_types?only=true").then(function (response) {
        // console.log("expense types", response);
        _this.expense_types = response.data.data;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);
      });
    },
    loadReportByExpense: function loadReportByExpense() {
      var _this = this;

      axios.get("/api/data/print_report?by_expense_id=true").then(function (response) {
        // console.log("report by expense", response);
        _this.reports_by_expense = response.data.data;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);
      });
    },
    loadReportByEmployee: function loadReportByEmployee() {
      var _this = this;

      axios.get("/api/data/print_report?by_employee_id=true").then(function (response) {
        // console.log("report by employee", response);
        _this.reports_by_employee = response.data.data;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);
      });
    },
    loadReportByDate: function loadReportByDate() {
      var _this = this;

      axios.get("/api/data/print_report?by_date=true").then(function (response) {
        // console.log("report by date", response);
        _this.reports_by_date = response.data.data;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);
      });
    },
    printByExpense: function printByExpense(action) {
      // -------------------------------------------------------------------------------------
      // Initialize variables
      // -------------------------------------------------------------------------------------
      var pdfName = "Expense Summary Report";
      var table_columns = [];
      var table_rows = [];
      var table_footer = []; // -------------------------------------------------------------------------------------
      // JSPDF Basic Configuration
      // -------------------------------------------------------------------------------------

      var doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__["jsPDF"]({
        orientation: "landscape",
        unit: "in",
        format: [13, 8.5]
      }); // -------------------------------------------------------------------------------------
      // Set Table Header Data
      // -------------------------------------------------------------------------------------

      table_columns.push("Date");
      table_columns.push("Particulars");
      this.expense_types.forEach(function (element) {
        table_columns.push(element.name);
      });
      table_columns.push("Total"); // -------------------------------------------------------------------------------------
      // Set Table Body Data
      // -------------------------------------------------------------------------------------
      // -------------------------------------------------------------------------------------
      // Set Table Footer Data
      // -------------------------------------------------------------------------------------
      // -------------------------------------------------------------------------------------
      // Page Header
      // -------------------------------------------------------------------------------------

      doc.setFontSize(14).setTextColor(0, 0, 0).text("Expense Summary Report", 6.75, 0.7, "center"); // -------------------------------------------------------------------------------------
      // Page Body
      // -------------------------------------------------------------------------------------

      doc.autoTable({
        styles: {
          fontSize: 10
        },
        columns: table_columns,
        body: table_rows,
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
      });
      doc.setFontSize(10).setTextColor(0, 0, 0).text("Prepared by", 0.5, doc.lastAutoTable.finalY + 0.4);
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
      doc.line(9.5, doc.lastAutoTable.finalY + 0.8, 12.0, doc.lastAutoTable.finalY + 0.8); // -------------------------------------------------------------------------------------
      // Page Footer
      // -------------------------------------------------------------------------------------

      doc.setFontSize(8).setTextColor(0, 0, 0).text("Generated from Twin-Circa Marketing Expense Tracker ".concat(moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD HH:mm:ss")), 0.5, doc.internal.pageSize.height - 0.5); // page number

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
      // -------------------------------------------------------------------------------------
      // Print / Export Report
      // -------------------------------------------------------------------------------------


      if (action == "print") {
        // doc.autoPrint();
        doc.output("dataurlnewwindow"); // doc.autoPrint({ variant: "non-conform" });
      } else {
        doc.save("".concat(pdfName, ".pdf"));
      }
    },
    printByEmployee: function printByEmployee(action) {
      var _this5 = this;

      // -------------------------------------------------------------------------------------
      // Initialize variables
      // -------------------------------------------------------------------------------------
      var pdfName = "Expense Summary Report";
      var table_columns = [];
      var table_rows = [];
      var table_footer = [];
      var paper_size = []; // -------------------------------------------------------------------------------------
      // JSPDF Basic Configuration
      // -------------------------------------------------------------------------------------

      var doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__["jsPDF"]({
        orientation: "landscape",
        unit: "in",
        format: [13, 8.5]
      }); // -------------------------------------------------------------------------------------
      // Set Table Header Data
      // -------------------------------------------------------------------------------------

      table_columns.push("Employee");
      this.expense_types.forEach(function (element) {
        table_columns.push(element.name);
      });
      table_columns.push("Total"); // -------------------------------------------------------------------------------------
      // Set Table Body Data
      // -------------------------------------------------------------------------------------

      var temp_table_body = {};
      var temp_expense_types = {};
      var employee_id = null;
      var expense_type = null; // loop through retrieved records

      this.reports_by_employee.forEach(function (element) {
        // create new object if current employee does not match with previous record
        if (employee_id !== element.employee_id) {
          temp_table_body = {};
          employee_id = element.employee_id; // set default values for current row

          _this5.expense_types.forEach(function (expense_type) {
            temp_expense_types[expense_type.name] = 0;
          });

          temp_table_body = _objectSpread(_objectSpread({
            Employee: "".concat(element.last_name, ", ").concat(element.first_name, " ").concat(element.middle_name == null ? '' : element.middle_name, " ").concat(element.suffix == null ? '' : element.suffix)
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

      this.expense_types.forEach(function (expense_type) {
        temp_expense_types[expense_type.name] = _this5.mixin_formatNumber(table_rows.reduce(function (total, item) {
          return total + item[expense_type.name];
        }, 0));
      }); // add row for total amounts

      table_rows.push(_objectSpread(_objectSpread({
        Total: "Total"
      }, temp_expense_types), {}, {
        TotalAmount: this.mixin_formatNumber(table_rows.reduce(function (total, item) {
          return total + item["Total"];
        }, 0))
      })); // console.log(table_rows);
      // -------------------------------------------------------------------------------------
      // Set Table Footer Data
      // -------------------------------------------------------------------------------------
      // -------------------------------------------------------------------------------------
      // Page Header
      // -------------------------------------------------------------------------------------

      doc.setFontSize(14).setTextColor(0, 0, 0).text("Expense Summary Report", 6.75, 0.7, "center"); // -------------------------------------------------------------------------------------
      // Page Body
      // -------------------------------------------------------------------------------------

      doc.autoTable({
        styles: {
          fontSize: 10,
          halign: "right"
        },
        columns: table_columns,
        body: table_rows.map(function (item) {
          return Object.values(item);
        }),
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
          0: {
            halign: "left"
          }
        }
      });
      doc.setFontSize(10).setTextColor(0, 0, 0).text("Prepared by", 0.5, doc.lastAutoTable.finalY + 0.4);
      doc.setLineWidth(0.01);
      doc.line(0.5, doc.lastAutoTable.finalY + 0.8, 3.0, doc.lastAutoTable.finalY + 0.8);
      doc.setFontSize(10).setTextColor(0, 0, 0).text("Checked by", 3.5, doc.lastAutoTable.finalY + 0.4);
      doc.setLineWidth(0.01);
      doc.line(3.5, doc.lastAutoTable.finalY + 0.8, 6.0, doc.lastAutoTable.finalY + 0.8);
      doc.setFontSize(10).setTextColor(0, 0, 0).text("Approved by", 6.5, doc.lastAutoTable.finalY + 0.4);
      doc.setLineWidth(0.01);
      doc.line(6.5, doc.lastAutoTable.finalY + 0.8, 9.0, doc.lastAutoTable.finalY + 0.8);
      doc.setFontSize(10).setTextColor(0, 0, 0).text("Voucher No.", 9.5, doc.lastAutoTable.finalY + 0.4);
      doc.setLineWidth(0.01);
      doc.line(9.5, doc.lastAutoTable.finalY + 0.8, 12.0, doc.lastAutoTable.finalY + 0.8); // -------------------------------------------------------------------------------------
      // Page Footer
      // -------------------------------------------------------------------------------------

      doc.setFontSize(8).setTextColor(0, 0, 0).text("Generated from Twin-Circa Marketing Expense Tracker ".concat(moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD HH:mm:ss")), 0.5, doc.internal.pageSize.height - 0.5); // page number

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
      // -------------------------------------------------------------------------------------
      // Print / Export Report
      // -------------------------------------------------------------------------------------


      if (action == "print") {
        // doc.autoPrint();
        doc.output("dataurlnewwindow"); // doc.autoPrint({ variant: "non-conform" });
      } else {
        doc.save("".concat(pdfName, ".pdf"));
      }
    },
    printByDate: function printByDate(action) {
      // -------------------------------------------------------------------------------------
      // Initialize variables
      // -------------------------------------------------------------------------------------
      var pdfName = "Expense Summary Report";
      var table_columns = [];
      var table_rows = [];
      var table_footer = [];
      var paper_size = []; // -------------------------------------------------------------------------------------
      // JSPDF Basic Configuration
      // -------------------------------------------------------------------------------------

      var doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__["jsPDF"]({
        orientation: "landscape",
        unit: "in",
        format: [13, 8.5]
      }); // -------------------------------------------------------------------------------------
      // Set Table Header Data
      // -------------------------------------------------------------------------------------

      table_columns.push("Date");
      this.expense_types.forEach(function (element) {
        table_columns.push(element.name);
      });
      table_columns.push("Total"); // -------------------------------------------------------------------------------------
      // Set Table Body Data
      // -------------------------------------------------------------------------------------
      // -------------------------------------------------------------------------------------
      // Set Table Footer Data
      // -------------------------------------------------------------------------------------
      // -------------------------------------------------------------------------------------
      // Page Header
      // -------------------------------------------------------------------------------------

      doc.setFontSize(14).setTextColor(0, 0, 0).text("Expense Summary Report", 6.75, 0.7, "center"); // -------------------------------------------------------------------------------------
      // Page Body
      // -------------------------------------------------------------------------------------

      doc.autoTable({
        styles: {
          fontSize: 10
        },
        columns: table_columns,
        body: table_rows,
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
      });
      doc.setFontSize(10).setTextColor(0, 0, 0).text("Prepared by", 0.5, doc.lastAutoTable.finalY + 0.4);
      doc.setLineWidth(0.01);
      doc.line(0.5, doc.lastAutoTable.finalY + 0.8, 3.0, doc.lastAutoTable.finalY + 0.8);
      doc.setFontSize(10).setTextColor(0, 0, 0).text("Checked by", 3.5, doc.lastAutoTable.finalY + 0.4);
      doc.setLineWidth(0.01);
      doc.line(3.5, doc.lastAutoTable.finalY + 0.8, 6.0, doc.lastAutoTable.finalY + 0.8);
      doc.setFontSize(10).setTextColor(0, 0, 0).text("Approved by", 6.5, doc.lastAutoTable.finalY + 0.4);
      doc.setLineWidth(0.01);
      doc.line(6.5, doc.lastAutoTable.finalY + 0.8, 9.0, doc.lastAutoTable.finalY + 0.8);
      doc.setFontSize(10).setTextColor(0, 0, 0).text("Voucher No.", 9.5, doc.lastAutoTable.finalY + 0.4);
      doc.setLineWidth(0.01);
      doc.line(9.5, doc.lastAutoTable.finalY + 0.8, 12.0, doc.lastAutoTable.finalY + 0.8); // -------------------------------------------------------------------------------------
      // Page Footer
      // -------------------------------------------------------------------------------------

      doc.setFontSize(8).setTextColor(0, 0, 0).text("Generated from Twin-Circa Marketing Expense Tracker ".concat(moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD HH:mm:ss")), 0.5, doc.internal.pageSize.height - 0.5); // page number

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
      // -------------------------------------------------------------------------------------
      // Print / Export Report
      // -------------------------------------------------------------------------------------


      if (action == "print") {
        // doc.autoPrint();
        doc.output("dataurlnewwindow"); // doc.autoPrint({ variant: "non-conform" });
      } else {
        doc.save("".concat(pdfName, ".pdf"));
      }
    }
  },
  mounted: function mounted() {
    this.loadStatistics();
    this.loadExpenseTypes(); // this.loadReportByExpense();
    // this.loadReportByEmployee();
    // this.loadReportByDate();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Playground.vue?vue&type=template&id=2a00969a&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Playground.vue?vue&type=template&id=2a00969a& ***!
  \********************************************************************************************************************************************************************************************************/
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
        "v-main",
        [
          _c(
            "v-form",
            { ref: "form" },
            [
              _c(
                "v-container",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "green" },
                      on: {
                        click: function($event) {
                          return _vm.printByExpense("print")
                        }
                      }
                    },
                    [_vm._v("Group By Expense")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "red" },
                      on: {
                        click: function($event) {
                          return _vm.printByEmployee("print")
                        }
                      }
                    },
                    [_vm._v("Group By Employee")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "blue" },
                      on: {
                        click: function($event) {
                          return _vm.printByDate("print")
                        }
                      }
                    },
                    [_vm._v("Group By Date")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "orange" },
                      on: {
                        click: function($event) {
                          return _vm.printPDFMAKE("print")
                        }
                      }
                    },
                    [_vm._v("PDFMAKE")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "orange" },
                      on: {
                        click: function($event) {
                          return _vm.printReportByExpense("print")
                        }
                      }
                    },
                    [_vm._v("TEST EXPENSE")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "orange" },
                      on: {
                        click: function($event) {
                          return _vm.printReportByEmployee("print")
                        }
                      }
                    },
                    [_vm._v("TEST EMPLOYEE")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "orange" },
                      on: {
                        click: function($event) {
                          return _vm.printReportByDate("print")
                        }
                      }
                    },
                    [_vm._v("TEST DATE")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    { staticClass: "mx-auto mb-4", attrs: { flat: "" } },
                    [
                      _c(
                        "v-list-item",
                        { attrs: { "three-line": "" } },
                        [
                          _c(
                            "v-list-item-content",
                            [
                              _c(
                                "div",
                                { staticClass: "overline green--text mb-4" },
                                [
                                  _vm._v(
                                    "\n                                BASIC DETAILS\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("v-list-item-subtitle", [
                                _vm._v(
                                  "\n                                Note: Lorem ipsum dolor sit, amet\n                                consectetur adipisicing elit. Explicabo enim\n                                eum similique nihil a, repellat, fugiat\n                                debitis placeat, illo ipsa molestias quaerat\n                                excepturi. Labore inventore molestiae a\n                                rerum, omnis expedita!\n                            "
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-container",
                        [
                          _c("v-text-field", { attrs: { label: "Date" } }),
                          _vm._v(" "),
                          _c("v-text-field", { attrs: { label: "Employee" } }),
                          _vm._v(" "),
                          _c("v-text-field", { attrs: { label: "Vendor" } }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: { label: "Receipt No." }
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
            "v-container",
            [
              _c(
                "v-card",
                { staticClass: "mx-auto mb-4", attrs: { outlined: "" } },
                [
                  _c(
                    "v-list-item",
                    { attrs: { "three-line": "" } },
                    [
                      _c(
                        "v-list-item-content",
                        [
                          _c(
                            "v-list-item-title",
                            { staticClass: "headline mb-1" },
                            [
                              _vm._v(
                                "\n                            Basic Information\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("v-list-item-subtitle", [
                            _vm._v(
                              "\n                            Note: Lorem ipsum dolor sit, amet consectetur\n                            adipisicing elit. Explicabo enim eum similique\n                            nihil a, repellat, fugiat debitis placeat, illo\n                            ipsa molestias quaerat excepturi. Labore\n                            inventore molestiae a rerum, omnis expedita!\n                        "
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-container",
                    [
                      _c("v-text-field", { attrs: { label: "Date" } }),
                      _vm._v(" "),
                      _c("v-text-field", { attrs: { label: "Employee" } }),
                      _vm._v(" "),
                      _c("v-text-field", { attrs: { label: "Vendor" } }),
                      _vm._v(" "),
                      _c("v-text-field", { attrs: { label: "Receipt No." } })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card",
                { staticClass: "mx-auto mb-4", attrs: { outlined: "" } },
                [
                  _c(
                    "v-list-item",
                    { attrs: { "three-line": "" } },
                    [
                      _c(
                        "v-list-item-content",
                        [
                          _c(
                            "v-list-item-title",
                            { staticClass: "headline mb-1" },
                            [
                              _vm._v(
                                "\n                            Expense Details\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("v-list-item-subtitle", [
                            _vm._v(
                              "\n                            Note: Lorem ipsum dolor sit, amet consectetur\n                            adipisicing elit. Explicabo enim eum similique\n                            nihil a, repellat, fugiat debitis placeat, illo\n                            ipsa molestias quaerat excepturi. Labore\n                            inventore molestiae a rerum, omnis expedita!\n                        "
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-container",
                    [
                      _c("v-text-field", { attrs: { label: "Expense Type" } }),
                      _vm._v(" "),
                      _c("v-text-field", { attrs: { label: "Sub Type" } }),
                      _vm._v(" "),
                      _c("v-text-field", { attrs: { label: "Description" } }),
                      _vm._v(" "),
                      _c("v-checkbox", {
                        attrs: { label: "Itemize Expenses" },
                        model: {
                          value: _vm.itemize,
                          callback: function($$v) {
                            _vm.itemize = $$v
                          },
                          expression: "itemize"
                        }
                      }),
                      _vm._v(" "),
                      _vm.itemize
                        ? _c(
                            "v-row",
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { staticClass: "text-right" },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        color: "green",
                                        outlined: "",
                                        rounded: "",
                                        text: ""
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                New Item\n                            "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.itemize
                        ? _c("v-data-table", {
                            attrs: {
                              headers: _vm.headers,
                              items: _vm.desserts,
                              "items-per-page": 5
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c("v-text-field", { attrs: { label: "Amount" } }),
                      _vm._v(" "),
                      _c("v-text-field", { attrs: { label: "Tax Rate" } }),
                      _vm._v(" "),
                      _c("v-text-field", { attrs: { label: "Tax Amount" } }),
                      _vm._v(" "),
                      _c("v-textarea", { attrs: { label: "Remarks" } })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            color: "green",
                            outlined: "",
                            rounded: "",
                            text: ""
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Save\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        { attrs: { outlined: "", rounded: "", text: "" } },
                        [
                          _vm._v(
                            "\n                        Cancel\n                    "
                          )
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Playground.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/Playground.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Playground_vue_vue_type_template_id_2a00969a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Playground.vue?vue&type=template&id=2a00969a& */ "./resources/js/views/Playground.vue?vue&type=template&id=2a00969a&");
/* harmony import */ var _Playground_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Playground.vue?vue&type=script&lang=js& */ "./resources/js/views/Playground.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Playground_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Playground_vue_vue_type_template_id_2a00969a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Playground_vue_vue_type_template_id_2a00969a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Playground.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Playground.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Playground.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Playground_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Playground.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Playground.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Playground_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Playground.vue?vue&type=template&id=2a00969a&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Playground.vue?vue&type=template&id=2a00969a& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Playground_vue_vue_type_template_id_2a00969a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Playground.vue?vue&type=template&id=2a00969a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Playground.vue?vue&type=template&id=2a00969a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Playground_vue_vue_type_template_id_2a00969a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Playground_vue_vue_type_template_id_2a00969a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);