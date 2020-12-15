<template>
    <div>
        <!-- <v-app-bar app color="white" flat>
            <v-container class="py-0 fill-height">
                <v-menu right bottom offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on">
                            <v-icon>mdi-account-circle</v-icon>
                        </v-btn>
                    </template>

                    <v-list>
                        <v-list-item v-for="n in 5" :key="n" @click="() => {}">
                            <v-list-item-title
                                >Option {{ n }}</v-list-item-title
                            >
                        </v-list-item>
                    </v-list>
                </v-menu>

                <v-btn v-for="link in links" :key="link" text>
                    {{ link }}
                </v-btn>

                <v-spacer></v-spacer>
            </v-container>
        </v-app-bar> -->

        <!-- <v-app-bar app color="white" flat>
            <v-avatar
                :color="
                    $vuetify.breakpoint.smAndDown
                        ? 'grey darken-1'
                        : 'transparent'
                "
                size="32"
            ></v-avatar>

            <v-tabs centered class="ml-n9" color="grey darken-1">
                <v-tab v-for="link in links" :key="link">
                    {{ link }}
                </v-tab>
            </v-tabs>

            <v-avatar
                class="hidden-sm-and-down"
                color="grey darken-1 shrink"
                size="32"
            ></v-avatar>
        </v-app-bar> -->

        <!-- ------------------------------------------------------------------------------------------------------------ -->

        <v-main>
            <v-form ref="form">
                <v-container>
                    <v-btn color="green" @click="printByExpense('print')"
                        >Group By Expense</v-btn
                    >
                    <v-btn color="red" @click="printByEmployee('print')"
                        >Group By Employee</v-btn
                    >
                    <v-btn color="blue" @click="printByDate('print')"
                        >Group By Date</v-btn
                    >
                    <v-btn color="orange" @click="printPDFMAKE('print')"
                        >PDFMAKE</v-btn
                    >

                    <v-card class="mx-auto mb-4" flat>
                        <v-list-item three-line>
                            <v-list-item-content>
                                <div class="overline green--text mb-4">
                                    BASIC DETAILS
                                </div>
                                <!-- <v-list-item-title class="headline mb-1">
                                    Basic Information
                                </v-list-item-title> -->
                                <v-list-item-subtitle>
                                    Note: Lorem ipsum dolor sit, amet
                                    consectetur adipisicing elit. Explicabo enim
                                    eum similique nihil a, repellat, fugiat
                                    debitis placeat, illo ipsa molestias quaerat
                                    excepturi. Labore inventore molestiae a
                                    rerum, omnis expedita!
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>

                        <v-container>
                            <v-text-field label="Date"></v-text-field>
                            <v-text-field label="Employee"></v-text-field>
                            <v-text-field label="Vendor"></v-text-field>
                            <v-text-field label="Receipt No."></v-text-field>
                        </v-container>
                    </v-card>
                </v-container>
            </v-form>
            <v-container>
                <v-card class="mx-auto mb-4" outlined>
                    <v-list-item three-line>
                        <v-list-item-content>
                            <!-- <div class="overline mb-4">
                                BASIC INFORMATION
                            </div> -->
                            <v-list-item-title class="headline mb-1">
                                Basic Information
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                Note: Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Explicabo enim eum similique
                                nihil a, repellat, fugiat debitis placeat, illo
                                ipsa molestias quaerat excepturi. Labore
                                inventore molestiae a rerum, omnis expedita!
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-container>
                        <v-text-field label="Date"></v-text-field>
                        <v-text-field label="Employee"></v-text-field>
                        <v-text-field label="Vendor"></v-text-field>
                        <v-text-field label="Receipt No."></v-text-field>
                    </v-container>
                </v-card>

                <v-card class="mx-auto mb-4" outlined>
                    <v-list-item three-line>
                        <v-list-item-content>
                            <!-- <div class="overline mb-4">
                                BASIC INFORMATION
                            </div> -->
                            <v-list-item-title class="headline mb-1">
                                Expense Details
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                Note: Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Explicabo enim eum similique
                                nihil a, repellat, fugiat debitis placeat, illo
                                ipsa molestias quaerat excepturi. Labore
                                inventore molestiae a rerum, omnis expedita!
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-container>
                        <v-text-field label="Expense Type"></v-text-field>
                        <v-text-field label="Sub Type"></v-text-field>
                        <v-text-field label="Description"></v-text-field>
                        <v-checkbox
                            v-model="itemize"
                            label="Itemize Expenses"
                        ></v-checkbox>

                        <v-row v-if="itemize">
                            <v-spacer></v-spacer>
                            <v-col class="text-right">
                                <v-btn color="green" outlined rounded text>
                                    New Item
                                </v-btn>
                            </v-col>
                        </v-row>

                        <v-data-table
                            v-if="itemize"
                            :headers="headers"
                            :items="desserts"
                            :items-per-page="5"
                        ></v-data-table>

                        <v-text-field label="Amount"></v-text-field>
                        <v-text-field label="Tax Rate"></v-text-field>
                        <v-text-field label="Tax Amount"></v-text-field>

                        <v-textarea label="Remarks"></v-textarea>
                    </v-container>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green" outlined rounded text>
                            Save
                        </v-btn>
                        <v-btn outlined rounded text>
                            Cancel
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-container>
        </v-main>

        <!-- ------------------------------------------------------------------------------------------------------------ -->

        <!-- <v-main class="grey lighten-3">
            <v-container>
                <v-row>
                    <v-col>
                        <v-sheet min-height="70vh" rounded="lg">
                            <v-card min-height="70vh">
                                <v-card-text>
                                    <v-speed-dial
                                        v-model="fab"
                                        bottom
                                        right
                                        direction="top"
                                        transition="slide-y-reverse-transition"
                                        style="position: absolute"
                                    >
                                        <template v-slot:activator>
                                            <v-btn
                                                v-model="fab"
                                                color="green darken-2"
                                                dark
                                                fab
                                            >
                                                <v-icon v-if="fab">
                                                    mdi-close
                                                </v-icon>
                                                <v-icon v-else>
                                                    mdi-account-circle
                                                </v-icon>
                                            </v-btn>
                                        </template>
                                        <v-btn fab dark small color="green">
                                            <v-icon>mdi-pencil</v-icon>
                                        </v-btn>
                                        <v-btn fab dark small color="indigo">
                                            <v-icon>mdi-plus</v-icon>
                                        </v-btn>
                                        <v-btn fab dark small color="red">
                                            <v-icon>mdi-delete</v-icon>
                                        </v-btn>
                                    </v-speed-dial>
                                </v-card-text>
                            </v-card>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </v-main> -->
    </div>
</template>

<script>
import moment from "moment";
import numeral from "numeral";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

export default {
    data: () => ({
        fab: false,
        links: ["Dashboard", "Expenses", "Reports"],
        itemize: false,
        headers: [
            {
                text: "Dessert (100g serving)",
                align: "start",
                sortable: false,
                value: "name"
            },
            { text: "Calories", value: "calories" },
            { text: "Fat (g)", value: "fat" },
            { text: "Carbs (g)", value: "carbs" },
            { text: "Protein (g)", value: "protein" },
            { text: "Iron (%)", value: "iron" }
        ],
        desserts: [
            {
                name: "Frozen Yogurt",
                calories: 159,
                fat: 6.0,
                carbs: 24,
                protein: 4.0,
                iron: "1%"
            },
            {
                name: "Ice cream sandwich",
                calories: 237,
                fat: 9.0,
                carbs: 37,
                protein: 4.3,
                iron: "1%"
            },
            {
                name: "Eclair",
                calories: 262,
                fat: 16.0,
                carbs: 23,
                protein: 6.0,
                iron: "7%"
            },
            {
                name: "Cupcake",
                calories: 305,
                fat: 3.7,
                carbs: 67,
                protein: 4.3,
                iron: "8%"
            }
        ],
        expense_types: [],
        reports_by_employee: [],
        reports_by_expense: [],
        reports_by_date: []
    }),
    methods: {
        printPDFMAKE(action) {
            let headers = [];
            let items = [];

            let pdfMake = require("pdfmake/build/pdfmake.js");
            if (pdfMake.vfs == undefined) {
                var pdfFonts = require("pdfmake/build/vfs_fonts.js");
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
                pageSize: { width: 13 * 72, height: 8.5 * 72 },
                pageOrientation: "landscape",
                pageMargins: [0.5 * 72, 0.5 * 72, 0.5 * 72, 0.5 * 72],
                defaultStyle: {
                    font: "Roboto"
                },
                footer: function(currentPage, pageCount) {
                    return {
                        columns: [
                            {
                                text:
                                    `Generated from Twin-Circa Marketing Expense Tracker ${moment().format("YYYY-MM-DD HH:mm:ss")}`,
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
                        text: ["Expense Summary Report"],
                        style: "header"
                    },
                    {
                        style: "tableOfExpenses",
                        table: {
                            headerRows: 1,
                            widths: ["*", "*", "*"],
                            body: [
                                [
                                    {
                                        text: "Header 1",
                                        style: "tableOfExpensesHeader"
                                    },
                                    {
                                        text: "Header 2",
                                        style: "tableOfExpensesHeader"
                                    },
                                    {
                                        text: "Header 3",
                                        style: "tableOfExpensesHeader"
                                    }
                                ],
                                [
                                    {
                                        text: "One value goes here",
                                        style: "tableOfExpensesBody"
                                    },
                                    {
                                        text: "One value goes here",
                                        style: "tableOfExpensesBody"
                                    },
                                    {
                                        text: "One value goes here",
                                        style: "tableOfExpensesBody"
                                    }
                                ],
                                [
                                    {
                                        text: "One value goes here",
                                        style: "tableOfExpensesBody"
                                    },
                                    {
                                        text: "One value goes here",
                                        style: "tableOfExpensesBody"
                                    },
                                    {
                                        text: "One value goes here",
                                        style: "tableOfExpensesBody"
                                    }
                                ],
                                [
                                    {
                                        text: "One value goes here",
                                        style: "tableOfExpensesBody"
                                    },
                                    {
                                        text: "One value goes here",
                                        style: "tableOfExpensesBody"
                                    },
                                    {
                                        text: "One value goes here",
                                        style: "tableOfExpensesBody"
                                    }
                                ],
                                [
                                    {
                                        text: "One value goes here",
                                        style: "tableOfExpensesBody"
                                    },
                                    {
                                        text: "One value goes here",
                                        style: "tableOfExpensesBody"
                                    },
                                    {
                                        text: "One value goes here",
                                        style: "tableOfExpensesBody"
                                    }
                                ]
                            ]
                        },
                        layout: {
                            hLineWidth: function(i, node) {
                                return i === 0 || i === node.table.body.length
                                    ? 0.5
                                    : 0.5;
                            },
                            vLineWidth: function(i, node) {
                                return i === 0 || i === node.table.widths.length
                                    ? 0.5
                                    : 0.5;
                            },
                            hLineColor: function(i, node) {
                                return i === 0 || i === node.table.body.length
                                    ? "gray"
                                    : "gray";
                            },
                            vLineColor: function(i, node) {
                                return i === 0 || i === node.table.widths.length
                                    ? "gray"
                                    : "gray";
                            },
                            fillColor: function(rowIndex, node, columnIndex) {
                                return rowIndex % 2 === 0 ? "#dbdbdb" : null;
                            }
                        }
                    },
                    {
                        style: "tableSignatures",
                        table: {
                            widths: ["*", "*", "*", "*"],
                            body: [
                                [
                                    {
                                        text: "Prepared By",
                                        style: "tableSignaturesBody"
                                    },
                                    {
                                        text: "Prepared By",
                                        style: "tableSignaturesBody"
                                    },
                                    {
                                        text: "Prepared By",
                                        style: "tableSignaturesBody"
                                    },
                                    {
                                        text: "Prepared By",
                                        style: "tableSignaturesBody"
                                    },
                                ],
                                [
                                    {
                                        text: "___________________________________",
                                        style: "tableSignaturesBody"
                                    },
                                    {
                                        text: "___________________________________",
                                        style: "tableSignaturesBody"
                                    },
                                    {
                                        text: "___________________________________",
                                        style: "tableSignaturesBody"
                                    },
                                    {
                                        text: "___________________________________",
                                        style: "tableSignaturesBody"
                                    },
                                ],
                            ]
                        },
                        layout: 'noBorders'
                    },
                ],
                styles: {
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
                        fontSize: 11,
                        color: "white",
                        fillColor: "#4caf50",
                        alignment: "center"
                    },
                    tableOfExpensesBody: {
                        fontSize: 10
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
            // pdfMake.createPdf(docDefinition).download('optionalName.pdf');
            // pdfMake.createPdf(docDefinition).print();
            pdfMake.createPdf(docDefinition).open();
        },
        loadStatistics(start, end, employee_id) {
            let _this = this;

            axios
                .get(
                    `/api/data/statistics?start_date=${moment(
                        "2020-01-01"
                    ).format("YYYY-MM-DD")}&end_date=${moment(
                        "2020-12-31"
                    ).format("YYYY-MM-DD")}&employee_id=${employee_id}`
                )
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);
                });
        },
        loadExpenseTypes() {
            let _this = this;

            axios
                .get(`/api/data/expense_types?only=true`)
                .then(response => {
                    console.log("expense types", response);

                    _this.expense_types = response.data.data;
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);
                });
        },
        loadReportByExpense() {
            let _this = this;

            axios
                .get(`/api/data/print_report?by_expense_id=true`)
                .then(response => {
                    console.log("report by expense", response);
                    _this.reports_by_expense = response.data.data;
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);
                });
        },
        loadReportByEmployee() {
            let _this = this;

            axios
                .get(`/api/data/print_report?by_employee_id=true`)
                .then(response => {
                    console.log("report by employee", response);
                    _this.reports_by_employee = response.data.data;
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);
                });
        },
        loadReportByDate() {
            let _this = this;

            axios
                .get(`/api/data/print_report?by_date=true`)
                .then(response => {
                    console.log("report by date", response);
                    _this.reports_by_date = response.data.data;
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);
                });
        },
        printByExpense(action) {
            // -------------------------------------------------------------------------------------
            // Initialize variables
            // -------------------------------------------------------------------------------------

            let pdfName = "Expense Summary Report";
            let table_columns = [];
            let table_rows = [];
            let table_footer = [];

            // -------------------------------------------------------------------------------------
            // JSPDF Basic Configuration
            // -------------------------------------------------------------------------------------

            let doc = new jsPDF({
                orientation: "landscape",
                unit: "in",
                format: [13, 8.5]
            });

            // -------------------------------------------------------------------------------------
            // Set Table Header Data
            // -------------------------------------------------------------------------------------

            table_columns.push("Date");
            table_columns.push("Particulars");
            this.expense_types.forEach(element => {
                table_columns.push(element.name);
            });
            table_columns.push("Total");

            // -------------------------------------------------------------------------------------
            // Set Table Body Data
            // -------------------------------------------------------------------------------------

            // -------------------------------------------------------------------------------------
            // Set Table Footer Data
            // -------------------------------------------------------------------------------------

            // -------------------------------------------------------------------------------------
            // Page Header
            // -------------------------------------------------------------------------------------

            doc.setFontSize(14)
                .setTextColor(0, 0, 0)
                .text("Expense Summary Report", 6.75, 0.7, "center");

            // -------------------------------------------------------------------------------------
            // Page Body
            // -------------------------------------------------------------------------------------

            doc.autoTable({
                styles: { fontSize: 10 },
                columns: table_columns,
                body: table_rows,
                showHead: "everyPage",
                headStyles: { halign: "center", fillColor: [76, 175, 10] },
                startY: 0.9,
                margin: { left: 0.5 },
                columnStyles: { 1: { halign: "right" } }
            });

            doc.setFontSize(10)
                .setTextColor(0, 0, 0)
                .text("Prepared by", 0.5, doc.lastAutoTable.finalY + 0.4);

            doc.setLineWidth(0.01);
            doc.line(
                0.5,
                doc.lastAutoTable.finalY + 0.8,
                3.0,
                doc.lastAutoTable.finalY + 0.8
            );

            doc.setFontSize(10)
                .setTextColor(0, 0, 0)
                .text("Recommended by", 3.5, doc.lastAutoTable.finalY + 0.4);

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

            // -------------------------------------------------------------------------------------
            // Page Footer
            // -------------------------------------------------------------------------------------

            doc.setFontSize(8)
                .setTextColor(0, 0, 0)
                .text(
                    `Generated from Twin-Circa Marketing Expense Tracker ${moment().format(
                        "YYYY-MM-DD HH:mm:ss"
                    )}`,
                    0.5,
                    doc.internal.pageSize.height - 0.5
                );

            // page number
            let pages = doc.internal.getNumberOfPages();
            let pageWidth = doc.internal.pageSize.width; //Optional
            let pageHeight = doc.internal.pageSize.height; //Optional
            doc.setFontSize(8); //Optional
            for (let j = 1; j < pages + 1; j++) {
                let horizontalPos = pageWidth - 0.5; //Can be fixed number
                let verticalPos = pageHeight - 0.5; //Can be fixed number
                doc.setPage(j);
                doc.text(`Page ${j} of ${pages}`, horizontalPos, verticalPos, {
                    align: "right"
                }); //Optional text styling});
            }
            // end of page number

            // -------------------------------------------------------------------------------------
            // Print / Export Report
            // -------------------------------------------------------------------------------------

            if (action == "print") {
                // doc.autoPrint();
                doc.output("dataurlnewwindow");
                // doc.autoPrint({ variant: "non-conform" });
            } else {
                doc.save(`${pdfName}.pdf`);
            }
        },
        printByEmployee(action) {
            // -------------------------------------------------------------------------------------
            // Initialize variables
            // -------------------------------------------------------------------------------------

            let pdfName = "Expense Summary Report";
            let table_columns = [];
            let table_rows = [];
            let table_footer = [];
            let paper_size = [];

            // -------------------------------------------------------------------------------------
            // JSPDF Basic Configuration
            // -------------------------------------------------------------------------------------

            let doc = new jsPDF({
                orientation: "landscape",
                unit: "in",
                format: [13, 8.5]
            });

            // -------------------------------------------------------------------------------------
            // Set Table Header Data
            // -------------------------------------------------------------------------------------

            table_columns.push("Employee");
            this.expense_types.forEach(element => {
                table_columns.push(element.name);
            });
            table_columns.push("Total");

            // -------------------------------------------------------------------------------------
            // Set Table Body Data
            // -------------------------------------------------------------------------------------

            let temp_table_body = {};
            let temp_expense_types = {};
            let employee_id = null;
            let expense_type = null;

            // loop through retrieved records
            this.reports_by_employee.forEach(element => {
                // create new object if current employee does not match with previous record
                if (employee_id !== element.employee_id) {
                    temp_table_body = {};
                    employee_id = element.employee_id;

                    // set default values for current row
                    this.expense_types.forEach(expense_type => {
                        temp_expense_types[expense_type.name] = 0;
                    });

                    temp_table_body = {
                        Employee: `${element.last_name}, ${element.first_name} ${element.middle_name} ${element.suffix}`,
                        ...temp_expense_types,
                        Total: 0
                    };

                    table_rows.push(temp_table_body);
                }

                // set expense type amount
                temp_table_body[element.expense_type_name] =
                    element.expense_amount;

                // sum of all expense types
                if ("Total" in temp_table_body) {
                    let total = 0;

                    this.expense_types.forEach(item => {
                        total += temp_table_body[item.name];
                    });

                    temp_table_body["Total"] = total;
                }
            });

            // sum total amount per expense type
            this.expense_types.forEach(expense_type => {
                temp_expense_types[expense_type.name] = this.mixin_formatNumber(
                    table_rows.reduce(
                        (total, item) => total + item[expense_type.name],
                        0
                    )
                );
            });

            // add row for total amounts
            table_rows.push({
                Total: "Total",
                ...temp_expense_types,
                TotalAmount: this.mixin_formatNumber(
                    table_rows.reduce((total, item) => total + item["Total"], 0)
                )
            });

            console.log(table_rows);

            // -------------------------------------------------------------------------------------
            // Set Table Footer Data
            // -------------------------------------------------------------------------------------

            // -------------------------------------------------------------------------------------
            // Page Header
            // -------------------------------------------------------------------------------------

            doc.setFontSize(14)
                .setTextColor(0, 0, 0)
                .text("Expense Summary Report", 6.75, 0.7, "center");

            // -------------------------------------------------------------------------------------
            // Page Body
            // -------------------------------------------------------------------------------------

            doc.autoTable({
                styles: { fontSize: 10, halign: "right" },
                columns: table_columns,
                body: table_rows.map(item => Object.values(item)),
                showHead: "everyPage",
                headStyles: { halign: "center", fillColor: [76, 175, 10] },
                startY: 0.9,
                margin: { left: 0.5 },
                columnStyles: { 0: { halign: "left" } }
            });

            doc.setFontSize(10)
                .setTextColor(0, 0, 0)
                .text("Prepared by", 0.5, doc.lastAutoTable.finalY + 0.4);

            doc.setLineWidth(0.01);
            doc.line(
                0.5,
                doc.lastAutoTable.finalY + 0.8,
                3.0,
                doc.lastAutoTable.finalY + 0.8
            );

            doc.setFontSize(10)
                .setTextColor(0, 0, 0)
                .text("Checked by", 3.5, doc.lastAutoTable.finalY + 0.4);

            doc.setLineWidth(0.01);
            doc.line(
                3.5,
                doc.lastAutoTable.finalY + 0.8,
                6.0,
                doc.lastAutoTable.finalY + 0.8
            );

            doc.setFontSize(10)
                .setTextColor(0, 0, 0)
                .text("Approved by", 6.5, doc.lastAutoTable.finalY + 0.4);

            doc.setLineWidth(0.01);
            doc.line(
                6.5,
                doc.lastAutoTable.finalY + 0.8,
                9.0,
                doc.lastAutoTable.finalY + 0.8
            );

            doc.setFontSize(10)
                .setTextColor(0, 0, 0)
                .text("Voucher No.", 9.5, doc.lastAutoTable.finalY + 0.4);

            doc.setLineWidth(0.01);
            doc.line(
                9.5,
                doc.lastAutoTable.finalY + 0.8,
                12.0,
                doc.lastAutoTable.finalY + 0.8
            );

            // -------------------------------------------------------------------------------------
            // Page Footer
            // -------------------------------------------------------------------------------------

            doc.setFontSize(8)
                .setTextColor(0, 0, 0)
                .text(
                    `Generated from Twin-Circa Marketing Expense Tracker ${moment().format(
                        "YYYY-MM-DD HH:mm:ss"
                    )}`,
                    0.5,
                    doc.internal.pageSize.height - 0.5
                );

            // page number
            let pages = doc.internal.getNumberOfPages();
            let pageWidth = doc.internal.pageSize.width; //Optional
            let pageHeight = doc.internal.pageSize.height; //Optional
            doc.setFontSize(8); //Optional
            for (let j = 1; j < pages + 1; j++) {
                let horizontalPos = pageWidth - 0.5; //Can be fixed number
                let verticalPos = pageHeight - 0.5; //Can be fixed number
                doc.setPage(j);
                doc.text(`Page ${j} of ${pages}`, horizontalPos, verticalPos, {
                    align: "right"
                }); //Optional text styling});
            }
            // end of page number

            // -------------------------------------------------------------------------------------
            // Print / Export Report
            // -------------------------------------------------------------------------------------

            if (action == "print") {
                // doc.autoPrint();
                doc.output("dataurlnewwindow");
                // doc.autoPrint({ variant: "non-conform" });
            } else {
                doc.save(`${pdfName}.pdf`);
            }
        },
        printByDate(action) {
            // -------------------------------------------------------------------------------------
            // Initialize variables
            // -------------------------------------------------------------------------------------

            let pdfName = "Expense Summary Report";
            let table_columns = [];
            let table_rows = [];
            let table_footer = [];
            let paper_size = [];

            // -------------------------------------------------------------------------------------
            // JSPDF Basic Configuration
            // -------------------------------------------------------------------------------------

            let doc = new jsPDF({
                orientation: "landscape",
                unit: "in",
                format: [13, 8.5]
            });

            // -------------------------------------------------------------------------------------
            // Set Table Header Data
            // -------------------------------------------------------------------------------------

            table_columns.push("Date");
            this.expense_types.forEach(element => {
                table_columns.push(element.name);
            });
            table_columns.push("Total");

            // -------------------------------------------------------------------------------------
            // Set Table Body Data
            // -------------------------------------------------------------------------------------

            // -------------------------------------------------------------------------------------
            // Set Table Footer Data
            // -------------------------------------------------------------------------------------

            // -------------------------------------------------------------------------------------
            // Page Header
            // -------------------------------------------------------------------------------------

            doc.setFontSize(14)
                .setTextColor(0, 0, 0)
                .text("Expense Summary Report", 6.75, 0.7, "center");

            // -------------------------------------------------------------------------------------
            // Page Body
            // -------------------------------------------------------------------------------------

            doc.autoTable({
                styles: { fontSize: 10 },
                columns: table_columns,
                body: table_rows,
                showHead: "everyPage",
                headStyles: { halign: "center", fillColor: [76, 175, 10] },
                startY: 0.9,
                margin: { left: 0.5 },
                columnStyles: { 1: { halign: "right" } }
            });

            doc.setFontSize(10)
                .setTextColor(0, 0, 0)
                .text("Prepared by", 0.5, doc.lastAutoTable.finalY + 0.4);

            doc.setLineWidth(0.01);
            doc.line(
                0.5,
                doc.lastAutoTable.finalY + 0.8,
                3.0,
                doc.lastAutoTable.finalY + 0.8
            );

            doc.setFontSize(10)
                .setTextColor(0, 0, 0)
                .text("Checked by", 3.5, doc.lastAutoTable.finalY + 0.4);

            doc.setLineWidth(0.01);
            doc.line(
                3.5,
                doc.lastAutoTable.finalY + 0.8,
                6.0,
                doc.lastAutoTable.finalY + 0.8
            );

            doc.setFontSize(10)
                .setTextColor(0, 0, 0)
                .text("Approved by", 6.5, doc.lastAutoTable.finalY + 0.4);

            doc.setLineWidth(0.01);
            doc.line(
                6.5,
                doc.lastAutoTable.finalY + 0.8,
                9.0,
                doc.lastAutoTable.finalY + 0.8
            );

            doc.setFontSize(10)
                .setTextColor(0, 0, 0)
                .text("Voucher No.", 9.5, doc.lastAutoTable.finalY + 0.4);

            doc.setLineWidth(0.01);
            doc.line(
                9.5,
                doc.lastAutoTable.finalY + 0.8,
                12.0,
                doc.lastAutoTable.finalY + 0.8
            );

            // -------------------------------------------------------------------------------------
            // Page Footer
            // -------------------------------------------------------------------------------------

            doc.setFontSize(8)
                .setTextColor(0, 0, 0)
                .text(
                    `Generated from Twin-Circa Marketing Expense Tracker ${moment().format(
                        "YYYY-MM-DD HH:mm:ss"
                    )}`,
                    0.5,
                    doc.internal.pageSize.height - 0.5
                );

            // page number
            let pages = doc.internal.getNumberOfPages();
            let pageWidth = doc.internal.pageSize.width; //Optional
            let pageHeight = doc.internal.pageSize.height; //Optional
            doc.setFontSize(8); //Optional
            for (let j = 1; j < pages + 1; j++) {
                let horizontalPos = pageWidth - 0.5; //Can be fixed number
                let verticalPos = pageHeight - 0.5; //Can be fixed number
                doc.setPage(j);
                doc.text(`Page ${j} of ${pages}`, horizontalPos, verticalPos, {
                    align: "right"
                }); //Optional text styling});
            }
            // end of page number

            // -------------------------------------------------------------------------------------
            // Print / Export Report
            // -------------------------------------------------------------------------------------

            if (action == "print") {
                // doc.autoPrint();
                doc.output("dataurlnewwindow");
                // doc.autoPrint({ variant: "non-conform" });
            } else {
                doc.save(`${pdfName}.pdf`);
            }
        }
    },
    mounted() {
        this.loadStatistics();

        this.loadExpenseTypes();
        this.loadReportByExpense();
        this.loadReportByEmployee();
        this.loadReportByDate();
    }
};
</script>
