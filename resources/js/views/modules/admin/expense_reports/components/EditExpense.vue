<template>
    <div>
        <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
        >
            <v-card>
                <v-toolbar dark color="primary">
                    <v-btn icon dark @click="dialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Edit Expense</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn dark text @click="onSave">Save</v-btn>
                    </v-toolbar-items>
                </v-toolbar>

                <EditExpense
                    ref="editExpense"
                    @editedExpense="onSaveExpense"
                    :expense_id="id"
                    :key="id"
                ></EditExpense>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import EditExpense from "./Edit";

export default {
    components: {
        EditExpense
    },
    data() {
        return {
            dialog: false,
            valid: false,
            menu: false,
            id: 0
        };
    },
    methods: {
        openDialog(item) {
            let _this = this;
            
            _this.id = item.id;

            console.log(_this.id);

            _this.dialog = true;
        },
        onSave() {
            this.$refs.editExpense.onSave();
        },
        onSaveExpense() {
            this.dialog = false;
            this.$emit("onEditExpense");
        }
    },
    created() {
        // axios.defaults.headers.common["Authorization"] =
        //     "Bearer " + localStorage.getItem("access_token");
    }
};
</script>
