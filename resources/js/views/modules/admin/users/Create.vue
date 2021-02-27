<template>
    <div>
        <v-container v-if="loader" style="height: 400px;">
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
        <v-card v-else class="elevation-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <h4 class="title success--text">New Employee</h4>
            </v-card-title>
            <v-container>
                <Form :errors="errors" @onSave="onSave"></Form>
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
            loader: false,
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
            let is_administrator =
                value.role == "Administrator" ? true : false;

            if (value.has_fund) {
                fund = value.fund == "" ? 0 : value.fund;
            }

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
                    window.location.replace("/admin/users");
                })
                .catch(error => {
                    this.mixin_showErrors(error);
                    if (error.response) {
                        if (error.response.data) {
                            this.errors = error.response.data.errors;
                        }
                    }
                })
                .finally(() => {
                    this.loader = false;
                });
        }
    }
};
</script>
