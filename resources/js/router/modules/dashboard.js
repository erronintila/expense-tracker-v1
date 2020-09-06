const adminRoutes = [
    {
        path: "/admin",
        name: "admin.dashboard.index",
        component: () =>
            import("../../views/modules/admin/dashboard/Index.vue"),
        meta: {
            requiresAuth: true
        }
    }
];

const userRoutes = [
    {
        path: "/",
        name: "user.dashboard.index",
        component: () => import("../../views/modules/user/dashboard/Index.vue"),
        meta: {
            requiresAuth: true
        }
    }
];

const baseRoutes = adminRoutes.concat(userRoutes);

export default baseRoutes.map(route => {
    return { ...route };
});
