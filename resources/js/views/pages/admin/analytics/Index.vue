<template>
    <div>
        <loader-component v-if="!formDataLoaded"></loader-component>
        <v-card v-else class="elevation-0 pt-0">
            <!-- Page Header -->
            <page-header :title="'Analytics'">
                <!-- <template v-slot:sub-actions>
                    <div>
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
                    </div>

                    <div>
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
                    </div>

                    <div>
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
                </template> -->
            </page-header>
            <!-- End of Page Header -->

            <v-row>
                <v-col
                    cols="12"
                    md="6"
                    v-for="(item, index) in sections"
                    :key="index"
                >
                    <v-card-title>{{ item.title }}</v-card-title>
                    <v-card-text>
                        <div
                            class="my-2"
                            v-for="(link, index) in item.links"
                            :key="index"
                        >
                            <router-link
                                :to="{ name: link.path, params: link.params }"
                            >
                                {{ link.params.label }}
                            </router-link>
                        </div>
                    </v-card-text>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>
import moment from "moment";
import numeral from "numeral";
import PageHeader from "../../../../components/page/PageHeader";
import DateRangePicker from "../../../../components/datepicker/DateRangePicker";
import UserDialogSelector from "../../../../components/selector/dialog/UserDialogSelector";
import VendorDialogSelector from "../../../../components/selector/dialog/VendorDialogSelector";

export default {
    name: "analytics",
    components: {
        PageHeader,
        DateRangePicker,
        UserDialogSelector,
        VendorDialogSelector
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
            sections: [
                {
                    title: "Expenses",
                    links: [
                        {
                            path: "admin.analytics.show",
                            params: {
                                label: "Expense Details",
                                slug: "expense-details"
                            }
                        },
                        {
                            path: "admin.analytics.show",
                            params: {
                                label: "Expenses by Department",
                                slug: "expense-department"
                            }
                        },
                        {
                            path: "admin.analytics.show",
                            params: {
                                label: "Expenses by Employee",
                                slug: "expense-employee",
                                isUserSelector: true
                            }
                        },
                        {
                            path: "admin.analytics.show",
                            params: {
                                label: "Expenses by Vendor",
                                slug: "expense-vendor",
                                isVendorSelector: true
                            }
                        },
                        {
                            path: "admin.analytics.show",
                            params: {
                                label: "Expenses by Expense Types",
                                slug: "expense-expense-types",
                                isExpenseTypeSelector: true
                            }
                        },
                        {
                            path: "admin.analytics.show",
                            params: {
                                label: "Tax Summary",
                                slug: "tax-summary"
                            }
                        }
                    ]
                },
                {
                    title: "Expense Reports",
                    links: [
                        {
                            path: "admin.analytics.show",
                            params: {
                                label: "Expense Reports Details",
                                slug: "expense-report-details"
                            }
                        },
                        {
                            path: "admin.analytics.show",
                            params: {
                                label: "Expense Reports by Employee",
                                slug: "expense-report-employee"
                            }
                        },
                        {
                            path: "admin.analytics.show",
                            params: {
                                label: "Time Taken for Submission",
                                slug: "expense-report-time-submission"
                            }
                        },
                        {
                            path: "admin.analytics.show",
                            params: {
                                label: "Time Taken for Approval",
                                slug: "expense-report-time-approval"
                            }
                        }
                    ]
                },
                {
                    title: "Payments",
                    links: [
                        {
                            path: "admin.analytics.show",
                            params: {
                                label: "Payment Details",
                                slug: "payment-details"
                            }
                        },
                        {
                            path: "admin.analytics.show",
                            params: {
                                label: "Time Taken for Expense Report Payment",
                                slug: "payment-time-payment"
                            }
                        },
                        {
                            path: "admin.analytics.show",
                            params: {
                                label: "Time Taken for Payment Confirmation",
                                slug: "payment-time-confirmation"
                            }
                        }
                    ]
                },
                {
                    title: "Employees",
                    links: [
                        {
                            path: "admin.analytics.show",
                            params: {
                                label: "Employee Details",
                                slug: "employee-details"
                            }
                        },
                        {
                            path: "admin.analytics.show",
                            params: {
                                label: "Revolving Fund",
                                slug: "payment-revolving-fund"
                            }
                        }
                    ]
                },
                {
                    title: "Vendors",
                    links: [
                        {
                            path: "admin.analytics.show",
                            params: {
                                label: "Vendor Details",
                                slug: "vendor-details"
                            }
                        }
                    ]
                }
            ]
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
    }
};
</script>
