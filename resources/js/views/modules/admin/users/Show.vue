<template>
    <div>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">User Details</h4>
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
                                        <v-col cols="12">
                                            <div>
                                                Administrator
                                            </div>
                                            <h3 class="display-1 green--text">
                                                {{ name }}
                                            </h3>
                                            <p>{{ username }}</p>
                                            <div class="text--primary">
                                                {{ email }} <br />
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn text color="green" @click="editData">
                                        Edit Info
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-hover>
                    </v-col>

                    <v-col cols="12" md="6">
                        <v-row>
                            <!-- <v-col cols="6" md="6">
                                <v-hover v-slot:default="{ hover }">
                                    <v-card
                                        class="mx-auto"
                                        :elevation="hover ? 5 : 2"
                                    >
                                        <v-card-title>
                                            Revolving Fund
                                        </v-card-title>
                                        <v-card-subtitle>
                                            Secondary text
                                        </v-card-subtitle>
                                        <v-card-text>
                                            Go to user profile and configure.
                                        </v-card-text>
                                    </v-card>
                                </v-hover>
                            </v-col>
                            <v-col cols="6" md="6">
                                <v-hover v-slot:default="{ hover }">
                                    <v-card
                                        class="mx-auto"
                                        :elevation="hover ? 5 : 2"
                                        to="/admin/expenses"
                                    >
                                        <v-card-title>Expenses</v-card-title>
                                        <v-card-subtitle>
                                            Secondary text
                                        </v-card-subtitle>
                                        <v-card-text>
                                            Go to user profile and configure.
                                        </v-card-text>
                                    </v-card>
                                </v-hover>
                            </v-col>
                            <v-col cols="6" md="6">
                                <v-hover v-slot:default="{ hover }">
                                    <v-card
                                        class="mx-auto"
                                        :elevation="hover ? 5 : 2"
                                    >
                                        <v-card-title>
                                            Reimbursements
                                        </v-card-title>
                                        <v-card-subtitle>
                                            Secondary text
                                        </v-card-subtitle>
                                        <v-card-text>
                                            Go to user profile and configure.
                                        </v-card-text>
                                    </v-card>
                                </v-hover>
                            </v-col>
                            <v-col cols="6" md="6">
                                <v-hover v-slot:default="{ hover }">
                                    <v-card
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
                    <!-- <v-col cols="12">
                        <v-hover v-slot:default="{ hover }">
                            <v-card outlined :elevation="hover ? 5 : 2">
                                <v-expansion-panels v-model="panel" hover>
                                    <v-expansion-panel>
                                        <v-expansion-panel-header>
                                            Roles and Permissions
                                        </v-expansion-panel-header>
                                        <v-expansion-panel-content>
                                            <v-simple-table>
                                                <template v-slot:default>
                                                    <tbody>
                                                        <tr>
                                                            <td>Role</td>
                                                            <td>Sample</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Permissions
                                                            </td>
                                                            <td>Sample</td>
                                                        </tr>
                                                    </tbody>
                                                </template>
                                            </v-simple-table>
                                        </v-expansion-panel-content>
                                    </v-expansion-panel>
                                </v-expansion-panels>
                            </v-card>
                        </v-hover>
                    </v-col> -->
                </v-row>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            panel: [],
            name: "",
            username: "",
            email: "",
            updated_at: ""
        };
    },
    methods: {
        getData() {
            let _this = this;

            axios
                .get(`/api/users/${_this.$route.params.id}`)
                .then(function(response) {
                    console.log(response);
                    let data = response.data.data;

                    _this.name = data.name;
                    _this.username = data.username;
                    _this.email = data.email;
                    _this.updated_at = data.updated_at;
                })
                .catch(function(error) {
                    console.log(error);
                    console.log(error.response);
                });
        },
        editData() {
            this.$router.push({name: "admin.users.edit", params: {id: this.$route.params.id}});
        }
    },
    created() {
        this.getData();
    },
    mounted() {}
};
</script>
