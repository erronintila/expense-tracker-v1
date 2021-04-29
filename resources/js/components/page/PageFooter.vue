<template>
    <v-footer fixed padless>
        <v-col class="text-right" cols="12">
            <small>
                © {{ year }} Copyright — <strong>{{ company_name }}</strong>
            </small>
        </v-col>
    </v-footer>
</template>

<script>
export default {
    name: "page-footer",
    data() {
        return {
            company_name: "Twin-Circa Marketing",
            year: "2020"
        };
    }
};
</script>
