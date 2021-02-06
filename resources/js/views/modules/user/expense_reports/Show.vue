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
            <!-- <v-card class="elevation-0 pt-0"> -->
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">Expense Report Details</h4>
            </v-card-title>

            <v-form ref="form">
                <v-container>
                    <v-row>
                        <v-col cols="12" md="8">
                            <div>
                                {{ form.user.full_name }}
                                <v-btn
                                    v-if="canEdit"
                                    text
                                    color="green"
                                    :to="
                                        `/expense_reports/${$route.params.id}/edit`
                                    "
                                >
                                    Edit
                                </v-btn>
                            </div>
                            <div class="display-1 green--text">
                                PHP {{ mixin_formatNumber(form.total) }}
                            </div>
                            <div>
                                Period:
                                {{
                                    form.from == form.to
                                        ? form.from
                                        : `${form.from} ~ ${form.to}`
                                }}
                            </div>
                        </v-col>

                        <v-col cols="12" md="4">
                            <div class="headline green--text">
                                #{{ form.code }}
                            </div>
                            <div>
                                Status:
                                <v-btn :color="form.status.color" x-small dark>
                                    {{ form.status.status }}
                                </v-btn>
                            </div>
                            <div>
                                <v-btn
                                    v-if="form.is_late_submitted"
                                    color="red"
                                    x-small
                                    dark
                                >
                                    Late Submitted
                                </v-btn>
                                <v-btn
                                    v-if="form.is_late_approved"
                                    color="red"
                                    x-small
                                    dark
                                >
                                    Late Approved
                                </v-btn>
                            </div>
                        </v-col>
                    </v-row>

                    <v-divider></v-divider>

                    <v-row>
                        <v-col>Description: {{ form.description }} </v-col>
                    </v-row>

                    <v-divider></v-divider>

                    <v-row>
                        <v-col cols="12">
                            <v-data-table
                                :headers="headers"
                                :items="form.expenses"
                                :loading="loading"
                                :options.sync="options"
                                :server-items-length="totalItems"
                                :footer-props="{
                                    itemsPerPageOptions: [10, 20, 50, 100],
                                    showFirstLastPage: true,
                                    firstIcon: 'mdi-page-first',
                                    lastIcon: 'mdi-page-last',
                                    prevIcon: 'mdi-chevron-left',
                                    nextIcon: 'mdi-chevron-right'
                                }"
                                show-expand
                                single-expand
                                item-key="id"
                                class="elevation-0"
                            >
                                <template
                                    v-slot:expanded-item="{ headers, item }"
                                >
                                    <td :colspan="headers.length">
                                        <v-container>
                                            <table>
                                                <tr>
                                                    <td>
                                                        <strong>Code</strong>
                                                    </td>
                                                    <td>:</td>
                                                    <td>{{ item.code }}</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong
                                                            >Description</strong
                                                        >
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        {{ item.description }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Receipt</strong>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        {{
                                                            item.receipt_number
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Vendor</strong>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        {{
                                                            item.vendor == null
                                                                ? ""
                                                                : item.vendor
                                                                      .name
                                                        }}
                                                    </td>
                                                </tr>
                                                <tr v-if="item.remarks">
                                                    <td>
                                                        <strong>Remarks</strong>
                                                    </td>
                                                    <td>:</td>
                                                    <td>{{ item.remarks }}</td>
                                                </tr>
                                            </table>
                                        </v-container>
                                    </td>
                                </template>
                                <template v-slot:[`item.updated_at`]="{ item }">
                                    {{ mixin_getHumanDate(item.updated_at) }}
                                </template>
                                <template v-slot:[`item.amount`]="{ item }">
                                    {{ mixin_formatNumber(item.amount) }}
                                </template>
                                <template
                                    v-slot:[`item.replenishment`]="{ item }"
                                >
                                    {{
                                        mixin_formatNumber(
                                            item.amount -
                                                item.reimbursable_amount
                                        )
                                    }}
                                </template>
                                <template
                                    v-slot:[`item.status.status`]="{ item }"
                                >
                                    <v-chip
                                        :color="item.status.color"
                                        dark
                                        small
                                        >{{ item.status.status }}</v-chip
                                    >
                                </template>
                                <template v-slot:[`item.actions`]="{ item }">
                                    <v-icon
                                        small
                                        class="mr-2"
                                        @click="
                                            $router.push(`/expenses/${item.id}`)
                                        "
                                    >
                                        mdi-eye
                                    </v-icon>
                                </template>
                            </v-data-table>
                        </v-col>
                    </v-row>

                    <v-divider></v-divider>

                    <v-row>
                        <v-col cols="12" md="8">
                            <div>Remarks : {{ form.remarks }}</div>
                        </v-col>

                        <v-col cols="12" md="4">
                            <table width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            Total Expense Amount
                                        </td>
                                        <td>:</td>
                                        <td
                                            class="green--text text--darken-4 text-right"
                                        >
                                            {{ mixin_formatNumber(form.total) }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Paid Amount
                                        </td>
                                        <td>:</td>
                                        <td
                                            class="green--text text--darken-4 text-right"
                                        >
                                            (-)
                                            {{ mixin_formatNumber(form.paid) }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">
                                            <v-divider></v-divider>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="text-left">
                                            Amount to be reimbursed
                                        </th>
                                        <td>:</td>
                                        <td
                                            class="green--text text--darken-4 text-right"
                                        >
                                            {{
                                                mixin_formatNumber(form.balance)
                                            }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </v-col>
                    </v-row>

                    <v-divider class="mb-4"></v-divider>

                    <v-row>
                        <v-col cols="12" md="8">
                            Notes : {{ form.notes }}
                        </v-col>

                        <v-col cols="12" md="4">
                            <div class="text-right">
                                <v-btn
                                    @click="generateExpenseReport('print')"
                                    color="green"
                                    dark
                                >
                                    Print
                                </v-btn>
                                <v-btn
                                    @click="generateExpenseReport('pdf')"
                                    color="green"
                                    dark
                                >
                                    Export to PDF
                                </v-btn>
                                <!-- <v-btn
                                    @click="generatePDF('print')"
                                    color="green"
                                    dark
                                >
                                    Print
                                </v-btn> -->
                                <!-- <v-btn
                                    color="green"
                                    dark
                                    :to="{
                                        name: 'user.expense_reports.detailed'
                                    }"
                                >
                                    View Detailed
                                </v-btn>

                                <v-btn
                                    color="green"
                                    dark
                                    :to="{
                                        name: 'user.expense_reports.summary'
                                    }"
                                >
                                    View Summary
                                </v-btn> -->
                            </div>
                        </v-col>
                    </v-row>

                    <v-divider class="mb-4"></v-divider>

                    <v-row class="text--secondary text-caption">
                        <v-col cols="12" md="12">
                            <div>History :</div>
                            <div>
                                <table class="table" width="100%">
                                    <tbody>
                                        <tr
                                            v-for="item in form.logs"
                                            :key="item.id"
                                        >
                                            <td>
                                                {{
                                                    mixin_formatDate(
                                                        item.created_at,
                                                        "YYYY-MM-DD HH:mm:ss"
                                                    )
                                                }}
                                            </td>
                                            <td>-</td>
                                            <td>
                                                {{
                                                    item.causer == null
                                                        ? "System"
                                                        : item.causer.name
                                                }}
                                            </td>
                                            <td>-</td>
                                            <td>{{ item.description }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </v-col>
                    </v-row>

                    <!-- <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn color="green" dark @click="onEdit"
                            >Print Report</v-btn
                        >
                        <v-btn color="green" dark @click="onEdit"
                            >Print Summary</v-btn
                        >
                        <v-btn color="green" dark @click="onEdit"
                            >Edit Details</v-btn
                        >
                        <v-btn
                            color="green"
                            dark
                            :to="{ name: 'user.expense_reports.detailed' }"
                        >
                            View Detailed
                        </v-btn>

                        <v-btn
                            color="green"
                            dark
                            :to="{ name: 'user.expense_reports.summary' }"
                        >
                            View Summary
                        </v-btn>
                    </v-card-actions> -->
                </v-container>
            </v-form>
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
            loading: true,
            loader: true,
            headers: [
                { text: "Date", value: "date", sortable: false },
                {
                    text: "Type",
                    value: "expense_type.name",
                    sortable: false
                },
                { text: "Receipt", value: "receipt_number", sortable: false },
                { text: "Vendor", value: "vendor.name", sortable: false },
                { text: "Amount", value: "amount", sortable: false },
                { text: "Actions", value: "actions", sortable: false },
                { text: "", value: "data-table-expand" }
            ],
            total: 0,
            totalItems: 0,
            date_range: [],
            expense_report_id: this.$route.params.id,
            search: "",
            options: {
                sortBy: ["created_at"],
                sortDesc: [true],
                page: 1,
                itemsPerPage: 10
            },

            form: {
                code: "",
                reference_no: "",
                description: "",
                remarks: "",
                notes: "",
                submission_period: "",
                approval_period: "",
                from: "",
                to: "",
                status: { color: "", status: "", remarks: "" },
                is_late_submitted: false,
                is_late_approved: false,

                total: 0,
                total_reimbursable: 0,
                paid: 0,
                payments: [],
                payment_id: null,
                balance: 0,

                user: { id: null, name: "" },
                payment: { id: null },
                expenses: [],

                // created: { created_at: null, created_by: { name: "" } },
                // updated: { updated_at: null, updated_by: { name: "" } },
                // deleted: { deleted_at: null, deleted_by: { name: "" } },
                // submitted: { submitted_at: null, submitted_by: { name: "" } },
                // reviewed: { reviewed_at: null, reviewed_by: { name: "" } },
                // approved: { approved_at: null, approved_by: { name: "" } },
                // rejected: { rejected_at: null, rejected_by: { name: "" } },
                // cancelled: { cancelled_at: null, cancelled_by: { name: "" } },

                created_at: null,
                updated_at: null,
                deleted_at: null,
                submitted_at: null,
                reviewed_at: null,
                approved_at: null,
                rejected_at: null,
                cancelled_at: null,

                logs: []
            }
        };
    },
    methods: {
        generatePDF(action) {
            this.loadExpenses().then(data => {
                // var source = this.$refs["myTable"];
                let pdfName = "Expense Report";
                let table_columns = [
                    "Date",
                    "Type",
                    "Receipt",
                    "Vendor",
                    "Amount"
                ];
                let table_rows = [];
                let table_footer = [];

                data.items.forEach(element => {
                    let temp = [];

                    temp.push(element.date);
                    temp.push(element.expense_type.name);
                    temp.push(element.receipt_number);
                    temp.push(element.vendor.name);
                    temp.push(this.mixin_formatNumber(element.amount));

                    table_rows.push(temp);
                });

                // table_footer = [
                //     "Total",
                //     "",
                //     "",
                //     "",
                //     this.mixin_formatNumber(this.form.total)
                // ];
                // table_rows.push(table_footer);

                // basic config
                let doc = new jsPDF({
                    orientation: "portrait",
                    unit: "in",
                    format: action == "print" ? "letter" : [13, 8.5]
                });

                // header details

                // 1st row
                doc.setFontSize(11)
                    .setTextColor(0, 0, 0)
                    .text(`${this.form.user.full_name}`, 0.5, 0.7);

                doc.setFontSize(11)
                    .setTextColor(0, 0, 0)
                    .text(`${this.form.code}`, 6.0, 0.7);
                // end of 1st row

                // 2nd row
                doc.setFontSize(20)
                    .setTextColor(76, 175, 10)
                    .text(
                        `PHP ${this.mixin_formatNumber(this.form.total)}`,
                        0.5,
                        1.0
                    );

                doc.setFontSize(11)
                    .setTextColor(76, 175, 10)
                    .text(this.form.status.status, 6.0, 1.0);
                // end of 2nd row

                // 3rd row
                doc.setFontSize(11)
                    .setTextColor(0, 0, 0)
                    .text(
                        `Period: ${this.form.from} ~ ${this.form.to}`,
                        0.5,
                        1.2
                    );
                // end of 3rd row

                // 4th row
                doc.setLineWidth(0.01);
                doc.line(0.5, 1.35, 8.0, 1.35);
                //end of 4th row

                // 5th row
                doc.setFontSize(11)
                    .setTextColor(0, 0, 0)
                    .text(`Description: ${this.form.description}`, 0.5, 1.6);
                // end of 5th row

                // 6th row
                doc.autoTable({
                    columns: table_columns,
                    body: table_rows,
                    margin: { left: 0.5 },
                    startY: 1.8,
                    showHead: "everyPage",
                    headStyles: { halign: "center", fillColor: [76, 175, 10] },
                    columnStyles: { 4: { halign: "right" } }
                    // didParseCell: function(data) {
                    //     var rows = data.table.body;
                    //     if (data.row.index === rows.length - 1) {
                    //         data.cell.styles.fillColor = [76, 175, 10];
                    //     }
                    // },
                });

                doc.autoTable({
                    body: [
                        ["No. of Expenses", data.items.length],
                        [
                            "Total Expenses Amount",
                            this.mixin_formatNumber(this.form.total)
                        ],
                        [
                            "Paid Amount",
                            this.mixin_formatNumber(this.form.paid)
                        ],
                        [
                            "Amount to be reimbursed",
                            this.mixin_formatNumber(this.form.balance)
                        ]
                    ],
                    margin: { left: 0.5 },
                    columnStyles: { 1: { halign: "right" } },
                    theme: "plain"
                });
                // end of 6th row

                // page footer
                doc.setFontSize(8)
                    .setTextColor(0, 0, 0)
                    .text(
                        `Generated from Twin-Circa Marketing Expense Tracker ${moment().format(
                            "YYYY-MM-DD HH:mm:ss"
                        )}`,
                        0.5,
                        doc.internal.pageSize.height - 0.5
                    );
                // end of page footer

                // page number
                const pages = doc.internal.getNumberOfPages();
                const pageWidth = doc.internal.pageSize.width; //Optional
                const pageHeight = doc.internal.pageSize.height; //Optional
                doc.setFontSize(8); //Optional
                for (let j = 1; j < pages + 1; j++) {
                    let horizontalPos = pageWidth - 0.5; //Can be fixed number
                    let verticalPos = pageHeight - 0.5; //Can be fixed number
                    doc.setPage(j);
                    doc.text(
                        `Page ${j} of ${pages}`,
                        horizontalPos,
                        verticalPos,
                        { align: "right" }
                    ); //Optional text styling});
                }
                // end of page number

                // print or export record
                if (action == "print") {
                    doc.autoPrint();
                    doc.output("dataurlnewwindow");
                    // doc.autoPrint({ variant: "non-conform" });
                } else {
                    doc.save(`${pdfName}.pdf`);
                }
                //end of print or export record
            });
        },
        generateReport(action) {
            this.loadExpenses().then(data => {
                // var source = this.$refs["myTable"];
                let pdfName = "Expense Summary Report";
                let table_columns = [
                    "Date",
                    "Particulars",
                    "Delivery Expense",
                    "Gas & Oil",
                    "Meal & Lodging",
                    "Postage, Telephone, & Fax",
                    "Repairs & Maintenance",
                    "Representation",
                    "Supplies",
                    "Transportation",
                    "Miscellaneous",
                    "Total"
                ];
                let table_rows = [];
                let table_footer = [];

                // data.items.forEach(element => {
                //     let temp = [];

                //     temp.push(element.date);
                //     temp.push(element.expense_type.name);
                //     temp.push(element.receipt_number);
                //     temp.push(element.vendor.name);
                //     temp.push(this.mixin_formatNumber(element.amount));

                //     table_rows.push(temp);
                // });

                // table_footer = [
                //     "Total",
                //     "",
                //     "",
                //     "",
                //     this.mixin_formatNumber(this.form.total)
                // ];
                // table_rows.push(table_footer);

                // basic config
                let doc = new jsPDF({
                    orientation: "landscape",
                    unit: "in",
                    format: [13, 8.5]
                });

                // header details

                // 1st row
                doc.setFontSize(14)
                    .setTextColor(0, 0, 0)
                    .text("Expense Summary Report", 6.75, 0.7, "center");

                // end of 1st row

                doc.autoTable({
                    styles: { fontSize: 10 },
                    columns: table_columns,
                    body: [
                        [
                            "Total",
                            "Polomolok to Davao",
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ]
                    ],
                    showHead: "everyPage",
                    headStyles: { halign: "center", fillColor: [76, 175, 10] },
                    startY: 0.9,
                    margin: { left: 0.5 },
                    columnStyles: { 1: { halign: "right" } }
                });
                // end of 6th row

                //
                doc.setFontSize(10)
                    .setTextColor(0, 0, 0)
                    .text("Submitted by", 0.5, doc.lastAutoTable.finalY + 0.4);

                doc.setLineWidth(0.01);
                doc.line(
                    0.5,
                    doc.lastAutoTable.finalY + 0.8,
                    3.0,
                    doc.lastAutoTable.finalY + 0.8
                );

                doc.setFontSize(10)
                    .setTextColor(0, 0, 0)
                    .text(
                        "Recommended by",
                        3.5,
                        doc.lastAutoTable.finalY + 0.4
                    );

                doc.setLineWidth(0.01);
                doc.line(
                    3.5,
                    doc.lastAutoTable.finalY + 0.8,
                    6.0,
                    doc.lastAutoTable.finalY + 0.8
                );

                doc.setFontSize(10)
                    .setTextColor(0, 0, 0)
                    .text("Checked by", 6.5, doc.lastAutoTable.finalY + 0.4);

                doc.setLineWidth(0.01);
                doc.line(
                    6.5,
                    doc.lastAutoTable.finalY + 0.8,
                    9.0,
                    doc.lastAutoTable.finalY + 0.8
                );

                doc.setFontSize(10)
                    .setTextColor(0, 0, 0)
                    .text("Approved by", 9.5, doc.lastAutoTable.finalY + 0.4);

                doc.setLineWidth(0.01);
                doc.line(
                    9.5,
                    doc.lastAutoTable.finalY + 0.8,
                    12.0,
                    doc.lastAutoTable.finalY + 0.8
                );
                //

                // page footer
                doc.setFontSize(8)
                    .setTextColor(0, 0, 0)
                    .text(
                        `Generated from Twin-Circa Marketing Expense Tracker ${moment().format(
                            "YYYY-MM-DD HH:mm:ss"
                        )}`,
                        0.5,
                        doc.internal.pageSize.height - 0.5
                    );
                // end of page footer

                // page number
                const pages = doc.internal.getNumberOfPages();
                const pageWidth = doc.internal.pageSize.width; //Optional
                const pageHeight = doc.internal.pageSize.height; //Optional
                doc.setFontSize(8); //Optional
                for (let j = 1; j < pages + 1; j++) {
                    let horizontalPos = pageWidth - 0.5; //Can be fixed number
                    let verticalPos = pageHeight - 0.5; //Can be fixed number
                    doc.setPage(j);
                    doc.text(
                        `Page ${j} of ${pages}`,
                        horizontalPos,
                        verticalPos,
                        { align: "right" }
                    ); //Optional text styling});
                }
                // end of page number

                // print or export record
                if (action == "print") {
                    // doc.autoPrint();
                    doc.output("dataurlnewwindow");
                    // doc.autoPrint({ variant: "non-conform" });
                } else {
                    doc.save(`${pdfName}.pdf`);
                }
                //end of print or export record
            });
        },
        generateExpenseReport(action) {
            this.loadExpenses().then(data => {
                let table_columns = [];
                let table_footer = [];

                let table_rows = [];

                table_rows.push([
                    {
                        text: "Date",
                        style: "tableOfExpensesHeader"
                    },
                    {
                        text: "Type",
                        style: "tableOfExpensesHeader"
                    },
                    {
                        text: "Receipt",
                        style: "tableOfExpensesHeader"
                    },
                    {
                        text: "Vendor",
                        style: "tableOfExpensesHeader"
                    },
                    {
                        text: "Amount",
                        style: "tableOfExpensesHeader"
                    }
                ]);
                data.items.forEach(element => {
                    let temp = [];

                    temp.push({
                        text: element.date,
                        style: "tableOfExpensesBody"
                    });
                    temp.push({
                        text: element.expense_type.name,
                        style: "tableOfExpensesBody"
                    });
                    temp.push({
                        text: element.receipt_number,
                        style: "tableOfExpensesBody"
                    });
                    temp.push({
                        text: element.vendor == null ? "" : element.vendor.name,
                        style: "tableOfExpensesBody"
                    });
                    temp.push({
                        text: this.mixin_formatNumber(element.amount),
                        style: { fontSize: 9, alignment: "right" }
                    });

                    table_rows.push(temp);
                });

                let pdfMake = require("pdfmake/build/pdfmake.js");
                if (pdfMake.vfs == undefined) {
                    let pdfFonts = require("pdfmake/build/vfs_fonts.js");
                    pdfMake.vfs = pdfFonts.pdfMake.vfs;
                }

                pdfMake.fonts = {
                    Roboto: {
                        normal: "Roboto-Regular.ttf",
                        bold: "Roboto-Medium.ttf",
                        italics: "Roboto-Italic.ttf",
                        bolditalics: "Roboto-MediumItalic.ttf"
                    }
                };

                let docDefinition = {
                    // pageSize: 'legal',
                    pageSize: { width: 8.5 * 72, height: 13 * 72 },
                    pageOrientation: "portrait",
                    pageMargins: [0.5 * 72, 0.5 * 72, 0.5 * 72, 0.5 * 72],
                    defaultStyle: {
                        font: "Roboto"
                    },
                    footer: function(currentPage, pageCount) {
                        return {
                            columns: [
                                {
                                    text: `Generated from Twin-Circa Marketing Expense Tracker ${moment().format(
                                        "YYYY-MM-DD HH:mm:ss"
                                    )}`,
                                    width: 500,
                                    margin: [0.5 * 72, 0, 0.5 * 72, 0],
                                    style: "pageFooter"
                                },
                                {
                                    text:
                                        "Page " +
                                        currentPage.toString() +
                                        " of " +
                                        pageCount,
                                    alignment: "right",
                                    style: "pageFooter",
                                    margin: [0, 0, 0.5 * 72, 0]
                                }
                            ]
                        };
                    },
                    content: [
                        {
                            columns: [
                                {
                                    text: this.form.user.full_name,
                                    style: "pageStyle"
                                },
                                {
                                    text: this.form.code,
                                    alignment: "right",
                                    style: "pageStyle"
                                }
                            ]
                        },
                        {
                            columns: [
                                {
                                    text: `PHP ${this.mixin_formatNumber(
                                        this.form.total
                                    )}`,
                                    style: {
                                        fontSize: 18,
                                        color: "#4caf50"
                                    }
                                },
                                {
                                    text: this.form.status.status,
                                    alignment: "right",
                                    style: {
                                        fontSize: 11,
                                        color: "#4caf50"
                                    }
                                }
                            ]
                        },
                        {
                            text: `Period: ${this.form.from} ~ ${this.form.to}`,
                            style: "pageStyle"
                        },
                        {
                            canvas: [
                                {
                                    type: "line",
                                    x1: 0,
                                    y1: 0,
                                    x2: 7.5 * 72,
                                    y2: 0,
                                    lineWidth: 0.5
                                }
                            ],
                            margin: [0, 0.1 * 72, 0, 0.1 * 72]
                        },
                        {
                            text: this.form.description,
                            style: "pageStyle"
                        },
                        {
                            canvas: [
                                {
                                    type: "line",
                                    x1: 0,
                                    y1: 0,
                                    x2: 7.5 * 72,
                                    y2: 0,
                                    lineWidth: 0.5
                                }
                            ],
                            margin: [0, 0.1 * 72, 0, 0.1 * 72]
                        },
                        {
                            style: "tableOfExpenses",
                            table: {
                                headerRows: 1,
                                widths: ["*", "*", "*", "*", "*"],
                                body: table_rows
                            },
                            layout: {
                                hLineWidth: function(i, node) {
                                    return i === 0 ||
                                        i === node.table.body.length
                                        ? 0.5
                                        : 0.5;
                                },
                                vLineWidth: function(i, node) {
                                    return i === 0 ||
                                        i === node.table.widths.length
                                        ? 0.5
                                        : 0.5;
                                },
                                hLineColor: function(i, node) {
                                    return i === 0 ||
                                        i === node.table.body.length
                                        ? "gray"
                                        : "gray";
                                },
                                vLineColor: function(i, node) {
                                    return i === 0 ||
                                        i === node.table.widths.length
                                        ? "gray"
                                        : "gray";
                                },
                                fillColor: function(
                                    rowIndex,
                                    node,
                                    columnIndex
                                ) {
                                    return rowIndex % 2 === 0
                                        ? "#dbdbdb"
                                        : null;
                                }
                            }
                        },
                        {
                            columns: [
                                {
                                    text: "No. of Expenses",
                                    style: "pageStyle"
                                },
                                {
                                    text: data.items.length,
                                    alignment: "right",
                                    style: "pageStyle"
                                }
                            ],
                            margin: [0, 0, 0, 0.1 * 72]
                        },
                        {
                            columns: [
                                {
                                    text: "Total Expenses Amount",
                                    style: "pageStyle"
                                },
                                {
                                    text: this.mixin_formatNumber(
                                        this.form.total
                                    ),
                                    alignment: "right",
                                    style: "pageStyle"
                                }
                            ],
                            margin: [0, 0, 0, 0.1 * 72]
                        },
                        {
                            columns: [
                                {
                                    text: "Paid Amount",
                                    style: "pageStyle"
                                },
                                {
                                    text: this.mixin_formatNumber(
                                        this.form.paid
                                    ),
                                    alignment: "right",
                                    style: "pageStyle"
                                }
                            ],
                            margin: [0, 0, 0, 0.1 * 72]
                        },
                        {
                            columns: [
                                {
                                    text: "Amount to be reimbursed",
                                    style: "pageStyle"
                                },
                                {
                                    text: this.mixin_formatNumber(
                                        this.form.balance
                                    ),
                                    alignment: "right",
                                    style: "pageStyle"
                                }
                            ],
                            margin: [0, 0, 0, 0.1 * 72]
                        }
                    ],
                    styles: {
                        pageStyle: {
                            fontSize: 11
                        },
                        header: {
                            fontSize: 13,
                            bold: false,
                            alignment: "center"
                        },
                        tableSignatures: {
                            margin: [0, 5, 0, 15]
                        },
                        tableSignaturesBody: {
                            fontSize: 10
                        },
                        tableOfExpenses: {
                            margin: [0, 5, 0, 15]
                        },
                        tableOfExpensesHeader: {
                            bold: true,
                            fontSize: 9,
                            color: "white",
                            fillColor: "#4caf50",
                            alignment: "center"
                        },
                        tableOfExpensesBody: {
                            fontSize: 9
                        },
                        signatures: {
                            margin: [0, 5, 0, 15],
                            fontSize: 10
                        },
                        pageFooter: {
                            fontSize: 8
                        }
                    }
                };

                if (action == "print") {
                    // pdfMake.createPdf(docDefinition).print();
                    pdfMake.createPdf(docDefinition).open();
                } else {
                    pdfMake
                        .createPdf(docDefinition)
                        .download("expense_report.pdf");
                }
            });
        },
        loadExpenses() {
            return new Promise((resolve, reject) => {
                axios
                    .get(
                        `/api/data/expenses?expense_report_id=${this.$route.params.id}&only=true&sortBy=date&sortType=asc`
                    )
                    .then(response => {
                        let items = response.data.data;
                        resolve({ items });
                    })
                    .catch(error => {
                        reject();

                        console.log(error);
                        console.log(error.response);

                        _this.mixin_errorDialog(
                            `Error ${error.response.status}`,
                            error.response.statusText
                        );
                    });
            });
        },
        getData() {
            let _this = this;
            axios
                .get(`/api/expense_reports/${_this.$route.params.id}`)
                .then(response => {
                    let data = response.data.data;

                    _this.form.code = data.code;
                    _this.form.reference_no = data.reference_no;
                    _this.form.description = data.description;
                    _this.form.remarks = data.remarks;
                    _this.form.notes = data.notes;
                    _this.form.submission_period = data.submission_period;
                    _this.form.approval_period = data.approval_period;
                    _this.form.from = data.from;
                    _this.form.to = data.to;
                    _this.form.status = data.status;
                    _this.form.is_late_submitted = data.is_late_submitted;
                    _this.form.is_late_approved = data.is_late_approved;

                    _this.form.total = data.total;
                    _this.form.total_reimbursable = data.total_reimbursable;
                    _this.form.paid = data.paid;
                    _this.form.payments = data.payments;
                    _this.form.payment_id = data.payment_id;
                    _this.form.balance = data.balance;

                    _this.form.user = data.user;
                    _this.form.payment = data.payment;
                    // _this.form.expenses = data.expenses;

                    // _this.form.created = data.created;
                    // _this.form.updated = data.updated;
                    // _this.form.deleted = data.deleted;
                    // _this.form.submitted = data.submitted;
                    // _this.form.approved = data.approved;
                    // _this.form.rejected = data.rejected;
                    // _this.form.cancelled = data.cancelled;

                    _this.form.created_at = data.created_at;
                    _this.form.updated_at = data.updated_at;
                    _this.form.deleted_at = data.deleted_at;
                    _this.form.submitted_at = data.submitted_at;
                    _this.form.approved_at = data.approved_at;
                    _this.form.rejected_at = data.rejected_at;
                    _this.form.cancelled_at = data.cancelled_at;

                    _this.form.logs = data.logs;

                    // _this.loadExpenses();

                    _this.getDataFromApi().then(data => {
                        _this.form.expenses = data.items;
                        _this.totalItems = data.total;
                    });

                    _this.loader = false;
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);

                    _this.mixin_errorDialog(
                        `Error ${error.response.status}`,
                        error.response.statusText
                    );

                    _this.loader = false;
                });
        },
        getDataFromApi() {
            let _this = this;

            _this.loading = true;

            return new Promise((resolve, reject) => {
                const { sortBy, sortDesc, page, itemsPerPage } = this.options;

                let range = [_this.form.from, _this.form.to];
                let expense_report_id = _this.$route.params.id;

                axios
                    .get("/api/expenses", {
                        params: {
                            page: page,
                            itemsPerPage: itemsPerPage,
                            start_date: range[0],
                            end_date: range[1] ? range[1] : range[0],
                            expense_report_id: expense_report_id,
                            sortBy: "date",
                            sortType: "asc"
                        }
                    })
                    .then(response => {
                        let items = response.data.data;
                        let total = response.data.meta.total;

                        _this.loading = false;

                        resolve({ items, total });
                    })
                    .catch(error => {
                        console.log(error);
                        console.log(error.response);

                        _this.mixin_errorDialog(
                            `Error ${error.response.status}`,
                            error.response.statusText
                        );

                        _this.loading = false;
                    });
            });
        }
    },
    watch: {
        params: {
            handler() {
                this.getDataFromApi().then(data => {
                    this.form.expenses = data.items;
                    this.totalItems = data.total;
                });
            },
            deep: true
        }
    },
    computed: {
        params(nv) {
            return {
                ...this.options,
                query: this.date_range,
                query: this.expense_report_id
            };
        },
        canEdit() {
            if (
                this.form.approved_at !== null ||
                this.form.cancelled_at !== null ||
                this.form.deleted_at !== null ||
                this.form.rejected_at !== null
            ) {
                return false;
            }

            return true;
        }
    },
    created() {
        // this.$store.dispatch("AUTH_USER");
        this.getData();
    },
    activated() {
        this.getDataFromApi().then(data => {
            this.form.expenses = data.items;
            this.totalItems = data.total;
        });
    }
};
</script>
