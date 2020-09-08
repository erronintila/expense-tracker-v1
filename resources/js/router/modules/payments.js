const adminRoutes = [
    {
        path: "/admin/payments",
        name: "admin.payments.index",
        component: () =>
            import("../../views/modules/admin/payments/Index.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/admin/payments/create",
        name: "admin.payments.create",
        component: () =>
            import("../../views/modules/admin/payments/Create.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/admin/payments/:id/edit",
        name: "admin.payments.edit",
        component: () =>
            import("../../views/modules/admin/payments/Edit.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/admin/payments/:id",
        name: "admin.payments.show",
        component: () =>
            import("../../views/modules/admin/payments/Show.vue"),
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
