import React, { Component } from 'react';
import { Form, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
class FormUser extends Component {
    handleHideFormUser=()=>{
        this.props.onClick();
    }
    logout=(e)=>{
        e.preventDefault();
        localStorage.clear();
        window.location.href='/';
    }
    render() {
        const {project_profile}=this.props;
        var userName = project_profile.userName;
        if(userName){
           
           var name = userName.toUpperCase();
        }
        return (
            // <div className="form-filter-information">
            <Form className="header-form">
                <FormGroup className="d-flex align-items-center justify-content-between mt-2">
        <span className="header-form-top">{name}</span>
                    <i onClick={this.handleHideFormUser} className="form-list-board-right fa fa-close"></i>
                </FormGroup>
                <hr className="hr"></hr>
                <Button  outline color="light border border-0 text-left text-dark" block><Link className="link text-dark" to = '/profile' >Profile and Visibility</Link></Button>
                <Button outline color="light border border-0 text-left text-dark" block>Activity</Button>{' '}
                <Button outline color="light border border-0 text-left text-dark" block>Cards</Button>{' '}
                <hr className="hr"></hr>
                <Button outline color="light border border-0 text-left text-dark" block>Settings</Button>{' '}
                <Button outline color="light border border-0 text-left text-dark" block>Help</Button>{' '}
                <hr className="hr"></hr>
                <Button onClick={this.logout} outline color="light border border-0 text-left text-dark mb-3" block>Log Out</Button>{' '}
            </Form>
            //  </div>
        );
    }
}

export default FormUser;