<template>
    <div>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title success--text">Edit Employee</h4>
            </v-card-title>

            <v-form ref="form" v-model="valid">
                <v-expansion-panels v-model="panel" multiple>
                    <v-expansion-panel>
                        <v-expansion-panel-header>
                            <div class="green--text">
                                Basic Information
                            </div>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-row>
                                <v-col cols="12" md="4">
                                    <v-autocomplete
                                        v-model="form.job"
                                        :rules="validation.required"
                                        :items="jobs"
                                        :error-messages="errors.job_id"
                                        @input="errors.job_id = []"
                                        item-text="name"
                                        item-value="id"
                                        label="Job Designation *"
                                        required
                                    >
                                    </v-autocomplete>
                                </v-col>

                                <v-col cols="12" md="4">
                                    <v-text-field
                                        v-model="form.code"
                                        :rules="[
                                            ...validation.required,
                                            ...validation.minLength(100)
                                        ]"
                                        :counter="100"
                                        :error-messages="errors.code"
                                        @input="errors.code = []"
                                        label="Code *"
                                        required
                                    ></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12" md="4">
                                    <v-text-field
                                        v-model="form.first_name"
                                        :rules="[
                                            ...validation.required,
                                            ...validation.minLength(100)
                                        ]"
                                        :counter="100"
                                        :error-messages="errors.first_name"
                                        @input="errors.first_name = []"
                                        label="First Name *"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                    <v-text-field
                                        v-model="form.middle_name"
                                        :rules="[]"
                                        :counter="100"
                                        :error-messages="errors.middle_name"
                                        @input="errors.middle_name = []"
                                        label="Middle Name"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                    <v-text-field
                                        v-model="form.last_name"
                                        :rules="[
                                            ...validation.required,
                                            ...validation.minLength(100)
                                        ]"
                                        :counter="100"
                                        :error-messages="errors.last_name"
                                        @input="errors.last_name = []"
                                        label="Last Name *"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                    <v-combobox
                                        v-model="form.suffix"
                                        :rules="[]"
                                        :counter="30"
                                        :items="['Jr', 'Sr', 'II', 'III']"
                                        :error-messages="errors.suffix"
                                        @input="errors.suffix = []"
                                        label="Suffix"
                                    ></v-combobox>
                                </v-col>

                                <v-col cols="12" md="4">
                                    <v-select
                                        v-model="form.gender"
                                        :rules="validation.required"
                                        :items="['Male', 'Female']"
                                        :error-messages="errors.gender"
                                        @input="errors.gender = []"
                                        label="Gender *"
                                        required
                                    >
                                    </v-select>
                                </v-col>

                                <v-col cols="12" md="4">
                                    <v-menu
                                        ref="menu"
                                        v-model="menu"
                                        :close-on-content-click="false"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="290px"
                                    >
                                        <template
                                            v-slot:activator="{ on, attrs }"
                                        >
                                            <v-text-field
                                                v-model="form.birthdate"
                                                :rules="validation.required"
                                                :error-messages="
                                                    errors.birthdate
                                                "
                                                @input="errors.birthdate = []"
                                                label="Birthdate *"
                                                readonly
                                                v-bind="attrs"
                                                v-on="on"
                                            ></v-text-field>
                                        </template>
                                        <v-date-picker
                                            v-model="form.birthdate"
                                            no-title
                                            scrollable
                                            color="success"
                                        >
                                        </v-date-picker>
                                    </v-menu>
                                </v-col>

                                <v-col cols="12" md="4">
                                    <v-text-field
                                        v-model="form.mobile_number"
                                        :rules="[]"
                                        :counter="30"
                                        :error-messages="errors.mobile_number"
                                        @input="errors.mobile_number = []"
                                        label="Mobile Number *"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                    <v-text-field
                                        v-model="form.telephone_number"
                                        :rules="[]"
                                        :counter="30"
                                        :error-messages="
                                            errors.telephone_number
                                        "
                                        @input="errors.telephone_number = []"
                                        label="Telephone Number"
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
                                    ></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12">
                                    <v-textarea
                                        v-model="form.address"
                                        :rules="[]"
                                        :error-messages="errors.address"
                                        @input="errors.address = []"
                                        label="Address *"
                                        rows="1"
                                    ></v-textarea>
                                </v-col>
                            </v-row>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header>
                            <div class="green--text">
                                Account Information
                            </div>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <small class="text--secondary">
                                Default Password: "password"
                            </small>
                            <v-row>
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
                                    <v-select
                                        v-model="form.role"
                                        label="Role *"
                                        :items="[
                                            'Standard User',
                                            'Administrator'
                                        ]"
                                        :error-messages="errors.role"
                                        @change="changeRole"
                                    ></v-select>
                                </v-col>
                                <v-col cols="12" md="4">
                                    <v-checkbox
                                        v-model="form.can_login"
                                        label="Allow Login"
                                        :error-messages="errors.can_login"
                                    ></v-checkbox>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col>
                                    <v-data-table
                                        v-if="form.role == 'Administrator'"
                                        v-model="selected"
                                        show-select
                                        :headers="headers"
                                        :items="permissions"
                                    ></v-data-table>
                                </v-col>
                            </v-row>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>

                <small class="text--secondary">
                    * indicates required field
                </small>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="success" dark @click="onSave">Save</v-btn>
                    <v-btn @click="$router.go(-1)">Cancel</v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            panel: [0, 1],
            valid: false,
            menu: false,
            jobs: [],
            permissions: [],
            selected: [],
            headers: [{ text: "Permission", value: "name", sortable: false }],
            form: {
                code: null,
                first_name: null,
                middle_name: "",
                last_name: null,
                suffix: "",
                gender: null,
                birthdate: null,
                job: null,
                mobile_number: null,
                telephone_number: "",
                email: null,
                address: null,
                role: "Standard User",
                username: "",
                can_login: true
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
                can_login: []
            }
        };
    },
    methods: {
        getData() {
            let _this = this;

            this.loadPermissions().then(
                axios
                    .get("/api/employees/" + _this.$route.params.id)
                    .then(response => {
                        let data = response.data.data;

                        _this.form.code = data.code;
                        _this.form.first_name = data.first_name;
                        _this.form.middle_name = data.middle_name;
                        _this.form.last_name = data.last_name;
                        _this.form.suffix = data.suffix;
                        _this.form.gender = data.gender;
                        _this.form.birthdate = data.birthdate;
                        _this.form.job = data.job.id;
                        _this.form.mobile_number = data.mobile_number;
                        _this.form.telephone_number = data.telephone_number;
                        _this.form.email = data.email;
                        _this.form.address = data.address;
                        _this.selected = data.permissions;
                        _this.form.role = data.role[0];
                        _this.form.username = data.user.username;
                        _this.form.can_login = data.user.can_login;
                    })
                    .catch(error => {
                        console.log(error);
                        console.log(error.response);

                        _this.errorDialog(
                            `Error ${error.response.status}`,
                            error.response.statusText
                        );
                    })
            );
        },
        loadJobs() {
            let _this = this;

            axios
                .get("/api/data/jobs")
                .then(response => {
                    _this.jobs = response.data.data;
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);

                    _this.errorDialog(
                        `Error ${error.response.status}`,
                        error.response.statusText
                    );
                });
        },
        loadPermissions() {
            let _this = this;

            return new Promise((resolve, reject) => {
                axios
                    .get("/api/data/permissions")
                    .then(response => {
                        _this.permissions = response.data;

                        resolve();
                    })
                    .catch(error => {
                        console.log(error);
                        console.log(error.response);

                        _this.errorDialog(
                            `Error ${error.response.status}`,
                            error.response.statusText
                        );

                        reject();
                    });
            });
        },
        onRefresh() {
            Object.assign(this.$data, this.$options.data.apply(this));
        },
        changeRole() {
            if (this.form.role == "Administrator") {
                this.selected = this.permissions;
            } else {
                this.selected = [];
            }
        },
        onSave() {
            let _this = this;

            _this.$refs.form.validate();

            if (_this.$refs.form.validate()) {
                axios
                    .put("/api/employees/" + _this.$route.params.id, {
                        action: "update",
                        code: _this.form.code,
                        first_name: _this.form.first_name,
                        middle_name: _this.form.middle_name,
                        last_name: _this.form.last_name,
                        suffix: _this.form.suffix,
                        gender: _this.form.gender,
                        birthdate: _this.form.birthdate,
                        job_id: _this.form.job,
                        mobile_number: _this.form.mobile_number,
                        telephone_number: _this.form.telephone_number,
                        email: _this.form.email,
                        address: _this.form.address,
                        username: _this.form.username,
                        can_login: _this.form.can_login,
                        role: _this.form.role,
                        permissions: _this.selected
                    })
                    .then(function(response) {
                        _this.$dialog.message.success(
                            "Employee updated successfully.",
                            {
                                position: "top-right",
                                timeout: 2000
                            }
                        );

                        _this.$router.push({ name: "admin.employees.index" });
                    })
                    .catch(function(error) {
                        console.log(error);
                        console.log(error.response);

                        _this.errorDialog(
                            `Error ${error.response.status}`,
                            error.response.statusText
                        );

                        _this.errors = error.response.data.errors;
                    });

                return;
            }
        }
    },
    created() {
        this.loadJobs();
        this.getData();
    }
};
</script>
