// import http from "../http-common";
import axios from "axios";

class DepartmentDataService {
    getAll(data) {
        return axios.get("/api/departments", data);
    }

    get(data) {
        return axios.get("/api/data/departments", data);
    }

    show(id, data) {
        return axios.get(`/api/departments/${id}`, data);
    }

    store(data) {
        return axios.post("/api/departments", data);
    }

    update(id, data) {
        return axios.put(`/api/departments/${id}`, data);
    }

    delete(id, data) {
        return axios.delete(`/api/departments/${id}`, data);
    }

    restore(id, data) {
        return axios.put(`/api/departments/restore/${id}`, data);
    }
}

export default new DepartmentDataService();
