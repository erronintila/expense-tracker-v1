<template>
    <div>
        <!-- Navigation Drawer -->
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

            <template v-slot:append>
                <!-- <div
                    class="text-center mt-5 mb-5"
                    v-if="$store.getters.user.fund > 0"
                >
                    <div>
                        <v-divider width="50%" inset></v-divider>
                    </div>
                    <div class="overline text--secondary">
                        Remaining Fund
                    </div>
                    <v-btn
                        text
                        class="headline green--text"
                        @click="mixin_validate_fund"
                    >
                        {{
                            mixin_formatNumber(
                                $store.getters.user.remaining_fund
                            )
                        }}
                    </v-btn>
                    <div class="text--secondary">
                        /
                        {{
                            mixin_formatNumber(
                                $store.getters.user.fund
                            )
                        }}
                    </div>
                </div> -->

                <div class="pa-2">
                    <v-btn block color="green" dark outlined @click="onLogout">
                        Logout
                    </v-btn>
                </div>
            </template>
        </v-navigation-drawer>
        <!-- End of Navigation Drawer -->

        <!-- App Bar -->
        <v-app-bar
            :clipped-left="$vuetify.breakpoint.lgAndUp"
            app
            color="green"
            class="elevation-1"
            dark
            v-if="mixin_loggedIn"
        >
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
                <router-link
                    :to="{ name: 'user.dashboard.index' }"
                    style="text-decoration: none; color: inherit;"
                >
                    <span class="title">Expense Tracker</span>
                </router-link>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        icon
                        v-bind="attrs"
                        v-on="on"
                        @click.stop="notificationDrawer = !notificationDrawer"
                    >
                        <v-badge
                            :content="$store.getters.notifications.data.length"
                            :value="$store.getters.notifications.data.length"
                            color="red"
                            overlap
                        >
                            <v-icon>mdi-bell</v-icon>
                        </v-badge>
                    </v-btn>
                </template>
                <span>Notifications</span>
            </v-tooltip>

            <v-tooltip bottom>
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
        <v-main v-if="mixin_loggedIn">
            <!-- <v-container> -->
            <v-row class="ml-2 mr-2 mt-4 pb-12 mb-5">
                <v-col>
                    <!-- <keep-alive>
                        <router-view></router-view>
                    </keep-alive> -->

                    <transition name="fade" mode="out-in">
                        <keep-alive>
                            <router-view
                                v-if="$route.meta.keepAlive"
                            ></router-view>
                        </keep-alive>
                    </transition>

                    <transition name="fade" mode="out-in">
                        <router-view
                            v-if="!$route.meta.keepAlive"
                        ></router-view>
                    </transition>
                </v-col>
            </v-row>
            <!-- </v-container> -->

            <v-footer fixed padless>
                <v-col class="text-right" cols="12">
                    <small
                        >© 2020 Copyright —
                        <strong>Twin-Circa Marketing</strong></small
                    >
                </v-col>
            </v-footer>
        </v-main>
        <!-- End of Main View -->

        <!-- Notifications Drawer -->
        <v-navigation-drawer
            v-model="notificationDrawer"
            right
            fixed
            app
            temporary
            :clipped="$vuetify.breakpoint.lgAndUp"
            floating
        >
            <template v-slot:prepend>
                <v-list-item two-line>
                    <v-list-item-avatar>
                        <v-icon>mdi-bell</v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>Notifications</v-list-item-title>
                        <v-list-item-subtitle
                            v-if="$store.getters.notifications.data.length > 0"
                            >{{
                                $store.getters.notifications.data.length
                            }}
                            Unread</v-list-item-subtitle
                        >
                        <v-list-item-subtitle v-else
                            >No notifications</v-list-item-subtitle
                        >
                        <v-list-item-title>
                            <router-link
                                :to="{ name: 'user.notifications.index' }"
                                class="text-decoration-none"
                                style="color: #4caf50"
                            >
                                View all
                            </router-link>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>

            <v-divider></v-divider>

            <!-- <v-list dense shaped>
                <template
                    v-for="(item, index) in $store.getters.notifications.data"
                >
                    <v-list-item
                        color="green"
                        :key="index"
                        :to="
                            `/admin/${item.data.data.model}/${item.data.data.id}`
                        "
                        link
                    >
                        <v-list-item-content>
                            <v-list-item-title
                                v-text="item.data.data.full_name  + '-' + index"
                            ></v-list-item-title>

                            <v-list-item-subtitle
                                class="text--primary"
                                v-text="item.data.data.description"
                            ></v-list-item-subtitle>

                            <v-list-item-subtitle
                                v-text="mixin_getHumanDate(item.created_at)"
                            ></v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list> -->

            <!-- `/admin/${item.data.data.model}/${item.data.data.id}` -->

            <v-list two-line>
                <v-list-item-group active-class="">
                    <template
                        v-for="(item, index) in $store.getters.notifications
                            .data"
                    >
                        <v-list-item :key="item.id" @click="redirectPage(item)">
                            <template>
                                <v-list-item-content>
                                    <v-list-item-title
                                        v-text="item.data.data.user.full_name"
                                    ></v-list-item-title>

                                    <v-list-item-subtitle
                                        class="text--primary"
                                        v-text="item.data.data.description"
                                    ></v-list-item-subtitle>

                                    <v-list-item-subtitle
                                        v-text="
                                            mixin_getHumanDate(item.created_at)
                                        "
                                    ></v-list-item-subtitle>
                                </v-list-item-content>
                            </template>
                        </v-list-item>

                        <v-divider
                            v-if="index < items.length - 1"
                            :key="index"
                        ></v-divider>
                    </template>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <!-- End of Notifications Drawer -->
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
        notificationDrawer: null,
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
    }),
    methods: {
        redirectPage(item) {
            axios
                .put(
                    `/api/notifications/${
                        item.id
                    }?action=${"read"}&type=${"single"}`
                )
                .then(response => {
                    this.$store.dispatch("AUTH_NOTIFICATIONS");

                    window.location.replace(
                        `/${item.data.data.model}/${item.data.data.id}`
                    );

                    // this.$router.replace(
                    //     `/admin/${item.data.data.model}/${item.data.data.id}`
                    // );
                })
                .catch(error => {
                    this.mixin_showErrors(error);
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
                // children: [
                // {
                //     icon: "mdi-clipboard-account",
                //     text: "Employees",
                //     link: { name: "admin.users.index" }
                // },
                // {
                //     icon: "mdi-account-group",
                //     text: "Vendors",
                //     link: { name: "admin.vendors.index" }
                // },
                // {
                //     icon: "mdi-clipboard-file",
                //     text: "Departments",
                //     link: { name: "admin.departments.index" }
                // },
                // {
                //     icon: "mdi-briefcase",
                //     text: "Job Designations",
                //     link: { name: "admin.jobs.index" }
                // },
                // {
                //     icon: "mdi-file-cog-outline",
                //     text: "Expense Types",
                //     link: { name: "admin.expense_types.index" }
                // },
                // {
                //     icon: "mdi-format-list-numbered",
                //     text: "Activity Logs",
                //     link: { name: "admin.activity_logs.index" }
                // },
                // {
                //     icon: "mdi-cog",
                //     text: "Settings",
                //     link: { name: "admin.settings.index" }
                // }
                // ]
            });
        }
    },
    created() {
        console.log("new");
        this.$store.dispatch("AUTH_USER").then(response => {
            this.user = response;
            // this.$store.dispatch("AUTH_NOTIFICATIONS");
        });
    },
    activated() {
        console.log("new");
        this.$store.dispatch("AUTH_USER").then(response => {
            this.user = response;
            // this.$store.dispatch("AUTH_NOTIFICATIONS");
        });
    }
};
</script>

<style scoped>
#app {
    overflow: hidden;
    width: 100vw;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
    /* transform: translateX(2em); */
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s ease;
}
</style>
