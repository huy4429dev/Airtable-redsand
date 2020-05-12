import React, { Component } from 'react'
import './style.scss';

class AddlistTask extends Component {

    handleShowFormADDlistTask = () => {
        const { handleShowFormADDlistTask } = this.props;
        handleShowFormADDlistTask();
    }
    render() {
        return (
            <React.Fragment>
                <button onClick={ this.handleShowFormADDlistTask } className="add-list-task"><i className="fas fa-plus mr-2 ml-2"></i>Thêm danh sách</button>
            </React.Fragment>
        )
    }
}
export default AddlistTask;