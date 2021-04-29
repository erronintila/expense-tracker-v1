<template>
    <div>
        <loader-component v-if="!formDataLoaded"></loader-component>
        <v-card v-else class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">New Payment Record</h4>
            </v-card-title>

            <v-container>
                <Form></Form>
            </v-container>
        </v-card>
    </div>
</template>

<script>
import moment from "moment";
import Form from "./Form";
import UserDialogSelector from "../../../components/selector/dialog/UserDialogSelector";
import PaymentDataService from "../../../services/PaymentDataService";

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
        }
    },
    methods: {
        onSave() {}
    },
}
</script>