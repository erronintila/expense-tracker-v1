const routes = [
    {
        path: "*",
        name: "notfound",
        component: () => import("../../views/errors/404"),
        meta: {
            requiresAuth: false,
            requiresAdmin: false
        }
    }
];

export default routes.map(route => {
    return { ...route };
});
