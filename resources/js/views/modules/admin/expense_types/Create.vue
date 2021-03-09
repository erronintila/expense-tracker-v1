<template>
    <div>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <h4 class="title green--text">New Expense Type</h4>
            </v-card-title>
            <v-container>
                <Form @on-save="onSave" :errors="errors"></Form>
            </v-container>
        </v-card>
    </div>
</template>

<script>
import ExpenseTypeDataService from "../../../../services/ExpenseTypeDataService";
import Form from "./Form";

export default {
    components: {
        Form
    },
    data() {
        return {
            errors: {
                name: [],
                limit: []
            }
        };
    },
    methods: {
        onSave(value) {
            ExpenseTypeDataService.store(value)
                .then(response => {
                    this.mixin_successDialog(
                        response.data.status,
                        response.data.message
                    );
                    this.$router.push({
                        name: "admin.expense_types.index"
                    });
                })
                .catch(error => {
                    this.mixin_showErrors(error);
                    if (error.response) {
                        if (error.response.data) {
                            this.errors = error.response.data.errors;
                        }
                    }
                });
        },
    }
};
</script>
