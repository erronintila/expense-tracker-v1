<template>
    <v-dialog v-model="dialogPassword" persistent width="500">
        <template v-slot:activator="{ on, attrs }">
            <slot name="openDialog" v-bind="{ attrs, on }"> </slot>
        </template>

        <v-card>
            <v-card-title class="headline">
                Change Password
            </v-card-title>
            <v-form ref="form_password">
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="old_password"
                                    :rules="mixin_validation.required"
                                    :error-messages="errors.old_password"
                                    @input="
                                        () => {
                                            errors.old_password = [];
                                        }
                                    "
                                    color="success"
                                    label="Old Password"
                                    name="password"
                                    :type="
                                        showOldPassword ? 'text' : 'password'
                                    "
                                    :append-icon="
                                        showOldPassword
                                            ? 'mdi-eye'
                                            : 'mdi-eye-off'
                                    "
                                    @click:append="
                                        showOldPassword = !showOldPassword
                                    "
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="password"
                                    :rules="[
                                        ...mixin_validation.required,
                                        ...mixin_validation.minimumLength(8)
                                    ]"
                                    :error-messages="errors.password"
                                    @input="
                                        () => {
                                            errors.password = [];
                                        }
                                    "
                                    color="success"
                                    label="New Password"
                                    name="password"
                                    :type="
                                        showNewPassword ? 'text' : 'password'
                                    "
                                    :append-icon="
                                        showNewPassword
                                            ? 'mdi-eye'
                                            : 'mdi-eye-off'
                                    "
                                    @click:append="
                                        showNewPassword = !showNewPassword
                                    "
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="password_confirmation"
                                    :rules="rules.password_confirmation"
                                    :error-messages="
                                        errors.password_confirmation
                                    "
                                    @input="
                                        () => {
                                            errors.password_confirmation = [];
                                        }
                                    "
                                    color="success"
                                    label="Re-type Password"
                                    name="confirm_password"
                                    :type="
                                        showRetypePassword ? 'text' : 'password'
                                    "
                                    :append-icon="
                                        showRetypePassword
                                            ? 'mdi-eye'
                                            : 'mdi-eye-off'
                                    "
                                    @click:append="
                                        showRetypePassword = !showRetypePassword
                                    "
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="closePasswordDialog">
                        Cancel
                    </v-btn>
                    <v-btn color="primary" text @click="onSave">
                        Save
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-dialog>
</template>

<script>
import UserDataService from "../../../services/UserDataService";

export default {
    name: "change-password",
    data() {
        return {
            showOldPassword: false,
            showNewPassword: false,
            showRetypePassword: false,
            dialogPassword: false,
            old_password: "",
            password: "",
            password_confirmation: "",
            rules: {
                password_confirmation: [
                    v => !!v || "Retype password is required",
                    v =>
                        this.password === this.password_confirmation ||
                        "Passwords do not match"
                ]
            },
            errors: {
                old_password: [],
                password: [],
                password_confirmation: []
            }
        };
    },
    methods: {
        onSave() {
            if (this.$refs.form_password.validate()) {
                UserDataService.updatePassword(this.$store.getters.user.id, {
                    old_password: this.old_password,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                })
                    .then(response => {
                        this.mixin_successDialog(
                            response.data.status,
                            response.data.message
                        );

                        this.dialogPassword = false;
                        this.old_password = "";
                        this.password = "";
                        this.password_confirmation = "";
                        this.$refs.form_password.resetValidation();
                    })
                    .catch(error => {
                        this.mixin_showErrors(error);

                        if (error.response) {
                            if (error.response.data) {
                                this.errors = error.response.data.errors;
                            }
                        }
                    });
            }
        },
        closePasswordDialog() {
            this.dialogPassword = false;
            this.old_password = "";
            this.password = "";
            this.password_confirmation = "";
            this.$refs.form_password.resetValidation();
        }
    }
};
</script>
