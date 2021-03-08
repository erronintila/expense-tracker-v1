<template>
    <v-form ref="form" v-model="valid">
        <div class="overline green--text">
            BASIC DETAILS
            <v-chip v-if="form.status" x-small color="form.status.color">
                {{ form.status.status }}
            </v-chip>
        </div>
        <DateRangePicker
            ref="dateRangePicker"
            :dateRange="dateRange"
            @on-change="updateDates"
        >
            <template v-slot:openDialog="{ on, attrs, dateRangeText }">
                <v-text-field
                    label="Date"
                    v-bind="attrs"
                    v-on="on"
                    readonly
                    :value="dateRangeText"
                >
                </v-text-field>
            </template>
        </DateRangePicker>
        <slot name="userSelector"></slot>
        <v-combobox
            v-model="form.description"
            :rules="[
                ...mixin_validation.required,
                ...mixin_validation.minLength(100)
            ]"
            :counter="100"
            :items="[default_description]"
            :error-messages="expenseReportErrors.description"
            @input="expenseReportErrors.description = []"
            label="Description"
        >
        </v-combobox>

        <div class="overline green--text">
            Expenses
        </div>

        <v-data-table
            v-model="form.expenses"
            :headers="headers"
            :items="items"
            :loading="loading"
            :options.sync="options"
            :server-items-length="totalItems"
            :footer-props="{
                itemsPerPageOptions: [10, 20, 50, 100],
                showFirstLastPage: true,
                firstIcon: 'mdi-page-first',
                lastIcon: 'mdi-page-last',
                prevIcon: 'mdi-chevron-left',
                nextIcon: 'mdi-chevron-right'
            }"
            show-select
            show-expand
            single-expand
            item-key="id"
            class="elevation-0"
        >
            <template v-slot:top>
                <div v-if="selectedExpenses.length">
                    <div class="d-inline">
                        {{ selectedExpenses.length }} Item(s) Selected
                    </div>
                    <v-btn @click="form.expenses = []">
                        Clear All Selected
                    </v-btn>
                </div>
            </template>
            <template v-slot:expanded-item="{ headers, item }">
                <td :colspan="headers.length">
                    <table>
                        <tr>
                            <td>
                                <strong>Code</strong>
                            </td>
                            <td>:</td>
                            <td>{{ item.code }}</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Description</strong>
                            </td>
                            <td>:</td>
                            <td>
                                {{ item.description }}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Receipt</strong>
                            </td>
                            <td>:</td>
                            <td>
                                {{ item.receipt_number }}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Vendor</strong>
                            </td>
                            <td>:</td>
                            <td>
                                {{ item.vendor ? item.vendor.name : "" }}
                            </td>
                        </tr>
                        <tr v-if="item.remarks">
                            <td>
                                <strong>Remarks</strong>
                            </td>
                            <td>:</td>
                            <td>{{ item.remarks }}</td>
                        </tr>
                    </table>
                </td>
            </template>
            <template v-slot:[`item.updated_at`]="{ item }">
                {{ mixin_getHumanDate(item.updated_at) }}
            </template>
            <template v-slot:[`item.amount`]="{ item }">
                {{ mixin_formatNumber(item.amount) }}
            </template>
            <template v-slot:[`item.replenishment`]="{ item }">
                {{ mixin_formatNumber(item.amount - item.reimbursable_amount) }}
            </template>
            <template v-slot:[`item.status.status`]="{ item }">
                <v-chip :color="item.status.color" dark small>
                    {{ item.status.status }}
                </v-chip>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
                <v-icon
                    small
                    class="mr-2"
                    @click="$router.push(`/admin/expenses/${item.id}`)"
                >
                    mdi-eye
                </v-icon>
            </template>
        </v-data-table>

        <div class="red--text" v-if="expenseReportErrors.expenses.length > 0">
            <small>{{ expenseReportErrors.expenses[0] }}</small>
        </div>

        <v-row>
            <v-col cols="12" md="6">
                <v-textarea v-model="form.remarks" label="Remarks" :rows="3">
                </v-textarea>
            </v-col>

            <v-col cols="12" md="6">
                <table width="100%" class="mt-4">
                    <tbody>
                        <tr>
                            <td>
                                Total Expense Amount
                            </td>
                            <td>:</td>
                            <td class="green--text text--darken-4 text-right">
                                {{ mixin_formatNumber(total) }}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Paid Amount
                            </td>
                            <td>:</td>
                            <td class="green--text text--darken-4 text-right">
                                (-)
                                {{ mixin_formatNumber(paid) }}
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3">
                                <v-divider></v-divider>
                            </td>
                        </tr>
                        <tr>
                            <th class="text-left">
                                Amount to be reimbursed
                            </th>
                            <td>:</td>
                            <td class="green--text text--darken-4 text-right">
                                {{ mixin_formatNumber(balance) }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </v-col>
        </v-row>

        <v-row>
            <v-col class="text-right">
                <v-btn color="green" dark @click="onSave">Save</v-btn>
                <v-btn @click="$router.go(-1)">
                    Cancel
                </v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>

<script>
import moment from "moment";
import numeral from "numeral";
import ExpenseDataService from "../../../../services/ExpenseDataService";
import DateRangePicker from "../../../../components/datepicker/DateRangePicker";

export default {
    props: {
        expenseReportForm: {
            type: Object,
            default: () => {
                return {
                    id: null,
                    code: "",
                    reference_no: "",
                    description: "",
                    remarks: "",
                    notes: "",
                    submission_period: null,
                    approval_period: null,
                    from: null,
                    to: null,
                    status: {},
                    is_late_submitted: false,
                    is_late_approved: false,
                    total: 0,
                    total_reimbursable: 0,
                    paid: 0,
                    balance: 0,
                    total_received_payment: 0,
                    expenses: [],
                    payments: [],
                    user: {}
                };
            }
        },
        expenseReportRules: {
            type: Object,
            default: () => {
                return {};
            }
        },
        expenseReportErrors: {
            type: Object,
            default: () => {
                return {
                    date_range: [],
                    code: [],
                    description: [],
                    remarks: [],
                    notes: [],
                    user_id: [],
                    expenses: []
                };
            }
        },
        expense_report_id: {
            type: Number,
            default: null
        },
        expenseReportDateRange: {
            type: Array,
            default: () => []
        }
    },
    components: {
        DateRangePicker
    },
    data() {
        return {
            loading: true,
            valid: false,
            preset: {},
            presets: [],
            form: {
                id: null,
                code: "",
                reference_no: "",
                description: "",
                remarks: "",
                notes: "",
                submission_period: null,
                approval_period: null,
                from: null,
                to: null,
                status: {},
                is_late_submitted: false,
                is_late_approved: false,
                total: 0,
                total_reimbursable: 0,
                paid: 0,
                balance: 0,
                total_received_payment: 0,
                expenses: [],
                payments: [],
                user: {}
            },
            headers: [
                { text: "Date", value: "date" },
                { text: "Type", value: "expense_type.name" },
                { text: "Receipt", value: "receipt_number" },
                { text: "Vendor", value: "vendor.name" },
                { text: "Amount", value: "amount" },
                { text: "Actions", value: "actions", sortable: false },
                { text: "", value: "data-table-expand" }
            ],
            items: [],
            total: 0,
            paid: 0,
            totalItems: 0,
            options: {
                sortBy: ["created_at"],
                sortDesc: [true],
                page: 1,
                itemsPerPage: 10
            }
        };
    },
    methods: {
        updateDates(e) {
            this.dateRange = e;
        },
        getDataFromApi() {
            this.loading = true;

            return new Promise((resolve, reject) => {
                const { sortBy, sortDesc, page, itemsPerPage } = this.options;

                let range = this.dateRange;
                let user_id = this.form.user ? this.form.user.id : null;

                let data = {
                    params: {
                        page: page,
                        itemsPerPage: itemsPerPage,
                        start_date: range[0],
                        end_date: range[1] ? range[1] : range[0],
                        user_id: user_id,
                        expense_report_id: this.form ? this.form.id : null,
                        update_report: true
                    }
                };

                ExpenseDataService.getAll(data)
                    .then(response => {
                        let items = response.data.data;
                        let total = response.data.meta.total;
                        resolve({ items, total });
                    })
                    .catch(error => {
                        this.mixin_showErrors(error);
                        reject();
                    })
                    .finally((this.loading = false));
            });
        },
        onSave() {
            console.log(this.dateRange);
            return;
            this.$refs.form.validate();

            if (this.form.user == null) {
                this.mixin_errorDialog("Error", "No employee selected");
                return;
            }

            if (this.selectedExpenses.length == 0) {
                this.mixin_errorDialog("Error", "No expense(s) selected");
                return;
            }

            this.$emit("on-save", this.form);
        }
    },
    computed: {
        params(nv) {
            return {
                ...this.options,
                query: this.dateRange,
                query: this.form.user
            };
        },
        default_description() {
            return `Expense Report Summary (${this.form.from} - ${this.form.to})`;
        },
        balance() {
            return this.total - this.paid;
        },
        selectedExpenses() {
            if (this.form) {
                if (this.form.expenses && this.form.expenses.length) {
                    return this.form.expenses;
                }
            }

            return [];
        },
        dateRange: {
            get() {
                if (this.form) {
                    return [this.form.from, this.form.to];
                }

                return [
                    moment()
                        .startOf("week")
                        .format("YYYY-MM-DD"),
                    moment()
                        .endOf("week")
                        .format("YYYY-MM-DD")
                ];
            },
            set(value) {
                console.log("set date", value);
                if (this.form) {
                    this.form.from = value[0];
                    this.form.to = value[1];
                    return;
                }

                this.form.from = moment()
                    .startOf("week")
                    .format("YYYY-MM-DD");
                this.form.to = moment()
                    .endOf("week")
                    .format("YYYY-MM-DD");
            }
        }
    },
    watch: {
        params: {
            handler() {
                this.getDataFromApi().then(data => {
                    this.items = data.items;
                    this.totalItems = data.total;
                });
            },
            deep: true
        },
        expenseReportForm: {
            deep: true,
            immediate: true,
            handler(newValue, oldValue) {
                this.form = newValue;
                this.dateRange = [
                    newValue.from,
                    newValue.to
                ];
                if (newValue && newValue.expenses) {
                    this.total = newValue.expenses.reduce(
                        (total, item) => total + item.amount,
                        0
                    );
                    if (newValue.expenses.length > 0) {
                        this.expenseReportErrors.expenses = [];
                    }
                }

                this.getDataFromApi().then(data => {
                    this.items = data.items;
                    this.totalItems = data.total;
                });
            }
        }
    }
};
</script>
