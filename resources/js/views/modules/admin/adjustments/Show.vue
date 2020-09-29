<template>
    <div>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">User Details</h4>
            </v-card-title>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        loadItem() {
            let _this = this;

            axios
                .get(`/api/users/${_this.$route.params.id}`)
                .then(function(response) {
                    console.log(response.data);
                })
                .catch(function(error) {
                    console.log(error);
                    console.log(error.response);
                });
        }
    },
    created() {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " + localStorage.getItem("access_token");

        this.loadItem();
    },
    mounted() {}
};
</script>
