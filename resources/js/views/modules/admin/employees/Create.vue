<template>
    <v-app>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn to="/admin/employees" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title success--text">New Employee</h4>
            </v-card-title>

            <v-form ref="form" v-model="valid">
                <v-container>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-select
                                v-model="job"
                                :rules="rules.job"
                                :items="jobs"
                                :error-messages="errors.job_id"
                                @input="errors.job_id = []"
                                item-text="name"
                                item-value="id"
                                label="Job Designation *"
                                color="success"
                                required
                            >
                            </v-select>
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
                                color="success"
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
                                color="success"
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
                                color="success"
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
                                color="success"
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
                                color="success"
                                required
                            >
                            </v-select>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-menu
                                ref="menu"
                                v-model="menu"
                                :close-on-content-click="false"
                                :return-value.sync="birthdate"
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
                                        color="success"
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
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        text
                                        color="success"
                                        @click="menu = false"
                                    >
                                        Cancel
                                    </v-btn>
                                    <v-btn
                                        text
                                        color="success"
                                        @click="$refs.menu.save(birthdate)"
                                    >
                                        OK
                                    </v-btn>
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
                                color="success"
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
                                color="success"
                                type="number"
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="email"
                                :rules="rules.email"
                                :error-messages="errors.email"
                                @input="errors.email = []"
                                label="Email Address *"
                                color="success"
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
                                color="success"
                                label="Address *"
                                rows="1"
                            ></v-textarea>
                        </v-col>
                    </v-row>

                    <small style="opacity: 0.5">
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
            first_name: null,
            middle_name: "",
            last_name: null,
            suffix: "",
            gender: null,
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
                        !!v && v.length <= 100 ||
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
                        (v && v.length <= 100) ||
                        "Last name must be less than 100 characters"
                ],
                suffix: [
                    // v =>
                    //     (v !== null && v.length <= 30) ||
                    //     "Suffix must be less than 30 characters"
                ],
                gender: [v => !!v || "Gender is required"],
                birthdate: [v => !!v || "Birthdate is required"],
                job: [v => !!v || "Job designation is required"],
                mobile_number: [v => !!v || "Mobile number is required", v =>
                        (!!v && v.length <= 30) ||
                        "Mobile number must be less than 30 characters"],
                telephone_number: [v =>
                        (v !== null && v.length <= 30) ||
                        "Telephone number must be less than 30 characters"],
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
        loadJobs() {
            let _this = this;

            axios
                .get("/api/jobs")
                .then(response => {
                    _this.jobs = response.data.data;
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

            _this.$refs.form.validate();

            if (_this.$refs.form.validate()) {
                axios
                    .post("/api/employees", {
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
                            "Employee created successfully.",
                            {
                                position: "top-right",
                                timeout: 2000
                            }
                        );

                        _this.$router.push({ name: "admin.employees.index" });
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

        this.loadJobs();
    }
};
</script>
