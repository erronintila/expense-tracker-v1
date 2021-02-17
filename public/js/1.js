(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selector/dropdown/UserSelector.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/selector/dropdown/UserSelector.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_UserDataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/UserDataService */ "./resources/js/services/UserDataService.js");
//
//
//
//
//
//
//
//
//
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
    id: {
      type: Number,
      "default": null
    },
    parameters: {
      type: Object,
      "default": function _default() {}
    },
    showAll: {
      type: Boolean,
      "default": false
    },
    errors: {
      type: Array,
      "default": []
    },
    label: {
      type: String,
      "default": "Employee"
    },
    item: {
      type: Object,
      "default": null
    },
    item_value: {
      type: String,
      "default": "id"
    },
    item_text: {
      type: String,
      "default": "full_name"
    },
    rules: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      // item: {},
      items: []
    };
  },
  methods: {
    onChangeData: function onChangeData() {
      this.$emit("onChangeData", this.selectedItem);
    },
    onChangeInput: function onChangeInput() {
      this.$emit("onChangeInput");
    },
    getData: function getData() {
      var _this = this;

      _services_UserDataService__WEBPACK_IMPORTED_MODULE_0__["default"].getAll(this.parameters).then(function (response) {
        _this.items = response.data.data;

        if (_this.showAll) {
          _this.items.unshift({
            id: null,
            full_name: "All Employees"
          });

          _this.selectedItem = {
            id: null,
            full_name: "All Employees"
          };
        } // this.item = this.defaultValue;

      })["catch"](function (error) {
        _this.mixin_showErrors(error);
      });
    },
    resetData: function resetData() {
      this.selectedItem = this.showAll ? {
        id: null,
        full_name: "All Employees"
      } : null;
      this.getData();
    }
  },
  computed: {
    selectedItem: {
      get: function get() {
        return this.item;
      },
      set: function set(value) {
        this.$emit('onChangeData', value);
      }
    }
  },
  mounted: function mounted() {
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selector/dropdown/VendorSelector.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/selector/dropdown/VendorSelector.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_VendorDataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/VendorDataService */ "./resources/js/services/VendorDataService.js");
//
//
//
//
//
//
//
//
//
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
    id: {
      type: Number,
      "default": null
    },
    parameters: {
      type: Object,
      "default": function _default() {}
    },
    showAll: {
      type: Boolean,
      "default": false
    },
    errors: {
      type: Array,
      "default": []
    },
    label: {
      type: String,
      "default": "Vendor"
    },
    item_value: {
      type: String,
      "default": "id"
    },
    item_text: {
      type: String,
      "default": "name"
    },
    rules: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      defaultValue: {
        id: null,
        full_name: "All Vendors"
      },
      item: {},
      items: []
    };
  },
  methods: {
    onChangeData: function onChangeData() {
      this.$emit("onChangeData", this.item);
    },
    onChangeInput: function onChangeInput() {
      this.$emit("onChangeInput");
    },
    getData: function getData() {
      var _this = this;

      _services_VendorDataService__WEBPACK_IMPORTED_MODULE_0__["default"].getAll(this.parameters).then(function (response) {
        _this.items = response.data.data;

        if (_this.showAll) {
          _this.items.unshift(_this.defaultValue);

          _this.item = _this.defaultValue;
        }
      })["catch"](function (error) {
        _this.mixin_showErrors(error);
      });
    },
    resetData: function resetData() {
      this.item = this.showAll ? this.defaultValue : null;
      this.getData();
    }
  },
  mounted: function mounted() {
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expenses/CreateExpense.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expenses/CreateExpense.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_UserDataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/UserDataService */ "./resources/js/services/UserDataService.js");
/* harmony import */ var _services_ExpenseDataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/ExpenseDataService */ "./resources/js/services/ExpenseDataService.js");
/* harmony import */ var _services_VendorDataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/VendorDataService */ "./resources/js/services/VendorDataService.js");
/* harmony import */ var _components_selector_dropdown_UserSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/selector/dropdown/UserSelector */ "./resources/js/components/selector/dropdown/UserSelector.vue");
/* harmony import */ var _components_selector_dropdown_VendorSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/selector/dropdown/VendorSelector */ "./resources/js/components/selector/dropdown/VendorSelector.vue");
//
//
//
//
//
//
//
//
//
//
//
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
    UserSelector: _components_selector_dropdown_UserSelector__WEBPACK_IMPORTED_MODULE_4__["default"],
    VendorSelector: _components_selector_dropdown_VendorSelector__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      misc: {},
      collections: {
        users: [],
        vendors: [],
        expense_types: [],
        sub_types: []
      },
      form: {
        code: null,
        reference_no: null,
        description: null,
        amount: 0,
        reimbursable_amount: 0,
        tax_name: null,
        tax_rate: 0,
        is_compound_tax: false,
        is_tax_inclusive: true,
        tax_amount: 0,
        receipt_number: null,
        date: moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD"),
        details: null,
        remarks: null,
        notes: null,
        encoding_period: this.$store.getters.settings.expense_encoding_period,
        expense_type: null,
        sub_type: null,
        user: null,
        vendor: null,
        expense_report: {
          id: null
        },
        tax: {
          id: null
        },
        expense_header: {
          id: null
        }
      },
      errors: {
        code: [],
        reference_no: [],
        description: [],
        amount: [],
        reimbursable_amount: [],
        tax_name: [],
        tax_rate: [],
        is_compound_tax: [],
        is_tax_inclusive: [],
        tax_amount: [],
        receipt_number: [],
        date: [],
        details: [],
        remarks: [],
        notes: [],
        encoding_period: [],
        expense_type: [],
        sub_type: [],
        user: [],
        vendor: [],
        expense_report: [],
        tax: [],
        expense_header_id: []
      },
      rules: {
        code: [],
        reference_no: [],
        description: [],
        amount: [],
        reimbursable_amount: [],
        tax_name: [],
        tax_rate: [],
        is_compound_tax: [],
        is_tax_inclusive: [],
        tax_amount: [],
        receipt_number: [],
        date: [],
        details: [],
        remarks: [],
        notes: [],
        encoding_period: [],
        expense_type: [],
        sub_type: [],
        user: [],
        vendor: [],
        expense_report: [],
        tax: [],
        expense_header_id: []
      }
    };
  },
  methods: {
    getUser: function getUser(e) {
      this.form.user = e;
    },
    getVendor: function getVendor(e) {
      this.form.vendor = e;
    },
    getExpenseType: function getExpenseType(e) {// this.form.vendor = e;
    },
    getSubType: function getSubType(e) {// this.form.vendor = e;
    },
    onRefresh: function onRefresh() {
      Object.assign(this.$data, this.$options.data.apply(this));
    },
    onSave: function onSave() {
      console.log("user", this.form.user);
      console.log("vendor", this.form.vendor);
      return;

      var _this = this;

      var data = this.form; // data.date = "2021-02-01";
      // data.expense_type_id = 2;
      // data.is_tax_inclusive = false;
      // data.amount = 100;
      // data.reimbursable_amount = 100;
      // data.tax_amount = 0;
      // data.tax_rate = 0;
      // data.user_id = 2;

      if (this.isValid) {
        _services_ExpenseDataService__WEBPACK_IMPORTED_MODULE_2__["default"].store(data).then(function (response) {
          _this.mixin_showSuccess(response);
        })["catch"](function (error) {
          _this.mixin_showErrors(error);

          _this.errors = error.response.data.errors;
        });
      }
    }
  },
  computed: {
    minDate: function minDate() {},
    maxDate: function maxDate() {},
    isValid: function isValid() {
      // let _this = this;
      var errorTitle = "";
      var errorMessage = ""; // if (!this.$refs.form.validate()) {
      //     return false;
      // }

      return true;
    },
    amount_to_replensh: function amount_to_replensh() {},
    amount_to_reimburse: function amount_to_reimburse() {},
    total_amount: function total_amount() {}
  },
  mounted: function mounted() {
    console.log("create component loaded");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selector/dropdown/UserSelector.vue?vue&type=template&id=295b9103&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/selector/dropdown/UserSelector.vue?vue&type=template&id=295b9103& ***!
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expense_reports/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\resources\\js\\views\\modules\\admin\\expense_reports\\Index.vue: Identifier 'signatures' has already been declared (1177:20)\n\n\u001b[0m \u001b[90m 1175 | \u001b[39m                \u001b[90m// });\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 1176 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 1177 | \u001b[39m                let signatures \u001b[33m=\u001b[39m [\u001b[0m\n\u001b[0m \u001b[90m      | \u001b[39m                    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 1178 | \u001b[39m                    [\u001b[33m...\u001b[39mformattedSignatureLabels]\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 1179 | \u001b[39m                    \u001b[90m// [...signatureUnderlines]\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 1180 | \u001b[39m                ]\u001b[33m;\u001b[39m\u001b[0m\n    at Parser._raise (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:766:17)\n    at Parser.raiseWithData (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:759:17)\n    at Parser.raise (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:753:17)\n    at ScopeHandler.checkRedeclarationInScope (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:4873:12)\n    at ScopeHandler.declareName (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:4839:12)\n    at Parser.checkLVal (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9422:22)\n    at Parser.parseVarId (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:12119:10)\n    at Parser.parseVar (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:12094:12)\n    at Parser.parseVarStatement (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:11906:10)\n    at Parser.parseStatementContent (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:11498:21)\n    at Parser.parseStatement (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:11431:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:12013:25)\n    at Parser.parseBlockBody (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:11999:10)\n    at Parser.parseBlock (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:11983:10)\n    at Parser.parseFunctionBody (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:10963:24)\n    at Parser.parseArrowExpression (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:10932:10)\n    at Parser.parseExprAtom (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:10135:25)\n    at Parser.parseExprSubscripts (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9844:23)\n    at Parser.parseUpdate (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9824:21)\n    at Parser.parseMaybeUnary (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9813:17)\n    at Parser.parseExprOps (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9683:23)\n    at Parser.parseMaybeConditional (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9657:23)\n    at Parser.parseMaybeAssign (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9620:21)\n    at C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9586:39\n    at Parser.allowInAnd (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:11303:12)\n    at Parser.parseMaybeAssignAllowIn (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9586:17)\n    at Parser.parseExprListItem (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:11051:18)\n    at Parser.parseCallExpressionArguments (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:10053:22)\n    at Parser.parseCoverCallAndAsyncArrowHead (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9960:29)\n    at Parser.parseSubscript (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9896:19)\n    at Parser.parseSubscripts (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9867:19)\n    at Parser.parseExprSubscripts (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9850:17)\n    at Parser.parseUpdate (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9824:21)\n    at Parser.parseMaybeUnary (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9813:17)\n    at Parser.parseExprOps (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9683:23)\n    at Parser.parseMaybeConditional (C:\\Users\\ERROR-PC\\Documents\\LaravelProjects\\expense-tracker-v1\\node_modules\\@babel\\parser\\lib\\index.js:9657:23)");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/Index.vue?vue&type=template&id=b1b35a78&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expense_reports/Index.vue?vue&type=template&id=b1b35a78& ***!
>>>>>>> develop
  \*********************************************************************************************************************************************************************************************************************************/
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
<<<<<<< HEAD
      _c("v-autocomplete", {
        attrs: {
          items: _vm.items,
          "item-value": _vm.item_value,
          "item-text": _vm.item_text,
          label: _vm.label,
          rules: _vm.rules,
          "error-messages": _vm.errors,
          "return-object": ""
        },
        on: { change: _vm.onChangeData, input: _vm.onChangeInput },
        model: {
          value: _vm.selectedItem,
          callback: function($$v) {
            _vm.selectedItem = $$v
          },
          expression: "selectedItem"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selector/dropdown/VendorSelector.vue?vue&type=template&id=ddd05a80&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/selector/dropdown/VendorSelector.vue?vue&type=template&id=ddd05a80& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
      _c("v-autocomplete", {
        attrs: {
          items: _vm.items,
          "item-value": _vm.item_value,
          "item-text": _vm.item_text,
          label: _vm.label,
          rules: _vm.rules,
          "error-messages": _vm.errors,
          "return-object": ""
        },
        on: { change: _vm.onChangeData, input: _vm.onChangeInput },
        model: {
          value: _vm.item,
          callback: function($$v) {
            _vm.item = $$v
          },
          expression: "item"
        }
      })
=======
      _c(
        "v-card",
        { staticClass: "elevation-0 pt-0" },
        [
          _c(
            "v-card-title",
            { staticClass: "pt-0" },
            [
              _c("h4", { staticClass: "title green--text" }, [
                _vm._v("Expense Reports")
              ]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-tooltip",
                {
                  attrs: { bottom: "" },
                  scopedSlots: _vm._u(
                    [
                      _vm.mixin_can("add expense reports")
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
                                        staticClass: "elevation-3 mr-2",
                                        attrs: {
                                          color: "green",
                                          to: {
                                            name: "admin.expense_reports.create"
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
                                    _c("v-icon", { attrs: { dark: "" } }, [
                                      _vm._v("mdi-plus")
                                    ])
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
              ),
              _vm._v(" "),
              _c(
                "v-tooltip",
                {
                  attrs: { bottom: "" },
                  scopedSlots: _vm._u([
                    {
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
                                  staticClass: "elevation-3 mr-2",
                                  attrs: {
                                    color: "green",
                                    dark: "",
                                    fab: "",
                                    "x-small": ""
                                  },
                                  on: { click: _vm.onRefresh }
                                },
                                "v-btn",
                                attrs,
                                false
                              ),
                              on
                            ),
                            [
                              _c("v-icon", { attrs: { dark: "" } }, [
                                _vm._v("mdi-reload")
                              ])
                            ],
                            1
                          )
                        ]
                      }
                    }
                  ])
                },
                [_vm._v(" "), _c("span", [_vm._v("Refresh")])]
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
                    left: "",
                    bottom: ""
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "activator",
                      fn: function(ref) {
                        var menu = ref.on
                        var attrs = ref.attrs
                        return [
                          _c(
                            "v-tooltip",
                            {
                              attrs: { bottom: "" },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "activator",
                                    fn: function(ref) {
                                      var tooltip = ref.on
                                      return [
                                        _c(
                                          "v-btn",
                                          _vm._g(
                                            _vm._b(
                                              {
                                                staticClass: "elevation-3 mr-2",
                                                attrs: {
                                                  color: "green",
                                                  dark: "",
                                                  fab: "",
                                                  "x-small": ""
                                                }
                                              },
                                              "v-btn",
                                              attrs,
                                              false
                                            ),
                                            Object.assign({}, tooltip, menu)
                                          ),
                                          [
                                            _c(
                                              "v-icon",
                                              { attrs: { dark: "" } },
                                              [_vm._v("mdi-filter")]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    }
                                  }
                                ],
                                null,
                                true
                              )
                            },
                            [_vm._v(" "), _c("span", [_vm._v("Filter Data")])]
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
                              _c("DateRangePicker", {
                                attrs: {
                                  preset: _vm.preset,
                                  presets: _vm.presets,
                                  value: _vm.date_range
                                },
                                on: { updateDates: _vm.updateDates }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item",
                            [
                              _c("v-select", {
                                attrs: { items: _vm.statuses, label: "Status" },
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
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item",
                            [
                              _c("v-select", {
                                attrs: {
                                  items: _vm.users,
                                  "item-text": "full_name",
                                  "item-value": "id",
                                  label: "Employee",
                                  "return-object": ""
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
                "v-menu",
                {
                  attrs: {
                    "offset-y": "",
                    transition: "scale-transition",
                    "close-on-content-click": false,
                    left: ""
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "activator",
                      fn: function(ref) {
                        var menu = ref.on
                        var attrs = ref.attrs
                        return [
                          _c(
                            "v-tooltip",
                            {
                              attrs: { bottom: "" },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "activator",
                                    fn: function(ref) {
                                      var tooltip = ref.on
                                      return [
                                        _c(
                                          "v-btn",
                                          _vm._g(
                                            _vm._b(
                                              {
                                                staticClass: "elevation-3",
                                                attrs: {
                                                  color: "green",
                                                  dark: "",
                                                  fab: "",
                                                  "x-small": ""
                                                }
                                              },
                                              "v-btn",
                                              attrs,
                                              false
                                            ),
                                            Object.assign({}, tooltip, menu)
                                          ),
                                          [
                                            _c(
                                              "v-icon",
                                              { attrs: { dark: "" } },
                                              [
                                                _vm._v(
                                                  "\n                                    mdi-view-grid-plus-outline\n                                "
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    }
                                  }
                                ],
                                null,
                                true
                              )
                            },
                            [_vm._v(" "), _c("span", [_vm._v("More Options")])]
                          )
                        ]
                      }
                    }
                  ])
                },
                [
                  _vm._v(" "),
                  _c(
                    "v-list",
                    { attrs: { "max-width": "250" } },
                    [
                      _c(
                        "v-list-item",
                        { on: { click: _vm.onSubmit } },
                        [
                          _c(
                            "v-list-item-icon",
                            [_c("v-icon", [_vm._v("mdi-file-send-outline")])],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-list-item-subtitle", [
                            _vm._v(
                              "\n                            Submit Report(s)\n                        "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item",
                        { on: { click: _vm.onApprove } },
                        [
                          _c(
                            "v-list-item-icon",
                            [_c("v-icon", [_vm._v("mdi-file-check-outline")])],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-list-item-subtitle", [
                            _vm._v(
                              "\n                            Approve Report(s)\n                        "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item",
                        { on: { click: _vm.onReject } },
                        [
                          _c(
                            "v-list-item-icon",
                            [_c("v-icon", [_vm._v("mdi-close")])],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-list-item-subtitle", [
                            _vm._v(
                              "\n                            Reject Report(s)\n                        "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item",
                        { on: { click: _vm.onDelete } },
                        [
                          _c(
                            "v-list-item-icon",
                            [_c("v-icon", [_vm._v("mdi-close")])],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-list-item-subtitle", [
                            _vm._v(
                              "\n                            Cancel Report(s)\n                        "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item",
                        { on: { click: _vm.onDuplicate } },
                        [
                          _c(
                            "v-list-item-icon",
                            [_c("v-icon", [_vm._v("mdi-content-copy")])],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-list-item-subtitle", [
                            _vm._v(
                              "\n                            Duplicate Report(s)\n                        "
                            )
                          ])
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
          _c("v-card-subtitle", [
            _vm._v(
              "\n            " + _vm._s(_vm.formattedDateRange) + "\n        "
            )
          ]),
          _vm._v(" "),
          _c(
            "v-row",
            { staticClass: "ml-4" },
            [
              _vm.selected.length > 0
                ? _c(
                    "v-chip",
                    {
                      staticClass: "mr-2",
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
              _vm.status != null
                ? _c("v-chip", { staticClass: "mr-2", attrs: { small: "" } }, [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.status) +
                        "\n            "
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.user != null
                ? _c("v-chip", { staticClass: "mr-2", attrs: { small: "" } }, [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.user.full_name) +
                        "\n            "
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "v-chip",
                {
                  staticClass: "mr-2",
                  attrs: { close: "", small: "", "close-icon": "mdi-refresh" },
                  on: { "click:close": _vm.onRefresh }
                },
                [_vm._v("\n                Refresh\n            ")]
              ),
              _vm._v(" "),
              _vm.totalUnsubmitted > 0
                ? _c(
                    "v-chip",
                    {
                      staticClass: "mr-2",
                      attrs: {
                        color: "red",
                        dark: "",
                        small: "",
                        close: "",
                        "close-icon": "mdi-alert"
                      },
                      on: { "click:close": _vm.showAllUnsubmitted }
                    },
                    [
                      _vm._v(
                        "\n                Unsubmitted (" +
                          _vm._s(_vm.totalUnsubmitted) +
                          ")\n            "
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.totalUnapproved > 0
                ? _c(
                    "v-chip",
                    {
                      staticClass: "mr-2",
                      attrs: {
                        color: "red",
                        dark: "",
                        close: "",
                        small: "",
                        "close-icon": "mdi-alert"
                      },
                      on: { "click:close": _vm.showAllUnapproved }
                    },
                    [
                      _vm._v(
                        "\n                For Approval (" +
                          _vm._s(_vm.totalUnapproved) +
                          ")\n            "
                      )
                    ]
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-subtitle",
            [
              _c("v-text-field", {
                attrs: {
                  "append-icon": "mdi-magnify",
                  label: "Search",
                  "single-line": "",
                  "hide-details": ""
                },
                model: {
                  value: _vm.search,
                  callback: function($$v) {
                    _vm.search = $$v
                  },
                  expression: "search"
                }
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
                    "server-items-length": _vm.totalItems,
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
                        key: "item.status.status",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c(
                              "v-chip",
                              {
                                attrs: {
                                  color: item.status.color,
                                  dark: "",
                                  small: ""
                                }
                              },
                              [_vm._v(_vm._s(item.status.status))]
                            )
                          ]
                        }
                      },
                      {
                        key: "item.date",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _vm._v(
                              "\n                    " +
                                _vm._s(item.from) +
                                " ~ " +
                                _vm._s(item.to) +
                                "\n                "
                            )
                          ]
                        }
                      },
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
                                        _c("strong", [
                                          _vm._v("Reimbursable Amount")
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(":")]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(
                                              _vm.mixin_formatNumber(
                                                item.total_reimbursable
                                              )
                                            ) +
                                            "\n                                    "
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [
                                        _c("strong", [_vm._v("Paid")])
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(":")]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(
                                              _vm.mixin_formatNumber(item.paid)
                                            ) +
                                            "\n                                    "
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    item.balance > 0
                                      ? _c("tr", [
                                          _c("td", [
                                            _c("strong", [_vm._v("Balance")])
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [_vm._v(":")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(
                                                  _vm.mixin_formatNumber(
                                                    item.balance
                                                  )
                                                ) +
                                                "\n                                    "
                                            )
                                          ])
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [
                                        _c("strong", [_vm._v("Status")])
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(":")]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(item.status.status) +
                                            "\n                                        (" +
                                            _vm._s(item.status.remarks) +
                                            ")\n                                    "
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    item.remarks
                                      ? _c("tr", [
                                          _c("td", [
                                            _c("strong", [_vm._v("Remarks")])
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [_vm._v(":")]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(item.remarks))
                                          ])
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [
                                        _c("strong", [_vm._v("Created")])
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(":")]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(
                                              _vm.mixin_formatDate(
                                                item.created_at,
                                                "YYYY-MM-DD HH:mm:ss"
                                              )
                                            ) +
                                            "\n                                    "
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [
                                        _c("strong", [_vm._v("Submitted")])
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(":")]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(
                                              _vm.mixin_formatDate(
                                                item.submitted_at,
                                                "YYYY-MM-DD HH:mm:ss"
                                              )
                                            ) +
                                            "\n                                    "
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [
                                        _c("strong", [_vm._v("Approved")])
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(":")]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(
                                              _vm.mixin_formatDate(
                                                item.approved_at,
                                                "YYYY-MM-DD HH:mm:ss"
                                              )
                                            ) +
                                            "\n                                    "
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [
                                        _c("strong", [_vm._v("Late Submitted")])
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(":")]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(item.is_late_submitted))
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [
                                        _c("strong", [_vm._v("Late Approved")])
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(":")]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(item.is_late_approved))
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
                        key: "item.total",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _vm._v(
                              "\n                    " +
                                _vm._s(_vm.mixin_formatNumber(item.total)) +
                                "\n                "
                            )
                          ]
                        }
                      },
                      {
                        key: "item.user",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _vm._v(
                              "\n                    " +
                                _vm._s(
                                  item.user.last_name +
                                    ", " +
                                    item.user.first_name
                                ) +
                                "\n                "
                            )
                          ]
                        }
                      },
                      {
                        key: "item.updated_at",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _vm._v(
                              "\n                    " +
                                _vm._s(
                                  _vm.mixin_getHumanDate(item.updated_at)
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
                            _vm.show_edit(item)
                              ? _c(
                                  "v-icon",
                                  {
                                    staticClass: "mr-2",
                                    attrs: { small: "" },
                                    on: {
                                      click: function($event) {
                                        return _vm.onEdit(item)
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                        mdi-pencil\n                    "
                                    )
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            item.is_late_submitted || item.is_late_approved
                              ? _c(
                                  "v-tooltip",
                                  {
                                    attrs: { bottom: "" },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "activator",
                                          fn: function(ref) {
                                            var on = ref.on
                                            var attrs = ref.attrs
                                            return [
                                              _c(
                                                "v-icon",
                                                _vm._g(
                                                  _vm._b(
                                                    {
                                                      attrs: {
                                                        color: "red",
                                                        dark: ""
                                                      }
                                                    },
                                                    "v-icon",
                                                    attrs,
                                                    false
                                                  ),
                                                  on
                                                ),
                                                [
                                                  _vm._v(
                                                    "\n                                mdi-alert-circle-outline\n                            "
                                                  )
                                                ]
                                              )
                                            ]
                                          }
                                        }
                                      ],
                                      null,
                                      true
                                    )
                                  },
                                  [
                                    _vm._v(" "),
                                    item.is_late_submitted
                                      ? _c("div", [
                                          _vm._v(
                                            "\n                            Late Submitted\n                        "
                                          )
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    item.is_late_approved
                                      ? _c("div", [
                                          _vm._v(
                                            "\n                            Late Approved\n                        "
                                          )
                                        ])
                                      : _vm._e()
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
                  _vm._v(" "),
                  _vm._v(" "),
                  _vm.items.length > 0
                    ? _c("template", { slot: "body.append" }, [
                        _c(
                          "tr",
                          { staticClass: "green--text hidden-md-and-up" },
                          [
                            _c("td", { staticClass: "title" }, [
                              _vm._v("\n                            Total: "),
                              _c("strong", [_vm._v(_vm._s(_vm.totalAmount))])
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
                              _c("strong", [_vm._v(_vm._s(_vm.totalAmount))])
                            ]),
                            _vm._v(" "),
                            _c("td"),
                            _vm._v(" "),
                            _c("td"),
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
              ),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c("v-col", { attrs: { cols: "12", md: "8" } }, [
                    _c("div", [
                      _c("h4", { staticClass: "green--text" }, [
                        _vm._v(
                          "\n                            Note:\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("h4", { staticClass: "grey--text" }, [
                        _vm._v(
                          "\n                            Due of submission of expense reports :\n                            " +
                            _vm._s(
                              _vm.$store.getters.settings.submission_period
                            ) +
                            "\n                            (" +
                            _vm._s(_vm.maxDate) +
                            ")\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("h4", { staticClass: "grey--text" }, [
                        _vm._v(
                          "\n                            Approval period of expense reports :\n                            " +
                            _vm._s(
                              _vm.$store.getters.settings.approval_period
                            ) +
                            "\n                            days upon submission\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _vm.warning
                        ? _c("h4", { staticClass: "red--text" }, [
                            _vm._v(
                              "\n                            " +
                                _vm._s(_vm.warning) +
                                "\n                        "
                            )
                          ])
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "12", md: "4" } }, [
                    _c(
                      "div",
                      { staticClass: "text-right" },
                      [
                        _c(
                          "v-menu",
                          {
                            attrs: { "offset-y": "" },
                            scopedSlots: _vm._u([
                              {
                                key: "activator",
                                fn: function(ref) {
                                  var attrs = ref.attrs
                                  var on = ref.on
                                  return [
                                    _c(
                                      "v-btn",
                                      _vm._g(
                                        _vm._b(
                                          {
                                            attrs: { color: "green", dark: "" }
                                          },
                                          "v-btn",
                                          attrs,
                                          false
                                        ),
                                        on
                                      ),
                                      [
                                        _vm._v(
                                          "\n                                    Print\n                                "
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
                              "v-list",
                              [
                                _c(
                                  "v-list-item",
                                  {
                                    on: {
                                      click: function($event) {
                                        return _vm.printReport(
                                          "",
                                          "all_expenses",
                                          false
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("v-list-item-title", [
                                      _vm._v(
                                        "\n                                        Group by expense\n                                    "
                                      )
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  {
                                    on: {
                                      click: function($event) {
                                        return _vm.printReport(
                                          "",
                                          "expenses_by_user",
                                          false
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("v-list-item-title", [
                                      _vm._v(
                                        "\n                                        Group by user\n                                    "
                                      )
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  {
                                    on: {
                                      click: function($event) {
                                        return _vm.printReport(
                                          "",
                                          "expenses_by_date",
                                          false
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("v-list-item-title", [
                                      _vm._v(
                                        "\n                                        Group by date\n                                    "
                                      )
                                    ])
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
                            attrs: { "offset-y": "" },
                            scopedSlots: _vm._u([
                              {
                                key: "activator",
                                fn: function(ref) {
                                  var attrs = ref.attrs
                                  var on = ref.on
                                  return [
                                    _c(
                                      "v-btn",
                                      _vm._g(
                                        _vm._b(
                                          {
                                            attrs: { color: "green", dark: "" }
                                          },
                                          "v-btn",
                                          attrs,
                                          false
                                        ),
                                        on
                                      ),
                                      [
                                        _vm._v(
                                          "\n                                    Export to PDF\n                                "
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
                              "v-list",
                              [
                                _c(
                                  "v-list-item",
                                  {
                                    on: {
                                      click: function($event) {
                                        return _vm.printReport(
                                          "",
                                          "all_expenses",
                                          true
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("v-list-item-title", [
                                      _vm._v(
                                        "\n                                        Group by expense\n                                    "
                                      )
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  {
                                    on: {
                                      click: function($event) {
                                        return _vm.printReport(
                                          "",
                                          "expenses_by_user",
                                          true
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("v-list-item-title", [
                                      _vm._v(
                                        "\n                                        Group by user\n                                    "
                                      )
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  {
                                    on: {
                                      click: function($event) {
                                        return _vm.printReport(
                                          "",
                                          "expenses_by_date",
                                          true
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("v-list-item-title", [
                                      _vm._v(
                                        "\n                                        Group by date\n                                    "
                                      )
                                    ])
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
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
>>>>>>> develop
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
<<<<<<< HEAD



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expenses/CreateExpense.vue?vue&type=template&id=0759836f&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expenses/CreateExpense.vue?vue&type=template&id=0759836f& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
      _c("UserSelector", {
        ref: "userData",
        attrs: { showAll: true, errors: _vm.errors.user },
        on: {
          onChangeData: _vm.getUser,
          onChangeInput: function($event) {
            _vm.errors.user = []
          }
        },
        model: {
          value: _vm.form.user,
          callback: function($$v) {
            _vm.$set(_vm.form, "user", $$v)
          },
          expression: "form.user"
        }
      }),
      _vm._v(" "),
      _c("VendorSelector", {
        ref: "vendorData",
        attrs: { showAll: false, errors: [] },
        on: { onChangeData: _vm.getVendor }
      }),
      _vm._v(" "),
      _c("v-btn", { on: { click: _vm.onSave } }, [_vm._v("Save")])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/selector/dropdown/UserSelector.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/selector/dropdown/UserSelector.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserSelector_vue_vue_type_template_id_295b9103___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserSelector.vue?vue&type=template&id=295b9103& */ "./resources/js/components/selector/dropdown/UserSelector.vue?vue&type=template&id=295b9103&");
/* harmony import */ var _UserSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserSelector.vue?vue&type=script&lang=js& */ "./resources/js/components/selector/dropdown/UserSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserSelector_vue_vue_type_template_id_295b9103___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserSelector_vue_vue_type_template_id_295b9103___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/selector/dropdown/UserSelector.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/selector/dropdown/UserSelector.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/selector/dropdown/UserSelector.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSelector.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selector/dropdown/UserSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/selector/dropdown/UserSelector.vue?vue&type=template&id=295b9103&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/selector/dropdown/UserSelector.vue?vue&type=template&id=295b9103& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSelector_vue_vue_type_template_id_295b9103___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSelector.vue?vue&type=template&id=295b9103& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selector/dropdown/UserSelector.vue?vue&type=template&id=295b9103&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSelector_vue_vue_type_template_id_295b9103___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSelector_vue_vue_type_template_id_295b9103___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/selector/dropdown/VendorSelector.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/selector/dropdown/VendorSelector.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VendorSelector_vue_vue_type_template_id_ddd05a80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VendorSelector.vue?vue&type=template&id=ddd05a80& */ "./resources/js/components/selector/dropdown/VendorSelector.vue?vue&type=template&id=ddd05a80&");
/* harmony import */ var _VendorSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VendorSelector.vue?vue&type=script&lang=js& */ "./resources/js/components/selector/dropdown/VendorSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VendorSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VendorSelector_vue_vue_type_template_id_ddd05a80___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VendorSelector_vue_vue_type_template_id_ddd05a80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/selector/dropdown/VendorSelector.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/selector/dropdown/VendorSelector.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/selector/dropdown/VendorSelector.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VendorSelector.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selector/dropdown/VendorSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/selector/dropdown/VendorSelector.vue?vue&type=template&id=ddd05a80&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/selector/dropdown/VendorSelector.vue?vue&type=template&id=ddd05a80& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorSelector_vue_vue_type_template_id_ddd05a80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VendorSelector.vue?vue&type=template&id=ddd05a80& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selector/dropdown/VendorSelector.vue?vue&type=template&id=ddd05a80&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorSelector_vue_vue_type_template_id_ddd05a80___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorSelector_vue_vue_type_template_id_ddd05a80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/ExpenseDataService.js":
/*!*****************************************************!*\
  !*** ./resources/js/services/ExpenseDataService.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
=======

>>>>>>> develop

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

<<<<<<< HEAD
// import http from "../http-common";


var ExpenseDataService = /*#__PURE__*/function () {
  function ExpenseDataService() {
    _classCallCheck(this, ExpenseDataService);
  }

  _createClass(ExpenseDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/expenses", data);
    }
  }, {
    key: "get",
    value: function get(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/data/expenses", data);
    }
  }, {
    key: "show",
    value: function show(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/expenses/".concat(id), data);
    }
  }, {
    key: "store",
    value: function store(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/expenses", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/expenses/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/expenses/".concat(id), data);
    }
  }, {
    key: "restore",
    value: function restore(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/expenses/restore/".concat(id), data);
    }
  }]);

  return ExpenseDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new ExpenseDataService());

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
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/users", data);
    }
  }, {
    key: "get",
    value: function get(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/data/users", data);
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
  }]);

  return UserDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new UserDataService());

/***/ }),

/***/ "./resources/js/services/VendorDataService.js":
/*!****************************************************!*\
  !*** ./resources/js/services/VendorDataService.js ***!
  \****************************************************/
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


var VendorDataService = /*#__PURE__*/function () {
  function VendorDataService() {
    _classCallCheck(this, VendorDataService);
  }

  _createClass(VendorDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/vendors", data);
    }
  }, {
    key: "get",
    value: function get(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/data/vendors", data);
    }
  }, {
    key: "show",
    value: function show(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/vendors/".concat(id), data);
    }
  }, {
    key: "store",
    value: function store(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/vendors", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/vendors/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/vendors/".concat(id), data);
    }
  }, {
    key: "restore",
    value: function restore(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/vendors/restore/".concat(id), data);
    }
  }]);

  return VendorDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new VendorDataService());

/***/ }),

/***/ "./resources/js/views/modules/admin/expenses/CreateExpense.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/views/modules/admin/expenses/CreateExpense.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateExpense_vue_vue_type_template_id_0759836f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateExpense.vue?vue&type=template&id=0759836f& */ "./resources/js/views/modules/admin/expenses/CreateExpense.vue?vue&type=template&id=0759836f&");
/* harmony import */ var _CreateExpense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateExpense.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/expenses/CreateExpense.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateExpense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateExpense_vue_vue_type_template_id_0759836f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CreateExpense_vue_vue_type_template_id_0759836f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/expenses/CreateExpense.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/expenses/CreateExpense.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expenses/CreateExpense.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
=======
/***/ }),

/***/ "./resources/js/views/modules/admin/expense_reports/Index.vue":
/*!********************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/Index.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_b1b35a78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=b1b35a78& */ "./resources/js/views/modules/admin/expense_reports/Index.vue?vue&type=template&id=b1b35a78&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/expense_reports/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_b1b35a78___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_b1b35a78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/expense_reports/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/expense_reports/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/expense_reports/Index.vue?vue&type=template&id=b1b35a78&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/Index.vue?vue&type=template&id=b1b35a78& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_b1b35a78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=b1b35a78& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/Index.vue?vue&type=template&id=b1b35a78&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_b1b35a78___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_b1b35a78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> develop

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateExpense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateExpense.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expenses/CreateExpense.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateExpense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

<<<<<<< HEAD
/***/ }),

/***/ "./resources/js/views/modules/admin/expenses/CreateExpense.vue?vue&type=template&id=0759836f&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expenses/CreateExpense.vue?vue&type=template&id=0759836f& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateExpense_vue_vue_type_template_id_0759836f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateExpense.vue?vue&type=template&id=0759836f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expenses/CreateExpense.vue?vue&type=template&id=0759836f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateExpense_vue_vue_type_template_id_0759836f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateExpense_vue_vue_type_template_id_0759836f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });


=======
>>>>>>> develop

/***/ })

}]);