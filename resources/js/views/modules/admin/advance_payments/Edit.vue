<template>
    <div>
        <loader-component v-if="!formDataLoaded"></loader-component>
        <v-card v-else class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <h4 class="title green--text">Edit Advance Payment</h4>
            </v-card-title>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formDataLoaded: false
        };
    },
    created() {
        this.formDataLoaded = true;
    }
};
</script>
