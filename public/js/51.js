(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/settings/User.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/settings/User.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      panel: [0],
      valid: false,
      users: [],
      user: {
        id: null,
        expense_types: null,
        sub_types: null
      },
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
      pivot_sub_types: null
    };
  },
  methods: {
    loadUsers: function loadUsers() {
      var _this = this;

      axios.get("/api/data/users?update_settings=true").then(function (response) {
        var data = response.data.data;
        _this.users = data;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

        _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
      });
    },
    loadExpenseTypes: function loadExpenseTypes() {
      var _this = this;

      axios.get("/api/data/expense_types?only=true").then(function (response) {
        _this.all_expense_types = response.data.data;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

        _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
      });
    },
    onSave: function onSave() {
      var _this = this;

      if (_this.user.id == null) {
        _this.mixin_errorDialog("Error", "No user selected");

        return;
      }

      _this.$refs.form.validate();

      if (_this.$refs.form.validate()) {
        _this.loader = true;
        axios.put("/api/users/" + _this.user.id, {
          action: "settings",
          expense_types: _this.allowed_expense_types.map(function (item) {
            return item.id;
          })
        }).then(function (response) {
          _this.$dialog.message.success("User settings updated successfully.", {
            position: "top-right",
            timeout: 2000
          });

          _this.$store.dispatch("AUTH_USER"); // _this.$router.push({ name: "admin.users.index" });

        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);

          _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);

          if (error.response) {
            if (error.response.data) {
              _this.errors = error.response.data.errors;
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
      this.allowed_expense_types = item.expense_types;
      this.pivot_expense_types = item.pivot_expense_types;
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
    this.loadUsers();
  },
  activated: function activated() {
    this.loadExpenseTypes();
    this.loadUsers();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/settings/User.vue?vue&type=template&id=5c065940&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/settings/User.vue?vue&type=template&id=5c065940& ***!
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
                _vm._v("User Settings")
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
                          _c("v-autocomplete", {
                            attrs: {
                              label: "User",
                              "return-object": "",
                              items: _vm.users,
                              "item-text": "full_name",
                              "item-value": "id"
                            },
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
                                                      _vm._v(_vm._s(item.name))
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

/***/ "./resources/js/views/modules/admin/settings/User.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/modules/admin/settings/User.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User_vue_vue_type_template_id_5c065940___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User.vue?vue&type=template&id=5c065940& */ "./resources/js/views/modules/admin/settings/User.vue?vue&type=template&id=5c065940&");
/* harmony import */ var _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/settings/User.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _User_vue_vue_type_template_id_5c065940___WEBPACK_IMPORTED_MODULE_0__["render"],
  _User_vue_vue_type_template_id_5c065940___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/settings/User.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/settings/User.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/settings/User.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./User.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/settings/User.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/settings/User.vue?vue&type=template&id=5c065940&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/settings/User.vue?vue&type=template&id=5c065940& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_5c065940___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./User.vue?vue&type=template&id=5c065940& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/settings/User.vue?vue&type=template&id=5c065940&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_5c065940___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_5c065940___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);