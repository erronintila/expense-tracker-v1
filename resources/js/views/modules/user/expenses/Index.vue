<template>
    <div>
        <loader-component v-if="!formDataLoaded"></loader-component>
        <v-card v-else class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <h4 class="title green--text">Expenses</h4>

                <v-spacer></v-spacer>

                <v-tooltip bottom>
                    <template
                        v-slot:activator="{ on, attrs }"
                        v-if="mixin_can('add expenses')"
                    >
                        <v-btn
                            class="elevation-3 mr-2"
                            color="green"
                            :to="{ name: 'user.expenses.create' }"
                            dark
                            fab
                            x-small
                            v-bind="attrs"
                            v-on="on"
                        >
                            <v-icon dark>mdi-plus</v-icon>
                        </v-btn>
                    </template>
                    <span>Add New</span>
                </v-tooltip>
            </v-card-title>

            <v-card-subtitle>
                <DateRangePicker
                    ref="dateRangePicker"
                    :dateRange="date_range"
                    @on-change="updateDates"
                >
                    <template v-slot:openDialog="{ on, attrs, dateRangeText }">
                        <v-btn v-bind="attrs" v-on="on" text class="ml-0 pl-0">
                            {{ dateRangeText }}
                        </v-btn>
                    </template>
                </DateRangePicker>
            </v-card-subtitle>

            <v-row class="ml-4">
                <v-chip
                    color="green"
                    dark
                    v-if="selected.length > 0"
                    close
                    class="mr-2"
                    small
                    @click:close="selected = []"
                    close-icon="mdi-close"
                >
                    {{ selected.length }} Selected
                </v-chip>

                <v-menu
                    transition="scale-transition"
                    :close-on-content-click="false"
                    :nudge-width="200"
                    offset-y
                    right
                    bottom
                >
                    <template v-slot:activator="{ on: menu, attrs }">
                        <v-chip class="mr-2" small v-bind="attrs" v-on="menu">
                            {{ status }}
                        </v-chip>
                    </template>

                    <v-card>
                        <v-list>
                            <v-list-item>
                                <v-select
                                    v-model="status"
                                    :items="statuses"
                                    label="Status"
                                ></v-select>
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-menu>

                <v-menu
                    transition="scale-transition"
                    :close-on-content-click="false"
                    :nudge-width="200"
                    offset-y
                    right
                    bottom
                >
                    <template v-slot:activator="{ on: menu, attrs }">
                        <v-chip class="mr-2" small v-bind="attrs" v-on="menu">
                            {{ expense_type.name }}
                        </v-chip>
                    </template>

                    <v-card>
                        <v-list>
                            <v-list-item>
                                <v-select
                                    v-model="expense_type"
                                    :items="expense_types"
                                    item-text="name"
                                    item-value="id"
                                    label="Expense Types"
                                    return-object
                                ></v-select>
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-menu>

                <v-chip
                    close
                    class="mr-2"
                    small
                    @click:close="onRefresh"
                    close-icon="mdi-refresh"
                >
                    Refresh
                </v-chip>
                <v-chip
                    v-show="
                        selected.length > 0 && status == 'Cancelled Expenses'
                    "
                    close
                    class="mr-2 mb-2"
                    small
                    @click:close="onRestore"
                    close-icon="mdi-history"
                    color="green"
                    dark
                >
                    Restore
                </v-chip>

                <v-chip
                    v-show="
                        selected.length > 0 && status !== 'Cancelled Expenses'
                    "
                    close
                    class="mr-2 mb-2"
                    small
                    @click:close="onDelete"
                    close-icon="mdi-trash-can-outline"
                    color="red"
                    dark
                >
                    Cancel Expense(s)
                </v-chip>
            </v-row>

            <v-card-subtitle>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
            </v-card-subtitle>

            <v-card-text>
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
                    <template v-slot:expanded-item="{ headers, item }">
                        <td :colspan="headers.length">
                            <v-container>
                                <table>
                                    <tr>
                                        <td><strong>Expense Report</strong></td>
                                        <td>:</td>
                                        <td>
                                            {{
                                                item.expense_report == null
                                                    ? ""
                                                    : `${item.expense_report.description} (Code:${item.expense_report.code})`
                                            }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>To Replenish</strong></td>
                                        <td>:</td>
                                        <td>
                                            {{
                                                mixin_formatNumber(
                                                    item.amount -
                                                        item.reimbursable_amount
                                                )
                                            }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>To Reimburse</strong></td>
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
                                        <td><strong>Tax</strong></td>
                                        <td>:</td>
                                        <td>
                                            {{
                                                mixin_formatNumber(
                                                    item.tax_amount
                                                )
                                            }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>Tax rate</strong></td>
                                        <td>:</td>
                                        <td>
                                            {{
                                                mixin_formatNumber(
                                                    item.tax_rate
                                                )
                                            }}
                                            %
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
                                        <td><strong>Receipt</strong></td>
                                        <td>:</td>
                                        <td>{{ item.receipt_number }}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Vendor</strong></td>
                                        <td>:</td>
                                        <td>
                                            {{
                                                item.vendor == null
                                                    ? ""
                                                    : item.vendor.name
                                            }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>Created</strong></td>
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
                                    <tr>
                                        <td><strong>Late Encoded</strong></td>
                                        <td>:</td>
                                        <td>{{ item.is_late_encoded }}</td>
                                    </tr>
                                    <tr v-if="item.remarks">
                                        <td><strong>Remarks</strong></td>
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
                    <template v-slot:[`item.replenishment`]="{ item }">
                        {{
                            mixin_formatNumber(
                                item.amount - item.reimbursable_amount
                            )
                        }}
                    </template>
                    <template v-slot:[`item.status.status`]="{ item }">
                        <v-chip :color="item.status.color" dark small>{{
                            item.status.status
                        }}</v-chip>
                    </template>
                    <template v-slot:[`item.actions`]="{ item }">
                        <v-icon small class="mr-2" @click="onShow(item)">
                            mdi-eye
                        </v-icon>
                        <v-icon
                            small
                            class="mr-2"
                            @click="onEdit(item)"
                            v-if="show_edit(item) && item.deleted_at == null"
                        >
                            mdi-pencil
                        </v-icon>
                        <v-tooltip bottom v-if="item.is_late_encoded">
                            <template v-slot:activator="{ on, attrs }">
                                <v-icon
                                    color="red"
                                    dark
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    mdi-alert-circle-outline
                                </v-icon>
                            </template>
                            <span>Late Encoded</span>
                        </v-tooltip>
                    </template>
                    <template slot="body.append" v-if="items.length > 0">
                        <tr class="green--text hidden-md-and-up">
                            <td class="title">
                                Total: <strong>{{ totalAmount }}</strong>
                            </td>
                        </tr>
                        <tr class="green--text hidden-sm-and-down">
                            <td class="title">Total</td>
                            <td></td>
                            <td></td>
                            <td>
                                <strong>{{ totalAmount }}</strong>
                            </td>
                            <td>
                                <strong>{{ totalReplenishment }}</strong>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </template>
                </v-data-table>

                <v-row>
                    <v-col>
                        <div>
                            <h4 class="green--text">
                                Note:
                            </h4>
                            <h4 class="grey--text">
                                Due of encoding expenses :
                                {{ maxDate }}
                            </h4>
                        </div>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import moment from "moment";
import numeral from "numeral";
import DateRangePicker from "../../../../components/datepicker/DateRangePicker";
import ExpenseTypeDataService from "../../../../services/ExpenseTypeDataService";
import ExpenseDataService from "../../../../services/ExpenseDataService";

export default {
    components: {
        DateRangePicker
    },
    data() {
        return {
            formDataLoaded: false,
            loading: true,
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
                {
                    text: "Expense",
                    value: "expense_type.name",
                    sortable: false
                },
                // {
                //     text: "Employee",
                //     value: "user.full_name",
                //     sortable: false
                // },
                { text: "Amount", value: "amount" },
                {
                    text: "To replenish",
                    value: "replenishment",
                    sortable: false
                },
                { text: "Last Updated", value: "updated_at" },
                { text: "Status", value: "status.status", sortable: false },
                { text: "Actions", value: "actions", sortable: false },
                { text: "", value: "data-table-expand" }
            ],
            items: [],
            user: this.$store.getters.user.id,
            expense_type: { id: 0, name: "All Expense Types" },
            expense_types: [],
            status: "All Expenses",
            statuses: [
                "All Expenses",
                "Unreported Expenses",
                "Unsubmitted Expenses",
                "Submitted Expenses",
                "Approved Expenses",
                "Rejected Expenses",
                "Cancelled Expenses",
                "Reimbursed Expenses"
                // "Archived Expenses"
            ],
            selected: [],
            search: "",
            totalItems: 0,
            totalAmount: 0,
            totalReplenishment: 0,
            options: {
                sortBy: ["created_at"],
                sortDesc: [true],
                page: 1,
                itemsPerPage: 10
            }
        };
    },
    methods: {
        updateDates(e) {
            this.date_range = e;
        },
        getDataFromApi() {
            this.loading = true;

            return new Promise((resolve, reject) => {
                const { sortBy, sortDesc, page, itemsPerPage } = this.options;

                let search = this.search.trim().toLowerCase();
                let status = this.status;
                let user_id = this.user;
                let expense_type_id = this.expense_type.id;
                let range = this.date_range;

                ExpenseDataService.getAll({
                    params: {
                        search: search,
                        sortBy: sortBy[0],
                        sortType: sortDesc[0] ? "desc" : "asc",
                        page: page,
                        itemsPerPage: itemsPerPage,
                        status: status,
                        user_id: user_id,
                        expense_type_id: expense_type_id,
                        start_date: range[0],
                        end_date: range[1] ? range[1] : range[0]
                    }
                })
                    .then(response => {
                        let items = response.data.data;
                        let total = response.data.meta.total;
                        this.loading = false;
                        this.formDataLoaded = true;
                        resolve({ items, total });
                    })
                    .catch(error => {
                        this.mixin_showErrors(error);
                        this.loading = false;
                        this.formDataLoaded = true;
                        reject();
                    });
            });
        },
        loadExpenseTypes() {
            ExpenseTypeDataService.get({
                params: {
                    only: true
                }
            })
                .then(response => {
                    this.expense_types = response.data.data;
                    this.expense_types.unshift({
                        id: 0,
                        name: "All Expense Types"
                    });
                })
                .catch(error => {
                    this.mixin_showErrors(error);
                });
        },
        onRefresh() {
            Object.assign(this.$data, this.$options.data.apply(this));
            this.status = "All Expenses";
            this.loadExpenseTypes();
            this.selected = [];
        },
        onShow(item) {
            let params = { id: item.id };

            if (item.deleted_at) {
                params = { id: item.id, isDeleted: true };
            }

            this.$router.push({
                name: "user.expenses.show",
                params: params
            });
        },
        onEdit(item) {
            if (item.expense_report) {
                if (item.expense_report.approved_at) {
                    this.mixin_errorDialog(
                        "Error",
                        "Expense with an approved report can't be edited"
                    );
                    return;
                }

                if (item.expense_report.deleted_at) {
                    this.mixin_errorDialog(
                        "Error",
                        "Expense with a deleted report can't be edited"
                    );
                    return;
                }
            }

            if (this.status == "Cancelled") {
                this.mixin_errorDialog("Error", "Expense has been deleted.");
                return;
            }

            this.$router.push({
                name: "user.expenses.edit",
                params: { id: item.id }
            });
        },
        onDelete() {
            let arr = this.selected.map(item => item.expense_report === null);

            // this.mixin_is_empty(
            //     this.selected.length,
            //     "No item(s) selected bitch"
            // );

            if (this.selected.length == 0) {
                this.mixin_errorDialog("Error", "No item(s) selected");
                return;
            }

            // this.mixin_check_if_error(
            //     arr.includes(false),
            //     "Expense(s) can't be cancelled bitch"
            // );

            if (arr.includes(false)) {
                this.mixin_errorDialog(
                    "Error",
                    "Expense(s) can't be cancelled"
                );
                return;
            }

            this.$confirm("Do you want to cancel expense(s)?").then(res => {
                if (res) {
                    ExpenseDataService.delete(this.selected[0].id, {
                        params: {
                            ids: this.selected.map(item => {
                                return item.id;
                            })
                        }
                    })
                        .then(response => {
                            this.mixin_successDialog(
                                response.data.status,
                                response.data.message
                            );

                            this.getDataFromApi().then(data => {
                                this.items = data.items;
                                this.totalItems = data.total;
                            });
                            this.selected = [];
                        })
                        .catch(error => {
                            this.mixin_showErrors(error);
                        });
                }
            });
        },
        onRestore() {
            let arr = this.selected.map(item => item.expense_report === null);

            if (this.selected.length == 0) {
                this.mixin_errorDialog("Error", "No item(s) selected");
                return;
            }

            if (!this.mixin_can("restore expenses")) {
                this.mixin_errorDialog("Error", "Not allowed");
                return;
            }

            if (arr.includes(false)) {
                this.mixin_errorDialog(
                    "Error",
                    "Expense(s) with report(s) can't be restored"
                );
                return;
            }

            this.$confirm("Do you want to restore expenses(s)?").then(res => {
                if (res) {
                    ExpenseDataService.restore(this.selected[0].id, {
                        ids: this.selected.map(item => {
                            return item.id;
                        })
                    })
                        .then(response => {
                            this.mixin_successDialog(
                                response.data.status,
                                response.data.message
                            );

                            this.getDataFromApi().then(data => {
                                this.items = data.items;
                                this.totalItems = data.total;
                            });

                            // this.$store.dispatch("AUTH_USER");

                            this.selected = [];
                        })
                        .catch(error => {
                            this.mixin_showErrors(error);
                        });
                }
            });
        },
        show_edit(item) {
            if (!this.mixin_can("edit expenses")) {
                return false;
            }

            if (item) {
                if (item.expense_report_id) {
                    if (!item.expense_report.approved_at) {
                        return false;
                    } else if (!item.expense_report.rejected_at) {
                        return false;
                    } else if (!item.expense_report.cancelled_at) {
                        return false;
                    } else if (!item.expense_report.deleted_at) {
                        return false;
                    }
                }
            }

            return true;
        }
    },
    watch: {
        params: {
            immediate: true,
            deep: true,
            handler() {
                this.getDataFromApi().then(data => {
                    this.items = data.items;
                    this.totalItems = data.total;
                });
            }
        },
        items() {
            this.totalAmount = this.mixin_formatNumber(
                this.items.reduce((total, item) => total + item.amount, 0)
            );

            this.totalReplenishment = this.mixin_formatNumber(
                this.items.reduce(
                    (total, item) =>
                        total + (item.amount - item.reimbursable_amount),
                    0
                )
            );
        }
    },
    computed: {
        params(nv) {
            return {
                ...this.options,
                query: this.search,
                query: this.status,
                query: this.user,
                query: this.expense_type,
                query: this.date_range
            };
        },
        maxDate() {
            let settings = this.$store.getters.settings;
            let today = moment().format("YYYY-MM-DD");
            let maxDate = moment()
                .endOf("day")
                .format("YYYY-MM-DD");

            if (settings) {
                switch (settings.submission_period) {
                    case "Weekly":
                        maxDate = moment()
                            .endOf("week")
                            .format("YYYY-MM-DD");
                        break;
                    case "Monthly":
                        maxDate = moment()
                            .endOf("month")
                            .format("YYYY-MM-DD");
                        break;
                    default:
                        maxDate = moment()
                            .endOf("day")
                            .format("YYYY-MM-DD");
                        break;
                }

                return moment(today).isSameOrBefore(maxDate) ? today : maxDate;
            }

            return today;
        },
        formattedDateRange() {
            let start_date = moment(this.date_range[0]).format("MMM DD, YYYY");
            let end_date = moment(this.date_range[1]).format("MMM DD, YYYY");

            if (JSON.stringify(start_date) == JSON.stringify(end_date)) {
                return start_date;
            }

            if (JSON.stringify(end_date) == null) {
                return start_date;
            }

            return `${start_date} ~ ${end_date}`;
        }
    },
    created() {
        this.$store.dispatch("AUTH_USER");
        this.$store.dispatch("AUTH_NOTIFICATIONS");
        this.loadExpenseTypes();
    },
    activated() {
        this.$store.dispatch("AUTH_USER");
        this.$store.dispatch("AUTH_NOTIFICATIONS");
        this.loadExpenseTypes();
        this.getDataFromApi().then(data => {
            this.items = data.items;
            this.totalItems = data.total;
        });
    }
};
</script>
