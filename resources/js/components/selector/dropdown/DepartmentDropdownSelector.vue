<template>
    <v-autocomplete
        v-model="department"
        label="Department"
        item-value="id"
        item-text="name"
        return-object
        :items="departments"
        :rules="rules"
        :error-messages="errors"
        @change="onChange"
    >
    </v-autocomplete>
</template>
<script>
import DepartmentDataService from "../../../services/DepartmentDataService";

export default {
    props: {
        selectedDepartment: {
            type: Object,
            default: () => {}
        },
        parameters: {
            type: Object,
            default: () => {}
        },
        rules: {
            type: Array,
            default: () => []
        },
        errors: {
            type: Array,
            default: () => []
        },
        showAll: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            departments: [],
            department: null
        };
    },
    methods: {
        getDataFromApi() {
            return new Promise((resolve, reject) => {
                DepartmentDataService.getAll({
                    params: {
                        itemsPerPage: 200
                    }
                })
                    .then(response => {
                        resolve(response.data);
                    })
                    .catch(error => {
                        console.log(error);
                        reject();
                    });
            });
        },
        onReset() {
            this.department = null;
            this.$emit("onReset");
        },
        onChange(e) {
            this.department = e;
            this.$emit("onChange", e);
        }
    },
    watch: {
        selectedDepartment: {
            deep: true, 
            immediate: true,
            handler(newValue, oldValue) {
                this.department = newValue;
            }
        }
    },
    created() {
        this.getDataFromApi().then(data => {
            this.departments = data.data;
            if (this.showAll) {
                this.departments.unshift({
                    id: null,
                    name: "All Departments"
                });
            }
        });
    },
    activated() {
        this.getDataFromApi().then(data => {
            this.departments = data.data;
            if (this.showAll) {
                this.departments.unshift({
                    id: null,
                    name: "All Departments"
                });
            }
        });
    }
};
</script>
