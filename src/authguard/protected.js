import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDecryptedToken } from 'store/authActions';
import { getDefaultPath } from 'helpers/functions';

const Protected = ({ children }) => {
    let navigate = useNavigate();

    useEffect(() => {
        const decoded = getDecryptedToken();

        const defaultPath = getDefaultPath(decoded?.role);
        if (defaultPath) {
            return navigate(defaultPath, { replace: true });
        }
    }, []);

    return children;
};

export default Protected;
