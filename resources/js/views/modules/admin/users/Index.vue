<template>
    <div>
        <v-card class="elevation-0 p-0 m-0">
            <v-card-title class="pt-0">
                <h4 class="title green--text">Employees</h4>

                <v-spacer></v-spacer>

                <v-tooltip bottom>
                    <template
                        v-slot:activator="{ on, attrs }"
                        v-if="mixin_can('add users')"
                    >
                        <v-btn
                            class="elevation-3 mr-2"
                            color="green"
                            :to="{ name: 'admin.users.create' }"
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
                        <v-list-item @click="onPasswordReset">
                            <v-list-item-icon>
                                <v-icon>mdi-lock-reset</v-icon>
                            </v-list-item-icon>
                            <v-list-item-subtitle>
                                Reset Password
                            </v-list-item-subtitle>
                        </v-list-item>

                        <v-list-item @click="onEditFund">
                            <v-list-item-icon>
                                <v-icon>mdi-text-box-plus-outline</v-icon>
                            </v-list-item-icon>
                            <v-list-item-subtitle>
                                Edit Revolving Fund
                            </v-list-item-subtitle>
                        </v-list-item>

                        <v-list-item @click="onEditPermissions">
                            <v-list-item-icon>
                                <v-icon>mdi-text-box-plus-outline</v-icon>
                            </v-list-item-icon>
                            <v-list-item-subtitle>
                                Edit Permissions
                            </v-list-item-subtitle>
                        </v-list-item>

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
                    eager
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

                <v-menu
                    transition="scale-transition"
                    :close-on-content-click="false"
                    :nudge-width="200"
                    offset-y
                    right
                    bottom
                    eager
                >
                    <template v-slot:activator="{ on: menu, attrs }">
                        <v-chip
                            class="mr-2 mb-2"
                            v-bind="attrs"
                            v-on="menu"
                            small
                        >
                            {{
                                department ? department.name : "All Departments"
                            }}
                        </v-chip>
                    </template>
                    <v-card>
                        <v-list>
                            <v-list-item>
                                <DepartmentDropdownSelector
                                    v-model="department"
                                    ref="departmentDropdownSelector"
                                    :showAll="true"
                                    :selectedDepartment="department"
                                    @onReset="onResetDepartment"
                                    @onChange="onChangeDepartment"
                                >
                                </DepartmentDropdownSelector>
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
                    eager
                >
                    <template v-slot:activator="{ on: menu, attrs }">
                        <v-chip
                            class="mr-2 mb-2"
                            v-bind="attrs"
                            v-on="menu"
                            small
                        >
                            {{ job ? job.name : "All Job Designations" }}
                        </v-chip>
                    </template>
                    <v-card>
                        <v-list>
                            <v-list-item>
                                <JobDropdownSelector
                                    v-model="job"
                                    ref="jobDropdownSelector"
                                    :showAll="true"
                                    :selectedJob="job"
                                    :selectedDepartment="department"
                                    @onReset="onResetJob"
                                    @onChange="onChangeJob"
                                >
                                </JobDropdownSelector>
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

            <v-row class="ml-4" v-if="selected.length > 0">
                <v-chip
                    v-show="selected.length == 1 && status == 'Active'"
                    close
                    class="mr-2 mb-2"
                    small
                    @click:close="onPasswordReset"
                    close-icon="mdi-lock"
                >
                    Reset Password
                </v-chip>
                <v-chip
                    v-show="selected.length == 1 && status == 'Active'"
                    close
                    class="mr-2 mb-2"
                    small
                    @click:close="onEditFund"
                    close-icon="mdi-credit-card-refund"
                >
                    Edit Revolving Fund
                </v-chip>
                <v-chip
                    v-show="selected.length == 1 && status == 'Active'"
                    close
                    class="mr-2 mb-2"
                    small
                    @click:close="onEditPermissions"
                    close-icon="mdi-account-cog-outline"
                    color="orange"
                    dark
                >
                    Edit Permissions
                </v-chip>
                <v-chip
                    v-show="selected.length > 0 && status == 'Archived'"
                    close
                    class="mr-2 mb-2"
                    small
                    @click:close="onDelete"
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
                    @click:close="onRefresh"
                    close-icon="mdi-trash-can-outline"
                    color="red"
                    dark
                >
                    Archive
                </v-chip>
            </v-row>

            <v-card-subtitle>
                <v-hover v-slot:default="{ hover }">
                    <v-text-field
                        v-model="search"
                        :elevation="hover ? 5 : 2"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                    ></v-text-field>
                </v-hover>
            </v-card-subtitle>

            <v-card-text>
                <v-data-table
                    :headers="headers"
                    :items="items"
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
                    show-expand
                    single-expand
                    v-model="selected"
                    show-select
                    item-key="id"
                    class="elevation-0"
                >
                    <template v-slot:expanded-item="{ headers, item }">
                        <td :colspan="headers.length">
                            <v-container>
                                <table>
                                    <tr>
                                        <td><strong>Gender</strong></td>
                                        <td>:</td>
                                        <td>{{ item.gender }}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Birthdate</strong></td>
                                        <td>:</td>
                                        <td>{{ item.birthdate }}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Email Address</strong></td>
                                        <td>:</td>
                                        <td>{{ item.email }}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Telephone #</strong></td>
                                        <td>:</td>
                                        <td>{{ item.telephone_number }}</td>
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
                    <template v-slot:[`item.revolving_fund`]="{ item }">
                        {{ `${item.remaining_fund} / ${item.fund}` }}
                    </template>
                    <template v-slot:[`item.job`]="{ item }">
                        {{ `${item.job ? item.job.name : ""}` }}
                    </template>
                    <template v-slot:[`item.department`]="{ item }">
                        {{
                            `${
                                item.job
                                    ? item.job.department
                                        ? item.job.department.name
                                        : ""
                                    : ""
                            }`
                        }}
                    </template>
                    <template v-slot:[`item.actions`]="{ item }">
                        <v-icon
                            small
                            class="mr-2"
                            @click="
                                $router.push({
                                    name: 'admin.users.show',
                                    params: { id: item.id }
                                })
                            "
                        >
                            mdi-eye
                        </v-icon>
                        <v-icon
                            v-if="mixin_can('edit users')"
                            small
                            class="mr-2"
                            @click="
                                $router.push({
                                    name: 'admin.users.edit',
                                    params: { id: item.id }
                                })
                            "
                        >
                            mdi-pencil
                        </v-icon>
                    </template>
                    <template slot="body.append" v-if="items.length > 0">
                        <tr class="green--text hidden-md-and-up">
                            <td class="title">
                                Total:
                                <strong
                                    >{{ total_remaining_fund }} /
                                    {{ total_fund }}</strong
                                >
                            </td>
                        </tr>
                        <tr class="green--text hidden-sm-and-down">
                            <td class="title">Total</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <strong
                                    >{{ total_remaining_fund }} /
                                    {{ total_fund }}</strong
                                >
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                    </template>
                </v-data-table>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import UserDataService from "../../../../services/UserDataService";
import DepartmentDropdownSelector from "../../../../components/selector/dropdown/DepartmentDropdownSelector";
import JobDropdownSelector from "../../../../components/selector/dropdown/JobDropdownSelector";

export default {
    props: {},
    components: {
        DepartmentDropdownSelector,
        JobDropdownSelector,
    },
    data() {
        return {
            expanded: [],
            loading: true,

            headers: [
                { text: "Name", value: "full_name" },
                { text: "Job Designation", value: "job", sortable: false },
                {
                    text: "Department",
                    value: "department",
                    sortable: false
                },
                { text: "Revolving Fund", value: "revolving_fund" },
                { text: "Actions", value: "actions", sortable: false },
                { text: "", value: "data-table-expand" }
            ],
            items: [],
            department: null,
            job: null,

            total_fund: 0,
            total_remaining_fund: 0,

            status: "Active",
            statuses: ["Active", "Archived"],
            selected: [],
            search: "",

            collections: {
                headers: [
                    { text: "Name", value: "full_name" },
                    { text: "Job Designation", value: "job", sortable: false },
                    {
                        text: "Department",
                        value: "department",
                        sortable: false
                    },
                    { text: "Revolving Fund", value: "revolving_fund" },
                    { text: "Actions", value: "actions", sortable: false },
                    { text: "", value: "data-table-expand" }
                ],
                selected: [],
                selectedUsers: [],
                statuses: ["Active", "Archived"],
                items: [],
                users: []
            },
            filters: {
                department: { id: null, name: "All Departments" },
                job: { id: null, name: "All Job Designations" },
                search: "",
                status: "Active"
            },
            options: {
                sortBy: ["last_name"],
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
        changeStatus() {},
        onChangeDepartment(e) {
            this.department = e;
        },
        onResetDepartment() {
            this.department = null;
            this.job = null;
        },
        onChangeJob(e) {
            this.job = e;
        },
        onResetJob() {
            this.job = null;
        },
        changeJob(e) {
            this.job = e;
        },
        getDataFromApi() {
            this.loading = true;

            return new Promise((resolve, reject) => {
                const { sortBy, sortDesc, page, itemsPerPage } = this.options;

                let search = this.search.trim().toLowerCase();
                let department_id =
                    this.department == null ? null : this.department.id;
                let job_id = this.job == null ? null : this.job.id;
                let status = this.status;
                let data = {
                    params: {
                        search: search,
                        sortBy: sortBy[0],
                        sortType: sortDesc[0] ? "desc" : "asc",
                        page: page,
                        itemsPerPage: itemsPerPage,
                        status: status,
                        department_id: department_id,
                        job_id: job_id,
                        is_superadmin: false
                    }
                };

                UserDataService.getAll(data)
                    .then(response => {
                        resolve(response.data);
                    })
                    .catch(error => {
                        this.mixin_showErrors(error);
                        reject();
                    })
                    .finally(() => {
                        this.loading = false;
                    });
            });
        },
        onRefresh() {
            Object.assign(this.$data, this.$options.data.apply(this));
            this.onResetDepartment();
            this.onResetJob();

            // this.department = null;
            // this.job = null;
        },
        onEditFund() {
            if (this.selected.length == 0) {
                this.mixin_errorDialog("Error", "No item(s) selected");
                return;
            }
            this.$router.push(`/admin/users/${this.selected[0].id}/edit/fund`);
        },
        onEditPermissions() {
            if (this.selected.length == 0) {
                this.mixin_errorDialog("Error", "No item(s) selected");
                return;
            }
            this.$router.push(
                `/admin/users/${this.selected[0].id}/edit/permissions`
            );
        },
        onPasswordReset() {
            if (this.selected.length == 0) {
                this.mixin_errorDialog("Error", "No item(s) selected");
                return;
            }

            this.$confirm("Do you want to reset password?").then(res => {
                if (res) {
                    let data = {
                        ids: this.selected.map(item => {
                            return item.id;
                        })
                    };
                    UserDataService.resetPassword(this.selected[0].id, data)
                        .then(response => {
                            this.mixin_successDialog(
                                response.data.status,
                                response.data.message
                            );
                            this.getDataFromApi().then(data => {
                                this.items = data.data;
                                this.meta = data.meta;
                            });
                            this.selected = [];
                        })
                        .catch(error => {
                            this.mixin_showErrors(error);
                        });
                }
            });
        },
        onDelete() {
            if (this.selected.length == 0) {
                this.mixin_errorDialog("Error", "No item(s) selected");
                return;
            }

            this.$confirm("Move item(s) to archive?").then(res => {
                if (res) {
                    let data = {
                        params: {
                            ids: this.selected.map(item => {
                                return item.id;
                            })
                        }
                    };
                    UserDataService.delete(this.selected[0].id, data)
                        .then(response => {
                            this.mixin_successDialog(
                                response.data.status,
                                response.data.message
                            );
                            this.getDataFromApi().then(data => {
                                this.items = data.data;
                                this.meta = data.meta;
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
                    let data = {
                        ids: this.selected.map(item => {
                            return item.id;
                        })
                    };
                    UserDataService.restore(this.selected[0].id, data)
                        .then(response => {
                            this.mixin_successDialog(
                                response.data.status,
                                response.data.message
                            );
                            this.getDataFromApi().then(data => {
                                this.items = data.data;
                                this.meta = data.meta;
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
            UserDataService.export();
        }
    },
    watch: {
        params: {
            handler() {
                this.getDataFromApi().then(data => {
                    this.items = data.data;
                    this.meta = data.meta;

                    this.total_fund = this.mixin_formatNumber(
                        data.data.reduce((total, item) => total + item.fund, 0)
                    );

                    this.total_remaining_fund = this.mixin_formatNumber(
                        data.data.reduce(
                            (total, item) => total + item.remaining_fund,
                            0
                        )
                    );
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
                query: this.status,
                query: this.department,
                query: this.job
            };
        }
    },
    created() {
        this.$store.dispatch("AUTH_USER");
        this.$store.dispatch("AUTH_NOTIFICATIONS");
    },
    activated() {
        this.$store.dispatch("AUTH_USER");
        this.$store.dispatch("AUTH_NOTIFICATIONS");
        this.getDataFromApi().then(data => {
            this.items = data.data;
            this.meta = data.meta;
        });
    }
};
</script>
