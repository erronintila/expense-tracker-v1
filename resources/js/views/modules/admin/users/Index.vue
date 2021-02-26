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
                        <!-- <v-list-item
                            @click="onExport"
                            href="/api/users/export"
                        >
                            <v-list-item-icon>
                                <v-icon>mdi-lock-reset</v-icon>
                            </v-list-item-icon>
                            <v-list-item-subtitle>
                                Export to Excel
                            </v-list-item-subtitle>
                        </v-list-item> -->

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
                </v-menu>
            </v-card-title>

            <v-row class="ml-4">
                <v-chip
                    color="green"
                    dark
                    v-if="selected.length > 0"
                    close
                    class="mr-2"
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
                            v-if="status != null"
                            class="mr-2"
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
                            v-if="department != null"
                            class="mr-2"
                            v-bind="attrs"
                            v-on="menu"
                            small
                        >
                            {{ department.name }}
                        </v-chip>
                    </template>
                    <v-card>
                        <v-list>
                            <v-list-item>
                                <DepartmentData
                                    ref="departmentData"
                                    :showAll="true"
                                    @changeData="changeDepartment"
                                ></DepartmentData>
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
                            v-if="job != null"
                            class="mr-2"
                            v-bind="attrs"
                            v-on="menu"
                            small
                        >
                            {{ job.name }}
                        </v-chip>
                    </template>
                    <v-card>
                        <v-list>
                            <v-list-item>
                                <JobData
                                    ref="jobData"
                                    :showAll="true"
                                    :department_id="department.id"
                                    @changeData="changeJob"
                                ></JobData>
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-menu>

                <v-chip
                    close
                    class="mr-2"
                    small
                    @click:close="onRefresh"
                    close-icon="mdi-refresh"
                >
                    Refresh
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
                    :server-items-length="totalItems"
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
import DepartmentData from "../../../../components/selector/dropdown/Departments";
import JobData from "../../../../components/selector/dropdown/Jobs";

export default {
    props: {},
    components: {
        DepartmentData,
        JobData
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
            department: { id: null, name: "All Departments" },
            // departments: [],
            job: { id: null, name: "All Job Designations" },
            jobs: [],
            total_fund: 0,
            total_remaining_fund: 0,
            status: "Active",
            statuses: ["Active", "Archived"],
            selected: [],
            search: "",
            totalItems: 0,
            options: {
                sortBy: ["last_name"],
                sortDesc: [false],
                page: 1,
                itemsPerPage: 10
            }
        };
    },
    methods: {
        changeStatus() {},
        changeDepartment(e) {
            this.department = e;
            this.job = { id: null, name: "All Job Designations" };
            this.$refs.jobData.resetData(this.department.id);
        },
        changeJob(e) {
            this.job = e;
        },
        getDataFromApi() {
            let _this = this;

            _this.loading = true;

            return new Promise((resolve, reject) => {
                const { sortBy, sortDesc, page, itemsPerPage } = this.options;

                let search = _this.search.trim().toLowerCase();
                let department_id =
                    _this.department == null ? null : _this.department.id;
                let job_id = _this.job == null ? null : _this.job.id;
                let status = _this.status;

                axios
                    .get("/api/users", {
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

                        _this.mixin_errorDialog(
                            `Error ${error.response.status}`,
                            error.response.statusText
                        );

                        _this.loading = false;

                        reject();
                    });
            });
        },
        onRefresh() {
            Object.assign(this.$data, this.$options.data.apply(this));

            this.$refs.departmentData.resetData();
            this.$refs.jobData.resetData();
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
            let _this = this;

            if (_this.selected.length == 0) {
                this.mixin_errorDialog("Error", "No item(s) selected");

                return;
            }

            this.$confirm("Do you want to reset password?").then(res => {
                if (res) {
                    axios
                        .put(
                            `/api/users/reset_password/${_this.selected[0].id}`,
                            {
                                ids: _this.selected.map(item => {
                                    return item.id;
                                })
                                // action: "password_reset"
                            }
                        )
                        .then(function(response) {
                            _this.mixin_successDialog(
                                response.data.status,
                                response.data.message
                            );

                            _this.getDataFromApi().then(data => {
                                _this.items = data.items;
                                _this.totalItems = data.total;
                            });

                            // _this.$store.dispatch("AUTH_USER");

                            _this.selected = [];
                        })
                        .catch(function(error) {
                            console.log(error);
                            console.log(error.response);

                            _this.mixin_errorDialog(
                                `Error ${error.response.status}`,
                                error.response.statusText
                            );
                        });
                }
            });
        },
        onDelete() {
            let _this = this;

            if (_this.selected.length == 0) {
                this.mixin_errorDialog("Error", "No item(s) selected");

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
                            _this.mixin_successDialog(
                                response.data.status,
                                response.data.message
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

                            let statusText = error.response.data
                                ? error.response.data.message
                                    ? error.response.data.message
                                    : ""
                                : error.response.statusText;

                            _this.mixin_errorDialog(
                                `Error ${error.response.status}`,
                                statusText
                            );
                        });
                }
            });
        },
        onRestore() {
            let _this = this;

            if (_this.selected.length == 0) {
                this.mixin_errorDialog("Error", "No item(s) selected");

                return;
            }

            this.$confirm("Do you want to restore account(s)?").then(res => {
                if (res) {
                    axios
                        .put(`/api/users/restore/${_this.selected[0].id}`, {
                            ids: _this.selected.map(item => {
                                return item.id;
                            })
                            // action: "restore"
                        })
                        .then(function(response) {
                            _this.mixin_successDialog(
                                response.data.status,
                                response.data.message
                            );

                            _this.getDataFromApi().then(data => {
                                _this.items = data.items;
                                _this.totalItems = data.total;
                            });

                            // _this.$store.dispatch("AUTH_USER");

                            _this.selected = [];
                        })
                        .catch(function(error) {
                            console.log(error);
                            console.log(error.response);

                            _this.mixin_errorDialog(
                                `Error ${error.response.status}`,
                                error.response.statusText
                            );
                        });
                }
            });
        },
        onExport() {
            // this.$store.dispatch("AUTH_USER");
            axios.get("/api/users/export");
        }
    },
    watch: {
        params: {
            handler() {
                this.getDataFromApi().then(data => {
                    this.items = data.items;
                    this.totalItems = data.total;

                    this.total_fund = this.mixin_formatNumber(
                        data.items.reduce((total, item) => total + item.fund, 0)
                    );

                    this.total_remaining_fund = this.mixin_formatNumber(
                        data.items.reduce(
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
            this.items = data.items;
            this.totalItems = data.total;
        });
    }
};
</script>
