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
};
</script>
