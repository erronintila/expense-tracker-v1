// import http from "../http-common";
import axios from "axios";

class ExpenseDataService {
    getAll(data) {
        return axios.get("/api/expenses", data);
    }

    get(data) {
        return axios.get("/api/data/expenses", data);
    }

    show(id, data) {
        return axios.get(`/api/expenses/${id}`, data);
    }

    store(data) {
        return axios.post("/api/expenses", data);
    }

    update(id, data) {
        return axios.put(`/api/expenses/${id}`, data);
    }

    delete(id, data) {
        return axios.delete(`/api/expenses/${id}`, data);
    }

    restore(id, data) {
        return axios.put(`/api/expenses/restore/${id}`, data);
    }
}

export default new ExpenseDataService();
