(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/Edit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expense_reports/Edit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_ExpenseReportDataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/ExpenseReportDataService */ "./resources/js/services/ExpenseReportDataService.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Form */ "./resources/js/views/modules/admin/expense_reports/Form.vue");
/* harmony import */ var _components_selector_dialog_UserDialogSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/selector/dialog/UserDialogSelector */ "./resources/js/components/selector/dialog/UserDialogSelector.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    UserDialogSelector: _components_selector_dialog_UserDialogSelector__WEBPACK_IMPORTED_MODULE_3__["default"],
    Form: _Form__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      loader: true,
      usersParameters: {
        params: {
          is_superadmin: false
        }
      },
      expense_report_id: parseInt(this.$route.params.id),
      form: {
        code: "",
        description: "",
        remarks: "",
        notes: "",
        user: null,
        expenses: [],
        status: null
      },
      errors: {
        date_range: [],
        code: [],
        description: [],
        remarks: [],
        notes: [],
        user_id: [],
        expenses: []
      },
      rules: {},
      date_range: [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("month").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("month").format("YYYY-MM-DD")]
    };
  },
  methods: {
    // updateDates(e) {
    //     this.date_range = e;
    //     this.loadExpenses(
    //         this.form.user == null ? null : this.form.user.id
    //     ).then(() => {
    //         this.getDataFromApi().then(data => {
    //             this.items = data.items;
    //             this.totalItems = data.total;
    //         });
    //     });
    // },
    // updateUser() {
    //     this.loadExpenses(
    //         this.form.user == null ? null : this.form.user.id
    //     ).then(() => {
    //         this.getDataFromApi().then(data => {
    //             this.items = data.items;
    //             this.totalItems = data.total;
    //         });
    //     });
    // },
    selectUser: function selectUser(e) {
      if (e == null || e == undefined) {
        this.form.user = null;
        return;
      }

      this.form.user = e;
    },
    resetUser: function resetUser() {
      this.form.user = null;
    },
    getData: function getData() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        axios.get("/api/expense_reports/".concat(_this.$route.params.id)).then(function (response) {
          var data = response.data.data;
          console.log(data); // this.form = data;

          _this.form.code = data.code;
          _this.form.description = data.description;
          _this.form.remarks = data.remarks;
          _this.form.notes = data.notes;
          _this.form.user = data.user;
          _this.form.status = data.status; // this.total = data.total;

          resolve(data);
        })["catch"](function (error) {
          _this.mixin_showErrors(error);

          reject();
        })["finally"](_this.loader = false);
      });
    },
    // getDataFromApi() {
    //     this.loading = true;
    //     return new Promise((resolve, reject) => {
    //         const { sortBy, sortDesc, page, itemsPerPage } = this.options;
    //         let range = this.date_range;
    //         let user_id = this.form.user == null ? null : this.form.user.id;
    //         axios
    //             .get("/api/expenses", {
    //                 params: {
    //                     page: page,
    //                     itemsPerPage: itemsPerPage,
    //                     start_date: range[0],
    //                     end_date: range[1] ? range[1] : range[0],
    //                     user_id: user_id,
    //                     expense_report_id: this.$route.params.id,
    //                     update_report: true
    //                 }
    //             })
    //             .then(response => {
    //                 let items = response.data.data;
    //                 let total = response.data.meta.total;
    //                 resolve({ items, total });
    //             })
    //             .catch(error => {
    //                 this.mixin_showErrors(error);
    //                 reject();
    //             })
    //             .finally((this.loading = false));
    //     });
    // },
    loadExpenses: function loadExpenses(reportData) {
      var _this2 = this;

      // let start_date = moment()
      //     .startOf("month")
      //     .format("YYYY-MM-DD");
      // let end_date = moment()
      //     .endOf("month")
      //     .format("YYYY-MM-DD");
      var user_id = this.form.user ? this.form.user.id : null;
      return new Promise(function (resolve, reject) {
        axios.get("/api/data/expenses", {
          params: {
            update_report: true,
            user_id: user_id,
            start_date: reportData.from,
            end_date: moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf().format("YYYY-MM-DD"),
            expense_report_id: _this2.$route.params.id
          }
        }).then(function (response) {
          console.log(response);
          _this2.form.expenses = response.data.data;
          resolve();
        })["catch"](function (error) {
          _this2.mixin_showErrors(error);

          reject();
        });
      });
    },
    // loadUsers() {
    //     return new Promise((resolve, reject) => {
    //         axios
    //             .get("/api/data/users")
    //             .then(response => {
    //                 this.users = response.data.data;
    //                 resolve();
    //             })
    //             .catch(error => {
    //                 this.mixin_showErrors(error);
    //                 reject();
    //             });
    //     });
    // },
    // onRefresh() {
    //     Object.assign(this.$data, this.$options.data.apply(this));
    // },
    onSave: function onSave(value) {
      var _this3 = this;

      // this.$refs.form.validate();
      // if (this.selected.length == 0) {
      //     this.$dialog.message.error("No Expenses selected", {
      //         position: "top-right",
      //         timeout: 2000
      //     });
      //     return;
      // }
      // if (this.$refs.form.validate()) {
      this.loader = true;
      value.user_id = value.user ? value.user.id : null;
      _services_ExpenseReportDataService__WEBPACK_IMPORTED_MODULE_1__["default"].update(this.$route.params.id, value).then(function (response) {
        _this3.mixin_successDialog(response.data.status, response.data.message);

        _this3.$router.push({
          name: "admin.expense_reports.index"
        });
      })["catch"](function (error) {
        _this3.mixin_showErrors(error);

        _this3.errors = error.response.data.errors;
      })["finally"](this.loader = false); //     return;
      // }
    }
  },
  watch: {// params: {
    //     handler() {
    //         this.getDataFromApi().then(data => {
    //             this.items = data.items;
    //             this.totalItems = data.total;
    //         });
    //     },
    //     deep: true
    // },
    // selected() {
    //     this.total = this.selected.reduce(
    //         (total, item) => total + item.amount,
    //         0
    //     );
    // }
  },
  computed: {// params(nv) {
    //     return {
    //         ...this.options,
    //         query: this.date_range,
    //         query: this.expense_report_id,
    //         query: this.form.user == null ? null : this.form.user.id
    //     };
    // },
    // default_description() {
    //     return `Expense Report Summary (${moment(this.date_range[0]).format(
    //         "LL"
    //     )} - ${moment(this.date_range[1]).format("LL")})`;
    // },
    // balance() {
    //     return this.total - this.paid;
    // }
  },
  created: function created() {
    var _this4 = this;

    this.getData().then(function (data) {
      _this4.loadExpenses(data);
    });
  },
  activated: function activated() {
    var _this5 = this;

    this.getData().then(function (data) {
      _this5.loadExpenses(data);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/Edit.vue?vue&type=template&id=665e6808&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expense_reports/Edit.vue?vue&type=template&id=665e6808& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
                  _c("h4", { staticClass: "title green--text" }, [
                    _vm._v("Edit Expense Report")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-container",
                [
                  _c("Form", {
                    attrs: {
                      form: _vm.form,
                      errors: _vm.errors,
                      rules: _vm.rules,
                      expense_report_id: _vm.expense_report_id,
                      dateRange: _vm.date_range
                    },
                    on: { onSave: _vm.onSave },
                    scopedSlots: _vm._u([
                      {
                        key: "userSelector",
                        fn: function() {
                          return [
                            _c(
                              "v-row",
                              [
                                _c(
                                  "v-col",
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        value: _vm.form.user
                                          ? _vm.form.user.full_name
                                          : "No Employee",
                                        "error-messages": _vm.errors.user_id,
                                        label: "Employee",
                                        readonly: ""
                                      },
                                      on: {
                                        input: function($event) {
                                          _vm.errors.user_id = []
                                        }
                                      },
                                      scopedSlots: _vm._u([
                                        {
                                          key: "append",
                                          fn: function() {
                                            return [
                                              _c("UserDialogSelector", {
                                                ref: "userDialogSelector",
                                                attrs: {
                                                  selectedUser: _vm.form.user,
                                                  usersParameters:
                                                    _vm.usersParameters
                                                },
                                                on: {
                                                  selectUser: _vm.selectUser,
                                                  onReset: _vm.resetUser
                                                },
                                                scopedSlots: _vm._u([
                                                  {
                                                    key: "openDialog",
                                                    fn: function(ref) {
                                                      var bind = ref.bind
                                                      var on = ref.on
                                                      return [
                                                        _c(
                                                          "v-btn",
                                                          _vm._g(
                                                            _vm._b(
                                                              {
                                                                attrs: {
                                                                  fab: "",
                                                                  color:
                                                                    "primary",
                                                                  text: "",
                                                                  "x-small": ""
                                                                }
                                                              },
                                                              "v-btn",
                                                              bind,
                                                              false
                                                            ),
                                                            on
                                                          ),
                                                          [
                                                            _c(
                                                              "v-icon",
                                                              {
                                                                attrs: {
                                                                  dark: ""
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "mdi-magnify"
                                                                )
                                                              ]
                                                            )
                                                          ],
                                                          1
                                                        )
                                                      ]
                                                    }
                                                  }
                                                ])
                                              })
                                            ]
                                          },
                                          proxy: true
                                        }
                                      ])
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ]
                        },
                        proxy: true
                      }
                    ])
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/modules/admin/expense_reports/Edit.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/Edit.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_665e6808___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=665e6808& */ "./resources/js/views/modules/admin/expense_reports/Edit.vue?vue&type=template&id=665e6808&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/expense_reports/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_665e6808___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_665e6808___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/expense_reports/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/expense_reports/Edit.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/Edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/expense_reports/Edit.vue?vue&type=template&id=665e6808&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/Edit.vue?vue&type=template&id=665e6808& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_665e6808___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=665e6808& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/Edit.vue?vue&type=template&id=665e6808&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_665e6808___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_665e6808___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);