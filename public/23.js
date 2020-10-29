(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/adjustments/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/adjustments/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
// import moment from "moment";
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      headers: [// { text: "Reference", value: "reference" },
      {
        text: "Description",
        value: "description"
      }, {
        text: "Added",
        value: "add_amount",
        sortable: false
      }, {
        text: "Subtracted",
        value: "subtract_amount",
        sortable: false
      }, {
        text: "Type",
        value: "type"
      }, {
        text: "Last Updated",
        value: "updated_at"
      }],
      items: [],
      status: "Active",
      statuses: ["Active", "Cancelled"],
      selected: [],
      search: "",
      totalItems: 0,
      options: {
        sortBy: ["updated_at"],
        sortDesc: [true],
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
        axios.get("/api/adjustments", {
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
    },
    onShow: function onShow(item) {
      this.$router.push({
        name: "admin.adjustments.show",
        params: {
          id: item.id
        }
      });
    },
    onEdit: function onEdit(item) {
      this.$router.push({
        name: "admin.adjustments.edit",
        params: {
          id: item.id
        }
      });
    },
    onCreate: function onCreate(transaction_type) {
      switch (transaction_type) {
        case "revolving_fund":
          this.$router.push({
            name: "admin.adjustments.manage.fund"
          });
          break;

        default:
          break;
      }
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
  mounted: function mounted() {
    var _this4 = this;

    this.getDataFromApi().then(function (data) {
      _this4.items = data.items;
      _this4.totalItems = data.total;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/adjustments/Index.vue?vue&type=template&id=8d0b3cdc&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/adjustments/Index.vue?vue&type=template&id=8d0b3cdc& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
                _vm._v("Adjustments")
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
                        {
                          on: {
                            click: function($event) {
                              return _vm.onCreate("revolving_fund")
                            }
                          }
                        },
                        [
                          _c(
                            "v-list-item-icon",
                            [
                              _c("v-icon", [
                                _vm._v("mdi-text-box-plus-outline")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-list-item-subtitle", [
                            _vm._v(
                              "\n                            Manage Revolving Fund\n                        "
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
                  "show-select": "",
                  "item-key": "id",
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
                      key: "item.updated_at",
                      fn: function(ref) {
                        var item = ref.item
                        return [
                          _vm._v(
                            "\n                    " +
                              _vm._s(
                                _vm.mixin_formatDate(
                                  item.updated_at,
                                  "YYYY-MM-DD HH:mm:ss"
                                )
                              ) +
                              "\n                "
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
                                item.add_amount > 0
                                  ? item.add_amount
                                  : item.subtract_amount
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

/***/ "./resources/js/views/modules/admin/adjustments/Index.vue":
/*!****************************************************************!*\
  !*** ./resources/js/views/modules/admin/adjustments/Index.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_8d0b3cdc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=8d0b3cdc& */ "./resources/js/views/modules/admin/adjustments/Index.vue?vue&type=template&id=8d0b3cdc&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/adjustments/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_8d0b3cdc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_8d0b3cdc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/adjustments/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/adjustments/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/adjustments/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/adjustments/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/adjustments/Index.vue?vue&type=template&id=8d0b3cdc&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/adjustments/Index.vue?vue&type=template&id=8d0b3cdc& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_8d0b3cdc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=8d0b3cdc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/adjustments/Index.vue?vue&type=template&id=8d0b3cdc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_8d0b3cdc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_8d0b3cdc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);