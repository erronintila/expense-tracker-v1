<script>
import { Line } from "vue-chartjs";
export default {
    extends: Line,
    props: ["data", "options"],
    methods: {
        update() {
            this.$data._chart.update();
        }
    },
    mounted() {
        this.renderChart(this.data, {
            maintainAspectRatio: false
        });
    }
};
</script>
