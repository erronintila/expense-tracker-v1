<template>
    <v-navigation-drawer
        v-model="drawer"
        :clipped="$vuetify.breakpoint.lgAndUp"
        floating
        app
        v-if="mixin_loggedIn"
    >
        <v-list dense shaped>
            <v-list-item two-line>
                <v-list-item-avatar>
                    <img :src="require('../../assets/img/user.png')" />
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>
                        <router-link
                            :to="{ name: 'user.profile.index' }"
                            class="text-decoration-none"
                            style="color: #4caf50"
                        >
                            {{ user.name }}
                        </router-link>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        {{ user.email }}
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <template v-for="item in items">
                <v-row v-if="item.heading" :key="item.heading" align="center">
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
                    :prepend-icon="item.model ? item.icon : item['icon-alt']"
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

        <template v-slot:append>
            <div class="pa-2">
                <v-btn block color="green" dark outlined @click="onLogout">
                    Logout
                </v-btn>
            </div>
        </template>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: "navigation-drawer",
    props: {
        user: {
            type: Object,
            default: () => {
                return {
                    name: "",
                    username: "",
                    email: ""
                }
            }
        },
        showNavigationDrawer: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            drawer: true,
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
                    text: "Expense Reports",
                    link: { name: "user.expense_reports.index" }
                },
                {
                    icon: "mdi-currency-usd",
                    text: "Payment Records",
                    link: { name: "user.payments.index" }
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
        };
    },
    beforeMount() {
        if (this.$store.getters.user.is_admin) {
            let children = [];

            if (this.mixin_can("view all users")) {
                children.push({
                    icon: "mdi-clipboard-account",
                    text: "Employees",
                    link: { name: "admin.users.index" }
                });
            }

            if (this.mixin_can("view all vendors")) {
                children.push({
                    icon: "mdi-account-group",
                    text: "Vendors",
                    link: { name: "admin.vendors.index" }
                });
            }

            if (this.mixin_can("view all departments")) {
                children.push({
                    icon: "mdi-clipboard-file",
                    text: "Departments",
                    link: { name: "admin.departments.index" }
                });
            }

            if (this.mixin_can("view all jobs")) {
                children.push({
                    icon: "mdi-briefcase",
                    text: "Job Designations",
                    link: { name: "admin.jobs.index" }
                });
            }

            if (this.mixin_can("view all expense types")) {
                children.push({
                    icon: "mdi-file-cog-outline",
                    text: "Expense Types",
                    link: { name: "admin.expense_types.index" }
                });
            }

            children.push({
                    icon: "mdi-format-list-numbered",
                    text: "Analytics",
                    link: { name: "admin.analytics.index" }
                });

            if (this.mixin_can("view all activity logs")) {
                children.push({
                    icon: "mdi-format-list-numbered",
                    text: "Activity Logs",
                    link: { name: "admin.activity_logs.index" }
                });
            }

            if (this.mixin_can("manage settings")) {
                children.push({
                    icon: "mdi-cog",
                    text: "Settings",
                    link: { name: "admin.settings.index" }
                });
            }

            this.items.push({
                icon: "mdi-chevron-up",
                "icon-alt": "mdi-chevron-down",
                text: "More",
                model: false,
                children: children
            });
        }
    },
    methods: {
        onLogout() {
            this.$emit("on-logout");
        }
    },
    watch: {
        showNavigationDrawer: {
            handler(newValue) {
                this.drawer = newValue
            }
        },
        drawer() {
            this.$emit("show-drawer", this.drawer);
        }
    }
};
</script>
