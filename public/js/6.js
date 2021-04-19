(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/advance_payments/Index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/advance_payments/Index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_datepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/datepicker/DateRangePicker */ "./resources/js/components/datepicker/DateRangePicker.vue");
/* harmony import */ var _components_selector_dialog_UserDialogSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/selector/dialog/UserDialogSelector */ "./resources/js/components/selector/dialog/UserDialogSelector.vue");
/* harmony import */ var _services_AdvancePaymentDataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/AdvancePaymentDataService */ "./resources/js/services/AdvancePaymentDataService.js");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DateRangePicker: _components_datepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_1__["default"],
    UserDialogSelector: _components_selector_dialog_UserDialogSelector__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      formDataLoaded: false,
      headers: [{
        text: "Date",
        value: "date"
      }, {
        text: "CAL No.",
        value: "cal_no"
      }, {
        text: "Employee",
        value: "user",
        sortable: false
      }, {
        text: "Amount",
        value: "amount",
        sortable: false
      }, {
        text: "Remaining",
        value: "remaining_amount",
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
      meta: {
        current_page: 0,
        from: 0,
        last_page: 0,
        path: "",
        per_page: 10,
        to: 0,
        total: 0
      },
      totalAmount: 0,
      totalRemainingAmount: 0,
      user: null,
      users: [],
      date_range: [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("month").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("month").format("YYYY-MM-DD")],
      status: "All Advance Payments",
      statuses: ["All Advance Payments", "Pending Advance Payments", "Approved Advance Payments", "Cancelled Advance Payments", "Archived Advance Payments"],
      selected: [],
      search: "",
      options: {
        sortBy: ["created_at"],
        sortDesc: [true],
        page: 1,
        itemsPerPage: 10
      }
    };
  },
  methods: {
    selectUser: function selectUser(e) {
      this.selected = [];

      if (e == null || e == undefined) {
        this.user = null;
        return;
      }

      this.user = e;
    },
    onSearch: function onSearch() {
      var _this = this;

      console.log(this.search);
      this.getDataFromApi().then(function (data) {
        _this.items = data.items;
        _this.meta = data.meta;
        _this.formDataLoaded = true;
      });
    },
    resetUser: function resetUser() {
      this.selected = [];
      this.user = null;
    },
    updateDates: function updateDates(e) {
      this.date_range = e;
    },
    getDataFromApi: function getDataFromApi() {
      var _this2 = this;

      this.loading = true;
      return new Promise(function (resolve, reject) {
        var _this2$options = _this2.options,
            sortBy = _this2$options.sortBy,
            sortDesc = _this2$options.sortDesc,
            page = _this2$options.page,
            itemsPerPage = _this2$options.itemsPerPage;

        var search = _this2.search.trim().toLowerCase();

        var status = _this2.status;
        var user_id = _this2.user ? _this2.user.id : null;
        var range = _this2.date_range;
        _services_AdvancePaymentDataService__WEBPACK_IMPORTED_MODULE_3__["default"].getAll({
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
          var meta = response.data.meta;
          console.log(response.data);
          _this2.formDataLoaded = true;
          resolve({
            items: items,
            meta: meta
          });
        })["catch"](function (error) {
          _this2.mixin_showErrors(error);

          _this2.formDataLoaded = true;
          reject();
        });
      });
    },
    onRefresh: function onRefresh() {
      Object.assign(this.$data, this.$options.data.apply(this));
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
        name: "admin.advance_payments.show",
        params: params
      });
    },
    onEdit: function onEdit(item) {
      // if (item.status.status == "Approved") {
      //     this.mixin_errorDialog("Error", "Report has been approved");
      //     return;
      // }
      // if (item.status.status == "Cancelled") {
      //     this.mixin_errorDialog("Error", "Report has been cancelled");
      //     return;
      // }
      // if (item.status.status == "Paid/Reimbursed") {
      //     this.mixin_errorDialog(
      //         "Error",
      //         "Paid/reimbursed expense report can't be edited"
      //     );
      //     return;
      // }
      this.$router.push({
        name: "admin.advance_payments.edit",
        params: {
          id: item.id
        }
      });
    },
    onDelete: function onDelete() {
      var _this3 = this;

      // if (
      //     this.selected
      //         .map(item => item.status.status)
      //         .includes("Cancelled")
      // ) {
      //     this.mixin_errorDialog(
      //         "Error",
      //         "Report has already been cancelled"
      //     );
      //     return;
      // }
      // if (
      //     this.selected
      //         .map(item => item.status.status)
      //         .includes("Paid/Reimbursed")
      // ) {
      //     this.mixin_errorDialog(
      //         "Error",
      //         "Paid/reimbursed expense reports can't be cancelled"
      //     );
      //     return;
      // }
      // if (this.selected.length == 0) {
      //     this.mixin_errorDialog("Error", "No item(s) selected");
      //     return;
      // }
      this.$confirm("Do you want to delete advance payment(s)?").then(function (res) {
        if (res) {
          var ids = _this3.selected.map(function (item) {
            return item.id;
          });

          _services_AdvancePaymentDataService__WEBPACK_IMPORTED_MODULE_3__["default"]["delete"](ids).then(function (response) {
            _this3.mixin_successDialog(response.data.status, response.data.message);

            _this3.getDataFromApi().then(function (data) {
              _this3.items = data.items;
              _this3.meta = data.meta;
              _this3.formDataLoaded = true;
            });

            _this3.selected = [];
          })["catch"](function (error) {
            _this3.mixin_showErrors(error);
          });
        }
      });
    },
    onUpdate: function onUpdate(action, method) {
      var _this4 = this;

      var url = "";
      var ids = this.selected.map(function (item) {
        return item.id;
      });

      switch (action) {
        case "approve":
          url = "/api/advance_payments/approve_payment/".concat(ids);
          break;

        case "return":
          url = "/api/advance_payments/return_payment/".concat(ids);
          break;

        case "unreturn":
          url = "/api/advance_payments/return_payment/".concat(ids, "?unreturn=true");
          break;

        case "cancel":
          url = "/api/advance_payments/cancel_payment/".concat(ids);
          break;

        case "restore":
          url = "/api/advance_payments/restore/".concat(ids);
          break;

        default:
          url = "/api/advance_payments/".concat(ids);
          break;
      }

      this.$confirm("Do you want to ".concat(action, " advance payments(s)?")).then(function (res) {
        if (res) {
          axios({
            method: method,
            url: url
          }).then(function (response) {
            _this4.mixin_successDialog(response.data.status, response.data.message);

            _this4.getDataFromApi().then(function (data) {
              _this4.items = data.items;
              _this4.meta = data.meta;
              _this4.formDataLoaded = true;
            });

            _this4.selected = [];

            _this4.$store.dispatch("AUTH_NOTIFICATIONS");
          })["catch"](function (error) {
            _this4.mixin_showErrors(error);
          });
        }
      });
    },
    onApprove: function onApprove() {
      this.onUpdate("approve", "put");
    },
    onCancel: function onCancel() {
      this.onUpdate("cancel", "put");
    },
    onRestore: function onRestore() {
      this.onUpdate("restore", "put");
    },
    onReturn: function onReturn(action) {
      if (action == "return") {
        this.onUpdate("return", "put");
        return;
      }

      this.onUpdate("unreturn", "put");
    },
    show_edit: function show_edit(item) {
      // let item = null;
      // if (!this.mixin_can("edit advance payments")) {
      //     return false;
      // }
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
      immediate: true,
      deep: true,
      handler: function handler() {
        var _this5 = this;

        this.getDataFromApi().then(function (data) {
          _this5.items = data.items;
          _this5.meta = data.meta;
          _this5.formDataLoaded = true;
        });
      }
    },
    search: function search() {
      var _this6 = this;

      if (this.search == "") {
        this.getDataFromApi().then(function (data) {
          _this6.items = data.items;
          _this6.meta = data.meta;
          _this6.formDataLoaded = true;
        });
      }
    },
    items: function items() {
      this.meta.total = this.mixin_formatNumber(this.items.reduce(function (total, item) {
        return total + item.total;
      }, 0));
      this.totalAmount = this.mixin_formatNumber(this.items.reduce(function (total, item) {
        return total + item.amount;
      }, 0));
      this.totalRemainingAmount = this.mixin_formatNumber(this.items.reduce(function (total, item) {
        return total + item.remaining_amount;
      }, 0));
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
    selectedCount: function selectedCount() {
      var approved = this.selected.filter(function (item) {
        return item.approved_at != null && item.cancelled_at == null && item.deleted_at == null;
      }).length;
      var cancelled = this.selected.filter(function (item) {
        return item.cancelled_at != null && item.deleted_at == null;
      }).length;
      var deleted = this.selected.filter(function (item) {
        return item.deleted_at != null;
      }).length;
      return {
        approved: approved,
        cancelled: cancelled,
        deleted: deleted
      };
    },
    isValidApprove: function isValidApprove() {
      var selectedCount = this.selected.length;

      if (selectedCount == 0) {
        return false;
      }

      if (this.selectedCount.approved > 0 || this.selectedCount.rejected > 0 || this.selectedCount.deleted > 0) {
        return false;
      }

      return true;
    },
    isValidCancel: function isValidCancel() {
      var selectedCount = this.selected.length;

      if (selectedCount == 0) {
        return false;
      }

      if (this.selectedCount.cancelled > 0 || this.selectedCount.deleted > 0) {
        return false;
      }

      return true;
    },
    isValidDelete: function isValidDelete() {
      var selectedCount = this.selected.length;

      if (selectedCount == 0) {
        return false;
      }

      if (this.selectedCount.deleted > 0) {
        return false;
      }

      return true;
    }
  },
  activated: function activated() {
    var _this7 = this;

    this.$store.dispatch("AUTH_NOTIFICATIONS");
    this.$store.dispatch("AUTH_SETTINGS");
    this.getDataFromApi().then(function (data) {
      _this7.items = data.items;
      _this7.meta = data.meta;
      _this7.formDataLoaded = true;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/advance_payments/Index.vue?vue&type=template&id=4bf8c9f4&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/advance_payments/Index.vue?vue&type=template&id=4bf8c9f4& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
                    _vm._v("Advance Payments")
                  ]),
                  _vm._v(" "),
                  _c("v-spacer"),
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
                                        to: {
                                          name: "admin.advance_payments.create"
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
                      ])
                    },
                    [_vm._v(" "), _c("span", [_vm._v("Add New Request")])]
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
                  _c("UserDialogSelector", {
                    ref: "userDialogSelector",
                    attrs: {
                      selectedUser: _vm.user,
                      usersParameters: { params: { is_superadmin: false } }
                    },
                    on: { selectUser: _vm.selectUser, onReset: _vm.resetUser },
                    scopedSlots: _vm._u([
                      {
                        key: "openDialog",
                        fn: function(ref) {
                          var bind = ref.bind
                          var on = ref.on
                          var computedSelectedUser = ref.computedSelectedUser
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
                    ])
                  }),
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
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.selected.length > 0
                ? _c(
                    "v-row",
                    { staticClass: "ml-4" },
                    [
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
                      _c(
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
                          on: {
                            "click:close": function($event) {
                              return _vm.onReturn("return")
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                Mark as Returned\n            "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
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
                          on: {
                            "click:close": function($event) {
                              return _vm.onReturn("unreturn")
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                Mark as Unreturned\n            "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm.isValidCancel
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
                              on: { "click:close": _vm.onCancel }
                            },
                            [_vm._v("\n                Cancel\n            ")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "v-chip",
                        {
                          staticClass: "mr-2",
                          attrs: {
                            close: "",
                            small: "",
                            "close-icon": "mdi-restore",
                            color: "green",
                            dark: ""
                          },
                          on: { "click:close": _vm.onRestore }
                        },
                        [_vm._v("\n                Restore\n            ")]
                      ),
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
                            [_vm._v("\n                Delete\n            ")]
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
                        loading: !_vm.formDataLoaded,
                        options: _vm.options,
                        "server-items-length": _vm.meta.last_page,
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
                                    _vm._v(
                                      _vm._s(
                                        _vm.totalRemainingAmount +
                                          " / " +
                                          _vm.totalAmount
                                      )
                                    )
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
                                _c("td", [
                                  _c("strong", [
                                    _vm._v(_vm._s(_vm.totalRemainingAmount))
                                  ])
                                ]),
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

/***/ "./resources/js/services/AdvancePaymentDataService.js":
/*!************************************************************!*\
  !*** ./resources/js/services/AdvancePaymentDataService.js ***!
  \************************************************************/
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


var AdvancePaymentDataService = /*#__PURE__*/function () {
  function AdvancePaymentDataService() {
    _classCallCheck(this, AdvancePaymentDataService);
  }

  _createClass(AdvancePaymentDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/advance_payments", data);
    }
  }, {
    key: "get",
    value: function get(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/data/advance_payments", data);
    }
  }, {
    key: "show",
    value: function show(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/advance_payments/".concat(id), data);
    }
  }, {
    key: "store",
    value: function store(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/advance_payments", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/advance_payments/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/advance_payments/".concat(id), data);
    }
  }, {
    key: "restore",
    value: function restore(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/advance_payments/restore/".concat(id), data);
    }
  }, {
    key: "approve",
    value: function approve(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/advance_payments/approve_payment/".concat(id), data);
    }
  }, {
    key: "cancel",
    value: function cancel(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/advance_payments/cancel_payment/".concat(id), data);
    }
  }]);

  return AdvancePaymentDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new AdvancePaymentDataService());

/***/ }),

/***/ "./resources/js/views/modules/admin/advance_payments/Index.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/views/modules/admin/advance_payments/Index.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_4bf8c9f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=4bf8c9f4& */ "./resources/js/views/modules/admin/advance_payments/Index.vue?vue&type=template&id=4bf8c9f4&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/advance_payments/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_4bf8c9f4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_4bf8c9f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/advance_payments/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/advance_payments/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/advance_payments/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/advance_payments/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/advance_payments/Index.vue?vue&type=template&id=4bf8c9f4&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/advance_payments/Index.vue?vue&type=template&id=4bf8c9f4& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4bf8c9f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=4bf8c9f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/advance_payments/Index.vue?vue&type=template&id=4bf8c9f4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4bf8c9f4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4bf8c9f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);