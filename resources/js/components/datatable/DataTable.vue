<template>
    <div>
        <v-data-table
            v-model="computedSelected"
            :show-select="showSelect"
            :item-key="itemKey"
            :class="classStyle"
            :single-expand="singleExpand"
            :show-expand="showExpand"
            :headers="computedHeaders"
            :items="computedItems"
            :loading="loading"
            :options.sync="computedOptions"
            :server-items-length="serverItemsLength"
            :footer-props="footerProps"
        >
            <template
                v-slot:expanded-item="{ computedHeaders, computedSelected }"
            >
                <slot
                    name="expanded-item"
                    v-bind="{ computedHeaders, computedSelected }"
                >
                </slot>
            </template>
        </v-data-table>
    </div>
</template>

<script>
export default {
    props: {
        showSelect: {
            type: Boolean,
            default: true
        },
        singleExpand: {
            type: Boolean,
            default: true
        },
        showExpand: {
            type: Boolean,
            default: true
        },
        itemKey: {
            type: String,
            default: "id"
        },
        classStyle: {
            type: String,
            default: "elevation-0"
        },
        optionsSync: {
            type: Object,
            default: () => {
                return {
                    sortBy: ["created_at"],
                    sortDesc: [true],
                    page: 1,
                    itemsPerPage: 10
                };
            }
        },
        loading: {
            type: Boolean,
            default: true
        },
        footerProps: {
            type: Object,
            default: () => {
                return {
                    itemsPerPageOptions: [10, 20, 50, 100],
                    showFirstLastPage: true,
                    firstIcon: "mdi-page-first",
                    lastIcon: "mdi-page-last",
                    prevIcon: "mdi-chevron-left",
                    nextIcon: "mdi-chevron-right"
                };
            }
        },
        headers: {
            type: Array,
            default: () => []
        },
        items: {
            type: Array,
            default: () => []
        },
        selected: {
            type: Object,
            default: () => {}
        },
        serverItemsLength: {
            type: Number,
            default: 0
        },
        meta: {
            type: Object,
            default: () => {
                return {
                    current_page: 0,
                    from: 0,
                    last_page: 0,
                    path: "",
                    per_page: "10",
                    to: 0,
                    total: 0
                };
            }
        }
    },
    data() {
        return {};
    },
    methods: {},
    computed: {
        computedserverItemsLength: {
            get() {
                return this.serverItemsLength;
            },
            set(value) {
                return value;
            }
        },
        computedMeta: {
            get() {
                return this.meta;
            },
            set(value) {
                return value;
            }
        },
        computedSelected: {
            get() {
                return this.selected;
            },
            set(value) {
                return value;
            }
        },
        computedHeaders: {
            get() {
                return this.headers;
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
        },
        computedOptions: {
            get() {
                return this.optionsSync;
            },
            set(value) {
                return value;
            }
        }
    },
    watch: {
        computedSelected() {
            console.log(this.computedSelected);
            this.$emit("onSelect", this.computedSelected);
        }
    },
    created() {}
};
</script>
