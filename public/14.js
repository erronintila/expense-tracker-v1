(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/employees/Show.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/employees/Show.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! randomcolor */ "./node_modules/randomcolor/randomColor.js");
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(randomcolor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      start_date: moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("month").format("ll"),
      end_date: moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("month").format("ll"),
      total_expenses: 0,
      total_replenishments: 0,
      total_reimbursements: 0,
      total_pending_reports: 0,
      selection: 1,
      panel: 0,
      id: "",
      fullname: "",
      first_name: "",
      middle_name: "",
      last_name: "",
      suffix: "",
      gender: "",
      birthdate: "",
      mobile_number: "",
      telephone_number: "",
      email: "",
      address: "",
      fund: 0,
      remaining_fund: 0,
      job: "",
      department: "",
      headers: [{
        text: "Permission",
        value: "name",
        sortable: false
      }],
      permissions: [],
      user: {
        username: "",
        is_admin: false
      }
    };
  },
  methods: {
    validateFund: function validateFund() {
      var _this = this;

      axios.get("/api/data/validateFund?id=".concat(this.id)).then(function (response) {
        _this.getData();
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);
      });
    },
    getData: function getData() {
      var _this = this;

      axios.get("/api/employees/".concat(_this.$route.params.id)).then(function (response) {
        var data = response.data.data;
        _this.id = data.id;
        _this.fullname = data.fullname;
        _this.first_name = data.first_name;
        _this.middle_name = data.middle_name;
        _this.last_name = data.last_name;
        _this.suffix = data.suffix;
        _this.gender = data.gender;
        _this.birthdate = data.birthdate;
        _this.mobile_number = data.mobile_number;
        _this.telephone_number = data.telephone_number;
        _this.email = data.email;
        _this.address = data.address;
        _this.fund = data.fund;
        _this.remaining_fund = data.remaining_fund;
        _this.job = data.job.name;
        _this.department = data.department.name;
        _this.permissions = data.permissions;
        _this.user = data.user;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

        _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
      });
    },
    editEmployee: function editEmployee() {
      this.$router.push({
        name: "admin.employees.edit",
        params: {
          id: this.$route.params.id
        }
      });
    },
    getExpenseStats: function getExpenseStats() {
      var _this = this;

      var start_date = moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("month").format("YYYY-MM-DD");
      var end_date = moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("month").format("YYYY-MM-DD");
      var employee_id = this.$route.params.id;
      axios.get("/api/data/expense_stats?start_date=".concat(start_date, "&end_date=").concat(end_date, "&employee_id=").concat(employee_id)).then(function (response) {
        _this.total_expenses = response.data.summary.total;
        _this.total_replenishments = response.data.summary.replenishments;
        _this.total_reimbursements = response.data.summary.reimbursements;
        _this.total_pending_reports = response.data.summary.pending;
      })["catch"](function (error) {
        console.log(error);
        console.log(error.response);

        _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
      });
    }
  },
  created: function created() {
    this.$store.dispatch("AUTH_USER");
    this.getData();
    this.getExpenseStats();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/employees/Show.vue?vue&type=template&id=912b22a4&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/employees/Show.vue?vue&type=template&id=912b22a4& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
                _vm._v("Employee Details")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "6" } },
                    [
                      _c("v-hover", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var hover = ref.hover
                              return [
                                _c(
                                  "v-card",
                                  {
                                    staticClass: "mx-auto mt-3",
                                    attrs: {
                                      outlined: "",
                                      elevation: hover ? 5 : 2
                                    }
                                  },
                                  [
                                    _c(
                                      "v-card-text",
                                      [
                                        _c(
                                          "v-row",
                                          [
                                            _c(
                                              "v-col",
                                              {
                                                attrs: { cols: "12", sm: "5" }
                                              },
                                              [
                                                _c(
                                                  "v-avatar",
                                                  {
                                                    staticClass: "profile",
                                                    attrs: {
                                                      color: "grey",
                                                      size: "200"
                                                    }
                                                  },
                                                  [
                                                    _c("v-img", {
                                                      attrs: {
                                                        src: __webpack_require__(/*! ../../../../assets/img/user.png */ "./resources/js/assets/img/user.png")
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
                                              {
                                                attrs: { cols: "12", sm: "7" }
                                              },
                                              [
                                                _c("div", [
                                                  _vm._v(
                                                    "\n                                            " +
                                                      _vm._s(_vm.department) +
                                                      "\n                                        "
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "h3",
                                                  {
                                                    staticClass:
                                                      "display-1 green--text"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                            " +
                                                        _vm._s(
                                                          (_vm.last_name ||
                                                            "") +
                                                            ", " +
                                                            (_vm.first_name ||
                                                              "") +
                                                            " " +
                                                            (_vm.suffix || "")
                                                        ) +
                                                        "\n                                        "
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("p", [
                                                  _vm._v(_vm._s(_vm.job))
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "text--primary"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                            " +
                                                        _vm._s(
                                                          _vm.mobile_number
                                                        )
                                                    ),
                                                    _c("br"),
                                                    _vm._v(
                                                      "\n                                            " +
                                                        _vm._s(_vm.email) +
                                                        "\n                                        "
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("div", [
                                                  _vm._v(
                                                    "\n                                            Revolving Fund:\n                                        "
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "v-btn",
                                                  {
                                                    staticClass: "green--text",
                                                    attrs: { text: "" },
                                                    on: {
                                                      click: _vm.validateFund
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                            " +
                                                        _vm._s(
                                                          _vm.remaining_fund ==
                                                            _vm.fund
                                                            ? "" +
                                                                _vm.mixin_formatNumber(
                                                                  _vm.remaining_fund
                                                                )
                                                            : _vm.mixin_formatNumber(
                                                                _vm.remaining_fund
                                                              ) +
                                                                " / " +
                                                                _vm.mixin_formatNumber(
                                                                  _vm.fund
                                                                )
                                                        ) +
                                                        "\n                                        "
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
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: { text: "", color: "green" },
                                            on: { click: _vm.editEmployee }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                    Edit Info\n                                "
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            }
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
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "6", md: "6" } },
                            [
                              _c("v-hover", {
                                scopedSlots: _vm._u([
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var hover = ref.hover
                                      return [
                                        _c(
                                          "v-card",
                                          {
                                            staticClass: "mx-auto",
                                            attrs: {
                                              outlined: "",
                                              elevation: hover ? 5 : 2
                                            }
                                          },
                                          [
                                            _c(
                                              "v-card-title",
                                              { staticClass: "green--text" },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.mixin_formatNumber(
                                                      _vm.total_expenses
                                                    )
                                                  )
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("v-card-subtitle", [
                                              _vm._v(
                                                "\n                                        Expenses (This Month)\n                                    "
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("v-card-text", [
                                              _vm._v(
                                                "\n                                        ~ " +
                                                  _vm._s(_vm.start_date) +
                                                  " - " +
                                                  _vm._s(_vm.end_date) +
                                                  "\n                                    "
                                              )
                                            ])
                                          ],
                                          1
                                        )
                                      ]
                                    }
                                  }
                                ])
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "6", md: "6" } },
                            [
                              _c("v-hover", {
                                scopedSlots: _vm._u([
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var hover = ref.hover
                                      return [
                                        _c(
                                          "v-card",
                                          {
                                            staticClass: "mx-auto",
                                            attrs: {
                                              outlined: "",
                                              elevation: hover ? 5 : 2
                                            }
                                          },
                                          [
                                            _c(
                                              "v-card-title",
                                              { staticClass: "green--text" },
                                              [
                                                _vm._v(
                                                  "\n                                        " +
                                                    _vm._s(
                                                      _vm.mixin_formatNumber(
                                                        _vm.total_pending_reports
                                                      )
                                                    ) +
                                                    "\n                                    "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("v-card-subtitle", [
                                              _vm._v(
                                                "\n                                        Pending Expense Reports\n                                    "
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("v-card-text", [
                                              _vm._v(
                                                "\n                                        ~ Reports waiting for approval.\n                                    "
                                              )
                                            ])
                                          ],
                                          1
                                        )
                                      ]
                                    }
                                  }
                                ])
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "6", md: "6" } },
                            [
                              _c("v-hover", {
                                scopedSlots: _vm._u([
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var hover = ref.hover
                                      return [
                                        _c(
                                          "v-card",
                                          {
                                            staticClass: "mx-auto",
                                            attrs: {
                                              outlined: "",
                                              elevation: hover ? 5 : 2
                                            }
                                          },
                                          [
                                            _c(
                                              "v-card-title",
                                              { staticClass: "green--text" },
                                              [
                                                _vm._v(
                                                  "\n                                        " +
                                                    _vm._s(
                                                      _vm.mixin_formatNumber(
                                                        _vm.total_replenishments
                                                      )
                                                    ) +
                                                    "\n                                    "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("v-card-subtitle", [
                                              _vm._v(
                                                "\n                                        Replenishments\n                                    "
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("v-card-text", [
                                              _vm._v(
                                                "\n                                        ~ Amount to replenish the revolving\n                                        fund\n                                    "
                                              )
                                            ])
                                          ],
                                          1
                                        )
                                      ]
                                    }
                                  }
                                ])
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "6", md: "6" } },
                            [
                              _c("v-hover", {
                                scopedSlots: _vm._u([
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var hover = ref.hover
                                      return [
                                        _c(
                                          "v-card",
                                          {
                                            staticClass: "mx-auto",
                                            attrs: {
                                              outlined: "",
                                              elevation: hover ? 5 : 2
                                            }
                                          },
                                          [
                                            _c(
                                              "v-card-title",
                                              { staticClass: "green--text" },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.mixin_formatNumber(
                                                      _vm.total_reimbursements
                                                    )
                                                  )
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("v-card-subtitle", [
                                              _vm._v(
                                                "\n                                        Reimbursements\n                                    "
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("v-card-text", [
                                              _vm._v(
                                                "\n                                        ~ Amount to be compensated.\n                                    "
                                              )
                                            ])
                                          ],
                                          1
                                        )
                                      ]
                                    }
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
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c("v-col", { attrs: { cols: "12" } }, [
                    _c(
                      "div",
                      [
                        _c("v-hover", {
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var hover = ref.hover
                                return [
                                  _c(
                                    "v-card",
                                    {
                                      attrs: {
                                        outlined: "",
                                        elevation: hover ? 5 : 2
                                      }
                                    },
                                    [
                                      _c(
                                        "v-expansion-panels",
                                        {
                                          attrs: { hover: "", accordion: "" },
                                          model: {
                                            value: _vm.panel,
                                            callback: function($$v) {
                                              _vm.panel = $$v
                                            },
                                            expression: "panel"
                                          }
                                        },
                                        [
                                          _c(
                                            "v-expansion-panel",
                                            [
                                              _c("v-expansion-panel-header", [
                                                _vm._v(
                                                  "\n                                            Other Details\n                                        "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "v-expansion-panel-content",
                                                [
                                                  _c("v-simple-table", {
                                                    scopedSlots: _vm._u(
                                                      [
                                                        {
                                                          key: "default",
                                                          fn: function() {
                                                            return [
                                                              _c("tbody", [
                                                                _c("tr", [
                                                                  _c("td", [
                                                                    _vm._v(
                                                                      "Name"
                                                                    )
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("td", [
                                                                    _vm._v(
                                                                      "\n                                                                " +
                                                                        _vm._s(
                                                                          _vm.fullname
                                                                        ) +
                                                                        "\n                                                            "
                                                                    )
                                                                  ])
                                                                ]),
                                                                _vm._v(" "),
                                                                _c("tr", [
                                                                  _c("td", [
                                                                    _vm._v(
                                                                      "\n                                                                Username\n                                                            "
                                                                    )
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("td", [
                                                                    _vm._v(
                                                                      "\n                                                                " +
                                                                        _vm._s(
                                                                          _vm
                                                                            .user
                                                                            .username
                                                                        ) +
                                                                        "\n                                                            "
                                                                    )
                                                                  ])
                                                                ]),
                                                                _vm._v(" "),
                                                                _c("tr", [
                                                                  _c("td", [
                                                                    _vm._v(
                                                                      "Role"
                                                                    )
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("td", [
                                                                    _vm._v(
                                                                      "\n                                                                " +
                                                                        _vm._s(
                                                                          _vm
                                                                            .user
                                                                            .is_admin
                                                                            ? "Administrator"
                                                                            : "Standard User"
                                                                        ) +
                                                                        "\n                                                            "
                                                                    )
                                                                  ])
                                                                ]),
                                                                _vm._v(" "),
                                                                _c("tr", [
                                                                  _c("td", [
                                                                    _vm._v(
                                                                      "Gender"
                                                                    )
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("td", [
                                                                    _vm._v(
                                                                      "\n                                                                " +
                                                                        _vm._s(
                                                                          _vm.gender
                                                                        ) +
                                                                        "\n                                                            "
                                                                    )
                                                                  ])
                                                                ]),
                                                                _vm._v(" "),
                                                                _c("tr", [
                                                                  _c("td", [
                                                                    _vm._v(
                                                                      "\n                                                                Birthdate\n                                                            "
                                                                    )
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("td", [
                                                                    _vm._v(
                                                                      "\n                                                                " +
                                                                        _vm._s(
                                                                          _vm.birthdate
                                                                        ) +
                                                                        "\n                                                            "
                                                                    )
                                                                  ])
                                                                ]),
                                                                _vm._v(" "),
                                                                _c("tr", [
                                                                  _c("td", [
                                                                    _vm._v(
                                                                      "\n                                                                Telephone\n                                                                Number\n                                                            "
                                                                    )
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("td", [
                                                                    _vm._v(
                                                                      "\n                                                                " +
                                                                        _vm._s(
                                                                          _vm.telephone_number
                                                                        ) +
                                                                        "\n                                                            "
                                                                    )
                                                                  ])
                                                                ]),
                                                                _vm._v(" "),
                                                                _c("tr", [
                                                                  _c("td", [
                                                                    _vm._v(
                                                                      "Address"
                                                                    )
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c("td", [
                                                                    _vm._v(
                                                                      "\n                                                                " +
                                                                        _vm._s(
                                                                          _vm.address
                                                                        ) +
                                                                        "\n                                                            "
                                                                    )
                                                                  ])
                                                                ])
                                                              ])
                                                            ]
                                                          },
                                                          proxy: true
                                                        }
                                                      ],
                                                      null,
                                                      true
                                                    )
                                                  })
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-expansion-panel",
                                            [
                                              _c("v-expansion-panel-header", [
                                                _vm._v(
                                                  "\n                                            Permissions\n                                        "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "v-expansion-panel-content",
                                                [
                                                  _c("v-data-table", {
                                                    attrs: {
                                                      headers: _vm.headers,
                                                      items: _vm.permissions
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
                                ]
                              }
                            }
                          ])
                        })
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/assets/img/user.png":
/*!******************************************!*\
  !*** ./resources/js/assets/img/user.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/user.png?5405d77c51fb46a0cbf26cb96fe4da4d";

/***/ }),

/***/ "./resources/js/views/modules/admin/employees/Show.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/modules/admin/employees/Show.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_912b22a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=912b22a4& */ "./resources/js/views/modules/admin/employees/Show.vue?vue&type=template&id=912b22a4&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/employees/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_912b22a4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_912b22a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/employees/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/employees/Show.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/employees/Show.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/employees/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/employees/Show.vue?vue&type=template&id=912b22a4&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/employees/Show.vue?vue&type=template&id=912b22a4& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_912b22a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=912b22a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/employees/Show.vue?vue&type=template&id=912b22a4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_912b22a4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_912b22a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);