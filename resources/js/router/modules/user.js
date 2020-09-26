const userRoutes = [
    /** Dashboard */
    {
        path: "/",
        name: "home",
        redirect: "/dashboard",
        component: () => import("../../views/modules/user/Index.vue"),
        meta: {
            requiresAuth: true,
            // requiresAdmin: true
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
                    import("../../views/modules/user/dashboard/Index.vue")
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
                    import("../../views/modules/user/profile/Index.vue")
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
                    import("../../views/modules/user/expenses/Index.vue")
            },
            {
                path: "/expenses/create",
                name: "user.expenses.create",
                component: () =>
                    import("../../views/modules/user/expenses/Create.vue")
            },
            {
                path: "/expenses/:id/edit",
                name: "user.expenses.edit",
                component: () =>
                    import("../../views/modules/user/expenses/Edit.vue")
            },
            {
                path: "/expenses/:id",
                name: "user.expenses.show",
                component: () =>
                    import("../../views/modules/user/expenses/Show.vue")
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
                    import("../../views/modules/user/expense_reports/Index.vue")
            },
            {
                path: "/expense_reports/create",
                name: "user.expense_reports.create",
                component: () =>
                    import("../../views/modules/user/expense_reports/Create.vue")
            },
            {
                path: "/expense_reports/:id/edit",
                name: "user.expense_reports.edit",
                component: () =>
                    import("../../views/modules/user/expense_reports/Edit.vue")
            },
            {
                path: "/expense_reports/:id",
                name: "user.expense_reports.show",
                component: () =>
                    import("../../views/modules/user/expense_reports/Show.vue")
            },
        ]
    }
];

export default userRoutes.map(route => {
    return { ...route };
});
