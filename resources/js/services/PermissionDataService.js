// import http from "../http-common";
import axios from "axios";

class PermissionDataService {
    getAll(data) {
        return axios.get("/api/permissions", data);
    }

    get(data) {
        return axios.get("/api/data/permissions", data);
    }
}

export default new PermissionDataService();
