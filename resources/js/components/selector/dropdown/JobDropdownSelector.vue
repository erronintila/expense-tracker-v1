<template>
     <v-autocomplete
        v-model="job"
        label="Job Designation"
        item-value="id"
        item-text="name"
        return-object
        :items="jobs"
        :rules="rules"
        :error-messages="errors"
        @change="onChange"
    >
    </v-autocomplete>
</template>

<script>
import JobDataService from "../../../services/JobDataService";

export default {
    props: {
        selectedDepartment: {
            type: Object,
            default: null
        },
        selectedJob: {
            type: Object,
            default: null
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
            department: null,
            jobs: [],
            job: null
        };
    },
    methods: {
        getDataFromApi() {
            let params = {
                department_id: this.department ? this.department.id : null
            };

            let data = {
                params
            };

            return new Promise((resolve, reject) => {
                JobDataService.getAll({
                    params: {
                        department_id: this.department
                            ? this.department.id
                            : null,
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
            this.job = null;
            this.getDataFromApi().then(data => {
                this.jobs = data.data;
                if (this.showAll) {
                    this.jobs.unshift({
                        id: null,
                        name: "All Job Designations"
                    });
                }
            });
            this.$emit("onReset");
        },
        onChange(e) {
            this.job = e;
            this.getDataFromApi().then(data => {
                this.jobs = data.data;
                if (this.showAll) {
                    this.jobs.unshift({
                        id: null,
                        name: "All Job Designations"
                    });
                }
            });
            this.$emit("onChange", e);
        }
    },
    created() {
        this.getDataFromApi().then(data => {
            this.jobs = data.data;
            if (this.showAll) {
                this.jobs.unshift({
                    id: null,
                    name: "All Job Designations"
                });
            }
        });
    },
    activated() {
        this.getDataFromApi().then(data => {
            this.jobs = data.data;
            if (this.showAll) {
                this.jobs.unshift({
                    id: null,
                    name: "All Job Designations"
                });
            }
        });
    },
    watch: {
        selectedJob: {
            deep: true, 
            immediate: true,
            handler(newValue, oldValue) {
                this.job = newValue;
            }
        },
        selectedDepartment: {
            deep: true, 
            immediate: true,
            handler(newValue, oldValue) {
                this.department = newValue;
                this.job = null;
            }
        },
        department() {
            this.getDataFromApi().then(data => {
                this.jobs = data.data;
                if (this.showAll) {
                    this.jobs.unshift({
                        id: null,
                        name: "All Job Designations"
                    });
                }
            });
        },
    }
};
</script>
