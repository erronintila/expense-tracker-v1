<template>
    <v-app id="inspire">
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
                                        label="Name"
                                        name="name"
                                        prepend-icon="mdi-account"
                                        type="text"
                                    ></v-text-field>

                                    <v-text-field
                                        v-model="username"
                                        :rules="rules.username"
                                        label="Username"
                                        name="username"
                                        prepend-icon="mdi-account"
                                        type="text"
                                    ></v-text-field>

                                    <v-text-field
                                        v-model="email"
                                        :rules="rules.email"
                                        label="Email Address"
                                        name="email"
                                        prepend-icon="mdi-account"
                                        type="text"
                                    ></v-text-field>

                                    <v-text-field
                                        v-model="password"
                                        :rules="rules.password"
                                        label="Password"
                                        name="password"
                                        prepend-icon="mdi-lock"
                                        type="password"
                                    ></v-text-field>

                                    <v-text-field
                                        v-model="confirm_password"
                                        :rules="rules.confirm_password"
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
    </v-app>
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
            confirm_password: "",
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
                        v.length <= 100 ||
                        "Username must be less than 100 characters"
                ],
                email: [
                    v => !!v || "E-mail is required",
                    v => /.+@.+/.test(v) || "E-mail must be valid"
                ],
                password: [v => !!v || "Password is required"],
                confirm_password: []
            },
            valid: false
        };
    },
    methods: {
        onRegister() {
            console.log("Register successfully.");
        }
    }
};
</script>
