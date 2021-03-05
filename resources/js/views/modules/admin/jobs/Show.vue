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
import JobDataService from "../../../../services/JobDataService";

export default {
    data() {
        return {};
    },
    methods: {
        loadItem() {
            JobDataService.show(this.$route.params.id)
                .then(function(response) {})
                .catch(function(error) {
                    this.mixin_showErrors(error);
                });
        }
    },
    created() {
        this.loadItem();
    },
    activated() {
        this.loadItem();
    },
    deactivated() {
        Object.assign(this.$data, this.$options.data());
    }
};
</script>
