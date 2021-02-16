<template>
    <v-card class="elevation-0 pt-0">
        <v-card-title class="pt-0">
            <v-btn @click="$router.go(-1)" class="mr-3" icon>
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>

            <v-spacer></v-spacer>

            <h4 class="title green--text">Activity Log Details</h4>
        </v-card-title>
    </v-card>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        getData() {
            let _this = this;

            axios
                .get(`/api/activity_logs/${_this.$route.params.id}`)
                .then(function(response) {
                })
                .catch(function(error) {
                    console.log(error);
                    console.log(error.response);

                    _this.mixin_errorDialog(
                        `Error ${error.response.status}`,
                        error.response.statusText
                    );
                });
        }
    },
    created() {
        this.getData();
    },
    activated() {
        this.getData();
    },
    deactivated() {
        Object.assign(this.$data, this.$options.data());
    }
};
</script>
