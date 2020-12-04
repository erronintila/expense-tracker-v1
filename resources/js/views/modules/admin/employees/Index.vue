<template>
    <div>
        <v-card class="elevation-0 p-0 m-0" >
            <v-card-title class="pt-0">
                <h4 class="title green--text">Employees</h4>

                <v-spacer></v-spacer>

                <v-tooltip bottom>
                    <template
                        v-slot:activator="{ on, attrs }"
                        v-if="mixin_can('add employees')"
                    >
                        <v-btn
                            class="elevation-3 mr-2"
                            color="green"
                            :to="{ name: 'admin.employees.create' }"
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

                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            class="elevation-3 mr-2"
                            color="green"
                            dark
                            fab
                            x-small
                            @click="onRefresh"
                            v-bind="attrs"
                            v-on="on"
                        >
                            <v-icon dark>mdi-reload</v-icon>
                        </v-btn>
                    </template>
                    <span>Refresh</span>
                </v-tooltip>

                <v-menu
                    transition="scale-transition"
                    :close-on-content-click="false"
                    :nudge-width="200"
                    offset-y
                    left
                    bottom
                    eager
                >
                    <template v-slot:activator="{ on: menu, attrs }">
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on: tooltip }">
                                <v-btn
                                    class="elevation-3 mr-2"
                                    color="green"
                                    dark
                                    fab
                                    x-small
                                    v-bind="attrs"
                                    v-on="{ ...tooltip, ...menu }"
                                >
                                    <v-icon dark>mdi-filter</v-icon>
                                </v-btn>
                            </template>
                            <span>Filter Data</span>
                        </v-tooltip>
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
                            <v-list-item>
                                <!-- <v-select
                                    v-model="department"
                                    :items="departments"
                                    item-text="name"
                                    item-value="id"
                                    label="Department"
                                    @change="loadJobs"
                                ></v-select> -->
                                <DepartmentData
                                    ref="departmentData"
                                    :showAll="true"
                                    @changeData="changeDepartment"
                                ></DepartmentData>
                            </v-list-item>
                            <v-list-item>
                                <JobData
                                    ref="jobData"
                                    :showAll="true"
                                    :department_id="department"
                                    @changeData="changeJob"
                                ></JobData>
                                <!-- <v-select
                                    v-model="job"
                                    :items="jobs"
                                    item-text="name"
                                    item-value="id"
                                    label="Job Designation"
                                ></v-select> -->
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-menu>

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
                            href="/api/employees/export"
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
                    <template v-slot:[`item.actions`]="{ item }">
                        <v-icon
                            small
                            class="mr-2"
                            @click="
                                $router.push({
                                    name: 'admin.employees.show',
                                    params: { id: item.id }
                                })
                            "
                        >
                            mdi-eye
                        </v-icon>
                        <v-icon
                            v-if="mixin_can('edit employees')"
                            small
                            class="mr-2"
                            @click="
                                $router.push({
                                    name: 'admin.employees.edit',
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
                { text: "Job Designation", value: "job.name", sortable: false },
                {
                    text: "Department",
                    value: "job.department.name",
                    sortable: false
                },
                { text: "Revolving Fund", value: "revolving_fund" },
                { text: "Actions", value: "actions", sortable: false },
                { text: "", value: "data-table-expand" }
            ],
            items: [],
            department: 0,
            // departments: [],
            job: 0,
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
        changeDepartment(e) {
            this.department = e.id;
            this.job = null;
            // this.loadJobs();
            this.$refs.jobData.resetData(this.department);
        },
        changeJob(e) {
            this.job = e.id;
        },
        getDataFromApi() {
            let _this = this;

            _this.loading = true;

            return new Promise((resolve, reject) => {
                const { sortBy, sortDesc, page, itemsPerPage } = this.options;

                let search = _this.search.trim().toLowerCase();
                let department_id = _this.department;
                let job_id = _this.job;
                let status = _this.status;

                axios
                    .get("/api/employees", {
                        params: {
                            search: search,
                            sortBy: sortBy[0],
                            sortType: sortDesc[0] ? "desc" : "asc",
                            page: page,
                            itemsPerPage: itemsPerPage,
                            status: status,
                            department_id: department_id,
                            job_id: job_id
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
                    });
            });
        },
        // loadDepartments() {
        //     let _this = this;

        //     axios
        //         .get("/api/data/departments")
        //         .then(response => {
        //             _this.departments = response.data.data;
        //             _this.departments.unshift({
        //                 id: 0,
        //                 name: "All Departments"
        //             });
        //         })
        //         .catch(error => {
        //             console.log(error);
        //             console.log(error.response);
        //         });
        // },
        // loadJobs() {
        //     let _this = this;
        //     axios
        //         .get("/api/data/jobs", {
        //             params: {
        //                 department_id: _this.department
        //             }
        //         })
        //         .then(response => {
        //             _this.jobs = response.data.data;
        //             _this.jobs.unshift({ id: 0, name: "All Job Designations" });

        //             _this.job = 0;
        //         })
        //         .catch(error => {
        //             console.log(error);
        //             console.log(error.response);
        //         });
        // },
        // updateDepartment() {
        //     this.loadJobs();
        // },
        onRefresh() {
            Object.assign(this.$data, this.$options.data.apply(this));

            // this.loadDepartments();
            // this.loadJobs();

            this.$refs.departmentData.resetData();
            this.$refs.jobData.resetData();
        },
        // onShow(item) {
        //     this.$router.push({
        //         name: "admin.employees.show",
        //         params: { id: item.id }
        //     });
        // },
        // onEdit(item) {
        //     this.$router.push({
        //         name: "admin.employees.edit",
        //         params: { id: item.id }
        //     });
        // },
        onEditFund() {
            if (this.selected.length == 0) {
                this.$dialog.message.error("No item(s) selected", {
                    position: "top-right",
                    timeout: 2000
                });
                return;
            }

            this.$router.push(
                `/admin/employees/${this.selected[0].id}/edit/fund`
            );
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
                        .put(`/api/users/${_this.selected[0].user.id}`, {
                            ids: _this.selected.map(item => {
                                return item.user.id;
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
                this.$dialog.message.error("No item(s) selected", {
                    position: "top-right",
                    timeout: 2000
                });
                return;
            }

            this.$confirm("Move item(s) to archive?").then(res => {
                if (res) {
                    axios
                        .delete(`/api/employees/${_this.selected[0].id}`, {
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
                        .put(`/api/employees/${_this.selected[0].id}`, {
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
            axios.get("/api/employees/export");
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
    // mounted() {
    //     this.getDataFromApi().then(data => {
    //         this.items = data.items;
    //         this.totalItems = data.total;
    //     });
    // },
    created() {
        // this.$store.dispatch("AUTH_USER");
    }
};
</script>
