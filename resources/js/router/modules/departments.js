const adminRoutes = [
    {
        path: "/admin/departments",
        name: "admin.departments.index",
        component: () =>
            import("../../views/modules/admin/departments/Index.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/admin/departments/create",
        name: "admin.departments.create",
        component: () =>
            import("../../views/modules/admin/departments/Create.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/admin/departments/:id/edit",
        name: "admin.departments.edit",
        component: () =>
            import("../../views/modules/admin/departments/Edit.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/admin/departments/:id",
        name: "admin.departments.show",
        component: () =>
            import("../../views/modules/admin/departments/Show.vue"),
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
