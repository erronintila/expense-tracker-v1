<template>
    <div>
        <loader-component v-if="!formDataLoaded"></loader-component>
        <v-card v-else class="elevation-0 pt-0">
            <!-- Page Header -->
            <page-header :title="'Payment Records'">
                <template v-slot:actions>
                    <v-tooltip bottom>
                        <template
                            v-slot:activator="{ on, attrs }"
                            v-if="mixin_can('add payments')"
                        >
                            <v-btn
                                class="elevation-3 mr-2"
                                color="green"
                                :to="{ name: 'user.payments.create' }"
                                dark
                                fab
                                x-small
                                v-bind="attrs"
                                v-on="on"
                            >
                                <v-icon dark>mdi-plus</v-icon>
                            </v-btn>
                        </template>
                        <span>Add New Record</span>
                    </v-tooltip>
                </template>

                <template v-slot:sub-actions>
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
                                class="ml-0 pl-0"
                            >
                                {{ dateRangeText }}
                            </v-btn>
                        </template>
                    </DateRangePicker>
                </template>
            </page-header>
            <!-- End of Page Header -->

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
                        <v-chip class="mr-2" v-bind="attrs" v-on="menu" small>
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

                <UserDialogSelector
                    v-if="
                        $store.getters.user.is_admin &&
                            mixin_can('view all users payments')
                    "
                    ref="userDialogSelector"
                    @selectUser="selectUser"
                    @onReset="resetUser"
                    :selectedUser="user"
                    :usersParameters="{ params: { is_superadmin: false } }"
                >
                    <template
                        v-slot:openDialog="{ bind, on, computedSelectedUser }"
                    >
                        <v-chip class="mr-2 mb-2" small v-bind="bind" v-on="on">
                            {{
                                computedSelectedUser
                                    ? computedSelectedUser.name
                                    : "All Employees"
                            }}
                        </v-chip>
                    </template>
                </UserDialogSelector>

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
                    v-show="showMarkAsReceived"
                    close
                    class="mr-2"
                    small
                    @click:close="onUpdate('receive', 'put')"
                    close-icon="mdi-download"
                    color="orange"
                    dark
                >
                    Mark as received
                </v-chip>

                <v-chip
                    v-show="showCancelPayment"
                    close
                    class="mr-2"
                    small
                    @click:close="onUpdate('cancel', 'put')"
                    close-icon="mdi-close"
                    color="red"
                    dark
                >
                    Cancel Payment(s)
                </v-chip>

                <v-chip
                    v-show="showDeletePayment"
                    close
                    class="mr-2"
                    small
                    @click:close="onUpdate('delete', 'delete')"
                    close-icon="mdi-close"
                    color="red"
                    dark
                >
                    Delete Payment(s)
                </v-chip>
            </v-row>

            <v-card-subtitle>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                    @keydown.enter="onSearch"
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
                    show-select
                    show-expand
                    single-expand
                    item-key="id"
                    class="elevation-0"
                >
                    <template v-slot:expanded-item="{ headers, item }">
                        <td :colspan="headers.length">
                            <v-container>
                                <table>
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
                                        <td><strong>Code</strong></td>
                                        <td>:</td>
                                        <td>{{ item.code }}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Reference No.</strong></td>
                                        <td>:</td>
                                        <td>{{ item.reference_no }}</td>
                                    </tr>
                                    <!-- <tr>
                                        <td><strong>Payee</strong></td>
                                        <td>:</td>
                                        <td>{{ item.payee }}</td>
                                    </tr> -->
                                    <tr>
                                        <td><strong>Remarks</strong></td>
                                        <td>:</td>
                                        <td>{{ item.remarks }}</td>
                                    </tr>
                                    <!-- <tr>
                                        <td><strong>Created at</strong></td>
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
                                    <tr v-if="item.deleted">
                                        <td><strong>Deleted</strong></td>
                                        <td>:</td>
                                        <td>
                                            {{
                                                mixin_formatDate(
                                                    item.deleted.deleted_at,
                                                    "YYYY-MM-DD HH:mm:ss"
                                                )
                                            }}
                                        </td>
                                    </tr> -->
                                    <!-- <tr>
                                        <td><strong>Status</strong></td>
                                        <td>:</td>
                                        <td>{{ item.status.remarks }}</td>
                                    </tr> -->
                                </table>
                            </v-container>
                        </td>
                    </template>
                    <template v-slot:[`item.status.status`]="{ item }">
                        <v-chip :color="item.status.color" dark small>{{
                            item.status.status
                        }}</v-chip>
                    </template>
                    <template v-slot:[`item.user`]="{ item }">
                        {{ `${item.user.full_name}` }}
                    </template>
                    <template v-slot:[`item.created_at`]="{ item }">
                        {{ mixin_getHumanDate(item.created_at) }}
                    </template>
                    <template v-slot:[`item.updated_at`]="{ item }">
                        {{ mixin_getHumanDate(item.updated_at) }}
                    </template>
                    <template v-slot:[`item.actions`]="{ item }">
                        <v-icon
                            v-show="item.deleted_at == null"
                            small
                            class="mr-2"
                            @click="onShow(item)"
                        >
                            mdi-eye
                        </v-icon>
                        <v-icon
                            v-show="isValidEdit(item)"
                            small
                            class="mr-2"
                            @click="onEdit(item)"
                        >
                            mdi-pencil
                        </v-icon>
                    </template>
                    <template v-slot:[`item.amount`]="{ item }">
                        {{ mixin_formatNumber(item.amount) }}
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
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import moment from "moment";
import numeral from "numeral";
import PageHeader from "../../../components/page/PageHeader";
import DateRangePicker from "../../../components/datepicker/DateRangePicker";
import UserDialogSelector from "../../../components/selector/dialog/UserDialogSelector";
import PaymentDataService from "../../../services/PaymentDataService";

export default {
    components: {
        DateRangePicker,
        UserDialogSelector,
        PageHeader
    },
    data() {
        return {
            formDataLoaded: false,
            loading: true,
            headers: [
                { text: "Date", value: "date" },
                { text: "Voucher", value: "voucher_no" },
                { text: "Employee", value: "user" },
                { text: "Description", value: "description" },
                { text: "Amount", value: "amount" },
                { text: "Last Updated", value: "updated_at" },
                { text: "Status", value: "status.status" },
                { text: "Actions", value: "actions", sortable: false },
                { text: "", value: "data-table-expand" }
            ],
            totalAmount: 0,
            items: [],
            user:
                this.$store.getters.user.is_admin &&
                this.mixin_can("view all users payments")
                    ? null
                    : this.$store.getters.user,
            status: "All Payments",
            statuses: [
                "All Payments",
                // "All Advance Payments",
                // "Reported Advance Payments",
                // "Unreported Advance Payments",
                "Released Payments",
                "Completed Payments",
                "Cancelled Payments",
                "Deleted Payments"
            ],
            selected: [],
            search: "",
            totalItems: 0,
            options: {
                sortBy: ["updated_at"],
                sortDesc: [true],
                page: 1,
                itemsPerPage: 10
            },
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
            ]
        };
    },
    methods: {
        onSearch() {
            this.getDataFromApi().then(data => {
                this.items = data.items;
                this.totalItems = data.total;
            });
        },
        updateDates(e) {
            this.date_range = e;
        },
        selectUser(e) {
            this.selected = [];
            if (e == null || e == undefined) {
                this.user = null;
                return;
            }
            this.user = e;
        },
        resetUser() {
            this.selected = [];
            this.user = null;
        },
        getDataFromApi() {
            this.loading = true;

            return new Promise((resolve, reject) => {
                const { sortBy, sortDesc, page, itemsPerPage } = this.options;

                let search = this.search.trim().toLowerCase();
                let status = this.status;
                let range = this.date_range;
                let user_id = this.user ? this.user.id : null;

                PaymentDataService.getAll({
                    params: {
                        search: search,
                        sortBy: sortBy[0],
                        sortType: sortDesc[0] ? "desc" : "asc",
                        page: page,
                        itemsPerPage: itemsPerPage,
                        status: status,
                        start_date: range[0],
                        end_date: range[1] ? range[1] : range[0],
                        user_id: user_id
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
        onRefresh() {
            Object.assign(this.$data, this.$options.data.apply(this));
            this.selected = [];
        },
        onShow(item) {
            let params = { id: item.id };

            if (item.deleted_at) {
                params = { id: item.id, isDeleted: true };
            }

            this.$router.push({
                name: "user.payments.show",
                params: params
            });
        },
        onEdit(item) {
            this.$router.push({
                name: "user.payments.edit",
                params: { id: item.id }
            });
        },
        onUpdate(action, method) {
            if (action == "receive" && !this.mixin_can("receive payments")) {
                this.mixin_errorDialog(`Error`, "Not allowed");
                return;
            }

            if (action == "cancel" && !this.mixin_can("cancel payments")) {
                this.mixin_errorDialog(`Error`, "Not allowed");
                return;
            }

            if (this.selected.length == 0) {
                this.mixin_errorDialog("Error", "No item(s) selected");
                return;
            }

            if (
                action == "receive" &&
                this.selected
                    .map(item => item.status.status)
                    .includes("Completed")
            ) {
                this.mixin_errorDialog(
                    "Error",
                    "Payment has already been received"
                );
                return;
            }

            this.$confirm(`Do you want to ${action} payment(s)?`).then(res => {
                if (res) {
                    let ids = this.selected.map(item => {
                        return item.id;
                    });

                    let url = "";

                    switch (action) {
                        // case "release":
                        //     url = `/api/payments/release_payment/${ids}`;
                        //     break;
                        case "receive":
                            url = `/api/payments/receive_payment/${ids}`;
                            break;
                        case "complete":
                            url = `/api/payments/complete_payment/${ids}`;
                            break;
                        case "cancel":
                            url = `/api/payments/cancel_payment/${ids}`;
                            break;
                        // case "update":
                        //     url = `/api/payments/${this.selected[0].id}`;
                        //     break;
                        case "delete":
                            url = `/api/payments/${ids}`;
                            break;
                        default:
                            this.mixin_errorDialog(
                                "Error",
                                "Action can't be processed."
                            );
                            return;
                            break;
                    }

                    axios({
                        method: method,
                        url: url
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
                            this.$store.dispatch("AUTH_NOTIFICATIONS");
                            this.selected = [];
                        })
                        .catch(error => {
                            this.mixin_showErrors(error);
                        });
                }
            });
        },
        isValidEdit(item) {
            if (
                item.deleted_at == null &&
                item.cancelled_at == null &&
                this.$store.getters.user.is_admin
            ) {
                if (
                    item.received_at != null &&
                    !this.mixin_can("edit completed payments")
                ) {
                    return false;
                }

                return true;
            }
            return false;
        }
    },
    computed: {
        showMarkAsReceived() {
            if (!this.selected.length) {
                return false;
            }

            if (
                this.selected.some(
                    item =>
                        item.received_at != null || item.cancelled_at != null
                )
            ) {
                return false;
            }

            return true;
        },
        showDeletePayment() {
            if (!this.selected.length) {
                return false;
            }

            if (!this.$store.getters.user.is_admin) {
                return false;
            }

            if (this.selected.some(item => item.deleted_at != null)) {
                return false;
            }

            return true;
        },
        showCancelPayment() {
            if (!this.selected.length) {
                return false;
            }

            if (!this.$store.getters.user.is_admin) {
                return false;
            }

            if (
                this.selected.some(
                    item => item.deleted_at != null || item.cancelled_at != null
                )
            ) {
                return false;
            }

            return true;
        },
        params(nv) {
            return {
                ...this.options,
                query: this.status,
                query: this.date_range,
                query: this.user
            };
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
    watch: {
        search() {
            if (this.search == "") {
                this.getDataFromApi().then(data => {
                    this.items = data.items;
                    this.totalItems = data.total;
                });
            }
        },
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
        }
    },
    activated() {
        if (this.$route.params.status) {
            this.status = this.$route.params.status;
        }

        if (this.$route.params.date_range) {
            this.date_range = this.$route.params.date_range;
        }

        this.$store.dispatch("AUTH_USER").then(response => {
            this.getDataFromApi().then(data => {
                this.items = data.items;
                this.totalItems = data.total;
            });
        });
    }
};
</script>
