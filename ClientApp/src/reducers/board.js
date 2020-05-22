import * as types from './../constansts/boards';
import { toast } from 'react-toastify';
const initialState = {
    project: [],
    showimg: [],
    projectRecently: []
}

const boardReducer = (state = initialState, action) => {
    switch (action.type) {

        //project
        case types.SHOW_PROJECT:
            const project = action.data;
            return { ...state, project: project }
        case types.SHOW_PROJECT_ERROR:
            return{...state}

        case types.ADD_PROJECT:
            toast.success("Thêm thành công");
            return { ...state, project: state.project.concat(action.data) }
        case types.ADD_PROJECT_ERROR:
            return{...state}

        // project Recently
        case types.SHOW_PROJECT_RECENTLY:
            const projectRecently = action.data;
            return { ...state, projectRecently: projectRecently }
        case types.SHOW_PROJECT_RECENTLY_ERROR:
            return{...state}

        case types.ADD_PROJECT_RECENTLY:
            return{...state,projectRecently:state.projectRecently.concat(action.data)}
            case types.ADD_PROJECT_RECENTLY_ERROR:
                return{...state}
        default:
            return state

    }

}
export default boardReducer;