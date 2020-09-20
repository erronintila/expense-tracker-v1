const adminRoutes = [
    /** Dashboard */
    {
        path: "/admin",
        name: "admin",
        component: () => import("../../views/modules/admin/Index.vue"),
        meta: {
            requiresAuth: true,
            requiresAdmin: true
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
                    import("../../views/modules/admin/dashboard/Index.vue")
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
                    import("../../views/modules/admin/profile/Index.vue")
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
                    import("../../views/modules/admin/departments/Index.vue")
            },
            {
                path: "/admin/departments/create",
                name: "admin.departments.create",
                component: () =>
                    import("../../views/modules/admin/departments/Create.vue")
            },
            {
                path: "/admin/departments/:id/edit",
                name: "admin.departments.edit",
                component: () =>
                    import("../../views/modules/admin/departments/Edit.vue")
            },
            {
                path: "/admin/departments/:id",
                name: "admin.departments.show",
                component: () =>
                    import("../../views/modules/admin/departments/Show.vue")
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
                    import("../../views/modules/admin/employees/Index.vue")
            },
            {
                path: "/admin/employees/create",
                name: "admin.employees.create",
                component: () =>
                    import("../../views/modules/admin/employees/Create.vue")
            },
            {
                path: "/admin/employees/:id/edit",
                name: "admin.employees.edit",
                component: () =>
                    import("../../views/modules/admin/employees/Edit.vue")
            },
            {
                path: "/admin/employees/:id",
                name: "admin.employees.show",
                component: () =>
                    import("../../views/modules/admin/employees/Show.vue")
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
                    import("../../views/modules/admin/expense_types/Index.vue")
            },
            {
                path: "/admin/expense_types/create",
                name: "admin.expense_types.create",
                component: () =>
                    import("../../views/modules/admin/expense_types/Create.vue")
            },
            {
                path: "/admin/expense_types/:id/edit",
                name: "admin.expense_types.edit",
                component: () =>
                    import("../../views/modules/admin/expense_types/Edit.vue")
            },
            {
                path: "/admin/expense_types/:id",
                name: "admin.expense_types.show",
                component: () =>
                    import("../../views/modules/admin/expense_types/Show.vue")
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
                    import("../../views/modules/admin/expenses/Index.vue")
            },
            {
                path: "/admin/expenses/create",
                name: "admin.expenses.create",
                component: () =>
                    import("../../views/modules/admin/expenses/Create.vue")
            },
            {
                path: "/admin/expenses/:id/edit",
                name: "admin.expenses.edit",
                component: () =>
                    import("../../views/modules/admin/expenses/Edit.vue")
            },
            {
                path: "/admin/expenses/:id",
                name: "admin.expenses.show",
                component: () =>
                    import("../../views/modules/admin/expenses/Show.vue")
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
                    import("../../views/modules/admin/jobs/Index.vue")
            },
            {
                path: "/admin/jobs/create",
                name: "admin.jobs.create",
                component: () =>
                    import("../../views/modules/admin/jobs/Create.vue")
            },
            {
                path: "/admin/jobs/:id/edit",
                name: "admin.jobs.edit",
                component: () =>
                    import("../../views/modules/admin/jobs/Edit.vue")
            },
            {
                path: "/admin/jobs/:id",
                name: "admin.jobs.show",
                component: () =>
                    import("../../views/modules/admin/jobs/Show.vue")
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
                    import("../../views/modules/admin/payments/Index.vue")
            },
            {
                path: "/admin/payments/create",
                name: "admin.payments.create",
                component: () =>
                    import("../../views/modules/admin/payments/Create.vue")
            },
            {
                path: "/admin/payments/:id/edit",
                name: "admin.payments.edit",
                component: () =>
                    import("../../views/modules/admin/payments/Edit.vue")
            },
            {
                path: "/admin/payments/:id",
                name: "admin.payments.show",
                component: () =>
                    import("../../views/modules/admin/payments/Show.vue")
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
                    import("../../views/modules/admin/reports/Index.vue")
            },
            {
                path: "/admin/reports/create",
                name: "admin.reports.create",
                component: () =>
                    import("../../views/modules/admin/reports/Create.vue")
            },
            {
                path: "/admin/reports/:id/edit",
                name: "admin.reports.edit",
                component: () =>
                    import("../../views/modules/admin/reports/Edit.vue")
            },
            {
                path: "/admin/reports/:id",
                name: "admin.reports.show",
                component: () =>
                    import("../../views/modules/admin/reports/Show.vue")
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
                    import("../../views/modules/admin/users/Index.vue")
            },
            {
                path: "/admin/users/create",
                name: "admin.users.create",
                component: () =>
                    import("../../views/modules/admin/users/Create.vue")
            },
            {
                path: "/admin/users/:id/edit",
                name: "admin.users.edit",
                component: () =>
                    import("../../views/modules/admin/users/Edit.vue")
            },
            {
                path: "/admin/users/:id",
                name: "admin.users.show",
                component: () =>
                    import("../../views/modules/admin/users/Show.vue")
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
                    import("../../views/modules/admin/vendors/Index.vue")
            },
            {
                path: "/admin/vendors/create",
                name: "admin.vendors.create",
                component: () =>
                    import("../../views/modules/admin/vendors/Create.vue")
            },
            {
                path: "/admin/vendors/:id/edit",
                name: "admin.vendors.edit",
                component: () =>
                    import("../../views/modules/admin/vendors/Edit.vue")
            },
            {
                path: "/admin/vendors/:id",
                name: "admin.vendors.show",
                component: () =>
                    import("../../views/modules/admin/vendors/Show.vue")
            }
        ]
    }
];

export default adminRoutes.map(route => {
    return { ...route };
});
