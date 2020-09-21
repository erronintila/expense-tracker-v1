<template>
    <v-app>
        <v-dialog v-model="dialog" persistent max-width="600px">
            <v-card>
                <v-form ref="form" v-model="valid">
                    <v-card-title>
                        <span class="headline">Edit Expense</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" md="4">
                                    <v-autocomplete
                                        v-model="expense_type"
                                        :rules="rules.expense_type"
                                        :items="expense_types"
                                        :error-messages="errors.expense_type_id"
                                        @input="errors.expense_type_id = []"
                                        item-value="id"
                                        item-text="name"
                                        label="Expense Type *"
                                        required
                                    >
                                    </v-autocomplete>
                                </v-col>

                                <v-col cols="12" md="4">
                                    <v-autocomplete
                                        v-model="vendor"
                                        :rules="rules.vendor"
                                        :items="vendors"
                                        :error-messages="errors.vendor_id"
                                        @input="errors.vendor_id = []"
                                        item-value="id"
                                        item-text="name"
                                        label="Vendor *"
                                        required
                                    >
                                    </v-autocomplete>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12" md="8">
                                    <v-text-field
                                        v-model="description"
                                        :rules="rules.description"
                                        :counter="100"
                                        :error-messages="errors.description"
                                        @input="errors.description = []"
                                        label="Description *"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                    <v-menu
                                        ref="menu"
                                        v-model="menu"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="290px"
                                    >
                                        <template
                                            v-slot:activator="{ on, attrs }"
                                        >
                                            <v-text-field
                                                v-model="date"
                                                :rules="rules.date"
                                                :error-messages="errors.date"
                                                @input="errors.date = []"
                                                label="Date *"
                                                readonly
                                                v-bind="attrs"
                                                v-on="on"
                                            ></v-text-field>
                                        </template>
                                        <v-date-picker
                                            v-model="date"
                                            no-title
                                            scrollable
                                            color="success"
                                        >
                                        </v-date-picker>
                                    </v-menu>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12" md="4">
                                    <v-text-field
                                        v-model="receipt_number"
                                        :rules="rules.receipt_number"
                                        :error-messages="errors.receipt_number"
                                        @input="errors.receipt_number = []"
                                        label="Receipt No. *"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                    <v-text-field
                                        v-model="amount"
                                        :rules="rules.amount"
                                        :error-messages="errors.amount"
                                        @input="errors.amount = []"
                                        label="Amount *"
                                        required
                                    ></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12">
                                    <v-textarea
                                        rows="1"
                                        label="Remarks"
                                        v-model="remarks"
                                        :error-messages="errors.remarks"
                                        @input="errors.remarks = []"
                                    ></v-textarea>
                                </v-col>
                            </v-row>

                            <small class="text--secondary">
                                * indicates required field
                            </small>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" text @click="dialog = false">
                            Close
                        </v-btn>
                        <v-btn color="primary" text @click="onSave">
                            Save
                        </v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>
    </v-app>
</template>

<script>
export default {
    props: {
        employeeid: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            dialog: false,
            valid: false,
            menu: false,
            id: null,
            code: null,
            description: null,
            amount: 0,
            receipt_number: null,
            date: null,
            remarks: "",
            is_active: true,
            expense_type: null,
            expense_types: [],
            employee: null,
            employees: [],
            vendor: null,
            vendors: [],
            rules: {
                description: [v => !!v || "Description is required"],
                amount: [v => !!v || "Amount is required"],
                receipt_number: [v => !!v || "Receipt Number is required"],
                date: [v => !!v || "Date is required"],
                remarks: [],
                is_active: [],
                expense_type: [v => !!v || "Expense Type is required"],
                vendor: [v => !!v || "Vendor is required"]
            },
            errors: {
                description: [],
                amount: [],
                receipt_number: [],
                date: [],
                remarks: [],
                is_active: [],
                expense_type_id: [],
                vendor_id: []
            }
        };
    },
    methods: {
        openDialog(item) {
            let _this = this;

            _this.dialog = true;

            axios
                .get("/api/expenses/" + item.id)
                .then(response => {
                    let data = response.data.data;

                    _this.id = data.id;
                    _this.code = data.code;
                    _this.description = data.description;
                    _this.amount = data.amount;
                    _this.receipt_number = data.receipt_number;
                    _this.date = data.date;
                    _this.remarks = data.remarks;
                    _this.is_active = data.is_active;
                    _this.expense_type = data.expense_type.id;
                    _this.employee = data.employee.id;
                    _this.vendor = data.vendor.id;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        loadExpenseTypes() {
            let _this = this;

            axios
                .get("/api/data/expense_types")
                .then(response => {
                    _this.expense_types = response.data.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        loadVendors() {
            let _this = this;

            axios
                .get("/api/data/vendors")
                .then(response => {
                    _this.vendors = response.data.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        onRefresh() {
            Object.assign(this.$data, this.$options.data.apply(this));

            this.$refs.form.resetValidation();
            this.loadExpenseTypes();
            this.loadVendors();
        },
        onSave() {
            let _this = this;

            _this.$refs.form.validate();

            if (_this.$refs.form.validate()) {
                axios
                    .put("/api/expenses/" + _this.id, {
                        code: _this.code,
                        description: _this.description,
                        amount: _this.amount,
                        receipt_number: _this.receipt_number,
                        date: _this.date,
                        remarks: _this.remarks,
                        is_active: _this.is_active,
                        expense_type_id: _this.expense_type,
                        employee_id: _this.employeeid,
                        vendor_id: _this.vendor
                    })
                    .then(function(response) {
                        _this.onRefresh();

                        _this.$dialog.message.success(
                            "Expense updated successfully.",
                            {
                                position: "top-right",
                                timeout: 2000
                            }
                        );

                        _this.$emit("onSaveExpense");

                        _this.dialog = false;
                    })
                    .catch(function(error) {
                        console.log(error);

                        console.log(error.response);

                        _this.errors = error.response.data.errors;
                    });

                return;
            }
        }
    },
    created() {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " + localStorage.getItem("access_token");

        this.loadExpenseTypes();
        this.loadVendors();
    }
};
</script>
