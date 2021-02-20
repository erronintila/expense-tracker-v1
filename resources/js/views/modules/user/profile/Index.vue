<template>
    <div>
        <v-container v-if="form.id == ''" style="height: 400px">
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
            <v-card-title class="pt-0">
                <h4 class="title green--text">Profile</h4>
                <v-spacer></v-spacer>
            </v-card-title>
            <v-card-subtitle>
                Last updated: {{ form.updated_at }}
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
                                                            require('../../../../assets/img/user.png')
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
                                            :rules="rules.username"
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
                                            :rules="rules.first_name"
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
                                            :rules="rules.last_name"
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
                                            :rules="rules.mobile_number"
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
                                            :rules="rules.email"
                                            :error-messages="errors.email"
                                            @input="errors.email = []"
                                            label="Email Address"
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="12">
                                        <v-textarea
                                            v-model="form.address"
                                            :rules="rules.address"
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

export default {
    data() {
        return {
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
            let _this = this;

            // _this.$refs.form.validate();

            if (_this.$refs.form.validate()) {
                axios
                    .put("/api/users/" + _this.form.id, {
                        action: "update",
                        profile_update: true,

                        // email: _this.form.email,
                        // username: _this.form.username,
                        // is_admin: _this.form.is_admin,
                        // can_login: _this.form.can_login,
                        // first_name: _this.form.first_name,
                        // middle_name: _this.form.middle_name,
                        // last_name: _this.form.last_name,
                        // suffix: _this.form.suffix,
                        // gender: _this.form.gender,
                        // birthdate: _this.form.birthdate,
                        // mobile_number: _this.form.mobile_number,
                        // telephone_number: _this.form.telephone_number,
                        // email: _this.form.email,
                        // address: _this.form.address,
                        // user_id: _this.form.id,

                        id: _this.form.id,
                        code: _this.form.id,
                        first_name: _this.form.first_name,
                        middle_name: _this.form.middle_name,
                        last_name: _this.form.last_name,
                        suffix: _this.form.suffix,
                        gender: _this.form.gender,
                        birthdate: _this.form.birthdate,
                        mobile_number: _this.form.mobile_number,
                        telephone_number: _this.form.telephone_number,
                        address: _this.form.address,
                        fund: _this.form.fund,
                        remaining_fund: _this.form.remaining_fund,
                        username: _this.form.username,
                        email: _this.form.email,
                        password: "password",
                        password_confirmation: "password",
                        is_admin: _this.form.is_admin,
                        is_superadmin: _this.form.is_superadmin,
                        can_login: _this.form.can_login,
                        type: _this.form.type,
                        job_id:
                            _this.form.job == null ? null : _this.form.job.id
                    })
                    .then(response => {
                        _this.$dialog.message.success(
                            "User account updated successfully.",
                            {
                                position: "top-right",
                                timeout: 2000
                            }
                        );

                        // _this.$store.dispatch("AUTH_USER");
                    })
                    .catch(error => {
                        console.log(error);
                        console.log(error.response);

                        _this.mixin_errorDialog(
                            `Error ${error.response.status}`,
                            error.response.statusText
                        );

                        _this.errors = error.response.data.errors;
                    });
            }
        },
        onUpdatePassword() {
            let _this = this;

            if (_this.$refs.form_password.validate()) {
                axios
                    .put("/api/users/update_password/" + _this.id, {
                        old_password: _this.old_password,
                        password: _this.password,
                        password_confirmation: _this.password_confirmation
                    })
                    .then(response => {
                        _this.$dialog.message.success(
                            "User account password has been updated.",
                            {
                                position: "top-right",
                                timeout: 2000
                            }
                        );

                        // _this.$store.dispatch("AUTH_USER");

                        _this.dialogPassword = false;
                        _this.old_password = "";
                        _this.password = "";
                        _this.password_confirmation = "";
                    })
                    .catch(error => {
                        console.log(error);
                        console.log(error.response);

                        _this.mixin_errorDialog(
                            `Error ${error.response.status}`,
                            error.response.statusText
                        );

                        if (error.response) {
                            if (error.response.data) {
                                _this.password_errors =
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
        }
    },
    created() {
        let _this = this;
        this.$store.dispatch("AUTH_USER").then(response => {
            _this.form = response;
            _this.$store.dispatch("AUTH_NOTIFICATIONS");
        });
    },
    activated() {
        let _this = this;
        this.$store.dispatch("AUTH_USER").then(response => {
            _this.form = response;
            _this.$store.dispatch("AUTH_NOTIFICATIONS");
        });
    }
};
</script>
