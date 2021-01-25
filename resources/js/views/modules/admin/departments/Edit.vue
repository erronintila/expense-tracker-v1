<template>
    <v-card class="elevation-0 pt-0">
        <v-card-title class="pt-0">
            <v-btn @click="$router.go(-1)" class="mr-3" icon>
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
                            v-model="form.name"
                            :counter="100"
                            :rules="[
                                ...mixin_validation.required,
                                ...mixin_validation.minLength(100)
                            ]"
                            :error-messages="errors.name[0]"
                            @input="errors.name = []"
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
</template>

<script>
export default {
    data() {
        return {
            valid: false,
            form: {
                name: ""
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
                    _this.form.name = response.data.data.name;
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

            if (_this.$refs.form.validate()) {
                axios
                    .put(`/api/departments/${_this.$route.params.id}`, {
                        action: "update",
                        name: _this.form.name
                    })
                    .then(function(response) {
                        _this.mixin_successDialog(
                            response.data.status,
                            response.data.message
                        );

                        _this.$router.push({ name: "admin.departments.index" });
                    })
                    .catch(function(error) {
                        console.log(error);
                        console.log(error.response);

                        if (error.response) {
                            if (error.response.data) {
                                _this.errors = error.response.data.errors;
                            }
                        }

                        _this.mixin_errorDialog(
                            `Error ${error.response.status}`,
                            error.response.statusText
                        );
                    });
            }
        }
    },
    created() {
        this.getData();
    }
};
</script>
