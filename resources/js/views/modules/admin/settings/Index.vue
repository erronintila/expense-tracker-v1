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
                <v-expansion-panel>
                    <v-expansion-panel-header>
                        <div class="green--text">
                            Expenses
                        </div>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-container>
                            <v-form ref="formExpenses" v-model="validExpenses">
                                <v-row>
                                    <v-col cols="12" md="4">
                                        <v-text-field
                                            v-model="
                                                settings.expense_encoding_period
                                            "
                                            label="Expense Encoding Period"
                                            suffix="days"
                                            :rules="[
                                                ...mixin_validation.required,
                                                ...mixin_validation.minNumberValue(
                                                    1
                                                )
                                            ]"
                                            :hint="
                                                'Allowed period for expenses to be encoded based on date'
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
                            Expense Reports
                        </div>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-container>
                            <v-form
                                ref="formExpenseReports"
                                v-model="validExpenseReports"
                            >
                                <v-row>
                                    <v-col>
                                        <div class="overline green--text">
                                            General
                                        </div>
                                    </v-col>
                                </v-row>

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
                                            :rules="[
                                                ...mixin_validation.required,
                                                ...mixin_validation.minNumberValue(
                                                    1
                                                )
                                            ]"
                                            :hint="
                                                'Allowed period for expense reports to be approved based on submission date'
                                            "
                                            persistent-hint
                                            type="number"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-divider></v-divider>

                                <v-row>
                                    <v-col>
                                        <div class="overline  green--text">
                                            Report No. Format:
                                        </div>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12" md="2">
                                        <v-text-field
                                            v-model="
                                                settings.expense_report
                                                    .report_no.prefix
                                            "
                                            label="Prefix"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="2">
                                        <v-text-field
                                            v-model="
                                                settings.expense_report
                                                    .report_no.num_length
                                            "
                                            :rules="[
                                                ...mixin_validation.minNumberValue(
                                                    0
                                                )
                                            ]"
                                            label="Length"
                                            type="number"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="4">
                                        <div class="green--text">
                                            e.g. {{ report_no }}
                                        </div>
                                        <small
                                            >(Prefix + YYYYMM + (length + report
                                            count))</small
                                        >
                                    </v-col>
                                </v-row>

                                <v-divider></v-divider>

                                <v-row>
                                    <v-col>
                                        <div class="overline green--text">
                                            Print Format
                                        </div>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="12" md="3">
                                        <v-select
                                            v-model="
                                                settings.expense_report
                                                    .print_format
                                                    .pageOrientation
                                            "
                                            label="Page Orientation"
                                            :items="['portrait', 'landscape']"
                                        ></v-select>
                                    </v-col>
                                    <v-col cols="12" md="3">
                                        <v-text-field
                                            v-model="
                                                settings.expense_report
                                                    .print_format.pageSize.width
                                            "
                                            :rules="[
                                                ...mixin_validation.minNumberValue(
                                                    1
                                                )
                                            ]"
                                            label="Page Size (width)"
                                            type="number"
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="3">
                                        <v-text-field
                                            v-model="
                                                settings.expense_report
                                                    .print_format.pageSize
                                                    .height
                                            "
                                            :rules="[
                                                ...mixin_validation.minNumberValue(
                                                    1
                                                )
                                            ]"
                                            label="Page Size (height)"
                                            type="number"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="12" md="3">
                                        <v-text-field
                                            v-model="
                                                settings.expense_report
                                                    .print_format.pageMargins
                                                    .left
                                            "
                                            :rules="[
                                                ...mixin_validation.minNumberValue(
                                                    0
                                                )
                                            ]"
                                            type="number"
                                            label="Page Margin (Left)"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="3">
                                        <v-text-field
                                            v-model="
                                                settings.expense_report
                                                    .print_format.pageMargins
                                                    .top
                                            "
                                            :rules="[
                                                ...mixin_validation.minNumberValue(
                                                    0
                                                )
                                            ]"
                                            type="number"
                                            label="Page Margin (Top)"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="3">
                                        <v-text-field
                                            v-model="
                                                settings.expense_report
                                                    .print_format.pageMargins
                                                    .right
                                            "
                                            :rules="[
                                                ...mixin_validation.minNumberValue(
                                                    0
                                                )
                                            ]"
                                            type="number"
                                            label="Page Margin (Right)"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="3">
                                        <v-text-field
                                            v-model="
                                                settings.expense_report
                                                    .print_format.pageMargins
                                                    .bottom
                                            "
                                            :rules="[
                                                ...mixin_validation.minNumberValue(
                                                    0
                                                )
                                            ]"
                                            type="number"
                                            label="Page Margin (Bottom)"
                                        >
                                        </v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="12" md="3">
                                        <v-select
                                            v-model="
                                                settings.expense_report
                                                    .print_format.defaultStyle
                                                    .font
                                            "
                                            label="Font"
                                            :items="['Roboto']"
                                        >
                                        </v-select>
                                    </v-col>
                                </v-row>

                                <v-divider></v-divider>

                                <v-row>
                                    <v-col>
                                        <div class="overline green--text">
                                            Report Logo
                                        </div>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col v-if="url" cols="12" md="3">
                                        <v-img
                                            label="Report Image Logo"
                                            :src="url"
                                        />
                                    </v-col>
                                    <v-col cols="12" md="3">
                                        <!-- <v-file-input
                                            show-size
                                            label="Upload"
                                            accept="image/*"
                                            v-model="file_input"
                                        /> -->

                                        <v-file-input
                                            :rules="rules.file_input"
                                            prepend-icon="mdi-upload"
                                            show-size
                                            label="Upload"
                                            accept="image/png, image/jpeg, image/bmp"
                                            v-model="file_input"
                                        />
                                    </v-col>
                                    <v-col cols="12" md="3">
                                        <v-text-field
                                            v-model="
                                                settings.expense_report
                                                    .print_format.background
                                                    .width
                                            "
                                            :rules="[
                                                ...mixin_validation.minNumberValue(
                                                    1
                                                )
                                            ]"
                                            label="Logo Width"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="3">
                                        <v-text-field
                                            v-model="
                                                settings.expense_report
                                                    .print_format.background
                                                    .height
                                            "
                                            :rules="[
                                                ...mixin_validation.minNumberValue(
                                                    1
                                                )
                                            ]"
                                            label="Logo Height"
                                        >
                                        </v-text-field>
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
                            <v-form ref="formTaxes" v-model="validTaxes">
                                <v-row>
                                    <v-col cols="12" md="4">
                                        <v-text-field
                                            v-model="settings.tax_rate"
                                            label="Tax Rate"
                                            suffix="%"
                                            :rules="[
                                                ...mixin_validation.required,
                                                ...mixin_validation.minNumberValue(
                                                    0
                                                )
                                            ]"
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
import SettingDataService from "../../../../services/SettingDataService";

export default {
    data() {
        return {
            validExpenses: false,
            validExpenseReports: false,
            validTaxes: false,
            file_input: null,
            rules: {
                file_input: [
                    value =>
                        !value ||
                        value.size < 30000 ||
                        "Report logo size should be less than 30 KB"
                ]
            },
            settings: {
                company_name: "Twin-Circa Marketing",
                currency: "Philippine Peso",
                expiry_period: 1,
                expense_encoding_period: 1,
                submission_period: "Weekly",
                approval_period: 1,
                tax_rate: 0,
                expense_report: {
                    report_no: {
                        prefix: "",
                        length: 1
                    },
                    print_format: {
                        pageSize: {
                            width: 0,
                            height: 0
                        },
                        pageOrientation: "landscape",
                        pageMargins: {
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0
                        },
                        defaultStyle: {
                            font: "Roboto"
                        },
                        background: {
                            alignment: "left",
                            width: 0,
                            height: 0,
                            image: "",
                            margin: {
                                left: 0,
                                top: 0,
                                right: 0,
                                bottom: 0
                            }
                        }
                    }
                }
            },
            panel: [0, 1, 2, 3]
        };
    },
    methods: {
        onLoad() {
            SettingDataService.getAll()
                .then(response => {
                    this.file_input = null;
                    this.settings = response.data;
                })
                .catch(error => {
                    this.mixin_showErrors(error);
                });
        },
        onSave() {
            this.$refs.formExpenses.validate();
            this.$refs.formExpenseReports.validate();
            this.$refs.formTaxes.validate();

            if (
                this.$refs.formExpenses.validate() &&
                this.$refs.formExpenseReports.validate() &&
                this.$refs.formTaxes.validate()
            ) {
                let data = {
                    settings: this.settings
                };

                SettingDataService.store(data)
                    .then(response => {
                        this.mixin_successDialog(
                            "Success",
                            "Saved settings successfully"
                        );

                        this.$store.dispatch("AUTH_USER");
                        this.$store.dispatch("AUTH_SETTINGS");

                        window.location.replace("/admin/settings");
                    })
                    .catch(error => {
                        this.mixin_showErrors(error);
                    });
            }
        }
    },
    computed: {
        page_sizes() {
            return [
                {
                    name: "A4",
                    width:
                        this.expense_report.print_format.pageOrientation ==
                        "portrait"
                            ? 10
                            : 9,
                    height:
                        this.expense_report.print_format.pageOrientation ==
                        "portrait"
                            ? 10
                            : 9
                },
                {
                    name: "Letter",
                    width:
                        this.expense_report.print_format.pageOrientation ==
                        "portrait"
                            ? 10
                            : 9,
                    height:
                        this.expense_report.print_format.pageOrientation ==
                        "portrait"
                            ? 10
                            : 9
                },
                {
                    name: "Folio",
                    width:
                        this.expense_report.print_format.pageOrientation ==
                        "portrait"
                            ? 10
                            : 9,
                    height:
                        this.expense_report.print_format.pageOrientation ==
                        "portrait"
                            ? 10
                            : 9
                },
                {
                    name: "Legal",
                    width:
                        this.expense_report.print_format.pageOrientation ==
                        "portrait"
                            ? 10
                            : 9,
                    height:
                        this.expense_report.print_format.pageOrientation ==
                        "portrait"
                            ? 10
                            : 9
                },
                {
                    name: "Custom",
                    width: 0,
                    height: 0
                }
            ];
        },
        url() {
            if (this.file_input) {
                return URL.createObjectURL(this.file_input);
            }

            return this.$store.getters.settings.expense_report.print_format
                .background.image;
        },
        report_no: {
            get() {
                let prefix = this.settings.expense_report.report_no.prefix;
                let num_length = this.settings.expense_report.report_no
                    .num_length;
                let report_no = "";

                report_no =
                    prefix +
                    moment().format("YYYYMM") +
                    String(1).padStart(num_length, "0");

                return report_no;
            }
        }
    },
    watch: {
        file_input() {
            if (this.file_input) {
                let reader = new FileReader();
                reader.readAsDataURL(this.file_input);
                reader.onload = () => {
                    this.settings.expense_report.print_format.background.image =
                        reader.result;
                };
                reader.onerror = error => {
                    this.mixin_showErrors(error);
                };
            } else {
                this.settings.expense_report.print_format.background.image = this.$store.getters.settings.expense_report.print_format.background.image;
            }
        }
    },
    created() {
        // this.$store.dispatch("AUTH_USER");
        this.$store.dispatch("AUTH_SETTINGS");
        this.$store.dispatch("AUTH_NOTIFICATIONS");
        this.onLoad();
    },
    activated() {
        this.$store.dispatch("AUTH_SETTINGS");
        this.$store.dispatch("AUTH_NOTIFICATIONS");
        this.onLoad();
    }
};
</script>
