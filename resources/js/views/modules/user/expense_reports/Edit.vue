<template>
    <div>
        <v-card class="elevation-0 pt-0">
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
                </Form>
            </v-container>
        </v-card>
    </div>
</template>

<script>
import moment from "moment";
import Form from "../../admin/expense_reports/Form";
import ExpenseReportDataService from "../../../../services/ExpenseReportDataService";

export default {
    components: {
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
        getData() {
            return new Promise((resolve, reject) => {
                ExpenseReportDataService.show(this.$route.params.id)
                    .then(response => {
                        this.loader = false
                        resolve(response.data.data);
                    })
                    .catch(error => {
                        this.mixin_showErrors(error);
                        this.loader = false
                        reject();
                    });
            });
        },
        loadExpenses(reportData) {
            return new Promise((resolve, reject) => {
                axios
                    .get("/api/data/expenses", {
                        params: {
                            update_report: true,
                            user_id: reportData.user
                                ? reportData.user.id
                                : null,
                            start_date: reportData.from,
                            end_date: moment()
                                .endOf()
                                .format("YYYY-MM-DD"),
                            expense_report_id: this.$route.params.id
                        }
                    })
                    .then(response => {
                        this.loader = false
                        resolve(response.data.data);
                    })
                    .catch(error => {
                        this.mixin_showErrors(error);
                        this.loader = false
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
                        name: "user.expense_reports.index"
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
