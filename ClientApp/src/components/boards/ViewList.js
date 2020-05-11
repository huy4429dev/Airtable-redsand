import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import ViewListItem from './ViewListItem';
import BoardAdd from '../../pages/boards/BoardAdd';
class ViewList extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isActiveAdd: false
        }
    }
    showFormAdd=()=>{
        this.setState({
            isActiveAdd:!this.state.isActiveAdd
        })
    }
    render() {
        return (
            <Col className="view-board" xs="9">
                <Row>
                    <h6 className="d-flex align-items-center"><i className='far fa-clock mr-3'></i> Recently Viewed</h6>
                </Row>
                <ViewListItem />
                <Row>
                    <h6 className="d-flex align-items-center mt-5"><i className='far fa-user mr-3'></i> Personal Boards</h6>
                </Row>
                <Row>
                    
                        {this.props.children}
                        <Col sm="3 mr-5 crate-project">
                    <button onClick={this.showFormAdd} className="mt-3 mb-3 border-0  bg-light text-dark item-recently">
                        <span className="ml- addBoard">Create New Board</span>
                    </button>
                </Col>
                </Row>
                 {this.state.isActiveAdd ?
                    <BoardAdd onClick={this.showFormAdd} />
                    :null
                 }
            </Col>
        );
    }
}

export default ViewList;