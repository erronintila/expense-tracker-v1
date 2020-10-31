(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/Print.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expense_reports/Print.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PrintDetailed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/PrintDetailed */ "./resources/js/views/modules/admin/expense_reports/components/PrintDetailed.vue");
/* harmony import */ var _components_PrintSummary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/PrintSummary */ "./resources/js/views/modules/admin/expense_reports/components/PrintSummary.vue");
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    PrintDetailed: _components_PrintDetailed__WEBPACK_IMPORTED_MODULE_2__["default"],
    PrintSummary: _components_PrintSummary__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/components/PrintDetailed.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expense_reports/components/PrintDetailed.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      total: 0,
      total_amounts: [],
      headers: [],
      items: [],
      expense_report: {
        id: "",
        code: "",
        description: "",
        remarks: "",
        notes: "",
        employee: {
          last_name: "",
          first_name: "",
          middle_name: "",
          suffix: ""
        },
        payment: {},
        expenses: {},
        status: "",
        submitted_at: "",
        reviewed_at: "",
        approved_at: "",
        cancelled_at: "",
        created_at: "",
        updated_at: "",
        deleted_at: "",
        total: 0,
        total_reimbursable: 0
      },
      min_date: "",
      max_date: "",
      column_headers: {}
    };
  },
  methods: {
    generatePDF: function generatePDF(action) {
      // var source = this.$refs["myTable"];
      var pdfName = "Expense Summary Report";
      var columns = this.headers.map(function (item) {
        return item.text;
      });
      var rows = [];
      var footer = [];
      this.items.forEach(function (element) {
        var temp = [];
        temp.push(element.date);
        temp.push(element.delivery_expense);
        temp.push(element["gas_&_oil"]);
        temp.push(element["meal_&_lodging"]);
        temp.push(element.miscellaneous);
        temp.push(element["postage,_telephone_&_fax"]);
        temp.push(element["repairs_&_maintenance"]);
        temp.push(element.representation);
        temp.push(element.supplies);
        temp.push(element.transportation);
        temp.push(element.total);
        rows.push(temp);
      });
      footer = ["Total", this.column_headers.delivery_expense, this.column_headers["gas_&_oil"], this.column_headers["meal_&_lodging"], this.column_headers.miscellaneous, this.column_headers["postage,_telephone_&_fax"], this.column_headers["repairs_&_maintenance"], this.column_headers.representation, this.column_headers.supplies, this.column_headers.transportation, this.column_headers.total];
      rows.push(footer); // basic config

      var doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__["jsPDF"]({
        orientation: "landscape",
        unit: "in",
        format: action == "print" ? "letter" : [13, 8.5]
      }); // header details

      doc.setFontSize(14).setTextColor(76, 175, 10).text("Expense Summary Report", 0.5, 0.7);
      doc.setFontSize(14).setTextColor(76, 175, 10).text(this.expense_report.code, doc.internal.pageSize.width - 0.5, 0.7, {
        align: "right"
      });
      doc.setFontSize(11).setTextColor(0, 0, 0).text("Employee: ".concat(this.expense_report.employee.last_name, ", ").concat(this.expense_report.employee.first_name, " ").concat(this.expense_report.employee.middle_name), 0.5, 1.0);
      doc.setFontSize(11).setTextColor(0, 0, 0).text(this.expense_report.status.status, doc.internal.pageSize.width - 0.5, 1.0, {
        align: "right"
      });
      doc.setFontSize(11).setTextColor(0, 0, 0).text("Description: ".concat(this.expense_report.description), 0.5, 1.2);
      doc.setFontSize(11).setTextColor(0, 0, 0).text("Period: ".concat(this.min_date, " ~ ").concat(this.max_date), 0.5, 1.4); // table config

      doc.autoTable({
        columns: columns,
        body: rows,
        margin: {
          left: 0.5,
          top: 1.6
        },
        showHead: "everyPage",
        headStyles: {
          halign: "center",
          fillColor: [76, 175, 10]
        }
      });
      var finalY = doc.lastAutoTable.finalY; // The y position on the page

      doc.setFontSize(12).setTextColor(76, 175, 10).text("Grand Total", 0.6, finalY + 0.2);
      doc.setFontSize(12).setTextColor(76, 175, 10).text("".concat(this.total_amount), doc.internal.pageSize.width - 0.7, finalY + 0.2, {
        align: "right"
      }); // footer

      doc.setFontSize(8).setTextColor(0, 0, 0).text("Generated from Twin-Circa Marketing Expense Tracker", 0.5, doc.internal.pageSize.height - 0.5); // doc.setFontSize(8)
      //     .setTextColor(0, 0, 0)
      //     .text(
      //         `Page ${0} / ${doc.internal.getNumberOfPages()}`,
      //         doc.internal.pageSize.width - 1,
      //         doc.internal.pageSize.height - 0.5
      //     );

      if (action == "print") {
        doc.autoPrint();
        doc.output("dataurlnewwindow"); // doc.autoPrint({ variant: "non-conform" });
      } else {
        doc.save("".concat(pdfName, ".pdf"));
      }
    },
    // printReport() {
    // },
    // exportToPDF() {
    // },
    loadExpenseTypes: function loadExpenseTypes() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        axios.get("/api/data/expense_types").then(function (response) {
          response.data.data.forEach(function (element) {
            var header = element.name;
            var identifier = element.name.replace(/\s+/g, "_").toLowerCase();
            _this.column_headers[identifier] = 0;

            _this.headers.push({
              text: element.name,
              value: element.name.replace(/\s+/g, "_").toLowerCase(),
              sortable: false,
              divider: true
            });

            _this.total_amounts.push({
              name: header,
              value: 0
            });
          });

          _this.headers.unshift({
            text: "Date",
            value: "date",
            sortable: false,
            divider: true
          });

          _this.headers.push({
            text: "Total",
            value: "total",
            sortable: false
          });

          _this.column_headers["total"] = 0;
          resolve();
        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);

          _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);

          reject();
        });
      });
    },
    loadExpenses: function loadExpenses() {
      var _this = this;

      _this.loadExpenseTypes().then(function () {
        axios.get("/api/data/print?expense_report_detailed=true&expense_report_id=".concat(_this.$route.params.id)).then(function (response) {
          console.log(response);
          var rows = response.data.data;
          _this.items = rows;
          _this.expense_report = response.data.expense_report;
          _this.min_date = response.data.min_date;
          _this.max_date = response.data.max_date;
        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);

          _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
        });
      });
    },
    print: function print() {
      this.$htmlToPaper("section-to-print");
    }
  },
  computed: {
    total_amount: function total_amount() {
      return this.mixin_formatNumber(this.expense_report.total);
    }
  },
  watch: {
    items: function items() {
      var _this2 = this;

      var _loop = function _loop(key) {
        _this2.column_headers[key] = _this2.items.reduce(function (total, item) {
          return total + item[key];
        }, 0);
      };

      for (var key in this.column_headers) {
        _loop(key);
      }
    }
  },
  created: function created() {
    var _this = this;

    _this.loadExpenses();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/components/PrintSummary.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expense_reports/components/PrintSummary.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/components/PrintDetailed.vue?vue&type=style&index=0&id=7070bdfc&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expense_reports/components/PrintDetailed.vue?vue&type=style&index=0&id=7070bdfc&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@media print {\nbody *[data-v-7070bdfc] {\r\n        background: white;\n}\n@page {\r\n        size: Legal landscape;\n}\n}\r\n\r\n/* table {\r\n    width: 100%;\r\n    border: 1px solid lightgrey;\r\n    border-collapse: collapse;\r\n}\r\n\r\ntable th,\r\ntable td {\r\n    border: 1px solid lightgrey;\r\n} */\r\n\r\n/* @media print {\r\n    .v-content {\r\n        padding: 0 !important;\r\n    }\r\n    body {\r\n        overflow: auto;\r\n        height: auto;\r\n    }\r\n\r\n    @page {\r\n        size: Legal landscape;\r\n    }\r\n\r\n    body * {\r\n        visibility: hidden;\r\n    }\r\n\r\n    #section-to-print,\r\n    #section-to-print * {\r\n        visibility: visible;\r\n    }\r\n\r\n    #section-to-print {\r\n        position: absolute;\r\n        left: 0;\r\n        top: 0;\r\n    }\r\n} */\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/components/PrintDetailed.vue?vue&type=style&index=0&id=7070bdfc&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expense_reports/components/PrintDetailed.vue?vue&type=style&index=0&id=7070bdfc&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader??ref--6-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PrintDetailed.vue?vue&type=style&index=0&id=7070bdfc&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/components/PrintDetailed.vue?vue&type=style&index=0&id=7070bdfc&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/Print.vue?vue&type=template&id=6c2c771f&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expense_reports/Print.vue?vue&type=template&id=6c2c771f& ***!
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
  return _c("div", [_c("PrintDetailed")], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/components/PrintDetailed.vue?vue&type=template&id=7070bdfc&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expense_reports/components/PrintDetailed.vue?vue&type=template&id=7070bdfc&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
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
        { attrs: { flat: "" } },
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
              _c(
                "v-btn",
                {
                  staticClass: "mr-2",
                  on: {
                    click: function($event) {
                      return _vm.generatePDF("print")
                    }
                  }
                },
                [_vm._v("\n                Print\n            ")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  on: {
                    click: function($event) {
                      return _vm.generatePDF("pdf")
                    }
                  }
                },
                [_vm._v("\n                Export to PDF\n            ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            [
              _c("v-col", [
                _c("div", { staticClass: "title green--text" }, [
                  _vm._v(
                    "\n                    Expense Summary Report\n                "
                  )
                ]),
                _vm._v(" "),
                _c("div", [
                  _vm._v(
                    "\n                    Employee:\n                    " +
                      _vm._s(
                        _vm.expense_report.employee.last_name +
                          ", " +
                          (_vm.expense_report.employee.first_name || "") +
                          " " +
                          (_vm.expense_report.employee.suffix || "")
                      ) +
                      "\n                "
                  )
                ]),
                _vm._v(" "),
                _c("div", [
                  _vm._v(
                    "\n                    Description: " +
                      _vm._s(_vm.expense_report.description || "") +
                      "\n                "
                  )
                ]),
                _vm._v(" "),
                _c("div", [
                  _vm._v(
                    "Period: " + _vm._s(_vm.min_date + " ~ " + _vm.max_date)
                  )
                ])
              ]),
              _vm._v(" "),
              _c("v-col", { staticClass: "text-right" }, [
                _c("div", { staticClass: "title green--text" }, [
                  _vm._v(
                    "\n                    # " +
                      _vm._s(_vm.expense_report.code) +
                      "\n                "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { class: _vm.expense_report.status.color + "--text" },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.expense_report.status.status) +
                        "\n                "
                    )
                  ]
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            { staticClass: "mt-5" },
            [
              _c(
                "v-col",
                [
                  _c(
                    "v-data-table",
                    {
                      attrs: {
                        dense: "",
                        "hide-default-footer": true,
                        "disable-pagination": "",
                        headers: _vm.headers,
                        items: _vm.items
                      }
                    },
                    [
                      _vm.items.length > 0
                        ? _c("template", { slot: "body.append" }, [
                            _c(
                              "tr",
                              { staticClass: "green--text hidden-md-and-up" },
                              [
                                _c("td", { staticClass: "title" }, [
                                  _vm._v(
                                    "\n                                Total: "
                                  ),
                                  _c("strong", [_vm._v(_vm._s(0))])
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "tr",
                              { staticClass: "green--text hidden-sm-and-down" },
                              [
                                _c("td", [_vm._v("Total")]),
                                _vm._v(" "),
                                _vm._l(_vm.column_headers, function(
                                  value,
                                  name
                                ) {
                                  return _c("td", { key: name }, [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(value) +
                                        "\n                            "
                                    )
                                  ])
                                })
                              ],
                              2
                            )
                          ])
                        : _vm._e()
                    ],
                    2
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
              _c("v-col", [_c("div", [_vm._v("Grand Total :")])]),
              _vm._v(" "),
              _c("v-col", { staticClass: "text-right" }, [
                _c("div", { staticClass: "headline green--text" }, [
                  _vm._v("₱ " + _vm._s(_vm.total_amount))
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/components/PrintSummary.vue?vue&type=template&id=0144f378&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expense_reports/components/PrintSummary.vue?vue&type=template&id=0144f378& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/modules/admin/expense_reports/Print.vue":
/*!********************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/Print.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Print_vue_vue_type_template_id_6c2c771f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Print.vue?vue&type=template&id=6c2c771f& */ "./resources/js/views/modules/admin/expense_reports/Print.vue?vue&type=template&id=6c2c771f&");
/* harmony import */ var _Print_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Print.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/expense_reports/Print.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Print_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Print_vue_vue_type_template_id_6c2c771f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Print_vue_vue_type_template_id_6c2c771f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/expense_reports/Print.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/expense_reports/Print.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/Print.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Print_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Print.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/Print.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Print_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/expense_reports/Print.vue?vue&type=template&id=6c2c771f&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/Print.vue?vue&type=template&id=6c2c771f& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Print_vue_vue_type_template_id_6c2c771f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Print.vue?vue&type=template&id=6c2c771f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/Print.vue?vue&type=template&id=6c2c771f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Print_vue_vue_type_template_id_6c2c771f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Print_vue_vue_type_template_id_6c2c771f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/modules/admin/expense_reports/components/PrintDetailed.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/components/PrintDetailed.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PrintDetailed_vue_vue_type_template_id_7070bdfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrintDetailed.vue?vue&type=template&id=7070bdfc&scoped=true& */ "./resources/js/views/modules/admin/expense_reports/components/PrintDetailed.vue?vue&type=template&id=7070bdfc&scoped=true&");
/* harmony import */ var _PrintDetailed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrintDetailed.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/expense_reports/components/PrintDetailed.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PrintDetailed_vue_vue_type_style_index_0_id_7070bdfc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrintDetailed.vue?vue&type=style&index=0&id=7070bdfc&scoped=true&lang=css& */ "./resources/js/views/modules/admin/expense_reports/components/PrintDetailed.vue?vue&type=style&index=0&id=7070bdfc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PrintDetailed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PrintDetailed_vue_vue_type_template_id_7070bdfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PrintDetailed_vue_vue_type_template_id_7070bdfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7070bdfc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/expense_reports/components/PrintDetailed.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/expense_reports/components/PrintDetailed.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/components/PrintDetailed.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintDetailed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PrintDetailed.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/components/PrintDetailed.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintDetailed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/expense_reports/components/PrintDetailed.vue?vue&type=style&index=0&id=7070bdfc&scoped=true&lang=css&":
/*!************************************************************************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/components/PrintDetailed.vue?vue&type=style&index=0&id=7070bdfc&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintDetailed_vue_vue_type_style_index_0_id_7070bdfc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader??ref--6-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PrintDetailed.vue?vue&type=style&index=0&id=7070bdfc&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/components/PrintDetailed.vue?vue&type=style&index=0&id=7070bdfc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintDetailed_vue_vue_type_style_index_0_id_7070bdfc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintDetailed_vue_vue_type_style_index_0_id_7070bdfc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintDetailed_vue_vue_type_style_index_0_id_7070bdfc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintDetailed_vue_vue_type_style_index_0_id_7070bdfc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintDetailed_vue_vue_type_style_index_0_id_7070bdfc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/modules/admin/expense_reports/components/PrintDetailed.vue?vue&type=template&id=7070bdfc&scoped=true&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/components/PrintDetailed.vue?vue&type=template&id=7070bdfc&scoped=true& ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintDetailed_vue_vue_type_template_id_7070bdfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PrintDetailed.vue?vue&type=template&id=7070bdfc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/components/PrintDetailed.vue?vue&type=template&id=7070bdfc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintDetailed_vue_vue_type_template_id_7070bdfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintDetailed_vue_vue_type_template_id_7070bdfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/modules/admin/expense_reports/components/PrintSummary.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/components/PrintSummary.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PrintSummary_vue_vue_type_template_id_0144f378___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrintSummary.vue?vue&type=template&id=0144f378& */ "./resources/js/views/modules/admin/expense_reports/components/PrintSummary.vue?vue&type=template&id=0144f378&");
/* harmony import */ var _PrintSummary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrintSummary.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/expense_reports/components/PrintSummary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PrintSummary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PrintSummary_vue_vue_type_template_id_0144f378___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PrintSummary_vue_vue_type_template_id_0144f378___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/expense_reports/components/PrintSummary.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/expense_reports/components/PrintSummary.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/components/PrintSummary.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintSummary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PrintSummary.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/components/PrintSummary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintSummary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/expense_reports/components/PrintSummary.vue?vue&type=template&id=0144f378&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/components/PrintSummary.vue?vue&type=template&id=0144f378& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintSummary_vue_vue_type_template_id_0144f378___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PrintSummary.vue?vue&type=template&id=0144f378& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/components/PrintSummary.vue?vue&type=template&id=0144f378&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintSummary_vue_vue_type_template_id_0144f378___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintSummary_vue_vue_type_template_id_0144f378___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);