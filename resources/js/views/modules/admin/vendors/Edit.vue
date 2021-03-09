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
            <v-container>
                <Form :vendorForm="form" :errors="errors" @on-save="onSave"></Form>
            </v-container>
        </v-card>
    </div>
</template>

<script>
import VendorDataService from "../../../../services/VendorDataService";
import Form from "./Form";

export default {
    components: {
        Form
    },
    data() {
        return {
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
            VendorDataService.show(this.$route.params.id)
                .then(response => {
                    let data = response.data.data;
                    this.form.code = data.code;
                    this.form.name = data.name;
                    this.form.email = data.email;
                    this.no_tin = data.tin == null ? true : false;
                    this.form.tin = data.tin == null ? "N/A" : data.tin;
                    this.form.contact_person = data.contact_person;
                    this.form.mobile_number = data.mobile_number;
                    this.form.telephone_number = data.telephone_number;
                    this.form.remarks = data.remarks;
                    this.form.website = data.website;
                    this.form.is_vat_inclusive = data.is_vat_inclusive == 1;
                    this.form.address = data.address;
                    this.selected_expense_types = data.expense_types
                        ? data.expense_types.map(item => item.id)
                        : null;
                })
                .catch(error => {
                    this.mixin_showErrors(error);
                });
        },
        onSave(value) {
            value.tin = value.tin == "N/A" ? null : value.tin;

            VendorDataService.update(this.$route.params.id, value)
                .then(response => {
                    this.mixin_successDialog(
                        response.data.status,
                        response.data.message
                    );

                    this.$router.push({ name: "admin.vendors.index" });
                })
                .catch(error => {
                    this.mixin_showErrors(error);

                    if (error.response) {
                        if (error.response.data) {
                            this.errors = error.response.data.errors;
                        }
                    }
                });
        }
    },
    created() {
        this.getData();
    },
    activated() {
        this.getData();
    }
};
</script>
