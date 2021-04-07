(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[78],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/payments/Create.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/payments/Create.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_datepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/datepicker/DateRangePicker */ "./resources/js/components/datepicker/DateRangePicker.vue");
/* harmony import */ var _components_selector_dialog_UserDialogSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/selector/dialog/UserDialogSelector */ "./resources/js/components/selector/dialog/UserDialogSelector.vue");
/* harmony import */ var _services_ExpenseReportDataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/ExpenseReportDataService */ "./resources/js/services/ExpenseReportDataService.js");
/* harmony import */ var _services_PaymentDataService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/PaymentDataService */ "./resources/js/services/PaymentDataService.js");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DateRangePicker: _components_datepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_1__["default"],
    UserDialogSelector: _components_selector_dialog_UserDialogSelector__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    var _ref;

    return _ref = {
      loading: true,
      formDataLoaded: false,
      valid: false,
      menu: false,
      menu_payee: false,
      search: "",
      usersParameters: {
        params: {
          with_expense_types: true,
          is_superadmin: false
        }
      },
      date_range: [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("week").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("week").format("YYYY-MM-DD")],
      preset: "",
      presets: ["Today", "Last 7 Days", "Last 30 Days", "This Week", "This Month", "This Year"],
      headers: [{
        text: "Period",
        value: "period",
        sortable: false
      }, {
        text: "Code",
        value: "code",
        sortable: false
      }, {
        text: "Description",
        value: "description",
        sortable: false
      }, {
        text: "Amount",
        value: "total",
        sortable: false
      }, {
        text: "Balance",
        value: "balance",
        sortable: false
      }, {
        text: "Payment",
        value: "balance",
        sortable: false
      }, {
        text: "",
        value: "actions",
        sortable: false
      }, {
        text: "",
        value: "data-table-expand",
        sortable: false
      }],
      items: [],
      selected: [],
      users: [],
      total: 0,
      totalAmount: 0,
      totalItems: 0
    }, _defineProperty(_ref, "search", ""), _defineProperty(_ref, "options", {
      sortBy: ["created_at"],
      sortDesc: [true],
      page: 1,
      itemsPerPage: 10
    }), _defineProperty(_ref, "form", {
      id: 0,
      code: "",
      reference_no: "",
      voucher_no: "",
      description: "",
      date: moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD"),
      cheque_no: "",
      cheque_date: "",
      amount: "",
      payee: "",
      payee_address: "",
      payee_phone: "",
      remarks: "",
      notes: "",
      user: null
    }), _defineProperty(_ref, "errors", {
      user_id: [],
      code: [],
      reference_no: [],
      voucher_no: [],
      description: [],
      date: [],
      cheque_no: [],
      cheque_date: [],
      amount: [],
      payee: [],
      payee_address: [],
      payee_phone: [],
      remarks: [],
      notes: [],
      expense_reports: []
    }), _ref;
  },
  methods: {
    selectUser: function selectUser(e) {
      if (e == null || e == undefined) {
        this.form.user = null;
        return;
      }

      this.form.user = e;
    },
    resetUser: function resetUser() {
      this.form.user = null;
    },
    onRefresh: function onRefresh() {
      Object.assign(this.$data, this.$options.data.apply(this));
    },
    updateDates: function updateDates(e) {
      var _this = this;

      this.date_range = e; // this.loadExpenseReports();

      this.getDataFromApi().then(function (data) {
        _this.items = data.items;
        _this.totalItems = data.total;
      });
    },
    updateUser: function updateUser() {
      var _this2 = this;

      this.errors.user_id = [];
      this.getDataFromApi().then(function (data) {
        _this2.items = data.items;
        _this2.totalItems = data.total;
      });
    },
    getDataFromApi: function getDataFromApi() {
      var _this3 = this;

      this.loading = true;
      return new Promise(function (resolve, reject) {
        var _this3$options = _this3.options,
            sortBy = _this3$options.sortBy,
            sortDesc = _this3$options.sortDesc,
            page = _this3$options.page,
            itemsPerPage = _this3$options.itemsPerPage;

        var search = _this3.search.trim().toLowerCase();

        var status = _this3.status;
        var user_id = _this3.form.user ? _this3.form.user.id : null;
        var range = _this3.date_range;
        _services_ExpenseReportDataService__WEBPACK_IMPORTED_MODULE_3__["default"].getAll({
          params: {
            search: search,
            sortBy: sortBy[0],
            sortType: sortDesc[0] ? "desc" : "asc",
            page: page,
            itemsPerPage: itemsPerPage,
            status: status,
            user_id: user_id,
            start_date: range[0],
            end_date: range[1] ? range[1] : range[0],
            admin_page: true,
            create_payment: true
          }
        }).then(function (response) {
          var items = response.data.data;
          var total = response.data.meta.total;
          _this3.loading = false;
          _this3.formDataLoaded = true;
          resolve({
            items: items,
            total: total
          });
        })["catch"](function (error) {
          _this3.mixin_showErrors(error);

          _this3.loading = false;
          _this3.formDataLoaded = true;
          reject();
        });
      });
    },
    onSave: function onSave() {
      var _this4 = this;

      this.$refs.form.validate();

      if (!this.form.user) {
        this.mixin_errorDialog("Error", "No Employee selected.");
        return;
      }

      if (this.selected == 0) {
        this.mixin_errorDialog("Error", "No Expense Report selected.");
        return;
      }

      if (this.$refs.form.validate()) {
        this.formDataLoaded = false;
        _services_PaymentDataService__WEBPACK_IMPORTED_MODULE_4__["default"].store({
          code: this.form.code,
          reference_no: this.form.reference_no,
          voucher_no: this.form.voucher_no,
          description: this.form.description,
          date: this.form.date,
          cheque_no: this.form.cheque_no,
          cheque_date: this.form.cheque_date,
          amount: this.total,
          payee: this.form.payee,
          payee_address: this.form.payee_address,
          payee_phone: this.form.payee_phone,
          remarks: this.form.remarks,
          notes: this.form.notes,
          expense_reports: this.selected,
          user_id: this.form.user ? this.form.user.id : null
        }).then(function (response) {
          _this4.onRefresh();

          _this4.mixin_successDialog(response.data.status, response.data.message);

          _this4.$store.dispatch("AUTH_NOTIFICATIONS");

          _this4.$router.push({
            name: "admin.payments.index"
          });
        })["catch"](function (error) {
          _this4.mixin_showErrors(error);

          _this4.errors = error.response.data.errors;
          _this4.formDataLoaded = true;
        });
        return;
      }
    }
  },
  computed: {
    params: function params(nv) {
      var _objectSpread2;

      return _objectSpread(_objectSpread({}, this.options), {}, (_objectSpread2 = {
        query: this.search
      }, _defineProperty(_objectSpread2, "query", this.user), _defineProperty(_objectSpread2, "query", this.date_range), _objectSpread2));
    },
    maxDate: function maxDate() {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD");
    }
  },
  watch: {
    params: {
      immediate: true,
      deep: true,
      handler: function handler() {
        var _this5 = this;

        this.getDataFromApi().then(function (data) {
          _this5.items = data.items;
          _this5.totalItems = data.total;
        });
      }
    },
    selected: function selected() {
      this.totalAmount = this.mixin_formatNumber(this.selected.reduce(function (total, item) {
        return total + item.total;
      }, 0));
    },
    "form.user": function formUser() {
      var _this6 = this;

      this.getDataFromApi().then(function (data) {
        _this6.items = data.items;
        _this6.totalItems = data.total;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/payments/Create.vue?vue&type=template&id=1a081f87&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/payments/Create.vue?vue&type=template&id=1a081f87& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
                    _vm._v("New Payment Record")
                  ])
                ],
                1
              ),
              _vm._v(" "),
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
                        "v-card",
                        { staticClass: "mx-auto mb-4", attrs: { flat: "" } },
                        [
                          _c(
                            "v-container",
                            [
                              _c(
                                "div",
                                { staticClass: "overline green--text" },
                                [
                                  _vm._v(
                                    "\n                            BASIC DETAILS\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-menu",
                                {
                                  ref: "menu",
                                  attrs: {
                                    transition: "scale-transition",
                                    "offset-y": "",
                                    "min-width": "290px"
                                  },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "activator",
                                      fn: function(ref) {
                                        var on = ref.on
                                        var attrs = ref.attrs
                                        return [
                                          _c(
                                            "v-text-field",
                                            _vm._g(
                                              _vm._b(
                                                {
                                                  attrs: {
                                                    "error-messages":
                                                      _vm.errors.date,
                                                    label: "Date",
                                                    readonly: ""
                                                  },
                                                  on: {
                                                    input: function($event) {
                                                      _vm.errors.date = []
                                                    }
                                                  },
                                                  model: {
                                                    value: _vm.form.date,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.form,
                                                        "date",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "form.date"
                                                  }
                                                },
                                                "v-text-field",
                                                attrs,
                                                false
                                              ),
                                              on
                                            )
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
                                  _c("v-date-picker", {
                                    attrs: {
                                      "no-title": "",
                                      scrollable: "",
                                      color: "success",
                                      max: _vm.maxDate
                                    },
                                    model: {
                                      value: _vm.form.date,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "date", $$v)
                                      },
                                      expression: "form.date"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  value: _vm.form.user
                                    ? _vm.form.user.full_name
                                    : "No Employee",
                                  "error-messages": _vm.errors.user_id,
                                  label: "Employee",
                                  readonly: ""
                                },
                                on: {
                                  input: function($event) {
                                    _vm.errors.user_id = []
                                  }
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "append",
                                    fn: function() {
                                      return [
                                        _c("UserDialogSelector", {
                                          ref: "userDialogSelector",
                                          attrs: {
                                            selectedUser: _vm.form.user,
                                            usersParameters: _vm.usersParameters
                                          },
                                          on: {
                                            selectUser: _vm.selectUser,
                                            onReset: _vm.resetUser
                                          },
                                          scopedSlots: _vm._u([
                                            {
                                              key: "openDialog",
                                              fn: function(ref) {
                                                var bind = ref.bind
                                                var on = ref.on
                                                return [
                                                  _c(
                                                    "v-btn",
                                                    _vm._g(
                                                      _vm._b(
                                                        {
                                                          attrs: {
                                                            fab: "",
                                                            color: "primary",
                                                            text: "",
                                                            "x-small": ""
                                                          }
                                                        },
                                                        "v-btn",
                                                        bind,
                                                        false
                                                      ),
                                                      on
                                                    ),
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        { attrs: { dark: "" } },
                                                        [_vm._v("mdi-magnify")]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ]
                                              }
                                            }
                                          ])
                                        })
                                      ]
                                    },
                                    proxy: true
                                  }
                                ])
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  rules: _vm.mixin_validation.required.concat(
                                    _vm.mixin_validation.minLength(100)
                                  ),
                                  counter: 100,
                                  "error-messages": _vm.errors.description,
                                  label: "Description",
                                  required: ""
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
                              _c("v-text-field", {
                                attrs: {
                                  rules: [],
                                  counter: 100,
                                  label: "Voucher No.",
                                  required: ""
                                },
                                model: {
                                  value: _vm.form.voucher_no,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "voucher_no", $$v)
                                  },
                                  expression: "form.voucher_no"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "overline green--text mb-4" },
                                [
                                  _vm._v(
                                    "\n                            Expense Reports\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _vm.errors.expense_reports &&
                              _vm.errors.expense_reports.length > 0
                                ? _c("small", { staticClass: "red--text" }, [
                                    _vm._v(
                                      _vm._s(_vm.errors.expense_reports[0])
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
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
                                        key: "top",
                                        fn: function() {
                                          return [
                                            _c("DateRangePicker", {
                                              ref: "dateRangePicker",
                                              attrs: {
                                                dateRange: _vm.date_range
                                              },
                                              on: {
                                                "on-change": _vm.updateDates
                                              },
                                              scopedSlots: _vm._u([
                                                {
                                                  key: "openDialog",
                                                  fn: function(ref) {
                                                    var on = ref.on
                                                    var attrs = ref.attrs
                                                    var dateRangeText =
                                                      ref.dateRangeText
                                                    return [
                                                      _c(
                                                        "v-text-field",
                                                        _vm._g(
                                                          _vm._b(
                                                            {
                                                              attrs: {
                                                                label: "Date",
                                                                readonly: "",
                                                                value: dateRangeText
                                                              }
                                                            },
                                                            "v-text-field",
                                                            attrs,
                                                            false
                                                          ),
                                                          on
                                                        )
                                                      )
                                                    ]
                                                  }
                                                }
                                              ])
                                            }),
                                            _vm._v(" "),
                                            _vm.selected.length > 0
                                              ? _c(
                                                  "div",
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass: "d-inline"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                        " +
                                                            _vm._s(
                                                              _vm.selected
                                                                .length
                                                            ) +
                                                            " Item(s)\n                                        Selected\n                                    "
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
                                                          "\n                                        Clear All Selected\n                                    "
                                                        )
                                                      ]
                                                    )
                                                  ],
                                                  1
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
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
                                          ]
                                        },
                                        proxy: true
                                      },
                                      {
                                        key: "item.period",
                                        fn: function(ref) {
                                          var item = ref.item
                                          return [
                                            _vm._v(
                                              "\n                                " +
                                                _vm._s(item.from) +
                                                " ~ " +
                                                _vm._s(item.to) +
                                                "\n                            "
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
                                                      "/admin/expense_reports/" +
                                                        item.id
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
                                                attrs: {
                                                  colspan: headers.length
                                                }
                                              },
                                              [
                                                _c("v-container", [
                                                  _c("table", [
                                                    _c("tr", [
                                                      _c("td", [
                                                        _c("strong", [
                                                          _vm._v("Created")
                                                        ])
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [_vm._v(":")]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          "\n                                                    " +
                                                            _vm._s(
                                                              _vm.mixin_formatDate(
                                                                item.created_at,
                                                                "YYYY-MM-DD HH:mm:ss"
                                                              )
                                                            ) +
                                                            "\n                                                "
                                                        )
                                                      ])
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("tr", [
                                                      _c("td", [
                                                        _c("strong", [
                                                          _vm._v(
                                                            "Reimbursable\n                                                        Amount"
                                                          )
                                                        ])
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [_vm._v(":")]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          "\n                                                    " +
                                                            _vm._s(
                                                              _vm.mixin_formatNumber(
                                                                item.total_reimbursable
                                                              )
                                                            ) +
                                                            "\n                                                "
                                                        )
                                                      ])
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("tr", [
                                                      _c("td", [
                                                        _c("strong", [
                                                          _vm._v("Paid")
                                                        ])
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [_vm._v(":")]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          "\n                                                    " +
                                                            _vm._s(
                                                              _vm.mixin_formatNumber(
                                                                item.paid
                                                              )
                                                            ) +
                                                            "\n                                                "
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
                                                          _c("td", [
                                                            _vm._v(":")
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("td", [
                                                            _vm._v(
                                                              "\n                                                    " +
                                                                _vm._s(
                                                                  _vm.mixin_formatNumber(
                                                                    item.balance
                                                                  )
                                                                ) +
                                                                "\n                                                "
                                                            )
                                                          ])
                                                        ])
                                                      : _vm._e(),
                                                    _vm._v(" "),
                                                    _c("tr", [
                                                      _c("td", [
                                                        _c("strong", [
                                                          _vm._v("Status")
                                                        ])
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [_vm._v(":")]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          "\n                                                    " +
                                                            _vm._s(
                                                              item.status.status
                                                            ) +
                                                            "\n                                                    (" +
                                                            _vm._s(
                                                              item.status
                                                                .remarks
                                                            ) +
                                                            ")\n                                                "
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
                                                          _c("td", [
                                                            _vm._v(":")
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("td", [
                                                            _vm._v(
                                                              _vm._s(
                                                                item.remarks
                                                              )
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
                                              "\n                                " +
                                                _vm._s(
                                                  _vm.mixin_formatNumber(
                                                    item.total
                                                  )
                                                ) +
                                                "\n                            "
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
                                              "\n                                " +
                                                _vm._s(
                                                  item.last_name +
                                                    ", " +
                                                    item.first_name
                                                ) +
                                                "\n                            "
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
                                          {
                                            staticClass:
                                              "green--text hidden-md-and-up"
                                          },
                                          [
                                            _c("td", { staticClass: "title" }, [
                                              _vm._v(
                                                "\n                                        Total:\n                                        "
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
                                          {
                                            staticClass:
                                              "green--text hidden-sm-and-down"
                                          },
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
                              _c("v-textarea", {
                                attrs: { label: "Remarks", rows: "3" },
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
                      )
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
                    [_vm._v("\n                Cancel\n            ")]
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

/***/ "./resources/js/components/datepicker/DateRangePicker.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/datepicker/DateRangePicker.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/vue-loader/lib/index.js):\nError: ENOENT: no such file or directory, open 'C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\resources\\js\\components\\datepicker\\DateRangePicker.vue'");

/***/ }),

/***/ "./resources/js/components/selector/dialog/UserDialogSelector.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/selector/dialog/UserDialogSelector.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/vue-loader/lib/index.js):\nError: ENOENT: no such file or directory, open 'C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\resources\\js\\components\\selector\\dialog\\UserDialogSelector.vue'");

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

/***/ "./resources/js/services/PaymentDataService.js":
/*!*****************************************************!*\
  !*** ./resources/js/services/PaymentDataService.js ***!
  \*****************************************************/
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


var PaymentDataService = /*#__PURE__*/function () {
  function PaymentDataService() {
    _classCallCheck(this, PaymentDataService);
  }

  _createClass(PaymentDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/payments", data);
    }
  }, {
    key: "get",
    value: function get(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/data/payments", data);
    }
  }, {
    key: "show",
    value: function show(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/payments/".concat(id), data);
    }
  }, {
    key: "store",
    value: function store(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/payments", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/payments/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/payments/".concat(id), data);
    }
  }, {
    key: "restore",
    value: function restore(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/payments/restore/".concat(id), data);
    }
  }]);

  return PaymentDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new PaymentDataService());

/***/ }),

/***/ "./resources/js/views/modules/admin/payments/Create.vue":
/*!**************************************************************!*\
  !*** ./resources/js/views/modules/admin/payments/Create.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_1a081f87___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=1a081f87& */ "./resources/js/views/modules/admin/payments/Create.vue?vue&type=template&id=1a081f87&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/payments/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_1a081f87___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_1a081f87___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/payments/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/payments/Create.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/payments/Create.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/payments/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/payments/Create.vue?vue&type=template&id=1a081f87&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/payments/Create.vue?vue&type=template&id=1a081f87& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_1a081f87___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=1a081f87& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/payments/Create.vue?vue&type=template&id=1a081f87&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_1a081f87___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_1a081f87___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);