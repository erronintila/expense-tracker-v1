<script>
import { Line } from "vue-chartjs";
export default {
    extends: Line,
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
        this.renderChart(this.data, this.options);
    }
};
</script>
