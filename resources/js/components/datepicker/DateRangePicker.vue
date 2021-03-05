<template>
    <div>
        <!-- <v-date-picker v-model="dates" range></v-date-picker> -->
        <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="dates"
            persistent
            width="290px"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="dateRangeText"
                    label="Date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                ></v-text-field>
            </template>
            <v-card>
                <!-- <v-select
                    :items="['asdasd', 'asdasdas']"
                    label="Presets"
                    flat
                    max-width="10"
                ></v-select> -->
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
                                        <v-list-item-group v-model="selectedPreset" mandatory>
                                            <v-list-item v-for="(item, index) in presets" :key="index">
                                                <v-list-item-title>
                                                    {{item}}
                                                </v-list-item-title>
                                            </v-list-item>
                                        </v-list-item-group>
                                    </v-list>
                                    <v-btn @click="selectPreset">hi</v-btn>
                                </v-menu>
                            </div>
                            <div
                                v-if="this.dates.length != 2"
                                class="overline red--text text-capitalize"
                            >
                                *select 1 more
                            </div>
                        </v-col>
                    </v-row>
                    <v-divider></v-divider>
                </v-container>

                <v-date-picker
                    v-model="dates"
                    color="green"
                    no-title
                    range
                    scrollable
                    :readonly="isPickerReadOnly"
                >
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="modal = false">
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
export default {
    props: {
        preset: {
            type: String,
            default: "This Month"
        },
        presets: {
            type: Array,
            default: () => {
                return [
                    "Custom",
                    "Today",
                    "This Week",
                    "This Month",
                    "This Year"
                ];
            }
        }
    },
    data() {
        return {
            dates: ["2021-03-01", "2021-03-01"],
            // date: new Date().toISOString().substr(0, 10),
            menu: false,
            modal: false,
            menu2: false
        };
    },
    methods: {
        selectPreset() {
            console.log(this.selectedPreset);
        },
        onSave() {
            if (this.dates && this.dates.length == 2) {
                let sortedDates = this.dates.sort((a, b) => {
                    return new Date(a) - new Date(b);
                });

                this.$refs.dialog.save(sortedDates);
                return;
            }
            this.modal = true;
        }
    },
    computed: {
        dateRangeText() {
            let sortedDates = this.dates.sort((a, b) => {
                return new Date(a) - new Date(b);
            });
            return sortedDates.join(" ~ ");
        },
        selectedPreset: {
            get() {
                return this.preset
            },
            set(value) {
                return value;
            }
        },
        isPickerReadOnly() {
            if(this.selectedPreset == "Custom") {
                return false;
            }
            return true;
        }
    },
    watch: {
        selectedPreset() {
            console.log(this.selectedPreset);
        }
    }
};
</script>
