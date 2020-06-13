import { getLocalUser, getPetugas } from "./helper/auth";
import axios from "axios";
const user = getLocalUser();
const petugas = getPetugas();

export default {
    state: {
        currentUser: user,
        petugas: petugas,
        isLoggedIn: !!user,
        loading: false,
        auth_error: null,
        users: [],
        Nama : null,
    },
    getters: {
        isLoading(state) {
            return state.loading;
        },
        isLoggedIn(state) {
            return state.isLoggedIn;
        },
        currentUser(state) {
            return state.currentUser;
        },
        petugas(state) {
            return state.petugas;
        },
        authError(state) {
            return state.auth_error;
        },
        users(state) {
            return state.users;
        }
    },
    mutations: {
        login(state) {
            state.loading = true;
            state.auth_error = null;
        },
        loginSuccess(state, payload) {
            state.auth_error = null;
            state.isLoggedIn = true;
            state.loading = false;
            state.currentUser = Object.assign({}, {token: payload.token, role: payload.role});
            localStorage.setItem("user", JSON.stringify(state.currentUser));
        },
        editPetugas(state, form) {
            state.petugas = Object.assign({}, {nama: form.nama, lokasi: form.lokasi});
            localStorage.setItem("petugas", JSON.stringify(state.petugas));
        },
        loginFailed(state, payload) {
            state.loading = false;
            state.auth_error = payload.error;
        },
        logout(state) {
            localStorage.removeItem("user");
            state.isLoggedIn = false;
            state.currentUser = null;
        },
        updateUsers(state, payload) {
            state.users = payload;
        }
    },
    actions: {
        login(context) {
            context.commit("login");
        },
        getUsers(context) {
            axios.get('/api/users')
            .then((response) => {
                context.commit('updateusers', response.data.users);
            })
        }
    }
};