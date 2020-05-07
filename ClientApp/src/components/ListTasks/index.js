import React, { Component } from 'react'
import './style.scss';
import Task from '../Task';
import Card from 'react-bootstrap/Card';
import { Droppable, Draggable } from 'react-beautiful-dnd';

class ListTasks extends Component {
    render() {
        return (
            <React.Fragment>
                <Draggable draggableId={this.props.column.id} index = {this.props.index}>
                    {(provided) => (
                        <div className="grid__card" 
                            {...provided.draggableProps}
                            ref={provided.innerRef}
                        >
                            <Card className="detailt__list-task"  {...provided.dragHandleProps}>
                                <Card.Body className="card__body">
                                    <div className="d-flex justify-content-between">
                                        <input defaultValue={this.props.column.title} className="detailt__name-list-task" />
                                        <i className="fas fa-ellipsis-h detailt__more"></i>
                                    </div>
                                    <Droppable droppableId={this.props.column.id}>
                                    {(provided, snapshot) => (
                                        <div className="mt-2"
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                            isdraggingover={snapshot.isdraggingover}>
                                                {this.props.tasks.map((task, index) => (
                                                    <Task key={task.id} task={task} index={index}/>
                                                ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                    </Droppable>
                                    <button className="mt-2 card__btn-sub"><i className="fas fa-plus icon--gray" ></i>Thêm thẻ khác</button>
                                </Card.Body>
                            </Card>
                        </div>
                    )}
                </Draggable>
            </React.Fragment>
        )
    }
}

export default  ListTasks;
