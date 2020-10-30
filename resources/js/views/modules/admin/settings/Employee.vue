<template>
    <div>
        <v-card class="elevation-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title success--text">Employee Settings</h4>
            </v-card-title>

            <v-card class="mb-4">
                <v-card-text>
                    <v-row>
                        <v-col cols="12" md="6">
                            <v-autocomplete
                                v-model="employee"
                                label="Employee"
                                return-object
                                :items="employees"
                                item-text="fullname"
                                item-value="id"
                            ></v-autocomplete>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>

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
                                                allowed_expense_types.length - 1
                                            }}
                                            others)</span
                                        >
                                    </template>
                                </v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="4">
                                <v-autocomplete
                                    v-model="expense_type"
                                    :items="expense_types"
                                    item-text="name"
                                    item-value="id"
                                    return-object
                                    label="Expense Type"
                                ></v-autocomplete>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-text-field
                                    v-model="expense_type_limit"
                                    label="Expense Amount Limit"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                Sub Types
                                <v-data-table
                                    :headers="headerExpenseTypes"
                                    :items="sub_types"
                                >
                                    <template
                                        v-slot:[`item.pivot.limit`]="props"
                                    >
                                        <v-edit-dialog
                                            :return-value.sync="
                                                props.item.pivot.limit
                                            "
                                        >
                                            {{ props.item.pivot.limit }}
                                            <template v-slot:input>
                                                <v-text-field
                                                    v-model="
                                                        props.item.pivot.limit
                                                    "
                                                    :rules="[]"
                                                    label="Expense Amount Limit"
                                                    single-line
                                                    counter
                                                ></v-text-field>
                                            </template>
                                        </v-edit-dialog>
                                    </template>
                                </v-data-table>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="4">
                                <v-btn @click="save_expense_types"
                                    >Save Changes</v-btn
                                >
                            </v-col>
                        </v-row>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            panel: [0],
            employees: [],
            employee: { id: null, expense_types: null, sub_types: null },

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

            pivot_expense_types: null,
            pivot_sub_types: null
        };
    },
    methods: {
        loadEmployees() {
            let _this = this;
            axios
                .get("/api/data/employees")
                .then(response => {
                    console.log(response);

                    _this.employees = response.data.data;
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
                .get("/api/data/expense_types")
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
        save_expense_types() {
            console.log("pivot sub types", this.pivot_sub_types);
            // console.log("allowed", this.allowed_expense_types);
            // console.log("expense_type", this.expense_type);
            // console.log("sub_types", this.sub_types);
        }
    },
    watch: {
        employee(item) {
            // console.log("employee", item);
            // this.expense_types = item.expense_types;
            this.allowed_expense_types = item.pivot_expense_types;

            this.pivot_sub_types = item.pivot_sub_types;
        },
        allowed_expense_types(items) {
            // console.log("allowed expense types", items);

            this.expense_types = items;
            this.sub_types = [];
            // this.expense_type_limit = null;
        },
        expense_type(item) {
            let expense_type_id = item.id;

            console.log("expense_type_id", expense_type_id);
            console.log("pivotsubtypes", this.pivot_sub_types);

            // let subtypes = this.pivot_sub_types.filter(item =>
            //     item.id.includes(expense_type_id)
            // );

            // console.log("filtered subtypes", subtypes);

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
        this.$store.dispatch("AUTH_USER");
        this.loadExpenseTypes();
        this.loadEmployees();
    }
};
</script>
