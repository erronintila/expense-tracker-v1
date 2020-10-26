const routes = [
    {
        path: "*",
        name: "404",
        component: () => import("../../views/errors/404"),
        // meta: {
        //     requiresAuth: false,
        //     requiresAdmin: false
        // }
    },
    {
        path: "/error-403",
        name: "error_403",
        component: () => import("../../views/errors/403"),
        // meta: {
        //     requiresAuth: false,
        //     requiresAdmin: false
        // }
    },
    {
        path: "/error-500",
        name: "error_500",
        component: () => import("../../views/errors/500"),
        // meta: {
        //     requiresAuth: false,
        //     requiresAdmin: false
        // }
    },
    {
        path: "/error-401",
        name: "error_401",
        component: () => import("../../views/errors/401"),
        // meta: {
        //     requiresAuth: false,
        //     requiresAdmin: false
        // }
    }
];

export default routes.map(route => {
    return { ...route };
});
