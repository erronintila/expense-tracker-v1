<template>
    <v-app>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn to="/admin/departments" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">Edit Department</h4>
            </v-card-title>

            <v-form ref="form" v-model="valid">
                <v-container>
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-text-field
                                v-model="name"
                                :counter="100"
                                :rules="rules.name"
                                :error-messages="errors.name[0]"
                                @input="errors.name = []"
                                label="Name *"
                                color="success"
                                required
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <small style="opacity: 0.5">
                        * indicates required field
                    </small>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green" dark @click="onSave">Save</v-btn>
                        <v-btn to="/admin/departments">Cancel</v-btn>
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
                    v => !!v || "The name field is required.",
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
        getData() {
            let _this = this;

            axios
                .get("/api/departments/" + _this.$route.params.id)
                .then(response => {
                    _this.name = response.data.data.name;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        onSave() {
            let _this = this;

            if (_this.$refs.form.validate()) {
                axios
                    .put(`/api/departments/${_this.$route.params.id}`, {
                        action: "update",
                        name: _this.name
                    })
                    .then(function(response) {
                        _this.$dialog.message.success(
                            "Department updated successfully.",
                            {
                                position: "top-right",
                                timeout: 2000
                            }
                        );

                        _this.$router.push({ name: "admin.departments.index" });
                    })
                    .catch(function(error) {
                        console.log(error);
                        console.log(error.response);

                        _this.errors = error.response.data.errors;
                    });
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
