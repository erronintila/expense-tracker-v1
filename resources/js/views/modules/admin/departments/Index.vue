<template>
    <div>
        <loader-component v-if="!formDataLoaded"></loader-component>
        <v-card v-else class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <h4 class="title green--text">Departments</h4>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                    <template
                        v-slot:activator="{ on, attrs }"
                        v-if="mixin_can('add departments')"
                    >
                        <v-btn
                            class="elevation-3 mr-2"
                            color="green"
                            :to="{ name: 'admin.departments.create' }"
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
                    v-show="selected.length > 0 && status == 'Active'"
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
                    <template v-slot:[`item.actions`]="{ item }">
                        <!-- <v-icon small class="mr-2" @click="onShow(item)">
                            mdi-eye
                        </v-icon> -->
                        <v-icon
                            small
                            class="mr-2"
                            @click="onEdit(item)"
                            v-if="
                                mixin_can('edit departments') &&
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
import DepartmentDataService from "../../../../services/DepartmentDataService";

export default {
    data() {
        return {
            formDataLoaded: false,
            loading: true,
            headers: [
                { text: "Name", value: "name" },
                { text: "Actions", value: "actions", sortable: false }
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

                DepartmentDataService.getAll(data)
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
            if (this.selected.length == 0) {
                this.mixin_errorDialog("Error", "No item(s) selected");
                return;
            }

            this.$confirm("Move item(s) to archive?").then(res => {
                if (res) {
                    let ids = this.selected.map(item => {
                        return item.id;
                    });

                    DepartmentDataService.delete(ids)
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

                    DepartmentDataService.restore(ids)
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
    watch: {
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
    //     // this.$store.dispatch("AUTH_NOTIFICATIONS");
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
