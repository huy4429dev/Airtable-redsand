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
        const {handleAddTask} = this.props;
        const { columnId } = this.props; 
        if (hideFormAddTask && idListTask === columnId.id) {
            return (
                <FormAddTask handleHideFormAddTask={handleHideFormAddTask}
                handleAddTask = {handleAddTask}
                columnId={columnId}/>
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
    show = ()=>{
        const {tasks,handleShowModalDetailtTask} = this.props;
        if(tasks){
            return (
                tasks.map((task, index) => {
                    return <Task key={index} task={task} index={index} handleShowModalDetailtTask={handleShowModalDetailtTask} />
                })
            )
        }
    }
    render() {
        const { column, columnId,index ,tasks,handleShowModalDetailtTask } = this.props;
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
                                        <input defaultValue={columnId.title} className="detailt__name-list-task" />
                                        <i className="fas fa-ellipsis-h detailt__more"></i>
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
