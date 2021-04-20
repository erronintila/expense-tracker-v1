(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/admin/settings/User.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/admin/settings/User.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_UserDataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/UserDataService */ "./resources/js/services/UserDataService.js");
/* harmony import */ var _components_selector_dialog_UserDialogSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/selector/dialog/UserDialogSelector */ "./resources/js/components/selector/dialog/UserDialogSelector.vue");
/* harmony import */ var _services_ExpenseTypeDataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/ExpenseTypeDataService */ "./resources/js/services/ExpenseTypeDataService.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    UserDialogSelector: _components_selector_dialog_UserDialogSelector__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      formDataLoaded: false,
      panel: [0],
      valid: false,
      usersParameters: {
        params: {
          is_superadmin: false,
          with_expense_types: true
        }
      },
      user: null,
      headerExpenseTypes: [{
        text: "Name",
        value: "name"
      }, {
        text: "Limit",
        value: "pivot.limit"
      }],
      sub_types: [],
      all_expense_types: [],
      allowed_expense_types: null,
      expense_types: [],
      expense_type: {
        id: null,
        sub_types: null,
        pivot: {
          limit: null
        }
      },
      // expense_type_limit: null
      pivot_expense_types: [],
      pivot_sub_types: null,
      collections: {},
      filters: {}
    };
  },
  methods: {
    onChangeUser: function onChangeUser(e) {
      this.user = e;
    },
    onResetUser: function onResetUser() {
      this.user = null;
    },
    loadExpenseTypes: function loadExpenseTypes() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _services_ExpenseTypeDataService__WEBPACK_IMPORTED_MODULE_2__["default"].getAll({
          params: {
            itemsPerPage: 100
          }
        }).then(function (response) {
          _this.all_expense_types = response.data.data;
          _this.formDataLoaded = true;
          resolve();
        })["catch"](function (error) {
          _this.mixin_showErrors(error);

          _this.formDataLoaded = true;
          reject();
        });
      });
    },
    onSave: function onSave() {
      var _this2 = this;

      if (this.user == null) {
        this.mixin_errorDialog("Error", "No user selected");
        return;
      }

      this.$refs.form.validate();

      if (this.$refs.form.validate()) {
        this.loader = true;
        var data = {
          expense_types: this.allowed_expense_types.map(function (item) {
            return item.id;
          })
        };
        _services_UserDataService__WEBPACK_IMPORTED_MODULE_0__["default"].updateSettings(this.user.id, data).then(function (response) {
          _this2.mixin_successDialog(response.data.status, response.data.message);

          _this2.$store.dispatch("AUTH_USER");
        })["catch"](function (error) {
          _this2.mixin_showErrors(error);

          if (error.response) {
            if (error.response.data) {
              _this2.errors = error.response.data.errors;
            }
          }
        });
        return;
      }
    }
  },
  watch: {
    user: function user(item) {
      // this.expense_types = item.expense_types;
      this.allowed_expense_types = item ? item.expense_types : null;
      this.pivot_expense_types = item ? item.pivot_expense_types : null;
    },
    allowed_expense_types: function allowed_expense_types(items) {
      this.expense_types = items;
      this.sub_types = []; // this.expense_type_limit = null;
    },
    expense_type: function expense_type(item) {
      var expense_type_id = item.id; // let subtypes = this.pivot_sub_types.filter(item =>
      //     item.id.includes(expense_type_id)
      // );

      this.sub_types = this.pivot_sub_types;
    }
  },
  computed: {
    expense_type_limit: {
      get: function get() {
        var limit = this.expense_type.pivot == null ? null : this.expense_type.pivot.limit;
        return limit;
      },
      set: function set(newValue) {
        return newValue;
      }
    }
  },
  created: function created() {
    // this.$store.dispatch("AUTH_USER");
    this.loadExpenseTypes();
  },
  activated: function activated() {
    this.loadExpenseTypes();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/admin/settings/User.vue?vue&type=template&id=74712246&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/admin/settings/User.vue?vue&type=template&id=74712246& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
      !_vm.formDataLoaded
        ? _c("loader-component")
        : _c(
            "v-card",
            { staticClass: "elevation-0" },
            [
              _c(
                "v-card-title",
                { staticClass: "pt-0" },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "mr-3",
                      attrs: { icon: "" },
                      on: {
                        click: function($event) {
                          return _vm.$router.go(-1)
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-arrow-left")])],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c("h4", { staticClass: "title success--text" }, [
                    _vm._v("Employee Settings")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card",
                { staticClass: "mb-4" },
                [
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("UserDialogSelector", {
                                ref: "userDialogSelector",
                                attrs: {
                                  selectedUser: _vm.user,
                                  usersParameters: _vm.usersParameters
                                },
                                on: {
                                  selectUser: _vm.onChangeUser,
                                  onReset: _vm.onResetUser
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "openDialog",
                                    fn: function(ref) {
                                      var bind = ref.bind
                                      var on = ref.on
                                      var computedSelectedUser =
                                        ref.computedSelectedUser
                                      return [
                                        _c(
                                          "v-btn",
                                          _vm._g(
                                            _vm._b({}, "v-btn", bind, false),
                                            on
                                          ),
                                          [
                                            _vm._v(
                                              "\n                                    " +
                                                _vm._s(
                                                  computedSelectedUser
                                                    ? computedSelectedUser.name
                                                    : "Select Employee"
                                                ) +
                                                "\n                                "
                                            )
                                          ]
                                        )
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
              ),
              _vm._v(" "),
              _c(
                "v-form",
                {
                  ref: "form",
                  model: {
                    value: _vm.valid,
                    callback: function($$v) {
                      _vm.valid = $$v
                    },
                    expression: "valid"
                  }
                },
                [
                  _c(
                    "v-expansion-panels",
                    {
                      attrs: { multiple: "" },
                      model: {
                        value: _vm.panel,
                        callback: function($$v) {
                          _vm.panel = $$v
                        },
                        expression: "panel"
                      }
                    },
                    [
                      _c(
                        "v-expansion-panel",
                        [
                          _c("v-expansion-panel-header", [
                            _c("div", { staticClass: "green--text" }, [
                              _vm._v(
                                "\n                            Expense Types\n                        "
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-expansion-panel-content",
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", md: "4" } },
                                    [
                                      _c("v-select", {
                                        attrs: {
                                          items: _vm.all_expense_types,
                                          "item-text": "name",
                                          "item-value": "id",
                                          "return-object": "",
                                          label: "Allowed Expense Types",
                                          multiple: ""
                                        },
                                        scopedSlots: _vm._u([
                                          {
                                            key: "selection",
                                            fn: function(ref) {
                                              var item = ref.item
                                              var index = ref.index
                                              return [
                                                index === 0
                                                  ? _c(
                                                      "v-chip",
                                                      { attrs: { small: "" } },
                                                      [
                                                        _c("span", [
                                                          _vm._v(
                                                            _vm._s(item.name)
                                                          )
                                                        ])
                                                      ]
                                                    )
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                index === 1
                                                  ? _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "grey--text caption"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "(+" +
                                                            _vm._s(
                                                              _vm
                                                                .allowed_expense_types
                                                                .length - 1
                                                            ) +
                                                            "\n                                            others)"
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e()
                                              ]
                                            }
                                          }
                                        ]),
                                        model: {
                                          value: _vm.allowed_expense_types,
                                          callback: function($$v) {
                                            _vm.allowed_expense_types = $$v
                                          },
                                          expression: "allowed_expense_types"
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
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", md: "4" } },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: { color: "green", dark: "" },
                                          on: { click: _vm.onSave }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                    Save Changes\n                                "
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/ExpenseTypeDataService.js":
/*!*********************************************************!*\
  !*** ./resources/js/services/ExpenseTypeDataService.js ***!
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


var ExpenseTypeDataService = /*#__PURE__*/function () {
  function ExpenseTypeDataService() {
    _classCallCheck(this, ExpenseTypeDataService);
  }

  _createClass(ExpenseTypeDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/expense_types", data);
    }
  }, {
    key: "get",
    value: function get(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/data/expense_types", data);
    }
  }, {
    key: "show",
    value: function show(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/expense_types/".concat(id), data);
    }
  }, {
    key: "store",
    value: function store(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/expense_types", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/expense_types/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/expense_types/".concat(id), data);
    }
  }, {
    key: "restore",
    value: function restore(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/expense_types/restore/".concat(id), data);
    }
  }]);

  return ExpenseTypeDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new ExpenseTypeDataService());

/***/ }),

/***/ "./resources/js/views/pages/admin/settings/User.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/pages/admin/settings/User.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User_vue_vue_type_template_id_74712246___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User.vue?vue&type=template&id=74712246& */ "./resources/js/views/pages/admin/settings/User.vue?vue&type=template&id=74712246&");
/* harmony import */ var _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/admin/settings/User.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _User_vue_vue_type_template_id_74712246___WEBPACK_IMPORTED_MODULE_0__["render"],
  _User_vue_vue_type_template_id_74712246___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/admin/settings/User.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/admin/settings/User.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/pages/admin/settings/User.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./User.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/admin/settings/User.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/admin/settings/User.vue?vue&type=template&id=74712246&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/pages/admin/settings/User.vue?vue&type=template&id=74712246& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_74712246___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./User.vue?vue&type=template&id=74712246& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/admin/settings/User.vue?vue&type=template&id=74712246&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_74712246___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_74712246___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);