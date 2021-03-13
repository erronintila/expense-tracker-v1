<template>
    <v-autocomplete
        v-model="data"
        label="Department"
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
        parameters: {
            type: Object,
            default: () => {}
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
                name: "All Departments"
            },
            data: {},
            items: []
        };
    },
    methods: {
        getData() {
            axios
                .get("/api/data/departments?only=true", this.parameters)
                .then(response => {
                    this.items = response.data.data;

                    if (this.showAll) {
                        this.items.unshift(this.defaultValue);
                        this.data = this.defaultValue;
                    }
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);
                });
        },
        changeData() {
            this.$emit("changeData", this.data);
        },
        resetData() {
            this.data = this.showAll ? this.defaultValue : null;
            this.getData();
        }
    },
    created() {
        this.getData();
    }
};
</script>
