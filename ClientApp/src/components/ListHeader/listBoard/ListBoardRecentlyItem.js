import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
class ListBoardRecentlyItem extends Component {
    render() {
        var projectRecently = this.props.projectRecently;
        return (
            <Col sm="12 mt-1">
                <Link to={`/detailt/${projectRecently.projectId}.html`} className="link">
                    <div className="mt-3 mb-3 text-white item-recently " style={{
                        backgroundImage: `url('https://localhost:5001/Resources/images/${projectRecently.thumb}')`,
                        backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',height:'100%'
                    }} >
                        <span className="">{projectRecently.name}</span>
                    </div>
                </Link>
            </Col>
        );
    }
}

export default ListBoardRecentlyItem;