import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import { Draggable } from 'react-beautiful-dnd';
import './style.scss';

class Task extends Component {
    handleShowModalDetailtTask = () => {
        const { handleShowModalDetailtTask } = this.props;
        handleShowModalDetailtTask();
    }
    render() {
        const { task,index} = this.props;
        return (
            <React.Fragment>
                <Draggable draggableId={String(task.id)} index={index}>
                    {(provided, snapshot) => (
                        <Card className="mt-2" onClick={this.handleShowModalDetailtTask}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            isdragding={snapshot.isdragging}
                        >
                            <Card.Body className="card__task">
                                <p className="card__task-title">{this.props.task.title}</p>
                            </Card.Body>
                        </Card>
                    )}
                </Draggable>
            </React.Fragment>
        )
    }
}

export default Task;
