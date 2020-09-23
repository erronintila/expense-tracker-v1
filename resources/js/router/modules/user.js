const userRoutes = [
    /** Dashboard */
    {
        path: "/",
        name: "user",
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
                path: "/reports",
                name: "user.reports.index",
                component: () =>
                    import("../../views/modules/user/reports/Index.vue")
            },
            {
                path: "/reports/create",
                name: "user.reports.create",
                component: () =>
                    import("../../views/modules/user/reports/Create.vue")
            },
            {
                path: "/reports/:id/edit",
                name: "user.reports.edit",
                component: () =>
                    import("../../views/modules/user/reports/Edit.vue")
            },
            {
                path: "/reports/:id",
                name: "user.reports.show",
                component: () =>
                    import("../../views/modules/user/reports/Show.vue")
            },
        ]
    }
];

export default userRoutes.map(route => {
    return { ...route };
});
