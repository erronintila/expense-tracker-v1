<script>
import { Bar } from "vue-chartjs";
export default {
    name: "bar-chart",
    extends: Bar,
    props: ["data", "options"],
    methods: {
        update() {
            this.$data._chart.update();
        }
    },
    mounted() {
        this.renderChart(this.data, this.options);
    }
};
</script>
