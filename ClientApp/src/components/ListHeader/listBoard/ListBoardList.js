import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import BoardAdd from '../../../pages/boards/BoardAdd';

class ListBoardList extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isActiveAdd: false
        }
    }
    showFormAdd = () => {
        this.setState({
            isActiveAdd: !this.state.isActiveAdd
        })
    }
    render() {
        return (
            <Col className="view-board" xs="12">
            <Row>
                <h6 className="d-flex align-items-center mt-5 ml-1"><i className='far fa-user mr-3'></i> Personal Boards</h6>
            </Row>
            <Row>
                {this.props.children}
                <Col sm="12 mt-1">
                    
                        <Button onClick={this.showFormAdd} className="btn-login mt-5" color="success" bssize="lg" block>
                        Create New Board
                        </Button>
    
                </Col>
            </Row>
            {this.state.isActiveAdd ?
                <BoardAdd onClick={this.showFormAdd} />
                : null
            }
        </Col>
        );
    }
}

export default ListBoardList;