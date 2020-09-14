<template>
    <v-app>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn to="/admin/users" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">Edit User</h4>
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
                                color="success"
                                label="Name"
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
                                color="success"
                                label="Username"
                                required
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="email"
                                :rules="rules.email"
                                :error-messages="errors.email"
                                @input="errors.email = []"
                                color="success"
                                label="Email Address"
                                required
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
                        "Username must be less than 50 characters"
                ],
                email: [
                    v => !!v || "E-mail is required",
                    v => /.+@.+/.test(v) || "E-mail must be valid"
                ]
            },
            errors: {
                name: [],
                username: [],
                email: []
            }
        };
    },
    methods: {
        getData() {
            let _this = this;

            axios
                .get("/api/users/" + _this.$route.params.id)
                .then(response => {
                    let data = response.data.data;

                    _this.name = data.name;
                    _this.username = data.username;
                    _this.email = data.email;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        onRefresh() {
            Object.assign(this.$data, this.$options.data.apply(this));
        },
        onSave() {
            let _this = this;

            _this.$refs.form.validate();

            if (_this.$refs.form.validate()) {
                axios
                    .put("/api/users/" + _this.$route.params.id, {
                        action: "update",
                        name: _this.name,
                        username: _this.username,
                        email: _this.email
                    })
                    .then(function(response) {
                        // _this.onRefresh();

                        _this.$dialog.message.success(
                            "User updated successfully.",
                            {
                                position: "top-right",
                                timeout: 2000
                            }
                        );

                        _this.$router.push({ name: "admin.users.index" });
                    })
                    .catch(function(error) {
                        console.log(error.response);

                        _this.errors = error.response.data.errors;
                    });

                return;
            }
        }
    },
    created() {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " + localStorage.getItem("access_token");

        this.getData();
    }
};
</script>
