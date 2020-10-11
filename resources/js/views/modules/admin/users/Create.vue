<template>
    <div>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">New User</h4>
            </v-card-title>

            <v-form ref="form" v-model="valid">
                <v-container>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="form.name"
                                :rules="[
                                    ...validation.required,
                                    ...validation.minLength(150)
                                ]"
                                :counter="150"
                                :error-messages="errors.name"
                                @input="errors.name = []"
                                label="Name *"
                                required
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="form.username"
                                :rules="[
                                    ...validation.required,
                                    ...validation.minLength(50)
                                ]"
                                :counter="50"
                                :error-messages="errors.username"
                                @input="errors.username = []"
                                label="Username *"
                                required
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="form.email"
                                :rules="[
                                    ...validation.required,
                                    ...validation.email
                                ]"
                                :error-messages="errors.email"
                                @input="errors.email = []"
                                label="Email Address *"
                                required
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="form.password"
                                :append-icon="
                                    showPassword ? 'mdi-eye' : 'mdi-eye-off'
                                "
                                :rules="rules.password"
                                :type="showPassword ? 'text' : 'password'"
                                :error-messages="errors.password"
                                @input="errors.password = []"
                                label="Password *"
                                required
                                @click:append="showPassword = !showPassword"
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="form.password_confirmation"
                                :append-icon="
                                    showPasswordConfirmation
                                        ? 'mdi-eye'
                                        : 'mdi-eye-off'
                                "
                                :rules="rules.password_confirmation"
                                :type="
                                    showPasswordConfirmation
                                        ? 'text'
                                        : 'password'
                                "
                                :error-messages="errors.password_confirmation"
                                @input="errors.password_confirmation = []"
                                label="Re-type Password *"
                                required
                                @click:append="
                                    showPasswordConfirmation = !showPasswordConfirmation
                                "
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-select
                                v-model="form.employee"
                                :items="employees"
                                item-text="fullname"
                                item-value="id"
                                label="Link Employee Info"
                            >
                            </v-select>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" md="4">
                            <v-checkbox
                                v-model="form.is_admin"
                                label="Is Administrator"
                                :error-messages="errors.is_admin"
                            ></v-checkbox>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-checkbox
                                v-model="form.can_login"
                                label="Allow Login"
                                :error-messages="errors.can_login"
                            ></v-checkbox>
                        </v-col>
                    </v-row>

                    <small class="text--secondary">
                        * indicates required field
                    </small>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green" dark @click="onSave">Save</v-btn>
                        <v-btn @click="$router.go(-1)">Cancel</v-btn>
                    </v-card-actions>
                </v-container>
            </v-form>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            valid: false,
            showPassword: false,
            showPasswordConfirmation: false,
            employees: [],
            form: {
                name: "",
                username: "",
                email: "",
                password: "",
                password_confirmation: "",
                employee: 0,
                is_admin: false,
                can_login: false
            },
            rules: {
                password: [
                    v => !!v || "Password is required",
                    v =>
                        v.length >= 8 ||
                        "Password must be at least 8 characters"
                ],
                password_confirmation: [
                    v => !!v || "Retype password is required",
                    v =>
                        this.form.password ===
                            this.form.password_confirmation ||
                        "Passwords do not match"
                ]
            },
            errors: {
                is_admin: [],
                can_login: [],
                name: [],
                username: [],
                email: [],
                password: [],
                password_confirmation: []
            }
        };
    },
    methods: {
        loadEmployees() {
            let _this = this;
            axios
                .get(`/api/data/employees?no_user=true&user_id=${null}`)
                .then(response => {
                    _this.employees = response.data.data;

                    _this.employees.unshift({ id: 0, fullname: "None" });
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);
                });
        },
        onSave() {
            let _this = this;

            _this.$refs.form.validate();

            if (_this.$refs.form.validate()) {
                axios
                    .post("/api/users", {
                        name: _this.form.name,
                        username: _this.form.username,
                        email: _this.form.email,
                        password: _this.form.password,
                        password_confirmation: _this.form.password_confirmation,
                        is_admin: _this.form.is_admin,
                        can_login: _this.form.can_login,
                        employee_id: _this.form.employee
                    })
                    .then(function(response) {
                        _this.successDialog(
                            "Success",
                            "User created successfully"
                        );

                        _this.$router.push({ name: "admin.users.index" });
                    })
                    .catch(function(error) {
                        console.log(error);
                        console.log(error.response);

                        _this.errors = error.response.data.errors;

                        _this.errorDialog("Error", "Please contact tech support");
                    });

                return;
            }
        }
    },
    created() {
        this.loadEmployees();
    }
};
</script>
