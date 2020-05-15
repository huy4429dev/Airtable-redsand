import * as types from './../constansts/boards';
// import { toast } from 'react-toastify';
const initialState = {
    showimg:[]
};

const imgReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_IMAGE:
            const showimg=action.data;
            return {...state, showimg:showimg}

            // state = action.showimg;
            // return [...state];
        default:
            return state
    }

}
export default imgReducer;