<template>
    <v-app>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <h4 class="title green--text">Dashboard</h4>
                <v-spacer></v-spacer>
            </v-card-title>
            <v-card-subtitle> </v-card-subtitle>

            <v-container>
                <v-btn @click="updateDonut">Update</v-btn>

                <v-row>
                    <v-col cols="12">
                        <DoughnutChart
                            ref="donut_chart"
                            :data="chartData"
                            :options="chartOptions"
                        ></DoughnutChart>

                        <PieChart
                            :data="chartData"
                            :options="chartOptions"
                        ></PieChart>

                        <BarChart
                            :data="chartData"
                            :options="chartOptions"
                        ></BarChart>

                        <LineChart
                            :data="chartData"
                            :options="chartOptions"
                        ></LineChart>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-app>
</template>

<script>
import DoughnutChart from "./components/DoughnutChart";
import PieChart from "./components/PieChart";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import randomcolor from "randomcolor";

export default {
    components: {
        DoughnutChart,
        PieChart,
        BarChart,
        LineChart
    },
    data() {
        return {
            chartOptions: {
                hoverBorderWidth: 20
            },
            chartData: {
                labels: ["Green", "Red", "Blue"],
                datasets: [
                    {
                        label: "Data One",
                        backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
                        data: [1, 10, 5]
                    }
                ]
            }
        };
    },
    methods: {
        updateChart() {
            this.$refs.donut_chart.update();
        },
        updateDonut() {
            const currentDataset = this.chartData.datasets[0];
            // this.chartData.labels.push(
            //     `Skill ${currentDataset.data.length + 1}`
            // );
            // currentDataset.data.push(20);
            // currentDataset.backgroundColor.push("#44B883");
            // this.updateChart();

            this.chartData.labels = ["Blue"];
            this.chartData.datasets = [
                {
                    label: "000000000000000",
                    backgroundColor: [randomcolor(), randomcolor()],
                    data: [40, 60]
                }
            ];
            this.$refs.donut_chart.update();
        }
    },
    created() {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " + localStorage.getItem("access_token");

        // axios.get("/api/user").then(response => {
        //     console.log(response);
        // });
    }
};
</script>
