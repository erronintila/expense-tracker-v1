// import http from "../http-common";
import axios from "axios";

class SettingDataService {
    getAll(data) {
        return axios.get("/api/settings", data);
    }

    store(data) {
        return axios.post("/api/settings", data);
    }
}

export default new SettingDataService();
