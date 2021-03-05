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
import ExpenseTypeDataService from "../../../../services/ExpenseTypeDataService";

export default {
    data() {
        return {};
    },
    methods: {
        loadItem() {
            ExpenseTypeDataService.show(this.$route.params.id)
                .then(response => {})
                .catch(error => {
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
