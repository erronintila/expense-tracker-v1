<template>
    <div>
        <loader-component v-if="!formDataLoaded"></loader-component>
        <v-card v-else class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <h4 class="title green--text">Job Designations</h4>

                <v-spacer></v-spacer>

                <v-tooltip bottom>
                    <template
                        v-slot:activator="{ on, attrs }"
                        v-if="mixin_can('add jobs')"
                    >
                        <v-btn
                            class="elevation-3 mr-2"
                            color="green"
                            :to="{ name: 'admin.jobs.create' }"
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

                <!-- <v-menu offset-y transition="scale-transition" left>
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
                </v-menu> -->
            </v-card-title>

            <v-row class="ml-4">
                <v-chip
                    color="green"
                    dark
                    v-if="collections.selected.length > 0"
                    close
                    class="mr-2 mb-2"
                    small
                    @click:close="collections.selected = []"
                    close-icon="mdi-close"
                >
                    {{ collections.selected.length }} Selected
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
                            v-if="filters.status != null"
                            class="mr-2 mb-2"
                            small
                            v-bind="attrs"
                            v-on="menu"
                        >
                            {{ filters.status }}
                        </v-chip>
                    </template>

                    <v-card>
                        <v-list>
                            <v-list-item>
                                <v-select
                                    v-model="filters.status"
                                    :items="filters.statuses"
                                    label="Status"
                                ></v-select>
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-menu>

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
                            v-if="filters.department != null"
                            class="mr-2 mb-2"
                            small
                            v-bind="attrs"
                            v-on="menu"
                        >
                            {{ filters.department.name }}
                        </v-chip>
                    </template>

                    <v-card>
                        <v-list>
                            <v-list-item>
                                <DepartmentDropdownSelector
                                    ref="departmentDropdownSelector"
                                    :selectedDepartment="filters.department"
                                    :showAll="true"
                                    @onChange="onChangeDepartment"
                                >
                                </DepartmentDropdownSelector>
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
                    v-show="
                        collections.selected.length > 0 &&
                            filters.status == 'Archived'
                    "
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
                    v-show="
                        collections.selected.length > 0 &&
                            filters.status == 'Active'
                    "
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
                    v-model="filters.search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
            </v-card-subtitle>

            <v-card-text>
                <v-data-table
                    :headers="collections.headers"
                    :items="collections.items"
                    :loading="loading"
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
                    v-model="collections.selected"
                    show-select
                    item-key="id"
                    class="elevation-0"
                >
                    <template v-slot:[`item.actions`]="{ item }">
                        <v-icon
                            small
                            class="mr-2"
                            @click="onEdit(item)"
                            v-if="mixin_can('edit jobs')"
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
import JobDataService from "../../../../services/JobDataService";
import DepartmentDropdownSelector from "../../../../components/selector/dropdown/DepartmentDropdownSelector";

export default {
    components: {
        DepartmentDropdownSelector
    },
    data() {
        return {
            formDataLoaded: false,
            loading: true,
            collections: {
                selected: [],
                items: [],
                headers: [
                    { text: "Name", value: "name" },
                    {
                        text: "Department",
                        value: "department.name",
                        sortable: false
                    },
                    { text: "Actions", value: "actions", sortable: false }
                ]
            },
            filters: {
                department: { id: null, name: "All Departments" },
                status: "Active",
                search: "",
                statuses: ["Active", "Archived"]
            },
            options: {
                sortBy: ["name"],
                sortDesc: [false],
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
        onChangeDepartment(value) {
            this.filters.department = value;
        },
        getDataFromApi() {
            this.loading = true;

            return new Promise((resolve, reject) => {
                const { sortBy, sortDesc, page, itemsPerPage } = this.options;

                let search = this.filters.search.trim().toLowerCase();
                let department_id = this.filters.department.id;
                let status = this.filters.status;
                let data = {
                    params: {
                        search: search,
                        sortBy: sortBy[0],
                        sortType: sortDesc[0] ? "desc" : "asc",
                        page: page,
                        itemsPerPage: itemsPerPage,
                        status: status,
                        department_id: department_id
                    }
                };

                JobDataService.getAll(data)
                    .then(response => {
                        this.loading = false;
                        this.formDataLoaded = true;
                        resolve(response.data);
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

            this.collections.selected = [];
        },
        onShow(item) {
            this.$router.push({
                name: "admin.jobs.show",
                params: { id: item.id }
            });
        },
        onEdit(item) {
            this.$router.push({
                name: "admin.jobs.edit",
                params: { id: item.id }
            });
        },
        onDelete() {
            if (this.collections.selected.length == 0) {
                this.mixin_errorDialog("Error", "No item(s) selected");
                return;
            }

            this.$confirm("Move item(s) to archive?").then(res => {
                if (res) {
                    let data = {
                        params: {
                            ids: this.collections.selected.map(item => {
                                return item.id;
                            })
                        }
                    };

                    JobDataService.delete(this.collections.selected[0].id, data)
                        .then(response => {
                            this.mixin_successDialog(
                                response.data.status,
                                response.data.message
                            );
                            this.getDataFromApi().then(data => {
                                this.collections.items = data.data;
                                this.meta = data.meta;
                            });

                            this.collections.selected = [];
                        })
                        .catch(error => {
                            this.mixin_showErrors(error);
                        });
                }
            });
        },
        onRestore() {
            if (this.collections.selected.length == 0) {
                this.mixin_errorDialog("Error", "No item(s) selected");
                return;
            }

            this.$confirm("Do you want to restore account(s)?").then(res => {
                if (res) {
                    let data = {
                        ids: this.collections.selected.map(item => {
                            return item.id;
                        })
                    };

                    JobDataService.restore(
                        this.collections.selected[0].id,
                        data
                    )
                        .then(response => {
                            this.mixin_successDialog(
                                response.data.status,
                                response.data.message
                            );
                            this.getDataFromApi().then(data => {
                                this.collections.items = data.data;
                                this.meta = data.meta;
                            });

                            this.collections.selected = [];
                        })
                        .catch(error => {
                            this.mixin_showErrors(error);
                        });
                }
            });
        }
    },
    watch: {
        params: {
            immediate: true,
            deep: true,
            handler() {
                this.getDataFromApi().then(data => {
                    this.collections.items = data.data;
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
                query: this.filters.status,
                query: this.filters.department
            };
        }
    },
    created() {
        this.$store.dispatch("AUTH_NOTIFICATIONS");
    },
    activated() {
        this.$store.dispatch("AUTH_NOTIFICATIONS");
        this.getDataFromApi().then(data => {
            this.collections.items = data.data;
            this.meta = data.meta;
        });
    }
};
</script>
