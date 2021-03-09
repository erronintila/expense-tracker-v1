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
            <v-container>
                <Form :errors="errors" @on-save="onSave"></Form>
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
            rules: {
                tin: [
                    v =>
                        this.is_vat_inclusive == true ||
                        "This field is required."
                ]
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
        onSave(value) {
            value.tin = value.tin == "N/A" ? null : value.tin,

            VendorDataService.store(value)
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
    }
};
</script>
