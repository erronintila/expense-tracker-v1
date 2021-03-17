<template>
    <div>
        <loader-component v-if="!formDataLoaded"></loader-component>
        <v-card v-else class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
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
                                            >
                                                <v-img
                                                    :src="
                                                        require('../../../../assets/img/user.png')
                                                    "
                                                />
                                            </v-avatar>
                                        </v-col>
                                        <v-col cols="12" sm="7">
                                            <div>
                                                {{ department }}
                                            </div>
                                            <h3 class="display-1 green--text">
                                                {{
                                                    `${last_name ||
                                                        ""}, ${first_name ||
                                                        ""} ${suffix || ""}`
                                                }}
                                            </h3>
                                            <p>{{ job }}</p>
                                            <div class="text--primary">
                                                {{ mobile_number }}<br />
                                                {{ email }}
                                            </div>
                                            <div>
                                                Revolving Fund:
                                            </div>

                                            <v-btn
                                                text
                                                class="green--text"
                                                @click="validateFund"
                                            >
                                                {{
                                                    remaining_fund == fund
                                                        ? `${mixin_formatNumber(
                                                              remaining_fund
                                                          )}`
                                                        : `${mixin_formatNumber(
                                                              remaining_fund
                                                          )} / ${mixin_formatNumber(
                                                              fund
                                                          )}`
                                                }}
                                            </v-btn>
                                            <!-- <div
                                                class="text-sm-body-2 text-md-body-1 text-lg-h6 text-xl-h4 green--text"
                                            >
                                                {{
                                                    remaining_fund == fund
                                                        ? `${mixin_formatNumber(
                                                              remaining_fund
                                                          )}`
                                                        : `${mixin_formatNumber(
                                                              remaining_fund
                                                          )} / ${mixin_formatNumber(
                                                              fund
                                                          )}`
                                                }}
                                            </div> -->
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn text color="green" @click="editUser">
                                        Edit Info
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-hover>
                    </v-col>

                    <!-- <v-col cols="12" md="6">
                        <v-row>
                            <v-col cols="6" md="6">
                                <v-hover v-slot:default="{ hover }">
                                    <v-card
                                        outlined
                                        class="mx-auto"
                                        :elevation="hover ? 5 : 2"
                                    >
                                        <v-card-title class="green--text">{{
                                            mixin_formatNumber(total_expenses)
                                        }}</v-card-title>
                                        <v-card-subtitle>
                                            Expenses (This Month)
                                        </v-card-subtitle>
                                        <v-card-text>
                                            ~ {{ start_date }} - {{ end_date }}
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
                                        <v-card-title class="green--text">
                                            {{
                                                mixin_formatNumber(
                                                    total_pending_reports
                                                )
                                            }}
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

                            <v-col cols="6" md="6">
                                <v-hover v-slot:default="{ hover }">
                                    <v-card
                                        outlined
                                        class="mx-auto"
                                        :elevation="hover ? 5 : 2"
                                    >
                                        <v-card-title class="green--text">
                                            {{
                                                mixin_formatNumber(
                                                    total_replenishments
                                                )
                                            }}
                                        </v-card-title>
                                        <v-card-subtitle>
                                            Replenishments
                                        </v-card-subtitle>
                                        <v-card-text>
                                            ~ Amount to replenish the revolving
                                            fund
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
                                        <v-card-title class="green--text">{{
                                            mixin_formatNumber(
                                                total_reimbursements
                                            )
                                        }}</v-card-title>
                                        <v-card-subtitle>
                                            Reimbursements
                                        </v-card-subtitle>
                                        <v-card-text>
                                            ~ Amount to be compensated.
                                        </v-card-text>
                                    </v-card>
                                </v-hover>
                            </v-col>
                        </v-row>
                    </v-col> -->
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
                                                                        full_name
                                                                    }}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    Username
                                                                </td>
                                                                <td>
                                                                    {{
                                                                        user.username
                                                                    }}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Role</td>
                                                                <td>
                                                                    {{
                                                                        user.is_admin
                                                                            ? "Administrator"
                                                                            : "Standard User"
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
                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                Permissions
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <v-data-table
                                                    :headers="headers"
                                                    :items="permissions"
                                                ></v-data-table>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>
                                        <!-- <v-expansion-panel>
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
    </div>
</template>

<script>
import moment from "moment";
import randomcolor from "randomcolor";
import numeral from "numeral";
import UserDataService from "../../../../services/UserDataService";

export default {
    data() {
        return {
            formDataLoaded: false,
            start_date: moment()
                .startOf("month")
                .format("ll"),
            end_date: moment()
                .endOf("month")
                .format("ll"),

            total_expenses: 0,
            total_replenishments: 0,
            total_reimbursements: 0,
            total_pending_reports: 0,

            selection: 1,
            panel: 0,
            id: "",
            full_name: "",
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
            fund: 0,
            remaining_fund: 0,
            job: { id: null, name: "" },
            department: { id: null, name: "" },
            headers: [{ text: "Permission", value: "name", sortable: false }],
            permissions: [],
            user: { username: "", name: "", is_admin: false }
        };
    },
    methods: {
        validateFund() {
            axios
                .get(`/api/data/validateFund?id=${this.id}`)
                .then(response => {
                    this.getData();
                })
                .catch(error => {
                    this.mixin_showErrors(error);
                });
        },
        getData() {
            UserDataService.show(this.$route.params.id)
                .then(response => {
                    let data = response.data.data;

                    this.id = data.id;
                    this.full_name = data.full_name;
                    this.first_name = data.first_name;
                    this.middle_name = data.middle_name;
                    this.last_name = data.last_name;
                    this.suffix = data.suffix;
                    this.gender = data.gender;
                    this.birthdate = data.birthdate;
                    this.mobile_number = data.mobile_number;
                    this.telephone_number = data.telephone_number;
                    this.email = data.email;
                    this.address = data.address;
                    this.fund = data.fund;
                    this.remaining_fund = data.remaining_fund;
                    this.job = data.job.name;
                    this.department = data.job.department.name;
                    this.permissions = data.permissions;
                    this.user = data;
                    this.formDataLoaded = true;
                })
                .catch(error => {
                    this.mixin_showErrors(error);
                    this.formDataLoaded = true;
                });
        },
        editUser() {
            this.$router.push({
                name: "admin.users.edit",
                params: { id: this.$route.params.id }
            });
        },
        getExpenseStats() {
            let start_date = moment()
                .startOf("month")
                .format("YYYY-MM-DD");
            let end_date = moment()
                .endOf("month")
                .format("YYYY-MM-DD");
            let user_id = this.$route.params.id;

            axios
                .get(
                    `/api/data/expense_stats?start_date=${start_date}&end_date=${end_date}&user_id=${user_id}`
                )
                .then(response => {
                    this.total_expenses = response.data.summary.total;
                    this.total_replenishments =
                        response.data.summary.replenishments;
                    this.total_reimbursements =
                        response.data.summary.reimbursements;
                    this.total_pending_reports = response.data.summary.pending;
                })
                .catch(error => {
                    this.mixin_showErrors(error);
                });
        }
    },
    created() {
        // this.$store.dispatch("AUTH_USER");
        this.getData();
        // this.getExpenseStats();
    },
    activated() {
        // this.$store.dispatch("AUTH_USER");
        this.getData();
        // this.getExpenseStats();
    },
    deactivated() {
        Object.assign(this.$data, this.$options.data());
    }
};
</script>
