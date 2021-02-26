<template>
    <v-form ref="form" v-model="valid">
        <v-row>
            <v-col class="d-flex" cols="12" sm="6">
                <DepartmentDropdownSelector
                    ref="departmentDropdownSelector"
                    :selectedDepartment="jobForm.department"
                    :rules="mixin_validation.required"
                    :errors="errors.department_id"
                    @onChange="onChangeDepartment"
                >
                </DepartmentDropdownSelector>
            </v-col>

            <v-col cols="12" md="6">
                <v-text-field
                    v-model="jobForm.name"
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

        <v-row>
            <v-col class="text-right">
                <v-btn color="green" dark @click="onSave">Save</v-btn>
                <v-btn @click="$router.go(-1)">Cancel</v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>
<script>
import DepartmentDropdownSelector from "../../../../components/selector/DepartmentDropdownSelector";

export default {
    props: {
        form: {
            type: Object,
            default: () => {
                return {
                    name: "",
                    department: null
                };
            }
        },
        errors: {
            type: Object,
            default: () => {
                return {
                    name: [],
                    department_id: []
                };
            }
        }
    },
    components: {
        DepartmentDropdownSelector
    },
    data() {
        return {
            valid: false
        };
    },
    methods: {
        onChangeDepartment(value) {
            this.jobForm.department = value;
        },
        onSave() {
            if (!this.$refs.form.validate()) {
                return;
            }
            this.$emit("onSave", this.jobForm);
        }
    },
    computed: {
        jobForm: {
            get() {
                return this.form;
            },
            set(value) {
                return this.value;
            }
        }
    }
};
</script>
