import axios from 'utils/axios';
import { errorResponse } from 'store/constant';

// For User and Admin
export const getAllPackageLogsAPI = async (params) => {
    try {
        const res = await axios.get(`/package-purchased-Log/all?${params}`);

        return res.data;
    } catch (error) {
        return Promise.reject((error && error) || errorResponse.message);
    }
};

export const getPackageLogDetailsAPI = async (id) => {
    try {
        const res = await axios.get(`/package-purchased-Log/${id}`);

        return res.data;
    } catch (error) {
        return Promise.reject((error && error) || errorResponse.message);
    }
};
