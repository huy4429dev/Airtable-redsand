import * as types from './../constansts/boards';
import callApi from './../apis/api';

// Show project
export const actShowProjectReques=(userId)=>{
    return dispatch=>{
        return callApi(`project?userId=${userId}`,'GET',null).then(res=>{
            dispatch (actShowProject(res.data))
        });
        
    }
}
export const actShowProject =(project)=>{
    return{
        type:types.SHOW_PROJECT,
        project
    }
}

//Show project recently
export const actShowProjectReccentlyRequest=(userId)=>{
    return dispatch=>{
        return callApi(`project-recently?userId=${userId}`,'GET',null).then(res=>{
            dispatch(actShowProjectReccently(res.data))
        })
    }
}

export const actShowProjectReccently = (projectRecently)=>{
    return{
        type:types.SHOW_PROJECT_RECENTLY,
        projectRecently
    }
}

//show image
export const actShowImageRequest=()=>{
    return dispatch=>{
        return callApi('background','GET',null).then(res=>{
            dispatch (actShowImage(res.data))
        });
    }
}
export const actShowImage =(showimg)=>{
    return{
        type:types.SHOW_IMAGE,
        showimg
    }
}

//add project
export const actAddProjectRequest=(userId, project)=>{
    return dispatch=>{
        return callApi(`project?userId=${userId}`,'POST',project).then(res=>{
            dispatch(actAddProject(res.data))
        })
    }
}

export const actAddProject = (project)=>{
    return{
        type:types.ADD_PROJECT,
        project
    }
}

//add project Recently
export const actAddRecentlyRequest=(projectRecently)=>{
    return dispatch=>{
        return callApi('project-recently','POST',projectRecently).then(res=>{
            dispatch(actAddRecently(res.data))
        })
    }
}
export const actAddRecently = (projectRecently)=>{
    return{
        type:types.ADD_PROJECT_RECENTLY,
        projectRecently
    }
}
//add file img
export const actAddFileRequest=(img)=>{
    return dispatch=>{
        return callApi('background','POST',img).then(res=>{
            dispatch(actAddFile(res.data))
        })
    }
}

export const actAddFile = (img)=>{
    return{
        type:types.ADD_FILE_IMG,
        img
    }
}