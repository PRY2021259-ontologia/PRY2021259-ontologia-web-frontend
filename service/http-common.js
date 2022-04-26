import axios from "axios";

export default axios.create({
    baseURL: "https://backend-ontologia.azurewebsites.net/api",
    headers: {"Content-type": "application/json"}
});