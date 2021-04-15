<template>
    <div>
        <loader-component v-if="loader"></loader-component>
        <v-card v-else class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <h4 class="title green--text">Dashboard</h4>
                <v-spacer></v-spacer>
                <v-menu
                    :close-on-content-click="false"
                    :nudge-width="200"
                    offset-y
                    left
                    bottom
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on">
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </template>

                    <v-card>
                        <v-list>
                            <v-list-item>
                                <v-text-field
                                    :value="
                                        user ? user.full_name : 'All Employees'
                                    "
                                    label="Employee"
                                    readonly
                                >
                                    <template v-slot:append>
                                        <UserDialogSelector
                                            ref="userDialogSelector"
                                            @selectUser="selectUser"
                                            @onReset="resetUser"
                                            :selectedUser="user"
                                            :usersParameters="{
                                                params: { is_superadmin: false }
                                            }"
                                        >
                                            <template
                                                v-slot:openDialog="{
                                                    bind,
                                                    on
                                                }"
                                            >
                                                <v-btn
                                                    fab
                                                    color="primary"
                                                    text
                                                    x-small
                                                    v-bind="bind"
                                                    v-on="on"
                                                >
                                                    <v-icon dark
                                                        >mdi-magnify</v-icon
                                                    >
                                                </v-btn>
                                            </template>
                                        </UserDialogSelector>
                                    </template>
                                </v-text-field>
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-menu>
            </v-card-title>
            <v-card-subtitle>
                <!-- {{ formattedDateRange }} -->
                

                <DateRangePicker
                    ref="dateRangePicker"
                    :dateRange="date_range"
                    @on-change="updateDates"
                >
                    <template
                        v-slot:openDialog="{
                            on,
                            attrs,
                            dateRangeText
                        }"
                    >
                        <v-btn v-bind="attrs" v-on="on" text class="ml-0 pl-0">
                            {{ dateRangeText }}
                        </v-btn>
                    </template>
                </DateRangePicker>

                <v-chip v-if="user != null && user.id > 0" small>{{
                    user.full_name
                }}</v-chip>
            </v-card-subtitle>

            <v-row>
                <v-col cols="12" md="4">
                    <v-hover v-slot:default="{ hover }">
                        <v-card
                            class="mx-auto"
                            :elevation="hover ? 5 : 2"
                            :to="{ name: 'user.expenses.index' }"
                        >
                            <v-card-text>
                                <div class="green--text">
                                    Total Expenses
                                </div>
                                <div class="display-1 text--primary">
                                    {{
                                        mixin_formatNumber(
                                            total.expenses_by_date
                                        )
                                    }}
                                </div>
                                <div>
                                    {{ count.expenses_by_date }}
                                    Expenses
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-hover>
                </v-col>

                <v-col cols="12" md="4">
                    <v-hover v-slot:default="{ hover }">
                        <v-card class="mx-auto" :elevation="hover ? 5 : 2">
                            <v-card-text>
                                <div>
                                    Remaining Fund
                                </div>
                                <v-btn
                                    class="ml-0 pl-0"
                                    text
                                    :to="{
                                        name: 'admin.users.index'
                                    }"
                                >
                                    <span>
                                        <div
                                            :class="
                                                parseFloat(
                                                    total.remaining_fund
                                                ) <=
                                                parseFloat(total.total_fund) *
                                                    0.1
                                                    ? 'display-1 red--text'
                                                    : 'display-1 text--primary'
                                            "
                                        >
                                            {{
                                                mixin_formatNumber(
                                                    total.remaining_fund
                                                )
                                            }}
                                        </div>
                                    </span>
                                </v-btn>

                                <div>
                                    {{
                                        `Total Revolving Fund: ${total.total_fund}`
                                    }}
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-hover>
                </v-col>

                <v-col cols="12" md="4">
                    <v-hover v-slot:default="{ hover }">
                        <v-card class="mx-auto" :elevation="hover ? 5 : 2">
                            <v-card-text>
                                <div>
                                    Unreported Expenses
                                </div>
                                <v-btn
                                    class="ml-0 pl-0"
                                    text
                                    :to="{
                                        name: 'user.expenses.index'
                                    }"
                                >
                                    <span>
                                        <div class="display-1 text--primary">
                                            {{
                                                mixin_formatNumber(
                                                    total.unreported_expenses
                                                )
                                            }}
                                        </div>
                                    </span>
                                </v-btn>

                                <div>
                                    {{
                                        `Total Unreported: ${count.unreported_expenses}`
                                    }}
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <v-hover v-slot:default="{ hover }">
                        <v-card
                            class="mx-auto"
                            :elevation="hover ? 5 : 2"
                            height="100%"
                            style="position: relative"
                        >
                            <v-card-text>
                                <div>
                                    Expense Reports Summary
                                    <v-menu offset-y open-on-hover>
                                        <template
                                            v-slot:activator="{ on, attrs }"
                                        >
                                            <v-btn
                                                x-small
                                                icon
                                                color="green"
                                                v-bind="attrs"
                                                v-on="on"
                                            >
                                                <v-icon
                                                    >mdi-information-outline</v-icon
                                                >
                                            </v-btn>
                                        </template>
                                        <v-card>
                                            <v-card-text>
                                                <div>
                                                    Unsubmitted: Created reports
                                                    that are not yet submitted
                                                </div>
                                                <div>
                                                    Pending for Approval:
                                                    Submitted reports waiting
                                                    for approval
                                                </div>
                                                <div>
                                                    Awaiting Reimbursement:
                                                    Approved reports waiting for
                                                    payment
                                                </div>
                                                <div>
                                                    Payment to Receive:
                                                    Reimbursed expenses waiting
                                                    to be received by the user
                                                </div>
                                            </v-card-text>
                                        </v-card>
                                    </v-menu>
                                </div>
                                <v-row>
                                    <v-col
                                        cols="12"
                                        md="3"
                                        align="center"
                                        justify="center"
                                    >
                                        <v-btn
                                            text
                                            class="mt-4 mb-4"
                                            :to="{
                                                name:
                                                    'user.expense_reports.index'
                                            }"
                                        >
                                            <span>
                                                <div
                                                    class="orange--text text-capitalize"
                                                >
                                                    Unsubmitted
                                                </div>
                                                <div
                                                    class="display-1 text--primary"
                                                >
                                                    {{
                                                        mixin_formatNumber(
                                                            total.unsubmitted_reports
                                                        )
                                                    }}
                                                </div>
                                                <div class=" text-capitalize">
                                                    {{
                                                        count.unsubmitted_reports
                                                    }}
                                                    Reports
                                                </div>
                                            </span>
                                        </v-btn>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        md="3"
                                        align="center"
                                        justify="center"
                                    >
                                        <v-btn
                                            text
                                            class="mt-4 mb-4"
                                            :to="{
                                                name:
                                                    'user.expense_reports.index'
                                            }"
                                        >
                                            <div>
                                                <div
                                                    :class="
                                                        parseFloat(
                                                            total.pending_for_approval_reports
                                                        ) > 0
                                                            ? 'red--text text-capitalize'
                                                            : 'text-capitalize'
                                                    "
                                                >
                                                    Pending for Approval
                                                </div>
                                                <div
                                                    :class="
                                                        parseFloat(
                                                            total.pending_for_approval_reports
                                                        ) > 0
                                                            ? 'display-1 red--text'
                                                            : 'display-1 text--primary'
                                                    "
                                                >
                                                    {{
                                                        mixin_formatNumber(
                                                            total.pending_for_approval_reports
                                                        )
                                                    }}
                                                </div>
                                                <div class=" text-capitalize">
                                                    {{
                                                        count.pending_for_approval_reports
                                                    }}
                                                    Reports
                                                </div>
                                            </div>
                                        </v-btn>
                                    </v-col>

                                    <v-col
                                        cols="12"
                                        md="3"
                                        align="center"
                                        justify="center"
                                    >
                                        <v-btn
                                            text
                                            class="mt-4 mb-4"
                                            :to="{
                                                name:
                                                    'user.expense_reports.index'
                                            }"
                                        >
                                            <div>
                                                <div
                                                    class="green--text text-capitalize"
                                                >
                                                    Awaiting Reimbursement
                                                </div>
                                                <div
                                                    class="display-1 text--primary"
                                                >
                                                    {{
                                                        mixin_formatNumber(
                                                            total.awaiting_for_reimbursement_reports
                                                        )
                                                    }}
                                                </div>
                                                <div class=" text-capitalize">
                                                    {{
                                                        count.awaiting_for_reimbursement_reports
                                                    }}
                                                    Reports
                                                </div>
                                            </div>
                                        </v-btn>
                                    </v-col>

                                    <v-col
                                        cols="12"
                                        md="3"
                                        align="center"
                                        justify="center"
                                    >
                                        <v-btn
                                            text
                                            class="mt-4 mb-4"
                                            :to="{
                                                name: 'user.payments.index'
                                            }"
                                        >
                                            <div>
                                                <div
                                                    class="orange--text text-capitalize"
                                                >
                                                    Payment to Receive
                                                </div>
                                                <div
                                                    class="display-1 text--primary"
                                                >
                                                    {{
                                                        mixin_formatNumber(
                                                            total.payment_to_receive
                                                        )
                                                    }}
                                                </div>
                                                <div class=" text-capitalize">
                                                    {{
                                                        count.payment_to_receive
                                                    }}
                                                    Reports
                                                </div>
                                            </div>
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>

            <div class="mt-4">
                <v-hover v-slot:default="{ hover }">
                    <v-card :elevation="hover ? 5 : 2" class="mx-auto">
                        <v-toolbar flat dense>
                            <v-toolbar-title class="green--text">
                                Expenses by category
                            </v-toolbar-title>

                            <v-spacer></v-spacer>

                            <v-menu
                                :close-on-content-click="false"
                                :nudge-width="200"
                                offset-y
                                left
                                bottom
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn icon v-bind="attrs" v-on="on">
                                        <v-icon>mdi-dots-vertical</v-icon>
                                    </v-btn>
                                </template>

                                <v-card>
                                    <v-list>
                                        <v-list-item>
                                            <v-select
                                                v-model="filter"
                                                label="Filter"
                                                :items="filterItems"
                                                item-text="text"
                                                item-value="value"
                                                @change="onCategoryChange"
                                            ></v-select>
                                        </v-list-item>
                                    </v-list>
                                </v-card>
                            </v-menu>
                        </v-toolbar>
                        <v-row class="ml-4 mb-4">
                            <v-col md="4" class="mt-5">
                                <DoughnutChart
                                    ref="donut_chart"
                                    :data="doughnutChartData"
                                    :options="doughnutChartOptions"
                                ></DoughnutChart>
                            </v-col>
                            <v-col cols="12" md="8">
                                <v-card
                                    flat
                                    class="overflow-y-auto"
                                    max-height="500"
                                >
                                    <v-card-text>
                                        <HorizontalBarChart
                                            ref="horizontalBar_chart"
                                            :data="horizontalBarChartData"
                                            :options="horizontalBarChartOptions"
                                        ></HorizontalBarChart>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-hover>
            </div>

            <div>
                <v-hover v-slot:default="{ hover }">
                    <v-card :elevation="hover ? 5 : 2" class="mx-auto">
                        <v-toolbar flat dense>
                            <v-toolbar-title class="green--text">
                                Expenses by date
                            </v-toolbar-title>

                            <v-spacer></v-spacer>

                            <v-menu
                                :close-on-content-click="false"
                                :nudge-width="200"
                                offset-y
                                left
                                bottom
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn icon v-bind="attrs" v-on="on">
                                        <v-icon>mdi-dots-vertical</v-icon>
                                    </v-btn>
                                </template>

                                <v-card>
                                    <v-list>
                                        <v-list-item>
                                            <v-select
                                                v-model="groupBy"
                                                label="Group by"
                                                :items="groupByItems"
                                                item-text="text"
                                                item-value="value"
                                                @change="onTimeUnitChange"
                                            ></v-select>
                                        </v-list-item>
                                    </v-list>
                                </v-card>
                            </v-menu>
                        </v-toolbar>
                        <v-row>
                            <v-col cols="12">
                                <LineChart
                                    ref="line_chart"
                                    :data="lineChartData"
                                    :options="lineChartOptions"
                                ></LineChart>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-hover>
            </div>
        </v-card>
    </div>
</template>

<script>
import moment from "moment";
import randomcolor from "randomcolor";
import numeral from "numeral";
import DateRangePicker from "../../../components/datepicker/DateRangePicker";
import DoughnutChart from "../../../components/chart/DoughnutChart";
import HorizontalBarChart from "../../../components/chart/HorizontalBarChart";
import LineChart from "../../../components/chart/LineChart";
import UserDialogSelector from "../../../components/selector/dialog/UserDialogSelector";

export default {
    components: {
        DoughnutChart,
        // PieChart,
        // BarChart,
        HorizontalBarChart,
        LineChart,
        DateRangePicker,
        UserDialogSelector
    },
    data() {
        return {
            loader: true,
            total: {
                awaiting_for_reimbursement_reports: 0,
                expenses_by_date: 0,
                pending_for_approval_reports: 0,
                remaining_fund: 0,
                total_fund: 0,
                unreported_expenses: 0,
                unsubmitted_reports: 0,
                payment_to_receive: 0
            },
            count: {
                awaiting_for_reimbursement_reports: 0,
                expenses_by_date: 0,
                pending_for_approval_reports: 0,
                unreported_expenses: 0,
                unsubmitted_reports: 0,
                payment_to_receive: 0
            },

            backgroundColors: [
                "#36a2eb",
                "#ff6384",
                "#ff9f40",
                "#4bc0c0",
                "#ffcd56"
            ],

            horizontalBarChartOptions: {},
            horizontalBarChartData: {},

            doughnutChartOptions: {},
            doughnutChartData: {},

            lineChartOptions: {},
            lineChartData: {},

            filter: { text: "Expenses by type", value: "expense_type" },
            filterItems: [
                { text: "Expenses by type", value: "expense_type" },
                { text: "Expenses per user", value: "user" },
                { text: "Expenses per department", value: "department" }
            ],

            groupBy: "month",
            groupByItems: [
                { text: "Day", value: "day" },
                { text: "Week", value: "week" },
                { text: "Month", value: "month" },
                { text: "Quarter", value: "quarter" },
                { text: "Year", value: "year" }
            ],

            date_range: [
                moment()
                    .startOf("year")
                    .format("YYYY-MM-DD"),
                moment()
                    .endOf("year")
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
                {
                    text: "Dessert (100g serving)",
                    align: "start",
                    sortable: false,
                    value: "name"
                },
                { text: "Calories", value: "calories" },
                { text: "Fat (g)", value: "fat" },
                { text: "Carbs (g)", value: "carbs" },
                { text: "Protein (g)", value: "protein" },
                { text: "Iron (%)", value: "iron" }
            ],
            items: [],

            user: this.$store.getters.user.is_admin ? null : this.$store.getters.user,
        };
    },
    methods: {
        selectUser(e) {
            if (e == null || e == undefined) {
                this.user = null;
                return;
            }
            this.user = e;
        },
        resetUser() {
            this.user = null;
        },
        load_department_expenses(start, end, user) {
            axios
                .get("/api/data/departments_expenses_summary", {
                    params: {
                        start_date: start,
                        end_date: end,
                        user_id: user,
                        admin_page: true
                    }
                })
                .then(response => {
                    this.expenses_by_category = response.data;
                    let labels = response.data.map(item => item.text);
                    let data = response.data.map(item => item.value);
                    let backgroundColors = this.getBackgroundColors(
                        data.length
                    );
                    let sum = response.data.reduce(function(a, b) {
                        return a + b.value;
                    }, 0);
                    let percentages = response.data.map(
                        item => (item.value / sum) * 100
                    );
                    this.updatePieChartValues(
                        labels,
                        percentages,
                        backgroundColors
                    );
                    this.updateBarChartValues(labels, data, backgroundColors);
                })
                .catch(error => {
                    this.mixin_showErrors(error);
                });
        },
        load_expense_types_expenses(start, end, user) {
            axios
                .get("/api/data/expense_types_expenses_summary", {
                    params: {
                        start_date: start,
                        end_date: end,
                        user_id: user,
                        admin_page: true
                    }
                })
                .then(response => {
                    this.expenses_by_category = response.data;
                    let labels = response.data.map(item => item.text);
                    let data = response.data.map(item => item.value);
                    let backgroundColors = this.getBackgroundColors(
                        data.length
                    );
                    let sum = response.data.reduce(function(a, b) {
                        return a + b.value;
                    }, 0);
                    let percentages = response.data.map(
                        item => (item.value / sum) * 100
                    );
                    this.updatePieChartValues(
                        labels,
                        percentages,
                        backgroundColors
                    );
                    this.updateBarChartValues(labels, data, backgroundColors);
                })
                .catch(error => {
                    this.mixin_showErrors(error);
                });
        },
        load_users_expenses(start, end, user) {
            axios
                .get("/api/data/users_expenses_summary", {
                    params: {
                        start_date: start,
                        end_date: end,
                        user_id: user,
                        admin_page: true
                    }
                })
                .then(response => {
                    this.expenses_by_category = response.data;
                    let labels = response.data.map(item => item.text);
                    let data = response.data.map(item => item.value);
                    let backgroundColors = this.getBackgroundColors(
                        data.length
                    );
                    let sum = response.data.reduce(function(a, b) {
                        return a + b.value;
                    }, 0);
                    let percentages = response.data.map(
                        item => (item.value / sum) * 100
                    );
                    this.updatePieChartValues(
                        labels,
                        percentages,
                        backgroundColors
                    );
                    this.updateBarChartValues(labels, data, backgroundColors);
                })
                .catch(error => {
                    this.mixin_showErrors(error);
                });
        },
        load_expenses_summary(start, end, time_unit, user) {
            axios
                .get("/api/data/expenses_summary", {
                    params: {
                        start_date: start,
                        end_date: end,
                        time_unit: time_unit,
                        user_id: user,
                        admin_page: true
                    }
                })
                .then(response => {
                    switch (this.groupBy) {
                        case "day":
                            this.lineChart_labels = response.data.map(
                                item => item.text
                            );
                            break;
                        case "week":
                            this.lineChart_labels = response.data.map(
                                item =>
                                    `${moment(item.text).format(
                                        "YYYY-MM"
                                    )} W:${this.getWeekInMonth(
                                        new Date(item.text)
                                    )}`
                            );
                            break;
                        case "month":
                            this.lineChart_labels = response.data.map(item =>
                                moment(item.text).format("MMM YYYY")
                            );
                            break;
                        case "quarter":
                            this.lineChart_labels = response.data.map(
                                item =>
                                    `${moment(item.text).format(
                                        "YYYY"
                                    )} Q:${moment(item.text).format("Q")}`
                            );
                            break;
                        case "year":
                            this.lineChart_labels = response.data.map(item =>
                                moment(item.text).format("YYYY")
                            );
                            break;
                        default:
                            break;
                    }

                    this.lineChart_data = response.data.map(item => item.value);

                    this.updateLineChartValues(
                        this.lineChart_labels,
                        this.lineChart_data
                    );
                })
                .catch(error => {
                    this.mixin_showErrors(error);
                });
        },
        load_bar_chart() {
            this.horizontalBarChartOptions = {
                maintainAspectRatio: false,
                legend: false,
                // scales: {
                //     yAxes: [
                //         {
                //             maxBarThickness: 10
                //         }
                //     ]
                // },
                plugins: {
                    datalabels: {
                        display: function(context) {
                            return (
                                context.dataset.data[context.dataIndex] !== 0
                            ); // or >= 1 or ...
                        },
                        borderWidth: 2,
                        borderColor: "white",
                        borderRadius: 20,
                        font: {
                            weight: "bold"
                        },
                        backgroundColor: "lightgray"
                    }
                }
            };
            this.horizontalBarChartData = {
                labels: [],
                datasets: [
                    {
                        label: "",
                        backgroundColor: [],
                        data: []
                    }
                ]
            };
        },
        load_pie_chart() {
            this.doughnutChartOptions = {
                hoverBorderWidth: 20,
                legend: false,
                plugins: {
                    datalabels: {
                        display: function(context) {
                            return (
                                context.dataset.data[context.dataIndex] !== 0
                            );
                        },
                        borderWidth: 2,
                        borderColor: "white",
                        borderRadius: 20,
                        // color: 0,
                        font: {
                            weight: "bold"
                        },
                        backgroundColor: "lightgray",
                        formatter: (value, ctx) => {
                            return this.mixin_formatNumber(value) + " %";
                        }
                    }
                }
            };
            this.doughnutChartData = {
                labels: [],
                datasets: [
                    {
                        label: "",
                        backgroundColor: [],
                        data: []
                    }
                ]
            };
        },
        load_line_chart() {
            let ticksStyle = {
                fontColor: "#495057",
                fontStyle: "bold",
                maxRotation: 0,
                minRotation: 0
            };

            this.lineChartOptions = {
                // hoverBorderWidth: 20,
                // legend: false,
                maintainAspectRatio: false,
                tooltips: {
                    mode: "index",
                    intersect: false,
                    position: "nearest"
                },
                hover: {
                    mode: "index",
                    intersect: true
                },
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [
                        {
                            // display: false,
                            gridLines: {
                                display: true,
                                lineWidth: "4px",
                                color: "rgba(0, 0, 0, .2)",
                                zeroLineColor: "transparent"
                            },
                            ticks: $.extend(
                                {
                                    beginAtZero: true,
                                    suggestedMax: 200
                                },
                                ticksStyle
                            )
                        }
                    ],
                    xAxes: [
                        {
                            display: true,
                            gridLines: {
                                display: false
                            },
                            ticks: ticksStyle
                        }
                    ]
                }
            };
            this.lineChartData = {
                labels: [],
                datasets: [
                    {
                        type: "line",
                        data: [],
                        backgroundColor: "#dbffe5",
                        borderColor: "#4caf50",
                        pointBorderColor: "#4caf50",
                        pointBackgroundColor: "#4caf50",
                        fill: true,
                        lineTension: 0
                    }
                ]
            };
        },
        getWeekInMonth(date) {
            let adjustedDate = date.getDate() + date.getDay();
            let prefixes = ["0", "1", "2", "3", "4", "5"];
            return parseInt(prefixes[0 | (adjustedDate / 7)]) + 1;
        },
        getBackgroundColors(length) {
            let backgroundColors = [];
            for (let i = 0; i < length; i++) {
                backgroundColors.push(
                    randomcolor({ luminosity: "light", hue: "random" })
                );
            }
            return backgroundColors;
        },
        updateBarChartValues(labels, data, backgroundColors) {
            this.horizontalBarChartData.labels = labels;

            this.horizontalBarChartData.datasets = [
                {
                    label: "",
                    backgroundColor: backgroundColors,
                    data: data
                }
            ];

            this.$refs.horizontalBar_chart.update();
        },
        updatePieChartValues(labels, data, backgroundColors) {
            this.doughnutChartData.labels = labels;

            this.doughnutChartData.datasets = [
                {
                    label: "",
                    backgroundColor: backgroundColors,
                    data: data
                }
            ];

            this.$refs.donut_chart.update();
        },
        updateLineChartValues(labels, data) {
            this.lineChartData.labels = labels;

            this.lineChartData.datasets[0].data = data;

            this.$refs.line_chart.update();
        },
        onDateChange(start, end) {
            this.expenses_by_category = [];
            this.start_date = start;
            this.end_date = end;

            this.onCategoryChange();
            this.load_expense_reports(
                this.start_date.format("YYYY-MM-DD"),
                this.end_date.format("YYYY-MM-DD")
            );
            this.onTimeUnitChange();
        },
        onCategoryChange() {
            let start = this.date_range[0];
            let end = this.date_range[1];

            switch (this.filter) {
                case "expense_type":
                    this.load_expense_types_expenses(
                        start,
                        end,
                        this.user ? this.user.id : null
                    );
                    break;
                case "department":
                    this.load_department_expenses(
                        start,
                        end,
                        this.user ? this.user.id : null
                    );
                    break;
                case "user":
                    this.load_users_expenses(
                        start,
                        end,
                        this.user ? this.user.id : null
                    );
                    break;
                default:
                    this.load_expense_types_expenses(
                        start,
                        end,
                        this.user ? this.user.id : null
                    );
                    break;
            }
        },
        onTimeUnitChange() {
            this.load_expenses_summary(
                this.date_range[0],
                this.date_range[1],
                this.groupBy,
                this.user ? this.user.id : null
            );
        },
        updateDates(e) {
            this.date_range = e;

            this.expenses_by_category = [];

            // this.onCategoryChange();

            this.onTimeUnitChange();

            this.getExpenseStats(
                this.date_range[0],
                this.date_range[1],
                this.user ? this.user.id : null
            );
        },
        getExpenseStats(start, end, emp) {
            axios
                .get(
                    `/api/data/expense_stats?start_date=${start}&end_date=${end}&user_id=${emp}`
                )
                .then(response => {
                    this.total = response.data.total;
                    this.count = response.data.count;
                    this.load_expense_types_expenses(
                        this.date_range[0],
                        this.date_range[1],
                        this.user ? this.user.id : null
                    );
                    this.load_expenses_summary(
                        this.date_range[0],
                        this.date_range[1],
                        this.groupBy,
                        this.user ? this.user.id : null
                    );

                    this.loader = false;
                })
                .catch(error => {
                    this.mixin_showErrors(error);
                    this.loader = false;
                });
        }
        // loadStatistics(start, end, user_id) {
        //     axios.get(`/api/data/statistics?start_date=${start}&end_date=${end}&user_id=${user_id}`)
        //     .then(response => {
        //     }).catch(error => {
        //         this.mixin_showErrors(error);
        //     });
        // }
    },
    computed: {
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
    watch: {
        user() {
            this.onTimeUnitChange();
            this.getExpenseStats(
                this.date_range[0],
                this.date_range[1],  
                this.user ? this.user.id : null
            );
        }
    },
    created() {
        this.$store.dispatch("AUTH_USER").then(response => {
            
        });

        this.load_pie_chart();
        this.load_bar_chart();
        this.load_line_chart();

        this.getExpenseStats(
            this.date_range[0],
            this.date_range[1],
            this.user ? this.user.id : null
        );

        // this.loadStatistics();
    },
};
</script>
