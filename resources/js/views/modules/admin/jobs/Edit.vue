<template>
    <div>
        <loader-component v-if="!formDataLoaded"></loader-component>
        <v-card v-else class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <h4 class="title green--text">Edit Job Designation</h4>
            </v-card-title>
            <v-container>
                <Form :errors="errors" :jobForm="form" @on-save="onSave"></Form>
            </v-container>
        </v-card>
    </div>
</template>

<script>
import JobDataService from "../../../../services/JobDataService";
import Form from "./Form";

export default {
    components: {
        Form
    },
    data() {
        return {
            formDataLoaded: false,
            form: {
                name: "",
                department: null
            },
            errors: {
                name: [],
                department_id: []
            }
        };
    },
    methods: {
        getData() {
            JobDataService.show(this.$route.params.id)
                .then(response => {
                    let data = response.data.data;
                    this.form.name = data.name;
                    this.form.department = data.department;
                    this.formDataLoaded = true;
                })
                .catch(error => {
                    this.mixin_showErrors(error);
                    if (error.response) {
                        if (error.response.data) {
                            this.errors = error.response.data.errors;
                        }
                    }
                    this.formDataLoaded = true;
                });
        },
        onSave(value) {
            let data = {
                name: value.name,
                department_id: value.department.id
            };

            JobDataService.update(this.$route.params.id, data)
                .then(response => {
                    this.mixin_successDialog(
                        response.data.status,
                        response.data.message
                    );
                    this.$router.push({ name: "admin.jobs.index" });
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
    },
    created() {
        this.getData();
    },
    activated() {
        this.getData();
    }
};
</script>
