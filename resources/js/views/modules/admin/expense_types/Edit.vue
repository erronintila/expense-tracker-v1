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

            <v-form ref="form" v-model="valid">
                <v-container>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="form.name"
                                :rules="[
                                    ...mixin_validation.required,
                                    ...mixin_validation.minLength(100)
                                ]"
                                :counter="100"
                                :error-messages="errors.name"
                                @input="
                                    () => {
                                        errors.name = [];
                                    }
                                "
                                label="Name *"
                                required
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="form.limit"
                                :rules="[]"
                                :error-messages="errors.limit"
                                @input="
                                    () => {
                                        errors.limit = [];
                                    }
                                "
                                label="Default Amount Limit *"
                                required
                                type="number"
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            Sub Types
                            <!-- <v-card elevation="0">
                                <v-card-title>
                                    Sub Types
                                    <v-spacer></v-spacer>
                                    <v-text-field v-model="subtype">
                                        <template v-slot:append>
                                            <v-btn @click="addItem">Add</v-btn>
                                        </template>
                                    </v-text-field>
                                </v-card-title> -->
                            <v-data-table :headers="headers" :items="items">
                                <template v-slot:top>
                                    <v-row>
                                        <v-text-field
                                            v-model="subtype"
                                            label="Sub type name"
                                            class="mx-4"
                                        >
                                        </v-text-field>
                                        <v-text-field
                                            v-model="subtype_limit"
                                            label="Default amount limit"
                                            class="mx-4"
                                            type="number"
                                        >
                                        </v-text-field>
                                        <v-btn @click="addItem" class="mx-4"
                                            >Add</v-btn
                                        >
                                    </v-row>
                                </template>
                                <template v-slot:[`item.name`]="props">
                                    <v-edit-dialog
                                        :return-value.sync="props.item.name"
                                    >
                                        {{ props.item.name }}
                                        <template v-slot:input>
                                            <v-text-field
                                                v-model="props.item.name"
                                                :rules="[]"
                                                label="Edit"
                                                single-line
                                            ></v-text-field>
                                        </template>
                                    </v-edit-dialog>
                                </template>
                                <template v-slot:[`item.limit`]="props">
                                    <v-edit-dialog
                                        :return-value.sync="props.item.limit"
                                    >
                                        {{ props.item.limit }}
                                        <template v-slot:input>
                                            <v-text-field
                                                v-model="props.item.limit"
                                                :rules="[]"
                                                label="Edit"
                                                single-line
                                                type="number"
                                            ></v-text-field>
                                        </template>
                                    </v-edit-dialog>
                                </template>
                                <template v-slot:[`item.actions`]="{ item }">
                                    <v-icon
                                        small
                                        class="mr-2"
                                        @click="
                                            () => {
                                                onDeleteSubType(item);
                                            }
                                        "
                                    >
                                        mdi-delete
                                    </v-icon>
                                </template>
                            </v-data-table>
                            <!-- </v-card> -->
                        </v-col>
                    </v-row>

                    <small class="text--secondary">
                        * indicates required field
                    </small>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green" dark @click="onSave">Save</v-btn>
                        <v-btn @click="$router.go(-1)">Cancel</v-btn>
                    </v-card-actions>
                </v-container>
            </v-form>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            valid: false,
            subtype: "",
            subtype_limit: null,
            hasSubtype: false,
            headers: [
                {
                    text: "Name",
                    value: "name"
                },
                {
                    text: "Limit",
                    value: "limit"
                },
                { text: "", value: "actions", sortable: false }
            ],
            items: [],
            form: {
                name: "",
                limit: null
            },
            errors: {
                name: [],
                limit: []
            }
        };
    },
    methods: {
        getData() {
            let _this = this;

            axios
                .get(`/api/expense_types/${_this.$route.params.id}`)
                .then(response => {
                    console.log(response);

                    _this.form.name = response.data.data.name;
                    _this.form.limit = response.data.data.limit;
                    _this.items = response.data.data.sub_types;
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);

                    _this.mixin_errorDialog(
                        `Error ${error.response.status}`,
                        error.response.statusText
                    );
                });
        },
        onSave() {
            // console.log(this.items);
            // return;
            let _this = this;

            _this.$refs.form.validate();

            if (_this.$refs.form.validate()) {
                axios
                    .put("/api/expense_types/" + _this.$route.params.id, {
                        name: _this.form.name,
                        limit: _this.form.limit,
                        sub_types: _this.items
                    })
                    .then(function(response) {
                        _this.$dialog.message.success(
                            "Expense type updated successfully.",
                            {
                                position: "top-right",
                                timeout: 2000
                            }
                        );

                        _this.$router.push({
                            name: "admin.expense_types.index"
                        });
                    })
                    .catch(function(error) {
                        console.log(error);
                        console.log(error.response);

                        _this.mixin_errorDialog(
                            `Error ${error.response.status}`,
                            error.response.data.message
                        );

                        if (error.response) {
                            if (error.response.data) {
                                _this.errors = error.response.data.errors;
                            }
                        }
                    });

                return;
            }
        },
        addItem() {
            if (this.subtype.length == 0 || this.subtype == "") {
                return;
            }
            this.items.push({
                id: null,
                name: this.subtype,
                limit: this.subtype_limit
            });
            this.subtype = "";
            this.subtype_limit = null;
        },
        onDeleteSubType(item) {
            let _this = this;

            this.$confirm("Do you want to remove sub type?").then(res => {
                if (res) {
                    const index = _this.items.indexOf(item);
                    _this.items.splice(index, 1);
                }
            });

            // this.$confirm("Do you want to delete sub type?").then(res => {
            //     if (res) {
            //         axios
            //             .delete(`/api/expense_types/${item.id}`)
            //             .then(response => {
            //                 const index = _this.items.indexOf(item);
            //                 _this.items.splice(index, 1);
            //             })
            //             .catch(error => {
            //                 console.log(error);
            //                 console.log(error.response);

            //                 _this.mixin_errorDialog(
            //                     `Error ${error.response.status}`,
            //                     error.response.data.message
            //                 );
            //             });
            //     }
            // });
        }
    },
    created() {
        this.getData();
    }
};
</script>
