const adminRoutes = [
    {
        path: "/admin/employees",
        name: "admin.employees.index",
        component: () =>
            import("../../views/modules/admin/employees/Index.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/admin/employees/create",
        name: "admin.employees.create",
        component: () =>
            import("../../views/modules/admin/employees/Create.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/admin/employees/:id/edit",
        name: "admin.employees.edit",
        component: () =>
            import("../../views/modules/admin/employees/Edit.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/admin/employees/:id",
        name: "admin.employees.show",
        component: () =>
            import("../../views/modules/admin/employees/Show.vue"),
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
