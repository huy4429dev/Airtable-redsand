import React, { Component } from 'react';
import { Form, FormGroup, Button } from 'reactstrap';
import images1 from './../../assets/images/info.png';
class Infomation extends Component {
    handleHideFormUser = () => {
        this.props.onClick();
    }
    render() {
        return (
            // <div className="form-filter-information">
                <Form className="header-form-second">
                    <FormGroup className="d-flex align-items-center justify-content-between mt-2">
                        <span className="header-form-top">Information</span>
                        <i onClick={this.handleHideFormUser} className="fa fa-close mr-2"></i>
                    </FormGroup>
                    <hr className="hr"></hr>
                    <Button outline color="light border border-0 text-left text-dark" block><img className="infomation-img" src={images1} alt="hinh anh"></img></Button>
                    <Button outline color="light border border-0 text-left text-dark" block><h5 className="text-center">Make Boards More Powerful With Project Power-Ups</h5></Button>{' '}
                    <Button outline color="light border border-0 text-left text-dark text-center mb-3" block>Get a new tip</Button>{' '}
                </Form>
            // </div>
        );
    }
}

export default Infomation;