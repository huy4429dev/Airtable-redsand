import * as types from './../constansts/header';

export const showModalAddProject = () => {
    return {
        type: types.SHOW_MODAL_ADD_PROJECT
    }
}

// show modal add project
export const hideModalAddProject = () => {
    return {
        type: types.HIDE_MODAL_ADD_PROJECT
    }
}

// hide modal add project