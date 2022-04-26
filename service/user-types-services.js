import http from "./http-common"

class UserTypesApiService {
    getAllUsersTypes() {
        return http.get(`/userstypes`);
    }

    getUserTypeId(id) {
        return http.get(`/userstypes/${id}`);
    }

    createNewUserType(data) {
        return http.post(`/userstypes`, data);
    }

    updateUserType(id, data) {
        return http.put(`/userstypes/${id}`, data);
    }

    deleteUserType(id) {
        return http.delete(`/userstypes/${id}`);
    }
}

export default new UserTypesApiService();