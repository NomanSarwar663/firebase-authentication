import axios from 'utils/axios';
import { errorResponse } from 'store/constant';

// For User and Admin
export const getPrivacyPolicyAPI = async () => {
    try {
        const res = await axios.get(`/system/privacy-policy`);

        return res.data;
    } catch (error) {
        return Promise.reject((error && error) || errorResponse.message);
    }
};

export const getTermsAndConditionAPI = async () => {
    try {
        const res = await axios.get(`/system/terms-and-condition`);

        return res.data;
    } catch (error) {
        return Promise.reject((error && error) || errorResponse.message);
    }
};
