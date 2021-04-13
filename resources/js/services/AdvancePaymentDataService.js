// import http from "../http-common";
import axios from "axios";

class AdvancePaymentDataService {
    getAll(data) {
        return axios.get("/api/advance_payments", data);
    }

    get(data) {
        return axios.get("/api/data/advance_payments", data);
    }

    show(id, data) {
        return axios.get(`/api/advance_payments/${id}`, data);
    }

    store(data) {
        return axios.post("/api/advance_payments", data);
    }

    update(id, data) {
        return axios.put(`/api/advance_payments/${id}`, data);
    }

    delete(id, data) {
        return axios.delete(`/api/advance_payments/${id}`, data);
    }

    restore(id, data) {
        return axios.put(`/api/advance_payments/restore/${id}`, data);
    }

    approve(id, data) {
        return axios.put(`/api/advance_payments/approve_payment/${id}`, data);
    }

    cancel(id, data) {
        return axios.put(`/api/advance_payments/cancel_payment/${id}`, data);
    }
}

export default new AdvancePaymentDataService();
