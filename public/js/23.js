(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/Logout.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/Logout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
<<<<<<< HEAD
    var _this2 = this;

    return {
      showOldPassword: false,
      showNewPassword: false,
      showRetypePassword: false,
      dialogPassword: false,
      dialog: false,
      menu: false,
      form: {
        id: null,
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
        can_login: true,
        type: "",
        job: null,
        old_permissions: [],
        permissions: [],
        old_role: "",
        role: "Standard User"
      },
      // id: "",
      // email: "",
      // username: "",
      // is_admin: "",
      // updated_at: "",
      // can_login: 1,
      // full_name: "",
      // first_name: "",
      // middle_name: "",
      // last_name: "",
      // suffix: "",
      // gender: "",
      // birthdate: "",
      // mobile_number: "",
      // telephone_number: "",
      // email: "",
      // address: "",
      // job: { department: {} },
      old_password: "",
      password: "",
      password_confirmation: "",
      password_rules: {
        password_confirmation: [function (v) {
          return !!v || "Retype password is required";
        }, function (v) {
          return _this2.password === _this2.password_confirmation || "Passwords do not match";
        }]
      },
      password_errors: {
        old_password: [],
        password: [],
        password_confirmation: []
      },
      rules: {
        username: [],
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
        address: []
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
        can_login: [],
        has_fund: [],
        fund: []
      }
    };
  },
  methods: {
    onSave: function onSave() {
      var _this = this; // _this.$refs.form.validate();


      if (_this.$refs.form.validate()) {
        axios.put("/api/users/" + _this.form.id, {
          action: "update",
          profile_update: true,
          // email: _this.form.email,
          // username: _this.form.username,
          // is_admin: _this.form.is_admin,
          // can_login: _this.form.can_login,
          // first_name: _this.form.first_name,
          // middle_name: _this.form.middle_name,
          // last_name: _this.form.last_name,
          // suffix: _this.form.suffix,
          // gender: _this.form.gender,
          // birthdate: _this.form.birthdate,
          // mobile_number: _this.form.mobile_number,
          // telephone_number: _this.form.telephone_number,
          // email: _this.form.email,
          // address: _this.form.address,
          // user_id: _this.form.id,
          id: _this.form.id,
          code: _this.form.id,
          first_name: _this.form.first_name,
          middle_name: _this.form.middle_name,
          last_name: _this.form.last_name,
          suffix: _this.form.suffix,
          gender: _this.form.gender,
          birthdate: _this.form.birthdate,
          mobile_number: _this.form.mobile_number,
          telephone_number: _this.form.telephone_number,
          address: _this.form.address,
          fund: _this.form.fund,
          remaining_fund: _this.form.remaining_fund,
          username: _this.form.username,
          email: _this.form.email,
          password: "password",
          password_confirmation: "password",
          is_admin: _this.form.is_admin,
          is_superadmin: _this.form.is_superadmin,
          can_login: _this.form.can_login,
          type: _this.form.type,
          job_id: _this.form.job == null ? null : _this.form.job.id
        }).then(function (response) {
          _this.$dialog.message.success("User account updated successfully.", {
            position: "top-right",
            timeout: 2000
          }); // _this.$store.dispatch("AUTH_USER");

        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);

          _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);

          _this.errors = error.response.data.errors;
        });
      }
    },
    onUpdatePassword: function onUpdatePassword() {
      var _this = this;

      if (_this.$refs.form_password.validate()) {
        axios.put("/api/users/update_password/" + _this.id, {
          old_password: _this.old_password,
          password: _this.password,
          password_confirmation: _this.password_confirmation
        }).then(function (response) {
          _this.$dialog.message.success("User account password has been updated.", {
            position: "top-right",
            timeout: 2000
          }); // _this.$store.dispatch("AUTH_USER");


          _this.dialogPassword = false;
          _this.old_password = "";
          _this.password = "";
          _this.password_confirmation = "";
        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);

          _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);

          if (error.response) {
            if (error.response.data) {
              _this.password_errors = error.response.data.errors;
            }
          }
        });
      }
    },
    closePasswordDialog: function closePasswordDialog() {
      this.dialogPassword = false;
      this.old_password = "";
      this.password = "";
      this.password_confirmation = "";
      this.$refs.form_password.resetValidation();
    }
  },
  computed: {
    maxDate: function maxDate() {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD");
    }
=======
    return {};
>>>>>>> develop
  },
  created: function created() {
    var _this = this;

    this.$store.dispatch("AUTH_LOGOUT").then(function (response) {
      _this.$router.push({
        name: "login"
      }); // window.location.replace("/login");

    }); // this.$store.dispatch("AUTH_LOGOUT").then(response => {
    //     // this.$router.push({ name: "login" });
    //     window.location.replace("/login");
    // });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/Logout.vue?vue&type=template&id=01c1df42&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/Logout.vue?vue&type=template&id=01c1df42& ***!
  \*********************************************************************************************************************************************************************************************************/
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
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/auth/Logout.vue":
/*!********************************************!*\
  !*** ./resources/js/views/auth/Logout.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Logout_vue_vue_type_template_id_01c1df42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logout.vue?vue&type=template&id=01c1df42& */ "./resources/js/views/auth/Logout.vue?vue&type=template&id=01c1df42&");
/* harmony import */ var _Logout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logout.vue?vue&type=script&lang=js& */ "./resources/js/views/auth/Logout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Logout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Logout_vue_vue_type_template_id_01c1df42___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Logout_vue_vue_type_template_id_01c1df42___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/auth/Logout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/auth/Logout.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/auth/Logout.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Logout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/Logout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/auth/Logout.vue?vue&type=template&id=01c1df42&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/auth/Logout.vue?vue&type=template&id=01c1df42& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logout_vue_vue_type_template_id_01c1df42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Logout.vue?vue&type=template&id=01c1df42& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/Logout.vue?vue&type=template&id=01c1df42&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logout_vue_vue_type_template_id_01c1df42___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logout_vue_vue_type_template_id_01c1df42___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);