<template>
    <div>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <h4 class="title green--text">Edit Expense Type</h4>
            </v-card-title>
            <v-container>
                <Form
                    @on-save="onSave"
                    :errors="errors"
                    :expenseTypeForm="form"
                ></Form>
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
            form: {
                name: "",
                limit: null,
                sub_types: []
            },
            errors: {
                name: [],
                limit: []
            }
        };
    },
    methods: {
        getData() {
            ExpenseTypeDataService.show(this.$route.params.id)
                .then(response => {
                    this.form.name = response.data.data.name;
                    this.form.limit = response.data.data.limit;
                    this.form.sub_types = response.data.data.sub_types;
                })
                .catch(error => {
                    this.mixin_showErrors(error);
                });
        },
        onSave(value) {
            ExpenseTypeDataService.update(this.$route.params.id, value)
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
        }
    },
    created() {
        this.getData();
    },
    activated() {
        this.getData();
    }
};
</script>
