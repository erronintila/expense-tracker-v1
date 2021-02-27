<template>
    <v-autocomplete
        v-model="computedSelectedJob"
        label="Job Designation"
        item-value="id"
        item-text="name"
        return-object
        :items="collections.jobs"
        :rules="rules"
        :error-messages="errors"
        @change="onChange"
    >
    </v-autocomplete>
</template>

<script>
import JobDataService from "../../services/JobDataService";

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
            items: [],
            collections: {
                jobs: []
            }
        };
    },
    methods: {
        getDataFromApi() {
            let params = {
                department_id: this.department?.id
            };

            let data = {
                params
            };

            JobDataService.getAll({
                params: {
                    department_id: this.computedSelectedDepartment?.id,
                    // department_id: 1,
                    itemsPerPage: 100
                }
            })
                .then(response => {
                    this.collections.jobs = response.data.data;

                    if (this.showAll) {
                        this.collections.jobs.unshift({
                            id: null,
                            name: "All Job Designations"
                        });
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        },
        onReset() {
            this.computedSelectedJob = null;
            this.getDataFromApi();
            this.$emit("onReset");
        },
        onChange(e) {
            this.computedSelectedJob = e;
            this.getDataFromApi();
            this.$emit("onChange", e);
        }
        // changeData(e) {
        //     this.computedSelectedJob = e;
        //     this.getData(this.department_id);
        //     this.$emit("changeData", e);
        // },
        // resetData(department_id) {
        //     this.computedSelectedJob = this.showAll ? this.defaultValue : null;
        //     this.getData(department_id);
        // }
    },
    computed: {
        computedSelectedJob: {
            get() {
                return this.selectedJob;
            },
            set(value) {
                return value;
            }
        },
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
