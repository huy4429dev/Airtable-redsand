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

export const FectProfile = (userId) => {
    
    return {
        url: `${types.URL_API}/${types.URL_PROFILE}/${userId}`,
        method: types.API_METHOT_GET,
        onSuccess: types.SHOW_PROFILE
    }
}
