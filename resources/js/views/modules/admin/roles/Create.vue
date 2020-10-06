<template>
    <v-card class="elevation-0 pt-0">
        <v-card-title class="pt-0">
            <v-btn @click="$router.go(-1)" class="mr-3" icon>
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>

            <v-spacer></v-spacer>

            <h4 class="title green--text">New Role</h4>
        </v-card-title>

        <v-form ref="form" v-model="valid">
            <v-container>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-text-field label="Role *" required></v-text-field>
                    </v-col>
                </v-row>

                <div>
                    <v-col cols="12" md="4">
                        Permissions
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="12" md="4">
                        <v-switch
                            v-model="switchSelectAll"
                            label="Select All"
                        ></v-switch>
                    </v-col>
                </div>

                <v-row>
                    <v-col cols="12" md="4" v-for="(item, key) in permissions" :key="item[0]">
                        <MultiSelect
                            :label="key.toUpperCase()"
                            :items="item"
                            :defaultSelected="selected[key]"
                            :key="switchSelectAll"
                            @changeSelected="(e) => { selected[key] = e }"
                        ></MultiSelect>
                    </v-col>

                    <!-- <v-col cols="12" md="4">
                        <MultiSelect
                            :label="'Employees'"
                            :items="permissions_employees"
                            :defaultSelected="selected_employees"
                            :key="switchSelectAll"
                            @changeSelected="selectedEmployees"
                        ></MultiSelect>
                    </v-col>

                    <v-col cols="12" md="4">
                        <MultiSelect
                            :label="'Expenses'"
                            :items="permissions_expenses"
                            :defaultSelected="selected_expenses"
                            :key="switchSelectAll"
                            @changeSelected="selectedExpenses"
                        ></MultiSelect>
                    </v-col>

                    <v-col cols="12" md="4">
                        <MultiSelect
                            :label="'Expense Reports'"
                            :items="permissions_expense_reports"
                            :defaultSelected="selected_expense_reports"
                            :key="switchSelectAll"
                            @changeSelected="selectedExpenseReports"
                        ></MultiSelect>
                    </v-col>

                    <v-col cols="12" md="4">
                        <MultiSelect
                            :label="'Payments'"
                            :items="permissions_payments"
                            :defaultSelected="selected_payments"
                            :key="switchSelectAll"
                            @changeSelected="selectedPayments"
                        ></MultiSelect>
                    </v-col>

                    <v-col cols="12" md="4">
                        <MultiSelect
                            :label="'Vendors'"
                            :items="permissions_vendors"
                            :defaultSelected="selected_vendors"
                            :key="switchSelectAll"
                            @changeSelected="selectedVendors"
                        ></MultiSelect>
                    </v-col>

                    <v-col cols="12" md="4">
                        <MultiSelect
                            :label="'Departments'"
                            :items="permissions_departments"
                            :defaultSelected="selected_departments"
                            :key="switchSelectAll"
                            @changeSelected="selectedDepartments"
                        ></MultiSelect>
                    </v-col>

                    <v-col cols="12" md="4">
                        <MultiSelect
                            :label="'Job Designations'"
                            :items="permissions_jobs"
                            :defaultSelected="selected_jobs"
                            :key="switchSelectAll"
                            @changeSelected="selectedJobs"
                        ></MultiSelect>
                    </v-col>

                    <v-col cols="12" md="4">
                        <MultiSelect
                            :label="'Expense Types'"
                            :items="permissions_expense_types"
                            :defaultSelected="selected_expense_types"
                            :key="switchSelectAll"
                            @changeSelected="selectedExpenseTypes"
                        ></MultiSelect>
                    </v-col>

                    <v-col cols="12" md="4">
                        <MultiSelect
                            :label="'Users'"
                            :items="permissions_users"
                            :defaultSelected="selected_users"
                            :key="switchSelectAll"
                            @changeSelected="selectedUsers"
                        ></MultiSelect>
                    </v-col>

                    <v-col cols="12" md="4">
                        <MultiSelect
                            :label="'Adjustments'"
                            :items="permissions_adjustments"
                            :defaultSelected="selected_adjustments"
                            :key="switchSelectAll"
                            @changeSelected="selectedAdjustments"
                        ></MultiSelect>
                    </v-col> -->
                </v-row>

                <small class="text--secondary">
                    * indicates required field
                </small>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green" dark @click="onSave">Save</v-btn>
                    <v-btn @click="$router.go(-1)">Cancel</v-btn>
                </v-card-actions>
            </v-container>
        </v-form>
    </v-card>
</template>

<script>
import MultiSelect from "../../../../components/select/MultiSelect";

export default {
    components: {
        MultiSelect
    },
    data() {
        return {
            valid: false,
            name: "",
            headers: [
                { text: "Name", value: "name" },
                { text: "Name", value: "name" },
                { text: "Name", value: "name" },
                { text: "Name", value: "name" },
                { text: "Name", value: "name" }
            ],
            items: [],
            rules: {},
            errors: {},
            switchSelectAll: false,
            permissions: {
                employees: [
                    "view all employees",
                    "view employee",
                    "add employee",
                    "edit employee",
                    "delete employee"
                ],
                expenses: [
                    "view all expenses",
                    "view expenses",
                    "add expenses",
                    "edit expenses",
                    "delete expenses"
                ],
                expense_reports: [
                    "view all expense reports",
                    "view expense report",
                    "add expense report",
                    "edit expense report",
                    "approve expense report",
                    "delete expense report"
                ],
                payments: [
                    "view all payments",
                    "view payment",
                    "add payment",
                    "edit payment",
                    "delete payment"
                ],
                vendors: [
                    "view all vendors",
                    "view vendor",
                    "add vendor",
                    "edit vendor",
                    "delete vendor"
                ],
                departments: [
                    "view all departments",
                    "view department",
                    "add department",
                    "edit department",
                    "delete department"
                ],
                jobs: [
                    "view all jobs",
                    "view job",
                    "add job",
                    "edit job",
                    "delete job"
                ],
                expense_types: [
                    "view all expense types",
                    "view expense type",
                    "add expense type",
                    "edit expense type",
                    "delete expense type"
                ],
                users: [
                    "view all users",
                    "view user",
                    "add user",
                    "edit user",
                    "delete user"
                ],
                adjustments: [
                    "view all adjustments",
                    "view adjustment",
                    "add adjustment",
                    "edit adjustment",
                    "delete adjustment"
                ]
            },
            selected: {
                employees: [],
                expenses: [],
                expense_reports: [],
                payments: [],
                vendors: [],
                departments: [],
                jobs: [],
                expense_types: [],
                users: [],
                adjustments: []
            },
            // permissions_employees: [
            //     "view all employees",
            //     "view employee",
            //     "add employee",
            //     "edit employee",
            //     "delete employee"
            // ],
            // permissions_expenses: [
            //     "view all expenses",
            //     "view expenses",
            //     "add expenses",
            //     "edit expenses",
            //     "delete expenses"
            // ],
            // permissions_expense_reports: [
            //     "view all expense reports",
            //     "view expense report",
            //     "add expense report",
            //     "edit expense report",
            //     "approve expense report",
            //     "delete expense report"
            // ],
            // permissions_payments: [
            //     "view all payments",
            //     "view payment",
            //     "add payment",
            //     "edit payment",
            //     "delete payment"
            // ],
            // permissions_vendors: [
            //     "view all vendors",
            //     "view vendor",
            //     "add vendor",
            //     "edit vendor",
            //     "delete vendor"
            // ],
            // permissions_departments: [
            //     "view all departments",
            //     "view department",
            //     "add department",
            //     "edit department",
            //     "delete department"
            // ],
            // permissions_jobs: [
            //     "view all jobs",
            //     "view job",
            //     "add job",
            //     "edit job",
            //     "delete job"
            // ],
            // permissions_expense_types: [
            //     "view all expense types",
            //     "view expense type",
            //     "add expense type",
            //     "edit expense type",
            //     "delete expense type"
            // ],
            // permissions_users: [
            //     "view all users",
            //     "view user",
            //     "add user",
            //     "edit user",
            //     "delete user"
            // ],
            // permissions_adjustments: [
            //     "view all adjustments",
            //     "view adjustment",
            //     "add adjustment",
            //     "edit adjustment",
            //     "delete adjustment"
            // ],
            // selected_employees: [],
            // selected_expenses: [],
            // selected_expense_reports: [],
            // selected_payments: [],
            // selected_vendors: [],
            // selected_departments: [],
            // selected_jobs: [],
            // selected_expense_types: [],
            // selected_users: [],
            // selected_adjustments: []
        };
    },
    methods: {
        onSave() {},
        // selectedEmployees(e) {
        //     this.selected_employees = e;

        //     console.log(this.selected_employees);
        // },
        // selectedExpenses(e) {
        //     this.selected_expenses = e;

        //     console.log(this.selected_expenses);
        // },
        // selectedExpenseReports(e) {
        //     this.selected_expense_reports = e;

        //     console.log(this.selected_expense_reports);
        // },
        // selectedPayments(e) {
        //     this.selected_payments = e;

        //     console.log(this.selected_payments);
        // },
        // selectedEmployees(e) {
        //     this.selected_employees = e;

        //     console.log(this.selected_employees);
        // },
        // selectedVendors(e) {
        //     this.selected_vendors = e;

        //     console.log(this.selected_vendors);
        // },
        // selectedDepartments(e) {
        //     this.selected_departments = e;

        //     console.log(this.selected_departments);
        // },
        // selectedJobs(e) {
        //     this.selected_jobs = e;

        //     console.log(this.selected_jobs);
        // },
        // selectedExpenseTypes(e) {
        //     this.selected_expense_types = e;

        //     console.log(this.selected_expense_types);
        // },
        // selectedUsers(e) {
        //     this.selected_users = e;

        //     console.log(this.selected_users);
        // },
        // selectedAdjustments(e) {
        //     this.selected_adjustments = e;

        //     console.log(this.selected_adjustments);
        // }
    },
    watch: {
        switchSelectAll() {
            if (this.switchSelectAll) {
                for (const key in this.selected) {
                    // if (object.hasOwnProperty(key)) {
                    //     const element = object[key];
                        
                    // }
                    this.selected[key] = this.permissions[key];
                    // console.log(this.selected[key]);
                }

                // this.selected_employees = this.permissions_employees;
                // this.selected_expenses = this.permissions_expenses;
                // this.selected_expense_reports = this.permissions_expense_reports;
                // this.selected_payments = this.permissions_payments;
                // this.selected_vendors = this.permissions_vendors;
                // this.selected_departments = this.permissions_departments;
                // this.selected_jobs = this.permissions_jobs;
                // this.selected_expense_types = this.permissions_expense_types;
                // this.selected_users = this.permissions_users;
                // this.selected_adjustments = this.permissions_adjustments;
            } else {
                for (const key in this.selected) {
                    // if (object.hasOwnProperty(key)) {
                    //     const element = object[key];
                        
                    // }
                    this.selected[key] = [];
                    // console.log(this.selected[key]);
                }
                // this.selected_employees = [];
                // this.selected_expenses = [];
                // this.selected_expense_reports = [];
                // this.selected_payments = [];
                // this.selected_vendors = [];
                // this.selected_departments = [];
                // this.selected_jobs = [];
                // this.selected_expense_types = [];
                // this.selected_users = [];
                // this.selected_adjustments = [];
            }

            let combinePermissions = [];

            for (const key in this.selected) {
                for (const iterator of this.selected[key]) {
                    combinePermissions.push(iterator);
                }
            }

            console.log(combinePermissions);

            // let combineSelected = this.selected;

            // let combineSelected = [
            //     ...this.selected_employees,
            //     ...this.selected_expenses,
            //     ...this.selected_expense_reports,
            //     ...this.selected_payments,
            //     ...this.selected_vendors,
            //     ...this.selected_departments,
            //     ...this.selected_jobs,
            //     ...this.selected_expense_types,
            //     ...this.selected_users,
            //     ...this.selected_adjustments
            // ];

            // console.log(combineSelected);
        }
    },
    created() {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " + localStorage.getItem("access_token");
    }
};
</script>
