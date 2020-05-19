import * as types from './../constansts/boards';
// import { toast } from 'react-toastify';
const initialState = {
    showimg: [],
    img: null
};

const imgReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_IMAGE:
            const showimg = action.data;
            return { ...state, showimg: showimg }

        case types.ADD_FILE_IMG:
            console.log(action.img);
            return { ...state, img: action.img.url }
        // state = action.showimg;
        // return [...state];
        default:
            return state
    }

}
export default imgReducer;