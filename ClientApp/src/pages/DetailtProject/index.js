import React, { Component } from 'react';
import bgr from './../../assets/images/bg.jpg';
import Image from 'react-bootstrap/Image'
import ListTasks from '../../components/ListTasks';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import data from './../../data';
import './style.scss';
import HeaderPage from './../header/HeaderPage';
import AddlistTask from '../../components/addListTask';
import FormAddListTask from '../../components/formAddListTask';
import connect from './../../lib/connect';
import * as actions from './../../actions/detailtPrject';
import DetailtTask from '../../components/detailtTask';
import ModalAddUser from '../../components/modalAddUser';
import ModalDeadlineTask from '../../components/modalDeadlineTask';
import ModalAddUserTask from '../../components/modalAddUserTask';

class Detailt extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: data
        }
    }

    onDragEnd = (result) => {
        const { destination, source, draggableId, type } = result;
        document.body.style.color = 'inherit';
        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }


        if (type === "column") {
            const newColumnOrder = Array.from(this.state.data.columnOrder);
            newColumnOrder.splice(source.index, 1);
            newColumnOrder.splice(destination.index, 0, draggableId);
            const newState = {
                ...this.state.data,
                columnOrder: newColumnOrder
            }
            this.setState({ data: newState });
            return;
        }

        const start = this.state.data.columns[source.droppableId];
        const finish = this.state.data.columns[destination.droppableId];


        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...start,
                taskIds: newTaskIds
            };

            const newState = {
                ...this.state.data,
                columns: {
                    ...this.state.data.columns,
                    [newColumn.id]: newColumn,
                },
            };
            this.setState({ data: newState });
            return;
        }
        // drag drop task
        // chuyen task sang list task khac

        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
            ...start,
            taskIds: startTaskIds,
        };

        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds
        };

        const newState = {
            ...this.state.data,
            columns: {
                ...this.state.data.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        };
        this.setState({ data: newState });

    };
    hideFormAddListTask = () => {
        const { showFormAddListTask } = this.props;
        const { handleHideFormAddListTask,handleAddListTask } = this.props.actions;
        if (showFormAddListTask) {
            return (
                <FormAddListTask
                    handleHideFormAddListTask={handleHideFormAddListTask}
                    handleAddListTask={handleAddListTask} />
            )
        }
    }
    showButtonAddListTask = () => {
        const { showButtonAddListTask } = this.props;
        const { handleShowFormADDlistTask, handleShowModalAddUserTask } = this.props.actions;
        if (showButtonAddListTask) {
            return (
                <AddlistTask handleShowFormADDlistTask={handleShowFormADDlistTask} />
            )
        }
    }
    hideModalDetailtTask = () => {
        const { showModalDetailtTask } = this.props;
        const { handleHideModalDetailtTask, handleShowModalDeadlineTask, handleShowModalAddUserTask } = this.props.actions;
        if (showModalDetailtTask) {
            return (
                <DetailtTask
                    handleHideModalDetailtTask={handleHideModalDetailtTask}
                    handleShowModalDeadlineTask={handleShowModalDeadlineTask}
                    handleShowModalAddUserTask={handleShowModalAddUserTask} />
            )
        }
    }
    hideModalAddUser = () => {
        const { hideModalAddUser } = this.props;
        const { handleHideModalAddUser } = this.props.actions;
        if (hideModalAddUser) {
            return (
                <ModalAddUser handleHideModalAddUser={handleHideModalAddUser} />
            )
        }
    }
    handleShowModalAddUser = () => {
        const { handleShowModalAddUser } = this.props.actions;
        handleShowModalAddUser();
    }
    showModalEditDeadlineTask = () => {
        const { showModalEditDeadlineTask } = this.props;
        const { handleHideModalDeadlineTask } = this.props.actions;
        if (showModalEditDeadlineTask) {
            return (<ModalDeadlineTask handleHideModalDeadlineTask={handleHideModalDeadlineTask} />)
        }
    }
    showModalAddUserTask = () => {
        const { showModalAddUserTask } = this.props;
        const { handleHideModalAddUserTask } = this.props.actions;
        if (showModalAddUserTask) {
            return (<ModalAddUserTask
                handleHideModalAddUserTask={handleHideModalAddUserTask} />)
        }
    }
    componentDidMount() {
        const { getListTask } = this.props.actions;
        const userId = 1;
        getListTask(userId);
    }
    
    render() {
        const { handleShowFormAddTask, handleHideFormAddTask, handleShowModalDetailtTask } = this.props.actions;
        const { showButtonAddTask, idListTask,listTask } = this.props;
        
        return (
            <React.Fragment>
                <HeaderPage />
                <div style={{ backgroundImage: `url('${bgr}')` }} className="detailt">
                    <div className="detailt__box">
                        <div className="d-flex justify-content-between align-items-center mt-3">
                            <div>
                                <input className="detailt__name" defaultValue="linh" />
                                <button className="detailt__btn"><i className="far fa-star"></i></button>
                                <button className="detailt__btn">Nhóm cá nhân</button>
                                <button className="detailt__btn"><i className="fas fa-user-friends mr-1"></i>Hiện với nhóm</button>
                                <Image src={bgr} className="detailt__avatar" roundedCircle />
                                <button className="detailt__btn" onClick={this.handleShowModalAddUser} >Mời</button>
                            </div>
                            <button className="detailt__btn">Hiện menu</button>
                        </div>
                        {this.showButtonAddListTask()}
                        {this.hideFormAddListTask()}
                        <DragDropContext onDragEnd={this.onDragEnd}>
                            <Droppable droppableId="all-column" direction="horizontal" type="column">
                                {(provided) => (
                                    <div className="detailt__list-box mt-2 d-flex"
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}>
                                        {this.state.data.columnOrder.map((columnId, index) => {
                                            const column = this.state.data.columns[columnId];
                                            const tasks = column.taskIds.map(taskId => this.state.data.tasks[taskId]);
                                            const { hideFormAddTask } = this.props;

                                            return (<ListTasks key={column.id} column={column}
                                                tasks={tasks} index={index}
                                                hideFormAddTask={hideFormAddTask}
                                                handleShowFormAddTask={handleShowFormAddTask}
                                                handleHideFormAddTask={handleHideFormAddTask}
                                                showButtonAddTask={showButtonAddTask}
                                                handleShowModalDetailtTask={handleShowModalDetailtTask}
                                                idListTask={idListTask} />)
                                        })}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>
                    </div>
                    {this.hideModalAddUser()}
                </div>
                {this.showModalEditDeadlineTask()}
                {this.hideModalDetailtTask()}
                {this.showModalAddUserTask()}
            </React.Fragment>
        )
    }
}

export default (connect(Detailt, state => (
    {
        showFormAddListTask: state.detailtProjectReducers.showFormAddListTask,
        showButtonAddListTask: state.detailtProjectReducers.showButtonAddListTask,
        hideFormAddTask: state.detailtProjectReducers.hideFormAddTask,
        showButtonAddTask: state.detailtProjectReducers.showButtonAddTask,
        showModalDetailtTask: state.detailtProjectReducers.showModalDetailtTask,
        hideModalAddUser: state.detailtProjectReducers.hideModalAddUser,
        idListTask: state.detailtProjectReducers.idListTask,
        showModalEditDeadlineTask: state.detailtProjectReducers.showModalEditDeadlineTask,
        showModalAddUserTask: state.detailtProjectReducers.showModalAddUserTask,
        listTask: state.detailtProjectReducers.listTask
    }
), actions));