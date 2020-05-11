import React from 'react';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Detailt from './pages/DetailtProject';
import Sigup from './components/account/Sigup';
import Login from './components/account/Login';
import HeaderPage from './pages/header/HeaderPage';
import Boards from './components/boards/Boards';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/detailt',
        exact: true,
        main: () => <Detailt/>
    },
    {
        path: '/login',
        exact: false,
        main: () => <Login />
    },
    {
        path: '/sigup',
        exact: false,
        main: () => <Sigup />
    },
    {
        path: '/home',
        exact: false,
        main: () => <HeaderPage />
    },
    {
        path: '/boards',
        exact: false,
        main: () => <Boards />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
];

export default routes;