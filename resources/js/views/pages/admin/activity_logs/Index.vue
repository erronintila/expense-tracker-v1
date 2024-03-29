<template>
    <div>
        <loader-component v-if="!formDataLoaded"></loader-component>
        <v-card v-else class="elevation-0 pt-0">
            <!-- Page Header -->
            <page-header :title="'Activity Logs'">
                <template v-slot:sub-actions>
                    <DateRangePicker
                        ref="dateRangePicker"
                        :dateRange="filters.date_range"
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
                    v-if="collections.selectedActivityLogs.length > 0"
                    close
                    class="mr-2 mb-2"
                    small
                    @click:close="collections.selectedActivityLogs = []"
                    close-icon="mdi-close"
                >
                    {{ collections.selectedActivityLogs.length }} Selected
                </v-chip>
                <UserDialogSelector
                    ref="userDialogSelector"
                    @selectUser="selectUser"
                    @onReset="resetUser"
                    :selectedUser="filters.selectedUser"
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
                    class="mr-2 mb-2"
                    small
                    @click:close="onReset"
                    close-icon="mdi-refresh"
                >
                    Refresh
                </v-chip>
                <v-chip
                    v-show="mixin_can('export activity logs')"
                    close
                    class="mr-2 mb-2"
                    small
                    @click:close="onExport"
                    close-icon="mdi-download"
                >
                    Export Data
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
                    :loading="!formDataLoaded"
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
                                        ? `/${item.properties.custom.link}`
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
                                        <div
                                            class="green--text text-capitalize"
                                        >
                                            {{ key }}
                                        </div>
                                        <tr
                                            v-for="(item, key) in items"
                                            :key="key"
                                        >
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
    </div>
</template>

<script>
import moment from "moment";
import PageHeader from "../../../../components/page/PageHeader";
import DateRangePicker from "../../../../components/datepicker/DateRangePicker";
import UserDialogSelector from "../../../../components/selector/dialog/UserDialogSelector";
import ActivityLogDataService from "../../../../services/ActivityLogDataService";

export default {
    components: {
        PageHeader,
        DateRangePicker,
        UserDialogSelector
    },
    data() {
        return {
            loading: true,
            formDataLoaded: false,
            collections: {
                activityLogs: [],
                selectedActivityLogs: [],
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
                selectedUser: null,
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
                per_page: 10,
                to: 0,
                total: 0
            }
        };
    },
    methods: {
        updateDates(e) {
            this.filters.date_range = e;
        },
        selectUser(e) {
            this.collections.selectedActivityLogs = [];
            if (e == null || e == undefined) {
                // this.filters.selectedUser = {
                //     id: 0,
                //     username: "",
                //     name: "All Users",
                //     email: ""
                // };
                this.filters.selectedUser = null;
                return;
            }

            this.filters.selectedUser = e;
        },
        resetUser() {
            this.collections.selectedActivityLogs = [];
            this.filters.selectedUser = null;
        },
        getDataFromApi() {
            this.loading = true;

            return new Promise((resolve, reject) => {
                const { sortBy, sortDesc, page, itemsPerPage } = this.options;

                let search = this.filters.search.trim().toLowerCase();
                let user_id = this.filters.selectedUser
                    ? this.filters.selectedUser.id
                    : null;
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
                        this.formDataLoaded = true;
                        resolve(response.data);
                    })
                    .catch(error => {
                        this.mixin_showErrors(error);
                        this.formDataLoaded = true;
                        reject();
                    });
            });
        },
        onReset() {
            Object.assign(this.$data, this.$options.data.apply(this));
            this.collections.selectedActivityLogs = [];
            this.filters.selectedUser = null;
        },
        hasLink(item) {
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
        },
        onExport() {
            let range = this.filters.date_range;
            let data = {
                params: {
                    start_date: range[0],
                    end_date: range[1] ? range[1] : range[0]
                }
            };
            // window.location.href = `api/activity_logs/export/data?start_date=${start_date}&end_date=${end_date}`;
            ActivityLogDataService.export(data)
                .then(response => {
                    window.location.href = `/api/activity_logs/export/data?
                        start_date=${data.params.start_date}&
                        end_date=${data.params.end_date}`;
                    this.mixin_successDialog(
                        "Success",
                        "The file was saved to 'Downloads' folder)"
                    );
                })
                .catch(error => this.mixin_showErrors(error));
        }
    },
    watch: {
        params: {
            immediate: true,
            deep: true,
            handler() {
                this.getDataFromApi().then(data => {
                    this.collections.activityLogs = data.data;
                    this.meta = data.meta;
                });
            }
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
    // created() {
    //     this.$store.dispatch("AUTH_NOTIFICATIONS");
    // },
    activated() {
        this.$store.dispatch("AUTH_NOTIFICATIONS");
        this.getDataFromApi().then(data => {
            this.collections.activityLogs = data.data;
            this.meta = data.meta;
        });
    }
};
</script>
