<template>
    <div>
        <v-container v-if="loader" style="height: 400px">
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
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <h4 class="title green--text">Edit Expense Report</h4>
            </v-card-title>
            <v-container>
                <Form
                    :form="form"
                    :errors="errors"
                    :rules="rules"
                    :expense_report_id="expense_report_id"
                    :dateRange="date_range"
                    @onSave="onSave"
                >
                    <template v-slot:userSelector>
                        <v-row>
                            <v-col>
                                <v-text-field
                                    :value="
                                        form.user
                                            ? form.user.full_name
                                            : 'No Employee'
                                    "
                                    :error-messages="errors.user_id"
                                    @input="errors.user_id = []"
                                    label="Employee"
                                    readonly
                                >
                                    <template v-slot:append>
                                        <UserDialogSelector
                                            ref="userDialogSelector"
                                            @selectUser="selectUser"
                                            @onReset="resetUser"
                                            :selectedUser="form.user"
                                            :usersParameters="usersParameters"
                                        >
                                            <template
                                                v-slot:openDialog="{
                                                    bind,
                                                    on
                                                }"
                                            >
                                                <v-btn
                                                    fab
                                                    color="primary"
                                                    text
                                                    x-small
                                                    v-bind="bind"
                                                    v-on="on"
                                                >
                                                    <v-icon dark
                                                        >mdi-magnify</v-icon
                                                    >
                                                </v-btn>
                                            </template>
                                        </UserDialogSelector>
                                    </template>
                                </v-text-field>
                            </v-col>
                        </v-row>
                    </template>
                </Form>
            </v-container>
        </v-card>
    </div>
</template>

<script>
import moment from "moment";
import ExpenseReportDataService from "../../../../services/ExpenseReportDataService";
import Form from "./Form";
import UserDialogSelector from "../../../../components/selector/dialog/UserDialogSelector";

export default {
    components: {
        UserDialogSelector,
        Form
    },
    data() {
        return {
            loader: true,
            usersParameters: {
                params: {
                    is_superadmin: false
                }
            },
            expense_report_id: parseInt(this.$route.params.id),
            form: {
                code: "",
                description: "",
                remarks: "",
                notes: "",
                user: null,
                expenses: [],
                status: null
            },
            errors: {
                date_range: [],
                code: [],
                description: [],
                remarks: [],
                notes: [],
                user_id: [],
                expenses: []
            },
            rules: {},
            date_range: [
                moment()
                    .startOf("month")
                    .format("YYYY-MM-DD"),
                moment()
                    .endOf("month")
                    .format("YYYY-MM-DD")
            ],
        };
    },
    methods: {
        // updateDates(e) {
        //     this.date_range = e;
        //     this.loadExpenses(
        //         this.form.user == null ? null : this.form.user.id
        //     ).then(() => {
        //         this.getDataFromApi().then(data => {
        //             this.items = data.items;
        //             this.totalItems = data.total;
        //         });
        //     });
        // },
        // updateUser() {
        //     this.loadExpenses(
        //         this.form.user == null ? null : this.form.user.id
        //     ).then(() => {
        //         this.getDataFromApi().then(data => {
        //             this.items = data.items;
        //             this.totalItems = data.total;
        //         });
        //     });
        // },
        selectUser(e) {
            if (e == null || e == undefined) {
                this.form.user = null;
                return;
            }
            this.form.user = e;
        },
        resetUser() {
            this.form.user = null;
        },
        getData() {
            return new Promise((resolve, reject) => {
                axios
                    .get(`/api/expense_reports/${this.$route.params.id}`)
                    .then(response => {
                        let data = response.data.data;
                        console.log(data);

                        // this.form = data;

                        this.form.code = data.code;
                        this.form.description = data.description;
                        this.form.remarks = data.remarks;
                        this.form.notes = data.notes;
                        this.form.user = data.user;
                        this.form.status = data.status;
                        // this.total = data.total;
                        resolve(data);
                    })
                    .catch(error => {
                        this.mixin_showErrors(error);
                        reject();
                    })
                    .finally((this.loader = false));
            });
        },
        // getDataFromApi() {
        //     this.loading = true;

        //     return new Promise((resolve, reject) => {
        //         const { sortBy, sortDesc, page, itemsPerPage } = this.options;

        //         let range = this.date_range;
        //         let user_id = this.form.user == null ? null : this.form.user.id;

        //         axios
        //             .get("/api/expenses", {
        //                 params: {
        //                     page: page,
        //                     itemsPerPage: itemsPerPage,
        //                     start_date: range[0],
        //                     end_date: range[1] ? range[1] : range[0],
        //                     user_id: user_id,
        //                     expense_report_id: this.$route.params.id,
        //                     update_report: true
        //                 }
        //             })
        //             .then(response => {
        //                 let items = response.data.data;
        //                 let total = response.data.meta.total;
        //                 resolve({ items, total });
        //             })
        //             .catch(error => {
        //                 this.mixin_showErrors(error);
        //                 reject();
        //             })
        //             .finally((this.loading = false));
        //     });
        // },
        loadExpenses(reportData) {
            // let start_date = moment()
            //     .startOf("month")
            //     .format("YYYY-MM-DD");
            // let end_date = moment()
            //     .endOf("month")
            //     .format("YYYY-MM-DD");
            let user_id = this.form.user ? this.form.user.id : null;

            return new Promise((resolve, reject) => {
                axios
                    .get("/api/data/expenses", {
                        params: {
                            update_report: true,
                            user_id: user_id,
                            // start_date: reportData.from,
                            // end_date: moment().endOf().format("YYYY-MM-DD"),
                            expense_report_id: this.$route.params.id
                        }
                    })
                    .then(response => {
                        this.form.expenses = response.data.data;
                        resolve();
                    })
                    .catch(error => {
                        this.mixin_showErrors(error);
                        reject();
                    });
            });
        },
        // loadUsers() {
        //     return new Promise((resolve, reject) => {
        //         axios
        //             .get("/api/data/users")
        //             .then(response => {
        //                 this.users = response.data.data;
        //                 resolve();
        //             })
        //             .catch(error => {
        //                 this.mixin_showErrors(error);
        //                 reject();
        //             });
        //     });
        // },
        // onRefresh() {
        //     Object.assign(this.$data, this.$options.data.apply(this));
        // },
        onSave(value) {
            // this.$refs.form.validate();

            // if (this.selected.length == 0) {
            //     this.$dialog.message.error("No Expenses selected", {
            //         position: "top-right",
            //         timeout: 2000
            //     });

            //     return;
            // }

            // if (this.$refs.form.validate()) {
            this.loader = true;
            value.user_id = value.user ? value.user.id : null;
            ExpenseReportDataService.update(this.$route.params.id, value)
                .then(response => {
                    this.mixin_successDialog(
                        response.data.status,
                        response.data.message
                    );
                    this.$router.push({
                        name: "admin.expense_reports.index"
                    });
                })
                .catch(error => {
                    this.mixin_showErrors(error);
                    this.errors = error.response.data.errors;
                })
                .finally((this.loader = false));

            //     return;
            // }
        }
    },
    watch: {
        // params: {
        //     handler() {
        //         this.getDataFromApi().then(data => {
        //             this.items = data.items;
        //             this.totalItems = data.total;
        //         });
        //     },
        //     deep: true
        // },
        // selected() {
        //     this.total = this.selected.reduce(
        //         (total, item) => total + item.amount,
        //         0
        //     );
        // }
    },
    computed: {
        // params(nv) {
        //     return {
        //         ...this.options,
        //         query: this.date_range,
        //         query: this.expense_report_id,
        //         query: this.form.user == null ? null : this.form.user.id
        //     };
        // },
        // default_description() {
        //     return `Expense Report Summary (${moment(this.date_range[0]).format(
        //         "LL"
        //     )} - ${moment(this.date_range[1]).format("LL")})`;
        // },
        // balance() {
        //     return this.total - this.paid;
        // }
    },
    created() {
        this.getData().then((data) => {
            this.loadExpenses(data);
        });
    },
    activated() {
        this.getData().then((data) => {
            this.loadExpenses(data);
        });
    }
};
</script>
