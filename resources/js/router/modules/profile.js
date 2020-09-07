const adminRoutes = [
    {
        path: "/admin/profile",
        name: "admin.profile.index",
        component: () =>
            import("../../views/modules/admin/profile/Index.vue"),
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
