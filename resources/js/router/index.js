import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import authRoutes from "../router/auth/index";
import dashboardRoutes from "../router/modules/dashboard";
import { store } from "../store";

const baseRoutes = [];
const routes = baseRoutes.concat(authRoutes, dashboardRoutes);

export const router = new VueRouter({
    mode: "history",
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.LOGGED_IN) {
            next({
                name: "login"
            });
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.requiresVisitor)) {
        if (store.getters.LOGGED_IN) {
            console.log(store.getters.LOGGED_IN);
            next({
                name: "admin"
            });
        } else {
            next();
        }
    } else {
        next();
    }
});
