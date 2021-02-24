<template>
    <v-autocomplete
        v-model="computedSelectedDepartment"
        label="Department"
        :items="collections.departments"
        item-value="id"
        item-text="name"
        return-object
        :rules="rules"
        :error-messages="errors"
        @change="onChange"
    >
    </v-autocomplete>
</template>
<script>
import DepartmentDataService from "../../services/DepartmentDataService";

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
            collections: {
                departments: []
            }
        };
    },
    methods: {
        getDataFromApi() {
            DepartmentDataService.getAll()
                .then(response => {
                    this.collections.departments = response.data.data;

                    if (this.showAll) {
                        this.collections.departments.unshift({id: null, name: "All Departments"});
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        },
        onReset() {
            this.computedSelectedDepartment = null;
            this.$emit("onReset");
        },
        onChange(e) {
            this.computedSelectedDepartment = e;
            this.$emit("onChange", e);
        }
    },
    computed: {
        computedSelectedDepartment: {
            get() {
                return this.selectedDepartment;
            },
            set(value) {
                return value;
            }
        }
    },
    created() {
        this.getDataFromApi();
    },
    activated() {
        this.getDataFromApi();
    }
};
</script>
