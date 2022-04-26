import http from "./http-common"

class UsersApiService {
    getAllUsers() {
        return http.get(`/users`);
    }

    getUserId(id) {
        return http.get(`/users/${id}`);
    }

    createNewUser(data) {
        return http.post(`/users`, data);
    }

    assignUserToUserType(userId, userTypeId) {
        return http.post(`/users/userstypes/${userTypeId}/users/${userId}`);
    }

    updateUser(id, data) {
        return http.put(`/users/${id}`, data);
    }

    deleteUser(id) {
        return http.delete(`/users/${id}`);
    }

    unassignUserToUserType(userId, userTypeId) {
        return http.delete(`/users/userstypes/${userTypeId}/users/${userId}`);
    }
}

export default new UsersApiService();