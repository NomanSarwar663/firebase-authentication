import axios from 'utils/axios';
import { errorResponse } from 'store/constant';

export const getProfileAPI = async () => {
    try {
        const res = await axios.get('/profile');

        return res.data;
    } catch (error) {
        return Promise.reject((error && error) || errorResponse.message);
    }
};

export const updateProfileAPI = async (body) => {
    try {
        const res = await axios.post('/profile/update', body);

        return res.data;
    } catch (error) {
        return Promise.reject((error && error) || errorResponse.message);
    }
};

export const changePasswordAPI = async (body) => {
    try {
        const res = await axios.post('/profile/change-password', body);

        return res.data;
    } catch (error) {
        return Promise.reject((error && error) || errorResponse.message);
    }
};
