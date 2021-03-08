<template>
    <v-dialog
        ref="dialog"
        v-model="dialog"
        :return-value.sync="range"
        persistent
        width="290px"
    >
        <template v-slot:activator="{ on, attrs }">
            <slot
                name="openDialog"
                v-bind="{ on, attrs, dateRangeText }"
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
                                        {{ dateRangeText }}
                                    </v-btn>
                                </template>
                                <v-list
                                    style="max-height: 200px"
                                    class="overflow-y-auto"
                                >
                                    <v-list-item-group v-model="preset">
                                        <v-list-item
                                            v-for="(item, index) in presets"
                                            :key="index"
                                            :value="item"
                                        >
                                            <v-list-item-title>
                                                {{ item.label }}
                                            </v-list-item-title>
                                        </v-list-item>
                                    </v-list-item-group>
                                </v-list>
                            </v-menu>
                        </div>
                        <div
                            v-if="range && range.length != 2"
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
                @change="preset = {}"
            >
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="onCancel">
                    Cancel
                </v-btn>
                <v-btn text color="primary" @click="onSave">
                    OK
                </v-btn>
            </v-date-picker>
        </v-card>
    </v-dialog>
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
                    {
                        label: "Today",
                        range: [
                            moment().format("YYYY-MM-DD"),
                            moment().format("YYYY-MM-DD")
                        ]
                    },
                    {
                        label: "Yesterday",
                        range: [
                            moment()
                                .subtract(1, "days")
                                .format("YYYY-MM-DD"),
                            moment()
                                .subtract(1, "days")
                                .format("YYYY-MM-DD")
                        ]
                    },
                    {
                        label: "This Week",
                        range: [
                            moment()
                                .startOf("week")
                                .format("YYYY-MM-DD"),
                            moment()
                                .endOf("week")
                                .format("YYYY-MM-DD")
                        ]
                    },
                    {
                        label: "This Month",
                        range: [
                            moment()
                                .startOf("month")
                                .format("YYYY-MM-DD"),
                            moment()
                                .endOf("month")
                                .format("YYYY-MM-DD")
                        ]
                    },
                    {
                        label: "This Quarter",
                        range: [
                            moment()
                                .startOf("quarter")
                                .format("YYYY-MM-DD"),
                            moment()
                                .endOf("quarter")
                                .format("YYYY-MM-DD")
                        ]
                    },
                    {
                        label: "This Year",
                        range: [
                            moment()
                                .startOf("year")
                                .format("YYYY-MM-DD"),
                            moment()
                                .endOf("year")
                                .format("YYYY-MM-DD")
                        ]
                    }
                ];
            }
        }
    },
    data() {
        return {
            range: [],
            preset: {},
            presets: [],
            dialog: false
        };
    },
    methods: {
        onCancel() {
            this.dialog = false;
            this.preset = {};
        },
        onSave() {
            if (this.range && this.range.length == 2) {
                let sortedDates = this.range.sort((a, b) => {
                    return new Date(a) - new Date(b);
                });
                this.$refs.dialog.save(sortedDates);
                this.$emit("on-change", sortedDates);
                return;
            }
            this.dialog = true;
        }
    },
    computed: {
        dateRangeText() {
            if (this.range && this.range.length) {
                let sortedDates = this.range.sort((a, b) => {
                    return new Date(a) - new Date(b);
                });
                return sortedDates.join(" ~ ");
            }
            return "";
        }
    },
    watch: {
        preset() {
            if (this.preset && Object.keys(this.preset).length) {
                this.range = this.preset.range;
            }
        },
        dateRange: {
            immediate: true,
            handler(newValue, oldValue) {
                this.range = newValue;
            }
        },
        datePreset: {
            immediate: true,
            handler(newValue, oldValue) {
                this.preset = newValue;
            }
        },
        datePresets: {
            immediate: true,
            handler(newValue, oldValue) {
                this.presets = newValue;
            }
        }
    }
};
</script>
