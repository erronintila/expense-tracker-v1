<template>
    <v-app>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn to="/admin/vendors" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">New Vendor</h4>
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
                                color="success"
                                label="Name"
                                required
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="email"
                                :rules="rules.email"
                                :error-messages="errors.email"
                                color="success"
                                label="Email Address"
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="tin"
                                :rules="rules.tin"
                                :error-messages="errors.tin"
                                :counter="100"
                                color="success"
                                label="Tax Identification Number (TIN)"
                                required
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="contact_person"
                                :rules="rules.contact_person"
                                :error-messages="errors.contact_person"
                                :counter="100"
                                color="success"
                                label="Contact Person"
                            ></v-text-field>
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
                                v-model="website"
                                :counter="100"
                                :rules="rules.website"
                                :error-messages="errors.website"
                                @input="errors.website = []"
                                label="Website"
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
                                v-model="barangay"
                                :rules="rules.barangay"
                                :counter="100"
                                :error-messages="errors.barangay"
                                @input="errors.barangay = []"
                                color="success"
                                label="Barangay/District/Locality"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="city"
                                :rules="rules.city"
                                :counter="100"
                                :error-messages="errors.city"
                                @input="errors.city = []"
                                color="success"
                                label="City/Municipality"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="province"
                                :rules="rules.province"
                                :counter="100"
                                :error-messages="errors.province"
                                @input="errors.province = []"
                                color="success"
                                label="Province"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="country"
                                :rules="rules.country"
                                :counter="100"
                                :error-messages="errors.country"
                                @input="errors.country = []"
                                color="success"
                                label="Country"
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

                    <v-row>
                        <v-col cols="12" md="4">
                            <v-checkbox
                                color="green"
                                v-model="is_vat_inclusive"
                                label="Vat Inclusive"
                                :error-messages="errors.is_vat_inclusive"
                            ></v-checkbox>
                        </v-col>
                    </v-row>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green" dark @click="onSave">Save</v-btn>
                        <v-btn to="/admin/vendors">Cancel</v-btn>
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
            code: "",
            name: "",
            email: "",
            tin: "",
            contact_person: "",
            mobile_number: "",
            telephone_number: "",
            remarks: "",
            website: "",
            is_vat_inclusive: false,
            address: "",
            // building_address: "",
            // street_address: "",
            // street_name: "",
            // subdivision: "",
            // barangay: "",
            // city: "",
            // province: "",
            // country: "Philippines",
            // zip: "",
            rules: {
                code: [],
                name: [
                    // v => !!v || "Name is required",
                    // v =>
                    //     v.length <= 150 ||
                    //     "Name must be less than 100 characters"
                ],
                email: [],
                tin: [
                    v => !!v || "TIN is required",
                    v =>
                        v.length <= 150 ||
                        "Name must be less than 100 characters"
                ],
                contact_person: [],
                mobile_number: [],
                telephone_number: [],
                remarks: [],
                website: [],
                is_vat_inclusive: [],
                address: []
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
                // country: [
                //     v => !!v || "Country is required",
                //     v =>
                //         v.length <= 100 ||
                //         "Country must be less than 100 characters"
                // ],
                // zip: []
            },
            errors: {
                code: [],
                name: [],
                email: [],
                tin: [],
                contact_person: [],
                mobile_number: [],
                telephone_number: [],
                remarks: [],
                website: [],
                is_vat_inclusive: [],
                address: []
                // building_address: [],
                // street_address: [],
                // street_name: [],
                // subdivision: [],
                // barangay: [],
                // city: [],
                // province: [],
                // country: [],
                // zip: []
            }
        };
    },
    methods: {
        onRefresh() {
            Object.assign(this.$data, this.$options.data.apply(this));
        },
        onSave() {
            let _this = this;

            _this.$refs.form.validate();

            if (_this.$refs.form.validate()) {
                axios
                    .post("/api/vendors", {
                        code: _this.code,
                        name: _this.name,
                        email: _this.email,
                        tin: _this.tin,
                        contact_person: _this.contact_person,
                        mobile_number: _this.mobile_number,
                        telephone_number: _this.telephone_number,
                        remarks: _this.remarks,
                        website: _this.website,
                        is_vat_inclusive: _this.is_vat_inclusive,
                        address: _this.address
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
                        // _this.onRefresh();

                        _this.$dialog.message.success(
                            "Vendor created successfully.",
                            {
                                position: "top-right",
                                timeout: 2000
                            }
                        );

                        _this.$router.push({ name: "admin.vendors.index" });
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
    }
};
</script>
