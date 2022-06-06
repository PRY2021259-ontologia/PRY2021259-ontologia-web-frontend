import axios from "axios";

export const baseUrl = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL_DEV,
    headers: {
        "Content-Type": "application/json"
    }
});