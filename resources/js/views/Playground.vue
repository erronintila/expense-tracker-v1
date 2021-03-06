<template>
    <div>
        <v-container>
            <DateRangePicker ref="dateRangePicker" :dateRange="dates" @onChange="onChangeDate">
                <template
                    v-slot:openDialog="{ on, attrs, computedDateRangeText }"
                >
                    <v-text-field
                        label="Date"
                        v-bind="attrs"
                        v-on="on"
                        readonly
                        prepend-icon="mdi-calendar"
                        :value="computedDateRangeText"
                    >
                    </v-text-field>
                </template>
            </DateRangePicker>
            <div class="overline">
                {{ rangeText }}
            </div>
            <div>
                <v-btn @click="onReset">Reset</v-btn>
                <v-btn @click="onSave">Save</v-btn>
            </div>
        </v-container>
    </div>
</template>
<script>
import DateRangePicker from "../components/datepicker/DateRangePicker";
import moment from "moment";

export default {
    components: {
        DateRangePicker
    },
    data() {
        return {
            dates: [
                moment()
                    .startOf("week")
                    .format("YYYY-MM-DD"),
                moment()
                    .endOf("week")
                    .format("YYYY-MM-DD")
            ],
            user: {}
        };
    },
    computed: {
        rangeText() {
            return this.dates.join(" ~ ");
        }
    },
    methods: {
        onChangeDate(e) {
            this.dates = e;
            console.log("change date (PARENT)", e);
        },
        onReset() {
            this.dates = [
                moment()
                    .startOf("week")
                    .format("YYYY-MM-DD"),
                moment()
                    .endOf("week")
                    .format("YYYY-MM-DD")
            ];

            console.log("resetted dates (PARENT)", this.dates);

            // this.$refs.dateRangePicker.onReset();
        },
        onSave() {
            console.log("save (PARENT)", this.dates);
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
