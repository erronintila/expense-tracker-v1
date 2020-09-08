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
                                :counter="100"
                                label="Name"
                                required
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="email"
                                :rules="rules.email"
                                :counter="100"
                                label="Email Address"
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="tin"
                                :rules="rules.tin"
                                :counter="100"
                                label="Tax Identification Number (TIN)"
                                required
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="contact_person"
                                :rules="rules.contact_person"
                                :counter="100"
                                label="Contact Person"
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="phone"
                                :rules="rules.phone"
                                :counter="100"
                                label="Phone"
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-textarea
                                v-model="address"
                                :rules="rules.address"
                                :counter="100"
                                rows="1"
                                label="Address"
                            ></v-textarea>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" md="4">
                            <v-checkbox
                            color="green"
                                v-model="is_vat_inclusive"
                                label="Vat Inclusive"
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
            phone: "",
            address: "",
            remarks: "",
            is_active: true,
            is_vat_inclusive: false,
            rules: {
                name: [
                    v => !!v || "Name is required",
                    v =>
                        v.length <= 100 ||
                        "Name must be less than 100 characters"
                ],
                email: [],
                tin: [],
                contact_person: [],
                phone: [],
                address: [],
                remarks: [],
                is_active: [],
                is_vat_inclusive: []
            }
        };
    },
    methods: {
        onRefresh() {
            this.$refs.form.reset();
            this.$refs.form.resetValidation();
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
                        phone: _this.phone,
                        address: _this.address,
                        remarks: _this.remarks,
                        is_active: _this.is_active,
                        is_vat_inclusive: _this.is_vat_inclusive
                    })
                    .then(function(response) {
                        _this.onRefresh();

                        _this.$dialog.message.success(
                            "Vendor created successfully.",
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
    }
};
</script>
