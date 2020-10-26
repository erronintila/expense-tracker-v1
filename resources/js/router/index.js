import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import authRoutes from "./modules/auth";
import adminRoutes from "./modules/admin";
import userRoutes from "./modules/user";
import errorRoutes from "../router/modules/errors";

import { store } from "../store/index";

const baseRoutes = [];
const routes = baseRoutes.concat(
    authRoutes,
    adminRoutes,
    userRoutes,
    errorRoutes
);

export const router = new VueRouter({
    mode: "history",
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.isAuthenticated) {
            next({ name: "login" });
        } else {
            if (to.matched.some(record => record.meta.requiresAdmin)) {
                if (store.getters.isAdmin) {
                    next();
                } else {
                    next({ name: "user.dashboard.index" });
                }
            } else {
                next();
            }
        }
    } else if (to.matched.some(record => record.meta.requiresVisitor)) {
        if (!store.getters.isAuthenticated) {
            next();
        } else {
            if (store.getters.isAdmin) {
                next({ name: "admin.dashboard.index" });
            } else {
                next({ name: "user.dashboard.index" });
            }
        }
    } else {
        next();
    }
});