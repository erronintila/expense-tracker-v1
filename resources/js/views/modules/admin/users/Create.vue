<template>
    <v-app>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn to="/admin/users" class="mr-3" icon>
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
                                v-model="name"
                                :rules="rules.name"
                                :counter="150"
                                :error-messages="errors.name"
                                @input="errors.name = []"
                                label="Name *"
                                required
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="username"
                                :rules="rules.username"
                                :counter="50"
                                :error-messages="errors.username"
                                @input="errors.username = []"
                                label="Username *"
                                required
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="email"
                                :rules="rules.email"
                                :error-messages="errors.email"
                                @input="errors.email = []"
                                label="Email Address *"
                                required
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="password"
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
                                v-model="password_confirmation"
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
                                v-model="employee"
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
                                v-model="is_admin"
                                label="Is Administrator"
                                :error-messages="errors.is_admin"
                            ></v-checkbox>
                        </v-col>
                    </v-row>

                    <small class="text--secondary">
                        * indicates required field
                    </small>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green" dark @click="onSave">Save</v-btn>
                        <v-btn to="/admin/users">Cancel</v-btn>
                    </v-card-actions>
                </v-container>
            </v-form>
        </v-card>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            valid: false,
            showPassword: false,
            showPasswordConfirmation: false,
            is_admin: false,
            name: "",
            username: "",
            email: "",
            password: "",
            password_confirmation: "",
            employee: 0,
            employees: [],
            rules: {
                is_admin: [],
                name: [
                    v => !!v || "Name is required",
                    v =>
                        v.length <= 150 ||
                        "Name must be less than 150 characters"
                ],
                username: [
                    v => !!v || "Username is required",
                    v =>
                        v.length <= 50 ||
                        "Username must be less than 50 characters"
                ],
                email: [
                    v => !!v || "E-mail is required",
                    v => /.+@.+/.test(v) || "E-mail must be valid"
                ],
                password: [
                    v => !!v || "Password is required",
                    v =>
                        v.length >= 8 ||
                        "Password must be at least 8 characters"
                ],
                password_confirmation: [
                    v => !!v || "Retype password is required",
                    v =>
                        this.password === this.password_confirmation ||
                        "Passwords do not match"
                ]
            },
            errors: {
                is_admin: [],
                name: [],
                username: [],
                email: [],
                password: [],
                password_confirmation: []
            }
        };
    },
    methods: {
        onRefresh() {
            Object.assign(this.$data, this.$options.data.apply(this));
        },
        loadEmployees() {
            let _this = this;
            axios
                .get(`/api/data/employees?no_user=true&user_id=${null}`)
                .then(response => {
                    _this.employees = response.data.data;

                    _this.employees.unshift({id: 0, fullname: "None"});
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
                        name: _this.name,
                        username: _this.username,
                        email: _this.email,
                        password: _this.password,
                        password_confirmation: _this.password_confirmation,
                        is_admin: _this.is_admin,
                        employee_id: _this.employee
                    })
                    .then(function(response) {
                        // _this.onRefresh();

                        _this.$dialog.message.success(
                            "User created successfully.",
                            {
                                position: "top-right",
                                timeout: 2000
                            }
                        );

                        _this.$router.push({ name: "admin.users.index" });
                    })
                    .catch(function(error) {
                        console.log(error);

                        _this.errors = error.response.data.errors;
                    });

                return;
            }
        }
    },
    created() {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " + localStorage.getItem("access_token");

        this.loadEmployees();
    }
};
</script>
