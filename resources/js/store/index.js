import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";

const ls = new SecureLS({ isCompression: false });

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        admin: localStorage.getItem("admin") || false,
        authenticated: localStorage.getItem("authenticated") || false,
        user: null || null,
        settings: null || null,
        notifications: null || null
    },
    plugins: [
        createPersistedState()
        // createPersistedState({
        //     storage: {
        //         getItem: key => ls.get(key),
        //         setItem: (key, value) => ls.set(key, value),
        //         removeItem: key => ls.remove(key)
        //     }
        // })
    ],
    getters: {
        admin(state) {
            return state.admin;
        },
        authenticated(state) {
            return state.authenticated;
        },
        user(state) {
            return state.user;
        },
        settings(state) {
            return state.settings;
        },
        notifications(state) {
            return state.notifications;
        }
    },
    mutations: {
        SET_AUTHENTICATED(state, value) {
            state.authenticated = value;
        },
        SET_USER(state, value) {
            state.user = value;
            state.admin = value == null ? false : value.is_admin;
        },
        SET_SETTINGS(state, value) {
            state.settings = value;
        },
        SET_NOTIFICATIONS(state, value) {
            state.notifications = value;
        }
    },
    actions: {
        AUTH_LOGIN(context, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .get("/sanctum/csrf-cookie")
                    .then(response => {
                        axios
                            .post("/login", {
                                username: payload.username,
                                password: payload.password
                            })
                            .then(response => {
                                context.dispatch("AUTH_USER");

                                context.dispatch("AUTH_NOTIFICATIONS");

                                resolve(response);
                            })
                            .catch(error => {
                                console.log(error);
                                console.log(error.response);

                                reject(error);
                            });
                    })
                    .catch(error => {
                        console.log(error);

                        reject(error);
                    });
            });
        },

        AUTH_LOGOUT(context) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/logout")
                    .then(function(response) {
                        localStorage.removeItem("authenticated");
                        localStorage.removeItem("admin");

                        context.commit("SET_AUTHENTICATED", false);
                        context.commit("SET_USER", null);
                        context.commit("SET_SETTINGS", null);

                        resolve(response);
                    })
                    .catch(function(error) {
                        localStorage.removeItem("authenticated");

                        console.log(error);
                        console.log(error.response);

                        context.commit("SET_AUTHENTICATED", false);
                        context.commit("SET_USER", null);
                        context.commit("SET_SETTINGS", null);

                        reject(error);
                    });
            });
        },

        AUTH_USER(context) {
            return new Promise((resolve, reject) => {
                axios
                    .get("/api/user")
                    .then(function(response) {
                        context.dispatch("AUTH_SETTINGS");
                        context.dispatch("AUTH_NOTIFICATIONS");

                        localStorage.setItem("authenticated", "true");
                        localStorage.setItem(
                            "admin",
                            response.data.data.is_admin
                        );

                        context.commit("SET_AUTHENTICATED", true);
                        context.commit("SET_USER", response.data.data);

                        resolve(response.data.data);
                    })
                    .catch(function(error) {
                        console.log(error);
                        console.log(error.response);

                        localStorage.removeItem("authenticated");
                        localStorage.removeItem("admin");

                        context.commit("SET_AUTHENTICATED", false);
                        context.commit("SET_USER", null);

                        reject(error);
                    });
            });
        },

        AUTH_SETTINGS(context) {
            return new Promise((resolve, reject) => {
                axios
                    .get("/api/settings")
                    .then(function(response) {
                        context.commit("SET_SETTINGS", response.data);

                        resolve(response.data.data);
                    })
                    .catch(function(error) {
                        console.log(error);
                        console.log(error.response);

                        context.commit("SET_SETTINGS", null);

                        reject(error);
                    });
            });
        },

        AUTH_NOTIFICATIONS(context) {
            return new Promise((resolve, reject) => {
                axios
                    .get(`/api/data/check_notifications`, {
                        params: {
                            action: "check notifications"
                        }
                    })
                    .then(function(response) {
                        context.commit("SET_NOTIFICATIONS", response.data);

                        resolve(response.data.data);
                    })
                    .catch(function(error) {
                        console.log(error);
                        console.log(error.response);

                        context.commit("SET_NOTIFICATIONS", null);

                        reject(error);
                    });
            });
        }
    }
});

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// import Vue from "vue";
// import Vuex from "vuex";
// Vue.use(Vuex);

// export const store = new Vuex.Store({
//     state: {
//         token: localStorage.getItem("access_token") || null,
//         user: JSON.parse(localStorage.getItem("user")) || null,
//         permissions: JSON.parse(localStorage.getItem("permissions")) || null,
//     },
//     getters: {
//         getToken(state) {
//             return state.token;
//         },
//         isAuthenticated(state) {
//             return state.token !== null;
//         },
//         currentUser(state) {
//             return state.user;
//         },
//         getPermissions(state) {
//             return state.permissions;
//         },
//         isAdmin(state) {
//             return state.user.is_admin == 1;
//             // return state.user.is_admin == 1;
//         }
//     },
//     mutations: {
//         AUTH_LOGIN(state, payload) {
//             state.token = payload;
//         },
//         AUTH_LOGOUT(state) {
//             state.token = null;
//             state.user = {};
//             state.permissions = {};
//         },
//         AUTH_USER(state, payload) {
//             state.user = payload;
//         },
//         AUTH_PERMISSIONS(state, payload) {
//             state.permissions = payload;
//         }
//     },
//     actions: {
//         AUTH_LOGIN(context, payload) {
//             return new Promise((resolve, reject) => {
//                 axios
//                     .post("/api/login", {
//                         // email: payload.email,
//                         username: payload.username,
//                         password: payload.password
//                     })
//                     .then(function(response) {
//                         let token = response.data.access_token;
//                         let user = response.data.user;
//                         let permissions = response.data.permissions;

//                         localStorage.removeItem("user");
//                         localStorage.setItem("user", JSON.stringify(user));

//                         localStorage.removeItem("permissions");
//                         localStorage.setItem("permissions", JSON.stringify(permissions));

//                         context.commit("AUTH_USER", JSON.stringify(user));

//                         context.commit("AUTH_PERMISSIONS", JSON.stringify(permissions));

//                         context.dispatch("AUTH_USER");

//                         localStorage.setItem("access_token", token);

//                         context.commit("AUTH_LOGIN", token);

//                         // context.commit("AUTH_USER", user);

//                         resolve(response);
//                     })
//                     .catch(function(error) {
//                         console.log(error);
//                         // console.log(error.response);

//                         reject(error.response);
//                     });
//             });
//         },
//         AUTH_LOGOUT(context) {
//             axios.defaults.headers.common["Authorization"] =
//                 "Bearer " + context.state.token;

//             if (context.getters.isAuthenticated) {
//                 return new Promise((resolve, reject) => {
//                     axios
//                         .post("/api/logout")
//                         .then(function(response) {
//                             localStorage.removeItem("user");
//                             localStorage.removeItem("access_token");
//                             localStorage.removeItem("permissions");

//                             context.commit("AUTH_LOGOUT");

//                             resolve(response);
//                         })
//                         .catch(function(error) {
//                             console.log(error);
//                             // console.log(error.response);

//                             localStorage.removeItem("user");
//                             localStorage.removeItem("access_token");

//                             context.commit("AUTH_LOGOUT");

//                             reject(error.response);
//                         });
//                 });
//             }
//         },
//         AUTH_USER(context) {
//             if (context.getters.isAuthenticated) {
//                 return new Promise((resolve, reject) => {
//                     axios.defaults.headers.common["Authorization"] =
//                         "Bearer " + context.state.token;

//                     axios
//                         .get("/api/user")
//                         .then(function(response) {
//                             let user = response.data;

//                             localStorage.removeItem("user");
//                             localStorage.setItem("user", JSON.stringify(user));

//                             context.commit("AUTH_USER", JSON.stringify(user));

//                             resolve(response);
//                         })
//                         .catch(function(error) {
//                             console.log(error);
//                             // console.log(error.response);

//                             context.commit("AUTH_LOGOUT");

//                             reject(error.response);
//                         });
//                 });
//             }
//         }
//     }
// });
