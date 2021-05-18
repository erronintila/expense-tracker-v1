(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chart/DoughnutChart.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chart/DoughnutChart.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartjs-plugin-datalabels */ "./node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.js");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "doughnut-chart",
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Doughnut"],
  props: {
    data: {
      type: Object,
      "default": function _default() {}
    },
    options: {
      type: Object,
      "default": function _default() {}
    }
  },
  watch: {
    data: {
      deep: true,
      handler: function handler() {
        this.$data._chart.update();
      }
    }
  },
  mounted: function mounted() {
    this.addPlugin(chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1___default.a);
    this.renderChart(this.data, this.options);
    this.$emit("updateChart");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chart/LineChart.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chart/LineChart.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "line-chart",
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Line"],
  props: {
    data: {
      type: Object,
      "default": function _default() {}
    },
    options: {
      type: Object,
      "default": function _default() {}
    }
  },
  methods: {
    update: function update() {
      this.$data._chart.update();
    }
  },
  watch: {
    data: {
      deep: true,
      handler: function handler() {
        this.$data._chart.update();
      }
    }
  },
  mounted: function mounted() {
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/PageHeader.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/PageHeader.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "page-header",
  props: {
    title: ""
  }
});

/***/ }),

/***/ "./node_modules/vue-chartjs/es/BaseCharts.js":
/*!***************************************************!*\
  !*** ./node_modules/vue-chartjs/es/BaseCharts.js ***!
  \***************************************************/
/*! exports provided: generateChart, Bar, HorizontalBar, Doughnut, Line, Pie, PolarArea, Radar, Bubble, Scatter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateChart", function() { return generateChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bar", function() { return Bar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalBar", function() { return HorizontalBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Doughnut", function() { return Doughnut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pie", function() { return Pie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolarArea", function() { return PolarArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Radar", function() { return Radar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bubble", function() { return Bubble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scatter", function() { return Scatter; });
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);

function generateChart(chartId, chartType) {
  return {
    render: function render(createElement) {
      return createElement('div', {
        style: this.styles,
        class: this.cssClasses
      }, [createElement('canvas', {
        attrs: {
          id: this.chartId,
          width: this.width,
          height: this.height
        },
        ref: 'canvas'
      })]);
    },
    props: {
      chartId: {
        default: chartId,
        type: String
      },
      width: {
        default: 400,
        type: Number
      },
      height: {
        default: 400,
        type: Number
      },
      cssClasses: {
        type: String,
        default: ''
      },
      styles: {
        type: Object
      },
      plugins: {
        type: Array,
        default: function _default() {
          return [];
        }
      }
    },
    data: function data() {
      return {
        _chart: null,
        _plugins: this.plugins
      };
    },
    methods: {
      addPlugin: function addPlugin(plugin) {
        this.$data._plugins.push(plugin);
      },
      generateLegend: function generateLegend() {
        if (this.$data._chart) {
          return this.$data._chart.generateLegend();
        }
      },
      renderChart: function renderChart(data, options) {
        if (this.$data._chart) this.$data._chart.destroy();
        if (!this.$refs.canvas) throw new Error('Please remove the <template></template> tags from your chart component. See https://vue-chartjs.org/guide/#vue-single-file-components');
        this.$data._chart = new chart_js__WEBPACK_IMPORTED_MODULE_0___default.a(this.$refs.canvas.getContext('2d'), {
          type: chartType,
          data: data,
          options: options,
          plugins: this.$data._plugins
        });
      }
    },
    beforeDestroy: function beforeDestroy() {
      if (this.$data._chart) {
        this.$data._chart.destroy();
      }
    }
  };
}
var Bar = generateChart('bar-chart', 'bar');
var HorizontalBar = generateChart('horizontalbar-chart', 'horizontalBar');
var Doughnut = generateChart('doughnut-chart', 'doughnut');
var Line = generateChart('line-chart', 'line');
var Pie = generateChart('pie-chart', 'pie');
var PolarArea = generateChart('polar-chart', 'polarArea');
var Radar = generateChart('radar-chart', 'radar');
var Bubble = generateChart('bubble-chart', 'bubble');
var Scatter = generateChart('scatter-chart', 'scatter');
/* harmony default export */ __webpack_exports__["default"] = ({
  Bar: Bar,
  HorizontalBar: HorizontalBar,
  Doughnut: Doughnut,
  Line: Line,
  Pie: Pie,
  PolarArea: PolarArea,
  Radar: Radar,
  Bubble: Bubble,
  Scatter: Scatter
});

/***/ }),

/***/ "./node_modules/vue-chartjs/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/vue-chartjs/es/index.js ***!
  \**********************************************/
/*! exports provided: default, VueCharts, Bar, HorizontalBar, Doughnut, Line, Pie, PolarArea, Radar, Bubble, Scatter, mixins, generateChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VueCharts", function() { return VueCharts; });
/* harmony import */ var _mixins_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixins/index.js */ "./node_modules/vue-chartjs/es/mixins/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixins", function() { return _mixins_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _BaseCharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseCharts */ "./node_modules/vue-chartjs/es/BaseCharts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bar", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Bar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HorizontalBar", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["HorizontalBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Doughnut", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Doughnut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Line"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pie", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Pie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolarArea", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["PolarArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radar", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Radar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bubble", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Bubble"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scatter", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Scatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateChart", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["generateChart"]; });



var VueCharts = {
  Bar: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Bar"],
  HorizontalBar: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["HorizontalBar"],
  Doughnut: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Doughnut"],
  Line: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Line"],
  Pie: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Pie"],
  PolarArea: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["PolarArea"],
  Radar: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Radar"],
  Bubble: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Bubble"],
  Scatter: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Scatter"],
  mixins: _mixins_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  generateChart: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["generateChart"],
  render: function render() {
    return console.error('[vue-chartjs]: This is not a vue component. It is the whole object containing all vue components. Please import the named export or access the components over the dot notation. For more info visit https://vue-chartjs.org/#/home?id=quick-start');
  }
};
/* harmony default export */ __webpack_exports__["default"] = (VueCharts);


/***/ }),

/***/ "./node_modules/vue-chartjs/es/mixins/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/vue-chartjs/es/mixins/index.js ***!
  \*****************************************************/
/*! exports provided: reactiveData, reactiveProp, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactiveData", function() { return reactiveData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactiveProp", function() { return reactiveProp; });
function dataHandler(newData, oldData) {
  if (oldData) {
    var chart = this.$data._chart;
    var newDatasetLabels = newData.datasets.map(function (dataset) {
      return dataset.label;
    });
    var oldDatasetLabels = oldData.datasets.map(function (dataset) {
      return dataset.label;
    });
    var oldLabels = JSON.stringify(oldDatasetLabels);
    var newLabels = JSON.stringify(newDatasetLabels);

    if (newLabels === oldLabels && oldData.datasets.length === newData.datasets.length) {
      newData.datasets.forEach(function (dataset, i) {
        var oldDatasetKeys = Object.keys(oldData.datasets[i]);
        var newDatasetKeys = Object.keys(dataset);
        var deletionKeys = oldDatasetKeys.filter(function (key) {
          return key !== '_meta' && newDatasetKeys.indexOf(key) === -1;
        });
        deletionKeys.forEach(function (deletionKey) {
          delete chart.data.datasets[i][deletionKey];
        });

        for (var attribute in dataset) {
          if (dataset.hasOwnProperty(attribute)) {
            chart.data.datasets[i][attribute] = dataset[attribute];
          }
        }
      });

      if (newData.hasOwnProperty('labels')) {
        chart.data.labels = newData.labels;
        this.$emit('labels:update');
      }

      if (newData.hasOwnProperty('xLabels')) {
        chart.data.xLabels = newData.xLabels;
        this.$emit('xlabels:update');
      }

      if (newData.hasOwnProperty('yLabels')) {
        chart.data.yLabels = newData.yLabels;
        this.$emit('ylabels:update');
      }

      chart.update();
      this.$emit('chart:update');
    } else {
      if (chart) {
        chart.destroy();
        this.$emit('chart:destroy');
      }

      this.renderChart(this.chartData, this.options);
      this.$emit('chart:render');
    }
  } else {
    if (this.$data._chart) {
      this.$data._chart.destroy();

      this.$emit('chart:destroy');
    }

    this.renderChart(this.chartData, this.options);
    this.$emit('chart:render');
  }
}

var reactiveData = {
  data: function data() {
    return {
      chartData: null
    };
  },
  watch: {
    'chartData': dataHandler
  }
};
var reactiveProp = {
  props: {
    chartData: {
      type: Object,
      required: true,
      default: function _default() {}
    }
  },
  watch: {
    'chartData': dataHandler
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  reactiveData: reactiveData,
  reactiveProp: reactiveProp
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/PageHeader.vue?vue&type=template&id=f5cf67be&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/PageHeader.vue?vue&type=template&id=f5cf67be& ***!
  \******************************************************************************************************************************************************************************************************************/
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
        "v-card-title",
        { staticClass: "pt-0" },
        [
          _c("h4", { staticClass: "title green--text" }, [
            _vm._v(_vm._s(_vm.title))
          ]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _vm._t("actions")
        ],
        2
      ),
      _vm._v(" "),
      _c("v-card-subtitle", [_vm._t("sub-actions")], 2)
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chart/DoughnutChart.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/chart/DoughnutChart.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DoughnutChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DoughnutChart.vue?vue&type=script&lang=js& */ "./resources/js/components/chart/DoughnutChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _DoughnutChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chart/DoughnutChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chart/DoughnutChart.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/chart/DoughnutChart.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DoughnutChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DoughnutChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chart/DoughnutChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DoughnutChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chart/LineChart.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/chart/LineChart.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LineChart.vue?vue&type=script&lang=js& */ "./resources/js/components/chart/LineChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chart/LineChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chart/LineChart.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/chart/LineChart.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LineChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chart/LineChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/page/PageHeader.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/page/PageHeader.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageHeader_vue_vue_type_template_id_f5cf67be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageHeader.vue?vue&type=template&id=f5cf67be& */ "./resources/js/components/page/PageHeader.vue?vue&type=template&id=f5cf67be&");
/* harmony import */ var _PageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageHeader.vue?vue&type=script&lang=js& */ "./resources/js/components/page/PageHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageHeader_vue_vue_type_template_id_f5cf67be___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageHeader_vue_vue_type_template_id_f5cf67be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/page/PageHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/page/PageHeader.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/page/PageHeader.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/PageHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/page/PageHeader.vue?vue&type=template&id=f5cf67be&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/page/PageHeader.vue?vue&type=template&id=f5cf67be& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_template_id_f5cf67be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageHeader.vue?vue&type=template&id=f5cf67be& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/PageHeader.vue?vue&type=template&id=f5cf67be&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_template_id_f5cf67be___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_template_id_f5cf67be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);