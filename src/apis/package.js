import axios from 'utils/axios';
import { errorResponse } from 'store/constant';

// For User and Admin
export const getAllPackagesAPI = async (params) => {
    try {
        const res = await axios.get(`/packages/all?${params}`);

        return res.data;
    } catch (error) {
        return Promise.reject((error && error) || errorResponse.message);
    }
};

export const getPackageDetailsAPI = async (id) => {
    try {
        const res = await axios.get(`/packages/${id}`);

        return res.data;
    } catch (error) {
        return Promise.reject((error && error) || errorResponse.message);
    }
};

// For Admin
export const createPackageAPI = async (body) => {
    try {
        const res = await axios.post(`/packages/create`, body);

        return res.data;
    } catch (error) {
        return Promise.reject((error && error) || errorResponse.message);
    }
};

export const updatePackageAPI = async (id, body) => {
    try {
        const res = await axios.post(`/packages/${id}/update`, body);

        return res.data;
    } catch (error) {
        return Promise.reject((error && error) || errorResponse.message);
    }
};

export const togglePackageStatusAPI = async (id) => {
    try {
        const res = await axios.post(`/packages/${id}/toggle`);

        return res.data;
    } catch (error) {
        return Promise.reject((error && error) || errorResponse.message);
    }
};

export const deletePackageAPI = async (id) => {
    try {
        const res = await axios.post(`/packages/${id}/delete`);

        return res.data;
    } catch (error) {
        return Promise.reject((error && error) || errorResponse.message);
    }
};

// For User
export const purchasePackageAPI = async (id) => {
    try {
        const res = await axios.post(`/packages/${id}/purchase`);

        return res.data;
    } catch (error) {
        return Promise.reject((error && error) || errorResponse.message);
    }
};
