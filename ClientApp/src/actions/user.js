import * as types from  './../constansts/user';
import callApi from './../apis/ajax';


export const siginUser = (user) =>{
    return {
        url:`${types.API_ENDPOINT}/${types.URL_USER}`,
        method:types.API_METHOD_POST,
        data: user,
        onSuccess:types.SIGIN_SUCCESS,
        onError:types.SIGIN_ERROR
    }
}

// sigin user 

export const loginUser = (user) =>{
    return {
        url:`${types.API_ENDPOINT}/${types.URL_LOGIN}`,
        method:types.API_METHOD_POST,
        data:user,
        onSuccess:types.LOGIN_SUCCESS,
        onError:types.LOGIN_ERROR
    }
}

// login user 