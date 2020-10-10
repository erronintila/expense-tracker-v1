<template>
    <div>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title green--text">New Job Designation</h4>
            </v-card-title>

            <v-form ref="form" v-model="valid">
                <v-container>
                    <v-row>
                        <v-col class="d-flex" cols="12" sm="6">
                            <v-autocomplete
                                v-model="department"
                                :items="departments"
                                :rules="rules.department"
                                :error-messages="errors.department_id"
                                @input="errors.department_id = []"
                                item-value="id"
                                item-text="name"
                                label="Department *"
                            ></v-autocomplete>
                        </v-col>

                        <v-col cols="12" md="6">
                            <v-text-field
                                v-model="name"
                                :rules="rules.name"
                                :counter="100"
                                :error-messages="errors.name"
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            valid: false,
            name: "",
            department: null,
            departments: [],
            rules: {
                name: [
                    v => !!v || "Name is required",
                    v =>
                        v.length <= 100 ||
                        "Name must be less than 100 characters"
                ],
                department: [v => !!v || "Department is required"]
            },
            errors: {
                name: [],
                department_id: []
            }
        };
    },
    methods: {
        loadDepartments() {
            let _this = this;

            axios
                .get("/api/data/departments")
                .then(response => {
                    let data = response.data.data.map(item => ({
                        id: item.id,
                        name: item.name
                    }));

                    _this.departments = data;
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);
                });
        },
        // onRefresh() {
        //     Object.assign(this.$data, this.$options.data.apply(this));
        //     // this.$refs.form.reset();
        //     // this.$refs.form.resetValidation();
        // },
        onSave() {
            let _this = this;

            _this.$refs.form.validate();

            if (_this.$refs.form.validate()) {
                axios
                    .post("/api/jobs", {
                        name: _this.name,
                        department_id: _this.department
                    })
                    .then(function(response) {
                        // _this.onRefresh();

                        _this.$dialog.message.success(
                            "Job designation created successfully.",
                            {
                                position: "top-right",
                                timeout: 2000
                            }
                        );

                        _this.$router.push({ name: "admin.jobs.index" });
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
        // axios.defaults.headers.common["Authorization"] =
        //     "Bearer " + localStorage.getItem("access_token");

        this.loadDepartments();
    }
};
</script>
