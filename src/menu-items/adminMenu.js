// assets
import { IconShieldLock } from '@tabler/icons';
// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const admin = {
    id: 'admin',
    title: 'Management',
    type: 'group',
    children: [
        {
            id: 'user-management',
            title: 'User Management',
            type: 'item',
            url: '/dashboard/admin/user-management',
            icon: IconShieldLock,
            breadcrumbs: false
        },
        {
            id: 'device-management',
            title: 'Device Management',
            type: 'item',
            url: '/dashboard/admin/device-management',
            icon: IconShieldLock,
            breadcrumbs: false
        },
        {
            id: 'package-management',
            title: 'Package Management',
            type: 'item',
            url: '/dashboard/admin/packages-management',
            icon: IconShieldLock,
            breadcrumbs: false
        }
    ]
};

export default admin;
