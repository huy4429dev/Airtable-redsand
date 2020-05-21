import * as types from './../constansts/detailtProject';
import { toast } from 'react-toastify';

const initialState = {
    showFormAddListTask: false,
    showButtonAddListTask: true,
    hideFormAddTask: false,
    showButtonAddTask: true,
    showModalDetailtTask: false,
    hideModalAddUser: false,
    idListTask: null,
    showModalEditDeadlineTask: false,
    showModalAddUserTask: false,
    listTask: null,
    project: null,
    listTaskEdit: null,
    taskEdit: null,
    allUser: null,
    idTaskAddUser: null
}

const detailtProjectReducers = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {

        case types.SHOW_FORM_ADD_LIST_TASK:
            return { ...state, showFormAddListTask: true, showButtonAddListTask: false }

        case types.HIDE_FORM_ADD_LIST_TASK:
            return { ...state, showFormAddListTask: false, showButtonAddListTask: true }

        case types.SHOW_FORM_ADD_TASK:
            return { ...state, hideFormAddTask: true, idListTask: action.id }

        case types.HIDE_FORM_ADD_TASK:
            return { ...state, hideFormAddTask: false, idListTask: null }

        case types.SHOW_MODAL_DETAIL_TASK:
            return { ...state, showModalDetailtTask: true, idDetailtTask: action.id }

        case types.HIDE_MODAL_DETAIL_TASK:
            return { ...state, showModalDetailtTask: false, taskEdit: null }

        case types.HIDE_MODAL_ADD_USER:
            return { ...state, hideModalAddUser: false }

        case types.SHOW_MODAL_ADD_USER:
            return { ...state, hideModalAddUser: true }

        case types.SHOW_MODAL_DEADLINE_TASK:
            return { ...state, showModalEditDeadlineTask: true }

        case types.HIDE_MODAL_DEADLINE_TASK:
            return { ...state, showModalEditDeadlineTask: false }


        case types.SHOW_MODAL_ADD_USER_TASK:
            return { ...state, showModalAddUserTask: true, idTaskAddUser: action.id }

        case types.HIDE_MODAL_ADD_USER_TASK:
            return { ...state, showModalAddUserTask: false }

        case types.ADD_LIST_TASK_SUCCESS:
            const newListTask = [...state.listTask, action.data];
            return { ...state, showFormAddListTask: false, showButtonAddListTask: true, listTask: newListTask }

        case types.ADD_LIST_TASK_FAILE:
            return { ...state }

        case types.GET_LIST_TASK_SUCCESS:
            const listTask = action.data;
            return { ...state, listTask: listTask }

        case types.GET_LIST_TASK_FAILE:
            return { ...state }

        case types.ADD_TASK_SUCCESS:
            var task = action.data;
            index = state.listTask.findIndex(item => item.id == task.listTaskId);
            console.log(state.listTask);
            if (index >= 0) {
                state.listTask[index].tasks = [
                    ...state.listTask[index].tasks,
                    task
                ];
            }
            console.log(state.newListTask);

            return {
                ...state,
                hideFormAddTask: false,
                showButtonAddTask: true,
                idListTask: null,
                listTask: newListTask
            }




        case types.SHOW_MODAL_ATTACHMENT:
            return {
                ...state,
                showFormAttachment: true
            }

        case types.HIDE_MODAL_ATTACHMENT:
            return { ...state, showFormAttachment: false }


        case types.EDIT_PROJECT_SUCCESS:
            return { ...state }

        case types.EDIT_PROJECT_FAILE:
            return { ...state }

        case types.GET_PROJECT_SUCCESS:
            return { ...state, project: action.data }

        case types.GET_PROJECT_FAILE:
            return { ...state }

        case types.EDIT_LIST_TASK_SUCCESS:
            return { ...state }

        case types.EDIT_LIST_TASK_FAILE:
            return { ...state }

        case types.GET_LIST_TASK_EDIT_SUCCESS:
            return { ...state, listTaskEdit: action.data }

        case types.GET_LIST_TASK_EDIT_FAILE:
            return { ...state }

        case types.GET_TASK_EDIT_SUCCESS:
            return { ...state, taskEdit: action.data, showModalDetailtTask: true }

        case types.GET_TASK_EDIT_FAILE:
            return { ...state }

        case types.EDIT_TITLE_SUCCESS:
            var task = action.data;
            index = state.listTask.findIndex(item => item.id == task.listTaskId);
            var result = state.listTask[index].tasks.findIndex(item => item.id == task.id);
            if (result >= 0) {
                state.listTask[index].tasks[result] = task
            }
            return { ...state }

        case types.EDIT_TITLE_FAILE:
            return { ...state }

        case types.EDIT_DESC_TASK_SUCCESS:
            return { ...state, taskEdit: action.data }

        case types.EDIT_DESC_TASK_FAILE:
            return { ...state }

        case types.EDIT_DEADLINE_TASK_SUCCESS:
            const newDeadLine = {
                ...state.taskEdit,
                task: {
                    ...state.taskEdit.task,
                    deadLine: action.data.deadLine
                }
            }
            return { ...state, showModalEditDeadlineTask: false, taskEdit: newDeadLine }

        case types.EDIT_DEADLINE_TASK_FAILE:
            return { ...state }

        case types.ADD_ATTACHMENT_SUCCESS:
            const newAttach = {
                name: action.data.name,
                url: action.data.url,
                createdAt: action.data.createdAt,

            };
            const newTaskEdit1 = {
                ...state.taskEdit,
                attaches: [
                    ...state.taskEdit.attaches,
                    newAttach
                ]
            }
            return { ...state, taskEdit: newTaskEdit1 }

        case types.ADD_ATTACHMENT_FAILE:
            return { ...state }


        case types.ADD_COMMENT_TASK_SUCCESS:
            const comment = {
                content: action.data.content,
                fullname: null
            };
            const newTaskEdit = {
                ...state.taskEdit,
                comments: [
                    ...state.taskEdit.comments,
                    comment
                ]
            }
            return { ...state, taskEdit: newTaskEdit }

        case types.ADD_COMMENT_TASK_FAILE:
            return { ...state }

        case types.DELETE_LIST_TASK_SUCCESS:
            state.listTask = state.listTask.filter((list) => list.id !== action.data.id);
            return { ...state }

        case types.DELETE_LIST_TASK_FAILE:
            return { ...state }

        case types.GET_ALL_USER_SUCCESS:
            return { ...state, allUser: action.data }

        case types.GET_ALL_USER_FAILE:
            return { ...state }

        case types.ADD_USER_PROJECT_SUCCESS:
            state.project.users = [
                ...state.project.users,
                action.data
            ]
            return { ...state, hideModalAddUser: false }

        case types.ADD_USER_PROJECT_FAILE:
            return { ...state }

        case types.ADD_USER_TASK_SUCCESS:
            const newUserTask = {
                ...state.taskEdit,
                users: [
                    "xxx"
                ]
            }
            return { ...state, taskEdit: newUserTask }

        case types.ADD_USER_TASK_FAILE:
            return { ...state }

        default:
            return state


    }
}

export default detailtProjectReducers;