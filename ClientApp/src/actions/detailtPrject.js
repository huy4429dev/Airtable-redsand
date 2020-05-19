import * as types from './../constansts/detailtProject';
import { toast } from 'react-toastify';

export const handleShowFormADDlistTask = () => {
    return {
        type: types.SHOW_FORM_ADD_LIST_TASK
    }
}
// show form add list task

export const handleHideFormAddListTask = () => {
    return {
        type: types.HIDE_FORM_ADD_LIST_TASK
    }
}
// hide form add list task

export const handleShowFormAddTask = (id) => {
    return {
        type: types.SHOW_FORM_ADD_TASK,
        id
    }
}
// show form add task

export const handleHideFormAddTask = () => {
    return {
        type: types.HIDE_FORM_ADD_TASK,
    }
}
// show form add task

export const handleShowModalDetailtTask = (id) => {
    return {
        type: types.SHOW_MODAL_DETAIL_TASK,
        id
    }
}
// show modal detailt task

export const handleHideModalDetailtTask = () => {
    return {
        type: types.HIDE_MODAL_DETAIL_TASK
    }
}
// show modal detailt task

export const handleHideModalAddUser = () => {
    return {
        type: types.HIDE_MODAL_ADD_USER
    }
}
// hide modal add user

export const handleShowModalAddUser = () => {
    return {
        type: types.SHOW_MODAL_ADD_USER
    }
}
// show modal add user

export const handleShowModalDeadlineTask = () => {
    return {
        type: types.SHOW_MODAL_DEADLINE_TASK
    }
}
// show modal deadline task

export const handleHideModalDeadlineTask = () => {
    return {
        type: types.HIDE_MODAL_DEADLINE_TASK
    }
}
// show modal deadline task

export const handleShowModalAddUserTask = () => {
    return {
        type: types.SHOW_MODAL_ADD_USER_TASK
    }
}
// show modal add user task

export const handleHideModalAddUserTask = () => {
    return {
        type: types.HIDE_MODAL_ADD_USER_TASK
    }
}
// show modal add user task

export const handleAddListTask = (data) => {
    return {
        url: `${types.API_ENDPOINT}/${types.URL_LIST_TASK}`,
        method: types.API_METHOD_POST,
        data: data,
        onSuccess: types.ADD_LIST_TASK_SUCCESS,
        onError: types.ADD_LIST_TASK_FAILE
    }
}
// add list task 

export const getListTask = (userId) => {
    return {
        url: `${types.API_ENDPOINT}/${types.URL_LIST_TASK}?projectId=${userId}`,
        method: types.API_METHOD_GET,
        onSuccess: types.GET_LIST_TASK_SUCCESS,
        onError: types.GET_LIST_TASK_FAILE
    }
}
// get list task

export const handleAddTask = (task) => {
    return {
        url: `${types.API_ENDPOINT}/${types.URL_TASK}`,
        data: task,
        method: types.API_METHOD_POST,
        onSuccess: types.ADD_TASK_SUCCESS,
        onError: types.ADD_TASK_FAILE
    }
}
// add task


// trang 
export const handleAddAttachment = () => {
    return {

        type: types.ADD_ATTACHMENT_SUCCESS

    }
}
export const handleCloseAttachment = () => {
    return {
        type: types.ADD_ATTACHMENT_FAILE
    }
}


export const handleEditNameProject = (idProject, project) => {
    return {
        url: `${types.API_ENDPOINT}/${types.URL_PROJECT}/${idProject}`,
        data: project,
        method: types.API_METHOD_PUT,
        onSuccess: types.EDIT_PROJECT_SUCCESS,
        onError: types.EDIT_PROJECT_FAILE
    }
}
// edit project

export const getProject = (projectId) => {
    return {
        url: `${types.API_ENDPOINT}/${types.URL_PROJECT}/${projectId}`,
        method: types.API_METHOD_GET,
        onSuccess: types.GET_PROJECT_SUCCESS,
        onError: types.GET_PROJECT_FAILE
    }
}
// edit title project

export const handleEditTitleListTask = (data, id) => {
    return {
        url: `${types.API_ENDPOINT}/${types.URL_LIST_TASK}/${id}`,
        data: data,
        method: types.API_METHOD_PUT,
        onSuccess: types.EDIT_LIST_TASK_SUCCESS,
        onError: types.EDIT_LIST_TASK_FAILE
    }
}
// edit title listtask

export const getListTaskEdit = (id) => {
    return {
        url: `${types.API_ENDPOINT}/${types.URL_LIST_TASK}/${id}`,
        method: types.API_METHOD_GET,
        onSuccess: types.GET_LIST_TASK_EDIT_SUCCESS,
        onError: types.GET_LIST_TASK_EDIT_FAILE
    }
}
// get  listtask edit

export const handleGetProfileTask = (id) => {
    return {
        url: `${types.API_ENDPOINT}/${types.URL_TASK}/${id}`,
        method: types.API_METHOD_GET,
        onSuccess: types.GET_TASK_EDIT_SUCCESS,
        onError: types.GET_TASK_EDIT_FAILE
    }
}
// get  task edit

export const handleEditTitleTask = (data, id) => {
    return {
        url: `${types.API_ENDPOINT}/${types.URL_TASK}/${id}`,
        data: data,
        method: types.API_METHOD_PUT,
        onSuccess: types.EDIT_TITLE_SUCCESS,
        onError: types.EDIT_TITLE_FAILE
    }
}
// edit title  task

export const handleEditDescTask = (data, id) => {
    return {
        url: `${types.API_ENDPOINT}/${types.URL_TASK}/${id}`,
        data: data,
        method: types.API_METHOD_PUT,
        onSuccess: types.EDIT_TITLE_SUCCESS,
        onError: types.EDIT_TITLE_FAILE
    }
}
// edit DESC  task

export const handleChangeDeadlineTask = (data, id) => {
    return {
        url: `${types.API_ENDPOINT}/${types.URL_TASK}/${id}`,
        data: data,
        method: types.API_METHOD_PUT,
        onSuccess: types.EDIT_DEADLINE_TASK_SUCCESS,
        onError: types.EDIT_DEADLINE_TASK_FAILE
    }
}
// edit dealline  task

// add attachment into task- trang
export const saveAttachment = (data, id) => {
    return {
        url: `${types.API_ENDPOINT}/${types.URL_TASK}/${id}/attachment`,
        data: data,
        method: types.API_METHOD_POST,
        onSuccess: types.ADD_ATTACHMENT_SUCCESS,
        onError: types.ADD_ATTACHMENT_FAILE
    }
}
//get attachment -trang
export const getAllAttachment = (id) => {
    return {
        url: `${types.API_ENDPOINT}/${types.URL_TASK}/${id}/attachment`,
        method: types.API_METHOD_GET,
        onSuccess: types.ADD_ATTACHMENT_SUCCESS,
        onError: types.ADD_ATTACHMENT_FAILE

    }
}

    // DELETE ATTCHMENT
    export const deleteAttachment = (id,idAttachment) => {
        return {
            url: `${types.API_ENDPOINT}/${types.URL_TASK}/${id}/attachment=${idAttachment}`,
            method: types.API_METHOD_DELETE,
            onSuccess: types.ADD_ATTACHMENT_SUCCESS,
            onError: types.ADD_ATTACHMENT_FAILE
    

    }
}

// add comment into task
export const handleAddCommentTask = (data, id) => {
    return {
        url: `${types.API_ENDPOINT}/${types.URL_TASK}/${id}/comment`,
        data: data,
        method: types.API_METHOD_POST,
        onSuccess: types.ADD_COMMENT_TASK_SUCCESS,
        onError: types.ADD_COMMENT_TASK_FAILE
    }
}


export const handleDeleteListTask = (id) => {
    return {
        url: `${types.API_ENDPOINT}/${types.URL_LIST_TASK}/${id}`,
        method: types.API_METHOD_DELETE,
        onSuccess: types.DELETE_LIST_TASK_SUCCESS,
        onError: types.DELETE_LIST_TASK_FAILE
    }
}
// delete list task

export const getAllUser = () => {
    return {
        url: `${types.API_ENDPOINT}/${types.URL_USER}`,
        method: types.API_METHOD_GET,
        onSuccess: types.GET_ALL_USER_SUCCESS,
        onError: types.GET_ALL_USER_FAILE
    }
}
// delete list task
