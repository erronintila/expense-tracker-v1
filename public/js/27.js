(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/expenses/Form.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/expenses/Form.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Form */ "./resources/js/views/pages/expenses/Form.vue");
/* harmony import */ var _components_dialogs_AddVendor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/dialogs/AddVendor */ "./resources/js/components/dialogs/AddVendor.vue");
/* harmony import */ var _components_selector_dialog_VendorDialogSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../.../../../../components/selector/dialog/VendorDialogSelector */ "./resources/js/components/selector/dialog/VendorDialogSelector.vue");
/* harmony import */ var _components_selector_dialog_UserDialogSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../.../../../../components/selector/dialog/UserDialogSelector */ "./resources/js/components/selector/dialog/UserDialogSelector.vue");
var _this = undefined;

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    expenseForm: {
      type: Object,
      "default": function _default() {
        return {
          code: null,
          reference_no: null,
          description: null,
          amount: 0,
          reimbursable_amount: 0,
          tax_name: "",
          tax_rate: 0,
          is_compound_tax: false,
          is_tax_inclusive: true,
          tax_amount: 0,
          receipt_number: null,
          date: moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD"),
          details: [],
          // details: {
          //     description: "",
          //     quantity: 1,
          //     amount: 0,
          //     total: 0
          // },
          remarks: "",
          notes: "",
          encoding_period: _this.$store.getters.settings.expense_encoding_period,
          // encoding_period: 5,
          // expense_type: {
          //     id: null,
          //     name: "",
          //     limit: null,
          //     sub_types: { id: null, name: "None", limit: null }
          // },
          // sub_type: { id: null, name: "", limit: null },
          expense_type: null,
          sub_type: null,
          user: null,
          vendor: null,
          expense_report_id: null,
          tax_id: null,
          expense_header_id: null,
          details_quantity: 0,
          details_amount: 0,
          is_active: true,
          // particular: "",
          // particular_amount: 0,
          // particular_reimbursable_amount: 0,
          is_reimbursable: false,
          revolving_fund: 0
        };
      }
    },
    rules: {
      type: Object,
      "default": function _default() {
        return {
          reimbursable_amount: [],
          revolving_fund: []
        };
      }
    },
    errors: {
      type: Object,
      "default": function _default() {
        return {
          sub_type: [],
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
          expense_type_id: [],
          sub_type_id: [],
          user_id: [],
          vendor_id: [],
          expense_report_id: [],
          tax_id: [],
          expense_header_id: [],
          is_active: []
        };
      }
    },
    itemizeExpenses: {
      type: Boolean,
      "default": false
    }
  },
  components: {
    AddVendor: _components_dialogs_AddVendor__WEBPACK_IMPORTED_MODULE_3__["default"],
    VendorDialogSelector: _components_selector_dialog_VendorDialogSelector__WEBPACK_IMPORTED_MODULE_4__["default"],
    UserDialogSelector: _components_selector_dialog_UserDialogSelector__WEBPACK_IMPORTED_MODULE_5__["default"],
    Form: _Form__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      loader: false,
      panel: [0, 1],
      paid_through: "Revolving Fund",
      reimbursable_amount: false,
      openAddVendor: false,
      dialog: false,
      valid: false,
      menu: false,
      itemize: false,
      headers: [{
        text: "Particulars",
        value: "description",
        sortable: false
      }, {
        text: "Quantity",
        value: "quantity",
        sortable: false
      }, {
        text: "Amount",
        value: "amount",
        sortable: false
      }, {
        text: "Total",
        value: "total",
        sortable: false
      }, {
        text: "",
        value: "actions",
        sortable: false
      }],
      sub_detail: {
        description: "",
        quantity: 1,
        amount: 0,
        total: 0
      },
      form: {
        code: null,
        reference_no: null,
        description: null,
        amount: 0,
        reimbursable_amount: 0,
        tax_name: "",
        tax_rate: 0,
        is_compound_tax: false,
        is_tax_inclusive: true,
        tax_amount: 0,
        receipt_number: null,
        date: moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD"),
        details: [],
        // details: {
        //     description: "",
        //     quantity: 1,
        //     amount: 0,
        //     total: 0
        // },
        remarks: "",
        notes: "",
        encoding_period: this.$store.getters.settings.expense_encoding_period,
        // encoding_period: 5,
        expense_type: null,
        sub_type: null,
        // expense_type: {
        //     id: null,
        //     name: "",
        //     limit: null,
        //     sub_types: { id: null, name: "None", limit: null }
        // },
        // sub_type: { id: null, name: "", limit: null },
        user: null,
        vendor: null,
        expense_report_id: null,
        tax_id: null,
        expense_header_id: null,
        details_quantity: 0,
        details_amount: 0,
        is_active: true,
        // particular: "",
        // particular_amount: 0,
        // particular_reimbursable_amount: 0,
        is_reimbursable: false,
        revolving_fund: 0
      },
      items: [],
      expense_types: [],
      sub_types: []
    };
  },
  methods: {
    selectVendor: function selectVendor(e) {
      if (e == null || e == undefined) {
        this.form.vendor = null;
        return;
      }

      this.form.vendor = e;
    },
    resetVendor: function resetVendor() {
      this.form.vendor = null;
    },
    onRefresh: function onRefresh() {
      Object.assign(this.$data, this.$options.data.apply(this));
    },
    onSave: function onSave() {
      var expense_type_limit = this.form.expense_type ? this.form.expense_type.limit : null;
      var sub_type_limit = this.form.sub_type ? this.form.sub_type.limit : null;
      var expense_limit = sub_type_limit ? sub_type_limit : expense_type_limit;
      var expense_amount = this.form.amount;

      if (!this.mixin_can("add expenses beyond limit")) {
        if (!this.itemize) {
          if (expense_limit !== null && expense_limit < expense_amount) {
            this.mixin_errorDialog("Error", "Amount can't be greater than expense limit.");
            return;
          }
        } else {
          if (expense_limit !== null && expense_limit < this.form.details_amount) {
            this.mixin_errorDialog("Error", "Itemized Expenses Amount can't be greater than expense limit");
            return;
          }
        }
      }

      if (this.form.user == null) {
        this.mixin_errorDialog("Error", "No user selected");
        return;
      }

      if (!this.form.expense_type) {
        this.mixin_errorDialog("Error", "No Expense Type Selected");
        return;
      }

      if (this.amount_to_replenish > (this.form.user ? this.form.user.remaining_fund : 0)) {
        this.mixin_errorDialog("Error", "Amount to replenish is greater than remaining fund");
        return;
      }

      if (this.amount_to_replenish + this.amount_to_reimburse < this.form.amount) {
        this.mixin_errorDialog("Error", "Expense Amount is greater than amount to replenish/reimburse");
        return;
      }

      if (this.amount_to_replenish + this.amount_to_reimburse <= 0) {
        this.mixin_errorDialog("Error", "Total Expenses can't be lesser or equal to zero");
        return;
      }

      this.$refs.form.validate();

      if (!this.$refs.form.validate()) {
        return;
      }

      this.$emit("on-save", _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, this.form), {
        itemize: this.itemize
      }), {
        items: this.form.details
      }), {
        amount_to_reimburse: this.amount_to_reimburse
      }));
    },
    addItem: function addItem() {
      var description = this.sub_detail.description;
      var quantity = this.mixin_convertToNumber(this.sub_detail.quantity);
      var amount = this.mixin_convertToNumber(this.sub_detail.amount);
      var total = this.mixin_convertToNumber(this.sub_detail.total);
      var limit = this.expense_amount_limit;

      if (description == "" || total <= 0) {
        return;
      }

      if (!this.mixin_can("add expenses beyond limit")) {
        if (limit !== null) {
          if (limit * quantity < amount) {
            return;
          }
        }
      }

      this.form.details.push({
        description: description,
        quantity: quantity,
        amount: amount,
        total: total
      });
      this.dialog = false;
      this.sub_detail.description = "";
      this.sub_detail.quantity = 1;
      this.sub_detail.amount = 0;
      this.sub_detail.total = 0;
    },
    onRemove: function onRemove(item) {
      if (this.form.details) {
        var index = this.form.details.indexOf(item);
        confirm("Are you sure you want to remove this item?") && this.form.details.splice(index, 1);
      }
    },
    loadSubTypes: function loadSubTypes(e) {
      // this.form.sub_type = null;
      if (e) {
        this.sub_types = e.sub_types;
        this.sub_types.unshift({
          id: null,
          name: "None",
          limit: null
        });
      }
    }
  },
  computed: {
    minDate: function minDate() {
      var _settings$expense_enc;

      if (this.mixin_can("add expenses beyond encoding period")) {
        return null;
      }

      var settings = this.$store.getters.settings;
      var encodingMinDate = moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(((_settings$expense_enc = settings.expense_encoding_period) !== null && _settings$expense_enc !== void 0 ? _settings$expense_enc : 1) - 1, "days").format("YYYY-MM-DD");
      return encodingMinDate;
    },
    maxDate: function maxDate() {
      var today = moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD");
      return today;
    },
    amount_to_replenish: function amount_to_replenish() {
      var remaining_fund = this.mixin_convertToNumber(this.form.user ? this.form.user.remaining_fund : 0);
      var amount = this.mixin_convertToNumber(this.form.amount);
      var reimbursable = this.mixin_convertToNumber(this.form.reimbursable_amount);
      var amt_to_replenish = amount < reimbursable ? 0 : amount - reimbursable;

      if (this.mixin_can("set reimbursable amount")) {
        return amount - reimbursable > remaining_fund ? 0 : amt_to_replenish;
      }

      if (remaining_fund >= amount) {
        return amount;
      }

      return amount - Math.abs(remaining_fund - amount);
    },
    amount_to_reimburse: function amount_to_reimburse() {
      var remaining_fund = this.mixin_convertToNumber(this.form.user ? this.form.user.remaining_fund : 0);
      var amount = this.mixin_convertToNumber(this.form.amount);
      var reimbursable = this.mixin_convertToNumber(this.form.reimbursable_amount);

      if (this.mixin_can("set reimbursable amount")) {
        return reimbursable > amount ? 0 : reimbursable;
      }

      if (remaining_fund < amount) {
        var to_replenish = Math.abs(remaining_fund - amount);
        this.form.reimbursable_amount = to_replenish;
        return to_replenish;
      }

      this.form.reimbursable_amount = 0;
      return 0;
    },
    expense_amount: function expense_amount() {
      var amt_to_replenish = this.mixin_convertToNumber(this.amount_to_replenish);
      var amt_to_reimburse = this.mixin_convertToNumber(this.amount_to_reimburse);
      return this.mixin_convertToNumber(amt_to_replenish + amt_to_reimburse);
    },
    display_reimbursable_amount: function display_reimbursable_amount() {
      return parseFloat(this.form.amount) > parseFloat(this.form.user ? this.form.user.remaining_fund : 0);
    },
    taxable_amount: {
      get: function get() {
        if (!this.form.is_tax_inclusive) {
          this.form.tax_amount = this.tax_exclusive.toFixed(2);
          return this.tax_exclusive.toFixed(2);
        }

        this.form.tax_amount = this.tax_inclusive.toFixed(2);
        return this.tax_inclusive.toFixed(2);
      },
      set: function set(amount) {
        this.form.tax_amount = amount;
        return amount;
      }
    },
    tax_inclusive: function tax_inclusive() {
      return this.mixin_convertToNumber(this.form.amount) / (1 + this.mixin_convertToNumber(this.form.tax_rate) / 100) * (this.mixin_convertToNumber(this.form.tax_rate) / 100);
    },
    tax_exclusive: function tax_exclusive() {
      return this.mixin_convertToNumber(this.form.amount) * (this.mixin_convertToNumber(this.form.tax_rate) / 100);
    },
    total_details_amount: function total_details_amount() {
      if (this.sub_detail) {
        var total = (this.mixin_convertToNumber(this.sub_detail.quantity) * this.mixin_convertToNumber(this.sub_detail.amount)).toFixed(2);
        this.sub_detail.total = total;
        return total;
      } // if (this.form.details) {
      //     let total = (
      //         this.mixin_convertToNumber(this.form.details.quantity) *
      //         this.mixin_convertToNumber(this.form.details.amount)
      //     ).toFixed(2);
      //     this.form.details.total = total;
      //     return total;
      // }


      return 0;
    },
    expense_amount_limit: function expense_amount_limit() {
      if (this.form.sub_type) {
        return this.form.sub_type.limit == null ? this.form.expense_type ? this.form.expense_type.limit : null : this.form.sub_type.limit;
      }

      return null;
    },
    isVendorTaxInclusive: function isVendorTaxInclusive() {
      return this.form.vendor ? this.form.vendor.is_vat_inclusive : false;
    }
  },
  watch: {
    expenseForm: {
      immediate: true,
      deep: true,
      handler: function handler(newValue, oldValue) {
        this.form = newValue;

        if (newValue.user) {
          this.expense_types = newValue.user.expense_types;
        }

        if (newValue.expense_type) {
          this.sub_types = newValue.expense_type ? newValue.expense_type.sub_types : null;
          var index = this.expense_types.findIndex(function (item) {
            return item.id == newValue.expense_type.id;
          });
          index === -1 ? this.expense_types.push(newValue.expense_type) : null;
        }
      }
    },
    itemizeExpenses: {
      immediate: true,
      handler: function handler(newValue, oldValue) {
        this.itemize = newValue;
      }
    },
    "form.details": function formDetails() {
      if (this.form.details && this.form.details.length) {
        this.form.amount = this.form.details.reduce(function (total, item) {
          return parseFloat(total) + parseFloat(item.total);
        }, 0);
        this.form.details_amount = this.form.details.reduce(function (total, item) {
          return parseFloat(total) + parseFloat(item.amount);
        }, 0);
        this.form.details_quantity = this.form.details.reduce(function (total, item) {
          return parseFloat(total) + parseFloat(item.quantity);
        }, 0);
      }
    },
    itemize: function itemize() {
      if (this.form.details && this.form.details.length) {
        this.form.amount = this.form.details.reduce(function (total, item) {
          return parseFloat(total) + parseFloat(item.total);
        }, 0);
      }

      if (this.form.user == null) {
        this.itemize = false;
        this.mixin_errorDialog("Error", "No user selected");
        return;
      }

      if (!this.form.expense_type) {
        this.itemize = false;
        this.mixin_errorDialog("Error", "No expense type Selected");
        return;
      }
    },
    "form.vendor": function formVendor() {
      this.form.tax_rate = this.$store.getters.settings.tax_rate; // this.form.tax_rate = 12;

      this.form.tax_amount = 0;
      this.form.is_tax_inclusive = true;
    },
    "form.user": function formUser() {
      this.expense_types = this.form.user ? this.form.user.expense_types : [];
    },
    "form.expense_type": function formExpense_type() {
      if (this.form) {
        this.loadSubTypes(this.form.expense_type);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/expenses/Form.vue?vue&type=template&id=0d66f6c4&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/expenses/Form.vue?vue&type=template&id=0d66f6c4& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "overline mb-4 green--text" }, [
        _vm._v("\n        Basic Details\n    ")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text--disabled" }, [
        _vm._v(
          "\n        Note: Due of encoding of expenses : Within\n        " +
            _vm._s(_vm.$store.getters.settings.expense_encoding_period) +
            " day/s\n    "
        )
      ]),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            [
              _c(
                "v-menu",
                {
                  ref: "menu",
                  attrs: {
                    "close-on-content-click": false,
                    transition: "scale-transition",
                    "offset-y": "",
                    "min-width": "290px"
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "activator",
                      fn: function(ref) {
                        var on = ref.on
                        var attrs = ref.attrs
                        return [
                          _c(
                            "v-text-field",
                            _vm._g(
                              _vm._b(
                                {
                                  attrs: {
                                    "error-messages": _vm.errors.date,
                                    label: "Date",
                                    readonly: ""
                                  },
                                  on: {
                                    input: function($event) {
                                      _vm.errors.date = []
                                    }
                                  },
                                  model: {
                                    value: _vm.form.date,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "date", $$v)
                                    },
                                    expression: "form.date"
                                  }
                                },
                                "v-text-field",
                                attrs,
                                false
                              ),
                              on
                            )
                          )
                        ]
                      }
                    }
                  ]),
                  model: {
                    value: _vm.menu,
                    callback: function($$v) {
                      _vm.menu = $$v
                    },
                    expression: "menu"
                  }
                },
                [
                  _vm._v(" "),
                  _c("v-date-picker", {
                    attrs: {
                      "no-title": "",
                      scrollable: "",
                      color: "success",
                      min: _vm.minDate,
                      max: _vm.maxDate
                    },
                    model: {
                      value: _vm.form.date,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "date", $$v)
                      },
                      expression: "form.date"
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
      ),
      _vm._v(" "),
      _vm._t("userSelector"),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            [
              _c("v-text-field", {
                attrs: {
                  value: _vm.form.vendor ? _vm.form.vendor.name : "No Vendor",
                  "error-messages": _vm.errors.vendor_id,
                  label: "Vendor",
                  readonly: ""
                },
                on: {
                  input: function($event) {
                    _vm.errors.vendor_id = []
                  }
                },
                scopedSlots: _vm._u([
                  {
                    key: "append",
                    fn: function() {
                      return [
                        _c("VendorDialogSelector", {
                          ref: "vendorDialogSelector",
                          attrs: { selectedVendor: _vm.form.vendor },
                          on: {
                            selectVendor: _vm.selectVendor,
                            onReset: _vm.resetVendor
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
                                            color: "primary",
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
                                      _c("v-icon", { attrs: { dark: "" } }, [
                                        _vm._v("mdi-magnify")
                                      ])
                                    ],
                                    1
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("AddVendor", { attrs: { openDialog: false } })
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
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", md: "" } },
            [
              _c("v-autocomplete", {
                attrs: {
                  "return-object": "",
                  items: _vm.expense_types,
                  "error-messages": _vm.errors.expense_type_id,
                  "item-value": "id",
                  "item-text": "name",
                  label: "Expense Type",
                  required: ""
                },
                on: {
                  input: function($event) {
                    _vm.errors.expense_type_id = []
                  },
                  change: _vm.loadSubTypes
                },
                model: {
                  value: _vm.form.expense_type,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "expense_type", $$v)
                  },
                  expression: "form.expense_type"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", md: "" } },
            [
              _c("v-autocomplete", {
                attrs: {
                  items: _vm.sub_types,
                  "error-messages": _vm.errors.sub_type_id,
                  "item-value": "id",
                  "item-text": "name",
                  label: "Sub Type (optional)",
                  required: "",
                  "return-object": ""
                },
                on: {
                  input: function($event) {
                    _vm.errors.sub_type_id = []
                  }
                },
                model: {
                  value: _vm.form.sub_type,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "sub_type", $$v)
                  },
                  expression: "form.sub_type"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "overline mb-4 green--text" }, [
        _vm._v("\n        Expense Details\n    ")
      ]),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c("v-col", [
            _c("div", [
              _c(
                "p",
                { staticClass: "text--disabled" },
                [
                  _vm._v(
                    "\n                    Remaining Fund:\n                    "
                  ),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        color: "green",
                        dark: "",
                        small: "",
                        outlined: ""
                      }
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(
                            _vm.mixin_formatNumber(
                              _vm.form.user ? _vm.form.user.remaining_fund : 0
                            )
                          ) +
                          "\n                    "
                      )
                    ]
                  )
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("v-col", [
            _c("div", [
              _c(
                "p",
                { staticClass: "text--disabled" },
                [
                  _vm._v(
                    "\n                    Expense Limit:\n                    "
                  ),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        color: "green",
                        dark: "",
                        small: "",
                        outlined: ""
                      }
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.expense_amount_limit == null
                            ? "No Limit"
                            : _vm.mixin_formatNumber(_vm.expense_amount_limit)
                        )
                      )
                    ]
                  )
                ],
                1
              )
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("div", [
        _c("p", { staticClass: "text--disabled" }, [
          _vm._v(
            "\n            Note: Expense amount exceeding the remaining fund/expense limit\n            will be considered as reimbursable.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", md: "8" } },
            [
              _c("v-text-field", {
                attrs: { label: "Description" },
                model: {
                  value: _vm.form.description,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "description", $$v)
                  },
                  expression: "form.description"
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
                  "error-messages": _vm.errors.receipt_number,
                  label: "Receipt No.",
                  required: ""
                },
                on: {
                  input: function($event) {
                    _vm.errors.receipt_number = []
                  }
                },
                model: {
                  value: _vm.form.receipt_number,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "receipt_number", $$v)
                  },
                  expression: "form.receipt_number"
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
              _c("v-text-field", {
                attrs: {
                  label: "Expense Amount",
                  "error-messages": _vm.errors.amount,
                  readonly: _vm.itemize,
                  type: "number"
                },
                on: {
                  input: function($event) {
                    _vm.errors.amount = []
                  }
                },
                model: {
                  value: _vm.form.amount,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "amount", $$v)
                  },
                  expression: "form.amount"
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
              _vm.mixin_can("set reimbursable amount")
                ? _c("v-text-field", {
                    attrs: {
                      "error-messages": _vm.errors.reimbursable_amount,
                      label: "Amount to reimburse",
                      type: "number",
                      hint: "Amount spent from own pocket",
                      "persistent-hint": ""
                    },
                    on: {
                      input: function($event) {
                        _vm.errors.reimbursable_amount = []
                      }
                    },
                    model: {
                      value: _vm.form.reimbursable_amount,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "reimbursable_amount", $$v)
                      },
                      expression: "form.reimbursable_amount"
                    }
                  })
                : _vm._e()
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.isVendorTaxInclusive
        ? _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "12", md: "4" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      label: "Tax Rate",
                      suffix: "%",
                      type: "number",
                      readonly: !_vm.mixin_can("modify taxes on expense")
                    },
                    model: {
                      value: _vm.form.tax_rate,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "tax_rate", $$v)
                      },
                      expression: "form.tax_rate"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", md: "8" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      label: "Tax Amount",
                      type: "number",
                      readonly: !_vm.mixin_can("modify taxes on expense")
                    },
                    model: {
                      value: _vm.taxable_amount,
                      callback: function($$v) {
                        _vm.taxable_amount = $$v
                      },
                      expression: "taxable_amount"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            [
              _c("v-checkbox", {
                attrs: { label: "Itemize Expenses" },
                on: {
                  change: function($event) {
                    _vm.form.amount = 0
                    _vm.form.revolving_fund = 0
                  }
                },
                model: {
                  value: _vm.itemize,
                  callback: function($$v) {
                    _vm.itemize = $$v
                  },
                  expression: "itemize"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.itemize
        ? _c(
            "v-data-table",
            {
              attrs: {
                headers: _vm.headers,
                items: _vm.form.details,
                "items-per-page": 5,
                "footer-props": {
                  itemsPerPageOptions: [5, 10, 20]
                }
              },
              scopedSlots: _vm._u(
                [
                  {
                    key: "top",
                    fn: function() {
                      return [
                        _c(
                          "v-toolbar",
                          { attrs: { flat: "", color: "white" } },
                          [
                            _c("v-spacer"),
                            _vm._v(" "),
                            _c(
                              "v-dialog",
                              {
                                attrs: { "max-width": "500px" },
                                scopedSlots: _vm._u(
                                  [
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
                                                  staticClass: "mb-2",
                                                  attrs: {
                                                    color: "primary",
                                                    dark: ""
                                                  }
                                                },
                                                "v-btn",
                                                attrs,
                                                false
                                              ),
                                              on
                                            ),
                                            [_vm._v("New Item")]
                                          )
                                        ]
                                      }
                                    }
                                  ],
                                  null,
                                  false,
                                  4056833969
                                ),
                                model: {
                                  value: _vm.dialog,
                                  callback: function($$v) {
                                    _vm.dialog = $$v
                                  },
                                  expression: "dialog"
                                }
                              },
                              [
                                _vm._v(" "),
                                _c(
                                  "v-card",
                                  [
                                    _c(
                                      "v-card-text",
                                      [
                                        _c(
                                          "v-row",
                                          [
                                            _c(
                                              "v-col",
                                              { attrs: { cols: "12" } },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "Particular"
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.sub_detail
                                                        .description,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.sub_detail,
                                                        "description",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "sub_detail.description"
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              {
                                                attrs: { cols: "12", md: "3" }
                                              },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "Quantity",
                                                    type: "number"
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.sub_detail.quantity,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.sub_detail,
                                                        "quantity",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "sub_detail.quantity"
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              {
                                                attrs: { cols: "12", md: "9" }
                                              },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "Amount",
                                                    type: "number"
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.sub_detail.amount,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.sub_detail,
                                                        "amount",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "sub_detail.amount"
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
                                              { attrs: { cols: "12" } },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "Total Amount",
                                                    readonly: ""
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.total_details_amount,
                                                    callback: function($$v) {
                                                      _vm.total_details_amount = $$v
                                                    },
                                                    expression:
                                                      "total_details_amount"
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
                                            _c("v-col", [
                                              _c("div", [
                                                _vm._v(
                                                  "\n                                        " +
                                                    _vm._s(
                                                      _vm.expense_amount_limit ==
                                                        null
                                                        ? "No Limit"
                                                        : "Limit: " +
                                                            _vm.mixin_formatNumber(
                                                              _vm.expense_amount_limit
                                                            ) +
                                                            " / qunatity"
                                                    ) +
                                                    "\n                                    "
                                                )
                                              ])
                                            ])
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-card-actions",
                                      [
                                        _c("v-spacer"),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              color: "primary",
                                              text: ""
                                            },
                                            on: {
                                              click: function($event) {
                                                _vm.dialog = false
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                Cancel\n                            "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              color: "primary",
                                              text: ""
                                            },
                                            on: { click: _vm.addItem }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                Add\n                            "
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
                      ]
                    },
                    proxy: true
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
                              click: function() {
                                _vm.onRemove(item)
                              }
                            }
                          },
                          [_vm._v("\n                mdi-delete\n            ")]
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
              (_vm.form.details
              ? _vm.form.details.length > 0
              : false)
                ? _c("template", { slot: "body.append" }, [
                    _c("tr", { staticClass: "green--text hidden-md-and-up" }, [
                      _c("td", { staticClass: "title" }, [
                        _vm._v(
                          "\n                    Total:\n                    "
                        ),
                        _c("strong", [_vm._v(_vm._s(_vm.form.amount))])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tr",
                      { staticClass: "green--text hidden-sm-and-down" },
                      [
                        _c("td", { staticClass: "title" }, [_vm._v("Total")]),
                        _vm._v(" "),
                        _c("td", [
                          _c("strong", [
                            _vm._v(_vm._s(_vm.form.details_quantity))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c("strong", [
                            _vm._v(_vm._s(_vm.form.details_amount))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c("strong", [_vm._v(_vm._s(_vm.form.amount))])
                        ]),
                        _vm._v(" "),
                        _c("td")
                      ]
                    )
                  ])
                : _vm._e()
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _c("v-divider", { staticClass: "mt-2 mb-2" }),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", md: "6" } },
            [
              _c("v-textarea", {
                attrs: {
                  rows: "3",
                  "error-messages": _vm.errors.remarks,
                  label: "Remarks"
                },
                on: {
                  input: function($event) {
                    _vm.errors.remarks = []
                  }
                },
                model: {
                  value: _vm.form.remarks,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "remarks", $$v)
                  },
                  expression: "form.remarks"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("v-col", { attrs: { cols: "12", md: "6" } }, [
            _c("table", { staticClass: "mt-2", attrs: { width: "100%" } }, [
              _c("tbody", [
                _c("tr", [
                  _c("td", { staticClass: "green--text" }, [
                    _vm._v(
                      "\n                            Subtotal\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-right" }, [
                    _vm._v(
                      "\n                            " +
                        _vm._s(_vm.mixin_formatNumber(_vm.form.amount)) +
                        "\n                        "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [
                    _c("small", [
                      _vm._v(
                        "(To replenish:\n                                " +
                          _vm._s(
                            _vm.mixin_formatNumber(_vm.amount_to_replenish)
                          ) +
                          ")"
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-right" }, [_vm._v("--")])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [
                    _c("small", [
                      _vm._v(
                        "(To reimburse:\n                                " +
                          _vm._s(
                            _vm.mixin_formatNumber(_vm.form.reimbursable_amount)
                          ) +
                          ")"
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-right" }, [_vm._v("--")])
                ]),
                _vm._v(" "),
                _vm.isVendorTaxInclusive
                  ? _c("tr", [
                      _c("td", { staticClass: "green--text" }, [
                        _vm._v(
                          "\n                            Tax (12%)\n                            "
                        ),
                        _c("small", [_vm._v("Inclusive")])
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-right" }, [
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm.mixin_formatNumber(_vm.taxable_amount)) +
                            "\n                        "
                        )
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("tr", [_c("td"), _vm._v(" "), _c("td", [_c("hr")])]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", { staticClass: "green--text" }, [
                    _c("b", [_vm._v("Total")])
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "green--text text-right" }, [
                    _c("b", [
                      _vm._v(
                        "\n                                " +
                          _vm._s(_vm.mixin_formatNumber(_vm.expense_amount)) +
                          "\n                            "
                      )
                    ])
                  ])
                ])
              ])
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { staticClass: "text-right" },
            [
              _c(
                "v-btn",
                {
                  attrs: { color: "green", dark: "" },
                  on: { click: _vm.onSave }
                },
                [_vm._v("\n                Save\n            ")]
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
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/pages/expenses/Form.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/pages/expenses/Form.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_0d66f6c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=0d66f6c4& */ "./resources/js/views/pages/expenses/Form.vue?vue&type=template&id=0d66f6c4&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/expenses/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_0d66f6c4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_0d66f6c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/expenses/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/expenses/Form.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/pages/expenses/Form.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/expenses/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/expenses/Form.vue?vue&type=template&id=0d66f6c4&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/pages/expenses/Form.vue?vue&type=template&id=0d66f6c4& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_0d66f6c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=0d66f6c4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/expenses/Form.vue?vue&type=template&id=0d66f6c4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_0d66f6c4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_0d66f6c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);