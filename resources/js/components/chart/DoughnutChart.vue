<script>
import { Doughnut } from "vue-chartjs";
import ChartDataLabels from "chartjs-plugin-datalabels";

export default {
    name: "doughnut-chart",
    extends: Doughnut,
    props: {
        data: {
            type: Object,
            default: () => {}
        },
        options: {
            type: Object,
            default: () => {}
        }
    },
    watch: {
        data: {
            deep: true,
            handler() {
                this.$data._chart.update();
            }
        }
    },
    mounted() {
        this.addPlugin(ChartDataLabels);
        this.renderChart(this.data, this.options);
        this.$emit("updateChart");
    }
};
</script>
