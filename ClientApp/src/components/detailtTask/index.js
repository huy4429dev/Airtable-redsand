import React, { Component } from 'react';
import './style.scss';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Comment from '../comment';

class DetailtTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            desc: null,
            comment: null
        }
       this.deleteAttachment=this.deleteAttachment.bind(this)
    }


    handleHideModalDetailtTask = () => {
        const { handleHideModalDetailtTask } = this.props;
        handleHideModalDetailtTask();
    }
    handleShowModalDeadlineTask = () => {

        const { handleShowModalDeadlineTask } = this.props;
        handleShowModalDeadlineTask();
    }
    handleShowModalAddUserTask = () => {
        const { id } = this.props.taskEdit.task;
        const { handleShowModalAddUserTask } = this.props;
        handleShowModalAddUserTask();
    }
    handleAddAttachment = () => {

        const { handleAddAttachment } = this.props;

        handleAddAttachment();
    }


    componentDidMount() {
        const { idDetailtTask,handleShowModalAddUserTask } = this.props;
       // handleGetProfileTask(idDetailtTask);
        handleShowModalAddUserTask(idDetailtTask);
    }
    handleEditTitleTask = (e) => {
        const { handleEditTitleTask, taskEdit } = this.props;
        const { target } = e;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
        const data = {
            attaches: [taskEdit.attaches],
            comments: [taskEdit.comments],
            task: taskEdit.task,
            deadLine: taskEdit.task.deadLine,
            desc: taskEdit.task.desc,
            id: taskEdit.task.id,
            listTask: taskEdit.task.listTask,
            listTaskId: taskEdit.task.listTaskId,
            status: taskEdit.task.status,
            taskAttaches: taskEdit.task.taskAttaches,
            taskComments: taskEdit.task.taskComments,
            taskItems: taskEdit.task.taskItems,
            title: this.state.title,
            userTasks: taskEdit.task.userTasks,
            users: [taskEdit.users]
        }
        setTimeout(() => {
            handleEditTitleTask(data, taskEdit.task.id);
        }, 3000);
    }
    onChangeInputDesc = (e) => {
        const { target } = e;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }
    handleEditDescTask = () => {
        const { handleEditDescTask, taskEdit } = this.props;
        const data = {
            attaches: [taskEdit.attaches],
            comments: [taskEdit.comments],
            task: taskEdit.task,
            deadLine: taskEdit.task.deadLine,
            desc: this.state.desc,
            id: taskEdit.task.id,
            listTask: taskEdit.task.listTask,
            listTaskId: taskEdit.task.listTaskId,
            status: taskEdit.task.status,
            taskAttaches: taskEdit.task.taskAttaches,
            taskComments: taskEdit.task.taskComments,
            taskItems: taskEdit.task.taskItems,
            title: taskEdit.task.title,
            userTasks: taskEdit.task.userTasks,
            users: [taskEdit.users]
        }
        handleEditDescTask(data, taskEdit.task.id);
    }
    showTitle = () => {
        const { taskEdit } = this.props;
        if (taskEdit !== null) {
            return (
                <input onChange={this.handleEditTitleTask} defaultValue={taskEdit.task.title} name="title" className="modal-task__title w-100 " />
            )
        }
    }
    showDesc = () => {
        const { taskEdit } = this.props;

        if (taskEdit !== null) {
            return (
                <textarea onChange={this.onChangeInputDesc} name="desc" className="modal-task__desc-add" placeholder="Thêm mô tả chi tiết..." defaultValue={taskEdit.task.desc}></textarea>
            )
        }
    }
    showDeadline = () => {
        const { taskEdit } = this.props;

        if (taskEdit !== null) {
            return (
                <div className="ml-4  d-flex align-center">
                    <p className="modal-task__dealine">Ngày hết hạn</p>
                    <button className="modal-task__dealine-btn">{taskEdit.task.deadLine}</button>
                </div>
            )
        }
    }
    changeComment = (e) => {
        const { target } = e;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }
    handleAddCommentTask = (e) => {
        e.preventDefault();
        const { handleAddCommentTask } = this.props;
        const { comment } = this.state;
        const { id } = this.props.taskEdit.task;
        const userId = localStorage.userId;
        const data = {
            content: comment,
            userId: userId,
            taskId: id
        };
        handleAddCommentTask(data, id);
    }
    showComment = () => {
        const { taskEdit } = this.props;

        if (taskEdit !== null && taskEdit.comments.length > 0) {
            return (
                taskEdit.comments.map((comment, index) => {
                    return (<Comment comment={comment} key={index} />)
                })
            )
        }
    }

    showAttachments = () => {
        const { taskEdit } = this.props;
        if (taskEdit !== null) {
            return (
                <div className="block-attachment  ">
                    <div className="d-flex align-items-center mt-2">
                        <i class="fa fa-file-archive-o mr-3" aria-hidden="true"></i>
                        <p className="modal-task__desc">Attachments</p>
                    </div>
                    {
                       
                         taskEdit.attaches.map((file)=>{
                             return(
                                <div className="file-attachment " key={file.id}>
                                        
                                <a href={file.url} className="">
                                
                                    <img class="attachment-thumbnail modal-task__desc-add " src="https://img.icons8.com/plasticine/2x/file.png" />
                                    </a>
                              
                                    <div className="des_attachment">
                             <a href={file.url}> <h6 className="nameFile">{file.name}</h6></a> 
                                    <a className="user-comment__link" ><span  key={file.id} onClick={this.deleteAttachment(file.id)}>Remove</span></a>
                             <p className="createdAt">Creat At: {file.createdAt}</p>
                                </div>
                        </div>

                             )
                         })   
                            
                    }
                </div>

            )
        }
    }


    deleteAttachment=(key)=>{
        console.log('key'+key);
        const {deleteAttachment}=this.props;
       // deleteAttachment();
    }


    showUserTask = () => {
        const { taskEdit } = this.props;
        if (taskEdit.users.length > 0) {
            return (
                taskEdit.users.map((us, index) => {
                    return (
                        <div key={index} className="avatar_img"><p className="avatar_text">{us}</p></div>
                    )
                })
            )
        }
    }
    render() {
        const { taskEdit } = this.props;


        return (
            <React.Fragment>
                <div className="modal-task" >
                    <Card className="modal-task__content">
                        <div className="d-flex align-items-center mt-2">
                            <i className="fas fa-table mr-3"></i>
                            {this.showTitle()}
                            {/* <input onChange={this.handleEditTitleTask} defaultValue={this.state.title} name="title" className="modal-task__title w-100 " /> */}
                            <i className="fas fa-times ml-2 modal-task__close" onClick={this.handleHideModalDetailtTask}></i>
                        </div>
                        <Row className="mt-2 modal__scoll">
                            <Col md="8">
                                <div className="mt-5 ml-4">
                                    <p style={{ fontSize: '0.95rem' }}>Thành viên</p>
                                    <div className="d-flex">
                                        {this.showUserTask()}
                                    </div>
                                </div>
                                {this.showDeadline()}
                                <div className="d-flex align-items-center mt-2">
                                    <i className="fas fa-align-left mr-3"></i>
                                    <p className="modal-task__desc" style={{ fontSize: '0.95rem' }}>Mô tả</p>
                                </div>
                                <div className="mt-2">
                                    {this.showDesc()}
                                    {/* <textarea onChange={this.handleEditDescTask} name="desc" className="modal-task__desc-add" placeholder="Thêm mô tả chi tiết..." >{this.state.desc}</textarea> */}
                                    <button className="modal-task__desc-btn" onClick={this.handleEditDescTask}>Lưu</button>
                                </div>

                                {this.showAttachments()}


                                <div className="d-flex justify-content-between align-items-center mt-2">
                                    <div className="d-flex">
                                        <i className="fas fa-align-left mr-3"></i>
                                        <p style={{ fontSize: '0.95rem' }}>Hoạt động</p>
                                    </div>
                                    <button className="modal-task__history">Hiện chi tiết</button>
                                </div>
                                <div className="d-flex mt-2">
                                    <img className="modal-task__avatar" src="https://images.unsplash.com/photo-1588857605868-3d81c9dc8608?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjcwNjZ9" />
                                    <div className="w-100">
                                        <form className="d-flex flex-column">
                                            <textarea placeholder="Viết bình luận..." name="comment" className="modal-task__add-comment" onChange={this.changeComment}></textarea>
                                            <button className="modal-task__comment" onClick={this.handleAddCommentTask} >Lưu</button>
                                        </form>
                                    </div>
                                </div>
                                {this.showComment()}
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
                                        <i className="fas fa-paperclip mr-2"></i>Đính kèm
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