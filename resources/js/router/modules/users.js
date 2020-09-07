const adminRoutes = [
    {
        path: "/admin/users",
        name: "admin.users.index",
        component: () =>
            import("../../views/modules/admin/users/Index.vue"),
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
