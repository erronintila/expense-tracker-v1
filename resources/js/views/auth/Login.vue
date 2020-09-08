<template>
    <v-app id="inspire">
        <v-main>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="4">
                        <v-card class="elevation-12">
                            <v-toolbar color="green" dark flat>
                                <v-toolbar-title>
                                    Expense Tracker
                                </v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                            <v-card-text>
                                <v-form ref="form" v-model="valid">
                                    <v-text-field
                                        v-model="email"
                                        :rules="rules.email"
                                        label="Email Address"
                                        name="email"
                                        prepend-icon="mdi-account"
                                        type="email"
                                    ></v-text-field>

                                    <v-text-field
                                        v-model="password"
                                        :rules="rules.password"
                                        label="Password"
                                        name="password"
                                        prepend-icon="mdi-lock"
                                        type="password"
                                    ></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="green" text to="/register">
                                    Register
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-btn color="green" dark @click="onLogin">
                                    Login
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
    name: "login",
    data() {
        return {
            username: "",
            email: "",
            password: "",
            rules: {
                name: [],
                username: [],
                email: [
                    v => !!v || "E-mail is required",
                    v => /.+@.+/.test(v) || "E-mail must be valid"
                ],
                password: [v => !!v || "Password is required"]
            },
            valid: false
        };
    },
    methods: {
        onLogin() {
            let _this = this;

            _this.$refs.form.validate();

            if (_this.$refs.form.validate()) {
                this.$store
                    .dispatch("AUTH_LOGIN", {
                        email: _this.email,
                        password: _this.password
                    })
                    .then(response => {
                        this.$router.push({ name: "admin.dashboard.index" });
                    })
                    .catch(error => {
                        console.log(error);

                        _this.$dialog.message.error("Unauthorized: Error username/password", {
                            position: "top-right",
                            timeout: 2000
                        });
                    });
            }
        }
    }
};
</script>
