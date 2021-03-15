<template>
    <div>
        <v-container v-if="loader" style="height: 400px;">
            <v-row class="fill-height" align-content="center" justify="center">
                <v-col class="subtitle-1 text-center" cols="12">
                    Loading, Please wait...
                </v-col>
                <v-col cols="6">
                    <v-progress-linear
                        color="green accent-4"
                        indeterminate
                        rounded
                        height="6"
                    ></v-progress-linear>
                </v-col>
            </v-row>
        </v-container>
        <v-card v-else class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">New Payment Record</h4>
            </v-card-title>
            <v-form ref="form" v-model="valid">
                <v-container>
                    <v-card class="mx-auto mb-4" flat>
                        <v-container>
                            <div class="overline green--text">
                                BASIC DETAILS
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
                                    :max="maxDate"
                                >
                                </v-date-picker>
                            </v-menu>
                            <v-text-field
                                :value="
                                    form.user
                                        ? form.user.full_name
                                        : 'No Employee'
                                "
                                :error-messages="errors.user_id"
                                @input="errors.user_id = []"
                                label="Employee"
                                readonly
                            >
                                <template v-slot:append>
                                    <UserDialogSelector
                                        ref="userDialogSelector"
                                        @selectUser="selectUser"
                                        @onReset="resetUser"
                                        :selectedUser="form.user"
                                        :usersParameters="usersParameters"
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
                                    </UserDialogSelector>
                                </template>
                            </v-text-field>

                            <v-text-field
                                v-model="form.description"
                                :rules="[
                                    ...mixin_validation.required,
                                    ...mixin_validation.minLength(100)
                                ]"
                                :counter="100"
                                :error-messages="errors.description"
                                label="Description"
                                required
                            ></v-text-field>
                            <v-text-field
                                v-model="form.voucher_no"
                                :rules="[]"
                                :counter="100"
                                label="Voucher No."
                                required
                            ></v-text-field>

                            <div class="overline green--text mb-4">
                                Expense Reports
                            </div>

                            <small
                                v-if="
                                    errors.expense_reports &&
                                        errors.expense_reports.length > 0
                                "
                                class="red--text"
                                >{{ errors.expense_reports[0] }}</small
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
                                                label="Date"
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
                                            {{ selected.length }} Item(s)
                                            Selected
                                        </div>
                                        <v-btn @click="selected = []">
                                            Clear All Selected
                                        </v-btn>
                                    </div>

                                    <v-text-field
                                        v-model="search"
                                        append-icon="mdi-magnify"
                                        label="Search"
                                        single-line
                                        hide-details
                                    ></v-text-field>
                                </template>
                                <template v-slot:[`item.period`]="{ item }">
                                    {{ item.from }} ~ {{ item.to }}
                                </template>
                                <template v-slot:[`item.actions`]="{ item }">
                                    <v-icon
                                        small
                                        class="mr-2"
                                        @click="
                                            $router.push(
                                                `/admin/expense_reports/${item.id}`
                                            )
                                        "
                                    >
                                        mdi-eye
                                    </v-icon>
                                </template>
                                <template
                                    v-slot:expanded-item="{ headers, item }"
                                >
                                    <td :colspan="headers.length">
                                        <v-container>
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
                                                        <strong
                                                            >Reimbursable
                                                            Amount</strong
                                                        >
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
                                                        {{
                                                            mixin_formatNumber(
                                                                item.paid
                                                            )
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="item.balance > 0">
                                                    <td>
                                                        <strong>Balance</strong>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        {{
                                                            mixin_formatNumber(
                                                                item.balance
                                                            )
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Status</strong>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        {{ item.status.status }}
                                                        ({{
                                                            item.status.remarks
                                                        }})
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
                                        </v-container>
                                    </td>
                                </template>
                                <template v-slot:[`item.total`]="{ item }">
                                    {{ mixin_formatNumber(item.total) }}
                                </template>
                                <template v-slot:[`item.user`]="{ item }">
                                    {{
                                        item.last_name + ", " + item.first_name
                                    }}
                                </template>
                                <template v-slot:[`item.updated_at`]="{ item }">
                                    {{ mixin_getHumanDate(item.updated_at) }}
                                </template>
                                <template
                                    slot="body.append"
                                    v-if="items.length > 0"
                                >
                                    <tr class="green--text hidden-md-and-up">
                                        <td class="title">
                                            Total:
                                            <strong>{{ totalAmount }}</strong>
                                        </td>
                                    </tr>
                                    <tr class="green--text hidden-sm-and-down">
                                        <td class="title">Total</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <strong>{{ totalAmount }}</strong>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </template>
                            </v-data-table>

                            <v-textarea
                                v-model="form.remarks"
                                label="Remarks"
                                rows="3"
                            >
                            </v-textarea>
                        </v-container>
                    </v-card>
                </v-container>
            </v-form>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green" dark @click="onSave">Save</v-btn>
                <v-btn @click="$router.go(-1)">
                    Cancel
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import moment from "moment";
import DateRangePicker from "../../../../components/datepicker/DateRangePicker";
import UserDialogSelector from "../../../../components/selector/dialog/UserDialogSelector";
import ExpenseReportDataService from "../../../../services/ExpenseReportDataService";
import PaymentDataService from "../../../../services/PaymentDataService";

export default {
    components: {
        DateRangePicker,
        UserDialogSelector
    },
    data() {
        return {
            loading: true,
            loader: false,
            valid: false,
            menu: false,
            menu_payee: false,
            search: "",
            usersParameters: {
                params: {
                    with_expense_types: true,
                    is_superadmin: false
                }
            },
            date_range: [
                moment()
                    .startOf("week")
                    .format("YYYY-MM-DD"),
                moment()
                    .endOf("week")
                    .format("YYYY-MM-DD")
            ],
            preset: "",
            presets: [
                "Today",
                "Last 7 Days",
                "Last 30 Days",
                "This Week",
                "This Month",
                "This Year"
            ],
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
            selected: [],
            users: [],
            total: 0,
            totalAmount: 0,
            totalItems: 0,
            search: "",
            options: {
                sortBy: ["created_at"],
                sortDesc: [true],
                page: 1,
                itemsPerPage: 10
            },
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
                user: null
            },
            errors: {
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
            }
        };
    },
    methods: {
        selectUser(e) {
            if (e == null || e == undefined) {
                this.form.user = null;
                return;
            }
            this.form.user = e;
        },
        resetUser() {
            this.form.user = null;
        },
        onRefresh() {
            Object.assign(this.$data, this.$options.data.apply(this));
        },
        updateDates(e) {
            this.date_range = e;
            // this.loadExpenseReports();
            this.getDataFromApi().then(data => {
                this.items = data.items;
                this.totalItems = data.total;
            });
        },
        updateUser() {
            this.errors.user_id = [];
            this.getDataFromApi().then(data => {
                this.items = data.items;
                this.totalItems = data.total;
            });
        },
        getDataFromApi() {
            this.loading = true;

            return new Promise((resolve, reject) => {
                const { sortBy, sortDesc, page, itemsPerPage } = this.options;

                let search = this.search.trim().toLowerCase();
                let status = this.status;
                let user_id = this.form.user ? this.form.user.id : null;
                let range = this.date_range;

                ExpenseReportDataService.getAll({
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
                })
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

            if (!this.form.user) {
                this.mixin_errorDialog("Error", "No Employee selected.");
                return;
            }

            if (this.selected == 0) {
                this.mixin_errorDialog("Error", "No Expense Report selected.");
                return;
            }

            if (this.$refs.form.validate()) {
                this.loader = true;

                PaymentDataService.store({
                    code: this.form.code,
                    reference_no: this.form.reference_no,
                    voucher_no: this.form.voucher_no,
                    description: this.form.description,
                    date: this.form.date,
                    cheque_no: this.form.cheque_no,
                    cheque_date: this.form.cheque_date,
                    amount: this.total,
                    payee: this.form.payee,
                    payee_address: this.form.payee_address,
                    payee_phone: this.form.payee_phone,
                    remarks: this.form.remarks,
                    notes: this.form.notes,
                    expense_reports: this.selected,
                    user_id: this.form.user ? this.form.user.id : null
                })
                    .then(response => {
                        this.onRefresh();

                        this.mixin_successDialog(
                            response.data.status,
                            response.data.message
                        );
                        this.$store.dispatch("AUTH_NOTIFICATIONS");
                        this.$router.push({ name: "admin.payments.index" });
                        this.loader = false;
                    })
                    .catch(error => {
                        this.mixin_showErrors(error);
                        this.errors = error.response.data.errors;
                        this.loader = false;
                    });

                return;
            }
        }
    },
    computed: {
        params(nv) {
            return {
                ...this.options,
                query: this.search,
                query: this.user,
                query: this.date_range
            };
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
                });
            },
            deep: true
        },
        selected() {
            this.totalAmount = this.mixin_formatNumber(
                this.selected.reduce((total, item) => total + item.total, 0)
            );
        }
    }
};
</script>
