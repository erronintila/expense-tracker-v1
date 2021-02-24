// import http from "../http-common";
import axios from "axios";

class ExpenseTypeDataService {
    getAll(data) {
        return axios.get("/api/expense_types", data);
    }

    get(data) {
        return axios.get("/api/data/expense_types", data);
    }

    show(id, data) {
        return axios.get(`/api/expense_types/${id}`, data);
    }

    store(data) {
        return axios.post("/api/expense_types", data);
    }

    update(id, data) {
        return axios.put(`/api/expense_types/${id}`, data);
    }

    delete(id, data) {
        return axios.delete(`/api/expense_types/${id}`, data);
    }

    restore(id, data) {
        return axios.put(`/api/expense_types/restore/${id}`, data);
    }
}

export default new ExpenseTypeDataService();
