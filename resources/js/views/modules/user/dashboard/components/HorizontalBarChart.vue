<script>
import { HorizontalBar } from "vue-chartjs";
export default {
    extends: HorizontalBar,
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
