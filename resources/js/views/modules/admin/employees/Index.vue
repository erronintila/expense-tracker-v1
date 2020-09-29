<template>
    <div>
        <v-card class="elevation-0 p-0 m-0">
            <v-card-title class="pt-0">
                <h4 class="title green--text">Employees</h4>

                <v-spacer></v-spacer>

                <v-btn
                    class="elevation-3 mr-2"
                    color="green"
                    to="/admin/employees/create"
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
                            <v-list-item>
                                <v-select
                                    v-model="department"
                                    :items="departments"
                                    item-text="name"
                                    item-value="id"
                                    label="Department"
                                    @change="loadJobs"
                                ></v-select>
                            </v-list-item>
                            <v-list-item>
                                <v-select
                                    v-model="job"
                                    :items="jobs"
                                    item-text="name"
                                    item-value="id"
                                    label="Job Designation"
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
                        <!-- <v-list-item @click="onRestore">
                            <v-list-item-title>
                                Manage Revolving Fund
                            </v-list-item-title>
                        </v-list-item> -->

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
            expanded: [],
            loading: true,
            headers: [
                { text: "Name", value: "fullname" },
                // { text: "First Name", value: "first_name" },
                { text: "Job Designation", value: "job.name" },
                { text: "Department", value: "department.name" },
                { text: "Revolving Fund", value: "revolving_fund" },
                // { text: "Contact", value: "mobile_number" },
                // { text: "Created", value: "created_at" },
                // { text: "Updated", value: "updated_at" },
                { text: "Actions", value: "actions", sortable: false },
                { text: "", value: "data-table-expand" }
            ],
            items: [],
            department: 0,
            departments: [],
            job: 0,
            jobs: [],
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

                        _this.loading = false;
                    });
            });
        },
        loadDepartments() {
            let _this = this;

            axios
                .get("/api/data/departments")
                .then(response => {
                    _this.departments = response.data.data;
                    _this.departments.unshift({ id: 0, name: "All Departments" });
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);
                });
        },
        loadJobs() {
            let _this = this;
            axios
                .get("/api/data/jobs", {
                    params: {
                        department_id: _this.department
                    }
                })
                .then(response => {
                    _this.jobs = response.data.data;
                    _this.jobs.unshift({ id: 0, name: "All Job Designations" });

                    _this.job = 0;
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);
                });
        },
        updateDepartment() {
            this.loadJobs();
        },
        onRefresh() {
            Object.assign(this.$data, this.$options.data.apply(this));

            this.loadDepartments();
            this.loadJobs();
        },
        onShow(item) {
            this.$router.push({
                name: "admin.employees.show",
                params: { id: item.id }
            });
        },
        onEdit(item) {
            this.$router.push({
                name: "admin.employees.edit",
                params: { id: item.id }
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
                query: this.status,
                query: this.department,
                query: this.job
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

        this.loadDepartments();
        this.loadJobs();
    }
};
</script>
