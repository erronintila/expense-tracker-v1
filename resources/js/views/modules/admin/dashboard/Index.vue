<template>
    <v-app>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <h4 class="title green--text">Dashboard</h4>
                <v-spacer></v-spacer>
            </v-card-title>
            <v-card-subtitle> </v-card-subtitle>
        </v-card>
    </v-app>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
    computed: {
        // ...mapGetters(["currentUser"])
    },
    created() {}
};
</script>
