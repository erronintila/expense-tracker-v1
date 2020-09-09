<template>
    <v-app>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <h4 class="title green--text">Dashboard</h4>
                <v-spacer></v-spacer>
            </v-card-title>
            <v-card-subtitle> </v-card-subtitle>

            <v-container>
                <v-row>
                    <v-col cols="12" md="4">
                        <v-hover v-slot:default="{ hover }">
                            <v-card
                                outlined
                                rounded
                                class="mx-auto rounded-xl"
                                :elevation="hover ? 3 : 0"
                                to="/admin/profile"
                            >
                                <v-card-title>User Profile</v-card-title>
                                <v-card-subtitle>
                                    Secondary text
                                </v-card-subtitle>
                                <v-card-text>
                                    Go to user profile and configure.
                                </v-card-text>
                            </v-card>
                        </v-hover>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-hover v-slot:default="{ hover }">
                            <v-card
                                outlined
                                rounded
                                class="mx-auto rounded-lg"
                                :elevation="hover ? 3 : 0"
                                to="/admin/expenses"
                            >
                                <v-card-title>Expenses</v-card-title>
                                <v-card-subtitle>
                                    Secondary text
                                </v-card-subtitle>
                                <v-card-text>
                                    Track and manage expenses.
                                </v-card-text>
                            </v-card>
                        </v-hover>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-hover v-slot:default="{ hover }">
                            <v-card
                                outlined
                                rounded
                                class="mx-auto rounded-xl"
                                :elevation="hover ? 3 : 0"
                                to="/admin/employees"
                            >
                                <v-card-title>Employees</v-card-title>
                                <v-card-subtitle>
                                    Secondary text
                                </v-card-subtitle>
                                <v-card-text>
                                    Modify employee details.
                                </v-card-text>
                            </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-app>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
    computed: {
        // ...mapGetters(["currentUser"])
    },
    created() {}
};
</script>
