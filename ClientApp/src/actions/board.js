import * as types from './../constansts/boards';
import callApi from './../apis/api';

// Show project
export const actShowProjectReques = (userId) => {
    return {
        url: `${types.URL_API}/${types.URL_PROJECT}?userId=${userId}`,
        method: types.API_METHOT_GET,
        onSuccess: types.SHOW_PROJECT,
        // onError:types.SHOW_PROJECT_ERROR
    }
}
//Show project recently

export const actShowProjectReccentlyRequest = (userId) => {
    return {
        url: `${types.URL_API}/${types.URL_PROJECT_RECENTLY}?userId=${userId}`,
        method: types.API_METHOT_GET,
        onSuccess: types.SHOW_PROJECT_RECENTLY,
        // onError: types.SHOW_PROJECT_RECENTLY_ERROR
    }
}

//show image
export const actShowImageRequest = () => {
    return {
        url: `${types.URL_API}/${types.URL_BACKGROUGT}`,
        method: types.API_METHOT_GET,
        onSuccess: types.SHOW_IMAGE,
        onError: types.SHOW_IMAGE_ERROR
    }
}

//add project

export const actAddProjectRequest = (userId, project) => {
    return {
        url: `${types.URL_API}/${types.URL_PROJECT}?userId=${userId}`,
        data: project,
        method: types.API_METHOT_POST,
        onSuccess: types.ADD_PROJECT,
        onError: types.ADD_PROJECT_ERROR
    }
}

//add project Recently

export const actAddRecentlyRequest = (projectRecently)=>{
    return{
        url:`${types.URL_API}/${types.URL_PROJECT_RECENTLY}`,
        data:projectRecently,
        method:types.API_METHOT_POST,
        onSuccess:types.ADD_PROJECT_RECENTLY,
        onError:types.ADD_PROJECT_RECENTLY_ERROR
    }
}

//add file img

export const actAddFileRequest = (img) => {
    return dispatch => {
        return callApi('background', 'POST', img).then(res => {
            dispatch(actAddFile(res.data))
        })
    }
}

export const actAddFile = (img) => {
    return {
        type: types.ADD_FILE_IMG,
        img
    }
}