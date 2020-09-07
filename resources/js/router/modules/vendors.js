const adminRoutes = [
    {
        path: "/admin/vendors",
        name: "admin.vendors.index",
        component: () =>
            import("../../views/modules/admin/vendors/Index.vue"),
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
