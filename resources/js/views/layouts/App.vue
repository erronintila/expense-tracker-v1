<template>
    <v-app id="inspire">
        <!-- Navigation Drawer -->
        <v-navigation-drawer
            v-model="drawer"
            :clipped="$vuetify.breakpoint.lgAndUp"
            app
            v-if="loggedIn"
        >
            <v-list dense>
                <v-list-item two-line>
                    <v-list-item-avatar>
                        <img
                            src="https://randomuser.me/api/portraits/men/81.jpg"
                        />
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>Erron Intila</v-list-item-title>
                        <v-list-item-subtitle>
                            Administrator
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

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
                    <v-list-item v-else :key="item.text" :to="item.link" link>
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
                <span class="title">Expense Tracker</span>
                <!-- <span class="title ml-3 mr-5">Expense&nbsp;<span class="font-weight-light">Tracker</span></span> -->
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <!-- <v-menu
                :close-on-content-click="false"
                :nudge-width="200"
                offset-y
                left
                bottom
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-badge
                            color="red"
                            overlap
                            v-if="notifications.length > 0"
                        >
                            <template v-slot:badge>
                                <span>5</span>
                            </template>

                            <v-icon>mdi-bell</v-icon>
                        </v-badge>

                        <v-icon v-else>mdi-bell</v-icon>
                    </v-btn>
                </template>

                <v-card>
                    <v-list>
                        <v-list-item>
                            <v-icon class="mr-4">mdi-bell</v-icon>
                            <v-list-item-content>
                                <v-list-item-title>
                                    Notifications
                                </v-list-item-title>
                                <v-list-item-subtitle
                                    v-if="notifications.length > 0"
                                >
                                    {{ notifications.length }}
                                    unread
                                </v-list-item-subtitle>
                                <v-list-item-subtitle v-else>
                                    No notifications
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>

                    <v-divider></v-divider>

                    <v-list>
                        <v-list-item
                            v-for="item in notifications.slice(0, 3)"
                            :key="item.title"
                            @click="() => {}"
                        >
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ item.title }}
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    {{ item.created_at }}
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>

                    <v-card-actions v-if="notifications.length > 0">
                        <v-spacer></v-spacer>
                        <v-btn color="green" text @click="() => {}">
                            See all
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-menu> -->

            <v-menu
                :close-on-content-click="false"
                :nudge-width="200"
                offset-y
                left
                bottom
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>

                <v-card>
                    <v-list>
                        <v-list-item>
                            <v-list-item-avatar>
                                <img
                                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                                    alt="John"
                                />
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title>
                                    Erron Intila
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    Administrator
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>

                    <v-divider></v-divider>

                    <v-list>
                        <v-list-item to="/admin/profile">
                            <v-list-item-title>My Profile</v-list-item-title>
                        </v-list-item>

                        <v-list-item @click="() => {}">
                            <v-list-item-title>Settings</v-list-item-title>
                        </v-list-item>
                    </v-list>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green" text :to="{ name: 'logout' }">
                            Log out
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-menu>
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

        <!-- <v-btn color="green" text @click="logout">Log out</v-btn> -->

        <!-- Footer -->
        <!-- <v-footer color="green darken-2" app>
            <span class="white--text"
                >&copy; {{ new Date().getFullYear() }}</span
            >
        </v-footer> -->
        <!-- End of Footer -->
    </v-app>
</template>

<script>
export default {
    name: "app",
    props: {
        source: String
    },
    data: () => ({
        notifications: [],
        // notifications: [
        //     { title: "5 Pending Reports", link: "", created_at: "3 hours ago" },
        //     {
        //         title: "Mike added new report",
        //         link: "",
        //         created_at: "5 hours ago"
        //     },
        //     {
        //         title: "Sheena approved payment",
        //         link: "",
        //         created_at: "10 hours ago"
        //     },
        //     {
        //         title: "Sheena approved payment",
        //         link: "",
        //         created_at: "10 hours ago"
        //     },
        //     {
        //         title: "Sheena approved payment",
        //         link: "",
        //         created_at: "10 hours ago"
        //     }
        // ],
        dialog: false,
        drawer: null,
        admin_items: [],
        user_items: [],
        items: [
            {
                icon: "mdi-chart-areaspline",
                text: "Dashboard",
                link: { name: "admin.dashboard.index" }
            },
            {
                icon: "mdi-cash-multiple",
                text: "Expenses",
                link: { name: "admin.expenses.index" }
            },
            {
                icon: "mdi-clipboard-account",
                text: "Employees",
                link: { name: "admin.employees.index" }
            },
            {
                icon: "mdi-file-chart",
                text: "Reports",
                link: { name: "admin.reports.index" }
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
                        text: "Users",
                        link: { name: "admin.users.index" }
                    },
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
                    }
                ]
            },
            {
                icon: "mdi-logout",
                text: "Logout",
                link: { name: "logout" }
            }
        ]
    }),
    computed: {
        loggedIn() {
            return this.$store.getters.isAuthenticated;
        }
    }
};
</script>
