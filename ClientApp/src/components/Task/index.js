import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import { Draggable } from 'react-beautiful-dnd';
import './style.scss';

class Task extends Component {
    render() {
        return (
            <React.Fragment>
                <Draggable draggableId={this.props.task.id} index={this.props.index}>
                    {(provided, snapshot) => (
                        <Card className="mt-2"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            isdragding={snapshot.isdragging}
                        >
                            <Card.Body className="card__task">
                                <p className="card__task-title">{this.props.task.content}</p>
                            </Card.Body>
                        </Card>
                    )}
                </Draggable>
            </React.Fragment>
        )
    }
}

export default Task;
