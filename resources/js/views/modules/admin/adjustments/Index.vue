<template>
    <div>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <h4 class="title green--text">Adjustments</h4>

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
                                <!-- mdi-plus -->
                            </v-icon>
                        </v-btn>
                    </template>

                    <v-list>
                        <v-list-item @click="onCreate('revolving_fund')">
                            <v-list-item-title>
                                Manage Revolving Fund
                            </v-list-item-title>
                        </v-list-item>

                        <v-list-item @click="onDelete">
                            <v-list-item-title>
                                Cancel Adjustment(s)
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
                    <template v-slot:[`item.amount`]="{ item }">
                        {{
                            item.add_amount > 0
                                ? item.add_amount
                                : item.subtract_amount
                        }}
                    </template>
                    <template v-slot:[`item.actions`]="{ item }">
                        <!-- <v-icon small class="mr-2" @click="onShow(item)">
                            mdi-eye
                        </v-icon> -->
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
    data() {
        return {
            loading: true,
            headers: [
                { text: "Reference", value: "reference" },
                { text: "Description", value: "description" },
                { text: "Amount", value: "amount", sortable: false },
                { text: "Last Updated", value: "updated_at" }
            ],
            items: [],
            status: "Active",
            statuses: ["Active", "Cancelled"],
            selected: [],
            search: "",
            totalItems: 0,
            options: {
                sortBy: ["updated_at"],
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
                let status = _this.status;

                axios
                    .get("/api/adjustments", {
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
        onShow(item) {
            this.$router.push({
                name: "admin.adjustments.show",
                params: { id: item.id }
            });
        },
        onEdit(item) {
            this.$router.push({
                name: "admin.adjustments.edit",
                params: { id: item.id }
            });
        },
        onCreate(transaction_type) {
            switch (transaction_type) {
                case "revolving_fund":
                    this.$router.push({
                        name: "admin.adjustments.manage.fund"
                    });
                    break;

                default:
                    break;
            }
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

            this.$confirm("Do you want to cancel adjustment(s)?").then(res => {
                if (res) {
                    axios
                        .delete(`/api/adjustments/${_this.selected[0].id}`, {
                            params: {
                                ids: _this.selected.map(item => {
                                    return item.id;
                                }),
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
    created() {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " + localStorage.getItem("access_token");
    }
};
</script>
