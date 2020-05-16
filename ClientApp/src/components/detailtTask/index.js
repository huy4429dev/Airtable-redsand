import React, { Component } from 'react';
import './style.scss';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class DetailtTask extends Component {

    handleHideModalDetailtTask = () => {
        const { handleHideModalDetailtTask } = this.props;
        handleHideModalDetailtTask();
    }
    handleShowModalDeadlineTask = () => {
       // alert("vao deadline");
       
        const { handleShowModalDeadlineTask } = this.props;
        handleShowModalDeadlineTask();
    }
    handleShowModalAddUserTask = () => {
        const { handleShowModalAddUserTask } = this.props;
        handleShowModalAddUserTask();
    }
    handleAddAttachment=()=>{
        alert("vao att");
        
        const {handleAddAttachment}=this.props;
        handleAddAttachment();
    }
    render() {
        return (
            <React.Fragment>
                <div className="modal-task" >
                    <Card className="modal-task__content">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-table mr-3"></i>
                            <input placeholder="linh" className="modal-task__title w-100 " />
                            <i className="fas fa-times ml-2 modal-task__close" onClick={this.handleHideModalDetailtTask}></i>
                        </div>
                        <Row className="mt-2">
                            <Col md="8">
                                <div className="d-flex align-items-center mt-2">
                                    <i className="fas fa-align-left mr-3"></i>
                                    <p className="modal-task__desc">Mô tả</p>
                                </div>
                                <form className="mt-2">
                                    <textarea className="modal-task__desc-add" placeholder="Thêm mô tả chi tiết..." ></textarea>
                                    <button className="modal-task__desc-btn">Lưu</button>
                                </form>
                                <div className="d-flex justify-content-between align-items-center mt-2">
                                    <div className="d-flex">
                                        <i className="fas fa-align-left mr-3"></i>
                                        <p>Hoạt động</p>
                                    </div>
                                    <button className="modal-task__history">Hiện chi tiết</button>
                                </div>
                                <div className="d-flex mt-2">
                                    <img className="modal-task__avatar" src="https://images.unsplash.com/photo-1588857605868-3d81c9dc8608?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjcwNjZ9" />
                                    <div className="w-100">
                                        <form className="d-flex flex-column">
                                            <textarea placeholder="Viết bình luận..." className="modal-task__add-comment"></textarea>
                                            <button className="modal-task__comment">Lưu</button>
                                        </form>
                                    </div>
                                </div>
                            </Col>
                            <Col md="4 mt-2">
                                <h3 className="modal-task__add-tag">Thêm vào thẻ</h3>
                                <ul className="modal-task__nav">
                                    <li className="modal-task__list" onClick={this.handleShowModalAddUserTask}>
                                        <i className="far fa-user mr-2"></i>Thêm thành viên
                                    </li>
                                    <li className="modal-task__list" onClick={this.handleShowModalDeadlineTask}>
                                        <i className="far fa-clock mr-2"></i>Ngày hết hạn
                                    </li>
                                    <li className="modal-task__list" onClick={this.handleAddAttachment}>
                                        <i className="fas fa-paperclip mr-2" ></i>Đính kèm
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </React.Fragment>
        )
    }
}

export default DetailtTask;