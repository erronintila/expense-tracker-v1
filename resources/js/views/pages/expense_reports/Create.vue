<template>
    <div>
        <loader-component v-if="!formDataLoaded"></loader-component>
        <v-card v-else class="elevation-0 pt-0">
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
                                    <template v-slot:append v-if="mixin_can('select specific users on expense reports')">
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
import UserDialogSelector from "../../../components/selector/dialog/UserDialogSelector";
import ExpenseReportDataService from "../../../services/ExpenseReportDataService";

export default {
    components: {
        Form,
        UserDialogSelector
    },
    data() {
        return {
            formDataLoaded: true,
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
                user: (this.$store.getters.user.is_admin && this.mixin_can("select specific users on expense reports")) ? null : this.$store.getters.user,
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
