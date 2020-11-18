<template>
    <div>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">New Payment</h4>
            </v-card-title>

            <v-form ref="form" v-model="valid">
                <v-container>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-menu
                                ref="menu"
                                v-model="menu"
                                transition="scale-transition"
                                offset-y
                                min-width="290px"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="form.date"
                                        :rules="mixin_validation.required"
                                        :error-messages="errors.date"
                                        @input="errors.date = []"
                                        label="Date *"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                    v-model="form.date"
                                    no-title
                                    scrollable
                                    color="success"
                                    :max="maxDate"
                                >
                                </v-date-picker>
                            </v-menu>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-autocomplete
                                v-model="form.employee"
                                :rules="mixin_validation.required"
                                :items="employees"
                                :error-messages="errors.employee"
                                @input="errors.employee = []"
                                @change="loadExpenseReports"
                                item-value="id"
                                item-text="fullname"
                                label="Employee *"
                                return-object
                                required
                            >
                            </v-autocomplete>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="form.description"
                                :rules="[
                                    ...mixin_validation.required,
                                    ...mixin_validation.minLength(100)
                                ]"
                                :counter="100"
                                :error-messages="errors.description"
                                label="Description *"
                                required
                            ></v-text-field>
                        </v-col>

                        <!-- <v-col cols="12" md="4">
                            <v-menu
                                v-model="menu_payee"
                                :close-on-content-click="false"
                                :nudge-width="200"
                                offset-y
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="form.payee"
                                        :rules="mixin_validation.required"
                                        :error-messages="errors.payee"
                                        @input="errors.payee = []"
                                        label="Payee *"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                </template>

                                <v-card>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" md="8">
                                                <v-text-field
                                                    v-model="form.payee"
                                                    :rules="
                                                        mixin_validation.required
                                                    "
                                                    :counter="100"
                                                    label="Payee *"
                                                    required
                                                ></v-text-field>
                                            </v-col>

                                            <v-col cols="12" md="4">
                                                <v-text-field
                                                    v-model="form.payee_phone"
                                                    :rules="[]"
                                                    :counter="100"
                                                    label="Payee Phone No."
                                                    required
                                                ></v-text-field>
                                            </v-col>

                                            <v-col cols="12">
                                                <v-text-field
                                                    v-model="form.payee_address"
                                                    :rules="[]"
                                                    :counter="100"
                                                    label="Payee Address"
                                                    required
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card>
                            </v-menu>
                        </v-col> -->

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="form.voucher_no"
                                :rules="[]"
                                :counter="100"
                                label="Voucher No."
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
                                :search="search"
                                item-key="id"
                                show-select
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
                                        <td></td>
                                        <td>
                                            <strong>{{ total }}</strong>
                                        </td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </template>
                                <template v-slot:top>
                                    <v-row>
                                        Expense Reports

                                        <v-spacer></v-spacer>

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
                                    </v-row>
                                    <v-row>
                                        <v-col>
                                            <v-text-field
                                                v-model="search"
                                                append-icon="mdi-magnify"
                                                label="Search"
                                                single-line
                                                hide-details
                                            ></v-text-field>
                                        </v-col>
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
                                v-model="form.remarks"
                                label="Remarks"
                                rows="1"
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
    </div>
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
            menu: false,
            menu_payee: false,
            search: "",
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
                "Last 7 Days",
                "Last 30 Days",
                "This Week",
                "This Month",
                "This Year"
            ],
            headers: [
                { text: "Employee", value: "employee" },
                { text: "Description", value: "description" },
                { text: "Amount", value: "total" },
                { text: "Created", value: "created_at" },
                { text: "", value: "data-table-expand" }
            ],
            items: [],
            selected: [],
            employees: [],
            total: 0,
            form: {
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
                employee: { id: null }
            },
            errors: {
                employee: [],
                code: [],
                reference_no: [],
                voucher_no: [],
                description: [],
                date: [],
                cheque_no: [],
                cheque_date: [],
                amount: [],
                payee: [],
                payee_address: [],
                payee_phone: [],
                remarks: [],
                notes: []
            }
        };
    },
    methods: {
        onRefresh() {
            Object.assign(this.$data, this.$options.data.apply(this));
        },
        updateDates(e) {
            this.date_range = e;
            this.loadExpenseReports();
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
                    console.log(error.response);

                    _this.mixin_errorDialog(
                        `Error ${error.response.status}`,
                        error.response.statusText
                    );
                });
        },
        loadExpenseReports() {
            let start_date = this.date_range[0];
            let end_date = this.date_range[1];
            let _this = this;

            axios
                .get("/api/data/expense_reports", {
                    params: {
                        create_payment: true,
                        start_date: start_date,
                        end_date: end_date,
                        employee_id: _this.form.employee.id
                    }
                })
                .then(response => {
                    _this.items = response.data.data;
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
        onSave() {
            let _this = this;

            _this.$refs.form.validate();

            if (this.selected == 0) {
                this.mixin_errorDialog("Error", "No Expense Report selected.");
                return;
            }

            if (_this.$refs.form.validate()) {
                axios
                    .post("/api/payments", {
                        code: _this.form.code,
                        reference_no: _this.form.reference_no,
                        voucher_no: _this.form.voucher_no,
                        description: _this.form.description,
                        date: _this.form.date,
                        cheque_no: _this.form.cheque_no,
                        cheque_date: _this.form.cheque_date,
                        amount: _this.total,
                        payee: _this.form.payee,
                        payee_address: _this.form.payee_address,
                        payee_phone: _this.form.payee_phone,
                        remarks: _this.form.remarks,
                        notes: _this.form.notes,
                        expense_reports: _this.selected,
                        employee: _this.form.employee.id
                    })
                    .then(function(response) {
                        console.log(response);
                        
                        _this.onRefresh();

                        _this.$dialog.message.success(
                            "Payment created successfully.",
                            {
                                position: "top-right",
                                timeout: 2000
                            }
                        );

                        _this.$store.dispatch("AUTH_USER");

                        _this.$router.push({ name: "admin.payments.index" });
                    })
                    .catch(function(error) {
                        console.log(error);
                        console.log(error.response);

                        _this.mixin_errorDialog(
                            `Error ${error.response.status}`,
                            error.response.statusText
                        );

                        _this.errors = error.response.data.errors;
                    });

                return;
            }
        }
    },
    computed: {
        maxDate() {
            return moment().format("YYYY-MM-DD");
        }
    },
    watch: {
        selected() {
            this.total = this.selected.reduce(
                (total, item) => total + item.total,
                0
            );
        }
    },
    created() {
        this.$store.dispatch("AUTH_USER");
        // this.loadExpenseReports();
        this.loadEmployees();
    }
};
</script>
