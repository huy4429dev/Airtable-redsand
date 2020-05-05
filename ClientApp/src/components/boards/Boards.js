import React, { Component } from 'react';
import { Container, Row, Col, Button, Label } from 'reactstrap';
import HeaderPage from '../../pages/header/HeaderPage';
import './style.css';
class Boards extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderPage />
                <Container>
                    <Row className="mt-5">
                        <Col xs="3">
                            <Button outline color="light border border-0 text-left text-dark" size="lg" block>
                                <h6 className="d-flex align-items-center">
                                    <i className="material-icons text-dark mr-2">dashboard</i>
                                 Broads
                                 </h6>
                            </Button>
                            <Button outline color="light border border-0 text-left text-dark" size="lg" block>
                                <h6 >
                                    <i className='fab fa-flipboard mr-2'></i>
                                    Templates
                                    </h6>
                            </Button>
                            <Button outline color="light border border-0 text-left text-dark" size="lg" block>
                                <h6 className="d-flex align-items-center">
                                    <i className="material-icons text-dark mr-2">trending_up</i>
                                    Home
                                    </h6>
                            </Button>
                            <Label className="text-muted mt-4">TEAMS</Label>
                            <Button outline color="light border border-0 text-left text-muted" size="lg" block>
                                <h6 className="d-flex align-items-center">
                                    <i className="material-icons text-muted mr-2">add</i>
                                    Create a teams
                                </h6>
                            </Button>
                        </Col>
                        <Col xs="9">
                            <Row>
                                <h6 className="d-flex align-items-center"><i className='far fa-clock mr-3'></i> Recently Viewed</h6>
                            </Row>
                            <Row>
                                <Col sm="3 mr-5 mt-3 mb-3 bg-primary text-white item-recently">Dự án 1</Col>
                                <Col sm="3  mr-5 mt-3 mb-3  bg-success text-white item-recently">Dự án 2</Col>
                                <Col sm="3  mr-5  mt-3 mb-3  bg-info text-white item-recently">Dự án 3</Col>
                                {/* <Col sm="3  mr-5 mt-3 mb-3  bg-info text-white item-recently">Dự án 3</Col> */}



                            </Row>
                            <Row>
                                <h6 className="d-flex align-items-center mt-5"><i className='far fa-user mr-3'></i> Personal Boards</h6>
                            </Row>
                            <Row>
                                <Col sm="3 mr-5 mt-3 mb-3 bg-primary text-white item-recently">Dự án 1</Col>
                                <Col sm="3  mr-5 mt-3 mb-3 bg-success text-white item-recently">Dự án 2</Col>
                                <Col sm="3 mr-5 mt-3 mb-3 bg-light text-dark text-center item-recently-create">Create new board</Col>   
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>

        );
    }
}

export default Boards;