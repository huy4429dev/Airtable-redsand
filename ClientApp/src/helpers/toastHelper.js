import { toast } from 'react-toastify';

export const toastError = error =>{
    console.log('vao');
    
    let message = null;
    if( typeof error  === 'object' || error.message ){
        ({message} = error);
    }
    if( message !== null && typeof message !== 'undefined' && message !== ''){
        toast.error(message);
    }
    console.log('vao nua');
    
}

export const toastSuccess = success =>{
    let message = null;
    if( typeof success  === 'object' || success.message ){
        ({message} = success);
    }
    if( message !== null && typeof message !== 'undefined' && message !== ''){
        toast.success(message);
    }
}