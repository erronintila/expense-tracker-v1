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

                <h4 class="title green--text">Edit Expense Report</h4>
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
                                v-model="form.employee"
                                :rules="mixin_validation.required"
                                :items="employees"
                                :error-messages="errors.employee"
                                @input="errors.employee = []"
                                @change="updateEmployee"
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

                            <!-- <v-data-table
                                elevation="0"
                                v-model="selected"
                                :headers="headers"
                                :items="items"
                                :items-per-page="5"
                                item-key="id"
                                show-select
                                show-expand
                                single-expand
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
                                        @click="
                                            $router.push(
                                                `/admin/expenses/${item.id}`
                                            )
                                        "
                                    >
                                        mdi-eye
                                    </v-icon>
                                    <v-icon
                                        small
                                        class="mr-2"
                                        @click="
                                            $router.push(
                                                `/admin/expenses/${item.id}/edit`
                                            )
                                        "
                                    >
                                        mdi-pencil
                                    </v-icon>
                                </template>
                                <template v-slot:top>
                                    <v-row>
                                        <v-spacer></v-spacer>

                                        <v-btn
                                            class="mr-2"
                                            :to="{
                                                name: 'admin.expenses.create'
                                            }"
                                        >
                                            New Item
                                        </v-btn>
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
                                                <tr v-if="item.deleted">
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
                            </v-data-table> -->

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
                                            {{ selected.length }} Item(s) Selected
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

                            <v-textarea
                                v-model="form.remarks"
                                label="Remarks"
                                :rules="[]"
                                :rows="3"
                            >
                            </v-textarea>
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
            loader: true,
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
            employees: [],
            expenses: [],
            total: 0,
            totalItems: 0,
            expense_report_id: this.$route.params.id,
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
                employee: { id: 0, remaining_fund: 0, fund: 0 }
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
            this.loadExpenses(this.form.employee.id);
        },
        updateEmployee() {
            this.getDataFromApi().then(data => {
                this.items = data.items;
                this.totalItems = data.total;
            });
        },
        getData() {
            let _this = this;
            axios
                .get(`/api/expense_reports/${_this.$route.params.id}`)
                .then(response => {
                    let data = response.data.data;

                    _this.form.code = data.code;
                    _this.form.description = data.description;
                    _this.form.remarks = data.remarks;
                    _this.form.notes = data.notes;
                    _this.form.employee = data.employee;
                    _this.form.status = data.status;
                    // _this.expenses = data.expenses;
                    // _this.submitted_at = data.submitted_at;
                    // _this.reviewed_at = data.reviewed_at;
                    // _this.approved_at = data.approved_at;
                    // _this.cancelled_at = data.cancelled_at;
                    // _this.created_at = data.created_at;
                    // _this.updated_at = data.updated_at;
                    // _this.deleted_at = data.deleted_at;
                    _this.total = data.total;

                    // _this.date_range = [_this.from, _this.to];

                    // _this.loadExpenses(data.employee.id);
                    _this.getDataFromApi().then(data => {
                        _this.items = data.items;
                        _this.totalItems = data.total;

                        let selected = data.items.filter(function(item) {
                            return item.expense_report !== null;
                        });

                        _this.selected.splice(0, 0, ...selected);
                    });

                    // _this.selected.splice(0, 0, ...data.expenses);

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
        },
        getDataFromApi() {
            let _this = this;

            _this.loading = true;

            return new Promise((resolve, reject) => {
                const { sortBy, sortDesc, page, itemsPerPage } = this.options;

                let range = _this.date_range;
                let employee_id = _this.form.employee.id;

                axios
                    .get("/api/expenses", {
                        params: {
                            page: page,
                            itemsPerPage: itemsPerPage,
                            start_date: range[0],
                            end_date: range[1],
                            employee_id: employee_id,
                            expense_report_id: _this.$route.params.id,
                            update_report: true
                        }
                    })
                    .then(response => {
                        // _this.selected = [];

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
                            error.response.statusText
                        );

                        _this.loading = false;
                    });
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
        onRefresh() {
            Object.assign(this.$data, this.$options.data.apply(this));
        },
        onSave() {
            let _this = this;

            _this.$refs.form.validate();

            if (_this.selected.length == 0) {
                _this.$dialog.message.error("No Expenses selected", {
                    position: "top-right",
                    timeout: 2000
                });

                return;
            }

            if (_this.$refs.form.validate()) {
                _this.loader = true;

                axios
                    .put("/api/expense_reports/" + _this.$route.params.id, {
                        code: _this.form.code,
                        description: _this.form.description,
                        remarks: _this.form.remarks,
                        notes: _this.form.notes,
                        employee_id: _this.form.employee.id,
                        expenses: _this.selected
                    })
                    .then(function(response) {
                        _this.$dialog.message.success(
                            "Expense Report updated successfully.",
                            {
                                position: "top-right",
                                timeout: 2000
                            }
                        );

                        // _this.$store.dispatch("AUTH_USER");

                        _this.$router.push({
                            name: "admin.expense_reports.index"
                        });
                    })
                    .catch(function(error) {
                        _this.loader =  false;

                        console.log(error);
                        console.log(error.response);

                        _this.mixin_errorDialog(
                            `Error ${error.response.status}`,
                            error.response.statusText
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
        }
    },
    computed: {
        params(nv) {
            return {
                ...this.options,
                query: this.date_range,
                query: this.expense_report_id,
                query: this.form.employee.id
            };
        },
        default_description() {
            return `Expense Report Summary (${moment(this.date_range[0]).format(
                "LL"
            )} - ${moment(this.date_range[1]).format("LL")})`;
        }
    },
    created() {
        // this.$store.dispatch("AUTH_USER");
        this.loadEmployees();

        this.getData();
    }
};
</script>
