(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

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
/* harmony import */ var _components_selector_dialog_UserDialogSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/selector/dialog/UserDialogSelector */ "./resources/js/components/selector/dialog/UserDialogSelector.vue");
/* harmony import */ var _services_ActivityLogDataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/ActivityLogDataService */ "./resources/js/services/ActivityLogDataService.js");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DateRangePicker: _components_daterangepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_1__["default"],
    UserDialogSelector: _components_selector_dialog_UserDialogSelector__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      loading: true,
      collections: {
        activityLogs: [],
        selectedActivityLogs: [],
        export_data: [],
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
        }]
      },
      filters: {
        search: "",
        preset: "",
        selectedUser: null,
        date_range: [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("month").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("month").format("YYYY-MM-DD")],
        presets: ["Today", "Yesterday", "Last 7 Days", "Last 30 Days", "This Week", "This Month", "This Quarter", "This Year", "Last Week", "Last Month", "Last Quarter", "Last Year", "Last 5 Years"]
      },
      options: {
        sortBy: ["created_at"],
        sortDesc: [true],
        page: 1,
        itemsPerPage: 10
      },
      meta: {
        current_page: 0,
        from: 0,
        last_page: 0,
        path: "",
        per_page: 10,
        to: 0,
        total: 0
      }
    };
  },
  methods: {
    updateDates: function updateDates(e) {
      this.filters.date_range = e;
    },
    selectUser: function selectUser(e) {
      this.collections.selectedActivityLogs = [];

      if (e == null || e == undefined) {
        // this.filters.selectedUser = {
        //     id: 0,
        //     username: "",
        //     name: "All Users",
        //     email: ""
        // };
        this.filters.selectedUser = null;
        return;
      }

      this.filters.selectedUser = e;
    },
    resetUser: function resetUser() {
      this.collections.selectedActivityLogs = [];
      this.filters.selectedUser = null;
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

        var search = _this.filters.search.trim().toLowerCase();

        var user_id = _this.filters.selectedUser ? _this.filters.selectedUser.id : null;
        var range = _this.filters.date_range;
        var data = {
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
        };
        _services_ActivityLogDataService__WEBPACK_IMPORTED_MODULE_3__["default"].getAll(data).then(function (response) {
          resolve(response.data);
        })["catch"](function (error) {
          reject();

          _this.mixin_showErrors(error);
        })["finally"](function () {
          _this.loading = false;
        });
      });
    },
    onReset: function onReset() {
      Object.assign(this.$data, this.$options.data.apply(this));
      this.collections.selectedActivityLogs = [];
      this.filters.selectedUser = null;
    },
    hasLink: function hasLink(item) {
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
    }
  },
  watch: {
    params: {
      handler: function handler() {
        var _this2 = this;

        this.getDataFromApi().then(function (data) {
          _this2.collections.activityLogs = data.data;
          _this2.meta = data.meta;
        });
      },
      deep: true
    }
  },
  computed: {
    params: function params(nv) {
      var _objectSpread2;

      return _objectSpread(_objectSpread({}, this.options), {}, (_objectSpread2 = {
        query: this.filters.search
      }, _defineProperty(_objectSpread2, "query", this.filters.selectedUser), _defineProperty(_objectSpread2, "query", this.filters.date_range), _objectSpread2));
    },
    formattedDateRange: function formattedDateRange() {
      var start_date = moment__WEBPACK_IMPORTED_MODULE_0___default()(this.filters.date_range[0]).format("MMM DD, YYYY");
      var end_date = moment__WEBPACK_IMPORTED_MODULE_0___default()(this.filters.date_range[1]).format("MMM DD, YYYY");

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
    this.$store.dispatch("AUTH_NOTIFICATIONS");
  },
  activated: function activated() {
    var _this3 = this;

    this.$store.dispatch("AUTH_NOTIFICATIONS");
    this.getDataFromApi().then(function (data) {
      _this3.collections.activityLogs = data.data;
      _this3.meta = data.meta;
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
          _c("v-spacer")
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card-subtitle",
        [
          _c("DateRangePicker", {
            attrs: {
              buttonType: true,
              buttonText: true,
              buttonColor: "grey",
              buttonClass: "ml-0 pl-0",
              preset: _vm.filters.preset,
              presets: _vm.filters.presets,
              value: _vm.filters.date_range
            },
            on: { updateDates: _vm.updateDates }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "ml-4" },
        [
          _c("UserDialogSelector", {
            ref: "userDialogSelector",
            attrs: { selectedUser: _vm.filters.selectedUser },
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
                          { staticClass: "mr-2 mb-2", attrs: { small: "" } },
                          "v-chip",
                          bind,
                          false
                        ),
                        on
                      ),
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(
                              computedSelectedUser
                                ? computedSelectedUser.name
                                : "All Employees"
                            ) +
                            "\n                "
                        )
                      ]
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _vm.collections.selectedActivityLogs.length > 0
            ? _c(
                "v-chip",
                {
                  staticClass: "mr-2 mb-2",
                  attrs: {
                    color: "green",
                    dark: "",
                    close: "",
                    small: "",
                    "close-icon": "mdi-close"
                  },
                  on: {
                    "click:close": function($event) {
                      _vm.collections.selectedActivityLogs = []
                    }
                  }
                },
                [
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.collections.selectedActivityLogs.length) +
                      " Selected\n        "
                  )
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-chip",
            {
              staticClass: "mr-2 mb-2",
              attrs: { close: "", small: "", "close-icon": "mdi-refresh" },
              on: { "click:close": _vm.onReset }
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
              headers: _vm.collections.headers,
              items: _vm.collections.activityLogs,
              loading: _vm.loading,
              options: _vm.options,
              "server-items-length": _vm.meta.total,
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
              value: _vm.collections.selectedActivityLogs,
              callback: function($$v) {
                _vm.$set(_vm.collections, "selectedActivityLogs", $$v)
              },
              expression: "collections.selectedActivityLogs"
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

/***/ "./resources/js/services/ActivityLogDataService.js":
/*!*********************************************************!*\
  !*** ./resources/js/services/ActivityLogDataService.js ***!
  \*********************************************************/
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


var ActivityLogDataService = /*#__PURE__*/function () {
  function ActivityLogDataService() {
    _classCallCheck(this, ActivityLogDataService);
  }

  _createClass(ActivityLogDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/activity_logs", data);
    }
  }]);

  return ActivityLogDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new ActivityLogDataService());

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