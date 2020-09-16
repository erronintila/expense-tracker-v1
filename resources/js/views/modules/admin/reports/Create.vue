<template>
    <v-app>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn :to="{ name: 'admin.reports.index' }" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">New Expense Report</h4>
            </v-card-title>

            <v-form ref="form" v-model="valid">
                <v-container>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-autocomplete
                                v-model="employee"
                                :rules="rules.employee"
                                :items="employees"
                                :error-messages="errors.employee"
                                @input="errors.employee = []"
                                item-value="id"
                                item-text="fullname"
                                label="Employee *"
                                required
                            >
                            </v-autocomplete>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="description"
                                :rules="rules.description"
                                :counter="100"
                                label="Description"
                                required
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <DateRangePicker
                                :preset="preset"
                                :presets="presets"
                                :value="date_range"
                                @updateDates="updateDates"
                            ></DateRangePicker>
                        </v-col>
                    </v-row>

                    <v-row> </v-row>

                    <v-row>
                        <v-col cols="12" md="4">
                            <v-textarea
                                :rows="remarks == '' ? 1 : 2"
                                v-model="remarks"
                                label="Remarks"
                                :rules="rules.remarks"
                            >
                            </v-textarea>
                        </v-col>
                    </v-row>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="test">Test</v-btn>
                        <v-btn color="green" dark @click="onSave">Save</v-btn>
                        <v-btn :to="{ name: 'admin.reports.index' }"
                            >Cancel</v-btn
                        >
                    </v-card-actions>
                </v-container>
            </v-form>
        </v-card>
    </v-app>
</template>

<script>
import moment from "moment";
import DateRangePicker from "../../../../components/daterangepicker/DateRangePicker";

export default {
    components: {
        DateRangePicker
    },
    data() {
        return {
            valid: false,
            date_range: [
                moment().format("YYYY-MM-DD"),
                moment().format("YYYY-MM-DD")
            ],
            preset: "",
            presets: [
                "Today",
                "Yesterday",
                "Last 7 Days",
                "Last 30 Days",
                "This Week",
                "This Month",
                "This Quarter",
                "This Year",
                "Last Week",
                "Last Month",
                "Last Quarter",
                "Last Year",
                "Last 5 Years"
            ],
            code: "",
            description: "",
            remarks: "",
            notes: "",
            employee: null,
            employees: [],
            expenses: [],
            rules: {
                date_range: [],
                code: [],
                description: [
                    v => !!v || "Description is required",
                    v =>
                        (!!v && v.length <= 100) ||
                        "Description must be less than 100 characters"
                ],
                remarks: [],
                notes: [],
                employee: [v => !!v || "Employee is required"],
                expenses: []
            },
            errors: {
                date_range: [],
                code: [],
                description: [],
                remarks: [],
                notes: [],
                employee: [],
                expenses: []
            }
        };
    },
    methods: {
        updateDates(e) {
            this.date_range = e;
        },
        test(e) {
            console.log(this.date_range);
        },
        loadEmployees() {
            let _this = this;

            axios
                .get("/api/data/employees")
                .then(response => {
                    _this.employees = response.data.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        onRefresh() {
            Object.assign(this.$data, this.$options.data.apply(this));
        },
        onSave() {
            let _this = this;

            if (_this.$refs.form.validate()) {
                axios
                    .post("/api/expense_reports", {
                        code: _this.code,
                        description: _this.description,
                        remarks: _this.remarks,
                        notes: _this.notes,
                        employee: _this.employee,
                        expenses: _this.expenses
                    })
                    .then(function(response) {
                        // _this.onRefresh();

                        _this.$dialog.message.success(
                            "Expense Report created successfully.",
                            {
                                position: "top-right",
                                timeout: 2000
                            }
                        );

                        _this.$router.push({ name: "admin.reports.index" });
                    })
                    .catch(function(error) {
                        console.log(error);
                    });

                return;
            }
        }
    },
    created() {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " + localStorage.getItem("access_token");

        this.loadEmployees();
    }
};
</script>
