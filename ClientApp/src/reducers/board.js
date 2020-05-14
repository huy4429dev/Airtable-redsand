import * as types from './../constansts/boards';
import { toast } from 'react-toastify';
const initialState = {
    project: [],
    img: null,
    showimg: [],
    projectRecently: []
}

const boardReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_PROJECT:
            return { ...state, project: action.project }

        case types.ADD_PROJECT:
            state.project.push(action.project)
            toast.success("Create success");
            return { ...state }
            
            // project Recently
        case types.SHOW_PROJECT_RECENTLY:
            return { ...state, projectRecently: action.projectRecently }

        case types.ADD_PROJECT_RECENTLY:
            state.projectRecently.push(action.projectRecently)
            return{...state}

        case types.ADD_FILE_IMG:
            // toast.success("Create success");   
            // console.log(action.img)       
            return { ...state, img: action.img.url }
        default:
            return state

    }

}
export default boardReducer;