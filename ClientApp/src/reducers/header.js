import * as types from './../constansts/header';

const initialState = {
    showModalAddProject: false
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
        

        default:
            return state
    }
}

export default headerReducer;
