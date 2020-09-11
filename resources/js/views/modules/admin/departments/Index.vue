<template>
    <v-app>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <h4 class="title green--text">Departments</h4>

                <v-spacer></v-spacer>
            </v-card-title>
            <v-card-subtitle>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
            </v-card-subtitle>

            <v-card-text>
                <v-data-table
                    :headers="headers"
                    :items="items"
                    :loading="loading"
                    :options.sync="options"
                    :server-items-length="totalItems"
                    v-model="selected"
                    show-select
                    item-key="id"
                    class="elevation-0"
                >
                </v-data-table>
            </v-card-text>
        </v-card>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            loading: true,
            headers: [{ text: "Name", value: "name" }],
            items: [],
            status: "Active",
            statuses: ["Active", "Archived"],
            selected: [],
            search: "",
            totalItems: 0,
            options: {}
        };
    },
    methods: {
        async getDataFromApi() {
            this.loading = true;

            let data = await this.getItems();

            return new Promise((resolve, reject) => {
                const { sortBy, sortDesc, page, itemsPerPage } = this.options;

                let search = this.search.trim().toLowerCase();
                let items = data.data;
                let total = items.length;

                if (search) {
                    items = items.filter(item => {
                        return Object.values(item)
                            .join(",")
                            .toLowerCase()
                            .includes(search);
                    });

                    total = items.length;
                }

                if (sortBy.length === 1 && sortDesc.length === 1) {
                    items = items.sort((a, b) => {
                        const sortA = a[sortBy[0]];
                        const sortB = b[sortBy[0]];

                        if (sortDesc[0]) {
                            if (sortA < sortB) return 1;
                            if (sortA > sortB) return -1;
                            return 0;
                        } else {
                            if (sortA < sortB) return -1;
                            if (sortA > sortB) return 1;
                            return 0;
                        }
                    });
                }

                if (itemsPerPage > 0) {
                    items = items.slice(
                        (page - 1) * itemsPerPage,
                        page * itemsPerPage
                    );
                }

                this.loading = false;
                resolve({ items, total });

                // setTimeout(() => {
                //     this.loading = false;
                //     resolve({
                //         items,
                //         total
                //     });
                // }, 500);
            });
        },
        async getItems(status) {
            let _this = this;

            try {
                var arr = [];
                arr = await axios.get("/api/departments");
                return arr.data;
            } catch (e) {
                return [];
            }
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
        }
    },
    mounted() {
        this.getDataFromApi().then(data => {
            this.items = data.items;
            this.totalItems = data.total;
        });
    },
    async created() {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " + localStorage.getItem("access_token");
    }
};
</script>
