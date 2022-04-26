import http from "./http-common"

class UserHistoriesApiService {
    getAllUserHistories() {
        return http.get(`/userhistories`);
    }

    getUserHistoriesId(userHistoryId) {
        return http.get(`/userhistories/${userHistoryId}`);
    }

    createNewUserHistory(data) {
        return http.post(`/userhistories`, data);
    }

    assignUserHistoryToUser(userHistoryId, userId) {
        return http.post(`/userhistories/${userHistoryId}/userhistories/${userId}`);
    }

    deleteUserHistory(userHistoryId) {
        return http.delete(`/userhistories/${userHistoryId}`);
    }

    unassignUserHistoryToUser(userHistoryId, userId) {
        return http.delete(`/userhistories/${userHistoryId}/userhistories/${userId}`);
    }
}

export default new UserHistoriesApiService();