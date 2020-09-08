const adminRoutes = [
    {
        path: "/admin/vendors",
        name: "admin.vendors.index",
        component: () =>
            import("../../views/modules/admin/vendors/Index.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/admin/vendors/create",
        name: "admin.vendors.create",
        component: () =>
            import("../../views/modules/admin/vendors/Create.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/admin/vendors/:id/edit",
        name: "admin.vendors.edit",
        component: () =>
            import("../../views/modules/admin/vendors/Edit.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/admin/vendors/:id",
        name: "admin.vendors.show",
        component: () =>
            import("../../views/modules/admin/vendors/Show.vue"),
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
