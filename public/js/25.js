(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/activity_logs/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/activity_logs/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_daterangepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/daterangepicker/DateRangePicker */ "./resources/js/components/daterangepicker/DateRangePicker.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DateRangePicker: _components_daterangepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      yawa: false,
      loading: true,
      date_range: [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("month").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("month").format("YYYY-MM-DD")],
      preset: "",
      presets: ["Today", "Yesterday", "Last 7 Days", "Last 30 Days", "This Week", "This Month", "This Quarter", "This Year", "Last Week", "Last Month", "Last Quarter", "Last Year", "Last 5 Years"],
      headers: [{
        text: "User",
        value: "user",
        sortable: false
      }, {
        text: "Description",
        value: "description",
        sortable: false
      }, {
        text: "Created",
        value: "created_at"
      }, {
        text: "Actions",
        value: "actions",
        sortable: false
      }, {
        text: "",
        value: "data-table-expand"
      }],
      items: [],
      user: {
        id: 0,
        username: "",
        name: "All Users",
        email: ""
      },
      users: [],
      selected: [],
      search: "",
      totalItems: 0,
      options: {
        sortBy: ["created_at"],
        sortDesc: [true],
        page: 1,
        itemsPerPage: 10
      },
      export_data: []
    };
  },
  methods: {
    updateDates: function updateDates(e) {
      this.date_range = e;
    },
    changeUser: function changeUser() {},
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

        var search = _this.search.trim().toLowerCase();

        var user_id = _this.user.id;
        var range = _this.date_range;
        axios.get("/api/activity_logs", {
          params: {
            search: search,
            sortBy: sortBy[0],
            sortType: sortDesc[0] ? "desc" : "asc",
            page: page,
            itemsPerPage: itemsPerPage,
            user_id: user_id,
            start_date: range[0],
            end_date: range[1] ? range[1] : range[0]
          }
        }).then(function (response) {
          var items = response.data.data;
          var total = response.data.meta.total;
          _this.loading = false;
          var export_data = items.map(function (item) {
            return {
              user: item.user == null ? "Default" : item.user.name,
              description: item.description,
              details: item.properties.details,
              "created at": item.created_at
            };
          });
          _this.export_data = export_data;
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
    loadUsers: function loadUsers() {
      var _this = this;

      axios.get("/api/data/users?only=true").then(function (response) {
        _this.users = response.data.data;

        _this.users.unshift({
          id: 0,
          username: "",
          name: "All Users",
          email: ""
        });
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

        _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
      });
    },
    onRefresh: function onRefresh() {
      Object.assign(this.$data, this.$options.data.apply(this));
      this.loadUsers();
      this.selected = [];
    },
    hasLink: function hasLink(item) {
      // .properties.custom.link
      if (item.properties) {
        if (item.properties.custom) {
          if (item.properties.custom.link) {
            return true;
          }

          return false;
        }

        return false;
      }

      return false;
    } // onDeleteAll() {
    //     let _this = this;
    //     this.$confirm(
    //         "WARNING: Delete All Activity Logs? This action can't be revoked."
    //     ).then(res => {
    //         if (res) {
    //             axios
    //                 .delete(`/api/activity_logs/0`, {
    //                     params: {
    //                         delete_all: true
    //                     }
    //                 })
    //                 .then(function(response) {
    //                     _this.mixin_successDialog(
    //                         "Success",
    //                         "Deleted All Logs successfully"
    //                     );
    //                     _this.getDataFromApi().then(data => {
    //                         _this.items = data.items;
    //                         _this.totalItems = data.total;
    //                     });
    //                     _this.selected = [];
    //                 })
    //                 .catch(function(error) {
    //                     console.log(error);
    //                     console.log(error.response);
    //                     _this.mixin_errorDialog(
    //                         `Error ${error.response.status}`,
    //                         error.response.statusText
    //                     );
    //                 });
    //         }
    //     });
    // },
    // onDelete() {
    //     let _this = this;
    //     if (_this.selected.length == 0) {
    //         this.$dialog.message.error("No item(s) selected", {
    //             position: "top-right",
    //             timeout: 2000
    //         });
    //         return;
    //     }
    //     this.$confirm(
    //         "WARNING: Delete selected Activity Log(s)? This action can't be revoked."
    //     ).then(res => {
    //         if (res) {
    //             axios
    //                 .delete(`/api/activity_logs/${_this.selected[0].id}`, {
    //                     params: {
    //                         ids: _this.selected.map(item => {
    //                             return item.id;
    //                         })
    //                     }
    //                 })
    //                 .then(function(response) {
    //                     _this.$dialog.message.success(
    //                         "Deleted Logs successfully",
    //                         {
    //                             position: "top-right",
    //                             timeout: 2000
    //                         }
    //                     );
    //                     _this.getDataFromApi().then(data => {
    //                         _this.items = data.items;
    //                         _this.totalItems = data.total;
    //                     });
    //                     _this.selected = [];
    //                 })
    //                 .catch(function(error) {
    //                     console.log(error);
    //                     console.log(error.response);
    //                     _this.mixin_errorDialog(
    //                         `Error ${error.response.status}`,
    //                         error.response.statusText
    //                     );
    //                 });
    //         }
    //     });
    // }

  },
  watch: {
    params: {
      handler: function handler() {
        var _this3 = this;

        this.getDataFromApi().then(function (data) {
          _this3.items = data.items;
          _this3.totalItems = data.total;
        });
      },
      deep: true
    }
  },
  computed: {
    params: function params(nv) {
      var _objectSpread2;

      return _objectSpread(_objectSpread({}, this.options), {}, (_objectSpread2 = {
        query: this.search
      }, _defineProperty(_objectSpread2, "query", this.user), _defineProperty(_objectSpread2, "query", this.date_range), _objectSpread2));
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
  created: function created() {
    this.loadUsers();
    this.$store.dispatch("AUTH_NOTIFICATIONS");
  },
  activated: function activated() {
    var _this4 = this;

    this.loadUsers();
    this.$store.dispatch("AUTH_NOTIFICATIONS");
    this.getDataFromApi().then(function (data) {
      _this4.items = data.items;
      _this4.totalItems = data.total;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/activity_logs/Index.vue?vue&type=template&id=5c10f24b&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/activity_logs/Index.vue?vue&type=template&id=5c10f24b& ***!
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
    "v-card",
    { staticClass: "elevation-0 pt-0" },
    [
      _c(
        "v-card-title",
        { staticClass: "pt-0" },
        [
          _c("h4", { staticClass: "title green--text" }, [
            _vm._v("Activity Logs")
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
                                dark: "",
                                fab: "",
                                "x-small": ""
                              },
                              on: { click: _vm.onRefresh }
                            },
                            "v-btn",
                            attrs,
                            false
                          ),
                          on
                        ),
                        [
                          _c("v-icon", { attrs: { dark: "" } }, [
                            _vm._v("mdi-reload")
                          ])
                        ],
                        1
                      )
                    ]
                  }
                }
              ])
            },
            [_vm._v(" "), _c("span", [_vm._v("Refresh")])]
          ),
          _vm._v(" "),
          _c(
            "v-menu",
            {
              attrs: {
                transition: "scale-transition",
                "close-on-content-click": false,
                "nudge-width": 200,
                "offset-y": "",
                left: "",
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
                        "v-tooltip",
                        {
                          attrs: { bottom: "" },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "activator",
                                fn: function(ref) {
                                  var tooltip = ref.on
                                  return [
                                    _c(
                                      "v-btn",
                                      _vm._g(
                                        _vm._b(
                                          {
                                            staticClass: "elevation-3 mr-2",
                                            attrs: {
                                              color: "green",
                                              dark: "",
                                              fab: "",
                                              "x-small": ""
                                            }
                                          },
                                          "v-btn",
                                          attrs,
                                          false
                                        ),
                                        Object.assign({}, tooltip, menu)
                                      ),
                                      [
                                        _c("v-icon", { attrs: { dark: "" } }, [
                                          _vm._v("mdi-filter")
                                        ])
                                      ],
                                      1
                                    )
                                  ]
                                }
                              }
                            ],
                            null,
                            true
                          )
                        },
                        [_vm._v(" "), _c("span", [_vm._v("Filter Data")])]
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
                          _c("DateRangePicker", {
                            attrs: {
                              preset: _vm.preset,
                              presets: _vm.presets,
                              value: _vm.date_range
                            },
                            on: { updateDates: _vm.updateDates }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item",
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.users,
                              label: "User",
                              "item-value": "id",
                              "item-text": "name",
                              "return-object": ""
                            },
                            on: { change: _vm.changeUser },
                            scopedSlots: _vm._u([
                              {
                                key: "item",
                                fn: function(data) {
                                  return [
                                    [
                                      _c(
                                        "v-list",
                                        { attrs: { "max-width": "300" } },
                                        [
                                          _c(
                                            "v-list-item-content",
                                            [
                                              _c("v-list-item-title", {
                                                domProps: {
                                                  innerHTML: _vm._s(
                                                    data.item.name
                                                  )
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("v-list-item-subtitle", {
                                                domProps: {
                                                  innerHTML: _vm._s(
                                                    "" + data.item.username
                                                  )
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("v-list-item-subtitle", {
                                                domProps: {
                                                  innerHTML: _vm._s(
                                                    data.item.email
                                                  )
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  ]
                                }
                              }
                            ]),
                            model: {
                              value: _vm.user,
                              callback: function($$v) {
                                _vm.user = $$v
                              },
                              expression: "user"
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
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-subtitle", [_vm._v(_vm._s(_vm.formattedDateRange))]),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "ml-4" },
        [
          _vm.user != null
            ? _c("v-chip", { staticClass: "mr-2", attrs: { small: "" } }, [
                _vm._v("\n            " + _vm._s(_vm.user.name) + "\n        ")
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-chip",
            {
              staticClass: "mr-2",
              attrs: { close: "", small: "", "close-icon": "mdi-refresh" },
              on: { "click:close": _vm.onRefresh }
            },
            [_vm._v("\n            Refresh\n        ")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c("v-data-table", {
            staticClass: "elevation-0",
            attrs: {
              "show-select": "",
              "item-key": "id",
              "single-expand": "",
              "show-expand": "",
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
              }
            },
            on: {
              "update:options": function($event) {
                _vm.options = $event
              }
            },
            scopedSlots: _vm._u(
              [
                {
                  key: "item.actions",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _vm.hasLink(item)
                        ? _c(
                            "v-icon",
                            {
                              key: item.id,
                              staticClass: "mr-2",
                              attrs: { small: "" },
                              on: {
                                click: function($event) {
                                  _vm.$router.push(
                                    _vm.hasLink(item)
                                      ? "/admin/" + item.properties.custom.link
                                      : null
                                  )
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                    mdi-open-in-new\n                "
                              )
                            ]
                          )
                        : _vm._e()
                    ]
                  }
                },
                {
                  key: "item.user",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _vm._v(
                        "\n                " +
                          _vm._s(
                            item.user == null ? "Default" : item.user.name
                          ) +
                          "\n            "
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
                          _c(
                            "v-container",
                            { key: item.id },
                            _vm._l(item.properties, function(items, key) {
                              return _c("table", { key: items.id }, [
                                key == "attributes"
                                  ? _c(
                                      "div",
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "green--text text-capitalize"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                    " +
                                                _vm._s(key) +
                                                "\n                                "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _vm._l(items, function(item, key) {
                                          return _c("tr", { key: key }, [
                                            _c("td", [
                                              _c("strong", [
                                                _vm._v(_vm._s(key))
                                              ])
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [_vm._v(":")]),
                                            _vm._v(" "),
                                            _c("td", [_vm._v(_vm._s(item))])
                                          ])
                                        })
                                      ],
                                      2
                                    )
                                  : _vm._e()
                              ])
                            }),
                            0
                          )
                        ],
                        1
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
          })
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

/***/ "./resources/js/views/modules/admin/activity_logs/Index.vue":
/*!******************************************************************!*\
  !*** ./resources/js/views/modules/admin/activity_logs/Index.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_5c10f24b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=5c10f24b& */ "./resources/js/views/modules/admin/activity_logs/Index.vue?vue&type=template&id=5c10f24b&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/activity_logs/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_5c10f24b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_5c10f24b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/activity_logs/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/activity_logs/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/activity_logs/Index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/activity_logs/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/activity_logs/Index.vue?vue&type=template&id=5c10f24b&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/activity_logs/Index.vue?vue&type=template&id=5c10f24b& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5c10f24b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=5c10f24b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/activity_logs/Index.vue?vue&type=template&id=5c10f24b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5c10f24b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5c10f24b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);