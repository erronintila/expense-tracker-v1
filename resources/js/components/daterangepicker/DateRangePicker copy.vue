<template>
    <!-- <v-app> -->
    <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        min-width="290px"
        max-width="290px"
        class="pa-0"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                v-if="buttonType"
                :color="buttonColor"
                :dark="buttonDark"
                v-bind="attrs"
                v-on="on"
                offset-y
            >
                {{ dateRangeText }}
            </v-btn>

            <v-text-field
                v-else
                v-model="dateRangeText"
                label="Date"
                readonly
                v-bind="attrs"
                v-on="on"
                :solo="solo"
            ></v-text-field>
        </template>
        <v-card>
            <v-select
                v-model="presetValue"
                :items="presetsList"
                label="Presets"
                solo
                flat
                @change="updatePreset"
            ></v-select>
            <v-date-picker
                v-model="dates"
                :value="dates"
                range
                no-title
                scrollable
                color="success"
                @change="customChange"
            >
                <v-spacer></v-spacer>
                <v-btn text color="success" @click="resetDates">Reset</v-btn>
                <v-btn text color="success" @click="$refs.menu.save(dates)">
                    OK
                </v-btn>
                <!-- <v-btn text color="success" @click="menu = false">Close</v-btn> -->
            </v-date-picker>
        </v-card>
    </v-menu>
    <!-- </v-app> -->
</template>

<script>
// Please visit :
// https://stackoverflow.com/questions/59404459/custom-date-picker-in-vuetify

import moment from "moment";

export default {
    props: {
        buttonType: {
            type: Boolean,
            default: false
        },
        buttonColor: {
            type: String,
            default: "primary"
        },
        buttonDark: {
            type: Boolean,
            default: true
        },
        solo: {
            type: Boolean,
            default: false
        },
        value: {
            type: Array,
            default: () => {
                return [
                    moment().format("YYYY-MM-DD"),
                    moment().format("YYYY-MM-DD")
                ];
            }
        },
        preset: {
            type: String,
            default: ""
        },
        presets: {
            type: Array,
            default: () => {
                return ["Today", "This Week", "This Month", "This Year"];
            }
        }
    },
    data() {
        return {
            menu: false,
            dates: this.value,
            presetValue: this.preset,
            presetsList: this.presets
        };
    },
    methods: {
        customChange() {
            this.$emit("updateDates", this.dates);
        },
        resetDates() {
            this.menu = false;
            this.dates = [
                moment().format("YYYY-MM-DD"),
                moment().format("YYYY-MM-DD")
            ];
            this.presetValue = "";

            this.$emit("updateDates", this.dates);
        },
        updatePreset() {
            this.menu = false;
            switch (this.presetValue) {
                case "Today":
                    this.dates = [
                        moment().format("YYYY-MM-DD"),
                        moment().format("YYYY-MM-DD")
                    ];
                    this.$emit("updateDates", this.dates);

                    break;
                case "Yesterday":
                    this.dates = [
                        moment()
                            .subtract(1, "days")
                            .format("YYYY-MM-DD"),
                        moment()
                            .subtract(1, "days")
                            .format("YYYY-MM-DD")
                    ];
                    this.$emit("updateDates", this.dates);

                    break;
                case "Last 7 Days":
                    this.dates = [
                        moment()
                            .subtract(7, "days")
                            .format("YYYY-MM-DD"),
                        moment()
                            .subtract(1, "days")
                            .format("YYYY-MM-DD")
                    ];
                    this.$emit("updateDates", this.dates);

                    break;
                case "Last 30 Days":
                    this.dates = [
                        moment()
                            .subtract(30, "days")
                            .format("YYYY-MM-DD"),
                        moment()
                            .subtract(1, "days")
                            .format("YYYY-MM-DD")
                    ];
                    this.$emit("updateDates", this.dates);

                    break;
                case "This Week":
                    this.dates = [
                        moment()
                            .startOf("week")
                            .format("YYYY-MM-DD"),
                        moment()
                            .endOf("week")
                            .format("YYYY-MM-DD")
                    ];
                    this.$emit("updateDates", this.dates);

                    break;
                case "Last Week":
                    this.dates = [
                        moment()
                            .subtract(1, "weeks")
                            .startOf("week")
                            .format("YYYY-MM-DD"),
                        moment()
                            .subtract(1, "weeks")
                            .endOf("week")
                            .format("YYYY-MM-DD")
                    ];
                    this.$emit("updateDates", this.dates);

                    break;
                case "This Month":
                    this.dates = [
                        moment()
                            .startOf("month")
                            .format("YYYY-MM-DD"),
                        moment()
                            .endOf("month")
                            .format("YYYY-MM-DD")
                    ];
                    this.$emit("updateDates", this.dates);

                    break;
                case "Last Month":
                    this.dates = [
                        moment()
                            .subtract(1, "months")
                            .startOf("month")
                            .format("YYYY-MM-DD"),
                        moment()
                            .subtract(1, "months")
                            .endOf("month")
                            .format("YYYY-MM-DD")
                    ];
                    this.$emit("updateDates", this.dates);

                    break;
                case "This Quarter":
                    this.dates = [
                        moment()
                            .startOf("quarter")
                            .format("YYYY-MM-DD"),
                        moment()
                            .endOf("quarter")
                            .format("YYYY-MM-DD")
                    ];
                    this.$emit("updateDates", this.dates);

                    break;
                case "Last Quarter":
                    this.dates = [
                        moment()
                            .subtract(1, "quarters")
                            .startOf("quarter")
                            .format("YYYY-MM-DD"),
                        moment()
                            .subtract(1, "quarters")
                            .endOf("quarter")
                            .format("YYYY-MM-DD")
                    ];
                    this.$emit("updateDates", this.dates);

                    break;
                case "This Year":
                    this.dates = [
                        moment()
                            .startOf("year")
                            .format("YYYY-MM-DD"),
                        moment()
                            .endOf("year")
                            .format("YYYY-MM-DD")
                    ];
                    this.$emit("updateDates", this.dates);

                    break;
                case "Last Year":
                    this.dates = [
                        moment()
                            .subtract(1, "years")
                            .startOf("year")
                            .format("YYYY-MM-DD"),
                        moment()
                            .subtract(1, "years")
                            .endOf("year")
                            .format("YYYY-MM-DD")
                    ];
                    this.$emit("updateDates", this.dates);

                    break;
                case "Last 5 Years":
                    this.dates = [
                        moment()
                            .subtract(5, "years")
                            .startOf("year")
                            .format("YYYY-MM-DD"),
                        moment()
                            .subtract(1, "years")
                            .endOf("year")
                            .format("YYYY-MM-DD")
                    ];
                    this.$emit("updateDates", this.dates);

                    break;
                default:
                    this.dates = [
                        moment().format("YYYY-MM-DD"),
                        moment().format("YYYY-MM-DD")
                    ];
                    this.$emit("updateDates", this.dates);

                    break;
            }
        }
    },
    computed: {
        dateRangeText() {
            this.dates.sort();
            return this.dates.join(" ~ ");
        }
    }
};
</script>
