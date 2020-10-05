<template>
    <v-card class="elevation-0 pt-0">
        <v-card-title class="pt-0">
            <v-btn @click="$router.go(-1)" class="mr-3" icon>
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>

            <v-spacer></v-spacer>

            <h4 class="title green--text">New Permission</h4>
        </v-card-title>

        <v-form ref="form" v-model="valid">
            <v-container>
                <v-row>
                    <v-col cols="12" md="12">
                        <v-text-field label="Permission *" required></v-text-field>
                    </v-col>
                </v-row>

                <small class="text--secondary">
                    * indicates required field
                </small>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green" dark @click="onSave">Save</v-btn>
                    <v-btn @click="$router.go(-1)">Cancel</v-btn>
                </v-card-actions>
            </v-container>
        </v-form>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            valid: false,
            name: "",
            rules: {},
            errors: {}
        };
    },
    methods: {
        onSave() {}
    },
    created() {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " + localStorage.getItem("access_token");
    }
};
</script>
