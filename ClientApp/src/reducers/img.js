import * as types from './../constansts/boards';
// import { toast } from 'react-toastify';
const initialState = [];

const imgReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_IMAGE:
            state = action.showimg;
            return [...state];
        default:
            return state
    }

}
export default imgReducer;