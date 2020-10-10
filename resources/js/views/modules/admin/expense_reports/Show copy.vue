<template>
    <div>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn :to="{ name: 'admin.reports.index' }" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">Expense Report Details</h4>
            </v-card-title>

            <v-container>
                <v-row>
                    <v-spacer></v-spacer>
                    <v-col cols="12" md="4">
                        <v-select
                            v-model="summary"
                            :items="report_views"
                            label="Report View"
                        >
                        </v-select>
                    </v-col>
                </v-row>
            </v-container>

            <v-container>
                <v-row>
                    <v-col>
                        Expense Report <br />
                        {{ employee }} <br />
                        {{ description }} <br />
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col>
                        {{ code }} <br />
                        Date : 2020-01-01 ~ 2020-01-31
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-simple-table dense>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th v-for="item in headers" :key="item.value">
                                            {{ item.text }}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in expenses" :key="item.id">
                                        <td>{{ item.description }}</td>
                                        <td>{{ item.date }}</td>
                                        <td>{{ item.amount }}</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colspan="3"><hr /></td>
                                    </tr>
                                    <tr>
                                        <td>Total</td>
                                        <td></td>
                                        <td>{{ total }}</td>
                                    </tr>
                                </tfoot>
                            </template>
                        </v-simple-table>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-btn>Print Report</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            code: "",
            description: "",
            remarks: "",
            notes: "",
            employee: "",
            status: "",
            expenses: [],
            submitted_at: "",
            reviewed_at: "",
            approved_at: "",
            cancelled_at: "",
            created_at: "",
            updated_at: "",
            deleted_at: "",
            total: 0,
            headers: [
                { text: "Expense", value: "description" },
                { text: "Date", value: "date" },
                { text: "Amount", value: "amount" }
            ],
            summary: 0,
            report_views: [
                { text: "Detailed Report", value: 0 },
                { text: "Summary Report", value: 1 }
            ]
        };
    },
    methods: {
        loadItem() {
            let _this = this;

            axios
                .get(`/api/expense_reports/${_this.$route.params.id}`)
                .then(function(response) {
                    console.log(response.data);

                    let data = response.data.data;

                    console.log(data.expenses);

                    _this.code = data.code;
                    _this.description = data.description;
                    _this.remarks = data.remarks;
                    _this.notes = data.notes;
                    _this.employee = `${data.employee.last_name}, ${data.employee.first_name} ${data.employee.suffix}`;
                    _this.status = data.status;
                    _this.expenses = data.expenses;
                    _this.submitted_at = data.submitted_at;
                    _this.reviewed_at = data.reviewed_at;
                    _this.approved_at = data.approved_at;
                    _this.cancelled_at = data.cancelled_at;
                    _this.created_at = data.created_at;
                    _this.updated_at = data.updated_at;
                    _this.deleted_at = data.deleted_at;
                    _this.total = data.total;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        viewReport() {
            let _this = this;
            let url = "";

            if (_this.summary) {
                url = "";
            }

            axios
                .get("/api/data/expense_reports", {
                    id: _this.$route.params.id
                })
                .then(response => {
                    _this.expenses = response.data.data;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    created() {
        // axios.defaults.headers.common["Authorization"] =
        //     "Bearer " + localStorage.getItem("access_token");

        this.loadItem();
    },
    mounted() {}
};
</script>
