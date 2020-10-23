<template>
    <div>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">New Expense</h4>
            </v-card-title>

            <v-form ref="form" v-model="valid">
                <v-container>
                    <v-expansion-panels v-model="panel" multiple class="mt-4">
                        <v-expansion-panel>
                            <v-expansion-panel-header>
                                <div class="green--text">Basic Information</div>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-row>
                                    <v-col cols="12" md="4">
                                        <v-text-field
                                            v-model="form.date"
                                            label="Date"
                                            readonly
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="4">
                                        <v-text-field
                                            v-model="form.employee.fullname"
                                            label="Employee"
                                            readonly
                                        >
                                        </v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="4">
                                        <v-text-field v-model="form.vendor" label="Vendor" readonly>
                                        </v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="4">
                                        <v-text-field
                                            v-model="form.receipt_number"
                                            label="Receipt No."
                                            readonly
                                        >
                                        </v-text-field>
                                    </v-col>
                                </v-row>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel>
                            <v-expansion-panel-header>
                                <div class="green--text">
                                    Expense Details
                                </div>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-row>
                                    <v-col cols="12" md="4">
                                        <v-text-field
                                            v-model="form.expense_type.name"
                                            label="Expense Type"
                                            readonly
                                        >
                                        </v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="4">
                                        <v-text-field
                                            v-model="form.sub_type.name"
                                            label="Sub Type"
                                            readonly
                                        >
                                        </v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="12" md="4">
                                        <v-text-field
                                            v-model="form.description"
                                            label="Description"
                                            readonly
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="4">
                                        <v-text-field
                                            v-model="form.amount"
                                            label="Amount"
                                            readonly
                                        ></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="12">
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
                                                            form.amount
                                                        }}</strong>
                                                    </td>
                                                </tr>
                                            </template>
                                            <template v-slot:top>
                                                <v-toolbar flat color="white">
                                                    Items
                                                    <v-spacer></v-spacer>
                                                </v-toolbar>
                                            </template>
                                        </v-data-table>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="12" md="4">
                                        <v-checkbox
                                            v-model="paid_through_fund"
                                            label="Paid through revolving fund"
                                            readonly
                                        ></v-checkbox>
                                    </v-col>
                                    <v-col cols="12" md="4">
                                        <v-text-field
                                            v-model="form.revolving_fund"
                                            label="Amount"
                                            type="number"
                                            readonly
                                        ></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td class="green--text">
                                                        Amount to reimburse
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        {{
                                                            amount_to_reimburse
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="green--text">
                                                        Amount to replenish
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        {{
                                                            form.revolving_fund
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="green--text">
                                                        Total Amount
                                                    </td>
                                                    <td>:</td>
                                                    <td>{{ form.amount }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </v-col>
                                </v-row>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>

                    <v-card class="mt-4">
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" md="6">
                                        <v-textarea
                                            rows="1"
                                            v-model="form.remarks"
                                            label="Remarks"
                                            readonly
                                        ></v-textarea>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-textarea
                                            rows="1"
                                            label="Notes"
                                            readonly
                                        ></v-textarea>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                    </v-card>
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
            panel: [0, 1],
            paid_through_fund: false,
            reimbursable: false,
            dialog: false,
            valid: false,
            menu: false,
            headers: [
                { text: "Particulars", value: "description", sortable: false },
                { text: "Amount", value: "amount", sortable: false },
            ],
            items: [],
            form: {
                code: null,
                description: null,
                amount: 0,
                reimbursable_amount: 0,
                receipt_number: null,
                date: null,
                remarks: "",
                is_active: true,
                expense_type: {
                    id: null,
                    name: "",
                    limit: null,
                    sub_types: null
                },
                sub_type: { id: null, name: "", limit: null },
                employee: {
                    id: null,
                    remaining_fund: 0,
                    fund: 0,
                    expense_types: null
                },
                vendor: null,
                is_reimbursable: false,

                revolving_fund: 0,
                details: {
                    description: "",
                    amount: 0
                }
            }
        };
    },
    methods: {
        getData() {
            let _this = this;

            axios
                .get("/api/expenses/" + _this.$route.params.id)
                .then(response => {
                    let data = response.data.data;

                    _this.form.code = data.code;
                    _this.form.description = data.description;

                    _this.form.receipt_number = data.receipt_number == null ? "No Receipt" : data.receipt_number;
                    _this.form.date = data.date;
                    _this.form.remarks = data.remarks;
                    _this.form.is_active = data.is_active;
                    _this.form.employee = data.employee;
                    _this.form.vendor =
                        data.vendor == null ? "No Vendor" : data.vendor.name;

                    _this.form.expense_type = data.expense_type;
                    // _this.form.sub_type = data.sub_type_id;

                    _this.expense_types = data.employee.expense_types;
                    _this.sub_types = data.expense_type.sub_types;

                    if (data.details !== null) {
                        _this.itemize = true;
                        _this.items = data.details;
                    } else {
                        // _this.itemize = false;
                        // _this.items = [];
                        _this.form.amount = data.amount;
                        // console.log(_this.form.amount, data.amount);
                    }

                    _this.form.sub_type =
                        data.sub_type == null
                            ? { id: null, name: "None", limit: null }
                            : data.sub_type;

                    if (data.revolving_fund > 0) {
                        _this.paid_through_fund = true;
                        _this.form.revolving_fund = data.revolving_fund;
                    } else {
                        _this.paid_through_fund = false;
                        _this.form.revolving_fund = 0;
                    }
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);

                    _this.mixin_errorDialog(
                        `Error ${error.response.status}`,
                        error.response.statusText
                    );
                });
        },
        loadSubTypes(e) {
            this.form.sub_type = { id: null, name: "", limit: null };
            this.sub_types = e.sub_types;
            this.sub_types.push({ id: null, name: "None", limit: null });
        }
    },
    computed: {
        amount_to_reimburse() {
            return (
                parseFloat(this.form.amount) -
                parseFloat(this.form.revolving_fund)
            );
        }
    },
    watch: {
        items() {
            this.form.amount = this.items.reduce(
                (total, item) => parseFloat(total) + parseFloat(item.amount),
                0
            );
        },
        itemize() {
            this.form.amount = this.items.reduce(
                (total, item) => parseFloat(total) + parseFloat(item.amount),
                0
            );
        }
    },
    created() {
        this.getData();
    }
};
</script>
