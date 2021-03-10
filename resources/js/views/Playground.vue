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
                :showAll="true"
                :selectedJob="job"
                :selectedDepartment="department"
                @onReset="onResetJob"
                @onChange="onChangeJob"
            >
            </JobDropdownSelector>
            <v-btn @click="onResetDepartment">Reset Department</v-btn>
            <v-btn @click="onResetJob">Reset Job</v-btn>
            <v-btn @click="onReset">Reset All</v-btn>
        </v-container>
    </div>
</template>
<script>
import DepartmentDropdownSelector from "../components/selector/DepartmentDropdownSelector";
import JobDropdownSelector from "../components/selector/JobDropdownSelector";

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
        onResetJob() {
            this.job = null;
            console.log("Job reset", this.job);
        },
        onChangeJob(e) {
            this.job = e;
            console.log("Job changed", this.job);
        },
        onReset() {
            this.onResetDepartment();
            this.onResetJob();
        }
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
    },
    mounted() {
        // this.displayUser();
    }
};
</script>
