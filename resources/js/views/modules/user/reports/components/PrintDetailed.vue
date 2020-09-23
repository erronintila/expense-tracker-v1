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
            headers: [
                { text: "Date", value: "", sortable: false },
                { text: "Delivery Expense", value: "", sortable: false },
                { text: "Gas & Oil", value: "", sortable: false },
                { text: "Date", value: "", sortable: false },
                { text: "Delivery Expense", value: "", sortable: false },
                { text: "Gas & Oil", value: "", sortable: false },
                { text: "Date", value: "", sortable: false },
                { text: "Delivery Expense", value: "", sortable: false },
                { text: "Gas & Oil", value: "", sortable: false },
                { text: "Date", value: "", sortable: false },
                { text: "Total", value: "", sortable: false }
            ],
            items: []
        };
    }
};
</script>
