import React, { Component } from 'react';
import bgr from './../../assets/images/bg.jpg';
import Image from 'react-bootstrap/Image'
import ListTasks from '../../components/ListTasks';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import data from './../../data';
import './style.scss';
import HeaderPage from '../header/HeaderPage';

class Detailt extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: data
        }
    }
    
    onDragEnd = (result) => {
        const { destination, source, draggableId ,type} = result;
        document.body.style.color = 'inherit';
        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }


        if( type === "column"){
            const newColumnOrder = Array.from(this.state.data.columnOrder);
            newColumnOrder.splice( source.index, 1);
            newColumnOrder.splice(destination.index ,0 , draggableId);
            const newState = {
                ...this.state.data,
                columnOrder: newColumnOrder
            }
            this.setState({data:newState});
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
        this.setState({data:newState});
        
    };

    render() {
        return (
            <React.Fragment>
                  <HeaderPage/>
                <div style={{ backgroundImage: `url('${bgr}')` }} className="detailt">
                    <div className="detailt__box">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <input className="detailt__name" defaultValue="linh" />
                                <button className="detailt__btn"><i className="far fa-star"></i></button>
                                <button className="detailt__btn">Nhóm cá nhân</button>
                                <button className="detailt__btn"><i className="fas fa-user-friends mr-1"></i>Hiện với nhóm</button>
                                <Image src={bgr} className="detailt__avatar" roundedCircle />
                                <button className="detailt__btn">Mời</button>
                            </div>
                            <button className="detailt__btn">Hiện menu</button>
                        </div>
                        <DragDropContext onDragEnd={this.onDragEnd}>
                            <Droppable droppableId="all-column" direction= "horizontal" type="column">
                                {(provided)=>(
                                    <div className="detailt__list-box mt-2 d-flex" 
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}>
                                            {this.state.data.columnOrder.map((columnId,index) => {
                                                const column = this.state.data.columns[columnId];
                                                const tasks = column.taskIds.map(taskId => this.state.data.tasks[taskId]);
                                                    return <ListTasks  key={column.id} column={column} tasks={tasks} index = {index} />
                                            })}
                                            {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>    
                        </DragDropContext>
                    </div>
                </div>
              
            </React.Fragment>
        )
    }
}
export default Detailt;