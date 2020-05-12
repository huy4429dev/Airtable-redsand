import React, { Component } from 'react';
import './style.scss';

class FormAddTask extends Component {
    handleHideFormAddTask = () => {
        const { handleHideFormAddTask } = this.props;
        handleHideFormAddTask();
    }
    render() {
        return (
            <React.Fragment>
                <form className="form-add-task">
                    <textarea className="form-add-task__input" placeholder="Nhập tiêu đề cho thẻ này">
                    </textarea>
                    <div className="d-flex">
                        <button className="form-add-task__btn">
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
