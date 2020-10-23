<template>
    <div>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
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

                        <v-col>
                            <v-radio-group v-model="form.is_vat_inclusive" row>
                                <v-radio label="VAT" :value="true"></v-radio>
                                <v-radio
                                    label="Non-VAT"
                                    :value="false"
                                ></v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="9" md="3">
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

                        <v-col cols="3" md="1">
                            <v-checkbox
                                v-model="no_tin"
                                label="N/A"
                                @click="
                                    () => {
                                        form.tin = no_tin ? 'N/A' : '';
                                    }
                                "
                            ></v-checkbox>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="form.email"
                                :rules="[]"
                                :error-messages="errors.email"
                                label="Email Address"
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="form.contact_person"
                                :rules="[]"
                                :error-messages="errors.contact_person"
                                :counter="100"
                                label="Contact Person"
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="form.mobile_number"
                                :rules="[]"
                                :counter="30"
                                :error-messages="errors.mobile_number"
                                @input="errors.mobile_number = []"
                                label="Mobile Number"
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
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

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="form.website"
                                :counter="100"
                                :rules="[]"
                                :error-messages="errors.website"
                                @input="errors.website = []"
                                label="Website"
                            ></v-text-field>
                        </v-col>

                        <!-- <v-col cols="12" md="4">
                            <v-select
                                v-model="selected_expense_types"
                                :items="expense_types"
                                item-text="name"
                                item-value="id"
                                label="Link with Expense Types"
                                multiple
                            >
                                <template v-slot:selection="{ item, index }">
                                    <v-chip v-if="index === 0" small>
                                        <span>{{ item.name }}</span>
                                    </v-chip>
                                    <span
                                        v-if="index === 1"
                                        class="grey--text caption"
                                        >(+{{
                                            selected_expense_types.length - 1
                                        }}
                                        others)</span
                                    >
                                </template>
                            </v-select>
                        </v-col> -->
                    </v-row>

                    <v-row>
                        <v-col cols="12">
                            <v-textarea
                                v-model="form.address"
                                :rules="[]"
                                :error-messages="errors.address"
                                @input="errors.address = []"
                                label="Address"
                                rows="1"
                            ></v-textarea>
                        </v-col>
                    </v-row>

                    <!-- <v-row>
                        <v-col cols="12" md="4">
                            <v-checkbox
                                v-model="form.is_vat_inclusive"
                                label="Vat Inclusive"
                                :error-messages="errors.is_vat_inclusive"
                            ></v-checkbox>
                        </v-col>
                    </v-row> -->

                    <small class="text--secondary">
                        * indicates required field
                    </small>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="success" dark @click="onSave">Save</v-btn>
                        <v-btn @click="$router.go(-1)">Cancel</v-btn>
                    </v-card-actions>
                </v-container>
            </v-form>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            no_tin: false,
            valid: false,
            row: null,
            selected_expense_types: [],
            expense_types: [],
            rules: {
                tin: [
                    v =>
                        this.is_vat_inclusive == true ||
                        "This field is required."
                ]
            },
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
                        error.response.statusText
                    );
                });
        },
        onSave() {
            let _this = this;

            _this.$refs.form.validate();

            if (_this.$refs.form.validate()) {
                axios
                    .post("/api/vendors", {
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
                    })
                    .then(function(response) {
                        _this.mixin_successDialog(
                            "Success",
                            "Vendor created successfully."
                        );

                        _this.$router.push({ name: "admin.vendors.index" });
                    })
                    .catch(function(error) {
                        console.log(error);
                        console.log(error.response);

                        _this.mixin_errorDialog(
                            `Error ${error.response.status}`,
                            error.response.statusText
                        );

                        _this.errors = error.response.data.errors;
                    });

                return;
            }
        }
    },
    created() {
        this.loadExpenseTypes();
    }
};
</script>
