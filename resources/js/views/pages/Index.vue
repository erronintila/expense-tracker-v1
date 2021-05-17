<template>
    <div>
        <application-bar
            :showNotificationDrawer="notificationDrawer"
            @show-drawer="showDrawer"
            @show-notification-drawer="showNotificationDrawer"
            @on-logout="onLogout"
        >
        </application-bar>

        <navigation-drawer :user="user" :showNavigationDrawer="drawer" @show-drawer="showDrawer" @on-logout="onLogout">
        </navigation-drawer>

        <notification-drawer
            :appNotificationDrawer="notificationDrawer"
            @show-notification-drawer="showNotificationDrawer"
        >
        </notification-drawer>

        <!-- Main View -->
        <v-main v-if="mixin_loggedIn">
            <v-row class="ml-2 mr-2 mt-4 pb-12 mb-5">
                <v-col>
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

            <page-footer></page-footer>
        </v-main>
        <!-- End of Main View -->
    </div>
</template>

<script>
import ApplicationBar from "../../components/page/ApplicationBar";
import NavigationDrawer from "../../components/page/NavigationDrawer";
import NotificationDrawer from "../../components/page/NotificationDrawer";
import PageFooter from "../../components/page/PageFooter";

export default {
    name: "app",
    components: {
        ApplicationBar,
        NavigationDrawer,
        NotificationDrawer,
        PageFooter
    },
    data: () => ({
        user: { name: "", username: "", email: "" },
        drawer: true,
        notificationDrawer: false
    }),
    methods: {
        showDrawer(e) {
            this.drawer = e;
        },
        showNotificationDrawer(e) {
            this.notificationDrawer = e;
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
        this.$store.dispatch("AUTH_USER").then(response => {
            this.user = response;
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
