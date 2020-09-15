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




<v-btn @click="addExperience">Add experience</v-btn>
    <div class="Chart">
      <DoughnutExample
        ref="skills_chart"
        :chart-data="chartData"
        :options="options">
      </DoughnutExample>

      <!-- <div v-for="(val, i) in currentDataSet" :key="i">
        <v-text-field
          type="range" 
          min="0" 
          max="8"
          placeholder="name"
          :value="currentDataSet[i]"
          @input="updateAmount($event.target.value, i)"
        ></v-text-field>
        <span>
          {{ currentDataSet[i] }} years
        </span>
        <v-text-field :value="chartData.labels[i]" @input="updateName($event.target.value, i)"></v-text-field>
        <v-btn @click="remove(i)">remove</v-btn>
      </div> -->

    </div>





                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-app>
</template>

<script>
import DoughnutExample from "./components/Doughnut";
// import randomColor from 'randomcolor';


const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
        animateRotate: false
    }
};

export default {
    components: {
        DoughnutExample
    },
    data() {
        return {
            options,
            chartData: {
                labels: ["skill1"],
                datasets: [
                    {
                        backgroundColor: ["#82B1FF"],
                        data: [1]
                    }
                ]
            }
        };
    },
    methods: {
        updateChart() {
            this.$refs.skills_chart.update();
        },
        updateAmount(amount, index) {
            this.chartData.datasets[0].data.splice(index, 1, amount);
            this.updateChart();
        },
        updateName(text, index) {
            this.chartData.labels.splice(index, 1, text);
            this.updateChart();
        },
        addExperience() {
            const currentDataset = this.chartData.datasets[0];
            this.chartData.labels.push(
                `Skill ${currentDataset.data.length + 1}`
            );
            currentDataset.data.push(0);
            currentDataset.backgroundColor.push("#82B1FF");
            this.updateChart();
        },
        remove(index) {
            const currentDataset = this.chartData.datasets[0];
            currentDataset.data.splice(index, 1);
            this.chartData.labels.splice(index, 1);
            currentDataset.backgroundColor.splice(index, 1);
            this.updateChart();
        }
    },
    computed: {
        computed: {
            currentDataSet() {
                return this.chartData.datasets[0].data;
            }
        }
    },
    mounted() {},
    created() {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " + localStorage.getItem("access_token");
    }
};
</script>
