// import http from "../http-common";
import axios from "axios";

class UserDataService {
    get(data) {
        return axios.get("/api/data/users", data);
    }

    getAll(data) {
        return axios.get("/api/users", data);
    }

    show(id, data) {
        return axios.get(`/api/users/${id}`, data);
    }

    store(data) {
        return axios.post("/api/users", data);
    }

    update(id, data) {
        return axios.put(`/api/users/${id}`, data);
    }

    delete(id, data) {
        return axios.delete(`/api/users/${id}`, data);
    }

    restore(id, data) {
        return axios.put(`/api/users/restore/${id}`, data);
    }

    updatePassword(id, data) {
        return axios.put(`/api/users/update_password/${id}`, data);
    }

    resetPassword(id, data) {
        return axios.put(`/api/users/reset_password/${id}`, data);
    }

    verifyEmail(id, data) {
        return axios.put(`/api/users/verify_email/${id}`, data);
    }

    updateFund(id, data) {
        return axios.put(`/api/users/update_fund/${id}`, data);
    }

    updateSettings(id, data) {
        return axios.put(`/api/users/update_settings/${id}`, data);
    }

    updatePermissions(id, data) {
        return axios.put(`/api/users/update_permissions/${id}`, data);
    }

    updateProfile(id, data) {
        return axios.put(`/api/users/update_profile/${id}`, data);
    }

    export() {
        return axios.get("/api/users/export");
    }
}

export default new UserDataService();
