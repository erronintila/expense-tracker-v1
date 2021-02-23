<template>
    <v-card class="elevation-0 pt-0">
        <v-card-title class="pt-0">
            <h4 class="title green--text">Activity Logs</h4>

            <v-spacer></v-spacer>

            <!-- <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        class="elevation-3 mr-2"
                        color="green"
                        dark
                        fab
                        x-small
                        @click="onReset"
                        v-bind="attrs"
                        v-on="on"
                    >
                        <v-icon dark>mdi-reload</v-icon>
                    </v-btn>
                </template>
                <span>Refresh</span>
            </v-tooltip> -->

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
                            <!-- <DateRangePicker
                                :preset="filters.preset"
                                :presets="filters.presets"
                                :value="filters.date_range"
                                @updateDates="updateDates"
                            ></DateRangePicker> -->
                        </v-list-item>
                        <v-list-item>
                            <v-select
                                v-model="filters.selectedUser"
                                :items="collections.users"
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

        <v-card-subtitle>
            <!-- {{ formattedDateRange }} -->
            <DateRangePicker
                :buttonType="true"
                :buttonText="true"
                :buttonColor="'grey'"
                :buttonClass="'ml-0 pl-0'"
                :preset="filters.preset"
                :presets="filters.presets"
                :value="filters.date_range"
                @updateDates="updateDates"
            >
            </DateRangePicker>
            <!-- <v-icon>mdi-calendar-range</v-icon> -->
        </v-card-subtitle>

        <v-row class="ml-4">
            <Users></Users>
            <v-chip
                color="green"
                dark
                v-if="collections.selectedActivityLogs.length > 0"
                close
                class="mr-2"
                small
                @click:close="collections.selectedActivityLogs = []"
                close-icon="mdi-close"
            >
                {{ collections.selectedActivityLogs.length }} Selected
            </v-chip>
            <!-- <v-chip v-if="filters.selectedUser != null" class="mr-2" small>
                {{ filters.selectedUser.name }}
            </v-chip> -->
            <v-chip
                close
                class="mr-2"
                small
                @click:close="onReset"
                close-icon="mdi-refresh"
            >
                Refresh
            </v-chip>
        </v-row>

        <v-card-text>
            <v-data-table
                v-model="collections.selectedActivityLogs"
                show-select
                item-key="id"
                class="elevation-0"
                single-expand
                show-expand
                :headers="collections.headers"
                :items="collections.activityLogs"
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
    </v-card>
</template>

<script>
import moment from "moment";
import DateRangePicker from "../../../../components/daterangepicker/DateRangePicker";
import Users from "../../../../components/selector/dialog/Users";
import ActivityLogDataService from "../../../../services/ActivityLogDataService";
import UserDataService from "../../../../services/UserDataService";
import DataTable from "../../../../components/datatable/DataTable";

export default {
    components: {
        DateRangePicker,
        DataTable,
        Users
    },
    data() {
        return {
            loading: true,
            collections: {
                activityLogs: [],
                selectedActivityLogs: [],
                users: [],
                export_data: [],
                headers: [
                    { text: "User", value: "user", sortable: false },
                    {
                        text: "Description",
                        value: "description",
                        sortable: false
                    },
                    { text: "Created", value: "created_at" },
                    { text: "Actions", value: "actions", sortable: false },
                    { text: "", value: "data-table-expand" }
                ]
            },
            filters: {
                search: "",
                preset: "",
                selectedUser: {
                    id: 0,
                    username: "",
                    name: "All Users",
                    email: ""
                },
                date_range: [
                    moment()
                        .startOf("month")
                        .format("YYYY-MM-DD"),
                    moment()
                        .endOf("month")
                        .format("YYYY-MM-DD")
                ],
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
            },
            options: {
                sortBy: ["created_at"],
                sortDesc: [true],
                page: 1,
                itemsPerPage: 10
            },
            meta: {
                current_page: 0,
                from: 0,
                last_page: 0,
                path: "",
                per_page: "10",
                to: 0,
                total: 0
            }
        };
    },
    methods: {
        updateDates(e) {
            this.filters.date_range = e;
        },
        changeUser() {},
        getDataFromApi() {
            this.loading = true;

            return new Promise((resolve, reject) => {
                const { sortBy, sortDesc, page, itemsPerPage } = this.options;

                let search = this.filters.search.trim().toLowerCase();
                let user_id = this.filters.selectedUser.id;
                let range = this.filters.date_range;
                let data = {
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
                };

                ActivityLogDataService.getAll(data)
                    .then(response => {
                        // console.log(response);
                        // let items = response.data.data;
                        // let meta =  response.data.meta;

                        // let export_data = items.map(item => ({
                        //     user:
                        //         item.user == null ? "Default" : item.user.name,
                        //     description: item.description,
                        //     details: item.properties.details,
                        //     "created at": item.created_at
                        // }));

                        // this.collections.export_data = export_data;

                        resolve(response.data);
                    })
                    .catch(error => {
                        reject();
                        this.mixin_showErrors(error);
                    })
                    .finally(() => {
                        this.loading = false;
                    });
            });
        },
        getUsers() {
            UserDataService.getAll()
                .then(response => {
                    this.collections.users = response.data.data;

                    this.collections.users.unshift({
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
        onReset() {
            Object.assign(this.$data, this.$options.data.apply(this));
            this.getUsers();
            this.collections.selectedActivityLogs = [];
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
                    console.log("fuck", data);
                    this.collections.activityLogs = data.data;
                    this.meta = data.meta;
                });
            },
            deep: true
        }
    },
    computed: {
        params(nv) {
            return {
                ...this.options,
                query: this.filters.search,
                query: this.filters.selectedUser,
                query: this.filters.date_range
            };
        },
        formattedDateRange() {
            let start_date = moment(this.filters.date_range[0]).format(
                "MMM DD, YYYY"
            );
            let end_date = moment(this.filters.date_range[1]).format(
                "MMM DD, YYYY"
            );

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
        this.getUsers();
        this.$store.dispatch("AUTH_NOTIFICATIONS");
    },
    activated() {
        this.getUsers();
        this.$store.dispatch("AUTH_NOTIFICATIONS");
        this.getDataFromApi().then(data => {
            this.collections.activityLogs = data.data;
            this.meta = data.meta;
        });
    }
};
</script>
