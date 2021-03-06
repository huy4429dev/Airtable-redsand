import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actAddRecentlyRequest } from './../../actions/board'
class BoardsListItem extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            userId: '',
            projectId: ''
        }
    }

    editRecently = () => {
        var project = this.props.project;
        var userId = localStorage.userId;
        var projectId = project.id;
        var projectRecently = {
            userId: userId,
            projectId: projectId
        }
        this.props.onAddRecently(projectRecently);        
    }
    render() {
        var { project } = this.props;
        return (
            <Col sm="3 mr-5">
                <Link to="/detailt" className="link">
                    <div onClick={this.editRecently} style={{
                        backgroundImage: `url('https://localhost:5001/Resources/images/${project.thumb}')`,
                        backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
                    }}
                        className="mt-3 mb-3 text-dark item-recently">
                        <h5 className="ml-3 text-white">{project.name}</h5>
                    </div>
                </Link>
            </Col>
        );
    }
}
const mapDispatchToProps = (dispatch, porps) => {
    return {
        onAddRecently: (projectRecently) => {
            dispatch(actAddRecentlyRequest(projectRecently))
        }
    }
}
export default connect(null, mapDispatchToProps)(BoardsListItem);