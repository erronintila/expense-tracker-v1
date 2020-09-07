<template>
    <v-app>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <h4 class="title green--text">Departments</h4>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on, attrs }">
                        <v-menu offset-y transition="scale-transition" left>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="elevation-3"
                                    color="green"
                                    dark
                                    fab
                                    x-small
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    <v-icon dark>
                                        mdi-format-list-bulleted-square
                                    </v-icon>
                                </v-btn>
                            </template>

                            <v-list>
                                <v-list-item @click="onRestore">
                                    <v-list-item-title>
                                        Restore
                                    </v-list-item-title>
                                </v-list-item>
                                <v-list-item @click="onDelete">
                                    <v-list-item-title>
                                        Move to archive
                                    </v-list-item-title>
                                </v-list-item>
                                <!-- <v-list-item
                                    v-for="n in 5"
                                    :key="n"
                                    @click="() => {}"
                                >
                                    <v-list-item-title>
                                        Option {{ n }}
                                    </v-list-item-title>
                                </v-list-item> -->
                            </v-list>
                        </v-menu>

                        <v-menu
                            transition="scale-transition"
                            :close-on-content-click="false"
                            :nudge-width="200"
                            offset-y
                            left
                            bottom
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="elevation-3 mr-2"
                                    color="green"
                                    dark
                                    fab
                                    x-small
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    <v-icon dark>mdi-filter</v-icon>
                                </v-btn>
                            </template>

                            <v-card>
                                <v-list>
                                    <v-list-item>
                                        <v-select
                                            v-model="status"
                                            v-on:change="loadItems"
                                            :items="statuses"
                                            label="Status"
                                        ></v-select>
                                    </v-list-item>
                                </v-list>
                            </v-card>
                        </v-menu>

                        <v-btn
                            class="elevation-3 mr-2"
                            color="green"
                            dark
                            fab
                            x-small
                            @click="onRefresh"
                        >
                            <v-icon dark>mdi-reload</v-icon>
                        </v-btn>

                        <v-btn
                            class="elevation-3 mr-2"
                            color="green"
                            dark
                            fab
                            x-small
                            v-bind="attrs"
                            v-on="on"
                        >
                            <v-icon dark>mdi-plus</v-icon>
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="headline">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                            <v-container>
                                <v-form
                                    ref="form"
                                    v-model="valid"
                                    :lazy-validation="lazy"
                                >
                                    <v-row>
                                        <v-col>
                                            <v-text-field
                                                v-model="editedItem.name"
                                                label="Name"
                                                clearable
                                                :rules="rules.name"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-form>
                            </v-container>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                text
                                @click="closeDialog"
                            >
                                Cancel
                            </v-btn>
                            <v-btn color="green darken-1" text @click="onSave">
                                Save
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-card-title>
            <v-card-subtitle>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
            </v-card-subtitle>
            <v-data-table
                :headers="headers"
                :items="items"
                :search="search"
                v-model="selected"
                show-select
                item-key="name"
                class="elevation-0"
            >
                <template v-slot:[`item.actions`]="{ item }">
                    <v-icon small class="mr-2" @click="onEdit(item)">
                        mdi-pencil
                    </v-icon>
                </template>
            </v-data-table>
        </v-card>
    </v-app>
</template>

<script>
export default {
    props: {},
    data() {
        return {
            headers: [
                { text: "Name", value: "name" },
                { text: "Last Updated", value: "updated_at" },
                { text: "Actions", value: "actions", sortable: false }
            ],
            items: [],
            status: "Active",
            statuses: ["Active", "Archived"],
            valid: true,
            rules: {
                name: [
                    value => !!value || "Name is required",
                    value =>
                        (value && value.length <= 250) ||
                        "Name must be less than 250 characters"
                ]
            },
            lazy: false,
            selected: [],
            search: "",
            dialog: false,
            editedIndex: -1,
            editedItem: {
                name: ""
            },
            defaultItem: {
                name: ""
            }
        };
    },
    methods: {
        loadItems() {
            let _this = this;
            _this.selected = [];

            axios
                .get("/api/departments", {
                    params: {
                        status: _this.status
                    }
                })
                .then(function(response) {
                    _this.items = response.data.data;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        onRefresh() {
            this.selected = [];
            this.status = "Active";
            this.loadItems();
        },
        onSave() {
            let _this = this;

            if (_this.editedIndex > -1) {
                axios
                    .put(`/api/departments/${_this.editedItem.id}`, {
                        name: _this.editedItem.name,
                        action: "update"
                    })
                    .then(function(response) {
                        _this.$dialog.message.success(
                            "Item updated successfully.",
                            {
                                position: "top-right",
                                timeout: 2000
                            }
                        );
                        _this.loadItems();
                    })
                    .catch(function(error) {
                        console.log(error.response);
                    });
            } else {
                axios
                    .post("/api/departments", {
                        name: _this.editedItem.name
                    })
                    .then(function(response) {
                         _this.$dialog.message.success(
                            "Item added successfully.",
                            {
                                position: "top-right",
                                timeout: 2000
                            }
                        );
                        _this.loadItems();
                    })
                    .catch(function(error) {
                        console.log(error.response);
                    });
            }
            _this.closeDialog();
        },
        onEdit(item) {
            this.editedIndex = this.items.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        },
        onDelete() {
            let _this = this;

            if (_this.selected.length == 0) {
                this.$dialog.message.error("No item(s) selected", {
                    position: "top-right",
                    timeout: 2000
                });
                return;
            }

            this.$confirm("Move item(s) to archive?").then(res => {
                if (res) {
                    axios
                        .delete(`/api/departments/${_this.selected[0].id}`, {
                            params: {
                                ids: _this.selected.map(item => {
                                    return item.id;
                                })
                            }
                        })
                        .then(function(response) {
                            _this.$dialog.message.success(
                                "Item(s) moved to archive.",
                                {
                                    position: "top-right",
                                    timeout: 2000
                                }
                            );
                            _this.loadItems();
                        })
                        .catch(function(error) {
                            console.log(error.response);
                        });
                }
            });
        },
        onRestore() {
            let _this = this;

            if (_this.selected.length == 0) {
                this.$dialog.message.error("No item(s) selected", {
                    position: "top-right",
                    timeout: 2000
                });
                return;
            }

            axios
                .put(`/api/departments/${_this.selected[0].id}`, {
                    ids: _this.selected.map(item => {
                        return item.id;
                    }),
                    action: "restore"
                })
                .then(function(response) {
                    _this.$dialog.message.success("Item(s) restored.", {
                        position: "top-right",
                        timeout: 2000
                    });
                    _this.loadItems();
                })
                .catch(function(error) {
                    console.log(error.response);
                });
        },
        closeDialog() {
            this.dialog = false;
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            });
            this.$refs.form.resetValidation();
        }
    },
    computed: {
        formTitle() {
            return this.editedIndex === -1
                ? "New Department"
                : "Edit Department";
        }
    },
    watch: {
        dialog(val) {
            val || this.closeDialog();
        }
    },
    created() {
        this.loadItems();
    },
    mounted() {}
};
</script>
