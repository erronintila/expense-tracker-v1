(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/daterangepicker/DateRangePicker.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/daterangepicker/DateRangePicker.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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
// Please visit :
// https://stackoverflow.com/questions/59404459/custom-date-picker-in-vuetify

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    buttonType: {
      type: Boolean,
      "default": false
    },
    buttonText: {
      type: Boolean,
      "default": false
    },
    customText: {
      type: String,
      "default": null
    },
    buttonClass: {
      type: String,
      "default": ""
    },
    buttonColor: {
      type: String,
      "default": "primary"
    },
    buttonDark: {
      type: Boolean,
      "default": true
    },
    solo: {
      type: Boolean,
      "default": false
    },
    value: {
      type: Array,
      "default": function _default() {
        return [moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD")];
      }
    },
    preset: {
      type: String,
      "default": ""
    },
    presets: {
      type: Array,
      "default": function _default() {
        return ["Today", "This Week", "This Month", "This Year"];
      }
    }
  },
  data: function data() {
    return {
      menu: false,
      presetValue: this.preset,
      presetsList: this.presets
    };
  },
  methods: {
    // customChange() {
    //     this.$emit("updateDates", this.value);
    // },
    resetDates: function resetDates() {
      this.menu = false;
      var value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("month").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("month").format("YYYY-MM-DD")];
      this.presetValue = "";
      this.$emit("updateDates", value);
    },
    updatePreset: function updatePreset() {
      this.menu = false;
      var value = [];

      switch (this.presetValue) {
        case "Today":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD")];
          this.$emit("updateDates", value);
          break;

        case "Yesterday":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "days").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "days").format("YYYY-MM-DD")];
          this.$emit("updateDates", value);
          break;

        case "Last 7 Days":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(7, "days").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "days").format("YYYY-MM-DD")];
          this.$emit("updateDates", value);
          break;

        case "Last 30 Days":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(30, "days").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "days").format("YYYY-MM-DD")];
          this.$emit("updateDates", value);
          break;

        case "This Week":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("week").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("week").format("YYYY-MM-DD")];
          this.$emit("updateDates", value);
          break;

        case "Last Week":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "weeks").startOf("week").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "weeks").endOf("week").format("YYYY-MM-DD")];
          this.$emit("updateDates", value);
          break;

        case "This Month":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("month").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("month").format("YYYY-MM-DD")];
          this.$emit("updateDates", value);
          break;

        case "Last Month":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "months").startOf("month").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "months").endOf("month").format("YYYY-MM-DD")];
          this.$emit("updateDates", value);
          break;

        case "This Quarter":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("quarter").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("quarter").format("YYYY-MM-DD")];
          this.$emit("updateDates", value);
          break;

        case "Last Quarter":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "quarters").startOf("quarter").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "quarters").endOf("quarter").format("YYYY-MM-DD")];
          this.$emit("updateDates", value);
          break;

        case "This Year":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("year").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().endOf("year").format("YYYY-MM-DD")];
          this.$emit("updateDates", value);
          break;

        case "Last Year":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "years").startOf("year").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "years").endOf("year").format("YYYY-MM-DD")];
          this.$emit("updateDates", value);
          break;

        case "Last 5 Years":
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(5, "years").startOf("year").format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "years").endOf("year").format("YYYY-MM-DD")];
          this.$emit("updateDates", value);
          break;

        default:
          value = [moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD")];
          this.$emit("updateDates", value);
          break;
      }
    }
  },
  computed: {
    selected: {
      get: function get() {
        return this.value;
      },
      set: function set(value) {
        this.$emit("updateDates", value);
      }
    },
    dateRangeText: function dateRangeText() {
      this.value.sort();
      return this.value.join(" ~ ");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/daterangepicker/DateRangePicker.vue?vue&type=template&id=c3ea2be0&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/daterangepicker/DateRangePicker.vue?vue&type=template&id=c3ea2be0& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    "v-menu",
    {
      ref: "menu",
      staticClass: "pa-0",
      attrs: {
        "close-on-content-click": false,
        transition: "scale-transition",
        "offset-y": "",
        "min-width": "290px",
        "max-width": "290px"
      },
      scopedSlots: _vm._u([
        {
          key: "activator",
          fn: function(ref) {
            var on = ref.on
            var attrs = ref.attrs
            return [
              _vm.buttonType
                ? _c(
                    "v-btn",
                    _vm._g(
                      _vm._b(
                        {
                          class: _vm.buttonClass,
                          attrs: {
                            color: _vm.buttonColor,
                            dark: _vm.buttonDark,
                            "offset-y": "",
                            text: _vm.buttonText
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
                        "\n            " +
                          _vm._s(
                            _vm.customText == null
                              ? _vm.dateRangeText
                              : _vm.customText
                          ) +
                          "\n        "
                      )
                    ]
                  )
                : _c(
                    "v-text-field",
                    _vm._g(
                      _vm._b(
                        {
                          attrs: {
                            label: "Date",
                            readonly: "",
                            solo: _vm.solo
                          },
                          model: {
                            value: _vm.dateRangeText,
                            callback: function($$v) {
                              _vm.dateRangeText = $$v
                            },
                            expression: "dateRangeText"
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
      _c(
        "v-card",
        [
          _c("v-select", {
            attrs: {
              items: _vm.presetsList,
              label: "Presets",
              solo: "",
              flat: ""
            },
            on: { change: _vm.updatePreset },
            model: {
              value: _vm.presetValue,
              callback: function($$v) {
                _vm.presetValue = $$v
              },
              expression: "presetValue"
            }
          }),
          _vm._v(" "),
          _c(
            "v-date-picker",
            {
              attrs: {
                range: "",
                "no-title": "",
                scrollable: "",
                color: "success"
              },
              model: {
                value: _vm.selected,
                callback: function($$v) {
                  _vm.selected = $$v
                },
                expression: "selected"
              }
            },
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { text: "", color: "success" },
                  on: { click: _vm.resetDates }
                },
                [_vm._v("Reset")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { text: "", color: "success" },
                  on: {
                    click: function($event) {
                      return _vm.$refs.menu.save(_vm.selected)
                    }
                  }
                },
                [_vm._v("\n                OK\n            ")]
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

/***/ "./resources/js/components/daterangepicker/DateRangePicker.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/daterangepicker/DateRangePicker.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DateRangePicker_vue_vue_type_template_id_c3ea2be0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateRangePicker.vue?vue&type=template&id=c3ea2be0& */ "./resources/js/components/daterangepicker/DateRangePicker.vue?vue&type=template&id=c3ea2be0&");
/* harmony import */ var _DateRangePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DateRangePicker.vue?vue&type=script&lang=js& */ "./resources/js/components/daterangepicker/DateRangePicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DateRangePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DateRangePicker_vue_vue_type_template_id_c3ea2be0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DateRangePicker_vue_vue_type_template_id_c3ea2be0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/daterangepicker/DateRangePicker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/daterangepicker/DateRangePicker.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/daterangepicker/DateRangePicker.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRangePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DateRangePicker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/daterangepicker/DateRangePicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRangePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/daterangepicker/DateRangePicker.vue?vue&type=template&id=c3ea2be0&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/daterangepicker/DateRangePicker.vue?vue&type=template&id=c3ea2be0& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRangePicker_vue_vue_type_template_id_c3ea2be0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DateRangePicker.vue?vue&type=template&id=c3ea2be0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/daterangepicker/DateRangePicker.vue?vue&type=template&id=c3ea2be0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRangePicker_vue_vue_type_template_id_c3ea2be0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRangePicker_vue_vue_type_template_id_c3ea2be0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);