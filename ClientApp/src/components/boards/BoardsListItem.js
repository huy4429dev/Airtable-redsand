import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
class BoardsListItem extends Component {

    render() {
        var { project } = this.props;
        return (
                <Col sm="3 mr-5">
                    <Link to="/detailt" className="link">
                        <div style={{ backgroundImage: `url('https://localhost:5001/Resources/images/${project.thumb}')`,
                        backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat' }} 
                        className="mt-3 mb-3 text-dark item-recently">
                            <h5 className="ml-3 text-white">{project.name}</h5>
                        </div>
                    </Link>
                </Col>
           
              
        );
    }
}

export default BoardsListItem;