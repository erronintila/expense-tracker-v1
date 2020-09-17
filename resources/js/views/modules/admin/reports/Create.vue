<template>
    <v-app>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn :to="{ name: 'admin.reports.index' }" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">New Expense Report</h4>
            </v-card-title>

            <v-form ref="form" v-model="valid">
                <v-container>
                    <v-row>
                        <v-spacer></v-spacer>
                    </v-row>

                    <v-row>
                        <v-col cols="12" md="4">
                            <v-autocomplete
                                v-model="employee"
                                :rules="rules.employee"
                                :items="employees"
                                :error-messages="errors.employee"
                                @input="errors.employee = []"
                                @change="loadExpenses"
                                item-value="id"
                                item-text="fullname"
                                label="Employee *"
                                required
                            >
                            </v-autocomplete>
                        </v-col>
                        <v-col cols="12" md="8">
                            <v-text-field
                                v-model="description"
                                :rules="rules.description"
                                :counter="100"
                                label="Description"
                                required
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12">
                            <v-data-table
                                elevation="0"
                                v-model="selected"
                                :headers="headers"
                                :items="items"
                                :items-per-page="5"
                                item-key="id"
                                show-select
                                single-expand
                                show-expand
                                class="elevation-0"
                            >
                                <template slot="body.append" v-if="items.length > 0">
                                    <tr class="green--text">
                                        <td class="title">Total</td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <strong>{{ total }}</strong>
                                        </td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </template>
                                <template v-slot:[`item.actions`]="{ item }">
                                    <v-icon
                                        small
                                        class="mr-2"
                                        @click="onEdit(item)"
                                    >
                                        mdi-pencil
                                    </v-icon>
                                    <v-icon
                                        small
                                        class="mr-2"
                                        @click="onDelete(item)"
                                    >
                                        mdi-delete
                                    </v-icon>
                                </template>
                                <template v-slot:top>
                                    <v-row>
                                        <v-col cols="12" md="4">
                                            Expenses
                                        </v-col>

                                        <v-spacer></v-spacer>

                                        <v-col cols="12" md="4">
                                            <v-btn color="white" class="mr-2">
                                                New Item
                                            </v-btn>
                                            <DateRangePicker
                                                :preset="preset"
                                                :presets="presets"
                                                :value="date_range"
                                                :solo="true"
                                                :buttonType="true"
                                                :buttonColor="'white'"
                                                :buttonDark="false"
                                                @updateDates="updateDates"
                                            ></DateRangePicker>
                                        </v-col>
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
                                :rules="rules.remarks"
                            >
                            </v-textarea>
                        </v-col>
                    </v-row>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green" dark @click="onSave">Save</v-btn>
                        <v-btn :to="{ name: 'admin.reports.index' }">
                            Cancel
                        </v-btn>
                    </v-card-actions>
                </v-container>
            </v-form>
        </v-card>
    </v-app>
</template>

<script>
import moment from "moment";
import DateRangePicker from "../../../../components/daterangepicker/DateRangePicker";

export default {
    components: {
        DateRangePicker
    },
    data() {
        return {
            valid: false,
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
                {
                    text: "Expense",
                    value: "description"
                },
                { text: "Type", value: "expense_type.name" },
                { text: "Amount", value: "amount" },
                { text: "Actions", value: "actions", sortable: false },
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
        updateDates(e) {
            this.date_range = e;
            this.loadExpenses();
        },
        loadExpenses() {
            let start_date = this.date_range[0];
            let end_date = this.date_range[1];
            let _this = this;

            axios
                .get("/api/data/expenses", {
                    params: {
                        create_report: true,
                        employee_id: _this.employee,
                        start_date: start_date,
                        end_date: end_date
                    }
                })
                .then(response => {
                    console.log(response);

                    _this.items = response.data.data;
                    // _this.total = response.data.total;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        loadEmployees() {
            let _this = this;

            axios
                .get("/api/data/employees")
                .then(response => {
                    _this.employees = response.data.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        onRefresh() {
            Object.assign(this.$data, this.$options.data.apply(this));
        },
        onSave() {
            let _this = this;

            if (_this.$refs.form.validate()) {
                axios
                    .post("/api/expense_reports", {
                        code: _this.code,
                        description: _this.description,
                        remarks: _this.remarks,
                        notes: _this.notes,
                        employee_id: _this.employee,
                        expenses: _this.selected
                    })
                    .then(function(response) {
                        // _this.onRefresh();

                        _this.$dialog.message.success(
                            "Expense Report created successfully.",
                            {
                                position: "top-right",
                                timeout: 2000
                            }
                        );

                        _this.$router.push({ name: "admin.reports.index" });
                    })
                    .catch(function(error) {
                        console.log(error);
                    });

                return;
            }
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

        this.loadEmployees();
        this.loadExpenses();
    }
};
</script>
