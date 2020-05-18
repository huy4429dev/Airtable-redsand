import React from 'react';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Detailt from './pages/DetailtProject';
import Sigup from './components/account/Sigup';
import Login from './components/account/Login';
import HeaderPage from './pages/header/HeaderPage';
import Boards from './pages/boards/Boards';
import BoardAdd from './pages/boards/BoardAdd';
//import Profile from './components/profile/Profile';

const routes = [
    {
        path: '/detailt/:id.html',
        exact: true,
        main: ({ match }) => <Detailt match={match} />
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
    {
        path: '/boards',
        exact: false,
        main: () => <Boards />
    },
    {
        path: '/sigup',
        exact: false,
        main: () => <Sigup />
    },
    {
        path: '/home',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/',
        exact: true,
        main: ({ history }) => <Boards history={history} />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    },

];

export default routes;