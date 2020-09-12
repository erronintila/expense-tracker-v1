const routes = [
    {
        path: "*",
        name: "notfound",
        component: () => import("../../views/errors/404"),
    }
];

export default routes.map(route => {
    return { ...route };
});
