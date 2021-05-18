<script>
import { Line } from "vue-chartjs";
export default {
    name: "line-chart",
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
    methods: {
        update() {
            this.$data._chart.update();
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
