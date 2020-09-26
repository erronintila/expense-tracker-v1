<template>
    <v-app>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">New Expense</h4>
            </v-card-title>

            <v-form ref="form" v-model="valid">
                <v-container>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-autocomplete
                                v-model="employee"
                                :rules="rules.employee"
                                :items="employees"
                                :error-messages="errors.employee_id"
                                @input="errors.employee_id = []"
                                item-value="id"
                                item-text="fullname"
                                label="Employee *"
                                required
                            >
                            </v-autocomplete>
                        </v-col>

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
                        <!-- <v-col cols="12" md="4">
                            <v-text-field
                                v-model="description"
                                :rules="rules.description"
                                :counter="100"
                                :error-messages="errors.description"
                                @input="errors.description = []"
                                label="Description *"
                                required
                            ></v-text-field>
                        </v-col> -->

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
                            <v-menu
                                ref="menu"
                                v-model="menu"
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
                        <v-col cols="12">
                            <v-data-table
                                :headers="headers"
                                :items="items"
                                :items-per-page="5"
                                :footer-props="{
                                    itemsPerPageOptions: [5, 10, 20]
                                }"
                            >
                                <template
                                    slot="body.append"
                                    v-if="items.length > 0"
                                >
                                    <tr class="green--text hidden-md-and-up">
                                        <td class="title">
                                            Total:
                                            <strong>{{ amount }}</strong>
                                        </td>
                                    </tr>
                                    <tr class="green--text hidden-sm-and-down">
                                        <td class="title">Total</td>
                                        <td>
                                            <strong>{{ amount }}</strong>
                                        </td>
                                        <td></td>
                                    </tr>
                                </template>
                                <template v-slot:top>
                                    <v-toolbar flat color="white">
                                        Expense Details
                                        <v-spacer></v-spacer>
                                        <v-dialog
                                            v-model="dialog"
                                            max-width="500px"
                                        >
                                            <template
                                                v-slot:activator="{ on, attrs }"
                                            >
                                                <v-btn
                                                    color="primary"
                                                    dark
                                                    class="mb-2"
                                                    v-bind="attrs"
                                                    v-on="on"
                                                    >New Item</v-btn
                                                >
                                            </template>
                                            <v-card>
                                                <v-card-title>
                                                    <!-- <span class="headline">{{ formTitle }}</span> -->
                                                </v-card-title>

                                                <v-card-text>
                                                    <v-container>
                                                        <v-row>
                                                            <v-col cols="12">
                                                                <v-text-field
                                                                    v-model="
                                                                        particular
                                                                    "
                                                                    label="Particular"
                                                                ></v-text-field>
                                                            </v-col>
                                                            <v-col cols="12">
                                                                <v-text-field
                                                                    v-model="
                                                                        particular_amount
                                                                    "
                                                                    label="Amount"
                                                                ></v-text-field>
                                                            </v-col>
                                                        </v-row>
                                                    </v-container>
                                                </v-card-text>

                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn
                                                        color="primary"
                                                        text
                                                        @click="dialog = false"
                                                        >Cancel</v-btn
                                                    >
                                                    <v-btn
                                                        color="primary"
                                                        text
                                                        @click="addItem"
                                                        >Add</v-btn
                                                    >
                                                </v-card-actions>
                                            </v-card>
                                        </v-dialog>
                                    </v-toolbar>
                                </template>
                                <template v-slot:[`item.actions`]="{ item }">
                                    <v-icon
                                        small
                                        class="mr-2"
                                        @click="
                                            () => {
                                                onRemove(item);
                                            }
                                        "
                                    >
                                        mdi-delete
                                    </v-icon>
                                </template>
                            </v-data-table>
                        </v-col>
                    </v-row>

                    <!-- <v-row>
                        <v-col cols="12" md="4">
                            <v-text-field
                                dense
                                reverse
                                readonly
                                @change="calculateTotal"
                                @input="calculateTotal"
                                v-model="subtotal"
                                type="number"
                                label="Subtotal"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-text-field
                                dense
                                reverse
                                @change="calculateTotal"
                                @input="calculateTotal"
                                v-model="discount"
                                type="number"
                                label="Discount"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-text-field
                                dense
                                reverse
                                @change="calculateTotal"
                                @input="calculateTotal"
                                v-model="tax_rate"
                                label="(Tax rate)"
                                type="number"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-text-field
                                dense
                                reverse
                                @change="calculateTotal"
                                @input="calculateTotal"
                                v-model="tax"
                                label="TAX"
                                type="number"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-text-field
                                dense
                                reverse
                                readonly
                                v-model="amount"
                                label="Total Amount"
                                type="number"
                            ></v-text-field>
                        </v-col>
                    </v-row> -->

                    <!-- <v-row>
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="amount"
                                :rules="rules.amount"
                                :error-messages="errors.amount"
                                @input="errors.amount = []"
                                label="Amount *"
                                type="number"
                                required
                            ></v-text-field>
                        </v-col>
                    </v-row> -->

                    <v-row>
                        <v-col cols="12" md="4">
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

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green" dark @click="onSave">Save</v-btn>
                        <v-btn @click="$router.go(-1)">Cancel</v-btn>
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
            dialog: false,
            valid: false,
            menu: false,
            code: null,
            description: null,
            // subtotal: 0,
            // discount: 0,
            // tax: 0,
            // tax_rate: 0,
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
            particular: "",
            particular_amount: 0,
            rules: {
                description: [],
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
            },
            headers: [
                { text: "Particulars", value: "particular", sortable: false },
                { text: "Amount", value: "particular_amount", sortable: false },
                { text: "", value: "actions", sortable: false }
            ],
            items: []
        };
    },
    methods: {
        loadExpenseTypes() {
            let _this = this;

            axios
                .get("/api/data/expense_types")
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
                .get("/api/data/employees")
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
                .get("/api/data/vendors")
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
        },
        onSave() {
            let _this = this;

            _this.$refs.form.validate();

            if (this.items.length == 0) {
                _this.$dialog.message.error("No Expense detail added", {
                    position: "top-right",
                    timeout: 2000
                });
                return;
            }

            if (_this.$refs.form.validate()) {
                axios
                    .post("/api/expenses", {
                        code: _this.code,
                        description: _this.description,
                        amount: _this.amount,
                        receipt_number: _this.receipt_number,
                        date: _this.date,
                        remarks: _this.remarks,
                        is_active: _this.is_active,
                        expense_type_id: _this.expense_type,
                        employee_id: _this.employee,
                        vendor_id: _this.vendor,
                        expense_details: _this.items
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

                        _this.$router.push({ name: "admin.expenses.index" });
                    })
                    .catch(function(error) {
                        console.log(error);
                        console.log(error.response);

                        _this.errors = error.response.data.errors;
                    });

                return;
            }
        },
        addItem() {
            this.items.push({
                particular: this.particular,
                particular_amount: this.particular_amount
            });
            this.dialog = false;
            this.particular = "";
            this.particular_amount = 0;
        },
        onRemove(item) {
            const index = this.items.indexOf(item);
            confirm("Are you sure you want to remove this item?") &&
                this.items.splice(index, 1);
        },
        isEmpty(item) {
            if (item) {
                return parseFloat(item);
            }
            return 0;
        }
        // calculateTotal() {
        //     let subtotal = this.isEmpty(this.subtotal);
        //     let discount = this.isEmpty(this.discount);
        //     let tax = this.isEmpty(this.tax);
        //     let tax_rate = this.isEmpty(this.tax_rate);

        //     this.amount = subtotal - (discount + tax + tax_rate);
        // }
    },
    watch: {
        items() {
            this.amount = this.items.reduce(
                (total, item) =>
                    parseFloat(total) + parseFloat(item.particular_amount),
                0
            );
            // this.subtotal = this.items.reduce(
            //     (total, item) =>
            //         parseFloat(total) + parseFloat(item.particular_amount),
            //     0
            // );

            // this.calculateTotal();
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
