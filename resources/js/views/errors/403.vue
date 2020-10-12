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
                                            Forbidden.
                                        </div>
                                        <div class="grey--text lighten-5">
                                            You are not allowed/authorized to access this page.
                                        </div>
                                        <div class="paragraph-text mt-2">
                                            <br />
                                            <br />Contact helpdesk for support.
                                        </div>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            src: require("../../assets/img/403.svg")
        };
    }
};
</script>
