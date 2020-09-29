<template>
    <div>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">New Adjustment</h4>
            </v-card-title>

            <v-form ref="form" v-model="valid">
                <v-container>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-select
                                v-model="transaction_type"
                                label="Transaction Type *"
                                :items="transaction_types"
                            >
                            </v-select>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="reference"
                                :counter="100"
                                :rules="rules.reference"
                                :error-messages="errors.reference[0]"
                                @input="errors.reference = []"
                                label="Reference"
                            >
                            </v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" md="4">
                            <v-select
                                v-model="employee"
                                label="Employee *"
                                :items="employees"
                                item-text="fullname"
                                item-value="id"
                                return-object
                            >
                            </v-select>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="employee.fund"
                                label="Revolving Fund"
                                readonly
                            >
                            </v-text-field>
                        </v-col>

                        <!-- <v-col cols="12" md="4">
                            <v-text-field
                                v-model="description"
                                :counter="100"
                                :rules="rules.description"
                                :error-messages="errors.description[0]"
                                @input="errors.description = []"
                                label="Description *"
                            >
                            </v-text-field>
                        </v-col> -->

                        <v-col cols="12" md="4">
                            <v-row class="m-0 p-0">
                                <v-col cols="4" md="5">
                                    <v-select
                                        v-model="revolving_fund_trans"
                                        :items="['Add', 'Subtract']"
                                    ></v-select>
                                </v-col>
                                <v-spacer></v-spacer>
                                <v-col cols="8" md="7">
                                    <v-text-field
                                        v-model="amount"
                                        :counter="100"
                                        :rules="rules.amount"
                                        :error-messages="errors.amount[0]"
                                        @input="errors.amount = []"
                                        label="Amount *"
                                    >
                                    </v-text-field>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>

                    <small class="text--secondary">
                        * indicates required field
                    </small>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green" dark @click="onSave">Save</v-btn>
                        <v-btn to="/admin/adjustments">Cancel</v-btn>
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
            transaction_type: "Revolving Fund",
            transaction_types: ["Revolving Fund"],
            revolving_fund_trans: "Add",
            employee: { id: null, fullname: "", fund: 0 },
            employees: [],
            fund: 0,
            reference: "",
            code: "",
            description: "",
            amount: 0,
            rules: {
                employee: [v => !!v || "This field is required."],
                fund: [],
                reference: [],
                code: [],
                description: [v => !!v || "This field is required."],
                amount: [v => !!v || "This field is required."]
            },
            errors: {
                employee: [],
                fund: [],
                reference: [],
                code: [],
                description: [],
                amount: []
            }
        };
    },
    methods: {
        // onRefresh() {
        //     // Object.assign(this.$data, this.$options.data.apply(this));
        //     this.$refs.form.reset();
        //     this.$refs.form.resetValidation();
        // },
        loadEmployees() {
            let _this = this;

            axios
                .get("/api/data/employees")
                .then(response => {
                    console.log(response);
                    _this.employees = response.data.data;
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);
                });
        },
        onSave() {
            let _this = this;

            // console.log(_this.employee);
            // return;

            if (this.transaction_type == "Revolving Fund") {
                if (
                    parseFloat(this.employee.fund) < parseFloat(this.amount) &&
                    this.revolving_fund_trans == "Subtract"
                ) {
                    _this.$dialog.message.error(
                        "Amount is lesser than revolving fund",
                        {
                            position: "top-right",
                            timeout: 2000
                        }
                    );

                    return;
                }

                this.description = `${this.revolving_fund_trans} ${this.transaction_type}`;
            }

            if (_this.$refs.form.validate()) {
                axios
                    .post("/api/adjustments", {
                        employee_id: _this.employee.id,
                        reference: _this.reference,
                        code: _this.code,
                        description: _this.description,
                        add_amount:
                            _this.revolving_fund_trans == "Add"
                                ? _this.amount
                                : 0,
                        subtract_amount:
                            _this.revolving_fund_trans == "Subtract"
                                ? _this.amount
                                : 0,
                        type: _this.transaction_type
                    })
                    .then(function(response) {
                        // _this.onRefresh();

                        _this.$dialog.message.success(
                            "Adjustment created successfully.",
                            {
                                position: "top-right",
                                timeout: 2000
                            }
                        );

                        _this.$router.push({ name: "admin.adjustments.index" });
                    })
                    .catch(function(error) {
                        console.log(error);
                        console.log(error.response);

                        _this.errors = error.response.data.errors;
                    });
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
