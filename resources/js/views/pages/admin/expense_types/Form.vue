<template>
    <v-form ref="form" v-model="valid">
        <v-row>
            <v-col cols="12" md="8">
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
                    label="Name"
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
                    label="Default Amount Limit"
                    required
                    type="number"
                ></v-text-field>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <div class="overline">
                    Sub Types
                    <v-dialog v-model="dialog" max-width="500px">
                        <template
                            v-slot:activator="{
                                on,
                                attrs
                            }"
                        >
                            <v-btn class="mb-2" v-bind="attrs" v-on="on" small>
                                Add New
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="subtype"
                                            label="Name"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                            v-model="subtype_limit"
                                            label="Limit"
                                            type="number"
                                        >
                                        </v-text-field>
                                    </v-col>
                                </v-row>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="primary"
                                    text
                                    @click="dialog = false"
                                >
                                    Cancel
                                </v-btn>
                                <v-btn color="primary" text @click="addItem">
                                    Add
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </div>

                <v-data-table :headers="headers" :items="form.sub_types">
                    <template v-slot:[`item.name`]="props">
                        <v-edit-dialog :return-value.sync="props.item.name">
                            {{ props.item.name }}
                            <template v-slot:input>
                                <v-text-field
                                    v-model="props.item.name"
                                    :rules="[]"
                                    label="Edit"
                                    single-line
                                    counter
                                ></v-text-field>
                            </template>
                        </v-edit-dialog>
                    </template>
                    <template v-slot:[`item.limit`]="props">
                        <v-edit-dialog :return-value.sync="props.item.limit">
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
                                    removeItem(item);
                                }
                            "
                        >
                            mdi-delete
                        </v-icon>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>

        <v-row>
            <v-col class="text-right">
                <v-btn color="green" dark @click="onSave">Save</v-btn>
                <v-btn @click="$router.go(-1)">Cancel</v-btn>
            </v-col>
        </v-row>

        <v-divider v-if="isEdit"></v-divider>

        <v-row v-if="isEdit">
            <v-col>
                <v-expansion-panels flat>
                    <v-expansion-panel>
                        <v-expansion-panel-header>
                            Deleted subtypes:
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-data-table
                                :headers="deleted_sub_types.headers"
                                :items="deleted_sub_types.items"
                            >
                                <template v-slot:[`item.actions`]="{ item }">
                                    <v-btn
                                        class="text-capitalize"
                                        rounded
                                        color="green"
                                        dark
                                        small
                                        @click="onRestoreSubtype(item)"
                                    >
                                        <!-- <v-icon small>mdi-refresh</v-icon> -->
                                        Restore
                                    </v-btn>
                                    <!-- <v-icon
                                        small
                                        class="mr-2"
                                        @click="onRestoreSubtype(item)"
                                    >
                                        mdi-refresh
                                    </v-icon> -->
                                </template>
                            </v-data-table>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
        </v-row>
    </v-form>
</template>
<script>
export default {
    props: {
        expenseTypeId: {
            default: null
        },
        isEdit: {
            type: Boolean,
            default: false
        },
        expenseTypeForm: {
            type: Object,
            default: () => {
                return {
                    name: "",
                    limit: null,
                    sub_types: []
                };
            }
        },
        errors: {
            type: Object,
            default: () => {
                return {
                    name: [],
                    limit: [],
                    sub_type: []
                };
            }
        }
    },
    data() {
        return {
            valid: false,
            dialog: false,
            subtype: "",
            subtype_limit: null,
            hasSubtype: false,
            deleted_sub_types: {
                headers: [
                    {
                        text: "Name",
                        value: "name",
                        sortable: false
                    },
                    {
                        text: "Action",
                        value: "actions",
                        sortable: false
                    }
                ],
                items: []
            },
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
            form: {
                id: null,
                name: "",
                limit: null,
                sub_types: []
            }
        };
    },
    methods: {
        onSave() {
            if (!this.$refs.form.validate()) {
                return;
            }
            this.$emit("on-save", this.form);
        },
        addItem() {
            if (this.subtype.length == 0 || this.subtype == "") {
                return;
            }
            this.form.sub_types.push({
                id: null,
                name: this.subtype,
                limit: this.subtype_limit
            });
            this.subtype = "";
            this.subtype_limit = null;

            this.dialog = false;
        },
        removeItem(item) {
            if (item.id && item.id > 0) {
                let i = item;
                this.$confirm("Do you want to delete default subtype?").then(
                    res => {
                        if (res) {
                            axios
                                .delete(`/api/expense_types/${i.id}`)
                                .then(response => {
                                    this.loadDeletedSubTypes(
                                        this.expenseTypeId
                                    );

                                    const index = this.form.sub_types.indexOf(
                                        item
                                    );
                                    this.form.sub_types.splice(index, 1);
                                })
                                .catch(error => {
                                    this.mixin_showErrors(error);
                                });
                        }
                        return;
                    }
                );
            } else {
                const index = this.form.sub_types.indexOf(item);
                this.form.sub_types.splice(index, 1);
            }
        },
        onRestoreSubtype(item) {
            axios
                .put(`/api/expense_types/restore/${item.id}`)
                .then(response => {
                    this.form.sub_types.push({
                        id: item.id,
                        name: item.name,
                        limit: item.limit
                    });
                    this.loadDeletedSubTypes(this.expenseTypeId);
                })
                .catch(error => {
                    this.mixin_showErrors(error);
                });
        },
        loadSubTypes(id) {
            axios
                .get(`/api/expense_types?expense_type_id=${id}`, {
                    params: {
                        itemsPerPage: "false"
                    }
                })
                .then(response => {
                    // this.form.sub_types = response.data;
                })
                .catch(error => {
                    this.mixin_showErrors(error);
                });
        },
        loadDeletedSubTypes(id) {
            axios
                .get(`/api/expense_types?expense_type_id=${id}`, {
                    params: {
                        status: "Archived",
                        itemsPerPage: "false"
                    }
                })
                .then(response => {
                    this.deleted_sub_types.items = response.data.data;
                })
                .catch(error => {
                    this.mixin_showErrors(error);
                });
        }
    },
    watch: {
        expenseTypeForm: {
            immediate: true,
            deep: true,
            handler(newValue, oldValue) {
                this.form = newValue;
            }
        }
    },
    mounted() {
        if (this.isEdit) {
            this.loadDeletedSubTypes(this.expenseTypeId);
            this.loadSubTypes(this.expenseTypeId);
        }
    }
};
</script>
