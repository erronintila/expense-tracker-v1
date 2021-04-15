(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[104],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/payments/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/payments/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_datepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/datepicker/DateRangePicker */ "./resources/js/components/datepicker/DateRangePicker.vue");
/* harmony import */ var _services_PaymentDataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/PaymentDataService */ "./resources/js/services/PaymentDataService.js");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DateRangePicker: _components_datepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      formDataLoaded: false,
      loading: true,
      headers: [{
        text: "Date",
        value: "date"
      }, {
        text: "User",
        value: "user"
      }, {
        text: "Description",
        value: "description"
      }, {
        text: "Amount",
        value: "amount"
      }, {
        text: "Last Updated",
        value: "updated_at"
      }, {
        text: "Status",
        value: "status.status"
      }, {
        text: "Actions",
        value: "actions",
        sortable: false
      }, {
        text: "",
        value: "data-table-expand"
      }],
      totalAmount: 0,
      items: [],
      user: this.$store.getters.user,
      status: "All Payments",
      statuses: ["All Payments", // "All Advance Payments",
      // "Reported Advance Payments",
      // "Unreported Advance Payments",
      "Released Payments", "Completed Payments", "Cancelled Payments"],
      selected: [],
      search: "",
      totalItems: 0,
      options: {
        sortBy: ["updated_at"],
        sortDesc: [true],
        page: 1,
        itemsPerPage: 10
      },
      date_range: [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("month").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("month").format("YYYY-MM-DD")],
      preset: "",
      presets: ["Today", "Yesterday", "Last 7 Days", "Last 30 Days", "This Week", "This Month", "This Quarter", "This Year", "Last Week", "Last Month", "Last Quarter", "Last Year", "Last 5 Years"]
    };
  },
  methods: {
    updateDates: function updateDates(e) {
      this.date_range = e;
    },
    getDataFromApi: function getDataFromApi() {
      var _this = this;

      this.loading = true;
      return new Promise(function (resolve, reject) {
        var _this$options = _this.options,
            sortBy = _this$options.sortBy,
            sortDesc = _this$options.sortDesc,
            page = _this$options.page,
            itemsPerPage = _this$options.itemsPerPage;

        var search = _this.search.trim().toLowerCase();

        var status = _this.status;
        var range = _this.date_range;
        var user_id = _this.user ? _this.user.id : null;
        _services_PaymentDataService__WEBPACK_IMPORTED_MODULE_3__["default"].getAll({
          params: {
            search: search,
            sortBy: sortBy[0],
            sortType: sortDesc[0] ? "desc" : "asc",
            page: page,
            itemsPerPage: itemsPerPage,
            status: status,
            start_date: range[0],
            end_date: range[1] ? range[1] : range[0],
            user_id: user_id
          }
        }).then(function (response) {
          var items = response.data.data;
          var total = response.data.meta.total;
          _this.loading = false;
          _this.formDataLoaded = true;
          resolve({
            items: items,
            total: total
          });
        })["catch"](function (error) {
          _this.mixin_showErrors(error);

          _this.loading = false;
          _this.formDataLoaded = true;
          reject();
        });
      });
    },
    onRefresh: function onRefresh() {
      Object.assign(this.$data, this.$options.data.apply(this));
      this.selected = [];
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
        name: "user.payments.show",
        params: params
      });
    },
    onEdit: function onEdit(item) {
      this.$router.push({
        name: "user.payments.edit",
        params: {
          id: item.id
        }
      });
    },
    // onDelete() {
    //     if (this.selected.length == 0) {
    //         this.mixin_errorDialog("Error", "No item(s) selected");
    //         return;
    //     }
    //     this.$confirm("do you want to cancel payment?").then(res => {
    //         if (res) {
    //             axios
    //                 .delete(`/api/payments/${this.selected[0].id}`, {
    //                     params: {
    //                         ids: this.selected.map(item => {
    //                             return item.id;
    //                         })
    //                     }
    //                 })
    //                 .then(response => {
    //                      this.mixin_successDialog(response.data.status, response.data.message);
    //                     this.getDataFromApi().then(data => {
    //                         this.items = data.items;
    //                         this.totalItems = data.total;
    //                     });
    //                 })
    //                 .catch(error => {
    //                     this.mixin_showErrors(error);
    //                 });
    //         }
    //     });
    // },
    onUpdate: function onUpdate(action, method) {
      var _this2 = this;

      if (action == "receive" && !this.mixin_can("receive payments")) {
        this.mixin_errorDialog("Error", "Not allowed");
        return;
      }

      if (this.selected.length == 0) {
        this.mixin_errorDialog("Error", "No item(s) selected");
        return;
      }

      if (action == "receive" && this.selected.map(function (item) {
        return item.status.status;
      }).includes("Completed")) {
        this.mixin_errorDialog("Error", "Payment has already been received");
        return;
      }

      this.$confirm("Do you want to ".concat(action, " payment(s)?")).then(function (res) {
        if (res) {
          var ids = _this2.selected.map(function (item) {
            return item.id;
          });

          var url = "";

          switch (action) {
            case "receive":
              url = "/api/payments/receive_payment/".concat(ids);
              break;
            // case "update":
            //     url = `/api/payments/${this.selected[0].id}`;
            //     break;

            default:
              _this2.mixin_errorDialog("Error", "Action can't be processed.");

              return;
              break;
          }

          axios({
            method: method,
            url: url,
            data: {
              ids: ids
            }
          }).then(function (response) {
            _this2.mixin_successDialog(response.data.status, response.data.message);

            _this2.getDataFromApi().then(function (data) {
              _this2.items = data.items;
              _this2.totalItems = data.total;
            });

            _this2.$store.dispatch("AUTH_NOTIFICATIONS");

            _this2.selected = [];
          })["catch"](function (error) {
            _this2.mixin_showErrors(error);
          });
        }
      });
    }
  },
  watch: {
    params: {
      immediate: true,
      deep: true,
      handler: function handler() {
        var _this3 = this;

        this.getDataFromApi().then(function (data) {
          _this3.items = data.items;
          _this3.totalItems = data.total;
        });
      }
    },
    items: function items() {
      this.totalAmount = this.mixin_formatNumber(this.items.reduce(function (total, item) {
        return total + item.amount;
      }, 0));
    }
  },
  computed: {
    params: function params(nv) {
      var _objectSpread2;

      return _objectSpread(_objectSpread({}, this.options), {}, (_objectSpread2 = {
        query: this.search
      }, _defineProperty(_objectSpread2, "query", this.status), _defineProperty(_objectSpread2, "query", this.date_range), _defineProperty(_objectSpread2, "query", this.user), _objectSpread2));
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
    }
  },
  // created() {
  //     this.$store.dispatch("AUTH_USER");
  //     this.$store.dispatch("AUTH_NOTIFICATIONS");
  // },
  activated: function activated() {
    var _this4 = this;

    this.$store.dispatch("AUTH_USER");
    this.$store.dispatch("AUTH_NOTIFICATIONS");
    this.getDataFromApi().then(function (data) {
      _this4.items = data.items;
      _this4.totalItems = data.total;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/payments/Index.vue?vue&type=template&id=5237f146&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/payments/Index.vue?vue&type=template&id=5237f146& ***!
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
              _c("v-card-title", { staticClass: "pt-0" }, [
                _c("h4", { staticClass: "title green--text" }, [
                  _vm._v("Payment Records")
                ])
              ]),
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
                { staticClass: "ml-4" },
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
                              _c(
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
                  _c(
                    "v-chip",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            _vm.selected.length > 0 &&
                            _vm.selected.filter(function(item) {
                              return item.received_at == null
                            }).length > 0,
                          expression:
                            "\n                    selected.length > 0 &&\n                        selected.filter(item => item.received_at == null)\n                            .length > 0\n                "
                        }
                      ],
                      staticClass: "mr-2",
                      attrs: {
                        close: "",
                        small: "",
                        "close-icon": "mdi-download",
                        color: "orange",
                        dark: ""
                      },
                      on: {
                        "click:close": function($event) {
                          return _vm.onUpdate("receive", "put")
                        }
                      }
                    },
                    [_vm._v("\n                Mark as received\n            ")]
                  )
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
                                            _c("strong", [_vm._v("Code")])
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [_vm._v(":")]),
                                          _vm._v(" "),
                                          _c("td", [_vm._v(_vm._s(item.code))])
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("td", [
                                            _c("strong", [
                                              _vm._v("Reference No.")
                                            ])
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [_vm._v(":")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(item.reference_no))
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("td", [
                                            _c("strong", [
                                              _vm._v("Voucher No.")
                                            ])
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [_vm._v(":")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(item.voucher_no))
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
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
                                      ])
                                    ])
                                  ],
                                  1
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
                            key: "item.user",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s("" + item.user.full_name) +
                                    "\n                "
                                )
                              ]
                            }
                          },
                          {
                            key: "item.created_at",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(
                                      _vm.mixin_getHumanDate(item.created_at)
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
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: item.deleted_at == null,
                                        expression: "item.deleted_at == null"
                                      }
                                    ],
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
                                  "\n                    " +
                                    _vm._s(
                                      _vm.mixin_formatNumber(item.amount)
                                    ) +
                                    "\n                "
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

/***/ "./resources/js/views/modules/user/payments/Index.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/modules/user/payments/Index.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_5237f146___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=5237f146& */ "./resources/js/views/modules/user/payments/Index.vue?vue&type=template&id=5237f146&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/user/payments/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_5237f146___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_5237f146___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/user/payments/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/user/payments/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/modules/user/payments/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/payments/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/user/payments/Index.vue?vue&type=template&id=5237f146&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/modules/user/payments/Index.vue?vue&type=template&id=5237f146& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5237f146___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=5237f146& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/payments/Index.vue?vue&type=template&id=5237f146&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5237f146___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5237f146___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);