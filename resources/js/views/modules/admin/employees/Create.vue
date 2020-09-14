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
                                label="Job Designation"
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
                                label="First Name"
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
                                label="Last Name"
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
                                label="Gender"
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
                                        :error-messages="errors.birthdate"
                                        @input="errors.birthdate = []"
                                        label="Birthdate"
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
                                label="Mobile Number"
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
                                label="Email Address"
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
                                label="Address"
                                rows="1"
                            ></v-textarea>
                        </v-col>
                    </v-row>

                    <!-- <v-row>
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="country"
                                :rules="rules.country"
                                :counter="100"
                                :error-messages="errors.country"
                                @input="errors.country = []"
                                color="success"
                                label="Country"
                                readonly
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-select
                                v-model="region"
                                :items="regions"
                                item-text="value"
                                item-value="key"
                                color="success"
                                label="Region"
                            >
                            </v-select>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-select
                                v-model="province"
                                :items="provinces"
                                color="success"
                                label="Province"
                            >
                            </v-select>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-select
                                v-model="city"
                                :items="cities"
                                color="success"
                                label="City/Municipality"
                            >
                            </v-select>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-select
                                v-model="barangay"
                                :items="barangays"
                                color="success"
                                label="Barangay/District/Locality"
                            >
                            </v-select>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="building_address"
                                :rules="rules.building_address"
                                :counter="100"
                                :error-messages="errors.building_address"
                                @input="errors.building_address = []"
                                color="success"
                                label="Rm./Flr./Unit No. & Bldg. Name"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="street_name"
                                :rules="rules.street_name"
                                :counter="100"
                                :error-messages="errors.street_name"
                                @input="errors.street_name = []"
                                color="success"
                                label="Street Name"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="street_address"
                                :rules="rules.street_address"
                                :counter="100"
                                :error-messages="errors.street_address"
                                @input="errors.street_address = []"
                                color="success"
                                label="House/Lot & Blk. No."
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="subdivision"
                                :rules="rules.subdivision"
                                :counter="100"
                                :error-messages="errors.subdivision"
                                @input="errors.subdivision = []"
                                color="success"
                                label="Subdivision"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="zip"
                                :rules="rules.zip"
                                :counter="10"
                                :error-messages="errors.zip"
                                @input="errors.zip = []"
                                color="success"
                                label="Zip Code"
                            ></v-text-field>
                        </v-col>
                    </v-row> -->

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
// let ph_addresses = require('../../../../assets/philippine_address_2019v2.json');
// import ph_addresses from "../../../../assets/philippine_address_2019v2.json";
// console.log(ph_addresses);

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
            job: {},
            jobs: [],
            mobile_number: "+63",
            telephone_number: "",
            email: "",
            address: "",
            // building_address: "",
            // street_address: "",
            // street_name: "",
            // subdivision: "",
            // barangay: "",
            // city: "",
            // province: "",
            // region: {},
            // country: "Philippines",
            // countries: [],
            // zip: "",
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
                job: [v => !!v || "Job designation is required"],
                mobile_number: [],
                telephone_number: [],
                email: [
                    v => !!v || "E-mail is required",
                    v => /.+@.+/.test(v) || "E-mail is not valid"
                ],
                address: [],
                // building_address: [],
                // street_address: [],
                // street_name: [],
                // subdivision: [],
                // barangay: [],
                // city: [
                //     v => !!v || "City/Municipality is required",
                //     v =>
                //         v.length <= 100 ||
                //         "City/Municipality must be less than 100 characters"
                // ],
                // province: [],
                // region: [],
                // country: [
                //     v => !!v || "Country is required",
                //     v =>
                //         v.length <= 100 ||
                //         "Country must be less than 100 characters"
                // ],
                // zip: []
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
                address: [],
                // building_address: [],
                // street_address: [],
                // street_name: [],
                // subdivision: [],
                // barangay: [],
                // city: [],
                // province: [],
                // region: [],
                // country: [],
                // zip: []
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
                        address: _this.address,
                        // building_address: _this.building_address,
                        // street_address: _this.street_address,
                        // street_name: _this.street_name,
                        // subdivision: _this.subdivision,
                        // barangay: _this.barangay,
                        // city: _this.city,
                        // province: _this.province,
                        // country: _this.country,
                        // zip: _this.zip
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

                        _this.errors = error.response.data.errors;
                    });

                return;
            }
        }
    },
    computed: {
        // regions() {
        //     let regions = [];
        //     for (let region in ph_addresses) {
        //         regions.push({
        //             key: region,
        //             value: ph_addresses[region]["region_name"]
        //         });
        //     }

        //     return regions;
        // },
        // provinces() {
        //     let provinces = [];

        //     if (this.region.length > 0) {
        //         for (let province in ph_addresses[this.region][
        //             "province_list"
        //         ]) {
        //             provinces.push(province);
        //         }
        //     }

        //     return provinces;
        // },
        // cities() {
        //     let cities = [];

        //     if (this.region.length > 0 && this.province.length > 0) {
        //         for (let municipality in ph_addresses[this.region][
        //             "province_list"
        //         ][this.province]["municipality_list"]) {
        //             cities.push(municipality);
        //         }
        //     }

        //     return cities;
        // },
        // barangays() {
        //     if (
        //         this.region.length > 0 &&
        //         this.province.length > 0 &&
        //         this.city.length > 0
        //     ) {
        //         return ph_addresses[this.region]["province_list"][
        //             this.province
        //         ]["municipality_list"][this.city]["barangay_list"];
        //     }

        //     return [];
        // }
    },
    created() {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " + localStorage.getItem("access_token");

        this.loadJobs();
    },
};
</script>
