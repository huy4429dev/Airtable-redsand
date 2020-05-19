import React, { Component } from 'react'
import './style.scss';
import Task from '../Task';
import Card from 'react-bootstrap/Card';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import FormAddTask from '../formAddTask';
import ButtonAddTask from '../buttonAddTask';
import { getListTask } from '../../actions/detailtPrject';

class ListTasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null
        }
    }

    hideFormAddTask = () => {
        const { hideFormAddTask, handleHideFormAddTask, idListTask } = this.props;
        const { handleAddTask } = this.props;
        const { columnId } = this.props;
        if (hideFormAddTask && idListTask === columnId.id) {
            return (
                <FormAddTask handleHideFormAddTask={handleHideFormAddTask}
                    handleAddTask={handleAddTask}
                    columnId={columnId} />
            )
        }
    }
    showButtonAddTask = () => {
        const { showButtonAddTask, handleShowFormAddTask, idListTask } = this.props;
        const { columnId } = this.props;
        if (showButtonAddTask && idListTask !== columnId.id) {
            return (
                <ButtonAddTask handleShowFormAddTask={handleShowFormAddTask} columnId={columnId} />
            )
        }
    }
    show = () => {
        const { tasks, handleShowModalDetailtTask } = this.props;
        if (tasks) {
            return (
                tasks.map((task, index) => {
                    return <Task key={index} task={task} index={index} handleShowModalDetailtTask={handleShowModalDetailtTask} />
                })
            )
        }
    }
    changeTitle = (e) => {
        const { handleEditTitleListTask, columnId, listTaskEdit } = this.props;
        const { target } = e;
        var name = target.name;
        const value = target.value;
        const idListTask = columnId.id;
        this.setState({
            [name]: target.value
        });
        const data = {
            createdAt: listTaskEdit.createdAt,
            desc: listTaskEdit.desc,
            userId: listTaskEdit.userId,
            user: listTaskEdit.user,
            projectId: listTaskEdit.projectId,
            project: listTaskEdit.project,
            tasks: listTaskEdit.tasks,
            createdAt: listTaskEdit.createdAt,
            title: this.state.title,
        }
        setTimeout(() => {
            handleEditTitleListTask(data, idListTask);
        }, 3000);
    }
    componentDidMount() {
        const idListTask = this.props.columnId.id;
        const { getListTaskEdit } = this.props;
        getListTaskEdit(idListTask)
    }
    handleDeleteListTask = (e) => {
        e.preventDefault();
        const { handleDeleteListTask } = this.props;
        const { id } = this.props.columnId;
        if (window.confirm("bạn có muốn xóa list task")) {
            handleDeleteListTask(id);
        }

    }
    render() {
        const { column, columnId, index, tasks, handleShowModalDetailtTask } = this.props;

        return (
            <React.Fragment>
                <Draggable draggableId={String(column)} index={index}>
                    {(provided) => (
                        <div className="grid__card"
                            {...provided.draggableProps}
                            ref={provided.innerRef}
                        >
                            <Card className="detailt__list-task"  {...provided.dragHandleProps}>
                                <Card.Body className="card__body">
                                    <div className="d-flex justify-content-between">
                                        <input onChange={this.changeTitle} name="title" defaultValue={columnId.title} className="detailt__name-list-task" />
                                        <i className="fas fa-times detailt__more" onClick={this.handleDeleteListTask}></i>
                                    </div>
                                    <Droppable droppableId={String(column)}>
                                        {(provided, snapshot) => (
                                            <div className="mt-2"
                                                ref={provided.innerRef}
                                                {...provided.droppableProps}
                                                isdraggingover={snapshot.isdraggingover}>
                                                {this.show()}
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>
                                    {this.showButtonAddTask()}
                                    {this.hideFormAddTask()}
                                </Card.Body>
                            </Card>
                        </div>
                    )}
                </Draggable>
            </React.Fragment>
        )
    }
}

export default ListTasks;
