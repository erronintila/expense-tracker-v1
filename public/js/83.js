(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[83],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Playground.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Playground.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_selector_DepartmentDropdownSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/selector/DepartmentDropdownSelector */ "./resources/js/components/selector/DepartmentDropdownSelector.vue");
/* harmony import */ var _components_selector_JobDropdownSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/selector/JobDropdownSelector */ "./resources/js/components/selector/JobDropdownSelector.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    DepartmentDropdownSelector: _components_selector_DepartmentDropdownSelector__WEBPACK_IMPORTED_MODULE_0__["default"],
    JobDropdownSelector: _components_selector_JobDropdownSelector__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      department: null,
      job: null,
      user: {}
    };
  },
  computed: {},
  methods: {
    onResetDepartment: function onResetDepartment() {
      this.department = null;
      console.log("Department reset", this.department);
    },
    onChangeDepartment: function onChangeDepartment(e) {
      this.department = e;
      console.log("Department changed", this.department);
    },
    onShowJob: function onShowJob() {
      console.log(this.job);
    },
    setJob: function setJob() {
      if (!this.job) {
        this.job = {
          id: 11
        };
        return;
      }

      this.job = this.job;
    },
    onResetJob: function onResetJob() {
      this.job = null;
      console.log("Job reset", this.job);
    },
    onChangeJob: function onChangeJob(e) {
      this.job = e;
    },
    onReset: function onReset() {
      this.onResetDepartment();
      this.onResetJob();
    },
    getInitialJob: function getInitialJob() {
      var _this = this;

      axios.get("api/jobs/20").then(function (response) {
        return _this.job = response.data.data;
      });
    } // async getUser() {
    //     let res = await axios.get("/api/users/2");
    //     try {
    //         return { data: res.data.data };
    //     } catch (error) {
    //         return { data: error.response };
    //     }
    // },
    // async displayUser() {
    //     this.user = await this.getUser();
    //     console.log(this.user);
    // }
    // async displayJob() {
    //     let data = await this.getInitialJob();
    //     this.job = data;
    //     console.log(this.job);
    // }

  },
  mounted: function mounted() {
    this.getInitialJob(); // this.job = { id: 3 };
    // this.displayUser();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Playground.vue?vue&type=template&id=2a00969a&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Playground.vue?vue&type=template&id=2a00969a& ***!
  \********************************************************************************************************************************************************************************************************/
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
        "v-container",
        [
          _c("DepartmentDropdownSelector", {
            attrs: { showAll: true, selectedDepartment: _vm.department },
            on: {
              onReset: _vm.onResetDepartment,
              onChange: _vm.onChangeDepartment
            },
            model: {
              value: _vm.department,
              callback: function($$v) {
                _vm.department = $$v
              },
              expression: "department"
            }
          }),
          _vm._v(" "),
          _c("JobDropdownSelector", {
            attrs: { selectedJob: _vm.job, selectedDepartment: _vm.department },
            on: { onReset: _vm.onResetJob, onChange: _vm.onChangeJob },
            model: {
              value: _vm.job,
              callback: function($$v) {
                _vm.job = $$v
              },
              expression: "job"
            }
          }),
          _vm._v(" "),
          _c("v-btn", { on: { click: _vm.onResetDepartment } }, [
            _vm._v("Reset Department")
          ]),
          _vm._v(" "),
          _c("v-btn", { on: { click: _vm.onResetJob } }, [_vm._v("Reset Job")]),
          _vm._v(" "),
          _c("v-btn", { on: { click: _vm.onReset } }, [_vm._v("Reset All")]),
          _vm._v(" "),
          _c("v-btn", { on: { click: _vm.onShowJob } }, [_vm._v("Show Job")]),
          _vm._v(" "),
          _c("v-btn", { on: { click: _vm.setJob } }, [_vm._v("Set Job")])
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

/***/ "./resources/js/views/Playground.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/Playground.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Playground_vue_vue_type_template_id_2a00969a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Playground.vue?vue&type=template&id=2a00969a& */ "./resources/js/views/Playground.vue?vue&type=template&id=2a00969a&");
/* harmony import */ var _Playground_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Playground.vue?vue&type=script&lang=js& */ "./resources/js/views/Playground.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Playground_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Playground_vue_vue_type_template_id_2a00969a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Playground_vue_vue_type_template_id_2a00969a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Playground.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Playground.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Playground.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Playground_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Playground.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Playground.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Playground_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Playground.vue?vue&type=template&id=2a00969a&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Playground.vue?vue&type=template&id=2a00969a& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Playground_vue_vue_type_template_id_2a00969a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Playground.vue?vue&type=template&id=2a00969a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Playground.vue?vue&type=template&id=2a00969a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Playground_vue_vue_type_template_id_2a00969a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Playground_vue_vue_type_template_id_2a00969a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);