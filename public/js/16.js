(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

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
      departments: [],
      department: null
    };
  },
  methods: {
    getDataFromApi: function getDataFromApi() {
      return new Promise(function (resolve, reject) {
        _services_DepartmentDataService__WEBPACK_IMPORTED_MODULE_0__["default"].getAll({
          params: {
            itemsPerPage: 200
          }
        }).then(function (response) {
          resolve(response.data);
        })["catch"](function (error) {
          console.log(error);
          reject();
        });
      });
    },
    onReset: function onReset() {
      this.department = null;
      this.$emit("onReset");
    },
    onChange: function onChange(e) {
      this.department = e;
      this.$emit("onChange", e);
    }
  },
  watch: {
    selectedDepartment: {
      deep: true,
      immediate: true,
      handler: function handler(newValue, oldValue) {
        this.department = newValue;
      }
    }
  },
  created: function created() {
    var _this = this;

    this.getDataFromApi().then(function (data) {
      _this.departments = data.data;

      if (_this.showAll) {
        _this.departments.unshift({
          id: null,
          name: "All Departments"
        });
      }
    });
  },
  activated: function activated() {
    var _this2 = this;

    this.getDataFromApi().then(function (data) {
      _this2.departments = data.data;

      if (_this2.showAll) {
        _this2.departments.unshift({
          id: null,
          name: "All Departments"
        });
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selector/JobDropdownSelector.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/selector/JobDropdownSelector.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_JobDataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/JobDataService */ "./resources/js/services/JobDataService.js");
//
//
//
//
//
//
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
      "default": null
    },
    selectedJob: {
      type: Object,
      "default": null
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
      department: null,
      jobs: [],
      job: null
    };
  },
  methods: {
    getDataFromApi: function getDataFromApi() {
      var _this$department,
          _this = this;

      var params = {
        department_id: (_this$department = this.department) === null || _this$department === void 0 ? void 0 : _this$department.id
      };
      var data = {
        params: params
      };
      return new Promise(function (resolve, reject) {
        _services_JobDataService__WEBPACK_IMPORTED_MODULE_0__["default"].getAll({
          params: {
            department_id: _this.department ? _this.department.id : null,
            itemsPerPage: 200
          }
        }).then(function (response) {
          resolve(response.data);
        })["catch"](function (error) {
          console.log(error);
          reject();
        });
      });
    },
    onReset: function onReset() {
      var _this2 = this;

      this.job = null;
      this.getDataFromApi().then(function (data) {
        _this2.jobs = data.data;

        if (_this2.showAll) {
          _this2.jobs.unshift({
            id: null,
            name: "All Job Designations"
          });
        }
      });
      this.$emit("onReset");
    },
    onChange: function onChange(e) {
      var _this3 = this;

      this.job = e;
      this.getDataFromApi().then(function (data) {
        _this3.jobs = data.data;

        if (_this3.showAll) {
          _this3.jobs.unshift({
            id: null,
            name: "All Job Designations"
          });
        }
      });
      this.$emit("onChange", e);
    }
  },
  created: function created() {
    var _this4 = this;

    this.getDataFromApi().then(function (data) {
      _this4.jobs = data.data;

      if (_this4.showAll) {
        _this4.jobs.unshift({
          id: null,
          name: "All Job Designations"
        });
      }
    });
  },
  activated: function activated() {
    var _this5 = this;

    this.getDataFromApi().then(function (data) {
      _this5.jobs = data.data;

      if (_this5.showAll) {
        _this5.jobs.unshift({
          id: null,
          name: "All Job Designations"
        });
      }
    });
  },
  watch: {
    selectedJob: {
      deep: true,
      immediate: true,
      handler: function handler(newValue, oldValue) {
        this.job = newValue;
      }
    },
    selectedDepartment: {
      deep: true,
      immediate: true,
      handler: function handler(newValue, oldValue) {
        this.department = newValue;
        this.job = null;
      }
    },
    department: function department() {
      var _this6 = this;

      this.getDataFromApi().then(function (data) {
        _this6.jobs = data.data;

        if (_this6.showAll) {
          _this6.jobs.unshift({
            id: null,
            name: "All Job Designations"
          });
        }
      });
    }
  }
});

/***/ }),

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
      items: _vm.departments,
      rules: _vm.rules,
      "error-messages": _vm.errors
    },
    on: { change: _vm.onChange },
    model: {
      value: _vm.department,
      callback: function($$v) {
        _vm.department = $$v
      },
      expression: "department"
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selector/JobDropdownSelector.vue?vue&type=template&id=10c3f430&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/selector/JobDropdownSelector.vue?vue&type=template&id=10c3f430& ***!
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
  return _c("v-autocomplete", {
    attrs: {
      label: "Job Designation",
      "item-value": "id",
      "item-text": "name",
      "return-object": "",
      items: _vm.jobs,
      rules: _vm.rules,
      "error-messages": _vm.errors
    },
    on: { change: _vm.onChange },
    model: {
      value: _vm.job,
      callback: function($$v) {
        _vm.job = $$v
      },
      expression: "job"
    }
  })
}
var staticRenderFns = []
render._withStripped = true



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

/***/ "./resources/js/components/selector/JobDropdownSelector.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/selector/JobDropdownSelector.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JobDropdownSelector_vue_vue_type_template_id_10c3f430___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JobDropdownSelector.vue?vue&type=template&id=10c3f430& */ "./resources/js/components/selector/JobDropdownSelector.vue?vue&type=template&id=10c3f430&");
/* harmony import */ var _JobDropdownSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JobDropdownSelector.vue?vue&type=script&lang=js& */ "./resources/js/components/selector/JobDropdownSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _JobDropdownSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _JobDropdownSelector_vue_vue_type_template_id_10c3f430___WEBPACK_IMPORTED_MODULE_0__["render"],
  _JobDropdownSelector_vue_vue_type_template_id_10c3f430___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/selector/JobDropdownSelector.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/selector/JobDropdownSelector.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/selector/JobDropdownSelector.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JobDropdownSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./JobDropdownSelector.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selector/JobDropdownSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JobDropdownSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/selector/JobDropdownSelector.vue?vue&type=template&id=10c3f430&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/selector/JobDropdownSelector.vue?vue&type=template&id=10c3f430& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JobDropdownSelector_vue_vue_type_template_id_10c3f430___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./JobDropdownSelector.vue?vue&type=template&id=10c3f430& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selector/JobDropdownSelector.vue?vue&type=template&id=10c3f430&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JobDropdownSelector_vue_vue_type_template_id_10c3f430___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JobDropdownSelector_vue_vue_type_template_id_10c3f430___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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