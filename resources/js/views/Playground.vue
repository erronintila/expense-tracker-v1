<template lang="">
    <div></div>
</template>
<script>
export default {
    data() {
        return {
            user: {}
        };
    },
    methods: {
        async getUser() {
            let res = await axios.get("/api/users/1");
            try {
                return {data: res.data.data};
            } catch (error) {
                return {data: error.response};
            }
        },
        async displayUser() {
            this.user = await this.getUser();
            console.log(this.user);
        }
    },
    mounted() {
        this.displayUser();
    }
};
</script>
<style lang=""></style>
