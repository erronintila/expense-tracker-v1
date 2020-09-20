const adminRoutes = [
    /** Dashboard */
    {
        path: "/admin",
        name: "admin.dashboard.index",
        component: () =>
            import("../../views/modules/admin/dashboard/Index.vue"),
        meta: {
            requiresAuth: true
        },
        children: [
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
                    requiresAuth: true
                }
            },
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
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/departments/create",
                name: "admin.departments.create",
                component: () =>
                    import("../../views/modules/admin/departments/Create.vue"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/departments/:id/edit",
                name: "admin.departments.edit",
                component: () =>
                    import("../../views/modules/admin/departments/Edit.vue"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/departments/:id",
                name: "admin.departments.show",
                component: () =>
                    import("../../views/modules/admin/departments/Show.vue"),
                meta: {
                    requiresAuth: true
                }
            },
            /**
             *
             *
             * Employees
             *
             *
             */
            {
                path: "/admin/employees",
                name: "admin.employees.index",
                component: () =>
                    import("../../views/modules/admin/employees/Index.vue"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/employees/create",
                name: "admin.employees.create",
                component: () =>
                    import("../../views/modules/admin/employees/Create.vue"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/employees/:id/edit",
                name: "admin.employees.edit",
                component: () =>
                    import("../../views/modules/admin/employees/Edit.vue"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/employees/:id",
                name: "admin.employees.show",
                component: () =>
                    import("../../views/modules/admin/employees/Show.vue"),
                meta: {
                    requiresAuth: true
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
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/expense_types/create",
                name: "admin.expense_types.create",
                component: () =>
                    import(
                        "../../views/modules/admin/expense_types/Create.vue"
                    ),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/expense_types/:id/edit",
                name: "admin.expense_types.edit",
                component: () =>
                    import("../../views/modules/admin/expense_types/Edit.vue"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/expense_types/:id",
                name: "admin.expense_types.show",
                component: () =>
                    import("../../views/modules/admin/expense_types/Show.vue"),
                meta: {
                    requiresAuth: true
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
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/expenses/create",
                name: "admin.expenses.create",
                component: () =>
                    import("../../views/modules/admin/expenses/Create.vue"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/expenses/:id/edit",
                name: "admin.expenses.edit",
                component: () =>
                    import("../../views/modules/admin/expenses/Edit.vue"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/expenses/:id",
                name: "admin.expenses.show",
                component: () =>
                    import("../../views/modules/admin/expenses/Show.vue"),
                meta: {
                    requiresAuth: true
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
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/jobs/create",
                name: "admin.jobs.create",
                component: () =>
                    import("../../views/modules/admin/jobs/Create.vue"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/jobs/:id/edit",
                name: "admin.jobs.edit",
                component: () =>
                    import("../../views/modules/admin/jobs/Edit.vue"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/jobs/:id",
                name: "admin.jobs.show",
                component: () =>
                    import("../../views/modules/admin/jobs/Show.vue"),
                meta: {
                    requiresAuth: true
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
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/payments/create",
                name: "admin.payments.create",
                component: () =>
                    import("../../views/modules/admin/payments/Create.vue"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/payments/:id/edit",
                name: "admin.payments.edit",
                component: () =>
                    import("../../views/modules/admin/payments/Edit.vue"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/payments/:id",
                name: "admin.payments.show",
                component: () =>
                    import("../../views/modules/admin/payments/Show.vue"),
                meta: {
                    requiresAuth: true
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
                path: "/admin/reports",
                name: "admin.reports.index",
                component: () =>
                    import("../../views/modules/admin/reports/Index.vue"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/reports/create",
                name: "admin.reports.create",
                component: () =>
                    import("../../views/modules/admin/reports/Create.vue"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/reports/:id/edit",
                name: "admin.reports.edit",
                component: () =>
                    import("../../views/modules/admin/reports/Edit.vue"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/reports/:id",
                name: "admin.reports.show",
                component: () =>
                    import("../../views/modules/admin/reports/Show.vue"),
                meta: {
                    requiresAuth: true
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
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/users/create",
                name: "admin.users.create",
                component: () =>
                    import("../../views/modules/admin/users/Create.vue"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/users/:id/edit",
                name: "admin.users.edit",
                component: () =>
                    import("../../views/modules/admin/users/Edit.vue"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/users/:id",
                name: "admin.users.show",
                component: () =>
                    import("../../views/modules/admin/users/Show.vue"),
                meta: {
                    requiresAuth: true
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
                path: "/admin/vendors",
                name: "admin.vendors.index",
                component: () =>
                    import("../../views/modules/admin/vendors/Index.vue"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/vendors/create",
                name: "admin.vendors.create",
                component: () =>
                    import("../../views/modules/admin/vendors/Create.vue"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/vendors/:id/edit",
                name: "admin.vendors.edit",
                component: () =>
                    import("../../views/modules/admin/vendors/Edit.vue"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/admin/vendors/:id",
                name: "admin.vendors.show",
                component: () =>
                    import("../../views/modules/admin/vendors/Show.vue"),
                meta: {
                    requiresAuth: true
                }
            }
        ]
    }
];

export default adminRoutes.map(route => {
    return { ...route };
});
