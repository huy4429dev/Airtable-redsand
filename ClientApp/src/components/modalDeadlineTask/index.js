import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import './style.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class ModalDeadlineTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
        }
    }
    onChangeDate = (date) => {
        this.setState({
            startDate: date
        })
    }
    handleChangeDeadlineTask = (e) => {
        const { handleChangeDeadlineTask, taskEdit } = this.props;
        const id = taskEdit.task.id;
       console.log("deadline"+taskEdit);
   
        e.preventDefault();
        const data = {
            title: taskEdit.task.title,
            desc: taskEdit.task.desc,
            deadline: this.state.startDate
        }
       
        handleChangeDeadlineTask(data, id);
    }
    handleHideModalDeadlineTask = () => {
        const { handleHideModalDeadlineTask } = this.props;
        handleHideModalDeadlineTask();
    }
    render() {
        console.log("deadline"+this.props.taskEdit);
        return (
            <React.Fragment>
                <Card className="modal-deadline">
                    <form>
                        <Card.Header className="text-center position-relative ">
                            <p className="modal-deadline__title">Sửa ngày hết hạn</p>
                            <i className="fas fa-times position-absolute modal-deadline__close" onClick={this.handleHideModalDeadlineTask}></i>
                        </Card.Header>
                        <Card.Body>
                            <p className="modal-deadline__time">Thời gian:</p>
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={this.onChangeDate}
                                dateFormat="dd/MM/yyyy"
                            />
                        </Card.Body>
                        <Card.Footer>
                            <button onClick={this.handleChangeDeadlineTask} className="modal-deadline__btn">Lưu</button>
                        </Card.Footer>
                    </form>
                </Card>
            </React.Fragment>
        )
    }
}

export default ModalDeadlineTask;