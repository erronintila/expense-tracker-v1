(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/datepicker/DateRangePicker.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/datepicker/DateRangePicker.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    dateRange: {
      type: Array,
      "default": function _default() {
        return [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("month").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("month").format("YYYY-MM-DD")];
      }
    },
    datePreset: {
      type: String,
      "default": "Custom"
    },
    datePresets: {
      type: Array,
      "default": function _default() {
        return ["Custom", "Today", "This Week", "This Month", "This Quarter", "This Year"];
      }
    }
  },
  data: function data() {
    return {
      range: null,
      preset: null,
      presets: null,
      menu: false,
      menu2: false,
      modal: false
    };
  },
  methods: {
    onChangePreset: function onChangePreset() {
      var value = [];

      switch (this.preset) {
        case "Custom":
          value = this.range;
          break;

        case "Today":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD")];
          break;

        case "Yesterday":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "days").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "days").format("YYYY-MM-DD")];
          break;

        case "Last 7 Days":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(7, "days").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "days").format("YYYY-MM-DD")];
          break;

        case "Last 30 Days":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(30, "days").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "days").format("YYYY-MM-DD")];
          break;

        case "This Week":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("week").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("week").format("YYYY-MM-DD")];
          break;

        case "Last Week":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "weeks").startOf("week").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "weeks").endOf("week").format("YYYY-MM-DD")];
          break;

        case "This Month":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("month").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("month").format("YYYY-MM-DD")];
          break;

        case "Last Month":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "months").startOf("month").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "months").endOf("month").format("YYYY-MM-DD")];
          break;

        case "This Quarter":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("quarter").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("quarter").format("YYYY-MM-DD")];
          break;

        case "Last Quarter":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "quarters").startOf("quarter").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "quarters").endOf("quarter").format("YYYY-MM-DD")];
          break;

        case "This Year":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("year").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("year").format("YYYY-MM-DD")];
          break;

        case "Last Year":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "years").startOf("year").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "years").endOf("year").format("YYYY-MM-DD")];
          break;

        case "Last 5 Years":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(5, "years").startOf("year").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "years").endOf("year").format("YYYY-MM-DD")];
          break;

        default:
          break;
      }

      this.range = value; // this.$emit("onChange", value);
    },
    onReset: function onReset() {
      this.preset = "Custom";
      this.range = this.dateRange;
      this.$emit("onChange", this.range);
    },
    onCancel: function onCancel() {
      this.modal = false;
      this.preset = "Custom";
    },
    onSave: function onSave() {
      if (this.computedDateRange && this.computedDateRange.length == 2) {
        var sortedDates = this.computedDateRange.sort(function (a, b) {
          return new Date(a) - new Date(b);
        });
        this.$refs.dialog.save(sortedDates);
        this.$emit("onChange", sortedDates);
        return;
      }

      this.modal = true;
    }
  },
  computed: {
    computedDateRangeText: function computedDateRangeText() {
      var sortedDates = this.computedDateRange.sort(function (a, b) {
        return new Date(a) - new Date(b);
      });
      return sortedDates.join(" ~ ");
    },
    computedDateRange: {
      get: function get() {
        return this.range || this.dateRange;
      },
      set: function set(value) {
        this.range = value;
      }
    },
    // computedPreset: {
    //     get() {
    //         return this.preset || this.datePreset;
    //     },
    //     set(value) {
    //         this.preset = value;
    //     }
    // },
    computedPresets: {
      get: function get() {
        return this.presets || this.datePresets;
      },
      set: function set(value) {
        this.presets = value;
      }
    }
  },
  watch: {
    preset: function preset() {
      this.onChangePreset();
    },
    dateRange: function dateRange(newVal, oldVal) {
      this.range = newVal;
    },
    datePreset: function datePreset(newVal, oldVal) {
      this.preset = newVal;
    },
    datePresets: function datePresets(newVal, oldVal) {
      this.presets = newVal;
    }
  },
  mounted: function mounted() {
    this.range = this.range || this.dateRange;
    this.preset = this.preset || this.datePreset;
    this.presets = this.presets || this.datePresets;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/datepicker/DateRangePicker.vue?vue&type=template&id=9d548a96&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/datepicker/DateRangePicker.vue?vue&type=template&id=9d548a96& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
          ref: "dialog",
          attrs: { "return-value": _vm.range, persistent: "", width: "290px" },
          on: {
            "update:returnValue": function($event) {
              _vm.range = $event
            },
            "update:return-value": function($event) {
              _vm.range = $event
            }
          },
          scopedSlots: _vm._u(
            [
              {
                key: "activator",
                fn: function(ref) {
                  var on = ref.on
                  var attrs = ref.attrs
                  return [
                    _vm._t("openDialog", null, null, {
                      on: on,
                      attrs: attrs,
                      computedDateRangeText: _vm.computedDateRangeText
                    })
                  ]
                }
              }
            ],
            null,
            true
          ),
          model: {
            value: _vm.modal,
            callback: function($$v) {
              _vm.modal = $$v
            },
            expression: "modal"
          }
        },
        [
          _vm._v(" "),
          _c(
            "v-card",
            [
              _c(
                "v-container",
                [
                  _c(
                    "v-row",
                    [
                      _c("v-col", [
                        _c(
                          "div",
                          { staticClass: "text-center" },
                          [
                            _c(
                              "v-menu",
                              {
                                attrs: { "offset-y": "" },
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
                                                  color: "primary",
                                                  dark: "",
                                                  text: ""
                                                }
                                              },
                                              "v-btn",
                                              attrs,
                                              false
                                            ),
                                            on
                                          ),
                                          [
                                            _c("v-icon", [
                                              _vm._v("mdi-calendar")
                                            ]),
                                            _vm._v(
                                              " \n                                        " +
                                                _vm._s(
                                                  _vm.computedDateRangeText
                                                ) +
                                                "\n                                    "
                                            )
                                          ],
                                          1
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
                                  {
                                    staticClass: "overflow-y-auto",
                                    staticStyle: { "max-height": "200px" }
                                  },
                                  [
                                    _c(
                                      "v-list-item-group",
                                      {
                                        attrs: { mandatory: "" },
                                        model: {
                                          value: _vm.preset,
                                          callback: function($$v) {
                                            _vm.preset = $$v
                                          },
                                          expression: "preset"
                                        }
                                      },
                                      _vm._l(_vm.computedPresets, function(
                                        item,
                                        index
                                      ) {
                                        return _c(
                                          "v-list-item",
                                          {
                                            key: index,
                                            attrs: { value: item }
                                          },
                                          [
                                            _c("v-list-item-title", [
                                              _vm._v(
                                                "\n                                                " +
                                                  _vm._s(item) +
                                                  "\n                                            "
                                              )
                                            ])
                                          ],
                                          1
                                        )
                                      }),
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
                        this.computedDateRange.length != 2
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "overline red--text text-capitalize"
                              },
                              [
                                _vm._v(
                                  "\n                            *select 1 more\n                        "
                                )
                              ]
                            )
                          : _vm._e()
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider")
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-date-picker",
                {
                  attrs: {
                    color: "green",
                    "no-title": "",
                    range: "",
                    scrollable: ""
                  },
                  model: {
                    value: _vm.range,
                    callback: function($$v) {
                      _vm.range = $$v
                    },
                    expression: "range"
                  }
                },
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { text: "", color: "green" },
                      on: { click: _vm.onReset }
                    },
                    [_vm._v("Reset")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { text: "", color: "primary" },
                      on: { click: _vm.onCancel }
                    },
                    [_vm._v("\n                    Cancel\n                ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { text: "", color: "primary" },
                      on: { click: _vm.onSave }
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

/***/ "./resources/js/components/datepicker/DateRangePicker.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/datepicker/DateRangePicker.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DateRangePicker_vue_vue_type_template_id_9d548a96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateRangePicker.vue?vue&type=template&id=9d548a96& */ "./resources/js/components/datepicker/DateRangePicker.vue?vue&type=template&id=9d548a96&");
/* harmony import */ var _DateRangePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DateRangePicker.vue?vue&type=script&lang=js& */ "./resources/js/components/datepicker/DateRangePicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DateRangePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DateRangePicker_vue_vue_type_template_id_9d548a96___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DateRangePicker_vue_vue_type_template_id_9d548a96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/datepicker/DateRangePicker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/datepicker/DateRangePicker.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/datepicker/DateRangePicker.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRangePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DateRangePicker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/datepicker/DateRangePicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRangePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/datepicker/DateRangePicker.vue?vue&type=template&id=9d548a96&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/datepicker/DateRangePicker.vue?vue&type=template&id=9d548a96& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRangePicker_vue_vue_type_template_id_9d548a96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DateRangePicker.vue?vue&type=template&id=9d548a96& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/datepicker/DateRangePicker.vue?vue&type=template&id=9d548a96&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRangePicker_vue_vue_type_template_id_9d548a96___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRangePicker_vue_vue_type_template_id_9d548a96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);