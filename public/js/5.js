(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dialogs/AddExpense.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dialogs/AddExpense.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_ExpenseDataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ExpenseDataService */ "./resources/js/services/ExpenseDataService.js");
/* harmony import */ var _components_selector_dialog_VendorDialogSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/selector/dialog/VendorDialogSelector */ "./resources/js/components/selector/dialog/VendorDialogSelector.vue");
/* harmony import */ var _services_UserDataService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/UserDataService */ "./resources/js/services/UserDataService.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    user: {
      type: Object,
      "default": function _default() {}
    }
  },
  name: "add-expense",
  data: function data() {
    return {
      loader: false,
      valid: false,
      menu: false,
      openDialog: false,
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
        remarks: "",
        notes: "",
        encoding_period: this.$store.getters.settings.expense_encoding_period,
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
        is_reimbursable: false,
        revolving_fund: 0
      },
      expense_types: [],
      sub_types: [],
      errors: {
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
      }
    };
  },
  components: {
    VendorDialogSelector: _components_selector_dialog_VendorDialogSelector__WEBPACK_IMPORTED_MODULE_3__["default"]
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
    },
    onClose: function onClose() {
      Object.assign(this.$data, this.$options.data.apply(this));
      this.openDialog = false;
      this.$emit("on-close");
    },
    onSave: function onSave(value) {
      var _this = this;

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

      if (this.form.vendor) {
        if (!this.form.vendor.is_vat_inclusive) {
          this.form.tax_rate = 0;
          this.form.tax_amount = 0;
        }
      }

      this.form.details = null;
      this.form.expense_type_id = this.form.expense_type ? this.form.expense_type.id : null;
      this.form.sub_type_id = this.form.sub_type ? this.form.sub_type.id : null;
      this.form.user_id = this.form.user ? this.form.user.id : null;
      this.form.vendor_id = this.form.vendor ? this.form.vendor.id : null;
      this.form.reimbursable_amount = this.amount_to_reimburse;
      _services_ExpenseDataService__WEBPACK_IMPORTED_MODULE_2__["default"].store(this.form).then(function (response) {
        _this.mixin_successDialog(response.data.status, response.data.message);

        _this.loading = false;
        _this.formDataLoaded = true;

        _this.onClose();
      })["catch"](function (error) {
        _this.mixin_showErrors(error);

        _this.errors = error.response.data.errors;
        _this.formDataLoaded = true;
      });
    },
    loadUser: function loadUser(data) {
      var _this2 = this;

      if (data) {
        _services_UserDataService__WEBPACK_IMPORTED_MODULE_4__["default"].show(data.id, {
          params: {
            addExpense: true
          }
        }).then(function (response) {
          _this2.form.user = response.data.data;
          _this2.expense_types = response.data.data.expense_types;
        })["catch"](function (error) {
          return _this2.mixin_showErrors(error);
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
    isVendorTaxInclusive: function isVendorTaxInclusive() {
      return this.form.vendor ? this.form.vendor.is_vat_inclusive : false;
    },
    expense_amount_limit: function expense_amount_limit() {
      if (this.form.sub_type) {
        return this.form.sub_type.limit == null ? this.form.expense_type ? this.form.expense_type.limit : null : this.form.sub_type.limit;
      }

      if (this.form.expense_type) {
        return this.form.expense_type.limit == null ? null : this.form.expense_type.limit;
      }

      return null;
    }
  },
  watch: {
    openDialog: function openDialog() {
      if (this.openDialog) {
        this.loadUser(this.user);
      }
    },
    "form.vendor": function formVendor() {
      this.form.tax_rate = this.$store.getters.settings.tax_rate; // this.form.tax_rate = 12;

      this.form.tax_amount = 0;
      this.form.is_tax_inclusive = true;
    },
    // "form.user": function() {
    //     this.expense_types = this.form.user
    //         ? this.form.user.expense_types
    //         : [];
    // },
    "form.expense_type": function formExpense_type() {
      if (this.form) {
        this.loadSubTypes(this.form.expense_type);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/expense_reports/Form.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/expense_reports/Form.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_ExpenseDataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/ExpenseDataService */ "./resources/js/services/ExpenseDataService.js");
/* harmony import */ var _components_datepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/datepicker/DateRangePicker */ "./resources/js/components/datepicker/DateRangePicker.vue");
/* harmony import */ var _components_dialogs_AddExpense__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/dialogs/AddExpense */ "./resources/js/components/dialogs/AddExpense.vue");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    expenseReportForm: {
      type: Object,
      "default": function _default() {
        return {
          id: null,
          code: "",
          reference_no: "",
          description: "",
          remarks: "",
          notes: "",
          submission_period: null,
          approval_period: null,
          from: null,
          to: null,
          status: {},
          is_late_submitted: false,
          is_late_approved: false,
          total: 0,
          total_reimbursable: 0,
          paid: 0,
          balance: 0,
          total_received_payment: 0,
          expenses: [],
          payments: [],
          user: {}
        };
      }
    },
    expenseReportRules: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    expenseReportErrors: {
      type: Object,
      "default": function _default() {
        return {
          date_range: [],
          code: [],
          description: [],
          remarks: [],
          notes: [],
          user_id: [],
          expenses: []
        };
      }
    },
    expense_report_id: {
      type: Number,
      "default": null
    }
  },
  components: {
    DateRangePicker: _components_datepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_3__["default"],
    AddExpense: _components_dialogs_AddExpense__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      expenseDialog: false,
      formDataLoaded: false,
      range: [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("week").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("week").format("YYYY-MM-DD")],
      selected: [],
      loading: true,
      valid: false,
      preset: {},
      presets: [],
      form: {
        id: null,
        code: "",
        reference_no: "",
        description: "",
        remarks: "",
        notes: "",
        submission_period: null,
        approval_period: null,
        from: null,
        to: null,
        status: {},
        is_late_submitted: false,
        is_late_approved: false,
        total: 0,
        total_reimbursable: 0,
        paid: 0,
        balance: 0,
        total_received_payment: 0,
        expenses: [],
        payments: [],
        user: null
      },
      headers: [{
        text: "Date",
        value: "date"
      }, {
        text: "Type",
        value: "expense_type.name"
      }, {
        text: "Receipt",
        value: "receipt_number"
      }, {
        text: "Vendor",
        value: "vendor.name"
      }, {
        text: "Amount",
        value: "amount"
      }, {
        text: "Actions",
        value: "actions",
        sortable: false
      }, {
        text: "",
        value: "data-table-expand"
      }],
      items: [],
      total: 0,
      paid: 0,
      totalItems: 0,
      options: {
        sortBy: ["created_at"],
        sortDesc: [true],
        page: 1,
        itemsPerPage: 10
      }
    };
  },
  methods: {
    updateDates: function updateDates(e) {
      this.range = e;

      if (e && e.length == 2) {
        this.form.from = e[0];
        this.form.to = e[1];
        this.$emit("on-update", this.form);
      }
    },
    getDataFromApi: function getDataFromApi() {
      var _this = this;

      this.loading = true;
      return new Promise(function (resolve, reject) {
        var _this$options = _this.options,
            sortBy = _this$options.sortBy,
            sortDesc = _this$options.sortDesc,
            page = _this$options.page,
            itemsPerPage = _this$options.itemsPerPage;
        var range = _this.range;
        var user_id = _this.form.user ? _this.form.user.id : null;
        var data = {
          params: {
            page: page,
            itemsPerPage: itemsPerPage,
            start_date: range[0],
            end_date: range[1] ? range[1] : range[0],
            user_id: user_id,
            expense_report_id: _this.form ? _this.form.id : null,
            update_report: true
          }
        };
        _services_ExpenseDataService__WEBPACK_IMPORTED_MODULE_2__["default"].getAll(data).then(function (response) {
          var items = response.data.data;
          var total = response.data.meta.total;
          _this.loading = false;
          resolve({
            items: items,
            total: total
          });
        })["catch"](function (error) {
          _this.mixin_showErrors(error);

          _this.loading = false;
          reject();
        });
      });
    },
    onSave: function onSave() {
      this.$refs.form.validate();

      if (this.form.user == null) {
        this.mixin_errorDialog("Error", "No employee selected");
        return;
      }

      if (this.selected.length == 0) {
        this.mixin_errorDialog("Error", "No expense(s) selected");
        return;
      }

      if (this.$refs.form.validate()) {
        this.$emit("on-save", this.form);
      }
    },
    onCloseExpenseDialog: function onCloseExpenseDialog() {
      var _this2 = this;

      this.getDataFromApi().then(function (data) {
        _this2.items = data.items;
        _this2.totalItems = data.total;
        _this2.formDataLoaded = true;
      });
    }
  },
  computed: {
    params: function params(nv) {
      return _objectSpread(_objectSpread({}, this.options), {}, _defineProperty({
        query: this.range
      }, "query", this.form.user));
    },
    default_description: function default_description() {
      return "Expense Report Summary (".concat(this.range[0], " - ").concat(this.range[1], ")");
    },
    balance: function balance() {
      return this.total - this.paid;
    }
  },
  watch: {
    params: {
      handler: function handler() {
        var _this3 = this;

        this.getDataFromApi().then(function (data) {
          _this3.items = data.items;
          _this3.totalItems = data.total;
          _this3.formDataLoaded = true;
        });
      },
      deep: true
    },
    expenseReportForm: {
      immediate: true,
      deep: true,
      handler: function handler(newValue, oldValue) {
        this.form = newValue;
        this.range = [newValue.from, newValue.to];
        this.selected = newValue.expenses || [];

        if (newValue && newValue.expenses) {
          this.total = newValue.expenses.reduce(function (total, item) {
            return total + item.amount;
          }, 0);

          if (newValue.expenses.length > 0) {
            this.expenseReportErrors.expenses = [];
          }
        }
      }
    },
    selected: function selected() {
      this.form.expenses = this.selected;
      this.$emit("on-update", this.form);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dialogs/AddExpense.vue?vue&type=template&id=a9f29df4&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dialogs/AddExpense.vue?vue&type=template&id=a9f29df4& ***!
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
    "v-dialog",
    {
      attrs: { persistent: "", "max-width": "600px" },
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
                      attrs: {
                        dark: "",
                        fab: "",
                        color: "green",
                        title: "Add new",
                        "x-small": ""
                      }
                    },
                    "v-btn",
                    attrs,
                    false
                  ),
                  on
                ),
                [_c("v-icon", { attrs: { dark: "" } }, [_vm._v("mdi-plus")])],
                1
              )
            ]
          }
        }
      ]),
      model: {
        value: _vm.openDialog,
        callback: function($$v) {
          _vm.openDialog = $$v
        },
        expression: "openDialog"
      }
    },
    [
      _vm._v(" "),
      _c(
        "v-card",
        [
          _c("v-card-title", [
            _c("span", { staticClass: "headline" }, [_vm._v("New Expense")])
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-container",
                [
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
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
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
                                                    "error-messages":
                                                      _vm.errors.date,
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
                                                      _vm.$set(
                                                        _vm.form,
                                                        "date",
                                                        $$v
                                                      )
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
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  value: _vm.form.vendor
                                    ? _vm.form.vendor.name
                                    : "No Vendor",
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
                                          attrs: {
                                            selectedVendor: _vm.form.vendor
                                          },
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
                                                      _c(
                                                        "v-icon",
                                                        { attrs: { dark: "" } },
                                                        [_vm._v("mdi-magnify")]
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
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
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
                            { attrs: { cols: "12", md: "6" } },
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
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
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
                            { attrs: { cols: "12", md: "6" } },
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
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Expense Amount",
                                  "error-messages": _vm.errors.amount,
                                  type: "number",
                                  hint:
                                    "Remaining Fund: " +
                                    _vm.mixin_formatNumber(
                                      _vm.form.user
                                        ? _vm.form.user.remaining_fund
                                        : 0
                                    ) +
                                    " / Limit: " +
                                    (_vm.expense_amount_limit == null
                                      ? "No Limit"
                                      : _vm.mixin_formatNumber(
                                          _vm.expense_amount_limit
                                        )),
                                  "persistent-hint": ""
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
                          _vm.mixin_can("set reimbursable amount")
                            ? _c(
                                "v-col",
                                { attrs: { cols: "12", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      "error-messages":
                                        _vm.errors.reimbursable_amount,
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
                                        _vm.$set(
                                          _vm.form,
                                          "reimbursable_amount",
                                          $$v
                                        )
                                      },
                                      expression: "form.reimbursable_amount"
                                    }
                                  })
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.isVendorTaxInclusive
                            ? _c(
                                "v-col",
                                { attrs: { cols: "12", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Tax Rate",
                                      suffix: "%",
                                      type: "number",
                                      readonly: !_vm.mixin_can(
                                        "modify taxes on expense"
                                      )
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
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.isVendorTaxInclusive
                            ? _c(
                                "v-col",
                                { attrs: { cols: "12", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Tax Amount",
                                      type: "number",
                                      readonly: !_vm.mixin_can(
                                        "modify taxes on expense"
                                      )
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
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-textarea", {
                                attrs: {
                                  rows: "2",
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
                  attrs: { color: "green", text: "" },
                  on: { click: _vm.onClose }
                },
                [_vm._v("\n                Close\n            ")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "green", text: "" },
                  on: { click: _vm.onSave }
                },
                [_vm._v("\n                Save\n            ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/expense_reports/Form.vue?vue&type=template&id=82885336&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/expense_reports/Form.vue?vue&type=template&id=82885336& ***!
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
                "div",
                { staticClass: "overline green--text" },
                [
                  _vm._v("\n            BASIC DETAILS\n            "),
                  _vm.form.status
                    ? _c(
                        "v-chip",
                        {
                          attrs: { "x-small": "", color: "form.status.color" }
                        },
                        [
                          _vm._v(
                            "\n                " +
                              _vm._s(_vm.form.status.status) +
                              "\n            "
                          )
                        ]
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c("DateRangePicker", {
                ref: "dateRangePicker",
                attrs: { dateRange: _vm.range },
                on: { "on-change": _vm.updateDates },
                scopedSlots: _vm._u([
                  {
                    key: "openDialog",
                    fn: function(ref) {
                      var on = ref.on
                      var attrs = ref.attrs
                      var dateRangeText = ref.dateRangeText
                      return [
                        _c(
                          "v-text-field",
                          _vm._g(
                            _vm._b(
                              {
                                attrs: {
                                  label: "Date",
                                  readonly: "",
                                  value: dateRangeText
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
                ])
              }),
              _vm._v(" "),
              _vm._t("userSelector"),
              _vm._v(" "),
              _c("v-combobox", {
                attrs: {
                  rules: _vm.mixin_validation.required.concat(
                    _vm.mixin_validation.minLength(100)
                  ),
                  counter: 100,
                  items: [_vm.default_description],
                  "error-messages": _vm.expenseReportErrors.description,
                  label: "Description"
                },
                on: {
                  input: function($event) {
                    _vm.expenseReportErrors.description = []
                  }
                },
                model: {
                  value: _vm.form.description,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "description", $$v)
                  },
                  expression: "form.description"
                }
              }),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c("v-col", [
                    _c("div", { staticClass: "overline green--text" }, [
                      _vm._v("\n                    Expenses\n                ")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { staticClass: "text-right" },
                    [
                      _c("add-expense", {
                        attrs: { user: _vm.form.user },
                        on: { "on-close": _vm.onCloseExpenseDialog }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-data-table", {
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
                  "show-select": "",
                  "show-expand": "",
                  "single-expand": "",
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
                      key: "top",
                      fn: function() {
                        return [
                          _vm.selected.length
                            ? _c(
                                "div",
                                [
                                  _c("div", { staticClass: "d-inline" }, [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(_vm.selected.length) +
                                        " Item(s) Selected\n                    "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      on: {
                                        click: function($event) {
                                          _vm.selected = []
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                        Clear All Selected\n                    "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            : _vm._e()
                        ]
                      },
                      proxy: true
                    },
                    {
                      key: "expanded-item",
                      fn: function(ref) {
                        var headers = ref.headers
                        var item = ref.item
                        return [
                          _c("td", { attrs: { colspan: headers.length } }, [
                            _c("table", [
                              _c("tr", [
                                _c("td", [_c("strong", [_vm._v("Code")])]),
                                _vm._v(" "),
                                _c("td", [_vm._v(":")]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(item.code))])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [
                                  _c("strong", [_vm._v("Description")])
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(":")]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(item.description) +
                                      "\n                            "
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_c("strong", [_vm._v("Receipt")])]),
                                _vm._v(" "),
                                _c("td", [_vm._v(":")]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(item.receipt_number) +
                                      "\n                            "
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_c("strong", [_vm._v("Vendor")])]),
                                _vm._v(" "),
                                _c("td", [_vm._v(":")]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(
                                        item.vendor ? item.vendor.name : ""
                                      ) +
                                      "\n                            "
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
                                    _c("td", [_vm._v(_vm._s(item.remarks))])
                                  ])
                                : _vm._e()
                            ])
                          ])
                        ]
                      }
                    },
                    {
                      key: "item.updated_at",
                      fn: function(ref) {
                        var item = ref.item
                        return [
                          _vm._v(
                            "\n                " +
                              _vm._s(_vm.mixin_getHumanDate(item.updated_at)) +
                              "\n            "
                          )
                        ]
                      }
                    },
                    {
                      key: "item.amount",
                      fn: function(ref) {
                        var item = ref.item
                        return [
                          _vm._v(
                            "\n                " +
                              _vm._s(_vm.mixin_formatNumber(item.amount)) +
                              "\n            "
                          )
                        ]
                      }
                    },
                    {
                      key: "item.replenishment",
                      fn: function(ref) {
                        var item = ref.item
                        return [
                          _vm._v(
                            "\n                " +
                              _vm._s(
                                _vm.mixin_formatNumber(
                                  item.amount - item.reimbursable_amount
                                )
                              ) +
                              "\n            "
                          )
                        ]
                      }
                    },
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
                            [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(item.status.status) +
                                  "\n                "
                              )
                            ]
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
                                  return _vm.$router.push(
                                    "/expenses/" + item.id
                                  )
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                    mdi-eye\n                "
                              )
                            ]
                          )
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
              }),
              _vm._v(" "),
              _vm.expenseReportErrors.expenses.length > 0
                ? _c("div", { staticClass: "red--text" }, [
                    _c("small", [
                      _vm._v(_vm._s(_vm.expenseReportErrors.expenses[0]))
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "6" } },
                    [
                      _c("v-textarea", {
                        attrs: { label: "Remarks", rows: 3 },
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
                    _c(
                      "table",
                      { staticClass: "mt-4", attrs: { width: "100%" } },
                      [
                        _c("tbody", [
                          _c("tr", [
                            _c("td", [
                              _vm._v(
                                "\n                                Total Expense Amount\n                            "
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(":")]),
                            _vm._v(" "),
                            _c(
                              "td",
                              {
                                staticClass:
                                  "green--text text--darken-4 text-right"
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm.mixin_formatNumber(_vm.total)) +
                                    "\n                            "
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", [
                              _vm._v(
                                "\n                                Paid Amount\n                            "
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(":")]),
                            _vm._v(" "),
                            _c(
                              "td",
                              {
                                staticClass:
                                  "green--text text--darken-4 text-right"
                              },
                              [
                                _vm._v(
                                  "\n                                (-)\n                                " +
                                    _vm._s(_vm.mixin_formatNumber(_vm.paid)) +
                                    "\n                            "
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c(
                              "td",
                              { attrs: { colspan: "3" } },
                              [_c("v-divider")],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v(
                                "\n                                Amount to be reimbursed\n                            "
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(":")]),
                            _vm._v(" "),
                            _c(
                              "td",
                              {
                                staticClass:
                                  "green--text text--darken-4 text-right"
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm.mixin_formatNumber(_vm.balance)
                                    ) +
                                    "\n                            "
                                )
                              ]
                            )
                          ])
                        ])
                      ]
                    )
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
                        [
                          _vm._v(
                            "\n                    Cancel\n                "
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
            2
          )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/dialogs/AddExpense.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/dialogs/AddExpense.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddExpense_vue_vue_type_template_id_a9f29df4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddExpense.vue?vue&type=template&id=a9f29df4& */ "./resources/js/components/dialogs/AddExpense.vue?vue&type=template&id=a9f29df4&");
/* harmony import */ var _AddExpense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddExpense.vue?vue&type=script&lang=js& */ "./resources/js/components/dialogs/AddExpense.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddExpense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddExpense_vue_vue_type_template_id_a9f29df4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddExpense_vue_vue_type_template_id_a9f29df4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dialogs/AddExpense.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dialogs/AddExpense.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/dialogs/AddExpense.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddExpense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddExpense.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dialogs/AddExpense.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddExpense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dialogs/AddExpense.vue?vue&type=template&id=a9f29df4&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/dialogs/AddExpense.vue?vue&type=template&id=a9f29df4& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddExpense_vue_vue_type_template_id_a9f29df4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddExpense.vue?vue&type=template&id=a9f29df4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dialogs/AddExpense.vue?vue&type=template&id=a9f29df4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddExpense_vue_vue_type_template_id_a9f29df4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddExpense_vue_vue_type_template_id_a9f29df4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
  }, {
    key: "export",
    value: function _export() {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/expenses/export/data");
    }
  }]);

  return ExpenseDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new ExpenseDataService());

/***/ }),

/***/ "./resources/js/services/ExpenseReportDataService.js":
/*!***********************************************************!*\
  !*** ./resources/js/services/ExpenseReportDataService.js ***!
  \***********************************************************/
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


var ExpenseReportDataService = /*#__PURE__*/function () {
  function ExpenseReportDataService() {
    _classCallCheck(this, ExpenseReportDataService);
  }

  _createClass(ExpenseReportDataService, [{
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/expense_reports", data);
    }
  }, {
    key: "get",
    value: function get(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/data/expense_reports", data);
    }
  }, {
    key: "show",
    value: function show(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/expense_reports/".concat(id), data);
    }
  }, {
    key: "store",
    value: function store(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/expense_reports", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/expense_reports/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/expense_reports/".concat(id), data);
    }
  }, {
    key: "restore",
    value: function restore(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/expense_reports/restore/".concat(id), data);
    }
  }, {
    key: "submit",
    value: function submit(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/expense_reports/submit/".concat(id), data);
    }
  }, {
    key: "approve",
    value: function approve(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/expense_reports/approve/".concat(id), data);
    }
  }, {
    key: "reject",
    value: function reject(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/expense_reports/reject/".concat(id), data);
    }
  }, {
    key: "duplicate",
    value: function duplicate(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/expense_reports/duplicate/".concat(id), data);
    }
  }, {
    key: "export",
    value: function _export() {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/expense_reports/export/data");
    }
  }]);

  return ExpenseReportDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new ExpenseReportDataService());

/***/ }),

/***/ "./resources/js/views/pages/expense_reports/Form.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/pages/expense_reports/Form.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_82885336___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=82885336& */ "./resources/js/views/pages/expense_reports/Form.vue?vue&type=template&id=82885336&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/expense_reports/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_82885336___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_82885336___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/expense_reports/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/expense_reports/Form.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/pages/expense_reports/Form.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/expense_reports/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/expense_reports/Form.vue?vue&type=template&id=82885336&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/pages/expense_reports/Form.vue?vue&type=template&id=82885336& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_82885336___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=82885336& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/expense_reports/Form.vue?vue&type=template&id=82885336&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_82885336___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_82885336___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);