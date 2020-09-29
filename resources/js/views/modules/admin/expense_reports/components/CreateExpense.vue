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
                    <v-toolbar-title>New Expense</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn dark text @click="onSave">Save</v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <CreateExpense
                    ref="createExpense"
                    @createdExpense="onSaveExpense"
                    :employee="employee"
                ></CreateExpense>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import CreateExpense from "./Create";

export default {
    props: {
        employee: {
            type: Object,
            default: { id: null, remaining_fund: 0, fund: 0 }
        }
    },
    components: {
        CreateExpense
    },
    data() {
        return {
            dialog: false
        };
    },
    methods: {
        openDialog() {
            this.dialog = true;
        },
        onSave() {
            this.$refs.createExpense.onSave();
        },
        onSaveExpense() {
            this.dialog = false;
            this.$emit("onSaveExpense");
        }
    },
    created() {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " + localStorage.getItem("access_token");
    }
};
</script>
