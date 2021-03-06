import axios from 'axios';
import *as Actiontype from './../constansts/boards';

export default function apiColler(endpoin,method='GET',body){
    return(
        axios({
            method:method,
            url:`${Actiontype.URL_API}/${endpoin}`,
            data:body
        }).catch(err=>{
            console.log(err);
        })
    );
};