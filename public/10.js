(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/Index.vue?vue&type=script&lang=js& ***!
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
      admin_items: [],
      user_items: [],
      items: [{
        icon: "mdi-chart-areaspline",
        text: "Dashboard",
        link: {
          name: "admin.dashboard.index"
        }
      }, {
        icon: "mdi-cash-multiple",
        text: "Expenses",
        link: {
          name: "admin.expenses.index"
        }
      }, {
        icon: "mdi-clipboard-account",
        text: "Employees",
        link: {
          name: "admin.employees.index"
        }
      }, {
        icon: "mdi-file-chart",
        text: "Reports",
        link: {
          name: "admin.reports.index"
        }
      }, {
        icon: "mdi-currency-usd",
        text: "Payments",
        link: {
          name: "admin.payments.index"
        }
      }, {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        text: "More",
        model: false,
        children: [{
          icon: "mdi-circle-medium",
          text: "Users",
          link: {
            name: "admin.users.index"
          }
        }, {
          icon: "mdi-circle-medium",
          text: "Vendors",
          link: {
            name: "admin.vendors.index"
          }
        }, {
          icon: "mdi-circle-medium",
          text: "Departments",
          link: {
            name: "admin.departments.index"
          }
        }, {
          icon: "mdi-circle-medium",
          text: "Job Designations",
          link: {
            name: "admin.jobs.index"
          }
        }, {
          icon: "mdi-circle-medium",
          text: "Expense Types",
          link: {
            name: "admin.expense_types.index"
          }
        }]
      }]
    };
  },
  computed: {
    loggedIn: function loggedIn() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    toProfile: function toProfile() {
      // Added () => {} on router, used to prevent NavigationDuplicated error
      this.$router.push({
        name: "admin.profile.index"
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

    axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("access_token");
    axios.get("/api/user").then(function (response) {
      _this2.user = response.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/Index.vue?vue&type=template&id=c3a2558a&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/Index.vue?vue&type=template&id=c3a2558a& ***!
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
    "v-app",
    { attrs: { id: "inspire" } },
    [
      _vm.loggedIn
        ? _c(
            "v-navigation-drawer",
            {
              attrs: {
                clipped: _vm.$vuetify.breakpoint.lgAndUp,
                floating: "",
                app: ""
              },
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
                            src:
                              "https://randomuser.me/api/portraits/men/81.jpg"
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
                                  attrs: { to: "/admin/profile" }
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
      _vm.loggedIn
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
                      attrs: { to: "/admin/dashboard" }
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
                "v-btn",
                { attrs: { icon: "" }, on: { click: _vm.onLogout } },
                [_c("v-icon", [_vm._v("mdi-logout")])],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-main",
        [
          _c(
            "v-container",
            { staticClass: "fill-height", attrs: { fluid: "" } },
            [
              _c(
                "v-row",
                { attrs: { align: "center", justify: "center" } },
                [_c("v-col", [_c("router-view")], 1)],
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

/***/ "./resources/js/views/modules/admin/Index.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/modules/admin/Index.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_c3a2558a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=c3a2558a& */ "./resources/js/views/modules/admin/Index.vue?vue&type=template&id=c3a2558a&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_c3a2558a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_c3a2558a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/modules/admin/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/Index.vue?vue&type=template&id=c3a2558a&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/modules/admin/Index.vue?vue&type=template&id=c3a2558a& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_c3a2558a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=c3a2558a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/Index.vue?vue&type=template&id=c3a2558a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_c3a2558a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_c3a2558a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);