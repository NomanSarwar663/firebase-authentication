// assets
import { IconManualGearbox, IconShieldLock } from '@tabler/icons';
// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const settings = {
    id: 'user',
    // title: 'Settings',
    type: 'group',
    children: [
        {
            id: 'device',
            title: 'Device',
            type: 'item',
            url: '/dashboard/device',
            icon: IconShieldLock,
            breadcrumbs: false
        },
        {
            id: 'credits',
            title: 'Credits',
            type: 'item',
            url: '/dashboard/credits',
            icon: IconManualGearbox,
            breadcrumbs: false
        }
    ]
};

export default settings;
