import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import './style.scss';
import bgr from './../../assets/images/bg.jpg';
import Select from 'react-select';

class ModalAddUserTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: null,
            selectedOption: null
        }
    }
    handleHideModalAddUserTask = () => {
        const { handleHideModalAddUserTask } = this.props;
        handleHideModalAddUserTask();
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    }
    componentDidMount() {
        const { project } = this.props;
        var option = project.users.map((user, index) => {
            return { value: user.userId, label: user.email }
        });
        var filter = option.filter((ft) => ft.value != localStorage.userId);
        this.setState({
            options: filter
        })
    }
    handleAddUserTask = (e) => {
        const { handleAddUserTask, idTaskAddUser } = this.props;
        const {selectedOption} = this.state;
        e.preventDefault();
        const userUpdate = selectedOption.map((use, index) => {
            return { userId: use.value, taskId: idTaskAddUser }
        });
        const data = {
            userTasks:userUpdate
        }      
        handleAddUserTask(data, idTaskAddUser);
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
                            <p>Thành viên của bảng</p>
                            <Select
                                onChange={this.handleChange}
                                options={this.state.options}
                                isMulti={true}
                                isSearchable={true}
                            />
                        </Card.Body>
                        <Card.Footer>
                            <button className="modal-deadline__btn d-block" onClick={this.handleAddUserTask}>Thêm</button>
                        </Card.Footer>
                    </form>
                </Card>
            </React.Fragment>
        )
    }
}

export default ModalAddUserTask;