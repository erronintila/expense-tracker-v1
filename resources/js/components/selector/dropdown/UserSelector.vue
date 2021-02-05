<template>
    <div>
        <v-autocomplete
            v-model="selectedItem"
            :items="items"
            :item-value="item_value"
            :item-text="item_text"
            :label="label"
            :rules="rules"
            :error-messages="errors"
            @change="onChangeData"
            @input="onChangeInput"
            return-object
        >
        </v-autocomplete>
    </div>
</template>

<script>
import UserDataService from "../../../services/UserDataService";

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
        },
        errors: {
            type: Array,
            default: []
        },
        label: {
            type: String,
            default: "Employee"
        },
        item: {
            type: Object,
            default: null
        },
        item_value: {
            type: String,
            default: "id"
        },
        item_text: {
            type: String,
            default: "full_name"
        },
        rules: {
            type: Array,
            default: () => []
        },
    },
    data: function() {
        return {
            // item: {},
            items: []
        };
    },
    methods: {
        onChangeData: function() {
            this.$emit("onChangeData", this.item);
        },
        onChangeInput: function() {
            this.$emit("onChangeInput");
        },
        getData: function() {
            UserDataService.getAll(this.parameters)
                .then(response => {
                    this.items = response.data.data;

                    if (this.showAll) {
                        this.items.unshift({id: null, full_name: "All Employees"});
                        this.selectedItem = {id: null, full_name: "All Employees"};
                    }

                    // this.item = this.defaultValue;
                })
                .catch(error => {
                    this.mixin_showErrors(error);
                });
        },
        resetData: function() {
            this.selectedItem = this.showAll ? {id: null, full_name: "All Employees"} : null;
            this.getData();
        }
    },
    computed: {
        selectedItem: {
            get: function() {
                return this.item;
            },
            set: function(value) {
                this.$emit('input', value);
            }
        }
    },
    mounted: function() {
        this.getData();
    }
};
</script>
