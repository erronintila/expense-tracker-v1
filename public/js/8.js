(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selector/dialog/UserDialogSelector.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/selector/dialog/UserDialogSelector.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
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
    },
    selectedUser: {
      type: Object,
      "default": null
    },
    usersParameters: {
      type: Object,
      "default": null
    }
  },
  data: function data() {
    return {
      dialog: false,
      loading: false,
      collections: {
        selected: null,
        items: []
      },
      filters: {
        search: ""
      },
      options: {
        sortBy: ["last_name"],
        sortDesc: [false],
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

        var params = {
          search: search,
          sortBy: sortBy[0],
          sortType: sortDesc[0] ? "desc" : "asc",
          page: page,
          itemsPerPage: itemsPerPage
        };
        var data = {};

        if (_this2.usersParameters) {
          if (_this2.usersParameters.params) {
            data = {
              params: _objectSpread(_objectSpread({}, params), _this2.usersParameters.params)
            };
          } else {
            data = {
              params: _objectSpread({}, params)
            };
          }
        } else {
          data = {
            params: _objectSpread({}, params)
          };
        } // data = { ...params };


        _services_UserDataService__WEBPACK_IMPORTED_MODULE_0__["default"].getAll(data).then(function (response) {
          resolve(response.data);
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
      this.filters.search = "";
      this.computedSelectedUser = null;
      this.options = {
        sortBy: ["last_name"],
        sortDesc: [false],
        page: 1,
        itemsPerPage: 10
      };
      return this.$emit("onReset", this.computedSelectedUser);
    },
    selectUser: function selectUser(e) {
      this.computedSelectedUser = e;
      this.$emit("selectUser", e);
    },
    getJobName: function getJobName(user) {
      if (user.job) {
        return user.job.name;
      }

      return "";
    },
    getDepartmentName: function getDepartmentName(user) {
      if (user.job) {
        if (user.job.department) {
          return user.job.department.name;
        }
      }

      return "";
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
      return _objectSpread(_objectSpread({}, this.options), {}, {
        query: this.filters.search
      });
    },
    computedSelectedUser: {
      get: function get() {
        if (this.selectedUser) {
          return this.selectedUser;
        }

        return null;
      },
      set: function set(value) {
        return value;
      }
    }
  },
  created: function created() {
    var _this4 = this;

    this.getDataFromApi().then(function (data) {
      _this4.collections.items = data.data;
      _this4.meta = data.meta;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selector/dialog/UserDialogSelector.vue?vue&type=template&id=72c209d8&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/selector/dialog/UserDialogSelector.vue?vue&type=template&id=72c209d8& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
          scopedSlots: _vm._u(
            [
              {
                key: "activator",
                fn: function(ref) {
                  var on = ref.on
                  var attrs = ref.attrs
                  return [
                    _vm._t("openDialog", null, null, {
                      attrs: attrs,
                      on: on,
                      computedSelectedUser: _vm.computedSelectedUser
                    })
                  ]
                }
              }
            ],
            null,
            true
          ),
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
                "v-list",
                {
                  staticClass: "overflow-y-auto",
                  attrs: { "max-height": "400", "two-line": "" }
                },
                [
                  _c(
                    "v-list-item-group",
                    {
                      attrs: {
                        "active-class": "green--text",
                        multiple: _vm.multipleSelection
                      },
                      on: { change: _vm.selectUser },
                      model: {
                        value: _vm.computedSelectedUser,
                        callback: function($$v) {
                          _vm.computedSelectedUser = $$v
                        },
                        expression: "computedSelectedUser"
                      }
                    },
                    [
                      _vm._l(_vm.collections.items, function(item, index) {
                        return [
                          _c(
                            "v-list-item",
                            { key: index, attrs: { value: item } },
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
                                        textContent: _vm._s(
                                          _vm.getJobName(item)
                                        )
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("v-list-item-subtitle", {
                                      domProps: {
                                        textContent: _vm._s(
                                          _vm.getDepartmentName(item)
                                        )
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]
                            ],
                            2
                          )
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
                    attrs: { length: _vm.meta.last_page, "total-visible": 7 },
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

/***/ "./resources/js/components/selector/dialog/UserDialogSelector.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/selector/dialog/UserDialogSelector.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserDialogSelector_vue_vue_type_template_id_72c209d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserDialogSelector.vue?vue&type=template&id=72c209d8& */ "./resources/js/components/selector/dialog/UserDialogSelector.vue?vue&type=template&id=72c209d8&");
/* harmony import */ var _UserDialogSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserDialogSelector.vue?vue&type=script&lang=js& */ "./resources/js/components/selector/dialog/UserDialogSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserDialogSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserDialogSelector_vue_vue_type_template_id_72c209d8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserDialogSelector_vue_vue_type_template_id_72c209d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/selector/dialog/UserDialogSelector.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/selector/dialog/UserDialogSelector.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/selector/dialog/UserDialogSelector.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDialogSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserDialogSelector.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selector/dialog/UserDialogSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDialogSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/selector/dialog/UserDialogSelector.vue?vue&type=template&id=72c209d8&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/selector/dialog/UserDialogSelector.vue?vue&type=template&id=72c209d8& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDialogSelector_vue_vue_type_template_id_72c209d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserDialogSelector.vue?vue&type=template&id=72c209d8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selector/dialog/UserDialogSelector.vue?vue&type=template&id=72c209d8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDialogSelector_vue_vue_type_template_id_72c209d8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDialogSelector_vue_vue_type_template_id_72c209d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
  }, {
    key: "export",
    value: function _export() {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/users/export");
    }
  }]);

  return UserDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new UserDataService());

/***/ })

}]);