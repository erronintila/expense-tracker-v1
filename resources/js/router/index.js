import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import authRoutes from "./modules/auth";
import pageRoutes from "./modules/pages";
import errorRoutes from "../router/modules/errors";

import { store } from "../store/index";

const baseRoutes = [];
const routes = baseRoutes.concat(
    authRoutes,
    errorRoutes,
    pageRoutes
);

export const router = new VueRouter({
    mode: "history",
    routes
});

router.beforeEach((to, from, next) => {
    store.dispatch('CANCEL_PENDING_REQUESTS');
    // store.dispatch('AUTH_USER');
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.authenticated) {
            next({ name: "login" });
        } else {
            if (to.matched.some(record => record.meta.requiresAdmin)) {
                if (store.getters.admin == 1) {
                    next();
                } else {
                    next({ name: "user.dashboard.index" });
                }
            } else {
                next();
            }
        }
    } else if (to.matched.some(record => record.meta.requiresVisitor)) {
        if (!store.getters.authenticated) {
            next();
        } else {
            if (store.getters.admin) {
                next({ name: "admin.dashboard.index" });
            } else {
                next({ name: "user.dashboard.index" });
            }
        }
    } else {
        next();
    }
});
