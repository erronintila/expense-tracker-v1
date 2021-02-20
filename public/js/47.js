(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/payments/Edit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/payments/Edit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  methods: {
    loadItem: function loadItem() {
      var _this = this;

<<<<<<< HEAD
      axios.get("/api/data/users").then(function (response) {
        _this.users = response.data.data;
      })["catch"](function (error) {
=======
      axios.get("/api/users/".concat(_this.$route.params.id)).then(function (response) {})["catch"](function (error) {
>>>>>>> develop
        console.log(error);
        console.log(error.response);

        _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);
      });
<<<<<<< HEAD
    },
    getDataFromApi: function getDataFromApi() {
      var _this4 = this;

      var _this = this;

      _this.loading = true;
      return new Promise(function (resolve, reject) {
        var _this4$options = _this4.options,
            sortBy = _this4$options.sortBy,
            sortDesc = _this4$options.sortDesc,
            page = _this4$options.page,
            itemsPerPage = _this4$options.itemsPerPage;

        var search = _this.search.trim().toLowerCase();

        var status = _this.status;
        var user_id = _this.form.user.id;
        var range = _this.date_range;
        axios.get("/api/expense_reports", {
          params: {
            search: search,
            sortBy: sortBy[0],
            sortType: sortDesc[0] ? "desc" : "asc",
            page: page,
            itemsPerPage: itemsPerPage,
            status: status,
            user_id: user_id,
            start_date: range[0],
            end_date: range[1] ? range[1] : range[0],
            admin_page: true,
            create_payment: true
          }
        }).then(function (response) {
          var items = response.data.data;
          var total = response.data.meta.total;
          _this.loading = false;
          console.log(items);
          resolve({
            items: items,
            total: total
          });
        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);

          _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);

          _this.loading = false;
        });
      });
    },
    // loadExpenseReports() {
    //     let start_date = this.date_range[0];
    //     let end_date = this.date_range[1];
    //     let _this = this;
    //     axios
    //         .get("/api/data/expense_reports", {
    //             params: {
    //                 create_payment: true,
    //                 start_date: start_date,
    //                 end_date: end_date,
    //                 user_id: _this.form.user.id
    //             }
    //         })
    //         .then(response => {
    //             _this.items = response.data.data;
    //         })
    //         .catch(error => {
    //             console.log(error);
    //             console.log(error.response);
    //             _this.mixin_errorDialog(
    //                 `Error ${error.response.status}`,
    //                 error.response.statusText
    //             );
    //         });
    // },
    onSave: function onSave() {
      var _this = this;

      _this.$refs.form.validate();

      if (this.selected == 0) {
        this.mixin_errorDialog("Error", "No Expense Report selected.");
        return;
      }

      if (_this.$refs.form.validate()) {
        _this.loader = true;
        axios.post("/api/payments", {
          code: _this.form.code,
          reference_no: _this.form.reference_no,
          voucher_no: _this.form.voucher_no,
          description: _this.form.description,
          date: _this.form.date,
          cheque_no: _this.form.cheque_no,
          cheque_date: _this.form.cheque_date,
          amount: _this.total,
          payee: _this.form.payee,
          payee_address: _this.form.payee_address,
          payee_phone: _this.form.payee_phone,
          remarks: _this.form.remarks,
          notes: _this.form.notes,
          expense_reports: _this.selected,
          user_id: _this.form.user.id
        }).then(function (response) {
          _this.onRefresh();

          _this.$dialog.message.success("Payment created successfully.", {
            position: "top-right",
            timeout: 2000
          });

          _this.$store.dispatch("AUTH_NOTIFICATIONS"); // _this.$store.dispatch("AUTH_USER");


          _this.$router.push({
            name: "admin.payments.index"
          });
        })["catch"](function (error) {
          console.log(error);
          console.log(error.response);

          _this.mixin_errorDialog("Error ".concat(error.response.status), error.response.statusText);

          _this.errors = error.response.data.errors;
        });
        return;
      }
    }
  },
  computed: {
    params: function params(nv) {
      var _objectSpread2;

      return _objectSpread(_objectSpread({}, this.options), {}, (_objectSpread2 = {
        query: this.search
      }, _defineProperty(_objectSpread2, "query", this.user), _defineProperty(_objectSpread2, "query", this.date_range), _objectSpread2));
    },
    maxDate: function maxDate() {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD");
    }
  },
  watch: {
    params: {
      handler: function handler() {
        var _this5 = this;

        this.getDataFromApi().then(function (data) {
          _this5.items = data.items;
          _this5.totalItems = data.total;
        });
      },
      deep: true
    },
    selected: function selected() {
      this.totalAmount = this.mixin_formatNumber(this.selected.reduce(function (total, item) {
        return total + item.total;
      }, 0));
=======
>>>>>>> develop
    }
  },
  created: function created() {
    this.loadItem();
  },
  activated: function activated() {
    this.loadItem();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/payments/Edit.vue?vue&type=template&id=32e09655&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/modules/admin/payments/Edit.vue?vue&type=template&id=32e09655& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
                _vm._v("Edit User")
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/modules/admin/payments/Edit.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/modules/admin/payments/Edit.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_32e09655___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=32e09655& */ "./resources/js/views/modules/admin/payments/Edit.vue?vue&type=template&id=32e09655&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/modules/admin/payments/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_32e09655___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_32e09655___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/modules/admin/payments/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/modules/admin/payments/Edit.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/payments/Edit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/payments/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/modules/admin/payments/Edit.vue?vue&type=template&id=32e09655&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/modules/admin/payments/Edit.vue?vue&type=template&id=32e09655& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_32e09655___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=32e09655& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/modules/admin/payments/Edit.vue?vue&type=template&id=32e09655&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_32e09655___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_32e09655___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);