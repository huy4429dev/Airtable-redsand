import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './style.css';
import ViewListItem from './ViewListItem';
import BoardsListItem from './BoardsListItem';
class ViewList extends Component {
    render() {
        return (
            <Col xs="9">
                <Row>
                    <h6 className="d-flex align-items-center"><i className='far fa-clock mr-3'></i> Recently Viewed</h6>
                </Row>
                <ViewListItem />
                <Row>
                    <h6 className="d-flex align-items-center mt-5"><i className='far fa-user mr-3'></i> Personal Boards</h6>
                </Row>
                <BoardsListItem />
            </Col>
        );
    }
}

export default ViewList;