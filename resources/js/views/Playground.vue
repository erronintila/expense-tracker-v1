<template>
    <div>
        <!-- <v-app-bar app color="white" flat>
            <v-container class="py-0 fill-height">
                <v-menu right bottom offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on">
                            <v-icon>mdi-account-circle</v-icon>
                        </v-btn>
                    </template>

                    <v-list>
                        <v-list-item v-for="n in 5" :key="n" @click="() => {}">
                            <v-list-item-title
                                >Option {{ n }}</v-list-item-title
                            >
                        </v-list-item>
                    </v-list>
                </v-menu>

                <v-btn v-for="link in links" :key="link" text>
                    {{ link }}
                </v-btn>

                <v-spacer></v-spacer>
            </v-container>
        </v-app-bar> -->

        <!-- <v-app-bar app color="white" flat>
            <v-avatar
                :color="
                    $vuetify.breakpoint.smAndDown
                        ? 'grey darken-1'
                        : 'transparent'
                "
                size="32"
            ></v-avatar>

            <v-tabs centered class="ml-n9" color="grey darken-1">
                <v-tab v-for="link in links" :key="link">
                    {{ link }}
                </v-tab>
            </v-tabs>

            <v-avatar
                class="hidden-sm-and-down"
                color="grey darken-1 shrink"
                size="32"
            ></v-avatar>
        </v-app-bar> -->

        <!-- ------------------------------------------------------------------------------------------------------------ -->

        <v-main>
            <v-form ref="form">
                <v-container>
                    <v-card class="mx-auto mb-4" flat>
                        <v-list-item three-line>
                            <v-list-item-content>
                                <div class="overline green--text mb-4">
                                    BASIC DETAILS
                                </div>
                                <!-- <v-list-item-title class="headline mb-1">
                                    Basic Information
                                </v-list-item-title> -->
                                <v-list-item-subtitle>
                                    Note: Lorem ipsum dolor sit, amet
                                    consectetur adipisicing elit. Explicabo enim
                                    eum similique nihil a, repellat, fugiat
                                    debitis placeat, illo ipsa molestias quaerat
                                    excepturi. Labore inventore molestiae a
                                    rerum, omnis expedita!
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>

                        <v-container>
                            <v-text-field label="Date"></v-text-field>
                            <v-text-field label="Employee"></v-text-field>
                            <v-text-field label="Vendor"></v-text-field>
                            <v-text-field label="Receipt No."></v-text-field>
                        </v-container>
                    </v-card>
                </v-container>
            </v-form>
            <v-container>
                <v-card class="mx-auto mb-4" outlined>
                    <v-list-item three-line>
                        <v-list-item-content>
                            <!-- <div class="overline mb-4">
                                BASIC INFORMATION
                            </div> -->
                            <v-list-item-title class="headline mb-1">
                                Basic Information
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                Note: Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Explicabo enim eum similique
                                nihil a, repellat, fugiat debitis placeat, illo
                                ipsa molestias quaerat excepturi. Labore
                                inventore molestiae a rerum, omnis expedita!
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-container>
                        <v-text-field label="Date"></v-text-field>
                        <v-text-field label="Employee"></v-text-field>
                        <v-text-field label="Vendor"></v-text-field>
                        <v-text-field label="Receipt No."></v-text-field>
                    </v-container>
                </v-card>

                <v-card class="mx-auto mb-4" outlined>
                    <v-list-item three-line>
                        <v-list-item-content>
                            <!-- <div class="overline mb-4">
                                BASIC INFORMATION
                            </div> -->
                            <v-list-item-title class="headline mb-1">
                                Expense Details
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                Note: Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Explicabo enim eum similique
                                nihil a, repellat, fugiat debitis placeat, illo
                                ipsa molestias quaerat excepturi. Labore
                                inventore molestiae a rerum, omnis expedita!
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-container>
                        <v-text-field label="Expense Type"></v-text-field>
                        <v-text-field label="Sub Type"></v-text-field>
                        <v-text-field label="Description"></v-text-field>
                        <v-checkbox
                            v-model="itemize"
                            label="Itemize Expenses"
                        ></v-checkbox>

                        <v-row v-if="itemize">
                            <v-spacer></v-spacer>
                            <v-col class="text-right">
                                <v-btn color="green" outlined rounded text>
                                    New Item
                                </v-btn>
                            </v-col>
                        </v-row>

                        <v-data-table
                            v-if="itemize"
                            :headers="headers"
                            :items="desserts"
                            :items-per-page="5"
                        ></v-data-table>

                        <v-text-field label="Amount"></v-text-field>
                        <v-text-field label="Tax Rate"></v-text-field>
                        <v-text-field label="Tax Amount"></v-text-field>

                        <v-textarea label="Remarks"></v-textarea>
                    </v-container>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green" outlined rounded text>
                            Save
                        </v-btn>
                        <v-btn outlined rounded text>
                            Cancel
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-container>
        </v-main>

        <!-- ------------------------------------------------------------------------------------------------------------ -->

        <!-- <v-main class="grey lighten-3">
            <v-container>
                <v-row>
                    <v-col>
                        <v-sheet min-height="70vh" rounded="lg">
                            <v-card min-height="70vh">
                                <v-card-text>
                                    <v-speed-dial
                                        v-model="fab"
                                        bottom
                                        right
                                        direction="top"
                                        transition="slide-y-reverse-transition"
                                        style="position: absolute"
                                    >
                                        <template v-slot:activator>
                                            <v-btn
                                                v-model="fab"
                                                color="green darken-2"
                                                dark
                                                fab
                                            >
                                                <v-icon v-if="fab">
                                                    mdi-close
                                                </v-icon>
                                                <v-icon v-else>
                                                    mdi-account-circle
                                                </v-icon>
                                            </v-btn>
                                        </template>
                                        <v-btn fab dark small color="green">
                                            <v-icon>mdi-pencil</v-icon>
                                        </v-btn>
                                        <v-btn fab dark small color="indigo">
                                            <v-icon>mdi-plus</v-icon>
                                        </v-btn>
                                        <v-btn fab dark small color="red">
                                            <v-icon>mdi-delete</v-icon>
                                        </v-btn>
                                    </v-speed-dial>
                                </v-card-text>
                            </v-card>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </v-main> -->
    </div>
</template>

<script>
export default {
    data: () => ({
        fab: false,
        links: ["Dashboard", "Expenses", "Reports"],
        itemize: false,
        headers: [
            {
                text: "Dessert (100g serving)",
                align: "start",
                sortable: false,
                value: "name"
            },
            { text: "Calories", value: "calories" },
            { text: "Fat (g)", value: "fat" },
            { text: "Carbs (g)", value: "carbs" },
            { text: "Protein (g)", value: "protein" },
            { text: "Iron (%)", value: "iron" }
        ],
        desserts: [
            {
                name: "Frozen Yogurt",
                calories: 159,
                fat: 6.0,
                carbs: 24,
                protein: 4.0,
                iron: "1%"
            },
            {
                name: "Ice cream sandwich",
                calories: 237,
                fat: 9.0,
                carbs: 37,
                protein: 4.3,
                iron: "1%"
            },
            {
                name: "Eclair",
                calories: 262,
                fat: 16.0,
                carbs: 23,
                protein: 6.0,
                iron: "7%"
            },
            {
                name: "Cupcake",
                calories: 305,
                fat: 3.7,
                carbs: 67,
                protein: 4.3,
                iron: "8%"
            }
        ]
    }),
    methods: {
        loadStatistics(start, end, employee_id) {
            let _this = this;
            axios.get(`/api/data/statistics?start_date=${start}&end_date=${end}&employee_id=${employee_id}`)
            .then(response => {
                console.log(response);
            }).catch(error => {
                console.log(error);
                console.log(error.response);
            });
        }
    },
    mounted() {
        this.loadStatistics();
    },
};
</script>
