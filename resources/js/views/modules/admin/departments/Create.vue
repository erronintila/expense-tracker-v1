<template>
    <v-app>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">New Department</h4>
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
        // onRefresh() {
        //     // Object.assign(this.$data, this.$options.data.apply(this));
        //     this.$refs.form.reset();
        //     this.$refs.form.resetValidation();
        // },
        onSave() {
            let _this = this;

            if (_this.$refs.form.validate()) {
                axios
                    .post("/api/departments", {
                        name: _this.name
                    })
                    .then(function(response) {
                        // _this.onRefresh();

                        _this.$dialog.message.success(
                            "Department created successfully.",
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
    }
};
</script>
