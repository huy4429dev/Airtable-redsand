import React, { Component } from 'react';
import { Form, FormGroup, Button } from 'reactstrap';
class FormCreate extends Component {
    handleShowFormCreate=()=>{
        this.props.onClick();
    }
    render() {
        return (
            <Form className="header-form">
                <FormGroup className="d-flex align-items-center justify-content-between mt-2">
                    <span className="header-form-top">Create</span>
                    <i onClick={this.handleShowFormCreate} className="fa fa-close mr-2"></i>
                </FormGroup>

                <hr className="hr"></hr>
                <Button outline color="light border border-0 text-left text-dark" block>
                    <FormGroup className="d-flex align-items-center mb-0">
                        <i className="text-dark material-icons mr-2">dashboard</i>
                        Create Board...
                    </FormGroup>
                    <span className="form-create-span">A board is made up of ordered on list. Use it to manager projects, track information, or organize anything.</span>
                </Button>

                <Button outline color="light border border-0 text-left text-dark" block>
                    <FormGroup className="d-flex align-items-center mb-0">
                        <i className='fas fa-user-friends mr-2'></i>
                        Create Team...
                </FormGroup>
                    <span className="form-create-span">A team is a group of boards and people. Use it to organize your company, side hustle, family, or friend</span>
                </Button>{' '}

                <Button outline color="light border border-0 text-left text-dark" block>
                    <FormGroup className="d-flex align-items-center mb-0">
                        <i className="material-icons mr-2 text-dark">business</i>
                        Create Business team...
                    </FormGroup>
                    <span className="form-create-span">With Business Class your tean has more security, administrative controls, and unlimited Power-Ups.</span>
                </Button>{' '}
            </Form>
        );
    }
}

export default FormCreate;