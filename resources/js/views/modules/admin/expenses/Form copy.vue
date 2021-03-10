<template>
    <v-form ref="form" v-model="valid">
        <div class="overline mb-4 green--text">
            Basic Details
        </div>
        <p class="text--disabled">
            Note: Due of encoding of expenses :
            {{ $store.getters.settings.submission_period }}
        </p>

        <v-row>
            <v-col>
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
        </v-row>

        <slot name="userSelector"></slot>

        <v-row>
            <v-col>
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
                                    <v-icon dark>mdi-magnify</v-icon>
                                </v-btn>
                            </template>
                        </VendorDialogSelector>
                        <AddVendor :openDialog="false"> </AddVendor>
                    </template>
                </v-text-field>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" md="">
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
            <v-col cols="12" md="">
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
        </v-row>

        <div class="overline mb-4 green--text">
            Expense Details
        </div>

        <v-row>
            <v-col>
                <div>
                    <p class="text--disabled">
                        Remaining Fund:
                        <v-btn color="green" dark small outlined>{{
                            mixin_formatNumber(
                                form.user
                                    ? form.user.remaining_fund
                                    : 0
                            )
                        }}</v-btn>
                    </p>
                </div>
            </v-col>
            <v-col>
                <div>
                    <p class="text--disabled">
                        Expense Limit:
                        <v-btn color="green" dark small outlined>{{
                            expense_amount_limit == null
                                ? "No Limit"
                                : mixin_formatNumber(expense_amount_limit)
                        }}</v-btn>
                    </p>
                </div>
            </v-col>
        </v-row>

        <div>
            <p class="text--disabled">
                Note: Expense amount exceeding the remaining fund/expense limit
                will be considered as reimbursable.
            </p>
        </div>

        <!-- <v-list-item three-line>
            <v-list-item-content>
                <div class="overline mb-4 green--text">
                    Expense Details
                </div>
                <v-list-item-subtitle>
                    Remaining Fund:

                    <v-btn color="green" dark small outlined>{{
                        mixin_formatNumber(
                            form.user
                                ? form.user.remaining_fund
                                : 0
                        )
                    }}</v-btn>
                    ~ Expense Limit:
                    <v-btn color="green" dark small outlined>{{
                        expense_amount_limit == null
                            ? "No Limit"
                            : mixin_formatNumber(expense_amount_limit)
                    }}</v-btn>
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                    Note: Expense amount exceeding the remaining fund/expense
                    limit will be considered as reimbursable.
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item> -->

        <v-row>
            <v-col cols="12" md="8">
                <v-text-field
                    v-model="form.description"
                    label="Description"
                ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
                <v-text-field
                    v-model="form.receipt_number"
                    :error-messages="errors.receipt_number"
                    @input="errors.receipt_number = []"
                    label="Receipt No."
                    required
                ></v-text-field>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" md="4">
                <v-text-field
                    v-model="form.amount"
                    label="Expense Amount"
                    :error-messages="errors.amount"
                    @input="errors.amount = []"
                    :readonly="itemize"
                    type="number"
                ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
                <v-text-field
                    v-if="mixin_can('set reimbursable amount')"
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
        </v-row>

        <v-row v-if="isVendorTaxInclusive">
            <v-col cols="12" md="4">
                <v-text-field
                    v-model="form.tax_rate"
                    label="Tax Rate"
                    suffix="%"
                    type="number"
                    :readonly="!mixin_can('modify taxes on expense')"
                ></v-text-field>
            </v-col>

            <v-col cols="12" md="8">
                <v-text-field
                    v-model="taxable_amount"
                    label="Tax Amount"
                    type="number"
                    :readonly="!mixin_can('modify taxes on expense')"
                ></v-text-field>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-checkbox
                    v-model="itemize"
                    label="Itemize Expenses"
                    @change="
                        form.amount = 0;
                        form.revolving_fund = 0;
                    "
                ></v-checkbox>
            </v-col>
        </v-row>

        <v-data-table
            v-if="itemize"
            :headers="headers"
            :items="form.details"
            :items-per-page="5"
            :footer-props="{
                itemsPerPageOptions: [5, 10, 20]
            }"
        >
            <template slot="body.append" v-if="form.details.length > 0">
                <tr class="green--text hidden-md-and-up">
                    <td class="title">
                        Total:
                        <strong>{{ form.amount }}</strong>
                    </td>
                </tr>
                <tr class="green--text hidden-sm-and-down">
                    <td class="title">Total</td>
                    <td>
                        <strong>{{ form.details_quantity }}</strong>
                    </td>
                    <td>
                        <strong>{{ form.details_amount }}</strong>
                    </td>
                    <td>
                        <strong>{{ form.amount }}</strong>
                    </td>
                    <td></td>
                </tr>
            </template>
            <template v-slot:top>
                <v-toolbar flat color="white">
                    <!-- Expense Details -->
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px">
                        <template
                            v-slot:activator="{
                                on,
                                attrs
                            }"
                        >
                            <v-btn
                                color="primary"
                                dark
                                class="mb-2"
                                v-bind="attrs"
                                v-on="on"
                                >New Item</v-btn
                            >
                        </template>
                        <v-card>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="
                                                form.details.description
                                            "
                                            label="Particular"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="3">
                                        <v-text-field
                                            v-model="
                                                form.details.quantity
                                            "
                                            label="Quantity"
                                            type="number"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="9">
                                        <v-text-field
                                            v-model="form.details.amount"
                                            label="Amount"
                                            type="number"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="total_details_amount"
                                            label="Total Amount"
                                            readonly
                                        >
                                        </v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <div>
                                            {{
                                                expense_amount_limit == null
                                                    ? "No Limit"
                                                    : `Limit: ${mixin_formatNumber(
                                                          expense_amount_limit
                                                      )} / qunatity`
                                            }}
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="primary"
                                    text
                                    @click="dialog = false"
                                >
                                    Cancel
                                </v-btn>
                                <v-btn color="primary" text @click="addItem">
                                    Add
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>
            <template
                v-slot:[`item.actions`]="{
                    item
                }"
            >
                <v-icon
                    small
                    class="mr-2"
                    @click="
                        () => {
                            onRemove(item);
                        }
                    "
                >
                    mdi-delete
                </v-icon>
            </template>
        </v-data-table>

        <v-divider class="mt-2 mb-2"></v-divider>

        <v-row>
            <v-col cols="12" md="6">
                <v-textarea
                    rows="3"
                    v-model="form.remarks"
                    :error-messages="errors.remarks"
                    @input="errors.remarks = []"
                    label="Remarks"
                >
                </v-textarea>
            </v-col>
            <v-col cols="12" md="6">
                <table width="100%" class="mt-2">
                    <tbody>
                        <tr>
                            <td class="green--text">
                                Subtotal
                            </td>
                            <td class="text-right">
                                {{ mixin_formatNumber(form.amount) }}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <small
                                    >(To replenish:
                                    {{
                                        mixin_formatNumber(amount_to_replenish)
                                    }})</small
                                >
                            </td>
                            <td class="text-right">--</td>
                        </tr>
                        <tr>
                            <td>
                                <small
                                    >(To reimburse:
                                    {{
                                        mixin_formatNumber(
                                            form.reimbursable_amount
                                        )
                                    }})</small
                                >
                            </td>
                            <td class="text-right">--</td>
                        </tr>
                        <tr v-if="isVendorTaxInclusive">
                            <td class="green--text">
                                Tax (12%)
                                <small>Inclusive</small>
                            </td>
                            <td class="text-right">
                                {{ mixin_formatNumber(0) }}
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><hr /></td>
                        </tr>
                        <tr>
                            <td class="green--text">
                                <b>Total</b>
                            </td>
                            <td class="green--text text-right">
                                <b>
                                    {{ mixin_formatNumber(expense_amount) }}
                                </b>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </v-col>
        </v-row>

        <v-row>
            <v-col class="text-right">
                <v-btn color="green" dark @click="onSave">
                    Save
                </v-btn>
                <v-btn @click="$router.go(-1)">Cancel</v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>
<script>
import moment from "moment";
import numeral from "numeral";
import Form from "./Form";
import AddVendor from "../../../../components/dialogs/AddVendor";
import VendorDialogSelector from "../.../../../../../components/selector/dialog/VendorDialogSelector";
import UserDialogSelector from "../.../../../../../components/selector/dialog/UserDialogSelector";

export default {
    props: {
        form: {
            type: Object,
            default: () => {
                return {
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
                    details: {
                        description: "",
                        quantity: 1,
                        amount: 0,
                        total: 0
                    },
                    remarks: "",
                    notes: "",
                    encoding_period: this.$store.getters.settings
                        .expense_encoding_period,
                    expense_type: {
                        id: null,
                        name: "",
                        limit: null,
                        sub_types: { id: null, name: "None", limit: null }
                    },
                    sub_type: { id: null, name: "", limit: null },
                    user: null,
                    vendor: null,
                    expense_report_id: null,
                    tax_id: null,
                    expense_header_id: null,
                    detials_quantity: 0,
                    details_amount: 0,
                    is_active: true,
                    // particular: "",
                    // particular_amount: 0,
                    // particular_reimbursable_amount: 0,
                    is_reimbursable: false,
                    revolving_fund: 0
                };
            }
        },
        rules: {
            type: Object,
            default: () => {
                return {
                    reimbursable_amount: [],
                    revolving_fund: []
                };
            }
        },
        errors: {
            type: Object,
            default: () => {
                return {
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
                };
            }
        },
        itemizeExpenses: {
            type: Boolean,
            default: false
        }
    },
    components: {
        AddVendor,
        VendorDialogSelector,
        UserDialogSelector,
        Form
    },
    data() {
        return {
            loader: false,
            panel: [0, 1],
            paid_through: "Revolving Fund",
            reimbursable_amount: false,
            openAddVendor: false,
            dialog: false,
            valid: false,
            menu: false,
            headers: [
                { text: "Particulars", value: "description", sortable: false },
                { text: "Quantity", value: "quantity", sortable: false },
                { text: "Amount", value: "amount", sortable: false },
                { text: "Total", value: "total", sortable: false },
                { text: "", value: "actions", sortable: false }
            ],
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
                details: {
                    description: "",
                    quantity: 1,
                    amount: 0,
                    total: 0
                },
                remarks: "",
                notes: "",
                encoding_period: this.$store.getters.settings
                    .expense_encoding_period,
                expense_type: {
                    id: null,
                    name: "",
                    limit: null,
                    sub_types: { id: null, name: "None", limit: null }
                },
                sub_type: { id: null, name: "", limit: null },
                user: null,
                vendor: null,
                expense_report_id: null,
                tax_id: null,
                expense_header_id: null,
                detials_quantity: 0,
                details_amount: 0,
                is_active: true,
                // particular: "",
                // particular_amount: 0,
                // particular_reimbursable_amount: 0,
                is_reimbursable: false,
                revolving_fund: 0
            },
            items: [],
            expense_types: [],
            sub_types: []
        };
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
        onRefresh() {
            Object.assign(this.$data, this.$options.data.apply(this));
        },
        onSave() {
            let expense_type_limit = this.form.expense_type.limit;
            let sub_type_limit = this.form.sub_type.limit;
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

            if (this.form.expense_type.id == null) {
                this.mixin_errorDialog("Error", "No Expense Type Selected");
                return;
            }

            if (
                this.amount_to_replenish >
                (this.form.user
                    ? this.form.user.remaining_fund
                    : 0)
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

            this.$emit("on-save", {
                ...this.form,
                ...{ itemize: this.itemize },
                ...{ items: this.form.details },
                ...{ amount_to_reimburse: this.amount_to_reimburse }
            });
        },
        addItem() {
            let description = this.form.details.description;
            let quantity = this.mixin_convertToNumber(
                this.form.details.quantity
            );
            let amount = this.mixin_convertToNumber(
                this.form.details.amount
            );
            let total = this.mixin_convertToNumber(
                this.form.details.total
            );
            let limit = this.expense_amount_limit;

            if (description == "" || total <= 0) {
                return;
            }

            if (!this.mixin_can("add expenses beyond limit")) {
                if (limit !== null) {
                    if (limit * quantity < amount) {
                        return;
                    }
                }
            }

            this.form.details.push({
                description: description,
                quantity: quantity,
                amount: amount,
                total: total
            });

            this.dialog = false;
            this.form.details.description = "";
            this.form.details.quantity = 1;
            this.form.details.amount = 0;
            this.form.details.total = 0;
        },
        onRemove(item) {
            const index = this.form.details.indexOf(item);
            confirm("Are you sure you want to remove this item?") &&
                this.form.details.splice(index, 1);
        },
        loadSubTypes(e) {
            this.form.sub_type = { id: null, name: "", limit: null };
            this.sub_types = e.sub_types;
            this.sub_types.unshift({ id: null, name: "None", limit: null });
        }
    },
    computed: {
        itemize: {
            get() {
                return this.itemizeExpenses;
            },
            set(value) {
                return value;
            }
        },
        minDate() {
            if (this.mixin_can("add expenses beyond encoding period")) {
                return null;
            }

            let settings = this.$store.getters.settings;
            let submissionMinDate = moment().endOf("day");
            let encodingMinDate = moment()
                .subtract(settings.expense_encoding_period - 1, "days")
                .format("YYYY-MM-DD");

            switch (settings.submission_period) {
                case "Weekly":
                    submissionMinDate = moment()
                        .startOf("week")
                        .format("YYYY-MM-DD");
                    break;
                case "Monthly":
                    submissionMinDate = moment()
                        .startOf("month")
                        .format("YYYY-MM-DD");
                    break;
                default:
                    submissionMinDate = moment()
                        .startOf("day")
                        .format("YYYY-MM-DD");
                    break;
            }

            return moment(encodingMinDate).isSameOrAfter(submissionMinDate)
                ? encodingMinDate
                : submissionMinDate;
        },
        maxDate() {
            let settings = this.$store.getters.settings ?? null;
            let today = moment().format("YYYY-MM-DD");
            let maxDate = moment().endOf("day");

            switch (settings.submission_period) {
                case "Weekly":
                    maxDate = moment()
                        .endOf("week")
                        .format("YYYY-MM-DD");
                    break;
                case "Monthly":
                    maxDate = moment()
                        .endOf("month")
                        .format("YYYY-MM-DD");
                    break;
                default:
                    maxDate = moment()
                        .endOf("day")
                        .format("YYYY-MM-DD");
                    break;
            }

            return moment(today).isSameOrBefore(maxDate) ? today : maxDate;
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
        expense_amount() {
            let amt_to_replenish = this.mixin_convertToNumber(
                this.amount_to_replenish
            );
            let amt_to_reimburse = this.mixin_convertToNumber(
                this.amount_to_reimburse
            );

            return this.mixin_convertToNumber(
                amt_to_replenish + amt_to_reimburse
            );
        },
        display_reimbursable_amount() {
            return (
                parseFloat(this.form.amount) >
                parseFloat(
                    this.form.user
                        ? this.form.user.remaining_fund
                        : 0
                )
            );
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
                        this.mixin_convertToNumber(this.form.tax_rate) /
                            100)) *
                (this.mixin_convertToNumber(this.form.tax_rate) / 100)
            );
        },
        tax_exclusive() {
            return (
                this.mixin_convertToNumber(this.form.amount) *
                (this.mixin_convertToNumber(this.form.tax_rate) / 100)
            );
        },
        total_details_amount() {
            let total = (
                this.mixin_convertToNumber(this.form.details.quantity) *
                this.mixin_convertToNumber(this.form.details.amount)
            ).toFixed(2);

            this.form.details.total = total;

            return total;
        },
        expense_amount_limit() {
            return this.form.sub_type.limit == null
                ? this.form.expense_type.limit
                : this.form.sub_type.limit;
        },
        isVendorTaxInclusive() {
            return this.form.vendor
                ? this.form.vendor.is_vat_inclusive
                : false;
        },
    },
    watch: {
        expenseForm: {
            immediate: true,
            deep: true,
            handler(newValue, oldValue) {
                this.form = newValue;
            }
        },
        "form.details": function() {
            if (this.form.details) {
                this.form.amount = this.form.details.reduce(
                    (total, item) => parseFloat(total) + parseFloat(item.total),
                    0
                );

                this.form.details_amount = this.form.details.reduce(
                    (total, item) =>
                        parseFloat(total) + parseFloat(item.amount),
                    0
                );

                this.form.details_quantity = this.form.details.reduce(
                    (total, item) =>
                        parseFloat(total) + parseFloat(item.quantity),
                    0
                );
            }
        },
        itemize() {
            this.form.amount = this.form.details.reduce(
                (total, item) => parseFloat(total) + parseFloat(item.total),
                0
            );

            if (this.form.user == null) {
                this.itemize = false;
                this.mixin_errorDialog("Error", "No user selected");
                return;
            }

            if (this.form.expense_type.id == null) {
                this.itemize = false;
                this.mixin_errorDialog("Error", "No expense type Selected");
                return;
            }
        },
        "form.vendor": function() {
            this.form.tax_rate = this.$store.getters.settings.tax_rate;
            this.form.tax_amount = 0;
            this.form.is_tax_inclusive = true;
        },
        "form.user": function() {
            this.expense_types = this.form.user
                ? this.form.user.expense_types
                : [];
        }
    }
};
</script>
