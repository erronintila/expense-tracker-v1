(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/Show.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expense_reports/Show.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_daterangepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/daterangepicker/DateRangePicker */ "./resources/js/components/daterangepicker/DateRangePicker.vue");
/* harmony import */ var _components_CreateExpense__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/CreateExpense */ "./resources/js/views/modules/admin/expense_reports/components/CreateExpense.vue");
/* harmony import */ var _components_EditExpense__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/EditExpense */ "./resources/js/views/modules/admin/expense_reports/components/EditExpense.vue");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    DateRangePicker: _components_daterangepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_2__["default"],
    CreateExpense: _components_CreateExpense__WEBPACK_IMPORTED_MODULE_3__["default"],
    EditExpense: _components_EditExpense__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      dialogCreate: false,
      dialogEdit: false,
      valid: false,
      date_range: [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("month").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("month").format("YYYY-MM-DD")],
      preset: "",
      presets: ["Today", "Yesterday", "Last 7 Days", "Last 30 Days", "This Week", "This Month", "This Quarter", "This Year", "Last Week", "Last Month", "Last Quarter", "Last Year", "Last 5 Years"],
      selected: [],
      headers: [{
        text: "Date",
        value: "date",
        sortable: false
      }, {
        text: "Description",
        value: "expense_type.name",
        sortable: false
      }, {
        text: "Receipt",
        value: "receipt_number",
        sortable: false
      }, {
        text: "Vendor",
        value: "vendor.name",
        sortable: false
      }, {
        text: "Amount",
        value: "amount",
        sortable: false
      }, {
        text: "",
        value: "data-table-expand"
      }],
      items: [],
      total: 0,
      code: "",
      description: "",
      remarks: "",
      notes: "",
      employee: 0,
      employees: [],
      expenses: [],
      rules: {
        date_range: [],
        code: [],
        description: [function (v) {
          return !!v || "Description is required";
        }, function (v) {
          return !!v && v.length <= 100 || "Description must be less than 100 characters";
        }],
        remarks: [],
        notes: [],
        employee: [function (v) {
          return !!v || "Employee is required";
        }],
        expenses: []
      },
      errors: {
        date_range: [],
        code: [],
        description: [],
        remarks: [],
        notes: [],
        employee: [],
        expenses: []
      }
    };
  },
  methods: {
    updateDates: function updateDates(e) {
      this.date_range = e;
      this.loadExpenses(this.employee);
    },
    getData: function getData() {
      var _this = this;

      axios.get("/api/expense_reports/".concat(_this.$route.params.id)).then(function (response) {
        var _this$selected;

        var data = response.data.data;
        _this.code = data.code;
        _this.description = data.description;
        _this.remarks = data.remarks;
        _this.notes = data.notes;
        _this.employee = "".concat(data.employee.last_name || "", ", ").concat(data.employee.first_name || "", " ").concat(data.employee.suffix || "");
        _this.status = data.status;
        _this.expenses = data.expenses;
        _this.submitted_at = data.submitted_at;
        _this.reviewed_at = data.reviewed_at;
        _this.approved_at = data.approved_at;
        _this.cancelled_at = data.cancelled_at;
        _this.created_at = data.created_at;
        _this.updated_at = data.updated_at;
        _this.deleted_at = data.deleted_at;
        _this.total = data.total;

        (_this$selected = _this.selected).splice.apply(_this$selected, [0, 0].concat(_toConsumableArray(data.expenses)));

        _this.loadExpenses(data.employee.id);
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

        _this.errorDialog("Error ".concat(error.response.status), error.response.statusText);
      });
    },
    loadExpenses: function loadExpenses(emp_id) {
      var start_date = this.date_range[0];
      var end_date = this.date_range[1];

      var _this = this;

      axios.get("/api/data/expenses", {
        params: {
          update_report: true,
          employee_id: emp_id,
          start_date: start_date,
          end_date: end_date,
          expense_report_id: _this.$route.params.id
        }
      }).then(function (response) {
        _this.items = response.data.data;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

        _this.errorDialog("Error ".concat(error.response.status), error.response.statusText);
      });
    },
    onEdit: function onEdit() {
      this.$router.push({
        name: "admin.expense_reports.edit",
        params: {
          id: this.$route.params.id
        }
      });
    }
  },
  watch: {
    selected: function selected() {
      this.total = this.selected.reduce(function (total, item) {
        return total + item.amount;
      }, 0);
    }
  },
  created: function created() {
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/components/Create.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expense_reports/components/Create.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    employee: {
      type: Object,
      "default": {
        id: null,
        remaining_fund: 0,
        fund: 0
      }
    }
  },
  data: function data() {
    var _this2 = this;

    return {
      dialog: false,
      valid: false,
      menu: false,
      code: null,
      description: null,
      amount: 0,
      reimbursable_amount: 0,
      receipt_number: null,
      date: null,
      remarks: "",
      is_active: true,
      expense_type: null,
      expense_types: [],
      employees: [],
      vendor: null,
      vendors: [],
      particular: "",
      particular_amount: 0,
      particular_reimbursable_amount: 0,
      is_reimbursable: false,
      rules: {
        description: [],
        amount: [function (v) {
          return !!v || "Amount is required";
        }],
        reimbursable_amount: [function (v) {
          return parseFloat(v) <= _this2.amount || "Reimbursable Amount should not be greater than the actual amount";
        }],
        particular_reimbursable_amount: [function (v) {
          return parseFloat(v) <= _this2.particular_amount || "Reimbursable Amount should not be greater than the actual amount";
        }],
        receipt_number: [],
        date: [function (v) {
          return !!v || "Date is required";
        }],
        remarks: [],
        is_active: [],
        expense_type: [function (v) {
          return !!v || "Expense Type is required";
        }],
        employee: [function (v) {
          return !!v || "Employee is required";
        }],
        vendor: []
      },
      errors: {
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
      },
      headers: [{
        text: "Particulars",
        value: "particular",
        sortable: false
      }, {
        text: "Reimbursable Amount",
        value: "particular_reimbursable_amount",
        sortable: false
      }, {
        text: "Amount",
        value: "particular_amount",
        sortable: false
      }, {
        text: "",
        value: "actions",
        sortable: false
      }],
      items: [],
      // Create Vendor
      vendorOptions: {
        dialog: false,
        valid: false,
        code: "",
        name: "",
        email: "",
        tin: "",
        contact_person: "",
        mobile_number: "",
        telephone_number: "",
        remarks: "",
        website: "",
        is_vat_inclusive: false,
        address: "",
        selected_expense_types: [],
        expense_types: [],
        rules: {
          code: [],
          name: [function (v) {
            return !!v || "Name is required";
          }, function (v) {
            return v.length <= 150 || "Name must be less than 100 characters";
          }],
          email: [],
          tin: [function (v) {
            return !!v || "TIN is required";
          }, function (v) {
            return v.length <= 150 || "Name must be less than 100 characters";
          }],
          contact_person: [],
          mobile_number: [],
          telephone_number: [],
          remarks: [],
          website: [],
          is_vat_inclusive: [],
          address: []
        },
        errors: {
          code: [],
          name: [],
          email: [],
          tin: [],
          contact_person: [],
          mobile_number: [],
          telephone_number: [],
          remarks: [],
          website: [],
          is_vat_inclusive: [],
          address: []
        }
      }
    };
  },
  methods: {
    loadExpenseTypes: function loadExpenseTypes() {
      var _this = this;

      axios.get("/api/data/expense_types").then(function (response) {
        _this.expense_types = response.data.data;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);
      });
    },
    loadEmployees: function loadEmployees() {
      var _this = this;

      axios.get("/api/data/employees").then(function (response) {
        _this.employees = response.data.data;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);
      });
    },
    loadVendors: function loadVendors() {
      var _this = this;

      axios.get("/api/data/vendors").then(function (response) {
        _this.vendors = response.data.data;

        _this.vendors.unshift({
          id: null,
          name: "No Vendor",
          tin: ""
        });
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);
      });
    },
    onRefresh: function onRefresh() {
      Object.assign(this.$data, this.$options.data.apply(this));
    },
    onSave: function onSave() {
      var _this = this;

      _this.$refs.form.validate();

      if (parseFloat(this.amount) - parseFloat(this.reimbursable_amount) > parseFloat(this.employee.remaining_fund)) {
        _this.$dialog.message.error("Expense actual amount is greater than remaining funds", {
          position: "top-right",
          timeout: 2000
        });

        return;
      }

      if (this.items.length == 0) {
        _this.$dialog.message.error("No Expense detail added", {
          position: "top-right",
          timeout: 2000
        });

        return;
      }

      if (_this.$refs.form.validate()) {
        axios.post("/api/expenses", {
          code: _this.code,
          description: _this.description,
          amount: _this.amount,
          reimbursable_amount: _this.reimbursable_amount,
          receipt_number: _this.receipt_number,
          date: _this.date,
          remarks: _this.remarks,
          is_active: _this.is_active,
          expense_type_id: _this.expense_type,
          employee_id: _this.employee.id,
          vendor_id: _this.vendor,
          expense_details: _this.items
        }).then(function (response) {
          _this.onRefresh();

          _this.$dialog.message.success("Expense created successfully.", {
            position: "top-right",
            timeout: 2000
          });

          _this.$emit("createdExpense");
        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);
          _this.errors = error.response.data.errors;
        });
        return;
      }
    },
    addItem: function addItem() {
      if (parseFloat(this.particular_amount) >= parseFloat(this.particular_reimbursable_amount)) {
        this.items.push({
          particular: this.particular,
          particular_amount: this.particular_amount,
          particular_reimbursable_amount: this.particular_reimbursable_amount
        });
      }

      this.dialog = false;
      this.particular = "";
      this.particular_amount = 0;
      this.particular_reimbursable_amount = 0;
    },
    onRemove: function onRemove(item) {
      var index = this.items.indexOf(item);
      confirm("Are you sure you want to remove this item?") && this.items.splice(index, 1);
    },
    isEmpty: function isEmpty(item) {
      if (item) {
        return parseFloat(item);
      }

      return 0;
    },
    onCreateVendor: function onCreateVendor() {
      var _this = this;

      _this.$refs.form.validate();

      if (_this.$refs.form.validate()) {
        axios.post("/api/vendors", {
          code: _this.vendorOptions.code,
          name: _this.vendorOptions.name,
          email: _this.vendorOptions.email,
          tin: _this.vendorOptions.tin,
          contact_person: _this.vendorOptions.contact_person,
          mobile_number: _this.vendorOptions.mobile_number,
          telephone_number: _this.vendorOptions.telephone_number,
          remarks: _this.vendorOptions.remarks,
          website: _this.vendorOptions.website,
          is_vat_inclusive: _this.vendorOptions.is_vat_inclusive,
          address: _this.vendorOptions.address,
          expense_types: _this.vendorOptions.selected_expense_types
        }).then(function (response) {
          // _this.onRefresh();
          _this.$dialog.message.success("Vendor created successfully.", {
            position: "top-right",
            timeout: 2000
          });

          _this.$refs.vendorForm.reset();

          _this.$refs.vendorForm.resetValidation();

          _this.vendorOptions.dialog = false;

          _this.loadVendors();
        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);
          _this.vendorOptions.errors = error.response.data.errors;
        });
        return;
      }
    },
    formatNumber: function formatNumber(data) {
      return numeral__WEBPACK_IMPORTED_MODULE_0___default()(data).format("0,0.00");
    } // calculateTotal() {
    //     let subtotal = this.isEmpty(this.subtotal);
    //     let discount = this.isEmpty(this.discount);
    //     let tax = this.isEmpty(this.tax);
    //     let tax_rate = this.isEmpty(this.tax_rate);
    //     this.amount = subtotal - (discount + tax + tax_rate);
    // }

  },
  watch: {
    items: function items() {
      this.amount = this.items.reduce(function (total, item) {
        return parseFloat(total) + parseFloat(item.particular_amount);
      }, 0);
      this.reimbursable_amount = this.items.reduce(function (total, item) {
        return parseFloat(total) + parseFloat(item.particular_reimbursable_amount);
      }, 0); // this.subtotal = this.items.reduce(
      //     (total, item) =>
      //         parseFloat(total) + parseFloat(item.particular_amount),
      //     0
      // );
      // this.calculateTotal();
    }
  },
  created: function created() {
    // axios.defaults.headers.common["Authorization"] =
    //     "Bearer " + localStorage.getItem("access_token");
    this.loadExpenseTypes();
    this.loadEmployees();
    this.loadVendors();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/components/CreateExpense.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expense_reports/components/CreateExpense.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create */ "./resources/js/views/modules/admin/expense_reports/components/Create.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    employee: {
      type: Object,
      "default": {
        id: null,
        remaining_fund: 0,
        fund: 0
      }
    }
  },
  components: {
    CreateExpense: _Create__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      dialog: false
    };
  },
  methods: {
    openDialog: function openDialog() {
      this.dialog = true;
    },
    onSave: function onSave() {
      this.$refs.createExpense.onSave();
    },
    onSaveExpense: function onSaveExpense() {
      this.dialog = false;
      this.$emit("onSaveExpense");
    }
  },
  created: function created() {// axios.defaults.headers.common["Authorization"] =
    //     "Bearer " + localStorage.getItem("access_token");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/components/Edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expense_reports/components/Edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    expense_id: {
      type: Number,
      "default": 0
    }
  },
  data: function data() {
    var _this2 = this;

    return {
      dialog: false,
      valid: false,
      menu: false,
      code: null,
      description: null,
      amount: 0,
      reimbursable_amount: 0,
      receipt_number: null,
      date: null,
      remarks: null,
      is_active: true,
      expense_type: null,
      expense_types: [],
      employee: {
        id: null,
        remaining_fund: 0,
        fund: 0
      },
      employees: [],
      vendor: null,
      vendors: [],
      particular: "",
      particular_amount: 0,
      particular_reimbursable_amount: 0,
      is_reimbursable: false,
      headers: [{
        text: "Particulars",
        value: "description",
        sortable: false
      }, {
        text: "Reimbursable Amount",
        value: "reimbursable_amount",
        sortable: false
      }, {
        text: "Amount",
        value: "amount",
        sortable: false
      }, {
        text: "",
        value: "actions",
        sortable: false
      }],
      items: [],
      rules: {
        description: [],
        amount: [function (v) {
          return !!v || "Amount is required";
        }],
        reimbursable_amount: [function (v) {
          return parseFloat(v) <= _this2.amount || "Reimbursable Amount should not be greater than the actual amount";
        }],
        particular_reimbursable_amount: [function (v) {
          return parseFloat(v) <= _this2.particular_amount || "Reimbursable Amount should not be greater than the actual amount";
        }],
        receipt_number: [],
        date: [function (v) {
          return !!v || "Date is required";
        }],
        remarks: [],
        is_active: [],
        expense_type: [function (v) {
          return !!v || "Expense Type is required";
        }],
        employee: [function (v) {
          return !!v || "Employee is required";
        }],
        vendor: []
      },
      errors: {
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
      },
      // Create Vendor
      vendorOptions: {
        dialog: false,
        valid: false,
        code: "",
        name: "",
        email: "",
        tin: "",
        contact_person: "",
        mobile_number: "",
        telephone_number: "",
        remarks: "",
        website: "",
        is_vat_inclusive: false,
        address: "",
        selected_expense_types: [],
        expense_types: [],
        rules: {
          code: [],
          name: [function (v) {
            return !!v || "Name is required";
          }, function (v) {
            return v.length <= 150 || "Name must be less than 100 characters";
          }],
          email: [],
          tin: [function (v) {
            return !!v || "TIN is required";
          }, function (v) {
            return v.length <= 150 || "Name must be less than 100 characters";
          }],
          contact_person: [],
          mobile_number: [],
          telephone_number: [],
          remarks: [],
          website: [],
          is_vat_inclusive: [],
          address: []
        },
        errors: {
          code: [],
          name: [],
          email: [],
          tin: [],
          contact_person: [],
          mobile_number: [],
          telephone_number: [],
          remarks: [],
          website: [],
          is_vat_inclusive: [],
          address: []
        }
      }
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.get("/api/expenses/" + _this.expense_id).then(function (response) {
        var data = response.data.data;
        _this.code = data.code;
        _this.description = data.description;
        _this.amount = data.amount;
        _this.reimbursable_amount = data.reimbursable_amount;
        _this.receipt_number = data.receipt_number;
        _this.date = data.date;
        _this.remarks = data.remarks;
        _this.is_active = data.is_active;
        _this.expense_type = data.expense_type.id;
        _this.employee = data.employee;
        _this.vendor = data.vendor == null ? null : data.vendor.id;
        _this.items = data.expense_details;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);
      });
    },
    loadExpenseTypes: function loadExpenseTypes() {
      var _this = this;

      axios.get("/api/data/expense_types").then(function (response) {
        _this.expense_types = response.data.data;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);
      });
    },
    loadVendors: function loadVendors() {
      var _this = this;

      axios.get("/api/data/vendors").then(function (response) {
        _this.vendors = response.data.data;

        _this.vendors.unshift({
          id: null,
          name: "No Vendor",
          tin: ""
        });
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);
      });
    },
    onRefresh: function onRefresh() {
      Object.assign(this.$data, this.$options.data.apply(this));
    },
    onSave: function onSave() {
      var _this = this;

      _this.$refs.form.validate();

      if (parseFloat(this.amount) - parseFloat(this.reimbursable_amount) > parseFloat(this.employee.remaining_fund)) {
        _this.$dialog.message.error("Expense actual amount is greater than remaining funds", {
          position: "top-right",
          timeout: 2000
        });

        return;
      }

      if (this.items.length == 0) {
        _this.$dialog.message.error("No Expense detail added", {
          position: "top-right",
          timeout: 2000
        });

        return;
      }

      if (_this.$refs.form.validate()) {
        axios.put("/api/expenses/" + _this.expense_id, {
          code: _this.code,
          description: _this.description,
          amount: _this.amount,
          reimbursable_amount: _this.reimbursable_amount,
          receipt_number: _this.receipt_number,
          date: _this.date,
          remarks: _this.remarks,
          is_active: _this.is_active,
          expense_type_id: _this.expense_type,
          employee_id: _this.employee.id,
          vendor_id: _this.vendor,
          expense_details: _this.items
        }).then(function (response) {
          _this.onRefresh();

          _this.$dialog.message.success("Expense updated successfully.", {
            position: "top-right",
            timeout: 2000
          });

          _this.$emit("editedExpense");
        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);
          _this.errors = error.response.data.errors;
        });
        return;
      }
    },
    addItem: function addItem() {
      if (parseFloat(this.particular_amount) >= parseFloat(this.particular_reimbursable_amount)) {
        this.items.push({
          id: 0,
          description: this.particular,
          amount: this.particular_amount,
          reimbursable_amount: this.particular_reimbursable_amount
        });
      }

      this.dialog = false;
      this.particular = "";
      this.particular_amount = 0;
      this.particular_reimbursable_amount = 0;
    },
    onRemove: function onRemove(item) {
      var index = this.items.indexOf(item);
      confirm("Are you sure you want to remove this item?") && this.items.splice(index, 1);
    },
    isEmpty: function isEmpty(item) {
      if (item) {
        return parseFloat(item);
      }

      return 0;
    },
    onCreateVendor: function onCreateVendor() {
      var _this = this;

      _this.$refs.vendorForm.validate();

      if (_this.$refs.vendorForm.validate()) {
        axios.post("/api/vendors", {
          code: _this.vendorOptions.code,
          name: _this.vendorOptions.name,
          email: _this.vendorOptions.email,
          tin: _this.vendorOptions.tin,
          contact_person: _this.vendorOptions.contact_person,
          mobile_number: _this.vendorOptions.mobile_number,
          telephone_number: _this.vendorOptions.telephone_number,
          remarks: _this.vendorOptions.remarks,
          website: _this.vendorOptions.website,
          is_vat_inclusive: _this.vendorOptions.is_vat_inclusive,
          address: _this.vendorOptions.address,
          expense_types: _this.vendorOptions.selected_expense_types
        }).then(function (response) {
          // _this.onRefresh();
          _this.$dialog.message.success("Vendor created successfully.", {
            position: "top-right",
            timeout: 2000
          });

          _this.$refs.vendorForm.reset();

          _this.$refs.vendorForm.resetValidation();

          _this.vendorOptions.dialog = false;

          _this.loadVendors();
        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);
          _this.vendorOptions.errors = error.response.data.errors;
        });
        return;
      }
    },
    formatNumber: function formatNumber(data) {
      return numeral__WEBPACK_IMPORTED_MODULE_0___default()(data).format("0,0.00");
    }
  },
  watch: {
    items: function items() {
      this.amount = this.items.reduce(function (total, item) {
        return parseFloat(total) + parseFloat(item.amount);
      }, 0);
      this.reimbursable_amount = this.items.reduce(function (total, item) {
        return parseFloat(total) + parseFloat(item.reimbursable_amount);
      }, 0);
    }
  },
  created: function created() {
    // axios.defaults.headers.common["Authorization"] =
    //     "Bearer " + localStorage.getItem("access_token");
    this.loadExpenseTypes();
    this.loadVendors();
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/components/EditExpense.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expense_reports/components/EditExpense.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit */ "./resources/js/views/modules/admin/expense_reports/components/Edit.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    EditExpense: _Edit__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      dialog: false,
      valid: false,
      menu: false,
      id: 0
    };
  },
  methods: {
    openDialog: function openDialog(item) {
      var _this = this;

      _this.id = item.id;
      console.log(_this.id);
      _this.dialog = true;
    },
    onSave: function onSave() {
      this.$refs.editExpense.onSave();
    },
    onSaveExpense: function onSaveExpense() {
      this.dialog = false;
      this.$emit("onEditExpense");
    }
  },
  created: function created() {// axios.defaults.headers.common["Authorization"] =
    //     "Bearer " + localStorage.getItem("access_token");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/Show.vue?vue&type=template&id=1aa1b90a&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expense_reports/Show.vue?vue&type=template&id=1aa1b90a& ***!
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
      _c(
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
                _vm._v("Expense Report Details")
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
                  _c("v-row", [_c("v-spacer")], 1),
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
                              label: "Employee",
                              readonly: "",
                              required: ""
                            },
                            model: {
                              value: _vm.employee,
                              callback: function($$v) {
                                _vm.employee = $$v
                              },
                              expression: "employee"
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
                              label: "Description",
                              readonly: "",
                              required: ""
                            },
                            model: {
                              value: _vm.description,
                              callback: function($$v) {
                                _vm.description = $$v
                              },
                              expression: "description"
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
                          _c(
                            "v-data-table",
                            {
                              staticClass: "elevation-0",
                              attrs: {
                                elevation: "0",
                                headers: _vm.headers,
                                items: _vm.items,
                                "hide-default-footer": true,
                                "disable-pagination": "",
                                "item-key": "id",
                                "single-expand": "",
                                "show-expand": ""
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "item.amount",
                                    fn: function(ref) {
                                      var item = ref.item
                                      return [
                                        _vm._v(
                                          "\n                                " +
                                            _vm._s(
                                              _vm.formatNumber(item.amount)
                                            ) +
                                            "\n                            "
                                        )
                                      ]
                                    }
                                  },
                                  {
                                    key: "top",
                                    fn: function() {
                                      return [
                                        _c(
                                          "v-row",
                                          [
                                            _vm._v(
                                              "\n                                    Expenses\n                                    "
                                            ),
                                            _c("v-spacer")
                                          ],
                                          1
                                        )
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
                                        _c(
                                          "td",
                                          {
                                            attrs: { colspan: headers.length }
                                          },
                                          [
                                            _c("v-container", [
                                              _c("table", [
                                                _c("tr", [
                                                  _c("td", [
                                                    _c("strong", [
                                                      _vm._v("Reimbursable")
                                                    ])
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [_vm._v(":")]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      "\n                                        " +
                                                        _vm._s(
                                                          _vm.formatNumber(
                                                            item.reimbursable_amount
                                                          )
                                                        ) +
                                                        "\n                                    "
                                                    )
                                                  ])
                                                ]),
                                                _vm._v(" "),
                                                _c("tr", [
                                                  _c("td", [
                                                    _c("strong", [
                                                      _vm._v("Code")
                                                    ])
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [_vm._v(":")]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(_vm._s(item.code))
                                                  ])
                                                ]),
                                                _vm._v(" "),
                                                _c("tr", [
                                                  _c("td", [
                                                    _c("strong", [
                                                      _vm._v("Description")
                                                    ])
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [_vm._v(":")]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      _vm._s(item.description)
                                                    )
                                                  ])
                                                ]),
                                                _vm._v(" "),
                                                _c("tr", [
                                                  _c("td", [
                                                    _c("strong", [
                                                      _vm._v("Remarks")
                                                    ])
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [_vm._v(":")]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(_vm._s(item.remarks))
                                                  ])
                                                ]),
                                                _vm._v(" "),
                                                _c("tr", [
                                                  _c("td", [
                                                    _c("strong", [
                                                      _vm._v("Created")
                                                    ])
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [_vm._v(":")]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      "\n                                        " +
                                                        _vm._s(
                                                          _vm.formatDate(
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
                                                    _c("strong", [
                                                      _vm._v("Cancelled")
                                                    ])
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [_vm._v(":")]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      "\n                                        " +
                                                        _vm._s(
                                                          _vm.formatDate(
                                                            item.deleted_at,
                                                            "YYYY-MM-DD HH:mm:ss"
                                                          )
                                                        ) +
                                                        "\n                                    "
                                                    )
                                                  ])
                                                ])
                                              ])
                                            ])
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
                            [
                              _vm._v(" "),
                              _vm.items.length > 0
                                ? _c("template", { slot: "body.append" }, [
                                    _c(
                                      "tr",
                                      {
                                        staticClass:
                                          "green--text hidden-md-and-up"
                                      },
                                      [
                                        _c("td", { staticClass: "title" }, [
                                          _vm._v(
                                            "\n                                        Total:\n                                        "
                                          ),
                                          _c("strong", [
                                            _vm._v(_vm._s(_vm.total))
                                          ])
                                        ])
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
                                              _vm._s(
                                                _vm.formatNumber(_vm.total)
                                              )
                                            )
                                          ])
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
                        { attrs: { cols: "12", md: "6" } },
                        [
                          _c("v-textarea", {
                            attrs: {
                              rows: _vm.remarks == "" ? 1 : 2,
                              label: "Remarks",
                              readonly: ""
                            },
                            model: {
                              value: _vm.remarks,
                              callback: function($$v) {
                                _vm.remarks = $$v
                              },
                              expression: "remarks"
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
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            color: "green",
                            dark: "",
                            to: { name: "admin.expense_reports.print" }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        View Summary\n                    "
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/components/Create.vue?vue&type=template&id=f4abc072&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expense_reports/components/Create.vue?vue&type=template&id=f4abc072& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
        "v-card",
        { staticClass: "elevation-0 pt-0" },
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
                "v-container",
                [
                  _c(
                    "v-row",
                    { staticClass: "mt-5" },
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c("h3", { staticClass: "title green--text mr-2" }, [
                        _vm._v(
                          "\n                        Remaining Funds:\n                        " +
                            _vm._s(
                              _vm.formatNumber(_vm.employee.remaining_fund)
                            ) +
                            "\n                    "
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
                        { attrs: { cols: "12", md: "4" } },
                        [
                          _c(
                            "v-form",
                            {
                              ref: "vendorForm",
                              model: {
                                value: _vm.vendorOptions.valid,
                                callback: function($$v) {
                                  _vm.$set(_vm.vendorOptions, "valid", $$v)
                                },
                                expression: "vendorOptions.valid"
                              }
                            },
                            [
                              _c("v-autocomplete", {
                                attrs: {
                                  rules: _vm.rules.vendor,
                                  items: _vm.vendors,
                                  "error-messages": _vm.errors.vendor_id,
                                  "item-value": "id",
                                  "item-text": "name",
                                  label: "Vendor *"
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
                                        _c(
                                          "v-dialog",
                                          {
                                            attrs: {
                                              persistent: "",
                                              "max-width": "600px"
                                            },
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
                                                              fab: "",
                                                              color: "primary",
                                                              text: "",
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
                                                          {
                                                            attrs: { dark: "" }
                                                          },
                                                          [_vm._v("mdi-plus")]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ]
                                                }
                                              }
                                            ]),
                                            model: {
                                              value: _vm.vendorOptions.dialog,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.vendorOptions,
                                                  "dialog",
                                                  $$v
                                                )
                                              },
                                              expression: "vendorOptions.dialog"
                                            }
                                          },
                                          [
                                            _vm._v(" "),
                                            _c(
                                              "v-card",
                                              [
                                                _c("v-card-title", [
                                                  _c(
                                                    "span",
                                                    { staticClass: "headline" },
                                                    [
                                                      _vm._v(
                                                        "\n                                                    New Vendor\n                                                "
                                                      )
                                                    ]
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "v-card-text",
                                                  [
                                                    _c(
                                                      "v-form",
                                                      {
                                                        ref: "form",
                                                        model: {
                                                          value:
                                                            _vm.vendorOptions
                                                              .valid,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vendorOptions,
                                                              "valid",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "\n                                                        vendorOptions.valid\n                                                    "
                                                        }
                                                      },
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
                                                                        "12",
                                                                      md: "6"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        attrs: {
                                                                          rules:
                                                                            _vm
                                                                              .vendorOptions
                                                                              .rules
                                                                              .name,
                                                                          counter: 150,
                                                                          "error-messages":
                                                                            _vm
                                                                              .vendorOptions
                                                                              .errors
                                                                              .name,
                                                                          label:
                                                                            "Name *",
                                                                          required:
                                                                            ""
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .vendorOptions
                                                                              .name,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.vendorOptions,
                                                                              "name",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "\n                                                                        vendorOptions.name\n                                                                    "
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-col",
                                                                  {
                                                                    attrs: {
                                                                      cols:
                                                                        "12",
                                                                      md: "6"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        attrs: {
                                                                          rules:
                                                                            _vm
                                                                              .vendorOptions
                                                                              .rules
                                                                              .email,
                                                                          "error-messages":
                                                                            _vm
                                                                              .vendorOptions
                                                                              .errors
                                                                              .email,
                                                                          label:
                                                                            "Email Address"
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .vendorOptions
                                                                              .email,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.vendorOptions,
                                                                              "email",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "\n                                                                        vendorOptions.email\n                                                                    "
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-col",
                                                                  {
                                                                    attrs: {
                                                                      cols:
                                                                        "12",
                                                                      md: "6"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        attrs: {
                                                                          rules:
                                                                            _vm
                                                                              .vendorOptions
                                                                              .rules
                                                                              .tin,
                                                                          "error-messages":
                                                                            _vm
                                                                              .vendorOptions
                                                                              .errors
                                                                              .tin,
                                                                          counter: 100,
                                                                          label:
                                                                            "Tax Identification Number (TIN) *",
                                                                          required:
                                                                            ""
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .vendorOptions
                                                                              .tin,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.vendorOptions,
                                                                              "tin",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "\n                                                                        vendorOptions.tin\n                                                                    "
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-col",
                                                                  {
                                                                    attrs: {
                                                                      cols:
                                                                        "12",
                                                                      md: "6"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        attrs: {
                                                                          rules:
                                                                            _vm
                                                                              .vendorOptions
                                                                              .rules
                                                                              .contact_person,
                                                                          "error-messages":
                                                                            _vm
                                                                              .vendorOptions
                                                                              .errors
                                                                              .contact_person,
                                                                          counter: 100,
                                                                          label:
                                                                            "Contact Person"
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .vendorOptions
                                                                              .contact_person,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.vendorOptions,
                                                                              "contact_person",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "\n                                                                        vendorOptions.contact_person\n                                                                    "
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-col",
                                                                  {
                                                                    attrs: {
                                                                      cols:
                                                                        "12",
                                                                      md: "6"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        attrs: {
                                                                          rules:
                                                                            _vm
                                                                              .vendorOptions
                                                                              .rules
                                                                              .mobile_number,
                                                                          counter: 30,
                                                                          "error-messages":
                                                                            _vm
                                                                              .vendorOptions
                                                                              .errors
                                                                              .mobile_number,
                                                                          label:
                                                                            "Mobile Number"
                                                                        },
                                                                        on: {
                                                                          input: function(
                                                                            $event
                                                                          ) {
                                                                            _vm.vendorOptions.errors.mobile_number = []
                                                                          }
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .vendorOptions
                                                                              .mobile_number,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.vendorOptions,
                                                                              "mobile_number",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "\n                                                                        vendorOptions.mobile_number\n                                                                    "
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-col",
                                                                  {
                                                                    attrs: {
                                                                      cols:
                                                                        "12",
                                                                      md: "6"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        attrs: {
                                                                          rules:
                                                                            _vm
                                                                              .vendorOptions
                                                                              .rules
                                                                              .telephone_number,
                                                                          counter: 30,
                                                                          "error-messages":
                                                                            _vm
                                                                              .vendorOptions
                                                                              .errors
                                                                              .telephone_number,
                                                                          label:
                                                                            "Telephone Number",
                                                                          type:
                                                                            "number"
                                                                        },
                                                                        on: {
                                                                          input: function(
                                                                            $event
                                                                          ) {
                                                                            _vm.vendorOptions.errors.telephone_number = []
                                                                          }
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .vendorOptions
                                                                              .telephone_number,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.vendorOptions,
                                                                              "telephone_number",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "\n                                                                        vendorOptions.telephone_number\n                                                                    "
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-col",
                                                                  {
                                                                    attrs: {
                                                                      cols:
                                                                        "12",
                                                                      md: "6"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        attrs: {
                                                                          counter: 100,
                                                                          rules:
                                                                            _vm
                                                                              .vendorOptions
                                                                              .rules
                                                                              .website,
                                                                          "error-messages":
                                                                            _vm
                                                                              .vendorOptions
                                                                              .errors
                                                                              .website,
                                                                          label:
                                                                            "Website"
                                                                        },
                                                                        on: {
                                                                          input: function(
                                                                            $event
                                                                          ) {
                                                                            _vm.vendorOptions.errors.website = []
                                                                          }
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .vendorOptions
                                                                              .website,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.vendorOptions,
                                                                              "website",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "\n                                                                        vendorOptions.website\n                                                                    "
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-col",
                                                                  {
                                                                    attrs: {
                                                                      cols:
                                                                        "12",
                                                                      md: "6"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-select",
                                                                      {
                                                                        attrs: {
                                                                          items:
                                                                            _vm.expense_types,
                                                                          "item-text":
                                                                            "name",
                                                                          "item-value":
                                                                            "id",
                                                                          label:
                                                                            "Link with Expense Types",
                                                                          multiple:
                                                                            ""
                                                                        },
                                                                        scopedSlots: _vm._u(
                                                                          [
                                                                            {
                                                                              key:
                                                                                "selection",
                                                                              fn: function(
                                                                                ref
                                                                              ) {
                                                                                var item =
                                                                                  ref.item
                                                                                var index =
                                                                                  ref.index
                                                                                return [
                                                                                  index ===
                                                                                  0
                                                                                    ? _c(
                                                                                        "v-chip",
                                                                                        {
                                                                                          attrs: {
                                                                                            small:
                                                                                              ""
                                                                                          }
                                                                                        },
                                                                                        [
                                                                                          _c(
                                                                                            "span",
                                                                                            [
                                                                                              _vm._v(
                                                                                                _vm._s(
                                                                                                  item.name
                                                                                                )
                                                                                              )
                                                                                            ]
                                                                                          )
                                                                                        ]
                                                                                      )
                                                                                    : _vm._e(),
                                                                                  _vm._v(
                                                                                    " "
                                                                                  ),
                                                                                  index ===
                                                                                  1
                                                                                    ? _c(
                                                                                        "span",
                                                                                        {
                                                                                          staticClass:
                                                                                            "grey--text caption"
                                                                                        },
                                                                                        [
                                                                                          _vm._v(
                                                                                            "(+" +
                                                                                              _vm._s(
                                                                                                _vm
                                                                                                  .vendorOptions
                                                                                                  .selected_expense_types
                                                                                                  .length -
                                                                                                  1
                                                                                              ) +
                                                                                              "\n                                                                            others)"
                                                                                          )
                                                                                        ]
                                                                                      )
                                                                                    : _vm._e()
                                                                                ]
                                                                              }
                                                                            }
                                                                          ]
                                                                        ),
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .vendorOptions
                                                                              .selected_expense_types,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.vendorOptions,
                                                                              "selected_expense_types",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "\n                                                                        vendorOptions.selected_expense_types\n                                                                    "
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
                                                                      cols: "12"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-textarea",
                                                                      {
                                                                        attrs: {
                                                                          rules:
                                                                            _vm
                                                                              .vendorOptions
                                                                              .rules
                                                                              .address,
                                                                          "error-messages":
                                                                            _vm
                                                                              .vendorOptions
                                                                              .errors
                                                                              .address,
                                                                          label:
                                                                            "Address",
                                                                          rows:
                                                                            "1"
                                                                        },
                                                                        on: {
                                                                          input: function(
                                                                            $event
                                                                          ) {
                                                                            _vm.vendorOptions.errors.address = []
                                                                          }
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .vendorOptions
                                                                              .address,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.vendorOptions,
                                                                              "address",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "\n                                                                        vendorOptions.address\n                                                                    "
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
                                                                        "12",
                                                                      md: "6"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-checkbox",
                                                                      {
                                                                        attrs: {
                                                                          label:
                                                                            "Vat Inclusive",
                                                                          "error-messages":
                                                                            _vm
                                                                              .vendorOptions
                                                                              .errors
                                                                              .is_vat_inclusive
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .vendorOptions
                                                                              .is_vat_inclusive,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.vendorOptions,
                                                                              "is_vat_inclusive",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "\n                                                                        vendorOptions.is_vat_inclusive\n                                                                    "
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
                                                              "small",
                                                              {
                                                                staticClass:
                                                                  "text--secondary"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "\n                                                            * indicates\n                                                            required field\n                                                        "
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
                                                          color: "primary",
                                                          text: ""
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            _vm.vendorOptions.dialog = false
                                                          }
                                                        }
                                                      },
                                                      [_vm._v("Close")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-btn",
                                                      {
                                                        attrs: {
                                                          color: "primary",
                                                          text: ""
                                                        },
                                                        on: {
                                                          click:
                                                            _vm.onCreateVendor
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                                    Save\n                                                "
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
                                                        "TIN: " + data.item.tin
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
                                  value: _vm.vendor,
                                  callback: function($$v) {
                                    _vm.vendor = $$v
                                  },
                                  expression: "vendor"
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
                        { attrs: { cols: "12", md: "4" } },
                        [
                          _c("v-autocomplete", {
                            attrs: {
                              rules: _vm.rules.expense_type,
                              items: _vm.expense_types,
                              "error-messages": _vm.errors.expense_type_id,
                              "item-value": "id",
                              "item-text": "name",
                              label: "Expense Type *",
                              required: ""
                            },
                            on: {
                              input: function($event) {
                                _vm.errors.expense_type_id = []
                              }
                            },
                            model: {
                              value: _vm.expense_type,
                              callback: function($$v) {
                                _vm.expense_type = $$v
                              },
                              expression: "expense_type"
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
                              rules: _vm.rules.receipt_number,
                              "error-messages": _vm.errors.receipt_number,
                              label: "Receipt No. *",
                              required: ""
                            },
                            on: {
                              input: function($event) {
                                _vm.errors.receipt_number = []
                              }
                            },
                            model: {
                              value: _vm.receipt_number,
                              callback: function($$v) {
                                _vm.receipt_number = $$v
                              },
                              expression: "receipt_number"
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
                          _c(
                            "v-menu",
                            {
                              ref: "menu",
                              attrs: {
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
                                                rules: _vm.rules.date,
                                                "error-messages":
                                                  _vm.errors.date,
                                                label: "Date *",
                                                readonly: ""
                                              },
                                              on: {
                                                input: function($event) {
                                                  _vm.errors.date = []
                                                }
                                              },
                                              model: {
                                                value: _vm.date,
                                                callback: function($$v) {
                                                  _vm.date = $$v
                                                },
                                                expression: "date"
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
                                  color: "success"
                                },
                                model: {
                                  value: _vm.date,
                                  callback: function($$v) {
                                    _vm.date = $$v
                                  },
                                  expression: "date"
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
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c(
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
                                            attrs: { flat: "", color: "white" }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                    Expense Details\n                                    "
                                            ),
                                            _c("v-spacer"),
                                            _vm._v(" "),
                                            _c(
                                              "v-dialog",
                                              {
                                                attrs: { "max-width": "500px" },
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
                                                                staticClass:
                                                                  "mb-2",
                                                                attrs: {
                                                                  color:
                                                                    "primary",
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
                                                ]),
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
                                                    _c("v-card-title"),
                                                    _vm._v(" "),
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
                                                                      cols: "12"
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
                                                                            _vm.particular,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.particular = $$v
                                                                          },
                                                                          expression:
                                                                            "\n                                                                    particular\n                                                                "
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-col",
                                                                  {
                                                                    attrs: {
                                                                      cols: "12"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        attrs: {
                                                                          label:
                                                                            "Amount"
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm.particular_amount,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.particular_amount = $$v
                                                                          },
                                                                          expression:
                                                                            "\n                                                                    particular_amount\n                                                                "
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-col",
                                                                  {
                                                                    attrs: {
                                                                      cols: "12"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-checkbox",
                                                                      {
                                                                        attrs: {
                                                                          label:
                                                                            "Reimbursable"
                                                                        },
                                                                        on: {
                                                                          click: function(
                                                                            $event
                                                                          ) {
                                                                            _vm.is_reimbursable
                                                                              ? (_vm.particular_reimbursable_amount =
                                                                                  _vm.particular_amount)
                                                                              : (_vm.particular_reimbursable_amount = 0)
                                                                          }
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm.is_reimbursable,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.is_reimbursable = $$v
                                                                          },
                                                                          expression:
                                                                            "\n                                                                    is_reimbursable\n                                                                "
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-col",
                                                                  {
                                                                    attrs: {
                                                                      cols: "12"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        directives: [
                                                                          {
                                                                            name:
                                                                              "show",
                                                                            rawName:
                                                                              "v-show",
                                                                            value:
                                                                              _vm.is_reimbursable,
                                                                            expression:
                                                                              "\n                                                                    is_reimbursable\n                                                                "
                                                                          }
                                                                        ],
                                                                        attrs: {
                                                                          label:
                                                                            "Reimbursable Amount",
                                                                          rules:
                                                                            _vm
                                                                              .rules
                                                                              .particular_reimbursable_amount
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm.particular_reimbursable_amount,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.particular_reimbursable_amount = $$v
                                                                          },
                                                                          expression:
                                                                            "\n                                                                    particular_reimbursable_amount\n                                                                "
                                                                        }
                                                                      }
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
                                                            attrs: {
                                                              color: "primary",
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
                                                          [_vm._v("Cancel")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-btn",
                                                          {
                                                            attrs: {
                                                              color: "primary",
                                                              text: ""
                                                            },
                                                            on: {
                                                              click: _vm.addItem
                                                            }
                                                          },
                                                          [_vm._v("Add")]
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
                                ? _c("template", { slot: "body.append" }, [
                                    _c(
                                      "tr",
                                      {
                                        staticClass:
                                          "green--text hidden-md-and-up"
                                      },
                                      [
                                        _c("td", { staticClass: "title" }, [
                                          _vm._v(
                                            "\n                                        Reimbursable:\n                                        "
                                          ),
                                          _c("strong", [
                                            _vm._v(
                                              _vm._s(_vm.reimbursable_amount)
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("br"),
                                          _vm._v(
                                            "\n                                        Total:\n                                        "
                                          ),
                                          _c("strong", [
                                            _vm._v(_vm._s(_vm.amount))
                                          ])
                                        ])
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
                                        _c("td", { staticClass: "title" }, [
                                          _vm._v("Total")
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c("strong", [
                                            _vm._v(
                                              _vm._s(_vm.reimbursable_amount)
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c("strong", [
                                            _vm._v(_vm._s(_vm.amount))
                                          ])
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
                          _c("v-textarea", {
                            attrs: {
                              rows: "1",
                              label: "Remarks",
                              "error-messages": _vm.errors.remarks
                            },
                            on: {
                              input: function($event) {
                                _vm.errors.remarks = []
                              }
                            },
                            model: {
                              value: _vm.remarks,
                              callback: function($$v) {
                                _vm.remarks = $$v
                              },
                              expression: "remarks"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("small", { staticClass: "text--secondary" }, [
                    _vm._v(
                      "\n                    * indicates required field\n                "
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/components/CreateExpense.vue?vue&type=template&id=d7af327e&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expense_reports/components/CreateExpense.vue?vue&type=template&id=d7af327e& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
          attrs: {
            fullscreen: "",
            "hide-overlay": "",
            transition: "dialog-bottom-transition"
          },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-toolbar",
                { attrs: { dark: "", color: "primary" } },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "", dark: "" },
                      on: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-close")])],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-toolbar-title", [_vm._v("New Expense")]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-toolbar-items",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { dark: "", text: "" },
                          on: { click: _vm.onSave }
                        },
                        [_vm._v("Save")]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("CreateExpense", {
                ref: "createExpense",
                attrs: { employee: _vm.employee },
                on: { createdExpense: _vm.onSaveExpense }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/components/Edit.vue?vue&type=template&id=3385a695&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expense_reports/components/Edit.vue?vue&type=template&id=3385a695& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
        "v-card",
        { staticClass: "elevation-0 pt-0" },
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
                "v-container",
                [
                  _c(
                    "v-row",
                    { staticClass: "mt-5" },
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c("h3", { staticClass: "title green--text mr-2" }, [
                        _vm._v(
                          "\n                        Remaining Funds:\n                        " +
                            _vm._s(
                              _vm.formatNumber(_vm.employee.remaining_fund)
                            ) +
                            "\n                    "
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
                        { attrs: { cols: "12", md: "4" } },
                        [
                          _c(
                            "v-form",
                            {
                              ref: "vendorForm",
                              model: {
                                value: _vm.vendorOptions.valid,
                                callback: function($$v) {
                                  _vm.$set(_vm.vendorOptions, "valid", $$v)
                                },
                                expression: "vendorOptions.valid"
                              }
                            },
                            [
                              _c("v-autocomplete", {
                                attrs: {
                                  rules: _vm.rules.vendor,
                                  items: _vm.vendors,
                                  "error-messages": _vm.errors.vendor_id,
                                  "item-value": "id",
                                  "item-text": "name",
                                  label: "Vendor *"
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
                                        _c(
                                          "v-dialog",
                                          {
                                            attrs: {
                                              persistent: "",
                                              "max-width": "600px"
                                            },
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
                                                              fab: "",
                                                              color: "primary",
                                                              text: "",
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
                                                          {
                                                            attrs: { dark: "" }
                                                          },
                                                          [_vm._v("mdi-plus")]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ]
                                                }
                                              }
                                            ]),
                                            model: {
                                              value: _vm.vendorOptions.dialog,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.vendorOptions,
                                                  "dialog",
                                                  $$v
                                                )
                                              },
                                              expression: "vendorOptions.dialog"
                                            }
                                          },
                                          [
                                            _vm._v(" "),
                                            _c(
                                              "v-card",
                                              [
                                                _c("v-card-title", [
                                                  _c(
                                                    "span",
                                                    { staticClass: "headline" },
                                                    [
                                                      _vm._v(
                                                        "\n                                                    New Vendor\n                                                "
                                                      )
                                                    ]
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "v-card-text",
                                                  [
                                                    _c(
                                                      "v-form",
                                                      {
                                                        ref: "form",
                                                        model: {
                                                          value:
                                                            _vm.vendorOptions
                                                              .valid,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vendorOptions,
                                                              "valid",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "\n                                                        vendorOptions.valid\n                                                    "
                                                        }
                                                      },
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
                                                                        "12",
                                                                      md: "6"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        attrs: {
                                                                          rules:
                                                                            _vm
                                                                              .vendorOptions
                                                                              .rules
                                                                              .name,
                                                                          counter: 150,
                                                                          "error-messages":
                                                                            _vm
                                                                              .vendorOptions
                                                                              .errors
                                                                              .name,
                                                                          label:
                                                                            "Name *",
                                                                          required:
                                                                            ""
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .vendorOptions
                                                                              .name,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.vendorOptions,
                                                                              "name",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "\n                                                                        vendorOptions.name\n                                                                    "
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-col",
                                                                  {
                                                                    attrs: {
                                                                      cols:
                                                                        "12",
                                                                      md: "6"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        attrs: {
                                                                          rules:
                                                                            _vm
                                                                              .vendorOptions
                                                                              .rules
                                                                              .email,
                                                                          "error-messages":
                                                                            _vm
                                                                              .vendorOptions
                                                                              .errors
                                                                              .email,
                                                                          label:
                                                                            "Email Address"
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .vendorOptions
                                                                              .email,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.vendorOptions,
                                                                              "email",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "\n                                                                        vendorOptions.email\n                                                                    "
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-col",
                                                                  {
                                                                    attrs: {
                                                                      cols:
                                                                        "12",
                                                                      md: "6"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        attrs: {
                                                                          rules:
                                                                            _vm
                                                                              .vendorOptions
                                                                              .rules
                                                                              .tin,
                                                                          "error-messages":
                                                                            _vm
                                                                              .vendorOptions
                                                                              .errors
                                                                              .tin,
                                                                          counter: 100,
                                                                          label:
                                                                            "Tax Identification Number (TIN) *",
                                                                          required:
                                                                            ""
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .vendorOptions
                                                                              .tin,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.vendorOptions,
                                                                              "tin",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "\n                                                                        vendorOptions.tin\n                                                                    "
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-col",
                                                                  {
                                                                    attrs: {
                                                                      cols:
                                                                        "12",
                                                                      md: "6"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        attrs: {
                                                                          rules:
                                                                            _vm
                                                                              .vendorOptions
                                                                              .rules
                                                                              .contact_person,
                                                                          "error-messages":
                                                                            _vm
                                                                              .vendorOptions
                                                                              .errors
                                                                              .contact_person,
                                                                          counter: 100,
                                                                          label:
                                                                            "Contact Person"
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .vendorOptions
                                                                              .contact_person,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.vendorOptions,
                                                                              "contact_person",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "\n                                                                        vendorOptions.contact_person\n                                                                    "
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-col",
                                                                  {
                                                                    attrs: {
                                                                      cols:
                                                                        "12",
                                                                      md: "6"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        attrs: {
                                                                          rules:
                                                                            _vm
                                                                              .vendorOptions
                                                                              .rules
                                                                              .mobile_number,
                                                                          counter: 30,
                                                                          "error-messages":
                                                                            _vm
                                                                              .vendorOptions
                                                                              .errors
                                                                              .mobile_number,
                                                                          label:
                                                                            "Mobile Number"
                                                                        },
                                                                        on: {
                                                                          input: function(
                                                                            $event
                                                                          ) {
                                                                            _vm.vendorOptions.errors.mobile_number = []
                                                                          }
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .vendorOptions
                                                                              .mobile_number,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.vendorOptions,
                                                                              "mobile_number",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "\n                                                                        vendorOptions.mobile_number\n                                                                    "
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-col",
                                                                  {
                                                                    attrs: {
                                                                      cols:
                                                                        "12",
                                                                      md: "6"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        attrs: {
                                                                          rules:
                                                                            _vm
                                                                              .vendorOptions
                                                                              .rules
                                                                              .telephone_number,
                                                                          counter: 30,
                                                                          "error-messages":
                                                                            _vm
                                                                              .vendorOptions
                                                                              .errors
                                                                              .telephone_number,
                                                                          label:
                                                                            "Telephone Number",
                                                                          type:
                                                                            "number"
                                                                        },
                                                                        on: {
                                                                          input: function(
                                                                            $event
                                                                          ) {
                                                                            _vm.vendorOptions.errors.telephone_number = []
                                                                          }
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .vendorOptions
                                                                              .telephone_number,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.vendorOptions,
                                                                              "telephone_number",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "\n                                                                        vendorOptions.telephone_number\n                                                                    "
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-col",
                                                                  {
                                                                    attrs: {
                                                                      cols:
                                                                        "12",
                                                                      md: "6"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        attrs: {
                                                                          counter: 100,
                                                                          rules:
                                                                            _vm
                                                                              .vendorOptions
                                                                              .rules
                                                                              .website,
                                                                          "error-messages":
                                                                            _vm
                                                                              .vendorOptions
                                                                              .errors
                                                                              .website,
                                                                          label:
                                                                            "Website"
                                                                        },
                                                                        on: {
                                                                          input: function(
                                                                            $event
                                                                          ) {
                                                                            _vm.vendorOptions.errors.website = []
                                                                          }
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .vendorOptions
                                                                              .website,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.vendorOptions,
                                                                              "website",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "\n                                                                        vendorOptions.website\n                                                                    "
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-col",
                                                                  {
                                                                    attrs: {
                                                                      cols:
                                                                        "12",
                                                                      md: "6"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-select",
                                                                      {
                                                                        attrs: {
                                                                          items:
                                                                            _vm.expense_types,
                                                                          "item-text":
                                                                            "name",
                                                                          "item-value":
                                                                            "id",
                                                                          label:
                                                                            "Link with Expense Types",
                                                                          multiple:
                                                                            ""
                                                                        },
                                                                        scopedSlots: _vm._u(
                                                                          [
                                                                            {
                                                                              key:
                                                                                "selection",
                                                                              fn: function(
                                                                                ref
                                                                              ) {
                                                                                var item =
                                                                                  ref.item
                                                                                var index =
                                                                                  ref.index
                                                                                return [
                                                                                  index ===
                                                                                  0
                                                                                    ? _c(
                                                                                        "v-chip",
                                                                                        {
                                                                                          attrs: {
                                                                                            small:
                                                                                              ""
                                                                                          }
                                                                                        },
                                                                                        [
                                                                                          _c(
                                                                                            "span",
                                                                                            [
                                                                                              _vm._v(
                                                                                                _vm._s(
                                                                                                  item.name
                                                                                                )
                                                                                              )
                                                                                            ]
                                                                                          )
                                                                                        ]
                                                                                      )
                                                                                    : _vm._e(),
                                                                                  _vm._v(
                                                                                    " "
                                                                                  ),
                                                                                  index ===
                                                                                  1
                                                                                    ? _c(
                                                                                        "span",
                                                                                        {
                                                                                          staticClass:
                                                                                            "grey--text caption"
                                                                                        },
                                                                                        [
                                                                                          _vm._v(
                                                                                            "(+" +
                                                                                              _vm._s(
                                                                                                _vm
                                                                                                  .vendorOptions
                                                                                                  .selected_expense_types
                                                                                                  .length -
                                                                                                  1
                                                                                              ) +
                                                                                              "\n                                                                            others)"
                                                                                          )
                                                                                        ]
                                                                                      )
                                                                                    : _vm._e()
                                                                                ]
                                                                              }
                                                                            }
                                                                          ]
                                                                        ),
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .vendorOptions
                                                                              .selected_expense_types,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.vendorOptions,
                                                                              "selected_expense_types",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "\n                                                                        vendorOptions.selected_expense_types\n                                                                    "
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
                                                                      cols: "12"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-textarea",
                                                                      {
                                                                        attrs: {
                                                                          rules:
                                                                            _vm
                                                                              .vendorOptions
                                                                              .rules
                                                                              .address,
                                                                          "error-messages":
                                                                            _vm
                                                                              .vendorOptions
                                                                              .errors
                                                                              .address,
                                                                          label:
                                                                            "Address",
                                                                          rows:
                                                                            "1"
                                                                        },
                                                                        on: {
                                                                          input: function(
                                                                            $event
                                                                          ) {
                                                                            _vm.vendorOptions.errors.address = []
                                                                          }
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .vendorOptions
                                                                              .address,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.vendorOptions,
                                                                              "address",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "\n                                                                        vendorOptions.address\n                                                                    "
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
                                                                        "12",
                                                                      md: "6"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-checkbox",
                                                                      {
                                                                        attrs: {
                                                                          label:
                                                                            "Vat Inclusive",
                                                                          "error-messages":
                                                                            _vm
                                                                              .vendorOptions
                                                                              .errors
                                                                              .is_vat_inclusive
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .vendorOptions
                                                                              .is_vat_inclusive,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.vendorOptions,
                                                                              "is_vat_inclusive",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "\n                                                                        vendorOptions.is_vat_inclusive\n                                                                    "
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
                                                              "small",
                                                              {
                                                                staticClass:
                                                                  "text--secondary"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "\n                                                            * indicates\n                                                            required field\n                                                        "
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
                                                          color: "primary",
                                                          text: ""
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            _vm.vendorOptions.dialog = false
                                                          }
                                                        }
                                                      },
                                                      [_vm._v("Close")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-btn",
                                                      {
                                                        attrs: {
                                                          color: "primary",
                                                          text: ""
                                                        },
                                                        on: {
                                                          click:
                                                            _vm.onCreateVendor
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                                    Save\n                                                "
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
                                                        "TIN: " + data.item.tin
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
                                  value: _vm.vendor,
                                  callback: function($$v) {
                                    _vm.vendor = $$v
                                  },
                                  expression: "vendor"
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
                        { attrs: { cols: "12", md: "4" } },
                        [
                          _c("v-autocomplete", {
                            attrs: {
                              rules: _vm.rules.expense_type,
                              items: _vm.expense_types,
                              "error-messages": _vm.errors.expense_type_id,
                              "item-value": "id",
                              "item-text": "name",
                              label: "Expense Type *",
                              required: ""
                            },
                            on: {
                              input: function($event) {
                                _vm.errors.expense_type_id = []
                              }
                            },
                            model: {
                              value: _vm.expense_type,
                              callback: function($$v) {
                                _vm.expense_type = $$v
                              },
                              expression: "expense_type"
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
                              rules: _vm.rules.receipt_number,
                              "error-messages": _vm.errors.receipt_number,
                              label: "Receipt No. *",
                              required: ""
                            },
                            on: {
                              input: function($event) {
                                _vm.errors.receipt_number = []
                              }
                            },
                            model: {
                              value: _vm.receipt_number,
                              callback: function($$v) {
                                _vm.receipt_number = $$v
                              },
                              expression: "receipt_number"
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
                          _c(
                            "v-menu",
                            {
                              ref: "menu",
                              attrs: {
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
                                                rules: _vm.rules.date,
                                                "error-messages":
                                                  _vm.errors.date,
                                                label: "Date *",
                                                readonly: ""
                                              },
                                              on: {
                                                input: function($event) {
                                                  _vm.errors.date = []
                                                }
                                              },
                                              model: {
                                                value: _vm.date,
                                                callback: function($$v) {
                                                  _vm.date = $$v
                                                },
                                                expression: "date"
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
                                  color: "success"
                                },
                                model: {
                                  value: _vm.date,
                                  callback: function($$v) {
                                    _vm.date = $$v
                                  },
                                  expression: "date"
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
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c(
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
                                            attrs: { flat: "", color: "white" }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                    Expense Details\n                                    "
                                            ),
                                            _c("v-spacer"),
                                            _vm._v(" "),
                                            _c(
                                              "v-dialog",
                                              {
                                                attrs: { "max-width": "500px" },
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
                                                                staticClass:
                                                                  "mb-2",
                                                                attrs: {
                                                                  color:
                                                                    "primary",
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
                                                ]),
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
                                                    _c("v-card-title"),
                                                    _vm._v(" "),
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
                                                                      cols: "12"
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
                                                                            _vm.particular,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.particular = $$v
                                                                          },
                                                                          expression:
                                                                            "\n                                                                    particular\n                                                                "
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-col",
                                                                  {
                                                                    attrs: {
                                                                      cols: "12"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        attrs: {
                                                                          label:
                                                                            "Amount"
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm.particular_amount,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.particular_amount = $$v
                                                                          },
                                                                          expression:
                                                                            "\n                                                                    particular_amount\n                                                                "
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-col",
                                                                  {
                                                                    attrs: {
                                                                      cols: "12"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-checkbox",
                                                                      {
                                                                        attrs: {
                                                                          label:
                                                                            "Reimbursable"
                                                                        },
                                                                        on: {
                                                                          click: function(
                                                                            $event
                                                                          ) {
                                                                            _vm.is_reimbursable
                                                                              ? (_vm.particular_reimbursable_amount =
                                                                                  _vm.particular_amount)
                                                                              : (_vm.particular_reimbursable_amount = 0)
                                                                          }
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm.is_reimbursable,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.is_reimbursable = $$v
                                                                          },
                                                                          expression:
                                                                            "\n                                                                    is_reimbursable\n                                                                "
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-col",
                                                                  {
                                                                    attrs: {
                                                                      cols: "12"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-text-field",
                                                                      {
                                                                        directives: [
                                                                          {
                                                                            name:
                                                                              "show",
                                                                            rawName:
                                                                              "v-show",
                                                                            value:
                                                                              _vm.is_reimbursable,
                                                                            expression:
                                                                              "\n                                                                    is_reimbursable\n                                                                "
                                                                          }
                                                                        ],
                                                                        attrs: {
                                                                          label:
                                                                            "Reimbursable Amount",
                                                                          rules:
                                                                            _vm
                                                                              .rules
                                                                              .particular_reimbursable_amount
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm.particular_reimbursable_amount,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.particular_reimbursable_amount = $$v
                                                                          },
                                                                          expression:
                                                                            "\n                                                                    particular_reimbursable_amount\n                                                                "
                                                                        }
                                                                      }
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
                                                            attrs: {
                                                              color: "primary",
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
                                                          [_vm._v("Cancel")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-btn",
                                                          {
                                                            attrs: {
                                                              color: "primary",
                                                              text: ""
                                                            },
                                                            on: {
                                                              click: _vm.addItem
                                                            }
                                                          },
                                                          [_vm._v("Add")]
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
                                ? _c("template", { slot: "body.append" }, [
                                    _c(
                                      "tr",
                                      {
                                        staticClass:
                                          "green--text hidden-md-and-up"
                                      },
                                      [
                                        _c("td", { staticClass: "title" }, [
                                          _vm._v(
                                            "\n                                        Reimbursable:\n                                        "
                                          ),
                                          _c("strong", [
                                            _vm._v(
                                              _vm._s(_vm.reimbursable_amount)
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("br"),
                                          _vm._v(
                                            "\n                                        Total:\n                                        "
                                          ),
                                          _c("strong", [
                                            _vm._v(_vm._s(_vm.amount))
                                          ])
                                        ])
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
                                        _c("td", { staticClass: "title" }, [
                                          _vm._v("Total")
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c("strong", [
                                            _vm._v(
                                              _vm._s(_vm.reimbursable_amount)
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c("strong", [
                                            _vm._v(_vm._s(_vm.amount))
                                          ])
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
                          _c("v-textarea", {
                            attrs: {
                              rows: "1",
                              label: "Remarks",
                              "error-messages": _vm.errors.remarks
                            },
                            on: {
                              input: function($event) {
                                _vm.errors.remarks = []
                              }
                            },
                            model: {
                              value: _vm.remarks,
                              callback: function($$v) {
                                _vm.remarks = $$v
                              },
                              expression: "remarks"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("small", { staticClass: "text--secondary" }, [
                    _vm._v(
                      "\n                    * indicates required field\n                "
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/components/EditExpense.vue?vue&type=template&id=1e9c3c33&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/expense_reports/components/EditExpense.vue?vue&type=template&id=1e9c3c33& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
          attrs: {
            fullscreen: "",
            "hide-overlay": "",
            transition: "dialog-bottom-transition"
          },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-toolbar",
                { attrs: { dark: "", color: "primary" } },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "", dark: "" },
                      on: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-close")])],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-toolbar-title", [_vm._v("Edit Expense")]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-toolbar-items",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { dark: "", text: "" },
                          on: { click: _vm.onSave }
                        },
                        [_vm._v("Save")]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("EditExpense", {
                key: _vm.id,
                ref: "editExpense",
                attrs: { expense_id: _vm.id },
                on: { editedExpense: _vm.onSaveExpense }
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

/***/ "./resources/js/views/modules/admin/expense_reports/Show.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/Show.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_1aa1b90a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=1aa1b90a& */ "./resources/js/views/modules/admin/expense_reports/Show.vue?vue&type=template&id=1aa1b90a&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/expense_reports/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_1aa1b90a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_1aa1b90a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/expense_reports/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/expense_reports/Show.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/Show.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/expense_reports/Show.vue?vue&type=template&id=1aa1b90a&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/Show.vue?vue&type=template&id=1aa1b90a& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_1aa1b90a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=1aa1b90a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/Show.vue?vue&type=template&id=1aa1b90a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_1aa1b90a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_1aa1b90a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/modules/admin/expense_reports/components/Create.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/components/Create.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_f4abc072___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=f4abc072& */ "./resources/js/views/modules/admin/expense_reports/components/Create.vue?vue&type=template&id=f4abc072&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/expense_reports/components/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_f4abc072___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_f4abc072___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/expense_reports/components/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/expense_reports/components/Create.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/components/Create.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/components/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/expense_reports/components/Create.vue?vue&type=template&id=f4abc072&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/components/Create.vue?vue&type=template&id=f4abc072& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_f4abc072___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=f4abc072& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/components/Create.vue?vue&type=template&id=f4abc072&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_f4abc072___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_f4abc072___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/modules/admin/expense_reports/components/CreateExpense.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/components/CreateExpense.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateExpense_vue_vue_type_template_id_d7af327e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateExpense.vue?vue&type=template&id=d7af327e& */ "./resources/js/views/modules/admin/expense_reports/components/CreateExpense.vue?vue&type=template&id=d7af327e&");
/* harmony import */ var _CreateExpense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateExpense.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/expense_reports/components/CreateExpense.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateExpense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateExpense_vue_vue_type_template_id_d7af327e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CreateExpense_vue_vue_type_template_id_d7af327e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/expense_reports/components/CreateExpense.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/expense_reports/components/CreateExpense.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/components/CreateExpense.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateExpense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateExpense.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/components/CreateExpense.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateExpense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/expense_reports/components/CreateExpense.vue?vue&type=template&id=d7af327e&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/components/CreateExpense.vue?vue&type=template&id=d7af327e& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateExpense_vue_vue_type_template_id_d7af327e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateExpense.vue?vue&type=template&id=d7af327e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/components/CreateExpense.vue?vue&type=template&id=d7af327e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateExpense_vue_vue_type_template_id_d7af327e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateExpense_vue_vue_type_template_id_d7af327e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/modules/admin/expense_reports/components/Edit.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/components/Edit.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_3385a695___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=3385a695& */ "./resources/js/views/modules/admin/expense_reports/components/Edit.vue?vue&type=template&id=3385a695&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/expense_reports/components/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_3385a695___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_3385a695___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/expense_reports/components/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/expense_reports/components/Edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/components/Edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/components/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/expense_reports/components/Edit.vue?vue&type=template&id=3385a695&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/components/Edit.vue?vue&type=template&id=3385a695& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_3385a695___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=3385a695& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/components/Edit.vue?vue&type=template&id=3385a695&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_3385a695___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_3385a695___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/modules/admin/expense_reports/components/EditExpense.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/components/EditExpense.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditExpense_vue_vue_type_template_id_1e9c3c33___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditExpense.vue?vue&type=template&id=1e9c3c33& */ "./resources/js/views/modules/admin/expense_reports/components/EditExpense.vue?vue&type=template&id=1e9c3c33&");
/* harmony import */ var _EditExpense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditExpense.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/expense_reports/components/EditExpense.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditExpense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditExpense_vue_vue_type_template_id_1e9c3c33___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditExpense_vue_vue_type_template_id_1e9c3c33___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/expense_reports/components/EditExpense.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/expense_reports/components/EditExpense.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/components/EditExpense.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditExpense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditExpense.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/components/EditExpense.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditExpense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/expense_reports/components/EditExpense.vue?vue&type=template&id=1e9c3c33&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/expense_reports/components/EditExpense.vue?vue&type=template&id=1e9c3c33& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditExpense_vue_vue_type_template_id_1e9c3c33___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditExpense.vue?vue&type=template&id=1e9c3c33& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/expense_reports/components/EditExpense.vue?vue&type=template&id=1e9c3c33&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditExpense_vue_vue_type_template_id_1e9c3c33___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditExpense_vue_vue_type_template_id_1e9c3c33___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);