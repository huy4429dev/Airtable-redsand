import React, { Component } from 'react'
import './style.scss';
import Task from '../Task';
import Card from 'react-bootstrap/Card';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import FormAddTask from '../formAddTask';
import ButtonAddTask from '../buttonAddTask';

class ListTasks extends Component {
    hideFormAddTask = () => {
        const { hideFormAddTask, handleHideFormAddTask ,idListTask} = this.props;
        const { id } = this.props.column;
        if (hideFormAddTask && idListTask === id) {
            return (
                <FormAddTask handleHideFormAddTask={handleHideFormAddTask}/>
            )
        }
    }
    showButtonAddTask = () => {
        const { showButtonAddTask, handleShowFormAddTask, idListTask } = this.props;
        const { id } = this.props.column;
        if (showButtonAddTask && idListTask !== id) {
            return (
                <ButtonAddTask handleShowFormAddTask={handleShowFormAddTask} id={id} />
            )
        }
    }
    render() {
        const { id, title } = this.props.column;
        const { handleShowModalDetailtTask } = this.props;

        return (
            <React.Fragment>
                <Draggable draggableId={id} index={this.props.index}>
                    {(provided) => (
                        <div className="grid__card"
                            {...provided.draggableProps}
                            ref={provided.innerRef}
                        >
                            <Card className="detailt__list-task"  {...provided.dragHandleProps}>
                                <Card.Body className="card__body">
                                    <div className="d-flex justify-content-between">
                                        <input defaultValue={title} className="detailt__name-list-task" />
                                        <i className="fas fa-ellipsis-h detailt__more"></i>
                                    </div>
                                    <Droppable droppableId={id}>
                                        {(provided, snapshot) => (
                                            <div className="mt-2"
                                                ref={provided.innerRef}
                                                {...provided.droppableProps}
                                                isdraggingover={snapshot.isdraggingover}>
                                                {this.props.tasks.map((task, index) => (
                                                    <Task key={task.id} task={task} index={index} handleShowModalDetailtTask={handleShowModalDetailtTask} />
                                                ))}
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
