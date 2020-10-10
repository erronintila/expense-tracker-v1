<template>
    <div>
        <v-dialog v-model="dialogVendor" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    fab
                    color="primary"
                    text
                    x-small
                    v-bind="attrs"
                    v-on="on"
                >
                    <v-icon dark>mdi-plus</v-icon>
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="headline">New Vendor</span>
                </v-card-title>
                <v-card-text>
                    <v-form ref="form" v-model="valid">
                        <v-container>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-text-field
                                        :counter="150"
                                        label="Name *"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="6">
                                    <v-text-field
                                        label="Email Address"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="6">
                                    <v-text-field
                                        :counter="100"
                                        label="Tax Identification Number (TIN) *"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="6">
                                    <v-text-field
                                        :counter="100"
                                        label="Contact Person"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="6">
                                    <v-text-field
                                        :counter="30"
                                        label="Mobile Number"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="6">
                                    <v-text-field
                                        :counter="30"
                                        label="Telephone Number"
                                        type="number"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="6">
                                    <v-text-field
                                        :counter="100"
                                        label="Website"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="6">
                                    <v-select
                                        :items="expense_types"
                                        item-text="name"
                                        item-value="id"
                                        label="Link with Expense Types"
                                        multiple
                                    >
                                        <template
                                            v-slot:selection="{ item, index }"
                                        >
                                            <v-chip v-if="index === 0" small>
                                                <span>{{ item.name }}</span>
                                            </v-chip>
                                            <span
                                                v-if="index === 1"
                                                class="grey--text caption"
                                            >
                                                (+{{
                                                    selected_expense_types.length -
                                                        1
                                                }}
                                                others)
                                            </span>
                                        </template>
                                    </v-select>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12">
                                    <v-textarea
                                        label="Address"
                                        rows="1"
                                    ></v-textarea>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12" md="4">
                                    <v-checkbox
                                        label="Vat Inclusive"
                                    ></v-checkbox>
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
                    <v-btn color="primary" text @click="dialogVendor = false"
                        >Close</v-btn
                    >
                    <v-btn color="primary" text @click="onCreateVendor"
                        >Save</v-btn
                    >
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            valid: false,
            dialogVendor: false,
            expense_type: null,
            expense_types: []
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
                });
        },
        getCurrentUser() {
            let _this = this;
            axios
                .get("/api/user")
                .then(response => {
                    let emp = response.data.data.employee;

                    _this.employee = emp == null ? null : emp.id;
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);
                });
        },
        onCreateVendor() {}
    },
    created() {
        // axios.defaults.headers.common["Authorization"] =
        //     "Bearer " + localStorage.getItem("access_token");

        this.getCurrentUser();
        this.loadExpenseTypes();
    }
};
</script>
