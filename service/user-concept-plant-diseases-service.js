import http from "./http-common"

class UserConceptPlantDiseasesApiService {
    getAllUserConceptsByPlantDiseaseId(plantDisesaesId) {
        return http.get(`/plantdiseases/${plantDisesaesId}/userconcepts`);
    }

    getAllPlantDiseasesByUserConceptId(userConceptId) {
        return http.get(`/userconcepts/${userConceptId}/plantdiseases`);
    }

    assignUserConceptToPlanDisease(userConceptId, plantDisesaesId) {
        return http.post(`/userconcepts/${userConceptId}/plantdiseases/${plantDisesaesId}`);
    }

    unassignUserConceptToPlanDisease(userConceptId, plantDisesaesId) {
        return http.delete(`/userconcepts/${userConceptId}/plantdiseases/${plantDisesaesId}`);
    }
}

export default new UserConceptPlantDiseasesApiService();