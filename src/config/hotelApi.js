import { api } from "./apiConfig";
import axios from 'axios';

const API_URL = 'http://localhost:8088/api/partner/hotels';

export const getHotels = async (page, size) => {
    try {
        const response = await api.get(`/partner/hotels?page=${page}&size=${size}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching hotels:', error);
        throw error;
    }
}

export const getHotelById = async (hotelId) => {
    try{
        const response = await api.get(`/partner/hotels/${hotelId}`);
        return response.data;
    }catch (error) {
        return error.response ? error.response.data : error.message;
    }
}

export const createHotel = async (hotelData) => {
    try {
        const token = localStorage.getItem('jwt');
        const response = await axios.post(`${API_URL}/create`, hotelData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating hotel:', error);
        throw new Error(error.response?.data || 'Failed to create hotel');
    }
}

export const updateHotelImages = async (hotelId, formData) => {
    try {
        const token = localStorage.getItem('jwt');
        const response = await axios.post(
            `${API_URL}/create/${hotelId}/images`,
            formData,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error uploading images:', error);
        throw new Error(error.response?.data || 'Failed to upload images');
    }
}

export const updateHotel = async (hotelId, hotelData) => {
    try{
        const response = await api.put(`/partner/hotels/update/${hotelId}`, hotelData);
        return response.data;
    }catch (error) {
        return error.response ? error.response.data : error.message;
    }
}

export const deleteHotel = async (hotelId) => {
    try{
        const response = await api.delete(`/partner/hotels/delete/${hotelId}`);
        return response.data;
    }catch (error) {
        return error.response ? error.response.data : error.message;
    }
}