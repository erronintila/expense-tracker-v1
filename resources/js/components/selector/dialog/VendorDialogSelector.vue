<template>
    <div>
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
                <slot
                    name="openDialog"
                    v-bind="{ attrs, on, computedSelectedVendor }"
                ></slot>
            </template>

            <v-card>
                <v-card-title>
                    Vendors
                    <v-spacer></v-spacer>
                    <v-text-field
                        v-model="filters.search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                    ></v-text-field>
                </v-card-title>
                <v-list class="overflow-y-auto" max-height="400" two-line>
                    <v-list-item-group
                        v-model="computedSelectedVendor"
                        active-class="green--text"
                        :multiple="multipleSelection"
                        @change="selectVendor"
                    >
                        <template v-for="(item, index) in collections.items">
                            <v-list-item :key="index" :value="item">
                                <template>
                                    <v-list-item-content>
                                        <v-list-item-title>
                                            {{ getVendorName(item) }}
                                        </v-list-item-title>
                                        <v-list-item-subtitle
                                            class="text--primary"
                                        >
                                            {{ getVendorTin(item) }}
                                        </v-list-item-subtitle>

                                        <v-list-item-subtitle>
                                            {{ getVendorAddress(item) }}
                                        </v-list-item-subtitle>
                                    </v-list-item-content>
                                </template>
                            </v-list-item>
                            <!-- <v-divider v-if="index < collections.items.length - 1" :key="index"></v-divider> -->
                        </template>
                    </v-list-item-group>
                </v-list>
                <div>
                    <v-pagination
                        v-model="options.page"
                        :length="meta.last_page"
                        :total-visible="7"
                    ></v-pagination>
                </div>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn color="green darken-1" text @click="onReset">
                        Reset
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="dialog = false">
                        OK
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
import VendorDataService from "../../../services/VendorDataService";

export default {
    props: {
        selectedVendors: {
            type: Array,
            default: () => []
        },
        multipleSelection: {
            type: Boolean,
            default: false
        },
        selectedVendor: {
            type: Object,
            default: null
        },
        vendorsParameters: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            dialog: false,
            loading: false,
            collections: {
                selected: null,
                items: []
            },
            filters: {
                search: ""
            },
            options: {
                sortBy: ["name"],
                sortDesc: [false],
                page: 1,
                itemsPerPage: 10
            },
            meta: {
                current_page: 0,
                from: 0,
                last_page: 0,
                path: "",
                per_page: "10",
                to: 0,
                total: 0
            }
        };
    },
    methods: {
        getDataFromApi() {
            this.loading = true;

            return new Promise((resolve, reject) => {
                const { sortBy, sortDesc, page, itemsPerPage } = this.options;

                let search = this.filters.search.trim().toLowerCase();
                let params = {
                    search: search,
                    sortBy: sortBy[0],
                    sortType: sortDesc[0] ? "desc" : "asc",
                    page: page,
                    itemsPerPage: itemsPerPage,
                    isSelection: true
                };

                let data = {};

                if (this.vendorsParameters) {
                    if (this.vendorsParameters.params) {
                        data = {
                            params: {
                                ...params,
                                ...this.vendorsParameters.params
                            }
                        };
                    } else {
                        data = { params: { ...params } };
                    }
                } else {
                    data = { params: { ...params } };
                }

                // data = { ...params };

                VendorDataService.getAll(data)
                    .then(response => {
                        this.loading = false;
                        resolve(response.data);
                    })
                    .catch(error => {
                        this.mixin_showErrors(error);
                        this.loading = false;
                        reject();
                    });
            });
        },
        onReset() {
            this.dialog = false;
            this.filters.search = "";
            this.computedSelectedVendor = null;
            this.options = {
                sortBy: ["name"],
                sortDesc: [false],
                page: 1,
                itemsPerPage: 10
            };

            return this.$emit("onReset", this.computedSelectedVendor);
        },
        selectVendor(e) {
            this.computedSelectedVendor = e;
            this.$emit("selectVendor", e);
        },
        getVendorName(vendor) {
            return vendor.name || "";
        },
        getVendorTin(vendor) {
            let tin = vendor.tin || "";
            let vat = vendor.is_vat_inclusive || "";
            // return tin;

            return `${tin ? "TIN: " + tin : ""} ${vat ? "(VAT)" : "Non-VAT"}`;
        },
        getVendorAddress(vendor) {
            return vendor.address || "";
        }
    },
    watch: {
        params: {
            handler() {
                this.getDataFromApi().then(data => {
                    this.collections.items = data.data;
                    this.meta = data.meta;
                });
            },
            deep: true
        },
        dialog() {
            this.getDataFromApi().then(data => {
                this.collections.items = data.data;
                this.meta = data.meta;
            });
        }
    },
    computed: {
        params(nv) {
            return {
                ...this.options,
                query: this.filters.search
            };
        },
        computedSelectedVendor: {
            get() {
                if (this.selectedVendor) {
                    return this.selectedVendor;
                }
                return null;
            },
            set(value) {
                return value;
            }
        }
    },
    created() {
        this.getDataFromApi().then(data => {
            this.collections.items = data.data;
            this.meta = data.meta;
        });
    }
};
</script>
