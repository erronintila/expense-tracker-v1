<template>
    <v-form ref="form" v-model="valid">
        <div class="overline green--text">
            BASIC DETAILS
            <v-chip
                v-if="expenseReportForm.status"
                x-small
                color="expenseReportForm.status.color"
            >
                {{ expenseReportForm.status.status }}
            </v-chip>
        </div>
        <DateRangePicker2></DateRangePicker2>
        <DateRangePicker
            :preset="preset"
            :presets="presets"
            :value="date_range"
            :solo="false"
            :buttonType="false"
            :buttonColor="'white'"
            :buttonDark="false"
            @updateDates="updateDates"
        >
        </DateRangePicker>
        <slot name="userSelector"></slot>
        <v-combobox
            v-model="expenseReportForm.description"
            :rules="[
                ...mixin_validation.required,
                ...mixin_validation.minLength(100)
            ]"
            :counter="100"
            :items="[default_description]"
            :error-messages="errors.description"
            @input="errors.description = []"
            label="Description"
        ></v-combobox>

        <div class="overline green--text">
            Expenses
        </div>

        <v-data-table
            v-model="expenseReportForm.expenses"
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
                <div v-if="expenseReportForm.expenses.length > 0">
                    <div class="d-inline">
                        {{ expenseReportForm.expenses.length }} Item(s) Selected
                    </div>
                    <v-btn @click="expenseReportForm.expenses = []">
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

        <div class="red--text" v-if="errors.expenses.length > 0">
            <small>{{ errors.expenses[0] }}</small>
        </div>

        <v-row>
            <v-col cols="12" md="6">
                <v-textarea
                    v-model="expenseReportForm.remarks"
                    label="Remarks"
                    :rows="3"
                >
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
import DateRangePicker from "../../../../components/daterangepicker/DateRangePicker";
import ExpenseDataService from "../../../../services/ExpenseDataService";
import DateRangePicker2 from "../../../../components/datepicker/DateRangePicker";

export default {
    props: {
        form: {
            type: Object,
            default: () => {
                return {
                    code: "",
                    description: "",
                    remarks: "",
                    notes: "",
                    user: null,
                    expenses: []
                };
            }
        },
        rules: {
            type: Object,
            default: () => {
                return {};
            }
        },
        errors: {
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
        }
    },
    components: {
        DateRangePicker,
        DateRangePicker2
    },
    data() {
        return {
            loading: true,
            valid: false,
            date_range: [
                moment()
                    .startOf("month")
                    .format("YYYY-MM-DD"),
                moment()
                    .endOf("month")
                    .format("YYYY-MM-DD")
            ],
            preset: "",
            presets: [
                "Today",
                "Yesterday",
                "Last 7 Days",
                "Last 30 Days",
                "This Week",
                "This Month",
                "This Quarter",
                "This Year",
                "Last Week",
                "Last Month",
                "Last Quarter",
                "Last Year",
                "Last 5 Years"
            ],
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
            this.date_range = e;
        },
        getDataFromApi() {
            this.loading = true;

            return new Promise((resolve, reject) => {
                const { sortBy, sortDesc, page, itemsPerPage } = this.options;

                let range = this.date_range;
                let user_id = this.expenseReportForm.user
                    ? this.expenseReportForm.user.id
                    : null;

                let data = {
                    params: {
                        page: page,
                        itemsPerPage: itemsPerPage,
                        start_date: range[0],
                        end_date: range[1] ? range[1] : range[0],
                        user_id: user_id,
                        expense_report_id: this.expense_report_id,
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
            this.$refs.form.validate();

            if (this.expenseReportForm.user == null) {
                this.mixin_errorDialog("Error", "No employee selected");
                return;
            }

            if (this.expenseReportForm.expenses.length == 0) {
                this.mixin_errorDialog("Error", "No expense(s) selected");
                return;
            }

            this.$emit("onSave", this.expenseReportForm);
        }
    },
    computed: {
        expenseReportForm: {
            get() {
                console.log(this.form);
                return this.form;
            },
            set(value) {
                return value;
            }
        },
        params(nv) {
            return {
                ...this.options,
                query: this.date_range,
                query: this.expenseReportForm.user
            };
        },
        default_description() {
            return `Expense Report Summary (${moment(this.date_range[0]).format(
                "LL"
            )} - ${moment(this.date_range[1]).format("LL")})`;
        },
        balance() {
            return this.total - this.paid;
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
        "expenseReportForm.expenses": function() {
            this.total = this.expenseReportForm.expenses.reduce(
                (total, item) => total + item.amount,
                0
            );

            if (this.expenseReportForm.expenses.length > 0) {
                this.errors.expenses = [];
            }
        },
        "expenseReportForm.user": function() {
            this.getDataFromApi().then(data => {
                this.items = data.items;
                this.totalItems = data.total;
            });
        }
    }
};
</script>
