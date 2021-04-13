<template>
    <div>
        <loader-component v-if="!formDataLoaded"></loader-component>
        <v-card v-else class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <h4 class="title green--text">Advance Payments</h4>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                    <!-- <template
                        v-slot:activator="{ on, attrs }"
                        v-if="mixin_can('add expense reports')"
                    > -->
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            class="elevation-3 mr-2"
                            color="green"
                            :to="{ name: 'admin.advance_payments.create' }"
                            dark
                            fab
                            x-small
                            v-bind="attrs"
                            v-on="on"
                        >
                            <v-icon dark>mdi-plus</v-icon>
                        </v-btn>
                    </template>
                    <span>Add New Request</span>
                </v-tooltip>
            </v-card-title>

            <v-card-subtitle>
                <DateRangePicker
                    ref="dateRangePicker"
                    :dateRange="date_range"
                    @on-change="updateDates"
                >
                    <template v-slot:openDialog="{ on, attrs, dateRangeText }">
                        <v-btn v-bind="attrs" v-on="on" text class="ml-0 pl-0">
                            {{ dateRangeText }}
                        </v-btn>
                    </template>
                </DateRangePicker>
            </v-card-subtitle>

            <v-row class="ml-4 mb-2">
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
                        <v-chip
                            v-if="status != null"
                            class="mr-2"
                            v-bind="attrs"
                            v-on="menu"
                            small
                        >
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
            </v-row>

            <v-row v-if="selected.length > 0" class="ml-4">
                <v-chip
                    v-if="isValidApprove"
                    close
                    class="mr-2"
                    small
                    @click:close="onApprove"
                    close-icon="mdi-check"
                    color="green"
                    dark
                >
                    Approve
                </v-chip>
                <v-chip
                    close
                    class="mr-2"
                    small
                    @click:close="onReturn('return')"
                    close-icon="mdi-check"
                    color="green"
                    dark
                >
                    Mark as Returned
                </v-chip>
                <v-chip
                    close
                    class="mr-2"
                    small
                    @click:close="onReturn('unreturn')"
                    close-icon="mdi-cancel"
                    color="red"
                    dark
                >
                    Mark as Unreturned
                </v-chip>
                <v-chip
                    v-if="isValidCancel"
                    close
                    class="mr-2"
                    small
                    @click:close="onCancel"
                    close-icon="mdi-cancel"
                    color="red"
                    dark
                >
                    Cancel
                </v-chip>
                <v-chip
                    close
                    class="mr-2"
                    small
                    @click:close="onRestore"
                    close-icon="mdi-restore"
                    color="green"
                    dark
                >
                    Restore
                </v-chip>
                <v-chip
                    v-if="isValidDelete"
                    close
                    class="mr-2"
                    small
                    @click:close="onDelete"
                    close-icon="mdi-close"
                    color="red"
                    dark
                >
                    Delete
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
                    :loading="!formDataLoaded"
                    :options.sync="options"
                    :server-items-length="meta.last_page"
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
                                </table>
                            </v-container>
                        </td>
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
                    </template>
                    <template slot="body.append" v-if="items.length > 0">
                        <tr class="green--text hidden-md-and-up">
                            <td class="title">
                                Total: <strong>{{ `${totalRemainingAmount} / ${totalAmount}` }}</strong>
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
                            <td>
                                <strong>{{ totalRemainingAmount }}</strong>
                            </td>
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
import DateRangePicker from "../../../../components/datepicker/DateRangePicker";
import UserDialogSelector from "../../../../components/selector/dialog/UserDialogSelector";
import AdvancePaymentDataService from "../../../../services/AdvancePaymentDataService";

export default {
    components: {
        DateRangePicker,
        UserDialogSelector
    },
    data() {
        return {
            formDataLoaded: false,
            headers: [
                { text: "Date", value: "date" },
                { text: "CAL No.", value: "cal_no" },
                { text: "Employee", value: "user", sortable: false },
                { text: "Amount", value: "amount", sortable: false },
                { text: "Remaining", value: "remaining_amount", sortable: false },
                { text: "Last Updated", value: "updated_at" },
                { text: "Status", value: "status.status", sortable: false },
                { text: "Actions", value: "actions", sortable: false },
                { text: "", value: "data-table-expand" }
            ],
            items: [],
            meta: {
                current_page: 0,
                from: 0,
                last_page: 0,
                path: "",
                per_page: 10,
                to: 0,
                total: 0
            },
            totalAmount: 0,
            totalRemainingAmount: 0,
            user: null,
            users: [],
            date_range: [
                moment()
                    .startOf("month")
                    .format("YYYY-MM-DD"),
                moment()
                    .endOf("month")
                    .format("YYYY-MM-DD")
            ],
            status: "All Advance Payments",
            statuses: [
                "All Advance Payments",
                "Pending Advance Payments",
                "Approved Advance Payments",
                "Cancelled Advance Payments",
                "Archived Advance Payments"
            ],
            selected: [],
            search: "",
            options: {
                sortBy: ["created_at"],
                sortDesc: [true],
                page: 1,
                itemsPerPage: 10
            }
        };
    },
    methods: {
        selectUser(e) {
            this.selected = [];
            if (e == null || e == undefined) {
                this.user = null;
                return;
            }
            this.user = e;
        },
        onSearch() {
            console.log(this.search);
            this.getDataFromApi().then(data => {
                this.items = data.items;
                this.meta = data.meta;
                this.formDataLoaded = true;
            });
        },
        resetUser() {
            this.selected = [];
            this.user = null;
        },
        updateDates(e) {
            this.date_range = e;
        },
        getDataFromApi() {
            this.loading = true;

            return new Promise((resolve, reject) => {
                const { sortBy, sortDesc, page, itemsPerPage } = this.options;

                let search = this.search.trim().toLowerCase();
                let status = this.status;
                let user_id = this.user ? this.user.id : null;
                let range = this.date_range;

                AdvancePaymentDataService.getAll({
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
                        let meta = response.data.meta;

                        console.log(response.data);
                        this.formDataLoaded = true;
                        resolve({ items, meta });
                    })
                    .catch(error => {
                        this.mixin_showErrors(error);
                        this.formDataLoaded = true;
                        reject();
                    });
            });
        },
        onRefresh() {
            Object.assign(this.$data, this.$options.data.apply(this));
            this.selected = [];
            this.$store.dispatch("AUTH_NOTIFICATIONS");
            this.$store.dispatch("AUTH_SETTINGS");
        },
        onShow(item) {
            let params = { id: item.id };

            if (item.deleted_at) {
                params = { id: item.id, isDeleted: true };
            }

            this.$router.push({
                name: "admin.advance_payments.show",
                params: params
            });
        },
        onEdit(item) {
            // if (item.status.status == "Approved") {
            //     this.mixin_errorDialog("Error", "Report has been approved");
            //     return;
            // }

            // if (item.status.status == "Cancelled") {
            //     this.mixin_errorDialog("Error", "Report has been cancelled");
            //     return;
            // }

            // if (item.status.status == "Paid/Reimbursed") {
            //     this.mixin_errorDialog(
            //         "Error",
            //         "Paid/reimbursed expense report can't be edited"
            //     );
            //     return;
            // }

            this.$router.push({
                name: "admin.advance_payments.edit",
                params: { id: item.id }
            });
        },
        onDelete() {
            // if (
            //     this.selected
            //         .map(item => item.status.status)
            //         .includes("Cancelled")
            // ) {
            //     this.mixin_errorDialog(
            //         "Error",
            //         "Report has already been cancelled"
            //     );
            //     return;
            // }

            // if (
            //     this.selected
            //         .map(item => item.status.status)
            //         .includes("Paid/Reimbursed")
            // ) {
            //     this.mixin_errorDialog(
            //         "Error",
            //         "Paid/reimbursed expense reports can't be cancelled"
            //     );
            //     return;
            // }

            // if (this.selected.length == 0) {
            //     this.mixin_errorDialog("Error", "No item(s) selected");
            //     return;
            // }

            this.$confirm("Do you want to delete advance payment(s)?").then(
                res => {
                    if (res) {
                        let ids = this.selected.map(item => {
                            return item.id;
                        });
                        AdvancePaymentDataService.delete(ids)
                            .then(response => {
                                this.mixin_successDialog(
                                    response.data.status,
                                    response.data.message
                                );
                                this.getDataFromApi().then(data => {
                                    this.items = data.items;
                                    this.meta = data.meta;
                                    this.formDataLoaded = true;
                                });
                                this.selected = [];
                            })
                            .catch(error => {
                                this.mixin_showErrors(error);
                            });
                    }
                }
            );
        },
        onUpdate(action, method) {
            let url = "";
            let ids = this.selected.map(item => {
                return item.id;
            });

            switch (action) {
                case "approve":
                    url = `/api/advance_payments/approve_payment/${ids}`;
                    break;
                case "return":
                    url = `/api/advance_payments/return_payment/${ids}`;
                    break;
                case "unreturn":
                    url = `/api/advance_payments/return_payment/${ids}?unreturn=true`;
                    break;
                case "cancel":
                    url = `/api/advance_payments/cancel_payment/${ids}`;
                    break;
                case "restore":
                    url = `/api/advance_payments/restore/${ids}`;
                    break;
                default:
                    url = `/api/advance_payments/${ids}`;
                    break;
            }

            this.$confirm(`Do you want to ${action} advance payments(s)?`).then(
                res => {
                    if (res) {
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
                                    this.meta = data.meta;
                                    this.formDataLoaded = true;
                                });
                                this.selected = [];
                                this.$store.dispatch("AUTH_NOTIFICATIONS");
                            })
                            .catch(error => {
                                this.mixin_showErrors(error);
                            });
                    }
                }
            );
        },
        onApprove() {
            this.onUpdate("approve", "put");
        },
        onCancel() {
            this.onUpdate("cancel", "put");
        },
        onRestore() {
            this.onUpdate("restore", "put");
        },
        onReturn(action) {
            if(action == "return") {
                this.onUpdate("return", "put");
                return;
            }
            this.onUpdate("unreturn", "put");
        },
        show_edit(item) {
            // let item = null;

            // if (!this.mixin_can("edit advance payments")) {
            //     return false;
            // }

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
            immediate: true,
            deep: true,
            handler() {
                this.getDataFromApi().then(data => {
                    this.items = data.items;
                    this.meta = data.meta;
                    this.formDataLoaded = true;
                });
            }
        },
        search() {
            if(this.search == "") {
                this.getDataFromApi().then(data => {
                    this.items = data.items;
                    this.meta = data.meta;
                    this.formDataLoaded = true;
                });
            }
        },
        items() {
            this.meta.total = this.mixin_formatNumber(
                this.items.reduce((total, item) => total + item.total, 0)
            );

            this.totalAmount = this.mixin_formatNumber(
                this.items.reduce((total, item) => total + item.amount, 0)
            );

            this.totalRemainingAmount = this.mixin_formatNumber(
                this.items.reduce((total, item) => total + item.remaining_amount, 0)
            );
        }
    },
    computed: {
        params(nv) {
            return {
                ...this.options,
                // query: this.search,
                query: this.status,
                query: this.user,
                query: this.date_range
            };
        },
        selectedCount() {
            let approved = this.selected.filter(
                item =>
                    item.approved_at != null &&
                    item.cancelled_at == null &&
                    item.deleted_at == null
            ).length;

            let cancelled = this.selected.filter(
                item => item.cancelled_at != null && item.deleted_at == null
            ).length;

            let deleted = this.selected.filter(item => item.deleted_at != null)
                .length;

            return {
                approved,
                cancelled,
                deleted
            };
        },
        isValidApprove() {
            let selectedCount = this.selected.length;

            if (selectedCount == 0) {
                return false;
            }

            if (
                this.selectedCount.approved > 0 ||
                this.selectedCount.rejected > 0 ||
                this.selectedCount.deleted > 0
            ) {
                return false;
            }

            return true;
        },
        isValidCancel() {
            let selectedCount = this.selected.length;

            if (selectedCount == 0) {
                return false;
            }

            if (
                this.selectedCount.cancelled > 0 ||
                this.selectedCount.deleted > 0
            ) {
                return false;
            }

            return true;
        },
        isValidDelete() {
            let selectedCount = this.selected.length;

            if (selectedCount == 0) {
                return false;
            }

            if (this.selectedCount.deleted > 0) {
                return false;
            }

            return true;
        }
    },
    activated() {
        this.$store.dispatch("AUTH_NOTIFICATIONS");
        this.$store.dispatch("AUTH_SETTINGS");
        this.getDataFromApi().then(data => {
            this.items = data.items;
            this.meta = data.meta;
            this.formDataLoaded = true;
        });
    }
};
</script>
