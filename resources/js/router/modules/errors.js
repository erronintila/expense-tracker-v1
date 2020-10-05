const routes = [
    {
        path: "*",
        name: "404",
        component: () => import("../../views/errors/404"),
        meta: {
            requiresAuth: false,
            requiresAdmin: false
        }
    },
    {
        path: "*",
        name: "500",
        component: () => import("../../views/errors/500"),
        meta: {
            requiresAuth: false,
            requiresAdmin: false
        }
    },
    {
        path: "*",
        name: "401",
        component: () => import("../../views/errors/401"),
        meta: {
            requiresAuth: false,
            requiresAdmin: false
        }
    }
];

export default routes.map(route => {
    return { ...route };
});
