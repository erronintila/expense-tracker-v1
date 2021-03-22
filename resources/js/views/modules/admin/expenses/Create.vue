<template>
    <div>
        <loader-component v-if="!formDataLoaded"></loader-component>
        <v-card v-else class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">New Expense</h4>
            </v-card-title>
            <v-container>
                <Form
                    :errors="errors"
                    :expenseForm="form"
                    :rules="rules"
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
                                            :itemize="itemize"
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
import UserDialogSelector from "../../../../components/selector/dialog/UserDialogSelector";
import ExpenseDataService from "../../../../services/ExpenseDataService";

export default {
    components: {
        Form,
        UserDialogSelector
    },
    data() {
        return {
            formDataLoaded: true,
            usersParameters: {
                params: {
                    with_expense_types: true,
                    is_superadmin: false
                }
            },
            itemize: false,
            form: {
                code: null,
                reference_no: null,
                description: null,
                amount: 0,
                reimbursable_amount: 0,
                tax_name: "",
                tax_rate: 0,
                is_compound_tax: false,
                is_tax_inclusive: true,
                tax_amount: 0,
                receipt_number: null,
                date: moment().format("YYYY-MM-DD"),
                details: [],
                // details: {
                //     description: "",
                //     quantity: 1,
                //     amount: 0,
                //     total: 0
                // },
                remarks: "",
                notes: "",
                encoding_period: this.$store.getters.settings
                    .expense_encoding_period,
                // expense_type: {
                //     id: null,
                //     name: "",
                //     limit: null,
                //     sub_types: { id: null, name: "None", limit: null }
                // },
                expense_type: null,
                sub_type: null,
                // sub_type: { id: null, name: "", limit: null },
                user: null,
                vendor: null,
                expense_report_id: null,
                tax_id: null,
                expense_header_id: null,
                details_quantity: 0,
                details_amount: 0,
                is_active: true,
                // particular: "",
                // particular_amount: 0,
                // particular_reimbursable_amount: 0,
                is_reimbursable: false,
                revolving_fund: 0
            },
            rules: {
                reimbursable_amount: [],
                revolving_fund: []
            },
            errors: {
                sub_type: [],
                code: [],
                reference_no: [],
                description: [],
                amount: [],
                reimbursable_amount: [],
                tax_name: [],
                tax_rate: [],
                is_compound_tax: [],
                is_tax_inclusive: [],
                tax_amount: [],
                receipt_number: [],
                date: [],
                details: [],
                remarks: [],
                notes: [],
                encoding_period: [],
                expense_type_id: [],
                sub_type_id: [],
                user_id: [],
                vendor_id: [],
                expense_report_id: [],
                tax_id: [],
                expense_header_id: [],

                is_active: []
            }
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
        onSave(value) {

            if (value.vendor) {
                if (!value.vendor.is_vat_inclusive) {
                    value.tax_rate = 0;
                    value.tax_amount = 0;
                }
            }

            value.details = value.itemize ? value.items : null;
            value.expense_type_id = value.expense_type
                ? value.expense_type.id
                : null;
            value.sub_type_id = value.sub_type ? value.sub_type.id : null;
            value.user_id = value.user ? value.user.id : null;
            value.vendor_id = value.vendor ? value.vendor.id : null;
            value.reimbursable_amount = value.amount_to_reimburse;

            ExpenseDataService.store(value)
                .then(response => {
                    this.mixin_successDialog(
                        response.data.status,
                        response.data.message
                    );
                    this.$router.go(-1);
                    this.loading = false;
                    this.formDataLoaded = true;
                })
                .catch(error => {
                    this.mixin_showErrors(error);
                    this.errors = error.response.data.errors;
                    this.formDataLoaded = true;
                });
        }
    }
};
</script>
