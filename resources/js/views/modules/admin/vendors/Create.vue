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
                                label="Name *"
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
                                label="Tax Identification Number (TIN) *"
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

                    <small style="opacity: 0.5">
                        * indicates required field
                    </small>

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
            rules: {
                code: [],
                name: [
                    v => !!v || "Name is required",
                    v =>
                        v.length <= 150 ||
                        "Name must be less than 100 characters"
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
