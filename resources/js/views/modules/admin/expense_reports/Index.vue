<template>
    <div>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <h4 class="title green--text">Expense Reports</h4>

                <v-spacer></v-spacer>

                <v-tooltip bottom>
                    <template
                        v-slot:activator="{ on, attrs }"
                        v-if="mixin_can('add expense reports')"
                    >
                        <v-btn
                            class="elevation-3 mr-2"
                            color="green"
                            :to="{ name: 'admin.expense_reports.create' }"
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

                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            class="elevation-3 mr-2"
                            color="green"
                            dark
                            fab
                            x-small
                            @click="onRefresh"
                            v-bind="attrs"
                            v-on="on"
                        >
                            <v-icon dark>mdi-reload</v-icon>
                        </v-btn>
                    </template>
                    <span>Refresh</span>
                </v-tooltip>

                <v-menu
                    transition="scale-transition"
                    :close-on-content-click="false"
                    :nudge-width="200"
                    offset-y
                    left
                    bottom
                >
                    <template v-slot:activator="{ on: menu, attrs }">
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on: tooltip }">
                                <v-btn
                                    class="elevation-3 mr-2"
                                    color="green"
                                    dark
                                    fab
                                    x-small
                                    v-bind="attrs"
                                    v-on="{ ...tooltip, ...menu }"
                                >
                                    <v-icon dark>mdi-filter</v-icon>
                                </v-btn>
                            </template>
                            <span>Filter Data</span>
                        </v-tooltip>
                    </template>

                    <v-card>
                        <v-list>
                            <v-list-item>
                                <DateRangePicker
                                    :preset="preset"
                                    :presets="presets"
                                    :value="date_range"
                                    @updateDates="updateDates"
                                ></DateRangePicker>
                            </v-list-item>
                            <v-list-item>
                                <v-select
                                    v-model="status"
                                    :items="statuses"
                                    label="Status"
                                ></v-select>
                            </v-list-item>
                            <v-list-item>
                                <v-select
                                    v-model="user"
                                    :items="users"
                                    item-text="full_name"
                                    item-value="id"
                                    label="Employee"
                                    return-object
                                ></v-select>
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-menu>

                <v-menu
                    offset-y
                    transition="scale-transition"
                    :close-on-content-click="false"
                    left
                >
                    <template v-slot:activator="{ on: menu, attrs }">
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on: tooltip }">
                                <v-btn
                                    class="elevation-3"
                                    color="green"
                                    dark
                                    fab
                                    x-small
                                    v-bind="attrs"
                                    v-on="{ ...tooltip, ...menu }"
                                >
                                    <v-icon dark>
                                        mdi-view-grid-plus-outline
                                    </v-icon>
                                </v-btn>
                            </template>
                            <span>More Options</span>
                        </v-tooltip>
                    </template>

                    <v-list max-width="250">
                        <v-list-item @click="onSubmit">
                            <v-list-item-icon>
                                <v-icon>mdi-file-send-outline</v-icon>
                            </v-list-item-icon>
                            <v-list-item-subtitle>
                                Submit Report(s)
                            </v-list-item-subtitle>
                        </v-list-item>

                        <v-list-item @click="onApprove">
                            <v-list-item-icon>
                                <v-icon>mdi-file-check-outline</v-icon>
                            </v-list-item-icon>
                            <v-list-item-subtitle>
                                Approve Report(s)
                            </v-list-item-subtitle>
                        </v-list-item>

                        <v-list-item @click="onReject">
                            <v-list-item-icon>
                                <v-icon>mdi-close</v-icon>
                            </v-list-item-icon>
                            <v-list-item-subtitle>
                                Reject Report(s)
                            </v-list-item-subtitle>
                        </v-list-item>

                        <v-list-item @click="onDelete">
                            <v-list-item-icon>
                                <v-icon>mdi-close</v-icon>
                            </v-list-item-icon>
                            <v-list-item-subtitle>
                                Cancel Report(s)
                            </v-list-item-subtitle>
                        </v-list-item>

                        <!-- <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-plus</v-icon>
                            </v-list-item-icon>
                            <v-list-item-subtitle>
                                Add Payment
                            </v-list-item-subtitle>
                        </v-list-item> -->

                        <v-list-item @click="onDuplicate">
                            <v-list-item-icon>
                                <v-icon>mdi-content-copy</v-icon>
                            </v-list-item-icon>
                            <v-list-item-subtitle>
                                Duplicate Report(s)
                            </v-list-item-subtitle>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-card-title>

            <v-card-subtitle>
                {{ formattedDateRange }}
            </v-card-subtitle>

            <v-row class="ml-4">
                <v-chip color="green" dark v-if="selected.length > 0" close class="mr-2" small @click:close="selected = []" close-icon="mdi-close"> 
                    {{selected.length}} Selected
                </v-chip>
                <v-chip v-if="status != null" class="mr-2" small>
                    {{ status }}
                </v-chip>
                <v-chip v-if="user != null" class="mr-2" small>
                    {{ user.full_name }}
                </v-chip>
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
                    class="mr-2"
                    color="red"
                    dark
                    small
                    close
                    close-icon="mdi-alert"
                    @click:close="showAllUnsubmitted"
                    v-if="totalUnsubmitted > 0"
                >
                    Unsubmitted ({{ totalUnsubmitted }})
                </v-chip>
                <v-chip
                    class="mr-2"
                    color="red"
                    dark
                    close
                    small
                    close-icon="mdi-alert"
                    @click:close="showAllUnapproved"
                    v-if="totalUnapproved > 0"
                >
                    For Approval ({{ totalUnapproved }})
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
                    <template v-slot:[`item.status.status`]="{ item }">
                        <v-chip :color="item.status.color" dark small>{{
                            item.status.status
                        }}</v-chip>
                    </template>
                    <template v-slot:[`item.date`]="{ item }">
                        {{ item.from }} ~ {{ item.to }}
                    </template>
                    <template v-slot:expanded-item="{ headers, item }">
                        <td :colspan="headers.length">
                            <v-container>
                                <table>
                                    <tr>
                                        <td>
                                            <strong>Reimbursable Amount</strong>
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
                                        <td><strong>Paid</strong></td>
                                        <td>:</td>
                                        <td>
                                            {{ mixin_formatNumber(item.paid) }}
                                        </td>
                                    </tr>
                                    <tr v-if="item.balance > 0">
                                        <td><strong>Balance</strong></td>
                                        <td>:</td>
                                        <td>
                                            {{
                                                mixin_formatNumber(item.balance)
                                            }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>Status</strong></td>
                                        <td>:</td>
                                        <td>
                                            {{ item.status.status }}
                                            ({{ item.status.remarks }})
                                        </td>
                                    </tr>
                                    <tr v-if="item.remarks">
                                        <td><strong>Remarks</strong></td>
                                        <td>:</td>
                                        <td>{{ item.remarks }}</td>
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
                                        <td><strong>Submitted</strong></td>
                                        <td>:</td>
                                        <td>
                                            {{
                                                mixin_formatDate(
                                                    item.submitted_at,
                                                    "YYYY-MM-DD HH:mm:ss"
                                                )
                                            }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>Approved</strong></td>
                                        <td>:</td>
                                        <td>
                                            {{
                                                mixin_formatDate(
                                                    item.approved_at,
                                                    "YYYY-MM-DD HH:mm:ss"
                                                )
                                            }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>Late Submitted</strong></td>
                                        <td>:</td>
                                        <td>{{ item.is_late_submitted }}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Late Approved</strong></td>
                                        <td>:</td>
                                        <td>{{ item.is_late_approved }}</td>
                                    </tr>
                                    <!-- <tr>
                                        <td><strong>Created</strong></td>
                                        <td>:</td>
                                        <td>
                                            {{
                                                mixin_formatDate(
                                                    item.created.created_at,
                                                    "YYYY-MM-DD HH:mm:ss"
                                                )
                                            }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>Created By</strong></td>
                                        <td>:</td>
                                        <td>
                                            {{
                                                item.created.created_by == null
                                                    ? ""
                                                    : item.created.created_by
                                                          .name
                                            }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>Updated</strong></td>
                                        <td>:</td>
                                        <td>
                                            {{
                                                mixin_formatDate(
                                                    item.updated.updated_at,
                                                    "YYYY-MM-DD HH:mm:ss"
                                                )
                                            }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>Updated By</strong></td>
                                        <td>:</td>
                                        <td>
                                            {{
                                                item.updated.updated_by == null
                                                    ? ""
                                                    : item.updated.updated_by
                                                          .name
                                            }}
                                        </td>
                                    </tr>
                                    <tr v-if="item.submitted">
                                        <td><strong>Submitted</strong></td>
                                        <td>:</td>
                                        <td>
                                            {{
                                                mixin_formatDate(
                                                    item.submitted.submitted_at,
                                                    "YYYY-MM-DD HH:mm:ss"
                                                )
                                            }}
                                        </td>
                                    </tr>
                                    <tr v-if="item.submitted">
                                        <td><strong>Submitted By</strong></td>
                                        <td>:</td>
                                        <td>
                                            {{
                                                item.submitted.submitted_by ==
                                                null
                                                    ? ""
                                                    : item.submitted
                                                          .submitted_by.name
                                            }}
                                        </td>
                                    </tr>
                                    <tr v-if="item.approved">
                                        <td><strong>Approved</strong></td>
                                        <td>:</td>
                                        <td>
                                            {{
                                                mixin_formatDate(
                                                    item.approved.approved_at,
                                                    "YYYY-MM-DD HH:mm:ss"
                                                )
                                            }}
                                        </td>
                                    </tr>
                                    <tr v-if="item.approved">
                                        <td><strong>Approved By</strong></td>
                                        <td>:</td>
                                        <td>
                                            {{
                                                item.approved.approved_by ==
                                                null
                                                    ? ""
                                                    : item.approved.approved_by
                                                          .name
                                            }}
                                        </td>
                                    </tr>
                                    <tr v-if="item.deleted">
                                        <td><strong>Cancelled</strong></td>
                                        <td>:</td>
                                        <td>
                                            {{
                                                mixin_formatDate(
                                                    item.deleted.deleted_at,
                                                    "YYYY-MM-DD HH:mm:ss"
                                                )
                                            }}
                                        </td>
                                    </tr>
                                    <tr v-if="item.deleted">
                                        <td><strong>Cancelled By</strong></td>
                                        <td>:</td>
                                        <td>
                                            {{
                                                item.deleted.deleted_by == null
                                                    ? ""
                                                    : item.deleted.deleted_by
                                                          .name
                                            }}
                                        </td>
                                    </tr> -->
                                </table>
                            </v-container>
                        </td>
                    </template>
                    <template v-slot:[`item.total`]="{ item }">
                        {{ mixin_formatNumber(item.total) }}
                    </template>
                    <template v-slot:[`item.user`]="{ item }">
                        {{ item.user.last_name + ", " + item.user.first_name }}
                    </template>
                    <template v-slot:[`item.updated_at`]="{ item }">
                        {{ mixin_getHumanDate(item.updated_at) }}
                    </template>
                    <template v-slot:[`item.actions`]="{ item }">
                        <v-icon small class="mr-2" @click="onShow(item)">
                            mdi-eye
                        </v-icon>
                        <v-icon
                            small
                            class="mr-2"
                            @click="onEdit(item)"
                            v-if="show_edit(item)"
                        >
                            mdi-pencil
                        </v-icon>
                        <v-tooltip
                            bottom
                            v-if="
                                item.is_late_submitted || item.is_late_approved
                            "
                        >
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
                            <div v-if="item.is_late_submitted">
                                Late Submitted
                            </div>
                            <div v-if="item.is_late_approved">
                                Late Approved
                            </div>
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

                <v-row>
                    <v-col cols="12" md="8">
                        <div>
                            <h4 class="green--text">
                                Note:
                            </h4>
                            <h4 class="grey--text">
                                Due of submission of expense reports :
                                {{ $store.getters.settings.submission_period }}
                                ({{ maxDate }})
                            </h4>
                            <h4 class="grey--text">
                                Approval period of expense reports :
                                {{ $store.getters.settings.approval_period }}
                                days upon submission
                            </h4>
                            <h4 class="red--text" v-if="warning">
                                {{ warning }}
                            </h4>
                        </div>
                    </v-col>
                    <v-col cols="12" md="4">
                        <div class="text-right">
                            <!-- <v-btn @click="onPrint('print', 'expense')">
                            Print By Expense
                        </v-btn>
                        <v-btn @click="onPrint('print', 'user')">
                            Print By Employee
                        </v-btn>
                        <v-btn @click="onPrint('print', 'date')">
                            Print By Date
                        </v-btn> -->

                            <v-menu offset-y>
                                <template v-slot:activator="{ attrs, on }">
                                    <v-btn
                                        color="green"
                                        dark
                                        v-bind="attrs"
                                        v-on="on"
                                    >
                                        Print
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item
                                        @click="
                                            printReport(
                                                '',
                                                'all_expenses',
                                                false
                                            )
                                        "
                                    >
                                        <v-list-item-title>
                                            Group by expense
                                        </v-list-item-title>
                                    </v-list-item>

                                    <v-list-item
                                        @click="
                                            printReport(
                                                '',
                                                'expenses_by_user',
                                                false
                                            )
                                        "
                                    >
                                        <v-list-item-title>
                                            Group by user
                                        </v-list-item-title>
                                    </v-list-item>
                                    <v-list-item
                                        @click="
                                            printReport(
                                                '',
                                                'expenses_by_date',
                                                false
                                            )
                                        "
                                    >
                                        <v-list-item-title>
                                            Group by date
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                            <v-menu offset-y>
                                <template v-slot:activator="{ attrs, on }">
                                    <v-btn
                                        color="green"
                                        dark
                                        v-bind="attrs"
                                        v-on="on"
                                    >
                                        Export to PDF
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item
                                        @click="
                                            printReport(
                                                '',
                                                'all_expenses',
                                                true
                                            )
                                        "
                                    >
                                        <v-list-item-title>
                                            Group by expense
                                        </v-list-item-title>
                                    </v-list-item>
                                    <v-list-item
                                        @click="
                                            printReport(
                                                '',
                                                'expenses_by_user',
                                                true
                                            )
                                        "
                                    >
                                        <v-list-item-title>
                                            Group by user
                                        </v-list-item-title>
                                    </v-list-item>
                                    <v-list-item
                                        @click="
                                            printReport(
                                                '',
                                                'expenses_by_date',
                                                true
                                            )
                                        "
                                    >
                                        <v-list-item-title>
                                            Group by date
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
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
import DateRangePicker from "../../../../components/daterangepicker/DateRangePicker";

export default {
    components: { DateRangePicker },
    data() {
        return {
            loading: true,
            warning: null,
            headers: [
                { text: "Report No.", value: "code" },
                { text: "Period", value: "date" },
                { text: "Employee", value: "user", sortable: false },
                { text: "Amount", value: "total", sortable: false },
                { text: "Last Updated", value: "updated_at" },
                { text: "Status", value: "status.status", sortable: false },
                { text: "Actions", value: "actions", sortable: false },
                { text: "", value: "data-table-expand" }
            ],
            items: [],
            user: { id: 0, full_name: "All Employees" },
            users: [],
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
            totalAmount: 0,
            totalUnsubmitted: 0,
            totalUnapproved: 0,
            status: "All Expense Reports",
            statuses: [
                "All Expense Reports",
                "Unsubmitted Expense Reports",
                "Submitted Expense Reports",
                "Approved Expense Reports",
                "Rejected Expense Reports",
                "Reimbursed Expense Reports",
                // "Overdue Expense Reports",
                "Cancelled Expense Reports"
                // "Archived Expense Reports"
            ],
            selected: [],
            search: "",
            totalItems: 0,
            options: {
                sortBy: ["created_at"],
                sortDesc: [true],
                page: 1,
                itemsPerPage: 10
            },
            expense_types: [],
            reports_by_user: [],
            reports_by_expense: [],
            reports_by_date: []
        };
    },
    methods: {
        showAllUnsubmitted() {
            this.status = "Unsubmitted Expense Reports";
            this.updateDates([
                moment("0000-01-01").format("YYYY-MM-DD"),
                moment().format("YYYY-MM-DD")
            ]);
        },
        showAllUnapproved() {
            this.status = "Submitted Expense Reports";
            this.updateDates([
                moment("0000-01-01").format("YYYY-MM-DD"),
                moment().format("YYYY-MM-DD")
            ]);
        },
        loadTotalCountReportStatus() {
            let _this = this;

            axios
                .get("/api/data/expense_reports?total_count=true")
                .then(response => {
                    let total = response.data ?? 0;

                    _this.totalUnsubmitted = total.data.total_unsubmitted ?? 0;
                    _this.totalUnapproved = total.data.total_unapproved ?? 0;
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);
                });
        },
        loadExpenseTypes() {
            let _this = this;

            axios
                .get(`/api/data/expense_types?only=true`)
                .then(response => {
                    _this.expense_types = response.data.data;
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);
                });
        },

        loadReportData(report_type) {
            return new Promise((resolve, reject) => {
                let ids =
                    this.selected == null
                        ? []
                        : this.selected.map(item => item.id);
                let url = "";

                switch (report_type) {
                    case "all_expenses":
                        url = `/api/data/print_report?by_expense_id=true&ids=${ids}`;
                        break;
                    case "expenses_by_user":
                        url = `/api/data/print_report?by_user_id=true&ids=${ids}`;
                        break;
                    case "expenses_by_date":
                        url = `/api/data/print_report?by_date=true&ids=${ids}`;
                        break;
                    default:
                        break;
                }

                axios
                    .get(url)
                    .then(response => {
                        let item = response.data.data;
                        resolve(item);
                    })
                    .catch(error => {
                        reject();
                        console.log(error);
                        console.log(error.response);
                    });
            });
        },
        printReport(action, report_type, export_as_pdf) {
            let table_columns = [];
            let table_rows = [];
            let table_footer = [];
            let temp_table_body = {};
            let temp_expense_types = {};
            let user_id = null;
            let expense_id = null;
            let expense_date = null;
            let expense_type = null;
            let subheader = "";

            if (this.selected.length == 0) {
                this.mixin_errorDialog("Error", "No items selected");
                return;
            }

            // LOAD EXPENSE REPORT DATA BASED ON REPORT TYPE AND THEN PRINT REPORT
            this.loadReportData(report_type).then(item => {
                let item_dates = item.map(item => new Date(item.expense_date));
                let maxDate = new Date(Math.max.apply(null, item_dates));
                let minDate = new Date(Math.min.apply(null, item_dates));

                switch (report_type) {
                    case "all_expenses":
                        table_columns.push({
                            text: "Date",
                            style: "tableOfExpensesHeader"
                        });
                        table_columns.push({
                            text: "Particulars",
                            style: "tableOfExpensesHeader"
                        });

                        temp_table_body = {};
                        subheader =
                            "Report No. : " +
                            this.selected.map(item => item.code);
                        break;
                    case "expenses_by_user":
                        table_columns.push({
                            text: "Employee",
                            style: "tableOfExpensesHeader"
                        });
                        temp_table_body = {};
                        subheader = `Period: ${moment(minDate).format(
                            "YYYY-MM-DD"
                        )} ~ ${moment(maxDate).format("YYYY-MM-DD")}`;
                        break;
                    case "expenses_by_date":
                        table_columns.push({
                            text: "Date",
                            style: "tableOfExpensesHeader"
                        });
                        temp_table_body = {};
                        subheader = `Period: ${moment(minDate).format(
                            "YYYY-MM-DD"
                        )} ~ ${moment(maxDate).format("YYYY-MM-DD")}`;
                        break;
                    default:
                        break;
                }

                // ADD ALL EXPENSE TYPES AS PART OF TABLE COLUMNS
                this.expense_types.forEach(element => {
                    table_columns.push({
                        text: element.name,
                        style: "tableOfExpensesHeader"
                    });
                });

                // ADD TOTAL AS THE LAST TABLE COLUMN
                table_columns.push({
                    text: "Total",
                    style: "tableOfExpensesHeader"
                });

                // ITERATE THROUGH RETRIEVED DATA
                item.forEach(element => {
                    let condition = false;

                    if (report_type == "all_expenses") {
                        condition = expense_id !== element.expense_id;
                    } else if (report_type == "expenses_by_user") {
                        condition = user_id !== element.user_id;
                    } else {
                        condition = expense_date !== element.expense_date;
                    }

                    // CREATE NEW OBJECT IF CURRENT USER DOES NOT MATCH WITH PREVIOUS DATA
                    if (condition) {
                        temp_table_body = {};
                        user_id = element.user_id;
                        expense_date = element.expense_date;
                        expense_id = element.expense_id;

                        // SET ALL EXPENSE TYPES WITH A VALUE OF ZERO
                        this.expense_types.forEach(expense_type => {
                            temp_expense_types[expense_type.name] = 0;
                        });

                        // SET DEFAULT VALUES FOR CURRENT ROW
                        switch (report_type) {
                            case "all_expenses":
                                let details =
                                    !element.expense_details ||
                                    element.expense_details == "null"
                                        ? []
                                        : JSON.parse(element.expense_details)
                                              .map(item => {
                                                  return (
                                                      `${
                                                          item.sub_type_name ==
                                                          null
                                                              ? ""
                                                              : item.sub_type_name +
                                                                "/ "
                                                      }${item.description}: ${
                                                          item.total
                                                      }` + "\n"
                                                  );
                                              })
                                              .join("");

                                temp_table_body = {
                                    Date: element.expense_date,
                                    Particulars:
                                        element.expense_description +
                                        "\n" +
                                        details,
                                    ...temp_expense_types,
                                    Total: 0
                                };

                                break;
                            case "expenses_by_user":
                                // SET DEFAULT VALUES FOR CURRENT ROW
                                temp_table_body = {
                                    User: `${element.last_name}, ${
                                        element.first_name
                                    } ${
                                        element.middle_name == null
                                            ? ""
                                            : element.middle_name
                                    } ${
                                        element.suffix == null
                                            ? ""
                                            : element.suffix
                                    }`,
                                    ...temp_expense_types,
                                    Total: 0
                                };
                                break;
                            case "expenses_by_date":
                                temp_table_body = {
                                    Date: element.expense_date,
                                    ...temp_expense_types,
                                    Total: 0
                                };
                                break;

                            default:
                                break;
                        }

                        table_rows.push(temp_table_body);
                    }

                    // SET EXPENSE TYPE AMOUNT
                    temp_table_body[element.expense_type_name] =
                        element.expense_amount;

                    // SUM OF ALL ROW DATA
                    if ("Total" in temp_table_body) {
                        let total = 0;

                        this.expense_types.forEach(item => {
                            total += temp_table_body[item.name];
                        });

                        temp_table_body["Total"] = total;
                    }
                });

                // sum total amount per expense type
                this.expense_types.forEach(expense_type => {
                    temp_expense_types[
                        expense_type.name
                    ] = this.mixin_formatNumber(
                        table_rows.reduce(
                            (total, item) => total + item[expense_type.name],
                            0
                        )
                    );
                });

                if (report_type == "all_expenses") {
                    // add row for total amounts
                    table_rows.push({
                        Total: "Total",
                        Particulars: "",
                        ...temp_expense_types,
                        TotalAmount: this.mixin_formatNumber(
                            table_rows.reduce(
                                (total, item) => total + item["Total"],
                                0
                            )
                        )
                    });
                } else {
                    // add row for total amounts
                    table_rows.push({
                        Total: "Total",
                        ...temp_expense_types,
                        TotalAmount: this.mixin_formatNumber(
                            table_rows.reduce(
                                (total, item) => total + item["Total"],
                                0
                            )
                        )
                    });
                }

                // GET ALL ROW VALUES
                let temp = table_rows.map(item => Object.values(item));

                // FORMAT ROW VALUES FOR PDFMAKE TABLE BODY
                let itemss = temp.map(item => {
                    let val = [];

                    for (let i = 0; i < item.length; i++) {
                        val.push({
                            text: item[i],
                            style: "tableOfExpensesBody"
                        });
                    }

                    return val;
                });

                // SET PDFMAKE BODY DATA
                let body = [];
                body.push(table_columns);
                itemss.forEach(element => {
                    body.push(element);
                });

                // LOAD PDFMAKE INSTANCE
                let pdfMake = require("pdfmake/build/pdfmake.js");
                if (pdfMake.vfs == undefined) {
                    let pdfFonts = require("pdfmake/build/vfs_fonts.js");
                    pdfMake.vfs = pdfFonts.pdfMake.vfs;
                }

                // SET PDFMAKE FONTS
                pdfMake.fonts = {
                    Roboto: {
                        normal: "Roboto-Regular.ttf",
                        bold: "Roboto-Medium.ttf",
                        italics: "Roboto-Italic.ttf",
                        bolditalics: "Roboto-MediumItalic.ttf"
                    }
                };

                let signatureLabels = [
                    "Prepared by:",
                    "Recommended by:",
                    "Checked by:",
                    "Approved by:"
                ];

                if (report_type != "all_expenses") {
                    signatureLabels = [
                        "Prepared by:",
                        "Checked by:",
                        "Approved by:",
                        "Voucher No."
                    ];
                }

                let formattedSignatureLabels = signatureLabels.map(item => {
                    return {
                        text: item,
                        style: "tableSignaturesBody"
                    };
                });

                let signatureUnderlines = signatureLabels.map(item => {
                    return {
                        text: "___________________________________",
                        style: "tableSignaturesBody"
                    };
                });

                let signatures = [
                    [...formattedSignatureLabels],
                    [...signatureUnderlines]
                ];

                console.log("signatures", signatures);

                // SET PRINT FORMAT
                let docDefinition = this.printFormat(
                    subheader,
                    table_columns,
                    body,
                    signatures
                );

                // PRINT OR EXPORT REPORT
                if (export_as_pdf) {
                    pdfMake
                        .createPdf(docDefinition)
                        .download("expense_report.pdf");
                    return;
                }

                // pdfMake.createPdf(docDefinition).print(); // DISPLAY PRINT DIALOG
                pdfMake.createPdf(docDefinition).open(); // DISPLAY PRINT PREVIEW
            });
        },
        printFormat(subheader, table_columns, body, signatures) {
            console.log("printformat", signatures);
            return {
                // pageSize: 'legal',
                pageSize: this.print_format.pageSize,
                pageOrientation: this.print_format.pageOrientation,
                pageMargins: this.print_format.pageMargins,
                defaultStyle: this.print_format.defaultStyle,
                background: {
                    alignment: this.print_format.background.alignment,
                    margin: this.print_format.background.margin,
                    height: this.print_format.background.height,
                    width: this.print_format.background.width,
                    image: this.print_format.background.image
                },
                footer: function(currentPage, pageCount) {
                    return {
                        columns: [
                            {
                                text: `Generated from Twin-Circa Marketing Expense Tracker ${moment().format(
                                    "YYYY-MM-DD HH:mm:ss"
                                )}`,
                                width: 500,
                                margin: [0.5 * 72, 0, 0.5 * 72, 0],
                                style: "pageFooter"
                            },
                            {
                                text:
                                    "Page " +
                                    currentPage.toString() +
                                    " of " +
                                    pageCount,
                                alignment: "right",
                                style: "pageFooter",
                                margin: [0, 0, 0.5 * 72, 0]
                            }
                        ]
                    };
                },
                content: [
                    {
                        text: ["Expense Summary Report"],
                        style: "header"
                    },
                    {
                        text: subheader,
                        style: "subheader"
                    },
                    {
                        style: "tableOfExpenses",
                        table: {
                            headerRows: 1,
                            widths: table_columns.map((item, index) => {
                                if (table_columns.length - 1 == index) {
                                    return "*";
                                }

                                return "auto";
                            }),
                            body: body
                        },
                        layout: {
                            hLineWidth: function(i, node) {
                                return i === 0 || i === node.table.body.length
                                    ? 0.5
                                    : 0.5;
                            },
                            vLineWidth: function(i, node) {
                                return i === 0 || i === node.table.widths.length
                                    ? 0.5
                                    : 0.5;
                            },
                            hLineColor: function(i, node) {
                                return i === 0 || i === node.table.body.length
                                    ? "gray"
                                    : "gray";
                            },
                            vLineColor: function(i, node) {
                                return i === 0 || i === node.table.widths.length
                                    ? "gray"
                                    : "gray";
                            },
                            fillColor: function(rowIndex, node, columnIndex) {
                                return rowIndex % 2 === 0 ? "#dbdbdb" : null;
                            }
                        }
                    },
                    {
                        style: "tableSignatures",
                        table: {
                            widths: ["*", "*", "*", "*"],
                            body: signatures
                        },
                        layout: "noBorders"
                    }
                ],
                styles: {
                    header: {
                        fontSize: 13,
                        bold: false,
                        alignment: "center"
                    },
                    subheader: {
                        fontSize: 10
                    },
                    tableSignatures: {
                        margin: [0, 5, 0, 15]
                    },
                    tableSignaturesBody: {
                        fontSize: 10
                    },
                    tableOfExpenses: {
                        margin: [0, 5, 0, 15]
                    },
                    tableOfExpensesHeader: {
                        bold: true,
                        fontSize: 9,
                        color: "white",
                        fillColor: "#4caf50",
                        alignment: "center"
                    },
                    tableOfExpensesBody: {
                        fontSize: 9
                    },
                    signatures: {
                        margin: [0, 5, 0, 15],
                        fontSize: 10
                    },
                    pageFooter: {
                        fontSize: 8
                    }
                }
            };
        },
        updateDates(e) {
            this.date_range = e;
        },
        getDataFromApi() {
            let _this = this;

            _this.loading = true;

            return new Promise((resolve, reject) => {
                const { sortBy, sortDesc, page, itemsPerPage } = this.options;

                let search = _this.search.trim().toLowerCase();
                let status = _this.status;
                let user_id = _this.user.id;
                let range = _this.date_range;

                axios
                    .get("/api/expense_reports", {
                        params: {
                            search: search,
                            sortBy: sortBy[0],
                            sortType: sortDesc[0] ? "desc" : "asc",
                            page: page,
                            itemsPerPage: itemsPerPage,
                            user_id: user_id,
                            status: status,
                            start_date: range[0],
                            end_date: range[1] ? range[1] : range[0],
                            admin_page: true
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
                            error.response.statusText
                        );

                        _this.loading = false;
                    });
            });
        },
        loadUsers() {
            let _this = this;

            axios
                .get("/api/data/users")
                .then(response => {
                    _this.users = response.data.data;
                    _this.users.unshift({
                        id: 0,
                        full_name: "All Employees"
                    });
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
            this.loadTotalCountReportStatus();
            this.loadUsers();
            this.loadExpenseTypes();
            this.selected = [];
            this.$store.dispatch("AUTH_NOTIFICATIONS");
            this.$store.dispatch("AUTH_SETTINGS");
        },
        onShow(item) {
            this.$router.push({
                name: "admin.expense_reports.show",
                params: { id: item.id }
            });
        },
        onEdit(item) {
            if (item.status.status == "Approved") {
                this.$dialog.message.error("Report has been approved", {
                    position: "top-right",
                    timeout: 2000
                });
                return;
            }

            if (item.status.status == "Cancelled") {
                this.$dialog.message.error("Report has been cancelled", {
                    position: "top-right",
                    timeout: 2000
                });
                return;
            }

            if (item.status.status == "Paid/Reimbursed") {
                this.$dialog.message.error(
                    "Paid/reimbursed expense report can't be edited",
                    {
                        position: "top-right",
                        timeout: 2000
                    }
                );
                return;
            }

            this.$router.push({
                name: "admin.expense_reports.edit",
                params: { id: item.id }
            });
        },
        onDelete() {
            let _this = this;

            if (
                this.selected
                    .map(item => item.status.status)
                    .includes("Cancelled")
            ) {
                this.$dialog.message.error(
                    "Report has already been cancelled",
                    {
                        position: "top-right",
                        timeout: 2000
                    }
                );
                return;
            }

            if (
                this.selected
                    .map(item => item.status.status)
                    .includes("Paid/Reimbursed")
            ) {
                this.$dialog.message.error(
                    "Paid/reimbursed expense reports can't be cancelled",
                    {
                        position: "top-right",
                        timeout: 2000
                    }
                );
                return;
            }

            if (_this.selected.length == 0) {
                this.$dialog.message.error("No item(s) selected", {
                    position: "top-right",
                    timeout: 2000
                });
                return;
            }

            // let notes = await this.$dialog.prompt({
            //     text: "Please add note",
            //     title: "Do you want to cancel expense report(s)?"
            // });

            // if (notes) {
            //     axios
            //         .delete(`/api/expense_reports/${_this.selected[0].id}`, {
            //             params: {
            //                 ids: _this.selected.map(item => {
            //                     return item.id;
            //                 }),
            //                 notes: notes
            //             }
            //         })
            //         .then(function(response) {
            //             _this.$dialog.message.success(
            //                 "Expense report(s) cancelled successfully",
            //                 {
            //                     position: "top-right",
            //                     timeout: 2000
            //                 }
            //             );
            //             _this.getDataFromApi().then(data => {
            //                 _this.items = data.items;
            //                 _this.totalItems = data.total;
            //             });

            //             _this.selected = [];
            //         })
            //         .catch(function(error) {
            //             console.log(error);
            //             console.log(error.response);

            //             _this.mixin_errorDialog(
            //                 `Error ${error.response.status}`,
            //                 error.response.statusText
            //             );
            //         });
            // }

            // // return;

            this.$confirm("Do you want to cancel expense report(s)?").then(
                res => {
                    if (res) {
                        axios
                            .delete(
                                `/api/expense_reports/${_this.selected[0].id}`,
                                {
                                    params: {
                                        ids: _this.selected.map(item => {
                                            return item.id;
                                        })
                                    }
                                }
                            )
                            .then(function(response) {
                                _this.$dialog.message.success(
                                    "Expense report(s) cancelled successfully",
                                    {
                                        position: "top-right",
                                        timeout: 2000
                                    }
                                );
                                _this.getDataFromApi().then(data => {
                                    _this.items = data.items;
                                    _this.totalItems = data.total;
                                });

                                // _this.$store.dispatch("AUTH_USER");

                                _this.selected = [];
                            })
                            .catch(function(error) {
                                console.log(error);
                                console.log(error.response);

                                _this.mixin_errorDialog(
                                    `Error ${error.response.status}`,
                                    error.response.statusText
                                );
                            });
                    }
                }
            );
        },
        // onUpdate(action, method) {
        //     let _this = this;

        //     if (_this.selected.length == 0) {
        //         this.$dialog.message.error("No item(s) selected", {
        //             position: "top-right",
        //             timeout: 2000
        //         });
        //         return;
        //     }

        //     if (
        //         action == "submit" &&
        //         !this.selected
        //             .map(item => item.status.status)
        //             .includes("Unsubmitted")
        //     ) {
        //         this.$dialog.message.error("Action can't be completed", {
        //             position: "top-right",
        //             timeout: 2000
        //         });
        //         return;
        //     }

        //     if (
        //         action == "submit" &&
        //         this.selected
        //             .map(item => item.status.status)
        //             .includes("Approved")
        //     ) {
        //         this.$dialog.message.error("Report has been approved", {
        //             position: "top-right",
        //             timeout: 2000
        //         });
        //         return;
        //     }

        //     if (
        //         action == "submit" &&
        //         this.selected
        //             .map(item => item.status.status)
        //             .includes("Reimbursed")
        //     ) {
        //         this.$dialog.message.error("Report has been paid/reimbursed", {
        //             position: "top-right",
        //             timeout: 2000
        //         });
        //         return;
        //     }

        //     if (
        //         action == "submit" &&
        //         this.selected
        //             .map(item => item.status.status)
        //             .includes("Cancelled")
        //     ) {
        //         this.$dialog.message.error("Report has been cancelled", {
        //             position: "top-right",
        //             timeout: 2000
        //         });
        //         return;
        //     }

        //     if (action == "submit") {
        //         let settings = this.$store.getters.settings;

        //         let start = moment().startOf("day");
        //         let end = moment().endOf("day");

        //         let expense_min_date = moment.min(
        //             this.selected.map(item => moment(item.from))
        //         );
        //         let expense_max_date = moment.max(
        //             this.selected.map(item => moment(item.to))
        //         );

        //         if (settings) {
        //             switch (settings.submission_period) {
        //                 case "Weekly":
        //                     start = moment()
        //                         .startOf("week")
        //                         .format("YYYY-MM-DD");
        //                     end = moment()
        //                         .endOf("week")
        //                         .format("YYYY-MM-DD");
        //                     break;
        //                 case "Monthly":
        //                     start = moment()
        //                         .startOf("month")
        //                         .format("YYYY-MM-DD");
        //                     end = moment()
        //                         .endOf("month")
        //                         .format("YYYY-MM-DD");
        //                     break;
        //                 default:
        //                     start = moment()
        //                         .startOf("day")
        //                         .format("YYYY-MM-DD");
        //                     end = moment()
        //                         .endOf("day")
        //                         .format("YYYY-MM-DD");
        //                     break;
        //             }
        //         }

        //         if (
        //             !moment(
        //                 moment(expense_min_date).format("YYYY-MM-DD")
        //             ).isBetween(start, end, undefined, "[]") ||
        //             !moment(
        //                 moment(expense_max_date).format("YYYY-MM-DD")
        //             ).isBetween(start, end, undefined, "[]")
        //         ) {
        //             this.mixin_errorDialog(
        //                 "Error",
        //                 "Submission of expenses beyond due date is not allowed"
        //             );
        //             return;
        //         }
        //     }

        //     if (
        //         action == "approve" &&
        //         this.selected
        //             .map(item => item.status.status)
        //             .includes("Approved")
        //     ) {
        //         this.$dialog.message.error("Report has been approved", {
        //             position: "top-right",
        //             timeout: 2000
        //         });
        //         return;
        //     }

        //     if (
        //         action == "approve" &&
        //         this.selected
        //             .map(item => item.status.status)
        //             .includes("Cancelled")
        //     ) {
        //         this.$dialog.message.error("Report has been cancelled", {
        //             position: "top-right",
        //             timeout: 2000
        //         });
        //         return;
        //     }

        //     if (
        //         action == "approve" &&
        //         this.selected
        //             .map(item => item.status.status)
        //             .includes("Reimbursed")
        //     ) {
        //         this.$dialog.message.error("Report has been paid/reimbursed", {
        //             position: "top-right",
        //             timeout: 2000
        //         });
        //         return;
        //     }

        //     if (action == "approve") {
        //         let today = moment().format("YYYY-MM-DD");
        //         // return;
        //         let period = this.$store.getters.settings.approval_period;
        //         let submission_period = moment
        //             .min(this.selected.map(item => moment(item.submitted_at)))
        //             .format("YYYY-MM-DD");
        //         let last_approval_date = moment(submission_period)
        //             .add(period, "days")
        //             .format("YYYY-MM-DD");

        //         if (
        //             !moment(today).isBetween(
        //                 submission_period,
        //                 last_approval_date,
        //                 undefined,
        //                 "[]"
        //             )
        //         ) {
        //             this.mixin_errorDialog(
        //                 "Error",
        //                 "Approval of reports beyond due date is not allowed"
        //             );
        //             return;
        //         }
        //     }

        //     if (
        //         action == "cancel" &&
        //         this.selected
        //             .map(item => item.status.status)
        //             .includes("Cancelled")
        //     ) {
        //         this.$dialog.message.error("Report has been cancelled", {
        //             position: "top-right",
        //             timeout: 2000
        //         });
        //         return;
        //     }

        //     if (
        //         action == "reject" &&
        //         this.selected
        //             .map(item => item.status.status)
        //             .includes("Rejected")
        //     ) {
        //         this.$dialog.message.error("Report has been rejected", {
        //             position: "top-right",
        //             timeout: 2000
        //         });
        //         return;
        //     }

        //     this.$confirm(`Do you want to ${action} expense report(s)?`).then(
        //         res => {
        //             if (res) {
        //                 let ids = _this.selected.map(item => {
        //                     return item.id;
        //                 });

        //                 axios({
        //                     method: method,
        //                     url: `/api/expense_reports/${_this.selected[0].id}`,
        //                     data: {
        //                         ids: ids,
        //                         action: action
        //                     }
        //                 })
        //                     .then(function(response) {
        //                         _this.$dialog.message.success(
        //                             response.data.message,
        //                             {
        //                                 position: "top-right",
        //                                 timeout: 2000
        //                             }
        //                         );
        //                         _this.getDataFromApi().then(data => {
        //                             _this.items = data.items;
        //                             _this.totalItems = data.total;
        //                         });

        //                         _this.selected = [];
        //                     })
        //                     .catch(function(error) {
        //                         console.log(error);
        //                         console.log(error.response);

        //                         _this.mixin_errorDialog(
        //                             `Error ${error.response.status}`,
        //                             error.response.statusText
        //                         );
        //                     });
        //             }
        //         }
        //     );
        // },
        // ------------------------------------------------------------------------------------------------------------------
        //
        // ------------------------------------------------------------------------------------------------------------------
        onUpdate(action, method) {
            let _this = this;

            this.$confirm(`Do you want to ${action} expense report(s)?`).then(
                res => {
                    if (res) {
                        let ids = _this.selected.map(item => {
                            return item.id;
                        });

                        axios({
                            method: method,
                            url: `/api/expense_reports/${_this.selected[0].id}`,
                            data: {
                                ids: ids,
                                action: action
                            }
                        })
                            .then(function(response) {
                                _this.mixin_successDialog(
                                    "Success",
                                    response.data.message
                                );

                                _this.getDataFromApi().then(data => {
                                    _this.items = data.items;
                                    _this.totalItems = data.total;
                                });

                                // _this.$store.dispatch("AUTH_USER");

                                _this.selected = [];

                                _this.loadTotalCountReportStatus();

                                _this.$store.dispatch("AUTH_NOTIFICATIONS");
                            })
                            .catch(function(error) {
                                console.log(error);
                                console.log(error.response);

                                _this.mixin_errorDialog(
                                    error.response.data.status,
                                    error.response.data.message
                                );
                            });
                    }
                }
            );
        },
        onSubmit() {
            if (this.selected.length == 0) {
                this.mixin_errorDialog("Error", "No item(s) selected");
                return;
            }

            if (
                this.selected.filter(function(item) {
                    return item.status.status === "Unsubmitted";
                }).length <= 0
            ) {
                this.mixin_errorDialog(
                    "Error",
                    "No selected unsubmitted report(s)"
                );
                return;
            }

            let period = this.$store.getters.settings.submission_period;
            let last_submission_date = "";
            let submission_date = moment
                .min(
                    this.selected
                        .filter(function(item) {
                            return item.status.status === "Unsubmitted";
                        })
                        .map(item2 => moment(item2.from))
                )
                .format("YYYY-MM-DD");

            switch (period) {
                case "Weekly":
                    last_submission_date = moment(submission_date)
                        .endOf("week")
                        .format("YYYY-MM-DD");
                    break;
                case "Monthly":
                    last_submission_date = moment(submission_date)
                        .endOf("month")
                        .format("YYYY-MM-DD");
                    break;

                default:
                    last_submission_date = moment(submission_date).format(
                        "YYYY-MM-DD"
                    );
                    break;
            }

            if (!this.mixin_can("submit expense reports beyond due date")) {
                if (
                    !moment(moment()).isSameOrBefore(
                        last_submission_date,
                        "day"
                    )
                ) {
                    this.mixin_errorDialog(
                        "Error (Not Allowed)",
                        `Last submission was ${last_submission_date}`
                    );
                    return;
                }
            }

            this.onUpdate("submit", "put");
        },
        onReview() {
            this.onUpdate("review", "put");
        },
        onApprove() {
            this.onUpdate("approve", "put");
        },
        async onReject() {
            // this.onUpdate("reject", "put");
            let _this = this;

            let notes = await this.$dialog.prompt({
                text: "Please specify an appropriate reason for rejection",
                title: "Do you want to reject expense report(s)?"
            });

            if (notes) {
                let ids = _this.selected.map(item => {
                    return item.id;
                });

                axios({
                    method: "put",
                    url: `/api/expense_reports/${_this.selected[0].id}`,
                    data: {
                        ids: ids,
                        action: "reject",
                        notes: notes
                    }
                })
                    .then(function(response) {
                        _this.mixin_successDialog(
                            "Success",
                            response.data.message
                        );

                        _this.getDataFromApi().then(data => {
                            _this.items = data.items;
                            _this.totalItems = data.total;
                        });

                        // _this.$store.dispatch("AUTH_USER");
                        _this.$store.dispatch("AUTH_NOTIFICATIONS");

                        _this.selected = [];
                    })
                    .catch(function(error) {
                        console.log(error);
                        console.log(error.response);

                        _this.mixin_errorDialog(
                            error.response.data.status,
                            error.response.data.message
                        );
                    });
            }
        },
        onDuplicate() {
            this.onUpdate("duplicate", "put");
        },
        show_edit(item) {
            // let item = null;

            if (!this.mixin_can("edit expense reports")) {
                return false;
            }

            if (item) {
                if (!item.approved_at) {
                    return false;
                } else if (!item.cancelled_at) {
                    return false;
                } else if (!item.deleted_at) {
                    return false;
                }
            }

            return true;
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
        items() {
            this.totalAmount = this.mixin_formatNumber(
                this.items.reduce((total, item) => total + item.total, 0)
            );
        },
        selected() {
            if (
                this.selected
                    .map(item => item.status.status)
                    .includes("Unsubmitted")
            ) {
                let period = this.$store.getters.settings.submission_period;
                let last_submission_date = "";
                let submission_date = moment
                    .min(this.selected.map(item => moment(item.from)))
                    .format("YYYY-MM-DD");

                switch (period) {
                    case "Weekly":
                        last_submission_date = moment(submission_date)
                            .endOf("week")
                            .format("YYYY-MM-DD");
                        break;
                    case "Monthly":
                        last_submission_date = moment(submission_date)
                            .endOf("month")
                            .format("YYYY-MM-DD");
                        break;

                    default:
                        last_submission_date = moment(submission_date).format(
                            "YYYY-MM-DD"
                        );
                        break;
                }

                this.warning = `Last Submission Date: ${last_submission_date}`;
            } else if (
                this.selected
                    .map(item => item.status.status)
                    .includes("Submitted")
            ) {
                let period = this.$store.getters.settings.approval_period;
                let submission_period = moment
                    .min(this.selected.map(item => moment(item.submitted_at)))
                    .format("YYYY-MM-DD");
                let last_approval_date = moment(submission_period)
                    .add(period, "days")
                    .format("YYYY-MM-DD");

                this.warning = `Last Approval Date: ${last_approval_date}; First Submitted Report: ${submission_period}`;
            } else if (this.selected.length == 0) {
                this.warning = null;
            }
        }
    },
    computed: {
        params(nv) {
            return {
                ...this.options,
                query: this.search,
                query: this.status,
                query: this.user,
                query: this.date_range
            };
        },
        minDate() {
            let settings = this.$store.getters.settings;

            if (settings) {
                switch (settings.submission_period) {
                    case "Weekly":
                        return moment()
                            .startOf("week")
                            .format("YYYY-MM-DD");
                        break;
                    case "Monthly":
                        return moment()
                            .startOf("month")
                            .format("YYYY-MM-DD");
                        break;
                    default:
                        return moment()
                            .startOf("day")
                            .format("YYYY-MM-DD");
                        break;
                }
            }

            return moment()
                .startOf("day")
                .format("YYYY-MM-DD");
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

                return maxDate;

                // return moment(today).isSameOrBefore(maxDate) ? today : maxDate;
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
        },
        print_format() {
            return {
                pageSize: {
                    width:
                        this.$store.getters.settings.expense_report.print_format
                            .pageSize.width * 72,
                    height:
                        this.$store.getters.settings.expense_report.print_format
                            .pageSize.height * 72
                },
                pageOrientation: this.$store.getters.settings.expense_report
                    .print_format.pageOrientation,
                pageMargins: [
                    this.$store.getters.settings.expense_report.print_format
                        .pageMargins.left * 72,
                    this.$store.getters.settings.expense_report.print_format
                        .pageMargins.top * 72,
                    this.$store.getters.settings.expense_report.print_format
                        .pageMargins.right * 72,
                    this.$store.getters.settings.expense_report.print_format
                        .pageMargins.bottom * 72
                ],
                defaultStyle: {
                    font: this.$store.getters.settings.expense_report
                        .print_format.defaultStyle.font
                },
                background: {
                    alignment: this.$store.getters.settings.expense_report
                        .print_format.background.alignment,
                    margin: [
                        this.$store.getters.settings.expense_report.print_format
                            .background.margin.left * 72,
                        this.$store.getters.settings.expense_report.print_format
                            .background.margin.top * 72,
                        this.$store.getters.settings.expense_report.print_format
                            .background.margin.right * 72,
                        this.$store.getters.settings.expense_report.print_format
                            .background.margin.bottom * 72
                    ],
                    // absolutePosition: {x: -300, y: 40},
                    width:
                        this.$store.getters.settings.expense_report.print_format
                            .background.width * 72,
                    height:
                        this.$store.getters.settings.expense_report.print_format
                            .background.height * 72,
                    image: this.base64Image
                }
            };
        },
        base64Image() {
            let base64Image = this.$store.getters.settings.expense_report.print_format.background.image;

            if(!base64Image) {
                return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
            }

            return base64Image;
        }
    },
    created() {
        // this.$store.dispatch("AUTH_USER");
        this.$store.dispatch("AUTH_NOTIFICATIONS");
        this.$store.dispatch("AUTH_SETTINGS");
        this.loadTotalCountReportStatus();
        this.loadUsers();
        this.loadExpenseTypes();
    },
    activated() {
        this.$store.dispatch("AUTH_NOTIFICATIONS");
        this.$store.dispatch("AUTH_SETTINGS");
        this.loadTotalCountReportStatus();
        this.loadUsers();
        this.loadExpenseTypes();
        this.getDataFromApi().then(data => {
            this.items = data.items;
            this.totalItems = data.total;
        });
    }
};
</script>
