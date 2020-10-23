<template>
    <div>
        <v-card class="elevation-0 pt-0">
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
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="description"
                                label="Description"
                                readonly
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="date"
                                label="Date"
                                readonly
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="voucher_no"
                                label="Voucher No."
                                readonly
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="payee"
                                label="Payee"
                                readonly
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="payee_address"
                                label="Payee Address"
                                readonly
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="payee_phone"
                                label="Payee Phone No."
                                readonly
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12">
                            <v-data-table
                                elevation="0"
                                :headers="headers"
                                :items="items"
                                :hide-default-footer="true"
                                disable-pagination
                                item-key="id"
                                single-expand
                                show-expand
                                class="elevation-0"
                            >
                                <template
                                    slot="body.append"
                                    v-if="items.length > 0"
                                >
                                    <tr class="green--text">
                                        <td class="title">Total</td>
                                        <td></td>
                                        <td>
                                            <strong>{{
                                                mixin_formatNumber(total)
                                            }}</strong>
                                        </td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </template>
                                <template v-slot:[`item.created_at`]="{ item }">
                                    {{ mixin_formatDate(item.created_at, "YYYY-MM-DD HH:mm:ss") }}
                                </template>
                                <template v-slot:[`item.total`]="{ item }">
                                    {{ mixin_formatNumber(item.total) }}
                                </template>
                                <template v-slot:top>
                                    <v-row>
                                        Expense Reports

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
                                <template
                                    v-slot:expanded-item="{ headers, item }"
                                >
                                    <td :colspan="headers.length">
                                        <v-container>
                                            <v-card
                                                class="mx-auto"
                                                tile
                                                flat
                                                :key="item.id"
                                            >
                                                <div>
                                                    <strong>Expenses</strong>
                                                </div>
                                                <div
                                                    v-for="item in item.expenses"
                                                    :key="item.id"
                                                >
                                                    {{
                                                        `${item.date} (${item.expense_type.name}): ${item.amount}`
                                                    }}
                                                </div>
                                            </v-card>
                                        </v-container>
                                    </td>
                                </template>
                            </v-data-table>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" md="6">
                            <v-textarea
                                v-model="remarks"
                                label="Remarks"
                                rows="1"
                                readonly
                            >
                            </v-textarea>
                        </v-col>
                    </v-row>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green" dark @click="cancelPayment"
                            >Cancel Payment</v-btn
                        >
                    </v-card-actions>
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
            valid: false,
            menu: false,
            search: "",
            date_range: [
                moment()
                    .startOf("week")
                    .format("YYYY-MM-DD"),
                moment()
                    .endOf("week")
                    .format("YYYY-MM-DD")
            ],
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
                { text: "Employee", value: "employee", sortable: false },
                { text: "Description", value: "description", sortable: false },
                { text: "Amount", value: "total", sortable: false },
                { text: "Created", value: "created_at", sortable: false },
                { text: "", value: "data-table-expand", sortable: false }
            ],
            items: [],
            total: 0
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

                    // _this.selected.splice(0, 0, ...data.expenses);

                    // _this.loadExpenses(data.employee.id);
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);

                    _this.mixin_errorDialog(`Error ${error.response.status}`, error.response.statusText);
                });
        },
        cancelPayment() {
            let _this = this;

            this.$confirm(`Do you want to cancel this payment?`).then(res => {
                if (res) {
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
                                name: "admin.payments.index"
                            });
                        })
                        .catch(function(error) {
                            console.log(error);
                            console.log(error.response);

                            _this.mixin_errorDialog(`Error ${error.response.status}`, error.response.statusText);
                        });
                }
            });
        },
    },
    watch: {
        items() {
            this.total = this.items.reduce(
                (total, item) => total + item.total,
                0
            );
        }
    },
    created() {
        this.getData();
    }
};
</script>
