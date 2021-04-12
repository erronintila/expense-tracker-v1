import { store } from "../../store/index";

const userRoutes = [
    /** Dashboard */
    {
        path: "/",
        name: "home",
        redirect: "/dashboard",
        component: () => import("../../views/modules/user/Index.vue"),
        meta: {
            requiresAuth: true,
            // requiresAdmin: true,
            keepAlive: true
        },
        children: [
            /**
             *
             *
             * Dashboard
             *
             *
             */
            {
                path: "/dashboard",
                name: "user.dashboard.index",
                component: () =>
                    import("../../views/modules/user/dashboard/Index.vue"),
                meta: {
                    keepAlive: false
                }
            },
            /**
             *
             *
             * Profile
             *
             *
             */
            {
                path: "/profile",
                name: "user.profile.index",
                component: () =>
                    import("../../views/modules/user/profile/Index.vue"),
                meta: {
                    keepAlive: true
                }
            },
            /**
             *
             *
             * Expenses
             *
             *
             */
            {
                path: "/expenses",
                name: "user.expenses.index",
                component: () =>
                    import("../../views/modules/user/expenses/Index.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("view all expenses")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: true
                }
            },
            {
                path: "/expenses/create",
                name: "user.expenses.create",
                component: () =>
                    import("../../views/modules/user/expenses/Create.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("add expenses")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: false
                }
            },
            {
                path: "/expenses/:id/edit",
                name: "user.expenses.edit",
                component: () =>
                    import("../../views/modules/user/expenses/Edit.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("edit expenses")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: false
                }
            },
            {
                path: "/expenses/:id",
                name: "user.expenses.show",
                component: () =>
                    import("../../views/modules/user/expenses/Show.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("view expenses")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: true
                }
            },
            /**
             *
             *
             * Expense Reports
             *
             *
             */
            {
                path: "/expense_reports",
                name: "user.expense_reports.index",
                component: () =>
                    import(
                        "../../views/modules/user/expense_reports/Index.vue"
                    ),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("view all expense reports")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: true
                }
            },
            {
                path: "/expense_reports/create",
                name: "user.expense_reports.create",
                component: () =>
                    import(
                        "../../views/modules/user/expense_reports/Create.vue"
                    ),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("add expense reports")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: false
                }
            },
            {
                path: "/expense_reports/:id/edit",
                name: "user.expense_reports.edit",
                component: () =>
                    import("../../views/modules/user/expense_reports/Edit.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("edit expense reports")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: false
                }
            },
            {
                path: "/expense_reports/:id",
                name: "user.expense_reports.show",
                component: () =>
                    import("../../views/modules/user/expense_reports/Show.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("view expense reports")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: true
                }
            },
            // {
            //     path: "/expense_reports/print/:id",
            //     name: "user.expense_reports.print",
            //     component: () =>
            //         import("../../views/modules/user/expense_reports/Print.vue"),
            //         // meta: {
            //         //     keepAlive: false
            //         // }
            // },
            /**
             *
             *
             * Payments
             *
             *
             */
            {
                path: "/payments",
                name: "user.payments.index",
                component: () =>
                    import("../../views/modules/user/payments/Index.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("view all payments")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: true
                }
            },
            {
                path: "/payments/:id",
                name: "user.payments.show",
                component: () =>
                    import("../../views/modules/user/payments/Show.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("view payments")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: true
                }
            },
            /**
             *
             *
             * Notifications
             *
             *
             */
            {
                path: "/notifications",
                name: "user.notifications.index",
                component: () =>
                    import("../../views/modules/user/notifications/Index.vue"),
                meta: {
                    keepAlive: true
                }
            },
            /**
             *
             *
             * Advance Payments
             *
             *
             */
            {
                path: "/admin/advance_payments",
                name: "admin.advance_payments.index",
                component: () =>
                    import(
                        "../../views/modules/admin/advance_payments/Index.vue"
                    ),
                // beforeEnter: (to, from, next) => {
                //     let permissions = store.getters.user.permissions;
                //     permissions = permissions.map(item => item.name);

                //     if (permissions.includes("view all advance payments")) {
                //         next();
                //     } else {
                //         next({ name: "error_403" });
                //     }
                // },
                meta: {
                    keepAlive: true
                }
            },
            {
                path: "/admin/advance_payments",
                name: "admin.advance_payments.create",
                component: () =>
                    import(
                        "../../views/modules/admin/advance_payments/Create.vue"
                    ),
                // beforeEnter: (to, from, next) => {
                //     let permissions = store.getters.user.permissions;
                //     permissions = permissions.map(item => item.name);

                //     if (permissions.includes("add advance payments")) {
                //         next();
                //     } else {
                //         next({ name: "error_403" });
                //     }
                // },
                meta: {
                    keepAlive: false
                }
            },
            {
                path: "/admin/advance_payments",
                name: "admin.advance_payments.edit",
                component: () =>
                    import(
                        "../../views/modules/admin/advance_payments/Edit.vue"
                    ),
                // beforeEnter: (to, from, next) => {
                //     let permissions = store.getters.user.permissions;
                //     permissions = permissions.map(item => item.name);

                //     if (permissions.includes("edit advance payments")) {
                //         next();
                //     } else {
                //         next({ name: "error_403" });
                //     }
                // },
                meta: {
                    keepAlive: false
                }
            },
            {
                path: "/admin/advance_payments",
                name: "admin.advance_payments.show",
                component: () =>
                    import(
                        "../../views/modules/admin/advance_payments/Show.vue"
                    ),
                // beforeEnter: (to, from, next) => {
                //     let permissions = store.getters.user.permissions;
                //     permissions = permissions.map(item => item.name);

                //     if (permissions.includes("view advance payments")) {
                //         next();
                //     } else {
                //         next({ name: "error_403" });
                //     }
                // },
                meta: {
                    keepAlive: true
                }
            }
        ]
    }
];

export default userRoutes.map(route => {
    return { ...route };
});
