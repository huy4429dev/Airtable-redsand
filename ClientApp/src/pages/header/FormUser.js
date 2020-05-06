import React, { Component } from 'react';
import { Form, FormGroup, Button } from 'reactstrap';
class FormUser extends Component {
    handleHideFormUser=()=>{
        this.props.onClick();
    }
    render() {
        return (
            <Form className="header-form">
                <FormGroup className="d-flex align-items-center justify-content-between mt-2">
                    <span className="header-form-top">Văn Hà</span>
                    <i onClick={this.handleHideFormUser} className="fa fa-close mr-2"></i>
                </FormGroup>
                <hr className="hr"></hr>
                <Button outline color="light border border-0 text-left text-dark" block>Profile and Visibility</Button>
                <Button outline color="light border border-0 text-left text-dark" block>Activity</Button>{' '}
                <Button outline color="light border border-0 text-left text-dark" block>Cards</Button>{' '}
                <hr className="hr"></hr>
                <Button outline color="light border border-0 text-left text-dark" block>Settings</Button>{' '}
                <Button outline color="light border border-0 text-left text-dark" block>Help</Button>{' '}
                <hr className="hr"></hr>
                <Button outline color="light border border-0 text-left text-dark mb-3" block>Log Out</Button>{' '}
            </Form>
        );
    }
}

export default FormUser;