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

                <h4 class="title green--text">New Payment Record</h4>
            </v-card-title>
            <v-form ref="form" v-model="valid">
                <v-container>
                    <v-card class="mx-auto mb-4" flat>
                        <v-container>
                            <div class="overline green--text">
                                BASIC DETAILS
                            </div>
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
                                        label="Date"
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
                            <v-autocomplete
                                v-model="form.user"
                                :rules="mixin_validation.required"
                                :items="users"
                                :error-messages="errors.user"
                                @input="errors.user = []"
                                @change="updateUser"
                                item-value="id"
                                item-text="full_name"
                                label="Employee"
                                return-object
                                required
                            >
                            </v-autocomplete>
                            <v-text-field
                                v-model="form.description"
                                :rules="[
                                    ...mixin_validation.required,
                                    ...mixin_validation.minLength(100)
                                ]"
                                :counter="100"
                                :error-messages="errors.description"
                                label="Description"
                                required
                            ></v-text-field>
                            <v-text-field
                                v-model="form.voucher_no"
                                :rules="[]"
                                :counter="100"
                                label="Voucher No."
                                required
                            ></v-text-field>

                            <div class="overline green--text mb-4">
                                Expense Reports
                            </div>

                            <!-- <v-data-table
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
                                        <td></td>
                                        <td>
                                            <strong>{{ total }}</strong>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </template>
                                <template v-slot:top>
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

                                    <v-text-field
                                        v-model="search"
                                        append-icon="mdi-magnify"
                                        label="Search"
                                        single-line
                                        hide-details
                                    ></v-text-field>
                                </template>
                                <template v-slot:[`item.user`]="{ item }">
                                    {{
                                        item.user.last_name +
                                            " " +
                                            item.user.first_name +
                                            " " +
                                            item.user.suffix
                                    }}
                                </template>
                                <template v-slot:[`item.created`]="{ item }">
                                    {{
                                        mixin_formatDate(
                                            item.created.created_at,
                                            "YYYY-MM-DD HH:mm:ss"
                                        )
                                    }}
                                </template>
                                <template v-slot:[`item.period`]="{ item }">
                                    {{ item.from }} ~ {{ item.to }}
                                </template>
                                <template v-slot:[`item.actions`]="{ item }">
                                    <v-icon
                                        small
                                        class="mr-2"
                                        @click="
                                            $router.push(
                                                `/admin/expense_reports/${item.id}`
                                            )
                                        "
                                    >
                                        mdi-eye
                                    </v-icon>
                                </template>
                                <template
                                    v-slot:expanded-item="{ headers, item }"
                                >
                                    <td :colspan="headers.length">
                                        <v-container>
                                            <div v-if="item"></div>
                                            <div>
                                                Expenses
                                            </div>
                                            <v-simple-table dense>
                                                <template v-slot:default>
                                                    <thead>
                                                        <tr>
                                                            <th
                                                                class="text-left"
                                                            >
                                                                Date
                                                            </th>
                                                            <th
                                                                class="text-left"
                                                            >
                                                                Expense
                                                            </th>
                                                            <th
                                                                class="text-left"
                                                            >
                                                                Amount
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr
                                                            v-for="item in item.expenses"
                                                            :key="item.id"
                                                        >
                                                            <td>
                                                                {{ item.date }}
                                                            </td>
                                                            <td>
                                                                {{
                                                                    item
                                                                        .expense_type
                                                                        .name
                                                                }}
                                                            </td>
                                                            <td>
                                                                {{
                                                                    mixin_formatNumber(
                                                                        item.amount
                                                                    )
                                                                }}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </template>
                                            </v-simple-table>
                                        </v-container>
                                    </td>
                                </template>
                            </v-data-table> -->

                            <v-data-table
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
                                v-model="selected"
                                show-expand
                                single-expand
                                show-select
                                item-key="id"
                                class="elevation-0"
                            >
                                <template v-slot:top>
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

                                    <div v-if="selected.length > 0">
                                        <div class="d-inline">
                                            {{ selected.length }} Item(s)
                                            Selected
                                        </div>
                                        <v-btn @click="selected = []">
                                            Clear All Selected
                                        </v-btn>
                                    </div>

                                    <v-text-field
                                        v-model="search"
                                        append-icon="mdi-magnify"
                                        label="Search"
                                        single-line
                                        hide-details
                                    ></v-text-field>
                                </template>
                                <template v-slot:[`item.period`]="{ item }">
                                    {{ item.from }} ~ {{ item.to }}
                                </template>
                                <template v-slot:[`item.actions`]="{ item }">
                                    <v-icon
                                        small
                                        class="mr-2"
                                        @click="
                                            $router.push(
                                                `/admin/expense_reports/${item.id}`
                                            )
                                        "
                                    >
                                        mdi-eye
                                    </v-icon>
                                </template>
                                <template
                                    v-slot:expanded-item="{ headers, item }"
                                >
                                    <td :colspan="headers.length">
                                        <v-container>
                                            <table>
                                                <tr>
                                                    <td>
                                                        <strong>Created</strong
                                                        >
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        {{
                                                            mixin_formatDate(item.created_at, "YYYY-MM-DD HH:mm:ss")
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong
                                                            >Reimbursable
                                                            Amount</strong
                                                        >
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        {{
                                                            mixin_formatNumber(
                                                                item.total_reimbursable
                                                            )
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Paid</strong>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        {{
                                                            mixin_formatNumber(
                                                                item.paid
                                                            )
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="item.balance > 0">
                                                    <td>
                                                        <strong>Balance</strong>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        {{
                                                            mixin_formatNumber(
                                                                item.balance
                                                            )
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Status</strong>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        {{ item.status.status }}
                                                        ({{
                                                            item.status.remarks
                                                        }})
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
                                <template v-slot:[`item.total`]="{ item }">
                                    {{ mixin_formatNumber(item.total) }}
                                </template>
                                <template v-slot:[`item.user`]="{ item }">
                                    {{
                                        item.last_name +
                                            ", " +
                                            item.first_name
                                    }}
                                </template>
                                <template v-slot:[`item.updated_at`]="{ item }">
                                    {{ mixin_getHumanDate(item.updated_at) }}
                                </template>
                                <template
                                    slot="body.append"
                                    v-if="items.length > 0"
                                >
                                    <tr class="green--text hidden-md-and-up">
                                        <td class="title">
                                            Total:
                                            <strong>{{ totalAmount }}</strong>
                                        </td>
                                    </tr>
                                    <tr class="green--text hidden-sm-and-down">
                                        <td class="title">Total</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <strong>{{ totalAmount }}</strong>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </template>
                            </v-data-table>

                            <v-textarea
                                v-model="form.remarks"
                                label="Remarks"
                                rows="3"
                            >
                            </v-textarea>
                        </v-container>
                    </v-card>
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
            loading: true,
            loader: false,
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
                // { text: "User", value: "user" },
                // { text: "Description", value: "description" },
                // { text: "Amount", value: "total" },
                // { text: "Created", value: "created" },
                // { text: "", value: "data-table-expand" },

                { text: "Period", value: "period", sortable: false },
                { text: "Code", value: "code", sortable: false },
                { text: "Description", value: "description", sortable: false },
                { text: "Amount", value: "total", sortable: false },
                { text: "Balance", value: "balance", sortable: false },
                { text: "Payment", value: "balance", sortable: false },
                { text: "", value: "actions", sortable: false },
                { text: "", value: "data-table-expand", sortable: false }
            ],
            items: [],
            selected: [],
            users: [],
            total: 0,
            totalAmount: 0,
            totalItems: 0,
            search: "",
            options: {
                sortBy: ["created_at"],
                sortDesc: [true],
                page: 1,
                itemsPerPage: 10
            },
            form: {
                id: 0,
                code: "",
                reference_no: "",
                voucher_no: "",
                description: "",
                date: moment().format("YYYY-MM-DD"),
                cheque_no: "",
                cheque_date: "",
                amount: "",
                payee: "",
                payee_address: "",
                payee_phone: "",
                remarks: "",
                notes: "",
                user: { id: null }
            },
            errors: {
                user: [],
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
            // this.loadExpenseReports();
            this.getDataFromApi().then(data => {
                this.items = data.items;
                this.totalItems = data.total;
            });
        },
        updateUser() {
            this.getDataFromApi().then(data => {
                this.items = data.items;
                this.totalItems = data.total;
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

                let search = _this.search.trim().toLowerCase();
                let status = _this.status;
                let user_id = _this.form.user.id;
                let range = _this.date_range;

                axios
                    .get("/api/expense_reports", {
                        params: {
                            search: search,
                            sortBy: sortBy[0],
                            sortType: sortDesc[0] ? "desc" : "asc",
                            page: page,
                            itemsPerPage: itemsPerPage,
                            status: status,
                            user_id: user_id,
                            start_date: range[0],
                            end_date: range[1] ? range[1] : range[0],
                            admin_page: true,
                            create_payment: true
                        }
                    })
                    .then(response => {
                        let items = response.data.data;
                        let total = response.data.meta.total;

                        _this.loading = false;

                        console.log(items);

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
        // loadExpenseReports() {
        //     let start_date = this.date_range[0];
        //     let end_date = this.date_range[1];
        //     let _this = this;

        //     axios
        //         .get("/api/data/expense_reports", {
        //             params: {
        //                 create_payment: true,
        //                 start_date: start_date,
        //                 end_date: end_date,
        //                 user_id: _this.form.user.id
        //             }
        //         })
        //         .then(response => {
        //             _this.items = response.data.data;
        //         })
        //         .catch(error => {
        //             console.log(error);
        //             console.log(error.response);

        //             _this.mixin_errorDialog(
        //                 `Error ${error.response.status}`,
        //                 error.response.statusText
        //             );
        //         });
        // },
        onSave() {
            let _this = this;

            _this.$refs.form.validate();

            if (this.selected == 0) {
                this.mixin_errorDialog("Error", "No Expense Report selected.");
                return;
            }

            if (_this.$refs.form.validate()) {
                _this.loader = true;

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
                        user: _this.form.id
                    })
                    .then(function(response) {
                        _this.onRefresh();

                        _this.$dialog.message.success(
                            "Payment created successfully.",
                            {
                                position: "top-right",
                                timeout: 2000
                            }
                        );

                        _this.$store.dispatch("AUTH_NOTIFICATIONS");

                        // _this.$store.dispatch("AUTH_USER");

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
        params(nv) {
            return {
                ...this.options,
                query: this.search,
                query: this.user,
                query: this.date_range
            };
        },
        maxDate() {
            return moment().format("YYYY-MM-DD");
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
            this.totalAmount = this.mixin_formatNumber(
                this.selected.reduce((total, item) => total + item.total, 0)
            );
        }
    },
    created() {
        // this.$store.dispatch("AUTH_USER");
        this.loadUsers();
    },
    activated() {
        // this.$store.dispatch("AUTH_USER");
        this.loadUsers();
    }
};
</script>
