<template>
    <div>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">Edit Expense</h4>
            </v-card-title>

            <v-form ref="form" v-model="valid">
                <v-container>
                    <v-expansion-panels v-model="panel" multiple class="mt-4">
                        <v-expansion-panel>
                            <v-expansion-panel-header>
                                <div class="green--text">Basic Information</div>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-row>
                                    <v-col cols="12" md="4">
                                        <v-menu
                                            ref="menu"
                                            v-model="menu"
                                            :close-on-content-click="false"
                                            transition="scale-transition"
                                            offset-y
                                            min-width="290px"
                                        >
                                            <template
                                                v-slot:activator="{ on, attrs }"
                                            >
                                                <v-text-field
                                                    v-model="form.date"
                                                    :rules="
                                                        mixin_validation.required
                                                    "
                                                    :error-messages="
                                                        errors.date
                                                    "
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
                                                :min="minDate"
                                                :max="maxDate"
                                            >
                                            </v-date-picker>
                                        </v-menu>
                                    </v-col>
                                    <v-col cols="12" md="4">
                                        <v-autocomplete
                                            v-model="form.employee"
                                            :rules="mixin_validation.required"
                                            :items="employees"
                                            :error-messages="errors.employee_id"
                                            @input="errors.employee_id = []"
                                            @change="loadExpenseTypes"
                                            item-value="id"
                                            item-text="fullname"
                                            label="Employee *"
                                            return-object
                                            required
                                        >
                                        </v-autocomplete>
                                    </v-col>

                                    <v-col cols="12" md="4">
                                        <v-autocomplete
                                            v-model="form.vendor"
                                            :rules="[]"
                                            :items="vendors"
                                            :error-messages="errors.vendor_id"
                                            @input="errors.vendor_id = []"
                                            item-value="id"
                                            item-text="name"
                                            return-object
                                            label="Vendor *"
                                        >
                                            <template v-slot:append>
                                                <AddVendor
                                                    :openDialog="false"
                                                    @createdVendor="loadVendors"
                                                >
                                                </AddVendor>
                                            </template>
                                            <template v-slot:item="data">
                                                <template>
                                                    <v-list max-width="300">
                                                        <v-list-item-content>
                                                            <v-list-item-title
                                                                v-html="
                                                                    data.item
                                                                        .name
                                                                "
                                                            ></v-list-item-title>
                                                            <v-list-item-subtitle
                                                                v-html="
                                                                    `TIN: ${
                                                                        data
                                                                            .item
                                                                            .tin ==
                                                                        null
                                                                            ? 'N/A'
                                                                            : data
                                                                                  .item
                                                                                  .tin
                                                                    }`
                                                                "
                                                            ></v-list-item-subtitle>
                                                            <v-list-item-subtitle
                                                                v-html="
                                                                    data.item
                                                                        .address
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
                                        <!-- </v-form> -->
                                    </v-col>

                                    <v-col cols="12" md="4">
                                        <v-text-field
                                            v-model="form.receipt_number"
                                            :rules="[]"
                                            :error-messages="
                                                errors.receipt_number
                                            "
                                            @input="errors.receipt_number = []"
                                            label="Receipt No. *"
                                            required
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <!-- **************************************************************
                            Expense Details
                        *************************************************************** -->
                        <v-expansion-panel>
                            <v-expansion-panel-header>
                                <div class="green--text">
                                    Expense Details ({{
                                        `Remaining Fund: ${mixin_formatNumber(
                                            form.employee.remaining_fund
                                        )}`
                                    }})
                                </div>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-row>
                                    <v-col cols="12" md="4">
                                        <v-autocomplete
                                            return-object
                                            v-model="form.expense_type"
                                            :rules="mixin_validation.required"
                                            :items="expense_types"
                                            :error-messages="
                                                errors.expense_type_id
                                            "
                                            @input="errors.expense_type_id = []"
                                            @change="loadSubTypes"
                                            item-value="id"
                                            item-text="name"
                                            label="Expense Type *"
                                            required
                                        >
                                        </v-autocomplete>
                                    </v-col>

                                    <v-col cols="12" md="4">
                                        <v-autocomplete
                                            v-model="form.sub_type"
                                            :rules="mixin_validation.required"
                                            :items="sub_types"
                                            :error-messages="errors.sub_type"
                                            @input="errors.sub_type = []"
                                            item-value="id"
                                            item-text="name"
                                            label="Sub Type *"
                                            required
                                            return-object
                                        >
                                        </v-autocomplete>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col>
                                        <div class="ml-4">
                                            <small class="green--text">
                                                ** Note:
                                            </small>
                                            <small class="grey--text">
                                                Expense amount exceeding the
                                                remaining fund will be
                                                considered as reimbursable.
                                            </small>
                                        </div>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="12" md="4">
                                        <v-text-field
                                            v-model="form.description"
                                            label="Description"
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="4">
                                        <v-text-field
                                            v-model="form.amount"
                                            label="Amount"
                                            :rules="[...mixin_validation.required, ...mixin_validation.minNumberValue(1)]"
                                            :readonly="itemize"
                                            type="number"
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="4">
                                        <v-checkbox
                                            v-model="itemize"
                                            label="Itemize"
                                            @change="
                                                form.amount = 0;
                                                form.revolving_fund = 0;
                                            "
                                        ></v-checkbox>
                                    </v-col>
                                </v-row>

                                <v-row v-if="itemize">
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
                                                <tr
                                                    class="green--text hidden-md-and-up"
                                                >
                                                    <td class="title">
                                                        Total:
                                                        <strong>{{
                                                            form.amount
                                                        }}</strong>
                                                    </td>
                                                </tr>
                                                <tr
                                                    class="green--text hidden-sm-and-down"
                                                >
                                                    <td class="title">Total</td>
                                                    <td>
                                                        <strong>{{
                                                            form.details_quantity
                                                        }}</strong>
                                                    </td>
                                                    <td>
                                                        <strong>{{
                                                            form.details_amount
                                                        }}</strong>
                                                    </td>
                                                    <td>
                                                        <strong>{{
                                                            form.amount
                                                        }}</strong>
                                                    </td>
                                                    <td></td>
                                                </tr>
                                            </template>
                                            <template v-slot:top>
                                                <v-toolbar flat color="white">
                                                    <!-- Expense Details -->
                                                    <v-spacer></v-spacer>
                                                    <v-dialog
                                                        v-model="dialog"
                                                        max-width="500px"
                                                    >
                                                        <template
                                                            v-slot:activator="{
                                                                on,
                                                                attrs
                                                            }"
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
                                                                        <v-col
                                                                            cols="12"
                                                                        >
                                                                            <v-text-field
                                                                                v-model="
                                                                                    form
                                                                                        .details
                                                                                        .description
                                                                                "
                                                                                label="Particular"
                                                                            ></v-text-field>
                                                                        </v-col>
                                                                        <v-col
                                                                            cols="12"
                                                                            md="3"
                                                                        >
                                                                            <v-text-field
                                                                                v-model="
                                                                                    form
                                                                                        .details
                                                                                        .quantity
                                                                                "
                                                                                label="Quantity"
                                                                                type="number"
                                                                            ></v-text-field>
                                                                        </v-col>
                                                                        <v-col
                                                                            cols="12"
                                                                            md="9"
                                                                        >
                                                                            <v-text-field
                                                                                v-model="
                                                                                    form
                                                                                        .details
                                                                                        .amount
                                                                                "
                                                                                label="Amount"
                                                                                type="number"
                                                                            ></v-text-field>
                                                                        </v-col>
                                                                    </v-row>
                                                                    <v-row>
                                                                        <v-col
                                                                            cols="12"
                                                                        >
                                                                            <v-text-field
                                                                                v-model="
                                                                                    total_details_amount
                                                                                "
                                                                                label="Total Amount"
                                                                                readonly
                                                                            >
                                                                            </v-text-field>
                                                                        </v-col>
                                                                    </v-row>
                                                                </v-container>
                                                            </v-card-text>

                                                            <v-card-actions>
                                                                <v-spacer></v-spacer>
                                                                <v-btn
                                                                    color="primary"
                                                                    text
                                                                    @click="
                                                                        dialog = false
                                                                    "
                                                                >
                                                                    Cancel
                                                                </v-btn>
                                                                <v-btn
                                                                    color="primary"
                                                                    text
                                                                    @click="
                                                                        addItem
                                                                    "
                                                                    >Add</v-btn
                                                                >
                                                            </v-card-actions>
                                                        </v-card>
                                                    </v-dialog>
                                                </v-toolbar>
                                            </template>
                                            <template
                                                v-slot:[`item.actions`]="{
                                                    item
                                                }"
                                            >
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
                                    <v-col
                                        cols="12"
                                        md="4"
                                        v-if="display_reimbursable_amount"
                                    >
                                        <v-text-field
                                            v-model="amount_to_reimburse"
                                            :rules="rules.reimbursable_amount"
                                            label="Reimbursable Amount"
                                            type="number"
                                            readonly
                                            :hint="
                                                `The amount involves spending from your own pocket`
                                            "
                                            persistent-hint
                                        ></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row v-if="form.vendor.is_vat_inclusive">
                                    <v-col cols="12" md="2">
                                        <v-text-field
                                            v-model="form.tax_rate"
                                            label="Tax Rate"
                                            suffix="%"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="4">
                                        <v-text-field
                                            v-model="taxable_amount"
                                            label="Tax Amount"
                                        ></v-text-field>
                                    </v-col>
                                    <!-- <v-col cols="12" md="4">
                                        <v-radio-group
                                            v-model="form.is_tax_inclusive"
                                            row
                                        >
                                            <v-radio
                                                label="Inclusive"
                                                :value="true"
                                            ></v-radio>
                                            <v-radio
                                                label="Exclusive"
                                                :value="false"
                                            ></v-radio>
                                        </v-radio-group>
                                    </v-col> -->
                                </v-row>

                                <v-row>
                                    <v-col>
                                        <div class="green--text">
                                            Expense Summary
                                        </div>
                                        <table class="ml-4">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Remaining Fund
                                                    </td>
                                                    <td>:</td>
                                                    <td
                                                        class="green--text text--darken-4 text-right"
                                                    >
                                                        {{
                                                            mixin_formatNumber(
                                                                form.employee
                                                                    .remaining_fund
                                                            )
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Amount to reimburse
                                                    </td>
                                                    <td>:</td>
                                                    <td
                                                        class="green--text text--darken-4 text-right"
                                                    >
                                                        {{
                                                            mixin_formatNumber(
                                                                amount_to_reimburse
                                                            )
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Amount to replenish
                                                    </td>
                                                    <td>:</td>
                                                    <td
                                                        class="green--text text--darken-4 text-right"
                                                    >
                                                        {{
                                                            mixin_formatNumber(
                                                                amount_to_replenish
                                                            )
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="3"><hr /></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Total
                                                    </td>
                                                    <td>:</td>
                                                    <td
                                                        class="green--text text--darken-4 text-right"
                                                    >
                                                        {{
                                                            mixin_formatNumber(
                                                                expense_amount
                                                            )
                                                        }}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </v-col>
                                </v-row>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>

                    <v-card class="mt-4">
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" md="6">
                                        <v-textarea
                                            rows="1"
                                            v-model="form.remarks"
                                            :error-messages="errors.remarks"
                                            @input="errors.remarks = []"
                                            label="Remarks"
                                        ></v-textarea>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-textarea
                                            rows="1"
                                            label="Notes"
                                            readonly
                                        ></v-textarea>
                                    </v-col>
                                </v-row>

                                <small class="text--secondary">
                                    * indicates required field
                                </small>
                            </v-container>
                        </v-card-text>
                    </v-card>

                    <v-card-actions class="mt-3">
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
import moment from "moment";
import numeral from "numeral";
import AddVendor from "../../../../components/dialogs/AddVendor";

export default {
    components: {
        AddVendor
    },
    data() {
        return {
            panel: [0, 1],
            itemize: false,
            // paid_through_fund: false,
            reimbursable_amount: false,
            // reimbursable: false,
            openAddVendor: false,
            dialog: false,
            valid: false,
            menu: false,
            headers: [
                { text: "Particulars", value: "description", sortable: false },
                { text: "Quantity", value: "quantity", sortable: false },
                { text: "Amount", value: "amount", sortable: false },
                { text: "Total", value: "total", sortable: false },
                { text: "", value: "actions", sortable: false }
            ],
            items: [],
            expense_types: [],
            sub_types: [],
            employees: [],
            vendors: [],
            form: {
                code: null,
                description: null,
                amount: 0,
                detials_quantity: 0,
                details_amount: 0,
                // reimbursable_amount: 0,
                receipt_number: null,
                date: null,
                remarks: "",
                is_active: true,
                expense_type: {
                    id: null,
                    name: "",
                    limit: null,
                    sub_types: null
                },
                sub_type: { id: null, name: "", limit: null },
                employee: {
                    id: null,
                    remaining_fund: 0,
                    fund: 0,
                    expense_types: null
                },
                vendor: { id: null, name: "", tin: "", is_vat_inclusive: false },
                // particular: "",
                // particular_amount: 0,
                // particular_reimbursable_amount: 0,
                is_reimbursable: false,

                revolving_fund: 0,
                reimbursable_amount: 0,
                details: {
                    description: "",
                    amount: 0
                },

                is_tax_inclusive: true,
                tax_name: "",
                tax_rate: 0,
                tax_amount: 0
            },
            rules: {
                reimbursable_amount: [],
                revolving_fund: []
            },
            errors: {
                sub_type: [],
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
            }
        };
    },
    methods: {
        getData() {
            let _this = this;

            this.loadEmployees().then(
                axios
                    .get("/api/expenses/" + _this.$route.params.id)
                    .then(response => {
                        let data = response.data.data;

                        _this.form.code = data.code;
                        _this.form.description = data.description;

                        _this.form.receipt_number = data.receipt_number;
                        _this.form.date = data.date;
                        _this.form.remarks = data.remarks;
                        _this.form.is_active = data.is_active;
                        _this.form.employee = data.employee;

                        _this.form.vendor =
                            data.vendor == null ? { id: null, name: "", tin: "", is_vat_inclusive: false } : data.vendor;

                        _this.form.expense_type = data.expense_type;
                        // _this.form.sub_type = data.sub_type_id;

                        _this.expense_types = data.employee.expense_types;
                        _this.sub_types = data.expense_type.sub_types;

                        _this.form.is_tax_inclusive = data.is_tax_inclusive;
                        _this.form.tax_name = data.tax_name;
                        _this.form.tax_rate = data.tax_rate;
                        _this.form.tax_amount = data.tax_amount;

                        if (data.details !== null) {
                            _this.itemize = true;
                            _this.items = data.details;
                        } else {
                            // _this.itemize = false;
                            // _this.items = [];
                            _this.form.amount = data.amount;
                        }

                        _this.sub_types.unshift({
                            id: null,
                            name: "None",
                            limit: null
                        });
                        _this.form.sub_type =
                            data.sub_type == null
                                ? { id: null, name: "None", limit: null }
                                : data.sub_type;

                        if (data.revolving_fund > 0) {
                            _this.paid_through_fund = true;
                            _this.form.revolving_fund = data.revolving_fund;
                        } else {
                            _this.paid_through_fund = false;
                            _this.form.revolving_fund = 0;
                        }

                        _this.form.reimbursable_amount =
                            data.reimbursable_amount;

                        _this.form.employee.remaining_fund +=
                            data.amount - data.reimbursable_amount;
                    })
                    .catch(error => {
                        console.log(error);
                        console.log(error.response);

                        _this.mixin_errorDialog(
                            `Error ${error.response.status}`,
                            error.response.statusText
                        );
                    })
            );
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
                    console.log(error.response);

                    _this.mixin_errorDialog(
                        `Error ${error.response.status}`,
                        error.response.statusText
                    );
                });
        },
        loadEmployees() {
            let _this = this;

            return new Promise((resolve, reject) => {
                axios
                    .get("/api/data/employees")
                    .then(response => {
                        _this.employees = response.data.data;

                        resolve();
                    })
                    .catch(error => {
                        console.log(error);
                        console.log(error.response);

                        _this.mixin_errorDialog(
                            `Error ${error.response.status}`,
                            error.response.statusText
                        );

                        reject();
                    });
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
                        tin: "",
                        is_vat_inclusive: false
                    });
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
        onRefresh() {
            Object.assign(this.$data, this.$options.data.apply(this));
        },
        onSave() {
            let _this = this;

            if (
                _this.form.employee.id == null
            ) {
                _this.$dialog.message.error(
                    "No Employee Selected",
                    {
                        position: "top-right",
                        timeout: 2000
                    }
                );
                return;
            }

            if (
                _this.form.expense_type.id == null
            ) {
                _this.$dialog.message.error(
                    "No Expense Type Selected",
                    {
                        position: "top-right",
                        timeout: 2000
                    }
                );
                return;
            }

            _this.$refs.form.validate();

            if (
                _this.amount_to_replenish > _this.form.employee.remaining_fund
            ) {
                _this.$dialog.message.error(
                    "Revolving fund amount is greater than remaining fund",
                    {
                        position: "top-right",
                        timeout: 2000
                    }
                );
                return;
            }

            if (_this.$refs.form.validate()) {
                if (!_this.form.vendor.is_vat_inclusive) {
                    _this.form.tax_rate = 0;
                    _this.form.tax_amount = 0;
                }

                axios
                    .put("/api/expenses/" + _this.$route.params.id, {
                        code: _this.form.code,
                        description: _this.form.description,
                        amount: _this.form.amount,
                        reimbursable_amount: _this.form.reimbursable_amount,
                        receipt_number: _this.form.receipt_number,
                        date: _this.form.date,
                        remarks: _this.form.remarks,
                        is_active: _this.form.is_active,
                        expense_type_id: _this.form.expense_type.id,
                        sub_type_id: _this.form.sub_type.id,
                        employee_id: _this.form.employee.id,
                        vendor_id: _this.form.vendor.id,
                        details: _this.itemize ? _this.items : null,
                        tax_name: "",
                        tax_rate: _this.form.tax_rate,
                        tax_amount: _this.form.tax_amount,
                        is_tax_inclusive: _this.form.is_tax_inclusive
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

                        _this.$store.dispatch("AUTH_USER");

                        _this.$router.push({ name: "admin.expenses.index" });
                    })
                    .catch(function(error) {
                        console.log(error);
                        console.log(error.response);

                        _this.mixin_errorDialog(
                            `Error ${error.response.status}`,
                            error.response.statusText
                        );

                        _this.errors = error.response.data.errors;
                    });

                return;
            }
        },
        addItem() {
            let description = this.form.details.description;
            let quantity = this.mixin_convertToNumber(
                this.form.details.quantity
            );
            let amount = this.mixin_convertToNumber(this.form.details.amount);
            let total = this.mixin_convertToNumber(this.form.details.total);

            if (description == "" || total <= 0) {
                return;
            }

            this.items.push({
                description: description,
                quantity: quantity,
                amount: amount,
                total: total
            });

            this.dialog = false;
            this.form.details.description = "";
            this.form.details.quantity = 1;
            this.form.details.amount = 0;
            this.form.details.total = 0;
        },
        onRemove(item) {
            const index = this.items.indexOf(item);
            confirm("Are you sure you want to remove this item?") &&
                this.items.splice(index, 1);
        },
        loadSubTypes(e) {
            this.form.sub_type = { id: null, name: "", limit: null };
            this.sub_types = e.sub_types;
            this.sub_types.push({ id: null, name: "None", limit: null });
        }
    },
    computed: {
        minDate() {
            if (this.mixin_can("add expenses beyond encoding period")) {
                return null;
            }
            
            let settings = this.$store.getters.settings;
            let submissionMinDate = moment().endOf("day");
            let encodingMinDate =  moment().subtract(settings.expense_encoding_period - 1, 'days').format("YYYY-MM-DD");

            switch (settings.submission_period) {
                case "Weekly":
                    submissionMinDate = moment()
                        .startOf("week")
                        .format("YYYY-MM-DD");
                    break;
                case "Monthly":
                    submissionMinDate = moment()
                        .startOf("month")
                        .format("YYYY-MM-DD");
                    break;
                default:
                    submissionMinDate = moment()
                        .startOf("day")
                        .format("YYYY-MM-DD");
                    break;
            }

            return moment(encodingMinDate).isSameOrAfter(submissionMinDate) ? encodingMinDate : submissionMinDate;
        },
        maxDate() {
            let settings = this.$store.getters.settings;
            let today = moment().format("YYYY-MM-DD");
            let maxDate = moment().endOf("day");

            switch (settings.submission_period) {
                case "Weekly":
                    maxDate = moment()
                        .endOf("week")
                        .format("YYYY-MM-DD");
                    break;
                case "Monthly":
                    maxDate = moment()
                        .endOf("month")
                        .format("YYYY-MM-DD");
                    break;
                default:
                    maxDate = moment()
                        .endOf("day")
                        .format("YYYY-MM-DD");
                    break;
            }

            return moment(today).isSameOrBefore(maxDate) ? today : maxDate;
        },
        amount_to_replenish() {
            let remaining_fund = this.mixin_convertToNumber(
                this.form.employee.remaining_fund
            );
            let amount = this.mixin_convertToNumber(this.form.amount);

            if (remaining_fund >= amount) {
                return amount;
            }

            return amount - Math.abs(remaining_fund - amount);
        },
        amount_to_reimburse() {
            let remaining_fund = this.mixin_convertToNumber(
                this.form.employee.remaining_fund
            );
            let amount = this.mixin_convertToNumber(this.form.amount);

            if (remaining_fund < amount) {
                let to_replenish = Math.abs(remaining_fund - amount);

                this.form.reimbursable_amount = to_replenish;

                return to_replenish;
            }

            return 0;
        },
        expense_amount() {
            return this.mixin_convertToNumber(this.form.amount);
        },
        display_reimbursable_amount() {
            return (
                parseFloat(this.form.amount) >
                parseFloat(this.form.employee.remaining_fund)
            );
        },
        taxable_amount: {
            get: function() {
                if (!this.form.is_tax_inclusive) {
                    this.form.tax_amount = this.tax_exclusive.toFixed(2);
                    return this.tax_exclusive.toFixed(2);
                }

                this.form.tax_amount = this.tax_inclusive.toFixed(2);
                return this.tax_inclusive.toFixed(2);
            },
            set: function(amount) {
                this.form.tax_amount = amount;
                return amount;
            }
        },
        tax_inclusive() {
            return (
                (this.mixin_convertToNumber(this.form.amount) /
                    (1 +
                        this.mixin_convertToNumber(this.form.tax_rate) / 100)) *
                (this.mixin_convertToNumber(this.form.tax_rate) / 100)
            );
        },
        tax_exclusive() {
            return (
                this.mixin_convertToNumber(this.form.amount) *
                (this.mixin_convertToNumber(this.form.tax_rate) / 100)
            );
        },
        total_details_amount() {
            let total = (
                this.mixin_convertToNumber(this.form.details.quantity) *
                this.mixin_convertToNumber(this.form.details.amount)
            ).toFixed(2);

            this.form.details.total = total;

            return total;
        }
    },
    watch: {
        items() {
            this.form.amount = this.items.reduce(
                (total, item) => parseFloat(total) + parseFloat(item.total),
                0
            );

            this.form.details_amount = this.items.reduce(
                (total, item) => parseFloat(total) + parseFloat(item.amount),
                0
            );

            this.form.details_quantity = this.items.reduce(
                (total, item) => parseFloat(total) + parseFloat(item.quantity),
                0
            );
        },
        itemize() {
            this.form.amount = this.items.reduce(
                (total, item) => parseFloat(total) + parseFloat(item.total),
                0
            );
        }
        // "form.vendor": function() {
        //     this.form.tax_rate = 0;
        //     this.form.tax_amount = 0;
        //     this.form.is_tax_inclusive = true;
        // }
    },
    created() {
        this.$store.dispatch("AUTH_USER");
        this.loadVendors();
        this.getData();
    }
};
</script>
