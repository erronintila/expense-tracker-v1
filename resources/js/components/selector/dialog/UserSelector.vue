<template>
    <div>
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
                <v-chip class="mr-2" small v-bind="attrs" v-on="on">
                    {{ selectedUser }}
                </v-chip>
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
                    ></v-text-field>
                </v-card-title>
                <v-list class="overflow-y-auto" max-height="400" two-line>
                    <v-list-item-group
                        v-model="collections.selected"
                        active-class="green--text"
                        :multiple="multipleSelection"
                        @change="selectUser"
                    >
                        <template v-for="(item, index) in collections.items">
                            <v-list-item :key="item.id" :value="item">
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

                            <v-divider
                                v-if="index < collections.items.length - 1"
                                :key="index"
                            ></v-divider>
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
                sortBy: ["last_name"],
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
            let _this = this;

            _this.loading = true;

            return new Promise((resolve, reject) => {
                const { sortBy, sortDesc, page, itemsPerPage } = this.options;

                let search = _this.filters.search.trim().toLowerCase();
                let data = {
                    params: {
                        search: search,
                        sortBy: sortBy[0],
                        sortType: sortDesc[0] ? "desc" : "asc",
                        page: page,
                        itemsPerPage: itemsPerPage
                    }
                };

                UserDataService.getAll(data)
                    .then(response => {
                        resolve(response.data);
                    })
                    .catch(error => {
                        console.log(error);
                        console.log(error.response);

                        reject();
                    })
                    .finally(() => {
                        _this.loading = false;
                    });
            });
        },
        onReset() {
            this.dialog = false;
            this.filters.search = "";
            this.collections.selected = null;
            this.options = {
                sortBy: ["last_name"],
                sortDesc: [false],
                page: 1,
                itemsPerPage: 10
            };

            return this.$emit("selectUser", this.collections.selected);
        },
        selectUser() {
            this.selectedUser = this.collections.selected;
            return this.$emit("selectUser", this.collections.selected);
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
        params: {
            handler() {
                this.getDataFromApi().then(data => {
                    this.collections.items = data.data;
                    this.meta = data.meta;
                });
            },
            deep: true
        }
    },
    computed: {
        params(nv) {
            return {
                ...this.options,
                query: this.filters.search
            };
        },
        selectedUser: {
            get() {
                if (this.collections.selected) {
                    return this.collections.selected.name;
                }

                return "All Employees";
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
