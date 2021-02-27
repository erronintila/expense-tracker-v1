<template>
    <v-autocomplete
        v-model="computedSelectedJob"
        label="Job Designation"
        :items="items"
        item-value="id"
        item-text="name"
        return-object
        @change="changeData"
        :error-messages="errors"
        :rules="rules"
    >
    </v-autocomplete>
</template>

<script>
export default {
    props: {
        department_id: {
            type: Number,
            default: null
        },
        selectedJob: {
            type: Object,
            default: null
        },
        showAll: {
            type: Boolean,
            default: false
        },
        errors: {
            type: Array,
            default: () => []
        },
        rules: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            defaultValue: {
                id: null,
                name: "All Job Designations"
            },
            items: []
        };
    },
    methods: {
        getData(department_id) {
            axios
                .get("/api/data/jobs?only=true", {
                    params: {
                        department_id: department_id
                    }
                })
                .then(response => {
                    this.items = response.data.data;

                    if (this.showAll) {
                        this.items.unshift(this.defaultValue);
                    }
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);
                });
        },
        changeData(e) {
            this.computedSelectedJob = e;
            this.getData(this.department_id);
            this.$emit("changeData", e);
        },
        resetData(department_id) {
            this.computedSelectedJob = this.showAll ? this.defaultValue : null;
            this.getData(department_id);
        }
    },
    computed: {
        computedSelectedJob: {
            get() {
                return this.selectedJob;
            },
            set(value) {
                return value;
            }
        }
    },
    created() {
        this.resetData();
    }
};
</script>
