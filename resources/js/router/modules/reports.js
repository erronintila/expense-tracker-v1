const adminRoutes = [
    {
        path: "/admin/reports",
        name: "admin.reports.index",
        component: () =>
            import("../../views/modules/admin/reports/Index.vue"),
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
