// import http from "../http-common";
import axios from "axios";

class JobDataService {
    getAll(data) {
        return axios.get("/api/jobs", data);
    }

    get(data) {
        return axios.get("/api/data/jobs", data);
    }

    show(id, data) {
        return axios.get(`/api/jobs/${id}`, data);
    }

    store(data) {
        return axios.post("/api/jobs", data);
    }

    update(id, data) {
        return axios.put(`/api/jobs/${id}`, data);
    }

    delete(id, data) {
        return axios.delete(`/api/jobs/${id}`, data);
    }

    restore(id, data) {
        return axios.put(`/api/jobs/restore/${id}`, data);
    }
}

export default new JobDataService();
