import moment from 'moment';
import { roles } from 'constants/constants';
import config from 'config';

export const calculatePercentage = (total, value) => {
    const percentage = (value / total) * 100;

    if (percentage > 100) return 100;

    return percentage;
};

export const formatDate = (date) => moment(date).format('ddd DD, MMM, YYYY');

export const formatTime = (date) => moment(date).format('HH:mm');

export const formatDateAndTime = (date) => moment(date).format('ddd DD, MMM, HH:mm');

export const formatName = (name) => {
    if (name === '' || name === null) {
        return '';
    }

    const splitted = name?.split(' ');
    return splitted?.map((word) => word[0]?.toUpperCase() + word?.slice(1)?.toLowerCase())?.join(' ') ?? '';
};

export const formatTitle = (title) => {
    if (title === '' || title === null) {
        return '';
    }

    const splitted = title?.split(' ');
    return splitted?.map((word) => word[0]?.toUpperCase() + word?.slice(1)?.toLowerCase())?.join(' ') ?? '';
};

export const formatContent = (content) => {
    if (content === '' || content === null) {
        return '';
    }

    const splitted = content?.split('.');
    return (
        splitted
            ?.map((sentence) => {
                sentence = sentence?.trim();
                return sentence[0]?.toUpperCase() + sentence?.slice(1);
            })
            .join('. ') ?? ''
    );
};

export const getDefaultPath = (role) => {
    switch (role) {
        case roles.admin:
            return config.adminDashboardDefaultPath;

        case roles.user:
            return config.userDashboardDefaultPath;

        default:
            return null;
    }
};
