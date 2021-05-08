<template>
    <div>
        <loader-component v-if="!formDataLoaded"></loader-component>
        <v-card v-else class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">Analytics</h4>
            </v-card-title>

            <v-card-text>
                <div class="headline">{{ $route.params.label }}</div>

                <div class="d-flex">
                    <DateRangePicker
                        ref="dateRangePicker"
                        :dateRange="date_range"
                        @on-change="updateDates"
                    >
                        <template
                            v-slot:openDialog="{ on, attrs, dateRangeText }"
                        >
                            <v-btn
                                v-bind="attrs"
                                v-on="on"
                                text
                                class="ma-0 pa-0"
                            >
                                {{ dateRangeText }}
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
                                on,
                                computedSelectedUser
                            }"
                        >
                            <v-btn
                                v-bind="bind"
                                v-on="on"
                                text
                                class="ma-0 pa-0 text-capitalize"
                            >
                                {{
                                    computedSelectedUser
                                        ? computedSelectedUser.name
                                        : "All Employees"
                                }}
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
                                on,
                                computedSelectedVendor
                            }"
                        >
                            <v-btn
                                v-bind="bind"
                                v-on="on"
                                text
                                class="ma-0 pa-0 text-capitalize"
                            >
                                {{
                                    computedSelectedVendor
                                        ? computedSelectedVendor.name
                                        : "All Vendors"
                                }}
                            </v-btn>
                        </template>
                    </VendorDialogSelector>
                </div>

                <v-row>
                    <v-col cols="12" md="4">
                        Pie Chart
                    </v-col>
                    <v-col cols="12" md="8">
                        line chart
                    </v-col>
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

                <v-row>
                    <v-col>
                        <div>Table</div>
                    </v-col>
                </v-row>
            </v-card-text>

            <div>
                <line-chart
                    :chartData="chartData"
                    :options="chartOptions"
                ></line-chart>
            </div>
        </v-card>
    </div>
</template>

<script>
import moment from "moment";
import numeral from "numeral";
import LineChart from "../../../../components/analytics/LineChart";
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
        LineChart
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
            user: null,
            vendor: null,
            statuses: ["Active", "Inactive", "Inactive"],
            total: [{ label: "Expenses", amount: 100.0, count: 0.0 }],
            params: {},
            chartData: {
                labels: ["January", "February", "March"],
                datasets: [
                    {
                        label: "Data One",
                        backgroundColor: "#dbffe5",
                        borderColor: "#4caf50",
                        data: [40, 20, 100],
                        fill: false,
                        // lineTension: 0
                    }
                ]
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,

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
};
</script>
