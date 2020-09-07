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
                                :counter="100"
                                label="Name"
                                required
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="username"
                                :rules="rules.username"
                                :counter="20"
                                label="Username"
                                required
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="email"
                                :rules="rules.email"
                                label="Email Address"
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
                                label="Password"
                                hint="At least 8 characters"
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
                                label="Re-type Password"
                                required
                                @click:append="
                                    showPasswordConfirmation = !showPasswordConfirmation
                                "
                            ></v-text-field>
                        </v-col>
                    </v-row>

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
            name: "",
            username: "",
            email: "",
            password: "",
            password_confirmation: "",
            rules: {
                name: [
                    v => !!v || "Name is required",
                    v =>
                        v.length <= 100 ||
                        "Name must be less than 100 characters"
                ],
                username: [
                    v => !!v || "Username is required",
                    v =>
                        v.length <= 50 ||
                        "Username must be less than 20 characters"
                ],
                email: [
                    v => !!v || "E-mail is required",
                    v => /.+@.+/.test(v) || "E-mail must be valid"
                ],
                password: [v => !!v || "Password is required"],
                password_confirmation: [
                    v => !!v || "Confirm Password is required"
                ]
            }
        };
    },
    methods: {
        onRefresh() {
            this.name = "";
            this.username = "";
            this.email = "";
            this.password = "";
            this.password_confirmation = "";

            this.$refs.form.resetValidation();
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
                        password_confirmation: _this.password_confirmation
                    })
                    .then(function(response) {
                        console.log(response.data);
                        _this.onRefresh();

                        _this.$dialog.message.success(
                            "User created successfully.",
                            {
                                position: "top-right",
                                timeout: 2000
                            }
                        );
                    })
                    .catch(function(error) {
                        console.log(error.response);
                    });

                return;
            }

            console.log("Error");
        }
    },
    created() {
        console.log("Users create component mounted.");
    },
};
</script>
