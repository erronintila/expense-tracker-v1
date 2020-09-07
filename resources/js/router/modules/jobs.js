const adminRoutes = [
    {
        path: "/admin/jobs",
        name: "admin.jobs.index",
        component: () =>
            import("../../views/modules/admin/jobs/Index.vue"),
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
