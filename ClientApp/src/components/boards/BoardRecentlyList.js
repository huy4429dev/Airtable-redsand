import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
class BoardRecentlyList extends Component {
    render() {
        return (

            <Col className="view-board" md="12">
                <Row>
                    <h6 className="d-flex align-items-center ml-1"><i className='far fa-clock mr-3'></i> Recently Viewed</h6>
                </Row>
                <Row>
               {this.props.children}
               </Row>
            </Col>
        );
    }
}

export default BoardRecentlyList;