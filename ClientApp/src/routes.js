import React from 'react';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Detailt from './pages/DetailtProject';
import Sigup from './components/account/Sigup';
import Login from './components/account/Login';
import HeaderPage from './pages/header/HeaderPage';
import Boards from './pages/boards/Boards';
import BoardAdd from './pages/boards/BoardAdd';
// import Index from './components/profile/Index';
import Profile from './components/profile/profile';
// import Index from './components/profile/Index';
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
        path:'/boards',
        exact:false,
        main:()=> <Boards/>
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
        path: '',
        exact: false,
        main: () => <NotFound />
    }, 
    {
        path: '/profile',
        exact: false,
        main: () => <Profile />
    },

];

export default routes;