<template>
    <div>
        <v-container v-if="loader" style="height: 400px">
            <v-row class="fill-height" align-content="center" justify="center">
                <v-col class="subtitle-1 text-center" cols="12">
                    Loading, Please wait...
                </v-col>
                <v-col cols="6">
                    <v-progress-linear
                        color="green accent-4"
                        indeterminate
                        rounded
                        height="6"
                    ></v-progress-linear>
                </v-col>
            </v-row>
        </v-container>
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
            rules: {},
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
                axios
                    .get(`/api/expense_reports/${this.$route.params.id}`)
                    .then(response => {
                        resolve(response.data.data);
                    })
                    .catch(error => {
                        this.mixin_showErrors(error);
                        reject();
                    })
                    .finally((this.loader = false));
            });
        },
        loadExpenses(reportData) {
            let user_id = reportData.user ? reportData.user.id : null;

            return new Promise((resolve, reject) => {
                axios
                    .get("/api/data/expenses", {
                        params: {
                            update_report: true,
                            user_id: user_id,
                            start_date: reportData.from,
                            end_date: moment()
                                .endOf()
                                .format("YYYY-MM-DD"),
                            expense_report_id: this.$route.params.id
                        }
                    })
                    .then(response => {
                        this.form.expenses = response.data.data;
                        resolve();
                    })
                    .catch(error => {
                        this.mixin_showErrors(error);
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
                })
                .catch(error => {
                    this.mixin_showErrors(error);
                    this.errors = error.response.data.errors;
                })
                .finally((this.loader = false));
        }
    },
    created() {
        this.getData().then(data => {
            this.form = data;
            this.loadExpenses(data);
        });
    },
    activated() {
        this.getData().then(data => {
            this.form = data;
            this.loadExpenses(data);
        });
    }
};
</script>
