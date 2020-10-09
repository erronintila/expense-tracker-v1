<script>

import { Doughnut } from "vue-chartjs";

import ChartDataLabels from 'chartjs-plugin-datalabels';

export default {
    extends: Doughnut,
    props: ["data", "options"],
    methods: {
        update() {
            this.$data._chart.update();
        }
    },
    mounted() {
        this.addPlugin(ChartDataLabels);
        this.renderChart(this.data, this.options);
        this.$emit("updateChart");
    }
};
</script>
