import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        token: localStorage.getItem("access_token") || null,
        user: JSON.parse(localStorage.getItem("user")) || null
    },
    getters: {
        getToken(state) {
            return state.token;
        },
        isAuthenticated(state) {
            return state.token !== null;
        },
        currentUser(state) {
            return state.user;
        },
        isAdmin(state) {
            return state.user.is_admin == 1;
            // return state.user.is_admin == 1;
        }
    },
    mutations: {
        AUTH_LOGIN(state, payload) {
            state.token = payload;
        },
        AUTH_LOGOUT(state) {
            state.token = null;
            state.user = {};
        },
        AUTH_USER(state, payload) {
            state.user = payload;
        }
    },
    actions: {
        AUTH_LOGIN(context, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/api/login", {
                        // email: payload.email,
                        username: payload.username,
                        password: payload.password
                    })
                    .then(function(response) {
                        let token = response.data.access_token;
                        let user = response.data.user;

                        localStorage.removeItem("user");
                        localStorage.setItem("user", JSON.stringify(user));

                        context.commit("AUTH_USER", JSON.stringify(user));

                        context.dispatch("AUTH_USER");

                        localStorage.setItem("access_token", token);

                        context.commit("AUTH_LOGIN", token);

                        // context.commit("AUTH_USER", user);

                        resolve(response);
                    })
                    .catch(function(error) {
                        console.log(error);
                        console.log(error.response);

                        reject(error.response);
                    });
            });
        },
        AUTH_LOGOUT(context) {
            axios.defaults.headers.common["Authorization"] =
                "Bearer " + context.state.token;

            if (context.getters.isAuthenticated) {
                return new Promise((resolve, reject) => {
                    axios
                        .post("/api/logout")
                        .then(function(response) {
                            localStorage.removeItem("user");
                            localStorage.removeItem("access_token");

                            context.commit("AUTH_LOGOUT");

                            resolve(response);
                        })
                        .catch(function(error) {
                            console.log(error);
                            console.log(error.response);

                            localStorage.removeItem("user");
                            localStorage.removeItem("access_token");

                            context.commit("AUTH_LOGOUT");

                            reject(error.response);
                        });
                });
            }
        },
        AUTH_USER(context) {
            if (context.getters.isAuthenticated) {
                return new Promise((resolve, reject) => {
                    axios.defaults.headers.common["Authorization"] =
                        "Bearer " + context.state.token;

                    axios
                        .get("/api/user")
                        .then(function(response) {
                            let user = response.data;

                            localStorage.removeItem("user");
                            localStorage.setItem("user", JSON.stringify(user));

                            context.commit("AUTH_USER", JSON.stringify(user));

                            resolve(response);
                        })
                        .catch(function(error) {
                            console.log(error);
                            console.log(error.response);
                            
                            context.commit("AUTH_LOGOUT");

                            reject(error.response);
                        });
                });
            }
        }
    }
});
