<template>
    <v-card outlined class="mx-auto mt-3" :elevation="hover ? 5 : 2">
        <v-card-text>
            <v-row align="center" justify="center">
                <v-col cols="12" align="center" justify="center">
                    <v-avatar class="profile" color="grey" size="200">
                        <v-img :src="image_url" />
                    </v-avatar>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" align="center" justify="center">
                    <div>
                        {{
                            form.job == null
                                ? ""
                                : form.job.department == null
                                ? ""
                                : form.job.department.name
                        }}
                    </div>
                    <h3 class="display-1 green--text">
                        {{
                            `${form.last_name}, ${form.first_name ||
                                ""} ${form.suffix || ""}`
                        }}
                    </h3>
                    <p>
                        {{ form.job == null ? "" : form.job.name }}
                    </p>
                    <div class="text--primary">
                        {{ form.mobile_number }}<br />
                        {{ form.email }}
                    </div>
                </v-col>
            </v-row>
        </v-card-text>

        <slot name="actions"></slot>
        <v-row class="mt-4"></v-row>
    </v-card>
</template>

<script>
export default {
    name: "profile-card",
    props: {
        hover: {
            type: Boolean,
            default: false
        },
        image_url: {
            default: require("../../../assets/img/user.png")
        },
        form: {
            type: Object,
            default: () => {
                return {
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
                };
            }
        }
    }
};
</script>
