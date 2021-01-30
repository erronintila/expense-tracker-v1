<template>
    <div>
        <v-card class="elevation-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title success--text">User Settings</h4>
            </v-card-title>

            <v-card class="mb-4">
                <v-card-text>
                    <v-row>
                        <v-col cols="12" md="6">
                            <v-autocomplete
                                v-model="user"
                                label="User"
                                return-object
                                :items="users"
                                item-text="full_name"
                                item-value="id"
                            ></v-autocomplete>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>

            <v-form ref="form" v-model="valid">
                <v-expansion-panels v-model="panel" multiple>
                    <v-expansion-panel>
                        <v-expansion-panel-header>
                            <div class="green--text">
                                Expense Types
                            </div>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-row>
                                <v-col cols="12" md="4">
                                    <v-select
                                        v-model="allowed_expense_types"
                                        :items="all_expense_types"
                                        item-text="name"
                                        item-value="id"
                                        return-object
                                        label="Allowed Expense Types"
                                        multiple
                                    >
                                        <template
                                            v-slot:selection="{ item, index }"
                                        >
                                            <v-chip v-if="index === 0" small>
                                                <span>{{ item.name }}</span>
                                            </v-chip>
                                            <span
                                                v-if="index === 1"
                                                class="grey--text caption"
                                                >(+{{
                                                    allowed_expense_types.length -
                                                        1
                                                }}
                                                others)</span
                                            >
                                        </template>
                                    </v-select>
                                </v-col>
                            </v-row>
                            <!-- <v-row>
                                <v-col>
                                    <v-data-table
                                        :headers="headerExpenseTypes"
                                        :items="pivot_expense_types"
                                    ></v-data-table>
                                </v-col>
                            </v-row> -->
                            <v-row>
                                <v-col cols="12" md="4">
                                    <v-btn @click="onSave" color="green">
                                        Save Changes
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-form>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            panel: [0],
            valid: false,
            users: [],
            user: { id: null, expense_types: null, sub_types: null },

            headerExpenseTypes: [
                { text: "Name", value: "name" },
                { text: "Limit", value: "pivot.limit" }
            ],
            sub_types: [],

            all_expense_types: [],
            allowed_expense_types: null,

            expense_types: [],
            expense_type: { id: null, sub_types: null, pivot: { limit: null } },
            // expense_type_limit: null

            pivot_expense_types: [],
            pivot_sub_types: null
        };
    },
    methods: {
        loadUsers() {
            let _this = this;
            axios
                .get("/api/data/users?update_settings=true")
                .then(response => {
                    let data = response.data.data;

                    _this.users = data;
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
        loadExpenseTypes() {
            let _this = this;
            axios
                .get("/api/data/expense_types?only=true")
                .then(response => {
                    _this.all_expense_types = response.data.data;
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
            let _this = this;

            if(_this.user.id == null) {
                _this.mixin_errorDialog("Error", "No user selected");
                return;
            }

            _this.$refs.form.validate();

            if (_this.$refs.form.validate()) {
                _this.loader = true;

                axios
                    .put("/api/users/" + _this.user.id, {
                        action: "settings",
                        expense_types: _this.allowed_expense_types.map(
                            item => item.id
                        )
                    })
                    .then(function(response) {
                        _this.$dialog.message.success(
                            "User settings updated successfully.",
                            {
                                position: "top-right",
                                timeout: 2000
                            }
                        );

                        _this.$store.dispatch("AUTH_USER");

                        // _this.$router.push({ name: "admin.users.index" });
                    })
                    .catch(function(error) {
                        console.log(error);
                        console.log(error.response);

                        _this.mixin_errorDialog(
                            `Error ${error.response.status}`,
                            error.response.statusText
                        );

                        if (error.response) {
                            if (error.response.data) {
                                _this.errors = error.response.data.errors;
                            }
                        }
                    });

                return;
            }
        }
    },
    watch: {
        user(item) {
            // this.expense_types = item.expense_types;
            this.allowed_expense_types = item.expense_types;

            this.pivot_expense_types = item.pivot_expense_types;
        },
        allowed_expense_types(items) {
            this.expense_types = items;
            this.sub_types = [];
            // this.expense_type_limit = null;
        },
        expense_type(item) {
            let expense_type_id = item.id;

            // let subtypes = this.pivot_sub_types.filter(item =>
            //     item.id.includes(expense_type_id)
            // );

            this.sub_types = this.pivot_sub_types;
        }
    },
    computed: {
        expense_type_limit: {
            get: function() {
                let limit =
                    this.expense_type.pivot == null
                        ? null
                        : this.expense_type.pivot.limit;

                return limit;
            },
            set: function(newValue) {
                return newValue;
            }
        }
    },
    created() {
        // this.$store.dispatch("AUTH_USER");
        this.loadExpenseTypes();
        this.loadUsers();
    }
};
</script>
