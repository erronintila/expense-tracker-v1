<template>
    <div>
        <v-container v-if="loader" style="height: 400px;">
            <v-row class="fill-height" align-content="center" justify="center">
                <v-col class="subtitle-1 text-center" cols="12">
                    Loading, Please wait...
                </v-col>
                <v-col cols="6">
                    <v-progress-linear
                        color="green accent-4"
                        indeterminate
                        rounded
                        height="6"
                    ></v-progress-linear>
                </v-col>
            </v-row>
        </v-container>

        <v-card v-else class="elevation-0 pt-0">
            <!-- **************************************************************
                Card Title
            *************************************************************** -->
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">New Expense</h4>
            </v-card-title>

            <v-form ref="form" v-model="valid">
                <!-- ------------------------------------------------------------------------------------------- -->
                <v-container>
                    <v-card class="mx-auto mb-4" flat>
                        <v-list-item three-line>
                            <v-list-item-content>
                                <div class="overline mb-4 green--text">
                                    Basic Details
                                </div>
                                <!-- <v-list-item-title class="headline mb-1">
                                Basic Details
                            </v-list-item-title> -->
                                <v-list-item-subtitle>
                                    Note: Due of encoding of expenses :
                                    {{
                                        $store.getters.settings
                                            .submission_period
                                    }}
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>

                        <v-container>
                            <v-menu
                                ref="menu"
                                v-model="menu"
                                :close-on-content-click="false"
                                transition="scale-transition"
                                offset-y
                                min-width="290px"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="form.date"
                                        :rules="mixin_validation.required"
                                        :error-messages="errors.date"
                                        @input="errors.date = []"
                                        label="Date"
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

                            <v-autocomplete
                                v-model="form.vendor"
                                :rules="[]"
                                :items="vendors"
                                :error-messages="errors.vendor_id"
                                @input="errors.vendor_id = []"
                                item-value="id"
                                item-text="name"
                                return-object
                                label="Vendor"
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
                                                    v-html="data.item.name"
                                                ></v-list-item-title>
                                                <v-list-item-subtitle
                                                    v-html="
                                                        `TIN: ${
                                                            data.item.tin ==
                                                            null
                                                                ? 'N/A'
                                                                : data.item.tin
                                                        }`
                                                    "
                                                ></v-list-item-subtitle>
                                                <v-list-item-subtitle
                                                    v-html="data.item.address"
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
                            <v-row>
                                <v-col cols="12" md="">
                                    <v-autocomplete
                                        return-object
                                        v-model="form.expense_type"
                                        :rules="mixin_validation.required"
                                        :items="expense_types"
                                        :error-messages="errors.expense_type_id"
                                        @input="errors.expense_type_id = []"
                                        @change="loadSubTypes"
                                        item-value="id"
                                        item-text="name"
                                        label="Expense Type"
                                        required
                                    >
                                    </v-autocomplete>
                                </v-col>
                                <v-col cols="12" md="">
                                    <v-autocomplete
                                        v-model="form.sub_type"
                                        :rules="mixin_validation.required"
                                        :items="sub_types"
                                        :error-messages="errors.sub_type"
                                        @input="errors.sub_type = []"
                                        item-value="id"
                                        item-text="name"
                                        label="Sub Type (optional)"
                                        required
                                        return-object
                                    >
                                    </v-autocomplete>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>

                    <v-card class="mx-auto mb-4" flat>
                        <v-list-item three-line>
                            <v-list-item-content>
                                <div class="overline mb-4 green--text">
                                    Expense Details
                                </div>
                                <!-- <v-list-item-title class="headline mb-1">
                                Basic Details
                            </v-list-item-title> -->
                                <v-list-item-subtitle>
                                    Remaining Fund:

                                    <v-btn color="green" dark small outlined>{{
                                        mixin_formatNumber(
                                            form.user.remaining_fund
                                        )
                                    }}</v-btn>
                                    ~ Expense Limit:
                                    <v-btn color="green" dark small outlined>{{
                                        expense_amount_limit == null
                                            ? "No Limit"
                                            : mixin_formatNumber(
                                                  expense_amount_limit
                                              )
                                    }}</v-btn>
                                </v-list-item-subtitle>
                                <v-list-item-subtitle>
                                    Note: Expense amount exceeding the remaining
                                    fund/expense limit will be considered as
                                    reimbursable.
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>

                        <v-container>
                            <v-row>
                                <v-col cols="12" md="8">
                                    <v-text-field
                                        v-model="form.description"
                                        label="Description"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="4">
                                    <v-text-field
                                        v-model="form.receipt_number"
                                        :rules="[]"
                                        :error-messages="errors.receipt_number"
                                        @input="errors.receipt_number = []"
                                        label="Receipt No."
                                        required
                                    ></v-text-field>
                                </v-col>
                            </v-row>

                            <v-checkbox
                                v-model="itemize"
                                label="Itemize Expenses"
                                @change="
                                    form.amount = 0;
                                    form.revolving_fund = 0;
                                "
                            ></v-checkbox>

                            <v-data-table
                                v-if="itemize"
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
                                            <strong>{{ form.amount }}</strong>
                                        </td>
                                    </tr>
                                    <tr class="green--text hidden-sm-and-down">
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
                                            <strong>{{ form.amount }}</strong>
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
                                                            <v-col cols="12">
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
                                                            <v-col cols="12">
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
                                                        <v-row>
                                                            <v-col>
                                                                <div>
                                                                    {{
                                                                        expense_amount_limit ==
                                                                        null
                                                                            ? "No Limit"
                                                                            : `Limit: ${mixin_formatNumber(
                                                                                  expense_amount_limit
                                                                              )} / qunatity`
                                                                    }}
                                                                </div>
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
                                                    >
                                                        Cancel
                                                    </v-btn>
                                                    <v-btn
                                                        color="primary"
                                                        text
                                                        @click="addItem"
                                                    >
                                                        Add
                                                    </v-btn>
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

                            <v-row>
                                <v-col cols="12" md="4">
                                    <v-text-field
                                        v-model="form.amount"
                                        label="Expense Amount"
                                        :rules="[
                                            ...mixin_validation.required,
                                            ...mixin_validation.minNumberValue(
                                                1
                                            )
                                        ]"
                                        :readonly="itemize"
                                        type="number"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="4">
                                    <v-text-field
                                        v-if="mixin_can('set reimbursable amount')"
                                        v-model="form.reimbursable_amount"
                                        label="Amount to reimburse"
                                        type="number"
                                        hint="Amount spent from own pocket"
                                        persistent-hint
                                    >
                                    </v-text-field>
                                </v-col>
                            </v-row>

                            <v-row v-if="form.vendor.is_vat_inclusive">
                                <v-col cols="12" md="4">
                                    <v-text-field
                                        v-model="form.tax_rate"
                                        label="Tax Rate"
                                        suffix="%"
                                        type="number"
                                        :readonly="
                                            !mixin_can(
                                                'modify taxes on expense'
                                            )
                                        "
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="8">
                                    <v-text-field
                                        v-model="taxable_amount"
                                        label="Tax Amount"
                                        type="number"
                                        :readonly="
                                            !mixin_can(
                                                'modify taxes on expense'
                                            )
                                        "
                                    ></v-text-field>
                                </v-col>
                            </v-row>

                            <v-textarea
                                rows="3"
                                v-model="form.remarks"
                                :error-messages="errors.remarks"
                                @input="errors.remarks = []"
                                label="Remarks"
                            ></v-textarea>

                            <v-row>
                                <v-col>
                                    <div class="green--text">
                                        Amount to replenish
                                    </div>
                                </v-col>
                                <v-spacer></v-spacer>
                                <v-col class="text-right">
                                    <div class="green--text">
                                        {{
                                            mixin_formatNumber(
                                                amount_to_replenish
                                            )
                                        }}
                                    </div>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col>
                                    <div class="green--text">
                                        Amount to reimburse
                                    </div>
                                </v-col>
                                <v-spacer></v-spacer>
                                <v-col class="text-right">
                                    <div class="green--text">
                                        {{
                                            mixin_formatNumber(
                                                amount_to_reimburse
                                            )
                                        }}
                                    </div>
                                </v-col>
                            </v-row>

                            <v-divider></v-divider>

                            <v-row>
                                <v-col>
                                    <div class="font-weight-bold green--text">
                                        Total Expenses
                                    </div>
                                </v-col>
                                <v-spacer></v-spacer>
                                <v-col class="text-right">
                                    <div class="green--text">
                                        {{ mixin_formatNumber(expense_amount) }}
                                    </div>
                                </v-col>
                            </v-row>
                        </v-container>

                        <v-card-actions class="mt-3 mb-4">
                            <v-spacer></v-spacer>
                            <v-btn color="green" dark @click="onSave"
                                >Save</v-btn
                            >
                            <v-btn @click="$router.go(-1)">Cancel</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-container>

                <!-- ---------------------------------------------------------------------------------------------- -->
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
            loader: false,
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
            vendors: [],
            form: {
                code: null,
                description: null,
                amount: 0,
                detials_quantity: 0,
                details_amount: 0,
                // reimbursable_amount: 0,
                receipt_number: null,
                date: moment().format("YYYY-MM-DD"),
                remarks: "",
                is_active: true,
                expense_type: {
                    id: null,
                    name: "",
                    limit: null,
                    sub_types: { id: null, name: "None", limit: null }
                },
                sub_type: { id: null, name: "", limit: null },
                user: this.$store.getters.user,
                vendor: {
                    id: null,
                    name: "",
                    tin: "",
                    is_vat_inclusive: false
                },
                // particular: "",
                // particular_amount: 0,
                // particular_reimbursable_amount: 0,
                is_reimbursable: false,

                revolving_fund: 0,
                reimbursable_amount: 0,
                details: {
                    description: "",
                    quantity: 1,
                    amount: 0,
                    total: 0
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
                user_id: [],
                vendor_id: []
            }
        };
    },
    methods: {
        loadExpenseTypes() {
            this.expense_types = this.form.expense_types;
        },
        loadUsers() {
            let _this = this;

            axios
                .get(`/api/data/users?expense_ref=true&user_id=${this.form.user.id}`)
                .then(response => {
                    let data = response.data.data;
                    this.expense_types = data.expense_types;
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
            let expense_type_limit = this.form.expense_type.limit;
            let sub_type_limit = this.form.sub_type.limit;
            let expense_limit =
                sub_type_limit == null ? expense_type_limit : sub_type_limit;
            let expense_amount = this.form.amount;

            if (!this.mixin_can("add expenses beyond limit")) {
                if (!this.itemize) {
                    if (
                        expense_limit !== null &&
                        expense_limit < expense_amount
                    ) {
                        _this.$dialog.message.error(
                            "Amount can't be greater than expense limit.",
                            {
                                position: "top-right",
                                timeout: 2000
                            }
                        );
                        return;
                    }
                } else {
                    if (
                        expense_limit !== null &&
                        expense_limit < this.form.details_amount
                    ) {
                        _this.$dialog.message.error(
                            "Itemized Expenses Amount can't be greater than expense limit",
                            {
                                position: "top-right",
                                timeout: 2000
                            }
                        );
                        return;
                    }
                }
            }

            if (_this.form.user.id == null) {
                _this.$dialog.message.error("No User Selected", {
                    position: "top-right",
                    timeout: 2000
                });
                return;
            }

            if (_this.form.expense_type.id == null) {
                _this.$dialog.message.error("No Expense Type Selected", {
                    position: "top-right",
                    timeout: 2000
                });
                return;
            }

            if (
                _this.amount_to_replenish > _this.form.user.remaining_fund
            ) {
                _this.$dialog.message.error(
                    "Amount to replenish is greater than remaining fund",
                    {
                        position: "top-right",
                        timeout: 2000
                    }
                );
                return;
            }

            if((_this.amount_to_replenish + _this.amount_to_reimburse) < this.form.amount) {
                
                _this.mixin_errorDialog("Error", "Expense Amount is greater than amount to replenish/reimburse");

                return;
            }

            if((_this.amount_to_replenish + _this.amount_to_reimburse) <= 0) {

                _this.mixin_errorDialog("Error", "Total Expenses can't be lesser or equal to zero");

                return;
            }

            _this.$refs.form.validate();

            if (_this.$refs.form.validate()) {
                _this.loader = true;

                axios
                    .post("/api/expenses", {
                        code: _this.form.code,
                        description: _this.form.description,
                        amount: _this.form.amount,
                        reimbursable_amount: _this.amount_to_reimburse,
                        receipt_number: _this.form.receipt_number,
                        date: _this.form.date,
                        remarks: _this.form.remarks,
                        is_active: _this.form.is_active,
                        expense_type_id: _this.form.expense_type.id,
                        sub_type_id: _this.form.sub_type.id,
                        user_id: _this.form.user.id,
                        vendor_id: _this.form.vendor.id,
                        details: _this.itemize ? _this.items : null,
                        tax_name: "",
                        tax_rate: _this.form.tax_rate,
                        tax_amount: _this.form.tax_amount,
                        is_tax_inclusive: _this.form.is_tax_inclusive
                    })
                    .then(function(response) {
                        // _this.onRefresh();

                        _this.$dialog.message.success(
                            "Expense created successfully.",
                            {
                                position: "top-right",
                                timeout: 2000
                            }
                        );

                        // _this.$store.dispatch("AUTH_USER");

                        _this.$router.go(-1);
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
            let limit = this.expense_amount_limit;

            if (description == "" || total <= 0) {
                return;
            }

            if (!this.mixin_can("add expenses beyond limit")) {
                if (limit !== null) {
                    if (limit * quantity < amount) {
                        return;
                    }
                }
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
            this.sub_types.unshift({ id: null, name: "None", limit: null });
        }
    },
    computed: {
        minDate() {
            if (this.mixin_can("add expenses beyond encoding period")) {
                return null;
            }

            let settings = this.$store.getters.settings;
            let submissionMinDate = moment().endOf("day");
            let encodingMinDate = moment()
                .subtract(settings.expense_encoding_period - 1, "days")
                .format("YYYY-MM-DD");

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

            return moment(encodingMinDate).isSameOrAfter(submissionMinDate)
                ? encodingMinDate
                : submissionMinDate;
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
                this.form.user.remaining_fund
            );
            let amount = this.mixin_convertToNumber(this.form.amount);
            let reimbursable = this.mixin_convertToNumber(this.form.reimbursable_amount);
            let amt_to_replenish = amount < reimbursable ? 0 : amount - reimbursable;

            if(this.mixin_can("set reimbursable amount")) {
                return (amount - reimbursable) > remaining_fund ? 0 : amt_to_replenish;
            }

            if (remaining_fund >= amount) {
                return amount;
            }

            return amount - Math.abs(remaining_fund - amount);
        },
        amount_to_reimburse() {
            let remaining_fund = this.mixin_convertToNumber(
                this.form.user.remaining_fund
            );
            let amount = this.mixin_convertToNumber(this.form.amount);
            let reimbursable = this.mixin_convertToNumber(this.form.reimbursable_amount);

            if(this.mixin_can("set reimbursable amount")) {
                return reimbursable > amount ? 0 : reimbursable;
            }

            if (remaining_fund < amount) {
                let to_replenish = Math.abs(remaining_fund - amount);

                this.form.reimbursable_amount = to_replenish;

                return to_replenish;
            }

            this.form.reimbursable_amount = 0;

            return 0;
        },
        expense_amount() {
            let amt_to_replenish = this.mixin_convertToNumber(this.amount_to_replenish);
            let amt_to_reimburse = this.mixin_convertToNumber(this.amount_to_reimburse);

            return this.mixin_convertToNumber(amt_to_replenish + amt_to_reimburse);
        },
        display_reimbursable_amount() {
            return (
                parseFloat(this.form.amount) >
                parseFloat(this.form.user.remaining_fund)
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
        },
        expense_amount_limit() {
            return this.form.sub_type.limit == null
                ? this.form.expense_type.limit
                : this.form.sub_type.limit;
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

            if (this.form.id == null) {
                this.itemize = false;

                this.$dialog.message.error("No User Selected", {
                    position: "top-right",
                    timeout: 2000
                });

                return;
            }

            if (this.form.expense_type.id == null) {
                this.itemize = false;

                this.$dialog.message.error("No Expense Type Selected", {
                    position: "top-right",
                    timeout: 2000
                });

                return;
            }
        },
        "form.vendor": function() {
            this.form.tax_rate = this.$store.getters.settings.tax_rate;
            this.form.tax_amount = 0;
            this.form.is_tax_inclusive = true;
        }
    },
    created() {
        this.$store.dispatch("AUTH_USER").then((response) => {
            this.loadUsers();
        });
        this.loadVendors();
    },
    activated() {
        this.$store.dispatch("AUTH_USER").then((response) => {
            this.loadUsers();
        });
        this.loadVendors();
    }
};
</script>
