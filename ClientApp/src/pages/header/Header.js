import React, { Component } from 'react';
import './style.css';
import { Button } from 'reactstrap';
import FormUser from './../../components/ListHeader/FormUser';
import FormNocation from './../../components/ListHeader/FormNocation';
import Infomation from './../../components/ListHeader/Infomation';
import FormCreate from './../../components/ListHeader/FormCreate';
import * as actions from './../../actions/header';
import connect from './../../lib/connect';
import { Link } from 'react-router-dom';
import Boards from '../boards/Boards';
import ListBoard from '../../components/ListHeader/listBoard/ListBoard';
// import Table from '../../components/ListHeader/Table';

class HeaderPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isActive: false,
            isActiveNocation: false,
            isActiveInfomation: false,
            isActiveCreate: false,
            isActiveListBoard: false,
            noidungsearch: '',
            project_profile: []
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
    handleShowFormInfomation = () => {
        this.setState({
            isActiveInfomation: !this.state.isActiveInfomation
        })
    }

    handleShowFormCreate = () => {
        this.setState({
            isActiveCreate: !this.state.isActiveCreate
        })
    }

    search = (e) => {
        this.setState({
            noidungsearch: e.target.value
        })
    }
    HandFormListBoard = () => {
        this.setState({
            isActiveListBoard: !this.state.isActiveListBoard
        })
    }

    componentWillMount() {
        const { FectProfile } = this.props.actions;
        const { project_profile } = this.props;
        const userId = localStorage.userId;
        FectProfile(userId);
        if (project_profile !== []) {
            this.setState({
                project_profile: project_profile
            })
        }
    }

    render() {
        var search = this.state.noidungsearch;
        var { project_profile } = this.props;
        var userName = project_profile.userName;
        if(userName){
            var name = userName.slice(0,1);
            name = name.toUpperCase();
        }
        return (
            <React.Fragment>
                <div className="header">
                    <div className="header-left">
                        <Button className="ml-2" color="info"><i className='fas fa-th'></i></Button>
                        <Button className="ml-1" color="info"><Link className="text-white" to='/home'><i className='fas fa-home'></i>  </Link></Button>

                        <Button onClick={this.HandFormListBoard} className="ml-1 d-flex align-items-center" color="info"><i className="material-icons">dashboard</i>Boards</Button>{' '}
                        <div>
                            <div className="searchbar">
                                <input onChange={(e) => this.search(e)} className="search_input" type="text" name="" placeholder="Search..." />
                                <a href="/to" className="search_icon"><i className="fas fa-search"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="header-right">
                        <Button onClick={this.handleShowFormCreate} className=" d-flex align-items-center" color="info"><i className="material-icons">add</i></Button>{' '}
                        <Button onClick={this.handleShowFormInfomation} className="ml-1" color="info"><i className="fas fa-exclamation-circle"></i></Button>{' '}
                        <Button onClick={this.handleShowFormNocation} className="ml-1 mr-1" color="info"><i className='far fa-bell'></i></Button>{' '}
                        <div onClick={this.handleShowFormUser} className="user mr-2 text-center">
                            {name}
                        </div>
                    </div>

                </div>
                {this.state.isActive ?
                    <FormUser onClick={this.handleShowFormUser}
                        project_profile={project_profile}
                    />
                       
                    : null}
                {this.state.isActiveNocation ?
                    <FormNocation onClick={this.handleShowFormNocation} />
                    : null}

                {this.state.isActiveInfomation ?
                    <Infomation onClick={this.handleShowFormInfomation} />
                    : null
                }

                {this.state.isActiveCreate ?
                    <FormCreate onClick={this.handleShowFormCreate} />
                    : null
                }
                {this.state.isActiveListBoard ?
                    <ListBoard onClick={this.HandFormListBoard} />

                    : null

                }
               
            </React.Fragment>
        );
    }

}

export default (connect(HeaderPage, state => (
    {
        showModalAddProject: state.headerReducer.showModalAddProject,
        project_profile: state.headerReducer.project_profile
    }
), actions));