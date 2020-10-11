<template>
    <div>
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
                        <v-spacer></v-spacer>
                        <h3 class="title green--text mr-2">
                            Remaining Funds:
                            {{ formatNumber(form.employee.remaining_fund) }}
                        </h3>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-autocomplete
                                v-model="form.employee"
                                :rules="validation.required"
                                :items="employees"
                                :error-messages="errors.employee_id"
                                @input="errors.employee_id = []"
                                item-value="id"
                                item-text="fullname"
                                label="Employee *"
                                return-object
                                required
                            >
                            </v-autocomplete>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-form
                                ref="vendorForm"
                                v-model="vendorOptions.valid"
                            >
                                <v-autocomplete
                                    v-model="form.vendor"
                                    :rules="[]"
                                    :items="vendors"
                                    :error-messages="errors.vendor_id"
                                    @input="errors.vendor_id = []"
                                    item-value="id"
                                    item-text="name"
                                    label="Vendor *"
                                >
                                    <template v-slot:append>
                                        <v-dialog
                                            v-model="vendorOptions.dialog"
                                            persistent
                                            max-width="600px"
                                        >
                                            <template
                                                v-slot:activator="{ on, attrs }"
                                            >
                                                <v-btn
                                                    fab
                                                    color="primary"
                                                    text
                                                    x-small
                                                    v-bind="attrs"
                                                    v-on="on"
                                                >
                                                    <v-icon dark
                                                        >mdi-plus</v-icon
                                                    >
                                                </v-btn>
                                            </template>
                                            <v-card>
                                                <v-card-title>
                                                    <span class="headline">
                                                        New Vendor
                                                    </span>
                                                </v-card-title>
                                                <v-card-text>
                                                    <v-form
                                                        ref="form"
                                                        v-model="
                                                            vendorOptions.valid
                                                        "
                                                    >
                                                        <v-container>
                                                            <v-row>
                                                                <v-col
                                                                    cols="12"
                                                                    md="6"
                                                                >
                                                                    <v-text-field
                                                                        v-model="
                                                                            vendorOptions
                                                                                .form
                                                                                .name
                                                                        "
                                                                        :rules="[
                                                                            ...validation.required,
                                                                            ...validation.minLength(
                                                                                100
                                                                            )
                                                                        ]"
                                                                        :counter="
                                                                            150
                                                                        "
                                                                        :error-messages="
                                                                            vendorOptions
                                                                                .errors
                                                                                .name
                                                                        "
                                                                        label="Name *"
                                                                        required
                                                                    ></v-text-field>
                                                                </v-col>

                                                                <v-col
                                                                    cols="12"
                                                                    md="6"
                                                                >
                                                                    <v-text-field
                                                                        v-model="
                                                                            vendorOptions
                                                                                .form
                                                                                .email
                                                                        "
                                                                        :rules="[]"
                                                                        :error-messages="
                                                                            vendorOptions
                                                                                .errors
                                                                                .email
                                                                        "
                                                                        label="Email Address"
                                                                    ></v-text-field>
                                                                </v-col>

                                                                <v-col
                                                                    cols="12"
                                                                    md="6"
                                                                >
                                                                    <v-combobox
                                                                        v-model="
                                                                            vendorOptions
                                                                                .form
                                                                                .tin
                                                                        "
                                                                        :rules="
                                                                            validation.required
                                                                        "
                                                                        :error-messages="
                                                                            vendorOptions
                                                                                .errors
                                                                                .tin
                                                                        "
                                                                        :counter="
                                                                            100
                                                                        "
                                                                        :items="[
                                                                            'N/A'
                                                                        ]"
                                                                        label="Tax Identification Number (TIN) *"
                                                                        required
                                                                    ></v-combobox>
                                                                </v-col>

                                                                <v-col
                                                                    cols="12"
                                                                    md="6"
                                                                >
                                                                    <v-text-field
                                                                        v-model="
                                                                            vendorOptions
                                                                                .form
                                                                                .contact_person
                                                                        "
                                                                        :rules="[]"
                                                                        :error-messages="
                                                                            vendorOptions
                                                                                .errors
                                                                                .contact_person
                                                                        "
                                                                        :counter="
                                                                            100
                                                                        "
                                                                        label="Contact Person"
                                                                    ></v-text-field>
                                                                </v-col>

                                                                <v-col
                                                                    cols="12"
                                                                    md="6"
                                                                >
                                                                    <v-text-field
                                                                        v-model="
                                                                            vendorOptions
                                                                                .form
                                                                                .mobile_number
                                                                        "
                                                                        :rules="[]"
                                                                        :counter="
                                                                            30
                                                                        "
                                                                        :error-messages="
                                                                            vendorOptions
                                                                                .errors
                                                                                .mobile_number
                                                                        "
                                                                        @input="
                                                                            vendorOptions.errors.mobile_number = []
                                                                        "
                                                                        label="Mobile Number"
                                                                    ></v-text-field>
                                                                </v-col>

                                                                <v-col
                                                                    cols="12"
                                                                    md="6"
                                                                >
                                                                    <v-text-field
                                                                        v-model="
                                                                            vendorOptions
                                                                                .form
                                                                                .telephone_number
                                                                        "
                                                                        :rules="[]"
                                                                        :counter="
                                                                            30
                                                                        "
                                                                        :error-messages="
                                                                            vendorOptions
                                                                                .errors
                                                                                .telephone_number
                                                                        "
                                                                        @input="
                                                                            vendorOptions.errors.telephone_number = []
                                                                        "
                                                                        label="Telephone Number"
                                                                        type="number"
                                                                    ></v-text-field>
                                                                </v-col>

                                                                <v-col
                                                                    cols="12"
                                                                    md="6"
                                                                >
                                                                    <v-text-field
                                                                        v-model="
                                                                            vendorOptions
                                                                                .form
                                                                                .website
                                                                        "
                                                                        :counter="
                                                                            100
                                                                        "
                                                                        :rules="[]"
                                                                        :error-messages="
                                                                            vendorOptions
                                                                                .errors
                                                                                .website
                                                                        "
                                                                        @input="
                                                                            vendorOptions.errors.website = []
                                                                        "
                                                                        label="Website"
                                                                    ></v-text-field>
                                                                </v-col>

                                                                <!-- <v-col
                                                                    cols="12"
                                                                    md="6"
                                                                >
                                                                    <v-select
                                                                        v-model="
                                                                            vendorOptions.selected_expense_types
                                                                        "
                                                                        :items="
                                                                            expense_types
                                                                        "
                                                                        item-text="name"
                                                                        item-value="id"
                                                                        label="Link with Expense Types"
                                                                        multiple
                                                                    >
                                                                        <template
                                                                            v-slot:selection="{
                                                                                item,
                                                                                index
                                                                            }"
                                                                        >
                                                                            <v-chip
                                                                                v-if="
                                                                                    index ===
                                                                                        0
                                                                                "
                                                                                small
                                                                            >
                                                                                <span
                                                                                    >{{
                                                                                        item.name
                                                                                    }}</span
                                                                                >
                                                                            </v-chip>
                                                                            <span
                                                                                v-if="
                                                                                    index ===
                                                                                        1
                                                                                "
                                                                                class="grey--text caption"
                                                                                >(+{{
                                                                                    vendorOptions
                                                                                        .selected_expense_types
                                                                                        .length -
                                                                                        1
                                                                                }}
                                                                                others)</span
                                                                            >
                                                                        </template>
                                                                    </v-select>
                                                                </v-col> -->
                                                            </v-row>

                                                            <v-row>
                                                                <v-col
                                                                    cols="12"
                                                                >
                                                                    <v-textarea
                                                                        v-model="
                                                                            vendorOptions
                                                                                .form
                                                                                .address
                                                                        "
                                                                        :rules="[]"
                                                                        :error-messages="
                                                                            vendorOptions
                                                                                .errors
                                                                                .address
                                                                        "
                                                                        @input="
                                                                            vendorOptions.errors.address = []
                                                                        "
                                                                        label="Address"
                                                                        rows="1"
                                                                    ></v-textarea>
                                                                </v-col>
                                                            </v-row>

                                                            <v-row>
                                                                <v-col
                                                                    cols="12"
                                                                    md="6"
                                                                >
                                                                    <v-checkbox
                                                                        v-model="
                                                                            vendorOptions
                                                                                .form
                                                                                .is_vat_inclusive
                                                                        "
                                                                        label="Vat Inclusive"
                                                                        :error-messages="
                                                                            vendorOptions
                                                                                .errors
                                                                                .is_vat_inclusive
                                                                        "
                                                                    ></v-checkbox>
                                                                </v-col>
                                                            </v-row>

                                                            <small
                                                                class="text--secondary"
                                                            >
                                                                * indicates
                                                                required field
                                                            </small>
                                                        </v-container>
                                                    </v-form>
                                                </v-card-text>
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn
                                                        color="primary"
                                                        text
                                                        @click="
                                                            vendorOptions.dialog = false
                                                        "
                                                        >Close</v-btn
                                                    >
                                                    <v-btn
                                                        color="primary"
                                                        text
                                                        @click="onCreateVendor"
                                                    >
                                                        Save
                                                    </v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-dialog>
                                    </template>
                                    <template v-slot:item="data">
                                        <template>
                                            <v-list max-width="300">
                                                <v-list-item-content>
                                                    <v-list-item-title
                                                        v-html="data.item.name"
                                                    ></v-list-item-title>
                                                    <v-list-item-subtitle
                                                        v-html="
                                                            `TIN: ${
                                                                data.item.tin ==
                                                                null
                                                                    ? 'N/A'
                                                                    : data.item
                                                                          .tin
                                                            }`
                                                        "
                                                    ></v-list-item-subtitle>
                                                    <v-list-item-subtitle
                                                        v-html="
                                                            data.item.address
                                                        "
                                                    ></v-list-item-subtitle>
                                                    <v-list-item-subtitle
                                                        v-html="
                                                            data.item
                                                                .is_vat_inclusive
                                                                ? 'VAT'
                                                                : 'Non-VAT'
                                                        "
                                                    >
                                                    </v-list-item-subtitle>
                                                </v-list-item-content>
                                            </v-list>
                                        </template>
                                    </template>
                                </v-autocomplete>
                            </v-form>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-autocomplete
                                v-model="form.expense_type"
                                :rules="validation.required"
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
                    </v-row>

                    <v-row>
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="form.receipt_number"
                                :rules="[]"
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
                                        v-model="form.date"
                                        :rules="validation.required"
                                        :error-messages="errors.date"
                                        @input="errors.date = []"
                                        label="Date *"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                    v-model="form.date"
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
                                            Reimbursable:
                                            <strong>{{
                                                form.reimbursable_amount
                                            }}</strong>
                                            <br />
                                            Total:
                                            <strong>{{ form.amount }}</strong>
                                        </td>
                                    </tr>
                                    <tr class="green--text hidden-sm-and-down">
                                        <td class="title">Total</td>
                                        <td>
                                            <strong>{{
                                                form.reimbursable_amount
                                            }}</strong>
                                        </td>
                                        <td>
                                            <strong>{{ form.amount }}</strong>
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
                                                <v-card-text>
                                                    <v-container>
                                                        <v-row>
                                                            <v-col cols="12">
                                                                <v-text-field
                                                                    v-model="
                                                                        form.particular
                                                                    "
                                                                    label="Particular"
                                                                ></v-text-field>
                                                            </v-col>
                                                            <v-col cols="12">
                                                                <v-text-field
                                                                    v-model="
                                                                        form.particular_amount
                                                                    "
                                                                    label="Amount"
                                                                    type="number"
                                                                ></v-text-field>
                                                            </v-col>
                                                            <v-col cols="12">
                                                                <v-checkbox
                                                                    v-model="
                                                                        form.is_reimbursable
                                                                    "
                                                                    label="Reimbursable"
                                                                    @click="
                                                                        form.is_reimbursable
                                                                            ? (form.particular_reimbursable_amount =
                                                                                  form.particular_amount)
                                                                            : (form.particular_reimbursable_amount = 0)
                                                                    "
                                                                ></v-checkbox>
                                                            </v-col>
                                                            <v-col cols="12">
                                                                <v-text-field
                                                                    v-model="
                                                                        form.particular_reimbursable_amount
                                                                    "
                                                                    label="Reimbursable Amount"
                                                                    v-show="
                                                                        form.is_reimbursable
                                                                    "
                                                                    :rules="
                                                                        rules.particular_reimbursable_amount
                                                                    "
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

                    <v-row>
                        <v-col cols="12" md="4">
                            <v-textarea
                                rows="1"
                                label="Remarks"
                                v-model="form.remarks"
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
    </div>
</template>

<script>
import numeral from "numeral";

export default {
    data() {
        return {
            dialog: false,
            valid: false,
            menu: false,
            headers: [
                { text: "Particulars", value: "particular", sortable: false },
                {
                    text: "Reimbursable Amount",
                    value: "particular_reimbursable_amount",
                    sortable: false
                },
                { text: "Amount", value: "particular_amount", sortable: false },
                { text: "", value: "actions", sortable: false }
            ],
            items: [],
            expense_types: [],
            employees: [],
            vendors: [],
            form: {
                code: null,
                description: null,
                amount: 0,
                reimbursable_amount: 0,
                receipt_number: null,
                date: null,
                remarks: "",
                is_active: true,
                expense_type: null,
                employee: { id: null, remaining_fund: 0, fund: 0 },
                vendor: null,
                particular: "",
                particular_amount: 0,
                particular_reimbursable_amount: 0,
                is_reimbursable: false
            },
            rules: {
                reimbursable_amount: [
                    v =>
                        parseFloat(v) <= this.form.amount ||
                        "Reimbursable Amount should not be greater than the actual amount"
                ],
                particular_reimbursable_amount: [
                    v =>
                        parseFloat(v) <= this.form.particular_amount ||
                        "Reimbursable Amount should not be greater than the actual amount"
                ]
            },
            errors: {
                description: [],
                amount: [],
                reimbursable_amount: [],
                receipt_number: [],
                date: [],
                remarks: [],
                is_active: [],
                expense_type_id: [],
                employee_id: [],
                vendor_id: []
            },

            // Create Vendor
            vendorOptions: {
                dialog: false,
                valid: false,
                selected_expense_types: [],
                expense_types: [],
                form: {
                    code: "",
                    name: "",
                    email: "",
                    tin: "",
                    contact_person: "",
                    mobile_number: "",
                    telephone_number: "",
                    remarks: "",
                    website: "",
                    is_vat_inclusive: false,
                    address: ""
                },
                errors: {
                    code: [],
                    name: [],
                    email: [],
                    tin: [],
                    contact_person: [],
                    mobile_number: [],
                    telephone_number: [],
                    remarks: [],
                    website: [],
                    is_vat_inclusive: [],
                    address: []
                }
            }
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

                    _this.vendors.unshift({
                        id: null,
                        name: "No Vendor",
                        tin: ""
                    });
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

            if (
                parseFloat(this.form.amount) - parseFloat(this.form.reimbursable_amount) >
                parseFloat(this.form.employee.remaining_fund)
            ) {
                _this.$dialog.message.error(
                    "Expense actual amount is greater than remaining funds",
                    {
                        position: "top-right",
                        timeout: 2000
                    }
                );
                return;
            }

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
                        code: _this.form.code,
                        description: _this.form.description,
                        amount: _this.form.amount,
                        reimbursable_amount: _this.form.reimbursable_amount,
                        receipt_number: _this.form.receipt_number,
                        date: _this.form.date,
                        remarks: _this.form.remarks,
                        is_active: _this.form.is_active,
                        expense_type_id: _this.form.expense_type,
                        employee_id: _this.form.employee.id,
                        vendor_id: _this.form.vendor,
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

                        _this.$router.go(-1);
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
            if (
                parseFloat(this.form.particular_amount) >=
                parseFloat(this.form.particular_reimbursable_amount)
            ) {
                this.items.push({
                    particular: this.form.particular,
                    particular_amount: this.form.particular_amount,
                    particular_reimbursable_amount: this.form.particular_reimbursable_amount
                });
            }

            this.dialog = false;
            this.form.particular = "";
            this.form.particular_amount = 0;
            this.form.particular_reimbursable_amount = 0;
        },
        onRemove(item) {
            const index = this.items.indexOf(item);
            confirm("Are you sure you want to remove this item?") &&
                this.items.splice(index, 1);
        },
        onCreateVendor() {
            let _this = this;

            _this.$refs.form.validate();

            if (_this.$refs.form.validate()) {
                axios
                    .post("/api/vendors", {
                        code: _this.vendorOptions.form.code,
                        name: _this.vendorOptions.form.name,
                        email: _this.vendorOptions.form.email,
                        tin:
                            _this.vendorOptions.form.tin == "N/A"
                                ? null
                                : _this.vendorOptions.form.tin,
                        contact_person: _this.vendorOptions.form.contact_person,
                        mobile_number: _this.vendorOptions.form.mobile_number,
                        telephone_number: _this.vendorOptions.form.telephone_number,
                        remarks: _this.vendorOptions.form.remarks,
                        website: _this.vendorOptions.form.website,
                        is_vat_inclusive: _this.vendorOptions.form.is_vat_inclusive,
                        address: _this.vendorOptions.form.address,
                        expense_types:
                            _this.vendorOptions.selected_expense_types
                    })
                    .then(function(response) {
                        _this.$dialog.message.success(
                            "Vendor created successfully.",
                            {
                                position: "top-right",
                                timeout: 2000
                            }
                        );

                        _this.$refs.vendorForm.reset();
                        _this.$refs.vendorForm.resetValidation();

                        _this.vendorOptions.dialog = false;

                        _this.loadVendors();
                    })
                    .catch(function(error) {
                        console.log(error);
                        console.log(error.response);

                        _this.vendorOptions.errors = error.response.data.errors;
                    });

                return;
            }
        }
    },
    watch: {
        items() {
            this.form.amount = this.items.reduce(
                (total, item) =>
                    parseFloat(total) + parseFloat(item.particular_amount),
                0
            );

            this.form.reimbursable_amount = this.items.reduce(
                (total, item) =>
                    parseFloat(total) +
                    parseFloat(item.particular_reimbursable_amount),
                0
            );
        }
    },
    created() {
        this.loadExpenseTypes();
        this.loadEmployees();
        this.loadVendors();
    }
};
</script>
