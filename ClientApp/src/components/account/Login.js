import React, { Component } from 'react';
import './style.css';
import { Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import images1 from './../../assets/images/image1.png';
import images2 from './../../assets/images/image2.png';
import { Link ,Redirect} from "react-router-dom"
import * as actions from './../../actions/user';
import connect from './../../lib/connect';


class Login extends Component {
    constructor(props) {
        super(props);
        const token =  localStorage.token;
        const login = token ? true : false;
        this.state = {
            login : login,
            userName: null,
            password: null
        }
    }
    handleChangeInput = (e) => {
        const { target } = e;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }
    hadleLoginUser = (e) => {
        e.preventDefault();
        const { userName , password } = this.state;
        const { loginUser } = this.props.actions;
        const user = {
            userName : userName,
            password : password
        }
        loginUser(user);
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.login){
            this.setState({
                login  :true
            })
        }
    }
    render() {
        if( this.state.login){
            return <Redirect to ="/boards"/>
        }
        return (
            <div className="wrapper">
                <Row>
                    <Col xs="6" sm="4" className="images">
                        <img src={images1} alt="Hình Ảnh" />
                    </Col>
                    <Col xs="6" sm="4" className="form-log pl-5 pr-5">
                        <Form onSubmit={this.hadleLoginUser}>
                            <FormGroup>
                                <h3 className="text-center form-header">Đăng Nhập</h3>
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" name="userName" bssize="lg" onChange={this.handleChangeInput} placeholder="Tên Đăng Nhập" />
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" name="password" onChange={this.handleChangeInput} bssize="lg" placeholder="Mật Khẩu" />
                            </FormGroup>
                            <FormGroup>
                                <Button className="btn-login" color="success" type="submit" bssize="lg" block>Đăng Nhập</Button>
                            </FormGroup>
                        </Form>
                        <FormGroup>
                            <h5 className="text-center ">OR</h5>
                        </FormGroup>
                        <FormGroup>
                            <Button outline color="info" bssize="lg" block>
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
                    </Col>
                    <Col sm="4" className="images">
                        <img src={images2} alt="Hình Ảnh" />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default (connect(Login, state => (
    {
        login : state.userReducer.login
    }
    ),actions));