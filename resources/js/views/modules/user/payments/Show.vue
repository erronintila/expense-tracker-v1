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
                                {{ form.employee.full_name }}
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
                            <!-- <v-data-table
                                elevation="0"
                                :headers="headers"
                                :items="items"
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
                                <template v-slot:[`item.created_at`]="{ item }">
                                    {{
                                        mixin_formatDate(
                                            item.created.created_at,
                                            "YYYY-MM-DD HH:mm:ss"
                                        )
                                    }}
                                </template>
                                <template v-slot:[`item.total`]="{ item }">
                                    {{ mixin_formatNumber(item.total) }}
                                </template>
                                <template v-slot:[`item.balance`]="{ item }">
                                    {{ mixin_formatNumber(item.balance) }}
                                </template>
                                <template v-slot:top>
                                    <v-row>
                                        <v-col>
                                            <div class="text--secondary">
                                                Expense Reports
                                            </div>
                                        </v-col>
                                        <v-spacer></v-spacer>
                                    </v-row>
                                </template>
                                <template v-slot:[`item.employee`]="{ item }">
                                    {{
                                        item.employee.last_name +
                                            " " +
                                            item.employee.first_name +
                                            " " +
                                            item.employee.suffix
                                    }}
                                </template>

                            </v-data-table> -->

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
                                <template v-slot:[`item.employee`]="{ item }">
                                    {{
                                        item.employee.last_name +
                                            ", " +
                                            item.employee.first_name
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
                        <!-- <v-col cols="12" md="4">
                            <div class="text-right">
                                <v-btn
                                    color="green"
                                    dark
                                    @click="cancelPayment"
                                >
                                    Cancel Payment
                                </v-btn>
                            </div>
                        </v-col> -->
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

                    <!-- <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green" dark @click="cancelPayment">
                            Cancel Payment
                        </v-btn>
                    </v-card-actions> -->
                </v-container>
            </v-form>
        </v-card>
    </div>
</template>

<script>
import moment from "moment";
import numeral from "numeral";
import DateRangePicker from "../../../../components/daterangepicker/DateRangePicker";

export default {
    components: {
        DateRangePicker
    },
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
            employee: this.$store.getters.user.employee,
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
                employee: this.$store.getters.user.employee,
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
            let _this = this;
            axios
                .get(`/api/payments/${_this.$route.params.id}`)
                .then(response => {
                    let data = response.data.data;

                    _this.code = data.code;
                    _this.reference_no = data.reference_no;
                    _this.voucher_no = data.voucher_no;
                    _this.description = data.description;
                    _this.date = data.date;
                    _this.cheque_no = data.cheque_no;
                    _this.cheque_date = data.cheque_date;
                    _this.amount = data.amount;
                    _this.payee = data.payee;
                    _this.payee_address = data.payee_address;
                    _this.payee_phone = data.payee_phone;
                    _this.remarks = data.remarks;
                    _this.notes = data.notes;
                    _this.items = data.expense_reports;
                    _this.employee = `${data.employee.last_name}, ${data.employee.first_name} ${data.employee.middle_name}`;

                    // _this.selected.splice(0, 0, ...data.expenses);

                    // _this.loadExpenses(data.employee.id);

                    _this.form.amount = data.amount;
                    _this.form.cheque_date = data.cheque_date;
                    _this.form.cheque_no = data.cheque_no;
                    _this.form.code = data.code;
                    _this.form.date = data.date;
                    _this.form.description = data.description;
                    _this.form.employee = data.employee;
                    // _this.form.expense_reports = data.expense_reports;
                    _this.form.notes = data.notes;
                    _this.form.reference_no = data.reference_no;
                    _this.form.remarks = data.remarks;
                    _this.form.status = data.status;
                    _this.form.voucher_no = data.voucher_no;

                    _this.form.created = data.created;
                    _this.form.updated = data.updated;
                    _this.form.deleted = data.deleted;
                    _this.form.submitted = data.submitted;
                    _this.form.reviewed = data.reviewed;
                    _this.form.approved = data.approved;
                    _this.form.rejected = data.rejected;
                    _this.form.cancelled = data.cancelled;

                    _this.form.logs = data.logs;

                    this.getDataFromApi().then(data => {
                        this.items = data.items;
                        this.totalItems = data.total;
                    });

                    _this.loader = false;
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);

                    _this.mixin_errorDialog(
                        `Error ${error.response.status}`,
                        error.response.statusText
                    );

                    _this.loader = false;
                });
        },
        getDataFromApi() {
            let _this = this;

            _this.loading = true;

            return new Promise((resolve, reject) => {
                const { sortBy, sortDesc, page, itemsPerPage } = this.options;

                let employee_id = _this.form.employee.id;
                let range = _this.date_range;
                let payment_id = this.$route.params.id;

                axios
                    .get("/api/expense_reports", {
                        params: {
                            sortBy: sortBy[0],
                            sortType: sortDesc[0] ? "desc" : "asc",
                            page: page,
                            itemsPerPage: itemsPerPage,
                            employee_id: employee_id,
                            payment_id: payment_id,
                            start_date: range[0],
                            end_date: range[1],
                            admin_page: false,
                        }
                    })
                    .then(response => {
                        let items = response.data.data;
                        let total = response.data.meta.total;

                        _this.loading = false;

                        resolve({ items, total });
                    })
                    .catch(error => {
                        console.log(error);
                        console.log(error.response);

                        _this.mixin_errorDialog(
                            `Error ${error.response.status}`,
                            error.response.statusText
                        );

                        _this.loading = false;
                    });
            });
        },
        cancelPayment() {
            let _this = this;

            this.$confirm(`Do you want to cancel this payment?`).then(res => {
                if (res) {
                    _this.loader = true;

                    axios({
                        method: "delete",
                        url: `/api/payments/${_this.$route.params.id}`,
                        data: {
                            ids: [_this.$route.params.id]
                        }
                    })
                        .then(function(response) {
                            _this.$dialog.message.success(
                                response.data.message,
                                {
                                    position: "top-right",
                                    timeout: 2000
                                }
                            );

                            _this.$router.push({
                                name: "user.payments.index"
                            });
                        })
                        .catch(function(error) {
                            console.log(error);
                            console.log(error.response);

                            _this.mixin_errorDialog(
                                `Error ${error.response.status}`,
                                error.response.statusText
                            );
                        });
                }
            });
        }
    },
    computed: {
        params(nv) {
            return {
                ...this.options,
                query: this.employee,
                query: this.date_range
            };
        },
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
    }
};
</script>
