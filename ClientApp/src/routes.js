import React from 'react';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Detailt from './pages/DetailtProject';
import Sigup from './components/account/Sigup';
import Login from './components/account/Login';
import HeaderPage from './pages/header/HeaderPage';
// import Boards from './pages/boards/Boards';
import BoardAdd from './pages/boards/BoardAdd';
import LoginbyGoogle from './components/account/LoginbyGoogle';
import FaceBook from './components/account/Facebook';
import Profile from './components/profile/Profile';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/detailt',
        exact: true,
        main: () => <Detailt />
    },
    {
        path: '/profile',
        exact: true,
        main: () => <Profile />
    },
    {
        path: '/add_project',
        exact: false,
        main: ({ history }) => <BoardAdd history={history} />
    },
    {
        path: '/login',
        exact: false,
        main: () => <Login />
    },
    // {
    //     path: '/boards',
    //     exact: false,
    //     main: ({ history }) => <Boards history={history} />
    // },
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
        path: '/google',
        exact: false,
        main: () => <LoginbyGoogle />
    },
    {
        path: '/facebook',
        exact: false,
        main: () => <FaceBook />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }

];

export default routes;