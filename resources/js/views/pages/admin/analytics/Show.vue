<template>
    <div>
        <loader-component v-if="!formDataLoaded"></loader-component>
        <v-card v-else class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <!-- <h4 class="title green--text">{{ $route.params.label }}</h4> -->
                <div class="d-flex">
                    <DateRangePicker
                        ref="dateRangePicker"
                        :dateRange="date_range"
                        @on-change="updateDates"
                    >
                        <template
                            v-slot:openDialog="{ on, attrs }"
                        >
                            <v-btn
                                v-bind="attrs"
                                v-on="on"
                                color="green"
                                dark
                                class="mr-2"
                                fab
                                small
                                title="Date Range"
                            >
                            <v-icon>mdi-calendar</v-icon>
                                <!-- {{ dateRangeText }} -->
                            </v-btn>
                        </template>
                    </DateRangePicker>

                    <UserDialogSelector
                        v-if="$store.getters.user.is_admin"
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
                                v-bind="bind"
                                v-on="on"
                                color="green"
                                dark
                                class="mr-2"
                                fab
                                small
                                title="Employees"
                            >
                            <v-icon>mdi-clipboard-account</v-icon>
                                <!-- {{
                                    computedSelectedUser
                                        ? computedSelectedUser.name
                                        : "All Employees"
                                }} -->
                            </v-btn>
                        </template>
                    </UserDialogSelector>

                    <VendorDialogSelector
                        ref="vendorDialogSelector"
                        @selectVendor="selectVendor"
                        @onReset="resetVendor"
                        :selectedVendor="vendor"
                    >
                        <template
                            v-slot:openDialog="{
                                bind,
                                on
                            }"
                        >
                            <v-btn
                                v-bind="bind"
                                v-on="on"
                                color="green"
                                dark
                                fab
                                small
                                title="Vendors"
                            >
                            <v-icon>mdi-account-group</v-icon>
                                <!-- {{
                                    computedSelectedVendor
                                        ? computedSelectedVendor.name
                                        : "All Vendors"
                                }} -->
                            </v-btn>
                        </template>
                    </VendorDialogSelector>
                </div>
            </v-card-title>

            <v-card-text>
                <div class="title green--text">{{ $route.params.label }}</div>

                <v-row>
                    
                    <v-col cols="12" md="8">
                        <v-sheet>
                            <v-timeline align-top dense>
                                <v-timeline-item
                                    v-for="message in messages"
                                    :key="message.time"
                                    :color="message.color"
                                    small
                                >
                                    <div>
                                        <div class="font-weight-normal">
                                            <strong>{{ message.from }}</strong>
                                            @{{ message.time }}
                                        </div>
                                        <div>{{ message.message }}</div>
                                    </div>
                                </v-timeline-item>
                            </v-timeline>
                        </v-sheet>
                    </v-col>
                    <v-col cols="12" md="4"></v-col>
                </v-row>

                <v-row>
                    <v-col
                        cols="12"
                        md="3"
                        v-for="(item, index) in total"
                        :key="index"
                    >
                        <v-card class="mx-auto" elevation="2">
                            <v-card-text>
                                <div class="green--text">
                                    {{ item.label }}
                                </div>
                                <div class="font-weight-bold text--primary">
                                    &#8369;
                                    {{ item.amount == null ? 0 : item.amount }}
                                </div>
                                <div>
                                    {{ item.count == null ? 0 : item.count }}
                                    record(s)
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>

            <div>
                <line-chart
                    :data="chartData"
                    :options="chartOptions"
                ></line-chart>
            </div>
        </v-card>
    </div>
</template>

<script>
import moment from "moment";
import numeral from "numeral";
import LineChart from "../../../../components/chart/LineChart";
import BarChart from "../../../../components/chart/BarChart";
import PageHeader from "../../../../components/page/PageHeader";
import DateRangePicker from "../../../../components/datepicker/DateRangePicker";
import UserDialogSelector from "../../../../components/selector/dialog/UserDialogSelector";
import VendorDialogSelector from "../../../../components/selector/dialog/VendorDialogSelector";

export default {
    name: "show-analytics",
    components: {
        PageHeader,
        DateRangePicker,
        UserDialogSelector,
        VendorDialogSelector,
        LineChart,
        BarChart
    },
    data() {
        return {
            formDataLoaded: true,
            date_range: [
                moment()
                    .startOf("month")
                    .format("YYYY-MM-DD"),
                moment()
                    .endOf("month")
                    .format("YYYY-MM-DD")
            ],
            messages: [
                {
                    from: "You",
                    message: `Sure, I'll see you later.`,
                    time: "10:42am",
                    color: "deep-purple lighten-1"
                },
                {
                    from: "John Doe",
                    message: "Yeah, sure. Does 1:00pm work?",
                    time: "10:37am",
                    color: "green"
                },
                {
                    from: "You",
                    message: "Did you still want to grab lunch today?",
                    time: "9:47am",
                    color: "deep-purple lighten-1"
                }
            ],
            user: null,
            vendor: null,
            statuses: ["Active", "Inactive", "Inactive"],
            total: [
                { label: "Expenses", amount: 100.0, count: 0.0 },
                { label: "Expenses", amount: 100.0, count: 0.0 },
                { label: "Expenses", amount: 100.0, count: 0.0 },
                { label: "Expenses", amount: 100.0, count: 0.0 },
                { label: "Expenses", amount: 100.0, count: 0.0 }
            ],
            params: {},
            //
            //
            //
            //
            labels: ["pending", "approved"],
            data: [
                { id: 1, status: "pending", label: "expense 1", amount: 100 },
                { id: 2, status: "approved", label: "expense 2", amount: 50 },
                {
                    id: 3,
                    status: "approved",
                    label: "expense 3",
                    amount: 10000
                },
                { id: 4, status: "pending", label: "expense 4", amount: 10 }
            ],
            //
            //
            //
            //
            chartData: {
                labels: ["January", "February", "March"],
                datasets: [
                    {
                        label: "Data One",
                        backgroundColor: "#dbffe5",
                        borderColor: "#4caf50",
                        data: [40, 20, 90],
                        fill: false,
                        lineTension: 0
                    },
                    {
                        label: "Data Two",
                        backgroundColor: "#dbffe5",
                        borderColor: "#4caf50",
                        data: [80, 50, 30],
                        fill: false,
                        lineTension: 0
                    }
                ]
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                tooltips: {
                    mode: "index",
                    intersect: false,
                    position: "nearest"
                },
                // legend: {
                //     display: false
                // },
                scales: {
                    yAxes: [
                        {
                            // gridLines: {
                            //     display: false
                            // },
                            ticks: $.extend(
                                {
                                    beginAtZero: true
                                },
                                {}
                            )
                        }
                    ],
                    xAxes: [
                        {
                            gridLines: {
                                display: false
                            }
                        }
                    ]
                }
            }
        };
    },
    methods: {
        updateDates(e) {
            this.date_range = e;
        },
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
        selectVendor(e) {
            if (e == null || e == undefined) {
                this.vendor = null;
                return;
            }
            this.vendor = e;
        },
        resetVendor() {
            this.vendor = null;
        },
        getLabels(arr, unique_field) {
            const unique = [];
            const distinct = [];
            for (let i = 0; i < arr.length; i++) {
                if (!unique[arr[i][unique_field]]) {
                    distinct.push(arr[i][unique_field]);
                    unique[arr[i][unique_field]] = 1;
                }
            }
            return distinct;
        }
    },
    // beforeCreate() {
    //     if (
    //         this.$route.params.constructor !== Object ||
    //         Object.keys(this.$route.params).length === 0
    //     ) {
    //         this.$router.push("/analytics");
    //     }
    // },
    created() {
        console.log(this.getLabels(this.data, "status"));
    }
};
</script>
