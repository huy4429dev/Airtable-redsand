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
    listTask: null
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
            return { ...state, showModalDetailtTask: true }

        case types.HIDE_MODAL_DETAIL_TASK:
            return { ...state, showModalDetailtTask: false }

        case types.HIDE_MODAL_ADD_USER:
            return { ...state, hideModalAddUser: false }

        case types.SHOW_MODAL_ADD_USER:
            return { ...state, hideModalAddUser: true }

        case types.SHOW_MODAL_DEADLINE_TASK:
            return { ...state, showModalEditDeadlineTask: true }

        case types.HIDE_MODAL_DEADLINE_TASK:
            return { ...state, showModalEditDeadlineTask: false }

        case types.SHOW_MODAL_ADD_USER_TASK:
            return { ...state, showModalAddUserTask: true }

        case types.HIDE_MODAL_ADD_USER_TASK:
            return { ...state, showModalAddUserTask: false }

        case types.ADD_LIST_TASK_SUCCESS:
            return { ...state, listTask: state.listTask.concat(action.data) }

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
            console.log('xxxxxxxxxxxxxxxxxx', index, task)
            if (index >= 0) {
                state.listTask[index].tasks = [
                    ...state.listTask[index].tasks,
                    task
                ];
            }

            return {
                ...state,
                hideFormAddTask: false,
                showButtonAddTask: true
            }
        case types.ADD_TASK_FAILE:
            return { ...state }

        default:
            return state
    }
}
// const findTaskInListTask = (listTask, task) => {
//     var index = -1;
//     if (listTask.length > 0) {
//         for (var i = 0; i < listTask.length; i++) {
//             if (listTask[i].id === task.listTaskId) {
//                 index = i;
//                 break;
//             }
//         }
//     }
//     return index;
// }
export default detailtProjectReducers;