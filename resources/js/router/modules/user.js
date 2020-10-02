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
            // keepAlive: false,
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
                // meta: {
                //     keepAlive: false
                // }
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
                    // meta: {
                    //     keepAlive: false
                    // }
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
                    // meta: {
                    //     keepAlive: false
                    // }
            },
            {
                path: "/expenses/create",
                name: "user.expenses.create",
                component: () =>
                    import("../../views/modules/user/expenses/Create.vue"),
                    // meta: {
                    //     keepAlive: false
                    // }
            },
            {
                path: "/expenses/:id/edit",
                name: "user.expenses.edit",
                component: () =>
                    import("../../views/modules/user/expenses/Edit.vue"),
                    // meta: {
                    //     keepAlive: false
                    // }
            },
            {
                path: "/expenses/:id",
                name: "user.expenses.show",
                component: () =>
                    import("../../views/modules/user/expenses/Show.vue"),
                    // meta: {
                    //     keepAlive: false
                    // }
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
                    import("../../views/modules/user/expense_reports/Index.vue"),
                    // meta: {
                    //     keepAlive: false
                    // }
            },
            {
                path: "/expense_reports/create",
                name: "user.expense_reports.create",
                component: () =>
                    import(
                        "../../views/modules/user/expense_reports/Create.vue"
                    ),
                    // meta: {
                    //     keepAlive: false
                    // }
            },
            {
                path: "/expense_reports/:id/edit",
                name: "user.expense_reports.edit",
                component: () =>
                    import("../../views/modules/user/expense_reports/Edit.vue"),
                    // meta: {
                    //     keepAlive: false
                    // }
            },
            {
                path: "/expense_reports/:id",
                name: "user.expense_reports.show",
                component: () =>
                    import("../../views/modules/user/expense_reports/Show.vue"),
                    // meta: {
                    //     keepAlive: false
                    // }
            },
            {
                path: "/expense_reports/print/:id",
                name: "user.expense_reports.print",
                component: () =>
                    import("../../views/modules/user/expense_reports/Print.vue"),
                    // meta: {
                    //     keepAlive: false
                    // }
            },
        ]
    },
];

export default userRoutes.map(route => {
    return { ...route };
});
