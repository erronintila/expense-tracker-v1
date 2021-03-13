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
            <!-- <v-card class="elevation-0 pt-0"> -->
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">Payment Details</h4>
            </v-card-title>

            <v-form ref="form" v-model="valid">
                <v-container>
                    <v-row>
                        <v-col cols="12" md="8">
                            <div>
                                {{ form.user.full_name }}
                            </div>
                            <div class="display-1 green--text">
                                PHP {{ mixin_formatNumber(form.amount) }}
                            </div>
                            <div>Date: {{ form.date }}</div>
                        </v-col>

                        <v-col cols="12" md="4">
                            <div class="headline green--text">
                                #{{ form.code }}
                            </div>
                            <div>Voucher: {{ form.voucher_no }}</div>
                            <div>
                                Status:
                                <v-btn :color="form.status.color" x-small dark>
                                    {{ form.status.status }}
                                </v-btn>
                            </div>
                        </v-col>
                    </v-row>

                    <v-divider></v-divider>

                    <v-row>
                        <v-col>Description: {{ form.description }} </v-col>
                    </v-row>

                    <v-divider></v-divider>

                    <v-row>
                        <v-col cols="12">
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
                                show-expand
                                single-expand
                                item-key="id"
                                class="elevation-0"
                            >
                                <template v-slot:[`item.period`]="{ item }">
                                    {{ item.from }} ~ {{ item.to }}
                                </template>
                                <template v-slot:[`item.actions`]="{ item }">
                                    <v-icon
                                        small
                                        class="mr-2"
                                        @click="
                                            $router.push(
                                                `/expense_reports/${item.id}`
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
                                                        {{
                                                            item.status == null
                                                                ? ""
                                                                : item.status
                                                                      .status
                                                        }}
                                                        ({{
                                                            item.status == null
                                                                ? ""
                                                                : item.status
                                                                      .remarks
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
                                    </tr>
                                </template>
                            </v-data-table>
                        </v-col>
                    </v-row>

                    <v-divider></v-divider>

                    <v-row>
                        <v-col cols="12" md="8">
                            <div>Remarks : {{ form.remarks }}</div>
                        </v-col>
                        <v-col cols="12" md="4">
                            <table width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            Total Expense Amount Balance
                                        </td>
                                        <td>:</td>
                                        <td
                                            class="green--text text--darken-4 text-right"
                                        >
                                            {{
                                                mixin_formatNumber(
                                                    totalExpenseBalanceAmount
                                                )
                                            }}
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
                                            {{
                                                mixin_formatNumber(form.amount)
                                            }}
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
                                            {{
                                                mixin_formatNumber(
                                                    amountToBeReimbursed
                                                )
                                            }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </v-col>
                    </v-row>

                    <v-divider class="mb-4"></v-divider>

                    <v-row>
                        <v-col cols="12" md="8">
                            Notes : {{ form.notes }}
                        </v-col>
                    </v-row>

                    <v-divider class="mb-4"></v-divider>

                    <v-row class="text--secondary text-caption">
                        <v-col cols="12" md="12">
                            <div>History :</div>
                            <div>
                                <table class="table" width="100%">
                                    <tbody>
                                        <tr
                                            v-for="item in form.logs"
                                            :key="item.id"
                                        >
                                            <td>
                                                {{
                                                    mixin_formatDate(
                                                        item.created_at,
                                                        "YYYY-MM-DD HH:mm:ss"
                                                    )
                                                }}
                                            </td>
                                            <td>-</td>
                                            <td>
                                                {{
                                                    item.causer == null
                                                        ? "System"
                                                        : item.causer.name
                                                }}
                                            </td>
                                            <td>-</td>
                                            <td>{{ item.description }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
        </v-card>
    </div>
</template>

<script>
import moment from "moment";
import numeral from "numeral";
import ExpenseReportDataService from "../../../../services/ExpenseReportDataService";
import PaymentDataService from "../../../../services/PaymentDataService";

export default {
    data() {
        return {
            loading: true,
            loader: true,
            valid: false,
            menu: false,
            date_range: [
                moment()
                    .startOf("week")
                    .format("YYYY-MM-DD"),
                moment()
                    .endOf("week")
                    .format("YYYY-MM-DD")
            ],
            user: this.$store == null ? { id: 0 } : this.$store.getters.user,
            code: "",
            reference_no: "",
            voucher_no: "",
            description: "",
            date: "",
            cheque_no: "",
            cheque_date: "",
            amount: "",
            payee: "",
            payee_address: "",
            payee_phone: "",
            remarks: "",
            notes: "",
            headers: [
                { text: "Period", value: "period", sortable: false },
                { text: "Code", value: "code", sortable: false },
                { text: "Description", value: "description", sortable: false },
                { text: "Amount", value: "total", sortable: false },
                { text: "Balance", value: "balance", sortable: false },
                { text: "Actions", value: "actions", sortable: false },
                { text: "", value: "data-table-expand", sortable: false }
            ],
            items: [],
            total: 0,
            totalAmount: 0,
            totalItems: 0,
            options: {
                sortBy: ["created_at"],
                sortDesc: [true],
                page: 1,
                itemsPerPage: 10
            },
            totalExpenseBalanceAmount: 0,
            amountToBeReimbursed: 0,
            form: {
                amount: 0,
                cheque_date: "",
                cheque_no: "",
                code: "",
                date: "",
                description: "",
                user:
                    this.$store == null ? { id: 0 } : this.$store.getters.user,
                expense_reports: [],
                notes: "",
                reference_no: "",
                remarks: "",
                status: "",
                voucher_no: "",

                created: { created_at: null, created_by: { name: "" } },
                updated: { updated_at: null, updated_by: { name: "" } },
                deleted: { deleted_at: null, deleted_by: { name: "" } },
                submitted: { submitted_at: null, submitted_by: { name: "" } },
                reviewed: { reviewed_at: null, reviewed_by: { name: "" } },
                approved: { approved_at: null, approved_by: { name: "" } },
                rejected: { rejected_at: null, rejected_by: { name: "" } },
                cancelled: { cancelled_at: null, cancelled_by: { name: "" } },

                logs: []
            }
        };
    },
    methods: {
        getData() {
            PaymentDataService.show(this.$route.params.id)
                .then(response => {
                    let data = response.data.data;

                    this.code = data.code;
                    this.reference_no = data.reference_no;
                    this.voucher_no = data.voucher_no;
                    this.description = data.description;
                    this.date = data.date;
                    this.cheque_no = data.cheque_no;
                    this.cheque_date = data.cheque_date;
                    this.amount = data.amount;
                    this.payee = data.payee;
                    this.payee_address = data.payee_address;
                    this.payee_phone = data.payee_phone;
                    this.remarks = data.remarks;
                    this.notes = data.notes;
                    this.items = data.expense_reports;
                    this.user = `${data.last_name}, ${data.first_name} ${data.middle_name}`;

                    // this.selected.splice(0, 0, ...data.expenses);

                    // this.loadExpenses(data.user.id);

                    this.form.amount = data.amount;
                    this.form.cheque_date = data.cheque_date;
                    this.form.cheque_no = data.cheque_no;
                    this.form.code = data.code;
                    this.form.date = data.date;
                    this.form.description = data.description;
                    this.form.user = data.user;
                    // this.form.expense_reports = data.expense_reports;
                    this.form.notes = data.notes;
                    this.form.reference_no = data.reference_no;
                    this.form.remarks = data.remarks;
                    this.form.status = data.status;
                    this.form.voucher_no = data.voucher_no;

                    this.form.created = data.created;
                    this.form.updated = data.updated;
                    this.form.deleted = data.deleted;
                    this.form.submitted = data.submitted;
                    this.form.reviewed = data.reviewed;
                    this.form.approved = data.approved;
                    this.form.rejected = data.rejected;
                    this.form.cancelled = data.cancelled;

                    this.form.logs = data.logs;

                    this.getDataFromApi().then(data => {
                        this.items = data.items;
                        this.totalItems = data.total;
                    });

                    this.loader = false;
                })
                .catch(error => {
                    this.mixin_showErrors(error);
                    this.loader = false;
                });
        },
        getDataFromApi() {
            this.loading = true;

            return new Promise((resolve, reject) => {
                const { sortBy, sortDesc, page, itemsPerPage } = this.options;

                let user_id = this.form.user.id;
                let range = this.date_range;
                let payment_id = this.$route.params.id;

                ExpenseReportDataService.getAll({
                    params: {
                        sortBy: sortBy[0],
                        sortType: sortDesc[0] ? "desc" : "asc",
                        page: page,
                        itemsPerPage: itemsPerPage,
                        user_id: user_id,
                        payment_id: payment_id,
                        // start_date: range[0],
                        // end_date: range[1] ? range[1] : range[0],
                        admin_page: false
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
        }
    },
    computed: {
        params(nv) {
            return {
                ...this.options,
                query: this.user,
                query: this.date_range
            };
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
        items() {
            this.total = this.items.reduce(
                (total, item) => total + item.total,
                0
            );

            this.totalExpenseBalanceAmount = this.items.reduce(
                (total, item) => total + item.total,
                0
            );

            this.amountToBeReimbursed = this.items.reduce(
                (total, item) => total + item.balance,
                0
            );
        }
    },
    created() {
        // this.$store.dispatch("AUTH_USER");
        this.getData();
    },
    activated() {
        this.getData();
    },
    deactivated() {
        this.form.expense_reports = [];
        Object.assign(this.$data.form, this.$options.data());
    }
};
</script>
