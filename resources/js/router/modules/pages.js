import { store } from "../../store/index";

const pageRoutes = [
    /** Dashboard */
    {
        path: "/",
        name: "home",
        redirect: "/dashboard",
        component: () => import("../../views/pages/Index.vue"),
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
                    import("../../views/pages/dashboard/Index.vue"),
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
                component: () => import("../../views/pages/profile/Index.vue"),
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
                component: () => import("../../views/pages/expenses/Index.vue"),
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
                    import("../../views/pages/expenses/Create.vue"),
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
                component: () => import("../../views/pages/expenses/Edit.vue"),
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
                component: () => import("../../views/pages/expenses/Show.vue"),
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
                    import("../../views/pages/expense_reports/Index.vue"),
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
                    import("../../views/pages/expense_reports/Create.vue"),
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
                    import("../../views/pages/expense_reports/Edit.vue"),
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
                    import("../../views/pages/expense_reports/Show.vue"),
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
            //         import("../../views/pages/expense_reports/Print.vue"),
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
                component: () => import("../../views/pages/payments/Index.vue"),
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
                path: "/payments/create",
                name: "user.payments.create",
                component: () =>
                    import("../../views/pages/payments/Create.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("add payments")) {
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
                path: "/payments/:id/edit",
                name: "user.payments.edit",
                component: () => import("../../views/pages/payments/Edit.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("edit payments")) {
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
                path: "/payments/:id",
                name: "user.payments.show",
                component: () => import("../../views/pages/payments/Show.vue"),
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
                    import("../../views/pages/notifications/Index.vue"),
                meta: {
                    keepAlive: true
                }
            },

            // ----------------------------------------------------------------------------------------------
            // ADMIN ROUTES
            // ----------------------------------------------------------------------------------------------

            /**
             *
             *
             * Settings
             *
             *
             */
            {
                path: "/settings",
                name: "admin.settings.index",
                component: () =>
                    import("../../views/pages/admin/settings/Index.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("manage settings")) {
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
                path: "/settings/user",
                name: "admin.settings.user",
                component: () =>
                    import("../../views/pages/admin/settings/User.vue"),
                meta: {
                    keepAlive: false
                }
            },
            /**
             *
             *
             * Activity Logs
             *
             *
             */
            {
                path: "/activity_logs",
                name: "admin.activity_logs.index",
                component: () =>
                    import("../../views/pages/admin/activity_logs/Index.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("view all activity logs")) {
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
                path: "/departments",
                name: "admin.departments.index",
                component: () =>
                    import("../../views/pages/admin/departments/Index.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("view all departments")) {
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
                path: "/departments/create",
                name: "admin.departments.create",
                component: () =>
                    import("../../views/pages/admin/departments/Create.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("add departments")) {
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
                path: "/departments/:id/edit",
                name: "admin.departments.edit",
                component: () =>
                    import("../../views/pages/admin/departments/Edit.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("edit departments")) {
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
                path: "/users",
                name: "admin.users.index",
                component: () =>
                    import("../../views/pages/admin/users/Index.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("view all users")) {
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
                path: "/users/create",
                name: "admin.users.create",
                component: () =>
                    import("../../views/pages/admin/users/Create.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("add users")) {
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
                path: "/users/:id/edit",
                name: "admin.users.edit",
                component: () =>
                    import("../../views/pages/admin/users/Edit.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("edit users")) {
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
                path: "/users/:id/edit/fund",
                name: "admin.users.edit.fund",
                component: () =>
                    import("../../views/pages/admin/users/EditFund.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("edit users fund")) {
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
                path: "/users/:id/edit/permissions",
                name: "admin.users.edit.permissions",
                component: () =>
                    import("../../views/pages/admin/users/EditPermission.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("edit permissions")) {
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
                path: "/users/:id",
                name: "admin.users.show",
                component: () =>
                    import("../../views/pages/admin/users/Show.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("view users")) {
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
             * Expense Types
             *
             *
             */
            {
                path: "/expense_types",
                name: "admin.expense_types.index",
                component: () =>
                    import("../../views/pages/admin/expense_types/Index.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("view all expense types")) {
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
                path: "/expense_types/create",
                name: "admin.expense_types.create",
                component: () =>
                    import("../../views/pages/admin/expense_types/Create.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("add expense types")) {
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
                path: "/expense_types/:id/edit",
                name: "admin.expense_types.edit",
                component: () =>
                    import("../../views/pages/admin/expense_types/Edit.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("edit expense types")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: false
                }
            },

            //
            // Jobs
            //

            {
                path: "/jobs",
                name: "admin.jobs.index",
                component: () =>
                    import("../../views/pages/admin/jobs/Index.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("view all jobs")) {
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
                path: "/jobs/create",
                name: "admin.jobs.create",
                component: () =>
                    import("../../views/pages/admin/jobs/Create.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("add jobs")) {
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
                path: "/jobs/:id/edit",
                name: "admin.jobs.edit",
                component: () =>
                    import("../../views/pages/admin/jobs/Edit.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("edit jobs")) {
                        next();
                    } else {
                        next({ name: "error_403" });
                    }
                },
                meta: {
                    keepAlive: false
                }
            },
            /**
             *
             *
             * Vendors
             *
             *
             */
            {
                path: "/vendors",
                name: "admin.vendors.index",
                component: () =>
                    import("../../views/pages/admin/vendors/Index.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("view all vendors")) {
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
                path: "/vendors/create",
                name: "admin.vendors.create",
                component: () =>
                    import("../../views/pages/admin/vendors/Create.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("add vendors")) {
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
                path: "/vendors/:id/edit",
                name: "admin.vendors.edit",
                component: () =>
                    import("../../views/pages/admin/vendors/Edit.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("edit vendors")) {
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
                path: "/vendors/:id",
                name: "admin.vendors.show",
                component: () =>
                    import("../../views/pages/admin/vendors/Show.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("view vendors")) {
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
             *  Analytics routes
             * 
             */
            {
                path: "/analytics",
                name: "admin.analytics.index",
                component: () =>
                    import("../../views/pages/admin/analytics/Index.vue"),
                // beforeEnter: (to, from, next) => {
                //     let permissions = store.getters.user.permissions;
                //     permissions = permissions.map(item => item.name);

                //     if (permissions.includes("view vendors")) {
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
                path: "/analytics/view",
                name: "admin.analytics.show",
                component: () =>
                    import("../../views/pages/admin/analytics/Show.vue"),
                meta: {
                    keepAlive: false
                }
            }
        ]
    }
];

export default pageRoutes.map(route => {
    return { ...route };
});
