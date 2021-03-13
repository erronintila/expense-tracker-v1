<template>
    <div>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">Edit Revolving Fund</h4>
            </v-card-title>

            <v-form ref="form" v-model="valid">
                <v-container>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-select
                                v-model="adjustment_type"
                                label="Adjustment Type"
                                :items="['Add Amount', 'Subtract Amount']"
                            ></v-select>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="amount"
                                :rules="mixin_validation.minNumberValue(1)"
                                label="Amount"
                                type="number"
                            >
                            </v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" md="6">
                            Current Balance
                            <table class="ml-4">
                                <tbody>
                                    <tr>
                                        <td class="headline">
                                            Revolving Fund
                                        </td>
                                        <td>:</td>
                                        <td
                                            class="headline green--text text--darken-4 text-right"
                                        >
                                            {{ mixin_formatNumber(user.fund) }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="headline">
                                            Remaining Fund
                                        </td>
                                        <td>:</td>
                                        <td
                                            class="headline green--text text--darken-4 text-right"
                                        >
                                            {{
                                                mixin_formatNumber(
                                                    user.remaining_fund
                                                )
                                            }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </v-col>
                        <v-col cols="12" md="6">
                            New Balance
                            <table class="ml-4">
                                <tbody>
                                    <tr>
                                        <td class="headline">
                                            Revolving Fund
                                        </td>
                                        <td>:</td>
                                        <td
                                            :class="
                                                `headline ${
                                                    new_fund < 0
                                                        ? 'red--text'
                                                        : 'green--text'
                                                } text--darken-4 text-right`
                                            "
                                        >
                                            {{ mixin_formatNumber(new_fund) }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="headline">
                                            Remaining Fund
                                        </td>
                                        <td>:</td>
                                        <td
                                            :class="
                                                `headline ${
                                                    new_remaining_fund < 0
                                                        ? 'red--text'
                                                        : 'green--text'
                                                } text--darken-4 text-right`
                                            "
                                        >
                                            {{
                                                mixin_formatNumber(
                                                    new_remaining_fund
                                                )
                                            }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </v-col>
                    </v-row>

                    <small class="text--secondary">
                        * indicates required field
                    </small>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green" dark @click="onSave">Save</v-btn>
                        <v-btn :to="{ name: 'admin.users.index' }">
                            Cancel
                        </v-btn>
                    </v-card-actions>
                </v-container>
            </v-form>
        </v-card>
    </div>
</template>

<script>
import UserDataService from "../../../../services/UserDataService";

export default {
    data() {
        return {
            valid: false,
            adjustment_type: "Add Amount",
            user: { id: null, fullname: "", fund: 0, remaining_fund: 0 },
            reference: "",
            code: "",
            description: "",
            amount: 0,
            type: "Manage Revolving Fund",
            remarks: "",
            errors: {
                user: [],
                reference: [],
                code: [],
                description: [],
                amount: [],
                remarks: []
            }
        };
    },
    methods: {
        loadUser() {
            UserDataService.show(this.$route.params.id)
                .then(response => {
                    this.user = response.data.data;
                })
                .catch(error => {
                    this.mixin_showErrors(error);
                });
        },
        onSave() {
            if (this.new_fund < 0 || this.new_remaining_fund < 0) {
                this.mixin_errorDialog(
                    "Error",
                    "Revolving fund/Remaining fund should not be lesser than current amount"
                );
                return;
            }

            if (this.$refs.form.validate()) {
                this.$confirm("Do you want to update revolving fund?").then(
                    res => {
                        if (res) {
                            UserDataService.updateFund(this.$route.params.id, {
                                fund: this.new_fund,
                                remaining_fund: this.new_remaining_fund
                            })
                                .then(response => {
                                    this.$dialog.message.success(
                                        "Revolving Fund updated.",
                                        {
                                            position: "top-right",
                                            timeout: 2000
                                        }
                                    );

                                    this.$store.dispatch("AUTH_USER");

                                    this.$router.push("/admin/users");
                                })
                                .catch(error => {
                                    this.mixin_showErrors(error);
                                });
                        }
                    }
                );
            }
        }
    },
    computed: {
        new_fund() {
            if (this.adjustment_type == "Add Amount") {
                return (
                    this.mixin_convertToNumber(this.user.fund) +
                    this.mixin_convertToNumber(this.amount)
                );
            }

            return (
                this.mixin_convertToNumber(this.user.fund) -
                this.mixin_convertToNumber(this.amount)
            );
        },
        new_remaining_fund() {
            if (this.adjustment_type == "Add Amount") {
                return (
                    this.mixin_convertToNumber(this.user.remaining_fund) +
                    this.mixin_convertToNumber(this.amount)
                );
            }

            return (
                this.mixin_convertToNumber(this.user.remaining_fund) -
                this.mixin_convertToNumber(this.amount)
            );
        }
    },
    created() {
        this.$store.dispatch("AUTH_USER");
        this.loadUser();
    },
    activated() {
        this.$store.dispatch("AUTH_USER");
        this.loadUser();
    }
};
</script>
