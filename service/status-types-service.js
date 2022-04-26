import http from "./http-common"

class StatusTypeApiService {
    getAll() {
        return http.get("/statustypes");
    }

    getById(id) {
        return http.get(`/statustypes/${id}`);
    }

    create(data) {
        return http.post("/statustypes", data);
    }

    update(id, data) {
        return http.put(`/statustypes/${id}`, data);
    }

    delete(id) {
        return http.delete(`/statustypes/${id}`);
    }
}

export default new StatusTypeApiService();