<template>
    <div>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <h4 class="title green--text">Expense Reports</h4>

                <v-spacer></v-spacer>

                <v-tooltip bottom>
                    <template
                        v-slot:activator="{ on, attrs }"
                        v-if="mixin_can('add expense reports')"
                    >
                        <v-btn
                            class="elevation-3 mr-2"
                            color="green"
                            :to="{ name: 'user.expense_reports.create' }"
                            dark
                            fab
                            x-small
                            v-bind="attrs"
                            v-on="on"
                        >
                            <v-icon dark>mdi-plus</v-icon>
                        </v-btn>
                    </template>
                    <span>Add New</span>
                </v-tooltip>

                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            class="elevation-3 mr-2"
                            color="green"
                            dark
                            fab
                            x-small
                            @click="onRefresh"
                            v-bind="attrs"
                            v-on="on"
                        >
                            <v-icon dark>mdi-reload</v-icon>
                        </v-btn>
                    </template>
                    <span>Refresh</span>
                </v-tooltip>

                <v-menu
                    transition="scale-transition"
                    :close-on-content-click="false"
                    :nudge-width="200"
                    offset-y
                    left
                    bottom
                >
                    <template v-slot:activator="{ on: menu, attrs }">
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on: tooltip }">
                                <v-btn
                                    class="elevation-3 mr-2"
                                    color="green"
                                    dark
                                    fab
                                    x-small
                                    v-bind="attrs"
                                    v-on="{ ...tooltip, ...menu }"
                                >
                                    <v-icon dark>mdi-filter</v-icon>
                                </v-btn>
                            </template>
                            <span>Filter Data</span>
                        </v-tooltip>
                    </template>

                    <v-card>
                        <v-list>
                            <v-list-item>
                                <DateRangePicker
                                    :preset="preset"
                                    :presets="presets"
                                    :value="date_range"
                                    @updateDates="updateDates"
                                ></DateRangePicker>
                            </v-list-item>
                            <v-list-item>
                                <v-select
                                    v-model="status"
                                    :items="statuses"
                                    label="Status"
                                ></v-select>
                            </v-list-item>

                        </v-list>
                    </v-card>
                </v-menu>

                <v-menu
                    offset-y
                    transition="scale-transition"
                    :close-on-content-click="false"
                    left
                >
                    <template v-slot:activator="{ on: menu, attrs }">
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on: tooltip }">
                                <v-btn
                                    class="elevation-3"
                                    color="green"
                                    dark
                                    fab
                                    x-small
                                    v-bind="attrs"
                                    v-on="{ ...tooltip, ...menu }"
                                >
                                    <v-icon dark
                                        >mdi-view-grid-plus-outline</v-icon
                                    >
                                </v-btn>
                            </template>
                            <span>More Options</span>
                        </v-tooltip>
                    </template>

                    <v-list max-width="250">
                        <v-list-item @click="onSubmit">
                            <v-list-item-icon>
                                <v-icon>mdi-file-send-outline</v-icon>
                            </v-list-item-icon>
                            <v-list-item-subtitle>
                                Submit Report(s)
                            </v-list-item-subtitle>
                        </v-list-item>

                        <v-list-item @click="onDelete">
                            <v-list-item-icon>
                                <v-icon>mdi-close</v-icon>
                            </v-list-item-icon>
                            <v-list-item-subtitle>
                                Cancel Report(s)
                            </v-list-item-subtitle>
                        </v-list-item>

                        <v-list-item @click="onDuplicate">
                            <v-list-item-icon>
                                <v-icon>mdi-content-copy</v-icon>
                            </v-list-item-icon>
                            <v-list-item-subtitle>
                                Duplicate Report(s)
                            </v-list-item-subtitle>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-card-title>
            <v-card-subtitle>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
            </v-card-subtitle>

            <v-card-text>
                <v-data-table
                    :headers="headers"
                    :items="items"
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
                    v-model="selected"
                    show-expand
                    single-expand
                    show-select
                    item-key="id"
                    class="elevation-0"
                >
                    <template v-slot:[`item.status.status`]="{ item }">
                        <v-chip :color="item.status.color" dark small>{{
                            item.status.status
                        }}</v-chip>
                    </template>
                    <template v-slot:[`item.date`]="{ item }">
                        {{ item.from }} ~ {{ item.to }}
                    </template>
                    <template v-slot:expanded-item="{ headers, item }">
                        <td :colspan="headers.length">
                            <v-container>
                                <table>
                                    <tr>
                                        <td>
                                            <strong>Reimbursable Amount</strong>
                                        </td>
                                        <td>:</td>
                                        <td>
                                            {{
                                                mixin_formatNumber(
                                                    item.total_reimbursable
                                                )
                                            }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>Paid</strong></td>
                                        <td>:</td>
                                        <td>
                                            {{ mixin_formatNumber(item.paid) }}
                                        </td>
                                    </tr>
                                    <tr v-if="item.balance > 0">
                                        <td><strong>Balance</strong></td>
                                        <td>:</td>
                                        <td>
                                            {{
                                                mixin_formatNumber(item.balance)
                                            }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>Status</strong></td>
                                        <td>:</td>
                                        <td>
                                            {{ item.status.status }}
                                            ({{ item.status.remarks }})
                                        </td>
                                    </tr>
                                    <tr v-if="item.remarks">
                                        <td><strong>Remarks</strong></td>
                                        <td>:</td>
                                        <td>{{ item.remarks }}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Created</strong></td>
                                        <td>:</td>
                                        <td>
                                            {{
                                                mixin_formatDate(
                                                    item.created_at,
                                                    "YYYY-MM-DD HH:mm:ss"
                                                )
                                            }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>Submitted</strong></td>
                                        <td>:</td>
                                        <td>
                                            {{
                                                mixin_formatDate(
                                                    item.submitted_at,
                                                    "YYYY-MM-DD HH:mm:ss"
                                                )
                                            }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>Approved</strong></td>
                                        <td>:</td>
                                        <td>
                                            {{
                                                mixin_formatDate(
                                                    item.approved_at,
                                                    "YYYY-MM-DD HH:mm:ss"
                                                )
                                            }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>Late Submitted</strong></td>
                                        <td>:</td>
                                        <td>{{ item.is_late_submitted }}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Late Approved</strong></td>
                                        <td>:</td>
                                        <td>{{ item.is_late_approved }}</td>
                                    </tr>
                                </table>
                            </v-container>
                        </td>
                    </template>
                    <template v-slot:[`item.total`]="{ item }">
                        {{ mixin_formatNumber(item.total) }}
                    </template>
                    <template v-slot:[`item.user`]="{ item }">
                        {{
                            item.user.last_name +
                                ", " +
                                item.user.first_name
                        }}
                    </template>
                    <template v-slot:[`item.updated_at`]="{ item }">
                        {{ mixin_getHumanDate(item.updated_at) }}
                    </template>
                    <template v-slot:[`item.actions`]="{ item }">
                        <v-icon small class="mr-2" @click="onShow(item)">
                            mdi-eye
                        </v-icon>
                        <v-icon
                            small
                            class="mr-2"
                            @click="onEdit(item)"
                            v-if="show_edit(item)"
                        >
                            mdi-pencil
                        </v-icon>
                        <v-tooltip
                            bottom
                            v-if="
                                item.is_late_submitted || item.is_late_approved
                            "
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-icon
                                    color="red"
                                    dark
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    mdi-alert-circle-outline
                                </v-icon>
                            </template>
                            <div v-if="item.is_late_submitted">
                                Late Submitted
                            </div>
                            <div v-if="item.is_late_approved">
                                Late Approved
                            </div>
                        </v-tooltip>
                    </template>
                    <template slot="body.append" v-if="items.length > 0">
                        <tr class="green--text hidden-md-and-up">
                            <td class="title">
                                Total: <strong>{{ totalAmount }}</strong>
                            </td>
                        </tr>
                        <tr class="green--text hidden-sm-and-down">
                            <td class="title">Total</td>
                            <td></td>
                            <td></td>
                            <td>
                                <strong>{{ totalAmount }}</strong>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </template>
                </v-data-table>

                <v-row>
                    <v-col cols="12" md="8">
                        <div>
                            <h4 class="green--text">
                                Note:
                            </h4>
                            <h4 class="grey--text">
                                Due of submission of expense reports :
                                {{ $store.getters.settings.submission_period }}
                                ({{ maxDate }})
                            </h4>
                            <h4 class="grey--text">
                                Approval period of expense reports :
                                {{ $store.getters.settings.approval_period }}
                                days upon submission
                            </h4>
                            <h4 class="red--text" v-if="warning">
                                {{ warning }}
                            </h4>
                        </div>
                    </v-col>
                    <v-col cols="12" md="4">
                        <div class="text-right">
                            <v-menu offset-y>
                                <template v-slot:activator="{ attrs, on }">
                                    <v-btn
                                        color="green"
                                        dark
                                        v-bind="attrs"
                                        v-on="on"
                                    >
                                        Print
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item
                                        @click="onPrint('print', 'expense')"
                                    >
                                        <v-list-item-title
                                            >Group by expense</v-list-item-title
                                        >
                                    </v-list-item>
                                   
                                    <v-list-item
                                        @click="onPrint('print', 'date')"
                                    >
                                        <v-list-item-title
                                            >Group by date</v-list-item-title
                                        >
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                            <v-menu offset-y>
                                <template v-slot:activator="{ attrs, on }">
                                    <v-btn
                                        color="green"
                                        dark
                                        v-bind="attrs"
                                        v-on="on"
                                    >
                                        Export to PDF
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item
                                        @click="onPrint('pdf', 'expense')"
                                    >
                                        <v-list-item-title
                                            >Group by expense</v-list-item-title
                                        >
                                    </v-list-item>
                                    
                                    <v-list-item
                                        @click="onPrint('pdf', 'date')"
                                    >
                                        <v-list-item-title
                                            >Group by date</v-list-item-title
                                        >
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </div>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import moment from "moment";
import numeral from "numeral";
import DateRangePicker from "../../../../components/daterangepicker/DateRangePicker";

export default {
    components: { DateRangePicker },
    data() {
        return {
            loading: true,
            warning: null,
            headers: [
                { text: "Report No.", value: "code" },
                { text: "Period", value: "date" },
                { text: "Amount", value: "total", sortable: false },
                { text: "Last Updated", value: "updated_at" },
                { text: "Status", value: "status.status", sortable: false },
                { text: "Actions", value: "actions", sortable: false },
                { text: "", value: "data-table-expand" }
            ],
            items: [],
            user: this.$store.getters.user.id,
            date_range: [
                moment()
                    .startOf("month")
                    .format("YYYY-MM-DD"),
                moment()
                    .endOf("month")
                    .format("YYYY-MM-DD")
            ],
            preset: "",
            presets: [
                "Today",
                "Yesterday",
                "Last 7 Days",
                "Last 30 Days",
                "This Week",
                "This Month",
                "This Quarter",
                "This Year",
                "Last Week",
                "Last Month",
                "Last Quarter",
                "Last Year",
                "Last 5 Years"
            ],
            totalAmount: 0,
            status: "All Expense Reports",
            statuses: [
                "All Expense Reports",
                "Unsubmitted Expense Reports",
                "Submitted Expense Reports",
                "Approved Expense Reports",
                "Rejected Expense Reports",
                "Reimbursed Expense Reports",
                // "Overdue Expense Reports",
                "Cancelled Expense Reports"
                // "Archived Expense Reports"
            ],
            selected: [],
            search: "",
            totalItems: 0,
            options: {
                sortBy: ["created_at"],
                sortDesc: [true],
                page: 1,
                itemsPerPage: 10
            },
            expense_types: [],
            reports_by_user: [],
            reports_by_expense: [],
            reports_by_date: []
        };
    },
    methods: {
        loadExpenseTypes() {
            let _this = this;

            axios
                .get(`/api/data/expense_types?only=true`)
                .then(response => {

                    _this.expense_types = response.data.data;
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);
                });
        },
        loadReportByExpense() {
            return new Promise((resolve, reject) => {
                let _this = this;
                let ids =
                    _this.selected == null
                        ? []
                        : _this.selected.map(item => item.id);

                axios
                    .get(`/api/data/print_report?by_expense_id=true&ids=${ids}`)
                    .then(response => {
                        _this.reports_by_expense = response.data.data;
                        resolve();
                    })
                    .catch(error => {
                        reject();
                        console.log(error);
                        console.log(error.response);
                    });
            });
        },
        loadReportByUser() {
            return new Promise((resolve, reject) => {
                let _this = this;
                let ids =
                    _this.selected == null
                        ? []
                        : _this.selected.map(item => item.id);

                axios
                    .get(
                        `/api/data/print_report?by_user_id=true&ids=${ids}`
                    )
                    .then(response => {
                        _this.reports_by_user = response.data.data;

                        resolve();
                    })
                    .catch(error => {
                        reject();
                        console.log(error);
                        console.log(error.response);
                    });
            });
        },
        loadReportByDate() {
            return new Promise((resolve, reject) => {
                let _this = this;
                let ids =
                    _this.selected == null
                        ? []
                        : _this.selected.map(item => item.id);

                axios
                    .get(`/api/data/print_report?by_date=true&ids=${ids}`)
                    .then(response => {
                        _this.reports_by_date = response.data.data;
                        resolve();
                    })
                    .catch(error => {
                        reject();
                        console.log(error);
                        console.log(error.response);
                    });
            });
        },
        printReportByUser(action) {
            this.loadReportByUser().then(() => {
                let table_columns = [];
                let table_rows = [];
                let table_footer = [];

                table_columns.push({
                    text: "User",
                    style: "tableOfExpensesHeader"
                });
                this.expense_types.forEach(element => {
                    table_columns.push({
                        text: element.name,
                        style: "tableOfExpensesHeader"
                    });
                });
                table_columns.push({
                    text: "Total",
                    style: "tableOfExpensesHeader"
                });

                let temp_table_body = {};
                let temp_expense_types = {};
                let user_id = null;
                let expense_type = null;

                // loop through retrieved records
                this.reports_by_user.forEach(element => {
                    // create new object if current user does not match with previous record
                    if (user_id !== element.user_id) {
                        temp_table_body = {};
                        user_id = element.user_id;

                        // set default values for current row
                        this.expense_types.forEach(expense_type => {
                            temp_expense_types[expense_type.name] = 0;
                        });

                        temp_table_body = {
                            User: `${element.last_name}, ${
                                element.first_name
                            } ${
                                element.middle_name == null
                                    ? ""
                                    : element.middle_name
                            } ${element.suffix == null ? "" : element.suffix}`,
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
                    temp_expense_types[
                        expense_type.name
                    ] = this.mixin_formatNumber(
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
                        table_rows.reduce(
                            (total, item) => total + item["Total"],
                            0
                        )
                    )
                });

                let temp = table_rows.map(item => Object.values(item));

                let itemss = temp.map(item => {
                    let val = [];

                    for (let i = 0; i < item.length; i++) {
                        val.push({
                            text: item[i],
                            style: "tableOfExpensesBody"
                        });
                    }

                    return val;
                });

                let body = [];
                body.push(table_columns);
                itemss.forEach(element => {
                    body.push(element);
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
                            text: ["Expense Summary Report"],
                            style: "header"
                        },
                        {
                            style: "tableOfExpenses",
                            table: {
                                headerRows: 1,
                                widths: table_columns.map(item => "*"),
                                body: body
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
                            style: "tableSignatures",
                            table: {
                                widths: ["*", "*", "*", "*"],
                                body: [
                                    [
                                        {
                                            text: "Prepared by:",
                                            style: "tableSignaturesBody"
                                        },
                                        {
                                            text: "Checked by:",
                                            style: "tableSignaturesBody"
                                        },
                                        {
                                            text: "Approved by:",
                                            style: "tableSignaturesBody"
                                        },
                                        {
                                            text: "Voucher No.",
                                            style: "tableSignaturesBody"
                                        }
                                    ],
                                    [
                                        {
                                            text:
                                                "___________________________________",
                                            style: "tableSignaturesBody"
                                        },
                                        {
                                            text:
                                                "___________________________________",
                                            style: "tableSignaturesBody"
                                        },
                                        {
                                            text:
                                                "___________________________________",
                                            style: "tableSignaturesBody"
                                        },
                                        {
                                            text:
                                                "___________________________________",
                                            style: "tableSignaturesBody"
                                        }
                                    ]
                                ]
                            },
                            layout: "noBorders"
                        }
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
        printReportByDate(action) {
            this.loadReportByDate().then(() => {
                let table_columns = [];
                let table_rows = [];
                let table_footer = [];

                table_columns.push({
                    text: "Date",
                    style: "tableOfExpensesHeader"
                });
                this.expense_types.forEach(element => {
                    table_columns.push({
                        text: element.name,
                        style: "tableOfExpensesHeader"
                    });
                });
                table_columns.push({
                    text: "Total",
                    style: "tableOfExpensesHeader"
                });

                let temp_table_body = {};
                let temp_expense_types = {};
                let expense_date = null;
                let expense_type = null;

                // loop through retrieved records
                this.reports_by_date.forEach(element => {
                    // create new object if current user does not match with previous record
                    if (expense_date !== element.expense_date) {
                        temp_table_body = {};
                        expense_date = element.expense_date;

                        // set default values for current row
                        this.expense_types.forEach(expense_type => {
                            temp_expense_types[expense_type.name] = 0;
                        });

                        temp_table_body = {
                            Date: element.expense_date,
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
                    temp_expense_types[
                        expense_type.name
                    ] = this.mixin_formatNumber(
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
                        table_rows.reduce(
                            (total, item) => total + item["Total"],
                            0
                        )
                    )
                });

                let temp = table_rows.map(item => Object.values(item));

                let itemss = temp.map(item => {
                    let val = [];

                    for (let i = 0; i < item.length; i++) {
                        val.push({
                            text: item[i],
                            style: "tableOfExpensesBody"
                        });
                    }

                    return val;
                });

                let body = [];
                body.push(table_columns);
                itemss.forEach(element => {
                    body.push(element);
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
                            text: ["Expense Summary Report"],
                            style: "header"
                        },
                        {
                            style: "tableOfExpenses",
                            table: {
                                headerRows: 1,
                                widths: table_columns.map(item => "*"),
                                body: body
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
                            style: "tableSignatures",
                            table: {
                                widths: ["*", "*", "*", "*"],
                                body: [
                                    [
                                        {
                                            text: "Prepared by:",
                                            style: "tableSignaturesBody"
                                        },
                                        {
                                            text: "Checked by:",
                                            style: "tableSignaturesBody"
                                        },
                                        {
                                            text: "Approved by:",
                                            style: "tableSignaturesBody"
                                        },
                                        {
                                            text: "Voucher No.",
                                            style: "tableSignaturesBody"
                                        }
                                    ],
                                    [
                                        {
                                            text:
                                                "___________________________________",
                                            style: "tableSignaturesBody"
                                        },
                                        {
                                            text:
                                                "___________________________________",
                                            style: "tableSignaturesBody"
                                        },
                                        {
                                            text:
                                                "___________________________________",
                                            style: "tableSignaturesBody"
                                        },
                                        {
                                            text:
                                                "___________________________________",
                                            style: "tableSignaturesBody"
                                        }
                                    ]
                                ]
                            },
                            layout: "noBorders"
                        }
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
        printReportByExpense(action) {
            this.loadReportByExpense().then(() => {
                let table_columns = [];
                let table_rows = [];
                let table_footer = [];

                table_columns.push({
                    text: "Date",
                    style: "tableOfExpensesHeader"
                });
                table_columns.push({
                    text: "Particulars",
                    style: "tableOfExpensesHeader"
                });
                this.expense_types.forEach(element => {
                    table_columns.push({
                        text: element.name,
                        style: "tableOfExpensesHeader"
                    });
                });
                table_columns.push({
                    text: "Total",
                    style: "tableOfExpensesHeader"
                });

                let temp_table_body = {};
                let temp_expense_types = {};
                let expense_id = null;
                let expense_type = null;

                // loop through retrieved records
                this.reports_by_expense.forEach(element => {
                    // create new object if current user does not match with previous record
                    if (expense_id !== element.expense_id) {
                        temp_table_body = {};
                        expense_id = element.expense_id;

                        // set default values for current row
                        this.expense_types.forEach(expense_type => {
                            temp_expense_types[expense_type.name] = 0;
                        });

                        let details =
                            !element.expense_details ||
                            element.expense_details == "null"
                                ? []
                                : JSON.parse(element.expense_details)
                                      .map(item => {
                                          return (
                                              `${
                                                  item.sub_type_name == null
                                                      ? ""
                                                      : item.sub_type_name +
                                                        "/ "
                                              }${item.description}: ${
                                                  item.total
                                              }` + "\n"
                                          );
                                      })
                                      .join("");

                        temp_table_body = {
                            Date: element.expense_date,
                            Particulars:
                                element.expense_description + "\n" + details,
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
                    temp_expense_types[
                        expense_type.name
                    ] = this.mixin_formatNumber(
                        table_rows.reduce(
                            (total, item) => total + item[expense_type.name],
                            0
                        )
                    );
                });

                // add row for total amounts
                table_rows.push({
                    Total: "Total",
                    Particulars: "",
                    ...temp_expense_types,
                    TotalAmount: this.mixin_formatNumber(
                        table_rows.reduce(
                            (total, item) => total + item["Total"],
                            0
                        )
                    )
                });

                let temp = table_rows.map(item => Object.values(item));

                let itemss = temp.map(item => {
                    let val = [];

                    for (let i = 0; i < item.length; i++) {
                        val.push({
                            text: item[i],
                            style: "tableOfExpensesBody"
                        });
                    }

                    return val;
                });

                let body = [];
                body.push(table_columns);
                itemss.forEach(element => {
                    body.push(element);
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
                            text: ["Expense Summary Report"],
                            style: "header"
                        },
                        {
                            style: "tableOfExpenses",
                            table: {
                                headerRows: 1,
                                widths: table_columns.map(item => "auto"),
                                body: body
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
                            style: "tableSignatures",
                            table: {
                                widths: ["*", "*", "*", "*"],
                                body: [
                                    [
                                        {
                                            text: "Prepared by:",
                                            style: "tableSignaturesBody"
                                        },
                                        {
                                            text: "Recommended by:",
                                            style: "tableSignaturesBody"
                                        },
                                        {
                                            text: "Checked by:",
                                            style: "tableSignaturesBody"
                                        },
                                        {
                                            text: "Approved by:",
                                            style: "tableSignaturesBody"
                                        }
                                    ],
                                    [
                                        {
                                            text:
                                                "___________________________________",
                                            style: "tableSignaturesBody"
                                        },
                                        {
                                            text:
                                                "___________________________________",
                                            style: "tableSignaturesBody"
                                        },
                                        {
                                            text:
                                                "___________________________________",
                                            style: "tableSignaturesBody"
                                        },
                                        {
                                            text:
                                                "___________________________________",
                                            style: "tableSignaturesBody"
                                        }
                                    ]
                                ]
                            },
                            layout: "noBorders"
                        }
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
        onPrint(action, group_by) {
            if (this.selected.length == 0) {
                this.mixin_errorDialog("Error", "No items selected");
                return;
            }

            switch (group_by) {
                case "user":
                    this.printReportByUser(action);
                    break;
                case "date":
                    this.printReportByDate(action);
                    break;
                default:
                    this.printReportByExpense(action);
                    break;
            }
        },
        updateDates(e) {
            this.date_range = e;
        },
        getDataFromApi() {
            let _this = this;

            _this.loading = true;

            return new Promise((resolve, reject) => {
                const { sortBy, sortDesc, page, itemsPerPage } = this.options;

                let search = _this.search.trim().toLowerCase();
                let status = _this.status;
                let user_id = _this.user;
                let range = _this.date_range;

                axios
                    .get("/api/expense_reports", {
                        params: {
                            sortBy: sortBy[0],
                            sortType: sortDesc[0] ? "desc" : "asc",
                            page: page,
                            itemsPerPage: itemsPerPage,
                            user_id: user_id,
                            status: status,
                            start_date: range[0],
                            end_date: range[1] ? range[1] : range[0],
                            admin_page: false
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
        },
        onRefresh() {
            Object.assign(this.$data, this.$options.data.apply(this));

            this.selected = [];
        },
        onShow(item) {
            this.$router.push({
                name: "user.expense_reports.show",
                params: { id: item.id }
            });
        },
        onEdit(item) {
            if (item.status.status == "Approved") {
                this.$dialog.message.error("Report has been approved", {
                    position: "top-right",
                    timeout: 2000
                });
                return;
            }

            if (item.status.status == "Cancelled") {
                this.$dialog.message.error("Report has been cancelled", {
                    position: "top-right",
                    timeout: 2000
                });
                return;
            }

            if (item.status.status == "Paid/Reimbursed") {
                this.$dialog.message.error(
                    "Paid/reimbursed expense report can't be edited",
                    {
                        position: "top-right",
                        timeout: 2000
                    }
                );
                return;
            }

            this.$router.push({
                name: "user.expense_reports.edit",
                params: { id: item.id }
            });
        },
        onDelete() {
            let _this = this;

            if (
                this.selected
                    .map(item => item.status.status)
                    .includes("Cancelled")
            ) {
                this.$dialog.message.error(
                    "Report has already been cancelled",
                    {
                        position: "top-right",
                        timeout: 2000
                    }
                );
                return;
            }

            if (
                this.selected
                    .map(item => item.status.status)
                    .includes("Paid/Reimbursed")
            ) {
                this.$dialog.message.error(
                    "Paid/reimbursed expense reports can't be cancelled",
                    {
                        position: "top-right",
                        timeout: 2000
                    }
                );
                return;
            }

            if (_this.selected.length == 0) {
                this.$dialog.message.error("No item(s) selected", {
                    position: "top-right",
                    timeout: 2000
                });
                return;
            }

            // let notes = await this.$dialog.prompt({
            //     text: "Please add note",
            //     title: "Do you want to cancel expense report(s)?"
            // });

            // if (notes) {
            //     axios
            //         .delete(`/api/expense_reports/${_this.selected[0].id}`, {
            //             params: {
            //                 ids: _this.selected.map(item => {
            //                     return item.id;
            //                 }),
            //                 notes: notes
            //             }
            //         })
            //         .then(function(response) {
            //             _this.$dialog.message.success(
            //                 "Expense report(s) cancelled successfully",
            //                 {
            //                     position: "top-right",
            //                     timeout: 2000
            //                 }
            //             );
            //             _this.getDataFromApi().then(data => {
            //                 _this.items = data.items;
            //                 _this.totalItems = data.total;
            //             });

            //             _this.selected = [];
            //         })
            //         .catch(function(error) {
            //             console.log(error);
            //             console.log(error.response);

            //             _this.mixin_errorDialog(
            //                 `Error ${error.response.status}`,
            //                 error.response.statusText
            //             );
            //         });
            // }

            // // return;

            this.$confirm("Do you want to cancel expense report(s)?").then(
                res => {
                    if (res) {
                        axios
                            .delete(
                                `/api/expense_reports/${_this.selected[0].id}`,
                                {
                                    params: {
                                        ids: _this.selected.map(item => {
                                            return item.id;
                                        })
                                    }
                                }
                            )
                            .then(function(response) {
                                _this.$dialog.message.success(
                                    "Expense report(s) cancelled successfully",
                                    {
                                        position: "top-right",
                                        timeout: 2000
                                    }
                                );
                                _this.getDataFromApi().then(data => {
                                    _this.items = data.items;
                                    _this.totalItems = data.total;
                                });

                                // _this.$store.dispatch("AUTH_USER");

                                _this.selected = [];
                            })
                            .catch(function(error) {
                                console.log(error);
                                console.log(error.response);

                                _this.mixin_errorDialog(
                                    `Error ${error.response.status}`,
                                    error.response.statusText
                                );
                            });
                    }
                }
            );
        },
        // onUpdate(action, method) {
        //     let _this = this;

        //     if (_this.selected.length == 0) {
        //         this.$dialog.message.error("No item(s) selected", {
        //             position: "top-right",
        //             timeout: 2000
        //         });
        //         return;
        //     }

        //     if (
        //         action == "submit" &&
        //         !this.selected
        //             .map(item => item.status.status)
        //             .includes("Unsubmitted")
        //     ) {
        //         this.$dialog.message.error("Action can't be completed", {
        //             position: "top-right",
        //             timeout: 2000
        //         });
        //         return;
        //     }

        //     if (
        //         action == "submit" &&
        //         this.selected
        //             .map(item => item.status.status)
        //             .includes("Approved")
        //     ) {
        //         this.$dialog.message.error("Report has been approved", {
        //             position: "top-right",
        //             timeout: 2000
        //         });
        //         return;
        //     }

        //     if (
        //         action == "submit" &&
        //         this.selected
        //             .map(item => item.status.status)
        //             .includes("Reimbursed")
        //     ) {
        //         this.$dialog.message.error("Report has been paid/reimbursed", {
        //             position: "top-right",
        //             timeout: 2000
        //         });
        //         return;
        //     }

        //     if (
        //         action == "submit" &&
        //         this.selected
        //             .map(item => item.status.status)
        //             .includes("Cancelled")
        //     ) {
        //         this.$dialog.message.error("Report has been cancelled", {
        //             position: "top-right",
        //             timeout: 2000
        //         });
        //         return;
        //     }

        //     if (action == "submit") {
        //         let settings = this.$store.getters.settings;

        //         let start = moment().startOf("day");
        //         let end = moment().endOf("day");

        //         let expense_min_date = moment.min(
        //             this.selected.map(item => moment(item.from))
        //         );
        //         let expense_max_date = moment.max(
        //             this.selected.map(item => moment(item.to))
        //         );

        //         if (settings) {
        //             switch (settings.submission_period) {
        //                 case "Weekly":
        //                     start = moment()
        //                         .startOf("week")
        //                         .format("YYYY-MM-DD");
        //                     end = moment()
        //                         .endOf("week")
        //                         .format("YYYY-MM-DD");
        //                     break;
        //                 case "Monthly":
        //                     start = moment()
        //                         .startOf("month")
        //                         .format("YYYY-MM-DD");
        //                     end = moment()
        //                         .endOf("month")
        //                         .format("YYYY-MM-DD");
        //                     break;
        //                 default:
        //                     start = moment()
        //                         .startOf("day")
        //                         .format("YYYY-MM-DD");
        //                     end = moment()
        //                         .endOf("day")
        //                         .format("YYYY-MM-DD");
        //                     break;
        //             }
        //         }

        //         if (
        //             !moment(
        //                 moment(expense_min_date).format("YYYY-MM-DD")
        //             ).isBetween(start, end, undefined, "[]") ||
        //             !moment(
        //                 moment(expense_max_date).format("YYYY-MM-DD")
        //             ).isBetween(start, end, undefined, "[]")
        //         ) {
        //             this.mixin_errorDialog(
        //                 "Error",
        //                 "Submission of expenses beyond due date is not allowed"
        //             );
        //             return;
        //         }
        //     }

        //     if (
        //         action == "approve" &&
        //         this.selected
        //             .map(item => item.status.status)
        //             .includes("Approved")
        //     ) {
        //         this.$dialog.message.error("Report has been approved", {
        //             position: "top-right",
        //             timeout: 2000
        //         });
        //         return;
        //     }

        //     if (
        //         action == "approve" &&
        //         this.selected
        //             .map(item => item.status.status)
        //             .includes("Cancelled")
        //     ) {
        //         this.$dialog.message.error("Report has been cancelled", {
        //             position: "top-right",
        //             timeout: 2000
        //         });
        //         return;
        //     }

        //     if (
        //         action == "approve" &&
        //         this.selected
        //             .map(item => item.status.status)
        //             .includes("Reimbursed")
        //     ) {
        //         this.$dialog.message.error("Report has been paid/reimbursed", {
        //             position: "top-right",
        //             timeout: 2000
        //         });
        //         return;
        //     }

        //     if (action == "approve") {
        //         let today = moment().format("YYYY-MM-DD");
        //         // return;
        //         let period = this.$store.getters.settings.approval_period;
        //         let submission_period = moment
        //             .min(this.selected.map(item => moment(item.submitted_at)))
        //             .format("YYYY-MM-DD");
        //         let last_approval_date = moment(submission_period)
        //             .add(period, "days")
        //             .format("YYYY-MM-DD");

        //         if (
        //             !moment(today).isBetween(
        //                 submission_period,
        //                 last_approval_date,
        //                 undefined,
        //                 "[]"
        //             )
        //         ) {
        //             this.mixin_errorDialog(
        //                 "Error",
        //                 "Approval of reports beyond due date is not allowed"
        //             );
        //             return;
        //         }
        //     }

        //     if (
        //         action == "cancel" &&
        //         this.selected
        //             .map(item => item.status.status)
        //             .includes("Cancelled")
        //     ) {
        //         this.$dialog.message.error("Report has been cancelled", {
        //             position: "top-right",
        //             timeout: 2000
        //         });
        //         return;
        //     }

        //     if (
        //         action == "reject" &&
        //         this.selected
        //             .map(item => item.status.status)
        //             .includes("Rejected")
        //     ) {
        //         this.$dialog.message.error("Report has been rejected", {
        //             position: "top-right",
        //             timeout: 2000
        //         });
        //         return;
        //     }

        //     this.$confirm(`Do you want to ${action} expense report(s)?`).then(
        //         res => {
        //             if (res) {
        //                 let ids = _this.selected.map(item => {
        //                     return item.id;
        //                 });

        //                 axios({
        //                     method: method,
        //                     url: `/api/expense_reports/${_this.selected[0].id}`,
        //                     data: {
        //                         ids: ids,
        //                         action: action
        //                     }
        //                 })
        //                     .then(function(response) {
        //                         _this.$dialog.message.success(
        //                             response.data.message,
        //                             {
        //                                 position: "top-right",
        //                                 timeout: 2000
        //                             }
        //                         );
        //                         _this.getDataFromApi().then(data => {
        //                             _this.items = data.items;
        //                             _this.totalItems = data.total;
        //                         });

        //                         _this.selected = [];
        //                     })
        //                     .catch(function(error) {
        //                         console.log(error);
        //                         console.log(error.response);

        //                         _this.mixin_errorDialog(
        //                             `Error ${error.response.status}`,
        //                             error.response.statusText
        //                         );
        //                     });
        //             }
        //         }
        //     );
        // },
        // ------------------------------------------------------------------------------------------------------------------
        //
        // ------------------------------------------------------------------------------------------------------------------
        onUpdate(action, method) {
            let _this = this;

            this.$confirm(`Do you want to ${action} expense report(s)?`).then(
                res => {
                    if (res) {
                        let ids = _this.selected.map(item => {
                            return item.id;
                        });

                        axios({
                            method: method,
                            url: `/api/expense_reports/${_this.selected[0].id}`,
                            data: {
                                ids: ids,
                                action: action
                            }
                        })
                            .then(function(response) {
                                _this.mixin_successDialog(
                                    "Success",
                                    response.data.message
                                );

                                _this.getDataFromApi().then(data => {
                                    _this.items = data.items;
                                    _this.totalItems = data.total;
                                });

                                // _this.$store.dispatch("AUTH_USER");

                                _this.selected = [];
                            })
                            .catch(function(error) {
                                console.log(error);
                                console.log(error.response);

                                _this.mixin_errorDialog(
                                    error.response.data.status,
                                    error.response.data.message
                                );
                            });
                    }
                }
            );
        },
        onSubmit() {
            if (this.selected.length == 0) {
                this.mixin_errorDialog("Error", "No item(s) selected");
                return;
            }

            this.onUpdate("submit", "put");
        },
        onReview() {
            this.onUpdate("review", "put");
        },
        onDuplicate() {
            this.onUpdate("duplicate", "put");
        },
        show_edit(item) {
            // let item = null;

            if (!this.mixin_can("edit expense reports")) {
                return false;
            }

            if (item) {
                if (!item.approved_at) {
                    return false;
                } else if (!item.cancelled_at) {
                    return false;
                } else if (!item.deleted_at) {
                    return false;
                }
            }

            return true;
        }
    },
    watch: {
        params: {
            handler() {
                this.getDataFromApi().then(data => {
                    this.items = data.items;
                    this.totalItems = data.total;
                });
            },
            deep: true
        },
        items() {
            this.totalAmount = this.mixin_formatNumber(
                this.items.reduce((total, item) => total + item.total, 0)
            );
        },
        selected() {
            if (
                this.selected
                    .map(item => item.status.status)
                    .includes("Submitted")
            ) {
                let period = this.$store.getters.settings.approval_period;
                let submission_period = moment
                    .min(this.selected.map(item => moment(item.submitted_at)))
                    .format("YYYY-MM-DD");
                let last_approval_date = moment(submission_period)
                    .add(period, "days")
                    .format("YYYY-MM-DD");

                this.warning = `Last Approval Date: ${last_approval_date}; First Submitted Report: ${submission_period}`;
            } else if (this.selected.length == 0) {
                this.warning = null;
            }
        }
    },
    computed: {
        params(nv) {
            return {
                ...this.options,
                query: this.search,
                query: this.status,
                query: this.user,
                query: this.date_range
            };
        },
        minDate() {
            let settings = this.$store.getters.settings;

            if (settings) {
                switch (settings.submission_period) {
                    case "Weekly":
                        return moment()
                            .startOf("week")
                            .format("YYYY-MM-DD");
                        break;
                    case "Monthly":
                        return moment()
                            .startOf("month")
                            .format("YYYY-MM-DD");
                        break;
                    default:
                        return moment()
                            .startOf("day")
                            .format("YYYY-MM-DD");
                        break;
                }
            }

            return moment()
                .startOf("day")
                .format("YYYY-MM-DD");
        },
        maxDate() {
            let settings = this.$store.getters.settings;
            let today = moment().format("YYYY-MM-DD");
            let maxDate = moment()
                .endOf("day")
                .format("YYYY-MM-DD");

            if (settings) {
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

                return maxDate;

                // return moment(today).isSameOrBefore(maxDate) ? today : maxDate;
            }

            return today;
        }
    },
    created() {
        this.$store.dispatch("AUTH_USER");
        // this.loadUsers();
        this.loadExpenseTypes();
    }
};
</script>
