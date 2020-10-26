<template>
    <v-autocomplete
        v-model="data"
        label="Job Designation"
        :items="items"
        item-value="id"
        item-text="name"
        return-object
        @change="changeData"
    >
    </v-autocomplete>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            default: null
        },
        department_id: {
            type: Number,
            default: null
        },
        showAll: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            defaultValue: {
                id: null,
                name: "All Job Designations"
            },
            data: {},
            items: []
        };
    },
    methods: {
        getData(department_id) {
            let _this = this;

            axios
                .get("/api/data/jobs", {
                    params: {
                        department_id: department_id
                    }
                })
                .then(response => {
                    _this.items = response.data.data;

                    _this.items.unshift(_this.defaultValue);
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);
                });
        },
        changeData() {
            this.$emit("changeData", this.data);
            this.getData(this.department_id);
        },
        resetData(department_id) {
            this.data = this.showAll ? this.defaultValue : null;
            this.getData(department_id);
        }
    },
    created() {
        this.resetData();
    }
};
</script>
