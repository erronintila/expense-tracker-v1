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

                <h4 class="title green--text">Expense Report Details</h4>
            </v-card-title>

            <v-form ref="form">
                <v-container>
                    <v-row>
                        <v-col cols="12" md="8">
                            <div>
                                {{ form.employee.full_name }}
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

                    <v-divider></v-divider>

                    <v-row>
                        <v-col>Description: {{ form.description }} </v-col>
                    </v-row>

                    <v-divider></v-divider>

                    <v-row>
                        <v-col cols="12">
                            <v-data-table
                                elevation="0"
                                :headers="headers"
                                :items="form.expenses"
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
                                <template v-slot:[`item.actions`]="{ item }">
                                    <v-icon
                                        small
                                        class="mr-2"
                                        @click="
                                            $router.push(
                                                `/admin/expenses/${item.id}`
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
                                                                item.created_at,
                                                                "YYYY-MM-DD HH:mm:ss"
                                                            )
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="item.deleted_at">
                                                    <td>
                                                        <strong
                                                            >Cancelled</strong
                                                        >
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        {{
                                                            mixin_formatDate(
                                                                item.deleted_at,
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
                                            (-) {{ mixin_formatNumber(form.paid) }}
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
                                            {{ mixin_formatNumber(form.balance) }}
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
                                    :to="{
                                        name: 'admin.expense_reports.detailed'
                                    }"
                                >
                                    View Detailed
                                </v-btn>

                                <v-btn
                                    color="green"
                                    dark
                                    :to="{
                                        name: 'admin.expense_reports.summary'
                                    }"
                                >
                                    View Summary
                                </v-btn>
                            </div>
                        </v-col>
                    </v-row>

                    <v-divider class="mb-4"></v-divider>

                    <v-row class="text--secondary text-caption">
                        <v-col cols="12" md="5">
                            <div>Other Details :</div>

                            <table class="table" width="100%">
                                <tbody>
                                    <tr v-if="form.created">
                                        <td>Created By</td>
                                        <td>:</td>
                                        <td>
                                            {{ form.created.created_by.name }}
                                        </td>
                                        <td>
                                            {{
                                                mixin_formatDate(
                                                    form.created.created_at,
                                                    "YYYY-MM-DD HH:mm:ss"
                                                )
                                            }}
                                        </td>
                                    </tr>
                                    <tr v-if="form.submitted">
                                        <td>Submitted By</td>
                                        <td>:</td>
                                        <td>
                                            {{
                                                form.submitted.submitted_by.name
                                            }}
                                        </td>
                                        <td>
                                            {{
                                                mixin_formatDate(
                                                    form.submitted.submitted_at,
                                                    "YYYY-MM-DD HH:mm:ss"
                                                )
                                            }}
                                        </td>
                                    </tr>
                                    <!-- <tr v-if="created.created_at">
                                        <td>Reviewed By</td>
                                        <td>: </td>
                                        <td>{{ form.reviewed.reviewed_by.name }}</td>
                                        <td>{{ mixin_formatDate(form.reviewed.reviewed_at, "YYYY-MM-DD HH:mm:ss") }}</td>
                                    </tr> -->
                                    <tr v-if="form.approved">
                                        <td>Approved By</td>
                                        <td>:</td>
                                        <td>
                                            {{ form.approved.approved_by.name }}
                                        </td>
                                        <td>
                                            {{
                                                mixin_formatDate(
                                                    form.approved.approved_at,
                                                    "YYYY-MM-DD HH:mm:ss"
                                                )
                                            }}
                                        </td>
                                    </tr>
                                    <tr v-if="form.rejected">
                                        <td>Rejected By</td>
                                        <td>:</td>
                                        <td>
                                            {{ form.rejected.rejected_by.name }}
                                        </td>
                                        <td>
                                            {{
                                                mixin_formatDate(
                                                    form.rejected.rejected_at,
                                                    "YYYY-MM-DD HH:mm:ss"
                                                )
                                            }}
                                        </td>
                                    </tr>
                                    <tr v-if="form.deleted">
                                        <td>Cancelled By</td>
                                        <td>:</td>
                                        <td>
                                            {{ form.deleted.deleted_by.name }}
                                        </td>
                                        <td>
                                            {{
                                                mixin_formatDate(
                                                    form.deleted.deleted_at,
                                                    "YYYY-MM-DD HH:mm:ss"
                                                )
                                            }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </v-col>

                        <v-col cols="12" md="7">
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
                                            <td>{{ item.causer == null ? 'System' : item.causer.name }}</td>
                                            <td>{{ item.description }}</td>
                                        </tr>
                                    </tbody>
                                </table>
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
            loader: true,
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
                { text: "Actions", value: "actions", sortable: false },
                { text: "", value: "data-table-expand" }
            ],
            total: 0,

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

                employee: {id: null, name: ""},
                payment: { id: null },
                expenses: [],

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
                .get(`/api/expense_reports/${_this.$route.params.id}`)
                .then(response => {
                    let data = response.data.data;

                    console.log(data);

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

                    _this.form.logs = data.logs;

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
        }
    },
    created() {
        // this.$store.dispatch("AUTH_USER");
        this.getData();
    }
};
</script>
