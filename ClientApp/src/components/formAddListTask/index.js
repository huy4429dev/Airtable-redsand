import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import './style.scss';

class FormAddListTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null
        }
    }
    handleHideFormAddListTask = () => {
        const { handleHideFormAddListTask } = this.props;
        handleHideFormAddListTask();
    }
    setValueState = (e) => {
        const { target } = e;
        const { name } = target;
        const { value } = target;
        this.setState({
            [name]: value
        })
    }
    handleAddListTask = (e) => {
        e.preventDefault()
        const { handleAddListTask } = this.props;
        const { title } = this.state;
        const data = {
            title : title,
            desc : '',
            projectId : null,
            userId : null
        }
        handleAddListTask(data);
    }
    render() {
        return (
            <React.Fragment>
                <Card style={{ width: '17rem' }}>
                    <form className="form-list-task">
                        <input onChange={this.setValueState} name="title" className="form-list-task__innput" placeholder="Nhập tiêu đề danh sách..." />
                        <div className="d-flex">
                            <button className="form-list-task__btn"  onClick={this.handleAddListTask} >Thêm danh sách</button>
                            <i onClick={this.handleHideFormAddListTask} className="fas fa-times form-list-task__close"></i>
                        </div>
                    </form>
                </Card>
            </React.Fragment>
        )
    }
}

export default FormAddListTask;
