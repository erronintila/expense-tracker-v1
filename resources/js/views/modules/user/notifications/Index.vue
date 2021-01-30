<template>
    <div>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <h4 class="title green--text">Notifications</h4>

                <v-spacer></v-spacer>

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
                        <v-list-item @click="onReadUpdate(null, 'read', 'all')">
                            <v-list-item-icon>
                                <v-icon>mdi-credit-card-check-outline</v-icon>
                            </v-list-item-icon>
                            <v-list-item-subtitle>
                                Mark all as read
                            </v-list-item-subtitle>
                        </v-list-item>
                    </v-list>

                    <v-list>
                        <v-list-item
                            @click="onReadUpdate(null, 'read', 'multiple')"
                        >
                            <v-list-item-icon>
                                <v-icon>mdi-credit-card-check-outline</v-icon>
                            </v-list-item-icon>
                            <v-list-item-subtitle>
                                Mark as read
                            </v-list-item-subtitle>
                        </v-list-item>
                    </v-list>

                    <v-list>
                        <v-list-item
                            @click="onReadUpdate(null, 'unread', 'multiple')"
                        >
                            <v-list-item-icon>
                                <v-icon>mdi-credit-card-check-outline</v-icon>
                            </v-list-item-icon>
                            <v-list-item-subtitle>
                                Mark as unread
                            </v-list-item-subtitle>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-card-title>

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
                                            `/${item.data.data.model}/${item.data.data.id}`
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
                    <!-- <template v-slot:[`item.status.status`]="{ item }">
                        <v-chip :color="item.status.color" dark small>{{
                            item.status.status
                        }}</v-chip>
                    </template>
                    <template v-slot:[`item.employee`]="{ item }">
                        {{
                            `${item.employee.last_name}, ${item.employee.first_name} ${item.employee.middle_name}`
                        }}
                    </template>
                    
                    <template v-slot:[`item.updated_at`]="{ item }">
                        {{ mixin_getHumanDate(item.updated_at) }}
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
                    </template> -->
                </v-data-table>

                <v-btn v-if="selected.length > 0" @click="selected = []"
                    >Clear All Selected</v-btn
                >
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
                { text: "Date", value: "created_at" },
                { text: "Employee", value: "data.data.employee.full_name" },
                { text: "Description", value: "description" },
                { text: "Status", value: "status" },
                { text: "Actions", value: "actions", sortable: false },
                { text: "", value: "data-table-expand" }
            ],
            totalAmount: 0,
            items: [],
            status: "All Unread",
            statuses: ["All Unread", "All Read", "All Notifications"],
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
        getDataFromApi() {
            let _this = this;

            _this.loading = true;

            return new Promise((resolve, reject) => {
                const { sortBy, sortDesc, page, itemsPerPage } = this.options;

                let search = _this.search.trim().toLowerCase();
                let status = _this.status;
                let range = _this.date_range;

                axios
                    .get("/api/notifications", {
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
                name: "user.payments.show",
                params: { id: item.id }
            });
        },
        onEdit(item) {
            this.$router.push({
                name: "user.payments.edit",
                params: { id: item.id }
            });
        },
        onReadUpdate(item, action, type) {
            let _this = this;
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

            axios
                .patch(`/api/notifications/${item_id}`, parameters)
                .then(response => {
                    _this.getDataFromApi().then(data => {
                        _this.items = data.items;
                        _this.totalItems = data.total;
                    });

                    _this.$store.dispatch("AUTH_NOTIFICATIONS");

                    _this.selected = [];
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);

                    _this.selected = [];
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
    mounted() {},
    created() {
        this.$store.dispatch("AUTH_NOTIFICATIONS");
    }
};
</script>
