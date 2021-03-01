<template>
    <v-list>
        <v-list-item-group
            v-model="computedItem"
            :mandatory="mandatory"
            :error-messages="errors"
            :rules="rules"
            @change="onChange"
        >
            <v-list-item
                v-for="(item, index) in computedItems"
                :key="index"
                :value="item"
                active-class="border"
            >
                <v-list-item-icon v-if="hasIcon">
                    <slot name="itemIcon" v-bind="{ item }"> </slot>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>
                        <slot name="itemText" v-bind="{ item }"> </slot>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
    </v-list>
</template>
<script>
export default {
    props: {
        hasIcon: {
            type: Boolean,
            default: false
        },
        item: {
            type: Object,
            default: null
        },
        items: {
            type: Array,
            default: () => []
        },
        mandatory: {
            type: Boolean,
            default: true
        },
        rules: {
            type: Array,
            default: () => []
        },
        errors: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {};
    },
    methods: {
        onChange(value) {
            this.computedItem = value;
            this.$emit("onChange", value);
        },
        onReset() {
            this.computedItem = null;
            this.$emit("onReset");
        }
    },
    computed: {
        computedItem: {
            get() {
                return this.item;
            },
            set(value) {
                return value;
            }
        },
        computedItems: {
            get() {
                return this.items;
            },
            set(value) {
                return value;
            }
        }
    }
};
</script>
<style scoped>
.border {
    border: 2px dashed orange;
}
</style>
