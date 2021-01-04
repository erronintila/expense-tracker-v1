<template>
    <div>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">Fund Adjustment</h4>
            </v-card-title>

            <v-form ref="form" v-model="valid">
                <v-container>
                    <v-row>
                        <v-col cols="12" md="6">
                            <v-autocomplete
                                v-model="employee"
                                label="Employee *"
                                :items="employees"
                                item-text="fullname"
                                item-value="id"
                                return-object
                                :rules="mixin_validation.required"
                                :error-messages="errors.employee"
                                @input="errors.employee = []"
                            >
                            </v-autocomplete>
                        </v-col>

                    </v-row>

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
                                            {{
                                                mixin_formatNumber(
                                                    employee.fund
                                                )
                                            }}
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
                                                    employee.remaining_fund
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

                    <v-row>
                        <v-col cols="12" md="4">
                            <v-textarea
                                v-model="remarks"
                                label="Remarks"
                                rows="2"
                            ></v-textarea>
                        </v-col>
                    </v-row>

                    <small class="text--secondary">
                        * indicates required field
                    </small>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green" dark @click="onSave">Save</v-btn>
                        <v-btn :to="{ name: 'admin.adjustments.index' }">
                            Cancel
                        </v-btn>
                    </v-card-actions>
                </v-container>
            </v-form>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            valid: false,
            adjustment_type: "Add Amount",
            employee: { id: null, fullname: "", fund: 0, remaining_fund: 0 },
            employees: [],
            reference: "",
            code: "",
            description: "",
            amount: 0,
            type: "Manage Revolving Fund",
            remarks: "",
            errors: {
                employee: [],
                reference: [],
                code: [],
                description: [],
                amount: [],
                remarks: []
            }
        };
    },
    methods: {
        loadEmployees() {
            let _this = this;

            axios
                .get("/api/data/employees")
                .then(response => {
                    _this.employees = response.data.data;
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);

                    _this.mixin_errorDialog(
                        `Error ${error.response.status}`,
                        error.response.statusText
                    );
                });
        },
        onSave() {
            let _this = this;

            if(this.new_fund < 0 || this.new_remaining_fund < 0) {
                this.mixin_errorDialog("Error", "Revolving fund/Remaining fund should not be lesser than current amount");
                return;
            }

            if (_this.$refs.form.validate()) {
                let add_amount =
                    this.adjustment_type == "Add Amount" ? this.amount : 0;
                let subtract_amount =
                    this.adjustment_type == "Subtract Amount" ? this.amount : 0;

                axios
                    .post("/api/adjustments", {
                        employee: _this.employee.id,
                        reference: _this.reference,
                        code: _this.code,
                        description: _this.description,
                        remarks: _this.remarks,
                        // amount: _this.amount,
                        add_amount: add_amount,
                        subtract_amount: subtract_amount,
                        type: _this.type
                    })
                    .then(function(response) {
                        _this.mixin_successDialog(
                            "Success",
                            "Adjustment created successfully."
                        );

                        _this.$router.push({ name: "admin.adjustments.index" });
                    })
                    .catch(function(error) {
                        console.log(error);
                        console.log(error.response);

                        _this.errors = error.response.data.errors;

                        _this.mixin_errorDialog(
                            `Error ${error.response.status}`,
                            error.response.statusText
                        );
                    });
            }
        }
    },
    computed: {
        new_fund() {
            if (this.adjustment_type == "Add Amount") {
                return (
                    this.mixin_convertToNumber(this.employee.fund) +
                    this.mixin_convertToNumber(this.amount)
                );
            }

            return (
                this.mixin_convertToNumber(this.employee.fund) -
                this.mixin_convertToNumber(this.amount)
            );
        },
        new_remaining_fund() {
            if (this.adjustment_type == "Add Amount") {
                return (
                    this.mixin_convertToNumber(this.employee.remaining_fund) +
                    this.mixin_convertToNumber(this.amount)
                );
            }

            return (
                this.mixin_convertToNumber(this.employee.remaining_fund) -
                this.mixin_convertToNumber(this.amount)
            );
        }
    },
    created() {
        this.loadEmployees();
    }
};
</script>
