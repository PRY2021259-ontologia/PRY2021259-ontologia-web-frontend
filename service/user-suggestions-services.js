import http from "./http-common"

class UserSuggestionsApiService {
    getAllUserSuggestions() {
        return http.get(`/usersuggestions`);
    }

    getUserSuggestionId(userSuggestionId) {
        return http.get(`/usersuggestions/${userSuggestionId}`);
    }

    createNewUserSuggestion(data) {
        return http.post(`/usersuggestions`, data);
    }

    assignUserSuggestionToUser(userId, userSuggestionId) {
        return http.post(`/users/${userId}/usersuggestions/${userSuggestionId}`);
    }

    assignUserSuggestionToUserType(userSuggestionId, suggestionTypeId) {
        return http.post(`/suggestionstypes/${suggestionTypeId}/usersuggestions/${userSuggestionId}`);
    }

    deleteUserSuggestion(userSuggestionId) {
        return http.delete(`/usersuggestions/${userSuggestionId}`);
    }

    unassignUserSuggestionToUser(userId, userSuggestionId) {
        return http.delete(`/users/${userId}/usersuggestions/${userSuggestionId}`);
    }

    unassignUserSuggestionToUserType(userSuggestionId, suggestionTypeId) {
        return http.delete(`/suggestionstypes/${suggestionTypeId}/usersuggestions/${userSuggestionId}`);
    }
}

export default new UserSuggestionsApiService();