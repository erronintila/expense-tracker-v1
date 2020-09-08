const adminRoutes = [
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
    }
];

const userRoutes = [];

const baseRoutes = adminRoutes.concat(userRoutes);

export default baseRoutes.map(route => {
    return { ...route };
});
