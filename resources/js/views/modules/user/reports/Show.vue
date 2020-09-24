<template>
    <v-app>
        <PrintDetailed></PrintDetailed>

        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn :to="{ name: 'user.reports.index' }" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">Expense Report Details</h4>
            </v-card-title>

            <v-form ref="form" v-model="valid">
                <v-container>
                    <v-row>
                        <v-spacer></v-spacer>
                    </v-row>

                    <v-row>
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="employee"
                                label="Employee"
                                required
                            >
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" md="8">
                            <v-text-field
                                v-model="description"
                                label="Description"
                                required
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
                                <template v-slot:[`item.amount`]="{ item }">
                                    {{ formatNumber(item.amount) }}
                                </template>
                                <template
                                    slot="body.append"
                                    v-if="items.length > 0"
                                >
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
                                            <strong>{{
                                                formatNumber(total)
                                            }}</strong>
                                        </td>
                                        <td></td>
                                    </tr>
                                </template>
                                <template v-slot:top>
                                    <v-row>
                                        Expenses
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
                                                        <strong>Date</strong>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        {{ item.date }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Receipt</strong>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        {{
                                                            item.receipt_number
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Vendor</strong>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        {{ item.vendor.name }}
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
                        <v-col cols="12" md="6">
                            <v-textarea
                                :rows="remarks == '' ? 1 : 2"
                                v-model="remarks"
                                label="Remarks"
                                readonly
                            >
                            </v-textarea>
                        </v-col>
                    </v-row>

                    <v-card-actions>
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
                    </v-card-actions>
                </v-container>
            </v-form>
        </v-card>
    </v-app>
</template>

<script>
import moment from "moment";
import numeral from "numeral";
import DateRangePicker from "../../../../components/daterangepicker/DateRangePicker";
import CreateExpense from "./components/CreateExpense";
import EditExpense from "./components/EditExpense";
import PrintDetailed from "./components/PrintDetailed";
import PrintSummary from "./components/PrintSummary";

export default {
    components: {
        DateRangePicker,
        CreateExpense,
        EditExpense,
        PrintDetailed,
        PrintSummary
    },
    data() {
        return {
            dialogCreate: false,
            dialogEdit: false,
            valid: false,
            date_range: [
                moment()
                    .startOf("month")
                    .format("YYYY-MM-DD"),
                moment()
                    .endOf("month")
                    .format("YYYY-MM-DD")
            ],
            preset: "",
            presets: [
                "Today",
                "Yesterday",
                "Last 7 Days",
                "Last 30 Days",
                "This Week",
                "This Month",
                "This Quarter",
                "This Year",
                "Last Week",
                "Last Month",
                "Last Quarter",
                "Last Year",
                "Last 5 Years"
            ],
            selected: [],
            headers: [
                { text: "Date", value: "date", sortable: false },
                {
                    text: "Description",
                    value: "expense_type.name",
                    sortable: false
                },
                { text: "Receipt", value: "receipt_number", sortable: false },
                { text: "Vendor", value: "vendor.name", sortable: false },
                { text: "Amount", value: "amount", sortable: false },
                { text: "", value: "data-table-expand" }
            ],
            items: [],
            total: 0,
            code: "",
            description: "",
            remarks: "",
            notes: "",
            employee: 0,
            employees: [],
            expenses: [],
            rules: {
                date_range: [],
                code: [],
                description: [
                    v => !!v || "Description is required",
                    v =>
                        (!!v && v.length <= 100) ||
                        "Description must be less than 100 characters"
                ],
                remarks: [],
                notes: [],
                employee: [v => !!v || "Employee is required"],
                expenses: []
            },
            errors: {
                date_range: [],
                code: [],
                description: [],
                remarks: [],
                notes: [],
                employee: [],
                expenses: []
            }
        };
    },
    methods: {
        getCurrentUser() {
            let _this = this;
            axios
                .get("/api/user")
                .then(response => {
                    // _this.user = response.data.data;
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);
                });
        },
        updateDates(e) {
            this.date_range = e;
            this.loadExpenses(this.employee);
        },
        getData() {
            let _this = this;
            axios
                .get(`/api/expense_reports/${_this.$route.params.id}`)
                .then(response => {
                    let data = response.data.data;

                    _this.code = data.code;
                    _this.description = data.description;
                    _this.remarks = data.remarks;
                    _this.notes = data.notes;
                    _this.employee = `${data.employee.last_name}, ${data.employee.first_name} ${data.employee.suffix}`;
                    _this.status = data.status;
                    _this.expenses = data.expenses;
                    _this.submitted_at = data.submitted_at;
                    _this.reviewed_at = data.reviewed_at;
                    _this.approved_at = data.approved_at;
                    _this.cancelled_at = data.cancelled_at;
                    _this.created_at = data.created_at;
                    _this.updated_at = data.updated_at;
                    _this.deleted_at = data.deleted_at;
                    _this.total = data.total;

                    _this.selected.splice(0, 0, ...data.expenses);

                    _this.loadExpenses(data.employee.id);
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);
                });
        },
        loadExpenses(emp_id) {
            let start_date = this.date_range[0];
            let end_date = this.date_range[1];
            let _this = this;

            axios
                .get("/api/data/expenses", {
                    params: {
                        update_report: true,
                        employee_id: emp_id,
                        start_date: start_date,
                        end_date: end_date,
                        expense_report_id: _this.$route.params.id
                    }
                })
                .then(response => {
                    _this.items = response.data.data;
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);
                });
        },
        onEdit() {
            this.$router.push({
                name: "user.reports.edit",
                params: { id: this.$route.params.id }
            });
        },
        formatNumber(data) {
            return numeral(data).format("0,0.00");
        }
    },
    watch: {
        selected() {
            this.total = this.selected.reduce(
                (total, item) => total + item.amount,
                0
            );
        }
    },
    created() {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " + localStorage.getItem("access_token");

        this.getCurrentUser();
        this.getData();
    }
};
</script>
