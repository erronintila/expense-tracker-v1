(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[84],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/users/Edit.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/users/Edit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form */ "./resources/js/views/modules/admin/users/Form.vue");
/* harmony import */ var _services_UserDataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/UserDataService */ "./resources/js/services/UserDataService.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Form: _Form__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      formDataLoaded: false,
      loader: true,
      form: {
        code: null,
        first_name: null,
        middle_name: "",
        last_name: null,
        suffix: "",
        gender: null,
        birthdate: null,
        mobile_number: null,
        telephone_number: "",
        address: null,
        fund: 0,
        remaining_fund: 0,
        username: "",
        email: null,
        password: "password",
        password_confirmation: "password",
        is_admin: false,
        is_superadmin: false,
        type: "employee",
        job: null
      },
      errors: {
        code: [],
        first_name: [],
        middle_name: [],
        last_name: [],
        suffix: [],
        gender: [],
        birthdate: [],
        job: [],
        mobile_number: [],
        telephone_number: [],
        email: [],
        address: [],
        username: [],
        role: [],
        has_fund: [],
        fund: []
      }
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _services_UserDataService__WEBPACK_IMPORTED_MODULE_1__["default"].show(_this.$route.params.id).then(function (response) {
          resolve(response.data);
        })["catch"](function (error) {
          _this.mixin_showErrors(error);

          reject();
        })["finally"](function () {
          _this.loader = false;
        });
      });
    },
    onSave: function onSave(value) {
      var _this2 = this;

      this.loader = true;
      var is_administrator = value.role == "Administrator" ? true : false;
      value.is_admin = is_administrator;
      value.job_id = value.job.id;
      value.password = "password";
      value.password_confirmation = "password";
      _services_UserDataService__WEBPACK_IMPORTED_MODULE_1__["default"].update(this.$route.params.id, value).then(function (response) {
        _this2.mixin_successDialog(response.data.status, response.data.message);

        window.location.replace("/admin/users");
      })["catch"](function (error) {
        _this2.mixin_showErrors(error);

        if (error.response) {
          if (error.response.data) {
            _this2.errors = error.response.data.errors;
          }
        }
      })["finally"](function () {
        _this2.loader = false;
      });
    }
  },
  created: function created() {
    var _this3 = this;

    this.getData().then(function (data) {
      _this3.form = data.data;
      _this3.formDataLoaded = true;
    });
  },
  activated: function activated() {
    var _this4 = this;

    this.getData().then(function (data) {
      _this4.form = data.data;
      _this4.formDataLoaded = true;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/users/Edit.vue?vue&type=template&id=74372798&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/users/Edit.vue?vue&type=template&id=74372798& ***!
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
      _vm.loader
        ? _c(
            "v-container",
            { staticStyle: { height: "400px" } },
            [
              _c(
                "v-row",
                {
                  staticClass: "fill-height",
                  attrs: { "align-content": "center", justify: "center" }
                },
                [
                  _c(
                    "v-col",
                    {
                      staticClass: "subtitle-1 text-center",
                      attrs: { cols: "12" }
                    },
                    [
                      _vm._v(
                        "\n                Loading, Please wait...\n            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "6" } },
                    [
                      _c("v-progress-linear", {
                        attrs: {
                          color: "green accent-4",
                          indeterminate: "",
                          rounded: "",
                          height: "6"
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
                  _c("h4", { staticClass: "title success--text" }, [
                    _vm._v("Edit Employee")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-container",
                [
                  _vm.formDataLoaded
                    ? _c("Form", {
                        attrs: {
                          isEdit: true,
                          errors: _vm.errors,
                          userForm: _vm.form
                        },
                        on: { "on-save": _vm.onSave }
                      })
                    : _vm._e()
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

/***/ "./resources/js/views/modules/admin/users/Edit.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/modules/admin/users/Edit.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_74372798___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=74372798& */ "./resources/js/views/modules/admin/users/Edit.vue?vue&type=template&id=74372798&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/users/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_74372798___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_74372798___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/users/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/users/Edit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/modules/admin/users/Edit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/users/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/users/Edit.vue?vue&type=template&id=74372798&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/users/Edit.vue?vue&type=template&id=74372798& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_74372798___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=74372798& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/users/Edit.vue?vue&type=template&id=74372798&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_74372798___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_74372798___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);