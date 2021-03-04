(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selector/dialog/VendorDialogSelector.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/selector/dialog/VendorDialogSelector.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_VendorDataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/VendorDataService */ "./resources/js/services/VendorDataService.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    selectedVendors: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    multipleSelection: {
      type: Boolean,
      "default": false
    },
    selectedVendor: {
      type: Object,
      "default": null
    },
    vendorsParameters: {
      type: Object,
      "default": null
    }
  },
  data: function data() {
    return {
      dialog: false,
      loading: false,
      collections: {
        selected: null,
        items: []
      },
      filters: {
        search: ""
      },
      options: {
        sortBy: ["name"],
        sortDesc: [false],
        page: 1,
        itemsPerPage: 10
      },
      meta: {
        current_page: 0,
        from: 0,
        last_page: 0,
        path: "",
        per_page: "10",
        to: 0,
        total: 0
      }
    };
  },
  methods: {
    getDataFromApi: function getDataFromApi() {
      var _this2 = this;

      var _this = this;

      _this.loading = true;
      return new Promise(function (resolve, reject) {
        var _this2$options = _this2.options,
            sortBy = _this2$options.sortBy,
            sortDesc = _this2$options.sortDesc,
            page = _this2$options.page,
            itemsPerPage = _this2$options.itemsPerPage;

        var search = _this.filters.search.trim().toLowerCase();

        var params = {
          search: search,
          sortBy: sortBy[0],
          sortType: sortDesc[0] ? "desc" : "asc",
          page: page,
          itemsPerPage: itemsPerPage
        };
        var data = {};

        if (_this2.vendorsParameters) {
          if (_this2.vendorsParameters.params) {
            data = {
              params: _objectSpread(_objectSpread({}, params), _this2.vendorsParameters.params)
            };
          } else {
            data = {
              params: _objectSpread({}, params)
            };
          }
        } else {
          data = {
            params: _objectSpread({}, params)
          };
        } // data = { ...params };


        _services_VendorDataService__WEBPACK_IMPORTED_MODULE_0__["default"].getAll(data).then(function (response) {
          resolve(response.data);
        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);
          reject();
        })["finally"](function () {
          _this.loading = false;
        });
      });
    },
    onReset: function onReset() {
      this.dialog = false;
      this.filters.search = "";
      this.computedSelectedVendor = null;
      this.options = {
        sortBy: ["name"],
        sortDesc: [false],
        page: 1,
        itemsPerPage: 10
      };
      return this.$emit("onReset", this.computedSelectedVendor);
    },
    selectVendor: function selectVendor(e) {
      this.computedSelectedVendor = e;
      this.$emit("selectVendor", e);
    },
    getVendorName: function getVendorName(vendor) {
      return vendor.name || "";
    },
    getVendorTin: function getVendorTin(vendor) {
      var tin = vendor.tin || "";
      var vat = vendor.is_vat_inclusive || ""; // return tin;

      return "".concat(tin ? "TIN: " + tin : "", " ").concat(vat ? "(VAT)" : "Non-VAT");
    },
    getVendorAddress: function getVendorAddress(vendor) {
      return vendor.address || "";
    }
  },
  watch: {
    params: {
      handler: function handler() {
        var _this3 = this;

        this.getDataFromApi().then(function (data) {
          _this3.collections.items = data.data;
          _this3.meta = data.meta;
        });
      },
      deep: true
    },
    dialog: function dialog() {
      var _this4 = this;

      this.getDataFromApi().then(function (data) {
        _this4.collections.items = data.data;
        _this4.meta = data.meta;
      });
    }
  },
  computed: {
    params: function params(nv) {
      return _objectSpread(_objectSpread({}, this.options), {}, {
        query: this.filters.search
      });
    },
    computedSelectedVendor: {
      get: function get() {
        if (this.selectedVendor) {
          return this.selectedVendor;
        }

        return null;
      },
      set: function set(value) {
        return value;
      }
    }
  },
  created: function created() {
    var _this5 = this;

    this.getDataFromApi().then(function (data) {
      _this5.collections.items = data.data;
      _this5.meta = data.meta;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expenses/Form.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expenses/Form.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Form */ "./resources/js/views/modules/admin/expenses/Form.vue");
/* harmony import */ var _components_dialogs_AddVendor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/dialogs/AddVendor */ "./resources/js/components/dialogs/AddVendor.vue");
/* harmony import */ var _components_selector_dialog_VendorDialogSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../.../../../../../components/selector/dialog/VendorDialogSelector */ "./resources/js/components/selector/dialog/VendorDialogSelector.vue");
/* harmony import */ var _components_selector_dialog_UserDialogSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../.../../../../../components/selector/dialog/UserDialogSelector */ "./resources/js/components/selector/dialog/UserDialogSelector.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    form: {
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
          details: {
            description: "",
            quantity: 1,
            amount: 0,
            total: 0
          },
          remarks: "",
          notes: "",
          encoding_period: _this.$store.getters.settings.expense_encoding_period,
          expense_type: {
            id: null,
            name: "",
            limit: null,
            sub_types: {
              id: null,
              name: "None",
              limit: null
            }
          },
          sub_type: {
            id: null,
            name: "",
            limit: null
          },
          user: null,
          vendor: null,
          expense_report_id: null,
          tax_id: null,
          expense_header_id: null,
          detials_quantity: 0,
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
      items: [],
      expense_types: [],
      sub_types: []
    };
  },
  methods: {
    // selectUser(e) {
    //     if (e == null || e == undefined) {
    //         this.expenseForm.user = null;
    //         return;
    //     }
    //     this.expenseForm.user = e;
    //     this.expense_types = this.expenseForm.user.expense_types;
    // },
    // resetUser() {
    //     this.expenseForm.user = null;
    // },
    selectVendor: function selectVendor(e) {
      if (e == null || e == undefined) {
        this.expenseForm.vendor = null;
        return;
      }

      this.expenseForm.vendor = e;
    },
    resetVendor: function resetVendor() {
      this.expenseForm.vendor = null;
    },
    onRefresh: function onRefresh() {
      Object.assign(this.$data, this.$options.data.apply(this));
    },
    onSave: function onSave() {
      var expense_type_limit = this.expenseForm.expense_type.limit;
      var sub_type_limit = this.expenseForm.sub_type.limit;
      var expense_limit = sub_type_limit ? sub_type_limit : expense_type_limit;
      var expense_amount = this.expenseForm.amount;

      if (!this.mixin_can("add expenses beyond limit")) {
        if (!this.itemize) {
          if (expense_limit !== null && expense_limit < expense_amount) {
            this.mixin_errorDialog("Error", "Amount can't be greater than expense limit.");
            return;
          }
        } else {
          if (expense_limit !== null && expense_limit < this.expenseForm.details_amount) {
            this.mixin_errorDialog("Error", "Itemized Expenses Amount can't be greater than expense limit");
            return;
          }
        }
      }

      if (this.expenseForm.user == null) {
        this.mixin_errorDialog("Error", "No user selected");
        return;
      }

      if (this.expenseForm.expense_type.id == null) {
        this.mixin_errorDialog("Error", "No Expense Type Selected");
        return;
      }

      if (this.amount_to_replenish > (this.expenseForm.user ? this.expenseForm.user.remaining_fund : 0)) {
        this.mixin_errorDialog("Error", "Amount to replenish is greater than remaining fund");
        return;
      }

      if (this.amount_to_replenish + this.amount_to_reimburse < this.expenseForm.amount) {
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

      console.log("before value", _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, this.expenseForm), {
        itemize: this.itemize
      }), {
        items: this.expenseForm.details
      }), {
        amount_to_reimburse: this.amount_to_reimburse
      }));
      this.$emit("onSave", _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, this.expenseForm), {
        itemize: this.itemize
      }), {
        items: this.expenseForm.details
      }), {
        amount_to_reimburse: this.amount_to_reimburse
      }));
    },
    addItem: function addItem() {
      var description = this.expenseForm.details.description;
      var quantity = this.mixin_convertToNumber(this.expenseForm.details.quantity);
      var amount = this.mixin_convertToNumber(this.expenseForm.details.amount);
      var total = this.mixin_convertToNumber(this.expenseForm.details.total);
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

      this.expenseForm.details.push({
        description: description,
        quantity: quantity,
        amount: amount,
        total: total
      });
      this.dialog = false;
      this.expenseForm.details.description = "";
      this.expenseForm.details.quantity = 1;
      this.expenseForm.details.amount = 0;
      this.expenseForm.details.total = 0;
    },
    onRemove: function onRemove(item) {
      var index = this.expenseForm.details.indexOf(item);
      confirm("Are you sure you want to remove this item?") && this.expenseForm.details.splice(index, 1);
    },
    loadSubTypes: function loadSubTypes(e) {
      this.expenseForm.sub_type = {
        id: null,
        name: "",
        limit: null
      };
      this.sub_types = e.sub_types;
      this.sub_types.unshift({
        id: null,
        name: "None",
        limit: null
      });
    }
  },
  computed: {
    itemize: {
      get: function get() {
        return this.itemizeExpenses;
      },
      set: function set(value) {
        return value;
      }
    },
    minDate: function minDate() {
      if (this.mixin_can("add expenses beyond encoding period")) {
        return null;
      }

      var settings = this.$store.getters.settings;
      var submissionMinDate = moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("day");
      var encodingMinDate = moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(settings.expense_encoding_period - 1, "days").format("YYYY-MM-DD");

      switch (settings.submission_period) {
        case "Weekly":
          submissionMinDate = moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("week").format("YYYY-MM-DD");
          break;

        case "Monthly":
          submissionMinDate = moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("month").format("YYYY-MM-DD");
          break;

        default:
          submissionMinDate = moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("day").format("YYYY-MM-DD");
          break;
      }

      return moment__WEBPACK_IMPORTED_MODULE_0___default()(encodingMinDate).isSameOrAfter(submissionMinDate) ? encodingMinDate : submissionMinDate;
    },
    maxDate: function maxDate() {
      var _this$$store$getters$;

      var settings = (_this$$store$getters$ = this.$store.getters.settings) !== null && _this$$store$getters$ !== void 0 ? _this$$store$getters$ : null;
      var today = moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD");
      var maxDate = moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("day");

      switch (settings.submission_period) {
        case "Weekly":
          maxDate = moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("week").format("YYYY-MM-DD");
          break;

        case "Monthly":
          maxDate = moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("month").format("YYYY-MM-DD");
          break;

        default:
          maxDate = moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("day").format("YYYY-MM-DD");
          break;
      }

      return moment__WEBPACK_IMPORTED_MODULE_0___default()(today).isSameOrBefore(maxDate) ? today : maxDate;
    },
    amount_to_replenish: function amount_to_replenish() {
      var remaining_fund = this.mixin_convertToNumber(this.expenseForm.user ? this.expenseForm.user.remaining_fund : 0);
      var amount = this.mixin_convertToNumber(this.expenseForm.amount);
      var reimbursable = this.mixin_convertToNumber(this.expenseForm.reimbursable_amount);
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
      var remaining_fund = this.mixin_convertToNumber(this.expenseForm.user ? this.expenseForm.user.remaining_fund : 0);
      var amount = this.mixin_convertToNumber(this.expenseForm.amount);
      var reimbursable = this.mixin_convertToNumber(this.expenseForm.reimbursable_amount);

      if (this.mixin_can("set reimbursable amount")) {
        return reimbursable > amount ? 0 : reimbursable;
      }

      if (remaining_fund < amount) {
        var to_replenish = Math.abs(remaining_fund - amount);
        this.expenseForm.reimbursable_amount = to_replenish;
        return to_replenish;
      }

      this.expenseForm.reimbursable_amount = 0;
      return 0;
    },
    expense_amount: function expense_amount() {
      var amt_to_replenish = this.mixin_convertToNumber(this.amount_to_replenish);
      var amt_to_reimburse = this.mixin_convertToNumber(this.amount_to_reimburse);
      return this.mixin_convertToNumber(amt_to_replenish + amt_to_reimburse);
    },
    display_reimbursable_amount: function display_reimbursable_amount() {
      return parseFloat(this.expenseForm.amount) > parseFloat(this.expenseForm.user ? this.expenseForm.user.remaining_fund : 0);
    },
    taxable_amount: {
      get: function get() {
        if (!this.expenseForm.is_tax_inclusive) {
          this.expenseForm.tax_amount = this.tax_exclusive.toFixed(2);
          return this.tax_exclusive.toFixed(2);
        }

        this.expenseForm.tax_amount = this.tax_inclusive.toFixed(2);
        return this.tax_inclusive.toFixed(2);
      },
      set: function set(amount) {
        this.expenseForm.tax_amount = amount;
        return amount;
      }
    },
    tax_inclusive: function tax_inclusive() {
      return this.mixin_convertToNumber(this.expenseForm.amount) / (1 + this.mixin_convertToNumber(this.expenseForm.tax_rate) / 100) * (this.mixin_convertToNumber(this.expenseForm.tax_rate) / 100);
    },
    tax_exclusive: function tax_exclusive() {
      return this.mixin_convertToNumber(this.expenseForm.amount) * (this.mixin_convertToNumber(this.expenseForm.tax_rate) / 100);
    },
    total_details_amount: function total_details_amount() {
      var total = (this.mixin_convertToNumber(this.expenseForm.details.quantity) * this.mixin_convertToNumber(this.expenseForm.details.amount)).toFixed(2);
      this.expenseForm.details.total = total;
      return total;
    },
    expense_amount_limit: function expense_amount_limit() {
      return this.expenseForm.sub_type.limit == null ? this.expenseForm.expense_type.limit : this.expenseForm.sub_type.limit;
    },
    isVendorTaxInclusive: function isVendorTaxInclusive() {
      return this.expenseForm.vendor ? this.expenseForm.vendor.is_vat_inclusive : false;
    },
    expenseForm: {
      get: function get() {
        return this.form;
      },
      set: function set(value) {
        return value;
      }
    }
  },
  watch: {
    "expenseForm.details": function expenseFormDetails() {
      this.expenseForm.amount = this.expenseForm.details.reduce(function (total, item) {
        return parseFloat(total) + parseFloat(item.total);
      }, 0);
      this.expenseForm.details_amount = this.expenseForm.details.reduce(function (total, item) {
        return parseFloat(total) + parseFloat(item.amount);
      }, 0);
      this.expenseForm.details_quantity = this.expenseForm.details.reduce(function (total, item) {
        return parseFloat(total) + parseFloat(item.quantity);
      }, 0);
    },
    itemize: function itemize() {
      console.log(this.itemize);
      this.expenseForm.amount = this.expenseForm.details.reduce(function (total, item) {
        return parseFloat(total) + parseFloat(item.total);
      }, 0);

      if (this.expenseForm.user == null) {
        this.itemize = false;
        this.mixin_errorDialog("Error", "No user selected");
        return;
      }

      if (this.expenseForm.expense_type.id == null) {
        this.itemize = false;
        this.mixin_errorDialog("Error", "No expense type Selected");
        return;
      }
    },
    "expenseForm.vendor": function expenseFormVendor() {
      this.expenseForm.tax_rate = this.$store.getters.settings.tax_rate;
      this.expenseForm.tax_amount = 0;
      this.expenseForm.is_tax_inclusive = true;
    },
    "expenseForm.user": function expenseFormUser() {
      this.expense_types = this.form.user ? this.form.user.expense_types : [];
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selector/dialog/VendorDialogSelector.vue?vue&type=template&id=c891165e&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/selector/dialog/VendorDialogSelector.vue?vue&type=template&id=c891165e& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
        "v-dialog",
        {
          attrs: { width: "500" },
          scopedSlots: _vm._u(
            [
              {
                key: "activator",
                fn: function(ref) {
                  var on = ref.on
                  var attrs = ref.attrs
                  return [
                    _vm._t("openDialog", null, null, {
                      attrs: attrs,
                      on: on,
                      computedSelectedVendor: _vm.computedSelectedVendor
                    })
                  ]
                }
              }
            ],
            null,
            true
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
                "v-card-title",
                [
                  _vm._v("\n                Vendors\n                "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      "append-icon": "mdi-magnify",
                      label: "Search",
                      "single-line": "",
                      "hide-details": ""
                    },
                    model: {
                      value: _vm.filters.search,
                      callback: function($$v) {
                        _vm.$set(_vm.filters, "search", $$v)
                      },
                      expression: "filters.search"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list",
                {
                  staticClass: "overflow-y-auto",
                  attrs: { "max-height": "400", "two-line": "" }
                },
                [
                  _c(
                    "v-list-item-group",
                    {
                      attrs: {
                        "active-class": "green--text",
                        multiple: _vm.multipleSelection
                      },
                      on: { change: _vm.selectVendor },
                      model: {
                        value: _vm.computedSelectedVendor,
                        callback: function($$v) {
                          _vm.computedSelectedVendor = $$v
                        },
                        expression: "computedSelectedVendor"
                      }
                    },
                    [
                      _vm._l(_vm.collections.items, function(item, index) {
                        return [
                          _c(
                            "v-list-item",
                            { key: index, attrs: { value: item } },
                            [
                              [
                                _c(
                                  "v-list-item-content",
                                  [
                                    _c("v-list-item-title", [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(_vm.getVendorName(item)) +
                                          "\n                                    "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-item-subtitle",
                                      { staticClass: "text--primary" },
                                      [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(_vm.getVendorTin(item)) +
                                            "\n                                    "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("v-list-item-subtitle", [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(_vm.getVendorAddress(item)) +
                                          "\n                                    "
                                      )
                                    ])
                                  ],
                                  1
                                )
                              ]
                            ],
                            2
                          )
                        ]
                      })
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                [
                  _c("v-pagination", {
                    attrs: { length: _vm.meta.last_page, "total-visible": 7 },
                    model: {
                      value: _vm.options.page,
                      callback: function($$v) {
                        _vm.$set(_vm.options, "page", $$v)
                      },
                      expression: "options.page"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "green darken-1", text: "" },
                      on: { click: _vm.onReset }
                    },
                    [_vm._v("\n                    Reset\n                ")]
                  ),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "green darken-1", text: "" },
                      on: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_vm._v("\n                    OK\n                ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expenses/Form.vue?vue&type=template&id=54759fe1&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expenses/Form.vue?vue&type=template&id=54759fe1& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
          "\n        Note: Due of encoding of expenses :\n        " +
            _vm._s(_vm.$store.getters.settings.submission_period) +
            "\n    "
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
                                    value: _vm.expenseForm.date,
                                    callback: function($$v) {
                                      _vm.$set(_vm.expenseForm, "date", $$v)
                                    },
                                    expression: "expenseForm.date"
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
                      value: _vm.expenseForm.date,
                      callback: function($$v) {
                        _vm.$set(_vm.expenseForm, "date", $$v)
                      },
                      expression: "expenseForm.date"
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
                  value: _vm.expenseForm.vendor
                    ? _vm.expenseForm.vendor.name
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
                          attrs: { selectedVendor: _vm.expenseForm.vendor },
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
                  value: _vm.expenseForm.expense_type,
                  callback: function($$v) {
                    _vm.$set(_vm.expenseForm, "expense_type", $$v)
                  },
                  expression: "expenseForm.expense_type"
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
                  value: _vm.expenseForm.sub_type,
                  callback: function($$v) {
                    _vm.$set(_vm.expenseForm, "sub_type", $$v)
                  },
                  expression: "expenseForm.sub_type"
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
                        _vm._s(
                          _vm.mixin_formatNumber(
                            _vm.expenseForm.user
                              ? _vm.expenseForm.user.remaining_fund
                              : 0
                          )
                        )
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
                  value: _vm.expenseForm.description,
                  callback: function($$v) {
                    _vm.$set(_vm.expenseForm, "description", $$v)
                  },
                  expression: "expenseForm.description"
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
                  value: _vm.expenseForm.receipt_number,
                  callback: function($$v) {
                    _vm.$set(_vm.expenseForm, "receipt_number", $$v)
                  },
                  expression: "expenseForm.receipt_number"
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
                  value: _vm.expenseForm.amount,
                  callback: function($$v) {
                    _vm.$set(_vm.expenseForm, "amount", $$v)
                  },
                  expression: "expenseForm.amount"
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
                      value: _vm.expenseForm.reimbursable_amount,
                      callback: function($$v) {
                        _vm.$set(_vm.expenseForm, "reimbursable_amount", $$v)
                      },
                      expression: "expenseForm.reimbursable_amount"
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
                      value: _vm.expenseForm.tax_rate,
                      callback: function($$v) {
                        _vm.$set(_vm.expenseForm, "tax_rate", $$v)
                      },
                      expression: "expenseForm.tax_rate"
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
                    _vm.expenseForm.amount = 0
                    _vm.expenseForm.revolving_fund = 0
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
                items: _vm.expenseForm.details,
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
                                                      _vm.expenseForm.details
                                                        .description,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.expenseForm.details,
                                                        "description",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "\n                                            expenseForm.details.description\n                                        "
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
                                                      _vm.expenseForm.details
                                                        .quantity,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.expenseForm.details,
                                                        "quantity",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "\n                                            expenseForm.details.quantity\n                                        "
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
                                                      _vm.expenseForm.details
                                                        .amount,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.expenseForm.details,
                                                        "amount",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "expenseForm.details.amount"
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
              _vm.expenseForm.details.length > 0
                ? _c("template", { slot: "body.append" }, [
                    _c("tr", { staticClass: "green--text hidden-md-and-up" }, [
                      _c("td", { staticClass: "title" }, [
                        _vm._v(
                          "\n                    Total:\n                    "
                        ),
                        _c("strong", [_vm._v(_vm._s(_vm.expenseForm.amount))])
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
                            _vm._v(_vm._s(_vm.expenseForm.details_quantity))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c("strong", [
                            _vm._v(_vm._s(_vm.expenseForm.details_amount))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c("strong", [_vm._v(_vm._s(_vm.expenseForm.amount))])
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
                  value: _vm.expenseForm.remarks,
                  callback: function($$v) {
                    _vm.$set(_vm.expenseForm, "remarks", $$v)
                  },
                  expression: "expenseForm.remarks"
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
                        _vm._s(_vm.mixin_formatNumber(_vm.expenseForm.amount)) +
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
                            _vm.mixin_formatNumber(
                              _vm.expenseForm.reimbursable_amount
                            )
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
                            _vm._s(_vm.mixin_formatNumber(0)) +
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

/***/ "./resources/js/components/selector/dialog/VendorDialogSelector.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/selector/dialog/VendorDialogSelector.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VendorDialogSelector_vue_vue_type_template_id_c891165e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VendorDialogSelector.vue?vue&type=template&id=c891165e& */ "./resources/js/components/selector/dialog/VendorDialogSelector.vue?vue&type=template&id=c891165e&");
/* harmony import */ var _VendorDialogSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VendorDialogSelector.vue?vue&type=script&lang=js& */ "./resources/js/components/selector/dialog/VendorDialogSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VendorDialogSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VendorDialogSelector_vue_vue_type_template_id_c891165e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VendorDialogSelector_vue_vue_type_template_id_c891165e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/selector/dialog/VendorDialogSelector.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/selector/dialog/VendorDialogSelector.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/selector/dialog/VendorDialogSelector.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorDialogSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VendorDialogSelector.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selector/dialog/VendorDialogSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorDialogSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/selector/dialog/VendorDialogSelector.vue?vue&type=template&id=c891165e&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/selector/dialog/VendorDialogSelector.vue?vue&type=template&id=c891165e& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorDialogSelector_vue_vue_type_template_id_c891165e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VendorDialogSelector.vue?vue&type=template&id=c891165e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/selector/dialog/VendorDialogSelector.vue?vue&type=template&id=c891165e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorDialogSelector_vue_vue_type_template_id_c891165e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorDialogSelector_vue_vue_type_template_id_c891165e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
  }]);

  return ExpenseDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new ExpenseDataService());

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

/***/ "./resources/js/views/modules/admin/expenses/Form.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/modules/admin/expenses/Form.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_54759fe1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=54759fe1& */ "./resources/js/views/modules/admin/expenses/Form.vue?vue&type=template&id=54759fe1&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/expenses/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_54759fe1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_54759fe1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/expenses/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/expenses/Form.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expenses/Form.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expenses/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/expenses/Form.vue?vue&type=template&id=54759fe1&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expenses/Form.vue?vue&type=template&id=54759fe1& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_54759fe1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=54759fe1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expenses/Form.vue?vue&type=template&id=54759fe1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_54759fe1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_54759fe1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);