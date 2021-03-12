(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[71],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/Edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/expense_reports/Edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DateRangePicker: _components_daterangepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      loading: true,
      loader: true,
      valid: false,
      date_range: [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("month").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("month").format("YYYY-MM-DD")],
      preset: "",
      presets: ["Today", "Yesterday", "Last 7 Days", "Last 30 Days", "This Week", "This Month", "This Quarter", "This Year", "Last Week", "Last Month", "Last Quarter", "Last Year", "Last 5 Years"],
      headers: [{
        text: "Date",
        value: "date"
      }, {
        text: "Type",
        value: "expense_type.name"
      }, {
        text: "Receipt",
        value: "receipt_number"
      }, {
        text: "Vendor",
        value: "vendor.name"
      }, {
        text: "Amount",
        value: "amount"
      }, {
        text: "Actions",
        value: "actions",
        sortable: false
      }, {
        text: "",
        value: "data-table-expand"
      }],
      items: [],
      selected: [],
      expenses: [],
      total: 0,
      totalItems: 0,
      expense_report_id: this.$route.params.id,
      options: {
        sortBy: ["created_at"],
        sortDesc: [true],
        page: 1,
        itemsPerPage: 10
      },
      form: {
        code: "",
        description: "",
        remarks: "",
        notes: "",
        user: {
          id: 0,
          remaining_fund: 0,
          fund: 0
        }
      },
      errors: {
        date_range: [],
        code: [],
        description: [],
        remarks: [],
        notes: [],
        user: [],
        expenses: []
      }
    };
  },
  methods: {
    updateDates: function updateDates(e) {
      var _this2 = this;

      this.date_range = e;
      this.loadExpenses(this.form.user.id).then(function () {
        _this2.getDataFromApi().then(function (data) {
          _this2.items = data.items;
          _this2.totalItems = data.total;
        });
      });
    },
    getData: function getData() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        axios.get("/api/expense_reports/".concat(_this.$route.params.id)).then(function (response) {
          var data = response.data.data;
          _this.form.code = data.code;
          _this.form.description = data.description;
          _this.form.remarks = data.remarks;
          _this.form.notes = data.notes;
          _this.form.user = data.user;
          _this.form.status = data.status; // _this.expenses = data.expenses;
          // _this.submitted_at = data.submitted_at;
          // _this.reviewed_at = data.reviewed_at;
          // _this.approved_at = data.approved_at;
          // _this.cancelled_at = data.cancelled_at;
          // _this.created_at = data.created_at;
          // _this.updated_at = data.updated_at;
          // _this.deleted_at = data.deleted_at;

          _this.total = data.total; // _this.date_range = [_this.from, _this.to];
          // _this.loadExpenses(data.user.id);
          // _this.getDataFromApi().then((data) => {
          //   _this.items = data.items;
          //   _this.totalItems = data.total;
          //   let selected = data.items.filter(function (item) {
          //     return item.expense_report !== null;
          //   });
          //   _this.selected.splice(0, 0, ...selected);
          // });
          // _this.selected.splice(0, 0, ...data.expenses);

          _this.loader = false;
          return resolve();
        })["catch"](function (error) {
          return reject();
          console.log(error);
          console.log(error.response);

          _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);

          _this.loader = false;
        });
      });
    },
    getDataFromApi: function getDataFromApi() {
      var _this3 = this;

      var _this = this;

      _this.loading = true;
      return new Promise(function (resolve, reject) {
        var _this3$options = _this3.options,
            sortBy = _this3$options.sortBy,
            sortDesc = _this3$options.sortDesc,
            page = _this3$options.page,
            itemsPerPage = _this3$options.itemsPerPage;
        var range = _this.date_range;
        var user_id = _this.form.user.id;
        axios.get("/api/expenses", {
          params: {
            page: page,
            itemsPerPage: itemsPerPage,
            start_date: range[0],
            end_date: range[1] ? range[1] : range[0],
            user_id: user_id,
            expense_report_id: _this.$route.params.id,
            update_report: true
          }
        }).then(function (response) {
          // _this.selected = [];
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
    loadExpenses: function loadExpenses(emp_id) {
      var start_date = this.date_range[0];
      var end_date = this.date_range[1];

      var _this = this;

      return new Promise(function (resolve, reject) {
        axios.get("/api/data/expenses", {
          params: {
            update_report: true,
            user_id: emp_id,
            start_date: start_date,
            end_date: end_date,
            expense_report_id: _this.$route.params.id
          }
        }).then(function (response) {
          _this.selected = response.data.data; // _this.total = response.data.total;

          return resolve();
        })["catch"](function (error) {
          return reject();
          console.log(error);
          console.log(error.response);

          _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
        });
      });
    },
    onRefresh: function onRefresh() {
      Object.assign(this.$data, this.$options.data.apply(this));
    },
    onSave: function onSave() {
      var _this = this;

      _this.$refs.form.validate();

      if (_this.selected.length == 0) {
        _this.$dialog.message.error("No Expenses selected", {
          position: "top-right",
          timeout: 2000
        });

        return;
      }

      if (_this.$refs.form.validate()) {
        _this.loader = true;
        axios.put("/api/expense_reports/" + _this.$route.params.id, {
          code: _this.form.code,
          description: _this.form.description,
          remarks: _this.form.remarks,
          notes: _this.form.notes,
          user_id: _this.form.user.id,
          expenses: _this.selected
        }).then(function (response) {
          _this.$dialog.message.success("Expense Report updated successfully.", {
            position: "top-right",
            timeout: 2000
          }); // _this.$store.dispatch("AUTH_USER");


          _this.$router.push({
            name: "user.expense_reports.index"
          });
        })["catch"](function (error) {
          _this.loader = false;
          console.log(error);
          console.log(error.response);

          _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
        });
        return;
      }
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
    selected: function selected() {
      this.total = this.selected.reduce(function (total, item) {
        return total + item.amount;
      }, 0);
    }
  },
  computed: {
    params: function params(nv) {
      var _objectSpread2;

      return _objectSpread(_objectSpread({}, this.options), {}, (_objectSpread2 = {
        query: this.date_range
      }, _defineProperty(_objectSpread2, "query", this.expense_report_id), _defineProperty(_objectSpread2, "query", this.form.user.id), _objectSpread2));
    },
    default_description: function default_description() {
      return "Expense Report Summary (".concat(moment__WEBPACK_IMPORTED_MODULE_0___default()(this.date_range[0]).format("LL"), " - ").concat(moment__WEBPACK_IMPORTED_MODULE_0___default()(this.date_range[1]).format("LL"), ")");
    }
  },
  created: function created() {
    var _this5 = this;

    // this.$store.dispatch("AUTH_USER");
    var _this = this;

    this.getData().then(function () {
      _this5.loadExpenses(_this5.form.user.id).then(function () {
        _this5.getDataFromApi().then(function (data) {
          _this.items = data.items;
          _this.totalItems = data.total;
        });
      });
    });
  },
  activated: function activated() {
    var _this6 = this;

    // this.$store.dispatch("AUTH_USER");
    var _this = this;

    this.getData().then(function () {
      _this6.loadExpenses(_this6.form.user.id).then(function () {
        _this6.getDataFromApi().then(function (data) {
          _this.items = data.items;
          _this.totalItems = data.total;
        });
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/Edit.vue?vue&type=template&id=6195f4ce&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/expense_reports/Edit.vue?vue&type=template&id=6195f4ce& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
                    [_vm._v("\n        Loading, Please wait...\n      ")]
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
                    _vm._v("Edit Expense Report")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-container",
                [
                  _c(
                    "v-card",
                    { staticClass: "mx-auto mb-4", attrs: { flat: "" } },
                    [
                      _c(
                        "v-form",
                        {
                          ref: "form",
                          model: {
                            value: _vm.valid,
                            callback: function($$v) {
                              _vm.valid = $$v
                            },
                            expression: "valid"
                          }
                        },
                        [
                          _c(
                            "v-container",
                            [
                              _c(
                                "div",
                                { staticClass: "overline green--text" },
                                [_vm._v("BASIC DETAILS")]
                              ),
                              _vm._v(" "),
                              _c("DateRangePicker", {
                                attrs: {
                                  preset: _vm.preset,
                                  presets: _vm.presets,
                                  value: _vm.date_range,
                                  solo: false,
                                  buttonType: false,
                                  buttonColor: "white",
                                  buttonDark: false
                                },
                                on: { updateDates: _vm.updateDates }
                              }),
                              _vm._v(" "),
                              _c("v-combobox", {
                                attrs: {
                                  rules: _vm.mixin_validation.required.concat(
                                    _vm.mixin_validation.minLength(100)
                                  ),
                                  counter: 100,
                                  items: [_vm.default_description],
                                  "error-messages": _vm.errors.description,
                                  label: "Description"
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.description = []
                                  }
                                },
                                model: {
                                  value: _vm.form.description,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "description", $$v)
                                  },
                                  expression: "form.description"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "overline green--text" },
                                [_vm._v("Expenses")]
                              ),
                              _vm._v(" "),
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
                                      key: "top",
                                      fn: function() {
                                        return [
                                          _vm.selected.length > 0
                                            ? _c(
                                                "div",
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "d-inline" },
                                                    [
                                                      _vm._v(
                                                        "\n                    " +
                                                          _vm._s(
                                                            _vm.selected.length
                                                          ) +
                                                          " Item(s) Selected\n                  "
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-btn",
                                                    {
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          _vm.selected = []
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        " Clear All Selected "
                                                      )
                                                    ]
                                                  )
                                                ],
                                                1
                                              )
                                            : _vm._e()
                                        ]
                                      },
                                      proxy: true
                                    },
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
                                                        "\n                          " +
                                                          _vm._s(
                                                            item.description
                                                          ) +
                                                          "\n                        "
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
                                                        "\n                          " +
                                                          _vm._s(
                                                            item.receipt_number
                                                          ) +
                                                          "\n                        "
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
                                                        "\n                          " +
                                                          _vm._s(
                                                            item.vendor == null
                                                              ? ""
                                                              : item.vendor.name
                                                          ) +
                                                          "\n                        "
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
                                            "\n                " +
                                              _vm._s(
                                                _vm.mixin_getHumanDate(
                                                  item.updated_at
                                                )
                                              ) +
                                              "\n              "
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
                                            "\n                " +
                                              _vm._s(
                                                _vm.mixin_formatNumber(
                                                  item.amount
                                                )
                                              ) +
                                              "\n              "
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
                                            "\n                " +
                                              _vm._s(
                                                _vm.mixin_formatNumber(
                                                  item.amount -
                                                    item.reimbursable_amount
                                                )
                                              ) +
                                              "\n              "
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
                                                    "/expenses/" + item.id
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                  mdi-eye\n                "
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
                              _c("v-textarea", {
                                attrs: { label: "Remarks", rules: [], rows: 3 },
                                model: {
                                  value: _vm.form.remarks,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "remarks", $$v)
                                  },
                                  expression: "form.remarks"
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
                        "v-card-actions",
                        [
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "green", dark: "" },
                              on: { click: _vm.onSave }
                            },
                            [_vm._v("Save")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.$router.go(-1)
                                }
                              }
                            },
                            [_vm._v(" Cancel ")]
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

/***/ "./resources/js/views/modules/user/expense_reports/Edit.vue":
/*!******************************************************************!*\
  !*** ./resources/js/views/modules/user/expense_reports/Edit.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_6195f4ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=6195f4ce& */ "./resources/js/views/modules/user/expense_reports/Edit.vue?vue&type=template&id=6195f4ce&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/user/expense_reports/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_6195f4ce___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_6195f4ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/user/expense_reports/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/user/expense_reports/Edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/modules/user/expense_reports/Edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/user/expense_reports/Edit.vue?vue&type=template&id=6195f4ce&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/modules/user/expense_reports/Edit.vue?vue&type=template&id=6195f4ce& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_6195f4ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=6195f4ce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/Edit.vue?vue&type=template&id=6195f4ce&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_6195f4ce___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_6195f4ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);