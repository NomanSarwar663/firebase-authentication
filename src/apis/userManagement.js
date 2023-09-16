import axios from 'utils/axios';
import { errorResponse } from 'store/constant';

// For User and Admin
export const getAllUsersAPI = async (params) => {
    try {
        const res = await axios.get(`/user-management/all?${params}`);

        return res.data;
    } catch (error) {
        return Promise.reject((error && error) || errorResponse.message);
    }
};

export const getUserDetailsAPI = async (id) => {
    try {
        const res = await axios.get(`/user-management/${id}`);

        return res.data;
    } catch (error) {
        return Promise.reject((error && error) || errorResponse.message);
    }
};

// For Admin
export const addUserAPI = async (body) => {
    try {
        const res = await axios.post(`/user-management/add`, body);

        return res.data;
    } catch (error) {
        return Promise.reject((error && error) || errorResponse.message);
    }
};

export const updateUserCreditsAPI = async (id, body) => {
    try {
        const res = await axios.post(`/user-management/${id}/update-credits`, body);

        return res.data;
    } catch (error) {
        return Promise.reject((error && error) || errorResponse.message);
    }
};

export const toggleUserStatusAPI = async (id) => {
    try {
        const res = await axios.post(`/user-management/${id}/toggle`);

        return res.data;
    } catch (error) {
        return Promise.reject((error && error) || errorResponse.message);
    }
};
