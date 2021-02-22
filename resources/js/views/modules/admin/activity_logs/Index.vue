<template>
    <v-card class="elevation-0 pt-0">
        <v-card-title class="pt-0">
            <h4 class="title green--text">Activity Logs</h4>

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
                                v-model="user"
                                :items="users"
                                label="User"
                                item-value="id"
                                item-text="name"
                                return-object
                                @change="changeUser"
                            >
                                <template slot="item" slot-scope="data">
                                    <v-list max-width="250">
                                        <v-list-item-content>
                                            <v-list-item-title
                                                v-html="data.item.name"
                                            ></v-list-item-title>
                                            <v-list-item-subtitle
                                                v-html="`${data.item.username}`"
                                            ></v-list-item-subtitle>
                                            <v-list-item-subtitle
                                                v-html="data.item.email"
                                            ></v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list>
                                </template>
                            </v-select>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-menu>
        </v-card-title>

        <v-card-subtitle>{{ formattedDateRange }}</v-card-subtitle>

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
            <v-chip v-if="user != null" class="mr-2" small>
                {{ user.name }}
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
        </v-row>

        <v-card-text>
            <v-data-table
                v-model="selected"
                show-select
                item-key="id"
                class="elevation-0"
                single-expand
                show-expand
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
            >
                <template v-slot:[`item.actions`]="{ item }">
                    <v-icon
                        v-if="hasLink(item)"
                        :key="item.id"
                        small
                        class="mr-2"
                        @click="
                            $router.push(
                                hasLink(item)
                                    ? `/admin/${item.properties.custom.link}`
                                    : null
                            )
                        "
                    >
                        mdi-open-in-new
                    </v-icon>
                </template>
                <template v-slot:[`item.user`]="{ item }">
                    {{ item.user == null ? "Default" : item.user.name }}
                </template>
                <template v-slot:expanded-item="{ headers, item }">
                    <td :colspan="headers.length">
                        <v-container :key="item.id">
                            <table
                                v-for="(items, key) in item.properties"
                                :key="items.id"
                            >
                                <div v-if="key == 'attributes'">
                                    <div class="green--text text-capitalize">
                                        {{ key }}
                                    </div>
                                    <tr v-for="(item, key) in items" :key="key">
                                        <td>
                                            <strong>{{ key }}</strong>
                                        </td>
                                        <td>:</td>
                                        <td>{{ item }}</td>
                                    </tr>
                                </div>
                            </table>
                        </v-container>
                    </td>
                </template>
            </v-data-table>
        </v-card-text>

        <Users></Users>
    </v-card>
</template>

<script>
import moment from "moment";
import DateRangePicker from "../../../../components/daterangepicker/DateRangePicker";
import Users from "../../../../components/selector/dialog/Users";

export default {
    components: {
        DateRangePicker,
        Users
    },
    data() {
        return {
            yawa: false,
            loading: true,
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
            ],
            headers: [
                { text: "User", value: "user", sortable: false },
                { text: "Description", value: "description", sortable: false },
                { text: "Created", value: "created_at" },
                { text: "Actions", value: "actions", sortable: false },
                { text: "", value: "data-table-expand" }
            ],
            items: [],
            user: { id: 0, username: "", name: "All Users", email: "" },
            users: [],
            selected: [],
            search: "",
            totalItems: 0,
            options: {
                sortBy: ["created_at"],
                sortDesc: [true],
                page: 1,
                itemsPerPage: 10
            },
            export_data: []
        };
    },
    methods: {
        updateDates(e) {
            this.date_range = e;
        },
        changeUser() {},
        getDataFromApi() {
            this.loading = true;

            return new Promise((resolve, reject) => {
                const { sortBy, sortDesc, page, itemsPerPage } = this.options;

                let search = this.search.trim().toLowerCase();
                let user_id = this.user.id;
                let range = this.date_range;

                axios
                    .get("/api/activity_logs", {
                        params: {
                            search: search,
                            sortBy: sortBy[0],
                            sortType: sortDesc[0] ? "desc" : "asc",
                            page: page,
                            itemsPerPage: itemsPerPage,
                            user_id: user_id,
                            start_date: range[0],
                            end_date: range[1] ? range[1] : range[0]
                        }
                    })
                    .then(response => {
                        let items = response.data.data;
                        let total = response.data.meta.total;

                        this.loading = false;

                        let export_data = items.map(item => ({
                            user:
                                item.user == null ? "Default" : item.user.name,
                            description: item.description,
                            details: item.properties.details,
                            "created at": item.created_at
                        }));

                        this.export_data = export_data;

                        resolve({ items, total });
                    })
                    .catch(error => {
                        console.log(error);
                        console.log(error.response);

                        this.mixin_errorDialog(
                            `Error ${error.response.status}`,
                            error.response.statusText
                        );

                        this.loading = false;
                    });
            });
        },
        loadUsers() {
            axios
                // .get("/api/data/users?only=true")
                .get("/api/users")
                .then(response => {
                    this.users = response.data.data;

                    this.users.unshift({
                        id: 0,
                        username: "",
                        name: "All Users",
                        email: ""
                    });
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);

                    this.mixin_errorDialog(
                        `Error ${error.response.status}`,
                        error.response.statusText
                    );
                });
        },
        onRefresh() {
            Object.assign(this.$data, this.$options.data.apply(this));

            this.loadUsers();

            this.selected = [];
        },
        hasLink(item) {
            // .properties.custom.link
            if (item.properties) {
                if (item.properties.custom) {
                    if (item.properties.custom.link) {
                        return true;
                    }

                    return false;
                }

                return false;
            }

            return false;
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
        }
    },
    computed: {
        params(nv) {
            return {
                ...this.options,
                query: this.search,
                query: this.user,
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
    created() {
        this.loadUsers();
        this.$store.dispatch("AUTH_NOTIFICATIONS");
    },
    activated() {
        this.loadUsers();
        this.$store.dispatch("AUTH_NOTIFICATIONS");
        this.getDataFromApi().then(data => {
            this.items = data.items;
            this.totalItems = data.total;
        });
    }
};
</script>
