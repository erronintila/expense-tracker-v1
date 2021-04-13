<template>
    <div>
        <loader-component v-if="!formDataLoaded"></loader-component>
        <v-card v-else class="elevation-0 pt-0">
            <!-- <v-card class="elevation-0 pt-0"> -->
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">Edit Expense</h4>
            </v-card-title>

            <v-container>
                <Form
                    v-if="formDataLoaded"
                    :itemizeExpenses="itemize"
                    :expenseForm="form"
                    :errors="errors"
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
import numeral from "numeral";
import Form from "./Form";
import AddVendor from "../../../../components/dialogs/AddVendor";
import UserDialogSelector from "../../../../components/selector/dialog/UserDialogSelector";
import ExpenseDataService from "../../../../services/ExpenseDataService";

export default {
    components: {
        AddVendor,
        UserDialogSelector,
        Form
    },
    data() {
        return {
            formDataLoaded: false,
            usersParameters: {
                params: { with_expense_types: true }
            },
            items: [],
            itemize: false,
            form: {
                code: null,
                description: null,
                amount: 0,
                details_quantity: 0,
                details_amount: 0,
                // reimbursable_amount: 0,
                receipt_number: null,
                date: null,
                remarks: "",
                is_active: true,
                // expense_type: {
                //     id: null,
                //     name: "",
                //     limit: null,
                //     sub_types: null
                // },
                // sub_type: { id: null, name: "", limit: null },
                expense_type: null,
                sub_type: null,
                // user: {
                //     id: null,
                //     remaining_fund: 0,
                //     fund: 0,
                //     expense_types: null
                // },
                // vendor: {
                //     id: null,
                //     name: "",
                //     tin: "",
                //     is_vat_inclusive: false
                // },
                user: null,
                vendor: null,
                // particular: "",
                // particular_amount: 0,
                // particular_reimbursable_amount: 0,
                is_reimbursable: false,

                revolving_fund: 0,
                reimbursable_amount: 0,
                details: [],
                is_paid_in_advance: false,
                // details: {
                //     description: "",
                //     amount: 0
                // },

                is_tax_inclusive: true,
                tax_name: "",
                tax_rate: 0,
                tax_amount: 0
            },
            rules: {
                reimbursable_amount: [],
                revolving_fund: []
            },
            errors: {
                sub_type: [],
                description: [],
                amount: [],
                reimbursable_amount: [],
                receipt_number: [],
                date: [],
                remarks: [],
                is_active: [],
                expense_type_id: [],
                user_id: [],
                vendor_id: []
            }
        };
    },
    methods: {
        getData() {
            return new Promise((resolve, reject) => {
                ExpenseDataService.show(this.$route.params.id)
                    .then(response => {
                        let data = response.data.data;
                        this.form.code = data.code;
                        this.form.description = data.description;
                        this.form.receipt_number = data.receipt_number;
                        this.form.date = data.date;
                        this.form.remarks = data.remarks;
                        this.form.is_active = data.is_active;
                        this.form.user = data.user;
                        this.form.vendor = data.vendor;
                        this.form.expense_type = data.expense_type;
                        this.expense_types = data.user.expense_types;
                        this.sub_types = data.expense_type.sub_types;
                        this.form.is_tax_inclusive = data.is_tax_inclusive;
                        this.form.tax_name = data.tax_name;
                        this.form.tax_rate = data.tax_rate;
                        this.form.tax_amount = data.tax_amount;
                        this.form.details = data.details ?? [];
                        this.form.is_paid_in_advance = data.is_paid_in_advance;

                        if (data.details && data.details.length) {
                            this.itemize = true;
                            this.items = data.details;
                        } else {
                            this.form.amount = data.amount;
                        }

                        this.sub_types.unshift({
                            id: null,
                            name: "None",
                            limit: null
                        });
                        this.form.sub_type =
                            data.sub_type == null
                                ? { id: null, name: "None", limit: null }
                                : data.sub_type;
                        if (data.revolving_fund > 0) {
                            // this.paid_through_fund = true;
                            this.form.revolving_fund = data.revolving_fund;
                        } else {
                            // this.paid_through_fund = false;
                            this.form.revolving_fund = 0;
                        }
                        this.form.reimbursable_amount =
                            data.reimbursable_amount;
                        this.form.user.remaining_fund +=
                            data.amount - data.reimbursable_amount;
                        this.formDataLoaded = true;
                        resolve();
                    })
                    .catch(error => {
                        this.mixin_showErrors(error);
                        this.formDataLoaded = true;
                        this.$router.push({ name: "admin.expenses.index" }, () => {});
                        reject();
                    });
            });
        },
        selectUser(e) {
            this.errors.user_id = [];
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

            ExpenseDataService.update(this.$route.params.id, value)
                .then(response => {
                    this.mixin_successDialog(
                        response.data.status,
                        response.data.message
                    );
                    this.$router.go(-1);
                    this.formDataLoaded = true;
                })
                .catch(error => {
                    this.mixin_showErrors(error);
                    if (error.response.data.data !== null) {
                        this.errors = error.response.data.errors;
                    }
                    this.formDataLoaded = true;
                });
        }
    },
    created() {
        this.getData().then((this.formDataLoaded = true));
    },
};
</script>
