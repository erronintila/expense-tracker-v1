<template>
    <v-app>
        <v-card class="elevation-0 pt-0">
            <v-card-title class="pt-0">
                <h4 class="title green--text">Dashboard</h4>
                <v-spacer></v-spacer>
            </v-card-title>
            <v-card-subtitle> </v-card-subtitle>

            <v-container>
                <v-row>
                    <v-col cols="12">
                        <DoughnutExample
                            :data="chartData"
                            :options="chartOptions"
                        ></DoughnutExample>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-app>
</template>

<script>
import DoughnutExample from "./components/Doughnut";

export default {
    components: {
        DoughnutExample
    },
    data() {
        return {
            options: {
                borderWidth: "10px",
                hoverBackgroundColor: "red",
                hoverBorderWidth: "10px"
            },
            chartOptions: {
                hoverBorderWidth: 20
            },
            chartData: {
                hoverBackgroundColor: "red",
                hoverBorderWidth: 10,
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
    created() {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " + localStorage.getItem("access_token");
    }
};
</script>
