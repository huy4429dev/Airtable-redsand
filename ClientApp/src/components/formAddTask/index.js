import React, { Component } from 'react';
import './style.scss';

class FormAddTask extends Component {
    constructor(props) {
        super(props);
        this.state={
            title : null
        }
    }
    
    handleHideFormAddTask = () => {
        const { handleHideFormAddTask } = this.props;
        handleHideFormAddTask();
    }
    getValueInput = (e)=>{
        const { target } = e;
        const {name} = target;
        const {value} = target;
        this.setState({
            [name] : value 
        })
    }
    handleAddTask = (e)=>{
        e.preventDefault();
        const {handleAddTask,columnId } = this.props;
        const {title} = this.state;
        const  data = {
            title : title,
            listTaskId : columnId.id
        }
        handleAddTask(data);
    }
    render() {
        return (
            <React.Fragment>
                <form className="form-add-task mt-2">
                    <textarea name ="title" onChange={this.getValueInput} className="form-add-task__input" placeholder="Nhập tiêu đề cho thẻ này">
                    </textarea>
                    <div className="d-flex">
                        <button className="form-add-task__btn" onClick={this.handleAddTask}>
                            Thêm thẻ
                        </button>
                        <a onClick={this.handleHideFormAddTask}><i className="fas fa-times form-add-task__close"></i></a>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}
export default FormAddTask;
