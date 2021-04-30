<template>
    <div>
        <loader-component v-if="!formDataLoaded"></loader-component>

        <v-form v-else ref="form" v-model="valid">
            <v-card class="mx-auto mb-4" flat>
                <div class="overline green--text">
                    BASIC DETAILS
                    <v-btn
                        v-if="isEdit"
                        :color="form.status.color"
                        x-small
                        dark
                    >
                        {{ form.status.status }}
                    </v-btn>
                </div>
                <v-menu
                    ref="menu"
                    v-model="menu"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="form.date"
                            :error-messages="paymentErrors.date"
                            @input="paymentErrors.date = []"
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
                        :max="maxDate"
                    >
                    </v-date-picker>
                </v-menu>

                <slot name="userSelector"></slot>

                <v-text-field
                    v-model="form.description"
                    :rules="[
                        ...mixin_validation.required,
                        ...mixin_validation.minLength(100)
                    ]"
                    :counter="100"
                    :error-messages="paymentErrors.description"
                    label="Description"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="form.voucher_no"
                    :rules="[...mixin_validation.required]"
                    :error-messages="paymentErrors.voucher_no"
                    :counter="100"
                    label="Voucher No."
                    required
                    type="number"
                ></v-text-field>

                <div class="overline green--text mb-4">
                    Expense Reports
                </div>

                <small
                    v-if="
                        paymentErrors.expense_reports &&
                            paymentErrors.expense_reports.length > 0
                    "
                    class="red--text"
                    >{{ paymentErrors.expense_reports[0] }}</small
                >

                <v-data-table
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
                    v-model="selected"
                    show-expand
                    single-expand
                    show-select
                    item-key="id"
                    class="elevation-0"
                >
                    <template v-slot:top>
                        <DateRangePicker
                            ref="dateRangePicker"
                            :dateRange="date_range"
                            @on-change="updateDates"
                        >
                            <template
                                v-slot:openDialog="{
                                    on,
                                    attrs,
                                    dateRangeText
                                }"
                            >
                                <v-text-field
                                    label="Date Created"
                                    v-bind="attrs"
                                    v-on="on"
                                    readonly
                                    :value="dateRangeText"
                                >
                                </v-text-field>
                            </template>
                        </DateRangePicker>

                        <div v-if="selected.length > 0">
                            <div class="d-inline">
                                {{ selected.length }} Item(s) Selected
                            </div>
                            <v-btn @click="selected = []">
                                Clear All Selected
                            </v-btn>
                        </div>
                    </template>
                    <template v-slot:[`item.period`]="{ item }">
                        {{ item.from }} ~ {{ item.to }}
                    </template>
                    <template v-slot:[`item.actions`]="{ item }">
                        <v-icon
                            small
                            class="mr-2"
                            @click="$router.push(`/expense_reports/${item.id}`)"
                        >
                            mdi-eye
                        </v-icon>
                    </template>
                    <template v-slot:expanded-item="{ headers, item }">
                        <td :colspan="headers.length">
                            <table>
                                <tr>
                                    <td>
                                        <strong>Created</strong>
                                    </td>
                                    <td>:</td>
                                    <td>
                                        {{
                                            mixin_formatDate(
                                                item.created_at,
                                                "YYYY-MM-DD HH:mm:ss"
                                            )
                                        }}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Reimbursable Amount</strong>
                                    </td>
                                    <td>:</td>
                                    <td>
                                        {{
                                            mixin_formatNumber(
                                                item.total_reimbursable
                                            )
                                        }}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Paid</strong>
                                    </td>
                                    <td>:</td>
                                    <td>
                                        {{ mixin_formatNumber(item.paid) }}
                                    </td>
                                </tr>
                                <tr v-if="item.balance > 0">
                                    <td>
                                        <strong>Balance</strong>
                                    </td>
                                    <td>:</td>
                                    <td>
                                        {{ mixin_formatNumber(item.balance) }}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Status</strong>
                                    </td>
                                    <td>:</td>
                                    <td>
                                        {{ item.status.status }}
                                        ({{ item.status.remarks }})
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
                    <template v-slot:[`item.total`]="{ item }">
                        {{ mixin_formatNumber(item.total) }}
                    </template>
                    <template v-slot:[`item.user`]="{ item }">
                        {{ item.last_name + ", " + item.first_name }}
                    </template>
                    <template v-slot:[`item.updated_at`]="{ item }">
                        {{ mixin_getHumanDate(item.updated_at) }}
                    </template>
                    <template slot="body.append" v-if="items.length > 0">
                        <tr class="green--text hidden-md-and-up">
                            <td class="title">
                                Total:
                                <strong>{{ total }}</strong>
                            </td>
                        </tr>
                        <tr class="green--text hidden-sm-and-down">
                            <td class="title">Total</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <strong>{{ total }}</strong>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </template>
                </v-data-table>

                <v-row>
                    <v-col cols="12" md="6">
                        <v-textarea
                            v-model="form.remarks"
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
                                    <td
                                        class="green--text text--darken-4 text-right"
                                    >
                                        {{ mixin_formatNumber(total) }}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Paid Amount
                                    </td>
                                    <td>:</td>
                                    <td
                                        class="green--text text--darken-4 text-right"
                                    >
                                        (-)
                                        {{ mixin_formatNumber(form.amount) }}
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
                                    <td
                                        class="green--text text--darken-4 text-right"
                                    >
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
            </v-card>
        </v-form>
    </div>
</template>

<script>
import moment from "moment";
import DateRangePicker from "../../../components/datepicker/DateRangePicker";
import ExpenseReportDataService from "../../../services/ExpenseReportDataService";

export default {
    props: {
        isEdit: {
            type: Boolean,
            default: false
        },
        paymentForm: {
            type: Object,
            default: () => {
                return {
                    id: 0,
                    code: "",
                    reference_no: "",
                    voucher_no: "",
                    description: "",
                    date: moment().format("YYYY-MM-DD"),
                    cheque_no: "",
                    cheque_date: "",
                    amount: "",
                    payee: "",
                    payee_address: "",
                    payee_phone: "",
                    remarks: "",
                    notes: "",
                    status: "",
                    user: {},
                    expense_reports: []
                };
            }
        },
        paymentRules: {
            type: Object,
            default: () => {
                return {};
            }
        },
        paymentErrors: {
            type: Object,
            default: () => {
                return {
                    user_id: [],
                    code: [],
                    reference_no: [],
                    voucher_no: [],
                    description: [],
                    date: [],
                    cheque_no: [],
                    cheque_date: [],
                    amount: [],
                    payee: [],
                    payee_address: [],
                    payee_phone: [],
                    remarks: [],
                    notes: [],
                    expense_reports: []
                };
            }
        },
        payment_id: {
            type: Number,
            default: null
        }
    },
    components: {
        DateRangePicker
    },
    data() {
        return {
            // loading: true,
            formDataLoaded: false,
            // menu_payee: false,
            // usersParameters: {
            //     params: {
            //         with_expense_types: true,
            //         is_superadmin: false
            //     }
            // },
            date_range: [
                moment()
                    .startOf("week")
                    .format("YYYY-MM-DD"),
                moment()
                    .endOf("week")
                    .format("YYYY-MM-DD")
            ],
            // preset: "",
            // presets: [
            //     "Today",
            //     "Last 7 Days",
            //     "Last 30 Days",
            //     "This Week",
            //     "This Month",
            //     "This Year"
            // ],
            selected: [],
            loading: true,
            valid: false,
            preset: {},
            presets: [],
            form: {
                id: 0,
                code: "",
                reference_no: "",
                voucher_no: "",
                description: "",
                date: moment().format("YYYY-MM-DD"),
                cheque_no: "",
                cheque_date: "",
                amount: "",
                payee: "",
                payee_address: "",
                payee_phone: "",
                remarks: "",
                notes: "",
                user: null,
                from: moment()
                    .startOf("week")
                    .format("YYYY-MM-DD"),
                to: moment()
                    .endOf("week")
                    .format("YYYY-MM-DD"),
                expense_reports: []
            },
            headers: [
                { text: "Period", value: "period", sortable: false },
                { text: "Code", value: "code", sortable: false },
                { text: "Description", value: "description", sortable: false },
                { text: "Amount", value: "total", sortable: false },
                { text: "Balance", value: "balance", sortable: false },
                { text: "Payment", value: "balance", sortable: false },
                { text: "", value: "actions", sortable: false },
                { text: "", value: "data-table-expand", sortable: false }
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
            },
            // users: [],
            totalAmount: 0,
            menu: false
        };
    },
    methods: {
        updateDates(e) {
            this.date_range = e;

            if (e && e.length == 2) {
                this.form.from = e[0];
                this.form.to = e[1];
                this.$emit("on-update", this.form);
            }
        },
        getDataFromApi() {
            this.loading = true;

            return new Promise((resolve, reject) => {
                const { sortBy, sortDesc, page, itemsPerPage } = this.options;

                let date_range = this.date_range;
                let user_id = this.form.user ? this.form.user.id : null;

                let data = {
                    params: {
                        page: page,
                        itemsPerPage: itemsPerPage,
                        start_date: date_range[0],
                        end_date: date_range[1] ? date_range[1] : date_range[0],
                        user_id: user_id,
                        payment_id: this.form ? this.form.id : null,
                        update_payment: true
                    }
                };

                ExpenseReportDataService.getAll(data)
                    .then(response => {
                        let items = response.data.data;
                        let total = response.data.meta.total;
                        this.loading = false;
                        resolve({ items, total });
                    })
                    .catch(error => {
                        this.mixin_showErrors(error);
                        this.loading = false;
                        reject();
                    });
            });
        },
        onSave() {
            this.$refs.form.validate();

            if (this.form.user == null) {
                this.mixin_errorDialog("Error", "No employee selected");
                return;
            }

            if (this.selected.length == 0) {
                this.mixin_errorDialog(
                    "Error",
                    "No expense report(s) selected"
                );
                return;
            }

            if (this.$refs.form.validate()) {
                this.$emit("on-save", this.form);
            }
        }
    },
    computed: {
        params(nv) {
            return {
                ...this.options,
                query: this.date_range,
                query: this.form.user
            };
        },
        balance() {
            return this.total - this.paid;
        },
        maxDate() {
            return moment().format("YYYY-MM-DD");
        }
    },
    watch: {
        params: {
            handler() {
                this.getDataFromApi().then(data => {
                    this.items = data.items;
                    this.totalItems = data.total;
                    this.formDataLoaded = true;
                });
            },
            deep: true
        },
        paymentForm: {
            immediate: true,
            deep: true,
            handler(newValue, oldValue) {
                this.form = newValue;
                this.date_range = [newValue.from, newValue.to];
                this.selected = newValue.expense_reports || [];

                if (newValue && newValue.expense_reports) {
                    this.total = newValue.expense_reports.reduce(
                        (total, item) => total + item.total,
                        0
                    );
                    if (newValue.expense_reports.length > 0) {
                        this.paymentErrors.expense_reports = [];
                    }
                }
            }
        },
        selected() {
            this.form.expense_reports = this.selected;
            this.$emit("on-update", this.form);
        }
    }
};
</script>
