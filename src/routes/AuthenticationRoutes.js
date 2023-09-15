import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

import MainLayout from 'layout/MainLayout';

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/authentication/authentication3/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('views/authentication/authentication3/Register3')));
const SamplePage = Loadable(lazy(() => import('views/SamplePage')));
// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/login',
            element: <AuthLogin3 />
        },
        {
            path: '/register',
            element: <AuthRegister3 />
        },
        {
            path: '/sample',
            element: <SamplePage />
        }
    ]
};

export default AuthenticationRoutes;
