<template>
    <div>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
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
                        <!-- <v-col cols="12" md="4">
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
                        </v-col> -->
                        <v-col cols="12" md="8">
                            <!-- <v-text-field
                                v-model="description"
                                :rules="rules.description"
                                :counter="100"
                                label="Description"
                                required
                            ></v-text-field> -->
                            <v-combobox
                                v-model="description"
                                :rules="rules.description"
                                :counter="100"
                                :items="[default_description]"
                                :error-messages="errors.description"
                                @input="errors.description = []"
                                label="Description"
                            ></v-combobox>
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
                                show-expand
                                single-expand
                                class="elevation-0"
                            >
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
                                        <td>
                                            <strong>{{ total }}</strong>
                                        </td>
                                        <td></td>
                                        <!-- <td></td> -->
                                    </tr>
                                </template>
                                <template v-slot:[`item.actions`]="{ item }">
                                    <v-icon
                                        small
                                        class="mr-2"
                                        @click="$router.push(`/expenses/${item.id}`)"
                                    >
                                        mdi-eye
                                    </v-icon>
                                    <v-icon
                                        small
                                        class="mr-2"
                                        @click="$router.push(`/expenses/${item.id}/edit`)"
                                    >
                                        mdi-pencil
                                    </v-icon>
                                    <!-- <v-icon
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
                                    </v-icon> -->
                                </template>
                                <template v-slot:top>
                                    <v-row>
                                        <!-- <v-col cols="12" md="4"> -->
                                        Expenses
                                        <!-- </v-col> -->

                                        <v-spacer></v-spacer>

                                        <!-- <v-col cols="12" md="4"> -->
                                        <!-- <v-btn
                                            @click="onCreate"
                                            color="white"
                                            class="mr-2"
                                        >
                                            New Item
                                        </v-btn> -->

                                        <v-btn
                                            class="mr-2"
                                            :to="{
                                                name: 'user.expenses.create'
                                            }"
                                        >
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
                                        <!-- </v-col> -->
                                    </v-row>
                                </template>
                                <template
                                    v-slot:expanded-item="{ headers, item }"
                                >
                                    <td :colspan="headers.length">
                                        <v-container>
                                            <table>
                                    <tr>
                                        <td><strong>Reimbursable</strong></td>
                                        <td>:</td>
                                        <td>
                                            {{
                                                formatNumber(
                                                    item.reimbursable_amount
                                                )
                                            }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>Code</strong></td>
                                        <td>:</td>
                                        <td>{{ item.code }}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Description</strong></td>
                                        <td>:</td>
                                        <td>{{ item.description }}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Remarks</strong></td>
                                        <td>:</td>
                                        <td>{{ item.remarks }}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Created</strong></td>
                                        <td>:</td>
                                        <td>
                                            {{
                                                formatDate(
                                                    item.created_at,
                                                    "YYYY-MM-DD HH:mm:ss"
                                                )
                                            }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>Cancelled</strong></td>
                                        <td>:</td>
                                        <td>
                                            {{
                                                formatDate(
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
                        <v-btn @click="$router.go(-1)">
                            Cancel
                        </v-btn>
                    </v-card-actions>
                </v-container>
            </v-form>
        </v-card>

        <!-- <CreateExpense
            ref="createExpense"
            :employeeid="employee"
            @onSaveExpense="loadExpenses"
        ></CreateExpense>

        <EditExpense
            ref="editExpense"
            :employeeid="employee"
            @onSaveExpense="loadExpenses"
        ></EditExpense> -->
    </div>
</template>

<script>
import moment from "moment";
import numeral from "numeral";
import DateRangePicker from "../../../../components/daterangepicker/DateRangePicker";
// import CreateExpense from "./components/CreateExpense";
// import EditExpense from "./components/EditExpense";

export default {
    components: {
        DateRangePicker,
        // CreateExpense,
        // EditExpense
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
                { text: "Date", value: "date" },
                { text: "Description", value: "expense_type.name" },
                { text: "Receipt", value: "receipt_number" },
                { text: "Vendor", value: "vendor.name" },
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
        getCurrentUser() {
            let _this = this;

            return new Promise((resolve, reject) => {
                axios
                    .get("/api/user")
                    .then(response => {
                        // _this.user = response.data.data;
                        let data = response.data.data;

                        let employee_id =
                            data.employee == null ? 0 : data.employee.id;

                        _this.employee = employee_id;

                        // console.log(response);

                        resolve(employee_id);
                    })
                    .catch(error => {
                        console.log(error);
                        console.log(error.response);

                        reject();
                    });
            });
        },
        updateDates(e) {
            this.date_range = e;
            this.loadExpenses();
        },
        loadExpenses() {
            let start_date = this.date_range[0];
            let end_date = this.date_range[1];
            let _this = this;

            this.getCurrentUser().then(item => {
                axios
                    .get("/api/data/expenses", {
                        params: {
                            create_report: true,
                            employee_id: item,
                            start_date: start_date,
                            end_date: end_date
                        }
                    })
                    .then(response => {
                        _this.items = response.data.data;
                    })
                    .catch(error => {
                        console.log(error);
                        console.log(error.response);
                    });
            });
        },
        // loadEmployees() {
        //     let _this = this;

        //     axios
        //         .get("/api/data/employees")
        //         .then(response => {
        //             _this.employees = response.data.data;
        //         })
        //         .catch(error => {
        //             console.log(error);
        //             console.log(error.response);
        //         });
        // },
        onRefresh() {
            Object.assign(this.$data, this.$options.data.apply(this));
        },
        onSave() {
            let _this = this;

            if (_this.employee == null || _this.employee <= 0) {
                _this.$dialog.message.error("User Account Unauthorized", {
                    position: "top-right",
                    timeout: 2000
                });
                return;
            }

            _this.$refs.form.validate();

            if (_this.selected.length == 0) {
                _this.$dialog.message.error("No Expenses selected", {
                    position: "top-right",
                    timeout: 2000
                });

                return;
            }

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

                        _this.$router.push({
                            name: "user.expense_reports.index"
                        });
                    })
                    .catch(function(error) {
                        console.log(error);
                        console.log(error.response);
                    });

                return;
            }
        },
        onCreate() {
            if (this.employee == 0) {
                this.$dialog.message.error("No Employee selected", {
                    position: "top-right",
                    timeout: 2000
                });

                return;
            }

            // this.$refs.createExpense.openDialog();
        },
        // onSaveExpense() {
        //     console.log("Expense saved");
        //     this.loadExpenses();
        // },
        onEdit(item) {
            // this.$refs.editExpense.openDialog(item);
        },
        onDelete(item) {
            let _this = this;

            this.$confirm("Move item to archive?").then(res => {
                if (res) {
                    axios
                        .delete(`/api/expenses/${item.id}`, {
                            params: {
                                ids: [item.id]
                            }
                        })
                        .then(function(response) {
                            _this.$dialog.message.success(
                                "Item(s) moved to archive.",
                                {
                                    position: "top-right",
                                    timeout: 2000
                                }
                            );

                            _this.loadExpenses();
                        })
                        .catch(function(error) {
                            console.log(error);
                            console.log(error.response);
                        });
                }
            });
        },
        formatNumber(data) {
            return numeral(data).format("0,0.00");
        },
        formatDate(date, format) {
            return date == null ? "" : moment(date).format(format);
        },
    },
    watch: {
        selected() {
            this.total = this.selected.reduce(
                (total, item) => total + item.amount,
                0
            );
        }
    },
    computed: {
        default_description() {
            return `Expense Report Summary (${moment(this.date_range[0]).format(
                "LL"
            )} - ${moment(this.date_range[1]).format("LL")})`;
        }
    },
    created() {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " + localStorage.getItem("access_token");

        // this.loadEmployees();
        this.loadExpenses();
    }
};
</script>
