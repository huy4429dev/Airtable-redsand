import * as types from './../constansts/user';
import { toast } from 'react-toastify';

const initialState = {
    sigin : false,
    login : false
}

const  userReducer = (state = initialState, action) => {
    switch ( action.type) {

    case types.SIGIN_SUCCESS:
        toast.success("Đăng ký thành công");
        return { ...state,
                sigin : true
            }

    case types.SIGIN_ERROR: 
        toast.error("Đăng ký không thành công");
        return { ...state}

    case types.LOGIN_SUCCESS:
        toast.success("Đăng nhập thành công");
        const token = action.data.access_token;
        const userId = action.data.userId;
        localStorage.setItem("token",token);
        localStorage.setItem("userId",userId);
        return { ...state,
                login : true
            }
    
    case types.LOGIN_ERROR: 
        toast.error("Đăng nhập không thành công");
        return { ...state}
    
    default:
        return state
    }
}

export default  userReducer;