(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/vendors/Edit.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/vendors/Edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/vendors/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/vendors/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
>>>>>>> feature/notifications
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
=======
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
>>>>>>> feature/notifications
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
<<<<<<< HEAD
  data: function data() {
    return {
      no_tin: false,
      valid: false,
      selected_expense_types: [],
      expense_types: [],
      form: {
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
        address: ""
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
=======
  props: {},
  data: function data() {
    return {
      loading: true,
      headers: [{
        text: "Name",
        value: "name"
      }, {
        text: "Contact",
        value: "telephone_number"
      }, // { text: "Address", value: "address" },
      {
        text: "TIN",
        value: "tin"
      }, {
        text: "Type",
        value: "is_vat_inclusive"
      }, // { text: "Updated", value: "updated_at" },
      {
        text: "Actions",
        value: "actions",
        sortable: false
      }, {
        text: "",
        value: "data-table-expand"
      }],
      items: [],
      status: "Active",
      statuses: ["Active", "Archived"],
      selected: [],
      search: "",
      totalItems: 0,
      options: {
        sortBy: ["name"],
        sortDesc: [false],
        page: 1,
        itemsPerPage: 10
>>>>>>> feature/notifications
      }
    };
  },
  methods: {
<<<<<<< HEAD
    getData: function getData() {
      var _this = this;

      axios.get("/api/vendors/" + _this.$route.params.id).then(function (response) {
        var data = response.data.data;
        _this.form.code = data.code;
        _this.form.name = data.name;
        _this.form.email = data.email;
        _this.no_tin = data.tin == null ? true : false;
        _this.form.tin = data.tin == null ? "N/A" : data.tin;
        _this.form.contact_person = data.contact_person;
        _this.form.mobile_number = data.mobile_number;
        _this.form.telephone_number = data.telephone_number;
        _this.form.remarks = data.remarks;
        _this.form.website = data.website;
        _this.form.is_vat_inclusive = data.is_vat_inclusive == 1;
        _this.form.address = data.address;
        _this.selected_expense_types = data.expense_types.map(function (item) {
          return item.id;
        });
      })["catch"](function (error) {});
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
    onSave: function onSave() {
      var _this = this;

      _this.$refs.form.validate();

      if (_this.$refs.form.validate()) {
        axios.put("/api/vendors/" + _this.$route.params.id, {
          code: _this.form.code,
          name: _this.form.name,
          email: _this.form.email,
          tin: _this.form.tin == "N/A" ? null : _this.form.tin,
          contact_person: _this.form.contact_person,
          mobile_number: _this.form.mobile_number,
          telephone_number: _this.form.telephone_number,
          remarks: _this.form.remarks,
          website: _this.form.website,
          is_vat_inclusive: _this.form.is_vat_inclusive,
          address: _this.form.address,
          expense_types: _this.selected_expense_types
        }).then(function (response) {
          _this.mixin_successDialog("Success", "Vendor created successfully.");

          _this.$router.push({
            name: "admin.vendors.index"
=======
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

        var search = _this.search.trim().toLowerCase();

        var status = _this.status;
        axios.get("/api/vendors", {
          params: {
            search: search,
            sortBy: sortBy[0],
            sortType: sortDesc[0] ? "desc" : "asc",
            page: page,
            itemsPerPage: itemsPerPage,
            status: status
          }
        }).then(function (response) {
          var items = response.data.data;
          var total = response.data.meta.total;
          _this.loading = false;
          resolve({
            items: items,
            total: total
>>>>>>> feature/notifications
          });
        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);

          _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);

<<<<<<< HEAD
          if (error.response) {
            if (error.response.data) {
              _this.errors = error.response.data.errors;
            }
          }
        });
        return;
      }
    }
  },
  created: function created() {
    // this.loadExpenseTypes();
    this.getData();
  }
=======
          _this.loading = false;
        });
      });
    },
    onRefresh: function onRefresh() {
      Object.assign(this.$data, this.$options.data.apply(this));
      this.selected = [];
    },
    onShow: function onShow(item) {
      this.$router.push({
        name: "admin.vendors.show",
        params: {
          id: item.id
        }
      });
    },
    onEdit: function onEdit(item) {
      this.$router.push({
        name: "admin.vendors.edit",
        params: {
          id: item.id
        }
      });
    },
    onDelete: function onDelete() {
      var _this = this;

      if (_this.selected.length == 0) {
        this.$dialog.message.error("No item(s) selected", {
          position: "top-right",
          timeout: 2000
        });
        return;
      }

      this.$confirm("Move item(s) to archive?").then(function (res) {
        if (res) {
          axios["delete"]("/api/vendors/".concat(_this.selected[0].id), {
            params: {
              ids: _this.selected.map(function (item) {
                return item.id;
              })
            }
          }).then(function (response) {
            _this.$dialog.message.success("Item(s) moved to archive.", {
              position: "top-right",
              timeout: 2000
            });

            _this.getDataFromApi().then(function (data) {
              _this.items = data.items;
              _this.totalItems = data.total;
            });

            _this.selected = [];
          })["catch"](function (error) {
            console.log(error);
            console.log(error.response);

            _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
          });
        }
      });
    },
    onRestore: function onRestore() {
      var _this = this;

      if (_this.selected.length == 0) {
        this.$dialog.message.error("No item(s) selected", {
          position: "top-right",
          timeout: 2000
        });
        return;
      }

      this.$confirm("Do you want to restore account(s)?").then(function (res) {
        if (res) {
          axios.put("/api/vendors/".concat(_this.selected[0].id), {
            ids: _this.selected.map(function (item) {
              return item.id;
            }),
            action: "restore"
          }).then(function (response) {
            _this.$dialog.message.success("Item(s) restored.", {
              position: "top-right",
              timeout: 2000
            });

            _this.getDataFromApi().then(function (data) {
              _this.items = data.items;
              _this.totalItems = data.total;
            });

            _this.selected = [];
          })["catch"](function (error) {
            console.log(error);
            console.log(error.response);

            _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
          });
        }
      });
    }
  },
  watch: {
    params: {
      handler: function handler() {
        var _this3 = this;

        this.getDataFromApi().then(function (data) {
          _this3.items = data.items;
          _this3.totalItems = data.total;
        });
      },
      deep: true
    }
  },
  computed: {
    params: function params(nv) {
      return _objectSpread(_objectSpread({}, this.options), {}, _defineProperty({
        query: this.search
      }, "query", this.status));
    }
  },
  created: function created() {
    this.$store.dispatch("AUTH_NOTIFICATIONS");
  } // mounted() {
  //     this.getDataFromApi().then(data => {
  //         this.items = data.items;
  //         this.totalItems = data.total;
  //     });
  // }

>>>>>>> feature/notifications
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/vendors/Edit.vue?vue&type=template&id=b2828dd6&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/vendors/Edit.vue?vue&type=template&id=b2828dd6& ***!
  \************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/vendors/Index.vue?vue&type=template&id=72d02357&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/vendors/Index.vue?vue&type=template&id=72d02357& ***!
  \*************************************************************************************************************************************************************************************************************************/
>>>>>>> feature/notifications
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
<<<<<<< HEAD
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
                _vm._v("Edit Vendor")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-form",
            { ref: "form" },
            [
              _c(
                "v-container",
                [
                  _c(
                    "v-card",
                    { staticClass: "mx-auto mb-4", attrs: { flat: "" } },
                    [
                      _c(
                        "v-container",
                        [
                          _c("div", { staticClass: "overline green--text" }, [
                            _vm._v(
                              "\n                            BASIC DETAILS\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "9" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      rules: _vm.mixin_validation.required.concat(
                                        _vm.mixin_validation.minLength(150)
                                      ),
                                      counter: 150,
                                      "error-messages": _vm.errors.name,
                                      label: "Name",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.form.name,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "name", $$v)
                                      },
                                      expression: "form.name"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "3" } },
                                [
                                  _c(
                                    "v-radio-group",
                                    {
                                      attrs: { row: "" },
                                      on: {
                                        change: function($event) {
                                          _vm.no_tin = false
                                          _vm.form.tin = ""
                                        }
                                      },
                                      model: {
                                        value: _vm.form.is_vat_inclusive,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "is_vat_inclusive",
                                            $$v
                                          )
                                        },
                                        expression: "form.is_vat_inclusive"
                                      }
                                    },
                                    [
                                      _c("v-radio", {
                                        attrs: { label: "VAT", value: true }
                                      }),
                                      _vm._v(" "),
                                      _c("v-radio", {
                                        attrs: {
                                          label: "Non-VAT",
                                          value: false
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
                                { attrs: { cols: "9", md: "9" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      rules: _vm.mixin_validation.required,
                                      "error-messages": _vm.errors.tin,
                                      counter: 100,
                                      label: "Tax Identification Number (TIN)",
                                      required: "",
                                      readonly: _vm.no_tin
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "append",
                                        fn: function() {
                                          return undefined
                                        },
                                        proxy: true
                                      }
                                    ]),
                                    model: {
                                      value: _vm.form.tin,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "tin", $$v)
                                      },
                                      expression: "form.tin"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "3", md: "3" } },
                                [
                                  _c("v-checkbox", {
                                    attrs: {
                                      label: "N/A",
                                      readonly: _vm.form.is_vat_inclusive
                                    },
                                    on: {
                                      click: function() {
                                        _vm.form.tin = _vm.no_tin ? "N/A" : ""
                                      }
                                    },
                                    model: {
                                      value: _vm.no_tin,
                                      callback: function($$v) {
                                        _vm.no_tin = $$v
                                      },
                                      expression: "no_tin"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              rules: [],
                              "error-messages": _vm.errors.email,
                              label: "Email Address"
                            },
                            model: {
                              value: _vm.form.email,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "email", $$v)
                              },
                              expression: "form.email"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              rules: [],
                              "error-messages": _vm.errors.contact_person,
                              counter: 100,
                              label: "Contact Person"
                            },
                            model: {
                              value: _vm.form.contact_person,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "contact_person", $$v)
                              },
                              expression: "form.contact_person"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              rules: [],
                              counter: 30,
                              "error-messages": _vm.errors.mobile_number,
                              label: "Mobile Number",
                              type: "number"
                            },
                            on: {
                              input: function($event) {
                                _vm.errors.mobile_number = []
                              }
                            },
                            model: {
                              value: _vm.form.mobile_number,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "mobile_number", $$v)
                              },
                              expression: "form.mobile_number"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              rules: [],
                              counter: 30,
                              "error-messages": _vm.errors.telephone_number,
                              label: "Telephone Number",
                              type: "number"
                            },
                            on: {
                              input: function($event) {
                                _vm.errors.telephone_number = []
                              }
                            },
                            model: {
                              value: _vm.form.telephone_number,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "telephone_number", $$v)
                              },
                              expression: "form.telephone_number"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              counter: 100,
                              rules: [],
                              "error-messages": _vm.errors.website,
                              label: "Website"
                            },
                            on: {
                              input: function($event) {
                                _vm.errors.website = []
                              }
                            },
                            model: {
                              value: _vm.form.website,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "website", $$v)
                              },
                              expression: "form.website"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-textarea", {
                            attrs: {
                              rules: _vm.mixin_validation.required,
                              "error-messages": _vm.errors.address,
                              label: "Address",
                              rows: "3"
                            },
                            on: {
                              input: function($event) {
                                _vm.errors.address = []
                              }
                            },
                            model: {
                              value: _vm.form.address,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "address", $$v)
                              },
                              expression: "form.address"
                            }
                          })
=======
              _c("h4", { staticClass: "title green--text" }, [
                _vm._v("Vendors")
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
                      _vm.mixin_can("add vendors")
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
                                          to: { name: "admin.vendors.create" },
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
                                                  "mdi-view-grid-plus-outline"
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
                    [
                      _c(
                        "v-list-item",
                        { on: { click: _vm.onRestore } },
                        [
                          _c(
                            "v-list-item-icon",
                            [_c("v-icon", [_vm._v("mdi-history")])],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-list-item-subtitle", [
                            _vm._v(
                              "\n                            Restore\n                        "
                            )
                          ])
>>>>>>> feature/notifications
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
<<<<<<< HEAD
                        "v-card-actions",
                        [
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "success", dark: "" },
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
=======
                        "v-list-item",
                        { on: { click: _vm.onDelete } },
                        [
                          _c(
                            "v-list-item-icon",
                            [_c("v-icon", [_vm._v("mdi-trash-can-outline")])],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-list-item-subtitle", [
                            _vm._v(
                              "\n                            Move to archive\n                        "
                            )
                          ])
>>>>>>> feature/notifications
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
<<<<<<< HEAD
=======
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
                      key: "item.is_vat_inclusive",
                      fn: function(ref) {
                        var item = ref.item
                        return [
                          _vm._v(
                            "\n                    " +
                              _vm._s(
                                item.is_vat_inclusive == 1 ? "VAT" : "Non-VAT"
                              ) +
                              "\n                "
                          )
                        ]
                      }
                    },
                    {
                      key: "item.tin",
                      fn: function(ref) {
                        var item = ref.item
                        return [
                          _vm._v(
                            "\n                    " +
                              _vm._s(item.tin == null ? "N/A" : item.tin) +
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
                                    _c("td", [_c("strong", [_vm._v("Code")])]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(":")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(item.code))])
                                  ]),
                                  _vm._v(" "),
                                  _c("tr", [
                                    _c("td", [_c("strong", [_vm._v("Email")])]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(":")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(item.email))])
                                  ]),
                                  _vm._v(" "),
                                  _c("tr", [
                                    _c("td", [
                                      _c("strong", [_vm._v("Telephone #")])
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(":")]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(_vm._s(item.telephone_number))
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("tr", [
                                    _c("td", [
                                      _c("strong", [_vm._v("Website")])
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(":")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(item.website))])
                                  ]),
                                  _vm._v(" "),
                                  _c("tr", [
                                    _c("td", [
                                      _c("strong", [_vm._v("Address")])
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(":")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(item.address))])
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
                          _vm.mixin_can("edit vendors")
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
              })
            ],
            1
>>>>>>> feature/notifications
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

<<<<<<< HEAD
/***/ "./resources/js/views/modules/admin/vendors/Edit.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/modules/admin/vendors/Edit.vue ***!
  \***********************************************************/
=======
/***/ "./resources/js/views/modules/admin/vendors/Index.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/modules/admin/vendors/Index.vue ***!
  \************************************************************/
>>>>>>> feature/notifications
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _Edit_vue_vue_type_template_id_b2828dd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=b2828dd6& */ "./resources/js/views/modules/admin/vendors/Edit.vue?vue&type=template&id=b2828dd6&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/vendors/Edit.vue?vue&type=script&lang=js&");
=======
/* harmony import */ var _Index_vue_vue_type_template_id_72d02357___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=72d02357& */ "./resources/js/views/modules/admin/vendors/Index.vue?vue&type=template&id=72d02357&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/vendors/Index.vue?vue&type=script&lang=js&");
>>>>>>> feature/notifications
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
<<<<<<< HEAD
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_b2828dd6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_b2828dd6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_72d02357___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_72d02357___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> feature/notifications
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/views/modules/admin/vendors/Edit.vue"
=======
component.options.__file = "resources/js/views/modules/admin/vendors/Index.vue"
>>>>>>> feature/notifications
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/views/modules/admin/vendors/Edit.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/vendors/Edit.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
=======
/***/ "./resources/js/views/modules/admin/vendors/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/vendors/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
>>>>>>> feature/notifications
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/vendors/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/vendors/Edit.vue?vue&type=template&id=b2828dd6&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/vendors/Edit.vue?vue&type=template&id=b2828dd6& ***!
  \******************************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/vendors/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/vendors/Index.vue?vue&type=template&id=72d02357&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/vendors/Index.vue?vue&type=template&id=72d02357& ***!
  \*******************************************************************************************/
>>>>>>> feature/notifications
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_b2828dd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=b2828dd6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/vendors/Edit.vue?vue&type=template&id=b2828dd6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_b2828dd6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_b2828dd6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_72d02357___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=72d02357& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/vendors/Index.vue?vue&type=template&id=72d02357&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_72d02357___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_72d02357___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> feature/notifications



/***/ })

}]);