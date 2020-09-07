const adminRoutes = [
    {
        path: "/admin/departments",
        name: "admin.departments.index",
        component: () =>
            import("../../views/modules/admin/departments/Index.vue"),
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
