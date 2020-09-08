const adminRoutes = [
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
    }
];

const userRoutes = [];

const baseRoutes = adminRoutes.concat(userRoutes);

export default baseRoutes.map(route => {
    return { ...route };
});
