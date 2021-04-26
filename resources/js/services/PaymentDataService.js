// import http from "../http-common";
import axios from "axios";

class PaymentDataService {
    getAll(data) {
        return axios.get("/api/payments", data);
    }

    get(data) {
        return axios.get("/api/data/payments", data);
    }

    show(id, data) {
        return axios.get(`/api/payments/${id}`, data);
    }

    store(data) {
        return axios.post("/api/payments", data);
    }

    update(id, data) {
        return axios.put(`/api/payments/${id}`, data);
    }

    delete(id, data) {
        return axios.delete(`/api/payments/${id}`, data);
    }

    restore(id, data) {
        return axios.put(`/api/payments/restore/${id}`, data);
    }

    export() {
        return axios.get("/api/payments/export/data");
    }
}

export default new PaymentDataService();
