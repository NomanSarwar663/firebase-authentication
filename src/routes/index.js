import { useRoutes } from 'react-router-dom';
import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MainLayout from 'layout/MainLayout';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/authentication/authentication3/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('views/authentication/authentication3/Register3')));

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/home')));
const SamplePage = Loadable(lazy(() => import('views/SamplePage')));

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([
        {
            path: '/',
            element: <MinimalLayout />,
            children: [
                {
                    path: '/login',
                    element: <AuthLogin3 />
                },
                {
                    path: '/register',
                    element: <AuthRegister3 />
                }
            ]
        },
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <DashboardDefault />
                },
                {
                    path: '/sample-page',
                    element: <SamplePage />
                }
            ]
        }
    ]);
}
