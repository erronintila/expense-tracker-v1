<template>
    <div>
        <loader-component v-if="!formDataLoaded"></loader-component>
        <v-card v-else class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <h4 class="title green--text">Edit Payment Record</h4>
            </v-card-title>

            <v-container>
                <Form
                    v-if="formDataLoaded"
                    :paymentForm="form"
                    :paymentErrors="errors"
                    :paymentRules="rules"
                    :payment_id="payment_id"
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
                                    <template
                                        v-slot:append
                                        v-if="
                                            mixin_can(
                                                'select specific users on expense reports'
                                            )
                                        "
                                    >
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
import PaymentDataService from "../../../services/PaymentDataService";
import ExpenseReportDataService from "../../../services/ExpenseReportDataService";
import UserDialogSelector from "../../../components/selector/dialog/UserDialogSelector";

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
            payment_id: parseInt(this.$route.params.id),
            form: {
                id: 0,
                code: "",
                reference_no: "",
                voucher_no: "",
                description: "",
                date: moment().format("YYYY-MM-DD"),
                cheque_no: "",
                cheque_date: "",
                amount: "",
                payee: "",
                payee_address: "",
                payee_phone: "",
                remarks: "",
                notes: "",
                status: "",
                user: null
            },
            errors: {
                user_id: [],
                code: [],
                reference_no: [],
                voucher_no: [],
                description: [],
                date: [],
                cheque_no: [],
                cheque_date: [],
                amount: [],
                payee: [],
                payee_address: [],
                payee_phone: [],
                remarks: [],
                notes: [],
                expense_reports: []
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
                PaymentDataService.show(this.$route.params.id)
                    .then(response => {
                        this.loader = false;
                        resolve(response.data.data);
                    })
                    .catch(error => {
                        this.mixin_showErrors(error);
                        this.loader = false;
                        this.$router.push(
                            { name: "user.payments.index" },
                            () => {}
                        );
                        reject();
                    });
            });
        },
        loadExpenseReports(paymentData) {
            return new Promise((resolve, reject) => {
                ExpenseReportDataService.get({
                    params: {
                        update_payment: true,
                        user_id: paymentData.user ? paymentData.user.id : null,
                        start_date: paymentData.from,
                        end_date: moment()
                            .endOf()
                            .format("YYYY-MM-DD"),
                        payment_id: this.$route.params.id
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
    computed: {
        // params(nv) {
        //     return {
        //         ...this.options,
        //         query: this.search,
        //         query: this.user,
        //         query: this.date_range
        //     };
        // },
    },
    watch: {
        // params: {
        //     immediate: true,
        //     deep: true,
        //     handler() {
        //         this.getDataFromApi().then(data => {
        //             this.items = data.items;
        //             this.totalItems = data.total;
        //         });
        //     }
        // },
        // selected() {
        //     this.totalAmount = this.mixin_formatNumber(
        //         this.selected.reduce((total, item) => total + item.total, 0)
        //     );
        // },
        // "form.user": function() {
        //     this.getDataFromApi().then(data => {
        //         this.items = data.items;
        //         this.totalItems = data.total;
        //     });
        // }
    },
    created() {
        this.formDataLoaded = true;
        // this.getData();
        this.getData().then(data => {
            // this.loadExpenseReports(data).then(expense_reports => {
            this.form = data;
            // this.form.expense_reports = expense_reports;
            this.formDataLoaded = true;
            // });
        });
    }
};
</script>
