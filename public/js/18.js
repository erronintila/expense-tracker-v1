(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/PageHeader.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/PageHeader.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "page-header",
  props: {
    title: ""
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selector/dropdown/DepartmentDropdownSelector.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/selector/dropdown/DepartmentDropdownSelector.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_DepartmentDataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/DepartmentDataService */ "./resources/js/services/DepartmentDataService.js");
//
//
//
//
//
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
      var _this = this;

      return new Promise(function (resolve, reject) {
        _services_DepartmentDataService__WEBPACK_IMPORTED_MODULE_0__["default"].getAll({
          params: {
            itemsPerPage: 200,
            isSelection: true
          }
        }).then(function (response) {
          resolve(response.data);
        })["catch"](function (error) {
          _this.mixin_showErrors(error);

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
  },
  activated: function activated() {
    var _this3 = this;

    this.getDataFromApi().then(function (data) {
      _this3.departments = data.data;

      if (_this3.showAll) {
        _this3.departments.unshift({
          id: null,
          name: "All Departments"
        });
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/admin/users/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/admin/users/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_page_PageHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/page/PageHeader */ "./resources/js/components/page/PageHeader.vue");
/* harmony import */ var _services_UserDataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/UserDataService */ "./resources/js/services/UserDataService.js");
/* harmony import */ var _components_selector_dropdown_DepartmentDropdownSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/selector/dropdown/DepartmentDropdownSelector */ "./resources/js/components/selector/dropdown/DepartmentDropdownSelector.vue");
/* harmony import */ var _components_selector_dropdown_JobDropdownSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/selector/dropdown/JobDropdownSelector */ "./resources/js/components/selector/dropdown/JobDropdownSelector.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {},
  components: {
    PageHeader: _components_page_PageHeader__WEBPACK_IMPORTED_MODULE_0__["default"],
    DepartmentDropdownSelector: _components_selector_dropdown_DepartmentDropdownSelector__WEBPACK_IMPORTED_MODULE_2__["default"],
    JobDropdownSelector: _components_selector_dropdown_JobDropdownSelector__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      formDataLoaded: false,
      expanded: [],
      loading: true,
      headers: [{
        text: "Name",
        value: "full_name"
      }, {
        text: "Job Designation",
        value: "job"
      }, {
        text: "Department",
        value: "department"
      }, {
        text: "Revolving Fund",
        value: "revolving_fund"
      }, {
        text: "Actions",
        value: "actions",
        sortable: false
      }, {
        text: "",
        value: "data-table-expand",
        sortable: false
      }],
      items: [],
      department: null,
      job: null,
      total_fund: 0,
      total_remaining_fund: 0,
      status: "Active",
      statuses: ["Active", "Inactive", "Archived"],
      selected: [],
      search: "",
      collections: {
        headers: [{
          text: "Name",
          value: "full_name"
        }, {
          text: "Job Designation",
          value: "job",
          sortable: false
        }, {
          text: "Department",
          value: "department",
          sortable: false
        }, {
          text: "Revolving Fund",
          value: "revolving_fund"
        }, {
          text: "Actions",
          value: "actions",
          sortable: false
        }, {
          text: "",
          value: "data-table-expand"
        }],
        selected: [],
        selectedUsers: [],
        statuses: ["Active", "Inactive", "Archived"],
        items: [],
        users: []
      },
      filters: {
        department: {
          id: null,
          name: "All Departments"
        },
        job: {
          id: null,
          name: "All Job Designations"
        },
        search: "",
        status: "Active"
      },
      options: {
        sortBy: ["first_name"],
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
    onShow: function onShow(item) {
      var params = {
        id: item.id
      };

      if (item.deleted_at) {
        params = {
          id: item.id,
          isDeleted: true
        };
      }

      this.$router.push({
        name: "admin.users.show",
        params: params
      });
    },
    onSearch: function onSearch() {
      var _this = this;

      this.getDataFromApi().then(function (data) {
        _this.items = data.data;
        _this.meta = data.meta;
      });
    },
    changeStatus: function changeStatus() {},
    onChangeDepartment: function onChangeDepartment(e) {
      this.department = e;
      this.job = null;
    },
    onResetDepartment: function onResetDepartment() {
      this.department = null;
      this.job = null;
    },
    onChangeJob: function onChangeJob(e) {
      this.job = e;
    },
    onResetJob: function onResetJob() {
      this.job = null;
    },
    changeJob: function changeJob(e) {
      this.job = e;
    },
    getDataFromApi: function getDataFromApi() {
      var _this2 = this;

      this.loading = true;
      return new Promise(function (resolve, reject) {
        var _this2$options = _this2.options,
            sortBy = _this2$options.sortBy,
            sortDesc = _this2$options.sortDesc,
            page = _this2$options.page,
            itemsPerPage = _this2$options.itemsPerPage;

        var search = _this2.search.trim().toLowerCase();

        var department_id = _this2.department == null ? null : _this2.department.id;
        var job_id = _this2.job == null ? null : _this2.job.id;
        var status = _this2.status;
        var data = {
          params: {
            search: search,
            sortBy: sortBy[0],
            sortType: sortDesc[0] ? "desc" : "asc",
            page: page,
            itemsPerPage: itemsPerPage,
            status: status,
            department_id: department_id,
            job_id: job_id,
            is_superadmin: false
          }
        };
        _services_UserDataService__WEBPACK_IMPORTED_MODULE_1__["default"].getAll(data).then(function (response) {
          _this2.loading = false;
          _this2.formDataLoaded = true;
          resolve(response.data);
        })["catch"](function (error) {
          _this2.mixin_showErrors(error);

          _this2.loading = false;
          _this2.formDataLoaded = true;
          reject();
        });
      });
    },
    onRefresh: function onRefresh() {
      Object.assign(this.$data, this.$options.data.apply(this));
      this.onResetDepartment();
      this.onResetJob(); // this.department = null;
      // this.job = null;
    },
    onEditFund: function onEditFund() {
      if (this.selected.length == 0) {
        this.mixin_errorDialog("Error", "No item(s) selected");
        return;
      }

      this.$router.push("/users/".concat(this.selected[0].id, "/edit/fund"));
      this.selected = [];
    },
    onEditPermissions: function onEditPermissions() {
      if (this.selected.length == 0) {
        this.mixin_errorDialog("Error", "No item(s) selected");
        return;
      }

      this.$router.push("/users/".concat(this.selected[0].id, "/edit/permissions"));
      this.selected = [];
    },
    onPasswordReset: function onPasswordReset() {
      var _this3 = this;

      if (this.selected.length == 0) {
        this.mixin_errorDialog("Error", "No item(s) selected");
        return;
      }

      this.$confirm("Do you want to reset password?").then(function (res) {
        if (res) {
          var ids = _this3.selected.map(function (item) {
            return item.id;
          });

          _services_UserDataService__WEBPACK_IMPORTED_MODULE_1__["default"].resetPassword(ids).then(function (response) {
            _this3.mixin_successDialog(response.data.status, response.data.message);

            _this3.getDataFromApi().then(function (data) {
              _this3.items = data.data;
              _this3.meta = data.meta;
            });

            _this3.selected = [];
          })["catch"](function (error) {
            _this3.mixin_showErrors(error);
          });
        }
      });
    },
    onDelete: function onDelete() {
      var _this4 = this;

      if (this.selected.length == 0) {
        this.mixin_errorDialog("Error", "No item(s) selected");
        return;
      }

      this.$confirm("Move item(s) to archive?").then(function (res) {
        if (res) {
          var ids = _this4.selected.map(function (item) {
            return item.id;
          });

          _services_UserDataService__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](ids).then(function (response) {
            _this4.mixin_successDialog(response.data.status, response.data.message);

            _this4.getDataFromApi().then(function (data) {
              _this4.items = data.data;
              _this4.meta = data.meta;
            });

            _this4.selected = [];
          })["catch"](function (error) {
            _this4.mixin_showErrors(error);
          });
        }
      });
    },
    onRestore: function onRestore() {
      var _this5 = this;

      if (this.selected.length == 0) {
        this.mixin_errorDialog("Error", "No item(s) selected");
        return;
      }

      this.$confirm("Do you want to restore account(s)?").then(function (res) {
        if (res) {
          var ids = _this5.selected.map(function (item) {
            return item.id;
          });

          _services_UserDataService__WEBPACK_IMPORTED_MODULE_1__["default"].restore(ids).then(function (response) {
            _this5.mixin_successDialog(response.data.status, response.data.message);

            _this5.getDataFromApi().then(function (data) {
              _this5.items = data.data;
              _this5.meta = data.meta;
            });

            _this5.selected = [];
          })["catch"](function (error) {
            _this5.mixin_showErrors(error);
          });
        }
      });
    },
    onSetActivation: function onSetActivation(is_active) {
      var _this6 = this;

      if (this.selected.length == 0) {
        this.mixin_errorDialog("Error", "No item(s) selected");
        return;
      }

      this.$confirm("Do you want to ".concat(is_active ? "activate" : "deactivate", " account(s)?")).then(function (res) {
        if (res) {
          var ids = _this6.selected.map(function (item) {
            return item.id;
          });

          var data = {
            is_active: is_active
          };
          _services_UserDataService__WEBPACK_IMPORTED_MODULE_1__["default"].updateActivation(ids, data).then(function (response) {
            _this6.mixin_successDialog(response.data.status, response.data.message);

            _this6.getDataFromApi().then(function (data) {
              _this6.items = data.data;
              _this6.meta = data.meta;
            });

            _this6.selected = [];
          })["catch"](function (error) {
            _this6.mixin_showErrors(error);
          });
        }
      });
    },
    onExport: function onExport() {
      var _this7 = this;

      _services_UserDataService__WEBPACK_IMPORTED_MODULE_1__["default"]["export"]().then(function (response) {
        window.location.href = "/api/users/export/data";

        _this7.mixin_successDialog("Success", "The file was saved to 'Downloads' folder)");
      })["catch"](function (error) {
        return _this7.mixin_showErrors(error);
      });
    }
  },
  watch: {
    params: {
      immediate: true,
      deep: true,
      handler: function handler() {
        var _this8 = this;

        this.getDataFromApi().then(function (data) {
          _this8.items = data.data;
          _this8.meta = data.meta;
          _this8.total_fund = _this8.mixin_formatNumber(data.data.reduce(function (total, item) {
            return total + item.fund;
          }, 0));
          _this8.total_remaining_fund = _this8.mixin_formatNumber(data.data.reduce(function (total, item) {
            return total + item.remaining_fund;
          }, 0));
        });
      }
    },
    search: function search() {
      var _this9 = this;

      if (this.search == "") {
        this.getDataFromApi().then(function (data) {
          _this9.items = data.data;
          _this9.meta = data.meta;
        });
      }
    }
  },
  computed: {
    params: function params(nv) {
      var _objectSpread2;

      return _objectSpread(_objectSpread({}, this.options), {}, (_objectSpread2 = {
        // query: this.search,
        query: this.status
      }, _defineProperty(_objectSpread2, "query", this.department), _defineProperty(_objectSpread2, "query", this.job), _objectSpread2));
    }
  },
  activated: function activated() {
    var _this10 = this;

    this.$store.dispatch("AUTH_USER");
    this.getDataFromApi().then(function (data) {
      _this10.items = data.data;
      _this10.meta = data.meta;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/PageHeader.vue?vue&type=template&id=f5cf67be&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/PageHeader.vue?vue&type=template&id=f5cf67be& ***!
  \******************************************************************************************************************************************************************************************************************/
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
        "v-card-title",
        { staticClass: "pt-0" },
        [
          _c("h4", { staticClass: "title green--text" }, [
            _vm._v(_vm._s(_vm.title))
          ]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _vm._t("actions")
        ],
        2
      ),
      _vm._v(" "),
      _c("v-card-subtitle", [_vm._t("sub-actions")], 2)
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selector/dropdown/DepartmentDropdownSelector.vue?vue&type=template&id=4daa9cfb&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/selector/dropdown/DepartmentDropdownSelector.vue?vue&type=template&id=4daa9cfb& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/admin/users/Index.vue?vue&type=template&id=242adbf1&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/admin/users/Index.vue?vue&type=template&id=242adbf1& ***!
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
  return _c(
    "div",
    [
      !_vm.formDataLoaded
        ? _c("loader-component")
        : _c(
            "v-card",
            { staticClass: "elevation-0 p-0 m-0" },
            [
              _c("page-header", {
                attrs: { title: "Employees" },
                scopedSlots: _vm._u([
                  {
                    key: "actions",
                    fn: function() {
                      return [
                        _c(
                          "v-tooltip",
                          {
                            attrs: { bottom: "" },
                            scopedSlots: _vm._u(
                              [
                                _vm.mixin_can("add users")
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
                                                  staticClass:
                                                    "elevation-3 mr-2",
                                                  attrs: {
                                                    color: "green",
                                                    to: {
                                                      name: "admin.users.create"
                                                    },
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
                                              _c(
                                                "v-icon",
                                                { attrs: { dark: "" } },
                                                [_vm._v("mdi-plus")]
                                              )
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
                      ]
                    },
                    proxy: true
                  }
                ])
              }),
              _vm._v(" "),
              _c(
                "v-row",
                { staticClass: "ml-4" },
                [
                  _vm.selected.length > 0
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
                              _vm.selected = []
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                " +
                              _vm._s(_vm.selected.length) +
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
                        bottom: "",
                        eager: ""
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "activator",
                          fn: function(ref) {
                            var menu = ref.on
                            var attrs = ref.attrs
                            return [
                              _c(
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
                                      _vm._s(_vm.status) +
                                      "\n                    "
                                  )
                                ]
                              )
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
                                      items: _vm.statuses,
                                      label: "Status"
                                    },
                                    model: {
                                      value: _vm.status,
                                      callback: function($$v) {
                                        _vm.status = $$v
                                      },
                                      expression: "status"
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
                        bottom: "",
                        eager: ""
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "activator",
                          fn: function(ref) {
                            var menu = ref.on
                            var attrs = ref.attrs
                            return [
                              _c(
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
                                      _vm._s(
                                        _vm.department
                                          ? _vm.department.name
                                          : "All Departments"
                                      ) +
                                      "\n                    "
                                  )
                                ]
                              )
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
                                      showAll: true,
                                      selectedDepartment: _vm.department
                                    },
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
                        bottom: "",
                        eager: ""
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "activator",
                          fn: function(ref) {
                            var menu = ref.on
                            var attrs = ref.attrs
                            return [
                              _c(
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
                                      _vm._s(
                                        _vm.job
                                          ? _vm.job.name
                                          : "All Job Designations"
                                      ) +
                                      "\n                    "
                                  )
                                ]
                              )
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
                                  _c("JobDropdownSelector", {
                                    ref: "jobDropdownSelector",
                                    attrs: {
                                      showAll: true,
                                      selectedJob: _vm.job,
                                      selectedDepartment: _vm.department
                                    },
                                    on: {
                                      onReset: _vm.onResetJob,
                                      onChange: _vm.onChangeJob
                                    },
                                    model: {
                                      value: _vm.job,
                                      callback: function($$v) {
                                        _vm.job = $$v
                                      },
                                      expression: "job"
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
                    "v-chip",
                    {
                      staticClass: "mr-2 mb-2",
                      attrs: {
                        close: "",
                        small: "",
                        "close-icon": "mdi-refresh"
                      },
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
                          value: _vm.mixin_can("export users"),
                          expression: "mixin_can('export users')"
                        }
                      ],
                      staticClass: "mr-2 mb-2",
                      attrs: {
                        close: "",
                        small: "",
                        "close-icon": "mdi-download",
                        dark: ""
                      },
                      on: { "click:close": _vm.onExport }
                    },
                    [_vm._v("\n                Export Data\n            ")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.selected.length > 0
                ? _c(
                    "v-row",
                    { staticClass: "ml-4" },
                    [
                      _c(
                        "v-chip",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                _vm.selected.length > 0 &&
                                _vm.status == "Active",
                              expression:
                                "selected.length > 0 && status == 'Active'"
                            }
                          ],
                          staticClass: "mr-2 mb-2",
                          attrs: {
                            close: "",
                            small: "",
                            "close-icon": "mdi-lock"
                          },
                          on: { "click:close": _vm.onPasswordReset }
                        },
                        [
                          _vm._v(
                            "\n                Reset Password\n            "
                          )
                        ]
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
                                _vm.selected.length == 1 &&
                                _vm.status == "Active",
                              expression:
                                "selected.length == 1 && status == 'Active'"
                            }
                          ],
                          staticClass: "mr-2 mb-2",
                          attrs: {
                            close: "",
                            small: "",
                            "close-icon": "mdi-credit-card-refund"
                          },
                          on: { "click:close": _vm.onEditFund }
                        },
                        [
                          _vm._v(
                            "\n                Edit Revolving Fund\n            "
                          )
                        ]
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
                                _vm.selected.length == 1 &&
                                _vm.status == "Active",
                              expression:
                                "selected.length == 1 && status == 'Active'"
                            }
                          ],
                          staticClass: "mr-2 mb-2",
                          attrs: {
                            close: "",
                            small: "",
                            "close-icon": "mdi-account-cog-outline",
                            color: "orange",
                            dark: ""
                          },
                          on: { "click:close": _vm.onEditPermissions }
                        },
                        [
                          _vm._v(
                            "\n                Edit Permissions\n            "
                          )
                        ]
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
                                _vm.selected.length > 0 &&
                                _vm.status == "Inactive",
                              expression:
                                "selected.length > 0 && status == 'Inactive'"
                            }
                          ],
                          staticClass: "mr-2 mb-2",
                          attrs: {
                            close: "",
                            small: "",
                            "close-icon": "mdi-check",
                            color: "green",
                            dark: ""
                          },
                          on: {
                            "click:close": function($event) {
                              return _vm.onSetActivation(true)
                            }
                          }
                        },
                        [_vm._v("\n                Activate\n            ")]
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
                                _vm.selected.length > 0 &&
                                _vm.status == "Active",
                              expression:
                                "selected.length > 0 && status == 'Active'"
                            }
                          ],
                          staticClass: "mr-2 mb-2",
                          attrs: {
                            close: "",
                            small: "",
                            "close-icon": "mdi-lock",
                            color: "red",
                            dark: ""
                          },
                          on: {
                            "click:close": function($event) {
                              return _vm.onSetActivation(false)
                            }
                          }
                        },
                        [_vm._v("\n                Deactivate\n            ")]
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
                                _vm.selected.length > 0 &&
                                _vm.status == "Archived",
                              expression:
                                "selected.length > 0 && status == 'Archived'"
                            }
                          ],
                          staticClass: "mr-2 mb-2",
                          attrs: {
                            close: "",
                            small: "",
                            "close-icon": "mdi-history",
                            color: "green",
                            dark: ""
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
                                _vm.selected.length > 0 &&
                                _vm.status == "Inactive",
                              expression:
                                "selected.length > 0 && status == 'Inactive'"
                            }
                          ],
                          staticClass: "mr-2 mb-2",
                          attrs: {
                            close: "",
                            small: "",
                            "close-icon": "mdi-trash-can-outline",
                            color: "red",
                            dark: ""
                          },
                          on: { "click:close": _vm.onDelete }
                        },
                        [_vm._v("\n                Archive\n            ")]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "v-card-subtitle",
                [
                  _c("v-hover", {
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(ref) {
                          var hover = ref.hover
                          return [
                            _c("v-text-field", {
                              attrs: {
                                elevation: hover ? 5 : 2,
                                "append-icon": "mdi-magnify",
                                label: "Search",
                                "single-line": "",
                                "hide-details": ""
                              },
                              on: {
                                keydown: function($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "enter",
                                      13,
                                      $event.key,
                                      "Enter"
                                    )
                                  ) {
                                    return null
                                  }
                                  return _vm.onSearch($event)
                                }
                              },
                              model: {
                                value: _vm.search,
                                callback: function($$v) {
                                  _vm.search = $$v
                                },
                                expression: "search"
                              }
                            })
                          ]
                        }
                      }
                    ])
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-data-table",
                    {
                      staticClass: "elevation-0",
                      attrs: {
                        headers: _vm.headers,
                        items: _vm.items,
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
                        "show-expand": "",
                        "single-expand": "",
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
                            key: "expanded-item",
                            fn: function(ref) {
                              var headers = ref.headers
                              var item = ref.item
                              return [
                                _c(
                                  "td",
                                  { attrs: { colspan: headers.length } },
                                  [
                                    _c("v-container", [
                                      _c("table", [
                                        _c("tr", [
                                          _c("td", [
                                            _c("strong", [_vm._v("Code")])
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [_vm._v(":")]),
                                          _vm._v(" "),
                                          _c("td", [_vm._v(_vm._s(item.code))])
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("td", [
                                            _c("strong", [_vm._v("Gender")])
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [_vm._v(":")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(item.gender))
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("td", [
                                            _c("strong", [_vm._v("Birthdate")])
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [_vm._v(":")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(item.birthdate))
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("td", [
                                            _c("strong", [
                                              _vm._v("Email Address")
                                            ])
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [_vm._v(":")]),
                                          _vm._v(" "),
                                          _c("td", [_vm._v(_vm._s(item.email))])
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("td", [
                                            _c("strong", [
                                              _vm._v("Telephone #")
                                            ])
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [_vm._v(":")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(item.telephone_number)
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("td", [
                                            _c("strong", [_vm._v("Address")])
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [_vm._v(":")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(item.address))
                                          ])
                                        ])
                                      ])
                                    ])
                                  ],
                                  1
                                )
                              ]
                            }
                          },
                          {
                            key: "item.revolving_fund",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(
                                      item.remaining_fund + " / " + item.fund
                                    ) +
                                    "\n                "
                                )
                              ]
                            }
                          },
                          {
                            key: "item.job",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(
                                      "" + (item.job ? item.job.name : "")
                                    ) +
                                    "\n                "
                                )
                              ]
                            }
                          },
                          {
                            key: "item.department",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(
                                      "" +
                                        (item.job
                                          ? item.job.department
                                            ? item.job.department.name
                                            : ""
                                          : "")
                                    ) +
                                    "\n                "
                                )
                              ]
                            }
                          },
                          {
                            key: "item.actions",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "v-icon",
                                  {
                                    staticClass: "mr-2",
                                    attrs: { small: "" },
                                    on: {
                                      click: function($event) {
                                        return _vm.onShow(item)
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                        mdi-eye\n                    "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _vm.mixin_can("edit users") &&
                                item.is_active == 1 &&
                                item.deleted_at == null
                                  ? _c(
                                      "v-icon",
                                      {
                                        staticClass: "mr-2",
                                        attrs: { small: "" },
                                        on: {
                                          click: function($event) {
                                            return _vm.$router.push({
                                              name: "admin.users.edit",
                                              params: { id: item.id }
                                            })
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
                        value: _vm.selected,
                        callback: function($$v) {
                          _vm.selected = $$v
                        },
                        expression: "selected"
                      }
                    },
                    [
                      _vm._v(" "),
                      _vm._v(" "),
                      _vm._v(" "),
                      _vm._v(" "),
                      _vm._v(" "),
                      _vm.items.length > 0
                        ? _c("template", { slot: "body.append" }, [
                            _c(
                              "tr",
                              { staticClass: "green--text hidden-md-and-up" },
                              [
                                _c("td", { staticClass: "title" }, [
                                  _vm._v(
                                    "\n                            Total:\n                            "
                                  ),
                                  _c("strong", [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(_vm.total_remaining_fund) +
                                        " /\n                                " +
                                        _vm._s(_vm.total_fund) +
                                        "\n                            "
                                    )
                                  ])
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "tr",
                              { staticClass: "green--text hidden-sm-and-down" },
                              [
                                _c("td", { staticClass: "title" }, [
                                  _vm._v("Total")
                                ]),
                                _vm._v(" "),
                                _c("td"),
                                _vm._v(" "),
                                _c("td"),
                                _vm._v(" "),
                                _c("td"),
                                _vm._v(" "),
                                _c("td", [
                                  _c("strong", [
                                    _vm._v(
                                      _vm._s(_vm.total_remaining_fund) +
                                        " /\n                                " +
                                        _vm._s(_vm.total_fund)
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("td"),
                                _vm._v(" "),
                                _c("td")
                              ]
                            )
                          ])
                        : _vm._e()
                    ],
                    2
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

/***/ "./resources/js/components/page/PageHeader.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/page/PageHeader.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageHeader_vue_vue_type_template_id_f5cf67be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageHeader.vue?vue&type=template&id=f5cf67be& */ "./resources/js/components/page/PageHeader.vue?vue&type=template&id=f5cf67be&");
/* harmony import */ var _PageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageHeader.vue?vue&type=script&lang=js& */ "./resources/js/components/page/PageHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageHeader_vue_vue_type_template_id_f5cf67be___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageHeader_vue_vue_type_template_id_f5cf67be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/page/PageHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/page/PageHeader.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/page/PageHeader.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/PageHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/page/PageHeader.vue?vue&type=template&id=f5cf67be&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/page/PageHeader.vue?vue&type=template&id=f5cf67be& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_template_id_f5cf67be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageHeader.vue?vue&type=template&id=f5cf67be& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/PageHeader.vue?vue&type=template&id=f5cf67be&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_template_id_f5cf67be___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_template_id_f5cf67be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/selector/dropdown/DepartmentDropdownSelector.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/selector/dropdown/DepartmentDropdownSelector.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DepartmentDropdownSelector_vue_vue_type_template_id_4daa9cfb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DepartmentDropdownSelector.vue?vue&type=template&id=4daa9cfb& */ "./resources/js/components/selector/dropdown/DepartmentDropdownSelector.vue?vue&type=template&id=4daa9cfb&");
/* harmony import */ var _DepartmentDropdownSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DepartmentDropdownSelector.vue?vue&type=script&lang=js& */ "./resources/js/components/selector/dropdown/DepartmentDropdownSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DepartmentDropdownSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DepartmentDropdownSelector_vue_vue_type_template_id_4daa9cfb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DepartmentDropdownSelector_vue_vue_type_template_id_4daa9cfb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/selector/dropdown/DepartmentDropdownSelector.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/selector/dropdown/DepartmentDropdownSelector.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/selector/dropdown/DepartmentDropdownSelector.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DepartmentDropdownSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DepartmentDropdownSelector.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selector/dropdown/DepartmentDropdownSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DepartmentDropdownSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/selector/dropdown/DepartmentDropdownSelector.vue?vue&type=template&id=4daa9cfb&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/selector/dropdown/DepartmentDropdownSelector.vue?vue&type=template&id=4daa9cfb& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DepartmentDropdownSelector_vue_vue_type_template_id_4daa9cfb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DepartmentDropdownSelector.vue?vue&type=template&id=4daa9cfb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selector/dropdown/DepartmentDropdownSelector.vue?vue&type=template&id=4daa9cfb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DepartmentDropdownSelector_vue_vue_type_template_id_4daa9cfb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DepartmentDropdownSelector_vue_vue_type_template_id_4daa9cfb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/views/pages/admin/users/Index.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/pages/admin/users/Index.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_242adbf1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=242adbf1& */ "./resources/js/views/pages/admin/users/Index.vue?vue&type=template&id=242adbf1&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/admin/users/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_242adbf1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_242adbf1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/admin/users/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/admin/users/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/pages/admin/users/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/admin/users/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/admin/users/Index.vue?vue&type=template&id=242adbf1&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/pages/admin/users/Index.vue?vue&type=template&id=242adbf1& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_242adbf1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=242adbf1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/admin/users/Index.vue?vue&type=template&id=242adbf1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_242adbf1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_242adbf1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);