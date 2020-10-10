<template>
    <v-card class="elevation-0 pt-0">
        <v-card-title class="pt-0">
            <h4 class="title green--text">Activity Logs</h4>

            <v-spacer></v-spacer>

            <v-btn
                class="elevation-3 mr-2"
                color="green"
                dark
                fab
                x-small
                @click="onRefresh"
            >
                <v-icon dark>mdi-reload</v-icon>
            </v-btn>

            <v-menu
                transition="scale-transition"
                :close-on-content-click="false"
                :nudge-width="200"
                offset-y
                left
                bottom
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        class="elevation-3 mr-2"
                        color="green"
                        dark
                        fab
                        x-small
                        v-bind="attrs"
                        v-on="on"
                    >
                        <v-icon dark>mdi-filter</v-icon>
                    </v-btn>
                </template>

                <v-card>
                    <v-list>
                        <v-list-item>
                            <v-select
                                v-model="user"
                                :items="users"
                                label="User"
                                item-value="id"
                                item-text="name"
                                return-object
                            >
                                <template v-slot:item="data">
                                    <template>
                                        <v-list max-width="300">
                                            <v-list-item-content>
                                                <v-list-item-title
                                                    v-html="data.item.name"
                                                ></v-list-item-title>
                                                <v-list-item-subtitle
                                                    v-html="
                                                        `${
                                                            data.item
                                                                .employee ==
                                                            null
                                                                ? data.item
                                                                      .username
                                                                : data.item
                                                                      .employee
                                                                      .fullname
                                                        }`
                                                    "
                                                ></v-list-item-subtitle>
                                                <v-list-item-subtitle
                                                    v-html="data.item.email"
                                                ></v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list>
                                    </template>
                                </template>
                            </v-select>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-menu>

            <v-menu offset-y transition="scale-transition" left>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        class="elevation-3"
                        color="green"
                        dark
                        fab
                        x-small
                        v-bind="attrs"
                        v-on="on"
                    >
                        <v-icon dark>
                            mdi-format-list-bulleted-square
                        </v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <!-- <v-list-item>
                        <v-list-item-title>
                            Export to Excel
                        </v-list-item-title>
                    </v-list-item> -->

                    <v-list-item @click="onDelete">
                        <v-list-item-title>
                            Delete
                        </v-list-item-title>
                    </v-list-item>

                    <v-list-item @click="onDeleteAll">
                        <v-list-item-title>
                            Delete All
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-card-title>

        <br />

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
                        small
                        class="mr-2"
                        @click="$router.push(item.properties.link)"
                    >
                        mdi-open-in-new
                    </v-icon>
                </template>
                <template v-slot:expanded-item="{ headers, item }">
                    <td :colspan="headers.length">
                        <v-container>
                            <table>
                                <tr
                                    v-for="item in item.properties.attributes"
                                    :key="item.length"
                                >
                                    <td>
                                        <strong>{{ item.text }}</strong>
                                    </td>
                                    <td>:</td>
                                    <td>{{ item.value }}</td>
                                </tr>
                            </table>
                        </v-container>
                        {{ item.length }}
                    </td>
                </template>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            loading: true,
            headers: [
                { text: "User", value: "user.name", sortable: false },
                { text: "Description", value: "description", sortable: false },
                {
                    text: "Details",
                    value: "properties.details",
                    sortable: false
                },
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
            }
        };
    },
    methods: {
        getDataFromApi() {
            let _this = this;

            _this.loading = true;

            return new Promise((resolve, reject) => {
                const { sortBy, sortDesc, page, itemsPerPage } = this.options;

                let search = _this.search.trim().toLowerCase();
                let user_id = _this.user.id;

                axios
                    .get("/api/activity_logs", {
                        params: {
                            search: search,
                            sortBy: sortBy[0],
                            sortType: sortDesc[0] ? "desc" : "asc",
                            page: page,
                            itemsPerPage: itemsPerPage,
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

                        _this.loading = false;
                    });
            });
        },
        loadUsers() {
            let _this = this;

            axios
                .get("/api/data/users")
                .then(response => {
                    _this.users = response.data.data;

                    _this.users.unshift({
                        id: 0,
                        username: "",
                        name: "All Users",
                        email: ""
                    });
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);
                });
        },
        onRefresh() {
            Object.assign(this.$data, this.$options.data.apply(this));

            this.loadUsers();

            this.selected = [];
        },
        onDeleteAll() {
            let _this = this;

            this.$confirm(
                "WARNING: Delete All Activity Logs? This action can't be revoked."
            ).then(res => {
                if (res) {
                    axios
                        .delete(`/api/activity_logs/0`, {
                            params: {
                                delete_all: true
                            }
                        })
                        .then(function(response) {
                            _this.$dialog.message.success(
                                "Deleted All Logs successfully",
                                {
                                    position: "top-right",
                                    timeout: 2000
                                }
                            );

                            _this.getDataFromApi().then(data => {
                                _this.items = data.items;
                                _this.totalItems = data.total;
                            });

                            _this.selected = [];
                        })
                        .catch(function(error) {
                            console.log(error);
                            console.log(error.response);
                        });
                }
            });
        },
        onDelete() {
            let _this = this;

            if (_this.selected.length == 0) {
                this.$dialog.message.error("No item(s) selected", {
                    position: "top-right",
                    timeout: 2000
                });
                return;
            }

            this.$confirm(
                "WARNING: Delete selected Activity Log(s)? This action can't be revoked."
            ).then(res => {
                if (res) {
                    axios
                        .delete(`/api/activity_logs/${_this.selected[0].id}`, {
                            params: {
                                ids: _this.selected.map(item => {
                                    return item.id;
                                })
                            }
                        })
                        .then(function(response) {
                            _this.$dialog.message.success(
                                "Deleted Logs successfully",
                                {
                                    position: "top-right",
                                    timeout: 2000
                                }
                            );

                            _this.getDataFromApi().then(data => {
                                _this.items = data.items;
                                _this.totalItems = data.total;
                            });

                            _this.selected = [];
                        })
                        .catch(function(error) {
                            console.log(error);
                            console.log(error.response);
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
        }
    },
    computed: {
        params(nv) {
            return {
                ...this.options,
                query: this.search,
                query: this.user
            };
        }
    },
    mounted() {
        this.getDataFromApi().then(data => {
            this.items = data.items;
            this.totalItems = data.total;
        });
    },
    created() {
        this.loadUsers();
    }
};
</script>
