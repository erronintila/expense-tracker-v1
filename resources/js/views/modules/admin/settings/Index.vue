<template>
    <div>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <h4 class="title green--text">Settings</h4>
                <v-spacer></v-spacer>
                <v-btn
                    color="green"
                    :to="{ name: 'admin.settings.user' }"
                    outlined
                    dark
                    class="mr-2"
                >
                    Employee Settings
                </v-btn>
                <v-btn color="green" @click="onSave" dark>Save Changes</v-btn>
            </v-card-title>

            <v-expansion-panels v-model="panel" multiple>
                <!-- <v-expansion-panel>
                    <v-expansion-panel-header>
                        <div class="green--text">
                            General Settings
                        </div>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-row>
                            <v-col cols="12" md="4">
                                <v-text-field
                                    label="Company Name"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-select
                                    label="Currency"
                                    :items="['Philippine Peso']"
                                ></v-select>
                            </v-col>
                        </v-row>
                    </v-expansion-panel-content>
                </v-expansion-panel> -->

                <v-expansion-panel>
                    <v-expansion-panel-header>
                        <div class="green--text">
                            Expenses
                        </div>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-container>
                            <v-form ref="formExpenses">
                                <v-row>
                                    <v-col cols="12" md="4">
                                        <v-text-field
                                            v-model="settings.expense_encoding_period"
                                            label="Expense Encoding Period"
                                            suffix="days"
                                            :rules="[...mixin_validation.required, ...mixin_validation.minNumberValue(1)]"
                                            :hint="
                                                'Allowed period for expenses to be encoded based on date'
                                            "
                                            persistent-hint
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-form>
                        </v-container>
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                    <v-expansion-panel-header>
                        <div class="green--text">
                            Expense Reports
                        </div>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-container>
                            <v-form ref="formExpenseReports">
                                <v-row>
                                    <v-col cols="12" md="4">
                                        <v-select
                                            v-model="settings.submission_period"
                                            label="Submission Date"
                                            :items="[
                                                'Daily',
                                                'Weekly',
                                                'Monthly'
                                            ]"
                                            :hint="
                                                'Due date for submission of expense reports'
                                            "
                                            persistent-hint
                                        ></v-select>
                                    </v-col>
                                    <v-col cols="12" md="4">
                                        <v-text-field
                                            v-model="settings.approval_period"
                                            label="Approval Period"
                                            suffix="days"
                                            :rules="[...mixin_validation.required, ...mixin_validation.minNumberValue(1)]"
                                            :hint="
                                                'Allowed period for expense reports to be approved based on submission date'
                                            "
                                            persistent-hint
                                            type="number"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-form>
                        </v-container>
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                    <v-expansion-panel-header>
                        <div class="green--text">
                            Taxes
                        </div>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-container>
                            <v-form ref="formTaxes">
                                <v-row>
                                    <v-col cols="12" md="4">
                                        <v-text-field
                                            v-model="settings.tax_rate"
                                            label="Tax Rate"
                                            suffix="%"
                                            :rules="[...mixin_validation.required, ...mixin_validation.minNumberValue(0)]"
                                            :hint="
                                                'Tax rate to be imposed on expenses.'
                                            "
                                            persistent-hint
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-form>
                        </v-container>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-card>
    </div>
</template>

<script>
import moment from "moment";

export default {
    data() {
        return {
            settings: {
                company_name: "Twin-Circa Marketing",
                currency: "Philippine Peso",
                expiry_period: 1,
                expense_encoding_period: 1,
                submission_period: "Weekly",
                approval_period: 1,
                tax_rate: 0,
            },
            panel: [0, 1, 2, 3]
        };
    },
    methods: {
        onLoad: function() {
            let _this = this;
            axios
                .get("/api/settings")
                .then(response => {
                    _this.settings = response.data;
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);

                    _this.mixin_errorDialog(
                        error.response.status,
                        error.response.statusText
                    );
                });
        },
        onSave: function() {
            let _this = this;

            // let settings = Object.assign(
            //     this.general_settings,
            //     this.expense_settings,
            //     this.expense_report_settings
            // );

            axios
                .post("/api/settings", {
                    settings: _this.settings
                })
                .then(response => {
                    _this.mixin_successDialog(
                        "Success",
                        "Saved settings successfully"
                    );

                    _this.$store.dispatch("AUTH_USER");
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);

                    _this.mixin_errorDialog(
                        error.response.status,
                        error.response.statusText
                    );
                });
        }
    },
    created() {
        // this.$store.dispatch("AUTH_USER");
        this.onLoad();
    }
};
</script>
