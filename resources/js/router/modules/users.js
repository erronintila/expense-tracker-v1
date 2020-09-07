const adminRoutes = [
    {
        path: "/admin/users",
        name: "admin.users.index",
        component: () =>
            import("../../views/modules/admin/users/Index.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/admin/users/create",
        name: "admin.users.create",
        component: () =>
            import("../../views/modules/admin/users/Create.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/admin/users/:id/edit",
        name: "admin.users.edit",
        component: () =>
            import("../../views/modules/admin/users/Edit.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/admin/users/:id",
        name: "admin.users.show",
        component: () =>
            import("../../views/modules/admin/users/Show.vue"),
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
