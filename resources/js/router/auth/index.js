
const routes = [
    {
        path: "/login",
        name: "login",
        component: () => import("../../views/auth/Login"),
        meta: {
            requiresVisitor : true
        }
    },
    {
        path: "/register",
        name: "register",
        component: () => import("../../views/auth/Register"),
        meta: {
            requiresVisitor : true
        }
    }
];

export default routes.map(route => {
    return { ...route };
});
