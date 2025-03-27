import { api } from "./apiConfig";

export const getHotels = async () => {
    try {
        const response = await api.get("/partner/hotels");
        return response.data;
    } catch (error) {
        return error.response ? error.response.data : error.message;
    }
}