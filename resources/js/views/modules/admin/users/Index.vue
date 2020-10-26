<template>
    <div>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <h4 class="title green--text">Users</h4>

                <v-spacer></v-spacer>

                <v-btn
                    class="elevation-3 mr-2"
                    color="green"
                    :to="{ name: 'admin.users.create' }"
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
                                    :items="statuses"
                                    label="Status"
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
                        <v-list-item @click="onVerify">
                            <v-list-item-title>
                                Verify Account(s)
                            </v-list-item-title>
                        </v-list-item>

                        <v-list-item @click="onPasswordReset">
                            <v-list-item-title>
                                Reset Password
                            </v-list-item-title>
                        </v-list-item>

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

                        <!-- <v-list-item to="/admin/roles">
                            <v-list-item-title>
                                Roles & Permissions
                            </v-list-item-title>
                        </v-list-item> -->

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
                    show-expand
                    single-expand
                    show-select
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
                                        <td>{{ item.created_at }}</td>
                                    </tr>
                                </table>
                            </v-container>
                        </td>
                    </template>
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
    </div>
</template>

<script>
export default {
    props: {},
    data() {
        return {
            loading: true,
            headers: [
                { text: "Name", value: "name" },
                { text: "Username", value: "username" },
                { text: "Email", value: "email" },
                // { text: "Created", value: "created_at" },
                // { text: "Updated", value: "updated_at" },
                { text: "Actions", value: "actions", sortable: false },
                { text: "", value: "data-table-expand" }
            ],
            items: [],
            status: "Verified",
            statuses: ["Verified", "Unverified", "Archived"],
            selected: [],
            search: "",
            totalItems: 0,
            options: {
                sortBy: ["name"],
                sortDesc: [false],
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
                let status = _this.status;

                axios
                    .get("/api/users", {
                        params: {
                            search: search,
                            sortBy: sortBy[0],
                            sortType: sortDesc[0] ? "desc" : "asc",
                            page: page,
                            itemsPerPage: itemsPerPage,
                            status: status
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
        onRefresh() {
            Object.assign(this.$data, this.$options.data.apply(this));

            this.selected = [];
        },
        onShow(item) {
            this.$router.push({
                name: "admin.users.show",
                params: { id: item.id }
            });
        },
        onEdit(item) {
            this.$router.push({
                name: "admin.users.edit",
                params: { id: item.id }
            });
        },
        onPasswordReset() {
            let _this = this;

            if (_this.selected.length == 0) {
                this.$dialog.message.error("No item(s) selected", {
                    position: "top-right",
                    timeout: 2000
                });
                return;
            }

            this.$confirm("Do you want to reset password?").then(res => {
                if (res) {
                    axios
                        .put(`/api/users/${_this.selected[0].id}`, {
                            ids: _this.selected.map(item => {
                                return item.id;
                            }),
                            action: "password_reset"
                        })
                        .then(function(response) {
                            _this.$dialog.message.success(
                                "Password reset successfully. (Default: password)",
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
                        .delete(`/api/users/${_this.selected[0].id}`, {
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
                        .put(`/api/users/${_this.selected[0].id}`, {
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
        onVerify() {
            let _this = this;

            if (_this.selected.length == 0) {
                this.$dialog.message.error("No item(s) selected", {
                    position: "top-right",
                    timeout: 2000
                });
                return;
            }

            this.$confirm("Do you want to verify account(s)?").then(res => {
                if (res) {
                    axios
                        .put(`/api/users/${_this.selected[0].id}`, {
                            ids: _this.selected.map(item => {
                                return item.id;
                            }),
                            action: "verify"
                        })
                        .then(function(response) {
                            _this.$dialog.message.success("Item(s) verified.", {
                                position: "top-right",
                                timeout: 2000
                            });
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
                query: this.status
            };
        }
    },
    mounted() {
        this.getDataFromApi().then(data => {
            this.items = data.items;
            this.totalItems = data.total;
        });
    },
};
</script>
