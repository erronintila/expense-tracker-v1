<template>
    <v-app id="inspire">
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
                        <img
                            src="https://randomuser.me/api/portraits/men/81.jpg"
                        />
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>
                            <router-link
                                to="/profile"
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
                    to="/dashboard"
                    style="text-decoration: none; color: inherit;"
                >
                    <span class="title">Expense Tracker</span>
                </router-link>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon @click="onLogout">
                <v-icon>mdi-logout</v-icon>
            </v-btn>
        </v-app-bar>
        <!-- End of App Bar -->

        <!-- Main View -->
        <v-main>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-col>
                        <router-view></router-view>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
        <!-- End of Main View -->
    </v-app>
</template>

<script>
export default {
    name: "app",
    props: {
        source: String
    },
    data: () => ({
        user: { name: "", username: "", email: "", is_admin: 0 },
        dialog: false,
        drawer: null,
        items: [
            {
                icon: "mdi-chart-areaspline",
                text: "Dashboard",
                link: { name: "user.dashboard.index" }
            },
            {
                icon: "mdi-cash-multiple",
                text: "Expenses",
                link: { name: "user.expenses.index" }
            },
            {
                icon: "mdi-file-chart",
                text: "Reports",
                link: { name: "user.reports.index" }
            }
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
                    _this.user = response.data.data;
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);
                });
        },
        toProfile() {
            // Added () => {} on router, used to prevent NavigationDuplicated error
            this.$router.push({ name: "user.profile.index" }, () => {});
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
        axios.defaults.headers.common["Authorization"] =
            "Bearer " + localStorage.getItem("access_token");

        this.getCurrentUser();
    }
};
</script>
