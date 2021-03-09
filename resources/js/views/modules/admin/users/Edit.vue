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
        <v-card v-else class="elevation-0 pt-0">
            <!-- <v-card class="elevation-0 pt-0"> -->
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title success--text">Edit Employee</h4>
            </v-card-title>

            <v-container>
                <Form
                    :isEdit="true"
                    :errors="errors"
                    @on-save="onSave"
                    :userForm="form"
                ></Form>
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
            loader: true,
            form: {
                code: null,
                first_name: null,
                middle_name: "",
                last_name: null,
                suffix: "",
                gender: null,
                birthdate: null,
                mobile_number: null,
                telephone_number: "",
                address: null,
                fund: 0,
                remaining_fund: 0,
                username: "",
                email: null,
                password: "password",
                password_confirmation: "password",
                is_admin: false,
                is_superadmin: false,
                type: "employee",
                job: null
            },
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
                has_fund: [],
                fund: []
            }
        };
    },
    methods: {
        getData() {
            UserDataService.show(this.$route.params.id)
                .then(response => {
                    let data = response.data.data;
                    this.form = data;
                    this.form.job = data.job;
                })
                .catch(error => {
                    this.mixin_showErrors(error);
                })
                .finally(() => {
                    this.loader = false;
                });
        },
        onSave(value) {
            this.loader = true;
            let is_administrator = value.role == "Administrator" ? true : false;
            value.is_admin = is_administrator;
            value.job_id = value.job.id;
            value.password = "password";
            value.password_confirmation = "password";

            UserDataService.update(this.$route.params.id, value)
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
    },
    created() {
        this.getData();
    },
    activated() {
        this.getData();
    }
};
</script>
