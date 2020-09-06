import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import auth from "./auth";

export const store = new Vuex.Store({
    // state: {},
    // getters: {},
    // mutations: {},
    // actions: {},
    // modules: {
    //     auth
    // }

    state: {
        token: localStorage.getItem("access_token") || null
    },
    getters: {
        TOKEN(state) {
            return state.token;
        },
        LOGGED_IN(state) {
            return state.token !== null;
        }
    },
    mutations: {
        RETRIEVE_TOKEN(state, payload) {
            state.token = payload;
        },
        DESTROY_TOKEN(state) {
            state.token = null;
        }
    },
    actions: {
        RETRIEVE_TOKEN(context, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/api/login", {
                        email: payload.email,
                        password: payload.password
                    })
                    .then(function(response) {
                        let token = response.data.access_token;

                        localStorage.setItem("access_token", token);

                        context.commit("RETRIEVE_TOKEN", token);

                        resolve(response);
                    })
                    .catch(function(error) {
                        console.log(error);

                        console.log(error.response);

                        reject(error.response);
                    });
            });
        },
        DESTROY_TOKEN(context) {
            axios.defaults.headers.common["Authorization"] =
                "Bearer " + context.state.token;

            if (context.getters.LOGGED_IN) {
                return new Promise((resolve, reject) => {
                    axios
                        .post("/api/logout")
                        .then(function(response) {
                            localStorage.removeItem("access_token");

                            context.commit("DESTROY_TOKEN");

                            resolve(response);
                        })
                        .catch(function(error) {
                            localStorage.removeItem("access_token");

                            context.commit("DESTROY_TOKEN");

                            reject(error.response);
                        });
                });
            }
        }
    }
});
