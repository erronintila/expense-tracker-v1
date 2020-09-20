<template>
    <v-app>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn to="/admin/employees" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title success--text">Edit Employee</h4>
            </v-card-title>

            <v-form ref="form" v-model="valid">
                <v-container>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-autocomplete
                                v-model="job"
                                :rules="rules.job"
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
                    </v-row>

                    <v-row>
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="first_name"
                                :rules="rules.first_name"
                                :counter="100"
                                :error-messages="errors.first_name"
                                @input="errors.first_name = []"
                                label="First Name *"
                                required
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="middle_name"
                                :rules="rules.middle_name"
                                :counter="100"
                                :error-messages="errors.middle_name"
                                @input="errors.middle_name = []"
                                label="Middle Name"
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="last_name"
                                :rules="rules.last_name"
                                :counter="100"
                                :error-messages="errors.last_name"
                                @input="errors.last_name = []"
                                label="Last Name *"
                                required
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-combobox
                                v-model="suffix"
                                :rules="rules.suffix"
                                :counter="30"
                                :items="['Jr', 'Sr', 'II', 'III']"
                                :error-messages="errors.suffix"
                                @input="errors.suffix = []"
                                label="Suffix"
                            ></v-combobox>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-select
                                v-model="gender"
                                :rules="rules.gender"
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
                                transition="scale-transition"
                                offset-y
                                min-width="290px"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="birthdate"
                                        :rules="rules.birthdate"
                                        :error-messages="errors.birthdate"
                                        @input="errors.birthdate = []"
                                        label="Birthdate *"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                    v-model="birthdate"
                                    no-title
                                    scrollable
                                    color="success"
                                >
                                </v-date-picker>
                            </v-menu>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="mobile_number"
                                :rules="rules.mobile_number"
                                :counter="30"
                                :error-messages="errors.mobile_number"
                                @input="errors.mobile_number = []"
                                label="Mobile Number *"
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="telephone_number"
                                :rules="rules.telephone_number"
                                :counter="30"
                                :error-messages="errors.telephone_number"
                                @input="errors.telephone_number = []"
                                label="Telephone Number"
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="email"
                                :rules="rules.email"
                                :error-messages="errors.email"
                                @input="errors.email = []"
                                label="Email Address *"
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12">
                            <v-textarea
                                v-model="address"
                                :rules="rules.address"
                                :error-messages="errors.address"
                                @input="errors.address = []"
                                label="Address *"
                                rows="1"
                            ></v-textarea>
                        </v-col>
                    </v-row>

                    <small class="text--secondary">
                        * indicates required field
                    </small>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="success" dark @click="onSave">Save</v-btn>
                        <v-btn to="/admin/employees">Cancel</v-btn>
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
            first_name: "",
            middle_name: "",
            last_name: "",
            suffix: "",
            gender: "",
            birthdate: null,
            job: null,
            jobs: [],
            mobile_number: null,
            telephone_number: "",
            email: null,
            address: null,
            menu: false,
            rules: {
                first_name: [
                    v => !!v || "First name is required",
                    v =>
                        v.length <= 100 ||
                        "First name must be less than 100 characters"
                ],
                middle_name: [
                    v =>
                        (v !== null && v.length <= 100) ||
                        "Middle name must be less than 100 characters"
                ],
                last_name: [
                    v => !!v || "Last name is required",
                    v =>
                        v.length <= 100 ||
                        "Last name must be less than 100 characters"
                ],
                suffix: [],
                gender: [v => !!v || "Gender is required"],
                birthdate: [v => !!v || "Birthdate is required"],
                job: [v => !!v || "Job designation is required"],
                mobile_number: [v => !!v || "Mobile number is required"],
                telephone_number: [
                    v =>
                        (v !== null && v.length <= 30) ||
                        "Telephone number must be less than 30 characters"
                ],
                email: [
                    v => !!v || "E-mail is required",
                    v => /.+@.+/.test(v) || "E-mail is not valid"
                ],
                address: [v => !!v || "Address is required"]
            },
            errors: {
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
                address: []
            }
        };
    },
    methods: {
        getData() {
            let _this = this;

            axios
                .get("/api/employees/" + _this.$route.params.id)
                .then(response => {
                    let data = response.data.data;

                    _this.first_name = data.first_name;
                    _this.middle_name = data.middle_name;
                    _this.last_name = data.last_name;
                    _this.suffix = data.suffix;
                    _this.gender = data.gender;
                    _this.birthdate = data.birthdate;
                    _this.job = data.job.id;
                    _this.mobile_number = data.mobile_number;
                    _this.telephone_number = data.telephone_number;
                    _this.email = data.email;
                    _this.address = data.address;
                })
                .catch(error => {
                    console.log(error);
                });
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
                    .put("/api/employees/" + _this.$route.params.id, {
                        action: "update",
                        first_name: _this.first_name,
                        middle_name: _this.middle_name,
                        last_name: _this.last_name,
                        suffix: _this.suffix,
                        gender: _this.gender,
                        birthdate: _this.birthdate,
                        job_id: _this.job,
                        mobile_number: _this.mobile_number,
                        telephone_number: _this.telephone_number,
                        email: _this.email,
                        address: _this.address
                    })
                    .then(function(response) {
                        // _this.onRefresh();

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

                        _this.errors = error.response.data.errors;
                    });

                return;
            }
        }
    },
    created() {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " + localStorage.getItem("access_token");

        this.loadJobs();
        this.getData();
    }
};
</script>
