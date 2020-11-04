<template>
    <div>
        <ShowSummary></ShowSummary>
    </div>
</template>

<script>
import moment from "moment";
import numeral from "numeral";
import ShowDetailed from "./components/ShowDetailed";
import ShowSummary from "./components/ShowSummary";

export default {
    components: {
        ShowSummary,
        ShowDetailed
    },
};
</script>
