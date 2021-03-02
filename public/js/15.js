(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/list_item_group/ListItemGroup.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/list_item_group/ListItemGroup.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    hasIcon: {
      type: Boolean,
      "default": false
    },
    item: {
      type: Object,
      "default": null
    },
    items: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    mandatory: {
      type: Boolean,
      "default": true
    },
    rules: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    errors: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {};
  },
  methods: {
    onChange: function onChange(value) {
      this.computedItem = value;
      this.$emit("onChange", value);
    },
    onReset: function onReset() {
      this.computedItem = null;
      this.$emit("onReset");
    }
  },
  computed: {
    computedItem: {
      get: function get() {
        return this.item;
      },
      set: function set(value) {
        return value;
      }
    },
    computedItems: {
      get: function get() {
        return this.items;
      },
      set: function set(value) {
        return value;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/notifications/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/notifications/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_daterangepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/daterangepicker/DateRangePicker */ "./resources/js/components/daterangepicker/DateRangePicker.vue");
/* harmony import */ var _services_NotificationDataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/NotificationDataService */ "./resources/js/services/NotificationDataService.js");
/* harmony import */ var _components_list_item_group_ListItemGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/list_item_group/ListItemGroup */ "./resources/js/components/list_item_group/ListItemGroup.vue");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DateRangePicker: _components_daterangepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_2__["default"],
    ListItemGroup: _components_list_item_group_ListItemGroup__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      loading: true,
      headers: [{
        text: "Date",
        value: "created_at"
      }, {
        text: "Employee",
        value: "data.data.user.full_name"
      }, {
        text: "Description",
        value: "data.data.description"
      }, {
        text: "Status",
        value: "status"
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
      status: {
        text: "All Unread"
      },
      // status: "All Unread",
      statuses: [{
        text: "All Unread"
      }, {
        text: "All Read"
      }, {
        text: "All Notifications"
      } // "All Unread",
      // "All Read",
      // "All Notifications"
      ],
      selected: [],
      search: "",
      options: {
        sortBy: ["updated_at"],
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
        var _this$status;

        var _this$options = _this.options,
            sortBy = _this$options.sortBy,
            sortDesc = _this$options.sortDesc,
            page = _this$options.page,
            itemsPerPage = _this$options.itemsPerPage;

        var search = _this.search.trim().toLowerCase();

        var status = (_this$status = _this.status) === null || _this$status === void 0 ? void 0 : _this$status.text;
        var range = _this.date_range;
        var data = {
          params: {
            search: search,
            sortBy: sortBy[0],
            sortType: sortDesc[0] ? "desc" : "asc",
            page: page,
            itemsPerPage: itemsPerPage,
            status: status,
            start_date: range[0],
            end_date: range[1] ? range[1] : range[0]
          }
        };
        _services_NotificationDataService__WEBPACK_IMPORTED_MODULE_3__["default"].getAll(data).then(function (response) {
          return resolve(response.data);
        })["catch"](function (error) {
          _this.mixin_showErrors(error);

          reject();
        })["finally"](function () {
          return _this.loading = false;
        });
      });
    },
    onChangeStatus: function onChangeStatus(value) {
      this.status = value;
    },
    onRefresh: function onRefresh() {
      Object.assign(this.$data, this.$options.data.apply(this));
      this.selected = [];
      this.onChangeStatus({
        text: "All Unread"
      });
    },
    onShow: function onShow(item) {
      this.$router.push({
        name: "admin.payments.show",
        params: {
          id: item.id
        }
      });
    },
    onReadUpdate: function onReadUpdate(item, action, type) {
      var _this2 = this;

      var parameters = {};
      var item_id = item ? item : this.selected.map(function (item) {
        return item.id;
      })[0];

      switch (type) {
        case "all":
          if (this.items.length <= 0) {
            this.mixin_errorDialog("Error", "No data to be updated.");
            return;
          }

          parameters = {
            action: action,
            type: type
          };
          break;

        case "multiple":
          if (this.selected.length <= 0) {
            this.mixin_errorDialog("Error", "No data selected.");
            return;
          }

          parameters = {
            action: action,
            type: type,
            ids: this.selected.map(function (item) {
              return item.id;
            })
          };
          break;

        default:
          parameters = {
            action: action,
            type: type
          };
          break;
      }

      _services_NotificationDataService__WEBPACK_IMPORTED_MODULE_3__["default"].update(item_id, parameters).then(function (response) {
        _this2.getDataFromApi().then(function (data) {
          _this2.items = data.data;
          _this2.meta = data.meta;
        });

        _this2.$store.dispatch("AUTH_NOTIFICATIONS");

        _this2.selected = [];
      })["catch"](function (error) {
        console.log(error);
        _this2.selected = [];
      });
    }
  },
  computed: {
    params: function params(nv) {
      var _objectSpread2;

      return _objectSpread(_objectSpread({}, this.options), {}, (_objectSpread2 = {
        query: this.search
      }, _defineProperty(_objectSpread2, "query", this.status), _defineProperty(_objectSpread2, "query", this.date_range), _objectSpread2));
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
  watch: {
    params: {
      handler: function handler() {
        var _this3 = this;

        this.getDataFromApi().then(function (data) {
          _this3.items = data.data;
          _this3.meta = data.meta;
        });
      },
      deep: true
    },
    items: function items() {
      this.totalAmount = this.mixin_formatNumber(this.items.reduce(function (total, item) {
        return total + item.amount;
      }, 0));
    }
  },
  created: function created() {
    this.$store.dispatch("AUTH_NOTIFICATIONS");
  },
  activated: function activated() {
    this.$store.dispatch("AUTH_NOTIFICATIONS"); // this.getDataFromApi().then(data => {
    //     this.items = data.data;
    //     this.meta = data.meta;
    // });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/list_item_group/ListItemGroup.vue?vue&type=style&index=0&id=e2725bd0&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/list_item_group/ListItemGroup.vue?vue&type=style&index=0&id=e2725bd0&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.border[data-v-e2725bd0] {\r\n    border: 2px dashed orange;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/list_item_group/ListItemGroup.vue?vue&type=style&index=0&id=e2725bd0&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/list_item_group/ListItemGroup.vue?vue&type=style&index=0&id=e2725bd0&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListItemGroup.vue?vue&type=style&index=0&id=e2725bd0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/list_item_group/ListItemGroup.vue?vue&type=style&index=0&id=e2725bd0&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/list_item_group/ListItemGroup.vue?vue&type=template&id=e2725bd0&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/list_item_group/ListItemGroup.vue?vue&type=template&id=e2725bd0&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
    "v-list",
    [
      _c(
        "v-list-item-group",
        {
          attrs: {
            mandatory: _vm.mandatory,
            "error-messages": _vm.errors,
            rules: _vm.rules
          },
          on: { change: _vm.onChange },
          model: {
            value: _vm.computedItem,
            callback: function($$v) {
              _vm.computedItem = $$v
            },
            expression: "computedItem"
          }
        },
        _vm._l(_vm.computedItems, function(item, index) {
          return _c(
            "v-list-item",
            { key: index, attrs: { value: item, "active-class": "border" } },
            [
              _vm.hasIcon
                ? _c(
                    "v-list-item-icon",
                    [_vm._t("itemIcon", null, null, { item: item })],
                    2
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "v-list-item-content",
                [
                  _c(
                    "v-list-item-title",
                    [_vm._t("itemText", null, null, { item: item })],
                    2
                  )
                ],
                1
              )
            ],
            1
          )
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/notifications/Index.vue?vue&type=template&id=0281b314&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/notifications/Index.vue?vue&type=template&id=0281b314& ***!
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
              _c("h4", { staticClass: "title green--text" }, [
                _vm._v("Notifications")
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
            "v-row",
            { staticClass: "ml-2" },
            [
              _c(
                "v-col",
                [
                  _c(
                    "v-chip",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.selected.length > 0,
                          expression: "selected.length > 0"
                        }
                      ],
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
                          _vm.selected = []
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(_vm.selected.length) +
                          " Selected\n                "
                      )
                    ]
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
                                      staticClass: "mr-2 mb-2",
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
                                    "\n                            " +
                                      _vm._s(
                                        _vm.status ? _vm.status.text : ""
                                      ) +
                                      "\n                        "
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
                          _c("ListItemGroup", {
                            attrs: { items: _vm.statuses },
                            on: { onChange: _vm.onChangeStatus },
                            scopedSlots: _vm._u([
                              {
                                key: "itemText",
                                fn: function(ref) {
                                  var item = ref.item
                                  return [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(item.text) +
                                        "\n                            "
                                    )
                                  ]
                                }
                              }
                            ]),
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
                  ),
                  _vm._v(" "),
                  _c(
                    "v-chip",
                    {
                      staticClass: "mr-2 mb-2",
                      attrs: {
                        close: "",
                        small: "",
                        "close-icon": "mdi-refresh"
                      },
                      on: { "click:close": _vm.onRefresh }
                    },
                    [_vm._v("\n                    Refresh\n                ")]
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
                            _vm.items.filter(function(item) {
                              return item.read_at == null
                            }).length > 0 && _vm.selected.length == 0,
                          expression:
                            "\n                        items.filter(item => item.read_at == null).length >\n                            0 && selected.length == 0\n                    "
                        }
                      ],
                      staticClass: "mr-2 mb-2",
                      attrs: {
                        close: "",
                        small: "",
                        "close-icon": "mdi-check",
                        color: "green",
                        dark: ""
                      },
                      on: {
                        "click:close": function($event) {
                          return _vm.onReadUpdate(null, "read", "all")
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                    Mark all as read\n                "
                      )
                    ]
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
                            _vm.selected.filter(function(item) {
                              return item.read_at == null
                            }).length > 0,
                          expression:
                            "\n                        selected.filter(item => item.read_at == null)\n                            .length > 0\n                    "
                        }
                      ],
                      staticClass: "mr-2 mb-2",
                      attrs: {
                        close: "",
                        small: "",
                        "close-icon": "mdi-check",
                        color: "green",
                        dark: ""
                      },
                      on: {
                        "click:close": function($event) {
                          return _vm.onReadUpdate(null, "read", "multiple")
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                    Mark as read\n                "
                      )
                    ]
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
                            _vm.selected.filter(function(item) {
                              return item.read_at != null
                            }).length > 0,
                          expression:
                            "\n                        selected.filter(item => item.read_at != null)\n                            .length > 0\n                    "
                        }
                      ],
                      staticClass: "mr-2 mb-2",
                      attrs: {
                        close: "",
                        small: "",
                        "close-icon": "mdi-check",
                        color: "red",
                        dark: ""
                      },
                      on: {
                        "click:close": function($event) {
                          return _vm.onReadUpdate(null, "unread", "multiple")
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                    Mark as unread\n                "
                      )
                    ]
                  )
                ],
                1
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
                  headers: _vm.headers,
                  items: _vm.items,
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
                                      _c("strong", [_vm._v("Last Updated")])
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(":")]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(
                                            _vm.mixin_formatDate(
                                              item.updated_at,
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
                                      _c("strong", [_vm._v("Read at")])
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(":")]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(
                                            _vm.mixin_formatDate(
                                              item.read_at,
                                              "YYYY-MM-DD HH:mm:ss"
                                            )
                                          ) +
                                          "\n                                    "
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
                      key: "item.actions",
                      fn: function(ref) {
                        var item = ref.item
                        return [
                          !item.read_at
                            ? _c(
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
                                              "v-icon",
                                              _vm._g(
                                                _vm._b(
                                                  {
                                                    staticClass: "mr-2",
                                                    attrs: { small: "" },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.onReadUpdate(
                                                          item.id,
                                                          "read",
                                                          "single"
                                                        )
                                                      }
                                                    }
                                                  },
                                                  "v-icon",
                                                  attrs,
                                                  false
                                                ),
                                                on
                                              ),
                                              [
                                                _vm._v(
                                                  "\n                                mdi-check\n                            "
                                                )
                                              ]
                                            )
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    true
                                  )
                                },
                                [
                                  _vm._v(" "),
                                  _c("span", [_vm._v("Mark as read")])
                                ]
                              )
                            : _c(
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
                                              "v-icon",
                                              _vm._g(
                                                _vm._b(
                                                  {
                                                    staticClass: "mr-2",
                                                    attrs: { small: "" },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.onReadUpdate(
                                                          item.id,
                                                          "unread",
                                                          "single"
                                                        )
                                                      }
                                                    }
                                                  },
                                                  "v-icon",
                                                  attrs,
                                                  false
                                                ),
                                                on
                                              ),
                                              [
                                                _vm._v(
                                                  "\n                                mdi-close\n                            "
                                                )
                                              ]
                                            )
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    true
                                  )
                                },
                                [
                                  _vm._v(" "),
                                  _c("span", [_vm._v("Mark as unread")])
                                ]
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
                                          "v-icon",
                                          _vm._g(
                                            _vm._b(
                                              {
                                                staticClass: "mr-2",
                                                attrs: { small: "" },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.$router.push(
                                                      "/admin/" +
                                                        item.data.data.model +
                                                        "/" +
                                                        item.data.data.id
                                                    )
                                                  }
                                                }
                                              },
                                              "v-icon",
                                              attrs,
                                              false
                                            ),
                                            on
                                          ),
                                          [
                                            _vm._v(
                                              "\n                                mdi-share\n                            "
                                            )
                                          ]
                                        )
                                      ]
                                    }
                                  }
                                ],
                                null,
                                true
                              )
                            },
                            [_vm._v(" "), _c("span", [_vm._v("Go to link")])]
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
                                _vm.mixin_formatDate(
                                  item.created_at,
                                  "MMM DD, YYYY HH:mm:ss"
                                )
                              ) +
                              "\n                "
                          )
                        ]
                      }
                    },
                    {
                      key: "item.description",
                      fn: function(ref) {
                        var item = ref.item
                        return [
                          _vm._v(
                            "\n                    " +
                              _vm._s(item.data.data.description) +
                              " -\n                    " +
                              _vm._s(item.data.data.expense_report.code) +
                              "\n                "
                          )
                        ]
                      }
                    },
                    {
                      key: "item.status",
                      fn: function(ref) {
                        var item = ref.item
                        return [
                          item.read_at
                            ? _c(
                                "v-chip",
                                {
                                  attrs: { color: "green", dark: "", small: "" }
                                },
                                [
                                  _vm._v(
                                    "\n                        Read\n                    "
                                  )
                                ]
                              )
                            : _c(
                                "v-chip",
                                {
                                  attrs: { color: "red", dark: "", small: "" }
                                },
                                [
                                  _vm._v(
                                    "\n                        Unread\n                    "
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

/***/ "./resources/js/components/list_item_group/ListItemGroup.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/list_item_group/ListItemGroup.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListItemGroup_vue_vue_type_template_id_e2725bd0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListItemGroup.vue?vue&type=template&id=e2725bd0&scoped=true& */ "./resources/js/components/list_item_group/ListItemGroup.vue?vue&type=template&id=e2725bd0&scoped=true&");
/* harmony import */ var _ListItemGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListItemGroup.vue?vue&type=script&lang=js& */ "./resources/js/components/list_item_group/ListItemGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ListItemGroup_vue_vue_type_style_index_0_id_e2725bd0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListItemGroup.vue?vue&type=style&index=0&id=e2725bd0&scoped=true&lang=css& */ "./resources/js/components/list_item_group/ListItemGroup.vue?vue&type=style&index=0&id=e2725bd0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ListItemGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListItemGroup_vue_vue_type_template_id_e2725bd0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListItemGroup_vue_vue_type_template_id_e2725bd0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e2725bd0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/list_item_group/ListItemGroup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/list_item_group/ListItemGroup.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/list_item_group/ListItemGroup.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItemGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListItemGroup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/list_item_group/ListItemGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItemGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/list_item_group/ListItemGroup.vue?vue&type=style&index=0&id=e2725bd0&scoped=true&lang=css&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/list_item_group/ListItemGroup.vue?vue&type=style&index=0&id=e2725bd0&scoped=true&lang=css& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItemGroup_vue_vue_type_style_index_0_id_e2725bd0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListItemGroup.vue?vue&type=style&index=0&id=e2725bd0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/list_item_group/ListItemGroup.vue?vue&type=style&index=0&id=e2725bd0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItemGroup_vue_vue_type_style_index_0_id_e2725bd0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItemGroup_vue_vue_type_style_index_0_id_e2725bd0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItemGroup_vue_vue_type_style_index_0_id_e2725bd0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItemGroup_vue_vue_type_style_index_0_id_e2725bd0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItemGroup_vue_vue_type_style_index_0_id_e2725bd0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/list_item_group/ListItemGroup.vue?vue&type=template&id=e2725bd0&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/list_item_group/ListItemGroup.vue?vue&type=template&id=e2725bd0&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItemGroup_vue_vue_type_template_id_e2725bd0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListItemGroup.vue?vue&type=template&id=e2725bd0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/list_item_group/ListItemGroup.vue?vue&type=template&id=e2725bd0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItemGroup_vue_vue_type_template_id_e2725bd0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListItemGroup_vue_vue_type_template_id_e2725bd0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/NotificationDataService.js":
/*!**********************************************************!*\
  !*** ./resources/js/services/NotificationDataService.js ***!
  \**********************************************************/
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


var NotificationDataService = /*#__PURE__*/function () {
  function NotificationDataService() {
    _classCallCheck(this, NotificationDataService);
  }

  _createClass(NotificationDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/notifications", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/notifications/".concat(id), data);
    }
  }]);

  return NotificationDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new NotificationDataService());

/***/ }),

/***/ "./resources/js/views/modules/admin/notifications/Index.vue":
/*!******************************************************************!*\
  !*** ./resources/js/views/modules/admin/notifications/Index.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_0281b314___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=0281b314& */ "./resources/js/views/modules/admin/notifications/Index.vue?vue&type=template&id=0281b314&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/notifications/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_0281b314___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_0281b314___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/notifications/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/notifications/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/notifications/Index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/notifications/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/notifications/Index.vue?vue&type=template&id=0281b314&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/notifications/Index.vue?vue&type=template&id=0281b314& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_0281b314___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=0281b314& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/notifications/Index.vue?vue&type=template&id=0281b314&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_0281b314___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_0281b314___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);