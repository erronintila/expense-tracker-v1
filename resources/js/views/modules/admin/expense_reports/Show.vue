<template>
    <div>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">Expense Report Details</h4>
            </v-card-title>

            <v-form ref="form">
                <v-container>
                    <v-row>
                        <v-col cols="12" md="8">
                            <div>
                                {{ form.employee.fullname }}
                                <v-btn
                                    text
                                    color="green"
                                    :to="
                                        `/admin/expense_reports/${$route.params.id}/edit`
                                    "
                                >
                                    Edit
                                </v-btn>
                            </div>
                            <div class="display-1 green--text">
                                PHP {{ mixin_formatNumber(form.total) }}
                            </div>
                            <div>
                                Period:
                                {{
                                    form.from == form.to
                                        ? form.from
                                        : `${form.from} ~ ${form.to}`
                                }}
                            </div>
                        </v-col>

                        <v-col cols="12" md="4">
                            <div class="headline green--text">
                                #{{ form.code }}
                            </div>
                            <div>
                                Status:
                                <v-btn :color="form.status.color" x-small dark>
                                    {{ form.status.status }}
                                </v-btn>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>Description: {{ form.description }} </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12">
                            <v-data-table
                                elevation="0"
                                :headers="headers"
                                :items="form.expenses"
                                :hide-default-footer="true"
                                disable-pagination
                                item-key="id"
                                single-expand
                                show-expand
                                class="elevation-0"
                            >
                                <template v-slot:[`item.amount`]="{ item }">
                                    {{ mixin_formatNumber(item.amount) }}
                                </template>
                                <template v-slot:top>
                                    <v-row>
                                        <v-col>
                                            <div class="text--secondary">
                                                List of Expenses :
                                            </div>
                                        </v-col>

                                        <v-spacer></v-spacer>
                                    </v-row>
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
                                                            >Reimbursable</strong
                                                        >
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        {{
                                                            mixin_formatNumber(
                                                                item.reimbursable_amount
                                                            )
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Code</strong>
                                                    </td>
                                                    <td>:</td>
                                                    <td>{{ item.code }}</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong
                                                            >Description</strong
                                                        >
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        {{ item.description }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Remarks</strong>
                                                    </td>
                                                    <td>:</td>
                                                    <td>{{ item.remarks }}</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Created</strong>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        {{
                                                            mixin_formatDate(
                                                                item.created.created_at,
                                                                "YYYY-MM-DD HH:mm:ss"
                                                            )
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="item.deleted">
                                                    <td>
                                                        <strong
                                                            >Cancelled</strong
                                                        >
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        {{
                                                            mixin_formatDate(
                                                                item.deleted.deleted_at,
                                                                "YYYY-MM-DD HH:mm:ss"
                                                            )
                                                        }}
                                                    </td>
                                                </tr>
                                            </table>
                                        </v-container>
                                    </td>
                                </template>
                            </v-data-table>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" md="8">
                            <div>Remarks : {{ form.remarks }}</div>
                        </v-col>

                        <v-col cols="12" md="4">
                            <table width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            Total Expense Amount
                                        </td>
                                        <td>:</td>
                                        <td
                                            class="green--text text--darken-4 text-right"
                                        >
                                            {{ mixin_formatNumber(form.total) }}
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
                                            (-) {{ mixin_formatNumber(0) }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">
                                            <v-divider></v-divider>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Amount to be reimbursed
                                        </td>
                                        <td>:</td>
                                        <td
                                            class="green--text text--darken-4 text-right"
                                        >
                                            {{ mixin_formatNumber(form.total) }}
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

                        <v-col cols="12" md="4">
                            <div class="text-right">
                            <v-btn
                                color="green"
                                dark
                                :to="{ name: 'admin.expense_reports.detailed' }"
                            >
                                View Detailed
                            </v-btn>

                            <v-btn
                                color="green"
                                dark
                                :to="{ name: 'admin.expense_reports.summary' }"
                            >
                                View Summary
                            </v-btn>
                            </div>
                        </v-col>
                    </v-row>

                    <!-- <v-card-actions>
                        <v-spacer></v-spacer>
                        
                        <v-btn color="green" dark @click="onEdit"
                            >Print Report</v-btn
                        >
                        <v-btn color="green" dark @click="onEdit"
                            >Print Summary</v-btn
                        >
                        <v-btn color="green" dark @click="onEdit"
                            >Edit Details</v-btn
                        >
                        <v-btn
                            color="green"
                            dark
                            :to="{ name: 'admin.expense_reports.detailed' }"
                        >
                            View Detailed
                        </v-btn>

                        <v-btn
                            color="green"
                            dark
                            :to="{ name: 'admin.expense_reports.summary' }"
                        >
                            View Summary
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

export default {
    data() {
        return {
            // date_range: [
            //     moment()
            //         .startOf("month")
            //         .format("YYYY-MM-DD"),
            //     moment()
            //         .endOf("month")
            //         .format("YYYY-MM-DD")
            // ],
            // selected: [],
            headers: [
                { text: "Date", value: "date", sortable: false },
                {
                    text: "Type",
                    value: "expense_type.name",
                    sortable: false
                },
                { text: "Receipt", value: "receipt_number", sortable: false },
                { text: "Vendor", value: "vendor.name", sortable: false },
                { text: "Amount", value: "amount", sortable: false },
                { text: "", value: "data-table-expand" }
            ],
            // items: [],
            total: 0,
            // code: "",
            // description: "",
            // remarks: "",
            // notes: "",
            // expenses: [],
            // status: { color: "", status: "" },
            // employee: { id: null, fullname: "" },

            form: {
                code: "",
                reference_no: "",
                description: "",
                remarks: "",
                notes: "",
                submission_period: "",
                approval_period: "",
                from: "",
                to: "",
                status: { color: "", status: "", remarks: "" },

                total: 0,
                total_reimbursable: 0,
                paid: 0,
                payments: [],
                payment_id: null,
                balance: 0,

                employee: this.$store.getters.user.employee,
                payment: { id: null },
                expenses: [],

                created: null,
                updated: null,
                deleted: null,
                submitted: null,
                approved: null,
                rejected: null,
                cancelled: null
            }
        };
    },
    methods: {
        // updateDates(e) {
        //     this.date_range = e;
        //     this.loadExpenses(this.employee);
        // },
        getData() {
            let _this = this;
            axios
                .get(`/api/expense_reports/${_this.$route.params.id}`)
                .then(response => {
                    let data = response.data.data;

                    _this.form.code = data.code;
                    _this.form.reference_no = data.reference_no;
                    _this.form.description = data.description;
                    _this.form.remarks = data.remarks;
                    _this.form.notes = data.notes;
                    _this.form.submission_period = data.submission_period;
                    _this.form.approval_period = data.approval_period;
                    _this.form.from = data.from;
                    _this.form.to = data.to;
                    _this.form.status = data.status;

                    _this.form.total = data.total;
                    _this.form.total_reimbursable = data.total_reimbursable;
                    _this.form.paid = data.paid;
                    _this.form.payments = data.payments;
                    _this.form.payment_id = data.payment_id;
                    _this.form.balance = data.balance;

                    _this.form.employee = data.employee;
                    _this.form.payment = data.payment;
                    _this.form.expenses = data.expenses;

                    _this.form.created = data.created;
                    _this.form.updated = data.updated;
                    _this.form.deleted = data.deleted;
                    _this.form.submitted = data.submitted;
                    _this.form.approved = data.approved;
                    _this.form.rejected = data.rejected;
                    _this.form.cancelled = data.cancelled;

                    // _this.code = data.code;
                    // _this.description = data.description;
                    // _this.remarks = data.remarks;
                    // _this.notes = data.notes;
                    // _this.employee = data.employee;
                    // _this.status = data.status;
                    // _this.expenses = data.expenses;
                    // _this.submitted_at = data.submitted_at;
                    // _this.reviewed_at = data.reviewed_at;
                    // _this.approved_at = data.approved_at;
                    // _this.cancelled_at = data.cancelled_at;
                    // _this.created_at = data.created_at;
                    // _this.updated_at = data.updated_at;
                    // _this.deleted_at = data.deleted_at;
                    // _this.total = data.total;

                    // _this.selected.splice(0, 0, ...data.expenses);

                    // _this.loadExpenses(data.employee.id);
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);

                    _this.mixin_errorDialog(
                        `Error ${error.response.status}`,
                        error.response.statusText
                    );
                });
        }
        // loadExpenses(emp_id) {
        //     let start_date = this.date_range[0];
        //     let end_date = this.date_range[1];
        //     let _this = this;

        //     axios
        //         .get("/api/data/expenses", {
        //             params: {
        //                 update_report: true,
        //                 employee_id: emp_id,
        //                 start_date: start_date,
        //                 end_date: end_date,
        //                 expense_report_id: _this.$route.params.id
        //             }
        //         })
        //         .then(response => {
        //             _this.items = response.data.data;
        //         })
        //         .catch(error => {
        //             console.log(error);
        //             console.log(error.response);

        //             _this.mixin_errorDialog(
        //                 `Error ${error.response.status}`,
        //                 error.response.statusText
        //             );
        //         });
        // },
        // onEdit() {
        //     this.$router.push({
        //         name: "admin.expense_reports.edit",
        //         params: { id: this.$route.params.id }
        //     });
        // }
    },
    // watch: {
    //     selected() {
    //         this.total = this.selected.reduce(
    //             (total, item) => total + item.amount,
    //             0
    //         );
    //     }
    // },
    created() {
        this.getData();
    }
};
</script>
