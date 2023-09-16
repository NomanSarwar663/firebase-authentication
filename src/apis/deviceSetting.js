import axios from 'utils/axios';
import { errorResponse } from 'store/constant';

export const getDeviceSettingAPI = async () => {
    try {
        const res = await axios.get(`/devices/device-setting`);

        return res.data;
    } catch (error) {
        const { status, message } = error;
        return {
            ...errorResponse,
            statusCode: status || errorResponse.statusCode,
            message: message || errorResponse.message
        };
    }
};

export const updateDeviceSettingAPI = async (body) => {
    try {
        const res = await axios.post(`/devices/device-setting/update`, body);

        return res.data;
    } catch (error) {
        const { status, message } = error;
        return {
            ...errorResponse,
            statusCode: status || errorResponse.statusCode,
            message: message || errorResponse.message
        };
    }
};
