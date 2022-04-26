import http from "./http-common"

class UserLoginApiService {
    getAllUserLogin() {
        return http.get(`/userlogins`);
    }

    getUserLoginId(id) {
        return http.get(`/userlogins/${id}`);
    }

    createNewUserLogin(data) {
        return http.post(`/userlogins`, data);
    }

    assignUserToUserLogin(userId, userLoginId) {
        return http.post(`/userlogins/users/${userId}/userlogins/${userLoginId}`);
    }

    updateUserLogin(id, data) {
        return http.put(`/userlogins/${id}`, data);
    }

    deleteUserHistory(id) {
        return http.delete(`/userlogins/${id}`);
    }

    unassignUserToUserLogin(userId, userLoginId) {
        return http.delete(`/userlogins/users/${userId}/userlogins/${userLoginId}`);
    }
}

export default new UserLoginApiService();