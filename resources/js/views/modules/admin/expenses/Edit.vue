<template>
    <v-app>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn to="/admin/expenses" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">Edit Expense</h4>
            </v-card-title>

            <v-form ref="form" v-model="valid">
                <v-container>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-select
                                v-model="employee"
                                :rules="rules.employee"
                                :items="employees"
                                :error-messages="errors.employee_id"
                                @input="errors.employee_id = []"
                                color="success"
                                item-value="id"
                                item-text="fullname"
                                label="Employee *"
                                required
                            >
                            </v-select>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-select
                                v-model="expense_type"
                                :rules="rules.expense_type"
                                :items="expense_types"
                                :error-messages="errors.expense_type_id"
                                @input="errors.expense_type_id = []"
                                color="success"
                                item-value="id"
                                item-text="name"
                                label="Expense Type *"
                                required
                            >
                            </v-select>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-select
                                v-model="vendor"
                                :rules="rules.vendor"
                                :items="vendors"
                                :error-messages="errors.vendor_id"
                                @input="errors.vendor_id = []"
                                color="success"
                                item-value="id"
                                item-text="name"
                                label="Vendor *"
                                required
                            >
                            </v-select>
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
                                color="success"
                                label="Description *"
                                required
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-menu
                                ref="menu"
                                v-model="menu"
                                :close-on-content-click="false"
                                :return-value.sync="date"
                                transition="scale-transition"
                                offset-y
                                min-width="290px"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="date"
                                        :rules="rules.date"
                                        :error-messages="errors.date"
                                        @input="errors.date = []"
                                        color="success"
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
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        text
                                        color="success"
                                        @click="menu = false"
                                        >Cancel
                                    </v-btn>
                                    <v-btn
                                        text
                                        color="success"
                                        @click="$refs.menu.save(date)"
                                        >OK
                                    </v-btn>
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
                                color="success"
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
                                color="success"
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
                                color="success"
                            ></v-textarea>
                        </v-col>
                    </v-row>

                    <small style="opacity: 0.5">
                        * indicates required field
                    </small>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green" dark @click="onSave">Save</v-btn>
                        <v-btn to="/admin/expenses">Cancel</v-btn>
                    </v-card-actions>
                </v-container>
            </v-form>
        </v-card>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            valid: false,
            menu: false,
            code: null,
            description: null,
            amount: 0,
            receipt_number: null,
            date: null,
            remarks: null,
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
                employee: [v => !!v || "Employee is required"],
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
                employee_id: [],
                vendor_id: []
            }
        };
    },
    methods: {
        getData() {
            let _this = this;

            axios
                .get("/api/expenses/" + _this.$route.params.id)
                .then(response => {
                    let data = response.data.data;

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
                .get("/api/expense_types")
                .then(response => {
                    _this.expense_types = response.data.data;
                })
                .catch(error => {
                    console.log(error);

                    console.log(error.response);
                });
        },
        loadEmployees() {
            let _this = this;

            axios
                .get("/api/employees")
                .then(response => {
                    _this.employees = response.data.data;
                })
                .catch(error => {
                    console.log(error);

                    console.log(error.response);
                });
        },
        loadVendors() {
            let _this = this;

            axios
                .get("/api/vendors")
                .then(response => {
                    _this.vendors = response.data.data;
                })
                .catch(error => {
                    console.log(error);

                    console.log(error.response);
                });
        },
        onRefresh() {
            Object.assign(this.$data, this.$options.data.apply(this));
            // this.$refs.form.reset();
            // this.$refs.form.resetValidation();
        },
        onSave() {
            let _this = this;

            _this.$refs.form.validate();

            if (_this.$refs.form.validate()) {
                axios
                    .put("/api/expenses/" + _this.$route.params.id, {
                        code: _this.code,
                        description: _this.description,
                        amount: _this.amount,
                        receipt_number: _this.receipt_number,
                        date: _this.date,
                        remarks: _this.remarks,
                        is_active: _this.is_active,
                        expense_type_id: _this.expense_type,
                        employee_id: _this.employee,
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

                        _this.$router.push({ name: "admin.expenses.index" });
                    })
                    .catch(function(error) {
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
        this.loadEmployees();
        this.loadVendors();
        this.getData();
    }
};
</script>
