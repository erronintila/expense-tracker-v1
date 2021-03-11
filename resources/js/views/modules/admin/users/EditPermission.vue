<template>
    <div>
        <v-container v-if="loader" style="height: 400px;">
            <v-row class="fill-height" align-content="center" justify="center">
                <v-col class="subtitle-1 text-center" cols="12">
                    Loading, Please wait...
                </v-col>
                <v-col cols="6">
                    <v-progress-linear
                        color="green accent-4"
                        indeterminate
                        rounded
                        height="6"
                    ></v-progress-linear>
                </v-col>
            </v-row>
        </v-container>
        <v-card v-else class="elevation-0 pt-0">
            <!-- <v-card class="elevation-0 pt-0"> -->
            <v-card-title class="pt-0">
                <v-btn @click="$router.go(-1)" class="mr-3" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <h4 class="title success--text">Edit Permissions</h4>
            </v-card-title>

            <v-form ref="form" v-model="valid">
                <v-expansion-panels flat v-model="panel" multiple>
                    <v-expansion-panel>
                        <v-expansion-panel-header>
                            <div class="overline green--text">
                                Account Details
                            </div>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-row>
                                <v-col cols="12" md="4">
                                    <v-checkbox
                                        v-model="form.can_login"
                                        label="Allow Login"
                                        :error-messages="errors.can_login"
                                    ></v-checkbox>
                                </v-col>
                                <v-col cols="12" md="4">
                                    <v-radio-group
                                        v-model="form.role"
                                        row
                                        label="Role"
                                    >
                                        <v-radio
                                            label="Standard User"
                                            value="Standard User"
                                        ></v-radio>
                                        <v-radio
                                            label="Administrator"
                                            value="Administrator"
                                        ></v-radio>
                                    </v-radio-group>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col>
                                    <v-data-table
                                        v-model="form.permissions"
                                        show-select
                                        :items-per-page="-1"
                                        :headers="headers"
                                        :items="permissions"
                                        group-by="category"
                                    ></v-data-table>
                                </v-col>
                            </v-row>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>

                <small class="ml-4 text--secondary">
                    * indicates required field
                </small>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="success" dark @click="onSave">Save</v-btn>
                    <v-btn @click="$router.go(-1)">Cancel</v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loader: true,
            panel: [0, 1],
            valid: false,
            menu: false,
            permissions: [],
            headers: [{ text: "Permission", value: "name", sortable: false }],
            form: {
                can_login: true,
                is_admin: false,
                old_permissions: [],
                permissions: [],
                old_role: "",
                role: "Standard User"
            },
            errors: {
                role: [],
                can_login: []
            }
        };
    },
    methods: {
        getData() {
            this.loadPermissions().then(data => {
                this.permissions = data;
                this.form.permissions = [];
                
                axios
                    .get("/api/users/" + this.$route.params.id)
                    .then(response => {
                        let data = response.data.data;
                        this.form.is_admin = data.is_admin;
                        this.form.can_login = data.can_login;
                        this.form.permissions = data.permissions;
                        this.form.old_permissions = data.permissions;
                        this.form.role = data.role[0];
                        this.form.old_role = data.role[0];
                    })
                    .catch(error => {
                        this.mixin_showErrors(error);
                    })
                    .finally((this.loader = false));
            });
        },
        loadPermissions() {
            return new Promise((resolve, reject) => {
                axios
                    .get(`/api/data/permissions?role=${this.form.role}`)
                    .then(response => {
                        resolve(response.data);
                    })
                    .catch(error => {
                        this.mixin_showErrors(error);
                        reject();
                    });
            });
        },
        onSave() {
            this.loader = true;
            let is_administrator =
                this.form.role == "Administrator" ? true : false;

            this.$refs.form.validate();

            if (this.$refs.form.validate()) {
                this.loader = true;

                axios
                    .put(
                        "/api/users/update_permissions/" +
                            this.$route.params.id,
                        {
                            is_admin: is_administrator,
                            can_login: this.form.can_login,
                            permissions: this.form.permissions
                        }
                    )
                    .then(response => {
                        this.mixin_successDialog(
                            response.data.status,
                            response.data.message
                        );

                        window.location.replace("/admin/users");
                    })
                    .catch(error => {
                        this.mixin_showErrors(error);

                        if (error.response) {
                            if (error.response.data) {
                                this.errors = error.response.data.errors;
                            }
                        }
                    })
                    .finally((this.loader = false));

                return;
            }
        }
    },
    watch: {
        "form.role": function() {
            this.loadPermissions().then(data => {
                this.permissions = data;
                this.form.permissions = [];
                if (this.form.old_role == this.form.role) {
                    this.form.permissions = this.form.old_permissions;
                }
            });
        }
    },
    created() {
        this.getData();
    },
    activated() {
        this.getData();
    }
};
</script>
