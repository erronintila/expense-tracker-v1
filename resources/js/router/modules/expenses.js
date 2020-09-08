const adminRoutes = [
    {
        path: "/admin/expenses",
        name: "admin.expenses.index",
        component: () =>
            import("../../views/modules/admin/expenses/Index.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/admin/expenses/create",
        name: "admin.expenses.create",
        component: () =>
            import("../../views/modules/admin/expenses/Create.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/admin/expenses/:id/edit",
        name: "admin.expenses.edit",
        component: () =>
            import("../../views/modules/admin/expenses/Edit.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/admin/expenses/:id",
        name: "admin.expenses.show",
        component: () =>
            import("../../views/modules/admin/expenses/Show.vue"),
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
