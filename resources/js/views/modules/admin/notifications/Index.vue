<template>
    <div>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <h4 class="title green--text">Notifications</h4>
                <v-spacer></v-spacer>
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

            <v-row class="ml-2">
                <v-col>
                    <v-chip
                        color="green"
                        dark
                        v-show="selected.length > 0"
                        close
                        class="mr-2 mb-2"
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
                                class="mr-2 mb-2"
                                small
                                v-bind="attrs"
                                v-on="menu"
                            >
                                {{ status ? status.text : "" }}
                            </v-chip>
                        </template>
                        <v-card>
                            <ListItemGroup
                                v-model="status"
                                :items="statuses"
                                @onChange="onChangeStatus"
                            >
                                <template v-slot:itemText="{ item }">
                                    {{ item.text }}
                                </template>
                            </ListItemGroup>
                        </v-card>
                    </v-menu>

                    <v-chip
                        close
                        class="mr-2 mb-2"
                        small
                        @click:close="onRefresh"
                        close-icon="mdi-refresh"
                    >
                        Refresh
                    </v-chip>

                    <v-chip
                        v-show="
                            items.filter(item => item.read_at == null).length >
                                0 && selected.length == 0
                        "
                        close
                        class="mr-2 mb-2"
                        small
                        @click:close="onReadUpdate(null, 'read', 'all')"
                        close-icon="mdi-check"
                        color="green"
                        dark
                    >
                        Mark all as read
                    </v-chip>

                    <v-chip
                        v-show="
                            selected.filter(item => item.read_at == null)
                                .length > 0
                        "
                        close
                        class="mr-2 mb-2"
                        small
                        @click:close="onReadUpdate(null, 'read', 'multiple')"
                        close-icon="mdi-check"
                        color="green"
                        dark
                    >
                        Mark as read
                    </v-chip>

                    <v-chip
                        v-show="
                            selected.filter(item => item.read_at != null)
                                .length > 0
                        "
                        close
                        class="mr-2 mb-2"
                        small
                        @click:close="onReadUpdate(null, 'unread', 'multiple')"
                        close-icon="mdi-check"
                        color="red"
                        dark
                    >
                        Mark as unread
                    </v-chip>
                </v-col>
            </v-row>

            <v-card-text>
                <v-data-table
                    :headers="headers"
                    :items="items"
                    :loading="loading"
                    :options.sync="options"
                    :server-items-length="meta.total"
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
                                        <td><strong>Last Updated</strong></td>
                                        <td>:</td>
                                        <td>
                                            {{
                                                mixin_formatDate(
                                                    item.updated_at,
                                                    "YYYY-MM-DD HH:mm:ss"
                                                )
                                            }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>Read at</strong></td>
                                        <td>:</td>
                                        <td>
                                            {{
                                                mixin_formatDate(
                                                    item.read_at,
                                                    "YYYY-MM-DD HH:mm:ss"
                                                )
                                            }}
                                        </td>
                                    </tr>
                                </table>
                            </v-container>
                        </td>
                    </template>
                    <template v-slot:[`item.actions`]="{ item }">
                        <v-tooltip bottom v-if="!item.read_at">
                            <template v-slot:activator="{ on, attrs }">
                                <v-icon
                                    small
                                    class="mr-2"
                                    v-bind="attrs"
                                    v-on="on"
                                    @click="
                                        onReadUpdate(item.id, 'read', 'single')
                                    "
                                >
                                    mdi-check
                                </v-icon>
                            </template>
                            <span>Mark as read</span>
                        </v-tooltip>

                        <v-tooltip bottom v-else>
                            <template v-slot:activator="{ on, attrs }">
                                <v-icon
                                    small
                                    class="mr-2"
                                    v-bind="attrs"
                                    v-on="on"
                                    @click="
                                        onReadUpdate(
                                            item.id,
                                            'unread',
                                            'single'
                                        )
                                    "
                                >
                                    mdi-close
                                </v-icon>
                            </template>
                            <span>Mark as unread</span>
                        </v-tooltip>

                        <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                                <v-icon
                                    small
                                    class="mr-2"
                                    @click="
                                        $router.push(
                                            `/admin/${item.data.data.model}/${item.data.data.id}`
                                        )
                                    "
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    mdi-share
                                </v-icon>
                            </template>
                            <span>Go to link</span>
                        </v-tooltip>
                    </template>
                    <template v-slot:[`item.created_at`]="{ item }">
                        {{
                            mixin_formatDate(
                                item.created_at,
                                "MMM DD, YYYY HH:mm:ss"
                            )
                        }}
                    </template>
                    <template v-slot:[`item.description`]="{ item }">
                        {{ item.data.data.description }} -
                        {{ item.data.data.expense_report.code }}
                    </template>
                    <template v-slot:[`item.status`]="{ item }">
                        <v-chip color="green" v-if="item.read_at" dark small>
                            Read
                        </v-chip>
                        <v-chip color="red" v-else dark small>
                            Unread
                        </v-chip>
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
import NotificationDataService from "../../../../services/NotificationDataService";
import ListItemGroup from "../../../../components/list_item_group/ListItemGroup";

export default {
    components: { DateRangePicker, ListItemGroup },
    data() {
        return {
            loading: true,
            headers: [
                { text: "Date", value: "created_at" },
                { text: "Employee", value: "data.data.user.full_name" },
                { text: "Description", value: "data.data.description" },
                { text: "Status", value: "status" },
                { text: "Actions", value: "actions", sortable: false },
                { text: "", value: "data-table-expand" }
            ],
            totalAmount: 0,
            items: [],
            status: {
                text: "All Unread"
            },
            // status: "All Unread",
            statuses: [
                { text: "All Unread" },
                { text: "All Read" },
                { text: "All Notifications" }
                // "All Unread",
                // "All Read",
                // "All Notifications"
            ],
            selected: [],
            search: "",
            options: {
                sortBy: ["updated_at"],
                sortDesc: [true],
                page: 1,
                itemsPerPage: 10
            },
            meta: {
                current_page: 0,
                from: 0,
                last_page: 0,
                path: "",
                per_page: 10,
                to: 0,
                total: 0
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
        getDataFromApi() {
            this.loading = true;
            return new Promise((resolve, reject) => {
                const { sortBy, sortDesc, page, itemsPerPage } = this.options;
                let search = this.search.trim().toLowerCase();
                let status = this.status?.text;
                let range = this.date_range;
                let data = {
                    params: {
                        search: search,
                        sortBy: sortBy[0],
                        sortType: sortDesc[0] ? "desc" : "asc",
                        page: page,
                        itemsPerPage: itemsPerPage,
                        status: status,
                        start_date: range[0],
                        end_date: range[1] ? range[1] : range[0]
                    }
                };
                NotificationDataService.getAll(data)
                    .then(response => resolve(response.data))
                    .catch(error => {
                        this.mixin_showErrors(error);
                        reject();
                    })
                    .finally(() => (this.loading = false));
            });
        },
        onChangeStatus(value) {
            this.status = value;
        },
        onRefresh() {
            Object.assign(this.$data, this.$options.data.apply(this));
            this.selected = [];
            this.onChangeStatus({ text: "All Unread" });
        },
        onShow(item) {
            this.$router.push({
                name: "admin.payments.show",
                params: { id: item.id }
            });
        },
        onReadUpdate(item, action, type) {
            let parameters = {};
            let item_id = item ? item : this.selected.map(item => item.id)[0];
            switch (type) {
                case "all":
                    if (this.items.length <= 0) {
                        this.mixin_errorDialog(
                            "Error",
                            "No data to be updated."
                        );
                        return;
                    }

                    parameters = {
                        action: action,
                        type: type
                    };
                    break;
                case "multiple":
                    if (this.selected.length <= 0) {
                        this.mixin_errorDialog("Error", "No data selected.");
                        return;
                    }

                    parameters = {
                        action: action,
                        type: type,
                        ids: this.selected.map(item => item.id)
                    };
                    break;
                default:
                    parameters = {
                        action: action,
                        type: type
                    };
                    break;
            }

            NotificationDataService.update(item_id, parameters)
                .then(response => {
                    this.getDataFromApi().then(data => {
                        this.items = data.data;
                        this.meta = data.meta;
                    });
                    this.$store.dispatch("AUTH_NOTIFICATIONS");
                    this.selected = [];
                })
                .catch(error => {
                    console.log(error);
                    this.selected = [];
                });
        }
    },
    computed: {
        params(nv) {
            return {
                ...this.options,
                query: this.search,
                query: this.status,
                query: this.date_range
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
        params: {
            handler() {
                this.getDataFromApi().then(data => {
                    this.items = data.data;
                    this.meta = data.meta;
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
    created() {
        this.$store.dispatch("AUTH_NOTIFICATIONS");
    },
    activated() {
        this.$store.dispatch("AUTH_NOTIFICATIONS");
        // this.getDataFromApi().then(data => {
        //     this.items = data.data;
        //     this.meta = data.meta;
        // });
    }
};
</script>
