import React, { Component } from 'react';
import {Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
class ViewListItem extends Component {
    render() {
        return (
            <Row>
            <Col sm="3 mr-5">
                <Link to="/detailt" className="link">
                <div className="mt-3 mb-3 bg-primary text-white item-recently">
                <span className="ml-3">Dự án 1</span>
                </div>
                </Link>
            </Col>
            <Col sm="3 mr-5">
                <Link to="/detailt" className="link">
                <div className="mt-3 mb-3 bg-success text-white item-recently">
                <span className="ml-3">Dự án 1</span>
                </div>
                </Link>
            </Col>
            <Col sm="3 mr-5">
                <Link to="/detailt" className="link">
                <div className="mt-3 mb-3  bg-info text-white item-recently">
                <span className="ml-3">Dự án 1</span>
                </div>
                </Link>
            </Col>
            
            {/* <Col sm="3  mr-5 mt-3 mb-3  bg-info text-white item-recently">Dự án 3</Col> */}



        </Row>
        );
    }
}

export default ViewListItem;