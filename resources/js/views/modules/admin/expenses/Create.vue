<template>
    <v-app>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn to="/admin/expenses" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">New Expense</h4>
            </v-card-title>

            <v-form ref="form" v-model="valid">
                <v-container>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-select
                                v-model="employee"
                                :rules="rules.employee"
                                :counter="100"
                                :items="employees"
                                item-value="id"
                                item-text="fullname"
                                label="Employee"
                                required
                            >
                            </v-select>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-select
                                v-model="expense_type"
                                :rules="rules.expense_type"
                                :counter="100"
                                :items="expense_types"
                                item-value="id"
                                item-text="name"
                                label="Expense Type"
                                required
                            >
                            </v-select>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-select
                                v-model="vendor"
                                :rules="rules.vendor"
                                :counter="100"
                                :items="vendors"
                                item-value="id"
                                item-text="name"
                                label="Vendor"
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
                                label="Description"
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
                                        label="Date"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                    v-model="date"
                                    no-title
                                    scrollable
                                >
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        text
                                        color="primary"
                                        @click="menu = false"
                                        >Cancel
                                    </v-btn>
                                    <v-btn
                                        text
                                        color="primary"
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
                                :counter="100"
                                label="Receipt No."
                                required
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="amount"
                                :rules="rules.amount"
                                :counter="100"
                                label="Amount"
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
                            ></v-textarea>
                        </v-col>
                    </v-row>

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
            code: "",
            description: "",
            amount: 0,
            receipt_number: "",
            date: null,
            remarks: "",
            is_active: true,
            expense_type: {},
            expense_types: [],
            employee: {},
            employees: [],
            vendor: {},
            vendors: [],
            rules: {
                name: [
                    v => !!v || "Name is required",
                    v =>
                        v.length <= 100 ||
                        "Name must be less than 100 characters"
                ],
                description: [],
                amount: [],
                receipt_number: [],
                date: [],
                remarks: [],
                is_active: [],
                expense_type: [],
                employee: [],
                vendor: []
            }
        };
    },
    methods: {
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
            this.name = "";

            this.$refs.form.resetValidation();
        },
        onSave() {
            let _this = this;

            _this.$refs.form.validate();

            if (_this.$refs.form.validate()) {
                axios
                    .post("/api/expenses", {
                        name: _this.name,
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
                            "Expense created successfully.",
                            {
                                position: "top-right",
                                timeout: 2000
                            }
                        );
                    })
                    .catch(function(error) {
                        console.log(error.response);
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
    }
};
</script>
