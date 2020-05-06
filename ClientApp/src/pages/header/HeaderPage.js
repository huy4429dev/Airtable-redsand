import React, { Component } from 'react';
import './style.css';
import { Button } from 'reactstrap';
import Boards from '../../components/boards/Boards';
import FormUser from './FormUser';
import FormNocation from './FormNocation';
import Infomation from './Infomation';
import FormCreate from './FormCreate';
class HeaderPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isActive: false,
            isActiveNocation: false,
            isActiveInfomation:false,
            isActiveCreate:false
        }
    }
    handleShowFormUser = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }
    handleShowFormNocation = () => {
        this.setState({
            isActiveNocation: !this.state.isActiveNocation
        })
    }
    handleShowFormInfomation=()=>{
        this.setState({
            isActiveInfomation:!this.state.isActiveInfomation
        })
    }

    handleShowFormCreate=()=>{
        this.setState({
            isActiveCreate:!this.state.isActiveCreate
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="header">
                    <div className="header-left">
                        <Button className="ml-2" color="info"><i className='fas fa-th'></i></Button>{' '}
                        <Button onClick={this.home} className="ml-1" color="info"><i className='fas fa-home'></i></Button>{' '}
                        <Button className="ml-1 d-flex align-items-center" color="info"><i className="material-icons">dashboard</i>Boards</Button>{' '}
                        <div>
                            <div className="searchbar">
                                <input className="search_input" type="text" name="" placeholder="Search..." />
                                <a href="/to" className="search_icon"><i className="fas fa-search"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="header-right">
                        <Button onClick={this.handleShowFormCreate} className=" d-flex align-items-center" color="info"><i className="material-icons">add</i></Button>{' '}
                        <Button onClick={this.handleShowFormInfomation} className="ml-1" color="info"><i className="fas fa-exclamation-circle"></i></Button>{' '}
                        <Button onClick={this.handleShowFormNocation} className="ml-1 mr-1" color="info"><i className='far fa-bell'></i></Button>{' '}
                        <div onClick={this.handleShowFormUser} className="user mr-2 text-center">VH</div>
                    </div>

                </div>
                {this.state.isActive ?
                    <FormUser onClick={this.handleShowFormUser} />
                    : null}
                {this.state.isActiveNocation ?
                    <FormNocation onClick={this.handleShowFormNocation} />
                    : null}
       
                {this.state.isActiveInfomation?
                    <Infomation onClick={this.handleShowFormInfomation}/>
                    :null
                }

                {this.state.isActiveCreate?
                    <FormCreate onClick={this.handleShowFormCreate}/>
                    :null
                }
                {/* <Boards /> */}
            </React.Fragment>
        );
    }

}

export default HeaderPage;