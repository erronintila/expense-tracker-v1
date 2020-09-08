const adminRoutes = [
    {
        path: "/admin/expense_types",
        name: "admin.expense_types.index",
        component: () =>
            import("../../views/modules/admin/expense_types/Index.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/admin/expense_types/create",
        name: "admin.expense_types.create",
        component: () =>
            import("../../views/modules/admin/expense_types/Create.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/admin/expense_types/:id/edit",
        name: "admin.expense_types.edit",
        component: () =>
            import("../../views/modules/admin/expense_types/Edit.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/admin/expense_types/:id",
        name: "admin.expense_types.show",
        component: () =>
            import("../../views/modules/admin/expense_types/Show.vue"),
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
