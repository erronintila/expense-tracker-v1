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
                :text="buttonText"
                :class="buttonClass"
            >
                {{ customText == null ? dateRangeText : customText }}
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
                v-model="selected"
                range
                no-title
                scrollable
                color="success"
            >
                <v-spacer></v-spacer>
                <v-btn text color="success" @click="resetDates">Reset</v-btn>
                <v-btn text color="success" @click="$refs.menu.save(selected)">
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
        buttonText: {
            type: Boolean,
            default: false
        },
        customText: {
            type: String,
            default: null
        },
        buttonClass: {
            type: String,
            default: ""
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
            presetValue: this.preset,
            presetsList: this.presets
        };
    },
    methods: {
        // customChange() {
        //     this.$emit("updateDates", this.value);
        // },
        resetDates() {
            this.menu = false;
            let value = [
                moment().startOf("month").format("YYYY-MM-DD"),
                moment().endOf("month").format("YYYY-MM-DD")
            ];
            this.presetValue = "";

            this.$emit("updateDates", value);
        },
        updatePreset() {
            this.menu = false;
            let value = [];
            switch (this.presetValue) {
                case "Today":
                    value = [
                        moment().format("YYYY-MM-DD"),
                        moment().format("YYYY-MM-DD")
                    ];
                    this.$emit("updateDates", value);

                    break;
                case "Yesterday":
                    value = [
                        moment()
                            .subtract(1, "days")
                            .format("YYYY-MM-DD"),
                        moment()
                            .subtract(1, "days")
                            .format("YYYY-MM-DD")
                    ];
                    this.$emit("updateDates", value);

                    break;
                case "Last 7 Days":
                    value = [
                        moment()
                            .subtract(7, "days")
                            .format("YYYY-MM-DD"),
                        moment()
                            .subtract(1, "days")
                            .format("YYYY-MM-DD")
                    ];
                    this.$emit("updateDates", value);

                    break;
                case "Last 30 Days":
                    value = [
                        moment()
                            .subtract(30, "days")
                            .format("YYYY-MM-DD"),
                        moment()
                            .subtract(1, "days")
                            .format("YYYY-MM-DD")
                    ];
                    this.$emit("updateDates", value);

                    break;
                case "This Week":
                    value = [
                        moment()
                            .startOf("week")
                            .format("YYYY-MM-DD"),
                        moment()
                            .endOf("week")
                            .format("YYYY-MM-DD")
                    ];
                    this.$emit("updateDates", value);

                    break;
                case "Last Week":
                    value = [
                        moment()
                            .subtract(1, "weeks")
                            .startOf("week")
                            .format("YYYY-MM-DD"),
                        moment()
                            .subtract(1, "weeks")
                            .endOf("week")
                            .format("YYYY-MM-DD")
                    ];
                    this.$emit("updateDates", value);

                    break;
                case "This Month":
                    value = [
                        moment()
                            .startOf("month")
                            .format("YYYY-MM-DD"),
                        moment()
                            .endOf("month")
                            .format("YYYY-MM-DD")
                    ];
                    this.$emit("updateDates", value);

                    break;
                case "Last Month":
                    value = [
                        moment()
                            .subtract(1, "months")
                            .startOf("month")
                            .format("YYYY-MM-DD"),
                        moment()
                            .subtract(1, "months")
                            .endOf("month")
                            .format("YYYY-MM-DD")
                    ];
                    this.$emit("updateDates", value);

                    break;
                case "This Quarter":
                    value = [
                        moment()
                            .startOf("quarter")
                            .format("YYYY-MM-DD"),
                        moment()
                            .endOf("quarter")
                            .format("YYYY-MM-DD")
                    ];
                    this.$emit("updateDates", value);

                    break;
                case "Last Quarter":
                    value = [
                        moment()
                            .subtract(1, "quarters")
                            .startOf("quarter")
                            .format("YYYY-MM-DD"),
                        moment()
                            .subtract(1, "quarters")
                            .endOf("quarter")
                            .format("YYYY-MM-DD")
                    ];
                    this.$emit("updateDates", value);

                    break;
                case "This Year":
                    value = [
                        moment()
                            .startOf("year")
                            .format("YYYY-MM-DD"),
                        moment()
                            .endOf("year")
                            .format("YYYY-MM-DD")
                    ];
                    this.$emit("updateDates", value);

                    break;
                case "Last Year":
                    value = [
                        moment()
                            .subtract(1, "years")
                            .startOf("year")
                            .format("YYYY-MM-DD"),
                        moment()
                            .subtract(1, "years")
                            .endOf("year")
                            .format("YYYY-MM-DD")
                    ];
                    this.$emit("updateDates", value);

                    break;
                case "Last 5 Years":
                    value = [
                        moment()
                            .subtract(5, "years")
                            .startOf("year")
                            .format("YYYY-MM-DD"),
                        moment()
                            .subtract(1, "years")
                            .endOf("year")
                            .format("YYYY-MM-DD")
                    ];
                    this.$emit("updateDates", value);

                    break;
                default:
                    value = [
                        moment().format("YYYY-MM-DD"),
                        moment().format("YYYY-MM-DD")
                    ];
                    this.$emit("updateDates", value);

                    break;
            }
        }
    },
    computed: {
        selected: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("updateDates", value);
            }
        },
        dateRangeText() {
            this.value.sort();
            return this.value.join(" ~ ");
        }
    }
};
</script>
