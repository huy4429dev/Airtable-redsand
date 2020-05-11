import * as types from './../constansts/boards';
import { toast } from 'react-toastify';
const initialState = {
    project: [],
    img: null
}

const boardReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_PROJECT:
            return { state, project: action.project }

        case types.ADD_PROJECT:
            state.project.push(action.project)
            toast.success("Create success");
            return { ...state }

        case types.ADD_FILE_IMG:
            // toast.success("Create success");          
            return { ...state, img: action.img.dbPath }
        default:
            return state

    }

}
export default boardReducer;