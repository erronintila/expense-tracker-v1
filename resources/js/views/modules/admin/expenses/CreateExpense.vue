<template>
    <div></div>
</template>

<script>
import moment from "moment";

export default {
    data: function() {
        return {
            self: this,
            misc: {},
            collections: {
                users: [],
                vendors: [],
                expense_types: [],
                sub_types: []
            },
            form: {
                code: null,
                reference_no: null,
                description: null,
                amount: 0,
                reimbursable_amount: 0,
                tax_name: null,
                tax_rate: 0,
                is_compound_tax: false,
                is_tax_inclusive: true,
                tax_amount: 0,
                receipt_number: null,
                date: moment().format("YYYY-MM-DD"),
                details: null,
                remarks: null,
                notes: null,
                encoding_period: this.$store.getters.settings
                    .expense_encoding_period,
                expense_type: {
                    id: null,
                    name: null,
                    limit: null,
                    sub_types: { id: null, name: "None", limit: null }
                },
                sub_type: { id: null, name: null, limit: null },
                user: {
                    id: null,
                    remaining_fund: 0,
                    fund: 0,
                    expense_types: null
                },
                vendor: {
                    id: null,
                    name: null,
                    tin: null,
                    is_vat_inclusive: false
                },
                expense_report: {
                    id: null
                },
                tax: {
                    id: null
                },
                expense_header: {
                    id: null
                }
            },
            errors: {
                code: [],
                reference_no: [],
                description: [],
                amount: [],
                reimbursable_amount: [],
                tax_name: [],
                tax_rate: [],
                is_compound_tax: [],
                is_tax_inclusive: [],
                tax_amount: [],
                receipt_number: [],
                date: [],
                details: [],
                remarks: [],
                notes: [],
                encoding_period: [],
                expense_type: [],
                sub_type: [],
                user: [],
                vendor: [],
                expense_report: [],
                tax: [],
                expense_header_id: []
            },
            rules: {
                code: [],
                reference_no: [],
                description: [],
                amount: [],
                reimbursable_amount: [],
                tax_name: [],
                tax_rate: [],
                is_compound_tax: [],
                is_tax_inclusive: [],
                tax_amount: [],
                receipt_number: [],
                date: [],
                details: [],
                remarks: [],
                notes: [],
                encoding_period: [],
                expense_type: [],
                sub_type: [],
                user: [],
                vendor: [],
                expense_report: [],
                tax: [],
                expense_header_id: []
            }
        };
    },
    methods: {
        onRefresh: function() {
            Object.assign(this.$data, this.$options.data.apply(this));
        },
        loadExpenseTypes: function() {},
        loadSubTypes: function() {},
        loadVendors: function() {
            let _this = this;

            axios
                .get("")
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    _this.mixin_showErrors(error);
                });
        },
        loadUsers: function() {
            let _this = this;

            axios
                .get("")
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    _this.mixin_showErrors(error);
                });
        },
        onSave: function() {
            let _this = this;
            let params = this.form;

            if (this.isValid) {
                axios
                    .post("/api/expenses", {
                        params: params
                    })
                    .then(function(response) {
                        _this.mixin_successDialog(
                            response.data.status,
                            response.data.message
                        );
                    })
                    .catch(function(error) {
                        _this.mixin_showErrors(error);
                        _this.errors = error.response.data.errors;
                    });
            }
        }
    },
    computed: {
        minDate: function() {},
        maxDate: function() {},
        isValid: function() {
            let _this = this;
            let errorTitle = "";
            let errorMessage = "";

            if(!_this.$refs.form.validate()) {
                return false;
            }

            return true;
        },
        amount_to_replensh: function() {},
        amount_to_reimburse: function() {},
        total_amount: function() {}
    },
    mounted: function() {
        console.log("create component loaded");

        this.loadUsers();
        this.loadVendors();
    }
};
</script>
