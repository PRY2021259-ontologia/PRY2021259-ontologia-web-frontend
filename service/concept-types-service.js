import http from "./http-common"

class ConceptTypeApiService {
    getAll() {
        return http.get("/concepttypes");
    }

    getById(id) {
        return http.get(`/concepttypes/${id}`);
    }

    create(data) {
        return http.post("/concepttypes", data);
    }

    update(id, data) {
        return http.put(`/concepttypes/${id}`, data);
    }

    delete(id) {
        return http.delete(`/concepttypes/${id}`);
    }
}

export default new ConceptTypeApiService();