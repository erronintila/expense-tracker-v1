<template>
    <div>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <h4 class="title green--text">Expense Reports</h4>

                <v-spacer></v-spacer>

                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            class="elevation-3 mr-2"
                            color="green"
                            :to="{ name: 'user.expense_reports.create' }"
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
                        </v-list>
                    </v-card>
                </v-menu>

                <v-menu offset-y transition="scale-transition" left>
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

                    <v-list>
                        <v-list-item @click="onUpdate('submit', 'put')">
                            <v-list-item-icon>
                                <v-icon>mdi-file-send-outline</v-icon>
                            </v-list-item-icon>
                            <v-list-item-subtitle>
                                Submit Report(s)
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

                        <v-list-item @click="onUpdate('duplicate', 'put')">
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
                                        <td><strong>Code</strong></td>
                                        <td>:</td>
                                        <td>{{ item.code }}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Reimbursable</strong></td>
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
                                        <td><strong>Period</strong></td>
                                        <td>:</td>
                                        <td>{{ item.from }} ~ {{ item.to }}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Status</strong></td>
                                        <td>:</td>
                                        <td>{{ item.status.remarks }}</td>
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
                                                item.created.created_by == null ? "" : item.created.created_by.name
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
                                                item.updated.updated_by == null ? "" : item.updated.updated_by.name
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
                                                item.submitted.submitted_by == null ? "" : item.submitted.submitted_by.name
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
                                                item.approved.approved_by == null ? "" : item.approved.approved_by.name
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
                                                item.deleted.deleted_by == null ? "" : item.deleted.deleted_by.name
                                            }}
                                        </td>
                                    </tr>
                                </table>
                            </v-container>
                        </td>
                    </template>
                    <template v-slot:[`item.total`]="{ item }">
                        {{ mixin_formatNumber(item.total) }}
                    </template>
                    <template v-slot:[`item.employee`]="{ item }">
                        {{
                            item.employee.last_name +
                                ", " +
                                item.employee.first_name
                        }}
                    </template>
                    <template v-slot:[`item.updated_at`]="{ item }">
                        {{ mixin_getHumanDate(item.updated.updated_at) }}
                    </template>
                    <template v-slot:[`item.actions`]="{ item }">
                        <v-icon small class="mr-2" @click="onShow(item)">
                            mdi-eye
                        </v-icon>
                        <v-icon small class="mr-2" @click="onEdit(item)">
                            mdi-pencil
                        </v-icon>
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
                { text: "Amount", value: "total", sortable: false },
                { text: "Last Updated", value: "updated_at" },
                { text: "Status", value: "status.status", sortable: false },
                { text: "Actions", value: "actions", sortable: false },
                { text: "", value: "data-table-expand" }
            ],
            items: [],
            employee: this.$store.getters.user.employee,
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
                // "For Submission",
                // "Pending",
                // "Approved",
                // "Cancelled",
                // "Completed"
                // "Archived"
            ],
            selected: [],
            search: "",
            totalItems: 0,
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
            let _this = this;

            _this.loading = true;

            return new Promise((resolve, reject) => {
                const { sortBy, sortDesc, page, itemsPerPage } = this.options;

                let search = _this.search.trim().toLowerCase();
                let status = _this.status;
                let employee_id = _this.employee.id;
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
                            employee_id: employee_id,
                            start_date: range[0],
                            end_date: range[1],
                            admin_page: false
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
        onRefresh() {
            Object.assign(this.$data, this.$options.data.apply(this));

            this.selected = [];
        },
        onShow(item) {
            this.$router.push({
                name: "user.expense_reports.show",
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
                name: "user.expense_reports.edit",
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
                    .includes("Approved")
            ) {
                this.$dialog.message.error("Report has been approved", {
                    position: "top-right",
                    timeout: 2000
                });
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

                                _this.$store.dispatch("AUTH_USER");

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
        onUpdate(action, method) {
            let _this = this;

            if (_this.selected.length == 0) {
                this.$dialog.message.error("No item(s) selected", {
                    position: "top-right",
                    timeout: 2000
                });
                return;
            }

            if (
                action == "submit" &&
                !this.selected
                    .map(item => item.status.status)
                    .includes("Unsubmitted")
            ) {
                this.$dialog.message.error("Action can't be completed", {
                    position: "top-right",
                    timeout: 2000
                });
                return;
            }

            if (
                action == "submit" &&
                this.selected
                    .map(item => item.status.status)
                    .includes("Approved")
            ) {
                this.$dialog.message.error("Report has been approved", {
                    position: "top-right",
                    timeout: 2000
                });
                return;
            }

            if (
                action == "submit" &&
                this.selected
                    .map(item => item.status.status)
                    .includes("Reimbursed")
            ) {
                this.$dialog.message.error("Report has been paid/reimbursed", {
                    position: "top-right",
                    timeout: 2000
                });
                return;
            }

            if (
                action == "submit" &&
                this.selected
                    .map(item => item.status.status)
                    .includes("Cancelled")
            ) {
                this.$dialog.message.error("Report has been cancelled", {
                    position: "top-right",
                    timeout: 2000
                });
                return;
            }

            if (action == "submit") {
                let settings = this.$store.getters.settings;

                let start = moment().startOf("day");
                let end = moment().endOf("day");

                let expense_min_date = moment.min(
                    this.selected.map(item => moment(item.from))
                );
                let expense_max_date = moment.max(
                    this.selected.map(item => moment(item.to))
                );

                if (settings) {
                    switch (settings.submission_period) {
                        case "Weekly":
                            start = moment()
                                .startOf("week")
                                .format("YYYY-MM-DD");
                            end = moment()
                                .endOf("week")
                                .format("YYYY-MM-DD");
                            break;
                        case "Monthly":
                            start = moment()
                                .startOf("month")
                                .format("YYYY-MM-DD");
                            end = moment()
                                .endOf("month")
                                .format("YYYY-MM-DD");
                            break;
                        default:
                            start = moment()
                                .startOf("day")
                                .format("YYYY-MM-DD");
                            end = moment()
                                .endOf("day")
                                .format("YYYY-MM-DD");
                            break;
                    }
                }

                // console.log(
                //     moment(expense_min_date).format("YYYY-MM-DD"),
                //     moment(expense_max_date).format("YYYY-MM-DD")
                // );
                // console.log("start adn end", start, end);

                // console.log(
                //     "check min",
                //     moment(
                //         moment(expense_min_date).format("YYYY-MM-DD")
                //     ).isBetween(start, end)
                // );
                // console.log(
                //     "check max",
                //     moment(
                //         moment(expense_max_date).format("YYYY-MM-DD")
                //     ).isBetween(start, end)
                // );

                if (
                    !moment(
                        moment(expense_min_date).format("YYYY-MM-DD")
                    ).isBetween(start, end, undefined, "[]") ||
                    !moment(
                        moment(expense_max_date).format("YYYY-MM-DD")
                    ).isBetween(start, end, undefined, "[]")
                ) {
                    this.mixin_errorDialog(
                        "Error",
                        "Submission of expenses beyond due date is not allowed"
                    );
                    return;
                }
            }

            if (
                action == "cancel" &&
                this.selected
                    .map(item => item.status.status)
                    .includes("Cancelled")
            ) {
                this.$dialog.message.error("Report has been cancelled", {
                    position: "top-right",
                    timeout: 2000
                });
                return;
            }

            if (
                action == "cancel" &&
                this.selected
                    .map(item => item.status.status)
                    .includes("Approved")
            ) {
                this.$dialog.message.error("Report has been approved", {
                    position: "top-right",
                    timeout: 2000
                });
                return;
            }

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
                                _this.$dialog.message.success(
                                    response.data.message,
                                    {
                                        position: "top-right",
                                        timeout: 2000
                                    }
                                );
                                _this.getDataFromApi().then(data => {
                                    _this.items = data.items;
                                    _this.totalItems = data.total;
                                });

                                _this.$store.dispatch("AUTH_USER");

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
                query: this.employee,
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

                return moment(today).isSameOrBefore(maxDate) ? today : maxDate;
            }

            return today;
        }
    },
    mounted() {
        this.getDataFromApi().then(data => {
            this.items = data.items;
            this.totalItems = data.total;
        });
    },
    created() {
        this.$store.dispatch("AUTH_USER");
    }
};
</script>
