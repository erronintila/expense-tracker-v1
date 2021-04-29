<template>
    <div>
        <loader-component v-if="!formDataLoaded"></loader-component>
        <v-card v-else class="elevation-0 pt-0">
            <!-- Page Header -->
            <page-header :title="'Vendors'">
                <template v-slot:actions> 
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
                </template>
            </page-header>
            <!-- End of Page Header -->

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

                <v-chip
                    v-show="selected.length > 0 && status == 'Inactive'"
                    close
                    class="mr-2 mb-2"
                    small
                    @click:close="onSetActivation(true)"
                    close-icon="mdi-check"
                    color="green"
                    dark
                >
                    Activate
                </v-chip>
                <v-chip
                    v-show="selected.length > 0 && status == 'Active'"
                    close
                    class="mr-2 mb-2"
                    small
                    @click:close="onSetActivation(false)"
                    close-icon="mdi-lock"
                    color="red"
                    dark
                >
                    Deactivate
                </v-chip>

                <v-chip
                    v-show="selected.length > 0 && status == 'Archived'"
                    close
                    class="mr-2 mb-2"
                    small
                    @click:close="onRestore"
                    close-icon="mdi-history"
                    color="green"
                    dark
                >
                    Restore
                </v-chip>

                <v-chip
                    v-show="selected.length > 0 && status == 'Inactive'"
                    close
                    class="mr-2 mb-2"
                    small
                    @click:close="onDelete"
                    close-icon="mdi-trash-can-outline"
                    color="red"
                    dark
                >
                    Archive
                </v-chip>

                <v-chip
                    v-show="mixin_can('export vendors')"
                    close
                    class="mr-2 mb-2"
                    small
                    @click:close="onExport"
                    close-icon="mdi-download"
                    dark
                >
                    Export Data
                </v-chip>
            </v-row>

            <v-card-subtitle>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                    @keydown.enter="onSearch"
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
                            v-if="
                                mixin_can('edit vendors') &&
                                    item.is_active == 1 &&
                                    item.deleted_at == null
                            "
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
import PageHeader from "../../../../components/page/PageHeader";
import VendorDataService from "../../../../services/VendorDataService";

export default {
    props: {},
    components: {
        PageHeader
    },
    data() {
        return {
            formDataLoaded: false,
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
            statuses: ["Active", "Inactive", "Archived"],
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
        onSearch() {
            this.getDataFromApi().then(data => {
                    this.items = data.items;
                    this.totalItems = data.total;
                });
        },
        getDataFromApi() {
            this.loading = true;

            return new Promise((resolve, reject) => {
                const { sortBy, sortDesc, page, itemsPerPage } = this.options;

                let search = this.search.trim().toLowerCase();
                let status = this.status;
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
                        this.loading = false;
                        this.formDataLoaded = true;
                        resolve({ items, total });
                    })
                    .catch(error => {
                        this.mixin_showErrors(error);
                        this.loading = false;
                        this.formDataLoaded = true;
                        reject();
                    });
            });
        },
        onRefresh() {
            Object.assign(this.$data, this.$options.data.apply(this));
            this.selected = [];
        },
        onShow(item) {
            let params = { id: item.id };

            if (item.deleted_at) {
                params = { id: item.id, isDeleted: true };
            }

            this.$router.push({
                name: "admin.vendors.show",
                params: params
            });
        },
        onEdit(item) {
            this.$router.push({
                name: "admin.vendors.edit",
                params: { id: item.id }
            });
        },
        onDelete() {
            if (this.selected.length == 0) {
                this.mixin_errorDialog("Error", "No item(s) selected");
                return;
            }

            this.$confirm("Move item(s) to archive?").then(res => {
                if (res) {
                    let ids = this.selected.map(item => {
                        return item.id;
                    });

                    VendorDataService.delete(ids)
                        .then(response => {
                            this.mixin_successDialog(
                                response.data.status,
                                response.data.message
                            );

                            this.getDataFromApi().then(data => {
                                this.items = data.items;
                                this.totalItems = data.total;
                            });

                            this.selected = [];
                        })
                        .catch(error => {
                            this.mixin_showErrors(error);
                        });
                }
            });
        },
        onRestore() {
            if (this.selected.length == 0) {
                this.mixin_errorDialog("Error", "No item(s) selected");
                return;
            }

            this.$confirm("Do you want to restore account(s)?").then(res => {
                if (res) {
                    let ids = this.selected.map(item => {
                        return item.id;
                    });

                    VendorDataService.restore(ids)
                        .then(response => {
                            this.mixin_successDialog(
                                response.data.status,
                                response.data.message
                            );

                            this.getDataFromApi().then(data => {
                                this.items = data.items;
                                this.totalItems = data.total;
                            });

                            this.selected = [];
                        })
                        .catch(error => {
                            this.mixin_showErrors(error);
                        });
                }
            });
        },
        onSetActivation(is_active) {
            if (this.selected.length == 0) {
                this.mixin_errorDialog("Error", "No item(s) selected");
                return;
            }

            this.$confirm(
                `Do you want to ${
                    is_active ? "activate" : "deactivate"
                } account(s)?`
            ).then(res => {
                if (res) {
                    let ids = this.selected.map(item => {
                        return item.id;
                    });
                    let data = { is_active: is_active };

                    VendorDataService.updateActivation(ids, data)
                        .then(response => {
                            this.mixin_successDialog(
                                response.data.status,
                                response.data.message
                            );
                            this.getDataFromApi().then(data => {
                                this.items = data.items;
                                this.totalItems = data.total;
                            });
                            this.selected = [];
                        })
                        .catch(error => {
                            this.mixin_showErrors(error);
                        });
                }
            });
        },
        onExport() {
            VendorDataService.export()
                .then(response => {
                    window.location.href = "/api/vendors/export/data";
                    this.mixin_successDialog(
                        "Success",
                        "The file was saved to 'Downloads' folder)"
                    );
                })
                .catch(error => this.mixin_showErrors(error));
        }
    },
    computed: {
        params(nv) {
            return {
                ...this.options,
                // query: this.search,
                query: this.status
            };
        }
    },
    watch: {
        search() {
            if (this.search == "") {
                this.getDataFromApi().then(data => {
                    this.items = data.items;
                    this.totalItems = data.total;
                });
            }
        },
        params: {
            immediate: true,
            deep: true,
            handler() {
                this.getDataFromApi().then(data => {
                    this.items = data.items;
                    this.totalItems = data.total;
                });
            }
        }
    },
    // created() {
    //     this.$store.dispatch("AUTH_NOTIFICATIONS");
    // },
    activated() {
        this.$store.dispatch("AUTH_NOTIFICATIONS");
        this.getDataFromApi().then(data => {
            this.items = data.items;
            this.totalItems = data.total;
        });
    }
};
</script>
