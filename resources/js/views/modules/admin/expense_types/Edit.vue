<template>
    <v-app>
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
                        <v-col cols="12" md="12">
                            <v-text-field
                                v-model="name"
                                :rules="rules.name"
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
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            valid: false,
            name: "",
            rules: {
                name: [
                    v => !!v || "Name is required",
                    v =>
                        v.length <= 100 ||
                        "Name must be less than 100 characters"
                ]
            },
            errors: {
                name: []
            }
        };
    },
    methods: {
        // onRefresh() {
        //     Object.assign(this.$data, this.$options.data.apply(this));
        // },
        getData() {
            let _this = this;

            axios
                .get("/api/expense_types/" + _this.$route.params.id)
                .then(response => {
                    // console.log(response);
                    _this.name = response.data.data.name;
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);
                });
        },
        onSave() {
            let _this = this;

            _this.$refs.form.validate();

            if (_this.$refs.form.validate()) {
                axios
                    .put("/api/expense_types/" + _this.$route.params.id, {
                        name: _this.name
                    })
                    .then(function(response) {
                        // _this.onRefresh();

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

                        _this.errors = error.response.data.errors;
                    });

                return;
            }
        }
    },
    created() {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " + localStorage.getItem("access_token");

        this.getData();
    }
};
</script>
