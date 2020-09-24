<template>
    <v-app>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn
                    :to="{ name: 'admin.employees.index' }"
                    class="mr-3"
                    icon
                >
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">Employee Details</h4>
            </v-card-title>

            <v-card-text>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-hover v-slot:default="{ hover }">
                            <v-card
                                outlined
                                class="mx-auto mt-3"
                                :elevation="hover ? 5 : 2"
                            >
                                <v-card-text>
                                    <v-row>
                                        <v-col cols="12" sm="5">
                                            <v-avatar
                                                class="profile"
                                                color="grey"
                                                size="200"
                                                tile
                                            >
                                                <v-img
                                                    src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                                                ></v-img>
                                            </v-avatar>
                                        </v-col>
                                        <v-col cols="12" sm="7">
                                            <div>
                                                {{ department }}
                                            </div>
                                            <p class="display-1 text--primary">
                                                {{
                                                    `${last_name}, ${first_name} ${suffix}`
                                                }}
                                            </p>
                                            <p>{{ job }}</p>
                                            <div class="text--primary">
                                                {{ mobile_number }}<br />
                                                {{ email }}
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn
                                        text
                                        color="green"
                                        @click="editEmployee"
                                    >
                                        Edit Info
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-hover>
                    </v-col>

                    <v-col cols="12" md="6">
                        <v-row>
                            <v-col cols="6" md="6">
                                <v-hover v-slot:default="{ hover }">
                                    <v-card
                                        outlined
                                        class="mx-auto"
                                        :elevation="hover ? 5 : 2"
                                    >
                                        <v-card-title>{{total_expenses}}</v-card-title>
                                        <v-card-subtitle>
                                            Expenses (This Month)
                                        </v-card-subtitle>
                                        <v-card-text>
                                            ~ {{start_date}} - {{end_date}}
                                        </v-card-text>
                                    </v-card>
                                </v-hover>
                            </v-col>

                            <v-col cols="6" md="6">
                                <v-hover v-slot:default="{ hover }">
                                    <v-card
                                        outlined
                                        class="mx-auto"
                                        :elevation="hover ? 5 : 2"
                                    >
                                        <v-card-title>{{total_reimbursements}}</v-card-title>
                                        <v-card-subtitle>
                                            Reimbursements
                                        </v-card-subtitle>
                                        <v-card-text>
                                            ~ Amount to be compensated.
                                        </v-card-text>
                                    </v-card>
                                </v-hover>
                            </v-col>

                            <v-col cols="6" md="6">
                                <v-hover v-slot:default="{ hover }">
                                    <v-card
                                        outlined
                                        class="mx-auto"
                                        :elevation="hover ? 5 : 2"
                                    >
                                        <v-card-title>
                                            {{total_pending_reports}}
                                        </v-card-title>
                                        <v-card-subtitle>
                                            Pending Expense Reports
                                        </v-card-subtitle>
                                        <v-card-text>
                                            ~ Reports waiting for approval.
                                        </v-card-text>
                                    </v-card>
                                </v-hover>
                            </v-col>
                            <!-- <v-col cols="6" md="6">
                                <v-hover v-slot:default="{ hover }">
                                    <v-card
                                        outlined
                                        class="mx-auto"
                                        :elevation="hover ? 5 : 2"
                                        to="/admin/reports"
                                    >
                                        <v-card-title>Reports</v-card-title>
                                        <v-card-subtitle>
                                            Secondary text
                                        </v-card-subtitle>
                                        <v-card-text>
                                            Go to user profile and configure.
                                        </v-card-text>
                                    </v-card>
                                </v-hover>
                            </v-col> -->
                        </v-row>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12">
                        <div>
                            <v-hover v-slot:default="{ hover }">
                                <v-card outlined :elevation="hover ? 5 : 2">
                                    <v-expansion-panels
                                        v-model="panel"
                                        hover
                                        accordion
                                    >
                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                Other Details
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <v-simple-table>
                                                    <template v-slot:default>
                                                        <tbody>
                                                            <tr>
                                                                <td>Name</td>
                                                                <td>
                                                                    {{
                                                                        fullname
                                                                    }}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Gender</td>
                                                                <td>
                                                                    {{ gender }}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    Birthdate
                                                                </td>
                                                                <td>
                                                                    {{
                                                                        birthdate
                                                                    }}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    Telephone
                                                                    Number
                                                                </td>
                                                                <td>
                                                                    {{
                                                                        telephone_number
                                                                    }}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Address</td>
                                                                <td>
                                                                    {{
                                                                        address
                                                                    }}
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </template>
                                                </v-simple-table>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>
                                        <!-- <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                Itinerary
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                                Ut enim ad minim veniam, quis
                                                nostrud exercitation ullamco
                                                laboris nisi ut aliquip ex ea
                                                commodo consequat.
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>
                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                Activities
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                                Ut enim ad minim veniam, quis
                                                nostrud exercitation ullamco
                                                laboris nisi ut aliquip ex ea
                                                commodo consequat.
                                            </v-expansion-panel-content>
                                        </v-expansion-panel> -->
                                    </v-expansion-panels>
                                </v-card>
                            </v-hover>
                        </div>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-app>
</template>

<script>
import moment from "moment";
import randomcolor from "randomcolor";
import numeral from "numeral";

export default {
    data() {
        return {
            start_date: moment().startOf("month").format("ll"),
            end_date: moment().endOf("month").format("ll"),

            total_expenses: 0,
            total_reimbursements: 0,
            total_pending_reports: 0,

            selection: 1,
            panel: [0, 1],
            fullname: "",
            first_name: "",
            middle_name: "",
            last_name: "",
            suffix: "",
            gender: "",
            birthdate: "",
            mobile_number: "",
            telephone_number: "",
            email: "",
            address: "",
            job: "",
            department: ""
        };
    },
    methods: {
        getData() {
            let _this = this;

            axios
                .get(`/api/employees/${_this.$route.params.id}`)
                .then(function(response) {
                    let data = response.data.data;

                    _this.fullname = data.fullname;
                    _this.first_name = data.first_name;
                    _this.middle_name = data.middle_name;
                    _this.last_name = data.last_name;
                    _this.suffix = data.suffix;
                    _this.gender = data.gender;
                    _this.birthdate = data.birthdate;
                    _this.mobile_number = data.mobile_number;
                    _this.telephone_number = data.telephone_number;
                    _this.email = data.email;
                    _this.address = data.address;
                    _this.job = data.job.name;
                    _this.department = data.department.name;
                })
                .catch(function(error) {
                    console.log(error);
                    console.log(error.response);
                });
        },
        editEmployee() {
            this.$router.push({
                name: "admin.employees.edit",
                params: { id: this.$route.params.id }
            });
        },
        getExpenseStats() {
            let _this = this;
            let start_date = moment().startOf('month').format("YYYY-MM-DD");
            let end_date = moment().startOf('month').format("YYYY-MM-DD");
            let employee_id = this.$route.params.id;

            axios
                .get(
                    `/api/data/expense_stats?start_date=${start_date}&end_date=${end_date}&employee_id=${employee_id}`
                )
                .then(response => {
                    _this.total_expenses = response.data.summary.total;
                    _this.total_reimbursements =
                        response.data.summary.reimbursements;
                    _this.total_pending_reports = response.data.summary.pending;
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);
                });
        }
    },
    created() {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " + localStorage.getItem("access_token");

        this.getData();
        this.getExpenseStats();
    }
};
</script>
