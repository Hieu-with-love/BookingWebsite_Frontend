import {api} from './apiConfig'

export const getDiscounts = async () => {
    try{
        const response = await api.get('/partner/vouchers')
        return response.data
    } catch (error) {
        console.error('Error fetching discounts:', error)
        throw error
    }
}

export const getDiscountById = async (discountId) => {
    try{
        const response = await api.get(`/partner/vouchers/${discountId}`)
        return response.data
    } catch (error) {
        console.error('Error fetching discount by ID:', error)
        throw error
    }
}

export const createDiscount = async (discountData) => {
    try{
        const response = await api.post('/partner/vouchers/create', discountData)
        return response.data
    } catch (error) {
        console.error('Error creating discount:', error)
        throw error
    }
}

export const updateDiscount = async (discountId, discountData) => {
    try{
        const response = await api.put(`/partner/vouchers/update/${discountId}`, discountData)
        return response.data
    } catch (error) {
        console.error('Error updating discount:', error)
        throw error
    }
}

export const deleteDiscount = async (discountId) => {
    try{
        const response = await api.delete(`/partner/vouchers/delete/${discountId}`)
        return response.data
    } catch (error) {
        console.error('Error deleting discount:', error)
        throw error
    }
}