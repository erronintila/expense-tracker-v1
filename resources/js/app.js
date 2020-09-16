/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");
window.Vue = require("vue");

/**
 * Import Vue packages
 */
import VueRouter from "vue-router";
import Vuex from "vuex";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import VuetifyConfirm from "vuetify-confirm";
import VuetifyDialog from "vuetify-dialog";
import colors from "vuetify/lib/util/colors";
import VMdDateRangePicker from "v-md-date-range-picker";
// import "./assets/styles/md-date-range-picker.css";

/**
 * Load Instances
 */
const vuetify = new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.green,

                // // default colors
                // primary: '#1976D2',
                // secondary: "#424242",
                // accent: "#82B1FF",
                // error: "#FF5252",
                // info: "#2196F3",
                // success: "#4CAF50",
                // warning: "#FFC107"
            }
        }
    }
});

/**
 * Load Plugins
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
Vue.use(VMdDateRangePicker);
// Vue.use(moment);

/**
 * Import Vue components/files
 */

import { store } from "./store/index";
import { router } from "./router/index";
import App from "./views/layouts/App.vue";

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

import components from "./components/index";
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
