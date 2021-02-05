<template>
    <div>
        <v-autocomplete
            v-model="item"
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
import VendorDataService from "../../../services/VendorDataService";

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
            default: "Vendor"
        },
        item_value: {
            type: String,
            default: "id"
        },
        item_text: {
            type: String,
            default: "name"
        },
        rules: {
            type: Array,
            default: () => []
        }
    },
    data: function() {
        return {
            defaultValue: {
                id: null,
                full_name: "All Vendors"
            },
            item: {},
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
            VendorDataService.getAll(this.parameters)
                .then(response => {
                    this.items = response.data.data;

                    if (this.showAll) {
                        this.items.unshift(this.defaultValue);
                        this.item = this.defaultValue;
                    }
                })
                .catch(error => {
                    this.mixin_showErrors(error);
                });
        },
        resetData: function() {
            this.item = this.showAll ? this.defaultValue : null;
            this.getData();
        }
    },
    mounted: function() {
        this.getData();
    }
};
</script>
