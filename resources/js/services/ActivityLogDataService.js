// import http from "../http-common";
import axios from "axios";

class ActivityLogDataService {
    getAll(data) {
        return axios.get("/api/activity_logs", data);
    }

    export() {
        return axios.get("/api/activity_logs/export/data");
    }
}

export default new ActivityLogDataService();
