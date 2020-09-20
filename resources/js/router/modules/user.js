const userRoutes = [
    /** Dashboard */
    {
        path: "/",
        name: "home",
        component: () => import("../../views/modules/user/Index.vue"),
        meta: {
            requiresAuth: true,
        },
        children: [
            /**
             *
             * Profile
             *
             */
            {
                path: "/profile",
                name: "profile",
                component: () =>
                    import("../../views/modules/user/profile/Index.vue")
            }
            // /**
            //  *
            //  * Expenses
            //  *
            //  */
            // {
            //     path: "/expenses",
            //     name: "admin.dashboard.index",
            //     // component: () => import("../components/user/Profile")
            // },
            // {
            //     path: "/expenses/create",
            //     name: "admin.dashboard.index",
            //     // component: () => import("../components/user/Profile")
            // },
            // {
            //     path: "/expenses/:id",
            //     name: "admin.dashboard.index",
            //     // component: () => import("../components/user/Profile")
            // },
            // {
            //     path: "/expenses/:id/edit",
            //     name: "admin.dashboard.index",
            //     // component: () => import("../components/user/Profile")
            // },
            // /**
            //  *
            //  * Expense Reports
            //  *
            //  */
            // {
            //     path: "/expense_reports",
            //     name: "admin.dashboard.index",
            //     // component: () => import("../components/user/Profile")
            // },
            // {
            //     path: "/expense_reports/create",
            //     name: "admin.dashboard.index",
            //     // component: () => import("../components/user/Profile")
            // },
            // {
            //     path: "/expense_reports/:id",
            //     name: "admin.dashboard.index",
            //     // component: () => import("../components/user/Profile")
            // },
            // {
            //     path: "/expense_reports/:id/edit",
            //     name: "admin.dashboard.index",
            //     // component: () => import("../components/user/Profile")
            // }
        ],
        meta: {
            requiresAuth: true
        }
    }
];

export default userRoutes.map(route => {
    return { ...route };
});
