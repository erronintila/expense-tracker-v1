<template>
    <v-app>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn to="/admin/employees" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">New Employee</h4>
            </v-card-title>

            <v-form ref="form" v-model="valid">
                <v-container>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-select
                                v-model="job"
                                :rules="rules.job"
                                :items="jobs"
                                item-text="name"
                                item-value="id"
                                label="Job Designation"
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
                                label="First Name"
                                required
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="middle_name"
                                :rules="rules.middle_name"
                                :counter="100"
                                label="Middle Name"
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="last_name"
                                :rules="rules.last_name"
                                :counter="100"
                                label="Last Name"
                                required
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-combobox
                                v-model="suffix"
                                :rules="rules.suffix"
                                :items="['Jr', 'Sr', 'II', 'III']"
                                label="Suffix"
                            ></v-combobox>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-select
                                v-model="gender"
                                :rules="rules.gender"
                                :items="['Male', 'Female']"
                                label="Gender"
                                required
                            >
                            </v-select>
                            <!-- <v-radio-group v-model="gender" row>
                                Gender&nbsp;&nbsp;
                                <v-radio label="Male" value="Male"></v-radio>
                                <v-radio
                                    label="Female"
                                    value="Female"
                                ></v-radio>
                            </v-radio-group> -->
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
                                        label="Birthdate"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                    v-model="birthdate"
                                    no-title
                                    scrollable
                                >
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        text
                                        color="primary"
                                        @click="menu = false"
                                        >Cancel
                                    </v-btn>
                                    <v-btn
                                        text
                                        color="primary"
                                        @click="$refs.menu.save(birthdate)"
                                        >OK
                                    </v-btn>
                                </v-date-picker>
                            </v-menu>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="phone"
                                :rules="rules.phone"
                                :counter="30"
                                label="Phone"
                                required
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-textarea
                                v-model="address"
                                rows="1"
                                label="Address"
                            ></v-textarea>
                        </v-col>
                    </v-row>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green" dark @click="onSave">Save</v-btn>
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
            address: "",
            phone: "",
            is_active: true,
            job: {},
            jobs: [],
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
                        v.length <= 100 ||
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
                address: [],
                phone: [],
                is_active: [],
                job: [v => !!v || "Job designation is required"]
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
            this.$refs.form.reset();
            this.$refs.form.resetValidation();
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
                        address: _this.address,
                        phone: _this.phone,
                        is_active: _this.is_active,
                        job_id: _this.job
                    })
                    .then(function(response) {
                        _this.onRefresh();

                        _this.$dialog.message.success(
                            "Employee created successfully.",
                            {
                                position: "top-right",
                                timeout: 2000
                            }
                        );
                    })
                    .catch(function(error) {
                        console.log(error.response);
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
