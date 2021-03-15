<template>
    <div>
        <loader-component v-if="!formDataLoaded"></loader-component>
        <v-card v-else class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <h4 class="title green--text">New Department</h4>
            </v-card-title>
            <v-container>
                <Form @on-save="onSave" :errors="errors"></Form>
            </v-container>
        </v-card>
    </div>
</template>

<script>
import DepartmentDataService from "../../../../services/DepartmentDataService";
import Form from "./Form";

export default {
    components: {
        Form
    },
    data() {
        return {
            formDataLoaded: true,
            errors: {
                name: []
            }
        };
    },
    methods: {
        onSave(value) {
            DepartmentDataService.store(value)
                .then(response => {
                    this.mixin_successDialog(
                        response.data.status,
                        response.data.message
                    );

                    this.$router.push({ name: "admin.departments.index" });
                })
                .catch(error => {
                    this.mixin_showErrors(error);

                    if (error.response) {
                        if (error.response.data) {
                            this.errors = error.response.data.errors;
                        }
                    }
                });
        }
    }
};
</script>
