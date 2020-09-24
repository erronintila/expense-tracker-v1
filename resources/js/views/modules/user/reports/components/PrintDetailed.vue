<template>
    <v-app>
        <div>
            <div>
                Expense Report Summary <br />
                Employee: <br />
                Period: <br />
            </div>

            <div>
                <v-data-table
                    dense
                    :hide-default-footer="true"
                    disable-pagination
                    :headers="headers"
                    :items="items"
                >
                    <template slot="body.append" v-if="items.length > 0">
                        <tr class="green--text hidden-md-and-up">
                            <td class="title">
                                Total: <strong>{{ total }}</strong>
                            </td>
                        </tr>
                        <tr class="green--text hidden-sm-and-down">
                            <td>Total</td>
                            <td v-for="item in items.length - 1" :key="item.name"></td>
                        </tr>
                    </template>
                </v-data-table>
            </div>
        </div>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            total: 0,
            headers: [],
            items: []
        };
    },
    methods: {
        loadExpenseTypes() {
            let _this = this;

            return new Promise((resolve, reject) => {
                axios
                    .get("/api/data/expense_types")
                    .then(response => {
                        response.data.data.forEach(element => {
                            _this.headers.push({
                                text: element.name,
                                value: element.name
                                    .replace(/\s+/g, "_")
                                    .toLowerCase(),
                                sortable: false
                            });
                        });

                        _this.headers.unshift({
                            text: "Date",
                            value: "date",
                            sortable: false
                        });

                        _this.headers.push({
                            text: "Total",
                            value: "total",
                            sortable: false
                        });

                        resolve();
                    })
                    .catch(error => {
                        console.log(error.response);
                        reject();
                    });
            });
        },
        loadExpenses() {
            let _this = this;

            _this.loadExpenseTypes().then(() => {
                axios
                    .get("/api/data/test")
                    .then(response => {
                        let rows = response.data;

                        _this.items = rows;

                        console.log(_this.items);
                    })
                    .catch(error => {
                        console.log(error);
                        console.log(error.response);
                    });
            });
        }
    },
    created() {
        let _this = this;

        // _this.loadExpenseTypes();
        _this.loadExpenses();
    }
};
</script>
