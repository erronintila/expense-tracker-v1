<template>
    <div>
        <v-card-title class="pt-0">
            <h4 class="title green--text">{{ title }}</h4>
            <v-spacer></v-spacer>
            <slot name="actions"></slot>
        </v-card-title>
        <v-card-subtitle>
            <slot name="sub-actions"></slot>
        </v-card-subtitle>
    </div>
</template>

<script>
export default {
    name: "page-header",
    props: {
        title: ""
    }
};
</script>
