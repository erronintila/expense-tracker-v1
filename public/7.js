(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/Show.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/expense_reports/Show.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_daterangepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/daterangepicker/DateRangePicker */ "./resources/js/components/daterangepicker/DateRangePicker.vue");
/* harmony import */ var _components_CreateExpense__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/CreateExpense */ "./resources/js/views/modules/user/expense_reports/components/CreateExpense.vue");
/* harmony import */ var _components_EditExpense__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/EditExpense */ "./resources/js/views/modules/user/expense_reports/components/EditExpense.vue");
/* harmony import */ var _components_PrintDetailed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/PrintDetailed */ "./resources/js/views/modules/user/expense_reports/components/PrintDetailed.vue");
/* harmony import */ var _components_PrintSummary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/PrintSummary */ "./resources/js/views/modules/user/expense_reports/components/PrintSummary.vue");
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
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DateRangePicker: _components_daterangepicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_2__["default"],
    CreateExpense: _components_CreateExpense__WEBPACK_IMPORTED_MODULE_3__["default"],
    EditExpense: _components_EditExpense__WEBPACK_IMPORTED_MODULE_4__["default"],
    PrintDetailed: _components_PrintDetailed__WEBPACK_IMPORTED_MODULE_5__["default"],
    PrintSummary: _components_PrintSummary__WEBPACK_IMPORTED_MODULE_6__["default"]
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
        text: "Actions",
        value: "actions",
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
    getCurrentUser: function getCurrentUser() {
      var _this = this;

      axios.get("/api/user").then(function (response) {// _this.user = response.data.data;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);
      });
    },
    updateDates: function updateDates(e) {
      this.date_range = e; // this.loadExpenses(this.employee);
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
        _this.employee = "".concat(data.employee.last_name, ", ").concat(data.employee.first_name, " ").concat(data.employee.suffix);
        _this.status = data.status;
        _this.items = data.expenses;
        _this.expenses = data.expenses;
        _this.submitted_at = data.submitted_at;
        _this.reviewed_at = data.reviewed_at;
        _this.approved_at = data.approved_at;
        _this.cancelled_at = data.cancelled_at;
        _this.created_at = data.created_at;
        _this.updated_at = data.updated_at;
        _this.deleted_at = data.deleted_at;
        _this.total = data.total;

        (_this$selected = _this.selected).splice.apply(_this$selected, [0, 0].concat(_toConsumableArray(data.expenses))); // _this.loadExpenses(data.employee.id);

      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

        _this.errorDialog("Error ".concat(error.response.status), error.response.statusText);
      });
    },
    // loadExpenses(emp_id) {
    //     let start_date = this.date_range[0];
    //     let end_date = this.date_range[1];
    //     let _this = this;
    //     axios
    //         .get("/api/data/expenses", {
    //             params: {
    //                 update_report: true,
    //                 employee_id: emp_id,
    //                 start_date: start_date,
    //                 end_date: end_date,
    //                 expense_report_id: _this.$route.params.id
    //             }
    //         })
    //         .then(response => {
    //             _this.items = response.data.data;
    //         })
    //         .catch(error => {
    //             console.log(error);
    //             console.log(error.response);
    //         });
    // },
    onEdit: function onEdit() {
      this.$router.push({
        name: "user.expense_reports.edit",
        params: {
          id: this.$route.params.id
        }
      });
    } // formatNumber(data) {
    //     return numeral(data).format("0,0.00");
    // },
    // formatDate(date, format) {
    //     return date == null ? "" : moment(date).format(format);
    // },

  },
  watch: {
    selected: function selected() {
      this.total = this.selected.reduce(function (total, item) {
        return total + item.amount;
      }, 0);
    }
  },
  created: function created() {
    // axios.defaults.headers.common["Authorization"] =
    //     "Bearer " + localStorage.getItem("access_token");
    this.getCurrentUser();
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/components/CreateExpense.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/expense_reports/components/CreateExpense.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    employeeid: {
      type: Number,
      "default": 0
    }
  },
  data: function data() {
    return {
      dialogDetail: false,
      dialog: false,
      valid: false,
      menu: false,
      code: null,
      description: null,
      amount: 0,
      receipt_number: null,
      date: null,
      remarks: "",
      is_active: true,
      expense_type: null,
      expense_types: [],
      employee: null,
      employees: [],
      vendor: null,
      vendors: [],
      particular: "",
      particular_amount: 0,
      rules: {
        description: [function (v) {
          return !!v || "Description is required";
        }],
        amount: [function (v) {
          return !!v || "Amount is required";
        }],
        receipt_number: [function (v) {
          return !!v || "Receipt Number is required";
        }],
        date: [function (v) {
          return !!v || "Date is required";
        }],
        remarks: [],
        is_active: [],
        expense_type: [function (v) {
          return !!v || "Expense Type is required";
        }],
        vendor: [function (v) {
          return !!v || "Vendor is required";
        }]
      },
      errors: {
        description: [],
        amount: [],
        receipt_number: [],
        date: [],
        remarks: [],
        is_active: [],
        expense_type_id: [],
        vendor_id: []
      },
      headers: [{
        text: "Particulars",
        value: "particular",
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
      items: []
    };
  },
  methods: {
    getCurrentUser: function getCurrentUser() {
      var _this = this;

      axios.get("/api/user").then(function (response) {// _this.user = response.data.data;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);
      });
    },
    openDialog: function openDialog() {
      this.dialog = true;
    },
    loadExpenseTypes: function loadExpenseTypes() {
      var _this = this;

      axios.get("/api/data/expense_types").then(function (response) {
        _this.expense_types = response.data.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    loadVendors: function loadVendors() {
      var _this = this;

      axios.get("/api/data/vendors").then(function (response) {
        _this.vendors = response.data.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    onRefresh: function onRefresh() {
      Object.assign(this.$data, this.$options.data.apply(this));
      this.$refs.form.resetValidation();
      this.loadExpenseTypes();
      this.loadVendors();
    },
    onSave: function onSave() {
      var _this = this;

      _this.$refs.form.validate();

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
          receipt_number: _this.receipt_number,
          date: _this.date,
          remarks: _this.remarks,
          is_active: _this.is_active,
          expense_type_id: _this.expense_type,
          employee_id: _this.employeeid,
          vendor_id: _this.vendor,
          expense_details: _this.items
        }).then(function (response) {
          _this.onRefresh();

          _this.$dialog.message.success("Expense created successfully.", {
            position: "top-right",
            timeout: 2000
          });

          _this.$emit("onSaveExpense");

          _this.dialog = false;
        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);
          _this.errors = error.response.data.errors;
        });
        return;
      }
    },
    addItem: function addItem() {
      this.items.push({
        particular: this.particular,
        particular_amount: this.particular_amount
      });
      this.dialogDetail = false;
      this.particular = "";
      this.particular_amount = 0;
    },
    onRemove: function onRemove(item) {
      var index = this.items.indexOf(item);
      confirm("Are you sure you want to remove this item?") && this.items.splice(index, 1);
    }
  },
  watch: {
    items: function items() {
      this.amount = this.items.reduce(function (total, item) {
        return parseFloat(total) + parseFloat(item.particular_amount);
      }, 0);
    }
  },
  created: function created() {
    // axios.defaults.headers.common["Authorization"] =
    //     "Bearer " + localStorage.getItem("access_token");
    this.getCurrentUser();
    this.loadExpenseTypes();
    this.loadVendors();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/components/EditExpense.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/expense_reports/components/EditExpense.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    employeeid: {
      type: Number,
      "default": 0
    }
  },
  data: function data() {
    return {
      dialogDetail: false,
      dialog: false,
      valid: false,
      menu: false,
      id: null,
      code: null,
      description: null,
      amount: 0,
      receipt_number: null,
      date: null,
      remarks: "",
      is_active: true,
      expense_type: null,
      expense_types: [],
      employee: null,
      employees: [],
      vendor: null,
      vendors: [],
      particular: "",
      particular_amount: 0,
      headers: [{
        text: "Particulars",
        value: "description",
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
        description: [function (v) {
          return !!v || "Description is required";
        }],
        amount: [function (v) {
          return !!v || "Amount is required";
        }],
        receipt_number: [function (v) {
          return !!v || "Receipt Number is required";
        }],
        date: [function (v) {
          return !!v || "Date is required";
        }],
        remarks: [],
        is_active: [],
        expense_type: [function (v) {
          return !!v || "Expense Type is required";
        }],
        vendor: [function (v) {
          return !!v || "Vendor is required";
        }]
      },
      errors: {
        description: [],
        amount: [],
        receipt_number: [],
        date: [],
        remarks: [],
        is_active: [],
        expense_type_id: [],
        vendor_id: []
      }
    };
  },
  methods: {
    getCurrentUser: function getCurrentUser() {
      var _this = this;

      axios.get("/api/user").then(function (response) {// _this.user = response.data.data;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);
      });
    },
    openDialog: function openDialog(item) {
      var _this = this;

      _this.dialog = true;
      axios.get("/api/expenses/" + item.id).then(function (response) {
        var data = response.data.data;
        _this.id = data.id;
        _this.code = data.code;
        _this.description = data.description;
        _this.amount = data.amount;
        _this.receipt_number = data.receipt_number;
        _this.date = data.date;
        _this.remarks = data.remarks;
        _this.is_active = data.is_active;
        _this.expense_type = data.expense_type.id;
        _this.employee = data.employee.id;
        _this.vendor = data.vendor.id;
        _this.items = data.expense_details;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    loadExpenseTypes: function loadExpenseTypes() {
      var _this = this;

      axios.get("/api/data/expense_types").then(function (response) {
        _this.expense_types = response.data.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    loadVendors: function loadVendors() {
      var _this = this;

      axios.get("/api/data/vendors").then(function (response) {
        _this.vendors = response.data.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    onRefresh: function onRefresh() {
      Object.assign(this.$data, this.$options.data.apply(this));
      this.$refs.form.resetValidation();
      this.loadExpenseTypes();
      this.loadVendors();
    },
    onSave: function onSave() {
      var _this = this;

      _this.$refs.form.validate();

      if (this.items.length == 0) {
        _this.$dialog.message.error("No Expense detail added", {
          position: "top-right",
          timeout: 2000
        });

        return;
      }

      if (_this.$refs.form.validate()) {
        axios.put("/api/expenses/" + _this.id, {
          code: _this.code,
          description: _this.description,
          amount: _this.amount,
          receipt_number: _this.receipt_number,
          date: _this.date,
          remarks: _this.remarks,
          is_active: _this.is_active,
          expense_type_id: _this.expense_type,
          employee_id: _this.employeeid,
          vendor_id: _this.vendor,
          expense_details: _this.items
        }).then(function (response) {
          _this.onRefresh();

          _this.$dialog.message.success("Expense updated successfully.", {
            position: "top-right",
            timeout: 2000
          });

          _this.$emit("onSaveExpense");

          _this.dialog = false;
        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);
          _this.errors = error.response.data.errors;
        });
        return;
      }
    },
    addItem: function addItem() {
      this.items.push({
        id: null,
        description: this.particular,
        amount: this.particular_amount
      });
      this.dialogDetail = false;
      this.particular = "";
      this.particular_amount = 0;
    },
    onRemove: function onRemove(item) {
      var index = this.items.indexOf(item);
      confirm("Are you sure you want to remove this item?") && this.items.splice(index, 1);
    }
  },
  watch: {
    items: function items() {
      this.amount = this.items.reduce(function (total, item) {
        return parseFloat(total) + parseFloat(item.amount);
      }, 0);
    }
  },
  created: function created() {
    // axios.defaults.headers.common["Authorization"] =
    //     "Bearer " + localStorage.getItem("access_token");
    this.getCurrentUser();
    this.loadExpenseTypes();
    this.loadVendors();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/Show.vue?vue&type=template&id=24329f7e&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/expense_reports/Show.vue?vue&type=template&id=24329f7e& ***!
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
                            attrs: { label: "Employee", required: "" },
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
                            attrs: { label: "Description", required: "" },
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
                                "show-expand": "",
                                "single-expand": "",
                                "disable-pagination": "",
                                "item-key": "id"
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
                                              "\n                                    mdi-eye\n                                "
                                            )
                                          ]
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
                            to: { name: "user.expense_reports.print" }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/components/CreateExpense.vue?vue&type=template&id=326fd487&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/expense_reports/components/CreateExpense.vue?vue&type=template&id=326fd487& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
                    "v-card-text",
                    [
                      _c(
                        "v-tabs",
                        [
                          _c("v-tab", [_vm._v("Basic Info")]),
                          _vm._v(" "),
                          _c("v-tab", [_vm._v("Expense Details")]),
                          _vm._v(" "),
                          _c(
                            "v-tab-item",
                            [
                              _c(
                                "v-card",
                                { attrs: { flat: "" } },
                                [
                                  _c(
                                    "v-container",
                                    [
                                      _c(
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "4" } },
                                            [
                                              _c("v-autocomplete", {
                                                attrs: {
                                                  rules: _vm.rules.expense_type,
                                                  items: _vm.expense_types,
                                                  "error-messages":
                                                    _vm.errors.expense_type_id,
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
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "8" } },
                                            [
                                              _c("v-autocomplete", {
                                                attrs: {
                                                  rules: _vm.rules.vendor,
                                                  items: _vm.vendors,
                                                  "error-messages":
                                                    _vm.errors.vendor_id,
                                                  "item-value": "id",
                                                  "item-text": "name",
                                                  label: "Vendor *",
                                                  required: ""
                                                },
                                                on: {
                                                  input: function($event) {
                                                    _vm.errors.vendor_id = []
                                                  }
                                                },
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
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", md: "4" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  rules:
                                                    _vm.rules.receipt_number,
                                                  "error-messages":
                                                    _vm.errors.receipt_number,
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
                                                    transition:
                                                      "scale-transition",
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
                                                                      _vm.rules
                                                                        .date,
                                                                    "error-messages":
                                                                      _vm.errors
                                                                        .date,
                                                                    label:
                                                                      "Date *",
                                                                    readonly: ""
                                                                  },
                                                                  on: {
                                                                    input: function(
                                                                      $event
                                                                    ) {
                                                                      _vm.errors.date = []
                                                                    }
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      _vm.date,
                                                                    callback: function(
                                                                      $$v
                                                                    ) {
                                                                      _vm.date = $$v
                                                                    },
                                                                    expression:
                                                                      "date"
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
                                              _c("v-textarea", {
                                                attrs: {
                                                  rows: "1",
                                                  label: "Remarks",
                                                  "error-messages":
                                                    _vm.errors.remarks
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
                                      _c(
                                        "small",
                                        { staticClass: "text--secondary" },
                                        [
                                          _vm._v(
                                            "\n                                        * indicates required field\n                                    "
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
                            "v-tab-item",
                            [
                              _c(
                                "v-card",
                                { attrs: { flat: "" } },
                                [
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
                                                  itemsPerPageOptions: [
                                                    5,
                                                    10,
                                                    20
                                                  ]
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
                                                            _vm._v(
                                                              "\n                                                    Expense Details\n                                                    "
                                                            ),
                                                            _c("v-spacer"),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-dialog",
                                                              {
                                                                attrs: {
                                                                  "max-width":
                                                                    "500px"
                                                                },
                                                                scopedSlots: _vm._u(
                                                                  [
                                                                    {
                                                                      key:
                                                                        "activator",
                                                                      fn: function(
                                                                        ref
                                                                      ) {
                                                                        var on =
                                                                          ref.on
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
                                                                                "New\n                                                                Item"
                                                                              )
                                                                            ]
                                                                          )
                                                                        ]
                                                                      }
                                                                    }
                                                                  ]
                                                                ),
                                                                model: {
                                                                  value:
                                                                    _vm.dialogDetail,
                                                                  callback: function(
                                                                    $$v
                                                                  ) {
                                                                    _vm.dialogDetail = $$v
                                                                  },
                                                                  expression:
                                                                    "\n                                                            dialogDetail\n                                                        "
                                                                }
                                                              },
                                                              [
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-card",
                                                                  [
                                                                    _c(
                                                                      "v-card-title"
                                                                    ),
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
                                                                                            _vm.particular,
                                                                                          callback: function(
                                                                                            $$v
                                                                                          ) {
                                                                                            _vm.particular = $$v
                                                                                          },
                                                                                          expression:
                                                                                            "\n                                                                                    particular\n                                                                                "
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
                                                                                        "12"
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
                                                                                            "\n                                                                                    particular_amount\n                                                                                "
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
                                                                        _c(
                                                                          "v-spacer"
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "v-btn",
                                                                          {
                                                                            attrs: {
                                                                              color:
                                                                                "primary",
                                                                              text:
                                                                                ""
                                                                            },
                                                                            on: {
                                                                              click: function(
                                                                                $event
                                                                              ) {
                                                                                _vm.dialogDetail = false
                                                                              }
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "Cancel"
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "v-btn",
                                                                          {
                                                                            attrs: {
                                                                              color:
                                                                                "primary",
                                                                              text:
                                                                                ""
                                                                            },
                                                                            on: {
                                                                              click:
                                                                                _vm.addItem
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "Add"
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
                                                            attrs: {
                                                              small: ""
                                                            },
                                                            on: {
                                                              click: function() {
                                                                _vm.onRemove(
                                                                  item
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                    mdi-delete\n                                                "
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
                                                            {
                                                              staticClass:
                                                                "title"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                        Total:\n                                                        "
                                                              ),
                                                              _c("strong", [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm.amount
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
                                                            {
                                                              staticClass:
                                                                "title"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                        Total\n                                                    "
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("td", [
                                                            _c("strong", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm.amount
                                                                )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/components/EditExpense.vue?vue&type=template&id=cd5f390e&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/user/expense_reports/components/EditExpense.vue?vue&type=template&id=cd5f390e& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
                    "v-card-text",
                    [
                      _c(
                        "v-tabs",
                        [
                          _c("v-tab", [_vm._v("Basic Info")]),
                          _vm._v(" "),
                          _c("v-tab", [_vm._v("Expense Details")]),
                          _vm._v(" "),
                          _c(
                            "v-tab-item",
                            [
                              _c(
                                "v-container",
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "4" } },
                                        [
                                          _c("v-autocomplete", {
                                            attrs: {
                                              rules: _vm.rules.expense_type,
                                              items: _vm.expense_types,
                                              "error-messages":
                                                _vm.errors.expense_type_id,
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
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "8" } },
                                        [
                                          _c("v-autocomplete", {
                                            attrs: {
                                              rules: _vm.rules.vendor,
                                              items: _vm.vendors,
                                              "error-messages":
                                                _vm.errors.vendor_id,
                                              "item-value": "id",
                                              "item-text": "name",
                                              label: "Vendor *",
                                              required: ""
                                            },
                                            on: {
                                              input: function($event) {
                                                _vm.errors.vendor_id = []
                                              }
                                            },
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
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "4" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              rules: _vm.rules.receipt_number,
                                              "error-messages":
                                                _vm.errors.receipt_number,
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
                                                                rules:
                                                                  _vm.rules
                                                                    .date,
                                                                "error-messages":
                                                                  _vm.errors
                                                                    .date,
                                                                label: "Date *",
                                                                readonly: ""
                                                              },
                                                              on: {
                                                                input: function(
                                                                  $event
                                                                ) {
                                                                  _vm.errors.date = []
                                                                }
                                                              },
                                                              model: {
                                                                value: _vm.date,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.date = $$v
                                                                },
                                                                expression:
                                                                  "date"
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
                                        { attrs: { cols: "12", md: "4" } },
                                        [
                                          _c("v-textarea", {
                                            attrs: {
                                              rows: "1",
                                              label: "Remarks",
                                              "error-messages":
                                                _vm.errors.remarks
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
                                  _c(
                                    "small",
                                    { staticClass: "text--secondary" },
                                    [
                                      _vm._v(
                                        "\n                                    * indicates required field\n                                "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-tab-item",
                            [
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
                                                        attrs: {
                                                          flat: "",
                                                          color: "white"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                                Expense Details\n                                                "
                                                        ),
                                                        _c("v-spacer"),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-dialog",
                                                          {
                                                            attrs: {
                                                              "max-width":
                                                                "500px"
                                                            },
                                                            scopedSlots: _vm._u(
                                                              [
                                                                {
                                                                  key:
                                                                    "activator",
                                                                  fn: function(
                                                                    ref
                                                                  ) {
                                                                    var on =
                                                                      ref.on
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
                                                              ]
                                                            ),
                                                            model: {
                                                              value:
                                                                _vm.dialogDetail,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.dialogDetail = $$v
                                                              },
                                                              expression:
                                                                "dialogDetail"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-card",
                                                              [
                                                                _c(
                                                                  "v-card-title"
                                                                ),
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
                                                                                        _vm.particular,
                                                                                      callback: function(
                                                                                        $$v
                                                                                      ) {
                                                                                        _vm.particular = $$v
                                                                                      },
                                                                                      expression:
                                                                                        "\n                                                                                particular\n                                                                            "
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
                                                                                    "12"
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
                                                                                        "\n                                                                                particular_amount\n                                                                            "
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
                                                                    _c(
                                                                      "v-spacer"
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "v-btn",
                                                                      {
                                                                        attrs: {
                                                                          color:
                                                                            "primary",
                                                                          text:
                                                                            ""
                                                                        },
                                                                        on: {
                                                                          click: function(
                                                                            $event
                                                                          ) {
                                                                            _vm.dialogDetail = false
                                                                          }
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "Cancel"
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
                                                                          text:
                                                                            ""
                                                                        },
                                                                        on: {
                                                                          click:
                                                                            _vm.addItem
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "Add"
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
                                                          "\n                                                mdi-delete\n                                            "
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
                                                        {
                                                          staticClass: "title"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                    Total:\n                                                    "
                                                          ),
                                                          _c("strong", [
                                                            _vm._v(
                                                              _vm._s(_vm.amount)
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
                                                        {
                                                          staticClass: "title"
                                                        },
                                                        [_vm._v("Total")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _c("strong", [
                                                          _vm._v(
                                                            _vm._s(_vm.amount)
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

/***/ "./resources/js/views/modules/user/expense_reports/Show.vue":
/*!******************************************************************!*\
  !*** ./resources/js/views/modules/user/expense_reports/Show.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_24329f7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=24329f7e& */ "./resources/js/views/modules/user/expense_reports/Show.vue?vue&type=template&id=24329f7e&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/user/expense_reports/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_24329f7e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_24329f7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/user/expense_reports/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/user/expense_reports/Show.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/modules/user/expense_reports/Show.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/user/expense_reports/Show.vue?vue&type=template&id=24329f7e&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/modules/user/expense_reports/Show.vue?vue&type=template&id=24329f7e& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_24329f7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=24329f7e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/Show.vue?vue&type=template&id=24329f7e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_24329f7e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_24329f7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/modules/user/expense_reports/components/CreateExpense.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/modules/user/expense_reports/components/CreateExpense.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateExpense_vue_vue_type_template_id_326fd487___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateExpense.vue?vue&type=template&id=326fd487& */ "./resources/js/views/modules/user/expense_reports/components/CreateExpense.vue?vue&type=template&id=326fd487&");
/* harmony import */ var _CreateExpense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateExpense.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/user/expense_reports/components/CreateExpense.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateExpense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateExpense_vue_vue_type_template_id_326fd487___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CreateExpense_vue_vue_type_template_id_326fd487___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/user/expense_reports/components/CreateExpense.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/user/expense_reports/components/CreateExpense.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/views/modules/user/expense_reports/components/CreateExpense.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateExpense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateExpense.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/components/CreateExpense.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateExpense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/user/expense_reports/components/CreateExpense.vue?vue&type=template&id=326fd487&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/views/modules/user/expense_reports/components/CreateExpense.vue?vue&type=template&id=326fd487& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateExpense_vue_vue_type_template_id_326fd487___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateExpense.vue?vue&type=template&id=326fd487& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/components/CreateExpense.vue?vue&type=template&id=326fd487&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateExpense_vue_vue_type_template_id_326fd487___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateExpense_vue_vue_type_template_id_326fd487___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/modules/user/expense_reports/components/EditExpense.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/views/modules/user/expense_reports/components/EditExpense.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditExpense_vue_vue_type_template_id_cd5f390e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditExpense.vue?vue&type=template&id=cd5f390e& */ "./resources/js/views/modules/user/expense_reports/components/EditExpense.vue?vue&type=template&id=cd5f390e&");
/* harmony import */ var _EditExpense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditExpense.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/user/expense_reports/components/EditExpense.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditExpense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditExpense_vue_vue_type_template_id_cd5f390e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditExpense_vue_vue_type_template_id_cd5f390e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/user/expense_reports/components/EditExpense.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/user/expense_reports/components/EditExpense.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/views/modules/user/expense_reports/components/EditExpense.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditExpense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditExpense.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/components/EditExpense.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditExpense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/user/expense_reports/components/EditExpense.vue?vue&type=template&id=cd5f390e&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/views/modules/user/expense_reports/components/EditExpense.vue?vue&type=template&id=cd5f390e& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditExpense_vue_vue_type_template_id_cd5f390e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditExpense.vue?vue&type=template&id=cd5f390e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/user/expense_reports/components/EditExpense.vue?vue&type=template&id=cd5f390e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditExpense_vue_vue_type_template_id_cd5f390e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditExpense_vue_vue_type_template_id_cd5f390e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);