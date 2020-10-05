<template>
    <v-select
        v-model="selected"
        :items="items"
        :label="label"
        multiple
        chips
        small-chips
    >
        <template v-slot:prepend-item>
            <v-list-item ripple @click="toggle">
                <v-list-item-action>
                    <v-icon
                        :color="selected.length > 0 ? 'green darken-4' : ''"
                    >
                        {{ icon }}
                    </v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        Select All
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider class="mt-2"></v-divider>
        </template>
        <template v-slot:selection="{ item, index }">
            <v-chip v-if="index === 0">
                <span>{{ item }}</span>
            </v-chip>
            <span v-if="index === 1" class="grey--text caption">
                (+{{ selected.length - 1 }} others)
            </span>
        </template>
    </v-select>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: ""
        },
        items: {
            type: Array,
            default: () => []
        },
        defaultSelected: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            selected: this.defaultSelected
        };
    },
    methods: {
        toggle() {
            this.$nextTick(() => {
                if (this.selectedAll) {
                    this.selected = [];
                } else {
                    this.selected = this.items.slice();
                }
            });
        }
        // changeSelected() {
        //     this.$emit("changeSelected", this.selected);
        // }
    },
    watch: {
        selected() {
            this.$emit("changeSelected", this.selected);
        }
    },
    computed: {
        selectedAll() {
            return this.selected.length === this.items.length;
        },
        selectedSome() {
            return this.selected.length > 0 && !this.selectedAll;
        },
        icon() {
            if (this.selectedAll) return "mdi-close-box";
            if (this.selectedSome) return "mdi-minus-box";
            return "mdi-checkbox-blank-outline";
        }
    },
    created() {}
};
</script>
