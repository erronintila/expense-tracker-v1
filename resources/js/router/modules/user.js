const userRoutes = [
    /** Dashboard */
    {
        path: "/",
        name: "home",
        // component: () => import("../../views/modules/admin/reports/Index.vue"),
        children: [
            /**
             *
             * Profile
             *
             */
            {
                path: "/profile",
                name: "admin.dashboard.index",
                // component: () => import("../components/user/Profile")
            },
            /**
             *
             * Expenses
             *
             */
            {
                path: "/expenses",
                name: "admin.dashboard.index",
                // component: () => import("../components/user/Profile")
            },
            {
                path: "/expenses/create",
                name: "admin.dashboard.index",
                // component: () => import("../components/user/Profile")
            },
            {
                path: "/expenses/:id",
                name: "admin.dashboard.index",
                // component: () => import("../components/user/Profile")
            },
            {
                path: "/expenses/:id/edit",
                name: "admin.dashboard.index",
                // component: () => import("../components/user/Profile")
            },
            /**
             *
             * Expense Reports
             *
             */
            {
                path: "/expense_reports",
                name: "admin.dashboard.index",
                // component: () => import("../components/user/Profile")
            },
            {
                path: "/expense_reports/create",
                name: "admin.dashboard.index",
                // component: () => import("../components/user/Profile")
            },
            {
                path: "/expense_reports/:id",
                name: "admin.dashboard.index",
                // component: () => import("../components/user/Profile")
            },
            {
                path: "/expense_reports/:id/edit",
                name: "admin.dashboard.index",
                // component: () => import("../components/user/Profile")
            }
        ],
        meta: {
            requiresAuth: true
        }
    }
];

export default userRoutes.map(route => {
    return { ...route };
});
