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
                    <v-col
                        cols="12"
                        md="4"
                        v-for="(item, key) in permissions"
                        :key="item[0]"
                    >
                        <MultiSelect
                            :label="key.toUpperCase()"
                            :items="item"
                            :defaultSelected="selected[key]"
                            :key="switchSelectAll"
                            @changeSelected="
                                e => {
                                    selected[key] = e;
                                }
                            "
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
        MultiSelect
    },
    data() {
        return {
            valid: false,
            name: "",
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
            }
        };
    },
    methods: {
        onSave() {
            let selectedPermissions = [];

            for (const key in this.selected) {
                for (const iterator of this.selected[key]) {
                    selectedPermissions.push(iterator);
                }
            }
        }
    },
    watch: {
        switchSelectAll() {
            if (this.switchSelectAll) {
                for (const key in this.selected) {
                    this.selected[key] = this.permissions[key];
                }
            } else {
                for (const key in this.selected) {
                    this.selected[key] = [];
                }
            }
        }
    },
    created() {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " + localStorage.getItem("access_token");
    }
};
</script>
