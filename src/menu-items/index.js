import { useState, useEffect } from 'react';
import adminMenu from './adminMenu';
import userMenu from './userMenu';
import { useSelector } from 'react-redux';
import { roles } from 'constants/constants';
// ==============================|| MENU ITEMS ||============================== //

const GetMenuItems = () => {
    const [menus, setMenus] = useState([]);
    const [authentication, setAuthentication] = useState(false);
    const { user } = useSelector((state) => state.user);

    useEffect(() => {
        if (user?.role === roles.user) {
            setMenus([userMenu]);
            setAuthentication(true);
        } else if (user?.role === roles.admin) {
            setMenus([adminMenu]);
            setAuthentication(true);
        }
    }, [user]);

    if (authentication) {
        return {
            items: menus
        };
    }
};

export default GetMenuItems;
