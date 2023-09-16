import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { getProfileAction } from 'store/profileActions';
import { useDispatch, useSelector } from 'react-redux';
import { getToken, removeToken } from 'store/authActions';
import { roles } from 'constants/constants';

const UserAuthGuard = ({ children }) => {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const [authentication, setAuthentication] = useState(false);
    const { user } = useSelector((state) => state.user);
    useEffect(() => {
        const authenticate = async () => {
            const token = getToken();
            try {
                const decodedToken = jwt_decode(token);
                if (!decodedToken) {
                    throw new Error('Something went wrong');
                }

                if (user?.role === roles.user || decodedToken.role === roles.user) {
                    setAuthentication(true);
                } else {
                    throw new Error('Something went wrong');
                }

                dispatch(getProfileAction())
                    .then(() => {})
                    .catch((err) => {
                        setAuthentication(false);
                        removeToken();
                        return navigate('/login', { replace: true });
                    });
            } catch (error) {
                setAuthentication(false);
                removeToken();
                return navigate('/login', { replace: true });
            }
        };
        authenticate();
    }, []);

    if (authentication) {
        return children;
    }
};

export default UserAuthGuard;
