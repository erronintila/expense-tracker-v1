(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/jobs/Create.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/jobs/Create.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
<<<<<<< HEAD
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



=======
>>>>>>> feature/employee-user-fix
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      valid: false,
      form: {
        name: "",
        department: null
      },
      errors: {
        name: [],
        department_id: []
      },
      departments: []
    };
  },
  methods: {
    loadDepartments: function loadDepartments() {
      var _this = this;

      axios.get("/api/data/departments").then(function (response) {
        var data = response.data.data.map(function (item) {
          return {
            id: item.id,
            name: item.name
          };
        });
        _this.departments = data;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

        _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
      });
    },
    onSave: function onSave() {
      var _this = this;

      _this.$refs.form.validate();

<<<<<<< HEAD
      if (_this.amount_to_replenish > _this.form.employee.remaining_fund) {
        _this.$dialog.message.error("Amount to replenish is greater than remaining fund", {
          position: "top-right",
          timeout: 2000
        });

        return;
      }

      if (_this.amount_to_replenish + _this.amount_to_reimburse < this.form.amount) {
        _this.mixin_errorDialog("Error", "Expense Amount is greater than amount to replenish/reimburse");

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
          reimbursable_amount: _this.amount_to_reimburse,
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
=======
      if (_this.$refs.form.validate()) {
        axios.post("/api/jobs", {
          name: _this.form.name,
          department_id: _this.form.department
>>>>>>> feature/employee-user-fix
        }).then(function (response) {
          _this.$dialog.message.success("Job designation created successfully.", {
            position: "top-right",
            timeout: 2000
          });

          _this.$router.push({
            name: "admin.jobs.index"
          });
        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);

          _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);

          if (error.response) {
            if (error.response.data) {
              _this.errors = error.response.data.errors;
            }
          }
        });
        return;
      }
<<<<<<< HEAD
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
=======
>>>>>>> feature/employee-user-fix
    }
  },
  created: function created() {
    this.loadDepartments();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/jobs/Create.vue?vue&type=template&id=478c2f3e&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/jobs/Create.vue?vue&type=template&id=478c2f3e& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
                _vm._v("New Job Designation")
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
                    "v-row",
                    [
                      _c(
                        "v-col",
                        {
                          staticClass: "d-flex",
                          attrs: { cols: "12", sm: "6" }
                        },
                        [
                          _c("v-autocomplete", {
                            attrs: {
                              items: _vm.departments,
                              rules: _vm.mixin_validation.required,
                              "error-messages": _vm.errors.department_id,
                              "item-value": "id",
                              "item-text": "name",
                              label: "Department *"
                            },
                            on: {
                              input: function($event) {
                                _vm.errors.department_id = []
                              }
                            },
                            model: {
                              value: _vm.form.department,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "department", $$v)
                              },
                              expression: "form.department"
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
                              rules: _vm.mixin_validation.required.concat(
                                _vm.mixin_validation.minLength(100)
                              ),
<<<<<<< HEAD
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
=======
                              counter: 100,
                              "error-messages": _vm.errors.name,
                              label: "Name *",
                              required: ""
                            },
                            on: {
                              input: function($event) {
                                _vm.errors.name = []
                              }
                            },
                            model: {
                              value: _vm.form.name,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "name", $$v)
                              },
                              expression: "form.name"
                            }
                          })
>>>>>>> feature/employee-user-fix
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
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/modules/admin/jobs/Create.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/modules/admin/jobs/Create.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_478c2f3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=478c2f3e& */ "./resources/js/views/modules/admin/jobs/Create.vue?vue&type=template&id=478c2f3e&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/jobs/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_478c2f3e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_478c2f3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/jobs/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/jobs/Create.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/modules/admin/jobs/Create.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/jobs/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/jobs/Create.vue?vue&type=template&id=478c2f3e&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/jobs/Create.vue?vue&type=template&id=478c2f3e& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_478c2f3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=478c2f3e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/jobs/Create.vue?vue&type=template&id=478c2f3e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_478c2f3e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_478c2f3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);