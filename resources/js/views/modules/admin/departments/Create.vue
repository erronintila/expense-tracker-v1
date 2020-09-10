<template>
    <v-app>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn to="/admin/departments" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">New Department</h4>
            </v-card-title>

            <ValidationObserver ref="observer">
                <form>
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="Name"
                        rules="max:10"
                    >
                        <v-text-field
                            v-model="name"
                            :counter="10"
                            :error-messages="errors"
                            label="Name"
                            required
                        ></v-text-field>
                    </ValidationProvider>

                    <v-btn @click="clear">
                        Clear
                    </v-btn>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green" dark @click="onSave">Save</v-btn>
                        <v-btn to="/admin/departments">Cancel</v-btn>
                    </v-card-actions>
                </form>
            </ValidationObserver>

            <!-- <v-form ref="form" v-model="valid">
                <v-container>
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-text-field
                                v-model="name"
                                :rules="rules.name"
                                :counter="100"
                                label="Name"
                                required
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green" dark @click="onSave">Save</v-btn>
                        <v-btn to="/admin/departments">Cancel</v-btn>
                    </v-card-actions>
                </v-container>
            </v-form> -->

            <v-text-field
                :counter="100"
                label="Name"
            ></v-text-field>
        </v-card>
    </v-app>
</template>

<script>
import { required, email, max } from "vee-validate/dist/rules";

import {
    extend,
    ValidationObserver,
    ValidationProvider,
    setInteractionMode
} from "vee-validate";

// import "../../../../helpers/vee-validate";

extend("required", {
    ...required,
    message: "{_field_} can not be empty"
});

extend("max", {
    ...max,
    message: "{_field_} may not be greater than {length} characters"
});

extend("email", {
    ...email,
    message: "Email must be valid"
});

setInteractionMode("eager");

export default {
    components: {
        ValidationProvider,
        ValidationObserver
    },
    data() {
        return {
            valid: false,
            name: ""
            // rules: {
            //     name: [
            //         v => !!v || "Name is required",
            //         v =>
            //             v.length <= 100 ||
            //             "Name must be less than 100 characters"
            //     ]
            // }
        };
    },
    methods: {
        onRefresh() {
            this.$refs.form.reset();
            this.$refs.form.resetValidation();
        },
        clear() {
            this.$refs.observer.reset();
        },
        onSave() {
            let _this = this;

            // console.log(_this.$refs.observer.validate());

            // if (true) {
            // }

            // _this.$refs.form.validate();

            // if (_this.$refs.observer.validate()) {
            //     alert("ola");
            // }

            // this.$refs.observer.reset();

            // if (_this.$refs.form.validate()) {
            axios
                .post("/api/departments", {
                    name: _this.name
                })
                .then(function(response) {
                    _this.onRefresh();

                    _this.$dialog.message.success(
                        "Department created successfully.",
                        {
                            position: "top-right",
                            timeout: 2000
                        }
                    );
                })
                .catch(function(error) {
                    console.log(error);

                    console.log(error.response);

                    let errors = error.response.data.errors;

                    _this.$refs.observer.setErrors(errors);

                    _this.$refs.observer.validate();
                });

            //     return;
            // }
        }
    },
    created() {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " + localStorage.getItem("access_token");
    }
};
</script>
