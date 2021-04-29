<template>
    <v-form ref="form" v-model="valid">
        <v-card class="mx-auto mb-4" flat>
            <div class="overline green--text">
                BASIC DETAILS
            </div>
            <!-- Basic Details -->
            <v-menu
                ref="menu"
                v-model="menu"
                transition="scale-transition"
                offset-y
                min-width="290px"
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="form.date"
                        :error-messages="paymentErrors.date"
                        @input="paymentErrors.date = []"
                        label="Date"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                    ></v-text-field>
                </template>
                <v-date-picker
                    v-model="form.date"
                    no-title
                    scrollable
                    color="success"
                    :max="maxDate"
                >
                </v-date-picker>
            </v-menu>

            <slot name="userSelector"></slot>

            <v-text-field
                v-model="form.description"
                :rules="[
                    ...mixin_validation.required,
                    ...mixin_validation.minLength(100)
                ]"
                :counter="100"
                :error-messages="paymentErrors.description"
                label="Description"
                required
            ></v-text-field>

            <v-text-field
                v-model="form.voucher_no"
                :rules="[...mixin_validation.required]"
                :error-messages="paymentErrors.voucher_no"
                :counter="100"
                label="Voucher No."
                required
                type="number"
            ></v-text-field>
            <!-- End of Basic Details -->

            <div class="overline green--text mb-4">
                Expense Reports
            </div>

            <!-- Expense Reports Validation -->
            <small
                v-if="
                    paymentErrors.expense_reports &&
                        paymentErrors.expense_reports.length > 0
                "
                class="red--text"
            >
                {{ paymentErrors.expense_reports[0] }}
            </small>
            <!-- End of Expense Reports Validation -->

            <!-- Expense Reports -->

            <!-- End of Expense Reports -->

            <!-- Payment Summary -->
            <v-row>
                <v-col cols="12" md="6">
                    <v-textarea
                        v-model="form.remarks"
                        label="Remarks"
                        :rows="3"
                    >
                    </v-textarea>
                </v-col>

                <v-col cols="12" md="6">
                    <table width="100%" class="mt-4">
                        <tbody>
                            <tr>
                                <td>
                                    Total Expense Amount
                                </td>
                                <td>:</td>
                                <td
                                    class="green--text text--darken-4 text-right"
                                >
                                    {{ mixin_formatNumber(0) }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Paid Amount
                                </td>
                                <td>:</td>
                                <td
                                    class="green--text text--darken-4 text-right"
                                >
                                    (-)
                                    {{ mixin_formatNumber(0) }}
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3">
                                    <v-divider></v-divider>
                                </td>
                            </tr>
                            <tr>
                                <th class="text-left">
                                    Amount to be reimbursed
                                </th>
                                <td>:</td>
                                <td
                                    class="green--text text--darken-4 text-right"
                                >
                                    {{ mixin_formatNumber(0) }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </v-col>
            </v-row>
            <!-- End of Payment Summary -->

            <!-- Action Buttons -->
            <v-row>
                <v-col class="text-right">
                    <v-btn color="green" dark @click="onSave">Save</v-btn>
                    <v-btn @click="$router.go(-1)">
                        Cancel
                    </v-btn>
                </v-col>
            </v-row>
            <!-- End of Action Buttons -->
        </v-card>
    </v-form>
</template>

<script>
import moment from "moment";

export default {
    props: {
        isEdit: {
            type: Boolean,
            default: false
        },
        paymentForm: {
            type: Object,
            default: () => {}
        },
        paymentErrors: {
            type: Object,
            default: () => {
                return {
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
                };
            }
        },
        paymentRules: {}
    },
    data() {
        return {
            valid: false,
            menu: false,
            form: {
                id: 0,
                code: "",
                reference_no: "",
                voucher_no: "",
                description: "",
                date: moment().format("YYYY-MM-DD"),
                cheque_no: "",
                cheque_date: "",
                amount: 0,
                payee: "",
                payee_address: "",
                payee_phone: "",
                remarks: "",
                notes: "",
                user: null,
                expense_reports: []
            }
        };
    },
    methods: {
        onSave() {
            console.log(this.form);
        }
    },
    computed: {
        maxDate() {
            return moment().format("YYYY-MM-DD");
        }
    },
    watch: {
        paymentForm: {
            deep: true,
            immediate: true,
            handler(newValue) {
                this.form = newValue;
            }
        }
    }
};
</script>
