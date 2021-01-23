(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expenses/Edit.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/expenses/Edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_dialogs_AddVendor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/dialogs/AddVendor */ "./resources/js/components/dialogs/AddVendor.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    AddVendor: _components_dialogs_AddVendor__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      loader: true,
      panel: [0, 1],
      itemize: false,
      // paid_through_fund: false,
      reimbursable_amount: false,
      // reimbursable: false,
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
      sub_types: [],
      vendors: [],
      form: {
        code: null,
        description: null,
        amount: 0,
        detials_quantity: 0,
        details_amount: 0,
        // reimbursable_amount: 0,
        receipt_number: null,
        date: null,
        remarks: "",
        is_active: true,
        expense_type: {
          id: null,
          name: "",
          limit: null,
          sub_types: null
        },
        sub_type: {
          id: null,
          name: "",
          limit: null
        },
        employee: {
          id: null,
          remaining_fund: 0,
          fund: 0,
          expense_types: null
        },
        vendor: {
          id: null,
          name: "",
          tin: "",
          is_vat_inclusive: false
        },
        // particular: "",
        // particular_amount: 0,
        // particular_reimbursable_amount: 0,
        is_reimbursable: false,
        revolving_fund: 0,
        reimbursable_amount: 0,
        details: {
          description: "",
          amount: 0
        },
        is_tax_inclusive: true,
        tax_name: "",
        tax_rate: 0,
        tax_amount: 0
      },
      rules: {
        reimbursable_amount: [],
        revolving_fund: []
      },
      errors: {
        sub_type: [],
        description: [],
        amount: [],
        reimbursable_amount: [],
        receipt_number: [],
        date: [],
        remarks: [],
        is_active: [],
        expense_type_id: [],
        employee_id: [],
        vendor_id: []
      }
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.get("/api/expenses/" + _this.$route.params.id).then(function (response) {
        var data = response.data.data;
        _this.form.code = data.code;
        _this.form.description = data.description;
        _this.form.receipt_number = data.receipt_number;
        _this.form.date = data.date;
        _this.form.remarks = data.remarks;
        _this.form.is_active = data.is_active;
        _this.form.employee = data.employee;
        _this.form.vendor = data.vendor == null ? {
          id: null,
          name: "",
          tin: "",
          is_vat_inclusive: false
        } : data.vendor;
        _this.form.expense_type = data.expense_type; // _this.form.sub_type = data.sub_type_id;

        _this.expense_types = data.employee.expense_types;
        _this.sub_types = data.expense_type.sub_types;
        _this.form.is_tax_inclusive = data.is_tax_inclusive;
        _this.form.tax_name = data.tax_name;
        _this.form.tax_rate = data.tax_rate;
        _this.form.tax_amount = data.tax_amount;

        if (data.details !== null) {
          _this.itemize = true;
          _this.items = data.details;
        } else {
          // _this.itemize = false;
          // _this.items = [];
          _this.form.amount = data.amount;
        }

        _this.sub_types.unshift({
          id: null,
          name: "None",
          limit: null
        });

        _this.form.sub_type = data.sub_type == null ? {
          id: null,
          name: "None",
          limit: null
        } : data.sub_type;

        if (data.revolving_fund > 0) {
          _this.paid_through_fund = true;
          _this.form.revolving_fund = data.revolving_fund;
        } else {
          _this.paid_through_fund = false;
          _this.form.revolving_fund = 0;
        }

        _this.form.reimbursable_amount = data.reimbursable_amount;
        _this.form.employee.remaining_fund += data.amount - data.reimbursable_amount;
        _this.loader = false;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

        _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);

        _this.loader = false;
      });
    },
    loadExpenseTypes: function loadExpenseTypes() {
      var _this = this;

      axios.get("/api/data/expense_types").then(function (response) {
        _this.expense_types = response.data.data;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

        _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
      });
    },
    loadVendors: function loadVendors() {
      var _this = this;

      axios.get("/api/data/vendors").then(function (response) {
        _this.vendors = response.data.data;

        _this.vendors.unshift({
          id: null,
          name: "No Vendor",
          tin: "",
          is_vat_inclusive: false
        });
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

        _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
      });
    },
    onRefresh: function onRefresh() {
      Object.assign(this.$data, this.$options.data.apply(this));
    },
    onSave: function onSave() {
      var _this = this;

      var expense_type_limit = this.form.expense_type.limit;
      var sub_type_limit = this.form.sub_type.limit;
      var expense_limit = sub_type_limit == null ? expense_type_limit : sub_type_limit;
      var expense_amount = this.form.amount;

      if (!this.mixin_can("add expenses beyond limit")) {
        if (!this.itemize) {
          if (expense_limit !== null && expense_limit < expense_amount) {
            _this.$dialog.message.error("Amount can't be greater than expense limit.", {
              position: "top-right",
              timeout: 2000
            });

            return;
          }
        } else {
          if (expense_limit !== null && expense_limit < this.form.details_amount) {
            _this.$dialog.message.error("Itemized Expenses Amount can't be greater than expense limit", {
              position: "top-right",
              timeout: 2000
            });

            return;
          }
        }
      }

      if (_this.form.employee.id == null) {
        _this.$dialog.message.error("No Employee Selected", {
          position: "top-right",
          timeout: 2000
        });

        return;
      }

      if (_this.form.expense_type.id == null) {
        _this.$dialog.message.error("No Expense Type Selected", {
          position: "top-right",
          timeout: 2000
        });

        return;
      }

      _this.$refs.form.validate();

      if (_this.amount_to_replenish > _this.form.employee.remaining_fund) {
        _this.$dialog.message.error("Amount to replenish is greater than remaining fund", {
          position: "top-right",
          timeout: 2000
        });

        return;
      }

      if (_this.amount_to_replenish + _this.amount_to_reimburse <= 0) {
        _this.mixin_errorDialog("Error", "Total Expenses can't be lesser or equal to zero");

        return;
      }

      if (_this.$refs.form.validate()) {
        if (!_this.form.vendor.is_vat_inclusive) {
          _this.form.tax_rate = 0;
          _this.form.tax_amount = 0;
        }

        _this.loader = true;
        axios.put("/api/expenses/" + _this.$route.params.id, {
          code: _this.form.code,
          description: _this.form.description,
          amount: _this.form.amount,
          reimbursable_amount: _this.form.reimbursable_amount,
          receipt_number: _this.form.receipt_number,
          date: _this.form.date,
          remarks: _this.form.remarks,
          is_active: _this.form.is_active,
          expense_type_id: _this.form.expense_type.id,
          sub_type_id: _this.form.sub_type.id,
          employee_id: _this.form.employee.id,
          vendor_id: _this.form.vendor.id,
          details: _this.itemize ? _this.items : null,
          tax_name: "",
          tax_rate: _this.form.tax_rate,
          tax_amount: _this.form.tax_amount,
          is_tax_inclusive: _this.form.is_tax_inclusive
        }).then(function (response) {
          // _this.onRefresh();
          _this.$dialog.message.success("Expense updated successfully.", {
            position: "top-right",
            timeout: 2000
          }); // _this.$store.dispatch("AUTH_USER");


          _this.$router.push({
            name: "user.expenses.index"
          });
        })["catch"](function (error) {
          // _this.getData();
          _this.loader = false;
          console.log(error);
          console.log(error.response);

          _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);

          if (error.response.data.data !== null) {
            _this.errors = error.response.data.errors;
          }
        });
        return;
      }
    },
    addItem: function addItem() {
      var description = this.form.details.description;
      var quantity = this.mixin_convertToNumber(this.form.details.quantity);
      var amount = this.mixin_convertToNumber(this.form.details.amount);
      var total = this.mixin_convertToNumber(this.form.details.total);
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

      this.items.push({
        description: description,
        quantity: quantity,
        amount: amount,
        total: total
      });
      this.dialog = false;
      this.form.details.description = "";
      this.form.details.quantity = 1;
      this.form.details.amount = 0;
      this.form.details.total = 0;
    },
    onRemove: function onRemove(item) {
      var index = this.items.indexOf(item);
      confirm("Are you sure you want to remove this item?") && this.items.splice(index, 1);
    },
    loadSubTypes: function loadSubTypes(e) {
      this.form.sub_type = {
        id: null,
        name: "",
        limit: null
      };
      this.sub_types = e.sub_types;
      this.sub_types.push({
        id: null,
        name: "None",
        limit: null
      });
    }
  },
  computed: {
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
      var settings = this.$store.getters.settings;
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
      var remaining_fund = this.mixin_convertToNumber(this.form.employee.remaining_fund);
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
      var remaining_fund = this.mixin_convertToNumber(this.form.employee.remaining_fund);
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

      return 0;
    },
    expense_amount: function expense_amount() {
      var amt_to_replenish = this.mixin_convertToNumber(this.amount_to_replenish);
      var amt_to_reimburse = this.mixin_convertToNumber(this.amount_to_reimburse);
      return this.mixin_convertToNumber(amt_to_replenish + amt_to_reimburse);
    },
    display_reimbursable_amount: function display_reimbursable_amount() {
      return parseFloat(this.form.amount) > parseFloat(this.form.employee.remaining_fund);
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
      var total = (this.mixin_convertToNumber(this.form.details.quantity) * this.mixin_convertToNumber(this.form.details.amount)).toFixed(2);
      this.form.details.total = total;
      return total;
    },
    expense_amount_limit: function expense_amount_limit() {
      return this.form.sub_type.limit == null ? this.form.expense_type.limit : this.form.sub_type.limit;
    }
  },
  watch: {
    items: function items() {
      this.form.amount = this.items.reduce(function (total, item) {
        return parseFloat(total) + parseFloat(item.total);
      }, 0);
      this.form.details_amount = this.items.reduce(function (total, item) {
        return parseFloat(total) + parseFloat(item.amount);
      }, 0);
      this.form.details_quantity = this.items.reduce(function (total, item) {
        return parseFloat(total) + parseFloat(item.quantity);
      }, 0);
    },
    itemize: function itemize() {
      this.form.amount = this.items.reduce(function (total, item) {
        return parseFloat(total) + parseFloat(item.total);
      }, 0);

      if (this.form.employee.id == null) {
        this.itemize = false;
        this.$dialog.message.error("No Employee Selected", {
          position: "top-right",
          timeout: 2000
        });
        return;
      }

      if (this.form.expense_type.id == null) {
        this.itemize = false;
        this.$dialog.message.error("No Expense Type Selected", {
          position: "top-right",
          timeout: 2000
        });
        return;
      }
    } // "form.vendor": function() {
    //     this.form.tax_rate = 0;
    //     this.form.tax_amount = 0;
    //     this.form.is_tax_inclusive = true;
    // }

  },
  created: function created() {
    // this.$store.dispatch("AUTH_USER");
    this.loadVendors();
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expenses/Edit.vue?vue&type=template&id=17119421&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/expenses/Edit.vue?vue&type=template&id=17119421& ***!
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
                    _vm._v("Edit Expense")
                  ])
                ],
                1
              ),
              _vm._v(" "),
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
                    "v-container",
                    [
                      _c(
                        "v-card",
                        { staticClass: "mx-auto mb-4", attrs: { flat: "" } },
                        [
                          _c(
                            "v-list-item",
                            { attrs: { "three-line": "" } },
                            [
                              _c(
                                "v-list-item-content",
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "overline mb-4 green--text"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                Basic Details\n                            "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("v-list-item-subtitle", [
                                    _vm._v(
                                      "\n                                Note: Due of encoding of expenses :\n                                " +
                                        _vm._s(
                                          _vm.$store.getters.settings
                                            .submission_period
                                        ) +
                                        "\n                            "
                                    )
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-container",
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
                                                    rules:
                                                      _vm.mixin_validation
                                                        .required,
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
                              ),
                              _vm._v(" "),
                              _c("v-autocomplete", {
                                attrs: {
                                  rules: [],
                                  items: _vm.vendors,
                                  "error-messages": _vm.errors.vendor_id,
                                  "item-value": "id",
                                  "item-text": "name",
                                  "return-object": "",
                                  label: "Vendor"
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
                                        _c("AddVendor", {
                                          attrs: { openDialog: false },
                                          on: { createdVendor: _vm.loadVendors }
                                        })
                                      ]
                                    },
                                    proxy: true
                                  },
                                  {
                                    key: "item",
                                    fn: function(data) {
                                      return [
                                        [
                                          _c(
                                            "v-list",
                                            { attrs: { "max-width": "300" } },
                                            [
                                              _c(
                                                "v-list-item-content",
                                                [
                                                  _c("v-list-item-title", {
                                                    domProps: {
                                                      innerHTML: _vm._s(
                                                        data.item.name
                                                      )
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("v-list-item-subtitle", {
                                                    domProps: {
                                                      innerHTML: _vm._s(
                                                        "TIN: " +
                                                          (data.item.tin == null
                                                            ? "N/A"
                                                            : data.item.tin)
                                                      )
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("v-list-item-subtitle", {
                                                    domProps: {
                                                      innerHTML: _vm._s(
                                                        data.item.address
                                                      )
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("v-list-item-subtitle", {
                                                    domProps: {
                                                      innerHTML: _vm._s(
                                                        data.item
                                                          .is_vat_inclusive
                                                          ? "VAT"
                                                          : "Non-VAT"
                                                      )
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      ]
                                    }
                                  }
                                ]),
                                model: {
                                  value: _vm.form.vendor,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "vendor", $$v)
                                  },
                                  expression: "form.vendor"
                                }
                              }),
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
                                          rules: _vm.mixin_validation.required,
                                          items: _vm.expense_types,
                                          "error-messages":
                                            _vm.errors.expense_type_id,
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
                                            _vm.$set(
                                              _vm.form,
                                              "expense_type",
                                              $$v
                                            )
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
                                          rules: _vm.mixin_validation.required,
                                          items: _vm.sub_types,
                                          "error-messages": _vm.errors.sub_type,
                                          "item-value": "id",
                                          "item-text": "name",
                                          label: "Sub Type (optional)",
                                          required: "",
                                          "return-object": ""
                                        },
                                        on: {
                                          input: function($event) {
                                            _vm.errors.sub_type = []
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
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card",
                        { staticClass: "mx-auto mb-4", attrs: { flat: "" } },
                        [
                          _c(
                            "v-list-item",
                            { attrs: { "three-line": "" } },
                            [
                              _c(
                                "v-list-item-content",
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "overline mb-4 green--text"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                Expense Details\n                            "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-item-subtitle",
                                    [
                                      _vm._v(
                                        "\n                                Remaining Fund:\n\n                                "
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
                                                _vm.form.employee.remaining_fund
                                              )
                                            )
                                          )
                                        ]
                                      ),
                                      _vm._v(
                                        "\n                                ~ Expense Limit:\n                                "
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
                                                : _vm.mixin_formatNumber(
                                                    _vm.expense_amount_limit
                                                  )
                                            )
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("v-list-item-subtitle", [
                                    _vm._v(
                                      "\n                                Note: Expense amount exceeding the remaining\n                                fund/expense limit will be considered as\n                                reimbursable.\n                            "
                                    )
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-container",
                            [
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
                                            _vm.$set(
                                              _vm.form,
                                              "description",
                                              $$v
                                            )
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
                                          rules: [],
                                          "error-messages":
                                            _vm.errors.receipt_number,
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
                                            _vm.$set(
                                              _vm.form,
                                              "receipt_number",
                                              $$v
                                            )
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
                              }),
                              _vm._v(" "),
                              _vm.itemize
                                ? _c(
                                    "v-data-table",
                                    {
                                      attrs: {
                                        headers: _vm.headers,
                                        items: _vm.items,
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
                                                  {
                                                    attrs: {
                                                      flat: "",
                                                      color: "white"
                                                    }
                                                  },
                                                  [
                                                    _c("v-spacer"),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-dialog",
                                                      {
                                                        attrs: {
                                                          "max-width": "500px"
                                                        },
                                                        scopedSlots: _vm._u(
                                                          [
                                                            {
                                                              key: "activator",
                                                              fn: function(
                                                                ref
                                                              ) {
                                                                var on = ref.on
                                                                var attrs =
                                                                  ref.attrs
                                                                return [
                                                                  _c(
                                                                    "v-btn",
                                                                    _vm._g(
                                                                      _vm._b(
                                                                        {
                                                                          staticClass:
                                                                            "mb-2",
                                                                          attrs: {
                                                                            color:
                                                                              "primary",
                                                                            dark:
                                                                              ""
                                                                          }
                                                                        },
                                                                        "v-btn",
                                                                        attrs,
                                                                        false
                                                                      ),
                                                                      on
                                                                    ),
                                                                    [
                                                                      _vm._v(
                                                                        "New Item"
                                                                      )
                                                                    ]
                                                                  )
                                                                ]
                                                              }
                                                            }
                                                          ],
                                                          null,
                                                          false,
                                                          1047445937
                                                        ),
                                                        model: {
                                                          value: _vm.dialog,
                                                          callback: function(
                                                            $$v
                                                          ) {
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
                                                                  "v-container",
                                                                  [
                                                                    _c(
                                                                      "v-row",
                                                                      [
                                                                        _c(
                                                                          "v-col",
                                                                          {
                                                                            attrs: {
                                                                              cols:
                                                                                "12"
                                                                            }
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "v-text-field",
                                                                              {
                                                                                attrs: {
                                                                                  label:
                                                                                    "Particular"
                                                                                },
                                                                                model: {
                                                                                  value:
                                                                                    _vm
                                                                                      .form
                                                                                      .details
                                                                                      .description,
                                                                                  callback: function(
                                                                                    $$v
                                                                                  ) {
                                                                                    _vm.$set(
                                                                                      _vm
                                                                                        .form
                                                                                        .details,
                                                                                      "description",
                                                                                      $$v
                                                                                    )
                                                                                  },
                                                                                  expression:
                                                                                    "\n                                                                    form\n                                                                        .details\n                                                                        .description\n                                                                "
                                                                                }
                                                                              }
                                                                            )
                                                                          ],
                                                                          1
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "v-col",
                                                                          {
                                                                            attrs: {
                                                                              cols:
                                                                                "12",
                                                                              md:
                                                                                "3"
                                                                            }
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "v-text-field",
                                                                              {
                                                                                attrs: {
                                                                                  label:
                                                                                    "Quantity",
                                                                                  type:
                                                                                    "number"
                                                                                },
                                                                                model: {
                                                                                  value:
                                                                                    _vm
                                                                                      .form
                                                                                      .details
                                                                                      .quantity,
                                                                                  callback: function(
                                                                                    $$v
                                                                                  ) {
                                                                                    _vm.$set(
                                                                                      _vm
                                                                                        .form
                                                                                        .details,
                                                                                      "quantity",
                                                                                      $$v
                                                                                    )
                                                                                  },
                                                                                  expression:
                                                                                    "\n                                                                    form\n                                                                        .details\n                                                                        .quantity\n                                                                "
                                                                                }
                                                                              }
                                                                            )
                                                                          ],
                                                                          1
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "v-col",
                                                                          {
                                                                            attrs: {
                                                                              cols:
                                                                                "12",
                                                                              md:
                                                                                "9"
                                                                            }
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "v-text-field",
                                                                              {
                                                                                attrs: {
                                                                                  label:
                                                                                    "Amount",
                                                                                  type:
                                                                                    "number"
                                                                                },
                                                                                model: {
                                                                                  value:
                                                                                    _vm
                                                                                      .form
                                                                                      .details
                                                                                      .amount,
                                                                                  callback: function(
                                                                                    $$v
                                                                                  ) {
                                                                                    _vm.$set(
                                                                                      _vm
                                                                                        .form
                                                                                        .details,
                                                                                      "amount",
                                                                                      $$v
                                                                                    )
                                                                                  },
                                                                                  expression:
                                                                                    "\n                                                                    form\n                                                                        .details\n                                                                        .amount\n                                                                "
                                                                                }
                                                                              }
                                                                            )
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
                                                                          {
                                                                            attrs: {
                                                                              cols:
                                                                                "12"
                                                                            }
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "v-text-field",
                                                                              {
                                                                                attrs: {
                                                                                  label:
                                                                                    "Total Amount",
                                                                                  readonly:
                                                                                    ""
                                                                                },
                                                                                model: {
                                                                                  value:
                                                                                    _vm.total_details_amount,
                                                                                  callback: function(
                                                                                    $$v
                                                                                  ) {
                                                                                    _vm.total_details_amount = $$v
                                                                                  },
                                                                                  expression:
                                                                                    "\n                                                                    total_details_amount\n                                                                "
                                                                                }
                                                                              }
                                                                            )
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
                                                                          [
                                                                            _c(
                                                                              "div",
                                                                              [
                                                                                _vm._v(
                                                                                  "\n                                                                " +
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
                                                                                    "\n                                                            "
                                                                                )
                                                                              ]
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
                                                                      color:
                                                                        "primary",
                                                                      text: ""
                                                                    },
                                                                    on: {
                                                                      click: function(
                                                                        $event
                                                                      ) {
                                                                        _vm.dialog = false
                                                                      }
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "\n                                                    Cancel\n                                                "
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-btn",
                                                                  {
                                                                    attrs: {
                                                                      color:
                                                                        "primary",
                                                                      text: ""
                                                                    },
                                                                    on: {
                                                                      click:
                                                                        _vm.addItem
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "\n                                                    Add\n                                                "
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
                                                  [
                                                    _vm._v(
                                                      "\n                                    mdi-delete\n                                "
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
                                      _vm.items.length > 0
                                        ? _c(
                                            "template",
                                            { slot: "body.append" },
                                            [
                                              _c(
                                                "tr",
                                                {
                                                  staticClass:
                                                    "green--text hidden-md-and-up"
                                                },
                                                [
                                                  _c(
                                                    "td",
                                                    { staticClass: "title" },
                                                    [
                                                      _vm._v(
                                                        "\n                                        Total:\n                                        "
                                                      ),
                                                      _c("strong", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.form.amount
                                                          )
                                                        )
                                                      ])
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "tr",
                                                {
                                                  staticClass:
                                                    "green--text hidden-sm-and-down"
                                                },
                                                [
                                                  _c(
                                                    "td",
                                                    { staticClass: "title" },
                                                    [_vm._v("Total")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _c("strong", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.form
                                                            .details_quantity
                                                        )
                                                      )
                                                    ])
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _c("strong", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.form
                                                            .details_amount
                                                        )
                                                      )
                                                    ])
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _c("strong", [
                                                      _vm._v(
                                                        _vm._s(_vm.form.amount)
                                                      )
                                                    ])
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td")
                                                ]
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ],
                                    2
                                  )
                                : _vm._e(),
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
                                          rules: _vm.mixin_validation.required.concat(
                                            _vm.mixin_validation.minNumberValue(
                                              1
                                            )
                                          ),
                                          readonly: _vm.itemize,
                                          type: "number"
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
                                              label: "Amount to reimburse",
                                              type: "number",
                                              hint:
                                                "Amount spent from own pocket",
                                              "persistent-hint": ""
                                            },
                                            model: {
                                              value:
                                                _vm.form.reimbursable_amount,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "reimbursable_amount",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "form.reimbursable_amount"
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
                              _vm.form.vendor.is_vat_inclusive
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
                                              readonly: !_vm.mixin_can(
                                                "modify taxes on expense"
                                              )
                                            },
                                            model: {
                                              value: _vm.form.tax_rate,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "tax_rate",
                                                  $$v
                                                )
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
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
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
                              }),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c("v-col", [
                                    _c("div", { staticClass: "green--text" }, [
                                      _vm._v(
                                        "\n                                    Amount to replenish\n                                "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c("v-col", { staticClass: "text-right" }, [
                                    _c("div", { staticClass: "green--text" }, [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(
                                            _vm.mixin_formatNumber(
                                              _vm.amount_to_replenish
                                            )
                                          ) +
                                          "\n                                "
                                      )
                                    ])
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c("v-col", [
                                    _c("div", { staticClass: "green--text" }, [
                                      _vm._v(
                                        "\n                                    Amount to reimburse\n                                "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c("v-col", { staticClass: "text-right" }, [
                                    _c("div", { staticClass: "green--text" }, [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(
                                            _vm.mixin_formatNumber(
                                              _vm.amount_to_reimburse
                                            )
                                          ) +
                                          "\n                                "
                                      )
                                    ])
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-divider"),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c("v-col", [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "font-weight-bold green--text"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                    Total Expenses\n                                "
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c("v-col", { staticClass: "text-right" }, [
                                    _c("div", { staticClass: "green--text" }, [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(
                                            _vm.mixin_formatNumber(
                                              _vm.expense_amount
                                            )
                                          ) +
                                          "\n                                "
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
                            { staticClass: "mt-3 mb-4" },
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
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
                                [_vm._v("Cancel")]
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

/***/ "./resources/js/views/modules/user/expenses/Edit.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/modules/user/expenses/Edit.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_17119421___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=17119421& */ "./resources/js/views/modules/user/expenses/Edit.vue?vue&type=template&id=17119421&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/user/expenses/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_17119421___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_17119421___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/user/expenses/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/user/expenses/Edit.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/modules/user/expenses/Edit.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expenses/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/user/expenses/Edit.vue?vue&type=template&id=17119421&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/modules/user/expenses/Edit.vue?vue&type=template&id=17119421& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_17119421___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=17119421& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expenses/Edit.vue?vue&type=template&id=17119421&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_17119421___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_17119421___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);