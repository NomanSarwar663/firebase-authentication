import axios from 'utils/axios';
import { errorResponse } from 'store/constant';

// For Admin
export const getAllDevicesAPI = async (params) => {
    try {
        const res = await axios.get(`/devices/all?${params}`);

        return res.data;
    } catch (error) {
        return Promise.reject((error && error) || errorResponse.message);
    }
};

export const getDeviceDetailsAPI = async (id) => {
    try {
        const res = await axios.get(`/devices/${id}`);

        return res.data;
    } catch (error) {
        return Promise.reject((error && error) || errorResponse.message);
    }
};

export const addDeviceAPI = async (body) => {
    try {
        const res = await axios.post(`/devices/add`, body);

        return res.data;
    } catch (error) {
        return Promise.reject((error && error) || errorResponse.message);
    }
};

export const registerDeviceAPI = async (id, body) => {
    try {
        const res = await axios.post(`/devices/${id}/register`, body);

        return res.data;
    } catch (error) {
        return Promise.reject((error && error) || errorResponse.message);
    }
};

export const toggleDeviceStatusAPI = async (id) => {
    try {
        const res = await axios.post(`/devices/${id}/toggle`);

        return res.data;
    } catch (error) {
        return Promise.reject((error && error) || errorResponse.message);
    }
};

export const removeDeviceAPI = async (id) => {
    try {
        const res = await axios.post(`/devices/${id}/remove`);

        return res.data;
    } catch (error) {
        return Promise.reject((error && error) || errorResponse.message);
    }
};

// For User
export const getDeviceSettingAPI = async () => {
    try {
        const res = await axios.get(`/devices/device-setting`);

        return res.data;
    } catch (error) {
        return Promise.reject((error && error) || errorResponse.message);
    }
};

export const updateDeviceSettingAPI = async (body) => {
    try {
        const res = await axios.post(`/devices/device-setting/update`, body);

        return res.data;
    } catch (error) {
        return Promise.reject((error && error) || errorResponse.message);
    }
};
