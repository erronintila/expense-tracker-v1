<template>
    <div>
        <v-card flat>
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn @click="generatePDF('print')" class="mr-2">
                    Print
                </v-btn>
                <v-btn @click="generatePDF('pdf')">
                    Export to PDF
                </v-btn>
            </v-card-title>

            <v-row>
                <v-col>
                    <div class="title green--text">
                        Expense Report
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
                    <div :class="`${expense_report.status.color}--text`">
                        {{ expense_report.status.status }}
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
                        <template slot="body.append" v-if="items.length > 0">
                            <tr class="green--text hidden-md-and-up">
                                <td class="title">
                                    Total: <strong>{{ 0 }}</strong>
                                </td>
                            </tr>
                            <tr class="green--text hidden-sm-and-down">
                                <td>Total</td>
                                <td></td>
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
                    <div class="headline green--text">₱ {{ total_amount }}</div>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>
import moment from "moment";
import numeral from "numeral";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

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
        generatePDF(action) {
            // var source = this.$refs["myTable"];
            let pdfName = "Expense Summary Report";
            let columns = this.headers.map(item => item.text);
            let rows = [];
            let footer = [];

            this.items.forEach(element => {
                let temp = [];

                temp.push(element.date);
                temp.push(element.delivery_expense);
                temp.push(element["gas_&_oil"]);
                temp.push(element["meal_&_lodging"]);
                temp.push(element.miscellaneous);
                temp.push(element["postage,_telephone_&_fax"]);
                temp.push(element["repairs_&_maintenance"]);
                temp.push(element.representation);
                temp.push(element.supplies);
                temp.push(element.transportation);
                temp.push(element.total);

                rows.push(temp);
            });

            footer = [
                "Total",
                this.column_headers.delivery_expense,
                this.column_headers["gas_&_oil"],
                this.column_headers["meal_&_lodging"],
                this.column_headers.miscellaneous,
                this.column_headers["postage,_telephone_&_fax"],
                this.column_headers["repairs_&_maintenance"],
                this.column_headers.representation,
                this.column_headers.supplies,
                this.column_headers.transportation,
                this.column_headers.total
            ];
            rows.push(footer);

            // basic config
            var doc = new jsPDF({
                orientation: "landscape",
                unit: "in",
                format: action == "print" ? "letter" : [13, 8.5]
            });

            // header details
            doc.setFontSize(14)
                .setTextColor(76, 175, 10)
                .text("Expense Summary Report", 0.5, 0.7);
            doc.setFontSize(14)
                .setTextColor(76, 175, 10)
                .text(
                    this.expense_report.code,
                    doc.internal.pageSize.width - 0.5,
                    0.7,
                    { align: "right" }
                );

            doc.setFontSize(11)
                .setTextColor(0, 0, 0)
                .text(
                    `Employee: ${this.expense_report.employee.last_name}, ${this.expense_report.employee.first_name} ${this.expense_report.employee.middle_name}`,
                    0.5,
                    1.0
                );
            doc.setFontSize(11)
                .setTextColor(0, 0, 0)
                .text(
                    this.expense_report.status.status,
                    doc.internal.pageSize.width - 0.5,
                    1.0,
                    { align: "right" }
                );

            doc.setFontSize(11)
                .setTextColor(0, 0, 0)
                .text(
                    `Description: ${this.expense_report.description}`,
                    0.5,
                    1.2
                );
            doc.setFontSize(11)
                .setTextColor(0, 0, 0)
                .text(`Period: ${this.min_date} ~ ${this.max_date}`, 0.5, 1.4);

            // table config
            doc.autoTable({
                columns: columns,
                body: rows,
                margin: { left: 0.5, top: 1.6 },
                showHead: "everyPage",
                headStyles: { halign: "center", fillColor: [76, 175, 10] }
            });

            let finalY = doc.lastAutoTable.finalY; // The y position on the page
            doc.setFontSize(12)
                .setTextColor(76, 175, 10)
                .text("Grand Total", 0.6, finalY + 0.2);
            doc.setFontSize(12)
                .setTextColor(76, 175, 10)
                .text(
                    `${this.total_amount}`,
                    doc.internal.pageSize.width - 0.7,
                    finalY + 0.2,
                    { align: "right" }
                );

            // footer
            doc.setFontSize(8)
                .setTextColor(0, 0, 0)
                .text(
                    "Generated from Twin-Circa Marketing Expense Tracker",
                    0.5,
                    doc.internal.pageSize.height - 0.5
                );
            // doc.setFontSize(8)
            //     .setTextColor(0, 0, 0)
            //     .text(
            //         `Page ${0} / ${doc.internal.getNumberOfPages()}`,
            //         doc.internal.pageSize.width - 1,
            //         doc.internal.pageSize.height - 0.5
            //     );

            if (action == "print") {
                doc.autoPrint();
                doc.output("dataurlnewwindow");
                // doc.autoPrint({ variant: "non-conform" });
            } else {
                doc.save(`${pdfName}.pdf`);
            }
        },
        // printReport() {

        // },
        // exportToPDF() {

        // },
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
                            text: "Particulars",
                            value: "particulars",
                            sortable: false,
                            divider: true
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

                        _this.mixin_errorDialog(
                            `Error ${error.response.status}`,
                            error.response.statusText
                        );
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
                        let rows = response.data.data;

                        _this.items = rows;
                        _this.expense_report = response.data.expense_report;
                        _this.min_date = response.data.min_date;
                        _this.max_date = response.data.max_date;
                    })
                    .catch(error => {
                        console.log(error);
                        console.log(error.response);

                        _this.mixin_errorDialog(
                            `Error ${error.response.status}`,
                            error.response.statusText
                        );
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