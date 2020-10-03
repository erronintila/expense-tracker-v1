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
                        <v-col cols="12" md="6">
                            <v-autocomplete
                                v-model="employee"
                                label="Employee *"
                                :items="employees"
                                item-text="fullname"
                                item-value="id"
                                return-object
                                @change="amount = employee.fund"
                            >
                            </v-autocomplete>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="amount"
                                label="Amount"
                                :hint="
                                    `Fund: ${employee.fund} ~ Remaining : ${employee.remaining_fund}`
                                "
                                persistent-hint
                            >
                            </v-text-field>
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
            employee: { id: null, fullname: "", fund: 0, remaining_fund: 0 },
            employees: [],
            reference: "",
            code: "",
            description: "",
            amount: 0,
            type: "Manage Revolving Fund",
            remarks: "",
            rules: {
                employee: [v => !!v || "This field is required."],
                reference: [],
                code: [],
                description: [],
                amount: [v => !!v || "This field is required."],
                remarks: []
            },
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
                    _this.employees = response.data.data;
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);
                });
        },
        onSave() {
            let _this = this;

            if (_this.$refs.form.validate()) {
                axios
                    .post("/api/adjustments", {
                        employee_id: _this.employee.id,
                        reference: _this.reference,
                        code: _this.code,
                        description: _this.description,
                        remarks: _this.remarks,
                        amount: _this.amount,
                        type: _this.type
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
