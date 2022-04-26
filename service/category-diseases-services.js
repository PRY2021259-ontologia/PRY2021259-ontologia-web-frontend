import http from "./http-common"

class CategoryDiseasesApiService {
    getAll() {
        return http.get("/categorydiseases");
    }

    getById(id) {
        return http.get(`/categorydiseases/${id}`);
    }

    create(data) {
        return http.post("/categorydiseases", data);
    }

    update(id, data) {
        return http.put(`/categorydiseases/${id}`, data);
    }

    delete(id) {
        return http.delete(`/categorydiseases/${id}`);
    }
}

export default new CategoryDiseasesApiService();