import * as types from './../constansts/header';

const initialState = {
    showModalAddProject: false,
    project_profile: []
}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.SHOW_MODAL_ADD_PROJECT:
            return {
                ...state,
                showModalAddProject: true
            }
        case types.HIDE_MODAL_ADD_PROJECT:
            return {
                ...state,
                showModalAddProject: false
            }
        case types.SHOW_PROFILE:
            const project_profile = action.data;
            return { ...state, project_profile: project_profile }

        default:
            return state
    }
}

export default headerReducer;
