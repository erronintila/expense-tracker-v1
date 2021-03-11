<template>
    <div>
        <v-container>
            <DepartmentDropdownSelector
                v-model="department"
                :showAll="true"
                :selectedDepartment="department"
                @onReset="onResetDepartment"
                @onChange="onChangeDepartment"
            >
            </DepartmentDropdownSelector>
            <JobDropdownSelector
                v-model="job"
                :selectedJob="job"
                :selectedDepartment="department"
                @onReset="onResetJob"
                @onChange="onChangeJob"
            >
            </JobDropdownSelector>
            <v-btn @click="onResetDepartment">Reset Department</v-btn>
            <v-btn @click="onResetJob">Reset Job</v-btn>
            <v-btn @click="onReset">Reset All</v-btn>
            <v-btn @click="onShowJob">Show Job</v-btn>
            <v-btn @click="setJob">Set Job</v-btn>
        </v-container>
    </div>
</template>
<script>
import DepartmentDropdownSelector from "../components/selector/dropdown/DepartmentDropdownSelector";
import JobDropdownSelector from "../components/selector/dropdown/JobDropdownSelector";

export default {
    components: {
        DepartmentDropdownSelector,
        JobDropdownSelector
    },
    data() {
        return {
            department: null,
            job: null,
            user: {}
        };
    },
    computed: {},
    methods: {
        onResetDepartment() {
            this.department = null;
            console.log("Department reset", this.department);
        },
        onChangeDepartment(e) {
            this.department = e;
            console.log("Department changed", this.department);
        },
        onShowJob() {
            console.log(this.job);
        },
        setJob() {
            if (!this.job) {
                this.job = { id: 11 };
                return;
            }

            this.job = this.job;
        },
        onResetJob() {
            this.job = null;
            console.log("Job reset", this.job);
        },
        onChangeJob(e) {
            this.job = e;
        },
        onReset() {
            this.onResetDepartment();
            this.onResetJob();
        },
         getInitialJob() {
            axios.get("api/jobs/20").then(response => this.job = response.data.data);
        },
        // async getUser() {
        //     let res = await axios.get("/api/users/2");
        //     try {
        //         return { data: res.data.data };
        //     } catch (error) {
        //         return { data: error.response };
        //     }
        // },
        // async displayUser() {
        //     this.user = await this.getUser();
        //     console.log(this.user);
        // }
        // async displayJob() {
        //     let data = await this.getInitialJob();
        //     this.job = data;
        //     console.log(this.job);
        // }
    },
    mounted() {
        this.getInitialJob();
        // this.job = { id: 3 };
        // this.displayUser();
    }
};
</script>
