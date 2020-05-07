import React, { Component } from 'react';
import './style.css';
import { Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import images1 from './../../assets/images/image1.png';
import images2 from './../../assets/images/image2.png';
import {Link} from "react-router-dom"
class Login extends Component {
    render() {
        return (
            <div className="wrapper">
                <Row>
                    <Col xs="6" sm="4" className="images">
                        <img src={images1} alt="Hình Ảnh" />
                    </Col>
                    <Col xs="6" sm="4" className="form-log pl-5 pr-5">
                        <Form>
                            <FormGroup>
                                <h3  className="text-center form-header">Đăng Nhập</h3>
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" size="lg" placeholder="Tên Đăng Nhập" />
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" size="lg" placeholder="Mật Khẩu" />
                            </FormGroup>
                            <FormGroup>
                                <Button className="btn-login" color="success" size="lg" block>Đăng Nhập</Button>
                            </FormGroup>
                            <FormGroup>
                                <h5 className="text-center ">OR</h5>
                            </FormGroup>
                            <FormGroup>
                                <Button outline color="info" size="lg" block>
                                <i className="fa fa-google"></i> Đăng nhập bằng Google  
                                    </Button>{' '}
                            </FormGroup>
                            <FormGroup>
                                <hr></hr>
                            </FormGroup>
                            <FormGroup>
                                <div className="text-center">
                                    <Link to="sigup" className="text-primary link">Chưa có tài khoản ?</Link>
                                    <Link to="sigup" className="text-primary ml-3 link">Đăng Ký tài Khoản</Link>
                                </div>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col sm="4" className="images">
                        <img src={images2} alt="Hình Ảnh" />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Login;