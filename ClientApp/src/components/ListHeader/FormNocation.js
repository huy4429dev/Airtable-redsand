import React, { Component } from 'react';
import { UncontrolledCollapse,FormGroup,Form, Button,Label } from 'reactstrap';
class FormNocation extends Component {
    handleShowFormNocation=()=>{
        this.props.onClick();
    }
    render() {
        return (
            <Form className="header-form-second form-nacation">
                <FormGroup className="d-flex align-items-center justify-content-between mt-2">
                    <span className="header-form-top">Notifications</span>
                    <i onClick={this.handleShowFormNocation} className="fa fa-close mr-2"></i>
                </FormGroup>
                <hr className="hr"></hr>
                <FormGroup className="nocation-button-top">
                    <Button outline color="light border border-0 text-left text-dark" block>Profile and Visibility</Button>
                    <Label className="lable-top ml-3">Name Project</Label>
                </FormGroup>
                <FormGroup className="mb-0">
                    <div className="toggler-nocation">

                        <Label className="show-lable" color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
                            <i class='fas fa-angle-down mr-1'></i>
                                Show Previous Card Activity
                                </Label>
                        <UncontrolledCollapse toggler="#toggler">

                            <FormGroup>
                                <FormGroup className="d-flex mb-0">
                                    <div className="user mr-2 text-center ml-2">VH</div>
                                    <h5 className="mb-0 mt-1">Văn Hà</h5>
                                </FormGroup>
                                <FormGroup>
                                    <Label><i class='fas fa-angle-right ml-4 mr-2'></i>Nội dung</Label>
                                </FormGroup>
                                <FormGroup className="d-flex mb-0">
                                    <div className="user mr-2 text-center ml-2">VH</div>
                                    <h5 className="mb-0 mt-1">Văn Hà</h5>
                                </FormGroup>
                                <FormGroup>
                                    <Label><i class='fas fa-angle-right ml-4 mr-2'></i>Nội dung</Label>
                                </FormGroup>
                            </FormGroup>

                        </UncontrolledCollapse>
                    </div>
                </FormGroup>
                <FormGroup className="d-flex mb-0">
                    <div className="user mr-2 text-center ml-2">VH</div>
                    <h5 className="mb-0 mt-1">Văn Hà</h5>
                </FormGroup>
                <FormGroup>
                    <Label><i class='fas fa-angle-right ml-4 mr-2'></i>Nội dung</Label>
                </FormGroup>
                <FormGroup className="d-flex mb-0">
                    <div className="user mr-2 text-center ml-2">VH</div>
                    <h5 className="mb-0 mt-1">Văn Hà</h5>
                </FormGroup>
                <FormGroup>
                    <Label><i class='fas fa-angle-right ml-4 mr-2'></i>Nội dung</Label>
                </FormGroup>
                <FormGroup className="d-flex mb-0">
                    <div className="user mr-2 text-center ml-2">VH</div>
                    <h5 className="mb-0 mt-1">Văn Hà</h5>
                </FormGroup>
                <FormGroup>
                    <Label><i class='fas fa-angle-right ml-4 mr-2'></i>Nội dung</Label>
                </FormGroup>
            </Form>

        );
    }
}

export default FormNocation;