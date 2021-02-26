// import http from "../http-common";
import axios from "axios";

class NotificationDataService {
    getAll(data) {
        return axios.get("/api/notifications", data);
    }

    update(id, data) {
        return axios.put(`/api/notifications/${id}`, data);
    }
}

export default new NotificationDataService();
