<template>
    <div>
        <v-container v-if="loader" style="height: 400px">
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

                            <div class="overline green--text">Expenses</div>

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

                            <div
                                class="red--text"
                                v-if="errors.expenses.length > 0"
                            >
                                <small>{{ errors.expenses[0] }}</small>
                            </div>

                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-textarea
                                        v-model="form.remarks"
                                        label="Remarks"
                                        :rules="[]"
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
                                                        mixin_formatNumber(paid)
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
                        <v-btn @click="$router.go(-1)"> Cancel </v-btn>
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
            users: [],
            expenses: [],
            total: 0,
            paid: 0,
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
            this.loadExpenses(
                this.form.user == null ? null : this.form.user.id
            ).then(() => {
                this.getDataFromApi().then(data => {
                    this.items = data.items;
                    this.totalItems = data.total;
                });
            });
        },
        updateUser() {
            this.loadExpenses(
                this.form.user == null ? null : this.form.user.id
            ).then(() => {
                this.getDataFromApi().then(data => {
                    this.items = data.items;
                    this.totalItems = data.total;
                });
            });
        },
        getData() {
            return new Promise((resolve, reject) => {
                axios
                    .get(`/api/expense_reports/${this.$route.params.id}`)
                    .then(response => {
                        let data = response.data.data;

                        this.form.code = data.code;
                        this.form.description = data.description;
                        this.form.remarks = data.remarks;
                        this.form.notes = data.notes;
                        this.form.user = data.user;
                        this.form.status = data.status;
                        this.total = data.total;
                        resolve();
                    })
                    .catch(error => {
                        this.mixin_showErrors(error);
                        reject();
                    })
                    .finally((this.loader = false));
            });
        },
        getDataFromApi() {
            this.loading = true;

            return new Promise((resolve, reject) => {
                const { sortBy, sortDesc, page, itemsPerPage } = this.options;

                let range = this.date_range;
                let user_id =
                    this.form.user == null ? null : this.form.user.id;

                axios
                    .get("/api/expenses", {
                        params: {
                            page: page,
                            itemsPerPage: itemsPerPage,
                            start_date: range[0],
                            end_date: range[1] ? range[1] : range[0],
                            user_id: user_id,
                            expense_report_id: this.$route.params.id,
                            update_report: true
                        }
                    })
                    .then(response => {
                        let items = response.data.data;
                        let total = response.data.meta.total;
                        resolve({ items, total });
                    })
                    .catch(error => {
                        this.mixin_showErrors(error);
                        reject();
                    })
                    .finally((this.loading = false));
            });
        },
        loadExpenses(emp_id) {
            let start_date = this.date_range[0];
            let end_date = this.date_range[1];

            return new Promise((resolve, reject) => {
                axios
                    .get("/api/data/expenses", {
                        params: {
                            update_report: true,
                            user_id: emp_id,
                            start_date: start_date,
                            end_date: end_date,
                            expense_report_id: this.$route.params.id
                        }
                    })
                    .then(response => {
                        this.selected = response.data.data;
                        resolve();
                    })
                    .catch(error => {
                        this.mixin_showErrors(error);
                        reject();
                    });
            });
        },
        loadUsers() {
            return new Promise((resolve, reject) => {
                axios
                    .get("/api/data/users")
                    .then(response => {
                        this.users = response.data.data;
                        resolve();
                    })
                    .catch(error => {
                        this.mixin_showErrors(error);
                        reject();
                    });
            });
        },
        onRefresh() {
            Object.assign(this.$data, this.$options.data.apply(this));
        },
        onSave() {
            this.$refs.form.validate();

            if (this.selected.length == 0) {
                this.$dialog.message.error("No Expenses selected", {
                    position: "top-right",
                    timeout: 2000
                });

                return;
            }

            if (this.$refs.form.validate()) {
                this.loader = true;

                axios
                    .put("/api/expense_reports/" + this.$route.params.id, {
                        code: this.form.code,
                        description: this.form.description,
                        remarks: this.form.remarks,
                        notes: this.form.notes,
                        user_id:
                            this.form.user == null ? null : this.form.user.id,
                        expenses: this.selected
                    })
                    .then(response => {
                        this.mixin_successDialog(
                            response.data.status,
                            response.data.message
                        );

                        this.$router.push({
                            name: "admin.expense_reports.index"
                        });
                    })
                    .catch(error => {
                        this.mixin_showErrors(error);
                        this.errors = error.response.data.errors;
                    })
                    .finally((this.loader = false));

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
        this.loadUsers().then(() => {
            this.getData().then(() => {
                this.loadExpenses(
                    this.form.user == null ? null : this.form.user.id
                ).then(() => {
                    this.getDataFromApi().then(data => {
                        this.items = data.items;
                        this.totalItems = data.total;
                    });
                });
            });
        });
    },
    activated() {
        this.loadUsers().then(() => {
            this.getData().then(() => {
                this.loadExpenses(this.form.user.id).then(() => {
                    this.getDataFromApi().then(data => {
                        this.items = data.items;
                        this.totalItems = data.total;
                    });
                });
            });
        });
    }
};
</script>
