<template>
    <div>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <h4 class="title green--text">New Expense Report</h4>
            </v-card-title>
            <v-container>
                <Form
                    :expenseReportForm="form"
                    :expenseReportErrors="errors"
                    :expenseReportRules="rules"
                    @on-save="onSave"
                    @on-update="onUpdate"
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
            loader: false,
            usersParameters: {
                params: {
                    is_superadmin: false
                }
            },
            form: {
                code: "",
                description: "",
                remarks: "",
                notes: "",
                user: this.$store.getters.user,
                expenses: [],
                status: null,
                from: moment()
                    .startOf("week")
                    .format("YYYY-MM-DD"),
                to: moment()
                    .endOf("week")
                    .format("YYYY-MM-DD")
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
        onUpdate(e) {
            this.form = e || this.form;
        },
        onSave(value) {
            this.loader = true;

            value.user_id = value.user == null ? null : value.user.id;

            ExpenseReportDataService.store(value)
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
                    this.errors = error.response.data.errors;
                    this.mixin_showErrors(error);
                    this.loader = false;
                });
        }
    },
    watch: {
        "form.user": function() {
            this.errors.user_id = [];
        }
    }
};
</script>
