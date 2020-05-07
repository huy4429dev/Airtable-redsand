import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Button, Label } from 'reactstrap';
class HeaderPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isActive: false,
            isActiveNocation: false
        }
    }
    handleShowFormUser = () => {
        this.setState({
            isActive: true
        })
    }
    handleHideFormUser = () => {
        this.setState({
            isActive: false
        })
    }

    handleShowFormNocation = () => {
        this.setState({
            isActiveNocation: true
        })
    }
    handleHideFormNocation = () => {
        this.setState({
            isActiveNocation: false
        })
    }


    render() {
        return (
            <React.Fragment>
                <div className="header">
                    <div className="header-left">
                        <Button className="ml-2 header__btn" ><i className='fas fa-th'></i></Button>{' '}
                        <Link to="/boards"><Button className="ml-1  header__btn" ><i className='fas fa-home'></i></Button></Link>
                        <Button className="ml-1 d-flex align-items-center  header__btn" ><i className="material-icons">dashboard</i>Boards</Button>{' '}

                        <div>
                            <div className="searchbar">
                                <input className="search_input" type="text" name="" placeholder="Search..." />
                                <a href="/to" className="search_icon"><i className="fas fa-search"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="header-right">
                        <Button className=" header__btn d-flex align-items-center" ><i className="material-icons">add</i></Button>{' '}
                        <Button className="ml-1  header__btn" ><i className="fas fa-exclamation-circle"></i></Button>{' '}
                        <Button onClick={this.handleShowFormNocation} className="ml-1 mr-1  header__btn"  ><i className='far fa-bell'></i></Button>{' '}
                        <div onClick={this.handleShowFormUser} className="user mr-2 text-center">VH</div>
                    </div>

                </div>
                {/* start form user */}
                {this.state.isActive ?
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
                    : null}
                {/* end form user */}
                {/* start form nocation */}
                {this.state.isActiveNocation ?
                    <Form className="header-form">
                        <FormGroup className="d-flex align-items-center justify-content-between mt-2">
                            <span className="header-form-top">Notifications</span>
                            <i onClick={this.handleHideFormNocation} className="fa fa-close mr-2"></i>
                        </FormGroup>
                        <hr className="hr"></hr>
                        <FormGroup>
                            <Button outline color="light border border-0 text-left text-dark" block>Profile and Visibility</Button>
                            <Label className="ml-3">Project</Label>
                            
                        </FormGroup>
                    </Form>

                    : null}

                {/* end form nocation */}
            </React.Fragment>
        );
    }

}

export default HeaderPage;