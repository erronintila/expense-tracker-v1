const routes = [
    {
        path: "/login",
        name: "login",
        component: () => import("../../views/auth/Login"),
        meta: {
            requiresVisitor: true
        }
    },
    // {
    //     path: "/register",
    //     name: "register",
    //     component: () => import("../../views/auth/Register"),
    //     meta: {
    //         requiresVisitor: true
    //     }
    // },
    {
        path: "/logout",
        name: "logout",
        component: () => import("../../views/auth/Logout"),
        meta: {
            requiresAuth: true
        }
    }
    // {
    //     path: "/playground",
    //     name: "playground",
    //     component: () => import("../../views/Playground"),
    // }
];

export default routes.map(route => {
    return { ...route };
});
