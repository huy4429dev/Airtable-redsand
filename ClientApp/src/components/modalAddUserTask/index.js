import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import './style.scss';
import bgr from './../../assets/images/bg.jpg'

class ModalAddUserTask extends Component {

    handleHideModalAddUserTask = () => {
        const {handleHideModalAddUserTask} = this.props;
        handleHideModalAddUserTask();
    }
    render() {
        return (
            <React.Fragment>
                <Card className="modal-deadline">
                    <form>
                        <Card.Header className="text-center position-relative ">
                            <p className="modal-deadline__title">Thêm thành viên</p>
                            <i className="fas fa-times position-absolute modal-deadline__close" onClick={this.handleHideModalAddUserTask}></i>
                        </Card.Header>
                        <Card.Body className="modal-user-task__card">
                            <input placeholder="Tìm kiếm các thành viên" className="modal-user-task__input" />
                            <p>Thành viên của bảng</p>
                            <ul className="modal-user-task__nav">
                                <li className="modal-user-task__list">
                                    <img src={bgr} className="modal-user-task__img" />
                                    <span>linh</span>
                                </li>
                            </ul>
                        </Card.Body>
                        <Card.Footer>
                            <button className="modal-deadline__btn d-block">Thêm</button>
                        </Card.Footer>
                    </form>
                </Card>
            </React.Fragment>
        )
    }
}

export default ModalAddUserTask;