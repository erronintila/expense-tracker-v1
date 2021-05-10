(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/ApplicationBar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/ApplicationBar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "application-bar",
  props: {
    showNotificationDrawer: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      drawer: true,
      notificationDrawer: false
    };
  },
  methods: {
    onLogout: function onLogout() {
      this.$emit("on-logout");
    }
  },
  watch: {
    drawer: function drawer() {
      this.$emit("show-drawer", this.drawer);
    },
    notificationDrawer: function notificationDrawer() {
      this.$emit("show-notification-drawer", this.notificationDrawer);
    },
    showNotificationDrawer: {
      immediate: true,
      handler: function handler(newValue) {
        this.notificationDrawer = newValue;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/NavigationDrawer.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/NavigationDrawer.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "navigation-drawer",
  props: {
    user: {
      type: Object,
      "default": function _default() {
        return {
          name: "",
          username: "",
          email: ""
        };
      }
    },
    showNavigationDrawer: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      drawer: true,
      items: [{
        icon: "mdi-chart-areaspline",
        text: "Dashboard",
        link: {
          name: "user.dashboard.index"
        }
      }, {
        icon: "mdi-cash-multiple",
        text: "Expenses",
        link: {
          name: "user.expenses.index"
        }
      }, {
        icon: "mdi-file-chart",
        text: "Expense Reports",
        link: {
          name: "user.expense_reports.index"
        }
      }, {
        icon: "mdi-currency-usd",
        text: "Payment Records",
        link: {
          name: "user.payments.index"
        }
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
  beforeMount: function beforeMount() {
    if (this.$store.getters.user.is_admin) {
      var children = [];

      if (this.mixin_can("view all users")) {
        children.push({
          icon: "mdi-clipboard-account",
          text: "Employees",
          link: {
            name: "admin.users.index"
          }
        });
      }

      if (this.mixin_can("view all vendors")) {
        children.push({
          icon: "mdi-account-group",
          text: "Vendors",
          link: {
            name: "admin.vendors.index"
          }
        });
      }

      if (this.mixin_can("view all departments")) {
        children.push({
          icon: "mdi-clipboard-file",
          text: "Departments",
          link: {
            name: "admin.departments.index"
          }
        });
      }

      if (this.mixin_can("view all jobs")) {
        children.push({
          icon: "mdi-briefcase",
          text: "Job Designations",
          link: {
            name: "admin.jobs.index"
          }
        });
      }

      if (this.mixin_can("view all expense types")) {
        children.push({
          icon: "mdi-file-cog-outline",
          text: "Expense Types",
          link: {
            name: "admin.expense_types.index"
          }
        });
      }

      children.push({
        icon: "mdi-format-list-numbered",
        text: "Analytics",
        link: {
          name: "admin.analytics.index"
        }
      });

      if (this.mixin_can("view all activity logs")) {
        children.push({
          icon: "mdi-format-list-numbered",
          text: "Activity Logs",
          link: {
            name: "admin.activity_logs.index"
          }
        });
      }

      if (this.mixin_can("manage settings")) {
        children.push({
          icon: "mdi-cog",
          text: "Settings",
          link: {
            name: "admin.settings.index"
          }
        });
      }

      this.items.push({
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        text: "More",
        model: false,
        children: children
      });
    }
  },
  methods: {
    onLogout: function onLogout() {
      this.$emit("on-logout");
    }
  },
  watch: {
    showNavigationDrawer: {
      handler: function handler(newValue) {
        this.drawer = newValue;
      }
    },
    drawer: function drawer() {
      this.$emit("show-drawer", this.drawer);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/NotificationDrawer.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/NotificationDrawer.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "notification-drawer",
  props: {
    appNotificationDrawer: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      notificationDrawer: false
    };
  },
  methods: {
    redirectPage: function redirectPage(item) {
      var _this = this;

      axios.put("/api/notifications/".concat(item.id, "?action=", "read", "&type=", "single")).then(function (response) {
        _this.$store.dispatch("AUTH_NOTIFICATIONS");

        window.location.replace("/".concat(item.data.data.model, "/").concat(item.data.data.id)); // this.$router.replace(
        //     `/admin/${item.data.data.model}/${item.data.data.id}`
        // );
      })["catch"](function (error) {
        _this.mixin_showErrors(error);
      });
    }
  },
  watch: {
    appNotificationDrawer: {
      immediate: true,
      handler: function handler(newValue) {
        this.notificationDrawer = newValue;
      }
    },
    notificationDrawer: function notificationDrawer() {
      this.$emit("show-notification-drawer", this.notificationDrawer);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/PageFooter.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/PageFooter.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "page-footer",
  data: function data() {
    return {
      company_name: "Twin-Circa Marketing",
      year: "2020"
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_page_ApplicationBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/page/ApplicationBar */ "./resources/js/components/page/ApplicationBar.vue");
/* harmony import */ var _components_page_NavigationDrawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/page/NavigationDrawer */ "./resources/js/components/page/NavigationDrawer.vue");
/* harmony import */ var _components_page_NotificationDrawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/page/NotificationDrawer */ "./resources/js/components/page/NotificationDrawer.vue");
/* harmony import */ var _components_page_PageFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/page/PageFooter */ "./resources/js/components/page/PageFooter.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    ApplicationBar: _components_page_ApplicationBar__WEBPACK_IMPORTED_MODULE_0__["default"],
    NavigationDrawer: _components_page_NavigationDrawer__WEBPACK_IMPORTED_MODULE_1__["default"],
    NotificationDrawer: _components_page_NotificationDrawer__WEBPACK_IMPORTED_MODULE_2__["default"],
    PageFooter: _components_page_PageFooter__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      user: {
        name: "",
        username: "",
        email: ""
      },
      drawer: true,
      notificationDrawer: false
    };
  },
  methods: {
    showDrawer: function showDrawer(e) {
      this.drawer = e;
      console.log("drawer??", e);
    },
    showNotificationDrawer: function showNotificationDrawer(e) {
      this.notificationDrawer = e;
      console.log("notificationDrawer??", e);
    },
    toProfile: function toProfile() {
      // Added () => {} on router, used to prevent NavigationDuplicated error
      this.$router.push({
        name: "user.profile.index"
      }, function () {});
    },
    onLogout: function onLogout() {
      var _this = this;

      this.$confirm("Do you want to log out?").then(function (res) {
        if (res) {
          _this.$router.push({
            name: "logout"
          });
        }
      });
    }
  },
  created: function created() {
    var _this2 = this;

    this.$store.dispatch("AUTH_USER").then(function (response) {
      _this2.user = response;
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Index.vue?vue&type=style&index=0&id=7dfe7210&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Index.vue?vue&type=style&index=0&id=7dfe7210&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#app[data-v-7dfe7210] {\r\n    overflow: hidden;\r\n    width: 100vw;\n}\n.fade-enter[data-v-7dfe7210],\r\n.fade-leave-to[data-v-7dfe7210] {\r\n    opacity: 0;\r\n    /* transform: translateX(2em); */\n}\n.fade-enter-active[data-v-7dfe7210],\r\n.fade-leave-active[data-v-7dfe7210] {\r\n    transition: all 0.3s ease;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Index.vue?vue&type=style&index=0&id=7dfe7210&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Index.vue?vue&type=style&index=0&id=7dfe7210&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&id=7dfe7210&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Index.vue?vue&type=style&index=0&id=7dfe7210&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/ApplicationBar.vue?vue&type=template&id=8456f670&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/ApplicationBar.vue?vue&type=template&id=8456f670& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _vm.mixin_loggedIn
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
                  staticStyle: { "text-decoration": "none", color: "inherit" },
                  attrs: { to: { name: "user.dashboard.index" } }
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
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/NavigationDrawer.vue?vue&type=template&id=810d8fec&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/NavigationDrawer.vue?vue&type=template&id=810d8fec& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _vm.mixin_loggedIn
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
                          [_vm._v("\n                Logout\n            ")]
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
            583211479
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
                      attrs: { src: __webpack_require__(/*! ../../assets/img/user.png */ "./resources/js/assets/img/user.png") }
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
                              attrs: { to: { name: "user.profile.index" } }
                            },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.user.name) +
                                  "\n                    "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-list-item-subtitle", [
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.user.email) +
                            "\n                "
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
                                      "\n                        " +
                                        _vm._s(item.heading) +
                                        "\n                    "
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
                                            "\n                            " +
                                              _vm._s(item.text) +
                                              "\n                        "
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
                              { key: i, attrs: { to: child.link, link: "" } },
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
                                        "\n                            " +
                                          _vm._s(child.text) +
                                          "\n                        "
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
                                  "\n                        " +
                                    _vm._s(item.text) +
                                    "\n                    "
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
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/NotificationDrawer.vue?vue&type=template&id=e994d23e&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/NotificationDrawer.vue?vue&type=template&id=e994d23e& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
                              "\n                    " +
                                _vm._s(
                                  _vm.$store.getters.notifications.data.length
                                ) +
                                "\n                    Unread\n                "
                            )
                          ])
                        : _c("v-list-item-subtitle", [
                            _vm._v(
                              "\n                    No notifications\n                "
                            )
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
                                to: { name: "user.notifications.index" }
                              }
                            },
                            [
                              _vm._v(
                                "\n                        View all\n                    "
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
                                textContent: _vm._s(item.data.data.description)
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
                  index < _vm.$store.getters.notifications.data.length - 1
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/PageFooter.vue?vue&type=template&id=63e5e82f&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/PageFooter.vue?vue&type=template&id=63e5e82f& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    "v-footer",
    { attrs: { fixed: "", padless: "" } },
    [
      _c("v-col", { staticClass: "text-right", attrs: { cols: "12" } }, [
        _c("small", [
          _vm._v("\n            © " + _vm._s(_vm.year) + " Copyright — "),
          _c("strong", [_vm._v(_vm._s(_vm.company_name))])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Index.vue?vue&type=template&id=7dfe7210&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Index.vue?vue&type=template&id=7dfe7210&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
      _c("application-bar", {
        attrs: { showNotificationDrawer: _vm.notificationDrawer },
        on: {
          "show-drawer": _vm.showDrawer,
          "show-notification-drawer": _vm.showNotificationDrawer,
          "on-logout": _vm.onLogout
        }
      }),
      _vm._v(" "),
      _c("navigation-drawer", {
        attrs: { user: _vm.user, showNavigationDrawer: _vm.drawer },
        on: { "show-drawer": _vm.showDrawer, "on-logout": _vm.onLogout }
      }),
      _vm._v(" "),
      _c("notification-drawer", {
        attrs: { appNotificationDrawer: _vm.notificationDrawer },
        on: { "show-notification-drawer": _vm.showNotificationDrawer }
      }),
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
                        "transition",
                        { attrs: { name: "fade", mode: "out-in" } },
                        [
                          _c(
                            "keep-alive",
                            [
                              _vm.$route.meta.keepAlive
                                ? _c("router-view")
                                : _vm._e()
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "transition",
                        { attrs: { name: "fade", mode: "out-in" } },
                        [
                          !_vm.$route.meta.keepAlive
                            ? _c("router-view")
                            : _vm._e()
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
              _c("page-footer")
            ],
            1
          )
        : _vm._e()
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

/***/ "./resources/js/components/page/ApplicationBar.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/page/ApplicationBar.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ApplicationBar_vue_vue_type_template_id_8456f670___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApplicationBar.vue?vue&type=template&id=8456f670& */ "./resources/js/components/page/ApplicationBar.vue?vue&type=template&id=8456f670&");
/* harmony import */ var _ApplicationBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApplicationBar.vue?vue&type=script&lang=js& */ "./resources/js/components/page/ApplicationBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ApplicationBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ApplicationBar_vue_vue_type_template_id_8456f670___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ApplicationBar_vue_vue_type_template_id_8456f670___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/page/ApplicationBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/page/ApplicationBar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/page/ApplicationBar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ApplicationBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/ApplicationBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/page/ApplicationBar.vue?vue&type=template&id=8456f670&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/page/ApplicationBar.vue?vue&type=template&id=8456f670& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationBar_vue_vue_type_template_id_8456f670___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ApplicationBar.vue?vue&type=template&id=8456f670& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/ApplicationBar.vue?vue&type=template&id=8456f670&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationBar_vue_vue_type_template_id_8456f670___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationBar_vue_vue_type_template_id_8456f670___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/page/NavigationDrawer.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/page/NavigationDrawer.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavigationDrawer_vue_vue_type_template_id_810d8fec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationDrawer.vue?vue&type=template&id=810d8fec& */ "./resources/js/components/page/NavigationDrawer.vue?vue&type=template&id=810d8fec&");
/* harmony import */ var _NavigationDrawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationDrawer.vue?vue&type=script&lang=js& */ "./resources/js/components/page/NavigationDrawer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavigationDrawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavigationDrawer_vue_vue_type_template_id_810d8fec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavigationDrawer_vue_vue_type_template_id_810d8fec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/page/NavigationDrawer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/page/NavigationDrawer.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/page/NavigationDrawer.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationDrawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NavigationDrawer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/NavigationDrawer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationDrawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/page/NavigationDrawer.vue?vue&type=template&id=810d8fec&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/page/NavigationDrawer.vue?vue&type=template&id=810d8fec& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationDrawer_vue_vue_type_template_id_810d8fec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NavigationDrawer.vue?vue&type=template&id=810d8fec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/NavigationDrawer.vue?vue&type=template&id=810d8fec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationDrawer_vue_vue_type_template_id_810d8fec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationDrawer_vue_vue_type_template_id_810d8fec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/page/NotificationDrawer.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/page/NotificationDrawer.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotificationDrawer_vue_vue_type_template_id_e994d23e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotificationDrawer.vue?vue&type=template&id=e994d23e& */ "./resources/js/components/page/NotificationDrawer.vue?vue&type=template&id=e994d23e&");
/* harmony import */ var _NotificationDrawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationDrawer.vue?vue&type=script&lang=js& */ "./resources/js/components/page/NotificationDrawer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NotificationDrawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NotificationDrawer_vue_vue_type_template_id_e994d23e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NotificationDrawer_vue_vue_type_template_id_e994d23e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/page/NotificationDrawer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/page/NotificationDrawer.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/page/NotificationDrawer.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationDrawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NotificationDrawer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/NotificationDrawer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationDrawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/page/NotificationDrawer.vue?vue&type=template&id=e994d23e&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/page/NotificationDrawer.vue?vue&type=template&id=e994d23e& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationDrawer_vue_vue_type_template_id_e994d23e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NotificationDrawer.vue?vue&type=template&id=e994d23e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/NotificationDrawer.vue?vue&type=template&id=e994d23e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationDrawer_vue_vue_type_template_id_e994d23e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationDrawer_vue_vue_type_template_id_e994d23e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/page/PageFooter.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/page/PageFooter.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageFooter_vue_vue_type_template_id_63e5e82f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageFooter.vue?vue&type=template&id=63e5e82f& */ "./resources/js/components/page/PageFooter.vue?vue&type=template&id=63e5e82f&");
/* harmony import */ var _PageFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageFooter.vue?vue&type=script&lang=js& */ "./resources/js/components/page/PageFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PageFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageFooter_vue_vue_type_template_id_63e5e82f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageFooter_vue_vue_type_template_id_63e5e82f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/page/PageFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/page/PageFooter.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/page/PageFooter.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/PageFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/page/PageFooter.vue?vue&type=template&id=63e5e82f&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/page/PageFooter.vue?vue&type=template&id=63e5e82f& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFooter_vue_vue_type_template_id_63e5e82f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageFooter.vue?vue&type=template&id=63e5e82f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/PageFooter.vue?vue&type=template&id=63e5e82f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFooter_vue_vue_type_template_id_63e5e82f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFooter_vue_vue_type_template_id_63e5e82f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/pages/Index.vue":
/*!********************************************!*\
  !*** ./resources/js/views/pages/Index.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_7dfe7210_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=7dfe7210&scoped=true& */ "./resources/js/views/pages/Index.vue?vue&type=template&id=7dfe7210&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Index_vue_vue_type_style_index_0_id_7dfe7210_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=7dfe7210&scoped=true&lang=css& */ "./resources/js/views/pages/Index.vue?vue&type=style&index=0&id=7dfe7210&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_7dfe7210_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_7dfe7210_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7dfe7210",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/pages/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/Index.vue?vue&type=style&index=0&id=7dfe7210&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/pages/Index.vue?vue&type=style&index=0&id=7dfe7210&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_7dfe7210_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&id=7dfe7210&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Index.vue?vue&type=style&index=0&id=7dfe7210&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_7dfe7210_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_7dfe7210_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_7dfe7210_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_7dfe7210_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_7dfe7210_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/pages/Index.vue?vue&type=template&id=7dfe7210&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/pages/Index.vue?vue&type=template&id=7dfe7210&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7dfe7210_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=7dfe7210&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Index.vue?vue&type=template&id=7dfe7210&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7dfe7210_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7dfe7210_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);