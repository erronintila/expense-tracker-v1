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
                    <v-list-item>
                        <v-list-item-title>
                            Export to Excel
                        </v-list-item-title>
                    </v-list-item>

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
                v-model="selected"
                show-select
                item-key="id"
                class="elevation-0"
                show-expand
                single-expand
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
                <template v-slot:expanded-item="{ headers, item }">
                    <td :colspan="headers.length">
                        <v-container>
                            {{item}}
                            <!-- <table>
                                <tr>
                                    <td><strong>Expense Report</strong></td>
                                    <td>:</td>
                                    <td>
                                        {{
                                            item.expense_report == null
                                                ? ""
                                                : `${item.expense_report.description} (Code:${item.expense_report.code})`
                                        }}
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>Reimbursable</strong></td>
                                    <td>:</td>
                                    <td>
                                        {{
                                            formatNumber(
                                                item.reimbursable_amount
                                            )
                                        }}
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>Code</strong></td>
                                    <td>:</td>
                                    <td>{{ item.code }}</td>
                                </tr>
                                <tr>
                                    <td><strong>Description</strong></td>
                                    <td>:</td>
                                    <td>{{ item.description }}</td>
                                </tr>
                                <tr>
                                    <td><strong>Receipt</strong></td>
                                    <td>:</td>
                                    <td>{{ item.receipt_number }}</td>
                                </tr>
                                <tr>
                                    <td><strong>Vendor</strong></td>
                                    <td>:</td>
                                    <td>
                                        {{
                                            item.vendor == null
                                                ? ""
                                                : item.vendor.name
                                        }}
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>Remarks</strong></td>
                                    <td>:</td>
                                    <td>{{ item.remarks }}</td>
                                </tr>
                                <tr>
                                    <td><strong>Created</strong></td>
                                    <td>:</td>
                                    <td>
                                        {{
                                            formatDate(
                                                item.created_at,
                                                "YYYY-MM-DD HH:mm:ss"
                                            )
                                        }}
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>Cancelled</strong></td>
                                    <td>:</td>
                                    <td>
                                        {{
                                            formatDate(
                                                item.deleted_at,
                                                "YYYY-MM-DD HH:mm:ss"
                                            )
                                        }}
                                    </td>
                                </tr>
                            </table> -->
                        </v-container>
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
                { text: "User", value: "user.name" },
                { text: "Description", value: "description" },
                { text: "Subject Type", value: "subject_type" },
                { text: "Created", value: "created_at" },
                { text: "", value: "data-table-expand" }
            ],
            items: [],
            status: "Active",
            statuses: ["Active", "Archived"],
            selected: [],
            search: "",
            totalItems: 0,
            options: {
                sortBy: ["created_at"],
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
                    .get("/api/activity_logs", {
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
                        console.log(response);

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
        },
        onDeleteAll() {
            let _this = this;

            this.$confirm("WARNING: Delete All Activity Logs? This action can't be revoked.").then(res => {
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

            this.$confirm("WARNING: Delete selected Activity Log(s)? This action can't be revoked.").then(res => {
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
                        })
                        .catch(function(error) {
                            console.log(error);
                            console.log(error.response);
                        });
                }
            });
        },
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
    created() {
        // axios.defaults.headers.common["Authorization"] =
        //     "Bearer " + localStorage.getItem("access_token");
    }
};
</script>
