// import http from "../http-common";
import axios from "axios";

class ExpenseReportDataService {
    getAll(data) {
        return axios.get("/api/expense_reports", data);
    }

    get(data) {
        return axios.get("/api/data/expense_reports", data);
    }

    show(id, data) {
        return axios.get(`/api/expense_reports/${id}`, data);
    }

    store(data) {
        return axios.post("/api/expense_reports", data);
    }

    update(id, data) {
        return axios.put(`/api/expense_reports/${id}`, data);
    }

    delete(id, data) {
        return axios.delete(`/api/expense_reports/${id}`, data);
    }

    restore(id, data) {
        return axios.put(`/api/expense_reports/restore/${id}`, data);
    }

    submit(id, data) {
        return axios.put(`/api/expense_reports/submit/${id}`, data);
    }

    approve(id, data) {
        return axios.put(`/api/expense_reports/approve/${id}`, data);
    }

    reject(id, data) {
        return axios.put(`/api/expense_reports/reject/${id}`, data);
    }

    duplicate(id, data) {
        return axios.put(`/api/expense_reports/duplicate/${id}`, data);
    }
}

export default new ExpenseReportDataService();
