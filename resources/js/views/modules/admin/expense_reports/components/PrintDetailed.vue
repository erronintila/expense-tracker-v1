<template>
    <div>
        <!-- <v-row>
            <v-spacer></v-spacer>
            <v-btn @click="print" class="mr-3">Print</v-btn>
        </v-row>

        <br /> -->

        <v-card flat>
            <div id="section-to-print">
                <v-row>
                    <v-col>
                        <div class="title green--text">
                            Expense Summary Report
                        </div>
                        <div>
                            Employee:
                            {{
                                `${
                                    expense_report.employee.last_name
                                }, ${expense_report.employee.first_name ||
                                    ""} ${expense_report.employee.suffix || ""}`
                            }}
                        </div>
                        <div>
                            Description: {{ expense_report.description || "" }}
                        </div>
                        <div>Period: {{ `${min_date} ~ ${max_date}` }}</div>
                    </v-col>
                    <v-col class="text-right">
                        <div class="title green--text">
                            # {{ expense_report.code }}
                        </div>
                    </v-col>
                </v-row>

                <v-row class="mt-5">
                    <v-col>
                        <v-data-table
                            dense
                            :hide-default-footer="true"
                            disable-pagination
                            :headers="headers"
                            :items="items"
                        >
                            <template
                                slot="body.append"
                                v-if="items.length > 0"
                            >
                                <tr class="green--text hidden-md-and-up">
                                    <td class="title">
                                        Total: <strong>{{ 0 }}</strong>
                                    </td>
                                </tr>
                                <tr class="green--text hidden-sm-and-down">
                                    <td>Total</td>
                                    <td
                                        v-for="(value, name) in column_headers"
                                        :key="name"
                                    >
                                        {{ value }}
                                    </td>
                                </tr>
                            </template>
                        </v-data-table>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <div>Grand Total :</div>
                    </v-col>
                    <v-col class="text-right">
                        <div class="headline green--text">
                            ₱ {{ total_amount }}
                        </div>
                    </v-col>
                </v-row>
            </div>
        </v-card>
    </div>
</template>

<script>
import moment from "moment";
import numeral from "numeral";

export default {
    data() {
        return {
            total: 0,
            total_amounts: [],
            headers: [],
            items: [],
            expense_report: {
                id: "",
                code: "",
                description: "",
                remarks: "",
                notes: "",
                employee: {
                    last_name: "",
                    first_name: "",
                    middle_name: "",
                    suffix: ""
                },
                payment: {},
                expenses: {},
                status: "",
                submitted_at: "",
                reviewed_at: "",
                approved_at: "",
                cancelled_at: "",
                created_at: "",
                updated_at: "",
                deleted_at: "",
                total: 0,
                total_reimbursable: 0
            },
            min_date: "",
            max_date: "",
            column_headers: {}
        };
    },
    methods: {
        loadExpenseTypes() {
            let _this = this;

            return new Promise((resolve, reject) => {
                axios
                    .get("/api/data/expense_types")
                    .then(response => {
                        response.data.data.forEach(element => {
                            let header = element.name;

                            let identifier = element.name
                                .replace(/\s+/g, "_")
                                .toLowerCase();

                            _this.column_headers[identifier] = 0;

                            _this.headers.push({
                                text: element.name,
                                value: element.name
                                    .replace(/\s+/g, "_")
                                    .toLowerCase(),
                                sortable: false,
                                divider: true
                            });

                            _this.total_amounts.push({
                                name: header,
                                value: 0
                            });
                        });

                        _this.headers.unshift({
                            text: "Date",
                            value: "date",
                            sortable: false,
                            divider: true
                        });

                        _this.headers.push({
                            text: "Total",
                            value: "total",
                            sortable: false
                        });

                        _this.column_headers["total"] = 0;

                        resolve();
                    })
                    .catch(error => {
                        console.log(error);
                        console.log(error.response);
                        reject();
                    });
            });
        },
        loadExpenses() {
            let _this = this;

            _this.loadExpenseTypes().then(() => {
                axios
                    .get(
                        `/api/data/print?expense_report_detailed=true&expense_report_id=${_this.$route.params.id}`
                    )
                    .then(response => {
                        console.log(response);

                        let rows = response.data.data;

                        _this.items = rows;
                        _this.expense_report = response.data.expense_report;
                        _this.min_date = response.data.min_date;
                        _this.max_date = response.data.max_date;
                    })
                    .catch(error => {
                        console.log(error);
                        console.log(error.response);
                    });
            });
        },
        print() {
            this.$htmlToPaper("section-to-print");
        }
    },
    computed: {
        total_amount() {
            return this.mixin_formatNumber(this.expense_report.total);
        }
    },
    watch: {
        items() {
            for (const key in this.column_headers) {
                this.column_headers[key] = this.items.reduce(
                    (total, item) => total + item[key],
                    0
                );
            }
        }
    },
    created() {
        let _this = this;

        _this.loadExpenses();
    }
};
</script>

<style scoped>
@media print {
    body * {
        background: white;
    }

    @page {
        size: Legal landscape;
    }
}

/* table {
    width: 100%;
    border: 1px solid lightgrey;
    border-collapse: collapse;
}

table th,
table td {
    border: 1px solid lightgrey;
} */

/* @media print {
    .v-content {
        padding: 0 !important;
    }
    body {
        overflow: auto;
        height: auto;
    }

    @page {
        size: Legal landscape;
    }

    body * {
        visibility: hidden;
    }

    #section-to-print,
    #section-to-print * {
        visibility: visible;
    }

    #section-to-print {
        position: absolute;
        left: 0;
        top: 0;
    } 
} */
</style>
