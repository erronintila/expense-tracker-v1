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

                <h4 class="title green--text">New Expense Report</h4>
            </v-card-title>

            <v-container>
                <v-card class="mx-auto mb-4" flat>
                    <v-form ref="form" v-model="valid">
                        <v-container>
                            <div class="overline green--text">
                                BASIC DETAILS
                            </div>
                            <DateRangePicker
                                :preset="preset"
                                :presets="presets"
                                :value="date_range"
                                :solo="false"
                                :buttonType="false"
                                :buttonColor="'white'"
                                :buttonDark="false"
                                @updateDates="updateDates"
                            ></DateRangePicker>
                            <v-autocomplete
                                v-model="form.user"
                                :rules="[...mixin_validation.required]"
                                :items="users"
                                :error-messages="errors.user_id"
                                @input="errors.user_id = []"
                                @change="updateUser"
                                item-value="id"
                                item-text="full_name"
                                label="Employee"
                                required
                                return-object
                            >
                            </v-autocomplete>
                            <v-combobox
                                v-model="form.description"
                                :rules="[
                                    ...mixin_validation.required,
                                    ...mixin_validation.minLength(100)
                                ]"
                                :counter="100"
                                :items="[default_description]"
                                :error-messages="errors.description"
                                @input="errors.description = []"
                                label="Description"
                            ></v-combobox>

                            <div class="overline green--text">
                                Expenses
                            </div>
                            
                            <v-data-table
                                v-model="selected"
                                :headers="headers"
                                :items="items"
                                :loading="loading"
                                :options.sync="options"
                                :server-items-length="totalItems"
                                :footer-props="{
                                    itemsPerPageOptions: [10, 20, 50, 100],
                                    showFirstLastPage: true,
                                    firstIcon: 'mdi-page-first',
                                    lastIcon: 'mdi-page-last',
                                    prevIcon: 'mdi-chevron-left',
                                    nextIcon: 'mdi-chevron-right'
                                }"
                                show-select
                                show-expand
                                single-expand
                                item-key="id"
                                class="elevation-0"
                            >
                                <template v-slot:top>
                                    <div v-if="selected.length > 0">
                                        <div class="d-inline">
                                            {{ selected.length }} Item(s)
                                            Selected
                                        </div>
                                        <v-btn @click="selected = []">
                                            Clear All Selected
                                        </v-btn>
                                    </div>
                                </template>
                                <template
                                    v-slot:expanded-item="{ headers, item }"
                                >
                                    <td :colspan="headers.length">
                                        <v-container>
                                            <table>
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
                                                        {{
                                                            item.vendor == null
                                                                ? ""
                                                                : item.vendor
                                                                      .name
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="item.remarks">
                                                    <td>
                                                        <strong>Remarks</strong>
                                                    </td>
                                                    <td>:</td>
                                                    <td>{{ item.remarks }}</td>
                                                </tr>
                                            </table>
                                        </v-container>
                                    </td>
                                </template>
                                <template v-slot:[`item.updated_at`]="{ item }">
                                    {{ mixin_getHumanDate(item.updated_at) }}
                                </template>
                                <template v-slot:[`item.amount`]="{ item }">
                                    {{ mixin_formatNumber(item.amount) }}
                                </template>
                                <template
                                    v-slot:[`item.replenishment`]="{ item }"
                                >
                                    {{
                                        mixin_formatNumber(
                                            item.amount -
                                                item.reimbursable_amount
                                        )
                                    }}
                                </template>
                                <template
                                    v-slot:[`item.status.status`]="{ item }"
                                >
                                    <v-chip
                                        :color="item.status.color"
                                        dark
                                        small
                                        >{{ item.status.status }}</v-chip
                                    >
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
                            </v-data-table>

                            <div class="red--text" v-if="errors.expenses.length > 0">
                                <small>{{errors.expenses[0]}}</small>
                            </div>

                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-textarea
                                        v-model="form.remarks"
                                        label="Remarks"
                                        :rows="3"
                                    >
                                    </v-textarea>
                                </v-col>

                                <v-col cols="12" md="6">
                                    <table width="100%" class="mt-4">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    Total Expense Amount
                                                </td>
                                                <td>:</td>
                                                <td
                                                    class="green--text text--darken-4 text-right"
                                                >
                                                    {{
                                                        mixin_formatNumber(
                                                            total
                                                        )
                                                    }}
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
                                                    (-)
                                                    {{
                                                        mixin_formatNumber(
                                                            paid
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
                                                <th class="text-left">
                                                    Amount to be reimbursed
                                                </th>
                                                <td>:</td>
                                                <td
                                                    class="green--text text--darken-4 text-right"
                                                >
                                                    {{
                                                        mixin_formatNumber(
                                                            balance
                                                        )
                                                    }}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green" dark @click="onSave">Save</v-btn>
                        <v-btn @click="$router.go(-1)">
                            Cancel
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-container>
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
            loading: true,
            loader: false,
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
            headers: [
                { text: "Date", value: "date" },
                { text: "Type", value: "expense_type.name" },
                { text: "Receipt", value: "receipt_number" },
                { text: "Vendor", value: "vendor.name" },
                { text: "Amount", value: "amount" },
                { text: "Actions", value: "actions", sortable: false },
                { text: "", value: "data-table-expand" }
            ],
            items: [],
            selected: [],
            users: [],
            expenses: [],
            total: 0,
            paid: 0,
            totalItems: 0,
            options: {
                sortBy: ["created_at"],
                sortDesc: [true],
                page: 1,
                itemsPerPage: 10
            },
            form: {
                code: "",
                description: "",
                remarks: "",
                notes: "",
                user: null
            },
            errors: {
                date_range: [],
                code: [],
                description: [],
                remarks: [],
                notes: [],
                user_id: [],
                expenses: []
            }
        };
    },
    methods: {
        updateDates(e) {
            this.date_range = e;
            // this.loadExpenses();
        },
        updateUser() {
            this.getDataFromApi().then(data => {
                this.items = data.items;
                this.totalItems = data.total;
            });

            this.errors.user_id = [];
        },
        loadExpenses() {
            let start_date = this.date_range[0];
            let end_date = this.date_range[1];
            let _this = this;

            axios
                .get("/api/data/expenses", {
                    params: {
                        create_report: true,
                        user_id: _this.form.user == null ? null : _this.form.user.id,
                        start_date: start_date,
                        end_date: end_date
                    }
                })
                .then(response => {
                    _this.items = response.data.data;
                    // _this.total = response.data.total;
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
        loadUsers() {
            let _this = this;

            axios
                .get("/api/data/users")
                .then(response => {
                    _this.users = response.data.data;
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
        getDataFromApi() {
            let _this = this;

            _this.loading = true;

            return new Promise((resolve, reject) => {
                const { sortBy, sortDesc, page, itemsPerPage } = this.options;

                let range = _this.date_range;
                let user_id = _this.form.user == null ? null : _this.form.user.id;

                axios
                    .get("/api/expenses", {
                        params: {
                            page: page,
                            itemsPerPage: itemsPerPage,
                            start_date: range[0],
                            end_date: range[1] ? range[1] : range[0],
                            user_id: user_id,
                            expense_report_id: null,
                            update_report: true
                        }
                    })
                    .then(response => {
                        let items = response.data.data;
                        let total = response.data.meta.total;

                        _this.loading = false;

                        resolve({ items, total });
                    })
                    .catch(error => {
                        console.log(error);
                        console.log(error.response);
                        
                        _this.mixin_errorDialog(
                            `Error ${error.response.status}`,
                            error.response.data.message
                        );

                        _this.loading = false;
                    });
            });
        },
        onSave() {
            let _this = this;

            _this.$refs.form.validate();

            if (_this.form.user == null) {
                _this.mixin_errorDialog("Error", "No employee selected");
                
                return;
            }

            if (_this.selected.length == 0) {
                _this.mixin_errorDialog("Error", "No expense(s) selected");
                
                return;
            }

            if (_this.$refs.form.validate()) {
                _this.loader = true;

                axios
                    .post("/api/expense_reports", {
                        code: _this.form.code,
                        description: _this.form.description,
                        remarks: _this.form.remarks,
                        notes: _this.form.notes,
                        user_id: _this.form.user == null ? null : _this.form.user.id,
                        expenses: _this.selected
                    })
                    .then(function(response) {
                        _this.mixin_successDialog(response.data.status, response.data.message);

                        _this.$router.push({
                            name: "admin.expense_reports.index"
                        });
                    })
                    .catch(function(error) {
                        _this.loader = false;

                        console.log(error);
                        console.log(error.response);

                        _this.errors = error.response.data.errors;

                        _this.mixin_errorDialog(
                            `Error ${error.response.status}`,
                            error.response.data.message
                        );
                    });

                return;
            }
        }
    },
    watch: {
        params: {
            handler() {
                this.getDataFromApi().then(data => {
                    this.items = data.items;
                    this.totalItems = data.total;
                });
            },
            deep: true
        },
        selected() {
            this.total = this.selected.reduce(
                (total, item) => total + item.amount,
                0
            );

            if(this.selected.length > 0) {
                this.errors.expenses = [];
            }
        },
    },
    computed: {
        params(nv) {
            return {
                ...this.options,
                query: this.date_range,
                query: this.form.user == null ? null : this.form.user.id
            };
        },
        default_description() {
            return `Expense Report Summary (${moment(this.date_range[0]).format(
                "LL"
            )} - ${moment(this.date_range[1]).format("LL")})`;
        },
        balance() {
            return this.total - this.paid;
        }
    },
    created() {
        this.loadUsers();
        // this.loadExpenses();
    },
    activated() {
        // this.$store.dispatch("AUTH_USER");
        this.loadUsers();
        // this.loadExpenses();
    }
};
</script>
