import React, { Component } from 'react'

class ButtonAddTask extends Component {
    handleShowFormAddTask = (id) => {
        const { handleShowFormAddTask } = this.props;
        if (handleShowFormAddTask) {
            handleShowFormAddTask(id);
        }      
    }
    render() {
        const {id} = this.props;
        return (
            <React.Fragment>
                <button onClick={()=>this.handleShowFormAddTask(id)} className="mt-2 card__btn-sub"><i className="fas fa-plus icon--gray" ></i>Thêm thẻ khác</button>
            </React.Fragment>
        )
    }
}
export default ButtonAddTask;