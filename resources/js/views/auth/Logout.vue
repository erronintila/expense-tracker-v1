<template>
    <v-app> </v-app>
</template>

<script>
export default {
    created() {
        this.$store.dispatch("AUTH_LOGOUT").then(response => {
            this.$router.push({ name: "login" });
        });
    }
};
</script>
