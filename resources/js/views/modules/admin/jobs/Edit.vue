<template>
    <div>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">Edit Job Designation</h4>
            </v-card-title>

            <v-form ref="form" v-model="valid">
                <v-container>
                    <v-row>
                        <v-col class="d-flex" cols="12" sm="6">
                            <v-autocomplete
                                v-model="form.department"
                                :items="departments"
                                :rules="validation.required"
                                :error-messages="errors.department_id"
                                @input="errors.department_id = []"
                                item-value="id"
                                item-text="name"
                                label="Department *"
                            ></v-autocomplete>
                        </v-col>

                        <v-col cols="12" md="6">
                            <v-text-field
                                v-model="form.name"
                                :rules="[
                                    ...validation.required,
                                    ...validation.minLength(100)
                                ]"
                                :counter="100"
                                :error-messages="errors.name"
                                @input="errors.name = []"
                                label="Name *"
                                required
                            ></v-text-field>
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            valid: false,
            form: {
                name: "",
                department: null
            },
            errors: {
                name: [],
                department_id: []
            },
            departments: []
        };
    },
    methods: {
        getData() {
            let _this = this;

            axios
                .get("/api/jobs/" + _this.$route.params.id)
                .then(response => {
                    let data = response.data.data;

                    _this.form.name = data.name;

                    _this.form.department = data.department.id;
                })
                .catch(error => {
                    console.log(error);

                    console.log(error.response);
                });
        },
        loadDepartments() {
            let _this = this;

            axios
                .get("/api/data/departments")
                .then(response => {
                    let data = response.data.data.map(item => ({
                        id: item.id,
                        name: item.name
                    }));

                    _this.departments = data;
                })
                .catch(error => {
                    console.log(error);

                    console.log(error.response);
                });
        },
        onSave() {
            let _this = this;

            _this.$refs.form.validate();

            if (_this.$refs.form.validate()) {
                axios
                    .put("/api/jobs/" + _this.$route.params.id, {
                        action: "update",
                        name: _this.form.name,
                        department_id: _this.form.department
                    })
                    .then(function(response) {
                        _this.$dialog.message.success(
                            "Job designation updated successfully.",
                            {
                                position: "top-right",
                                timeout: 2000
                            }
                        );

                        _this.$router.push({ name: "admin.jobs.index" });
                    })
                    .catch(function(error) {
                        console.log(error);

                        console.log(error.response);

                        _this.errors = error.response.data.errors;
                    });

                return;
            }
        }
    },
    created() {
        this.loadDepartments();

        this.getData();
    }
};
</script>
