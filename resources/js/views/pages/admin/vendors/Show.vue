<template>
    <div>
        <loader-component v-if="!formDataLoaded"></loader-component>
        <v-card v-else class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">Vendor Details</h4>
            </v-card-title>

            <v-card-text>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-hover v-slot:default="{ hover }">
                            <v-card
                                outlined
                                class="mx-auto mt-3"
                                :elevation="hover ? 5 : 2"
                            >
                                <v-card-text>
                                    <v-row>
                                        <v-col cols="12" sm="5">
                                            <v-avatar
                                                class="profile"
                                                color="grey"
                                                size="200"
                                            >
                                                <v-img
                                                    :src="
                                                        require('../../../../assets/img/user.png')
                                                    "
                                                />
                                            </v-avatar>
                                        </v-col>
                                        <v-col cols="12" sm="7">
                                            <div>TIN : {{ tin }}</div>
                                            <h3 class="display-1 green--text">
                                                {{ name }}
                                            </h3>
                                            <p>{{ email }}</p>
                                            <div class="text--primary">
                                                Contact Person:
                                                {{ contact_person }}<br />
                                                {{ mobile_number }}
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn v-if="!$route.params.isDeleted" text color="green" @click="editData">
                                        Edit Info
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-hover>
                    </v-col>

                    <v-col cols="12" md="6">
                        <v-row>
                            <!-- <v-col cols="12" md="12">
                                <v-hover v-slot:default="{ hover }">
                                    <v-card
                                        outlined
                                        class="mx-auto"
                                        :elevation="hover ? 5 : 2"
                                    >
                                        <v-card-title>
                                            Expenses
                                        </v-card-title>
                                        <v-card-subtitle>
                                            Secondary text
                                        </v-card-subtitle>
                                        <v-card-text>
                                            Go to user profile and configure.
                                        </v-card-text>

                                        <br /><br /><br /><br /><br />
                                    </v-card>
                                </v-hover>
                            </v-col> -->
                            <!-- <v-col cols="6" md="6">
                                <v-hover v-slot:default="{ hover }">
                                    <v-card
                                        class="mx-auto"
                                        :elevation="hover ? 5 : 2"
                                        to="/expenses"
                                    >
                                        <v-card-title>Expenses</v-card-title>
                                        <v-card-subtitle>
                                            Secondary text
                                        </v-card-subtitle>
                                        <v-card-text>
                                            Go to user profile and configure.
                                        </v-card-text>
                                    </v-card>
                                </v-hover>
                            </v-col>
                            <v-col cols="6" md="6">
                                <v-hover v-slot:default="{ hover }">
                                    <v-card
                                        class="mx-auto"
                                        :elevation="hover ? 5 : 2"
                                    >
                                        <v-card-title>
                                            Reimbursements
                                        </v-card-title>
                                        <v-card-subtitle>
                                            Secondary text
                                        </v-card-subtitle>
                                        <v-card-text>
                                            Go to user profile and configure.
                                        </v-card-text>
                                    </v-card>
                                </v-hover>
                            </v-col>
                            <v-col cols="6" md="6">
                                <v-hover v-slot:default="{ hover }">
                                    <v-card
                                        class="mx-auto"
                                        :elevation="hover ? 5 : 2"
                                        to="/reports"
                                    >
                                        <v-card-title>Reports</v-card-title>
                                        <v-card-subtitle>
                                            Secondary text
                                        </v-card-subtitle>
                                        <v-card-text>
                                            Go to user profile and configure.
                                        </v-card-text>
                                    </v-card>
                                </v-hover>
                            </v-col> -->
                        </v-row>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12">
                        <v-hover v-slot:default="{ hover }">
                            <v-card outlined :elevation="hover ? 5 : 2">
                                <v-expansion-panels v-model="panel" hover>
                                    <v-expansion-panel>
                                        <v-expansion-panel-header>
                                            Other Details
                                        </v-expansion-panel-header>
                                        <v-expansion-panel-content>
                                            <v-simple-table>
                                                <template v-slot:default>
                                                    <tbody>
                                                        <tr>
                                                            <td>Code</td>
                                                            <td>{{ code }}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Telephone Number
                                                            </td>
                                                            <td>
                                                                {{
                                                                    telephone_number
                                                                }}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Website</td>
                                                            <td>
                                                                {{ website }}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                VAT Inclusive
                                                            </td>
                                                            <td>
                                                                {{
                                                                    is_vat_inclusive
                                                                        ? "Yes"
                                                                        : "No"
                                                                }}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Address</td>
                                                            <td>
                                                                {{ address }}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </template>
                                            </v-simple-table>
                                        </v-expansion-panel-content>
                                    </v-expansion-panel>
                                </v-expansion-panels>
                            </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import VendorDataService from "../../../../services/VendorDataService";
export default {
    data() {
        return {
            formDataLoaded: false,
            panel: 0,
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
        };
    },
    methods: {
        getData() {
            let data = {};

            if(this.$route.params.isDeleted) {
                data = {
                    params: {
                        isDeleted : true
                    }
                }
            }

            VendorDataService.show(this.$route.params.id, data)
                .then(response => {
                    let data = response.data.data;

                    this.code = data.code;
                    this.name = data.name;
                    this.email = data.email;
                    this.tin = data.tin == null ? "N/A" : data.tin;
                    this.contact_person = data.contact_person;
                    this.mobile_number = data.mobile_number;
                    this.telephone_number = data.telephone_number;
                    this.remarks = data.remarks;
                    this.website = data.website;
                    this.is_vat_inclusive = data.is_vat_inclusive;
                    this.address = data.address;

                    this.formDataLoaded = true;
                })
                .catch(error => {
                    this.mixin_showErrors(error);
                    this.formDataLoaded = true;
                    this.$router.push({ name: "admin.vendors.index" }, () => {});
                });
        },
        editData() {
            this.$router.push({
                name: "admin.vendors.edit",
                params: { id: this.$route.params.id }
            });
        }
    },
    created() {
        this.getData();
    },
    activated() {
        this.getData();
    },
    deactivated() {
        Object.assign(this.$data, this.$options.data());
    }
};
</script>
