<template>
    <v-app>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <h4 class="title green--text">Expenses</h4>

                <v-spacer></v-spacer>

                <v-btn
                    class="elevation-3 mr-2"
                    color="green"
                    to="/admin/expenses/create"
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
                ></v-text-field>
            </v-card-subtitle>

            <v-data-table
                :headers="headers"
                :items="items"
                :search="search"
                v-model="selected"
                show-select
                item-key="id"
                class="elevation-0"
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
        </v-card>
    </v-app>
</template>

<script>
export default {
    props: {},
    data() {
        return {
            headers: [
                { text: "Description", value: "description" },
                { text: "Date", value: "date" },
                { text: "Created", value: "created_at" },
                { text: "Updated", value: "updated_at" },
                { text: "Actions", value: "actions", sortable: false }
            ],
            items: [],
            limit: 500,
            limits: [500, 1000, 5000, "No limit"],
            status: "Active",
            statuses: ["Active", "Archived"],
            selected: [],
            search: ""
        };
    },
    methods: {
        loadItems() {
            let _this = this;
            _this.selected = [];

            axios
                .get("/api/expenses", {
                    params: {
                        status: _this.status,

                        // Exclude limit parameter if limit is equals to 'No limit'
                        ...(_this.limit == "No limit"
                            ? {}
                            : { limit: _this.limit })
                    }
                })
                .then(function(response) {
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
                name: "admin.expenses.show",
                params: { id: item.id }
            });
        },
        onEdit(item) {
            this.$router.push({
                name: "admin.expenses.edit",
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
                        .delete(`/api/expenses/${_this.selected[0].id}`, {
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
                        .put(`/api/expenses/${_this.selected[0].id}`, {
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
        },
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
