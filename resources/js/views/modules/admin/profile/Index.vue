<template>
    <v-app>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <h4 class="title green--text">Profile</h4>
                <v-spacer></v-spacer>
            </v-card-title>
            <v-card-subtitle>
                Hello {{ user.name }} ({{ user.email }})
            </v-card-subtitle>
        </v-card>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: "",
                email: "",
                username: ""
            }
        };
    },
    created() {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " + localStorage.getItem("access_token");

        axios.get("/api/user").then(response => {
            this.user = response.data;
        });
    }
};
</script>
