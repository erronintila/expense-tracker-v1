<template>
    <div>
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
                <!-- <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
                    {{
                        selected.length > 0 ? selected[0].name : "All Employees"
                    }}
                </v-btn> -->

                <v-chip class="mr-2" small v-bind="attrs" v-on="on">
                    {{selectedUser}}
                </v-chip>
            </template>
            <v-card>
                <v-card-title>
                    Employees
                    <v-spacer></v-spacer>
                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                    ></v-text-field>
                </v-card-title>
                <v-list class="overflow-y-auto" max-height="400" two-line dense>
                    <v-list-item-group
                        v-model="selected"
                        active-class="green--text"
                    >
                        <template v-for="(item, index) in items">
                            <v-list-item :key="item.id" :value="item">
                                <template>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            v-text="item.name"
                                        ></v-list-item-title>

                                        <v-list-item-subtitle
                                            class="text--primary"
                                            v-text="item.username"
                                        ></v-list-item-subtitle>

                                        <v-list-item-subtitle
                                            v-text="item.email"
                                        ></v-list-item-subtitle>
                                    </v-list-item-content>
                                </template>
                            </v-list-item>

                            <v-divider
                                v-if="index < items.length - 1"
                                :key="index"
                            ></v-divider>
                        </template>
                    </v-list-item-group>
                </v-list>

                <!-- <v-data-table
                    v-model="selected"
                    dense
                    :headers="headers"
                    :items="items"
                    :loading="loading"
                    :options.sync="options"
                    :server-items-length="totalItems"
                    :footer-props="{
                        itemsPerPageOptions: [10],
                        showFirstLastPage: true,
                        firstIcon: 'mdi-page-first',
                        lastIcon: 'mdi-page-last',
                        prevIcon: 'mdi-chevron-left',
                        nextIcon: 'mdi-chevron-right'
                    }"
                    single-select
                    show-select
                    item-key="id"
                    class="elevation-0"
                >
                </v-data-table> -->
                <div>
                    <v-pagination
                        v-model="options.page"
                        :length="totalItems"
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
                        Close
                    </v-btn>

                    <v-btn color="green darken-1" text @click="selectUser">
                        OK
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dialog: false,
            loading: false,
            totalItems: 0,
            search: "",
            headers: [
                { value: "full_name", sortable: false }
                // { text: "Job Designation", value: "job.name", sortable: false },
                // {
                //     text: "Department",
                //     value: "department",
                //     sortable: false
                // },
                // { text: "Revolving Fund", value: "revolving_fund" },
                // { text: "Actions", value: "actions", sortable: false },
                // { text: "", value: "data-table-expand" }
            ],
            selected: [],
            items: [],
            options: {
                sortBy: ["last_name"],
                sortDesc: [false],
                page: 1,
                itemsPerPage: 10
            }
        };
    },
    methods: {
        getDataFromApi() {
            let _this = this;

            _this.loading = true;

            return new Promise((resolve, reject) => {
                const { sortBy, sortDesc, page, itemsPerPage } = this.options;

                let search = _this.search.trim().toLowerCase();

                axios
                    .get("/api/users", {    
                        params: {
                            search: search,
                            sortBy: sortBy[0],
                            sortType: sortDesc[0] ? "desc" : "asc",
                            page: page,
                            itemsPerPage: itemsPerPage,
                            is_superadmin: false
                        }
                    })
                    .then(response => {
                        let items = response.data.data;
                        let total = response.data.meta.total;
                        resolve({ items, total });
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
            this.selected = [];
            this.options= {
                sortBy: ["last_name"],
                sortDesc: [false],
                page: 1,
                itemsPerPage: 10
            }
        },
        selectUser() {
            this.dialog = false;
            console.log(this.selected);
            return this.$emit("selectUser", this.selected);
        }
    },
    watch: {
        params: {
            handler() {
                this.getDataFromApi().then(data => {
                    this.items = data.items;
                    this.totalItems = data.total;
                });
            },
            deep: true
        }
    },
    computed: {
        params(nv) {
            return {
                ...this.options,
                query: this.search
            };
        },
        selectedUser() {
            if(this.selected) {
                return this.selected.length > 0 ? this.selected[0].name : 'All Employees';
            }
            
            return 'All Employees';
        }
    },
    created() {
        this.getDataFromApi().then(data => {
            this.items = data.items;
            this.totalItems = data.total;
        });
    }
};
</script>
