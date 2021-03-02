<template>
    <div>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <h4 class="title green--text">Payment Records</h4>

                <v-spacer></v-spacer>

                <v-tooltip bottom>
                    <template
                        v-slot:activator="{ on, attrs }"
                        v-if="mixin_can('add payments')"
                    >
                        <v-btn
                            class="elevation-3 mr-2"
                            color="green"
                            :to="{ name: 'admin.payments.create' }"
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
            </v-card-title>

            <v-card-subtitle>
                <DateRangePicker
                    :buttonType="true"
                    :buttonText="true"
                    :buttonColor="'grey'"
                    :buttonClass="'ml-0 pl-0'"
                    :preset="preset"
                    :presets="presets"
                    :value="date_range"
                    @updateDates="updateDates"
                >
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
                    v-show="
                        selected.length > 0 &&
                            selected.filter(item => item.received_at == null)
                                .length > 0
                    "
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
                    v-show="
                        selected.length > 0 &&
                            selected.filter(item => item.deleted_at == null)
                                .length > 0
                    "
                    close
                    class="mr-2"
                    small
                    @click:close="onUpdate('cancel', 'delete')"
                    close-icon="mdi-close"
                    color="red"
                    dark
                >
                    Cancel Payment(s)
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
                                    <tr>
                                        <td><strong>Voucher No.</strong></td>
                                        <td>:</td>
                                        <td>{{ item.voucher_no }}</td>
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
                        <!-- <v-icon small class="mr-2" @click="onEdit(item)">
                            mdi-pencil
                        </v-icon> -->
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
import DateRangePicker from "../../../../components/daterangepicker/DateRangePicker";

export default {
    components: { DateRangePicker },
    data() {
        return {
            loading: true,
            headers: [
                { text: "Date", value: "date" },
                { text: "User", value: "user" },
                { text: "Description", value: "description" },
                { text: "Amount", value: "amount" },
                { text: "Last Updated", value: "updated_at" },
                { text: "Status", value: "status.status" },
                { text: "Actions", value: "actions", sortable: false },
                { text: "", value: "data-table-expand" }
            ],
            totalAmount: 0,
            items: [],
            user: { id: 0, full_name: "All Users" },
            users: [],
            status: "All Payments",
            statuses: [
                "All Payments",
                // "All Advance Payments",
                // "Reported Advance Payments",
                // "Unreported Advance Payments",
                "Released Payments",
                "Completed Payments",
                "Cancelled Payments"
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
        updateDates(e) {
            this.date_range = e;
        },
        loadUsers() {
            let _this = this;

            axios
                .get("/api/data/users?only=true")
                .then(response => {
                    _this.users = response.data.data;
                    _this.users.unshift({
                        id: 0,
                        full_name: "All Users"
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
        getDataFromApi() {
            let _this = this;

            _this.loading = true;

            return new Promise((resolve, reject) => {
                const { sortBy, sortDesc, page, itemsPerPage } = this.options;

                let search = _this.search.trim().toLowerCase();
                let status = _this.status;
                let range = _this.date_range;
                let user_id = _this.user.id;

                axios
                    .get("/api/payments", {
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
            this.loadUsers();
        },
        onShow(item) {
            this.$router.push({
                name: "admin.payments.show",
                params: { id: item.id }
            });
        },
        onEdit(item) {
            this.$router.push({
                name: "admin.payments.edit",
                params: { id: item.id }
            });
        },
        // onDelete() {
        //     let _this = this;

        //     if (_this.selected.length == 0) {
        //         this.$dialog.message.error("No item(s) selected", {
        //             position: "top-right",
        //             timeout: 2000
        //         });
        //         return;
        //     }

        //     this.$confirm("do you want to cancel payment?").then(res => {
        //         if (res) {
        //             axios
        //                 .delete(`/api/payments/${_this.selected[0].id}`, {
        //                     params: {
        //                         ids: _this.selected.map(item => {
        //                             return item.id;
        //                         })
        //                     }
        //                 })
        //                 .then(function(response) {
        //                     _this.$dialog.message.success(
        //                         "Item(s) moved to archive.",
        //                         {
        //                             position: "top-right",
        //                             timeout: 2000
        //                         }
        //                     );
        //                     _this.getDataFromApi().then(data => {
        //                         _this.items = data.items;
        //                         _this.totalItems = data.total;
        //                     });
        //                 })
        //                 .catch(function(error) {
        //                     console.log(error);
        //                      console.log(error.response);
        //                 });
        //         }
        //     });
        // },
        onUpdate(action, method) {
            let _this = this;

            if (action == "receive" && !this.mixin_can("receive payments")) {
                _this.mixin_errorDialog(`Error`, "Not allowed");

                return;
            }

            if (_this.selected.length == 0) {
                this.$dialog.message.error("No item(s) selected", {
                    position: "top-right",
                    timeout: 2000
                });
                return;
            }

            if (
                action == "receive" &&
                this.selected
                    .map(item => item.status.status)
                    .includes("Completed")
            ) {
                this.$dialog.message.error(
                    "Payment has already been received",
                    {
                        position: "top-right",
                        timeout: 2000
                    }
                );
                return;
            }

            this.$confirm(`Do you want to ${action} payment(s)?`).then(res => {
                if (res) {
                    let ids = _this.selected.map(item => {
                        return item.id;
                    });

                    let url = "";

                    switch (action) {
                        case "release":
                            url = `/api/payments/release_payment/${_this.selected[0].id}`;
                            break;
                        case "receive":
                            url = `/api/payments/receive_payment/${_this.selected[0].id}`;
                            break;
                        case "complete":
                            url = `/api/payments/complete_payment/${_this.selected[0].id}`;
                            break;
                        case "update":
                            url = `/api/payments/${_this.selected[0].id}`;
                            break;
                        case "cancel":
                            url = `/api/payments/${_this.selected[0].id}`;
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
                        url: url,
                        data: {
                            ids: ids
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

                            // _this.$store.dispatch("AUTH_USER");
                            _this.$store.dispatch("AUTH_NOTIFICATIONS");

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
            });
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
                this.items.reduce((total, item) => total + item.amount, 0)
            );
        }
    },
    computed: {
        params(nv) {
            return {
                ...this.options,
                query: this.search,
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
    // mounted() {
    //     this.getDataFromApi().then(data => {
    //         this.items = data.items;
    //         this.totalItems = data.total;
    //     });
    // },
    created() {
        // this.$store.dispatch("AUTH_USER");
        this.$store.dispatch("AUTH_NOTIFICATIONS");
        this.loadUsers();
    },
    activated() {
        this.$store.dispatch("AUTH_NOTIFICATIONS");
        this.loadUsers();
        this.getDataFromApi().then(data => {
            this.items = data.items;
            this.totalItems = data.total;
        });
    }
};
</script>
