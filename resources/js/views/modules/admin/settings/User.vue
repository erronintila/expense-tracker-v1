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
                            <UserDialogSelector
                                v-model="user"
                                ref="userDialogSelector"
                                @selectUser="onChangeUser"
                                @onReset="onResetUser"
                                :selectedUser="user"
                                :usersParameters="usersParameters"
                            >
                                <template
                                    v-slot:openDialog="{
                                        bind,
                                        on,
                                        computedSelectedUser
                                    }"
                                >
                                    <v-btn v-bind="bind" v-on="on">
                                        {{
                                            computedSelectedUser
                                                ? computedSelectedUser.name
                                                : "Select User"
                                        }}
                                    </v-btn>
                                </template>
                            </UserDialogSelector>
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
                            <v-row>
                                <v-col cols="12" md="4">
                                    <v-btn @click="onSave" color="green" dark>
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
import UserDataService from "../../../../services/UserDataService";
import UserDialogSelector from "../../../../components/selector/dialog/UserDialogSelector";
import ExpenseTypeDataService from "../../../../services/ExpenseTypeDataService";

export default {
    components: {
        UserDialogSelector
    },
    data() {
        return {
            panel: [0],
            valid: false,
            usersParameters: {
                params: {
                    with_expense_types: true
                }
            },
            user: null,

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
            pivot_sub_types: null,

            collections: {},
            filters: {},
        };
    },
    methods: {
        onChangeUser(e) {
            this.user = e;
        },
        onResetUser() {
            this.user = null;
        },
        loadExpenseTypes() {
            ExpenseTypeDataService.getAll({ params: { itemsPerPage: 100 } })
                .then(response => {
                    this.all_expense_types = response.data.data;
                })
                .catch(error => {
                    this.mixin_showErrors(error);
                });
        },
        onSave() {
            if (this.user == null) {
                this.mixin_errorDialog("Error", "No user selected");
                return;
            }

            this.$refs.form.validate();

            if (this.$refs.form.validate()) {
                this.loader = true;

                let data = {
                    expense_types: this.allowed_expense_types.map(
                        item => item.id
                    )
                };

                UserDataService.updateSettings(this.user.id, data)
                    .then(response => {
                        this.$dialog.message.success(
                            "User settings updated successfully.",
                            {
                                position: "top-right",
                                timeout: 2000
                            }
                        );

                        this.$store.dispatch("AUTH_USER");

                    })
                    .catch(error => {
                        this.mixin_showErrors(error);

                        if (error.response) {
                            if (error.response.data) {
                                this.errors = error.response.data.errors;
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
            this.allowed_expense_types = item ? item.expense_types : null;
            this.pivot_expense_types = item ? item.pivot_expense_types : null;
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
            get() {
                let limit =
                    this.expense_type.pivot == null
                        ? null
                        : this.expense_type.pivot.limit;

                return limit;
            },
            set(newValue) {
                return newValue;
            }
        }
    },
    created() {
        // this.$store.dispatch("AUTH_USER");
        this.loadExpenseTypes();
    },
    activated() {
        this.loadExpenseTypes();
    }
};
</script>
