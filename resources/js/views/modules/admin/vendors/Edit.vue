<template>
    <div>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">Edit Vendor</h4>
            </v-card-title>

            <v-form ref="form">
                <v-container>
                    <v-card class="mx-auto mb-4" flat>
                        <v-container>
                            <div class="overline green--text">
                                BASIC DETAILS
                            </div>
                            <v-row>
                                <v-col cols="12" md="9">
                                    <v-text-field
                                        v-model="form.name"
                                        :rules="[
                                            ...mixin_validation.required,
                                            ...mixin_validation.minLength(150)
                                        ]"
                                        :counter="150"
                                        :error-messages="errors.name"
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
                                        @click="
                                            () => {
                                                form.tin = no_tin ? 'N/A' : '';
                                            }
                                        "
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
                                :rules="mixin_validation.required"
                                :error-messages="errors.address"
                                @input="errors.address = []"
                                label="Address"
                                rows="3"
                            ></v-textarea>
                        </v-container>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="success" dark @click="onSave"
                                >Save</v-btn
                            >
                            <v-btn @click="$router.go(-1)">Cancel</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-container>
            </v-form>
        </v-card>
    </div>
</template>

<script>
import VendorDataService from "../../../../services/VendorDataService";

export default {
    data() {
        return {
            no_tin: false,
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
                is_vat_inclusive: false,
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
        getData() {
            let _this = this;

            VendorDataService.show(_this.$route.params.id)
                .then(response => {
                    let data = response.data.data;

                    _this.form.code = data.code;
                    _this.form.name = data.name;
                    _this.form.email = data.email;
                    _this.no_tin = data.tin == null ? true : false;
                    _this.form.tin = data.tin == null ? "N/A" : data.tin;
                    _this.form.contact_person = data.contact_person;
                    _this.form.mobile_number = data.mobile_number;
                    _this.form.telephone_number = data.telephone_number;
                    _this.form.remarks = data.remarks;
                    _this.form.website = data.website;
                    _this.form.is_vat_inclusive = data.is_vat_inclusive == 1;
                    _this.form.address = data.address;
                    _this.selected_expense_types = data.expense_types.map(
                        item => item.id
                    );
                })
                .catch(error => {});
        },
        loadExpenseTypes() {
            let _this = this;
            axios
                .get("/api/data/expense_types")
                .then(response => {
                    _this.expense_types = response.data.data;
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);

                    _this.mixin_errorDialog(
                        `Error ${error.response.status}`,
                        error.response.data.message
                    );
                });
        },
        onSave() {
            let _this = this;

            _this.$refs.form.validate();

            if (_this.$refs.form.validate()) {
                let data = {
                    code: _this.form.code,
                    name: _this.form.name,
                    email: _this.form.email,
                    tin: _this.form.tin == "N/A" ? null : _this.form.tin,
                    contact_person: _this.form.contact_person,
                    mobile_number: _this.form.mobile_number,
                    telephone_number: _this.form.telephone_number,
                    remarks: _this.form.remarks,
                    website: _this.form.website,
                    is_vat_inclusive: _this.form.is_vat_inclusive,
                    address: _this.form.address,
                    expense_types: _this.selected_expense_types
                };
                VendorDataService.update(_this.$route.params.id, data)
                    .then(function(response) {
                        _this.mixin_successDialog(
                            response.data.status,
                            response.data.message
                        );

                        _this.$router.push({ name: "admin.vendors.index" });
                    })
                    .catch(function(error) {
                        console.log(error);
                        console.log(error.response);

                        _this.mixin_errorDialog(
                            `Error ${error.response.status}`,
                            error.response.data.message
                        );

                        if (error.response) {
                            if (error.response.data) {
                                _this.errors = error.response.data.errors;
                            }
                        }
                    });

                return;
            }
        }
    },
    created() {
        // this.loadExpenseTypes();
        this.getData();
    },
    activated() {
        // this.loadExpenseTypes();
        this.getData();
    }
};
</script>
