(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/select/MultiSelect.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/select/MultiSelect.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    label: {
      type: String,
      "default": ""
    },
    items: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    defaultSelected: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      selected: this.defaultSelected
    };
  },
  methods: {
    toggle: function toggle() {
      var _this = this;

      this.$nextTick(function () {
        if (_this.selectedAll) {
          _this.selected = [];
        } else {
          _this.selected = _this.items.slice();
        }
      });
    } // changeSelected() {
    //     this.$emit("changeSelected", this.selected);
    // }

  },
  watch: {
    selected: function selected() {
      this.$emit("changeSelected", this.selected);
    }
  },
  computed: {
    selectedAll: function selectedAll() {
      return this.selected.length === this.items.length;
    },
    selectedSome: function selectedSome() {
      return this.selected.length > 0 && !this.selectedAll;
    },
    icon: function icon() {
      if (this.selectedAll) return "mdi-close-box";
      if (this.selectedSome) return "mdi-minus-box";
      return "mdi-checkbox-blank-outline";
    }
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/roles/Create.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/roles/Create.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_select_MultiSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/select/MultiSelect */ "./resources/js/components/select/MultiSelect.vue");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    MultiSelect: _components_select_MultiSelect__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      valid: false,
      name: "",
      rules: {
        name: [function (v) {
          return !!v || "This field is required.";
        }]
      },
      errors: {
        name: []
      },
      switchSelectAll: false,
      permissions: {
        employees: ["view all employees", "view employee", "add employee", "edit employee", "delete employee"],
        expenses: ["view all expenses", "view expenses", "add expenses", "edit expenses", "delete expenses"],
        expense_reports: ["view all expense reports", "view expense report", "add expense report", "edit expense report", "approve expense report", "delete expense report"],
        payments: ["view all payments", "view payment", "add payment", "edit payment", "delete payment"],
        vendors: ["view all vendors", "view vendor", "add vendor", "edit vendor", "delete vendor"],
        departments: ["view all departments", "view department", "add department", "edit department", "delete department"],
        jobs: ["view all jobs", "view job", "add job", "edit job", "delete job"],
        expense_types: ["view all expense types", "view expense type", "add expense type", "edit expense type", "delete expense type"],
        users: ["view all users", "view user", "add user", "edit user", "delete user"],
        adjustments: ["view all adjustments", "view adjustment", "add adjustment", "edit adjustment", "delete adjustment"]
      },
      selected: {
        employees: [],
        expenses: [],
        expense_reports: [],
        payments: [],
        vendors: [],
        departments: [],
        jobs: [],
        expense_types: [],
        users: [],
        adjustments: []
      }
    };
  },
  methods: {
    onSave: function onSave() {
      var _this = this;

      var selectedPermissions = [];

      _this.$refs.form.validate();

      for (var key in this.selected) {
        var _iterator = _createForOfIteratorHelper(this.selected[key]),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var iterator = _step.value;
            selectedPermissions.push(iterator);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      if (selectedPermissions.length == 0) {
        _this.$dialog.message.error("No Permissions selected.", {
          position: "top-right",
          timeout: 2000
        });

        return;
      }

      if (_this.$refs.form.validate()) {
        axios.post("", {
          role: _this.role,
          permissions: selectedPermissions
        }).then(function (response) {
          _this.$dialog.message.success("Role and permissions created successfully.", {
            position: "top-right",
            timeout: 2000
          });

          _this.$router.push({
            name: "admin.roles.index"
          });
        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);
          _this.errors = error.response.data;
        });
        return;
      }
    }
  },
  watch: {
    switchSelectAll: function switchSelectAll() {
      if (this.switchSelectAll) {
        for (var key in this.selected) {
          this.selected[key] = this.permissions[key];
        }
      } else {
        for (var _key in this.selected) {
          this.selected[_key] = [];
        }
      }
    }
  },
  created: function created() {// axios.defaults.headers.common["Authorization"] =
    //     "Bearer " + localStorage.getItem("access_token");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/select/MultiSelect.vue?vue&type=template&id=20f6036d&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/select/MultiSelect.vue?vue&type=template&id=20f6036d& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c("v-select", {
    attrs: {
      items: _vm.items,
      label: _vm.label,
      multiple: "",
      chips: "",
      "small-chips": ""
    },
    scopedSlots: _vm._u([
      {
        key: "prepend-item",
        fn: function() {
          return [
            _c(
              "v-list-item",
              { attrs: { ripple: "" }, on: { click: _vm.toggle } },
              [
                _c(
                  "v-list-item-action",
                  [
                    _c(
                      "v-icon",
                      {
                        attrs: {
                          color: _vm.selected.length > 0 ? "green darken-4" : ""
                        }
                      },
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.icon) +
                            "\n                "
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-list-item-content",
                  [
                    _c("v-list-item-title", [
                      _vm._v(
                        "\n                    Select All\n                "
                      )
                    ])
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("v-divider", { staticClass: "mt-2" })
          ]
        },
        proxy: true
      },
      {
        key: "selection",
        fn: function(ref) {
          var item = ref.item
          var index = ref.index
          return [
            index === 0
              ? _c("v-chip", [_c("span", [_vm._v(_vm._s(item))])])
              : _vm._e(),
            _vm._v(" "),
            index === 1
              ? _c("span", { staticClass: "grey--text caption" }, [
                  _vm._v(
                    "\n            (+" +
                      _vm._s(_vm.selected.length - 1) +
                      " others)\n        "
                  )
                ])
              : _vm._e()
          ]
        }
      }
    ]),
    model: {
      value: _vm.selected,
      callback: function($$v) {
        _vm.selected = $$v
      },
      expression: "selected"
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/roles/Create.vue?vue&type=template&id=64455835&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/roles/Create.vue?vue&type=template&id=64455835& ***!
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
          _c("h4", { staticClass: "title green--text" }, [_vm._v("New Role")])
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
                    { attrs: { cols: "12", md: "6" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          label: "Role *",
                          rules: _vm.rules.name,
                          "error-messages": _vm.errors.name,
                          required: ""
                        },
                        on: {
                          input: function($event) {
                            _vm.errors.name = []
                          }
                        },
                        model: {
                          value: _vm.name,
                          callback: function($$v) {
                            _vm.name = $$v
                          },
                          expression: "name"
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
                "div",
                [
                  _c("v-col", { attrs: { cols: "12", md: "4" } }, [
                    _vm._v(
                      "\n                    Permissions\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "4" } },
                    [
                      _c("v-switch", {
                        attrs: { label: "Select All" },
                        model: {
                          value: _vm.switchSelectAll,
                          callback: function($$v) {
                            _vm.switchSelectAll = $$v
                          },
                          expression: "switchSelectAll"
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
                _vm._l(_vm.permissions, function(item, key) {
                  return _c(
                    "v-col",
                    { key: item[0], attrs: { cols: "12", md: "4" } },
                    [
                      _c("MultiSelect", {
                        key: _vm.switchSelectAll,
                        attrs: {
                          label: key.toUpperCase(),
                          items: item,
                          defaultSelected: _vm.selected[key]
                        },
                        on: {
                          changeSelected: function(e) {
                            _vm.selected[key] = e
                          }
                        }
                      })
                    ],
                    1
                  )
                }),
                1
              ),
              _vm._v(" "),
              _c("small", { staticClass: "text--secondary" }, [
                _vm._v(
                  "\n                * indicates required field\n            "
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
                    {
                      on: {
                        click: function($event) {
                          return _vm.$router.go(-1)
                        }
                      }
                    },
                    [_vm._v("Cancel")]
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

/***/ "./resources/js/components/select/MultiSelect.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/select/MultiSelect.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MultiSelect_vue_vue_type_template_id_20f6036d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultiSelect.vue?vue&type=template&id=20f6036d& */ "./resources/js/components/select/MultiSelect.vue?vue&type=template&id=20f6036d&");
/* harmony import */ var _MultiSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultiSelect.vue?vue&type=script&lang=js& */ "./resources/js/components/select/MultiSelect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MultiSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MultiSelect_vue_vue_type_template_id_20f6036d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MultiSelect_vue_vue_type_template_id_20f6036d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/select/MultiSelect.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/select/MultiSelect.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/select/MultiSelect.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MultiSelect.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/select/MultiSelect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/select/MultiSelect.vue?vue&type=template&id=20f6036d&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/select/MultiSelect.vue?vue&type=template&id=20f6036d& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiSelect_vue_vue_type_template_id_20f6036d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MultiSelect.vue?vue&type=template&id=20f6036d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/select/MultiSelect.vue?vue&type=template&id=20f6036d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiSelect_vue_vue_type_template_id_20f6036d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiSelect_vue_vue_type_template_id_20f6036d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/modules/admin/roles/Create.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/modules/admin/roles/Create.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_64455835___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=64455835& */ "./resources/js/views/modules/admin/roles/Create.vue?vue&type=template&id=64455835&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/roles/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_64455835___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_64455835___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/roles/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/roles/Create.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/roles/Create.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/roles/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/roles/Create.vue?vue&type=template&id=64455835&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/roles/Create.vue?vue&type=template&id=64455835& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_64455835___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=64455835& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/roles/Create.vue?vue&type=template&id=64455835&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_64455835___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_64455835___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);