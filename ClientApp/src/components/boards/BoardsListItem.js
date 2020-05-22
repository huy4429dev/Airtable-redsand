import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { actAddRecentlyRequest } from './../../actions/board'
import * as actions from './../../actions/board';
import connect from '../../lib/connect';
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
        const {actAddRecentlyRequest}=this.props.actions;
        var projectRecently = {
            userId: userId,
            projectId: projectId
        }
        actAddRecentlyRequest(projectRecently)
    }
    render() {
        var { project } = this.props;
        return (
            <Col lg="3">
                <Link to={`/detailt/${project.id}.html`} className="link">
                
                    <div onClick={this.editRecently}  style={{
                        backgroundImage: `url('https://localhost:5001/Resources/images/${project.thumb}')`,
                        backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',borderRadius:'8px'
                    }}
                        className="mt-3 mb-3 text-dark item-recently">
                        <h5 className="ml-3 text-white">{project.name}</h5>
                    </div>
                </Link>
            </Col>
        );
    }
}
export default (connect(BoardsListItem,state =>(
    {
        projectRecently:state.boardReducer.projectRecently
    }
),actions))