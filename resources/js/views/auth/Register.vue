<template>
    <div>
        <v-main>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="4">
                        <v-card class="elevation-12">
                            <v-toolbar color="green" dark flat>
                                <v-toolbar-title>Registration</v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                            <v-card-text>
                                <v-form ref="form" v-model="valid">
                                    <v-text-field
                                        v-model="name"
                                        :rules="rules.name"
                                        :error-messages="errors.name"
                                        @input="
                                            () => {
                                                errors.name = [];
                                            }
                                        "
                                        :counter="150"
                                        color="success"
                                        label="Name"
                                        name="name"
                                        prepend-icon="mdi-account"
                                        type="text"
                                    ></v-text-field>

                                    <v-text-field
                                        v-model="username"
                                        :rules="rules.username"
                                        :error-messages="errors.username"
                                        :counter="50"
                                        @input="
                                            () => {
                                                errors.username = [];
                                            }
                                        "
                                        color="success"
                                        label="Username"
                                        name="username"
                                        prepend-icon="mdi-account"
                                        type="text"
                                    ></v-text-field>

                                    <v-text-field
                                        v-model="email"
                                        :rules="rules.email"
                                        :error-messages="errors.email"
                                        @input="
                                            () => {
                                                errors.email = [];
                                            }
                                        "
                                        color="success"
                                        label="Email Address"
                                        name="email"
                                        prepend-icon="mdi-account"
                                        type="text"
                                    ></v-text-field>

                                    <v-text-field
                                        v-model="password"
                                        :rules="rules.password"
                                        :error-messages="errors.password"
                                        @input="
                                            () => {
                                                errors.password = [];
                                            }
                                        "
                                        color="success"
                                        label="Password"
                                        name="password"
                                        prepend-icon="mdi-lock"
                                        type="password"
                                    ></v-text-field>

                                    <v-text-field
                                        v-model="password_confirmation"
                                        :rules="rules.password_confirmation"
                                        :error-messages="
                                            errors.password_confirmation
                                        "
                                        @input="
                                            () => {
                                                errors.password_confirmation = [];
                                            }
                                        "
                                        color="success"
                                        label="Re-type Password"
                                        name="confirm_password"
                                        prepend-icon="mdi-lock"
                                        type="password"
                                    ></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="green" text to="/login">
                                    Login
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-btn color="green" @click="onRegister">
                                    Register
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </div>
</template>

<script>
export default {
    name: "register",
    data() {
        return {
            name: "",
            username: "",
            email: "",
            password: "",
            password_confirmation: "",
            rules: {
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
                        "Username must be less than 100 characters"
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
                name: [],
                username: [],
                email: [],
                password: [],
                password_confirmation: []
            },
            valid: false
        };
    },
    methods: {
        onRegister() {
            this.$refs.form.validate();
            if (this.$refs.form.validate()) {
                axios
                    .post("/api/register", {
                        name: this.name,
                        username: this.username,
                        email: this.email,
                        password: this.password,
                        password_confirmation: this.password_confirmation
                    })
                    .then(response => {
                        thids.mixin_successDialog(response.data.status, response.data.message);
                        this.$router.push({ name: "login" });
                    })
                    .catch(error => {
                        this.mixin_showErrors(error);
                        this.errors = error.response.data.errors;
                    });
                return;
            }
        }
    }
};
</script>
