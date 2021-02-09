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
                                    <v-icon dark
                                        >mdi-view-grid-plus-outline</v-icon
                                    >
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
                                        @click="onPrint('print', 'expense')"
                                    >
                                        <v-list-item-title
                                            >Group by expense</v-list-item-title
                                        >
                                    </v-list-item>
                                    <v-list-item
                                        @click="onPrint('print', 'user')"
                                    >
                                        <v-list-item-title
                                            >Group by user</v-list-item-title
                                        >
                                    </v-list-item>
                                    <v-list-item
                                        @click="onPrint('print', 'date')"
                                    >
                                        <v-list-item-title
                                            >Group by date</v-list-item-title
                                        >
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
                                        @click="onPrint('pdf', 'expense')"
                                    >
                                        <v-list-item-title
                                            >Group by expense</v-list-item-title
                                        >
                                    </v-list-item>
                                    <v-list-item
                                        @click="onPrint('pdf', 'user')"
                                    >
                                        <v-list-item-title
                                            >Group by user</v-list-item-title
                                        >
                                    </v-list-item>
                                    <v-list-item
                                        @click="onPrint('pdf', 'date')"
                                    >
                                        <v-list-item-title
                                            >Group by date</v-list-item-title
                                        >
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
            reports_by_date: [],
            printout: {
                pageSize: { width: 13 * 72, height: 8.5 * 72 },
                pageOrientation: "landscape",
                pageMargins: [0.5 * 72, 0.5 * 72, 0.5 * 72, 0.5 * 72],
                defaultStyle: {
                    font: "Roboto"
                },
                background: {
                    alignment: "right",
                    margin: [0, 0.4 * 72, 0.3 * 72, 0],
                    // absolutePosition: {x: -300, y: 40},
                    width: 140,
                    // height: 25,
                    image:
                        "data:image/png;base64,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"
                }
            }
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
        loadReportByExpense() {
            return new Promise((resolve, reject) => {
                let _this = this;
                let ids =
                    _this.selected == null
                        ? []
                        : _this.selected.map(item => item.id);

                axios
                    .get(`/api/data/print_report?by_expense_id=true&ids=${ids}`)
                    .then(response => {
                        _this.reports_by_expense = response.data.data;
                        resolve();
                    })
                    .catch(error => {
                        reject();
                        console.log(error);
                        console.log(error.response);
                    });
            });
        },
        loadReportByUser() {
            return new Promise((resolve, reject) => {
                let _this = this;
                let ids =
                    _this.selected == null
                        ? []
                        : _this.selected.map(item => item.id);

                axios
                    .get(`/api/data/print_report?by_user_id=true&ids=${ids}`)
                    .then(response => {
                        _this.reports_by_user = response.data.data;

                        resolve();
                    })
                    .catch(error => {
                        reject();
                        console.log(error);
                        console.log(error.response);
                    });
            });
        },
        loadReportByDate() {
            return new Promise((resolve, reject) => {
                let _this = this;
                let ids =
                    _this.selected == null
                        ? []
                        : _this.selected.map(item => item.id);

                axios
                    .get(`/api/data/print_report?by_date=true&ids=${ids}`)
                    .then(response => {
                        _this.reports_by_date = response.data.data;
                        resolve();
                    })
                    .catch(error => {
                        reject();
                        console.log(error);
                        console.log(error.response);
                    });
            });
        },
        printReportByUser(action) {
            this.loadReportByUser().then(() => {
                let table_columns = [];
                let table_rows = [];
                let table_footer = [];

                table_columns.push({
                    text: "Employee",
                    style: "tableOfExpensesHeader"
                });
                this.expense_types.forEach(element => {
                    table_columns.push({
                        text: element.name,
                        style: "tableOfExpensesHeader"
                    });
                });
                table_columns.push({
                    text: "Total",
                    style: "tableOfExpensesHeader"
                });

                let temp_table_body = {};
                let temp_expense_types = {};
                let user_id = null;
                let expense_type = null;

                // loop through retrieved records
                this.reports_by_user.forEach(element => {
                    // create new object if current user does not match with previous record
                    if (user_id !== element.user_id) {
                        temp_table_body = {};
                        user_id = element.user_id;

                        // set default values for current row
                        this.expense_types.forEach(expense_type => {
                            temp_expense_types[expense_type.name] = 0;
                        });

                        temp_table_body = {
                            User: `${element.last_name}, ${
                                element.first_name
                            } ${
                                element.middle_name == null
                                    ? ""
                                    : element.middle_name
                            } ${element.suffix == null ? "" : element.suffix}`,
                            ...temp_expense_types,
                            Total: 0
                        };

                        table_rows.push(temp_table_body);
                    }

                    // set expense type amount
                    temp_table_body[element.expense_type_name] =
                        element.expense_amount;

                    // sum of all expense types
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

                let temp = table_rows.map(item => Object.values(item));

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

                let body = [];
                body.push(table_columns);
                itemss.forEach(element => {
                    body.push(element);
                });

                let pdfMake = require("pdfmake/build/pdfmake.js");
                if (pdfMake.vfs == undefined) {
                    let pdfFonts = require("pdfmake/build/vfs_fonts.js");
                    pdfMake.vfs = pdfFonts.pdfMake.vfs;
                }

                pdfMake.fonts = {
                    Roboto: {
                        normal: "Roboto-Regular.ttf",
                        bold: "Roboto-Medium.ttf",
                        italics: "Roboto-Italic.ttf",
                        bolditalics: "Roboto-MediumItalic.ttf"
                    }
                };

                let docDefinition = {
                    // pageSize: 'legal',
                    pageSize: this.printout.pageSize,
                    pageOrientation: this.printout.pageOrientation,
                    pageMargins: this.printout.pageMargins,
                    defaultStyle: this.printout.defaultStyle,
                    background: {
                        alignment: "right",
                        margin: [0, 0.4 * 72, 0.3 * 72, 0],
                        width: 140,
                        image: this.printout.background.image
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
                            text: "User",
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
                                    return i === 0 ||
                                        i === node.table.body.length
                                        ? 0.5
                                        : 0.5;
                                },
                                vLineWidth: function(i, node) {
                                    return i === 0 ||
                                        i === node.table.widths.length
                                        ? 0.5
                                        : 0.5;
                                },
                                hLineColor: function(i, node) {
                                    return i === 0 ||
                                        i === node.table.body.length
                                        ? "gray"
                                        : "gray";
                                },
                                vLineColor: function(i, node) {
                                    return i === 0 ||
                                        i === node.table.widths.length
                                        ? "gray"
                                        : "gray";
                                },
                                fillColor: function(
                                    rowIndex,
                                    node,
                                    columnIndex
                                ) {
                                    return rowIndex % 2 === 0
                                        ? "#dbdbdb"
                                        : null;
                                }
                            }
                        },
                        {
                            style: "tableSignatures",
                            table: {
                                widths: ["*", "*", "*", "*"],
                                body: [
                                    [
                                        {
                                            text: "Prepared by:",
                                            style: "tableSignaturesBody"
                                        },
                                        {
                                            text: "Checked by:",
                                            style: "tableSignaturesBody"
                                        },
                                        {
                                            text: "Approved by:",
                                            style: "tableSignaturesBody"
                                        },
                                        {
                                            text: "Voucher No.",
                                            style: "tableSignaturesBody"
                                        }
                                    ],
                                    [
                                        {
                                            text:
                                                "___________________________________",
                                            style: "tableSignaturesBody"
                                        },
                                        {
                                            text:
                                                "___________________________________",
                                            style: "tableSignaturesBody"
                                        },
                                        {
                                            text:
                                                "___________________________________",
                                            style: "tableSignaturesBody"
                                        },
                                        {
                                            text:
                                                "___________________________________",
                                            style: "tableSignaturesBody"
                                        }
                                    ]
                                ]
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

                if (action == "print") {
                    // pdfMake.createPdf(docDefinition).print();
                    pdfMake.createPdf(docDefinition).open();
                } else {
                    pdfMake
                        .createPdf(docDefinition)
                        .download("expense_report.pdf");
                }
            });
        },
        printReportByDate(action) {
            this.loadReportByDate().then(() => {
                let table_columns = [];
                let table_rows = [];
                let table_footer = [];

                table_columns.push({
                    text: "Date",
                    style: "tableOfExpensesHeader"
                });
                this.expense_types.forEach(element => {
                    table_columns.push({
                        text: element.name,
                        style: "tableOfExpensesHeader"
                    });
                });
                table_columns.push({
                    text: "Total",
                    style: "tableOfExpensesHeader"
                });

                let temp_table_body = {};
                let temp_expense_types = {};
                let expense_date = null;
                let expense_type = null;

                // loop through retrieved records
                this.reports_by_date.forEach(element => {
                    // create new object if current user does not match with previous record
                    if (expense_date !== element.expense_date) {
                        temp_table_body = {};
                        expense_date = element.expense_date;

                        // set default values for current row
                        this.expense_types.forEach(expense_type => {
                            temp_expense_types[expense_type.name] = 0;
                        });

                        temp_table_body = {
                            Date: element.expense_date,
                            ...temp_expense_types,
                            Total: 0
                        };

                        table_rows.push(temp_table_body);
                    }

                    // set expense type amount
                    temp_table_body[element.expense_type_name] =
                        element.expense_amount;

                    // sum of all expense types
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

                let temp = table_rows.map(item => Object.values(item));

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

                let body = [];
                body.push(table_columns);
                itemss.forEach(element => {
                    body.push(element);
                });

                let pdfMake = require("pdfmake/build/pdfmake.js");
                if (pdfMake.vfs == undefined) {
                    let pdfFonts = require("pdfmake/build/vfs_fonts.js");
                    pdfMake.vfs = pdfFonts.pdfMake.vfs;
                }

                pdfMake.fonts = {
                    Roboto: {
                        normal: "Roboto-Regular.ttf",
                        bold: "Roboto-Medium.ttf",
                        italics: "Roboto-Italic.ttf",
                        bolditalics: "Roboto-MediumItalic.ttf"
                    }
                };

                let docDefinition = {
                    // pageSize: 'legal',
                    pageSize: this.printout.pageSize,
                    pageOrientation: this.printout.pageOrientation,
                    pageMargins: this.printout.pageMargins,
                    defaultStyle: this.printout.defaultStyle,
                    background: {
                        alignment: "right",
                        margin: [0, 0.4 * 72, 0.3 * 72, 0],
                        width: 140,
                        image: this.printout.background.image
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
                            text: "Date",
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
                                    return i === 0 ||
                                        i === node.table.body.length
                                        ? 0.5
                                        : 0.5;
                                },
                                vLineWidth: function(i, node) {
                                    return i === 0 ||
                                        i === node.table.widths.length
                                        ? 0.5
                                        : 0.5;
                                },
                                hLineColor: function(i, node) {
                                    return i === 0 ||
                                        i === node.table.body.length
                                        ? "gray"
                                        : "gray";
                                },
                                vLineColor: function(i, node) {
                                    return i === 0 ||
                                        i === node.table.widths.length
                                        ? "gray"
                                        : "gray";
                                },
                                fillColor: function(
                                    rowIndex,
                                    node,
                                    columnIndex
                                ) {
                                    return rowIndex % 2 === 0
                                        ? "#dbdbdb"
                                        : null;
                                }
                            }
                        },
                        {
                            style: "tableSignatures",
                            table: {
                                widths: ["*", "*", "*", "*"],
                                body: [
                                    [
                                        {
                                            text: "Prepared by:",
                                            style: "tableSignaturesBody"
                                        },
                                        {
                                            text: "Checked by:",
                                            style: "tableSignaturesBody"
                                        },
                                        {
                                            text: "Approved by:",
                                            style: "tableSignaturesBody"
                                        },
                                        {
                                            text: "Voucher No.",
                                            style: "tableSignaturesBody"
                                        }
                                    ],
                                    [
                                        {
                                            text:
                                                "___________________________________",
                                            style: "tableSignaturesBody"
                                        },
                                        {
                                            text:
                                                "___________________________________",
                                            style: "tableSignaturesBody"
                                        },
                                        {
                                            text:
                                                "___________________________________",
                                            style: "tableSignaturesBody"
                                        },
                                        {
                                            text:
                                                "___________________________________",
                                            style: "tableSignaturesBody"
                                        }
                                    ]
                                ]
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
                            fontSize:10
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

                if (action == "print") {
                    // pdfMake.createPdf(docDefinition).print();
                    pdfMake.createPdf(docDefinition).open();
                } else {
                    pdfMake
                        .createPdf(docDefinition)
                        .download("expense_report.pdf");
                }
            });
        },
        printReportByExpense(action) {
            console.log(this.selected.map(item => new Date(item.from)));

            this.loadReportByExpense().then(() => {
                let table_columns = [];
                let table_rows = [];
                let table_footer = [];

                table_columns.push({
                    text: "Date",
                    style: "tableOfExpensesHeader"
                });
                table_columns.push({
                    text: "Particulars",
                    style: "tableOfExpensesHeader"
                });
                this.expense_types.forEach(element => {
                    table_columns.push({
                        text: element.name,
                        style: "tableOfExpensesHeader"
                    });
                });
                table_columns.push({
                    text: "Total",
                    style: "tableOfExpensesHeader"
                });

                let temp_table_body = {};
                let temp_expense_types = {};
                let expense_id = null;
                let expense_type = null;

                // loop through retrieved records
                this.reports_by_expense.forEach(element => {
                    // create new object if current user does not match with previous record
                    if (expense_id !== element.expense_id) {
                        temp_table_body = {};
                        expense_id = element.expense_id;

                        // set default values for current row
                        this.expense_types.forEach(expense_type => {
                            temp_expense_types[expense_type.name] = 0;
                        });

                        let details =
                            !element.expense_details ||
                            element.expense_details == "null"
                                ? []
                                : JSON.parse(element.expense_details)
                                      .map(item => {
                                          return (
                                              `${
                                                  item.sub_type_name == null
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
                                element.expense_description + "\n" + details,
                            ...temp_expense_types,
                            Total: 0
                        };

                        table_rows.push(temp_table_body);
                    }

                    // set expense type amount
                    temp_table_body[element.expense_type_name] =
                        element.expense_amount;

                    // sum of all expense types
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

                let temp = table_rows.map(item => Object.values(item));

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

                let body = [];
                body.push(table_columns);
                itemss.forEach(element => {
                    body.push(element);
                });

                let pdfMake = require("pdfmake/build/pdfmake.js");
                if (pdfMake.vfs == undefined) {
                    let pdfFonts = require("pdfmake/build/vfs_fonts.js");
                    pdfMake.vfs = pdfFonts.pdfMake.vfs;
                }

                pdfMake.fonts = {
                    Roboto: {
                        normal: "Roboto-Regular.ttf",
                        bold: "Roboto-Medium.ttf",
                        italics: "Roboto-Italic.ttf",
                        bolditalics: "Roboto-MediumItalic.ttf"
                    }
                };

                let docDefinition = {
                    // pageSize: 'legal',
                    pageSize: this.printout.pageSize,
                    pageOrientation: this.printout.pageOrientation,
                    pageMargins: this.printout.pageMargins,
                    defaultStyle: this.printout.defaultStyle,
                    background: {
                        alignment: "right",
                        margin: [0, 0.4 * 72, 0.3 * 72, 0],
                        width: 140,
                        image: this.printout.background.image
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
                            text:
                                "Report No. : " +
                                this.selected.map(item => item.code),
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
                                    return i === 0 ||
                                        i === node.table.body.length
                                        ? 0.5
                                        : 0.5;
                                },
                                vLineWidth: function(i, node) {
                                    return i === 0 ||
                                        i === node.table.widths.length
                                        ? 0.5
                                        : 0.5;
                                },
                                hLineColor: function(i, node) {
                                    return i === 0 ||
                                        i === node.table.body.length
                                        ? "gray"
                                        : "gray";
                                },
                                vLineColor: function(i, node) {
                                    return i === 0 ||
                                        i === node.table.widths.length
                                        ? "gray"
                                        : "gray";
                                },
                                fillColor: function(
                                    rowIndex,
                                    node,
                                    columnIndex
                                ) {
                                    return rowIndex % 2 === 0
                                        ? "#dbdbdb"
                                        : null;
                                }
                            }
                        },
                        {
                            style: "tableSignatures",
                            table: {
                                widths: ["*", "*", "*", "*"],
                                body: [
                                    [
                                        {
                                            text: "Prepared by:",
                                            style: "tableSignaturesBody"
                                        },
                                        {
                                            text: "Recommended by:",
                                            style: "tableSignaturesBody"
                                        },
                                        {
                                            text: "Checked by:",
                                            style: "tableSignaturesBody"
                                        },
                                        {
                                            text: "Approved by:",
                                            style: "tableSignaturesBody"
                                        }
                                    ],
                                    [
                                        {
                                            text:
                                                "___________________________________",
                                            style: "tableSignaturesBody"
                                        },
                                        {
                                            text:
                                                "___________________________________",
                                            style: "tableSignaturesBody"
                                        },
                                        {
                                            text:
                                                "___________________________________",
                                            style: "tableSignaturesBody"
                                        },
                                        {
                                            text:
                                                "___________________________________",
                                            style: "tableSignaturesBody"
                                        }
                                    ]
                                ]
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

                if (action == "print") {
                    // pdfMake.createPdf(docDefinition).print();
                    pdfMake.createPdf(docDefinition).open();
                } else {
                    pdfMake
                        .createPdf(docDefinition)
                        .download("expense_report.pdf");
                }
            });
        },
        onPrint(action, group_by) {
            if (this.selected.length == 0) {
                this.mixin_errorDialog("Error", "No items selected");
                return;
            }

            switch (group_by) {
                case "user":
                    this.printReportByUser(action);
                    break;
                case "date":
                    this.printReportByDate(action);
                    break;
                default:
                    this.printReportByExpense(action);
                    break;
            }
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
        }
    },
    // mounted() {
    //     this.getDataFromApi().then(data => {
    //         this.items = data.items;
    //         this.totalItems = data.total;
    //     });
    // },
    created() {
        // this.$store.dispatch("AUTH_USER");
        this.$store.dispatch("AUTH_NOTIFICATIONS");
        this.loadTotalCountReportStatus();
        this.loadUsers();
        this.loadExpenseTypes();
    },
    activated() {
        this.$store.dispatch("AUTH_NOTIFICATIONS");
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
