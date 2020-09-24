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
                ></v-data-table>
            </div>
        </div>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
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
                                value: element.name.replace(/\s+/g, '_').toLowerCase(),
                                sortable: false
                            });
                        });

                        _this.headers.unshift({
                            text: "Date",
                            value: "date",
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
