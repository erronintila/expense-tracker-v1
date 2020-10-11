<template>
    <v-container fill-height fluid>
        <v-row align="center" justify="center">
            <v-col>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-container>
                            <v-img :src="src" class="ml-15"></v-img>
                        </v-container>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-container>
                            <v-card class="elevation-0 mr-md-15 mt-md-10" flat>
                                <v-card-title>
                                    <div class="headline mb-4 green--text">
                                        EXPENSE TRACKER
                                    </div>
                                </v-card-title>
                                <v-card-text>
                                    <v-form ref="form" v-model="valid">
                                        <v-text-field
                                            v-model="form.username"
                                            :rules="rules.username"
                                            :error-messages="errors.username"
                                            label="Username"
                                            name="username"
                                            prepend-icon="mdi-account"
                                            type="text"
                                            color="success"
                                        ></v-text-field>

                                        <v-text-field
                                            v-model="form.password"
                                            :rules="rules.password"
                                            :error-messages="errors.password"
                                            label="Password"
                                            name="password"
                                            prepend-icon="mdi-lock"
                                            type="password"
                                            color="success"
                                        ></v-text-field>
                                    </v-form>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="green" dark @click="onLogin">
                                        Login
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-container>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "login",
    data() {
        return {
            src: require("../../assets/img/login.svg"),
            form: {
                username: "",
                email: "",
                password: ""
            },
            rules: {
                username: [],
                email: [
                    v => !!v || "E-mail is required",
                    v => /.+@.+/.test(v) || "E-mail must be valid"
                ],
                password: []
            },
            errors: {
                username: [],
                email: [],
                password: []
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
                        username: _this.form.username,
                        email: _this.form.email,
                        password: _this.form.password
                    })
                    .then(response => {
                        let data = response.data;

                        window.location.replace(
                            data.user.is_admin ? "/admin" : "/"
                        );
                    })
                    .catch(function(error) {
                        console.log(error);

                        _this.errors = error.data;

                        _this.errorDialog(
                            `Error ${error.status}`,
                            error.response.statusText
                        );
                    });
            }
        }
    }
};
</script>
