<template>
    <v-dialog v-model="openDialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn fab color="primary" text x-small v-bind="attrs" v-on="on">
                <v-icon dark>mdi-plus</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="headline">
                    New Vendor
                </span>
            </v-card-title>
            <v-card-text>
                <v-form ref="form" v-model="valid">
                    <v-container>
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="form.name"
                                    :rules="[
                                        ...mixin_validation.required,
                                        ...mixin_validation.minLength(150)
                                    ]"
                                    :counter="150"
                                    :error-messages="errors.name"
                                    label="Name *"
                                    required
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="6">
                                <v-radio-group
                                    @change="
                                        no_tin = false;
                                        form.tin = '';
                                    "
                                    v-model="form.is_vat_inclusive"
                                    row
                                >
                                    <v-radio
                                        label="VAT"
                                        :value="true"
                                    ></v-radio>
                                    <v-radio
                                        label="Non-VAT"
                                        :value="false"
                                    ></v-radio>
                                </v-radio-group>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12" md="9">
                                <v-text-field
                                    v-model="form.tin"
                                    :rules="mixin_validation.required"
                                    :error-messages="errors.tin"
                                    :counter="100"
                                    label="Tax Identification Number (TIN) *"
                                    required
                                    :readonly="no_tin"
                                >
                                    <template v-slot:append> </template>
                                </v-text-field>
                            </v-col>

                            <v-col cols="12" md="3">
                                <v-checkbox
                                    v-model="no_tin"
                                    label="N/A"
                                    @click="
                                        () => {
                                            form.tin = no_tin ? 'N/A' : '';
                                        }
                                    "
                                    :readonly="form.is_vat_inclusive"
                                ></v-checkbox>
                            </v-col>

                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="form.email"
                                    :rules="[]"
                                    :error-messages="errors.email"
                                    label="Email Address"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="form.contact_person"
                                    :rules="[]"
                                    :error-messages="errors.contact_person"
                                    :counter="100"
                                    label="Contact Person"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="form.mobile_number"
                                    :rules="[]"
                                    :counter="30"
                                    :error-messages="errors.mobile_number"
                                    @input="errors.mobile_number = []"
                                    label="Mobile Number"
                                    type="number"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="form.telephone_number"
                                    :rules="[]"
                                    :counter="30"
                                    :error-messages="errors.telephone_number"
                                    @input="errors.telephone_number = []"
                                    label="Telephone Number"
                                    type="number"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="form.website"
                                    :counter="100"
                                    :rules="[]"
                                    :error-messages="errors.website"
                                    @input="errors.website = []"
                                    label="Website"
                                ></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12">
                                <v-textarea
                                    v-model="form.address"
                                    :rules="mixin_validation.required"
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
                    </v-container>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="closeDialog">
                    Close
                </v-btn>
                <v-btn color="primary" text @click="onCreateVendor">
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    // props: {
    //     openDialog: {
    //         type: Boolean,
    //         default: false
    //     }
    // },
    data() {
        return {
            no_tin: false,
            openDialog: false,
            valid: false,
            selected_expense_types: [],
            expense_types: [],
            form: {
                code: "",
                name: "",
                email: "",
                tin: "",
                contact_person: "",
                mobile_number: "",
                telephone_number: "",
                remarks: "",
                website: "",
                is_vat_inclusive: true,
                address: ""
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
        closeDialog() {
            this.openDialog = false;
            Object.assign(this.$data, this.$options.data.apply(this));
        },
        onCreateVendor() {
            this.$refs.form.validate();

            if (this.$refs.form.validate()) {
                axios
                    .post("/api/vendors", {
                        code: this.form.code,
                        name: this.form.name,
                        email: this.form.email,
                        tin: this.form.tin == "N/A" ? null : this.form.tin,
                        contact_person: this.form.contact_person,
                        mobile_number: this.form.mobile_number,
                        telephone_number: this.form.telephone_number,
                        remarks: this.form.remarks,
                        website: this.form.website,
                        is_vat_inclusive: this.form.is_vat_inclusive,
                        address: this.form.address,
                        expense_types: this.selected_expense_types
                    })
                    .then(response => {
                        this.$dialog.message.success(
                            "Vendor created successfully.",
                            {
                                position: "top-right",
                                timeout: 2000
                            }
                        );
                        this.$emit("createdVendor");
                        this.openDialog = false;
                    })
                    .catch(error => {
                        this.mixin_showErrors(error);
                        this.errors = error.response.data.errors;
                    });
                return;
            }
        }
    },
    watch: {
        openDialog() {
            this.form = {
                code: "",
                name: "",
                email: "",
                tin: "",
                contact_person: "",
                mobile_number: "",
                telephone_number: "",
                remarks: "",
                website: "",
                is_vat_inclusive: true,
                address: ""
            };
        }
    }
};
</script>
