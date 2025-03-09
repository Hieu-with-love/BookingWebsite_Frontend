import axios from "axios";

const API_URL = "http://localhost:8088/api";

const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-type": "application/json"
    }
})

export const register = async (userData) => {
    try {
        const response = await api.post("/auth/signup", userData);
        return response.data;
    } catch (error) {
        return error.response ? error.response.data : error.message;
    }
}

export const login = async (userData) => {
    try {
        const response = await api.post("/auth/login", userData);
        return response.data;
    } catch (error) {
        return error.response ? error.response.data : error.message;
    }
}