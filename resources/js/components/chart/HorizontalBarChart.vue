<script>
import { HorizontalBar } from "vue-chartjs";

import ChartDataLabels from "chartjs-plugin-datalabels";

export default {
    extends: HorizontalBar,
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
    }
};
</script>
