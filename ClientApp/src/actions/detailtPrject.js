import * as types from './../constansts/detailtProject';
import { toast } from 'react-toastify';

export const handleShowFormADDlistTask = () => {
    return {
        type :  types.SHOW_FORM_ADD_LIST_TASK
    }
}
// show form add list task

export const handleHideFormAddListTask = () => {
    return {
        type :  types.HIDE_FORM_ADD_LIST_TASK
    }
}
// hide form add list task

export const handleShowFormAddTask = (id) => {
    return {
        type :  types.SHOW_FORM_ADD_TASK,
        id
    }
}
// show form add task

export const handleHideFormAddTask = () => {
    return {
        type :  types.HIDE_FORM_ADD_TASK,
    }
}
// show form add task

export const handleShowModalDetailtTask = () => {
    return {
        type :  types.SHOW_MODAL_DETAIL_TASK
    }
}
// show modal detailt task

export const handleHideModalDetailtTask = () => {
    return {
        type :  types.HIDE_MODAL_DETAIL_TASK
    }
}
// show modal detailt task

export const handleHideModalAddUser = () => {
    return {
        type :  types.HIDE_MODAL_ADD_USER
    }
}
// hide modal add user

export const handleShowModalAddUser = () => {
    return {
        type :  types.SHOW_MODAL_ADD_USER
    }
}
// show modal add user

export const handleShowModalDeadlineTask  = () => {
    return {
        type :  types.SHOW_MODAL_DEADLINE_TASK
    }
}
// show modal deadline task

export const handleHideModalDeadlineTask  = () => {
    return {
        type :  types.HIDE_MODAL_DEADLINE_TASK
    }
}
// show modal deadline task

export const handleShowModalAddUserTask  = () => {
    return {
        type :  types.SHOW_MODAL_ADD_USER_TASK
    }
}
// show modal add user task

export const handleHideModalAddUserTask  = () => {
    return {
        type :  types.HIDE_MODAL_ADD_USER_TASK
    }
}

// show modal add user task

export const handleAddListTask = (data) =>{
    return {
        url:`${types.API_ENDPOINT}/${types.URL_LIST_TASK}`,
        method:types.API_METHOD_POST,
        data:data,
        onSuccess:types.ADD_LIST_TASK_SUCCESS,
        onError:types.ADD_LIST_TASK_FAILE
    }
}
// add list task 

export const getListTask = (userId) =>{
    return {
        url:`${types.API_ENDPOINT}/${types.URL_LIST_TASK}?projectId=${userId}`,
        method:types.API_METHOD_GET,
        onSuccess:types.GET_LIST_TASK_SUCCESS,
        onError:types.GET_LIST_TASK_FAILE
    }
}

// get list task

export const handleAddTask = (task) =>{
    return {
        url:`${types.API_ENDPOINT}/${types.URL_TASK}`,
        data:task,
        method:types.API_METHOD_POST,
        onSuccess:types.ADD_TASK_SUCCESS,
        onError:types.ADD_TASK_FAILE
    }
}
// add task
 

// add attachment
 export const handleShowModalAddAttchment= (name,url)=>{

     return { 
         url:`${types.API_ENDPOINT}/${types.URL_TASK}`,
         method:types.API_METHOD_POST,
         onSuccess:types.SHOW_MODAL_ADD_ATTACHMENT,
     
        }
 }

 
