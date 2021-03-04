(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selector/DepartmentDropdownSelector.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/selector/DepartmentDropdownSelector.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_DepartmentDataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/DepartmentDataService */ "./resources/js/services/DepartmentDataService.js");
//
//
//
//
//
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
    selectedDepartment: {
      type: Object,
      "default": function _default() {}
    },
    parameters: {
      type: Object,
      "default": function _default() {}
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
    },
    showAll: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      collections: {
        departments: []
      }
    };
  },
  methods: {
    getDataFromApi: function getDataFromApi() {
      var _this = this;

      _services_DepartmentDataService__WEBPACK_IMPORTED_MODULE_0__["default"].getAll().then(function (response) {
        _this.collections.departments = response.data.data;

        if (_this.showAll) {
          _this.collections.departments.unshift({
            id: null,
            name: "All Departments"
          });
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    onReset: function onReset() {
      this.computedSelectedDepartment = null;
      this.$emit("onReset");
    },
    onChange: function onChange(e) {
      this.computedSelectedDepartment = e;
      this.$emit("onChange", e);
    }
  },
  computed: {
    computedSelectedDepartment: {
      get: function get() {
        return this.selectedDepartment;
      },
      set: function set(value) {
        return value;
      }
    }
  },
  created: function created() {
    this.getDataFromApi();
  },
  activated: function activated() {
    this.getDataFromApi();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/jobs/Index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/jobs/Index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_JobDataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/JobDataService */ "./resources/js/services/JobDataService.js");
/* harmony import */ var _components_selector_DepartmentDropdownSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/selector/DepartmentDropdownSelector */ "./resources/js/components/selector/DepartmentDropdownSelector.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DepartmentDropdownSelector: _components_selector_DepartmentDropdownSelector__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      loading: true,
      collections: {
        selected: [],
        items: [],
        headers: [{
          text: "Name",
          value: "name"
        }, {
          text: "Department",
          value: "department.name",
          sortable: false
        }, {
          text: "Actions",
          value: "actions",
          sortable: false
        }]
      },
      filters: {
        department: {
          id: null,
          name: "All Departments"
        },
        status: "Active",
        search: "",
        statuses: ["Active", "Archived"]
      },
      options: {
        sortBy: ["name"],
        sortDesc: [false],
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
    onChangeDepartment: function onChangeDepartment(value) {
      this.filters.department = value;
    },
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

        var search = _this.filters.search.trim().toLowerCase();

        var department_id = _this.filters.department.id;
        var status = _this.filters.status;
        var data = {
          params: {
            search: search,
            sortBy: sortBy[0],
            sortType: sortDesc[0] ? "desc" : "asc",
            page: page,
            itemsPerPage: itemsPerPage,
            status: status,
            department_id: department_id
          }
        };
        _services_JobDataService__WEBPACK_IMPORTED_MODULE_0__["default"].getAll(data).then(function (response) {
          resolve(response.data);
        })["catch"](function (error) {
          _this2.mixin_showErrors(error);
        })["finally"](function () {
          _this.loading = false;
        });
      });
    },
    onRefresh: function onRefresh() {
      Object.assign(this.$data, this.$options.data.apply(this));
      this.collections.selected = [];
    },
    onShow: function onShow(item) {
      this.$router.push({
        name: "admin.jobs.show",
        params: {
          id: item.id
        }
      });
    },
    onEdit: function onEdit(item) {
      this.$router.push({
        name: "admin.jobs.edit",
        params: {
          id: item.id
        }
      });
    },
    onDelete: function onDelete() {
      var _this = this;

      if (_this.collections.selected.length == 0) {
        this.$dialog.message.error("No item(s) selected", {
          position: "top-right",
          timeout: 2000
        });
        return;
      }

      this.$confirm("Move item(s) to archive?").then(function (res) {
        if (res) {
          var data = {
            params: {
              ids: _this.collections.selected.map(function (item) {
                return item.id;
              })
            }
          };
          _services_JobDataService__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](_this.collections.selected[0].id, data).then(function (response) {
            _this.mixin_successDialog(response.data.status, response.data.message);

            _this.getDataFromApi().then(function (data) {
              _this.collections.items = data.data;
              _this.meta = data.meta;
            });

            _this.collections.selected = [];
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

      if (_this.collections.selected.length == 0) {
        this.$dialog.message.error("No item(s) selected", {
          position: "top-right",
          timeout: 2000
        });
        return;
      }

      this.$confirm("Do you want to restore account(s)?").then(function (res) {
        if (res) {
          var data = {
            ids: _this.collections.selected.map(function (item) {
              return item.id;
            })
          };
          _services_JobDataService__WEBPACK_IMPORTED_MODULE_0__["default"].restore(_this.collections.selected[0].id, data).then(function (response) {
            _this.mixin_successDialog(response.data.status, response.data.message);

            _this.getDataFromApi().then(function (data) {
              _this.collections.items = data.data;
              _this.meta = data.meta;
            });

            _this.collections.selected = [];
          })["catch"](function (error) {
            this.mixin_showErrors(error);
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
          _this3.collections.items = data.data;
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
      }, _defineProperty(_objectSpread2, "query", this.filters.status), _defineProperty(_objectSpread2, "query", this.filters.department), _objectSpread2));
    }
  },
  created: function created() {
    this.$store.dispatch("AUTH_NOTIFICATIONS");
  },
  activated: function activated() {
    var _this4 = this;

    this.$store.dispatch("AUTH_NOTIFICATIONS");
    this.getDataFromApi().then(function (data) {
      _this4.collections.items = data.data;
      _this4.meta = data.meta;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selector/DepartmentDropdownSelector.vue?vue&type=template&id=8a3d8c52&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/selector/DepartmentDropdownSelector.vue?vue&type=template&id=8a3d8c52& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _c("v-autocomplete", {
    attrs: {
      label: "Department",
      "item-value": "id",
      "item-text": "name",
      "return-object": "",
      items: _vm.collections.departments,
      rules: _vm.rules,
      "error-messages": _vm.errors
    },
    on: { change: _vm.onChange },
    model: {
      value: _vm.computedSelectedDepartment,
      callback: function($$v) {
        _vm.computedSelectedDepartment = $$v
      },
      expression: "computedSelectedDepartment"
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/jobs/Index.vue?vue&type=template&id=4b598b80&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/jobs/Index.vue?vue&type=template&id=4b598b80& ***!
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
      _c(
        "v-card",
        { staticClass: "elevation-0 pt-0" },
        [
          _c(
            "v-card-title",
            { staticClass: "pt-0" },
            [
              _c("h4", { staticClass: "title green--text" }, [
                _vm._v("Job Designations")
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
                      _vm.mixin_can("add jobs")
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
                                          to: { name: "admin.jobs.create" },
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
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            { staticClass: "ml-4" },
            [
              _vm.collections.selected.length > 0
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
                          _vm.collections.selected = []
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.collections.selected.length) +
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
                          _vm.filters.status != null
                            ? _c(
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
                                    "\n                        " +
                                      _vm._s(_vm.filters.status) +
                                      "\n                    "
                                  )
                                ]
                              )
                            : _vm._e()
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
                                  items: _vm.filters.statuses,
                                  label: "Status"
                                },
                                model: {
                                  value: _vm.filters.status,
                                  callback: function($$v) {
                                    _vm.$set(_vm.filters, "status", $$v)
                                  },
                                  expression: "filters.status"
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
                          _vm.filters.department != null
                            ? _c(
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
                                    "\n                        " +
                                      _vm._s(_vm.filters.department.name) +
                                      "\n                    "
                                  )
                                ]
                              )
                            : _vm._e()
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
                              _c("DepartmentDropdownSelector", {
                                ref: "departmentDropdownSelector",
                                attrs: {
                                  selectedDepartment: _vm.filters.department,
                                  showAll: true
                                },
                                on: { onChange: _vm.onChangeDepartment }
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
                  staticClass: "mr-2 mb-2",
                  attrs: { close: "", small: "", "close-icon": "mdi-refresh" },
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
                        _vm.collections.selected.length > 0 &&
                        _vm.filters.status == "Archived",
                      expression:
                        "collections.selected.length > 0 && filters.status == 'Archived'"
                    }
                  ],
                  staticClass: "mr-2 mb-2",
                  attrs: {
                    close: "",
                    small: "",
                    "close-icon": "mdi-history",
                    color: "green"
                  },
                  on: { "click:close": _vm.onRestore }
                },
                [_vm._v("\n                Restore\n            ")]
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
                        _vm.collections.selected.length > 0 &&
                        _vm.filters.status == "Active",
                      expression:
                        "collections.selected.length > 0 && filters.status == 'Active'"
                    }
                  ],
                  staticClass: "mr-2 mb-2",
                  attrs: {
                    close: "",
                    small: "",
                    "close-icon": "mdi-trash-can-outline",
                    color: "red"
                  },
                  on: { "click:close": _vm.onDelete }
                },
                [_vm._v("\n                Archive\n            ")]
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
                  value: _vm.filters.search,
                  callback: function($$v) {
                    _vm.$set(_vm.filters, "search", $$v)
                  },
                  expression: "filters.search"
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
                  headers: _vm.collections.headers,
                  items: _vm.collections.items,
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
                      key: "item.actions",
                      fn: function(ref) {
                        var item = ref.item
                        return [
                          _vm.mixin_can("edit jobs")
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
                  value: _vm.collections.selected,
                  callback: function($$v) {
                    _vm.$set(_vm.collections, "selected", $$v)
                  },
                  expression: "collections.selected"
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

/***/ "./resources/js/components/selector/DepartmentDropdownSelector.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/selector/DepartmentDropdownSelector.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DepartmentDropdownSelector_vue_vue_type_template_id_8a3d8c52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DepartmentDropdownSelector.vue?vue&type=template&id=8a3d8c52& */ "./resources/js/components/selector/DepartmentDropdownSelector.vue?vue&type=template&id=8a3d8c52&");
/* harmony import */ var _DepartmentDropdownSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DepartmentDropdownSelector.vue?vue&type=script&lang=js& */ "./resources/js/components/selector/DepartmentDropdownSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DepartmentDropdownSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DepartmentDropdownSelector_vue_vue_type_template_id_8a3d8c52___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DepartmentDropdownSelector_vue_vue_type_template_id_8a3d8c52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/selector/DepartmentDropdownSelector.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/selector/DepartmentDropdownSelector.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/selector/DepartmentDropdownSelector.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DepartmentDropdownSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DepartmentDropdownSelector.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selector/DepartmentDropdownSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DepartmentDropdownSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/selector/DepartmentDropdownSelector.vue?vue&type=template&id=8a3d8c52&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/selector/DepartmentDropdownSelector.vue?vue&type=template&id=8a3d8c52& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DepartmentDropdownSelector_vue_vue_type_template_id_8a3d8c52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DepartmentDropdownSelector.vue?vue&type=template&id=8a3d8c52& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selector/DepartmentDropdownSelector.vue?vue&type=template&id=8a3d8c52&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DepartmentDropdownSelector_vue_vue_type_template_id_8a3d8c52___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DepartmentDropdownSelector_vue_vue_type_template_id_8a3d8c52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/DepartmentDataService.js":
/*!********************************************************!*\
  !*** ./resources/js/services/DepartmentDataService.js ***!
  \********************************************************/
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


var DepartmentDataService = /*#__PURE__*/function () {
  function DepartmentDataService() {
    _classCallCheck(this, DepartmentDataService);
  }

  _createClass(DepartmentDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/departments", data);
    }
  }, {
    key: "get",
    value: function get(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/data/departments", data);
    }
  }, {
    key: "show",
    value: function show(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/departments/".concat(id), data);
    }
  }, {
    key: "store",
    value: function store(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/departments", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/departments/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/departments/".concat(id), data);
    }
  }, {
    key: "restore",
    value: function restore(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/departments/restore/".concat(id), data);
    }
  }]);

  return DepartmentDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new DepartmentDataService());

/***/ }),

/***/ "./resources/js/services/JobDataService.js":
/*!*************************************************!*\
  !*** ./resources/js/services/JobDataService.js ***!
  \*************************************************/
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


var JobDataService = /*#__PURE__*/function () {
  function JobDataService() {
    _classCallCheck(this, JobDataService);
  }

  _createClass(JobDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/jobs", data);
    }
  }, {
    key: "get",
    value: function get(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/data/jobs", data);
    }
  }, {
    key: "show",
    value: function show(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/jobs/".concat(id), data);
    }
  }, {
    key: "store",
    value: function store(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/jobs", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/jobs/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/jobs/".concat(id), data);
    }
  }, {
    key: "restore",
    value: function restore(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/jobs/restore/".concat(id), data);
    }
  }]);

  return JobDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new JobDataService());

/***/ }),

/***/ "./resources/js/views/modules/admin/jobs/Index.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/modules/admin/jobs/Index.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_4b598b80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=4b598b80& */ "./resources/js/views/modules/admin/jobs/Index.vue?vue&type=template&id=4b598b80&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/jobs/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_4b598b80___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_4b598b80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/jobs/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/jobs/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/modules/admin/jobs/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/jobs/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/jobs/Index.vue?vue&type=template&id=4b598b80&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/jobs/Index.vue?vue&type=template&id=4b598b80& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4b598b80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=4b598b80& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/jobs/Index.vue?vue&type=template&id=4b598b80&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4b598b80___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4b598b80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);