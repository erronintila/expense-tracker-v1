<template>
    <div>
        <UserSelector
            v-model="form.user"
            ref="userData"
            :showAll="true"
            :errors="errors.user"
            @onChangeData="getUser"
            @onChangeInput="errors.user = []"
        />
        <VendorSelector
            ref="vendorData"
            :showAll="false"
            :errors="[]"
            @onChangeData="getVendor"
        />
        <v-btn @click="onSave">Save</v-btn>
    </div>
</template>

<script>
import moment from "moment";
import UserDataService from "../../../../services/UserDataService";
import ExpenseDataService from "../../../../services/ExpenseDataService";
import VendorDataService from "../../../../services/VendorDataService";
import UserSelector from "../../../../components/selector/dropdown/UserSelector";
import VendorSelector from "../../../../components/selector/dropdown/VendorSelector";

export default {
    props: {},
    components: {
        UserSelector,
        VendorSelector
    },
    data() {
        return {
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
                expense_type: null,
                sub_type: null,
                user: null,
                vendor: null,
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
        getUser(e) {
            this.form.user = e;
        },
        getVendor(e) {
            this.form.vendor = e;
        },
        getExpenseType(e) {
            // this.form.vendor = e;
        },
        getSubType(e) {
            // this.form.vendor = e;
        },
        onRefresh() {
            Object.assign(this.$data, this.$options.data.apply(this));
        },
        onSave() {
            console.log("user", this.form.user);
            console.log("vendor", this.form.vendor);
            return;

            let data = this.form;
            // data.date = "2021-02-01";
            // data.expense_type_id = 2;
            // data.is_tax_inclusive = false;
            // data.amount = 100;
            // data.reimbursable_amount = 100;
            // data.tax_amount = 0;
            // data.tax_rate = 0;
            // data.user_id = 2;

            if (this.isValid) {
                ExpenseDataService.store(data)
                    .then(response => {
                        this.mixin_showSuccess(response);
                    })
                    .catch(error => {
                        this.mixin_showErrors(error);
                        this.errors = error.response.data.errors;
                    });
            }
        }
    },
    computed: {
        minDate() {},
        maxDate() {},
        isValid() {
            // let this = this;
            let errorTitle = "";
            let errorMessage = "";

            // if (!this.$refs.form.validate()) {
            //     return false;
            // }

            return true;
        },
        amount_to_replensh() {},
        amount_to_reimburse() {},
        total_amount() {}
    },
    mounted() {
        console.log("create component loaded");
    }
};
</script>
