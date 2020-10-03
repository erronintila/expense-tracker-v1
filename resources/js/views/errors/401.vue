<template>
    <v-container fill-height fluid>
        <v-row align="center" justify="center">
            <v-col>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-container>
                            <v-img
                                :src="src"
                                class="ml-15"
                            ></v-img>
                        </v-container>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-container>
                            <v-card class="elevation-0 mr-md-15 mt-md-10" flat>
                                <v-card-title>
                                    <div class="headline mb-4 green--text">
                                        EXPENSE TRACKER
                                    </div>
                                </v-card-title>
                                <v-card-text>
                                    
                                </v-card-text>
                            </v-card>
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
            src: require("../../assets/img/404.svg")
        }
    },
};
</script>
