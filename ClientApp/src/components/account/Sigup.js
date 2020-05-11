import React, { Component } from 'react';
import './style.css';
import { Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import images1 from './../../assets/images/image1.png';
import images2 from './../../assets/images/image2.png';
import {Link} from 'react-router-dom';
import * as actions from './../../actions/user';
import connect from './../../lib/connect';


class Sigup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: null,
            userName: null,
            password : null,
            passwordNew: null,
            errorPasswordNew:null,
            errorEmail:null,
            errorPassword:null,
        }
    }
    handleChangeInput = (e) =>{
        const {target} = e;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name] : value
        });
        const user = {
            email : this.state.email,
            userName : this.state.userName,
            password : this.state.password
        }
    }
    handleSiginUser = (e)=>{
        e.preventDefault();
        const { email, userName, password} = this.state;
        const { siginUser } = this.props.actions;
        const regexEmail = /[a-z0-9._%+-]{1,63}@[a-z0-9-]{2,63}(.([a-z0-9-]{2,63})){1,3}/img;
        const regexPassword = /[a-z0-9._%+-]{6}/img;
        const user = {
            email : email,
            userName : userName,
            password : password
        }
        if( !regexEmail.test(email)|| email === ''){
            this.setState({
                errorEmail : 'Email error'
            })
            return;
        }
        else if( !regexPassword.test(password)|| password === ''){
            this.setState({
                errorPassword : 'Password error'
            })
            return;
        }
        else if( this.state.password !== this.state.passwordNew ){
            this.setState({
                errorPasswordNew: 'password same not match'  
            })
            return;
        }else{
            siginUser(user);
        }
    }

    render() {
        const { errorEmail, userName, errorPassword, errorPasswordNew} = this.state;
        return (
            <div className="wrapper">
                <Row>
                    <Col xs="6" sm="4" className="images">
                        <img src={images1} alt="Hình Ảnh" />
                    </Col>
                    <Col xs="6" sm="4" className="form-log pl-5 pr-5">
                        <Form onSubmit={ this.handleSiginUser }>
                            <FormGroup>
                                <h3  className="text-center form-header">Đăng Ký Tài Khoản</h3>
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" name="email" bssize="lg" placeholder="Email" onChange={this.handleChangeInput} />
                                <p className="text-danger">{errorEmail}</p>
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" name="userName" bssize="lg" placeholder="Tên Đăng Nhập" onChange={this.handleChangeInput} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" name="password" bssize="lg" placeholder="Mật Khẩu"onChange={this.handleChangeInput} />
                                <p className="text-danger">{errorPassword}</p>
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" name="passwordNew"  bssize="lg" placeholder="Nhập lại mật khẩu" onChange={this.handleChangeInput}/>
                                <p className="text-danger">{errorPasswordNew}</p>
                            </FormGroup>
                            <FormGroup>
                                <Button color="success" bssize="lg" block>Đăng Ký</Button>
                            </FormGroup>
                        </Form>
                        <FormGroup>
                                <div className="text-center">
                                    <Link to="login" className="text-primary link">Đã có tài Khoản</Link>
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

export default (connect(Sigup, state => (
    {
        
    }
    ),actions));