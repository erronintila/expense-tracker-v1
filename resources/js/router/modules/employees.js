const adminRoutes = [
    {
        path: "/admin/employees",
        name: "admin.employees.index",
        component: () =>
            import("../../views/modules/admin/employees/Index.vue"),
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
