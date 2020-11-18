<template>
    <div>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">Expense Details</h4>
            </v-card-title>

            <v-form ref="form" v-model="valid">
                <v-container>
                    <v-row>
                        <v-col cols="12" md="8">
                            <div>
                                {{ form.employee.fullname }}
                                <v-btn
                                    text
                                    color="green"
                                    :to="
                                        `/admin/expenses/${$route.params.id}/edit`
                                    "
                                >
                                    Edit
                                </v-btn>
                            </div>
                            <div class="display-1 green--text">
                                PHP {{ mixin_formatNumber(form.amount) }}
                            </div>
                            <div>
                                {{ form.expense_type.name }}
                                {{
                                    form.sub_type == null ||
                                    form.sub_type.id == null
                                        ? ""
                                        : `(${form.sub_type.name})`
                                }}
                            </div>
                            <div>Date: {{ form.date }}</div>
                        </v-col>
                        <v-col cols="12" md="4">
                            <div>Receipt: #{{ form.receipt_number }}</div>
                            <div>Vendor: {{ form.vendor.name }}</div>
                            <div>
                                Status:
                                <v-btn :color="form.status.color" x-small dark>
                                    {{ form.status.status }}
                                </v-btn>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12">
                            <div>Description: {{ form.description }}</div>
                            <div>
                                Tax ({{ form.tax_rate }}% inclusive):
                                {{ form.tax_amount }}
                            </div>
                            <div>
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
                                </v-data-table>
                            </div>
                        </v-col>

                        <v-col cols="12" md="8">
                            <div>Remarks : {{ form.remarks }}</div>
                        </v-col>

                        <v-col cols="12" md="4">
                            <table width="100%">
                                <tbody>
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
                                        <td colspan="3">
                                            <v-divider></v-divider>
                                        </td>
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

                        <v-col cols="12">
                            <v-divider class="mb-4"></v-divider>
                            <div>Notes : {{ form.notes }}</div>
                        </v-col>
                    </v-row>

                    <v-divider class="mb-4"></v-divider>

                    <v-row class="text--secondary text-caption">
                        <v-col cols="12">
                            <div>Other Details :</div>

                            <table class="table" width="100%">
                                <tbody>
                                    <tr v-if="form.created">
                                        <td>Created By</td>
                                        <td>:</td>
                                        <td>
                                            {{ form.created.created_by.name }}
                                        </td>
                                        <td>
                                            {{
                                                mixin_formatDate(
                                                    form.created.created_at,
                                                    "YYYY-MM-DD HH:mm:ss"
                                                )
                                            }}
                                        </td>
                                    </tr>
                                    <tr v-if="form.submitted">
                                        <td>Submitted By</td>
                                        <td>:</td>
                                        <td>
                                            {{
                                                form.submitted.submitted_by.name
                                            }}
                                        </td>
                                        <td>
                                            {{
                                                mixin_formatDate(
                                                    form.submitted.submitted_at,
                                                    "YYYY-MM-DD HH:mm:ss"
                                                )
                                            }}
                                        </td>
                                    </tr>
                                    <!-- <tr v-if="created.created_at">
                                        <td>Reviewed By</td>
                                        <td>: </td>
                                        <td>{{ form.reviewed.reviewed_by.name }}</td>
                                        <td>{{ mixin_formatDate(form.reviewed.reviewed_at, "YYYY-MM-DD HH:mm:ss") }}</td>
                                    </tr> -->
                                    <tr v-if="form.approved">
                                        <td>Approved By</td>
                                        <td>:</td>
                                        <td>
                                            {{ form.approved.approved_by.name }}
                                        </td>
                                        <td>
                                            {{
                                                mixin_formatDate(
                                                    form.approved.approved_at,
                                                    "YYYY-MM-DD HH:mm:ss"
                                                )
                                            }}
                                        </td>
                                    </tr>
                                    <tr v-if="form.rejected">
                                        <td>Rejected By</td>
                                        <td>:</td>
                                        <td>
                                            {{ form.rejected.rejected_by.name }}
                                        </td>
                                        <td>
                                            {{
                                                mixin_formatDate(
                                                    form.rejected.rejected_at,
                                                    "YYYY-MM-DD HH:mm:ss"
                                                )
                                            }}
                                        </td>
                                    </tr>
                                    <tr v-if="form.deleted">
                                        <td>Cancelled By</td>
                                        <td>:</td>
                                        <td>
                                            {{ form.deleted.deleted_by.name }}
                                        </td>
                                        <td>
                                            {{
                                                mixin_formatDate(
                                                    form.deleted.deleted_at,
                                                    "YYYY-MM-DD HH:mm:ss"
                                                )
                                            }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </v-col>
                    </v-row>
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
                receipt_number: null,
                date: null,
                remarks: "",
                notes: "",
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
                vendor: { id: null, name: "", is_vat_inclusive: true },
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
                tax_amount: 0,
                status: { color: "", remarks: "", status: "" },

                created: { created_at: null, created_by: { name: "" } },
                updated: { updated_at: null, updated_by: { name: "" } },
                deleted: { deleted_at: null, deleted_by: { name: "" } },
                submitted: { submitted_at: null, submitted_by: { name: "" } },
                reviewed: { reviewed_at: null, reviewed_by: { name: "" } },
                approved: { approved_at: null, approved_by: { name: "" } },
                rejected: { rejected_at: null, rejected_by: { name: "" } },
                cancelled: { cancelled_at: null, cancelled_by: { name: "" } },

                logs: []
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
                        console.log(data);

                        _this.form.code = data.code;
                        _this.form.description = data.description;

                        _this.form.receipt_number = data.receipt_number;
                        _this.form.date = data.date;
                        _this.form.remarks = data.remarks;
                        _this.form.notes = data.notes;
                        _this.form.is_active = data.is_active;
                        _this.form.employee = data.employee;
                        _this.form.vendor =
                            data.vendor == null
                                ? { id: null, name: "", is_vat_inclusive: true }
                                : data.vendor;

                        _this.form.expense_type = data.expense_type;
                        // _this.form.sub_type = data.sub_type_id;

                        _this.expense_types = data.employee.expense_types;
                        _this.sub_types = data.expense_type.sub_types;

                        _this.form.is_tax_inclusive = data.is_tax_inclusive;
                        _this.form.tax_name = data.tax_name;
                        _this.form.tax_rate = data.tax_rate;
                        _this.form.tax_amount = data.tax_amount;

                        _this.form.status = data.status;

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

                        _this.form.created = data.created;
                        _this.form.updated = data.updated;
                        _this.form.deleted = data.deleted;
                        _this.form.submitted = data.submitted;
                        _this.form.approved = data.approved;
                        _this.form.rejected = data.rejected;
                        _this.form.cancelled = data.cancelled;

                        _this.form.logs = data.logs;
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
                        tin: ""
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
                        vendor_id: _this.form.vendor,
                        details: _this.itemize ? _this.items : null
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
                        console.log(error);
                        console.log(error.response);

                        _this.mixin_errorDialog(
                            `Error ${error.response.status}`,
                            error.response.statusText
                        );
                    });

                return;
            }
        },
        addItem() {
            let description = this.form.details.description;
            let amount = this.mixin_convertToNumber(this.form.details.amount);

            if (description == "" || amount <= 0) {
                return;
            }

            this.items.push({
                description: description,
                amount: amount
            });

            this.dialog = false;
            this.form.details.description = "";
            this.form.details.amount = 0;
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
    },
    created() {
        this.loadVendors();
        this.getData();
    }
};
</script>
