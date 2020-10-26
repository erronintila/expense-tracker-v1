<template>
    <div></div>
</template>

<script>
export default {
    data() {
        return {};
    },
    created() {
        let _this = this;
        this.$store.dispatch("AUTH_LOGOUT").then(response => {
            _this.$router.push({ name: "login" });
            // window.location.replace("/login");
        });
        // this.$store.dispatch("AUTH_LOGOUT").then(response => {
        //     // this.$router.push({ name: "login" });
        //     window.location.replace("/login");
        // });
    }
};
</script>
