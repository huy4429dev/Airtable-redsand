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

//add file img
export const actAddFileRequest=(img)=>{
    return dispatch=>{
        return callApi('upload','POST',img).then(res=>{
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