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
                    next({ name: "home" });
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
                next({ name: "admin" });
            } else {
                next({ name: "home" });
            }
        }
    } else {
        next();
    }
});

// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         if (!store.getters.isAuthenticated) {
//             next({
//                 name: "login"
//             });
//         } else if (store.getters.isAuthenticated && !store.getters.isAdmin) {
//             next({
//                 name: "home"
//             });
//         } else {
//             next();
//         }
//     } else {
//         if (store.getters.isAuthenticated) {
//             next({
//                 name: "admin"
//             });
//         } else {
//             next();
//         }
//     }
// });

// if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (!store.getters.isAuthenticated) {
//         next({
//             name: "login"
//         });
//     } else {
//         next();
//     }
// } else if (to.matched.some(record => record.meta.requiresVisitor)) {
//     if (store.getters.isAuthenticated) {
//         next({
//             name: "admin"
//         });
//     } else {
//         next();
//     }
// } else {
//     next();
// }

// if (to.matched.some(record => record.meta.requiresAdmin)) {
//     if (!store.getters.isAdmin) {
//         next({
//             name: "home"
//         });
//     } else {
//         next();
//     }
// } else {
//     next();
// }

///working
// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         if (localStorage.getItem("access_token") == null) {
//             next({ name: "login" });
//         } else {
//             let user = JSON.parse(localStorage.getItem("user"));

//             if (to.matched.some(record => record.meta.requiresAdmin)) {
//                 if (user.is_admin == 1) {
//                     next();
//                 } else {
//                     next({ name: "home" });
//                 }
//             } else {
//                 next();
//             }
//         }
//     } else if (to.matched.some(record => record.meta.requiresVisitor)) {
//         if (localStorage.getItem("access_token") == null) {
//             next();
//         } else {
//             next({ name: "home" });
//         }
//     } else {
//         next();
//     }
// });

//// working 2

// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         if (localStorage.getItem("access_token") == null) {
//             next({ name: "login" });
//         } else {
//             let user = JSON.parse(localStorage.getItem("user"));

//             if (to.matched.some(record => record.meta.requiresAdmin)) {
//                 if (user.is_admin == 1) {
//                     next();
//                 } else {
//                     next({ name: "home" });
//                 }
//             } else {
//                 next();
//             }
//         }
//     } else if (to.matched.some(record => record.meta.requiresVisitor)) {
//         if (localStorage.getItem("access_token") == null) {
//             next();
//         } else {
//             let user = JSON.parse(localStorage.getItem("user"));
//             if (user.is_admin == 1) {
//                 next({ name: "admin" });
//             } else {
//                 next({ name: "home" });
//             }
//         }
//     } else {
//         next();
//     }
// });
