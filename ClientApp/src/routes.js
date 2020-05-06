import React from 'react';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Detailt from './pages/DetailtProject';

const routes =[
    {
        path:'/',
        exact:true,
        main:()=> <Home />
    },
    {
        path:'/detailt',
        exact:true,
        main:()=> <Detailt/>
    },
    {
        path:'',
        exact:false,
        main:()=> <NotFound/>
    }
];

export default routes;