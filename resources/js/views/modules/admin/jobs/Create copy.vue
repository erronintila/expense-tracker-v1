<template>
    <div>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">New Job Designation</h4>
            </v-card-title>

            <v-form ref="form" v-model="valid">
                <v-container>
                    <v-row>
                        <v-col class="d-flex" cols="12" sm="6">
                            <DepartmentDropdownSelector
                                ref="departmentDropdownSelector"
                                :selectedDepartment="form.department"
                                :rules="mixin_validation.required"
                                :errors="errors.department_id"
                                @onChange="onChangeDepartment"
                            >
                            </DepartmentDropdownSelector>
                        </v-col>

                        <v-col cols="12" md="6">
                            <v-text-field
                                v-model="form.name"
                                :rules="[
                                    ...mixin_validation.required,
                                    ...mixin_validation.minLength(100)
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
import JobDataService from "../../../../services/JobDataService";
import DepartmentDropdownSelector from "../../../../components/selector/DepartmentDropdownSelector";

export default {
    components: {
        DepartmentDropdownSelector
    },
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
        onChangeDepartment(value) {
            this.form.department = value;
        },
        onSave() {
            let _this = this;
            _this.$refs.form.validate();

            if (_this.$refs.form.validate()) {
                let data = {
                    name: _this.form.name,
                    department_id: _this.form.department.id
                };

                JobDataService.store(data)
                    .then(function(response) {
                        _this.mixin_successDialog(
                            response.data.status,
                            response.data.message
                        );

                        _this.$router.push({ name: "admin.jobs.index" });
                    })
                    .catch(function(error) {
                        this.mixin_showErrors(error);

                        if (error.response) {
                            if (error.response.data) {
                                _this.errors = error.response.data.errors;
                            }
                        }
                    });

                return;
            }
        }
    },
    created() {},
    activated() {}
};
</script>
