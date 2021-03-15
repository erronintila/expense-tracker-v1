<template>
    <div>
        <v-container v-if="show" style="height: 400px;">
            <v-row
                class="fill-height text-center"
                align-content="center"
                justify="center"
            >
                <v-col>
                    <v-progress-circular
                        :size="50"
                        color="green"
                        indeterminate
                    ></v-progress-circular>
                </v-col>
                <!-- <v-col class="subtitle-1 text-center" cols="12">
                    Loading, Please wait...
                </v-col>
                <v-col cols="6">
                    <v-progress-linear
                        color="green accent-4"
                        indeterminate
                        rounded
                        height="6"
                    ></v-progress-linear>
                </v-col> -->
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show: false
        }
    },
    created() {
        setTimeout(() => {
            this.show = true;
        }, 300);
    },
    activated() {
        setTimeout(() => {
            this.show = true;
        }, 300);
    },
};
</script>
