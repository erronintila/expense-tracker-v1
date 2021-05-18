<script>
import { Bar } from "vue-chartjs";
export default {
    name: "bar-chart",
    extends: Bar,
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
