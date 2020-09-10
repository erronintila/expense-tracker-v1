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
import moment from "moment";

/**
 * Load Instances
 */
const vuetify = new Vuetify();

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
// Vue.use(VeeValidate);
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

import components from "./components/ExampleComponent";
Vue.use(components);

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
