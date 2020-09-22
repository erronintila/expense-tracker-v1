<template>
    <v-app>
        <v-card class="elevation-0 pt-0">
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
                                <DateRangePicker
                                    :preset="preset"
                                    :presets="presets"
                                    :value="date_range"
                                    @updateDates="updateDates"
                                ></DateRangePicker>
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-menu>
            </v-card-title>
            <v-card-subtitle> </v-card-subtitle>

            <v-container>
                <v-row>
                    <v-col cols="12" md="3">
                        <v-hover v-slot:default="{ hover }">
                            <v-card
                                :elevation="hover ? 5 : 2"
                                class="mx-auto"
                                :to="{
                                    name: 'admin.expenses.index',
                                    params: { status: 'Archived' }
                                }"
                            >
                                <v-card-title>{{
                                    total_expenses
                                }}</v-card-title>
                                <v-card-subtitle
                                    >Total Expenses</v-card-subtitle
                                >
                                <v-card-text>---</v-card-text>
                            </v-card>
                        </v-hover>
                    </v-col>
                    <v-col cols="12" md="3">
                        <v-hover v-slot:default="{ hover }">
                            <v-card
                                :elevation="hover ? 5 : 2"
                                class="mx-auto"
                                to="/admin/payments"
                            >
                                <v-card-title>0.00</v-card-title>
                                <v-card-subtitle
                                    >Reimbursements</v-card-subtitle
                                >
                                <v-card-text>---</v-card-text>
                            </v-card>
                        </v-hover>
                    </v-col>
                    <v-col cols="12" md="3">
                        <v-hover v-slot:default="{ hover }">
                            <v-card
                                :elevation="hover ? 5 : 2"
                                class="mx-auto"
                                to="/admin/reports"
                            >
                                <v-card-title>0.00</v-card-title>
                                <v-card-subtitle
                                    >Pending Expense Reports</v-card-subtitle
                                >
                                <v-card-text>---</v-card-text>
                            </v-card>
                        </v-hover>
                    </v-col>
                    <v-col cols="12" md="3">
                        <v-hover v-slot:default="{ hover }">
                            <v-card :elevation="hover ? 5 : 2" class="mx-auto">
                                <v-card-title>0.00</v-card-title>
                                <v-card-subtitle
                                    >------</v-card-subtitle
                                >
                                <v-card-text>---</v-card-text>
                            </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
                <v-hover v-slot:default="{ hover }">
                    <v-card :elevation="hover ? 5 : 2" class="mx-auto">
                        <v-toolbar flat dense>
                            <v-toolbar-title>
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

                <v-hover v-slot:default="{ hover }">
                    <v-card :elevation="hover ? 5 : 2" class="mx-auto">
                        <v-toolbar flat dense>
                            <v-toolbar-title>
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
            </v-container>
        </v-card>
    </v-app>
</template>

<script>
import moment from "moment";
import randomcolor from "randomcolor";
import numeral from "numeral";
import DateRangePicker from "../../../../components/daterangepicker/DateRangePicker";
import DoughnutChart from "./components/DoughnutChart";
// import PieChart from "./components/PieChart";
// import BarChart from "./components/BarChart";
import HorizontalBarChart from "./components/HorizontalBarChart";
import LineChart from "./components/LineChart";

export default {
    components: {
        DoughnutChart,
        // PieChart,
        // BarChart,
        HorizontalBarChart,
        LineChart,
        DateRangePicker
    },
    data() {
        return {
            total_expenses: 0,
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
                { text: "Expenses per employee", value: "employee" },
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
            items: []
        };
    },
    methods: {
        load_total_expenses(start, end) {
            let _this = this;

            axios
                .get("/api/data/total_expenses", {
                    params: {
                        start_date: start,
                        end_date: end
                    }
                })
                .then(response => {
                    _this.total_expenses = response.data;
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);
                });
        },
        load_department_expenses(start, end) {
            let _this = this;

            axios
                .get("/api/data/departments_expenses_summary", {
                    params: {
                        start_date: start,
                        end_date: end
                    }
                })
                .then(response => {
                    _this.expenses_by_category = response.data;

                    let labels = response.data.map(item => item.text);
                    let data = response.data.map(item => item.value);
                    let backgroundColors = _this.getBackgroundColors(
                        data.length
                    );

                    this.updatePieChartValues(labels, data, backgroundColors);

                    this.updateBarChartValues(labels, data, backgroundColors);
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);
                });
        },
        load_expense_types_expenses(start, end) {
            let _this = this;

            axios
                .get("/api/data/expense_types_expenses_summary", {
                    params: {
                        start_date: start,
                        end_date: end
                    }
                })
                .then(response => {
                    _this.expenses_by_category = response.data;

                    let labels = response.data.map(item => item.text);
                    let data = response.data.map(item => item.value);
                    let backgroundColors = _this.getBackgroundColors(
                        data.length
                    );

                    this.updatePieChartValues(labels, data, backgroundColors);

                    this.updateBarChartValues(labels, data, backgroundColors);
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);
                });
        },
        load_employees_expenses(start, end) {
            let _this = this;

            axios
                .get("/api/data/employees_expenses_summary", {
                    params: {
                        start_date: start,
                        end_date: end
                    }
                })
                .then(response => {
                    _this.expenses_by_category = response.data;

                    let labels = response.data.map(item => item.text);
                    let data = response.data.map(item => item.value);
                    let backgroundColors = _this.getBackgroundColors(
                        data.length
                    );

                    this.updatePieChartValues(labels, data, backgroundColors);

                    this.updateBarChartValues(labels, data, backgroundColors);
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);
                });
        },
        load_expenses_summary(start, end, time_unit) {
            let _this = this;

            axios
                .get("/api/data/expenses_summary", {
                    params: {
                        start_date: start,
                        end_date: end,
                        time_unit: time_unit
                    }
                })
                .then(response => {
                    switch (_this.groupBy) {
                        case "day":
                            _this.lineChart_labels = response.data.map(
                                item => item.text
                            );
                            break;
                        case "week":
                            _this.lineChart_labels = response.data.map(
                                item =>
                                    `${moment(item.text).format(
                                        "YYYY-MM"
                                    )} W:${this.getWeekInMonth(
                                        new Date(item.text)
                                    )}`
                            );
                            break;
                        case "month":
                            _this.lineChart_labels = response.data.map(item =>
                                moment(item.text).format("MMM YYYY")
                            );
                            break;
                        case "quarter":
                            _this.lineChart_labels = response.data.map(
                                item =>
                                    `${moment(item.text).format(
                                        "YYYY"
                                    )} Q:${moment(item.text).format("Q")}`
                            );
                            break;
                        case "year":
                            _this.lineChart_labels = response.data.map(item =>
                                moment(item.text).format("YYYY")
                            );
                            break;
                        default:
                            break;
                    }

                    _this.lineChart_data = response.data.map(
                        item => item.value
                    );

                    this.updateLineChartValues(
                        _this.lineChart_labels,
                        _this.lineChart_data
                    );
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);
                });
        },
        load_bar_chart() {
            this.horizontalBarChartOptions = {
                maintainAspectRatio: false,
                legend: false
                // scales: {
                //     yAxes: [
                //         {
                //             maxBarThickness: 10
                //         }
                //     ]
                // }
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
                legend: false
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
                    this.load_expense_types_expenses(start, end);
                    break;
                case "department":
                    this.load_department_expenses(start, end);
                    break;
                case "employee":
                    this.load_employees_expenses(start, end);
                    break;
                default:
                    break;
            }

            this.load_total_expenses(start, end);
        },
        onTimeUnitChange() {
            // console.log([this.date_range[0], this.date_range[1], this.groupBy]);
            this.load_expenses_summary(
                this.date_range[0],
                this.date_range[1],
                this.groupBy
            );
            this.load_total_expenses(this.date_range[0], this.date_range[1]);
        },
        updateDates(e) {
            this.date_range = e;

            this.expenses_by_category = [];

            this.onCategoryChange();
            // this.load_expense_reports(
            //     this.start_date.format("YYYY-MM-DD"),
            //     this.end_date.format("YYYY-MM-DD")
            // );
            this.onTimeUnitChange();
        }
    },
    created() {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " + localStorage.getItem("access_token");

        this.load_total_expenses(this.date_range[0], this.date_range[1]);
        this.load_expense_types_expenses(
            this.date_range[0],
            this.date_range[1]
        );

        this.load_pie_chart();
        this.load_bar_chart();
        this.load_line_chart();

        // this.onTimeUnitChange();

        this.load_expenses_summary(
            this.date_range[0],
            this.date_range[1],
            this.groupBy
        );
    }
};
</script>
