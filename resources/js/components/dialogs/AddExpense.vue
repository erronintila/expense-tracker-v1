<template>
    <v-dialog v-model="openDialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                dark
                fab
                color="green"
                title="Add new"
                x-small
                v-bind="attrs"
                v-on="on"
            >
                <v-icon dark>mdi-plus</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="headline">New Expense</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-form ref="form" v-model="valid">
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-menu
                                    ref="menu"
                                    v-model="menu"
                                    :close-on-content-click="false"
                                    transition="scale-transition"
                                    offset-y
                                    min-width="290px"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                            v-model="form.date"
                                            :error-messages="errors.date"
                                            @input="errors.date = []"
                                            label="Date"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="form.date"
                                        no-title
                                        scrollable
                                        color="success"
                                        :min="minDate"
                                        :max="maxDate"
                                    >
                                    </v-date-picker>
                                </v-menu>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    :value="
                                        form.vendor
                                            ? form.vendor.name
                                            : 'No Vendor'
                                    "
                                    :error-messages="errors.vendor_id"
                                    @input="errors.vendor_id = []"
                                    label="Vendor"
                                    readonly
                                >
                                    <template v-slot:append>
                                        <VendorDialogSelector
                                            ref="vendorDialogSelector"
                                            @selectVendor="selectVendor"
                                            @onReset="resetVendor"
                                            :selectedVendor="form.vendor"
                                        >
                                            <template
                                                v-slot:openDialog="{
                                                    bind,
                                                    on
                                                }"
                                            >
                                                <v-btn
                                                    fab
                                                    color="primary"
                                                    text
                                                    x-small
                                                    v-bind="bind"
                                                    v-on="on"
                                                >
                                                    <v-icon dark
                                                        >mdi-magnify</v-icon
                                                    >
                                                </v-btn>
                                            </template>
                                        </VendorDialogSelector>
                                    </template>
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-autocomplete
                                    return-object
                                    v-model="form.expense_type"
                                    :items="expense_types"
                                    :error-messages="errors.expense_type_id"
                                    @input="errors.expense_type_id = []"
                                    @change="loadSubTypes"
                                    item-value="id"
                                    item-text="name"
                                    label="Expense Type"
                                    required
                                >
                                </v-autocomplete>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-autocomplete
                                    v-model="form.sub_type"
                                    :items="sub_types"
                                    :error-messages="errors.sub_type_id"
                                    @input="errors.sub_type_id = []"
                                    item-value="id"
                                    item-text="name"
                                    label="Sub Type (optional)"
                                    required
                                    return-object
                                >
                                </v-autocomplete>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form.description"
                                    label="Description"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="form.receipt_number"
                                    :error-messages="errors.receipt_number"
                                    @input="errors.receipt_number = []"
                                    label="Receipt No."
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="form.amount"
                                    label="Expense Amount"
                                    :error-messages="errors.amount"
                                    @input="errors.amount = []"
                                    type="number"
                                    :hint="
                                        `Remaining Fund: ${mixin_formatNumber(
                                            form.user
                                                ? form.user.remaining_fund
                                                : 0
                                        )} / Limit: ${
                                            expense_amount_limit == null
                                                ? 'No Limit'
                                                : mixin_formatNumber(
                                                      expense_amount_limit
                                                  )
                                        }`
                                    "
                                    persistent-hint
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                md="6"
                                v-if="mixin_can('set reimbursable amount')"
                            >
                                <v-text-field
                                    :error-messages="errors.reimbursable_amount"
                                    @input="errors.reimbursable_amount = []"
                                    v-model="form.reimbursable_amount"
                                    label="Amount to reimburse"
                                    type="number"
                                    hint="Amount spent from own pocket"
                                    persistent-hint
                                >
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" md="6" v-if="isVendorTaxInclusive">
                                <v-text-field
                                    v-model="form.tax_rate"
                                    label="Tax Rate"
                                    suffix="%"
                                    type="number"
                                    :readonly="
                                        !mixin_can('modify taxes on expense')
                                    "
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="6" v-if="isVendorTaxInclusive">
                                <v-text-field
                                    v-model="taxable_amount"
                                    label="Tax Amount"
                                    type="number"
                                    :readonly="
                                        !mixin_can('modify taxes on expense')
                                    "
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-textarea
                                    rows="2"
                                    v-model="form.remarks"
                                    :error-messages="errors.remarks"
                                    @input="errors.remarks = []"
                                    label="Remarks"
                                >
                                </v-textarea>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green" text @click="onClose">
                    Close
                </v-btn>
                <v-btn color="green" text @click="onSave">
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import moment from "moment";
import numeral from "numeral";
import ExpenseDataService from "../../services/ExpenseDataService";
import VendorDialogSelector from "../../components/selector/dialog/VendorDialogSelector";
import UserDataService from "../../services/UserDataService";

export default {
    props: {
        user: {
            type: Object,
            default: () => {}
        }
    },
    name: "add-expense",
    data() {
        return {
            loader: false,
            valid: false,
            menu: false,
            openDialog: false,
            form: {
                code: null,
                reference_no: null,
                description: null,
                amount: 0,
                reimbursable_amount: 0,
                tax_name: "",
                tax_rate: 0,
                is_compound_tax: false,
                is_tax_inclusive: true,
                tax_amount: 0,
                receipt_number: null,
                date: moment().format("YYYY-MM-DD"),
                details: [],
                remarks: "",
                notes: "",
                encoding_period: this.$store.getters.settings
                    .expense_encoding_period,
                expense_type: null,
                sub_type: null,
                user: null,
                vendor: null,
                expense_report_id: null,
                tax_id: null,
                expense_header_id: null,
                details_quantity: 0,
                details_amount: 0,
                is_active: true,
                is_reimbursable: false,
                revolving_fund: 0
            },
            expense_types: [],
            sub_types: [],
            errors: {
                sub_type: [],
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
                expense_type_id: [],
                sub_type_id: [],
                user_id: [],
                vendor_id: [],
                expense_report_id: [],
                tax_id: [],
                expense_header_id: [],
                is_active: []
            }
        };
    },
    components: {
        VendorDialogSelector
    },
    methods: {
        selectVendor(e) {
            if (e == null || e == undefined) {
                this.form.vendor = null;
                return;
            }
            this.form.vendor = e;
        },
        resetVendor() {
            this.form.vendor = null;
        },
        loadSubTypes(e) {
            // this.form.sub_type = null;
            if (e) {
                this.sub_types = e.sub_types;
                this.sub_types.unshift({ id: null, name: "None", limit: null });
            }
        },
        onClose() {
            Object.assign(this.$data, this.$options.data.apply(this));
            this.openDialog = false;
            this.$emit("on-close");
        },
        onSave(value) {
            let expense_type_limit = this.form.expense_type
                ? this.form.expense_type.limit
                : null;
            let sub_type_limit = this.form.sub_type
                ? this.form.sub_type.limit
                : null;
            let expense_limit = sub_type_limit
                ? sub_type_limit
                : expense_type_limit;
            let expense_amount = this.form.amount;

            if (!this.mixin_can("add expenses beyond limit")) {
                if (!this.itemize) {
                    if (
                        expense_limit !== null &&
                        expense_limit < expense_amount
                    ) {
                        this.mixin_errorDialog(
                            "Error",
                            "Amount can't be greater than expense limit."
                        );
                        return;
                    }
                } else {
                    if (
                        expense_limit !== null &&
                        expense_limit < this.form.details_amount
                    ) {
                        this.mixin_errorDialog(
                            "Error",
                            "Itemized Expenses Amount can't be greater than expense limit"
                        );
                        return;
                    }
                }
            }

            if (this.form.user == null) {
                this.mixin_errorDialog("Error", "No user selected");
                return;
            }

            if (!this.form.expense_type) {
                this.mixin_errorDialog("Error", "No Expense Type Selected");
                return;
            }

            if (
                this.amount_to_replenish >
                (this.form.user ? this.form.user.remaining_fund : 0)
            ) {
                this.mixin_errorDialog(
                    "Error",
                    "Amount to replenish is greater than remaining fund"
                );
                return;
            }

            if (
                this.amount_to_replenish + this.amount_to_reimburse <
                this.form.amount
            ) {
                this.mixin_errorDialog(
                    "Error",
                    "Expense Amount is greater than amount to replenish/reimburse"
                );
                return;
            }

            if (this.amount_to_replenish + this.amount_to_reimburse <= 0) {
                this.mixin_errorDialog(
                    "Error",
                    "Total Expenses can't be lesser or equal to zero"
                );
                return;
            }

            this.$refs.form.validate();
            if (!this.$refs.form.validate()) {
                return;
            }

            if (this.form.vendor) {
                if (!this.form.vendor.is_vat_inclusive) {
                    this.form.tax_rate = 0;
                    this.form.tax_amount = 0;
                }
            }

            this.form.details = null;
            this.form.expense_type_id = this.form.expense_type
                ? this.form.expense_type.id
                : null;
            this.form.sub_type_id = this.form.sub_type
                ? this.form.sub_type.id
                : null;
            this.form.user_id = this.form.user ? this.form.user.id : null;
            this.form.vendor_id = this.form.vendor ? this.form.vendor.id : null;
            this.form.reimbursable_amount = this.amount_to_reimburse;

            ExpenseDataService.store(this.form)
                .then(response => {
                    this.mixin_successDialog(
                        response.data.status,
                        response.data.message
                    );
                    this.loading = false;
                    this.formDataLoaded = true;
                    this.onClose();
                })
                .catch(error => {
                    this.mixin_showErrors(error);
                    this.errors = error.response.data.errors;
                    this.formDataLoaded = true;
                });
        },
        loadUser(data) {
            if (data) {
                UserDataService.show(data.id, { params: { addExpense: true } })
                    .then(response => {
                        this.form.user = response.data.data;
                        this.expense_types = response.data.data.expense_types;
                    })
                    .catch(error => this.mixin_showErrors(error));
            }
        }
    },
    computed: {
        minDate() {
            if (this.mixin_can("add expenses beyond encoding period")) {
                return null;
            }
            let settings = this.$store.getters.settings;
            let encodingMinDate = moment()
                .subtract((settings.expense_encoding_period ?? 1) - 1, "days")
                .format("YYYY-MM-DD");
            return encodingMinDate;
        },
        maxDate() {
            let today = moment().format("YYYY-MM-DD");
            return today;
        },
        taxable_amount: {
            get: function() {
                if (!this.form.is_tax_inclusive) {
                    this.form.tax_amount = this.tax_exclusive.toFixed(2);
                    return this.tax_exclusive.toFixed(2);
                }

                this.form.tax_amount = this.tax_inclusive.toFixed(2);
                return this.tax_inclusive.toFixed(2);
            },
            set: function(amount) {
                this.form.tax_amount = amount;
                return amount;
            }
        },
        tax_inclusive() {
            return (
                (this.mixin_convertToNumber(this.form.amount) /
                    (1 +
                        this.mixin_convertToNumber(this.form.tax_rate) / 100)) *
                (this.mixin_convertToNumber(this.form.tax_rate) / 100)
            );
        },
        tax_exclusive() {
            return (
                this.mixin_convertToNumber(this.form.amount) *
                (this.mixin_convertToNumber(this.form.tax_rate) / 100)
            );
        },
        amount_to_reimburse() {
            let remaining_fund = this.mixin_convertToNumber(
                this.form.user ? this.form.user.remaining_fund : 0
            );
            let amount = this.mixin_convertToNumber(this.form.amount);
            let reimbursable = this.mixin_convertToNumber(
                this.form.reimbursable_amount
            );

            if (this.mixin_can("set reimbursable amount")) {
                return reimbursable > amount ? 0 : reimbursable;
            }

            if (remaining_fund < amount) {
                let to_replenish = Math.abs(remaining_fund - amount);

                this.form.reimbursable_amount = to_replenish;

                return to_replenish;
            }

            this.form.reimbursable_amount = 0;

            return 0;
        },
        amount_to_replenish() {
            let remaining_fund = this.mixin_convertToNumber(
                this.form.user ? this.form.user.remaining_fund : 0
            );
            let amount = this.mixin_convertToNumber(this.form.amount);
            let reimbursable = this.mixin_convertToNumber(
                this.form.reimbursable_amount
            );
            let amt_to_replenish =
                amount < reimbursable ? 0 : amount - reimbursable;

            if (this.mixin_can("set reimbursable amount")) {
                return amount - reimbursable > remaining_fund
                    ? 0
                    : amt_to_replenish;
            }

            if (remaining_fund >= amount) {
                return amount;
            }

            return amount - Math.abs(remaining_fund - amount);
        },
        isVendorTaxInclusive() {
            return this.form.vendor ? this.form.vendor.is_vat_inclusive : false;
        },
        expense_amount_limit() {
            if (this.form.sub_type) {
                return this.form.sub_type.limit == null
                    ? this.form.expense_type
                        ? this.form.expense_type.limit
                        : null
                    : this.form.sub_type.limit;
            }

            if (this.form.expense_type) {
                return this.form.expense_type.limit == null
                    ? null
                    : this.form.expense_type.limit;
            }

            return null;
        }
    },

    watch: {
        openDialog() {
            if (this.openDialog) {
                this.loadUser(this.user);
            }
        },
        "form.vendor": function() {
            this.form.tax_rate = this.$store.getters.settings.tax_rate;
            // this.form.tax_rate = 12;
            this.form.tax_amount = 0;
            this.form.is_tax_inclusive = true;
        },
        // "form.user": function() {
        //     this.expense_types = this.form.user
        //         ? this.form.user.expense_types
        //         : [];
        // },
        "form.expense_type": function() {
            if (this.form) {
                this.loadSubTypes(this.form.expense_type);
            }
        }
    }
};
</script>
