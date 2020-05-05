import React, { Component } from 'react';
import {Row, Col } from 'reactstrap';
import './style.css';
class BoardsListItem extends Component {
    render() {
        return (
            <Row>
            <Col sm="3 mr-5 mt-3 mb-3 bg-primary text-white item-recently">Dự án 1</Col>
            <Col sm="3  mr-5 mt-3 mb-3 bg-success text-white item-recently">Dự án 2</Col>
            <Col sm="3 mr-5 mt-3 mb-3 bg-light text-dark text-center item-recently-create">Create new board</Col>   
        </Row>
        );
    }
}

export default BoardsListItem;