// import http from "../http-common";
import axios from "axios";

class ActivityLogDataService {
    getAll(data) {
        return axios.get("/api/activity_logs", data);
    }
}

export default new ActivityLogDataService();
