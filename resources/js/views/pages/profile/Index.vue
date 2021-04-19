<template>
    <div>
        <loader-component v-if="!formDataLoaded"></loader-component>
        <v-card v-else class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <h4 class="title green--text">Profile</h4>
                <v-spacer></v-spacer>
            </v-card-title>
            <v-card-subtitle>
                Last updated: {{ lastUpdated }}
            </v-card-subtitle>

            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-hover v-slot:default="{ hover }">
                                <v-card
                                    outlined
                                    class="mx-auto mt-3"
                                    :elevation="hover ? 5 : 2"
                                >
                                    <v-card-text>
                                        <v-row align="center" justify="center">
                                            <v-col
                                                cols="12"
                                                align="center"
                                                justify="center"
                                            >
                                                <v-avatar
                                                    class="profile"
                                                    color="grey"
                                                    size="200"
                                                >
                                                    <v-img
                                                        :src="
                                                            require('../../../assets/img/user.png')
                                                        "
                                                    />
                                                </v-avatar>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col
                                                cols="12"
                                                align="center"
                                                justify="center"
                                            >
                                                <div>
                                                    {{
                                                        form.job == null
                                                            ? ""
                                                            : form.job
                                                                  .department ==
                                                              null
                                                            ? ""
                                                            : form.job
                                                                  .department
                                                                  .name
                                                    }}
                                                </div>
                                                <h3
                                                    class="display-1 green--text"
                                                >
                                                    {{
                                                        `${
                                                            form.last_name
                                                        }, ${form.first_name ||
                                                            ""} ${form.suffix ||
                                                            ""}`
                                                    }}
                                                </h3>
                                                <p>
                                                    {{
                                                        form.job == null
                                                            ? ""
                                                            : form.job.name
                                                    }}
                                                </p>
                                                <div class="text--primary">
                                                    {{ form.mobile_number
                                                    }}<br />
                                                    {{ form.email }}
                                                </div>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>

                                    <v-dialog
                                        v-model="dialogPassword"
                                        persistent
                                        width="500"
                                    >
                                        <template
                                            v-slot:activator="{ on, attrs }"
                                        >
                                            <v-btn
                                                text
                                                color="primary"
                                                v-bind="attrs"
                                                v-on="on"
                                            >
                                                Change Password
                                            </v-btn>
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
                                                                    v-model="
                                                                        old_password
                                                                    "
                                                                    :rules="
                                                                        mixin_validation.required
                                                                    "
                                                                    :error-messages="
                                                                        password_errors.old_password
                                                                    "
                                                                    @input="
                                                                        () => {
                                                                            password_errors.old_password = [];
                                                                        }
                                                                    "
                                                                    color="success"
                                                                    label="Old Password"
                                                                    name="password"
                                                                    :type="
                                                                        showOldPassword
                                                                            ? 'text'
                                                                            : 'password'
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
                                                                    v-model="
                                                                        password
                                                                    "
                                                                    :rules="[
                                                                        ...mixin_validation.required,
                                                                        ...mixin_validation.minimumLength(
                                                                            8
                                                                        )
                                                                    ]"
                                                                    :error-messages="
                                                                        password_errors.password
                                                                    "
                                                                    @input="
                                                                        () => {
                                                                            password_errors.password = [];
                                                                        }
                                                                    "
                                                                    color="success"
                                                                    label="New Password"
                                                                    name="password"
                                                                    :type="
                                                                        showNewPassword
                                                                            ? 'text'
                                                                            : 'password'
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
                                                                    v-model="
                                                                        password_confirmation
                                                                    "
                                                                    :rules="
                                                                        password_rules.password_confirmation
                                                                    "
                                                                    :error-messages="
                                                                        password_errors.password_confirmation
                                                                    "
                                                                    @input="
                                                                        () => {
                                                                            password_errors.password_confirmation = [];
                                                                        }
                                                                    "
                                                                    color="success"
                                                                    label="Re-type Password"
                                                                    name="confirm_password"
                                                                    :type="
                                                                        showRetypePassword
                                                                            ? 'text'
                                                                            : 'password'
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
                                                    <v-btn
                                                        color="primary"
                                                        text
                                                        @click="
                                                            closePasswordDialog
                                                        "
                                                    >
                                                        Cancel
                                                    </v-btn>
                                                    <v-btn
                                                        color="primary"
                                                        text
                                                        @click="
                                                            onUpdatePassword
                                                        "
                                                    >
                                                        Save
                                                    </v-btn>
                                                </v-card-actions>
                                            </v-form>
                                        </v-card>
                                    </v-dialog>

                                    <v-row class="mt-4"></v-row>
                                </v-card>
                            </v-hover>
                        </v-col>

                        <v-col cols="12" md="8">
                            <v-form ref="form">
                                <v-row>
                                    <v-col cols="12" md="12">
                                        <v-text-field
                                            v-model="form.username"
                                            :rules="mixin_validation.required"
                                            :counter="100"
                                            :error-messages="errors.username"
                                            @input="errors.username = []"
                                            label="Username"
                                            required
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="4">
                                        <v-text-field
                                            v-model="form.first_name"
                                            :rules="mixin_validation.required"
                                            :counter="100"
                                            :error-messages="errors.first_name"
                                            @input="errors.first_name = []"
                                            label="First Name"
                                            required
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="4">
                                        <v-text-field
                                            v-model="form.middle_name"
                                            :rules="rules.middle_name"
                                            :counter="100"
                                            :error-messages="errors.middle_name"
                                            @input="errors.middle_name = []"
                                            label="Middle Name"
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="4">
                                        <v-text-field
                                            v-model="form.last_name"
                                            :rules="mixin_validation.required"
                                            :counter="100"
                                            :error-messages="errors.last_name"
                                            @input="errors.last_name = []"
                                            label="Last Name"
                                            required
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="4">
                                        <v-combobox
                                            v-model="form.suffix"
                                            :rules="rules.suffix"
                                            :counter="30"
                                            :items="['Jr', 'Sr', 'II', 'III']"
                                            :error-messages="errors.suffix"
                                            @input="errors.suffix = []"
                                            label="Suffix"
                                        ></v-combobox>
                                    </v-col>

                                    <v-col cols="12" md="4">
                                        <v-select
                                            v-model="form.gender"
                                            :rules="rules.gender"
                                            :items="['Male', 'Female']"
                                            :error-messages="errors.gender"
                                            @input="errors.gender = []"
                                            label="Gender"
                                            required
                                        >
                                        </v-select>
                                    </v-col>

                                    <v-col cols="12" md="4">
                                        <v-menu
                                            ref="menu"
                                            v-model="menu"
                                            transition="scale-transition"
                                            offset-y
                                            min-width="290px"
                                            :close-on-content-click="false"
                                        >
                                            <template
                                                v-slot:activator="{ on, attrs }"
                                            >
                                                <v-text-field
                                                    v-model="form.birthdate"
                                                    :rules="rules.birthdate"
                                                    :error-messages="
                                                        errors.birthdate
                                                    "
                                                    @input="
                                                        errors.birthdate = []
                                                    "
                                                    label="Birthdate "
                                                    readonly
                                                    v-bind="attrs"
                                                    v-on="on"
                                                ></v-text-field>
                                            </template>
                                            <v-date-picker
                                                v-model="form.birthdate"
                                                no-title
                                                scrollable
                                                color="success"
                                                :max="maxDate"
                                            >
                                            </v-date-picker>
                                        </v-menu>
                                    </v-col>

                                    <v-col cols="12" md="4">
                                        <v-text-field
                                            v-model="form.mobile_number"
                                            :rules="mixin_validation.required"
                                            :counter="30"
                                            :error-messages="
                                                errors.mobile_number
                                            "
                                            @input="errors.mobile_number = []"
                                            label="Mobile Number"
                                            type="number"
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="4">
                                        <v-text-field
                                            v-model="form.telephone_number"
                                            :rules="rules.telephone_number"
                                            :counter="30"
                                            :error-messages="
                                                errors.telephone_number
                                            "
                                            @input="
                                                errors.telephone_number = []
                                            "
                                            label="Telephone Number"
                                            type="number"
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="4">
                                        <v-text-field
                                            v-model="form.email"
                                            :rules="mixin_validation.required"
                                            :error-messages="errors.email"
                                            @input="errors.email = []"
                                            label="Email Address"
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="12">
                                        <v-textarea
                                            v-model="form.address"
                                            :rules="mixin_validation.required"
                                            :error-messages="errors.address"
                                            @input="errors.address = []"
                                            label="Address"
                                            rows="1"
                                        ></v-textarea>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" @click="onSave"
                                        >Update Profile</v-btn
                                    >
                                </v-row>
                            </v-form>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import moment from "moment";
import UserDataService from "../../../services/UserDataService";

export default {
    data() {
        return {
            formDataLoaded: false,
            showOldPassword: false,
            showNewPassword: false,
            showRetypePassword: false,
            dialogPassword: false,
            dialog: false,
            menu: false,
            form: {
                id: null,
                code: null,
                first_name: null,
                middle_name: "",
                last_name: null,
                suffix: "",
                gender: null,
                birthdate: null,
                mobile_number: null,
                telephone_number: "",
                address: null,
                fund: 0,
                remaining_fund: 0,
                username: "",
                email: null,
                password: "password",
                password_confirmation: "password",
                is_admin: false,
                is_superadmin: false,
                can_login: true,
                type: "",
                job: null,
                old_permissions: [],
                permissions: [],
                old_role: "",
                role: "Standard User"
            },
            // id: "",
            // email: "",
            // username: "",
            // is_admin: "",
            // updated_at: "",
            // can_login: 1,
            // full_name: "",
            // first_name: "",
            // middle_name: "",
            // last_name: "",
            // suffix: "",
            // gender: "",
            // birthdate: "",
            // mobile_number: "",
            // telephone_number: "",
            // email: "",
            // address: "",
            // job: { department: {} },
            old_password: "",
            password: "",
            password_confirmation: "",
            password_rules: {
                password_confirmation: [
                    v => !!v || "Retype password is required",
                    v =>
                        this.password === this.password_confirmation ||
                        "Passwords do not match"
                ]
            },
            password_errors: {
                old_password: [],
                password: [],
                password_confirmation: []
            },
            rules: {
                username: [],
                first_name: [],
                middle_name: [],
                last_name: [],
                suffix: [],
                gender: [],
                birthdate: [],
                job: [],
                mobile_number: [],
                telephone_number: [],
                email: [],
                address: []
            },
            errors: {
                code: [],
                first_name: [],
                middle_name: [],
                last_name: [],
                suffix: [],
                gender: [],
                birthdate: [],
                job: [],
                mobile_number: [],
                telephone_number: [],
                email: [],
                address: [],
                username: [],
                role: [],
                can_login: [],
                has_fund: [],
                fund: []
            }
        };
    },
    methods: {
        onSave() {
            this.$refs.form.validate();
            if (this.$refs.form.validate()) {
                UserDataService.updateProfile(this.form.id, {
                    code: this.form.code,
                    first_name: this.form.first_name,
                    middle_name: this.form.middle_name,
                    last_name: this.form.last_name,
                    suffix: this.form.suffix,
                    gender: this.form.gender,
                    birthdate: this.form.birthdate,
                    mobile_number: this.form.mobile_number,
                    telephone_number: this.form.telephone_number,
                    address: this.form.address,
                    fund: this.form.fund,
                    remaining_fund: this.form.remaining_fund,
                    username: this.form.username,
                    email: this.form.email,
                    password: "password",
                    password_confirmation: "password",
                    is_admin: this.form.is_admin,
                    is_superadmin: this.form.is_superadmin,
                    can_login: this.form.can_login,
                    type: this.form.type,
                    job_id: this.form.job == null ? null : this.form.job.id
                })
                    .then(response => {
                        this.mixin_successDialog(
                            response.data.status,
                            response.data.message
                        );
                        this.$store.dispatch("AUTH_USER");
                    })
                    .catch(error => {
                        this.mixin_showErrors(error);
                        this.errors = error.response.data.errors;
                    });
            }
        },
        onUpdatePassword() {
            if (this.$refs.form_password.validate()) {
                UserDataService.updatePassword(this.form.id, {
                    old_password: this.old_password,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                })
                    .then(response => {
                        this.mixin_successDialog(response.data.status, response.data.message);
                        // this.$store.dispatch("AUTH_USER");

                        this.dialogPassword = false;
                        this.old_password = "";
                        this.password = "";
                        this.password_confirmation = "";
                    })
                    .catch(error => {
                        this.mixin_showErrors(error);

                        if (error.response) {
                            if (error.response.data) {
                                this.password_errors =
                                    error.response.data.errors;
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
    },
    computed: {
        maxDate() {
            return moment().format("YYYY-MM-DD");
        },
        lastUpdated() {
            return moment(this.form.updated_at).format("MMM DD, YYYY HH:mm:ss");
        }
    },
    // created() {
    //     this.$store.dispatch("AUTH_USER").then(response => {
    //         this.form = response;
    //         // this.$store.dispatch("AUTH_NOTIFICATIONS");
    //         this.formDataLoaded = true;
    //     });
    // },
    activated() {
        this.$store.dispatch("AUTH_USER").then(response => {
            this.form = response;
            // this.$store.dispatch("AUTH_NOTIFICATIONS");
            this.formDataLoaded = true;
        });
    }
};
</script>
