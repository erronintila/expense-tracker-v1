// import http from "../http-common";
import axios from "axios";

class VendorDataService {
    getAll(data) {
        return axios.get("/api/vendors", data);
    }

    get(data) {
        return axios.get("/api/data/vendors", data);
    }

    show(id, data) {
        return axios.get(`/api/vendors/${id}`, data);
    }

    store(data) {
        return axios.post("/api/vendors", data);
    }

    update(id, data) {
        return axios.put(`/api/vendors/${id}`, data);
    }

    delete(id, data) {
        return axios.delete(`/api/vendors/${id}`, data);
    }

    restore(id, data) {
        return axios.put(`/api/vendors/restore/${id}`, data);
    }
}

export default new VendorDataService();
