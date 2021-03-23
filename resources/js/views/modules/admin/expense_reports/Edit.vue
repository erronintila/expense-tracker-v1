<template>
    <div>
        <loader-component v-if="!formDataLoaded"></loader-component>
        <v-card v-else class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <h4 class="title green--text">Edit Expense Report</h4>
            </v-card-title>

            <v-container>
                <Form
                    v-if="formDataLoaded"
                    :expenseReportForm="form"
                    :expenseReportErrors="errors"
                    :expenseReportRules="rules"
                    :expense_report_id="expense_report_id"
                    @on-save="onSave"
                >
                    <template v-slot:userSelector>
                        <v-row>
                            <v-col>
                                <v-text-field
                                    :value="
                                        form.user
                                            ? form.user.full_name
                                            : 'No Employee'
                                    "
                                    :error-messages="errors.user_id"
                                    @input="errors.user_id = []"
                                    label="Employee"
                                    readonly
                                >
                                    <template v-slot:append>
                                        <UserDialogSelector
                                            ref="userDialogSelector"
                                            @selectUser="selectUser"
                                            @onReset="resetUser"
                                            :selectedUser="form.user"
                                            :usersParameters="usersParameters"
                                        >
                                            <template
                                                v-slot:openDialog="{
                                                    bind,
                                                    on
                                                }"
                                            >
                                                <v-btn
                                                    fab
                                                    color="primary"
                                                    text
                                                    x-small
                                                    v-bind="bind"
                                                    v-on="on"
                                                >
                                                    <v-icon dark
                                                        >mdi-magnify</v-icon
                                                    >
                                                </v-btn>
                                            </template>
                                        </UserDialogSelector>
                                    </template>
                                </v-text-field>
                            </v-col>
                        </v-row>
                    </template>
                </Form>
            </v-container>
        </v-card>
    </div>
</template>

<script>
import moment from "moment";
import Form from "./Form";
import ExpenseReportDataService from "../../../../services/ExpenseReportDataService";
import UserDialogSelector from "../../../../components/selector/dialog/UserDialogSelector";

export default {
    components: {
        UserDialogSelector,
        Form
    },
    data() {
        return {
            loader: true,
            formDataLoaded: false,
            usersParameters: {
                params: {
                    is_superadmin: false
                }
            },
            expense_report_id: parseInt(this.$route.params.id),
            form: {
                code: "",
                description: "",
                remarks: "",
                notes: "",
                user: null,
                expenses: [],
                status: null,
                from: "",
                to: ""
            },
            errors: {
                date_range: [],
                code: [],
                description: [],
                remarks: [],
                notes: [],
                user_id: [],
                expenses: []
            },
            rules: {}
        };
    },
    methods: {
        selectUser(e) {
            if (e == null || e == undefined) {
                this.form.user = null;
                return;
            }
            this.form.user = e;
        },
        resetUser() {
            this.form.user = null;
        },
        getData() {
            return new Promise((resolve, reject) => {
                ExpenseReportDataService.show(this.$route.params.id)
                    .then(response => {
                        this.loader = false;
                        resolve(response.data.data);
                    })
                    .catch(error => {
                        this.mixin_showErrors(error);
                        this.loader = false;
                        this.$router.push({ name: "admin.expense_reports.index" }, () => {});
                        reject();
                    });
            });
        },
        loadExpenses(reportData) {
            return new Promise((resolve, reject) => {
                ExpenseReportDataService.get({
                    params: {
                        update_report: true,
                        user_id: reportData.user ? reportData.user.id : null,
                        start_date: reportData.from,
                        end_date: moment()
                            .endOf()
                            .format("YYYY-MM-DD"),
                        expense_report_id: this.$route.params.id
                    }
                })
                    .then(response => {
                        this.loader = false;
                        resolve(response.data.data);
                    })
                    .catch(error => {
                        this.mixin_showErrors(error);
                        this.loader = false;
                        reject();
                    });
            });
        },
        onSave(value) {
            this.loader = true;
            value.user_id = value.user ? value.user.id : null;
            ExpenseReportDataService.update(this.$route.params.id, value)
                .then(response => {
                    this.mixin_successDialog(
                        response.data.status,
                        response.data.message
                    );
                    this.$router.push({
                        name: "admin.expense_reports.index"
                    });
                    this.loader = false;
                })
                .catch(error => {
                    this.mixin_showErrors(error);
                    this.errors = error.response.data.errors;
                    this.loader = false;
                });
        }
    },
    created() {
        this.getData().then(data => {
            this.loadExpenses(data).then(expenses => {
                this.form = data;
                this.form.expenses = expenses;
                this.formDataLoaded = true;
            });
        });
    },
    activated() {
        this.getData().then(data => {
            this.loadExpenses(data).then(expenses => {
                this.form = data;
                this.form.expenses = expenses;
                this.formDataLoaded = true;
            });
        });
    }
};
</script>
