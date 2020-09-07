const adminRoutes = [
    {
        path: "/admin/expenses",
        name: "admin.expenses.index",
        component: () =>
            import("../../views/modules/admin/expenses/Index.vue"),
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
