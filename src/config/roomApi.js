import { api } from "./apiConfig"

export const getRooms = async () => {
    try {
        const response = await api.get("/customer/rooms");
        return response.data;
    } catch (error) {
        return error.response ? error.response.data : error.message;
    }
}