(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/admin/users/Show.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/admin/users/Show.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony import */ var _services_UserDataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/UserDataService */ "./resources/js/services/UserDataService.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      formDataLoaded: false,
      start_date: moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("month").format("ll"),
      end_date: moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("month").format("ll"),
      total_expenses: 0,
      total_replenishments: 0,
      total_reimbursements: 0,
      total_pending_reports: 0,
      selection: 1,
      panel: 0,
      id: "",
      full_name: "",
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
      job: {
        id: null,
        name: ""
      },
      department: {
        id: null,
        name: ""
      },
      headers: [{
        text: "Permission",
        value: "name",
        sortable: false
      }],
      permissions: [],
      user: {
        username: "",
        name: "",
        is_admin: false
      }
    };
  },
  methods: {
    validateFund: function validateFund() {
      var _this = this;

      axios.get("/api/data/validateFund?id=".concat(this.id)).then(function (response) {
        console.log(response.data.data);

        _this.getData();
      })["catch"](function (error) {
        _this.mixin_showErrors(error);
      });
    },
    getData: function getData() {
      var _this2 = this;

      var data = {};

      if (this.$route.params.isDeleted) {
        data = {
          params: {
            isDeleted: true
          }
        };
      }

      _services_UserDataService__WEBPACK_IMPORTED_MODULE_3__["default"].show(this.$route.params.id, data).then(function (response) {
        var data = response.data.data;
        _this2.id = data.id;
        _this2.full_name = data.full_name;
        _this2.first_name = data.first_name;
        _this2.middle_name = data.middle_name;
        _this2.last_name = data.last_name;
        _this2.suffix = data.suffix;
        _this2.gender = data.gender;
        _this2.birthdate = data.birthdate;
        _this2.mobile_number = data.mobile_number;
        _this2.telephone_number = data.telephone_number;
        _this2.email = data.email;
        _this2.address = data.address;
        _this2.fund = data.fund;
        _this2.remaining_fund = data.remaining_fund;
        _this2.job = data.job.name;
        _this2.department = data.job.department.name;
        _this2.permissions = data.permissions;
        _this2.user = data;
        _this2.formDataLoaded = true;
      })["catch"](function (error) {
        _this2.mixin_showErrors(error);

        _this2.formDataLoaded = true;

        _this2.$router.push({
          name: "admin.users.index"
        }, function () {});
      });
    },
    editUser: function editUser() {
      this.$router.push({
        name: "admin.users.edit",
        params: {
          id: this.$route.params.id
        }
      });
    },
    getExpenseStats: function getExpenseStats() {
      var _this3 = this;

      var start_date = moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("month").format("YYYY-MM-DD");
      var end_date = moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("month").format("YYYY-MM-DD");
      var user_id = this.$route.params.id;
      axios.get("/api/data/expense_stats?start_date=".concat(start_date, "&end_date=").concat(end_date, "&user_id=").concat(user_id)).then(function (response) {
        _this3.total_expenses = response.data.summary.total;
        _this3.total_replenishments = response.data.summary.replenishments;
        _this3.total_reimbursements = response.data.summary.reimbursements;
        _this3.total_pending_reports = response.data.summary.pending;
      })["catch"](function (error) {
        _this3.mixin_showErrors(error);
      });
    }
  },
  created: function created() {
    // this.$store.dispatch("AUTH_USER");
    this.getData(); // this.getExpenseStats();
  },
  activated: function activated() {
    // this.$store.dispatch("AUTH_USER");
    this.getData(); // this.getExpenseStats();
  },
  deactivated: function deactivated() {
    Object.assign(this.$data, this.$options.data());
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/admin/users/Show.vue?vue&type=template&id=518e40ae&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/admin/users/Show.vue?vue&type=template&id=518e40ae& ***!
  \********************************************************************************************************************************************************************************************************************/
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
                                                    attrs: {
                                                      cols: "12",
                                                      sm: "5"
                                                    }
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
                                                    attrs: {
                                                      cols: "12",
                                                      sm: "7"
                                                    }
                                                  },
                                                  [
                                                    _c("div", [
                                                      _vm._v(
                                                        "\n                                            " +
                                                          _vm._s(
                                                            _vm.department
                                                          ) +
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
                                                                (_vm.suffix ||
                                                                  "")
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
                                                        staticClass:
                                                          "text--primary"
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
                                                        staticClass:
                                                          "green--text",
                                                        attrs: { text: "" },
                                                        on: {
                                                          click:
                                                            _vm.validateFund
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
                                            !_vm.$route.params.isDeleted
                                              ? _c(
                                                  "v-btn",
                                                  {
                                                    attrs: {
                                                      text: "",
                                                      color: "green"
                                                    },
                                                    on: { click: _vm.editUser }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                    Edit Info\n                                "
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
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
                                              attrs: {
                                                hover: "",
                                                accordion: ""
                                              },
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
                                                  _c(
                                                    "v-expansion-panel-header",
                                                    [
                                                      _vm._v(
                                                        "\n                                            Other Details\n                                        "
                                                      )
                                                    ]
                                                  ),
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
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c("td", [
                                                                        _vm._v(
                                                                          "\n                                                                " +
                                                                            _vm._s(
                                                                              _vm.full_name
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
                                                                      _vm._v(
                                                                        " "
                                                                      ),
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
                                                                      _vm._v(
                                                                        " "
                                                                      ),
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
                                                                      _vm._v(
                                                                        " "
                                                                      ),
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
                                                                      _vm._v(
                                                                        " "
                                                                      ),
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
                                                                      _vm._v(
                                                                        " "
                                                                      ),
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
                                                                      _vm._v(
                                                                        " "
                                                                      ),
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
                                                  _c(
                                                    "v-expansion-panel-header",
                                                    [
                                                      _vm._v(
                                                        "\n                                            Permissions\n                                        "
                                                      )
                                                    ]
                                                  ),
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
    key: "get",
    value: function get(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/data/users", data);
    }
  }, {
    key: "getAll",
    value: function getAll(data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/users", data);
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
  }, {
    key: "updatePermissions",
    value: function updatePermissions(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/users/update_permissions/".concat(id), data);
    }
  }, {
    key: "updateProfile",
    value: function updateProfile(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/users/update_profile/".concat(id), data);
    }
  }, {
    key: "updateActivation",
    value: function updateActivation(id, data) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/users/update_activation/".concat(id), data);
    }
  }, {
    key: "export",
    value: function _export() {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/users/export/data");
    }
  }]);

  return UserDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new UserDataService());

/***/ }),

/***/ "./resources/js/views/pages/admin/users/Show.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/pages/admin/users/Show.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_518e40ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=518e40ae& */ "./resources/js/views/pages/admin/users/Show.vue?vue&type=template&id=518e40ae&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/admin/users/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_518e40ae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_518e40ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/admin/users/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/admin/users/Show.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/pages/admin/users/Show.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/admin/users/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/admin/users/Show.vue?vue&type=template&id=518e40ae&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/pages/admin/users/Show.vue?vue&type=template&id=518e40ae& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_518e40ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=518e40ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/admin/users/Show.vue?vue&type=template&id=518e40ae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_518e40ae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_518e40ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);