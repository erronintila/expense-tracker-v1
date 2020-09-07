const adminRoutes = [
    {
        path: "/admin/expense_types",
        name: "admin.expense_types.index",
        component: () =>
            import("../../views/modules/admin/expense_types/Index.vue"),
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
