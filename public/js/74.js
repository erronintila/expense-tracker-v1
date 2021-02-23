(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/datatable/DataTable.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/datatable/DataTable.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    showSelect: {
      type: Boolean,
      "default": true
    },
    singleExpand: {
      type: Boolean,
      "default": true
    },
    showExpand: {
      type: Boolean,
      "default": true
    },
    itemKey: {
      type: String,
      "default": "id"
    },
    classStyle: {
      type: String,
      "default": "elevation-0"
    },
    options: {
      type: Object,
      "default": {
        sortBy: ["created_at"],
        sortDesc: [true],
        page: 1,
        itemsPerPage: 10
      }
    },
    loading: {
      type: Boolean,
      "default": true
    },
    footerProps: {
      type: Object,
      "default": {
        itemsPerPageOptions: [10, 20, 50, 100],
        showFirstLastPage: true,
        firstIcon: "mdi-page-first",
        lastIcon: "mdi-page-last",
        prevIcon: "mdi-chevron-left",
        nextIcon: "mdi-chevron-right"
      }
    },
    headers: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    items: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    meta: {
      type: Object,
      "default": {
        current_page: 0,
        from: 0,
        last_page: 0,
        path: "",
        per_page: "10",
        to: 0,
        total: 0
      }
    }
  },
  data: function data() {
    return {
      selected: []
    };
  },
  methods: {},
  computed: {},
  watch: {},
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selector/dialog/Users.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/selector/dialog/Users.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_UserDataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/UserDataService */ "./resources/js/services/UserDataService.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    selectedUsers: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    multipleSelection: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      dialog: false,
      loading: false,
      totalItems: 0,
      search: "",
      selected: [],
      items: [],
      options: {
        sortBy: ["last_name"],
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

        var data = {
          params: {
            search: search,
            sortBy: sortBy[0],
            sortType: sortDesc[0] ? "desc" : "asc",
            page: page,
            itemsPerPage: itemsPerPage,
            is_superadmin: false
          }
        };
        _services_UserDataService__WEBPACK_IMPORTED_MODULE_0__["default"].getAll(data).then(function (response) {
          var items = response.data.data;
          var total = response.data.meta.total;
          resolve({
            items: items,
            total: total
          });
        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);
          reject();
        })["finally"](function () {
          _this.loading = false;
        });
      });
    },
    onReset: function onReset() {
      this.dialog = false;
      this.selected = [];
      this.options = {
        sortBy: ["last_name"],
        sortDesc: [false],
        page: 1,
        itemsPerPage: 10
      };
    },
    selectUser: function selectUser() {
      this.dialog = false;
      this.selectedUser = this.selected;
      return this.$emit("selectUser", this.selected);
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
      return _objectSpread(_objectSpread({}, this.options), {}, {
        query: this.search
      });
    },
    selectedUser: {
      get: function get() {
        console.log("getter", this.selected);

        if (this.selected) {
          return this.selected.length > 0 ? this.selected : "All Employees";
        }

        return "All Employees";
      },
      set: function set(value) {
        console.log("setter", value);
        return value;
      }
    }
  },
  created: function created() {
    var _this4 = this;

    this.getDataFromApi().then(function (data) {
      _this4.items = data.items;
      _this4.totalItems = data.total;
    });
  }
});

/***/ }),

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
/* harmony import */ var _components_selector_dialog_Users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/selector/dialog/Users */ "./resources/js/components/selector/dialog/Users.vue");
/* harmony import */ var _services_ActivityLogDataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/ActivityLogDataService */ "./resources/js/services/ActivityLogDataService.js");
/* harmony import */ var _services_UserDataService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/UserDataService */ "./resources/js/services/UserDataService.js");
/* harmony import */ var _components_datatable_DataTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/datatable/DataTable */ "./resources/js/components/datatable/DataTable.vue");
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






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DateRangePicker: _components_daterangepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_1__["default"],
    DataTable: _components_datatable_DataTable__WEBPACK_IMPORTED_MODULE_5__["default"],
    Users: _components_selector_dialog_Users__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      loading: true,
      collections: {
        activityLogs: [],
        selectedActivityLogs: [],
        users: [],
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
        selectedUser: {
          id: 0,
          username: "",
          name: "All Users",
          email: ""
        },
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
        per_page: "10",
        to: 0,
        total: 0
      }
    };
  },
  methods: {
    updateDates: function updateDates(e) {
      this.filters.date_range = e;
    },
    changeUser: function changeUser() {},
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

        var user_id = _this.filters.selectedUser.id;
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
          // console.log(response);
          // let items = response.data.data;
          // let meta =  response.data.meta;
          // let export_data = items.map(item => ({
          //     user:
          //         item.user == null ? "Default" : item.user.name,
          //     description: item.description,
          //     details: item.properties.details,
          //     "created at": item.created_at
          // }));
          // this.collections.export_data = export_data;
          resolve(response.data);
        })["catch"](function (error) {
          reject();

          _this.mixin_showErrors(error);
        })["finally"](function () {
          _this.loading = false;
        });
      });
    },
    getUsers: function getUsers() {
      var _this2 = this;

      _services_UserDataService__WEBPACK_IMPORTED_MODULE_4__["default"].getAll().then(function (response) {
        _this2.collections.users = response.data.data;

        _this2.collections.users.unshift({
          id: 0,
          username: "",
          name: "All Users",
          email: ""
        });
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

        _this2.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
      });
    },
    onReset: function onReset() {
      Object.assign(this.$data, this.$options.data.apply(this));
      this.getUsers();
      this.collections.selectedActivityLogs = [];
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
    }
  },
  watch: {
    params: {
      handler: function handler() {
        var _this3 = this;

        this.getDataFromApi().then(function (data) {
          console.log("fuck", data);
          _this3.collections.activityLogs = data.data;
          _this3.meta = data.meta;
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
    this.getUsers();
    this.$store.dispatch("AUTH_NOTIFICATIONS");
  },
  activated: function activated() {
    var _this4 = this;

    this.getUsers();
    this.$store.dispatch("AUTH_NOTIFICATIONS");
    this.getDataFromApi().then(function (data) {
      _this4.collections.activityLogs = data.data;
      _this4.meta = data.meta;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/datatable/DataTable.vue?vue&type=template&id=0bc9d484&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/datatable/DataTable.vue?vue&type=template&id=0bc9d484& ***!
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
  return _c(
    "div",
    [
      _c("v-data-table", {
        class: _vm.classStyle,
        attrs: {
          "show-select": _vm.showSelect,
          "item-key": _vm.itemKey,
          "single-expand": _vm.singleExpand,
          "show-expand": _vm.showExpand,
          headers: _vm.headers,
          items: _vm.items,
          loading: _vm.loading,
          options: _vm.options,
          "server-items-length": _vm.meta.total,
          "footer-props": _vm.footerProps
        },
        on: {
          "update:options": function($event) {
            _vm.options = $event
          }
        },
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selector/dialog/Users.vue?vue&type=template&id=7cc0b8d6&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/selector/dialog/Users.vue?vue&type=template&id=7cc0b8d6& ***!
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
  return _c(
    "div",
    [
      _c(
        "v-dialog",
        {
          attrs: { width: "500" },
          scopedSlots: _vm._u([
            {
              key: "activator",
              fn: function(ref) {
                var on = ref.on
                var attrs = ref.attrs
                return [
                  _c(
                    "v-chip",
                    _vm._g(
                      _vm._b(
                        { staticClass: "mr-2", attrs: { small: "" } },
                        "v-chip",
                        attrs,
                        false
                      ),
                      on
                    ),
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.selectedUser) +
                          "\n            "
                      )
                    ]
                  )
                ]
              }
            }
          ]),
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _vm._v(" "),
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                [
                  _vm._v("\n                Employees\n                "),
                  _c("v-spacer"),
                  _vm._v(" "),
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
                "v-list",
                {
                  staticClass: "overflow-y-auto",
                  attrs: { "max-height": "400", "two-line": "", dense: "" }
                },
                [
                  _c(
                    "v-list-item-group",
                    {
                      attrs: {
                        "active-class": "green--text",
                        multiple: _vm.multipleSelection
                      },
                      model: {
                        value: _vm.selected,
                        callback: function($$v) {
                          _vm.selected = $$v
                        },
                        expression: "selected"
                      }
                    },
                    [
                      _vm._l(_vm.items, function(item, index) {
                        return [
                          _c(
                            "v-list-item",
                            { key: item.id, attrs: { value: item } },
                            [
                              [
                                _c(
                                  "v-list-item-content",
                                  [
                                    _c("v-list-item-title", {
                                      domProps: {
                                        textContent: _vm._s(item.name)
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("v-list-item-subtitle", {
                                      staticClass: "text--primary",
                                      domProps: {
                                        textContent: _vm._s(item.job.name)
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("v-list-item-subtitle", {
                                      domProps: {
                                        textContent: _vm._s(
                                          item.job.department.name
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
              ),
              _vm._v(" "),
              _c(
                "div",
                [
                  _c("v-pagination", {
                    attrs: { length: _vm.totalItems, "total-visible": 7 },
                    model: {
                      value: _vm.options.page,
                      callback: function($$v) {
                        _vm.$set(_vm.options, "page", $$v)
                      },
                      expression: "options.page"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "green darken-1", text: "" },
                      on: { click: _vm.onReset }
                    },
                    [_vm._v("\n                    Reset\n                ")]
                  ),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "green darken-1", text: "" },
                      on: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_vm._v("\n                    Close\n                ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "green darken-1", text: "" },
                      on: { click: _vm.selectUser }
                    },
                    [_vm._v("\n                    OK\n                ")]
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
  )
}
var staticRenderFns = []
render._withStripped = true



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
                      _c("v-list-item"),
                      _vm._v(" "),
                      _c(
                        "v-list-item",
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.collections.users,
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
                                    _c(
                                      "v-list",
                                      { attrs: { "max-width": "250" } },
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
                                }
                              }
                            ]),
                            model: {
                              value: _vm.filters.selectedUser,
                              callback: function($$v) {
                                _vm.$set(_vm.filters, "selectedUser", $$v)
                              },
                              expression: "filters.selectedUser"
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
          _c("Users"),
          _vm._v(" "),
          _vm.collections.selectedActivityLogs.length > 0
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
              staticClass: "mr-2",
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

/***/ "./resources/js/components/datatable/DataTable.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/datatable/DataTable.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataTable_vue_vue_type_template_id_0bc9d484___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataTable.vue?vue&type=template&id=0bc9d484& */ "./resources/js/components/datatable/DataTable.vue?vue&type=template&id=0bc9d484&");
/* harmony import */ var _DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataTable.vue?vue&type=script&lang=js& */ "./resources/js/components/datatable/DataTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DataTable_vue_vue_type_template_id_0bc9d484___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DataTable_vue_vue_type_template_id_0bc9d484___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/datatable/DataTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/datatable/DataTable.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/datatable/DataTable.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DataTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/datatable/DataTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/datatable/DataTable.vue?vue&type=template&id=0bc9d484&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/datatable/DataTable.vue?vue&type=template&id=0bc9d484& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_template_id_0bc9d484___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DataTable.vue?vue&type=template&id=0bc9d484& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/datatable/DataTable.vue?vue&type=template&id=0bc9d484&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_template_id_0bc9d484___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_template_id_0bc9d484___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/selector/dialog/Users.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/selector/dialog/Users.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vue_vue_type_template_id_7cc0b8d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=7cc0b8d6& */ "./resources/js/components/selector/dialog/Users.vue?vue&type=template&id=7cc0b8d6&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/js/components/selector/dialog/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_7cc0b8d6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Users_vue_vue_type_template_id_7cc0b8d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/selector/dialog/Users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/selector/dialog/Users.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/selector/dialog/Users.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selector/dialog/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/selector/dialog/Users.vue?vue&type=template&id=7cc0b8d6&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/selector/dialog/Users.vue?vue&type=template&id=7cc0b8d6& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_7cc0b8d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=template&id=7cc0b8d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selector/dialog/Users.vue?vue&type=template&id=7cc0b8d6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_7cc0b8d6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_7cc0b8d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/services/UserDataService.js":
/*!**************************************************!*\
  !*** ./resources/js/services/UserDataService.js ***!
  \**************************************************/
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


var UserDataService = /*#__PURE__*/function () {
  function UserDataService() {
    _classCallCheck(this, UserDataService);
  }

  _createClass(UserDataService, [{
    key: "get",
    value: function get(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/data/users", data);
    }
  }, {
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/users", data);
    }
  }, {
    key: "show",
    value: function show(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/users/".concat(id), data);
    }
  }, {
    key: "store",
    value: function store(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/users", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/users/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/users/".concat(id), data);
    }
  }, {
    key: "restore",
    value: function restore(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/users/restore/".concat(id), data);
    }
  }, {
    key: "updatePassword",
    value: function updatePassword(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/users/update_password/".concat(id), data);
    }
  }, {
    key: "resetPassword",
    value: function resetPassword(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/users/reset_password/".concat(id), data);
    }
  }, {
    key: "verifyEmail",
    value: function verifyEmail(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/users/verify_email/".concat(id), data);
    }
  }, {
    key: "updateFund",
    value: function updateFund(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/users/update_fund/".concat(id), data);
    }
  }, {
    key: "updateSettings",
    value: function updateSettings(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/users/update_settings/".concat(id), data);
    }
  }]);

  return UserDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new UserDataService());

/***/ }),

/***/ "./resources/js/views/modules/admin/activity_logs/Index.vue":
/*!******************************************************************!*\
  !*** ./resources/js/views/modules/admin/activity_logs/Index.vue ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_5c10f24b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=5c10f24b& */ "./resources/js/views/modules/admin/activity_logs/Index.vue?vue&type=template&id=5c10f24b&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/activity_logs/Index.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





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
/*! no static exports found */
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