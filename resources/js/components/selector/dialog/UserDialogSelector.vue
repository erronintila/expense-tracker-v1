<template>
    <div>
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
                <slot
                    name="openDialog"
                    v-bind="{ attrs, on, computedSelectedUser }"
                ></slot>
            </template>

            <v-card>
                <v-card-title>
                    Employees
                    <v-spacer></v-spacer>
                    <v-text-field
                        v-model="filters.search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                        @keydown.enter="onSearch"
                    ></v-text-field>
                </v-card-title>
                <v-list class="overflow-y-auto" max-height="400" two-line>
                    <v-list-item-group
                        v-model="computedSelectedUser"
                        active-class="green--text"
                        :multiple="multipleSelection"
                        @change="selectUser"
                    >
                        <template v-for="(item, index) in collections.items">
                            <v-list-item :key="index" :value="item">
                                <template>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            v-text="item.name"
                                        ></v-list-item-title>

                                        <v-list-item-subtitle
                                            class="text--primary"
                                            v-text="getJobName(item)"
                                        ></v-list-item-subtitle>

                                        <v-list-item-subtitle
                                            v-text="getDepartmentName(item)"
                                        ></v-list-item-subtitle>
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
import UserDataService from "../../../services/UserDataService";

export default {
    props: {
        selectedUsers: {
            type: Array,
            default: () => []
        },
        multipleSelection: {
            type: Boolean,
            default: false
        },
        selectedUser: {
            type: Object,
            default: null
        },
        usersParameters: {
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
                sortBy: ["first_name"],
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
        onSearch() {
            this.getDataFromApi().then(data => {
                this.collections.items = data.data;
                this.meta = data.meta;
            });
        },
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
                    isSelection: true,
                    is_active: true
                };

                let data = {};

                if (this.usersParameters) {
                    if (this.usersParameters.params) {
                        data = {
                            params: {
                                ...params,
                                ...this.usersParameters.params
                            }
                        };
                    } else {
                        data = {
                            params: {
                                ...params
                            }
                        };
                    }
                } else {
                    data = {
                        params: {
                            ...params
                        }
                    };
                }

                // data = { ...params };

                UserDataService.getAll(data)
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
            this.computedSelectedUser = null;
            this.options = {
                sortBy: ["last_name"],
                sortDesc: [false],
                page: 1,
                itemsPerPage: 10
            };

            return this.$emit("onReset", this.computedSelectedUser);
        },
        selectUser(e) {
            this.computedSelectedUser = e;
            this.$emit("selectUser", e);
        },
        getJobName(user) {
            if (user.job) {
                return user.job.name;
            }

            return "";
        },
        getDepartmentName(user) {
            if (user.job) {
                if (user.job.department) {
                    return user.job.department.name;
                }
            }

            return "";
        }
    },
    watch: {
        "filters.search": function() {
            if (this.filters.search == "") {
                this.getDataFromApi().then(data => {
                    this.collections.items = data.data;
                    this.meta = data.meta;
                });
            }
        },
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
                // query: this.filters.search
            };
        },
        computedSelectedUser: {
            get() {
                if (this.selectedUser) {
                    return this.selectedUser;
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
