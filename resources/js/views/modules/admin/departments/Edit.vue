<template>
    <div>
        <loader-component v-if="!formDataLoaded"></loader-component>
        <v-card v-else class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">Edit Department</h4>
            </v-card-title>

            <v-container>
                <Form
                    @on-save="onSave"
                    :departmentForm="form"
                    :errors="errors"
                ></Form>
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
            formDataLoaded: false,
            form: {
                name: ""
            },
            errors: {
                name: []
            }
        };
    },
    methods: {
        getData() {
            let data = {};

            if(this.$route.params.isDeleted) {
                data = {
                    params: {
                        isDeleted : true
                    }
                }
            }

            DepartmentDataService.show(this.$route.params.id, data)
                .then(response => {
                    this.formDataLoaded = true;
                    this.form.name = response.data.data.name;
                })
                .catch(error => {
                    this.formDataLoaded = true;
                    this.mixin_showErrors(error);
                    this.$router.push({ name: "admin.departments.index" }, () => {});
                });
        },
        onSave(value) {
            DepartmentDataService.update(this.$route.params.id, value)
                .then(response => {
                    console.log(response);
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
    },  
    created() {
        this.getData();
    },
    activated() {
        this.getData();
    }
};
</script>
