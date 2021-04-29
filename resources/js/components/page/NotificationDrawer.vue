<template>
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
                    >
                        {{ $store.getters.notifications.data.length }}
                        Unread
                    </v-list-item-subtitle>
                    <v-list-item-subtitle v-else>
                        No notifications
                    </v-list-item-subtitle>
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

        <v-list two-line>
            <v-list-item-group active-class="">
                <template
                    v-for="(item, index) in $store.getters.notifications.data"
                >
                    <v-list-item :key="item.id" @click="redirectPage(item)">
                        <template>
                            <v-list-item-content>
                                <v-list-item-title
                                    v-text="item.data.data.user.full_name"
                                >
                                </v-list-item-title>

                                <v-list-item-subtitle
                                    class="text--primary"
                                    v-text="item.data.data.description"
                                >
                                </v-list-item-subtitle>

                                <v-list-item-subtitle
                                    v-text="mixin_getHumanDate(item.created_at)"
                                >
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </template>
                    </v-list-item>

                    <v-divider
                        v-if="
                            index < $store.getters.notifications.data.length - 1
                        "
                        :key="index"
                    >
                    </v-divider>
                </template>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: "notification-drawer",
    props: {
        appNotificationDrawer: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            notificationDrawer: false
        };
    },
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
        }
    },
    watch: {
        appNotificationDrawer: {
            immediate: true,
            handler(newValue) {
                this.notificationDrawer = newValue;
            }
        },
        notificationDrawer() {
            this.$emit("show-notification-drawer", this.notificationDrawer);
        }
    }
};
</script>
