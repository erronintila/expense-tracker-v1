<template>
    <div>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <h4 class="title green--text">Settings</h4>
                <v-spacer></v-spacer>
                <v-btn color="green" dark>Save Changes</v-btn>
            </v-card-title>

            <v-expansion-panels v-model="panel" multiple>
                <v-expansion-panel>
                    <v-expansion-panel-header>
                        <div class="green--text">
                            General Settings
                        </div>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-col cols="12" md="4">
                            <v-text-field label="Company Name"></v-text-field>
                            <v-select
                                label="Currency"
                                :items="['Philippine Peso']"
                            ></v-select>
                        </v-col>
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <!-- <v-expansion-panel>
                    <v-expansion-panel-header>
                        User Settings
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
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
                                <v-col cols="12" md="4">
                                    <v-text-field
                                        label="Expense Expiry Period"
                                        value="1"
                                        suffix="days"
                                    ></v-text-field>
                                </v-col>
                            </v-form>
                        </v-container>

                        <!-- <div style="overflow-x:auto;">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Expense Expiry Period (Days)</td>
                                        <td>:</td>
                                        <td><v-text-field label="Expense Expiry Period (Days)"></v-text-field></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> -->
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
                                <v-col cols="12" md="4">
                                    <v-select
                                        v-model="
                                            expense_report_settings.submission_date
                                        "
                                        label="Submission Date"
                                        :items="['Daily', 'Weekly', 'Monthly']"
                                    ></v-select>
                                </v-col>
                                <v-col cols="12" md="4">
                                    <v-text-field
                                        v-model="
                                            expense_report_settings.approval_period
                                        "
                                        label="Approval Period"
                                        suffix="days"
                                    ></v-text-field>
                                </v-col>
                            </v-form>
                        </v-container>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            general_settings: {
                company_name: "Twin-Circa Marketing",
                currency: "Philippine Peso"
            },
            expense_settings: {
                expiry_period: 1
            },
            expense_report_settings: {
                submission_date: "Weekly",
                approval_period: 1
            },
            panel: [0, 1, 2, 3]
        };
    },
    methods: {
        onSave: function() {}
    }
};
</script>
