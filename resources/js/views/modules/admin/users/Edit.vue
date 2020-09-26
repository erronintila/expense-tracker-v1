<template>
    <v-app>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
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
                        <v-btn @click="$router.go(-1)">Cancel</v-btn>
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
                ]
            },
            errors: {
                is_admin: [],
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
                    _this.is_admin = data.is_admin;
                    _this.employee = data.employee !== null ? data.employee.id : 0;
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);
                });
        },
        loadEmployees() {
            let _this = this;
            axios
                .get(`/api/data/employees?no_user=true&user_id=${_this.$route.params.id}`)
                .then(response => {
                    _this.employees = response.data.data;

                    _this.employees.unshift({ id: 0, fullname: "None" });
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);
                });
        },
        onRefresh() {
            Object.assign(this.$data, this.$options.data.apply(this));
        },
        onSave() {
            let _this = this;

            console.log(_this.employee);

            // return;
            _this.$refs.form.validate();

            if (_this.$refs.form.validate()) {
                axios
                    .put("/api/users/" + _this.$route.params.id, {
                        action: "update",
                        name: _this.name,
                        username: _this.username,
                        email: _this.email,
                        is_admin: _this.is_admin,
                        employee_id: _this.employee !== null ? _this.employee : 0
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
                        console.log(error);
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
        this.loadEmployees();
    }
};
</script>
