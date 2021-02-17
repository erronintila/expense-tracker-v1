import { store } from "../../store/index";

const adminRoutes = [
    /** Dashboard */
    {
        path: "/admin",
        name: "admin",
        redirect: "/admin/dashboard",
        component: () => import("../../views/modules/admin/Index.vue"),
        meta: {
            requiresAuth: true,
            requiresAdmin: true,
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
                path: "/admin/dashboard",
                name: "admin.dashboard.index",
                component: () =>
                    import("../../views/modules/admin/dashboard/Index.vue"),
                meta: {
                    keepAlive: false
                }
            },
            /**
             *
             *
             * Settings
             *
             *
             */
            {
                path: "/admin/settings",
                name: "admin.settings.index",
                component: () =>
                    import("../../views/modules/admin/settings/Index.vue"),
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
                path: "/admin/settings/user",
                name: "admin.settings.user",
                component: () =>
                    import("../../views/modules/admin/settings/User.vue"),
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
                path: "/admin/profile",
                name: "admin.profile.index",
                component: () =>
                    import("../../views/modules/admin/profile/Index.vue"),
                meta: {
                    keepAlive: true
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
                path: "/admin/activity_logs",
                name: "admin.activity_logs.index",
                component: () =>
                    import("../../views/modules/admin/activity_logs/Index.vue"),
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
            // {
            //     path: "/admin/activity_logs/:id",
            //     name: "admin.activity_logs.show",
            //     component: () =>
            //         import("../../views/modules/admin/activity_logs/Show.vue")
            // },
            /**
             *
             *
             * Adjustments
             *
             *
             */
            // {
            //     path: "/admin/adjustments",
            //     name: "admin.adjustments.index",
            //     component: () =>
            //         import("../../views/modules/admin/adjustments/Index.vue"),
            //     beforeEnter: (to, from, next) => {
            //         if (
            //             store.getters.user.permissions.includes(
            //                 "view all adjustments"
            //             )
            //         ) {
            //             next();
            //         } else {
            //             next({ name: "error_403" });
            //         }
            //     }
            // },
            // {
            //     path: "/admin/adjustments/manage-fund",
            //     name: "admin.adjustments.manage.fund",
            //     component: () =>
            //         import(
            //             "../../views/modules/admin/adjustments/AdjustFund.vue"
            //         ),
            //     beforeEnter: (to, from, next) => {
            //         if (
            //             store.getters.user.permissions.includes(
            //                 "add adjustments"
            //             )
            //         ) {
            //             next();
            //         } else {
            //             next({ name: "error_403" });
            //         }
            //     }
            // },
            // {
            //     path: "/admin/adjustments/create",
            //     name: "admin.adjustments.create",
            //     component: () =>
            //         import("../../views/modules/admin/adjustments/Create.vue")
            // },
            // {
            //     path: "/admin/adjustments/:id/edit",
            //     name: "admin.adjustments.edit",
            //     component: () =>
            //         import("../../views/modules/admin/adjustments/Edit.vue")
            // },
            // {
            //     path: "/admin/adjustments/:id",
            //     name: "admin.adjustments.show",
            //     component: () =>
            //         import("../../views/modules/admin/adjustments/Show.vue")
            // },
            /**
             *
             *
             * Departments
             *
             *
             */
            {
                path: "/admin/departments",
                name: "admin.departments.index",
                component: () =>
                    import("../../views/modules/admin/departments/Index.vue"),
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
                path: "/admin/departments/create",
                name: "admin.departments.create",
                component: () =>
                    import("../../views/modules/admin/departments/Create.vue"),
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
                path: "/admin/departments/:id/edit",
                name: "admin.departments.edit",
                component: () =>
                    import("../../views/modules/admin/departments/Edit.vue"),
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
                path: "/admin/departments/:id",
                name: "admin.departments.show",
                component: () =>
                    import("../../views/modules/admin/departments/Show.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("view departments")) {
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
             * Users
             *
             *
             */
            {
                path: "/admin/users",
                name: "admin.users.index",
                component: () =>
                    import("../../views/modules/admin/users/Index.vue"),
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
                path: "/admin/users/create",
                name: "admin.users.create",
                component: () =>
                    import("../../views/modules/admin/users/Create.vue"),
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
                path: "/admin/users/:id/edit",
                name: "admin.users.edit",
                component: () =>
                    import("../../views/modules/admin/users/Edit.vue"),
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
                path: "/admin/users/:id/edit/fund",
                name: "admin.users.edit.fund",
                component: () =>
                    import("../../views/modules/admin/users/EditFund.vue"),
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
                path: "/admin/users/:id",
                name: "admin.users.show",
                component: () =>
                    import("../../views/modules/admin/users/Show.vue"),
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
                path: "/admin/expense_types",
                name: "admin.expense_types.index",
                component: () =>
                    import("../../views/modules/admin/expense_types/Index.vue"),
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
                path: "/admin/expense_types/create",
                name: "admin.expense_types.create",
                component: () =>
                    import(
                        "../../views/modules/admin/expense_types/Create.vue"
                    ),
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
                path: "/admin/expense_types/:id/edit",
                name: "admin.expense_types.edit",
                component: () =>
                    import("../../views/modules/admin/expense_types/Edit.vue"),
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
            {
                path: "/admin/expense_types/:id",
                name: "admin.expense_types.show",
                component: () =>
                    import("../../views/modules/admin/expense_types/Show.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("view expense types")) {
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
             * Expenses
             *
             *
             */
            {
                path: "/admin/expenses",
                name: "admin.expenses.index",
                component: () =>
                    import("../../views/modules/admin/expenses/Index.vue"),
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
                path: "/admin/expenses/create",
                name: "admin.expenses.create",
                component: () =>
                    import("../../views/modules/admin/expenses/Create.vue"),
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
            // {
            //     path: "/admin/expenses/create/bulk",
            //     name: "admin.expenses.create.bulk",
            //     component: () =>
            //         import("../../views/modules/admin/expenses/CreateBulk.vue"),
            //     beforeEnter: (to, from, next) => {
            //         if (
            //             store.getters.user.permissions.includes("add expenses")
            //         ) {
            //             next();
            //         } else {
            //             next({ name: "error_403" });
            //         }
            //     }
            // },
            {
                path: "/admin/expenses/:id/edit",
                name: "admin.expenses.edit",
                component: () =>
                    import("../../views/modules/admin/expenses/Edit.vue"),
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
                path: "/admin/expenses/:id",
                name: "admin.expenses.show",
                component: () =>
                    import("../../views/modules/admin/expenses/Show.vue"),
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
             * Jobs
             *
             *
             */
            {
                path: "/admin/jobs",
                name: "admin.jobs.index",
                component: () =>
                    import("../../views/modules/admin/jobs/Index.vue"),
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
                path: "/admin/jobs/create",
                name: "admin.jobs.create",
                component: () =>
                    import("../../views/modules/admin/jobs/Create.vue"),
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
                path: "/admin/jobs/:id/edit",
                name: "admin.jobs.edit",
                component: () =>
                    import("../../views/modules/admin/jobs/Edit.vue"),
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
            {
                path: "/admin/jobs/:id",
                name: "admin.jobs.show",
                component: () =>
                    import("../../views/modules/admin/jobs/Show.vue"),
                beforeEnter: (to, from, next) => {
                    let permissions = store.getters.user.permissions;
                    permissions = permissions.map(item => item.name);

                    if (permissions.includes("view jobs")) {
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
             * Payments
             *
             *
             */
            {
                path: "/admin/payments",
                name: "admin.payments.index",
                component: () =>
                    import("../../views/modules/admin/payments/Index.vue"),
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
                path: "/admin/payments/create",
                name: "admin.payments.create",
                component: () =>
                    import("../../views/modules/admin/payments/Create.vue"),
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
                path: "/admin/payments/:id/edit",
                name: "admin.payments.edit",
                component: () =>
                    import("../../views/modules/admin/payments/Edit.vue"),
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
                path: "/admin/payments/:id",
                name: "admin.payments.show",
                component: () =>
                    import("../../views/modules/admin/payments/Show.vue"),
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
             * Expense Reports
             *
             *
             */
            {
                path: "/admin/expense_reports",
                name: "admin.expense_reports.index",
                component: () =>
                    import(
                        "../../views/modules/admin/expense_reports/Index.vue"
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
                path: "/admin/expense_reports/create",
                name: "admin.expense_reports.create",
                component: () =>
                    import(
                        "../../views/modules/admin/expense_reports/Create.vue"
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
                path: "/admin/expense_reports/:id/edit",
                name: "admin.expense_reports.edit",
                component: () =>
                    import(
                        "../../views/modules/admin/expense_reports/Edit.vue"
                    ),
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
                path: "/admin/expense_reports/:id",
                name: "admin.expense_reports.show",
                component: () =>
                    import(
                        "../../views/modules/admin/expense_reports/Show.vue"
                    ),
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
            //     path: "/admin/expense_reports/print/:id",
            //     name: "admin.expense_reports.print",
            //     component: () =>
            //         import(
            //             "../../views/modules/admin/expense_reports/Print.vue"
            //         )
            // },
            // {
            //     path: "/admin/expense_reports/:id/summary",
            //     name: "admin.expense_reports.summary",
            //     component: () =>
            //         import(
            //             "../../views/modules/admin/expense_reports/ShowSummary.vue"
            //         )
            // },
            // {
            //     path: "/admin/expense_reports/:id/detailed",
            //     name: "admin.expense_reports.detailed",
            //     component: () =>
            //         import(
            //             "../../views/modules/admin/expense_reports/ShowDetailed.vue"
            //         )
            // },
            /**
             *
             *
             * Users
             *
             *
             */
            // {
            //     path: "/admin/users",
            //     name: "admin.users.index",
            //     component: () =>
            //         import("../../views/modules/admin/users/Index.vue"),
            //     beforeEnter: (to, from, next) => {
            //         if (
            //             store.getters.getPermissions.includes("view all users")
            //         ) {
            //             next();
            //         } else {
            //             next({ name: "error_403" });
            //         }
            //     }
            // },
            // {
            //     path: "/admin/users/create",
            //     name: "admin.users.create",
            //     component: () =>
            //         import("../../views/modules/admin/users/Create.vue"),
            //     beforeEnter: (to, from, next) => {
            //         if (store.getters.getPermissions.includes("add users")) {
            //             next();
            //         } else {
            //             next({ name: "error_403" });
            //         }
            //     }
            // },
            // {
            //     path: "/admin/users/:id/edit",
            //     name: "admin.users.edit",
            //     component: () =>
            //         import("../../views/modules/admin/users/Edit.vue"),
            //     beforeEnter: (to, from, next) => {
            //         if (store.getters.getPermissions.includes("edit users")) {
            //             next();
            //         } else {
            //             next({ name: "error_403" });
            //         }
            //     }
            // },
            // {
            //     path: "/admin/users/:id",
            //     name: "admin.users.show",
            //     component: () =>
            //         import("../../views/modules/admin/users/Show.vue"),
            //     beforeEnter: (to, from, next) => {
            //         if (store.getters.getPermissions.includes("view users")) {
            //             next();
            //         } else {
            //             next({ name: "error_403" });
            //         }
            //     }
            // },
            /**
             *
             *
             * Roles
             *
             *
             */
            // {
            //     path: "/admin/roles",
            //     name: "admin.roles.index",
            //     component: () =>
            //         import("../../views/modules/admin/roles/Index.vue"),
            //     beforeEnter: (to, from, next) => {
            //         if (
            //             store.getters.getPermissions.includes(
            //                 "view all permissions"
            //             )
            //         ) {
            //             next();
            //         } else {
            //             next({ name: "error_403" });
            //         }
            //     }
            // },
            // {
            //     path: "/admin/roles/create",
            //     name: "admin.roles.create",
            //     component: () =>
            //         import("../../views/modules/admin/roles/Create.vue"),
            //     beforeEnter: (to, from, next) => {
            //         if (
            //             store.getters.getPermissions.includes("add permissions")
            //         ) {
            //             next();
            //         } else {
            //             next({ name: "error_403" });
            //         }
            //     }
            // },
            // {
            //     path: "/admin/roles/:id/edit",
            //     name: "admin.roles.edit",
            //     component: () =>
            //         import("../../views/modules/admin/roles/Edit.vue"),
            //     beforeEnter: (to, from, next) => {
            //         if (
            //             store.getters.getPermissions.includes(
            //                 "edit permissions"
            //             )
            //         ) {
            //             next();
            //         } else {
            //             next({ name: "error_403" });
            //         }
            //     }
            // },
            // {
            //     path: "/admin/roles/:id",
            //     name: "admin.roles.show",
            //     component: () =>
            //         import("../../views/modules/admin/roles/Show.vue"),
            //     beforeEnter: (to, from, next) => {
            //         if (
            //             store.getters.getPermissions.includes(
            //                 "view permissions"
            //             )
            //         ) {
            //             next();
            //         } else {
            //             next({ name: "error_403" });
            //         }
            //     }
            // },
            /**
             *
             *
             * Permissions
             *
             *
             */
            // {
            //     path: "/admin/permissions",
            //     name: "admin.permissions.index",
            //     component: () =>
            //         import("../../views/modules/admin/permissions/Index.vue")
            // },
            // {
            //     path: "/admin/permissions/create",
            //     name: "admin.permissions.create",
            //     component: () =>
            //         import("../../views/modules/admin/permissions/Create.vue")
            // },
            // {
            //     path: "/admin/permissions/:id/edit",
            //     name: "admin.permissions.edit",
            //     component: () =>
            //         import("../../views/modules/admin/permissions/Edit.vue")
            // },
            // {
            //     path: "/admin/permissions/:id",
            //     name: "admin.permissions.show",
            //     component: () =>
            //         import("../../views/modules/admin/permissions/Show.vue")
            // },
            /**
             *
             *
             * Vendors
             *
             *
             */
            {
                path: "/admin/vendors",
                name: "admin.vendors.index",
                component: () =>
                    import("../../views/modules/admin/vendors/Index.vue"),
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
                path: "/admin/vendors/create",
                name: "admin.vendors.create",
                component: () =>
                    import("../../views/modules/admin/vendors/Create.vue"),
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
                path: "/admin/vendors/:id/edit",
                name: "admin.vendors.edit",
                component: () =>
                    import("../../views/modules/admin/vendors/Edit.vue"),
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
                path: "/admin/vendors/:id",
                name: "admin.vendors.show",
                component: () =>
                    import("../../views/modules/admin/vendors/Show.vue"),
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
             *
             *
             * Notifications
             *
             *
             */
            {
                path: "/admin/notifications",
                name: "admin.notifications.index",
                component: () =>
                    import("../../views/modules/admin/notifications/Index.vue"),
                meta: {
                    keepAlive: true
                }
            }
        ]
    }
];

export default adminRoutes.map(route => {
    return { ...route };
});
