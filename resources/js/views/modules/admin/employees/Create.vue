<template>
    <div>
        <v-container v-if="loader" style="height: 400px;">
            <v-row class="fill-height" align-content="center" justify="center">
                <v-col class="subtitle-1 text-center" cols="12">
                    Loading, Please wait...
                </v-col>
                <v-col cols="6">
                    <v-progress-linear
                        color="green accent-4"
                        indeterminate
                        rounded
                        height="6"
                    ></v-progress-linear>
                </v-col>
            </v-row>
        </v-container>
        <v-card v-else class="elevation-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title success--text">New Employee</h4>
            </v-card-title>

            <v-form ref="form" v-model="valid">
                <v-expansion-panels flat v-model="panel" multiple>
                    <v-expansion-panel>
                        <v-expansion-panel-header>
                            <div class="overline green--text">
                                Basic Details
                            </div>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-row>
                                <v-col cols="12" md="4">
                                    <v-autocomplete
                                        v-model="form.job"
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
                                        :counter="100"
                                        :error-messages="errors.middle_name"
                                        @input="errors.middle_name = []"
                                        label="Middle Name"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                    <v-text-field
                                        v-model="form.last_name"
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
                                            :max="maxDate"
                                        >
                                        </v-date-picker>
                                    </v-menu>
                                </v-col>

                                <v-col cols="12" md="4">
                                    <v-text-field
                                        v-model="form.mobile_number"
                                        :counter="30"
                                        :error-messages="errors.mobile_number"
                                        @input="errors.mobile_number = []"
                                        label="Mobile Number *"
                                        type="number"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                    <v-text-field
                                        v-model="form.telephone_number"
                                        :counter="30"
                                        :error-messages="
                                            errors.telephone_number
                                        "
                                        @input="errors.telephone_number = []"
                                        label="Telephone Number"
                                        type="number"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                    <v-text-field
                                        v-model="form.email"
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
                                        :error-messages="errors.address"
                                        @input="errors.address = []"
                                        label="Address *"
                                        rows="1"
                                    ></v-textarea>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12" md="4">
                                    <v-checkbox
                                        v-model="form.has_fund"
                                        label="has Revolving Fund"
                                        :error-messages="errors.has_fund"
                                    ></v-checkbox>
                                </v-col>
                            </v-row>

                            <v-row v-if="form.has_fund">
                                <v-col cols="12" md="4">
                                    <v-text-field
                                        v-model="form.fund"
                                        label="Revolving Fund"
                                        :error-messages="errors.fund"
                                        @input="errors.fund = []"
                                        type="number"
                                    >
                                    </v-text-field>
                                </v-col>
                            </v-row>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header>
                            <div class="overline green--text">
                                Account Details
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
                                        :counter="50"
                                        :error-messages="errors.username"
                                        @input="errors.username = []"
                                        label="Username *"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="4">
                                    <v-checkbox
                                        v-model="form.can_login"
                                        label="Allow Login"
                                        :error-messages="errors.can_login"
                                    ></v-checkbox>
                                </v-col>
                                <v-col cols="12" md="4">
                                    <v-radio-group v-model="form.role" row label="Role">
                                        <v-radio
                                            label="Standard User"
                                            value="Standard User"
                                        ></v-radio>
                                        <v-radio
                                            label="Administrator"
                                            value="Administrator"
                                        ></v-radio>
                                    </v-radio-group>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col>
                                    <v-data-table
                                        v-model="form.permissions"
                                        show-select
                                        :items-per-page="-1"
                                        :headers="headers"
                                        :items="permissions"
                                        group-by="category"
                                    ></v-data-table>
                                </v-col>
                            </v-row>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>

                <small class="ml-4 text--secondary">
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
import moment from "moment";

export default {
    data() {
        return {
            loader: false,
            panel: [0, 1, 2],
            valid: false,
            menu: false,
            jobs: [],
            permissions: [],
            headers: [{ text: "Permission", value: "name", sortable: false }],
            form: {
                code: null,
                first_name: null,
                middle_name: "",
                last_name: null,
                suffix: "",
                gender: null,
                birthdate: null,
                mobile_number: null,
                telephone_number: "",
                address: null,
                fund: 0,
                remaining_fund: 0,
                username: "",
                email: null,
                password: "password",
                password_confirmation: "password",
                is_admin: false,
                is_superadmin: false,
                can_login: true,
                type: "employee",
                job: null,
                permissions: [],
                role: "Standard User"
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
                can_login: [],
                has_fund: [],
                fund: []
            }
        };
    },
    methods: {
        loadJobs() {
            let _this = this;

            axios
                .get("/api/data/jobs?only=true")
                .then(response => {
                    _this.jobs = response.data.data;
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);

                    _this.mixin_errorDialog(
                        `Error ${error.response.status}`,
                        error.response.statusText
                    );
                });
        },
        loadPermissions() {
            let _this = this;

            axios
                .get(`/api/data/permissions?role=${_this.form.role}`)
                .then(response => {
                    console.log(response);
                    _this.permissions = response.data;

                    _this.form.permissions = response.data;
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);

                    _this.mixin_errorDialog(
                        `Error ${error.response.status}`,
                        error.response.statusText
                    );
                });
        },
        onRefresh() {
            Object.assign(this.$data, this.$options.data.apply(this));
        },
        changeRole() {
            if (this.form.role == "Administrator") {
                this.form.permissions = this.permissions;
            } else {
                this.form.permissions = [];
            }
        },
        onSave() {
            let _this = this;
            let fund = 0;
            let is_administrator =
                this.form.role == "Administrator" ? true : false;

            if (this.form.has_fund) {
                fund = this.form.fund == "" ? 0 : this.form.fund;
            }

            _this.$refs.form.validate();

            if (_this.$refs.form.validate()) {
                _this.loader = true;

                axios
                    .post("/api/users", {
                        code: _this.form.code,
                        first_name: _this.form.first_name,
                        middle_name: _this.form.middle_name,
                        last_name: _this.form.last_name,
                        suffix: _this.form.suffix,
                        gender: _this.form.gender,
                        birthdate: _this.form.birthdate,
                        mobile_number: _this.form.mobile_number,
                        telephone_number: _this.form.telephone_number,
                        address: _this.form.address,
                        fund: fund,
                        remaining_fund: fund,
                        username: _this.form.username,
                        email: _this.form.email,
                        password: "password",
                        password_confirmation: "password",
                        is_admin: is_administrator,
                        is_superadmin: false,
                        can_login: _this.form.can_login,
                        type: "",
                        permissions: _this.form.permissions,
                        job_id: _this.form.job
                    })
                    .then(function(response) {
                        _this.$dialog.message.success(
                            "Employee created successfully.",
                            {
                                position: "top-right",
                                timeout: 2000
                            }
                        );

                        _this.$router.push({ name: "admin.users.index" });

                        _this.loader = false;
                    })
                    .catch(function(error) {
                        _this.loader = false;

                        console.log(error);
                        console.log(error.response);

                        if (error.response) {
                            if (error.response.data) {
                                _this.errors = error.response.data.errors;
                            }
                        }

                        _this.mixin_errorDialog(
                            `Error ${error.response.status}`,
                            error.response.statusText
                        );
                    });

                return;
            }
        }
    },
    computed: {
        maxDate() {
            return moment().format("YYYY-MM-DD");
        }
    },
    watch: {
        "form.role": function() {
            this.loadPermissions();
        }
    },
    created() {
        // this.$store.dispatch("AUTH_USER");
        this.loadJobs();
        this.loadPermissions();
    }
};
</script>
