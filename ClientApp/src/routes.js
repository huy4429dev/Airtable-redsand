import React from 'react';
import Sigup from './components/account/Sigup';
import Login from './components/account/Login';
import HeaderPage from './pages/header/HeaderPage';
import Boards from './components/boards/Boards';
const routes =[
    {
        path:'/login',
        exact:false,
        main:()=> <Login />
    },
    {
        path:'/sigup',
        exact:false,
        main:()=> <Sigup/>
    },
    {
        path:'/home',
        exact:false,
        main:()=> <HeaderPage/>
    },
    {
        path:'/boards',
        exact:false,
        main:()=> <Boards/>
    }
];

export default routes;