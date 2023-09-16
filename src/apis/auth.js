import axios from 'utils/axios';
import { errorResponse } from 'store/constant';

export const registerAPI = async (body, invitationToken) => {
    try {
        const res = await axios.post(`/auth/register?invitationToken=${invitationToken}`, body);
        return res.data;
    } catch (error) {
        return Promise.reject((error && error) || errorResponse.message);
    }
};

export const verifyEmailAPI = async (body) => {
    try {
        const res = await axios.post('/auth/verify-email', body);

        return res.data;
    } catch (error) {
        return Promise.reject((error && error) || errorResponse.message);
    }
};

export const loginAPI = async (body) => {
    try {
        const res = await axios.post(`/auth/login`, body);

        return res.data;
    } catch (error) {
        return Promise.reject((error && error) || errorResponse.message);
    }
};

export const forgotAPI = async (body) => {
    try {
        const res = await axios.post('/auth/forgot-password', body);

        return res.data;
    } catch (error) {
        return Promise.reject((error && error) || errorResponse.message);
    }
};

export const verifyOtpAPI = async (body) => {
    try {
        const res = await axios.post('/auth/verify-otp', body);

        return res.data;
    } catch (error) {
        return Promise.reject((error && error) || errorResponse.message);
    }
};

export const resetAPI = async (body) => {
    try {
        const res = await axios.post('/auth/reset-password', body);

        return res.data;
    } catch (error) {
        return Promise.reject((error && error) || errorResponse.message);
    }
};
