(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/admin/users/EditFund.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/admin/users/EditFund.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_UserDataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/UserDataService */ "./resources/js/services/UserDataService.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      valid: false,
      formDataLoaded: false,
      adjustment_type: "Add Amount",
      user: {
        id: null,
        fullname: "",
        fund: 0,
        remaining_fund: 0
      },
      reference: "",
      code: "",
      description: "",
      amount: 0,
      type: "Manage Revolving Fund",
      remarks: "",
      errors: {
        user: [],
        reference: [],
        code: [],
        description: [],
        amount: [],
        remarks: []
      }
    };
  },
  methods: {
    loadUser: function loadUser() {
      var _this = this;

      _services_UserDataService__WEBPACK_IMPORTED_MODULE_0__["default"].show(this.$route.params.id).then(function (response) {
        _this.user = response.data.data;
        _this.formDataLoaded = true;
      })["catch"](function (error) {
        _this.mixin_showErrors(error);

        _this.formDataLoaded = true;

        _this.$router.push({
          name: "admin.users.index"
        }, function () {});
      });
    },
    onSave: function onSave() {
      var _this2 = this;

      if (this.new_fund < 0 || this.new_remaining_fund < 0) {
        this.mixin_errorDialog("Error", "Revolving fund/Remaining fund should not be lesser than current amount");
        return;
      }

      if (this.$refs.form.validate()) {
        this.$confirm("Do you want to update revolving fund?").then(function (res) {
          if (res) {
            _services_UserDataService__WEBPACK_IMPORTED_MODULE_0__["default"].updateFund(_this2.$route.params.id, {
              fund: _this2.new_fund,
              remaining_fund: _this2.new_remaining_fund
            }).then(function (response) {
              _this2.mixin_successDialog(response.data.status, response.data.message);

              _this2.$store.dispatch("AUTH_USER");

              _this2.$router.push("/users");
            })["catch"](function (error) {
              _this2.mixin_showErrors(error);
            });
          }
        });
      }
    }
  },
  computed: {
    new_fund: function new_fund() {
      if (this.adjustment_type == "Add Amount") {
        return this.mixin_convertToNumber(this.user.fund) + this.mixin_convertToNumber(this.amount);
      }

      return this.mixin_convertToNumber(this.user.fund) - this.mixin_convertToNumber(this.amount);
    },
    new_remaining_fund: function new_remaining_fund() {
      if (this.adjustment_type == "Add Amount") {
        return this.mixin_convertToNumber(this.user.remaining_fund) + this.mixin_convertToNumber(this.amount);
      }

      return this.mixin_convertToNumber(this.user.remaining_fund) - this.mixin_convertToNumber(this.amount);
    }
  },
  created: function created() {
    this.$store.dispatch("AUTH_USER");
    this.loadUser();
  },
  activated: function activated() {
    this.$store.dispatch("AUTH_USER");
    this.loadUser();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/admin/users/EditFund.vue?vue&type=template&id=9f01cfc0&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/admin/users/EditFund.vue?vue&type=template&id=9f01cfc0& ***!
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
      !_vm.formDataLoaded
        ? _c("loader-component")
        : _c(
            "v-card",
            { staticClass: "elevation-0 pt-0" },
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
                  _c("h4", { staticClass: "title green--text" }, [
                    _vm._v("Edit Revolving Fund")
                  ])
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
                    "v-container",
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
                                  label: "Adjustment Type",
                                  items: ["Add Amount", "Subtract Amount"]
                                },
                                model: {
                                  value: _vm.adjustment_type,
                                  callback: function($$v) {
                                    _vm.adjustment_type = $$v
                                  },
                                  expression: "adjustment_type"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "4" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  rules: _vm.mixin_validation.minNumberValue(1),
                                  label: "Amount",
                                  type: "number"
                                },
                                model: {
                                  value: _vm.amount,
                                  callback: function($$v) {
                                    _vm.amount = $$v
                                  },
                                  expression: "amount"
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
                          _c("v-col", { attrs: { cols: "12", md: "6" } }, [
                            _vm._v(
                              "\n                        Current Balance\n                        "
                            ),
                            _c("table", { staticClass: "ml-4" }, [
                              _c("tbody", [
                                _c("tr", [
                                  _c("td", { staticClass: "headline" }, [
                                    _vm._v(
                                      "\n                                        Revolving Fund\n                                    "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(":")]),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "headline green--text text--darken-4 text-right"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(
                                            _vm.mixin_formatNumber(
                                              _vm.user.fund
                                            )
                                          ) +
                                          "\n                                    "
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", { staticClass: "headline" }, [
                                    _vm._v(
                                      "\n                                        Remaining Fund\n                                    "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(":")]),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "headline green--text text--darken-4 text-right"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(
                                            _vm.mixin_formatNumber(
                                              _vm.user.remaining_fund
                                            )
                                          ) +
                                          "\n                                    "
                                      )
                                    ]
                                  )
                                ])
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("v-col", { attrs: { cols: "12", md: "6" } }, [
                            _vm._v(
                              "\n                        New Balance\n                        "
                            ),
                            _c("table", { staticClass: "ml-4" }, [
                              _c("tbody", [
                                _c("tr", [
                                  _c("td", { staticClass: "headline" }, [
                                    _vm._v(
                                      "\n                                        Revolving Fund\n                                    "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(":")]),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      class:
                                        "headline " +
                                        (_vm.new_fund < 0
                                          ? "red--text"
                                          : "green--text") +
                                        " text--darken-4 text-right"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(
                                            _vm.mixin_formatNumber(_vm.new_fund)
                                          ) +
                                          "\n                                    "
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", { staticClass: "headline" }, [
                                    _vm._v(
                                      "\n                                        Remaining Fund\n                                    "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(":")]),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      class:
                                        "headline " +
                                        (_vm.new_remaining_fund < 0
                                          ? "red--text"
                                          : "green--text") +
                                        " text--darken-4 text-right"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(
                                            _vm.mixin_formatNumber(
                                              _vm.new_remaining_fund
                                            )
                                          ) +
                                          "\n                                    "
                                      )
                                    ]
                                  )
                                ])
                              ])
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("small", { staticClass: "text--secondary" }, [
                        _vm._v(
                          "\n                    * indicates required field\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "green", dark: "" },
                              on: { click: _vm.onSave }
                            },
                            [_vm._v("Save")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            { attrs: { to: { name: "admin.users.index" } } },
                            [
                              _vm._v(
                                "\n                        Cancel\n                    "
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
}
var staticRenderFns = []
render._withStripped = true



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
    key: "updatePermissions",
    value: function updatePermissions(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/users/update_permissions/".concat(id), data);
    }
  }, {
    key: "updateProfile",
    value: function updateProfile(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/users/update_profile/".concat(id), data);
    }
  }, {
    key: "updateActivation",
    value: function updateActivation(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/users/update_activation/".concat(id), data);
    }
  }, {
    key: "export",
    value: function _export() {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/users/export/data");
    }
  }]);

  return UserDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new UserDataService());

/***/ }),

/***/ "./resources/js/views/pages/admin/users/EditFund.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/pages/admin/users/EditFund.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditFund_vue_vue_type_template_id_9f01cfc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditFund.vue?vue&type=template&id=9f01cfc0& */ "./resources/js/views/pages/admin/users/EditFund.vue?vue&type=template&id=9f01cfc0&");
/* harmony import */ var _EditFund_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditFund.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/admin/users/EditFund.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditFund_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditFund_vue_vue_type_template_id_9f01cfc0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditFund_vue_vue_type_template_id_9f01cfc0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/admin/users/EditFund.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/admin/users/EditFund.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/pages/admin/users/EditFund.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditFund_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditFund.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/admin/users/EditFund.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditFund_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/admin/users/EditFund.vue?vue&type=template&id=9f01cfc0&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/pages/admin/users/EditFund.vue?vue&type=template&id=9f01cfc0& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditFund_vue_vue_type_template_id_9f01cfc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditFund.vue?vue&type=template&id=9f01cfc0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/admin/users/EditFund.vue?vue&type=template&id=9f01cfc0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditFund_vue_vue_type_template_id_9f01cfc0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditFund_vue_vue_type_template_id_9f01cfc0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);