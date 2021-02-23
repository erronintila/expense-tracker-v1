<template>
    <div>
        <v-data-table
            v-model="selected"
            :show-select="showSelect"
            :item-key="itemKey"
            :class="classStyle"
            :single-expand="singleExpand"
            :show-expand="showExpand"
            :headers="headers"
            :items="items"
            :loading="loading"
            :options.sync="options"
            :server-items-length="meta.total"
            :footer-props="footerProps"
        >
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
        options: {
            type: Object,
            default: {
                sortBy: ["created_at"],
                sortDesc: [true],
                page: 1,
                itemsPerPage: 10
            }
        },
        loading: {
            type: Boolean,
            default: true
        },
        footerProps: {
            type: Object,
            default: {
                itemsPerPageOptions: [10, 20, 50, 100],
                showFirstLastPage: true,
                firstIcon: "mdi-page-first",
                lastIcon: "mdi-page-last",
                prevIcon: "mdi-chevron-left",
                nextIcon: "mdi-chevron-right"
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
        meta: {
            type: Object,
            default: {
                current_page: 0,
                from: 0,
                last_page: 0,
                path: "",
                per_page: "10",
                to: 0,
                total: 0
            }
        }
    },
    data() {
        return {
            selected: []
        };
    },
    methods: {},
    computed: {},
    watch: {},
    created() {}
};
</script>
