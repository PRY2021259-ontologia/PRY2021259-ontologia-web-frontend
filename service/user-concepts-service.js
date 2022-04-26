import http from "./http-common"

class UserConceptsApiService {
    getAllUserConcepts() {
        return http.get(`/userconcepts`);
    }

    getAllUserConceptsByUserConceptId(userConceptId) {
        return http.get(`/userconcepts/${userConceptId}`);
    }

    createNewUserConcept(data) {
        return http.post(`/userconcepts`, data);
    }

    assignUserConceptToUser(userId, userConceptId) {
        return http.post(`/users/${userId}/userconcepts/${userConceptId}`);
    }

    assignUserConceptToConceptType(userConceptId, conceptTypeId) {
        return http.post(`/concepttypes/${conceptTypeId}/userconcepts/${userConceptId}`);
    }

    deleteUserConcept(userConceptId) {
        return http.delete(`/userconcepts/${userConceptId}`);
    }

    unassignUserConceptToConceptType(userId, userConceptId) {
        return http.delete(`/users/${userId}/userconcepts/${userConceptId}`);
    }

    unassignUserConceptToConceptType(userConceptId, conceptTypeId) {
        return http.delete(`/concepttypes/${conceptTypeId}/userconcepts/${userConceptId}`);
    }
}

export default new UserConceptsApiService();