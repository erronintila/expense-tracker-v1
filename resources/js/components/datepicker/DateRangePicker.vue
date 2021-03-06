<template>
    <div>
        <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="range"
            persistent
            width="290px"
        >
            <template v-slot:activator="{ on, attrs }">
                <slot
                    name="openDialog"
                    v-bind="{ on, attrs, computedDateRangeText }"
                ></slot>
            </template>
            <v-card>
                <v-container>
                    <v-row>
                        <v-col>
                            <div class="text-center">
                                <v-menu offset-y>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                            color="primary"
                                            dark
                                            v-bind="attrs"
                                            v-on="on"
                                            text
                                        >
                                            <v-icon>mdi-calendar</v-icon>&nbsp;
                                            {{ computedDateRangeText }}
                                        </v-btn>
                                    </template>
                                    <v-list
                                        style="max-height: 200px"
                                        class="overflow-y-auto"
                                    >
                                        <v-list-item-group
                                            v-model="preset"
                                            mandatory
                                        >
                                            <v-list-item
                                                v-for="(item,
                                                index) in computedPresets"
                                                :key="index"
                                                :value="item"
                                            >
                                                <v-list-item-title>
                                                    {{ item }}
                                                </v-list-item-title>
                                            </v-list-item>
                                        </v-list-item-group>
                                    </v-list>
                                </v-menu>
                            </div>
                            <div
                                v-if="this.computedDateRange.length != 2"
                                class="overline red--text text-capitalize"
                            >
                                *select 1 more
                            </div>
                        </v-col>
                    </v-row>
                    <v-divider></v-divider>
                </v-container>

                <v-date-picker
                    v-model="range"
                    color="green"
                    no-title
                    range
                    scrollable
                >
                    <v-spacer></v-spacer>
                    <v-btn text color="green" @click="onReset">Reset</v-btn>
                    <v-btn text color="primary" @click="onCancel">
                        Cancel
                    </v-btn>
                    <v-btn text color="primary" @click="onSave">
                        OK
                    </v-btn>
                </v-date-picker>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import moment from "moment";

export default {
    props: {
        dateRange: {
            type: Array,
            default: () => [
                moment()
                    .startOf("month")
                    .format("YYYY-MM-DD"),
                moment()
                    .endOf("month")
                    .format("YYYY-MM-DD")
            ]
        },
        datePreset: {
            type: String,
            default: "Custom"
        },
        datePresets: {
            type: Array,
            default: () => {
                return [
                    "Custom",
                    "Today",
                    "This Week",
                    "This Month",
                    "This Quarter",
                    "This Year"
                ];
            }
        }
    },
    data() {
        return {
            range: null,
            preset: null,
            presets: null,
            menu: false,
            menu2: false,
            modal: false
        };
    },
    methods: {
        onChangePreset() {
            let value = [];
            switch (this.preset) {
                case "Custom":
                    value = this.range;
                    break;
                case "Today":
                    value = [
                        moment().format("YYYY-MM-DD"),
                        moment().format("YYYY-MM-DD")
                    ];
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

                    break;
                default:
                    break;
            }

            this.range = value;
            // this.$emit("onChange", value);
        },
        onReset() {
            this.preset = "Custom";
            this.range = this.dateRange;
            this.$emit("onChange", this.range);
        },
        onCancel() {
            this.modal = false;
            this.preset = "Custom";
        },
        onSave() {
            if (this.computedDateRange && this.computedDateRange.length == 2) {
                let sortedDates = this.computedDateRange.sort((a, b) => {
                    return new Date(a) - new Date(b);
                });
                this.$refs.dialog.save(sortedDates);
                this.$emit("onChange", sortedDates);
                return;
            }
            this.modal = true;
        }
    },
    computed: {
        computedDateRangeText() {
            let sortedDates = this.computedDateRange.sort((a, b) => {
                return new Date(a) - new Date(b);
            });
            return sortedDates.join(" ~ ");
        },
        computedDateRange: {
            get() {
                return this.range || this.dateRange;
            },
            set(value) {
                this.range = value;
            }
        },
        // computedPreset: {
        //     get() {
        //         return this.preset || this.datePreset;
        //     },
        //     set(value) {
        //         this.preset = value;
        //     }
        // },
        computedPresets: {
            get() {
                return this.presets || this.datePresets;
            },
            set(value) {
                this.presets = value;
            }
        },
    },
    watch: {
        preset() {
            this.onChangePreset();
        },
        dateRange(newVal, oldVal) {
            this.range = newVal;
        },
        datePreset(newVal, oldVal) {
            this.preset = newVal;
        },
        datePresets(newVal, oldVal) {
            this.presets = newVal;
        },
    },
    mounted() {
        this.range = this.range || this.dateRange;
        this.preset = this.preset || this.datePreset;
        this.presets = this.presets || this.datePresets;
    }
};
</script>
