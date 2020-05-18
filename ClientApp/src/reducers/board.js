import * as types from './../constansts/boards';
import { toast } from 'react-toastify';
const initialState = {
    project: [],
    // img: null,
    showimg: [],
    projectRecently: []
}

const boardReducer = (state = initialState, action) => {
    switch (action.type) {
        // case types.SHOW_PROJECT:
        //     return { ...state, project: action.project }

        //project
        case types.SHOW_PROJECT:
            const project = action.data;
            return { ...state, project: project }

        case types.ADD_PROJECT:
            // const project = action.data;
            return { ...state, project: state.project.concat(action.data) }

        // case types.ADD_PROJECT:
        //     state.project.push(action.project)
        //     toast.success("Create success");
        //     return { ...state }

        // project Recently
        case types.SHOW_PROJECT_RECENTLY:
            const projectRecently = action.data;
            return { ...state, projectRecently: projectRecently }

        case types.ADD_PROJECT_RECENTLY:
            state.projectRecently.push(action.projectRecently)
            return { ...state }
        //img
        // case types.ADD_FILE_IMG:
        //     // toast.success("Create success");   
        //     // console.log(action.img)       
        //     return { ...state, img: action.img.url }
        default:
            return state

    }

}
export default boardReducer;