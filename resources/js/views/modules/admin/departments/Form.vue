<template>
    <v-form ref="form" v-model="valid">
        <v-row>
            <v-col>
                <v-text-field
                    v-model="form.name"
                    label="Name"
                    :counter="100"
                    :rules="[
                        ...mixin_validation.required,
                        ...mixin_validation.minLength(100) // error naming of validation, should have been maxLength
                    ]"
                    :error-messages="errors.name[0]"
                    @input="errors.name = []"
                    required
                >
                </v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="text-right">
                <v-btn @click="onSave" color="green" dark>Save</v-btn>
                <v-btn @click="$router.go(-1)">Cancel</v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>
<script>
export default {
    props: {
        departmentForm: {
            type: Object,
            default: () => {
                return {
                    name: ""
                };
            }
        },
        rules: {
            type: Object,
            default: () => {
                return {
                    name: []
                };
            }
        },
        errors: {
            type: Object,
            default: () => {
                return {
                    name: []
                };
            }
        }
    },
    data() {
        return {
            valid: false,
            form: {
                name: ""
            }
        };
    },
    methods: {
        onSave() {
            if (!this.$refs.form.validate()) {
                return;
            }

            this.$emit("on-save", this.form);
        }
    },
    watch: {
        departmentForm: {
            immediate: true,
            handler(newValue, oldValue) {
                this.form = newValue;
            }
        }
    }
};
</script>
