<template>
    <div>
        <!-- Navigation Drawer -->
        <v-navigation-drawer
            v-model="drawer"
            :clipped="$vuetify.breakpoint.lgAndUp"
            floating
            app
            v-if="loggedIn"
        >
            <v-list dense shaped>
                <v-list-item two-line>
                    <v-list-item-avatar>
                        <img :src="require('../../../assets/img/user.png')" />
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>
                            <router-link
                                :to="{ name: 'admin.profile.index' }"
                                class="text-decoration-none"
                                style="color: #4caf50"
                            >
                                {{ user.name }}
                            </router-link>
                            <!-- <v-btn small text color="green">Erron Intila</v-btn> -->
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            {{ user.email }}
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <!-- <v-divider></v-divider> -->

                <template v-for="item in items">
                    <v-row
                        v-if="item.heading"
                        :key="item.heading"
                        align="center"
                    >
                        <v-col cols="6">
                            <v-subheader v-if="item.heading">
                                {{ item.heading }}
                            </v-subheader>
                        </v-col>
                        <v-col cols="6" class="text-center">
                            <a href="#!" class="body-2 black--text">EDIT</a>
                        </v-col>
                    </v-row>
                    <v-list-group
                        color="green"
                        v-else-if="item.children"
                        :key="item.text"
                        v-model="item.model"
                        :prepend-icon="
                            item.model ? item.icon : item['icon-alt']
                        "
                        append-icon=""
                    >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ item.text }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item
                            v-for="(child, i) in item.children"
                            :key="i"
                            :to="child.link"
                            link
                        >
                            <v-list-item-action v-if="child.icon">
                                <v-icon>{{ child.icon }}</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ child.text }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-group>
                    <v-list-item
                        color="green"
                        v-else
                        :key="item.text"
                        :to="item.link"
                        link
                    >
                        <v-list-item-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
        </v-navigation-drawer>
        <!-- End of Navigation Drawer -->

        <!-- App Bar -->
        <v-app-bar
            :clipped-left="$vuetify.breakpoint.lgAndUp"
            app
            color="green"
            class="elevation-1"
            dark
            v-if="loggedIn"
        >
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
                <router-link
                    :to="{ name: 'admin.dashboard.index' }"
                    style="text-decoration: none; color: inherit;"
                >
                    <span class="title">Expense Tracker</span>
                </router-link>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on" @click="onLogout">
                        <v-icon>mdi-logout</v-icon>
                    </v-btn>
                </template>
                <span>Log out</span>
            </v-tooltip>
        </v-app-bar>
        <!-- End of App Bar -->

        <!-- Main View -->
        <v-main>
            <!-- <v-container> -->
            <v-row class="ml-2 mr-2 mt-4">
                <v-col>
                    <router-view></router-view>
                </v-col>
            </v-row>
            <!-- </v-container> -->
        </v-main>
        <!-- End of Main View -->
    </div>
</template>

<script>
export default {
    name: "app",
    props: {
        source: String
    },
    data: () => ({
        user: { name: "", username: "", email: "" },
        dialog: false,
        drawer: null,
        items: [
            {
                icon: "mdi-chart-areaspline",
                text: "Dashboard",
                link: { name: "admin.dashboard.index" }
            },
            {
                icon: "mdi-clipboard-account",
                text: "Employees",
                link: { name: "admin.employees.index" }
            },
            {
                icon: "mdi-cash-multiple",
                text: "Expenses",
                link: { name: "admin.expenses.index" }
            },
            {
                icon: "mdi-file-chart",
                text: "Expense Reports",
                link: { name: "admin.expense_reports.index" }
            },
            {
                icon: "mdi-currency-usd",
                text: "Payments",
                link: { name: "admin.payments.index" }
            },
            {
                icon: "mdi-chevron-up",
                "icon-alt": "mdi-chevron-down",
                text: "More",
                model: false,
                children: [
                    {
                        icon: "mdi-circle-medium",
                        text: "Vendors",
                        link: { name: "admin.vendors.index" }
                    },
                    {
                        icon: "mdi-circle-medium",
                        text: "Departments",
                        link: { name: "admin.departments.index" }
                    },
                    {
                        icon: "mdi-circle-medium",
                        text: "Job Designations",
                        link: { name: "admin.jobs.index" }
                    },
                    {
                        icon: "mdi-circle-medium",
                        text: "Expense Types",
                        link: { name: "admin.expense_types.index" }
                    },
                    {
                        icon: "mdi-circle-medium",
                        text: "Adjustments",
                        link: { name: "admin.adjustments.index" }
                    },
                    // {
                    //     icon: "mdi-circle-medium",
                    //     text: "Users",
                    //     link: { name: "admin.users.index" }
                    // },
                    {
                        icon: "mdi-circle-medium",
                        text: "Activity Logs",
                        link: { name: "admin.activity_logs.index" }
                    },
                    {
                        icon: "mdi-circle-medium",
                        text: "Settings",
                        link: { name: "admin.settings.index" }
                    }
                    // {
                    //     icon: "mdi-circle-medium",
                    //     text: "Roles",
                    //     // link: { name: "admin.roles.index" }
                    // },
                    // {
                    //     icon: "mdi-circle-medium",
                    //     text: "Permissions",
                    //     // link: { name: "admin.permissions.index" }
                    // },
                    // {
                    //     icon: "mdi-circle-medium",
                    //     text: "Vendors",
                    //     link: { name: "admin.vendors.index" }
                    // },
                ]
            }
            // {
            //     icon: "mdi-chevron-up",
            //     "icon-alt": "mdi-chevron-down",
            //     text: "Users",
            //     model: false,
            //     children: [
            //         {
            //             icon: "mdi-circle-medium",
            //             text: "View All",
            //             link: { name: "admin.users.index" }
            //         },
            //         {
            //             icon: "mdi-circle-medium",
            //             text: "Roles",
            //             // link: { name: "admin.roles.index" }
            //         },
            //         {
            //             icon: "mdi-circle-medium",
            //             text: "Permissions",
            //             // link: { name: "admin.permissions.index" }
            //         },
            //     ]
            // }
        ]
    }),
    computed: {
        loggedIn() {
            return this.$store.getters.isAuthenticated;
        }
    },
    methods: {
        getCurrentUser() {
            let _this = this;
            axios
                .get("/api/user")
                .then(response => {
                    this.user = response.data.data;
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);

                    _this.errorDialog(
                        `Error ${error.response.status}`,
                        error.response.statusText
                    );

                    _this.$router.push({ name: "login" });
                });
        },
        toProfile() {
            // Added () => {} on router, used to prevent NavigationDuplicated error
            this.$router.push({ name: "admin.profile.index" }, () => {});
        },
        onLogout() {
            this.$confirm("Do you want to log out?").then(res => {
                if (res) {
                    this.$router.push({ name: "logout" });
                }
            });
        }
    },
    created() {
        axios.interceptors.response.use(
            function(response) {
                return response;
            },
            function(error) {
                if (error.response.status === 401) {
                    store.dispatch("AUTH_LOGOUT");
                    window.location.replace("/login");
                    // router.push("/login");
                }
                return Promise.reject(error);
            }
        );

        this.getCurrentUser();

        // console.log("user", this.$currentUser);
        // console.log("permisiions", this.$permissions);
    }
};
</script>
