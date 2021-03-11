<template>
    <v-form ref="form" v-model="valid">
        <v-expansion-panels flat v-model="panel" multiple>
            <v-expansion-panel>
                <v-expansion-panel-header>
                    <div class="overline green--text">
                        Basic Details
                    </div>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-row>
                        <v-col cols="12" md="4">
                            <!-- <JobSelector
                                v-model="form.job"
                                ref="jobSelector"
                                :showAll="false"
                                :rules="mixin_validation.required"
                                :errors="errors.job_id"
                                :selectedJob="form.job"
                                @changeData="onChangeJob"
                            >
                            </JobSelector> -->

                            <JobDropdownSelector
                                v-model="form.job"
                                ref="jobSelector"
                                :selectedJob="form.job"
                                :rules="mixin_validation.required"
                                :errors="errors.job_id"
                                @onChange="onChangeJob"
                            >
                            </JobDropdownSelector>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="form.code"
                                :rules="[
                                    ...mixin_validation.required,
                                    ...mixin_validation.minLength(100)
                                ]"
                                :counter="100"
                                :error-messages="errors.code"
                                @input="errors.code = []"
                                label="Code"
                                required
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="form.first_name"
                                :rules="[
                                    ...mixin_validation.required,
                                    ...mixin_validation.minLength(100)
                                ]"
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
                                :counter="100"
                                :error-messages="errors.middle_name"
                                @input="errors.middle_name = []"
                                label="Middle Name"
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="form.last_name"
                                :rules="[
                                    ...mixin_validation.required,
                                    ...mixin_validation.minLength(100)
                                ]"
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
                                :rules="mixin_validation.required"
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
                                :close-on-content-click="false"
                                transition="scale-transition"
                                offset-y
                                min-width="290px"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="form.birthdate"
                                        :rules="mixin_validation.required"
                                        :error-messages="errors.birthdate"
                                        @input="errors.birthdate = []"
                                        label="Birthdate"
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
                                :error-messages="errors.mobile_number"
                                @input="errors.mobile_number = []"
                                label="Mobile Number"
                                type="number"
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="form.telephone_number"
                                :counter="30"
                                :error-messages="errors.telephone_number"
                                @input="errors.telephone_number = []"
                                label="Telephone Number"
                                type="number"
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="form.email"
                                :rules="[
                                    ...mixin_validation.required,
                                    ...mixin_validation.email
                                ]"
                                :error-messages="errors.email"
                                @input="errors.email = []"
                                label="Email Address"
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
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

                    <v-row v-if="!isEdit">
                        <v-col cols="12" md="4">
                            <v-checkbox
                                v-model="form.has_fund"
                                label="has Revolving Fund"
                                :error-messages="errors.has_fund"
                            ></v-checkbox>
                        </v-col>
                    </v-row>

                    <v-row v-if="form.has_fund && !isEdit">
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="form.fund"
                                label="Revolving Fund"
                                :error-messages="errors.fund"
                                @input="errors.fund = []"
                                type="number"
                            >
                            </v-text-field>
                        </v-col>
                    </v-row>
                </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-header>
                    <div class="overline green--text">
                        Account Details
                    </div>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <small class="text--secondary">
                        Default Password: "password"
                    </small>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="form.username"
                                :rules="[
                                    ...mixin_validation.required,
                                    ...mixin_validation.minLength(50)
                                ]"
                                :counter="50"
                                :error-messages="errors.username"
                                @input="errors.username = []"
                                label="Username"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4" v-if="!isEdit">
                            <v-checkbox
                                v-model="form.can_login"
                                label="Allow Login"
                                :error-messages="errors.can_login"
                            ></v-checkbox>
                        </v-col>
                        <v-col cols="12" md="4" v-if="!isEdit">
                            <v-radio-group v-model="form.role" row label="Role">
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

                    <v-row v-if="!isEdit">
                        <v-col>
                            <v-data-table
                                v-model="form.permissions"
                                show-select
                                :items-per-page="-1"
                                :headers="collections.headers"
                                :items="collections.permissions"
                                group-by="category"
                            ></v-data-table>
                        </v-col>
                    </v-row>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>

        <v-row>
            <v-col class="text-right">
                <v-btn color="success" dark @click="onSave">Save</v-btn>
                <v-btn @click="$router.go(-1)">Cancel</v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>
<script>
import moment from "moment";
import JobDropdownSelector from "../../../../components/selector/JobDropdownSelector";
import PermissionDataService from "../../../../services/PermissionDataService";

export default {
    components: {
        JobDropdownSelector
    },
    props: {
        userForm: {
            type: Object,
            default: () => {
                return {
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
                    type: "employee",
                    job: null,
                    permissions: [],
                    role: "Standard User"
                };
            }
        },
        errors: {
            type: Object,
            default: () => {
                return {
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
                };
            }
        },
        rules: {
            type: Object,
            default: () => {
                return {};
            }
        },
        isEdit: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            panel: [0, 1, 2],
            valid: false,
            menu: false,
            collections: {
                permissions: [],
                headers: [
                    { text: "Permission", value: "name", sortable: false }
                ]
            },
            form: {
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
                type: "employee",
                job: null,
                permissions: [],
                role: "Standard User"
            }
        };
    },
    methods: {
        onChangeJob(e) {
            this.errors.job_id = [];
            this.form.job = e;
        },
        onSave() {
            if (!this.$refs.form.validate()) {
                return;
            }
            this.$emit("on-save", this.form);
        },
        loadPermissions() {
            axios
                .get(`/api/data/permissions?role=${this.form.role}`)
                .then(response => {
                    this.collections.permissions = response.data;
                    this.form.permissions = response.data;
                })
                .catch(error => {
                    this.mixin_showErrors(error);
                });
        }
    },
    computed: {
        maxDate() {
            return moment().format("YYYY-MM-DD");
        }
    },
    watch: {
        userForm: {
            deep: true,
            immediate: true,
            handler(newValue, oldValue) {
                this.form = newValue;
            }
        },
        "form.role": function() {
            this.loadPermissions();
        }
    },
    created() {
        this.loadPermissions();
    },
    activated() {
        this.loadPermissions();
    }
};
</script>
