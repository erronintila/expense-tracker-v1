<template>
    <div>
        <loader-component v-if="!formDataLoaded"></loader-component>
        <v-card v-else class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title success--text">Edit Employee</h4>
            </v-card-title>

            <v-container>
                <Form
                    v-if="formDataLoaded"
                    :isEdit="true"
                    :errors="errors"
                    :userForm="form"
                    @on-save="onSave"
                ></Form>
            </v-container>
        </v-card>
    </div>
</template>

<script>
import Form from "./Form";
import UserDataService from "../../../../services/UserDataService";
import JobDataService from "../../../../services/JobDataService";

export default {
    components: {
        Form
    },
    data() {
        return {
            formDataLoaded: false,
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
                job: null,
                is_active: true
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
                fund: [],
                is_active: []
            }
        };
    },
    methods: {
        getData() {
            return new Promise((resolve, reject) => {
                UserDataService.show(this.$route.params.id)
                    .then(response => {
                        this.loader = false;
                        this.formDataLoaded = true;
                        console.log(response.data);
                        resolve(response.data);
                    })
                    .catch(error => {
                        this.mixin_showErrors(error);
                        this.loader = false;
                        this.formDataLoaded = true;
                        this.$router.push({ name: "admin.users.index" }, () => {});
                        reject();
                    });
            });
        },
        getInitialJob() {
            JobDataService.show(this.form.job.id)
                .then(response => {
                    this.form.job = response.data.data;
                })
                .catch(error => {
                    this.mixin_showErrors(error);
                    reject();
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
                    this.loader = false;
                    window.location.replace("/admin/users");
                })
                .catch(error => {
                    this.mixin_showErrors(error);
                    if (error.response) {
                        if (error.response.data) {
                            this.errors = error.response.data.errors;
                        }
                    }
                    this.loader = false;
                });
        }
    },
    created() {
        this.getData().then(data => {
            this.form = data.data;
            this.formDataLoaded = true;
            this.getInitialJob();
        });
    },
    activated() {
        this.getData().then(data => {
            this.form = data.data;
            this.formDataLoaded = true;
            this.getInitialJob();
        });
    }
};
</script>
