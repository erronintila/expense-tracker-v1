<template>
    <div>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <h4 class="title green--text">Settings</h4>
                <v-spacer></v-spacer>
                <v-btn
                    color="green"
                    :to="{ name: 'admin.settings.employee' }"
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
                                            label="Expense Expiry Period"
                                            value="1"
                                            suffix="days"
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
                                            v-model="
                                                expense_report_settings.submission_date
                                            "
                                            label="Submission Date"
                                            :items="[
                                                'Daily',
                                                'Weekly',
                                                'Monthly'
                                            ]"
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
        onSave: function() {
            let settings = Object.assign(this.general_settings, this.expense_settings, this.expense_report_settings);

            console.log(settings);
        }
    }
};
</script>
