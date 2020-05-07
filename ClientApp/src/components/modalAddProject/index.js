import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.scss';

class ModalAddProject extends Component {

    hideModalAddProject = () => {
        const { hideModalAddProject } = this.props;
        hideModalAddProject();
    }
    render() {
        return (
            <React.Fragment>
                <div className="project">
                    <Row className="project__modal">
                        <Col md="8">
                            <div className="project__img" style={{backgroundImage:'url(https://images.unsplash.com/photo-1588744015749-6f009d4a2180?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjcwNjZ9)'}}>
                                <input className="project__input"  placeholder="Thêm tiêu đề bảng"/>
                                <button className="project__btn-close ml-4" onClick={this.hideModalAddProject}>
                                <i className="fas fa-times"></i>
                            </button>
                            </div>
                        </Col>
                        <Col md="4">
                            ff
                        </Col>
                        <div className="mt-2 ml-3">   
                            <button className="project__btn">Tạo Bảng</button>
                        </div>
                    </Row>
                </div>
            </React.Fragment>
        )
    }
}

export default ModalAddProject;