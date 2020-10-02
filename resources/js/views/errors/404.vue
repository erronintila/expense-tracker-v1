<template>
    <v-container fill-height fluid>
        <v-row align="center" justify="center">
            <v-col>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-container>
                            <v-img :src="src" class="ml-15"></v-img>
                        </v-container>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-container>
                            <v-layout row wrap>
                                <v-flex xs12>
                                    <v-card
                                        class="mt-md-10"
                                        color="transparent"
                                        flat
                                    >
                                        <div class="display-3 mt-5 mb-3">
                                            Page not found.
                                        </div>
                                        <div class="grey--text lighten-5">
                                            We could not find the page you were
                                            looking for.
                                        </div>
                                        <div class="paragraph-text mt-2">
                                            <br />
                                            <br />Try going back to home page
                                            and repeating your action. Or,
                                            contact helpdesk for support.
                                        </div>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-container>
                        <!-- <v-container>
                            <v-card class="elevation-0 mr-md-15 mt-md-10" flat>
                                
                            </v-card>
                        </v-container> -->
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
    <!-- <div>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-card height="400" color="transparent" flat>
                        <div class="display-3 mt-5 mb-3">Page not found.</div>
                        <div class="grey--text lighten-5">
                            We could not find the page you were looking for.
                        </div>
                        <div class="paragraph-text mt-2">
                            <br />
                            <br />Try going back to home page and repeating your
                            action. Or, contact helpdesk for support.
                        </div>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div> -->
</template>

<script>
export default {
    data() {
        return {
            src: require("../../assets/img/404.svg")
        };
    }
};
</script>
