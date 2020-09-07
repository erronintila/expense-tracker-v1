const adminRoutes = [
    {
        path: "/admin/payments",
        name: "admin.payments.index",
        component: () =>
            import("../../views/modules/admin/payments/Index.vue"),
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
