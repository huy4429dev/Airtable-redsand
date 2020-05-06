import React, { Component } from 'react';
import {Row, Col } from 'reactstrap';
import './style.css';
import { Link } from 'react-router-dom';
class BoardsListItem extends Component {
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
        </Row>
        );
    }
}

export default BoardsListItem;