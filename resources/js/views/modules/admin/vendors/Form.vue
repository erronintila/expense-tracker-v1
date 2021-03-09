<template>
    <v-form ref="form" v-model="valid">
        <div class="overline green--text">
            BASIC DETAILS
        </div>
        <v-row>
            <v-col cols="12" md="9">
                <v-text-field
                    v-model="form.name"
                    :counter="150"
                    :error-messages="errors.name"
                    :rules="[
                        ...mixin_validation.required,
                        ...mixin_validation.minLength(150)
                    ]"
                    label="Name"
                    required
                ></v-text-field>
            </v-col>

            <v-col cols="12" md="3">
                <v-radio-group
                    v-model="form.is_vat_inclusive"
                    @change="
                        no_tin = false;
                        form.tin = '';
                    "
                    row
                >
                    <v-radio label="VAT" :value="true"></v-radio>
                    <v-radio label="Non-VAT" :value="false"></v-radio>
                </v-radio-group>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="9" md="9">
                <v-text-field
                    v-model="form.tin"
                    :rules="mixin_validation.required"
                    :error-messages="errors.tin"
                    :counter="100"
                    label="Tax Identification Number (TIN)"
                    required
                    :readonly="no_tin"
                >
                    <template v-slot:append> </template>
                </v-text-field>
            </v-col>

            <v-col cols="3" md="3">
                <v-checkbox
                    v-model="no_tin"
                    label="N/A"
                    :readonly="form.is_vat_inclusive"
                ></v-checkbox>
            </v-col>
        </v-row>
        <v-text-field
            v-model="form.email"
            :rules="[]"
            :error-messages="errors.email"
            label="Email Address"
        ></v-text-field>
        <v-text-field
            v-model="form.contact_person"
            :rules="[]"
            :error-messages="errors.contact_person"
            :counter="100"
            label="Contact Person"
        ></v-text-field>
        <v-text-field
            v-model="form.mobile_number"
            :rules="[]"
            :counter="30"
            :error-messages="errors.mobile_number"
            @input="errors.mobile_number = []"
            label="Mobile Number"
            type="number"
        ></v-text-field>
        <v-text-field
            v-model="form.telephone_number"
            :rules="[]"
            :counter="30"
            :error-messages="errors.telephone_number"
            @input="errors.telephone_number = []"
            label="Telephone Number"
            type="number"
        ></v-text-field>
        <v-text-field
            v-model="form.website"
            :counter="100"
            :rules="[]"
            :error-messages="errors.website"
            @input="errors.website = []"
            label="Website"
        ></v-text-field>
        <v-textarea
            v-model="form.address"
            :error-messages="errors.address"
            :rules="mixin_validation.required"
            @input="errors.address = []"
            label="Address"
            rows="3"
        ></v-textarea>

        <v-row>
            <v-col class="text-right">
                <v-btn color="success" dark @click="onSave">
                    Save
                </v-btn>
                <v-btn @click="$router.go(-1)">Cancel</v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>
<script>
export default {
    props: {
        vendorForm: {
            type: Object,
            default: () => {
                return {
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
        },
        errors: {
            type: Object,
            default: () => {
                return {
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
                };
            }
        },
        rules: {
            type: Object,
            default: () => {
                return {
                    tin: [
                        v =>
                            this.is_vat_inclusive == true ||
                            "This field is required."
                    ]
                };
            }
        }
    },
    data() {
        return {
            no_tin: false,
            valid: false,
            row: null,
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
            }
        };
    },
    methods: {
        onSave() {
            if (!this.$refs.form.validate()) {
                return;
            }
            this.$emit("on-save", this.form);
        }
    },
    watch: {
        vendorForm: {
            immediate: true,
            deep: true,
            handler(newValue, oldValue) {
                this.form = newValue;
            }
        },
        "form.is_vat_inclusive": function() {
            if (this.form.is_vat_inclusive) {
                this.no_tin = false;
                return;
            }
        },
        no_tin() {
            this.form.tin = this.no_tin ? "N/A" : "";
        },
        "form.tin": function() {
            if (this.form.tin == "N/A" || this.form.tin == null) {
                this.no_tin = true;
            }
        }
    }
};
</script>
