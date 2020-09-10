<template>
    <v-app>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <h4 class="title green--text">Departments</h4>

                <v-spacer></v-spacer>

                <v-btn
                    class="elevation-3 mr-2"
                    color="green"
                    to="/admin/departments/create"
                    dark
                    fab
                    x-small
                >
                    <v-icon dark>mdi-plus</v-icon>
                </v-btn>

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
                                    v-model="status"
                                    v-on:change="loadItems"
                                    :items="statuses"
                                    label="Status"
                                ></v-select>
                            </v-list-item>
                            <v-list-item>
                                <v-select
                                    v-model="limit"
                                    v-on:change="loadItems"
                                    :items="limits"
                                    label="Limit rows"
                                ></v-select>
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
                        <v-list-item @click="onRestore">
                            <v-list-item-title>
                                Restore
                            </v-list-item-title>
                        </v-list-item>

                        <v-list-item @click="onDelete">
                            <v-list-item-title>
                                Move to archive
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-card-title>
            <v-card-subtitle>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                    @input="loadItems"
                ></v-text-field>
            </v-card-subtitle>

            <v-card-text>
                <v-data-table
                    :headers="headers"
                    :items="items"
                    :loading="loading"
                    :loading-text="loading_text"
                    v-model="selected"
                    show-select
                    item-key="id"
                    class="elevation-0"
                    :options.sync="pagination"
                    :server-items-length="totalItems"
                >
                    <template v-slot:[`item.actions`]="{ item }">
                        <v-icon small class="mr-2" @click="onShow(item)">
                            mdi-eye
                        </v-icon>
                        <v-icon small class="mr-2" @click="onEdit(item)">
                            mdi-pencil
                        </v-icon>
                    </template>
                </v-data-table>
            </v-card-text>
        </v-card>
    </v-app>
</template>

<script>
export default {
    props: {},
    data() {
        return {
            loading: true,
            loading_text: "Loading items...",
            headers: [
                { text: "Name", value: "name" },
                // { text: "Created", value: "created_at" },
                // { text: "Updated", value: "updated_at" },
                { text: "Actions", value: "actions", sortable: false }
            ],
            items: [],
            limit: 2,
            limits: [2, 5, 500, 1000, 5000, "No limit"],
            status: "Active",
            statuses: ["Active", "Archived"],
            selected: [],

            // sortBy: "",
            // sortType: "",
            // rowsPerPage: "",
            search: "",
            totalItems: 0,
            pagination: {
                // sortBy : "name",
                // descending : false,
                // page : 1,
                // rowsPerPage : 10
                page: 1,
                itemsPerPage: 10,
                sortBy: "name",
                sortDesc: false,
            }
        };
    },
    methods: {
        loadItems() {
            console.log("loaded");

            let _this = this;
            _this.selected = [];

            axios
                .get("/api/departments", {
                    params: {
                        search: _this.search.trim().toLowerCase(),
                        sortBy: _this.pagination.sortBy,
                        sortDesc: _this.pagination.sortDesc,
                        rowsPerPage: _this.pagination.itemsPerPage,
                        status: _this.status,
                        page: _this.pagination.page,

                        // Exclude limit parameter if limit is equals to 'No limit'
                        ...(_this.limit == "No limit"
                            ? {}
                            : { limit: _this.limit })
                    }
                })
                .then(function(response) {
                    console.log(response.data);
                    _this.totalItems = response.data.meta.total;
                    _this.items = response.data.data;
                })
                .catch(function(error) {
                    console.log(error);

                    console.log(error.response);
                });
        },
        onRefresh() {
            this.selected = [];
            this.status = "Active";
            this.limit = 500;
            this.search = "";
            this.loadItems();
        },
        onShow(item) {
            this.$router.push({
                name: "admin.departments.show",
                params: { id: item.id }
            });
        },
        onEdit(item) {
            this.$router.push({
                name: "admin.departments.edit",
                params: { id: item.id }
            });
        },
        onDelete() {
            let _this = this;

            // console.log(_this.selected);

            // return;

            if (_this.selected.length == 0) {
                this.$dialog.message.error("No item(s) selected", {
                    position: "top-right",
                    timeout: 2000
                });
                return;
            }

            this.$confirm("Move item(s) to archive?").then(res => {
                if (res) {
                    axios
                        .delete(`/api/departments/${_this.selected[0].id}`, {
                            params: {
                                ids: _this.selected.map(item => {
                                    return item.id;
                                })
                            }
                        })
                        .then(function(response) {
                            _this.$dialog.message.success(
                                "Item(s) moved to archive.",
                                {
                                    position: "top-right",
                                    timeout: 2000
                                }
                            );
                            _this.loadItems();
                        })
                        .catch(function(error) {
                            console.log(error.response);
                        });
                }
            });
        },
        onRestore() {
            let _this = this;

            if (_this.selected.length == 0) {
                this.$dialog.message.error("No item(s) selected", {
                    position: "top-right",
                    timeout: 2000
                });
                return;
            }

            this.$confirm("Do you want to restore account(s)?").then(res => {
                if (res) {
                    axios
                        .put(`/api/departments/${_this.selected[0].id}`, {
                            ids: _this.selected.map(item => {
                                return item.id;
                            }),
                            action: "restore"
                        })
                        .then(function(response) {
                            _this.$dialog.message.success("Item(s) restored.", {
                                position: "top-right",
                                timeout: 2000
                            });
                            _this.loadItems();
                        })
                        .catch(function(error) {
                            console.log(error.response);
                        });
                }
            });
        }
    },
    watch: {
        items() {
            this.loading = false;
            this.loading_text = "No data available";
        }
    },
    created() {
        // const token = localStorage.getItem("access_token");
        // if (token) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " + localStorage.getItem("access_token");
        // }

        this.loadItems();
    },
    mounted() {}
};
</script>
