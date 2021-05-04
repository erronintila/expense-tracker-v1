<template>
    <v-app-bar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        app
        color="green"
        class="elevation-1"
        dark
        v-if="mixin_loggedIn"
    >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
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
</template>

<script>
export default {
    name: "application-bar",
    props: {
        showNotificationDrawer: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            drawer: true,
            notificationDrawer: false
        };
    },
    methods: {
        onLogout() {
            this.$emit("on-logout");
        }
    },
    watch: {
        drawer() {
            this.$emit("show-drawer", this.drawer);
        },
        notificationDrawer() {
            this.$emit("show-notification-drawer", this.notificationDrawer);
        },
        showNotificationDrawer: {
            immediate: true,
            handler(newValue) {
                this.notificationDrawer = newValue;
            }
        }
    }
};
</script>
