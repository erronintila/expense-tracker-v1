<template>
    <div>
        <!-- <v-app-bar app color="white" flat>
            <v-container class="py-0 fill-height">
                <v-menu right bottom offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on">
                            <v-icon>mdi-account-circle</v-icon>
                        </v-btn>
                    </template>

                    <v-list>
                        <v-list-item v-for="n in 5" :key="n" @click="() => {}">
                            <v-list-item-title
                                >Option {{ n }}</v-list-item-title
                            >
                        </v-list-item>
                    </v-list>
                </v-menu>

                <v-btn v-for="link in links" :key="link" text>
                    {{ link }}
                </v-btn>

                <v-spacer></v-spacer>
            </v-container>
        </v-app-bar> -->

        <v-app-bar app color="white" flat>
            <v-avatar
                :color="
                    $vuetify.breakpoint.smAndDown
                        ? 'grey darken-1'
                        : 'transparent'
                "
                size="32"
            ></v-avatar>

            <v-tabs centered class="ml-n9" color="grey darken-1">
                <v-tab v-for="link in links" :key="link">
                    {{ link }}
                </v-tab>
            </v-tabs>

            <v-avatar
                class="hidden-sm-and-down"
                color="grey darken-1 shrink"
                size="32"
            ></v-avatar>
        </v-app-bar>

        <v-main class="grey lighten-3">
            <v-container>
                <v-row>
                    <v-col>
                        <v-sheet min-height="70vh" rounded="lg">
                            <v-card min-height="70vh">
                                <v-card-text>
                                    <v-speed-dial
                                        v-model="fab"
                                        bottom
                                        right
                                        direction="top"
                                        transition="slide-y-reverse-transition"
                                        style="position: absolute"
                                    >
                                        <template v-slot:activator>
                                            <v-btn
                                                v-model="fab"
                                                color="green darken-2"
                                                dark
                                                fab
                                            >
                                                <v-icon v-if="fab">
                                                    mdi-close
                                                </v-icon>
                                                <v-icon v-else>
                                                    mdi-account-circle
                                                </v-icon>
                                            </v-btn>
                                        </template>
                                        <v-btn fab dark small color="green">
                                            <v-icon>mdi-pencil</v-icon>
                                        </v-btn>
                                        <v-btn fab dark small color="indigo">
                                            <v-icon>mdi-plus</v-icon>
                                        </v-btn>
                                        <v-btn fab dark small color="red">
                                            <v-icon>mdi-delete</v-icon>
                                        </v-btn>
                                    </v-speed-dial>
                                </v-card-text>
                            </v-card>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </div>
</template>

<script>
export default {
    data: () => ({
        fab: false,
        links: ["Dashboard", "Expenses", "Reports"]
    })
};
</script>
