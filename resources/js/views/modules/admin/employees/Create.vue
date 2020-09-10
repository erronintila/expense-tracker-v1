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
                                placeholder="hello"
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
                                v-model="mobile_number"
                                :rules="rules.mobile_number"
                                :counter="30"
                                label="Mobile Number"
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="telephone_number"
                                :rules="rules.telephone_number"
                                :counter="30"
                                label="Telephone Number"
                                type="number"
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="email"
                                :rules="rules.email"
                                :counter="30"
                                label="Email Address"
                                placeholder="hello"
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="building_address"
                                :rules="rules.building_address"
                                :counter="30"
                                label="Rm./Flr./Unit No. & Bldg. Name"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="street_name"
                                :rules="rules.street_name"
                                :counter="30"
                                label="Street Name"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="street_address"
                                :rules="rules.street_address"
                                :counter="30"
                                label="House/Lot & Blk. No."
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="subdivision"
                                :rules="rules.subdivision"
                                :counter="30"
                                label="Subdivision"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="barangay"
                                :rules="rules.barangay"
                                :counter="30"
                                label="Barangay/District/Locality"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="city"
                                :rules="rules.city"
                                :counter="30"
                                label="City/Municipality"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="province"
                                :rules="rules.province"
                                :counter="30"
                                label="Province"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="country"
                                :rules="rules.country"
                                :counter="30"
                                label="Country"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="zip"
                                :rules="rules.zip"
                                :counter="30"
                                label="Zip Code"
                            ></v-text-field>
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
            phone: "",
            is_active: true,
            job: {},
            jobs: [],
            mobile_number: "+63",
            telephone_number: "",
            email: "",
            address: "",
            building_address: "",
            street_address: "",
            street_name: "",
            subdivision: "",
            barangay: "",
            city: "",
            province: "",
            country: "Philippines",
            zip: "",
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
                phone: [],
                is_active: [],
                job: [v => !!v || "Job designation is required"],
                mobile_number: [],
                telephone_number: [],
                email: [],
                address: [],
                building_address: [],
                street_address: [],
                street_name: [],
                subdivision: [],
                barangay: [],
                city: [],
                province: [],
                country: [],
                zip: []
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
                        phone: _this.phone,
                        is_active: _this.is_active,
                        job_id: _this.job,
                        mobile_number: _this.mobile_number,
                        telephone_number: _this.telephone_number,
                        email: _this.email,
                        address: _this.address,
                        building_address: _this.building_address,
                        street_address: _this.street_address,
                        street_name: _this.street_name,
                        subdivision: _this.subdivision,
                        barangay: _this.barangay,
                        city: _this.city,
                        province: _this.province,
                        country: _this.country,
                        zip: _this.zip
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
