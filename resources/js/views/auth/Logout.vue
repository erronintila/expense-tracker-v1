<template>
    <div>
        <!-- <v-overlay :value="overlay" opacity="100" color="success">
            <v-progress-circular indeterminate size="80"> </v-progress-circular>
        </v-overlay> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            // overlay: false
        };
    },
    created() {
        // this.overlay = true;

        // setTimeout(() => {
        //     this.overlay = false;

        //     this.$store.dispatch("AUTH_LOGOUT").then(response => {
        //         this.$router.push({ name: "login" });
        //     });
        // }, 1000);

        this.$store.dispatch("AUTH_LOGOUT").then(response => {
            this.$router.push({ name: "login" });
        });
    }
};
</script>
