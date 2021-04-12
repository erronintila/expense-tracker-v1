<template>
    <div>
        <loader-component v-if="!formDataLoaded"></loader-component>
        <v-card v-else class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <h4 class="title green--text">Advance Payments</h4>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                    <!-- <template
                        v-slot:activator="{ on, attrs }"
                        v-if="mixin_can('add expense reports')"
                    > -->
                    <template
                        v-slot:activator="{ on, attrs }"
                    >
                        <v-btn
                            class="elevation-3 mr-2"
                            color="green"
                            :to="{ name: 'admin.advance_payments.create' }"
                            dark
                            fab
                            x-small
                            v-bind="attrs"
                            v-on="on"
                        >
                            <v-icon dark>mdi-plus</v-icon>
                        </v-btn>
                    </template>
                    <span>Add New</span>
                </v-tooltip>
            </v-card-title>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formDataLoaded: false
        };
    },
    activated() {
        this.formDataLoaded = true;
    }
};
</script>
