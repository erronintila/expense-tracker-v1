(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

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
      // var source = this.$refs["myTable"];
      var pdfName = "Expense Report";
      var columns = ["Date", "Type", "Receipt", "Vendor", "Amount"];
      var rows = [];
      var footer = [];
      this.form.expenses.forEach(function (element) {
        var temp = [];
        temp.push(element.date);
        temp.push(element.expense_type.name);
        temp.push(element.receipt_number);
        temp.push(element.vendor.name);
        temp.push(element.amount);
        rows.push(temp);
      }); // footer = [
      //     "Total",
      //     this.column_headers.delivery_expense,
      //     this.column_headers["gas_&_oil"],
      //     this.column_headers["meal_&_lodging"],
      //     this.column_headers.miscellaneous,
      //     this.column_headers["postage,_telephone_&_fax"],
      //     this.column_headers["repairs_&_maintenance"],
      //     this.column_headers.representation,
      //     this.column_headers.supplies,
      //     this.column_headers.transportation,
      //     this.column_headers.total
      // ];
      // rows.push(footer);
      // basic config

      var doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__["jsPDF"]({
        orientation: "portrait",
        unit: "in",
        format: action == "print" ? "letter" : [13, 8.5]
      }); // header details

      doc.setFontSize(11).setTextColor(0, 0, 0).text("".concat(this.form.employee.full_name), 0.5, 0.7);
      doc.setFontSize(11).setTextColor(0, 0, 0).text("".concat(this.form.code), 0.5, 0.7);
      doc.setFontSize(20).setTextColor(76, 175, 10).text("PHP ".concat(this.mixin_formatNumber(this.form.total)), 0.5, 1.0);
      doc.setFontSize(11).setTextColor(0, 0, 0).text("Period: ".concat(this.form.from, " ~ ").concat(this.form.to), 0.5, 1.2);
      doc.setLineWidth(0.01);
      doc.line(0.5, 1.35, 8.0, 1.35);
      doc.setFontSize(11).setTextColor(0, 0, 0).text("Description: ".concat(this.form.description), 0.5, 1.6); // doc.setFontSize(14)
      //     .setTextColor(76, 175, 10)
      //     .text("Expense Report", 0.5, 1.0);
      // doc.setFontSize(14)
      //     .setTextColor(76, 175, 10)
      //     .text(
      //         "",
      //         doc.internal.pageSize.width - 0.5,
      //         0.7,
      //         { align: "right" }
      //     );
      // doc.setFontSize(11)
      //     .setTextColor(0, 0, 0)
      //     .text(
      //         this.form.status.status,
      //         doc.internal.pageSize.width - 0.5,
      //         1.0,
      //         { align: "right" }
      //     );
      // table config
      // doc.autoTable({
      //     columns: columns,
      //     body: rows,
      //     margin: { left: 0.5, top: 1.6 },
      //     showHead: "everyPage",
      //     headStyles: { halign: "center", fillColor: [76, 175, 10] }
      // });
      // let finalY = doc.lastAutoTable.finalY; // The y position on the page
      // doc.setFontSize(12)
      //     .setTextColor(76, 175, 10)
      //     .text("Grand Total", 0.6, finalY + 0.2);
      // doc.setFontSize(12)
      //     .setTextColor(76, 175, 10)
      //     .text(`${0}`, doc.internal.pageSize.width - 0.7, finalY + 0.2, {
      //         align: "right"
      //     });
      // footer

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
    // loadExpenses() {
    //     axios
    //         .get(
    //             `/api/data/expenses?expense_report_id${this.$route.params.id}`
    //         )
    //         .then(response => {
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
      var _this2 = this;

      var _this = this;

      _this.loading = true;
      return new Promise(function (resolve, reject) {
        var _this2$options = _this2.options,
            sortBy = _this2$options.sortBy,
            sortDesc = _this2$options.sortDesc,
            page = _this2$options.page,
            itemsPerPage = _this2$options.itemsPerPage;
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
        var _this3 = this;

        this.getDataFromApi().then(function (data) {
          _this3.form.expenses = data.items;
          _this3.totalItems = data.total;
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
                                _c(
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
                                    on: {
                                      click: function($event) {
                                        return _vm.generatePDF("print")
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
                                    attrs: {
                                      color: "green",
                                      dark: "",
                                      to: {
                                        name: "admin.expense_reports.detailed"
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                View Detailed\n                            "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: {
                                      color: "green",
                                      dark: "",
                                      to: {
                                        name: "admin.expense_reports.summary"
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                View Summary\n                            "
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