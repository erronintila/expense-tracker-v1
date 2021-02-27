<template>
    <div>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <h4 class="title green--text">Vendors</h4>

                <v-spacer></v-spacer>

                <v-tooltip bottom>
                    <template
                        v-slot:activator="{ on, attrs }"
                        v-if="mixin_can('add vendors')"
                    >
                        <v-btn
                            class="elevation-3 mr-2"
                            color="green"
                            :to="{ name: 'admin.vendors.create' }"
                            dark
                            fab
                            x-small
                            v-bind="attrs"
                            v-on="on"
                        >
                            <v-icon dark>mdi-plus</v-icon>
                        </v-btn>
                    </template>
                    <span>Add New</span>
                </v-tooltip>

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
                        <v-list-item @click="onRestore">
                            <v-list-item-icon>
                                <v-icon>mdi-history</v-icon>
                            </v-list-item-icon>
                            <v-list-item-subtitle>
                                Restore
                            </v-list-item-subtitle>
                        </v-list-item>

                        <v-list-item @click="onDelete">
                            <v-list-item-icon>
                                <v-icon>mdi-trash-can-outline</v-icon>
                            </v-list-item-icon>
                            <v-list-item-subtitle>
                                Move to archive
                            </v-list-item-subtitle>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-card-title>

            <v-row class="ml-4">
                <v-chip
                    color="green"
                    dark
                    v-if="selected.length > 0"
                    close
                    class="mr-2 mb-2"
                    small
                    @click:close="selected = []"
                    close-icon="mdi-close"
                >
                    {{ selected.length }} Selected
                </v-chip>
                <v-menu
                    transition="scale-transition"
                    :close-on-content-click="false"
                    :nudge-width="200"
                    offset-y
                    right
                    bottom
                >
                    <template v-slot:activator="{ on: menu, attrs }">
                        <v-chip
                            v-if="status != null"
                            class="mr-2 mb-2"
                            small
                            v-bind="attrs"
                            v-on="menu"
                        >
                            {{ status }}
                        </v-chip>
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

                <v-chip
                    close
                    class="mr-2 mb-2"
                    small
                    @click:close="onRefresh"
                    close-icon="mdi-refresh"
                >
                    Refresh
                </v-chip>
            </v-row>

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
                    show-select
                    show-expand
                    single-expand
                    item-key="id"
                    class="elevation-0"
                >
                    <template v-slot:[`item.is_vat_inclusive`]="{ item }">
                        {{ item.is_vat_inclusive == 1 ? "VAT" : "Non-VAT" }}
                    </template>
                    <template v-slot:[`item.tin`]="{ item }">
                        {{ item.tin == null ? "N/A" : item.tin }}
                    </template>
                    <template v-slot:expanded-item="{ headers, item }">
                        <td :colspan="headers.length">
                            <v-container>
                                <table>
                                    <tr>
                                        <td><strong>Code</strong></td>
                                        <td>:</td>
                                        <td>{{ item.code }}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Email</strong></td>
                                        <td>:</td>
                                        <td>{{ item.email }}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Telephone #</strong></td>
                                        <td>:</td>
                                        <td>{{ item.telephone_number }}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Website</strong></td>
                                        <td>:</td>
                                        <td>{{ item.website }}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Address</strong></td>
                                        <td>:</td>
                                        <td>{{ item.address }}</td>
                                    </tr>
                                </table>
                            </v-container>
                        </td>
                    </template>
                    <template v-slot:[`item.actions`]="{ item }">
                        <v-icon small class="mr-2" @click="onShow(item)">
                            mdi-eye
                        </v-icon>
                        <v-icon
                            small
                            class="mr-2"
                            @click="onEdit(item)"
                            v-if="mixin_can('edit vendors')"
                        >
                            mdi-pencil
                        </v-icon>
                    </template>
                </v-data-table>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import VendorDataService from "../../../../services/VendorDataService";

export default {
    props: {},
    data() {
        return {
            loading: true,
            headers: [
                { text: "Name", value: "name" },
                { text: "Contact", value: "telephone_number" },
                // { text: "Address", value: "address" },
                { text: "TIN", value: "tin" },
                { text: "Type", value: "is_vat_inclusive" },
                // { text: "Updated", value: "updated_at" },
                { text: "Actions", value: "actions", sortable: false },
                { text: "", value: "data-table-expand" }
            ],
            items: [],
            status: "Active",
            statuses: ["Active", "Archived"],
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
            let self = this;

            self.loading = true;

            return new Promise((resolve, reject) => {
                const { sortBy, sortDesc, page, itemsPerPage } = this.options;

                let search = self.search.trim().toLowerCase();
                let status = self.status;
                let data = {
                    params: {
                        search: search,
                        sortBy: sortBy[0],
                        sortType: sortDesc[0] ? "desc" : "asc",
                        page: page,
                        itemsPerPage: itemsPerPage,
                        status: status
                    }
                };

                VendorDataService.getAll(data)
                    .then(response => {
                        let items = response.data.data;
                        let total = response.data.meta.total;

                        self.loading = false;

                        resolve({ items, total });
                    })
                    .catch(error => {
                        console.log(error);
                        console.log(error.response);

                        self.mixin_errorDialog(
                            `Error ${error.response.status}`,
                            error.response.data.message
                        );

                        self.loading = false;
                    });
            });
        },
        onRefresh() {
            Object.assign(this.$data, this.$options.data.apply(this));
            this.selected = [];
        },
        onShow(item) {
            this.$router.push({
                name: "admin.vendors.show",
                params: { id: item.id }
            });
        },
        onEdit(item) {
            this.$router.push({
                name: "admin.vendors.edit",
                params: { id: item.id }
            });
        },
        onDelete() {
            let self = this;

            if (self.selected.length == 0) {
                this.$dialog.message.error("No item(s) selected", {
                    position: "top-right",
                    timeout: 2000
                });
                return;
            }

            this.$confirm("Move item(s) to archive?").then(res => {
                if (res) {
                    let data = {
                        params: {
                            ids: self.selected.map(item => {
                                return item.id;
                            })
                        }
                    };

                    VendorDataService.delete(self.selected[0].id, data)
                        .then(function(response) {
                            self.mixin_successDialog(
                                response.data.status,
                                response.data.message
                            );

                            // self.$dialog.message.success(
                            //     "Item(s) moved to archive.",
                            //     {
                            //         position: "top-right",
                            //         timeout: 2000
                            //     }
                            // );

                            self.getDataFromApi().then(data => {
                                self.items = data.items;
                                self.totalItems = data.total;
                            });

                            self.selected = [];
                        })
                        .catch(function(error) {
                            console.log(error);
                            console.log(error.response);

                            self.mixin_errorDialog(
                                `Error ${error.response.status}`,
                                error.response.data.message
                            );
                        });
                }
            });
        },
        onRestore() {
            let self = this;

            if (self.selected.length == 0) {
                this.mixin_errorDialog("Error", "No item(s) selected");

                return;
            }

            this.$confirm("Do you want to restore account(s)?").then(res => {
                if (res) {
                    let data = {
                        ids: self.selected.map(item => {
                            return item.id;
                        })
                    };

                    VendorDataService.restore(self.selected[0].id, data)
                        .then(function(response) {
                            self.mixin_successDialog(
                                response.data.status,
                                response.data.message
                            );

                            self.getDataFromApi().then(data => {
                                self.items = data.items;
                                self.totalItems = data.total;
                            });

                            self.selected = [];
                        })
                        .catch(function(error) {
                            console.log(error);
                            console.log(error.response);

                            self.mixin_errorDialog(
                                `Error ${error.response.status}`,
                                error.response.data.message
                            );
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
    created() {
        this.$store.dispatch("AUTH_NOTIFICATIONS");
    },
    activated() {
        this.$store.dispatch("AUTH_NOTIFICATIONS");
        this.getDataFromApi().then(data => {
            this.items = data.items;
            this.totalItems = data.total;
        });
    }
};
</script>
