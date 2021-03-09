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
                <div class="overline">Sub Types</div>
                <v-data-table :headers="headers" :items="form.sub_types">
                    <template v-slot:top>
                        <v-row>
                            <v-col cols="12" md="8">
                                <v-text-field
                                    v-model="subtype"
                                    label="Sub type name"
                                    class="mx-4"
                                >
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" md="3">
                                <v-text-field
                                    v-model="subtype_limit"
                                    label="Default amount limit"
                                    class="mx-4"
                                    type="number"
                                >
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" md="1" class="text-right">
                                <v-btn @click="addItem" class="mx-4">
                                    Add
                                </v-btn>
                            </v-col>
                        </v-row>
                    </template>
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
    </v-form>
</template>
<script>
export default {
    props: {
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
            form: {
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
        },
        removeItem(item) {
            const index = this.form.sub_types.indexOf(item);
            this.form.sub_types.splice(index, 1);
        }
    },
    watch: {
        expenseTypeForm: {
            immediate: true,
            handler(newValue, oldValue) {
                this.form = newValue;
            }
        }
    }
};
</script>
