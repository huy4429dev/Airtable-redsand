import React, { Component } from 'react';
import {Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import './style.css';
class BoardsListItem extends Component {
    render() {
        return (
            <Row>
            <Link to="/detailt"><Col sm="3 mr-5 mt-3 mb-3 bg-primary text-white item-recently">Dự án 1</Col></Link>
            <Col sm="3 mr-5 mt-3 mb-3 bg-light text-dark text-center item-recently-create">Create new board</Col>   
        </Row>
        );
    }
}

export default BoardsListItem;