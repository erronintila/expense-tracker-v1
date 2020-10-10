/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");
window.Vue = require("vue");

/**
 * Import Packages/Libraries
 *
 */
import VueRouter from "vue-router";
import Vuex from "vuex";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import VuetifyConfirm from "vuetify-confirm";
import VuetifyDialog from "vuetify-dialog";
import colors from "vuetify/lib/util/colors";
import ChartDataLabels from "chartjs-plugin-datalabels";
// import VueHtmlToPaper from "vue-html-to-paper";
import moment from "moment";
import numeral from "numeral";

/**
 * Global functions / properties / variables
 *
 *
 */
Vue.mixin({
    data() {
        return {
            validation: {
                required: [v => !!v || "This field is required"],
                minLength: value => [
                    v => !!v &&
                        v.length <= value ||
                        `This field must be less than ${value} characters`
                ],
                email: [v => /.+@.+/.test(v) || "E-mail is not valid"]
            }
        };
    },
    methods: {
        formatNumber(value) {
            return numeral(value).format("0,0.00");
        },
        formatDate(date, format) {
            return date == null ? "" : moment(date).format(format);
        },
        getHumanDate(date) {
            return moment(date).fromNow();
        }
    }
});

/**
 * Load Instances
 *
 *
 */
const vuetify = new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.green
            }
        }
    }
});

// const options = {
//     name: "_blank",
//     specs: ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],
//     styles: [
//         "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
//         "https://unpkg.com/kidlat-css/css/kidlat.css",
//         "https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css",
//         "./landscape.css",
//         // "./assets/styles/print.css"
//     ]
// };

/**
 * Load Packages/Libraries
 *
 *
 */
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Vuetify);
Vue.use(VuetifyConfirm, { vuetify });
Vue.use(VuetifyDialog, {
    context: {
        vuetify
    }
});
Vue.use(ChartDataLabels);
// Vue.use(VueHtmlToPaper, options);
// Vue.use(VueHtmlToPaper);

/**
 * Libraries configuration
 *
 *
 */
window.Chart.plugins.unregister(ChartDataLabels);

/**
 * Import Vue components/files
 *
 *
 */
import { store } from "./store/index";
import { router } from "./router/index";
import App from "./views/layouts/App.vue";

/**
 * Axios configuration
 *
 *
 */
axios.defaults.headers.common["Authorization"] =
    "Bearer " + localStorage.getItem("access_token");

axios.interceptors.response.use(
    function(response) {
        return response;
    },
    function(error) {
        if (error.response.status === 401) {
            store.dispatch("AUTH_LOGOUT");
            window.location.replace("/login");
            // router.push("/login");
        }
        return Promise.reject(error);
    }
);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('create-department', require('./views/modules/admin/departments/components/Create.vue').default);

// import components from "./components/index";
// Vue.use(components);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: "#app",
    router,
    store,
    vuetify,
    components: { App }
});
