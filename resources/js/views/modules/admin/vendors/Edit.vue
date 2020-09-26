<template>
    <v-app>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">Edit Vendor</h4>
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
                                label="Name *"
                                required
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="email"
                                :rules="rules.email"
                                :error-messages="errors.email"
                                label="Email Address"
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="tin"
                                :rules="rules.tin"
                                :error-messages="errors.tin"
                                :counter="100"
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
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
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
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12">
                            <v-textarea
                                v-model="address"
                                :rules="rules.address"
                                :error-messages="errors.address"
                                @input="errors.address = []"
                                label="Address"
                                rows="1"
                            ></v-textarea>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" md="4">
                            <v-checkbox
                                v-model="is_vat_inclusive"
                                label="Vat Inclusive"
                                :error-messages="errors.is_vat_inclusive"
                            ></v-checkbox>
                        </v-col>
                    </v-row>

                    <small class="text--secondary">
                        * indicates required field
                    </small>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green" dark @click="onSave">Save</v-btn>
                        <v-btn @click="$router.go(-1)">Cancel</v-btn>
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
            selected_expense_types: [],
            expense_types: [],
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
        getData() {
            let _this = this;

            axios
                .get("/api/vendors/" + _this.$route.params.id)
                .then(response => {
                    let data = response.data.data;

                    _this.code = data.code;
                    _this.name = data.name;
                    _this.email = data.email;
                    _this.tin = data.tin;
                    _this.contact_person = data.contact_person;
                    _this.mobile_number = data.mobile_number;
                    _this.telephone_number = data.telephone_number;
                    _this.remarks = data.remarks;
                    _this.website = data.website;
                    _this.is_vat_inclusive = data.is_vat_inclusive;
                    _this.address = data.address;
                    _this.selected_expense_types = data.expense_types.map(item => item.id)
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
                    .put("/api/vendors/" + _this.$route.params.id, {
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
                        address: _this.address,
                        expense_types: _this.selected_expense_types,
                    })
                    .then(function(response) {
                        // _this.onRefresh();

                        _this.$dialog.message.success(
                            "Vendor updated successfully.",
                            {
                                position: "top-right",
                                timeout: 2000
                            }
                        );

                        _this.$router.push({ name: "admin.vendors.index" });
                    })
                    .catch(function(error) {
                        console.log(error);
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

        this.loadExpenseTypes();
        this.getData();
    }
};
</script>
