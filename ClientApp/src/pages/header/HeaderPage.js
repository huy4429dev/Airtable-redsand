import React, { Component } from 'react';
import './style.css';
import { Button } from 'reactstrap';
class HeaderPage extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-left">
                    <Button className="ml-2" color="info"><i className='fas fa-th'></i></Button>{' '}
                    <Button className="ml-1" color="info"><i className='fas fa-home'></i></Button>{' '}
                    <Button className="ml-1 d-flex align-items-center" color="info"><i className="material-icons">dashboard</i>Boards</Button>{' '}

                    <div>
                        <div className="searchbar">
                            <input className="search_input" type="text" name="" placeholder="Search..." />
                            <a href="#" className="search_icon"><i className="fas fa-search"></i></a>
                        </div>
                    </div>
                </div>
                <div className="header-right">
                    <Button className=" d-flex align-items-center" color="info"><i className="material-icons">add</i></Button>{' '}
                    <Button className="ml-1" color="info"><i className="fas fa-exclamation-circle"></i></Button>{' '}
                    <Button className="ml-1 mr-1" color="info"><i className='far fa-bell'></i></Button>{' '}
                    <div className="user mr-2 text-center">VH</div>
                </div>
            </div>
        );
    }
}

export default HeaderPage;