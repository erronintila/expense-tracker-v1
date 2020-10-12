<template>
    <div>
        <v-card class="elevation-0 pt-0">
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
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="employee"
                                label="Employee"
                                readonly
                            >
                            </v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="expense_type"
                                label="Expense Type"
                                readonly
                            >
                            </v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="vendor"
                                label="Vendor"
                                readonly
                            >
                            </v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="receipt_number"
                                label="Receipt No."
                                readonly
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field v-model="date" label="Date" readonly>
                            </v-text-field>
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
                                <template v-slot:[`item.amount`]="{ item }">
                                    {{ formatNumber(item.amount) }}
                                </template>
                                <template
                                    slot="body.append"
                                    v-if="items.length > 0"
                                >
                                    <tr class="green--text hidden-md-and-up">
                                        <td class="title">
                                            Reimbursable:
                                            <strong>{{
                                                reimbursable_amount
                                            }}</strong>
                                            <br />
                                            Total:
                                            <strong>{{ amount }}</strong>
                                        </td>
                                    </tr>
                                    <tr class="green--text hidden-sm-and-down">
                                        <td class="title">Total</td>
                                        <td>
                                            <strong>{{
                                                reimbursable_amount
                                            }}</strong>
                                        </td>
                                        <td>
                                            <strong>{{ amount }}</strong>
                                        </td>
                                    </tr>
                                </template>
                                <template v-slot:top>
                                    <v-toolbar flat color="white">
                                        Expense Details
                                        <v-spacer></v-spacer>
                                    </v-toolbar>
                                </template>
                            </v-data-table>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" md="4">
                            <v-textarea
                                rows="1"
                                label="Remarks"
                                v-model="remarks"
                                readonly
                            ></v-textarea>
                        </v-col>
                    </v-row>

                    <small class="text--secondary">
                        * indicates required field
                    </small>
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
            valid: false,
            menu: false,
            code: null,
            description: null,
            amount: 0,
            reimbursable_amount: 0,
            receipt_number: null,
            date: null,
            remarks: null,
            is_active: true,
            expense_type: null,
            expense_types: [],
            employee: null,
            employees: [],
            vendor: null,
            vendors: [],
            particular: "",
            particular_amount: 0,
            headers: [
                { text: "Particulars", value: "description", sortable: false },
                { text: "Reimbursable", value: "reimbursable_amount", sortable: false },
                { text: "Amount", value: "amount", sortable: false }
            ],
            items: []
        };
    },
    methods: {
        getData() {
            let _this = this;

            axios
                .get("/api/expenses/" + _this.$route.params.id)
                .then(response => {
                    let data = response.data.data;

                    _this.code = data.code;
                    _this.description = data.description;
                    _this.amount = data.amount;
                    _this.reimbursable_amount = data.reimbursable_amount;
                    _this.receipt_number = data.receipt_number;
                    _this.date = data.date;
                    _this.remarks = data.remarks;
                    _this.is_active = data.is_active;
                    _this.expense_type = data.expense_type.name;
                    _this.employee = data.employee.fullname;
                    _this.vendor = data.vendor.name;
                    _this.items = data.expense_details;
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);

                    _this.errorDialog(`Error ${error.response.status}`, error.response.statusText);
                });
        },
        isEmpty(item) {
            if (item) {
                return parseFloat(item);
            }
            return 0;
        },
        editDetails() {
            this.$router.push({
                name: "admin.expenses.edit",
                params: { id: this.$route.params.id }
            });
        }
    },
    watch: {
        items() {
            this.amount = this.formatNumber(
                this.items.reduce(
                    (total, item) =>
                        parseFloat(total) + parseFloat(item.amount),
                    0
                )
            );

            this.reimbursable_amount = this.items.reduce(
                (total, item) =>
                    parseFloat(total) + parseFloat(item.reimbursable_amount),
                0
            );
        }
    },
    created() {
        this.getData();
    }
};
</script>
