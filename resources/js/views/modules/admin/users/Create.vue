<template>
    <div>
        <loader-component v-if="!formDataLoaded"></loader-component>
        <v-card class="elevation-0  pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <h4 class="title success--text">New Employee</h4>
            </v-card-title>
            <v-container>
                <Form :errors="errors" @on-save="onSave"></Form>
            </v-container>
        </v-card>
    </div>
</template>

<script>
import Form from "./Form";
import UserDataService from "../../../../services/UserDataService";

export default {
    components: {
        Form
    },
    data() {
        return {
            formDataLoaded: true,
            errors: {
                code: [],
                first_name: [],
                middle_name: [],
                last_name: [],
                suffix: [],
                gender: [],
                birthdate: [],
                job: [],
                mobile_number: [],
                telephone_number: [],
                email: [],
                address: [],
                username: [],
                role: [],
                can_login: [],
                has_fund: [],
                fund: []
            }
        };
    },
    methods: {
        onSave(value) {
            let fund = 0;
            let is_administrator = value.role == "Administrator" ? true : false;

            if (value.has_fund) {
                fund = value.fund == "" ? 0 : value.fund;
            }

            this.formDataLoaded = false;

            value.fund = fund;
            value.remaining_fund = fund;
            value.password = "password";
            value.password_confirmation = "password";
            value.is_admin = is_administrator;
            value.is_superadmin = false;
            value.type = "";
            value.job_id = value.job.id;

            UserDataService.store(value)
                .then(response => {
                    this.mixin_successDialog(
                        response.data.status,
                        response.data.message
                    );
                    this.formDataLoaded = true;
                    window.location.replace("/admin/users");
                })
                .catch(error => {
                    this.mixin_showErrors(error);
                    if (error.response) {
                        if (error.response.data) {
                            this.errors = error.response.data.errors;
                        }
                    }
                    this.formDataLoaded = true;
                });
        }
    }
};
</script>
