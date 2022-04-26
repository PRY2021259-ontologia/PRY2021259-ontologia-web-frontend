import http from "./http-common"

class SuggestionTypesApiService {
    getAll() {
        return http.get("/suggestiontypes");
    }

    getById(id) {
        return http.get(`/suggestiontypes/${id}`);
    }

    create(data) {
        return http.post("/suggestiontypes", data);
    }

    update(id, data) {
        return http.put(`/suggestiontypes/${id}`, data);
    }

    delete(id) {
        return http.delete(`/suggestiontypes/${id}`);
    }
}

export default new SuggestionTypesApiService();