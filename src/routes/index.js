import React, { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

// Components
import Loadable from 'ui-component/Loadable';

// Layouts
import MainLayout from 'layout/MainLayout';
import MinimalLayout from 'layout/MinimalLayout';

// Auth Guards
import AdminAuthGuard from 'authguard/adminAuthGuard';
import Protected from 'authguard/protected';
import UserAuthGuard from 'authguard/userAuthGuard';

// Auth Pages
// const Register = Loadable(lazy(() => import('views/Register')));
// const VerifyEmail = Loadable(lazy(() => import('views/VerifyEmail')));
// const Login = Loadable(lazy(() => import('views/Login')));
// const ForgotPassword = Loadable(lazy(() => import('views/ForgotPassword')));

// // Profile
// import Profile from 'views/Profile';
// import EditProfile from 'views/EditProfile';
// import ChangePassword from 'views/ChangePassword';

// // User
// import Device from 'views/user/Device';
// import Credits from 'views/user/Credits';
// import Packages from 'views/user/Packages';

// // Admin
// import UserMangement from 'views/admin/UserMangement';
// import DeviceManagement from 'views/admin/DeviceManagement';
// import PackagesManagement from 'views/admin/PackageManagement';
// import UserDetail from 'views/admin/UserDetails';
// import DeviceDetail from 'views/admin/DeviceDetails';

// // General
// import PaymentSuccess from 'views/PaymentSuccess';
// import PaymentFailure from 'views/PaymentFailure';
// import PrivacyPolicy from 'views/PrivacyPolicy';
// import TermsAndConditions from 'views/TermsAndConditions';
// import Page404 from 'views/Page404';

import home from 'views/home';

// ==============================|| ROUTINGs ||============================== //

export default function Routes() {
    return useRoutes([
        // {
        //     path: '/',
        //     element: (
        //         <Protected>
        //             <MinimalLayout />
        //         </Protected>
        //     ),
        //     children: [
        //         {
        //             path: '/register',
        //             element: <Register />
        //         },
        //         {
        //             path: '/verify-email',
        //             element: <VerifyEmail />
        //         },
        //         {
        //             path: '/login',
        //             element: <Login />
        //         },
        //         {
        //             path: '/forgot',
        //             element: <ForgotPassword />
        //         },
        //         {
        //             path: '/',
        //             element: <Navigate to="/login" replace />
        //         }
        //     ]
        // },
        // {
        //     path: '/dashboard',
        //     element: (
        //         <UserAuthGuard>
        //             <MainLayout />
        //         </UserAuthGuard>
        //     ),
        //     children: [
        //         {
        //             path: '/dashboard',
        //             element: <Navigate to="/dashboard/device" replace />
        //         },
        //         {
        //             path: '/dashboard/device',
        //             element: <Device />
        //         },
        //         {
        //             path: '/dashboard/credits',
        //             element: <Credits />
        //         },
        //         {
        //             path: '/dashboard/packages',
        //             element: <Packages />
        //         },
        //         {
        //             path: '/dashboard/profile',
        //             element: <Profile />
        //         },
        //         {
        //             path: '/dashboard/edit-profile',
        //             element: <EditProfile />
        //         },
        //         {
        //             path: '/dashboard/change-password',
        //             element: <ChangePassword />
        //         }
        //     ]
        // },
        // {
        //     path: '/dashboard/admin',
        //     element: (
        //         <AdminAuthGuard>
        //             <MainLayout />
        //         </AdminAuthGuard>
        //     ),
        //     children: [
        //         {
        //             path: '/dashboard/admin',
        //             element: <Navigate to="/dashboard/admin/user-management" replace />
        //         },
        //         {
        //             path: '/dashboard/admin/user-management',
        //             element: <UserMangement />
        //         },
        //         {
        //             path: '/dashboard/admin/user-management/:id',
        //             element: <UserDetail />
        //         },
        //         {
        //             path: '/dashboard/admin/device-management',
        //             element: <DeviceManagement />
        //         },
        //         {
        //             path: '/dashboard/admin/device-management/:id',
        //             element: <DeviceDetail />
        //         },
        //         {
        //             path: '/dashboard/admin/packages-management',
        //             element: <PackagesManagement />
        //         },
        //         {
        //             path: '/dashboard/admin/profile',
        //             element: <Profile />
        //         },
        //         {
        //             path: '/dashboard/admin/edit-profile',
        //             element: <EditProfile />
        //         },
        //         {
        //             path: '/dashboard/admin/change-password',
        //             element: <ChangePassword />
        //         }
        //     ]
        // },
        {
            path: '/',
            element: <MinimalLayout />,
            children: [
                // {
                //     path: '/privacy-policy',
                //     element: <PrivacyPolicy />
                // },
                // {
                //     path: '/terms-and-condition',
                //     element: <TermsAndConditions />
                // },
                // {
                //     path: '/payment/success',
                //     element: <PaymentSuccess />
                // },
                // {
                //     path: '/payment/failure',
                //     element: <PaymentFailure />
                // },
                // { path: '*', element: <Navigate to="/404" replace /> },
                // {
                //     path: '/404',
                //     element: <Page404 />
                // }
                {
                    path: '/',
                    element: <home />
                }
            ]
        }
    ]);
}
