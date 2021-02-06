(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/vendors/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/vendors/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {},
  data: function data() {
    return {
      loading: true,
      headers: [{
        text: "Name",
        value: "name"
      }, {
        text: "Contact",
        value: "telephone_number"
      }, // { text: "Address", value: "address" },
      {
        text: "TIN",
        value: "tin"
      }, {
        text: "Type",
        value: "is_vat_inclusive"
      }, // { text: "Updated", value: "updated_at" },
      {
        text: "Actions",
        value: "actions",
        sortable: false
      }, {
        text: "",
        value: "data-table-expand"
      }],
      items: [],
      status: "Active",
      statuses: ["Active", "Archived"],
      selected: [],
      search: "",
      totalItems: 0,
      options: {
        sortBy: ["name"],
        sortDesc: [false],
        page: 1,
        itemsPerPage: 10
      }
    };
  },
  methods: {
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

        var status = _this.status;
        axios.get("/api/vendors", {
          params: {
            search: search,
            sortBy: sortBy[0],
            sortType: sortDesc[0] ? "desc" : "asc",
            page: page,
            itemsPerPage: itemsPerPage,
            status: status
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
    },
    onRefresh: function onRefresh() {
      Object.assign(this.$data, this.$options.data.apply(this));
      this.selected = [];
    },
    onShow: function onShow(item) {
      this.$router.push({
        name: "admin.vendors.show",
        params: {
          id: item.id
        }
      });
    },
    onEdit: function onEdit(item) {
      this.$router.push({
        name: "admin.vendors.edit",
        params: {
          id: item.id
        }
      });
    },
    onDelete: function onDelete() {
      var _this = this;

      if (_this.selected.length == 0) {
        this.$dialog.message.error("No item(s) selected", {
          position: "top-right",
          timeout: 2000
        });
        return;
      }

      this.$confirm("Move item(s) to archive?").then(function (res) {
        if (res) {
          axios["delete"]("/api/vendors/".concat(_this.selected[0].id), {
            params: {
              ids: _this.selected.map(function (item) {
                return item.id;
              })
            }
          }).then(function (response) {
            _this.$dialog.message.success("Item(s) moved to archive.", {
              position: "top-right",
              timeout: 2000
            });

            _this.getDataFromApi().then(function (data) {
              _this.items = data.items;
              _this.totalItems = data.total;
            });

            _this.selected = [];
          })["catch"](function (error) {
            console.log(error);
            console.log(error.response);

            _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
          });
        }
      });
    },
    onRestore: function onRestore() {
      var _this = this;

      if (_this.selected.length == 0) {
        this.$dialog.message.error("No item(s) selected", {
          position: "top-right",
          timeout: 2000
        });
        return;
      }

      this.$confirm("Do you want to restore account(s)?").then(function (res) {
        if (res) {
          axios.put("/api/vendors/".concat(_this.selected[0].id), {
            ids: _this.selected.map(function (item) {
              return item.id;
            }),
            action: "restore"
          }).then(function (response) {
            _this.$dialog.message.success("Item(s) restored.", {
              position: "top-right",
              timeout: 2000
            });

            _this.getDataFromApi().then(function (data) {
              _this.items = data.items;
              _this.totalItems = data.total;
            });

            _this.selected = [];
          })["catch"](function (error) {
            console.log(error);
            console.log(error.response);

            _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
          });
        }
      });
    }
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
      return _objectSpread(_objectSpread({}, this.options), {}, _defineProperty({
        query: this.search
      }, "query", this.status));
    }
  },
  created: function created() {
    this.$store.dispatch("AUTH_NOTIFICATIONS");
  },
  activated: function activated() {
    var _this4 = this;

    this.$store.dispatch("AUTH_NOTIFICATIONS");
    this.getDataFromApi().then(function (data) {
      _this4.items = data.items;
      _this4.totalItems = data.total;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/vendors/Index.vue?vue&type=template&id=72d02357&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/vendors/Index.vue?vue&type=template&id=72d02357& ***!
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
      _c(
        "v-card",
        { staticClass: "elevation-0 pt-0" },
        [
          _c(
            "v-card-title",
            { staticClass: "pt-0" },
            [
              _c("h4", { staticClass: "title green--text" }, [
                _vm._v("Vendors")
              ]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-tooltip",
                {
                  attrs: { bottom: "" },
                  scopedSlots: _vm._u(
                    [
                      _vm.mixin_can("add vendors")
                        ? {
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
                                          to: { name: "admin.vendors.create" },
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
                        : null
                    ],
                    null,
                    true
                  )
                },
                [_vm._v(" "), _c("span", [_vm._v("Add New")])]
              ),
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
                                            _c(
                                              "v-icon",
                                              { attrs: { dark: "" } },
                                              [_vm._v("mdi-filter")]
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
                              _c("v-select", {
                                attrs: { items: _vm.statuses, label: "Status" },
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
                "v-menu",
                {
                  attrs: {
                    "offset-y": "",
                    transition: "scale-transition",
                    left: ""
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
                                                staticClass: "elevation-3",
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
                                            _c(
                                              "v-icon",
                                              { attrs: { dark: "" } },
                                              [
                                                _vm._v(
                                                  "mdi-view-grid-plus-outline"
                                                )
                                              ]
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
                              )
                            },
                            [_vm._v(" "), _c("span", [_vm._v("More Options")])]
                          )
                        ]
                      }
                    }
                  ])
                },
                [
                  _vm._v(" "),
                  _c(
                    "v-list",
                    [
                      _c(
                        "v-list-item",
                        { on: { click: _vm.onRestore } },
                        [
                          _c(
                            "v-list-item-icon",
                            [_c("v-icon", [_vm._v("mdi-history")])],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-list-item-subtitle", [
                            _vm._v(
                              "\n                            Restore\n                        "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item",
                        { on: { click: _vm.onDelete } },
                        [
                          _c(
                            "v-list-item-icon",
                            [_c("v-icon", [_vm._v("mdi-trash-can-outline")])],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-list-item-subtitle", [
                            _vm._v(
                              "\n                            Move to archive\n                        "
                            )
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
                      key: "item.is_vat_inclusive",
                      fn: function(ref) {
                        var item = ref.item
                        return [
                          _vm._v(
                            "\n                    " +
                              _vm._s(
                                item.is_vat_inclusive == 1 ? "VAT" : "Non-VAT"
                              ) +
                              "\n                "
                          )
                        ]
                      }
                    },
                    {
                      key: "item.tin",
                      fn: function(ref) {
                        var item = ref.item
                        return [
                          _vm._v(
                            "\n                    " +
                              _vm._s(item.tin == null ? "N/A" : item.tin) +
                              "\n                "
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
                                    _c("td", [_c("strong", [_vm._v("Code")])]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(":")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(item.code))])
                                  ]),
                                  _vm._v(" "),
                                  _c("tr", [
                                    _c("td", [_c("strong", [_vm._v("Email")])]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(":")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(item.email))])
                                  ]),
                                  _vm._v(" "),
                                  _c("tr", [
                                    _c("td", [
                                      _c("strong", [_vm._v("Telephone #")])
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(":")]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(_vm._s(item.telephone_number))
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("tr", [
                                    _c("td", [
                                      _c("strong", [_vm._v("Website")])
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(":")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(item.website))])
                                  ]),
                                  _vm._v(" "),
                                  _c("tr", [
                                    _c("td", [
                                      _c("strong", [_vm._v("Address")])
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(":")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(item.address))])
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
                          _vm.mixin_can("edit vendors")
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/modules/admin/vendors/Index.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/modules/admin/vendors/Index.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_72d02357___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=72d02357& */ "./resources/js/views/modules/admin/vendors/Index.vue?vue&type=template&id=72d02357&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/vendors/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_72d02357___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_72d02357___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/vendors/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/vendors/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/vendors/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/vendors/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/vendors/Index.vue?vue&type=template&id=72d02357&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/vendors/Index.vue?vue&type=template&id=72d02357& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_72d02357___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=72d02357& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/vendors/Index.vue?vue&type=template&id=72d02357&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_72d02357___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_72d02357___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);