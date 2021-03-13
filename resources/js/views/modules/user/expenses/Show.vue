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

                <h4 class="title green--text">Expense Details</h4>
            </v-card-title>

            <v-form ref="form" v-model="valid">
                <v-container>
                    <v-row>
                        <v-col cols="12" md="8">
                            <div>
                                {{ form.user.full_name }}
                                <v-btn
                                    v-if="canEdit"
                                    text
                                    color="green"
                                    :to="
                                        `/expenses/${$route.params.id}/edit`
                                    "
                                >
                                    Edit
                                </v-btn>
                            </div>
                            <div class="display-1 green--text">
                                PHP {{ mixin_formatNumber(form.amount) }}
                            </div>
                            <div>
                                {{ form.expense_type.name }}
                                {{
                                    form.sub_type == null ||
                                    form.sub_type.id == null
                                        ? ""
                                        : `(${form.sub_type.name})`
                                }}
                            </div>
                            <div>Date: {{ form.date }}</div>
                        </v-col>
                        <v-col cols="12" md="4">
                            <div>Receipt: #{{ form.receipt_number }}</div>
                            <div>Vendor: {{ form.vendor.name }}</div>
                            <div>
                                Status:
                                <v-btn :color="form.status.color" x-small dark>
                                    {{ form.status.status }}
                                </v-btn>
                            </div>
                            <div v-if="form.is_late_encoded">
                                <v-btn color="red" x-small dark>
                                    Late Encoded
                                </v-btn>
                            </div>
                        </v-col>
                    </v-row>

                    <v-divider></v-divider>

                    <v-row>
                        <v-col>
                            <div>Description: {{ form.description }}</div>
                            <div>
                                Tax ({{ form.tax_rate }}%):
                                {{ form.tax_amount }}
                                {{
                                    form.is_tax_inclusive
                                        ? `- Inclusive`
                                        : `- Exclusive`
                                }}
                            </div>
                        </v-col>
                    </v-row>

                    <v-divider></v-divider>

                    <v-row>
                        <v-col cols="12">
                            <div>
                                <v-data-table
                                    :headers="headers"
                                    :items="items"
                                    :items-per-page="5"
                                    :footer-props="{
                                        itemsPerPageOptions: [5, 10, 20]
                                    }"
                                >
                                    <template
                                        slot="body.append"
                                        v-if="items.length > 0"
                                    >
                                        <tr
                                            class="green--text hidden-md-and-up"
                                        >
                                            <td class="title">
                                                Total:
                                                <strong>{{
                                                    form.amount
                                                }}</strong>
                                            </td>
                                        </tr>
                                        <tr
                                            class="green--text hidden-sm-and-down"
                                        >
                                            <td class="title">Total</td>
                                            <td>
                                                <strong>{{
                                                    form.details_quantity
                                                }}</strong>
                                            </td>
                                            <td>
                                                <strong>{{
                                                    form.details_amount
                                                }}</strong>
                                            </td>
                                            <td>
                                                <strong>{{
                                                    form.amount
                                                }}</strong>
                                            </td>
                                            <td></td>
                                        </tr>
                                    </template>
                                </v-data-table>
                            </div>
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
                                            Amount to reimburse
                                        </td>
                                        <td>:</td>
                                        <td
                                            class="green--text text--darken-4 text-right"
                                        >
                                            {{
                                                mixin_formatNumber(
                                                    amount_to_reimburse
                                                )
                                            }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Amount to replenish
                                        </td>
                                        <td>:</td>
                                        <td
                                            class="green--text text--darken-4 text-right"
                                        >
                                            {{
                                                mixin_formatNumber(
                                                    amount_to_replenish
                                                )
                                            }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">
                                            <v-divider></v-divider>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Total
                                        </td>
                                        <td>:</td>
                                        <td
                                            class="green--text text--darken-4 text-right"
                                        >
                                            {{
                                                mixin_formatNumber(
                                                    expense_amount
                                                )
                                            }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </v-col>

                        <v-col cols="12">
                            <v-divider class="mb-4"></v-divider>
                            <div>Notes : {{ form.notes }}</div>
                        </v-col>
                    </v-row>

                    <v-divider class="mb-4"></v-divider>

                    <v-row class="text--secondary text-caption">
                        <v-col cols="12">
                            <div>Other Details :</div>

                            <table class="table" width="100%">
                                <tbody>
                                    <tr v-if="form.created_at">
                                        <td>Created</td>
                                        <td>:</td>
                                        <!-- <td>
                                            {{ form.created_by }}
                                        </td> -->
                                        <td>
                                            {{
                                                mixin_formatDate(
                                                    form.created_at,
                                                    "YYYY-MM-DD HH:mm:ss"
                                                )
                                            }}
                                        </td>
                                    </tr>
                                    <tr v-if="form.submitted_at">
                                        <td>Submitted</td>
                                        <td>:</td>
                                        <!-- <td>
                                            {{
                                                form.submitted_by
                                            }}
                                        </td> -->
                                        <td>
                                            {{
                                                mixin_formatDate(
                                                    form.submitted_at,
                                                    "YYYY-MM-DD HH:mm:ss"
                                                )
                                            }}
                                        </td>
                                    </tr>
                                    <!-- <tr v-if="created.created_at">
                                        <td>Reviewed</td>
                                        <td>: </td>
                                        <td>{{ form.reviewed.reviewed_by.name }}</td>
                                        <td>{{ mixin_formatDate(form.reviewed.reviewed_at, "YYYY-MM-DD HH:mm:ss") }}</td>
                                    </tr> -->
                                    <tr v-if="form.approved_at">
                                        <td>Approved</td>
                                        <td>:</td>
                                        <!-- <td>
                                            {{ form.approved_by }}
                                        </td> -->
                                        <td>
                                            {{
                                                mixin_formatDate(
                                                    form.approved_at,
                                                    "YYYY-MM-DD HH:mm:ss"
                                                )
                                            }}
                                        </td>
                                    </tr>
                                    <tr v-if="form.rejected_at">
                                        <td>Rejected</td>
                                        <td>:</td>
                                        <!-- <td>
                                            {{ form.rejected_by }}
                                        </td> -->
                                        <td>
                                            {{
                                                mixin_formatDate(
                                                    form.rejected_at,
                                                    "YYYY-MM-DD HH:mm:ss"
                                                )
                                            }}
                                        </td>
                                    </tr>
                                    <tr v-if="form.deleted_at">
                                        <td>Cancelled</td>
                                        <td>:</td>
                                        <!-- <td>
                                            {{ form.deleted_by }}
                                        </td> -->
                                        <td>
                                            {{
                                                mixin_formatDate(
                                                    form.deleted_at,
                                                    "YYYY-MM-DD HH:mm:ss"
                                                )
                                            }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </v-col>
                    </v-row>

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
import numeral from "numeral";

export default {
    data() {
        return {
            loader: true,
            panel: [0, 1],
            itemize: false,
            // paid_through_fund: false,
            reimbursable_amount: false,
            // reimbursable: false,
            // openAddVendor: false,
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
            items: [],
            // expense_types: [],
            // sub_types: [],
            // users: [],
            // vendors: [],
            form: {
                code: null,
                description: null,
                amount: 0,
                detials_quantity: 0,
                details_amount: 0,
                receipt_number: null,
                date: null,
                remarks: "",
                notes: "",
                is_active: true,
                expense_type: {
                    id: null,
                    name: "",
                    limit: null,
                    sub_types: null
                },
                sub_type: { id: null, name: "", limit: null },
                user: {
                    id: null,
                    remaining_fund: 0,
                    fund: 0,
                    expense_types: null
                },
                vendor: { id: null, name: "", is_vat_inclusive: true },
                is_reimbursable: false,

                revolving_fund: 0,
                reimbursable_amount: 0,
                details: {
                    description: "",
                    amount: 0
                },

                is_tax_inclusive: true,
                tax_name: "",
                tax_rate: 0,
                tax_amount: 0,
                status: { color: "", remarks: "", status: "" },
                is_late_encoded: false,

                // created: { created_at: null, created_by: { name: "" } },
                // updated: { updated_at: null, updated_by: { name: "" } },
                // deleted: { deleted_at: null, deleted_by: { name: "" } },
                // submitted: { submitted_at: null, submitted_by: { name: "" } },
                // reviewed: { reviewed_at: null, reviewed_by: { name: "" } },
                // approved: { approved_at: null, approved_by: { name: "" } },
                // rejected: { rejected_at: null, rejected_by: { name: "" } },
                // cancelled: { cancelled_at: null, cancelled_by: { name: "" } },

                created_at: null,
                updated_at: null,
                deleted_at: null,
                submitted_at: null,
                reviewed_at: null,
                approved_at: null,
                rejected_at: null,
                cancelled_at: null,

                expense_report: null,

                logs: []
            }
        };
    },
    methods: {
        getData() {
            // this.loadUsers().then(
            axios
                .get("/api/expenses/" + this.$route.params.id)
                .then(response => {
                    let data = response.data.data;

                    this.form.code = data.code;
                    this.form.description = data.description;

                    this.form.receipt_number = data.receipt_number;
                    this.form.date = data.date;
                    this.form.remarks = data.remarks;
                    this.form.notes = data.notes;
                    this.form.is_active = data.is_active;
                    this.form.user = data.user;
                    this.form.vendor =
                        data.vendor == null
                            ? { id: null, name: "", is_vat_inclusive: true }
                            : data.vendor;

                    this.form.expense_type = data.expense_type;
                    // this.form.sub_type = data.sub_type_id;

                    // this.expense_types = data.user.expense_types;
                    // this.sub_types = data.expense_type.sub_types;

                    this.form.is_tax_inclusive = data.is_tax_inclusive;
                    this.form.tax_name = data.tax_name;
                    this.form.tax_rate = data.tax_rate;
                    this.form.tax_amount = data.tax_amount;

                    this.form.status = data.status;
                    this.form.is_late_encoded = data.is_late_encoded;

                    if (data.details !== null) {
                        this.itemize = true;
                        this.items = data.details;
                    } else {
                        // this.itemize = false;
                        // this.items = [];
                        this.form.amount = data.amount;
                    }

                    // this.sub_types.unshift({
                    //     id: null,
                    //     name: "None",
                    //     limit: null
                    // });
                    this.form.sub_type =
                        data.sub_type == null
                            ? { id: null, name: "None", limit: null }
                            : data.sub_type;

                    if (data.revolving_fund > 0) {
                        this.paid_through_fund = true;
                        this.form.revolving_fund = data.revolving_fund;
                    } else {
                        this.paid_through_fund = false;
                        this.form.revolving_fund = 0;
                    }

                    this.form.reimbursable_amount = data.reimbursable_amount;

                    this.form.user.remaining_fund +=
                        data.amount - data.reimbursable_amount;

                    this.form.expense_report = data.expense_report;

                    this.form.created_at = data.created_at;
                    this.form.updated_at = data.updated_at;
                    this.form.deleted_at = data.deleted_at;
                    this.form.submitted_at = data.expense_report
                        ? data.expense_report.submitted_at
                        : null;
                    this.form.approved_at = data.expense_report
                        ? data.expense_report.approved_at
                        : null;
                    this.form.rejected_at = data.expense_report
                        ? data.expense_report.rejected_at
                        : null;
                    this.form.cancelled_at = data.expense_report
                        ? data.expense_report.cancelled_at
                        : null;

                    this.form.logs = data.logs;

                    this.loader = false;
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);

                    this.mixin_errorDialog(
                        `Error ${error.response.status}`,
                        error.response.statusText
                    );

                    this.loader = false;
                });
            // );
        }
    },
    computed: {
        canEdit() {
            if (
                this.form.deleted_at !== null ||
                this.form.approved_at !== null ||
                this.form.rejected_at !== null ||
                this.form.cancelled_at !== null
            ) {
                return false;
            }

            if(this.form.expense_report !== null) {
                if (
                this.form.expense_report.approved_at !== null ||
                this.form.expense_report.cancelled_at !== null ||
                this.form.expense_report.deleted_at !== null ||
                this.form.expense_report.rejected_at !== null
            ) {
                return false;
            }
            }

            return true;
        },
        amount_to_replenish() {
            let remaining_fund = this.mixin_convertToNumber(
                this.form.user.remaining_fund
            );
            let amount = this.mixin_convertToNumber(this.form.amount);

            if (remaining_fund >= amount) {
                return amount;
            }

            return amount - Math.abs(remaining_fund - amount);
        },
        amount_to_reimburse() {
            let remaining_fund = this.mixin_convertToNumber(
                this.form.user.remaining_fund
            );
            let amount = this.mixin_convertToNumber(this.form.amount);

            if (remaining_fund < amount) {
                let to_replenish = Math.abs(remaining_fund - amount);

                this.form.reimbursable_amount = to_replenish;

                return to_replenish;
            }

            return 0;
        },
        expense_amount() {
            return this.mixin_convertToNumber(this.form.amount);
        },
        display_reimbursable_amount() {
            return (
                parseFloat(this.form.amount) >
                parseFloat(this.form.user.remaining_fund)
            );
        }
    },
    watch: {
        items() {
            this.form.amount = this.items.reduce(
                (total, item) => parseFloat(total) + parseFloat(item.total),
                0
            );

            this.form.details_amount = this.items.reduce(
                (total, item) => parseFloat(total) + parseFloat(item.amount),
                0
            );

            this.form.details_quantity = this.items.reduce(
                (total, item) => parseFloat(total) + parseFloat(item.quantity),
                0
            );
        },
        itemize() {
            this.form.amount = this.items.reduce(
                (total, item) => parseFloat(total) + parseFloat(item.total),
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
        Object.assign(this.$data, this.$options.data());
    }
};
</script>
