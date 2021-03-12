(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "app",
  props: {
    source: String
  },
  data: function data() {
    return {
      user: {
        name: "",
        username: "",
        email: ""
      },
      dialog: false,
      drawer: null,
      notificationDrawer: null,
      items: [{
        icon: "mdi-chart-areaspline",
        text: "Dashboard",
        link: {
          name: "admin.dashboard.index"
        }
      }, {
        icon: "mdi-clipboard-account",
        text: "Employees",
        link: {
          name: "admin.users.index"
        }
      }, {
        icon: "mdi-cash-multiple",
        text: "Expenses",
        link: {
          name: "admin.expenses.index"
        }
      }, {
        icon: "mdi-file-chart",
        text: "Expense Reports",
        link: {
          name: "admin.expense_reports.index"
        }
      }, {
        icon: "mdi-currency-usd",
        text: "Payment Records",
        link: {
          name: "admin.payments.index"
        }
      }, {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        text: "More",
        model: false,
        children: [{
          icon: "mdi-account-group",
          text: "Vendors",
          link: {
            name: "admin.vendors.index"
          }
        }, {
          icon: "mdi-clipboard-file",
          text: "Departments",
          link: {
            name: "admin.departments.index"
          }
        }, {
          icon: "mdi-briefcase",
          text: "Job Designations",
          link: {
            name: "admin.jobs.index"
          }
        }, {
          icon: "mdi-file-cog-outline",
          text: "Expense Types",
          link: {
            name: "admin.expense_types.index"
          }
        }, // {
        //     icon: "mdi-text-box-plus-outline",
        //     text: "Adjustments",
        //     link: { name: "admin.adjustments.index" }
        // },
        // {
        //     icon: "mdi-circle-medium",
        //     text: "Users",
        //     link: { name: "admin.users.index" }
        // },
        {
          icon: "mdi-format-list-numbered",
          text: "Activity Logs",
          link: {
            name: "admin.activity_logs.index"
          }
        }, {
          icon: "mdi-cog",
          text: "Settings",
          link: {
            name: "admin.settings.index"
          }
        } // {
        //     icon: "mdi-circle-medium",
        //     text: "Roles",
        //     // link: { name: "admin.roles.index" }
        // },
        // {
        //     icon: "mdi-circle-medium",
        //     text: "Permissions",
        //     // link: { name: "admin.permissions.index" }
        // },
        // {
        //     icon: "mdi-circle-medium",
        //     text: "Vendors",
        //     link: { name: "admin.vendors.index" }
        // },
        ]
      } // {
      //     icon: "mdi-chevron-up",
      //     "icon-alt": "mdi-chevron-down",
      //     text: "Users",
      //     model: false,
      //     children: [
      //         {
      //             icon: "mdi-circle-medium",
      //             text: "View All",
      //             link: { name: "admin.users.index" }
      //         },
      //         {
      //             icon: "mdi-circle-medium",
      //             text: "Roles",
      //             // link: { name: "admin.roles.index" }
      //         },
      //         {
      //             icon: "mdi-circle-medium",
      //             text: "Permissions",
      //             // link: { name: "admin.permissions.index" }
      //         },
      //     ]
      // }
      ]
    };
  },
  methods: {
    redirectPage: function redirectPage(item) {
      var _this = this;

      axios.put("/api/notifications/".concat(item.id, "?action=", "read", "&type=", "single")).then(function (response) {
        _this.$store.dispatch("AUTH_NOTIFICATIONS");

        window.location.replace("/admin/".concat(item.data.data.model, "/").concat(item.data.data.id)); // this.$router.replace(
        //     `/admin/${item.data.data.model}/${item.data.data.id}`
        // );
      })["catch"](function (error) {
        _this.mixin_showErrors(error);
      });
    },
    toProfile: function toProfile() {
      // Added () => {} on router, used to prevent NavigationDuplicated error
      this.$router.push({
        name: "admin.profile.index"
      }, function () {});
    },
    onLogout: function onLogout() {
      var _this2 = this;

      this.$confirm("Do you want to log out?").then(function (res) {
        if (res) {
          _this2.$router.push({
            name: "logout"
          });
        }
      });
    }
  },
  created: function created() {
    var _this3 = this;

    this.$store.dispatch("AUTH_USER").then(function (response) {
      _this3.user = response;

      _this3.$store.dispatch("AUTH_NOTIFICATIONS");
    });
  },
  activated: function activated() {
    var _this4 = this;

    this.$store.dispatch("AUTH_USER").then(function (response) {
      _this4.user = response;

      _this4.$store.dispatch("AUTH_NOTIFICATIONS");
    });
  }
});

/***/ }),

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
/* harmony import */ var _admin___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../admin/ */ "./resources/js/views/modules/admin/index.vue");
/* harmony import */ var _services_ExpenseReportDataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/ExpenseReportDataService */ "./resources/js/services/ExpenseReportDataService.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Form: _admin___WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      loader: true,
      formDataLoaded: false,
      usersParameters: {
        params: {
          is_superadmin: false
        }
      },
      expense_report_id: parseInt(this.$route.params.id),
      form: {
        code: "",
        description: "",
        remarks: "",
        notes: "",
        user: null,
        expenses: [],
        status: null,
        from: "",
        to: ""
      },
      errors: {
        date_range: [],
        code: [],
        description: [],
        remarks: [],
        notes: [],
        user_id: [],
        expenses: []
      },
      rules: {}
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _services_ExpenseReportDataService__WEBPACK_IMPORTED_MODULE_2__["default"].show(_this.$route.params.id).then(function (response) {
          resolve(response.data.data);
        })["catch"](function (error) {
          _this.mixin_showErrors(error);

          reject();
        })["finally"](_this.loader = false);
      });
    },
    loadExpenses: function loadExpenses(reportData) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        axios.get("/api/data/expenses", {
          params: {
            update_report: true,
            user_id: reportData.user ? reportData.user.id : null,
            start_date: reportData.from,
            end_date: moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf().format("YYYY-MM-DD"),
            expense_report_id: _this2.$route.params.id
          }
        }).then(function (response) {
          resolve(response.data.data);
        })["catch"](function (error) {
          _this2.mixin_showErrors(error);

          reject();
        })["finally"](_this2.loader = false);
      });
    },
    onSave: function onSave(value) {
      var _this3 = this;

      this.loader = true;
      value.user_id = value.user ? value.user.id : null;
      _services_ExpenseReportDataService__WEBPACK_IMPORTED_MODULE_2__["default"].update(this.$route.params.id, value).then(function (response) {
        _this3.mixin_successDialog(response.data.status, response.data.message);

        _this3.$router.push({
          name: "admin.expense_reports.index"
        });
      })["catch"](function (error) {
        _this3.mixin_showErrors(error);

        _this3.errors = error.response.data.errors;
      })["finally"](this.loader = false);
    }
  },
  created: function created() {
    var _this4 = this;

    this.getData().then(function (data) {
      _this4.loadExpenses(data).then(function (expenses) {
        _this4.form = data;
        _this4.form.expenses = expenses;
        _this4.formDataLoaded = true;
      });
    });
  },
  activated: function activated() {
    var _this5 = this;

    this.getData().then(function (data) {
      _this5.loadExpenses(data).then(function (expenses) {
        _this5.form = data;
        _this5.form.expenses = expenses;
        _this5.formDataLoaded = true;
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/index.vue?vue&type=template&id=26bcb55b&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/index.vue?vue&type=template&id=26bcb55b& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
      _vm.mixin_loggedIn
        ? _c(
            "v-navigation-drawer",
            {
              attrs: {
                clipped: _vm.$vuetify.breakpoint.lgAndUp,
                floating: "",
                app: ""
              },
              scopedSlots: _vm._u(
                [
                  {
                    key: "append",
                    fn: function() {
                      return [
                        _c(
                          "div",
                          { staticClass: "pa-2" },
                          [
                            _c(
                              "v-btn",
                              {
                                attrs: {
                                  block: "",
                                  color: "green",
                                  dark: "",
                                  outlined: ""
                                },
                                on: { click: _vm.onLogout }
                              },
                              [
                                _vm._v(
                                  "\n                    Logout\n                "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ]
                    },
                    proxy: true
                  }
                ],
                null,
                false,
                1979733975
              ),
              model: {
                value: _vm.drawer,
                callback: function($$v) {
                  _vm.drawer = $$v
                },
                expression: "drawer"
              }
            },
            [
              _c(
                "v-list",
                { attrs: { dense: "", shaped: "" } },
                [
                  _c(
                    "v-list-item",
                    { attrs: { "two-line": "" } },
                    [
                      _c("v-list-item-avatar", [
                        _c("img", {
                          attrs: {
                            src: __webpack_require__(/*! ../../../assets/img/user.png */ "./resources/js/assets/img/user.png")
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-list-item-content",
                        [
                          _c(
                            "v-list-item-title",
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "text-decoration-none",
                                  staticStyle: { color: "#4caf50" },
                                  attrs: { to: { name: "admin.profile.index" } }
                                },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(_vm.user.name) +
                                      "\n                        "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-list-item-subtitle", [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm.user.email) +
                                "\n                    "
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.items, function(item) {
                    return [
                      item.heading
                        ? _c(
                            "v-row",
                            { key: item.heading, attrs: { align: "center" } },
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "6" } },
                                [
                                  item.heading
                                    ? _c("v-subheader", [
                                        _vm._v(
                                          "\n                            " +
                                            _vm._s(item.heading) +
                                            "\n                        "
                                        )
                                      ])
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  staticClass: "text-center",
                                  attrs: { cols: "6" }
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "body-2 black--text",
                                      attrs: { href: "#!" }
                                    },
                                    [_vm._v("EDIT")]
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        : item.children
                        ? _c(
                            "v-list-group",
                            {
                              key: item.text,
                              attrs: {
                                color: "green",
                                "prepend-icon": item.model
                                  ? item.icon
                                  : item["icon-alt"],
                                "append-icon": ""
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "activator",
                                    fn: function() {
                                      return [
                                        _c(
                                          "v-list-item-content",
                                          [
                                            _c("v-list-item-title", [
                                              _vm._v(
                                                "\n                                " +
                                                  _vm._s(item.text) +
                                                  "\n                            "
                                              )
                                            ])
                                          ],
                                          1
                                        )
                                      ]
                                    },
                                    proxy: true
                                  }
                                ],
                                null,
                                true
                              ),
                              model: {
                                value: item.model,
                                callback: function($$v) {
                                  _vm.$set(item, "model", $$v)
                                },
                                expression: "item.model"
                              }
                            },
                            [
                              _vm._v(" "),
                              _vm._l(item.children, function(child, i) {
                                return _c(
                                  "v-list-item",
                                  {
                                    key: i,
                                    attrs: { to: child.link, link: "" }
                                  },
                                  [
                                    child.icon
                                      ? _c(
                                          "v-list-item-action",
                                          [
                                            _c("v-icon", [
                                              _vm._v(_vm._s(child.icon))
                                            ])
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _vm._v(
                                            "\n                                " +
                                              _vm._s(child.text) +
                                              "\n                            "
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              })
                            ],
                            2
                          )
                        : _c(
                            "v-list-item",
                            {
                              key: item.text,
                              attrs: { color: "green", to: item.link, link: "" }
                            },
                            [
                              _c(
                                "v-list-item-action",
                                [_c("v-icon", [_vm._v(_vm._s(item.icon))])],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-item-content",
                                [
                                  _c("v-list-item-title", [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(item.text) +
                                        "\n                        "
                                    )
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          )
                    ]
                  })
                ],
                2
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.mixin_loggedIn
        ? _c(
            "v-app-bar",
            {
              staticClass: "elevation-1",
              attrs: {
                "clipped-left": _vm.$vuetify.breakpoint.lgAndUp,
                app: "",
                color: "green",
                dark: ""
              }
            },
            [
              _c("v-app-bar-nav-icon", {
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    _vm.drawer = !_vm.drawer
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "v-toolbar-title",
                { staticClass: "ml-0 pl-4", staticStyle: { width: "300px" } },
                [
                  _c(
                    "router-link",
                    {
                      staticStyle: {
                        "text-decoration": "none",
                        color: "inherit"
                      },
                      attrs: { to: { name: "admin.dashboard.index" } }
                    },
                    [
                      _c("span", { staticClass: "title" }, [
                        _vm._v("Expense Tracker")
                      ])
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
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
                              "v-btn",
                              _vm._g(
                                _vm._b(
                                  {
                                    attrs: { icon: "" },
                                    on: {
                                      click: function($event) {
                                        $event.stopPropagation()
                                        _vm.notificationDrawer = !_vm.notificationDrawer
                                      }
                                    }
                                  },
                                  "v-btn",
                                  attrs,
                                  false
                                ),
                                on
                              ),
                              [
                                _c(
                                  "v-badge",
                                  {
                                    attrs: {
                                      content:
                                        _vm.$store.getters.notifications.data
                                          .length,
                                      value:
                                        _vm.$store.getters.notifications.data
                                          .length,
                                      color: "red",
                                      overlap: ""
                                    }
                                  },
                                  [_c("v-icon", [_vm._v("mdi-bell")])],
                                  1
                                )
                              ],
                              1
                            )
                          ]
                        }
                      }
                    ],
                    null,
                    false,
                    3801761893
                  )
                },
                [_vm._v(" "), _c("span", [_vm._v("Notifications")])]
              ),
              _vm._v(" "),
              _c(
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
                              "v-btn",
                              _vm._g(
                                _vm._b(
                                  {
                                    attrs: { icon: "" },
                                    on: { click: _vm.onLogout }
                                  },
                                  "v-btn",
                                  attrs,
                                  false
                                ),
                                on
                              ),
                              [_c("v-icon", [_vm._v("mdi-logout")])],
                              1
                            )
                          ]
                        }
                      }
                    ],
                    null,
                    false,
                    2733129345
                  )
                },
                [_vm._v(" "), _c("span", [_vm._v("Log out")])]
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.mixin_loggedIn
        ? _c(
            "v-main",
            [
              _c(
                "v-row",
                { staticClass: "ml-2 mr-2 mt-4 pb-12 mb-5" },
                [
                  _c(
                    "v-col",
                    [
                      _c(
                        "keep-alive",
                        [
                          _vm.$route.meta.keepAlive
                            ? _c("router-view")
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      !_vm.$route.meta.keepAlive ? _c("router-view") : _vm._e()
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-footer",
                { attrs: { fixed: "", padless: "" } },
                [
                  _c(
                    "v-col",
                    { staticClass: "text-right", attrs: { cols: "12" } },
                    [
                      _c("small", [
                        _vm._v("© 2020 Copyright —\n                    "),
                        _c("strong", [_vm._v("Twin-Circa Marketing")])
                      ])
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
      _c(
        "v-navigation-drawer",
        {
          attrs: {
            right: "",
            fixed: "",
            app: "",
            temporary: "",
            clipped: _vm.$vuetify.breakpoint.lgAndUp,
            floating: ""
          },
          scopedSlots: _vm._u([
            {
              key: "prepend",
              fn: function() {
                return [
                  _c(
                    "v-list-item",
                    { attrs: { "two-line": "" } },
                    [
                      _c(
                        "v-list-item-avatar",
                        [_c("v-icon", [_vm._v("mdi-bell")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item-content",
                        [
                          _c("v-list-item-title", [_vm._v("Notifications")]),
                          _vm._v(" "),
                          _vm.$store.getters.notifications.data.length > 0
                            ? _c("v-list-item-subtitle", [
                                _vm._v(
                                  _vm._s(
                                    _vm.$store.getters.notifications.data.length
                                  ) + "\n                        Unread"
                                )
                              ])
                            : _c("v-list-item-subtitle", [
                                _vm._v("No notifications")
                              ]),
                          _vm._v(" "),
                          _c(
                            "v-list-item-title",
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "text-decoration-none",
                                  staticStyle: { color: "#4caf50" },
                                  attrs: {
                                    to: { name: "admin.notifications.index" }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                            View all\n                        "
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
                ]
              },
              proxy: true
            }
          ]),
          model: {
            value: _vm.notificationDrawer,
            callback: function($$v) {
              _vm.notificationDrawer = $$v
            },
            expression: "notificationDrawer"
          }
        },
        [
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-list",
            { attrs: { "two-line": "" } },
            [
              _c(
                "v-list-item-group",
                { attrs: { "active-class": "" } },
                [
                  _vm._l(_vm.$store.getters.notifications.data, function(
                    item,
                    index
                  ) {
                    return [
                      _c(
                        "v-list-item",
                        {
                          key: item.id,
                          on: {
                            click: function($event) {
                              return _vm.redirectPage(item)
                            }
                          }
                        },
                        [
                          [
                            _c(
                              "v-list-item-content",
                              [
                                _c("v-list-item-title", {
                                  domProps: {
                                    textContent: _vm._s(
                                      item.data.data.user.full_name
                                    )
                                  }
                                }),
                                _vm._v(" "),
                                _c("v-list-item-subtitle", {
                                  staticClass: "text--primary",
                                  domProps: {
                                    textContent: _vm._s(
                                      item.data.data.description
                                    )
                                  }
                                }),
                                _vm._v(" "),
                                _c("v-list-item-subtitle", {
                                  domProps: {
                                    textContent: _vm._s(
                                      _vm.mixin_getHumanDate(item.created_at)
                                    )
                                  }
                                })
                              ],
                              1
                            )
                          ]
                        ],
                        2
                      ),
                      _vm._v(" "),
                      index < _vm.items.length - 1
                        ? _c("v-divider", { key: index })
                        : _vm._e()
                    ]
                  })
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
      _c(
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
              _vm.formDataLoaded
                ? _c("Form", {
                    attrs: {
                      expenseReportForm: _vm.form,
                      expenseReportErrors: _vm.errors,
                      expenseReportRules: _vm.rules,
                      expense_report_id: _vm.expense_report_id
                    },
                    on: { "on-save": _vm.onSave }
                  })
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/assets/img/user.png":
/*!******************************************!*\
  !*** ./resources/js/assets/img/user.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/user.png?5405d77c51fb46a0cbf26cb96fe4da4d";

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
  }]);

  return ExpenseReportDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new ExpenseReportDataService());

/***/ }),

/***/ "./resources/js/views/modules/admin/index.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/modules/admin/index.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_26bcb55b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=26bcb55b& */ "./resources/js/views/modules/admin/index.vue?vue&type=template&id=26bcb55b&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_26bcb55b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_26bcb55b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/modules/admin/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/index.vue?vue&type=template&id=26bcb55b&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/modules/admin/index.vue?vue&type=template&id=26bcb55b& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_26bcb55b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=26bcb55b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/index.vue?vue&type=template&id=26bcb55b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_26bcb55b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_26bcb55b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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