<template>
    <div>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <h4 class="title green--text">Profile</h4>
                <v-spacer></v-spacer>
            </v-card-title>
            <v-card-subtitle>
                Last updated: {{ user.updated_at }}
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
                                        <v-row v-if="user.employee !== null">
                                            <v-col
                                                cols="12"
                                                align="center"
                                                justify="center"
                                            >
                                                <div>
                                                    {{
                                                        user.employee.department
                                                            .name
                                                    }}
                                                </div>
                                                <h3
                                                    class="display-1 green--text"
                                                >
                                                    {{
                                                        `${
                                                            user.employee
                                                                .last_name
                                                        }, ${user.employee
                                                            .first_name ||
                                                            ""} ${user.employee
                                                            .suffix || ""}`
                                                    }}
                                                </h3>
                                                <p>
                                                    {{ user.employee.job.name }}
                                                </p>
                                                <div class="text--primary">
                                                    {{
                                                        user.employee
                                                            .mobile_number
                                                    }}<br />
                                                    {{ user.employee.email }}
                                                </div>
                                            </v-col>
                                        </v-row>
                                        <v-row v-else>
                                            <v-col
                                                cols="12"
                                                align="center"
                                                justify="center"
                                            >
                                                <div>
                                                    {{ user.username }}
                                                </div>
                                                <p
                                                    class="display-1 text--primary"
                                                >
                                                    {{ user.name }}
                                                </p>
                                                <div class="text--primary">
                                                    {{ user.email }}
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
                                                                    :rules="mixin_validation.required"
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
                                                                    type="password"
                                                                ></v-text-field>
                                                            </v-col>
                                                            <v-col cols="12">
                                                                <v-text-field
                                                                    v-model="
                                                                        password
                                                                    "
                                                                    :rules="[...mixin_validation.required, ...mixin_validation.minimumLength(8)]"
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
                                                                    type="password"
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
                                                                    type="password"
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
                                <v-row v-if="user.employee === null">
                                    <v-col cols="12" md="4">
                                        <v-text-field
                                            v-model="user.name"
                                            :rules="rules.first_name"
                                            :counter="100"
                                            :error-messages="errors.first_name"
                                            @input="errors.first_name = []"
                                            label="Name "
                                            required
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="4">
                                        <v-text-field
                                            v-model="user.username"
                                            :rules="rules.first_name"
                                            :counter="100"
                                            :error-messages="errors.first_name"
                                            @input="errors.first_name = []"
                                            label="Username"
                                            required
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="4">
                                        <v-text-field
                                            v-model="user.email"
                                            :rules="rules.email"
                                            :counter="100"
                                            :error-messages="errors.email"
                                            @input="errors.email = []"
                                            label="Email Address"
                                            required
                                        ></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row v-else>
                                    <v-col cols="12" md="12">
                                        <v-text-field
                                            v-model="user.username"
                                            :rules="rules.first_name"
                                            :counter="100"
                                            :error-messages="errors.first_name"
                                            @input="errors.first_name = []"
                                            label="Username"
                                            required
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="4">
                                        <v-text-field
                                            v-model="user.employee.first_name"
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
                                            v-model="user.employee.middle_name"
                                            :rules="rules.middle_name"
                                            :counter="100"
                                            :error-messages="errors.middle_name"
                                            @input="errors.middle_name = []"
                                            label="Middle Name"
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="4">
                                        <v-text-field
                                            v-model="user.employee.last_name"
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
                                            v-model="user.employee.suffix"
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
                                            v-model="user.employee.gender"
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
                                                    v-model="
                                                        user.employee.birthdate
                                                    "
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
                                                v-model="
                                                    user.employee.birthdate
                                                "
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
                                            v-model="
                                                user.employee.mobile_number
                                            "
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
                                            v-model="
                                                user.employee.telephone_number
                                            "
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
                                            v-model="user.employee.email"
                                            :rules="rules.email"
                                            :error-messages="errors.email"
                                            @input="errors.email = []"
                                            label="Email Address"
                                        ></v-text-field>
                                    </v-col>

                                    <v-col cols="12">
                                        <v-textarea
                                            v-model="user.employee.address"
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
                                    <v-btn color="primary" @click="onUpdateData"
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
            dialogPassword: false,
            dialog: false,
            menu: false,
            user: {
                id: "",
                name: "",
                email: "",
                username: "",
                is_admin: "",
                updated_at: "",
                employee: {
                    id: 0,
                    fullname: "",
                    first_name: "",
                    middle_name: "",
                    last_name: "",
                    suffix: "",
                    gender: "",
                    birthdate: "",
                    mobile_number: "",
                    telephone_number: "",
                    email: "",
                    address: "",
                    job: "",
                    department: ""
                }
            },
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
                first_name: [
                    v => !!v || "First name is required",
                    v =>
                        v.length <= 100 ||
                        "First name must be less than 100 characters"
                ],
                middle_name: [],
                last_name: [
                    v => !!v || "Last name is required",
                    v =>
                        v.length <= 100 ||
                        "Last name must be less than 100 characters"
                ],
                suffix: [],
                gender: [v => !!v || "Gender is required"],
                birthdate: [v => !!v || "Birthdate is required"],
                job: [v => !!v || "Job designation is required"],
                mobile_number: [],
                telephone_number: [],
                email: [],
                address: []
            },
            errors: {
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
            }
        };
    },
    methods: {
        onUpdateData() {
            let _this = this;

            // _this.$refs.form.validate();

            if (_this.$refs.form.validate() && this.user.employee == null) {
                axios
                    .put("/api/users/" + _this.user.id, {
                        action: "update",
                        name: _this.user.name,
                        username: _this.user.username,
                        email: _this.user.email,
                        is_admin: _this.user.is_admin,
                        employee_id: 0
                    })
                    .then(function(response) {
                        _this.$dialog.message.success(
                            "User account updated successfully.",
                            {
                                position: "top-right",
                                timeout: 2000
                            }
                        );
                    })
                    .catch(function(error) {
                        console.log(error);
                        console.log(error.response);

                        _this.mixin_errorDialog(
                            `Error ${error.response.status}`,
                            error.response.statusText
                        );

                        _this.errors = error.response.data.errors;
                    });

                return;
            }

            if (_this.$refs.form.validate()) {
                axios
                    .put("/api/users/" + _this.user.id, {
                        action: "update",
                        name: `${_this.user.employee.last_name}, ${_this.user.employee.first_name} ${_this.user.employee.middle_name}`,
                        email: _this.user.employee.email,
                        username: _this.user.username,
                        is_admin: _this.user.is_admin,
                        employee: {
                            first_name: _this.user.employee.first_name,
                            middle_name: _this.user.employee.middle_name,
                            last_name: _this.user.employee.last_name,
                            suffix: _this.user.employee.suffix,
                            gender: _this.user.employee.gender,
                            birthdate: _this.user.employee.birthdate,
                            mobile_number: _this.user.employee.mobile_number,
                            telephone_number:
                                _this.user.employee.telephone_number,
                            email: _this.user.employee.email,
                            address: _this.user.employee.address
                        },
                        employee_id: _this.user.employee.id
                    })
                    .then(response => {
                        _this.$dialog.message.success(
                            "User account updated successfully.",
                            {
                                position: "top-right",
                                timeout: 2000
                            }
                        );
                    })
                    .catch(error => {
                        console.log(error);
                        console.log(error.response);

                        _this.mixin_errorDialog(
                            `Error ${error.response.status}`,
                            error.response.statusText
                        );
                    });
            }
        },
        onUpdatePassword() {
            let _this = this;

            if (_this.$refs.form_password.validate()) {
                axios
                    .put("/api/users/" + _this.user.id, {
                        action: "change_password",
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
                                _this.password_errors = error.response.data.errors;
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
            _this.user = response;
        });
    }
};
</script>
