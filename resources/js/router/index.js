import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import authRoutes from "./modules/auth";
// import adminRoutes from "./modules/admin";
// import userRoutes from "./modules/user";
import dashboardRoutes from "../router/modules/dashboard";
import departmentsRoutes from "../router/modules/departments";
import employeesRoutes from "../router/modules/employees";
import expense_typesRoutes from "../router/modules/expense_types";
import expensesRoutes from "../router/modules/expenses";
import jobsRoutes from "../router/modules/jobs";
import paymentsRoutes from "../router/modules/payments";
import profileRoutes from "../router/modules/profile";
import reportsRoutes from "../router/modules/reports";
import usersRoutes from "../router/modules/users";
import vendorsRoutes from "../router/modules/vendors";
import errorRoutes from "../router/modules/errors";

import { store } from "../store";

const baseRoutes = [];
const routes = baseRoutes.concat(
    authRoutes,
    // adminRoutes,
    // userRoutes,
    dashboardRoutes,
    departmentsRoutes,
    employeesRoutes,
    expense_typesRoutes,
    expensesRoutes,
    jobsRoutes,
    paymentsRoutes,
    profileRoutes,
    reportsRoutes,
    usersRoutes,
    vendorsRoutes,
    errorRoutes
);

export const router = new VueRouter({
    mode: "history",
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.isAuthenticated) {
            next({
                name: "login"
            });
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.requiresVisitor)) {
        if (store.getters.isAuthenticated) {
            console.log(store.getters.isAuthenticated);
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
