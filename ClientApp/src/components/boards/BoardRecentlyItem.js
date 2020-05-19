import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
class BoardRecentlyItem extends Component {

    render() {
        var projectRecently = this.props.projectRecently;
        return (

            <Col sm="3 mr-5">
                <Link to={`/detailt/${projectRecently.id}.html`} className="link">
                    <div className="mt-3 mb-3 text-white item-recently " style={{
                        backgroundImage: `url('https://localhost:5001/Resources/images/${projectRecently.thumb}')`,
                        backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
                    }} >
                        <span className="ml-3">{projectRecently.name}</span>
                    </div>
                </Link>
            </Col>

        );
    }
}

export default BoardRecentlyItem;