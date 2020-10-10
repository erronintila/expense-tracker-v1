<template>
    <div>
        <PrintDetailed></PrintDetailed>
    </div>
</template>

<script>
import moment from "moment";
import numeral from "numeral";
import PrintDetailed from "./components/PrintDetailed";
import PrintSummary from "./components/PrintSummary";

export default {
    components: {
        PrintDetailed,
        PrintSummary
    },
    data() {
        return {};
    },
    methods: {
        // formatNumber(data) {
        //     return numeral(data).format("0,0.00");
        // }
    },
    created() {
        // axios.defaults.headers.common["Authorization"] =
        //     "Bearer " + localStorage.getItem("access_token");
    }
};
</script>
