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
                    Permissions
                </div>

                <v-row>
                    <v-col cols="12" md="4">
                        <MultiSelect
                            :label="'Employees'"
                            :items="permissions_employees"
                            :defaultSelected="selected_employees"
                            @changeSelected="selectedEmployees"
                        ></MultiSelect>
                    </v-col>

                    <v-col cols="12" md="4">
                        <MultiSelect
                            :label="'Expenses'"
                            :items="permissions_expenses"
                            :defaultSelected="selected_expenses"
                            @changeSelected="selectedExpenses"
                        ></MultiSelect>
                    </v-col>

                    <v-col cols="12" md="4">
                        <MultiSelect
                            :label="'Expense Reports'"
                            :items="permissions_expense_reports"
                            :defaultSelected="selected_expense_reports"
                            @changeSelected="selectedExpenseReports"
                        ></MultiSelect>
                    </v-col>

                    <v-col cols="12" md="4">
                        <MultiSelect
                            :label="'Payments'"
                            :items="permissions_payments"
                            :defaultSelected="selected_payments"
                            @changeSelected="selectedPayments"
                        ></MultiSelect>
                    </v-col>

                    <v-col cols="12" md="4">
                        <MultiSelect
                            :label="'Vendors'"
                            :items="permissions_vendors"
                            :defaultSelected="selected_vendors"
                            @changeSelected="selectedVendors"
                        ></MultiSelect>
                    </v-col>

                    <v-col cols="12" md="4">
                        <MultiSelect
                            :label="'Departments'"
                            :items="permissions_departments"
                            :defaultSelected="selected_departments"
                            @changeSelected="selectedDepartments"
                        ></MultiSelect>
                    </v-col>

                    <v-col cols="12" md="4">
                        <MultiSelect
                            :label="'Job Designations'"
                            :items="permissions_jobs"
                            :defaultSelected="selected_jobs"
                            @changeSelected="selectedJobs"
                        ></MultiSelect>
                    </v-col>

                    <v-col cols="12" md="4">
                        <MultiSelect
                            :label="'Expense Types'"
                            :items="permissions_expense_types"
                            :defaultSelected="selected_expense_types"
                            @changeSelected="selectedExpenseTypes"
                        ></MultiSelect>
                    </v-col>

                    <v-col cols="12" md="4">
                        <MultiSelect
                            :label="'Users'"
                            :items="permissions_users"
                            :defaultSelected="selected_users"
                            @changeSelected="selectedUsers"
                        ></MultiSelect>
                    </v-col>

                    <v-col cols="12" md="4">
                        <MultiSelect
                            :label="'Adjustments'"
                            :items="permissions_adjustments"
                            :defaultSelected="selected_adjustments"
                            @changeSelected="selectedAdjustments"
                        ></MultiSelect>
                    </v-col>
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
        MultiSelect,
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
            permissions_employees: [
                "view all employees",
                "view employee",
                "add employee",
                "edit employee",
                "delete employee"
            ],
            permissions_expenses: [
                "view all expenses",
                "view expenses",
                "add expenses",
                "edit expenses",
                "delete expenses"
            ],
            permissions_expense_reports: [
                "view all expense reports",
                "view expense report",
                "add expense report",
                "edit expense report",
                "approve expense report",
                "delete expense report"
            ],
            permissions_payments: [
                "view all payments",
                "view payment",
                "add payment",
                "edit payment",
                "delete payment"
            ],
            permissions_vendors: [
                "view all vendors",
                "view vendor",
                "add vendor",
                "edit vendor",
                "delete vendor"
            ],
            permissions_departments: [
                "view all departments",
                "view department",
                "add department",
                "edit department",
                "delete department"
            ],
            permissions_jobs: [
                "view all jobs",
                "view job",
                "add job",
                "edit job",
                "delete job"
            ],
            permissions_expense_types: [
                "view all expense types",
                "view expense type",
                "add expense type",
                "edit expense type",
                "delete expense type"
            ],
            permissions_users: [
                "view all users",
                "view user",
                "add user",
                "edit user",
                "delete user"
            ],
            permissions_adjustments: [
                "view all adjustments",
                "view adjustment",
                "add adjustment",
                "edit adjustment",
                "delete adjustment"
            ],
            selected_employees: [],
            selected_expenses: [],
            selected_expense_reports: [],
            selected_payments: [],
            selected_vendors: [],
            selected_departments: [],
            selected_jobs: [],
            selected_expense_types: [],
            selected_users: [],
            selected_adjustments: []
        };
    },
    methods: {
        onSave() {},
        selectedEmployees(e) {
            this.selected_employees = e;

            console.log(this.selected_employees);
        },
        selectedExpenses(e) {
            this.selected_expenses = e;

            console.log(this.selected_expenses);
        },
        selectedExpenseReports(e) {
            this.selected_expense_reports = e;

            console.log(this.selected_expense_reports);
        },
        selectedPayments(e) {
            this.selected_payments = e;

            console.log(this.selected_payments);
        },
        selectedEmployees(e) {
            this.selected_employees = e;

            console.log(this.selected_employees);
        },
        selectedVendors(e) {
            this.selected_vendors = e;

            console.log(this.selected_vendors);
        },
        selectedDepartments(e) {
            this.selected_departments = e;

            console.log(this.selected_departments);
        },
        selectedJobs(e) {
            this.selected_jobs = e;

            console.log(this.selected_jobs);
        },
        selectedExpenseTypes(e) {
            this.selected_expense_types = e;

            console.log(this.selected_expense_types);
        },
        selectedUsers(e) {
            this.selected_users = e;

            console.log(this.selected_users);
        },
        selectedAdjustments(e) {
            this.selected_adjustments = e;

            console.log(this.selected_adjustments);
        }
    },
    created() {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " + localStorage.getItem("access_token");
    }
};
</script>
