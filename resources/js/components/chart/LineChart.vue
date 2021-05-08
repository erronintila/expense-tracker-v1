<script>
import { Line } from "vue-chartjs";
export default {
    name: "line-chart",
    extends: Line,
    props: ["data", "options"],
    methods: {
        update() {
            this.$data._chart.update();
        }
    },
    mounted() {
        // this.renderChart(this.data, {
        //     maintainAspectRatio: false
        // });
        this.renderChart(this.data, this.options);
    }
};
</script>
