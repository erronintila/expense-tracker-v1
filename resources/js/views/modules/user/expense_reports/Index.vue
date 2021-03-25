<template>
    <div>
        <loader-component v-if="!formDataLoaded"></loader-component>
        <v-card v-else class="elevation-0 pt-0">
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
            </v-card-title>

            <v-card-subtitle>
                <!-- <DateRangePicker
                    :buttonType="true"
                    :buttonText="true"
                    :buttonColor="'grey'"
                    :buttonClass="'ml-0 pl-0'"
                    :preset="preset"
                    :presets="presets"
                    :value="date_range"
                    @updateDates="updateDates"
                >
                </DateRangePicker> -->

                <DateRangePicker
                    ref="dateRangePicker"
                    :dateRange="date_range"
                    @on-change="updateDates"
                >
                    <template v-slot:openDialog="{ on, attrs, dateRangeText }">
                        <v-btn v-bind="attrs" v-on="on" text class="ml-0 pl-0">
                            {{ dateRangeText }}
                        </v-btn>
                    </template>
                </DateRangePicker>
            </v-card-subtitle>

            <v-row class="ml-4 mb-2">
                <v-chip
                    color="green"
                    dark
                    v-if="selected.length > 0"
                    close
                    class="mr-2"
                    small
                    @click:close="selected = []"
                    close-icon="mdi-close"
                >
                    {{ selected.length }} Selected
                </v-chip>

                <v-menu
                    transition="scale-transition"
                    :close-on-content-click="false"
                    :nudge-width="200"
                    offset-y
                    right
                    bottom
                >
                    <template v-slot:activator="{ on: menu, attrs }">
                        <v-chip
                            v-if="status != null"
                            class="mr-2"
                            v-bind="attrs"
                            v-on="menu"
                            small
                        >
                            {{ status }}
                        </v-chip>
                    </template>

                    <v-card>
                        <v-list>
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

                <v-chip
                    close
                    class="mr-2"
                    small
                    @click:close="onRefresh"
                    close-icon="mdi-refresh"
                >
                    Refresh
                </v-chip>

                <v-chip
                    class="mr-2"
                    color="red"
                    dark
                    small
                    close
                    close-icon="mdi-alert"
                    @click:close="showAllUnsubmitted"
                    v-if="totalUnsubmitted > 0"
                >
                    Unsubmitted ({{ totalUnsubmitted }})
                </v-chip>
                <v-chip
                    class="mr-2"
                    color="red"
                    dark
                    close
                    small
                    close-icon="mdi-alert"
                    @click:close="showAllUnapproved"
                    v-if="totalUnapproved > 0"
                >
                    For Approval ({{ totalUnapproved }})
                </v-chip>
            </v-row>

            <v-row v-if="selected.length > 0" class="ml-4">
                <v-chip
                    v-if="isValidSubmit"
                    close
                    class="mr-2"
                    small
                    @click:close="onSubmit"
                    close-icon="mdi-send"
                    color="blue"
                    dark
                >
                    Submit
                </v-chip>
                <v-chip
                    v-if="isValidDelete"
                    close
                    class="mr-2"
                    small
                    @click:close="onDelete"
                    close-icon="mdi-close"
                    color="red"
                    dark
                >
                    Cancel
                </v-chip>
                <v-chip
                    v-if="isValidDuplicate"
                    close
                    class="mr-2"
                    small
                    @click:close="onDuplicate"
                    close-icon="mdi-content-copy"
                >
                    Duplicate
                </v-chip>
            </v-row>

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
                        {{ item.user.last_name + ", " + item.user.first_name }}
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
                            v-if="show_edit(item) && item.deleted_at == null"
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
                    <v-col cols="12" md="4" v-if="isValidPrint">
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
                                        @click="
                                            printReport(
                                                '',
                                                'all_expenses',
                                                false
                                            )
                                        "
                                    >
                                        <v-list-item-title>
                                            Group by expense
                                        </v-list-item-title>
                                    </v-list-item>

                                    <v-list-item
                                        @click="
                                            printReport(
                                                '',
                                                'expenses_by_date',
                                                false
                                            )
                                        "
                                    >
                                        <v-list-item-title>
                                            Group by date
                                        </v-list-item-title>
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
                                        @click="
                                            printReport(
                                                '',
                                                'all_expenses',
                                                true
                                            )
                                        "
                                    >
                                        <v-list-item-title>
                                            Group by expense
                                        </v-list-item-title>
                                    </v-list-item>
                                    <v-list-item
                                        @click="
                                            printReport(
                                                '',
                                                'expenses_by_date',
                                                true
                                            )
                                        "
                                    >
                                        <v-list-item-title>
                                            Group by date
                                        </v-list-item-title>
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
import DateRangePicker from "../../../../components/datepicker/DateRangePicker";
import ExpenseReportDataService from "../../../../services/ExpenseReportDataService";
import ExpenseTypeDataService from "../../../../services/ExpenseTypeDataService";

export default {
    components: { DateRangePicker },
    data() {
        return {
            formDataLoaded: false,
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
            users: [],
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
            totalUnsubmitted: 0,
            totalUnapproved: 0,
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
        showAllUnsubmitted() {
            this.status = "Unsubmitted Expense Reports";
            this.updateDates([
                moment("0000-01-01").format("YYYY-MM-DD"),
                moment().format("YYYY-MM-DD")
            ]);
        },
        showAllUnapproved() {
            this.status = "Submitted Expense Reports";
            this.updateDates([
                moment("0000-01-01").format("YYYY-MM-DD"),
                moment().format("YYYY-MM-DD")
            ]);
        },
        loadTotalCountReportStatus() {
            ExpenseReportDataService.get({
                params: {
                    total_count: true,
                    user_id: this.$store.getters.user.id
                }
            })
                .then(response => {
                    let total = response.data ?? 0;

                    this.totalUnsubmitted = total.data.total_unsubmitted ?? 0;
                    this.totalUnapproved = total.data.total_unapproved ?? 0;
                })
                .catch(error => {
                    this.mixin_showErrors(error);
                });
        },
        loadExpenseTypes() {
            ExpenseTypeDataService.get({
                params: {
                    only: true
                }
            })
                .then(response => {
                    this.expense_types = response.data.data;
                })
                .catch(error => {
                    this.mixin_showErrors(error);
                });
        },

        loadReportData(report_type) {
            return new Promise((resolve, reject) => {
                let ids =
                    this.selected == null
                        ? []
                        : this.selected.map(item => item.id);
                let url = "";

                switch (report_type) {
                    case "all_expenses":
                        url = `/api/data/print_report?by_expense_id=true&ids=${ids}`;
                        break;
                    case "expenses_by_date":
                        url = `/api/data/print_report?by_date=true&ids=${ids}`;
                        break;
                    default:
                        break;
                }

                axios
                    .get(url)
                    .then(response => {
                        let item = response.data.data;
                        resolve(item);
                    })
                    .catch(error => {
                        this.mixin_showErrors(error);
                        reject();
                    });
            });
        },
        printReport(action, report_type, export_as_pdf) {
            let table_columns = [];
            let table_rows = [];
            let table_footer = [];
            let temp_table_body = {};
            let temp_expense_types = {};
            let user_id = null;
            let expense_id = null;
            let expense_date = null;
            let expense_type = null;
            let subheader = "";

            if (this.selected.length == 0) {
                this.mixin_errorDialog("Error", "No items selected");
                return;
            }

            // LOAD EXPENSE REPORT DATA BASED ON REPORT TYPE AND THEN PRINT REPORT
            this.loadReportData(report_type).then(item => {
                let item_dates = item.map(item => new Date(item.expense_date));
                let maxDate = new Date(Math.max.apply(null, item_dates));
                let minDate = new Date(Math.min.apply(null, item_dates));

                switch (report_type) {
                    case "all_expenses":
                        table_columns.push({
                            text: "Date",
                            style: "tableOfExpensesHeader"
                        });
                        table_columns.push({
                            text: "Particulars",
                            style: "tableOfExpensesHeader"
                        });

                        temp_table_body = {};
                        subheader =
                            "Report No. : " +
                            this.selected.map(item => item.code);
                        break;
                    case "expenses_by_date":
                        table_columns.push({
                            text: "Date",
                            style: "tableOfExpensesHeader"
                        });
                        temp_table_body = {};
                        subheader = `Period: ${moment(minDate).format(
                            "YYYY-MM-DD"
                        )} ~ ${moment(maxDate).format("YYYY-MM-DD")}`;
                        break;
                    default:
                        break;
                }

                // ADD ALL EXPENSE TYPES AS PART OF TABLE COLUMNS
                this.expense_types.forEach(element => {
                    table_columns.push({
                        text: element.name,
                        style: "tableOfExpensesHeader"
                    });
                });

                // ADD TOTAL AS THE LAST TABLE COLUMN
                table_columns.push({
                    text: "Total",
                    style: "tableOfExpensesHeader"
                });

                // ITERATE THROUGH RETRIEVED DATA
                item.forEach(element => {
                    let condition = false;

                    if (report_type == "all_expenses") {
                        condition = expense_id !== element.expense_id;
                    } else {
                        condition = expense_date !== element.expense_date;
                    }

                    // CREATE NEW OBJECT IF CURRENT USER DOES NOT MATCH WITH PREVIOUS DATA
                    if (condition) {
                        temp_table_body = {};
                        user_id = element.user_id;
                        expense_date = element.expense_date;
                        expense_id = element.expense_id;

                        // SET ALL EXPENSE TYPES WITH A VALUE OF ZERO
                        this.expense_types.forEach(expense_type => {
                            temp_expense_types[expense_type.name] = 0;
                        });

                        // SET DEFAULT VALUES FOR CURRENT ROW
                        switch (report_type) {
                            case "all_expenses":
                                let details =
                                    !element.expense_details ||
                                    element.expense_details == "null"
                                        ? []
                                        : JSON.parse(element.expense_details)
                                              .map(item => {
                                                  return (
                                                      `${
                                                          item.sub_type_name ==
                                                          null
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
                                        element.expense_description +
                                        "\n" +
                                        details,
                                    ...temp_expense_types,
                                    Total: 0
                                };

                                break;
                            case "expenses_by_date":
                                temp_table_body = {
                                    Date: element.expense_date,
                                    ...temp_expense_types,
                                    Total: 0
                                };
                                break;

                            default:
                                break;
                        }

                        table_rows.push(temp_table_body);
                    }

                    // SET EXPENSE TYPE AMOUNT
                    temp_table_body[element.expense_type_name] =
                        element.expense_amount;

                    // SUM OF ALL ROW DATA
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

                if (report_type == "all_expenses") {
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
                } else {
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
                }

                // GET ALL ROW VALUES
                let temp = table_rows.map(item => Object.values(item));

                // FORMAT ROW VALUES FOR PDFMAKE TABLE BODY
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

                // SET PDFMAKE BODY DATA
                let body = [];
                body.push(table_columns);
                itemss.forEach(element => {
                    body.push(element);
                });

                // LOAD PDFMAKE INSTANCE
                let pdfMake = require("pdfmake/build/pdfmake.js");
                if (pdfMake.vfs == undefined) {
                    let pdfFonts = require("pdfmake/build/vfs_fonts.js");
                    pdfMake.vfs = pdfFonts.pdfMake.vfs;
                }

                // SET PDFMAKE FONTS
                pdfMake.fonts = {
                    Roboto: {
                        normal: "Roboto-Regular.ttf",
                        bold: "Roboto-Medium.ttf",
                        italics: "Roboto-Italic.ttf",
                        bolditalics: "Roboto-MediumItalic.ttf"
                    }
                };

                let signatureLabels = [
                    "Prepared by:",
                    "Recommended by:",
                    "Checked by:",
                    "Approved by:"
                ];

                if (report_type != "all_expenses") {
                    signatureLabels = [
                        "Prepared by:",
                        "Checked by:",
                        "Approved by:",
                        "Voucher No."
                    ];
                }

                let signatures = signatureLabels.map(item => {
                    return {
                        text: `${item}

                        ___________________________________`,
                        style: "tableSignaturesBody"
                    };
                });

                // SET PRINT FORMAT
                let docDefinition = this.printFormat(
                    subheader,
                    table_columns,
                    body,
                    signatures
                );

                // PRINT OR EXPORT REPORT
                if (export_as_pdf) {
                    pdfMake
                        .createPdf(docDefinition)
                        .download("expense_report.pdf");
                    return;
                }

                // pdfMake.createPdf(docDefinition).print(); // DISPLAY PRINT DIALOG
                pdfMake.createPdf(docDefinition).open(); // DISPLAY PRINT PREVIEW
            });
        },
        printFormat(subheader, table_columns, body, signatures) {
            return {
                // pageSize: 'legal',
                pageSize: this.print_format.pageSize,
                pageOrientation: this.print_format.pageOrientation,
                pageMargins: this.print_format.pageMargins,
                defaultStyle: this.print_format.defaultStyle,
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
                                text: "",
                                style: "subheader1"
                            },
                            {
                                text: ["Expense Summary Report"],
                                style: "header1"
                            },
                            {
                                image: this.base64Image,
                                fit: [
                                    this.$store.getters.settings.expense_report
                                        .print_format.background.width * 72,
                                    this.$store.getters.settings.expense_report
                                        .print_format.background.height * 72
                                ],
                                style: "header2"
                            }
                        ]
                    },
                    {
                        text: subheader,
                        style: "subheader1"
                    },
                    {
                        style: "tableOfExpenses",
                        table: {
                            headerRows: 1,
                            widths: table_columns.map((item, index) => {
                                if (table_columns.length - 1 == index) {
                                    return "*";
                                }

                                return "auto";
                            }),
                            body: body
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
                        unbreakable: true,
                        columns: signatures
                    }
                ],
                styles: {
                    header1: {
                        fontSize: 13,
                        bold: false,
                        alignment: "center"
                    },
                    header2: {
                        alignment: "right"
                    },
                    subheader1: {
                        fontSize: 10
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
                        // margin: [0, 5, 0, 15],
                        fontSize: 10
                    },
                    pageFooter: {
                        fontSize: 8
                    }
                }
            };
        },
        updateDates(e) {
            this.date_range = e;
        },
        getDataFromApi() {
            this.loading = true;

            return new Promise((resolve, reject) => {
                const { sortBy, sortDesc, page, itemsPerPage } = this.options;

                let search = this.search.trim().toLowerCase();
                let status = this.status;
                let user_id = this.user;
                let range = this.date_range;

                ExpenseReportDataService.getAll({
                    params: {
                        search: search,
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
                        this.loading = false;
                        this.formDataLoaded = true;
                        resolve({ items, total });
                    })
                    .catch(error => {
                        this.mixin_showErrors(error);
                        this.loading = false;
                        this.formDataLoaded = true;
                        reject();
                    });
            });
        },
        onRefresh() {
            Object.assign(this.$data, this.$options.data.apply(this));
            this.loadTotalCountReportStatus();
            this.loadExpenseTypes();
            this.selected = [];
            this.$store.dispatch("AUTH_NOTIFICATIONS");
            this.$store.dispatch("AUTH_SETTINGS");
        },
        onShow(item) {
            let params = { id: item.id };

            if (item.deleted_at) {
                params = { id: item.id, isDeleted: true };
            }

            this.$router.push({
                name: "user.expense_reports.show",
                params: params
            });
        },
        onEdit(item) {
            if (item.status.status == "Approved") {
                this.mixin_errorDialog("Error", "Report has been approved");
                return;
            }

            if (item.status.status == "Cancelled") {
                this.mixin_errorDialog("Error", "Report has been cancelled");
                return;
            }

            if (item.status.status == "Paid/Reimbursed") {
                this.mixin_errorDialog(
                    "Error",
                    "Paid/reimbursed expense report can't be edited"
                );
                return;
            }

            this.$router.push({
                name: "user.expense_reports.edit",
                params: { id: item.id }
            });
        },
        onDelete() {
            if (
                this.selected
                    .map(item => item.status.status)
                    .includes("Cancelled")
            ) {
                this.mixin_errorDialog(
                    "Error",
                    "Report has already been cancelled"
                );
                return;
            }

            if (
                this.selected
                    .map(item => item.status.status)
                    .includes("Paid/Reimbursed")
            ) {
                this.mixin_errorDialog(
                    "Error",
                    "Paid/reimbursed expense reports can't be cancelled"
                );
                return;
            }

            if (
                this.selected
                    .map(item => item.status.status)
                    .includes("Approved")
            ) {
                this.mixin_errorDialog(
                    "Error",
                    "Approved expense reports can't be cancelled"
                );
                return;
            }

            if (
                this.selected
                    .map(item => item.status.status)
                    .includes("Rejected")
            ) {
                this.mixin_errorDialog(
                    "Error",
                    "Rejected expense reports can't be cancelled"
                );
                return;
            }

            if (this.selected.length == 0) {
                this.mixin_errorDialog("Error", "No item(s) selected");
                return;
            }

            // let notes = await this.$dialog.prompt({
            //     text: "Please add note",
            //     title: "Do you want to cancel expense report(s)?"
            // });

            // if (notes) {
            //     axios
            //         .delete(`/api/expense_reports/${this.selected[0].id}`, {
            //             params: {
            //                 ids: this.selected.map(item => {
            //                     return item.id;
            //                 }),
            //                 notes: notes
            //             }
            //         })
            //         .then(function(response) {
            //             this.$dialog.message.success(
            //                 "Expense report(s) cancelled successfully",
            //                 {
            //                     position: "top-right",
            //                     timeout: 2000
            //                 }
            //             );
            //             this.getDataFromApi().then(data => {
            //                 this.items = data.items;
            //                 this.totalItems = data.total;
            //             });

            //             this.selected = [];
            //         })
            //         .catch(function(error) {
            //             this.mixin_showErrors(error);
            //         });
            // }

            // // return;

            this.$confirm("Do you want to cancel expense report(s)?").then(
                res => {
                    if (res) {
                        let ids = this.selected.map(item => {
                            return item.id;
                        });
                        ExpenseReportDataService.delete(ids)
                            .then(response => {
                                this.mixin_successDialog(
                                    response.data.status,
                                    response.data.message
                                );
                                this.getDataFromApi().then(data => {
                                    this.items = data.items;
                                    this.totalItems = data.total;
                                });
                                this.selected = [];
                            })
                            .catch(error => {
                                this.mixin_showErrors(error);
                            });
                    }
                }
            );
        },
        // onUpdate(action, method) {
        //     if (this.selected.length == 0) {
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
        //                 let ids = this.selected.map(item => {
        //                     return item.id;
        //                 });

        //                 axios({
        //                     method: method,
        //                     url: `/api/expense_reports/${this.selected[0].id}`,
        //                     data: {
        //                         ids: ids,
        //                         action: action
        //                     }
        //                 })
        //                     .then(function(response) {
        //                         this.$dialog.message.success(
        //                             response.data.message,
        //                             {
        //                                 position: "top-right",
        //                                 timeout: 2000
        //                             }
        //                         );
        //                         this.getDataFromApi().then(data => {
        //                             this.items = data.items;
        //                             this.totalItems = data.total;
        //                         });

        //                         this.selected = [];
        //                     })
        //                     .catch(function(error) {
        //                         this.mixin_showErrors(error);
        //                     });
        //             }
        //         }
        //     );
        // },
        // ------------------------------------------------------------------------------------------------------------------
        //
        // ------------------------------------------------------------------------------------------------------------------
        onUpdate(action, method) {
            let url = "";
            let ids = this.selected.map(item => {
                return item.id;
            });

            switch (action) {
                case "submit":
                    url = `/api/expense_reports/submit/${ids}`;

                    break;
                case "approve":
                    url = `/api/expense_reports/approve/${ids}`;

                    break;
                case "reject":
                    url = `/api/expense_reports/reject/${ids}`;

                    break;
                case "duplicate":
                    url = `/api/expense_reports/duplicate/${ids}`;

                    break;

                default:
                    url = `/api/expense_reports/${ids}`;

                    break;
            }

            this.$confirm(`Do you want to ${action} expense report(s)?`).then(
                res => {
                    if (res) {
                        axios({
                            method: method,
                            url: url
                        })
                            .then(response => {
                                this.mixin_successDialog(
                                    response.data.status,
                                    response.data.message
                                );
                                this.getDataFromApi().then(data => {
                                    this.items = data.items;
                                    this.totalItems = data.total;
                                });
                                this.selected = [];
                                this.loadTotalCountReportStatus();
                                this.$store.dispatch("AUTH_NOTIFICATIONS");
                            })
                            .catch(error => {
                                this.mixin_showErrors(error);
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

            if (
                this.selected.filter(function(item) {
                    return item.status.status === "Unsubmitted";
                }).length <= 0
            ) {
                this.mixin_errorDialog(
                    "Error",
                    "No selected unsubmitted report(s)"
                );
                return;
            }

            let period = this.$store.getters.settings.submission_period;
            let last_submission_date = "";
            let submission_date = moment
                .min(
                    this.selected
                        .filter(function(item) {
                            return item.status.status === "Unsubmitted";
                        })
                        .map(item2 => moment(item2.from))
                )
                .format("YYYY-MM-DD");

            switch (period) {
                case "Weekly":
                    last_submission_date = moment(submission_date)
                        .endOf("week")
                        .format("YYYY-MM-DD");
                    break;
                case "Monthly":
                    last_submission_date = moment(submission_date)
                        .endOf("month")
                        .format("YYYY-MM-DD");
                    break;

                default:
                    last_submission_date = moment(submission_date).format(
                        "YYYY-MM-DD"
                    );
                    break;
            }

            if (!this.mixin_can("submit expense reports beyond due date")) {
                if (
                    !moment(moment()).isSameOrBefore(
                        last_submission_date,
                        "day"
                    )
                ) {
                    this.mixin_errorDialog(
                        "Error (Not Allowed)",
                        `Last submission was ${last_submission_date}`
                    );
                    return;
                }
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
            immediate: true,
            deep: true,
            handler() {
                this.getDataFromApi().then(data => {
                    this.items = data.items;
                    this.totalItems = data.total;
                });
            }
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
                    .includes("Unsubmitted")
            ) {
                let period = this.$store.getters.settings.submission_period;
                let last_submission_date = "";
                let submission_date = moment
                    .min(this.selected.map(item => moment(item.from)))
                    .format("YYYY-MM-DD");

                switch (period) {
                    case "Weekly":
                        last_submission_date = moment(submission_date)
                            .endOf("week")
                            .format("YYYY-MM-DD");
                        break;
                    case "Monthly":
                        last_submission_date = moment(submission_date)
                            .endOf("month")
                            .format("YYYY-MM-DD");
                        break;

                    default:
                        last_submission_date = moment(submission_date).format(
                            "YYYY-MM-DD"
                        );
                        break;
                }

                this.warning = `Last Submission Date: ${last_submission_date}`;
            } else if (
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
        },
        formattedDateRange() {
            let start_date = moment(this.date_range[0]).format("MMM DD, YYYY");
            let end_date = moment(this.date_range[1]).format("MMM DD, YYYY");

            if (JSON.stringify(start_date) == JSON.stringify(end_date)) {
                return start_date;
            }

            if (JSON.stringify(end_date) == null) {
                return start_date;
            }

            return `${start_date} ~ ${end_date}`;
        },
        print_format() {
            return {
                pageSize: {
                    width:
                        this.$store.getters.settings.expense_report.print_format
                            .pageSize.width * 72,
                    height:
                        this.$store.getters.settings.expense_report.print_format
                            .pageSize.height * 72
                },
                pageOrientation: this.$store.getters.settings.expense_report
                    .print_format.pageOrientation,
                pageMargins: [
                    this.$store.getters.settings.expense_report.print_format
                        .pageMargins.left * 72,
                    this.$store.getters.settings.expense_report.print_format
                        .pageMargins.top * 72,
                    this.$store.getters.settings.expense_report.print_format
                        .pageMargins.right * 72,
                    this.$store.getters.settings.expense_report.print_format
                        .pageMargins.bottom * 72
                ],
                defaultStyle: {
                    font: this.$store.getters.settings.expense_report
                        .print_format.defaultStyle.font
                }
            };
        },
        base64Image() {
            let base64Image = this.$store.getters.settings.expense_report
                .print_format.background.image;

            if (!base64Image) {
                return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
            }

            return base64Image;
        },
        isValidSubmit() {
            let selectedCount = this.selected.length;

            if (selectedCount == 0) {
                return false;
            }
            if (
                this.selectedCount.submitted > 0 ||
                this.selectedCount.approved > 0 ||
                this.selectedCount.rejected > 0 ||
                this.selectedCount.deleted > 0
            ) {
                return false;
            }

            return true;
        },
        isValidDelete() {
            let selectedCount = this.selected.length;
            let deletedCount = this.selected.filter(
                item => item.deleted_at == null
            ).length;

            if (selectedCount == 0) {
                return false;
            }

            if (this.selectedCount.deleted > 0) {
                return false;
            }

            return true;
        },
        isValidDuplicate() {
            let selectedCount = this.selected.length;

            if (selectedCount !== 1) {
                return false;
            }
            return true;
        },
        isValidPrint() {
            let selectedItems = this.selected.filter(
                item => item.submitted_at == null || item.deleted_at != null
            ).length;

            if (this.selected.length == 0) {
                return false;
            }

            if (selectedItems > 0) {
                return false;
            }

            return true;
        },
        selectedCount() {
            let submitted = this.selected.filter(
                item =>
                    item.submitted_at != null &&
                    item.approved_at == null &&
                    item.rejected_at == null &&
                    item.deleted_at == null
            ).length;

            let approved = this.selected.filter(
                item =>
                    item.submitted_at != null &&
                    item.approved_at != null &&
                    item.rejected_at == null &&
                    item.deleted_at == null
            ).length;

            let rejected = this.selected.filter(
                item => item.rejected_at != null && item.deleted_at == null
            ).length;
            let deleted = this.selected.filter(item => item.deleted_at != null)
                .length;

            return {
                submitted,
                approved,
                rejected,
                deleted
            };
        }
    },
    created() {
        this.$store.dispatch("AUTH_USER");
        this.$store.dispatch("AUTH_NOTIFICATIONS");
        this.loadTotalCountReportStatus();
        this.loadExpenseTypes();
    },
    activated() {
        this.$store.dispatch("AUTH_USER");
        this.$store.dispatch("AUTH_NOTIFICATIONS");
        this.loadTotalCountReportStatus();
        this.loadExpenseTypes();
        this.getDataFromApi().then(data => {
            this.items = data.items;
            this.totalItems = data.total;
        });
    }
};
</script>
