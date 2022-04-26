import http from "./http-common"

class PlantDiseasesApiService {
    getAll() {
        return http.get("/plantdiseases");
    }

    getById(plantDiseaseId) {
        return http.get(`/plantdiseases/${plantDiseaseId}`);
    }

    create(data) {
        return http.post(`/plantdiseases`, data);
    }

    assignPlantDiseaseToCategoryDisease(categoryDiseasesId, plantDiseaseId) {
        return http.post(`/categorydiseases/${categoryDiseasesId}/plantdiseases/${plantDiseaseId}`);
    }

    delete(plantDiseaseId) {
        return http.delete(`/plantdiseases/${plantDiseaseId}`);
    }

    unassignPlantDiseaseToCategoryDisease(categoryDiseasesId, plantDiseaseId) {
        return http.delete(`/categorydiseases/${categoryDiseasesId}/plantdiseases/${plantDiseaseId}`);
    }
}

export default new PlantDiseasesApiService();