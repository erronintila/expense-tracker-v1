import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        token: localStorage.getItem("access_token") || null,
        user: {}
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

                        localStorage.setItem("access_token", token);

                        context.commit("AUTH_LOGIN", token);

                        // context.commit("AUTH_USER", user);

                        context.dispatch("AUTH_USER");

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
                            localStorage.removeItem("access_token");

                            context.commit("AUTH_LOGOUT");

                            resolve(response);
                        })
                        .catch(function(error) {
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
                            context.commit("AUTH_USER", response.data);

                            resolve(response);
                        })
                        .catch(function(error) {
                            context.commit("AUTH_LOGOUT");

                            reject(error.response);
                        });
                });
            }
        }
    }
});
