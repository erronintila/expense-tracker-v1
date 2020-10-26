<template>
    <div>
        <v-card class="elevation-0 pt-0">
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
                                    <v-btn text color="green" @click="editData">
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
                                        to="/admin/expenses"
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
                                        to="/admin/reports"
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
export default {
    data() {
        return {
            panel: [],
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
            let _this = this;

            axios
                .get(`/api/vendors/${_this.$route.params.id}`)
                .then(function(response) {
                    let data = response.data.data;

                    _this.code = data.code;
                    _this.name = data.name;
                    _this.email = data.email;
                    _this.tin = data.tin == null ? "N/A" : data.tin;
                    _this.contact_person = data.contact_person;
                    _this.mobile_number = data.mobile_number;
                    _this.telephone_number = data.telephone_number;
                    _this.remarks = data.remarks;
                    _this.website = data.website;
                    _this.is_vat_inclusive = data.is_vat_inclusive;
                    _this.address = data.address;
                })
                .catch(function(error) {
                    console.log(error);
                    console.log(error.response);

                    _this.mixin_errorDialog(`Error ${error.response.status}`, error.response.statusText);
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
};
</script>
